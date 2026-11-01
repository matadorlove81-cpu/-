import React, { useState } from 'react';
import {
  WEB_DESIGN_MODELS,
  WEB_AI_TOOLS,
  CPANEL_DEPLOY_STEPS
} from '../data/specializedHubsData';
import {
  Globe,
  Server,
  Code2,
  ExternalLink,
  Copy,
  Check,
  Sparkles,
  Layers,
  ArrowRight,
  ShieldAlert,
  DollarSign,
  Laptop,
  UploadCloud,
  CheckCircle2
} from 'lucide-react';

export const WebDesignHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'models' | 'tools' | 'cpanel' | 'freeHosting' | 'pricing'>('models');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Banner */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-1">
              <Globe className="w-4 h-4" />
              <span>هاب تخصصی شماره ۱</span>
              <span>·</span>
              <span>طراحی و استقرار وب‌سایت با هوش مصنوعی</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              از ایده و پرامپت تا سایت زنده روی هاست سی‌پنل و فروش به کارفرما
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-3xl leading-relaxed">
              آموزش جامع انواع مدل‌های سایت، ابزارهای کدنویسی AI، استقرار رایگان ابری، انتقال گام‌به‌گام به هاست اشتراکی cPanel و پکیج‌های قیمت‌گذاری تجاری.
            </p>
          </div>
        </div>

        {/* Sub Navigation Segmented Tabs */}
        <div className="mt-6 flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          <button
            onClick={() => setActiveTab('models')}
            className={`px-3 py-2 rounded-lg font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'models'
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            انواع مدل سایت و بازار هدف
          </button>
          <button
            onClick={() => setActiveTab('tools')}
            className={`px-3 py-2 rounded-lg font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'tools'
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            ابزارهای هوش مصنوعی برتر
          </button>
          <button
            onClick={() => setActiveTab('cpanel')}
            className={`px-3 py-2 rounded-lg font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'cpanel'
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Server className="w-3.5 h-3.5" />
            آموزش انتقال به هاست سی‌پنل (cPanel)
          </button>
          <button
            onClick={() => setActiveTab('freeHosting')}
            className={`px-3 py-2 rounded-lg font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'freeHosting'
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <UploadCloud className="w-3.5 h-3.5" />
            استقرار رایگان در کلود (Vercel / Cloudflare)
          </button>
          <button
            onClick={() => setActiveTab('pricing')}
            className={`px-3 py-2 rounded-lg font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'pricing'
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <DollarSign className="w-3.5 h-3.5" />
            تعرفه‌گذاری و فروش به مشتری
          </button>
        </div>
      </div>

      {/* Tab 1: Models */}
      {activeTab === 'models' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WEB_DESIGN_MODELS.map((model, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 font-medium">
                      {model.category}
                    </span>
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 tabular-nums">
                      تعرفه: {model.pricingRangeToman}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    {model.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {model.description}
                  </p>

                  <div className="space-y-2 text-xs mb-4">
                    <div className="text-slate-700 dark:text-slate-300">
                      <strong className="text-slate-900 dark:text-white">مشتریان هدف: </strong>
                      {model.targetAudience}
                    </div>

                    <div>
                      <strong className="text-slate-900 dark:text-white block mb-1.5">امکانات الزامی:</strong>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {model.keyFeatures.map((f, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 text-[11px]">
                            <CheckCircle2 className="w-3 h-3 text-indigo-500 shrink-0" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px]">
                  <span className="text-slate-500">فناوری پیشنهادی:</span>
                  <div className="flex gap-1">
                    {model.suggestedTech.map((tech, tIdx) => (
                      <span key={tIdx} className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono text-[10px]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: AI Tools */}
      {activeTab === 'tools' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {WEB_AI_TOOLS.map((tool, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-base font-black text-slate-900 dark:text-white">
                        {tool.name}
                      </h3>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 font-medium">
                        {tool.badge}
                      </span>
                    </div>
                    <span className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                      بهترین کاربرد: {tool.bestFor}
                    </span>
                  </div>

                  <a
                    href={tool.websiteUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
                    title="مشاهده سایت"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {tool.description}
                </p>

                <div className="grid grid-cols-2 gap-2 text-[11px] pt-3 border-t border-slate-100 dark:border-slate-800">
                  <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800/80">
                    <span className="text-slate-500 block mb-0.5">وضعیت پلن رایگان:</span>
                    <span className="font-medium text-slate-800 dark:text-slate-200">{tool.freeTierStatus}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800/80">
                    <span className="text-slate-500 block mb-0.5">فرمت خروجی کد:</span>
                    <span className="font-medium text-slate-800 dark:text-slate-200 font-mono">{tool.outputFormat}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: cPanel Guide */}
      {activeTab === 'cpanel' && (
        <div className="space-y-6">
          <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong>نکته حیاتی برای وب‌سایت‌های ایرانی:</strong> بیشتر کارفرمایان داخلی هاست اشتراکی لینوکس (سی‌پنل یا دایرکت‌ادمین) دارند. اگر یک پروژه مدرن React / Vite را بدون رعایت فایل <code className="font-mono font-bold bg-amber-100 dark:bg-amber-900/60 px-1 py-0.5 rounded">.htaccess</code> آپلود کنید، کاربران هنگام رفرش کردن صفحات داخلی با خطای ۴۰۴ مواجه می‌شوند. این راهنمای ۵ مرحله‌ای این مشکل را برای همیشه حل می‌کند.
            </div>
          </div>

          <div className="space-y-4">
            {CPANEL_DEPLOY_STEPS.map((step, sIdx) => (
              <div
                key={sIdx}
                className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-mono font-bold text-xs shrink-0">
                    {step.step}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    {step.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {step.instruction}
                </p>

                <div className="relative rounded-xl bg-slate-950 border border-slate-800 p-3.5 text-xs font-mono text-emerald-400 overflow-x-auto">
                  <pre className="select-all leading-relaxed whitespace-pre-wrap">{step.codeSnippet}</pre>
                  <button
                    onClick={() => copyToClipboard(step.codeSnippet, sIdx)}
                    className="absolute top-2.5 left-2.5 p-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                    title="کپی قطعه‌کد"
                  >
                    {copiedIndex === sIdx ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <div className="text-[11px] text-slate-500 italic">
                  💡 {step.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 4: Free Cloud Hosting */}
      {activeTab === 'freeHosting' && (
        <div className="space-y-6 text-xs text-slate-700 dark:text-slate-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3">
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm text-slate-900 dark:text-white">Vercel (ورسل)</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                  بهترین برای پروژه‌های Next.js و React
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                کافی است پروژه خود را در گیت‌هاب قرار داده و در Vercel دکمه Import را بزنید. هر بار که کدی را تغییر دهید، سایت در کمتر از ۳۰ ثانیه مجدداً با SSL رایگان لایو می‌شود.
              </p>
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 font-mono text-[11px] text-indigo-600 dark:text-indigo-400">
                دستور دیپلوی ترمینال: npx vercel
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3">
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm text-slate-900 dark:text-white">Netlify (نتلیفای)</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                  ساده‌ترین با Drag & Drop
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                حتی بدون نیاز به گیت‌هاب! کافی است پوشه dist ساخته شده توسط دستور <code className="font-mono">npm run build</code> را با ماوس بکشید و در پنل Netlify Drop رها کنید تا در ۱۰ ثانیه آدرس لایو به شما بدهد.
              </p>
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 font-mono text-[11px] text-indigo-600 dark:text-indigo-400">
                سایت لایو فوری با دامنه yourname.netlify.app
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3">
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm text-slate-900 dark:text-white">Cloudflare Pages</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                  بالاترین سرعت در شبکه ایران
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                کلودفلر دارای صدها سرور لبه (Edge Server) در سراسر منطقه خاورمیانه است. برای سایت‌هایی که سرعت باز شدن در اینترنت‌های ضعیف مهم است، گزینه‌ای بدون افت کیفیت و کاملاً نامحدود است.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3">
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm text-slate-900 dark:text-white">اتصال دامنه اختصاصی (.ir یا .com)</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  کاملاً رایگان
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                تمام سرویس‌های بالا اجازه می‌دهند بدون پرداخت هیچ هزینه‌ای، دامنه اختصاصی خریداری‌شده خود را با تنظیم یک رکورد CNAME یا A Record به سایت لایو متصل کنید.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 5: Pricing Strategy */}
      {activeTab === 'pricing' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-4">
              <div className="pb-3 border-b border-slate-100 dark:border-slate-800">
                <span className="text-xs text-slate-500 font-medium">پلن شماره ۱</span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">لندینگ‌پیج سرعتی</h3>
                <div className="mt-2 text-xl font-extrabold text-indigo-600 dark:text-indigo-400 tabular-nums">
                  ۷ تا ۱۲ میلیون تومان
                </div>
              </div>
              <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                <li>• طراحی ۱ صفحه مدرن ریسپانسیو با Bolt/v0</li>
                <li>• اتصال به پنل پیامکی دریافت سرنخ</li>
                <li>• تست و لایو کردن روی هاست کارفرما</li>
                <li>• زمان تحویل: ۲ تا ۳ روز کاری</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl border-2 border-indigo-500 bg-indigo-50/30 dark:bg-indigo-950/20 relative space-y-4 shadow-lg">
              <div className="absolute -top-3 left-4 px-2.5 py-0.5 rounded-full bg-indigo-600 text-white text-[10px] font-bold">
                پرفروش‌ترین پکیج تجاری
              </div>
              <div className="pb-3 border-b border-indigo-200 dark:border-indigo-800/80">
                <span className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">پلن شماره ۲</span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">سایت شرکتی چندصفحه‌ای</h3>
                <div className="mt-2 text-xl font-extrabold text-indigo-600 dark:text-indigo-400 tabular-nums">
                  ۱۸ تا ۳۵ میلیون تومان
                </div>
              </div>
              <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                <li>• ۴ تا ۶ صفحه (خانه، خدمات، درباره ما، تماس، بلاگ)</li>
                <li>• سئوی تکنیکال اولیه و ثبت در سرچ کنسول گوگل</li>
                <li>• فرم پیشرفته استعلام قیمت و فرم استخدام</li>
                <li>• زمان تحویل: ۵ تا ۷ روز کاری</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-4">
              <div className="pb-3 border-b border-slate-100 dark:border-slate-800">
                <span className="text-xs text-slate-500 font-medium">پلن شماره ۳</span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">فروشگاهی هوشمند</h3>
                <div className="mt-2 text-xl font-extrabold text-indigo-600 dark:text-indigo-400 tabular-nums">
                  ۴۰ تا ۷۵+ میلیون تومان
                </div>
              </div>
              <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                <li>• اتصال به درگاه پرداخت مستقیم شاپرکی</li>
                <li>• محاسبه پست و چاپ فاکتور خودکار</li>
                <li>• ربات چت پشتیبانی پاسخگویی به مشتریان</li>
                <li>• زمان تحویل: ۱۰ تا ۱۴ روز کاری</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
