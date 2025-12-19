import React from 'react';
import { motion } from 'framer-motion';
import { CVData } from '../types/cv';
// Forward ref so parent can capture the preview DOM for PDF export
import { MapPinIcon, MailIcon, PhoneIcon } from 'lucide-react';
interface CVPreviewProps {
  data: CVData;
}

export const CVPreview = React.forwardRef<HTMLDivElement, CVPreviewProps>(function CVPreview({
  data
}, ref) {
  return <motion.div ref={ref} initial={{
    opacity: 0,
    x: 50
  }} animate={{
    opacity: 1,
    x: 0
  }} transition={{
    duration: 0.6,
    ease: 'easeOut'
  }} className="bg-white h-full min-h-screen shadow-2xl overflow-y-auto">
      <div className="max-w-[210mm] mx-auto p-12 md:p-16 space-y-12">
        {/* Header */}
        <header className="space-y-6 border-b border-slate-100 pb-12">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              {data.personal.fullName || 'Your Name'}
            </h1>
            <p className="text-xl text-indigo-600 font-medium">
              {data.personal.title || 'Professional Title'}
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-slate-500">
            {data.personal.location && <div className="flex items-center gap-2">
                <MapPinIcon size={14} />
                <span>{data.personal.location}</span>
              </div>}
            {data.personal.email && <div className="flex items-center gap-2">
                <MailIcon size={14} />
                <span>{data.personal.email}</span>
              </div>}
            {data.personal.phone && <div className="flex items-center gap-2">
                <PhoneIcon size={14} />
                <span>{data.personal.phone}</span>
              </div>}
          </div>

          {data.personal.summary && <p className="text-slate-600 leading-relaxed max-w-2xl">
              {data.personal.summary}
            </p>}
        </header>

        {/* Experience */}
        {data.experience.length > 0 && <section className="space-y-6">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">
              Experience
            </h3>
            <div className="space-y-8">
              {data.experience.map(exp => <div key={exp.id} className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4">
                  <div className="text-sm text-slate-400 font-medium">
                    {exp.startDate} — {exp.endDate}
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-900 text-lg">
                      {exp.role}
                      <span className="text-slate-400 font-normal"> at </span>
                      <span className="text-indigo-600">{exp.company}</span>
                    </h4>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {exp.description}
                    </p>
                  </div>
                </div>)}
            </div>
          </section>}

        {/* Education */}
        {data.education.length > 0 && <section className="space-y-6">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">
              Education
            </h3>
            <div className="space-y-6">
              {data.education.map(edu => <div key={edu.id} className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4">
                  <div className="text-sm text-slate-400 font-medium">
                    {edu.year}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-lg">
                      {edu.school}
                    </h4>
                    <p className="text-slate-600">{edu.degree}</p>
                  </div>
                </div>)}
            </div>
          </section>}

        {/* Skills */}
        {data.skills.length > 0 && <section className="space-y-6">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">
              Skills
            </h3>
            <div className="flex flex-wrap gap-x-8 gap-y-2">
              {data.skills.map((skill, i) => <span key={i} className="text-slate-700 font-medium">
                  {skill}
                </span>)}
            </div>
          </section>}
      </div>
    </motion.div>;
});

CVPreview.displayName = 'CVPreview';