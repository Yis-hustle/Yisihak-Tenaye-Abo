
import React, { useState } from 'react';
import { Sparkles, Upload, RefreshCw, Check, Image as ImageIcon } from 'lucide-react';
import { editProfileImage } from '../services/geminiService';

interface ImageEditorProps {
  onImageUpdate: (newUrl: string) => void;
  currentImage: string;
}

export const ImageEditor: React.FC<ImageEditorProps> = ({ onImageUpdate, currentImage }) => {
  const [image, setImage] = useState<string>(currentImage);
  // Default prompt updated to the specific request for Yisak's brand
  const [prompt, setPrompt] = useState('Transform this into a hyper-realistic cinematic shot of a mysterious masked trader standing in front of a matte black Lamborghini Aventador, professional lighting, urban night setting, ultra-high-definition.');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEdit = async () => {
    if (!image || isProcessing) return;
    setIsProcessing(true);
    try {
      const result = await editProfileImage(image, prompt);
      if (result) {
        setImage(result);
        onImageUpdate(result);
      }
    } catch (err) {
      alert("Failed to process image. Ensure your API key is valid and you are using a clear original photo.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-200 shadow-2xl max-w-4xl mx-auto overflow-hidden relative">
      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10 relative z-10">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-indigo-600 rounded-2xl text-white shadow-lg">
            <Sparkles size={28} />
          </div>
          <div>
            <h3 className="text-2xl font-black text-slate-900 leading-tight">Brand Identity Forge</h3>
            <p className="text-sm font-medium text-slate-500">Generate high-performance visuals for your community.</p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full border border-slate-100">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Gemini 2.5 Vision Active</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10 mb-10">
        <div className="space-y-4">
          <div className="relative aspect-square rounded-[2rem] overflow-hidden bg-slate-50 border-2 border-dashed border-slate-200 group transition-all hover:border-indigo-400">
            {image && !image.includes('unsplash.com') && !image.includes('picsum.photos') ? (
              <img src={image} alt="Preview" className="w-full h-full object-cover" />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 p-8 text-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-4">
                  <ImageIcon size={32} className="text-indigo-400" />
                </div>
                <span className="text-sm font-bold text-slate-900 mb-1">Upload Original Photo</span>
                <span className="text-xs font-medium text-slate-400">Best results with high-res portraits</span>
              </div>
            )}
            <label className="absolute inset-0 cursor-pointer flex items-center justify-center bg-indigo-900/40 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[2px]">
              <input type="file" className="hidden" onChange={handleFileUpload} accept="image/*" />
              <div className="bg-white text-indigo-600 px-6 py-3 rounded-2xl font-black text-sm flex items-center gap-2 shadow-2xl active:scale-95 transition-transform">
                <Upload size={20} /> {image ? 'Replace Asset' : 'Select File'}
              </div>
            </label>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Generation DNA</label>
              <button onClick={() => setPrompt('')} className="text-[10px] font-black text-indigo-600 uppercase hover:underline">Clear</button>
            </div>
            <textarea 
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-[1.5rem] p-5 text-sm font-medium h-48 resize-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-400 outline-none transition-all leading-relaxed"
              placeholder="Describe the final look... e.g. Masked trader with Lamborghini, high resolution, 8k, urban setting."
            />
          </div>

          <button 
            onClick={handleEdit}
            disabled={isProcessing || !image || image.includes('unsplash.com')}
            className="w-full bg-slate-900 text-white py-5 rounded-[1.5rem] font-black text-lg hover:bg-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-xl flex items-center justify-center gap-3 mt-6 active:scale-95"
          >
            {isProcessing ? (
              <>
                <RefreshCw size={24} className="animate-spin" /> Igniting AI...
              </>
            ) : (
              <>
                <Sparkles size={24} /> Forge Brand Asset
              </>
            )}
          </button>
        </div>
      </div>

      <div className="bg-indigo-50/50 border border-indigo-100 p-6 rounded-[1.5rem] flex gap-4 items-center">
        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-indigo-600 shadow-sm shrink-0">
          <Check size={20} />
        </div>
        <p className="text-xs text-indigo-900 font-bold leading-relaxed">
          <span className="uppercase text-indigo-400 block mb-1">Hustler Pro Tip</span>
          Upload the masked photo you provided earlier and use the default prompt to generate your "Lambo Profile" instantly.
        </p>
      </div>
    </div>
  );
};
