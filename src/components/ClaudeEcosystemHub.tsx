import React, { useState } from 'react';
import { CLAUDE_ECOSYSTEM_TOPICS } from '../data/specializedHubsData';
import {
  Brain,
  Cpu,
  Terminal,
  ExternalLink,
  Sparkles,
  BookOpen,
  Code2,
  Headphones,
  Laptop,
  CheckCircle2,
  DollarSign,
  Zap,
  Radio
} from 'lucide-react';

export const ClaudeEcosystemHub: React.FC = () => {
  const [selectedTopicIndex, setSelectedTopicIndex] = useState<number>(0);

  const activeTopic = CLAUDE_ECOSYSTEM_TOPICS[selectedTopicIndex];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Banner */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-600 dark:text-amber-400 mb-1">
              <Brain className="w-4 h-4" />
              <span>هاب تخصصی شماره ۴</span>
              <span>·</span>
              <span>اکوسیستم کلاد (Claude)، اسکیل‌ها، مغز دائمی و ابزارهای گوگل</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              فناوری‌های لبه هوش مصنوعی: پروتکل MCP، اسکیل‌ها و پادکست‌سازی با NotebookLM
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-3xl leading-relaxed">
              راهنمای فوق‌پیشرفته ساخت حافظه دائمی با کلاد، اجرای پروژه‌ها در ویندوز، ساخت اسکیل‌های تخصصی، و خلق محصولات دانشی با گوگل نوت‌بوک‌ال‌ام و جمنای.
            </p>
          </div>
        </div>
      </div>

      {/* Main Split Layout: Topics List on Left/Right and Deep-Dive Viewer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sidebar Topic Selectors */}
        <div className="lg:col-span-5 space-y-3">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
            سرفصل‌های تخصصی و ترفندهای لبه دانش:
          </span>

          <div className="space-y-2">
            {CLAUDE_ECOSYSTEM_TOPICS.map((topic, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedTopicIndex(idx)}
                className={`p-4 rounded-xl border transition-all cursor-pointer text-right ${
                  selectedTopicIndex === idx
                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-slate-900 dark:border-white shadow-md'
                    : 'bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded font-medium ${
                      selectedTopicIndex === idx
                        ? 'bg-white/20 text-white dark:bg-slate-900/10 dark:text-slate-900'
                        : 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800'
                    }`}
                  >
                    {topic.badge}
                  </span>
                  <span className="font-mono text-xs opacity-60">0{idx + 1}</span>
                </div>

                <h3 className="text-xs sm:text-sm font-bold leading-snug">
                  {topic.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Quick Google Tools Spotlight Card */}
          <div className="mt-6 p-4 rounded-2xl bg-gradient-to-br from-amber-500/10 via-indigo-500/10 to-transparent border border-amber-500/20 text-xs space-y-2">
            <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold">
              <Radio className="w-4 h-4" />
              <span>ترکیب برنده: کلاد + گوگل NotebookLM</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-[11px] leading-relaxed">
              اگر متون و ساختار پروژه‌های بزرگ را با کلاد طراحی کنید و سپس فایل‌ها را وارد گوگل NotebookLM نمایید، می‌توانید یک پادکست آموزشی صوتی ۲ نفره بی‌نظیر برای انتشار در کست‌باکس یا تلگرام تحویل بگیرید!
            </p>
          </div>
        </div>

        {/* Deep Dive Content Display */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                  {activeTopic.badge}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                {activeTopic.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                {activeTopic.summary}
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                تحلیل جامع معماری و پیاده‌سازی:
              </span>
              <div className="space-y-3">
                {activeTopic.deepDive.map((item, dIdx) => (
                  <div
                    key={dIdx}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800/80 text-xs text-slate-700 dark:text-slate-300 leading-relaxed"
                  >
                    <div className="w-5 h-5 rounded-md bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">
                      {dIdx + 1}
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actionable Golden Tip */}
            <div className="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/80 text-xs space-y-1.5">
              <span className="font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                ترفند طلایی و اقدام عملیاتی:
              </span>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-serif">
                {activeTopic.actionableTip}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
