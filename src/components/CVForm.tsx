import React from 'react';
import { PlusIcon, Trash2Icon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FloatingInput } from './ui/FloatingInput';
import { CVData, Experience, Education } from '../types/cv';
interface CVFormProps {
  data: CVData;
  actions: {
    updatePersonal: (field: keyof CVData['personal'], value: string) => void;
    addExperience: () => void;
    updateExperience: (id: string, field: keyof Experience, value: string) => void;
    removeExperience: (id: string) => void;
    addEducation: () => void;
    updateEducation: (id: string, field: keyof Education, value: string) => void;
    removeEducation: (id: string) => void;
    updateSkills: (value: string) => void;
  };
}
export function CVForm({
  data,
  actions
}: CVFormProps) {
  return <div className="w-full max-w-3xl mx-auto space-y-16 pb-20">
      {/* Personal Info Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-light text-slate-900 tracking-tight">
          Personal Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FloatingInput label="Full Name" value={data.personal.fullName} onChange={e => actions.updatePersonal('fullName', e.target.value)} />
          <FloatingInput label="Job Title" value={data.personal.title} onChange={e => actions.updatePersonal('title', e.target.value)} />
          <FloatingInput label="Email" type="email" value={data.personal.email} onChange={e => actions.updatePersonal('email', e.target.value)} />
          <FloatingInput label="Phone" type="tel" value={data.personal.phone} onChange={e => actions.updatePersonal('phone', e.target.value)} />
          <FloatingInput label="Location" value={data.personal.location} onChange={e => actions.updatePersonal('location', e.target.value)} className="md:col-span-2" />
          <FloatingInput label="Professional Summary" textarea value={data.personal.summary} onChange={e => actions.updatePersonal('summary', e.target.value)} className="md:col-span-2" />
        </div>
      </section>

      {/* Experience Section */}
      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-light text-slate-900 tracking-tight">
            Experience
          </h2>
          <button onClick={actions.addExperience} className="flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 px-4 py-2 rounded-full transition-colors">
            <PlusIcon size={16} />
            Add Role
          </button>
        </div>

        <div className="space-y-8">
          <AnimatePresence mode="popLayout">
            {data.experience.map((exp, index) => <motion.div key={exp.id} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} exit={{
            opacity: 0,
            scale: 0.95
          }} className="relative p-6 bg-white border border-slate-100 rounded-xl shadow-sm space-y-6 group">
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button onClick={() => actions.removeExperience(exp.id)} className="text-slate-400 hover:text-red-500 p-2 transition-colors" aria-label="Remove experience">
                    <Trash2Icon size={18} />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FloatingInput label="Role" value={exp.role} onChange={e => actions.updateExperience(exp.id, 'role', e.target.value)} />
                  <FloatingInput label="Company" value={exp.company} onChange={e => actions.updateExperience(exp.id, 'company', e.target.value)} />
                  <FloatingInput label="Start Date" value={exp.startDate} onChange={e => actions.updateExperience(exp.id, 'startDate', e.target.value)} />
                  <FloatingInput label="End Date" value={exp.endDate} onChange={e => actions.updateExperience(exp.id, 'endDate', e.target.value)} />
                  <FloatingInput label="Description" textarea value={exp.description} onChange={e => actions.updateExperience(exp.id, 'description', e.target.value)} className="md:col-span-2" />
                </div>
              </motion.div>)}
          </AnimatePresence>
        </div>
      </section>

      {/* Education Section */}
      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-light text-slate-900 tracking-tight">
            Education
          </h2>
          <button onClick={actions.addEducation} className="flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 px-4 py-2 rounded-full transition-colors">
            <PlusIcon size={16} />
            Add Education
          </button>
        </div>

        <div className="space-y-8">
          <AnimatePresence mode="popLayout">
            {data.education.map(edu => <motion.div key={edu.id} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} exit={{
            opacity: 0,
            scale: 0.95
          }} className="relative p-6 bg-white border border-slate-100 rounded-xl shadow-sm space-y-6 group">
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button onClick={() => actions.removeEducation(edu.id)} className="text-slate-400 hover:text-red-500 p-2 transition-colors" aria-label="Remove education">
                    <Trash2Icon size={18} />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FloatingInput label="Degree" value={edu.degree} onChange={e => actions.updateEducation(edu.id, 'degree', e.target.value)} />
                  <FloatingInput label="School" value={edu.school} onChange={e => actions.updateEducation(edu.id, 'school', e.target.value)} />
                  <FloatingInput label="Year" value={edu.year} onChange={e => actions.updateEducation(edu.id, 'year', e.target.value)} className="md:col-span-2" />
                </div>
              </motion.div>)}
          </AnimatePresence>
        </div>
      </section>

      {/* Skills Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-light text-slate-900 tracking-tight">
          Skills
        </h2>
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
          <FloatingInput label="Skills (comma separated)" value={data.skills.join(', ')} onChange={e => actions.updateSkills(e.target.value)} textarea className="bg-transparent" />
          <div className="mt-4 flex flex-wrap gap-2">
            {data.skills.map((skill, i) => <span key={i} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-sm text-slate-600">
                {skill}
              </span>)}
          </div>
        </div>
      </section>
    </div>;
}