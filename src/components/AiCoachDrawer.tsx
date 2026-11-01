import React, { useState } from 'react';
import { SlideData, AudienceType, PresentationLevel } from '../types/presentation';
import {
  X,
  Sparkles,
  Send,
  Loader2,
  HelpCircle,
  MessageSquare,
  Users,
  Target,
  ArrowRight
} from 'lucide-react';

interface AiCoachDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentSlide: SlideData;
  audience: AudienceType;
  level: PresentationLevel;
}

export const AiCoachDrawer: React.FC<AiCoachDrawerProps> = ({
  isOpen,
  onClose,
  currentSlide,
  audience,
  level,
}) => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const quickQuestions = [
    'چطور با این اسلاید در ثانیه اول توجه سالن را میخکوب کنم؟',
    'پاسخ به این شبهه که «هوش مصنوعی کیفیت کار را خراب می‌کند» چیست؟',
    'چطور قیمت‌گذاری دلاری یا ریالی این روش را برای مخاطب توجیه کنم؟',
    'یک مثال و استعاره ملموس روزمره برای این متد ارائه بده.',
  ];

  const handleAsk = async (textToAsk: string) => {
    if (!textToAsk.trim()) return;
    setIsLoading(true);
    setError(null);
    setResponse(null);

    try {
      const res = await fetch('/api/ai/coach', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: textToAsk,
          slideTitle: `${currentSlide.slideNumber}. ${currentSlide.title}`,
          audience:
            audience === 'students'
              ? 'دانشجویان و تازه‌کارها'
              : audience === 'entrepreneurs'
              ? 'کارآفرینان و مدیران ارشد کسب‌وکار'
              : 'عموم علاقه‌مندان و تغییر مسیر شغلی',
          level,
        }),
      });

      if (!res.ok) {
        throw new Error('خطا در پاسخ از سرور هوش مصنوعی');
      }

      const data = await res.json();
      setResponse(data.answer);
    } catch (err: any) {
      console.error(err);
      setError('امکان ارتباط با سرور فراهم نشد. لطفاً مجدداً تلاش کنید.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-lg bg-slate-900 border-r border-slate-800 h-full flex flex-col shadow-2xl p-6 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-white">مربی هوشمند سخنرانی (AI Coach)</h2>
              <p className="text-[11px] text-slate-400">
                مشاوره فن بیان و سناریونویسی برای: {currentSlide.title}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto py-4 space-y-4 text-xs text-slate-300">
          {/* Context Tag */}
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-[11px] space-y-1">
            <div className="flex items-center justify-between text-slate-400">
              <span>اسلاید فعال:</span>
              <span className="text-indigo-400 font-mono">اسلاید {currentSlide.slideNumber}</span>
            </div>
            <div className="font-semibold text-slate-200 truncate">{currentSlide.title}</div>
            <div className="text-slate-500 text-[10px]">
              مخاطب انتخابی: {audience === 'students' ? 'دانشجویان' : audience === 'entrepreneurs' ? 'کارآفرینان' : 'عموم'} | سطح: {level}
            </div>
          </div>

          {/* Quick Questions */}
          <div>
            <span className="text-slate-400 block mb-2 font-medium">پرسش‌های پرتکرار و سناریوهای آماده:</span>
            <div className="space-y-1.5">
              {quickQuestions.map((q, qI) => (
                <button
                  key={qI}
                  onClick={() => {
                    setQuestion(q);
                    handleAsk(q);
                  }}
                  className="w-full text-right p-2.5 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 text-xs transition-colors flex items-center justify-between gap-2"
                >
                  <span>{q}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                </button>
              ))}
            </div>
          </div>

          {/* Response Box */}
          {isLoading && (
            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col items-center justify-center gap-2 text-slate-400 text-xs">
              <Loader2 className="w-5 h-5 text-indigo-400 animate-spin" />
              <span>مربی هوش مصنوعی در حال تنظیم بهترین سناریوی کلامی...</span>
            </div>
          )}

          {error && (
            <div className="p-3 rounded-lg bg-rose-950/50 border border-rose-800 text-rose-300 text-xs">
              {error}
            </div>
          )}

          {response && (
            <div className="p-4 rounded-xl bg-indigo-950/30 border border-indigo-800/60 space-y-2">
              <div className="flex items-center gap-1.5 text-indigo-300 font-bold text-xs">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                راهنمای تاکتیکی مربی:
              </div>
              <div className="text-slate-200 leading-relaxed whitespace-pre-line text-xs font-serif">
                {response}
              </div>
            </div>
          )}
        </div>

        {/* Input Footer */}
        <div className="pt-3 border-t border-slate-800">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAsk(question);
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="پرسش یا چالش شما در این اسلاید چیست؟..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="flex-1 bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
            />
            <button
              type="submit"
              disabled={isLoading || !question.trim()}
              className="p-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
