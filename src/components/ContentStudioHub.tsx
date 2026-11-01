import React, { useState } from 'react';
import {
  FREE_MEDIA_TOOLS,
  UNCONVENTIONAL_INCOME_IDEAS
} from '../data/specializedHubsData';
import {
  Video,
  Image,
  Music,
  Film,
  Sparkles,
  ExternalLink,
  Flame,
  Lightbulb,
  CheckCircle2,
  DollarSign,
  TrendingUp,
  Compass
} from 'lucide-react';

export const ContentStudioHub: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'تصویر' | 'ویدیو' | 'صدا و موسیقی' | 'تدوین'>('all');
  const [activeTab, setActiveTab] = useState<'freeTools' | 'unconventional' | 'roadmap'>('unconventional');

  const filteredTools = FREE_MEDIA_TOOLS.filter(
    (t) => activeCategory === 'all' || t.type === activeCategory
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Banner */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-rose-600 dark:text-rose-400 mb-1">
              <Film className="w-4 h-4" />
              <span>هاب تخصصی شماره ۳</span>
              <span>·</span>
              <span>استودیوی تولید ویدیو، تصویر و ایده‌های بکر درآمدزایی</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              تولید محتوای چندرسانه‌ای با ابزارهای رایگان و راه‌های مخفی کسب درآمد
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-3xl leading-relaxed">
              معرفی کامل سرویس‌های دارای سهمیه رایگان روزانه، ایده‌های دست‌نخورده بازاریابی محتوا و نقشه راه قدم‌به‌قدم تا اولین مشتری.
            </p>
          </div>
        </div>

        {/* Sub Navigation */}
        <div className="mt-6 flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          <button
            onClick={() => setActiveTab('unconventional')}
            className={`px-3 py-2 rounded-lg font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'unconventional'
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Flame className="w-3.5 h-3.5 text-rose-500" />
            ایده‌های بکر و دست‌نخورده درآمدزایی
          </button>
          <button
            onClick={() => setActiveTab('freeTools')}
            className={`px-3 py-2 rounded-lg font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'freeTools'
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            جعبه‌ابزار سایت‌های رایگان روزانه
          </button>
          <button
            onClick={() => setActiveTab('roadmap')}
            className={`px-3 py-2 rounded-lg font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'roadmap'
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Compass className="w-3.5 h-3.5 text-indigo-500" />
            نقشه راه عملیاتی ۴ هفته‌ای
          </button>
        </div>
      </div>

      {/* Tab 1: Unconventional Ideas (ایده‌های بکر) */}
      {activeTab === 'unconventional' && (
        <div className="space-y-6">
          <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900 text-xs text-rose-900 dark:text-rose-200">
            🔥 <strong className="font-bold">چرا این روش‌ها پول‌سازتر هستند؟</strong> بیشتر مردم هنوز فکر می‌کنند هوش مصنوعی فقط یعنی چت کردن با ChatGPT! کسانی که متدهای زیر را اجرا می‌کنند، در اقیانوس آبی (Blue Ocean) بدون رقیب سنتی فعالیت کرده و بالاترین نرخ سود را تجربه می‌کنند.
          </div>

          <div className="space-y-6">
            {UNCONVENTIONAL_INCOME_IDEAS.map((idea, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center justify-center font-bold text-xs shrink-0">
                      ۰{idx + 1}
                    </div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      {idea.title}
                    </h3>
                  </div>

                  <div className="text-xs px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold border border-emerald-200 dark:border-emerald-800 shrink-0 tabular-nums">
                    پتانسیل ماهانه: {idea.monthlyPotentialToman}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800/80 text-xs">
                  <strong className="text-slate-900 dark:text-white block mb-1">چرا هنوز عموم مردم نمی‌دانند یا استفاده کمی دارند؟</strong>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {idea.whyUnderused}
                  </p>
                </div>

                <div className="space-y-2 text-xs">
                  <strong className="text-slate-900 dark:text-white block">مراحل اجرایی گام‌به‌گام:</strong>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {idea.executionSteps.map((step, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800/60 text-slate-700 dark:text-slate-300">
                        <span className="text-rose-500 font-mono font-bold text-[11px] mt-0.5">{sIdx + 1}.</span>
                        <span className="leading-relaxed">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-500">
                  <div>
                    <strong className="text-slate-700 dark:text-slate-300">مدل درآمدی: </strong>
                    <span>{idea.monetizationModel}</span>
                  </div>
                  <div>
                    <strong className="text-slate-700 dark:text-slate-300">مشتری بالقوه: </strong>
                    <span>{idea.exampleClient}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: Free Tools Catalog */}
      {activeTab === 'freeTools' && (
        <div className="space-y-6">
          {/* Category Filter */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            {(['all', 'تصویر', 'ویدیو', 'صدا و موسیقی', 'تدوین'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg transition-colors font-medium ${
                  activeCategory === cat
                    ? 'bg-rose-600 text-white shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat === 'all' ? 'همه ابزارها' : cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">
                        {tool.name}
                      </h3>
                      <span className="text-[11px] text-rose-600 dark:text-rose-400 font-medium">
                        دسته: {tool.type}
                      </span>
                    </div>

                    <a
                      href={tool.website}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
                      title="ورود به ابزار"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <div className="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 text-xs text-emerald-800 dark:text-emerald-300 font-medium mb-3">
                    🎁 {tool.freeAllowance}
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {tool.uniqueness}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 flex items-center justify-between">
                  <span>مجوز استفاده تجاری:</span>
                  <span className={tool.commercialLicense ? 'text-emerald-600 font-bold' : 'text-amber-600 font-medium'}>
                    {tool.commercialLicense ? 'دارد (مجاز)' : 'نیازمند بررسی پلان'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Roadmap */}
      {activeTab === 'roadmap' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
            <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
              <span className="w-6 h-6 rounded-md bg-indigo-600 text-white flex items-center justify-center font-bold text-xs">۱</span>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">هفته اول: تسلط ابزاری</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                ثبت‌نام در Leonardo و Kling؛ ساخت روزانه ۵ عکس و ۲ ویدیوی تستی و مسلط شدن به پرامپت‌های زوایای دوربین (Close-up, Wide shot).
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
              <span className="w-6 h-6 rounded-md bg-indigo-600 text-white flex items-center justify-center font-bold text-xs">۲</span>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">هفته دوم: پورتفولیوی طلایی</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                ساخت ۳ ویدیوی ۱۵ ثانیه‌ای بی‌نقص با زیرنویس برای ۳ محصول واقعی در بازار (یک عطر، یک ساعت مچی و یک هدفون).
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
              <span className="w-6 h-6 rounded-md bg-indigo-600 text-white flex items-center justify-center font-bold text-xs">۳</span>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">هفته سوم: دایرکت مارکتینگ</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                ارسال ویدیوی ساخته‌شده به دایرکت پیج‌های اینستاگرامی همان محصولات همراه با یک پیشنهاد غیرقابل رد: «یک نمونه رایگان برای شما ساختم!»
              </p>
            </div>

            <div className="p-5 rounded-2xl border-2 border-rose-500 bg-rose-50/20 dark:bg-rose-950/20 space-y-2 shadow-lg">
              <span className="w-6 h-6 rounded-md bg-rose-600 text-white flex items-center justify-center font-bold text-xs">۴</span>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">هفته چهارم: اولین قرارداد ماهانه</h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                بستن قرارداد پکیج ماهیانه (مثلاً ۱۰ ویدیو در ماه به مبلغ ۱۰ میلیون تومان) و آغاز جریان درآمدی پایدار.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
