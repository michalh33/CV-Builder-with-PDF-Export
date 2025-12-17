import React from 'react';
import { useCVData } from '../hooks/useCVData';
import { CVForm } from '../components/CVForm';
import { CVPreview } from '../components/CVPreview';
export function CVBuilder() {
  const {
    data,
    ...actions
  } = useCVData();
  return <div className="min-h-screen bg-white">
      <div className="flex flex-col lg:flex-row h-screen overflow-hidden">
        {/* Left Side: Form (Scrollable) */}
        <div className="w-full lg:w-[60%] h-full overflow-y-auto bg-white">
          <div className="max-w-3xl mx-auto p-8 md:p-12 lg:p-16">
            <header className="mb-16 space-y-4">
              <div className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-semibold tracking-wide uppercase">
                CV Builder
              </div>
              <h1 className="text-4xl md:text-5xl font-light text-slate-900 tracking-tight">
                Create your{' '}
                <span className="font-serif italic text-indigo-600">
                  masterpiece
                </span>
                .
              </h1>
              <p className="text-lg text-slate-500 max-w-lg leading-relaxed">
                A minimalist, distraction-free environment to craft your
                professional story.
              </p>
            </header>

            <CVForm data={data} actions={actions} />
          </div>
        </div>

        {/* Right Side: Preview (Fixed/Scrollable independent) */}
        <div className="hidden lg:block w-[40%] h-full bg-slate-50 border-l border-slate-200 relative">
          <div className="absolute inset-0 overflow-y-auto custom-scrollbar">
            <CVPreview data={data} />
          </div>
        </div>

        {/* Mobile Preview Toggle (Optional enhancement for mobile) */}
        <div className="lg:hidden p-4 bg-slate-50 border-t border-slate-200">
          <p className="text-center text-sm text-slate-500">
            Preview available on desktop
          </p>
        </div>
      </div>
    </div>;
}