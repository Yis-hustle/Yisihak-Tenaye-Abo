
import React from 'react';
import { Star, BookOpen, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';
import { Course, CourseCategory } from '../types';

interface CourseCardProps {
  course: Course;
  onEnroll: (id: string) => void;
  isPurchased?: boolean;
}

const getFeatures = (category: string) => {
  switch(category) {
    case 'Trading': return ['Live Trading Sessions', 'Risk Management Tools', 'Private Discord Access'];
    case 'Data Analysis': return ['Project Portfolio', 'Job Placement Help', 'Python/SQL Mastery'];
    case 'Freelancing': return ['Closing Scripts', 'Cold Outreach Vault', 'Scaling Framework'];
    default: return ['Lifetime Access', 'Certificate', 'Community Support'];
  }
};

export const CourseCard: React.FC<CourseCardProps> = ({ course, onEnroll, isPurchased }) => {
  const features = getFeatures(course.category);

  return (
    <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200 hover:shadow-[0_20px_60px_rgba(79,70,229,0.12)] transition-all duration-500 group flex flex-col h-full">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
        <div className="absolute top-6 left-6">
          <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-indigo-600 shadow-xl">
            {course.category}
          </span>
        </div>
        {isPurchased && (
          <div className="absolute top-6 right-6">
            <div className="bg-emerald-500 text-white px-3 py-1 rounded-full shadow-xl flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest">
              <Zap size={12} fill="currentColor" /> Active
            </div>
          </div>
        )}
        <div className="absolute bottom-6 left-6 right-6">
           <h3 className="text-2xl font-black text-white leading-tight drop-shadow-lg">
            {course.title}
          </h3>
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-1">
        <p className="text-slate-500 text-sm mb-6 font-medium leading-relaxed">
          {course.description}
        </p>

        <div className="space-y-3 mb-8">
          {features.map((f, i) => (
            <div key={i} className="flex items-center gap-2 text-xs font-bold text-slate-700">
              <CheckCircle2 size={14} className="text-emerald-500" />
              {f}
            </div>
          ))}
        </div>
        
        <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
          <div className="flex flex-col">
             <span className="text-[10px] uppercase font-black text-slate-400 tracking-widest">Lifetime Access</span>
             <span className="text-2xl font-black text-slate-900">${course.price}</span>
          </div>
          <button 
            onClick={() => onEnroll(course.id)}
            className={`px-6 py-4 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all active:scale-95 ${
              isPurchased 
              ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' 
              : 'bg-indigo-600 text-white hover:bg-slate-900 shadow-lg'
            }`}
          >
            {isPurchased ? 'Open Portal' : 'Enroll'}
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
