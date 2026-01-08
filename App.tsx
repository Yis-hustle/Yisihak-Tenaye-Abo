
import React, { useState } from 'react';
import { 
  TrendingUp, 
  BarChart3, 
  Briefcase, 
  ChevronRight, 
  Play, 
  Users, 
  Award, 
  CheckCircle2,
  Lock,
  Star,
  X,
  Sparkles,
  Zap,
  ShieldCheck,
  Globe,
  ArrowRight,
  ShieldEllipsis,
  CircleDashed,
  Quote
} from 'lucide-react';
import { COURSES, TESTIMONIALS } from './constants';
import { CourseCard } from './components/CourseCard';
import { AIAssistant } from './components/AIAssistant';
import { TradingChart } from './components/TradingChart';
import { ImageEditor } from './components/ImageEditor';

const App: React.FC = () => {
  const [purchased, setPurchased] = useState<string[]>([]);
  const [showPaymentModal, setShowPaymentModal] = useState<string | null>(null);
  const [brandImage, setBrandImage] = useState<string>("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop");
  const [showEditor, setShowEditor] = useState(false);

  const handleEnroll = (id: string) => {
    if (purchased.includes(id)) {
      alert("Opening course portal...");
    } else {
      setShowPaymentModal(id);
    }
  };

  const handlePayment = () => {
    if (showPaymentModal) {
      setPurchased(prev => [...prev, showPaymentModal]);
      setShowPaymentModal(null);
      alert("Welcome to the Community!");
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      {/* Dynamic Nav */}
      <nav className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-slate-900 rounded-xl overflow-hidden shadow-2xl relative group cursor-pointer" onClick={() => setShowEditor(true)}>
              <img src={brandImage} alt="Logo" className="w-full h-full object-cover transition-transform group-hover:scale-110" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-black tracking-tighter uppercase text-slate-900">Hustlers Community</span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-indigo-600">By Yisak Tenaye</span>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-10 text-[11px] font-black uppercase tracking-widest text-slate-500">
            <a href="#about" className="hover:text-indigo-600">The Method</a>
            <a href="#courses" className="hover:text-indigo-600">Curriculum</a>
            <a href="#testimonials" className="hover:text-indigo-600">Results</a>
            <button className="bg-slate-900 text-white px-6 py-3 rounded-full hover:bg-indigo-600 transition-all shadow-xl active:scale-95">
              Portal Login
            </button>
          </div>
        </div>
      </nav>

      {/* Hero: High Conversion Focus */}
      <section className="pt-32 pb-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-10 border border-indigo-100">
            <CircleDashed size={14} className="animate-spin" /> Next Cohort Starts July 1st
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-tight mb-8 tracking-tighter">
            Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-500">Wealth Stack.</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed mb-12">
            Master the three pillars of the modern economy: Systematic Trading, Data Intelligence, and High-Ticket Freelancing. Join 2,500+ professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="#courses" className="bg-indigo-600 text-white px-12 py-6 rounded-[2rem] font-black text-lg hover:bg-slate-900 transition-all shadow-2xl shadow-indigo-100 flex items-center justify-center gap-3">
              Explore The Curriculum <ArrowRight size={20} />
            </a>
            <div className="flex items-center gap-3 px-8">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-10 h-10 rounded-full border-2 border-white" alt="Member" />
                ))}
              </div>
              <div className="text-left">
                <div className="text-sm font-black text-slate-900">2.5k Members</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active Today</div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto relative px-4">
           <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50 group">
              <img src={brandImage} alt="Hustlers Community" className="w-full h-[600px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              <button onClick={() => setShowEditor(true)} className="absolute bottom-10 right-10 bg-white/20 backdrop-blur-xl text-white p-6 rounded-full hover:bg-indigo-600 transition-all">
                <Sparkles size={32} />
              </button>
           </div>
        </div>
      </section>

      {/* The Blueprint Section (etubers inspiration) */}
      <section id="about" className="py-32 px-6 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-600 mb-6 block">Our Methodology</span>
            <h2 className="text-5xl font-black text-slate-900 mb-8 leading-tight">The 3-Step Success <br/>Framework.</h2>
            <div className="space-y-12">
              {[
                { step: "01", title: "Skill Acquisition", desc: "Learn high-income skills (Trading or Data) via battle-tested curricula." },
                { step: "02", title: "The Sandbox", desc: "Apply skills to real-world datasets and paper trading under mentorship." },
                { step: "03", title: "Market Scaling", desc: "Go live. Use our freelancing scripts and risk models to secure your first $10k month." }
              ].map((item, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="text-4xl font-black text-indigo-200 group-hover:text-indigo-600 transition-colors leading-none">{item.step}</div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
             <div className="absolute inset-0 bg-indigo-500/10 blur-[100px] rounded-full"></div>
             <div className="relative bg-white p-10 rounded-[3rem] border border-slate-100 shadow-2xl">
                <TradingChart />
                <div className="mt-8 flex justify-between items-center px-4">
                   <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-black uppercase tracking-widest text-slate-400">Live Community ROI</span>
                   </div>
                   <span className="text-xl font-black text-emerald-600">+314%</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Wall of Fame (Social Proof) */}
      <section id="testimonials" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-slate-900 mb-6">Wall of Success</h2>
            <p className="text-slate-500 font-medium max-w-xl mx-auto">Real results from real members. We don't sell dreams; we sell skills.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:border-indigo-100 transition-all group">
                <Quote className="text-indigo-100 group-hover:text-indigo-400 transition-colors mb-6" size={48} />
                <p className="text-slate-700 font-medium italic mb-8 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.avatar} className="w-12 h-12 rounded-full object-cover" alt={t.name} />
                  <div>
                    <div className="font-black text-slate-900">{t.name}</div>
                    <div className="text-[10px] uppercase font-bold text-indigo-600">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Grid */}
      <section id="courses" className="py-32 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
            <div className="max-w-2xl">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-600 mb-6 block">Direct Access</span>
              <h2 className="text-5xl font-black text-slate-900 leading-tight">Pick Your Path to Independence.</h2>
            </div>
            <div className="bg-white px-8 py-4 rounded-full border border-slate-200 flex items-center gap-4 shadow-sm">
               <ShieldCheck className="text-indigo-600" />
               <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">100% Risk-Free Guarantee</span>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-10">
            {COURSES.map(course => (
              <CourseCard key={course.id} course={course} onEnroll={handleEnroll} isPurchased={purchased.includes(course.id)} />
            ))}
          </div>
        </div>
      </section>

      {/* Meet Yisak (Mentor Profile) */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 relative group">
             <div className="absolute -inset-4 bg-indigo-600/10 rounded-[3rem] blur-xl group-hover:bg-indigo-600/20 transition-all"></div>
             <img src={brandImage} className="relative rounded-[3rem] w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Yisak Tenaye" />
          </div>
          <div className="w-full md:w-1/2">
             <h2 className="text-4xl font-black text-slate-900 mb-6">Meet Your Mentor, <br/>Yisak Tenaye.</h2>
             <p className="text-lg text-slate-500 font-medium leading-relaxed mb-8">
               I've spent the last 8 years bridgeing the gap between data and finance. I don't just teach trading; I teach the statistical models behind it. I don't just teach freelancing; I teach the psychology of high-ticket closing.
             </p>
             <div className="grid grid-cols-2 gap-8">
                <div>
                   <div className="text-3xl font-black text-indigo-600 mb-1">$50M+</div>
                   <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">AUM Analyzed</div>
                </div>
                <div>
                   <div className="text-3xl font-black text-indigo-600 mb-1">10k+</div>
                   <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Trades Logged</div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-24 px-6 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-2">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-10 h-10 bg-indigo-600 rounded-xl overflow-hidden"><img src={brandImage} alt="Logo" /></div>
                <span className="text-2xl font-black tracking-tighter">Hustlers Community</span>
              </div>
              <p className="text-slate-400 font-medium max-w-sm mb-10 leading-relaxed">
                The most advanced educational platform for digital skills. We build independent thinkers, not just learners.
              </p>
              <div className="flex gap-6">
                 {[1,2,3,4].map(i => <div key={i} className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-indigo-600 transition-colors cursor-pointer border border-white/5"></div>)}
              </div>
            </div>
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-400 mb-8">Pathways</h4>
              <ul className="space-y-4 text-sm font-bold text-slate-500 uppercase tracking-widest">
                <li><a href="#" className="hover:text-white">Trading Mastery</a></li>
                <li><a href="#" className="hover:text-white">Data Intelligence</a></li>
                <li><a href="#" className="hover:text-white">Freelance Academy</a></li>
              </ul>
            </div>
            <div>
               <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-400 mb-8">Support</h4>
               <ul className="space-y-4 text-sm font-bold text-slate-500 uppercase tracking-widest">
                <li><a href="#" className="hover:text-white">Student Login</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black text-slate-600 uppercase tracking-widest">
            <p>© 2024 Hustlers Community. All rights reserved.</p>
            <div className="flex gap-10">
               <span>Not Affiliated with Meta/Google</span>
               <span>Earnings Disclaimer</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Payment Modal Refinement */}
      {showPaymentModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md" onClick={() => setShowPaymentModal(null)}></div>
          <div className="bg-white w-full max-w-lg rounded-[3rem] relative p-12 shadow-2xl animate-in zoom-in duration-300">
             <button onClick={() => setShowPaymentModal(null)} className="absolute top-8 right-8 text-slate-400 hover:text-slate-900"><X size={28} /></button>
             <div className="text-center mb-10">
                <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
                   <ShieldCheck size={40} />
                </div>
                <h3 className="text-3xl font-black text-slate-900">Secure Checkout</h3>
                <p className="text-slate-500 font-medium mt-2">Unlock lifetime access to {COURSES.find(c => c.id === showPaymentModal)?.title}</p>
             </div>
             <div className="space-y-6 mb-10">
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex justify-between items-center">
                   <div className="text-xs font-black uppercase tracking-widest text-slate-400">Grand Total</div>
                   <div className="text-4xl font-black text-slate-900">${COURSES.find(c => c.id === showPaymentModal)?.price}</div>
                </div>
                <div className="space-y-3">
                   {['Instant Access', 'Community Discord', 'Free Templates'].map((text, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm font-bold text-slate-600">
                         <CheckCircle2 size={16} className="text-emerald-500" /> {text}
                      </div>
                   ))}
                </div>
             </div>
             <button onClick={handlePayment} className="w-full bg-indigo-600 text-white py-6 rounded-2xl font-black text-lg hover:bg-slate-900 shadow-xl transition-all active:scale-95">
                Complete Enrollment
             </button>
             <div className="mt-8 flex items-center justify-center gap-4 grayscale opacity-40">
                <div className="w-10 h-6 bg-slate-200 rounded"></div>
                <div className="w-10 h-6 bg-slate-200 rounded"></div>
                <div className="w-10 h-6 bg-slate-200 rounded"></div>
             </div>
          </div>
        </div>
      )}

      {showEditor && (
        <section className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/95 backdrop-blur-xl p-6 flex items-center justify-center">
          <div className="max-w-4xl w-full">
            <div className="flex justify-between items-center mb-10">
               <h2 className="text-3xl font-black text-white">AI Studio</h2>
               <button onClick={() => setShowEditor(false)} className="text-white hover:text-indigo-400 transition-colors"><X size={32} /></button>
            </div>
            <ImageEditor currentImage={brandImage} onImageUpdate={(newUrl) => setBrandImage(newUrl)} />
          </div>
        </section>
      )}

      <AIAssistant />
    </div>
  );
};

export default App;
