import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronRight,
  ChevronLeft,
  Maximize2,
  Minimize2,
  Clock,
  Play,
  Pause,
  RotateCcw,
  BookOpen,
  Sparkles,
  Users,
  Target,
  TrendingUp,
  Columns,
  Maximize,
  ZoomIn,
  ZoomOut,
  FileText
} from 'lucide-react';
import { SlideData, AudienceType, PresentationLevel } from '../types/presentation';

interface PresentationViewProps {
  slides: SlideData[];
  audience: AudienceType;
  setAudience: (aud: AudienceType) => void;
  level: PresentationLevel;
  setLevel: (lvl: PresentationLevel) => void;
  currentSlideIndex: number;
  setCurrentSlideIndex: (idx: number) => void;
  onOpenAiCoachForSlide: (slide: SlideData) => void;
}

export const PresentationView: React.FC<PresentationViewProps> = ({
  slides,
  audience,
  setAudience,
  level,
  setLevel,
  currentSlideIndex,
  setCurrentSlideIndex,
  onOpenAiCoachForSlide,
}) => {
  const [layoutMode, setLayoutMode] = useState<'standard' | 'splitWithScript'>('splitWithScript');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [scriptFontSize, setScriptFontSize] = useState<'sm' | 'base' | 'lg'>('base');

  const containerRef = useRef<HTMLDivElement>(null);
  const currentSlide = slides[currentSlideIndex];

  // Timer interval
  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  const formatTimer = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        if (currentSlideIndex < slides.length - 1) {
          setCurrentSlideIndex(currentSlideIndex + 1);
        }
      } else if (e.key === 'ArrowRight' || e.key === 'PageUp') {
        e.preventDefault();
        if (currentSlideIndex > 0) {
          setCurrentSlideIndex(currentSlideIndex - 1);
        }
      } else if (e.key.toLowerCase() === 'f') {
        toggleFullscreen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlideIndex, slides.length]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen?.().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.().catch(() => {});
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const onFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', onFsChange);
    return () => document.removeEventListener('fullscreenchange', onFsChange);
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col h-[calc(100vh-4rem)] bg-slate-950 text-slate-100 overflow-hidden select-none"
    >
      {/* Top Presentation Ribbon */}
      <div className="bg-slate-900 border-b border-slate-800 px-4 py-2 flex flex-wrap items-center justify-between gap-3 text-xs shrink-0">
        {/* Audience and Target Controls */}
        <div className="flex items-center gap-3">
          <span className="text-slate-400 font-medium">مخاطب جلسه:</span>
          <div className="inline-flex rounded-lg bg-slate-950 p-0.5 border border-slate-800">
            <button
              onClick={() => setAudience('students')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                audience === 'students'
                  ? 'bg-indigo-600 text-white font-medium shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              دانشجویان
            </button>
            <button
              onClick={() => setAudience('entrepreneurs')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                audience === 'entrepreneurs'
                  ? 'bg-indigo-600 text-white font-medium shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              کارآفرینان و مدیران
            </button>
            <button
              onClick={() => setAudience('general')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                audience === 'general'
                  ? 'bg-indigo-600 text-white font-medium shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              عموم علاقه‌مندان
            </button>
          </div>
        </div>

        {/* View Mode & Timer */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Dual Layout Toggle */}
          <div className="hidden sm:inline-flex rounded-lg bg-slate-950 p-0.5 border border-slate-800">
            <button
              onClick={() => setLayoutMode('splitWithScript')}
              className={`px-2.5 py-1 rounded-md transition-colors flex items-center gap-1.5 ${
                layoutMode === 'splitWithScript'
                  ? 'bg-indigo-600 text-white font-medium'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="نمایش همزمان اسلاید و متن کامل صحبت سخنران"
            >
              <Columns className="w-3.5 h-3.5" />
              <span>اسلاید + متن ارائه</span>
            </button>
            <button
              onClick={() => setLayoutMode('standard')}
              className={`px-2.5 py-1 rounded-md transition-colors flex items-center gap-1.5 ${
                layoutMode === 'standard'
                  ? 'bg-indigo-600 text-white font-medium'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="فقط اسلاید بزرگ"
            >
              <Maximize className="w-3.5 h-3.5" />
              <span>فقط اسلاید</span>
            </button>
          </div>

          {/* Timer Widget */}
          <div className="flex items-center gap-1.5 bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1 font-mono text-xs text-indigo-300">
            <Clock className="w-3.5 h-3.5 text-indigo-400" />
            <span className="tabular-nums font-bold">{formatTimer(timerSeconds)}</span>
            <button
              onClick={() => setIsTimerRunning(!isTimerRunning)}
              className="text-slate-400 hover:text-white p-0.5"
              title={isTimerRunning ? 'توقف زمان' : 'شروع زمان'}
            >
              {isTimerRunning ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
            </button>
            <button
              onClick={() => {
                setIsTimerRunning(false);
                setTimerSeconds(0);
              }}
              className="text-slate-400 hover:text-white p-0.5"
              title="ریست زمان"
            >
              <RotateCcw className="w-3 h-3" />
            </button>
          </div>

          {/* Fullscreen Button */}
          <button
            onClick={toggleFullscreen}
            className="p-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 hover:text-white transition-colors flex items-center gap-1"
            title="حالت تمام‌صفحه (F)"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            <span className="hidden md:inline text-[11px]">تمام‌صفحه</span>
          </button>
        </div>
      </div>

      {/* Main Presentation Stage */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden relative">
        {/* Left Side (or full width in standard): The Visual 16:9 Presentation Canvas */}
        <div
          className={`${
            layoutMode === 'splitWithScript' ? 'lg:w-[58%] xl:w-[62%]' : 'w-full'
          } flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 overflow-y-auto transition-all`}
        >
          <div className="w-full max-w-5xl aspect-video bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950 border border-slate-800 rounded-2xl shadow-2xl p-5 sm:p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden group">
            {/* Subtle light accents */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Slide Header */}
            <div className="relative z-10">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-indigo-400 font-bold">
                    {currentSlide.slideNumber.toString().padStart(2, '0')} / {slides.length}
                  </span>
                  <span>·</span>
                  <span className="text-slate-300 font-medium">
                    {currentSlide.methodCode ? currentSlide.methodCode : 'هوش مصنوعی و اقتصاد نوین'}
                  </span>
                </div>
                <div className="text-slate-500 text-[11px] font-mono">
                  16:9 Widescreen
                </div>
              </div>

              <h1 className="text-lg sm:text-2xl lg:text-3xl font-black text-white tracking-tight leading-snug">
                {currentSlide.title}
              </h1>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-3xl leading-relaxed">
                {currentSlide.subtitle}
              </p>
            </div>

            {/* Slide Body: Bullets */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 my-auto pt-2">
              <div
                className={`${
                  currentSlide.monetization || currentSlide.visualSuggestion.imagePath
                    ? 'md:col-span-7'
                    : 'md:col-span-12'
                } space-y-2.5`}
              >
                {currentSlide.bullets.map((bullet, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-2.5 sm:p-3 rounded-xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-sm hover:border-slate-600 transition-colors"
                  >
                    <div className="w-5 h-5 rounded-md bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-mono font-bold">
                      {idx + 1}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                      {bullet.highlight ? (
                        <>
                          <strong className="font-bold text-indigo-300">
                            {bullet.highlight}
                          </strong>
                          {' — '}
                          {bullet.text.replace(bullet.highlight, '').replace(/^[:—\s]+/, '')}
                        </>
                      ) : (
                        bullet.text
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Side Visual Card or Monetization Metrics */}
              {(currentSlide.monetization || currentSlide.visualSuggestion.imagePath) && (
                <div className="md:col-span-5 flex flex-col justify-center">
                  {currentSlide.visualSuggestion.imagePath && !currentSlide.monetization ? (
                    <div className="relative rounded-xl overflow-hidden border border-slate-700/60 shadow-lg">
                      <img
                        src={currentSlide.visualSuggestion.imagePath}
                        alt={currentSlide.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-44 sm:h-52 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-2.5">
                        <span className="text-[11px] text-slate-300 leading-tight">
                          {currentSlide.visualSuggestion.description}
                        </span>
                      </div>
                    </div>
                  ) : currentSlide.monetization ? (
                    <div className="p-3.5 sm:p-4 rounded-xl bg-slate-800/70 border border-indigo-500/30 space-y-2 text-xs">
                      <div className="flex items-center justify-between pb-1.5 border-b border-slate-700/60">
                        <span className="text-slate-400">سختی اجرا:</span>
                        <span className="text-indigo-300 font-bold">{currentSlide.monetization.difficulty}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">سرمایه اولیه:</span>
                        <span className="text-slate-200">{currentSlide.monetization.initialCapital}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">درآمد ماهانه (تومان):</span>
                        <span className="text-emerald-400 font-bold tabular-nums">
                          {currentSlide.monetization.estimatedMonthlyIncomeToman}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">درآمد ارزی:</span>
                        <span className="text-emerald-400 font-bold tabular-nums">
                          {currentSlide.monetization.estimatedMonthlyIncomeUSD}
                        </span>
                      </div>
                      <div className="pt-1.5 border-t border-slate-700/50">
                        <span className="text-slate-400 block mb-1 text-[11px]">ابزارهای اصلی:</span>
                        <div className="flex flex-wrap gap-1">
                          {currentSlide.monetization.tools.slice(0, 4).map((tool, tIdx) => (
                            <span key={tIdx} className="text-[10px] px-1.5 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-300 font-mono">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              )}
            </div>

            {/* Slide Footer */}
            <div className="relative z-10 pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-500">
              <span className="text-slate-400">{currentSlide.designAdvice.colorNames}</span>
              <span className="font-mono">{currentSlide.designAdvice.slideArchetype}</span>
            </div>
          </div>
        </div>

        {/* Right Side: Speaker Speech Text / Talking Script Container */}
        {layoutMode === 'splitWithScript' && (
          <div className="lg:w-[42%] xl:w-[38%] border-t lg:border-t-0 lg:border-r border-slate-800 bg-slate-900/95 backdrop-blur-md flex flex-col justify-between overflow-hidden">
            {/* Script Header Bar */}
            <div className="p-3.5 border-b border-slate-800 flex items-center justify-between bg-slate-950/60 shrink-0">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-indigo-400" />
                <span className="text-xs font-bold text-white">متن صحبت و راهنمای ارائه سخنران</span>
              </div>

              {/* Font Size & AI Button */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800 text-[11px]">
                  <button
                    onClick={() => setScriptFontSize('sm')}
                    className={`px-1 rounded ${scriptFontSize === 'sm' ? 'text-indigo-400 font-bold' : 'text-slate-400'}`}
                    title="اندازه قلم کوچک"
                  >
                    A-
                  </button>
                  <button
                    onClick={() => setScriptFontSize('base')}
                    className={`px-1 rounded ${scriptFontSize === 'base' ? 'text-indigo-400 font-bold' : 'text-slate-400'}`}
                    title="اندازه قلم استاندارد"
                  >
                    A
                  </button>
                  <button
                    onClick={() => setScriptFontSize('lg')}
                    className={`px-1 rounded ${scriptFontSize === 'lg' ? 'text-indigo-400 font-bold' : 'text-slate-400'}`}
                    title="اندازه قلم بزرگ برای صحنه"
                  >
                    A+
                  </button>
                </div>

                <button
                  onClick={() => onOpenAiCoachForSlide(currentSlide)}
                  className="px-2 py-1 rounded bg-indigo-600/30 hover:bg-indigo-600 text-indigo-300 hover:text-white border border-indigo-500/40 text-[11px] flex items-center gap-1 transition-colors"
                >
                  <Sparkles className="w-3 h-3 text-amber-300" />
                  مربی AI
                </button>
              </div>
            </div>

            {/* Script Text Body (Scrollable) */}
            <div
              className={`flex-1 p-4 sm:p-5 overflow-y-auto space-y-4 ${
                scriptFontSize === 'sm' ? 'text-xs' : scriptFontSize === 'lg' ? 'text-base' : 'text-sm'
              }`}
            >
              {/* Hook Box */}
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 space-y-1.5">
                <div className="flex items-center gap-1.5 text-amber-400 font-bold text-xs">
                  <Target className="w-3.5 h-3.5" />
                  <span>قلاب ۳۰ ثانیه نخست کلامی (Opening Hook):</span>
                </div>
                <p className="text-slate-200 leading-relaxed font-serif">
                  «{currentSlide.speakerNote.hook}»
                </p>
              </div>

              {/* Step-by-Step Talking Points */}
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-indigo-300 font-bold text-xs">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>سناریوی کلامی و تشریح نکات اسلاید:</span>
                </div>
                <div className="space-y-2 text-slate-300 leading-relaxed">
                  {currentSlide.speakerNote.mainPoints.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 bg-slate-950/50 p-2.5 rounded-lg border border-slate-800/80">
                      <span className="text-indigo-400 font-mono font-bold mt-0.5">{pIdx + 1}.</span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Audience Specific Tailoring */}
              <div className="p-3 rounded-xl bg-indigo-950/40 border border-indigo-800/50 space-y-1 text-xs">
                <div className="flex items-center gap-1 text-indigo-300 font-bold">
                  <Users className="w-3 h-3" />
                  <span>تاکتیک ارائه اختصاصی برای {audience === 'students' ? 'دانشجویان' : audience === 'entrepreneurs' ? 'کارآفرینان' : 'عموم'}:</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  {currentSlide.speakerNote.audienceTip[audience]}
                </p>
              </div>

              {/* Stage Presence & Body Language */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-emerald-400 font-bold block mb-1">زبان بدن و لحن صدا:</span>
                  <p className="text-slate-300 leading-relaxed">{currentSlide.speakerNote.bodyLanguageTip}</p>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-rose-400 font-bold block mb-1">تله کلامی قابل اجتناب:</span>
                  <p className="text-slate-300 leading-relaxed">{currentSlide.speakerNote.pitfallToAvoid}</p>
                </div>
              </div>
            </div>

            {/* Quick Slide Dropdown */}
            <div className="p-3 border-t border-slate-800 bg-slate-950/70 shrink-0">
              <label htmlFor="jump-slide" className="block text-[11px] text-slate-400 mb-1">
                پرش مستقیم به اسلاید:
              </label>
              <select
                id="jump-slide"
                value={currentSlideIndex}
                onChange={(e) => setCurrentSlideIndex(Number(e.target.value))}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
              >
                {slides.map((s, idx) => (
                  <option key={s.id} value={idx}>
                    {s.slideNumber}. {s.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation Control Bar */}
      <div className="bg-slate-900 border-t border-slate-800 px-4 py-2.5 flex items-center justify-between gap-4 shrink-0">
        {/* Progress & Slide Count */}
        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-300">
            اسلاید <span className="text-white font-bold">{currentSlideIndex + 1}</span> از {slides.length}
          </span>
          <div className="w-28 sm:w-48 h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-indigo-500 transition-all duration-300"
              style={{ width: `${((currentSlideIndex + 1) / slides.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Buttons Prev / Next */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              if (currentSlideIndex > 0) setCurrentSlideIndex(currentSlideIndex - 1);
            }}
            disabled={currentSlideIndex === 0}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-xs font-medium text-slate-200 transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
            اسلاید قبلی
          </button>

          <button
            onClick={() => {
              if (currentSlideIndex < slides.length - 1) setCurrentSlideIndex(currentSlideIndex + 1);
            }}
            disabled={currentSlideIndex === slides.length - 1}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-xs font-bold text-white transition-colors shadow-sm shadow-indigo-600/30"
          >
            اسلاید بعدی
            <ChevronLeft className="w-4 h-4" />
          </button>
        </div>

        {/* Keyboard hints */}
        <div className="hidden lg:flex items-center gap-2 text-[11px] text-slate-500 font-mono">
          <span>کلیدها:</span>
          <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300">← بعدی</kbd>
          <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300">→ قبلی</kbd>
          <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300">F (تمام‌صفحه)</kbd>
        </div>
      </div>
    </div>
  );
};
