
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { PERFORMANCE_DATA } from '../constants';

export const TradingChart: React.FC = () => {
  return (
    <div className="w-full h-[350px]">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h4 className="text-xs font-black text-indigo-600 uppercase tracking-widest mb-1">Community Growth</h4>
          <p className="text-2xl font-black text-slate-900">Performance Index</p>
        </div>
        <div className="flex gap-2">
          <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-black rounded-full">+42.8% YoY</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={PERFORMANCE_DATA}>
          <defs>
            <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.2}/>
              <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
          <XAxis 
            dataKey="month" 
            stroke="#94a3b8" 
            fontSize={12} 
            tickLine={false} 
            axisLine={false} 
            dy={10}
            fontFamily="Inter, sans-serif"
            fontWeight={700}
          />
          <YAxis hide />
          <Tooltip 
            contentStyle={{ 
              borderRadius: '16px', 
              border: '1px solid #e2e8f0', 
              boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
              padding: '12px 16px',
              fontFamily: 'Inter, sans-serif'
            }}
            itemStyle={{ fontWeight: 800, color: '#4f46e5' }}
          />
          <Area 
            type="monotone" 
            dataKey="profit" 
            stroke="#4f46e5" 
            strokeWidth={4}
            fillOpacity={1} 
            fill="url(#colorProfit)" 
            animationDuration={2000}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
