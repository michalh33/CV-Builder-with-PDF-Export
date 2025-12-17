import React from 'react';
interface FloatingInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  textarea?: boolean;
}
export function FloatingInput({
  label,
  textarea,
  className = '',
  ...props
}: FloatingInputProps) {
  const baseClasses = 'block px-4 pb-2.5 pt-5 w-full text-sm text-slate-900 bg-slate-50 border-0 border-b-2 border-slate-200 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 peer transition-colors duration-300 rounded-t-lg';
  return <div className={`relative z-0 w-full group ${className}`}>
      {textarea ? <textarea {...props as React.TextareaHTMLAttributes<HTMLTextAreaElement>} placeholder=" " className={`${baseClasses} min-h-[120px] resize-y`} /> : <input {...props} placeholder=" " className={baseClasses} />}
      <label className="absolute text-sm text-slate-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:text-indigo-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
        {label}
      </label>
    </div>;
}