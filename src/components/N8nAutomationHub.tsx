import React, { useState } from 'react';
import { N8N_TERMS, N8N_TEMPLATES } from '../data/specializedHubsData';
import {
  Workflow,
  Cpu,
  Terminal,
  Copy,
  Check,
  Server,
  Code2,
  Sparkles,
  Zap,
  ShieldCheck,
  FileCode,
  DollarSign,
  AlertTriangle
} from 'lucide-react';

export const N8nAutomationHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'templates' | 'terms' | 'selfHost' | 'aiAgents' | 'agencyModel'>('templates');
  const [copiedTemplateId, setCopiedTemplateId] = useState<string | null>(null);

  const copyTemplateJson = (jsonStr: string, id: string) => {
    navigator.clipboard.writeText(jsonStr);
    setCopiedTemplateId(id);
    setTimeout(() => setCopiedTemplateId(null), 2500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Banner */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-1">
              <Workflow className="w-4 h-4" />
              <span>هاب تخصصی شماره ۲</span>
              <span>·</span>
              <span>اتوماسیون فرآیندها با n8n و هوش مصنوعی</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              آژانس اتوماسیون هوش مصنوعی (AAA)؛ ساخت سیستم‌های کاری خودکار
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-3xl leading-relaxed">
              آموزش جامع نرم‌افزار n8n، اصطلاحات کلیدی، مقایسه سلف‌هاست، قالب‌های آماده ورک‌فلو با هوش مصنوعی و نحوه فروش به شرکت‌ها.
            </p>
          </div>
        </div>

        {/* Sub Nav */}
        <div className="mt-6 flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          <button
            onClick={() => setActiveTab('templates')}
            className={`px-3 py-2 rounded-lg font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'templates'
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <FileCode className="w-3.5 h-3.5" />
            قالب‌های آماده ورک‌فلو (JSON)
          </button>
          <button
            onClick={() => setActiveTab('terms')}
            className={`px-3 py-2 rounded-lg font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'terms'
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            اصطلاحات و واژه‌نامه تخصصی
          </button>
          <button
            onClick={() => setActiveTab('aiAgents')}
            className={`px-3 py-2 rounded-lg font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'aiAgents'
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            ساخت ایجنت‌های هوشمند با ابزار و حافظه
          </button>
          <button
            onClick={() => setActiveTab('selfHost')}
            className={`px-3 py-2 rounded-lg font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'selfHost'
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Server className="w-3.5 h-3.5" />
            نصب رایگان روی سرور (Self-Hosting Docker)
          </button>
          <button
            onClick={() => setActiveTab('agencyModel')}
            className={`px-3 py-2 rounded-lg font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'agencyModel'
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <DollarSign className="w-3.5 h-3.5" />
            تعرفه‌گذاری و قرارداد آژانس AAA
          </button>
        </div>
      </div>

      {/* Tab 1: Ready Workflow Templates */}
      {activeTab === 'templates' && (
        <div className="space-y-6">
          <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
            💡 <strong className="text-slate-900 dark:text-white">نحوه استفاده در n8n:</strong> هر یک از کدهای JSON زیر را کپی کنید، وارد صفحه ورک‌فلو در نرم‌افزار n8n شوید و کلیدهای <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 font-mono text-slate-800 dark:text-slate-200">Ctrl + V</kbd> را بزنید؛ تمام نودها به همراه اتصالات و تنظیمات فوراً روی صفحه نقش می‌بندند!
          </div>

          <div className="space-y-6">
            {N8N_TEMPLATES.map((tmpl) => (
              <div
                key={tmpl.id}
                className="p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 font-medium">
                        {tmpl.category}
                      </span>
                      <span className="text-xs text-slate-500">
                        درجه سختی: <strong className="text-slate-700 dark:text-slate-300">{tmpl.difficulty}</strong>
                      </span>
                      <span className="text-xs text-slate-500">·</span>
                      <span className="text-xs text-slate-500">
                        زمان راه‌اندازی: ~{tmpl.estimatedSetupMinutes} دقیقه
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      {tmpl.title}
                    </h3>
                  </div>

                  <button
                    onClick={() => copyTemplateJson(tmpl.workflowJsonSnippet, tmpl.id)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-xs font-semibold text-white transition-colors shrink-0 shadow-sm shadow-emerald-600/20"
                  >
                    {copiedTemplateId === tmpl.id ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
                    {copiedTemplateId === tmpl.id ? 'کپی شد!' : 'کپی کد JSON قالب'}
                  </button>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {tmpl.description}
                </p>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 text-xs space-y-2">
                  <div className="flex flex-wrap items-center gap-1 text-[11px]">
                    <span className="text-slate-500">نودهای به کار رفته:</span>
                    {tmpl.nodesUsed.map((node, nIdx) => (
                      <span key={nIdx} className="px-2 py-0.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-mono text-[10px]">
                        {node}
                      </span>
                    ))}
                  </div>

                  <div className="text-[11px] text-slate-600 dark:text-slate-400">
                    <strong className="text-slate-800 dark:text-slate-200">نمونه استفاده تجاری: </strong>
                    {tmpl.realWorldUseCase}
                  </div>
                </div>

                <div className="relative rounded-xl bg-slate-950 border border-slate-800 p-3 text-[11px] font-mono text-slate-300 max-h-36 overflow-y-auto">
                  <pre className="select-all leading-tight">{tmpl.workflowJsonSnippet}</pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: Terms */}
      {activeTab === 'terms' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {N8N_TERMS.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-2"
            >
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-xs">
                  {idx + 1}
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  {item.term}
                </h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.meaning}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Tab 3: AI Agents in n8n */}
      {activeTab === 'aiAgents' && (
        <div className="space-y-6 text-xs text-slate-700 dark:text-slate-300">
          <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-500" />
              معماری ساخت دستیار هوشمند در n8n (نود AI Agent)
            </h3>
            <p className="leading-relaxed text-slate-600 dark:text-slate-400">
              در نسخه‌های جدید n8n، هوش مصنوعی دیگر فقط یک مدل زبانی ساده برای چت کردن نیست، بلکه یک «ایجنت مستقل (Autonomous Agent)» است که به ابزارهای سازمان شما وصل می‌شود و تصمیم می‌گیرد چه اقدامی انجام دهد.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1">
                <span className="font-bold text-slate-900 dark:text-white block">۱. مدل زبانی (Chat Model)</span>
                <span className="text-slate-500 text-[11px] leading-relaxed block">
                  مغز تفکر ایجنت؛ اتصال به Gemini 1.5 Flash، Claude 3.5 Sonnet یا OpenAI GPT-4o.
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1">
                <span className="font-bold text-slate-900 dark:text-white block">۲. ابزارها (Tools)</span>
                <span className="text-slate-500 text-[11px] leading-relaxed block">
                  توانایی خواندن ایمیل، جستجو در گوگل، فراخوانی API و ثبت داده‌ها در پایگاه داده SQL.
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1">
                <span className="font-bold text-slate-900 dark:text-white block">۳. حافظه گفتگو (Memory)</span>
                <span className="text-slate-500 text-[11px] leading-relaxed block">
                  حفظ تاریخچه چت کاربر با نود Window Buffer Memory برای ادامه مکالمات چندمرحله‌ای.
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Self Host Docker */}
      {activeTab === 'selfHost' && (
        <div className="space-y-6">
          <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Server className="w-5 h-5 text-emerald-500" />
              اجرای n8n نامحدود روی سرور مجازی لینوکس با Docker Compose
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              اشتراک رسمی n8n Cloud ماهانه حداقل ۲۰ یورو هزینه دارد و اجرای تسک‌ها محدود است. با خرید یک سرور مجازی (VPS) لینوکس (ماهانه حدود ۲۰۰ تا ۳۰۰ هزار تومان) می‌توانید نسخه کامل و رایگان را به صورت خودمیزبان (Self-Hosted) بدون محدودیت اجرا کنید.
            </p>

            <div className="space-y-2">
              <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                فایل docker-compose.yml استاندارد:
              </span>
              <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-emerald-400 overflow-x-auto leading-relaxed select-all">
{`version: '3.8'

services:
  n8n:
    image: docker.n8n.io/n8nio/n8n
    restart: always
    ports:
      - "5678:5678"
    environment:
      - N8N_HOST=n8n.yourdomain.com
      - N8N_PORT=5678
      - N8N_PROTOCOL=https
      - NODE_ENV=production
      - WEBHOOK_URL=https://n8n.yourdomain.com/
      - GENERIC_TIMEZONE=Asia/Tehran
    volumes:
      - ~/.n8n:/home/node/.n8n`}
              </pre>
            </div>
          </div>
        </div>
      )}

      {/* Tab 5: Agency Model */}
      {activeTab === 'agencyModel' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3">
              <span className="font-bold text-sm text-slate-900 dark:text-white block">مدل ۱: پروژه‌ای (Fixed Setup)</span>
              <div className="text-lg font-extrabold text-emerald-600 dark:text-emerald-400 tabular-nums">
                ۱۵ تا ۶۰ میلیون تومان
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                دریافت هزینه برای طراحی یک اتوماسیون مشخص (مثلاً اتصال CRM به پنل پیامکی و استخراج داده با هوش مصنوعی).
              </p>
            </div>

            <div className="p-5 rounded-2xl border-2 border-emerald-500 bg-emerald-50/20 dark:bg-emerald-950/20 space-y-3 shadow-lg">
              <span className="font-bold text-sm text-slate-900 dark:text-white block">مدل ۲: اشتراک ماهانه پشتیبانی (Retainer)</span>
              <div className="text-lg font-extrabold text-emerald-600 dark:text-emerald-400 tabular-nums">
                ۳ تا ۱۰ میلیون تومان / ماه
              </div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                مانیتورینگ روزانه، رفع خطای وب‌هوک‌ها، به‌روزرسانی پرامپت‌ها و بهینه‌سازی مداوم پایپ‌لاین‌های کسب‌وکار مشتری.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3">
              <span className="font-bold text-sm text-slate-900 dark:text-white block">مدل ۳: سهم از بهره‌وری (Performance)</span>
              <div className="text-lg font-extrabold text-emerald-600 dark:text-emerald-400 tabular-nums">
                ۱۰٪ تا ۲۵٪ از هزینه صرفه‌جویی‌شده
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                محاسبه حقوق کارمندانی که وقتشان آزاد شده یا سرنخ‌های فروش اضافه‌ای که توسط ربات جذب و بسته شده‌اند.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
