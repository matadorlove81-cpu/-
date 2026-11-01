import React, { useState } from 'react';
import {
  Search,
  Copy,
  Check,
  Play,
  Sparkles,
  ChevronDown,
  ChevronUp,
  DollarSign,
  Palette,
  Lightbulb,
  FileText
} from 'lucide-react';
import { SlideData } from '../types/presentation';

interface SlideDetailViewProps {
  slides: SlideData[];
  onSelectSlideForPresentation: (index: number) => void;
  onOpenAiCoachForSlide: (slide: SlideData) => void;
}

export const SlideDetailView: React.FC<SlideDetailViewProps> = ({
  slides,
  onSelectSlideForPresentation,
  onOpenAiCoachForSlide,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedSlideId, setCopiedSlideId] = useState<number | null>(null);
  const [expandedSlideIds, setExpandedSlideIds] = useState<number[]>(slides.map((s) => s.id));

  const toggleExpand = (id: number) => {
    setExpandedSlideIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const copySlideText = (slide: SlideData) => {
    const textToCopy = `
اسلاید شماره ${slide.slideNumber}: ${slide.title}
زیرعنوان: ${slide.subtitle}

محتوای اسلاید:
${slide.bullets.map((b, i) => `${i + 1}. ${b.text}`).join('\n')}

${slide.monetization ? `
اطلاعات اقتصادی:
- سطح سختی: ${slide.monetization.difficulty}
- سرمایه اولیه: ${slide.monetization.initialCapital}
- درآمد ماهانه (تومان): ${slide.monetization.estimatedMonthlyIncomeToman}
- درآمد ماهانه (دلار): ${slide.monetization.estimatedMonthlyIncomeUSD}
- ابزارها: ${slide.monetization.tools.join('، ')}
- مثال واقعی: ${slide.monetization.realWorldExample}
` : ''}

پیشنهاد تصویر و آیکون:
${slide.visualSuggestion.description}
پرامپت: ${slide.visualSuggestion.prompt}

یادداشت سخنران (Speaker Note):
قلاب: ${slide.speakerNote.hook}
نکات کلیدی: ${slide.speakerNote.mainPoints.join(' | ')}
زبان بدن: ${slide.speakerNote.bodyLanguageTip}
تله قابل اجتناب: ${slide.speakerNote.pitfallToAvoid}
رنگ و چیدمان: ${slide.designAdvice.colorNames} (${slide.designAdvice.layoutType})
    `.trim();

    navigator.clipboard.writeText(textToCopy);
    setCopiedSlideId(slide.id);
    setTimeout(() => setCopiedSlideId(null), 2000);
  };

  const filteredSlides = slides.filter((slide) => {
    const matchesCategory =
      selectedCategory === 'all' ||
      (selectedCategory === 'intro' && slide.category === 'intro') ||
      (selectedCategory === 'method' && slide.category === 'method') ||
      (selectedCategory === 'strategy' && (slide.category === 'strategy' || slide.category === 'closing'));

    const query = searchQuery.trim().toLowerCase();
    if (!query) return matchesCategory;

    const matchesQuery =
      slide.title.toLowerCase().includes(query) ||
      slide.subtitle.toLowerCase().includes(query) ||
      slide.bullets.some((b) => b.text.toLowerCase().includes(query)) ||
      slide.monetization?.tools.some((t) => t.toLowerCase().includes(query));

    return matchesCategory && matchesQuery;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Page Title & Intro */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              فهرست تفصیلی تمام ۲۰ اسلاید ارائه
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
              محتوای متنی ۵ بولتی، سناریوی سخنران، پیشنهاد طراحی، جدول درآمدی و فرمول تولید تصویر برای تک‌تک اسلایدها
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                if (expandedSlideIds.length === slides.length) {
                  setExpandedSlideIds([]);
                } else {
                  setExpandedSlideIds(slides.map((s) => s.id));
                }
              }}
              className="px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs text-slate-700 dark:text-slate-300 transition-colors"
            >
              {expandedSlideIds.length === slides.length ? 'بستن همه' : 'باز کردن همه'}
            </button>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="mt-6 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-slate-50 dark:bg-slate-900/80 p-3 rounded-2xl border border-slate-200 dark:border-slate-800">
          {/* Category Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1 md:pb-0 text-xs">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors font-medium ${
                selectedCategory === 'all'
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              همه اسلایدها (۲۰)
            </button>
            <button
              onClick={() => setSelectedCategory('intro')}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors font-medium ${
                selectedCategory === 'intro'
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              مقدمه و آمار (۵)
            </button>
            <button
              onClick={() => setSelectedCategory('method')}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors font-medium ${
                selectedCategory === 'method'
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              ۱۲ روش کسب درآمد (۱۲)
            </button>
            <button
              onClick={() => setSelectedCategory('strategy')}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors font-medium ${
                selectedCategory === 'strategy'
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              مهارت‌ها و نقشه راه (۳)
            </button>
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-slate-400 absolute right-3 top-2.5" />
            <input
              type="text"
              placeholder="جستجو در متن اسلاید، ابزار یا درآمد..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg pr-9 pl-3 py-1.5 text-xs text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>
      </div>

      {/* Slide Cards List */}
      <div className="space-y-6">
        {filteredSlides.map((slide, sIndex) => {
          const isExpanded = expandedSlideIds.includes(slide.id);

          return (
            <div
              key={slide.id}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm transition-all hover:border-slate-300 dark:hover:border-slate-700"
            >
              {/* Card Header */}
              <div
                onClick={() => toggleExpand(slide.id)}
                className="p-5 flex items-start sm:items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-850/60 transition-colors select-none"
              >
                <div className="flex items-start sm:items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-600/20 border border-indigo-200 dark:border-indigo-500/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-mono font-bold text-sm shrink-0">
                    {slide.slideNumber.toString().padStart(2, '0')}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-0.5">
                      {slide.methodCode && (
                        <span className="text-indigo-600 dark:text-indigo-400 font-bold">{slide.methodCode}</span>
                      )}
                      <span>{slide.category === 'intro' ? 'مقدمه و آمار' : slide.category === 'method' ? 'متد درآمدی' : 'استراتژی و نقشه راه'}</span>
                      {slide.monetization && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{slide.monetization.estimatedMonthlyIncomeToman}</span>
                        </>
                      )}
                    </div>
                    <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                      {slide.title}
                    </h2>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0" onClick={(e) => e.stopPropagation()}>
                  <button
                    onClick={() => copySlideText(slide)}
                    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
                    title="کپی متن کامل اسلاید"
                  >
                    {copiedSlideId === slide.id ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>

                  <button
                    onClick={() => onSelectSlideForPresentation(sIndex)}
                    className="p-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
                    title="مشاهده مستقیم در اسلایدشو"
                  >
                    <Play className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => toggleExpand(slide.id)}
                    className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-white"
                  >
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Card Expanded Details */}
              {isExpanded && (
                <div className="px-5 pb-6 pt-2 border-t border-slate-100 dark:border-slate-800/80 space-y-6 text-xs text-slate-700 dark:text-slate-300">
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                    {slide.subtitle}
                  </p>

                  {/* Section 1: Bullets */}
                  <div>
                    <h3 className="text-xs font-bold text-slate-900 dark:text-slate-200 mb-2.5 flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-indigo-500" />
                      محتوای متنی اسلاید (بولت‌های کوتاه و اثرگذار):
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                      {slide.bullets.map((bullet, bIdx) => (
                        <div
                          key={bIdx}
                          className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/90 leading-relaxed"
                        >
                          <strong className="text-indigo-600 dark:text-indigo-300 ml-1.5 font-bold">{bullet.highlight || `نکته ${bIdx + 1}`}:</strong>
                          <span>{bullet.text.replace(bullet.highlight || '', '').replace(/^[:—\s]+/, '')}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Section 2: Monetization Card */}
                  {slide.monetization && (
                    <div className="p-4 rounded-xl bg-indigo-50/40 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-900/50">
                      <h3 className="text-xs font-bold text-indigo-700 dark:text-indigo-300 mb-3 flex items-center gap-1.5">
                        <DollarSign className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        شناسنامه اقتصادی متد:
                      </h3>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs mb-3">
                        <div className="p-2.5 rounded-lg bg-white dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
                          <span className="text-slate-500 block text-[11px] mb-0.5">درجه سختی</span>
                          <span className="font-semibold text-slate-900 dark:text-white">{slide.monetization.difficulty}</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-white dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
                          <span className="text-slate-500 block text-[11px] mb-0.5">سرمایه اولیه</span>
                          <span className="font-semibold text-slate-900 dark:text-white">{slide.monetization.initialCapital}</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-white dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
                          <span className="text-slate-500 block text-[11px] mb-0.5">درآمد ماهانه (تومان)</span>
                          <span className="font-bold text-emerald-600 dark:text-emerald-400 tabular-nums">{slide.monetization.estimatedMonthlyIncomeToman}</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-white dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
                          <span className="text-slate-500 block text-[11px] mb-0.5">درآمد ارزی ماهانه</span>
                          <span className="font-bold text-emerald-600 dark:text-emerald-400 tabular-nums">{slide.monetization.estimatedMonthlyIncomeUSD}</span>
                        </div>
                      </div>

                      <div className="space-y-1.5 text-xs">
                        <div>
                          <strong className="text-slate-600 dark:text-slate-400 font-medium">ابزارهای کلیدی: </strong>
                          <span className="text-indigo-600 dark:text-indigo-300 font-mono">{slide.monetization.tools.join(' · ')}</span>
                        </div>
                        <div>
                          <strong className="text-slate-600 dark:text-slate-400 font-medium">مثال تجاری واقعی: </strong>
                          <span className="text-slate-700 dark:text-slate-300">{slide.monetization.realWorldExample}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Section 3: Speaker Note */}
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
                        <Lightbulb className="w-3.5 h-3.5" />
                        نکته کلیدی برای سخنران (Speaker Note):
                      </h3>
                      <button
                        onClick={() => onOpenAiCoachForSlide(slide)}
                        className="text-[11px] text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
                      >
                        <Sparkles className="w-3 h-3 text-amber-500" />
                        مشاوره کلامی AI
                      </button>
                    </div>

                    <div className="space-y-2">
                      <p className="font-semibold text-slate-800 dark:text-slate-200">
                        قلاب افتتاحیه (Hook): <span className="font-normal text-slate-600 dark:text-slate-300 font-serif">«{slide.speakerNote.hook}»</span>
                      </p>

                      <div className="text-slate-600 dark:text-slate-400">
                        <strong className="font-medium text-slate-800 dark:text-slate-200">محورهای اصلی توضیح: </strong>
                        {slide.speakerNote.mainPoints.join(' · ')}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-[11px]">
                        <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                          <span className="text-emerald-600 dark:text-emerald-400 font-bold block mb-0.5">زبان بدن و صدا:</span>
                          {slide.speakerNote.bodyLanguageTip}
                        </div>
                        <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                          <span className="text-rose-600 dark:text-rose-400 font-bold block mb-0.5">تله سخنران:</span>
                          {slide.speakerNote.pitfallToAvoid}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section 4: Design Advice & Visual Prompt */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[11px]">
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                      <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-1 flex items-center gap-1">
                        <Palette className="w-3 h-3 text-indigo-500" />
                        پیشنهاد رنگ و چیدمان:
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400 mb-1">
                        <strong className="text-slate-800 dark:text-slate-200">پالت رنگ:</strong> {slide.designAdvice.colorNames}
                      </p>
                      <p className="text-slate-600 dark:text-slate-400">
                        <strong className="text-slate-800 dark:text-slate-200">چیدمان:</strong> {slide.designAdvice.layoutType}
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                      <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-1 flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-indigo-500" />
                        پیشنهاد تصویر / آیکون:
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400 mb-1">
                        {slide.visualSuggestion.description}
                      </p>
                      <p className="text-slate-500 font-mono text-[10px] truncate" title={slide.visualSuggestion.prompt}>
                        پرامپت: {slide.visualSuggestion.prompt}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
