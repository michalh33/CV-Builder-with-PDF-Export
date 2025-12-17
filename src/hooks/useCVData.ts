import { useState } from 'react';
import { CVData, Experience, Education } from '../types/cv';
const initialData: CVData = {
  personal: {
    fullName: 'Alex Morgan',
    title: 'Product Designer',
    email: 'alex@example.com',
    phone: '+1 (555) 0123-4567',
    location: 'San Francisco, CA',
    summary: 'Senior Product Designer with 5+ years of experience building accessible, human-centered digital products. Passionate about design systems and spacious, typographic layouts.'
  },
  experience: [{
    id: '1',
    role: 'Senior Product Designer',
    company: 'Linear',
    startDate: '2021',
    endDate: 'Present',
    description: 'Leading the design system initiative and core product features. Improved design team efficiency by 40% through new component library.'
  }, {
    id: '2',
    role: 'Product Designer',
    company: 'Notion',
    startDate: '2019',
    endDate: '2021',
    description: 'Designed key collaboration features and mobile interactions. Worked closely with engineering to implement pixel-perfect UI.'
  }],
  education: [{
    id: '1',
    degree: 'BFA in Interaction Design',
    school: 'California College of the Arts',
    year: '2019'
  }],
  skills: ['Figma', 'React', 'TypeScript', 'Design Systems', 'Prototyping', 'User Research']
};
export function useCVData() {
  const [data, setData] = useState<CVData>(initialData);
  const updatePersonal = (field: keyof CVData['personal'], value: string) => {
    setData(prev => ({
      ...prev,
      personal: {
        ...prev.personal,
        [field]: value
      }
    }));
  };
  const addExperience = () => {
    const newExp: Experience = {
      id: crypto.randomUUID(),
      role: '',
      company: '',
      startDate: '',
      endDate: '',
      description: ''
    };
    setData(prev => ({
      ...prev,
      experience: [...prev.experience, newExp]
    }));
  };
  const updateExperience = (id: string, field: keyof Experience, value: string) => {
    setData(prev => ({
      ...prev,
      experience: prev.experience.map(exp => exp.id === id ? {
        ...exp,
        [field]: value
      } : exp)
    }));
  };
  const removeExperience = (id: string) => {
    setData(prev => ({
      ...prev,
      experience: prev.experience.filter(exp => exp.id !== id)
    }));
  };
  const addEducation = () => {
    const newEdu: Education = {
      id: crypto.randomUUID(),
      degree: '',
      school: '',
      year: ''
    };
    setData(prev => ({
      ...prev,
      education: [...prev.education, newEdu]
    }));
  };
  const updateEducation = (id: string, field: keyof Education, value: string) => {
    setData(prev => ({
      ...prev,
      education: prev.education.map(edu => edu.id === id ? {
        ...edu,
        [field]: value
      } : edu)
    }));
  };
  const removeEducation = (id: string) => {
    setData(prev => ({
      ...prev,
      education: prev.education.filter(edu => edu.id !== id)
    }));
  };
  const updateSkills = (value: string) => {
    // Simple comma-separated string to array conversion for this demo
    setData(prev => ({
      ...prev,
      skills: value.split(',').map(s => s.trim()).filter(Boolean)
    }));
  };
  return {
    data,
    updatePersonal,
    addExperience,
    updateExperience,
    removeExperience,
    addEducation,
    updateEducation,
    removeEducation,
    updateSkills
  };
}