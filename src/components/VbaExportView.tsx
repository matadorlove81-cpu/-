import React, { useState } from 'react';
import { generatePowerPointVbaCode } from '../utils/vbaGenerator';
import {
  Code2,
  Copy,
  Check,
  Download,
  Terminal,
  HelpCircle,
  ExternalLink,
  Laptop
} from 'lucide-react';

interface VbaExportViewProps {
  onDownloadPptx: () => void;
  isDownloading: boolean;
}

export const VbaExportView: React.FC<VbaExportViewProps> = ({
  onDownloadPptx,
  isDownloading,
}) => {
  const [copied, setCopied] = useState(false);
  const vbaCode = generatePowerPointVbaCode();

  const handleCopy = () => {
    navigator.clipboard.writeText(vbaCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Title */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
              <Code2 className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              کد ماکروی خودکار VBA برای ساخت مستقیم در مایکروسافت پاورپوینت
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
              اگر می‌خواهید اسلایدها مستقیماً با ماکرو داخل برنامه PowerPoint شما خلق شوند، از این اسکریپت استاندارد استفاده کنید.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white transition-colors shadow-sm shadow-indigo-600/20"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
              {copied ? 'کد با موفقیت کپی شد!' : 'کپی کامل کد ماکرو VBA'}
            </button>

            <button
              onClick={onDownloadPptx}
              disabled={isDownloading}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs text-slate-700 dark:text-slate-200 transition-colors"
            >
              <Download className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              دانلود مستقیم فایل .PPTX
            </button>
          </div>
        </div>
      </div>

      {/* 4-Step Visual Guide */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 shadow-sm">
          <div className="w-7 h-7 rounded-lg bg-indigo-50 dark:bg-indigo-600/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xs font-mono font-bold">
            ۱
          </div>
          <h3 className="text-xs font-bold text-slate-900 dark:text-white">باز کردن پنجره VBA</h3>
          <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
            در نرم‌افزار PowerPoint یک ارائه خالی بسازید و کلیدهای ترکیبی <kbd className="px-1 py-0.5 rounded bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-indigo-600 dark:text-indigo-300">Alt + F11</kbd> را بفشارید.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 shadow-sm">
          <div className="w-7 h-7 rounded-lg bg-indigo-50 dark:bg-indigo-600/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xs font-mono font-bold">
            ۲
          </div>
          <h3 className="text-xs font-bold text-slate-900 dark:text-white">ایجاد ماژول جدید</h3>
          <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
            از نوار منوی بالای ادیتور VBA روی منوی <strong className="text-slate-800 dark:text-slate-200">Insert</strong> کلیک کرده و گزینه <strong className="text-slate-800 dark:text-slate-200">Module</strong> را انتخاب کنید.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 shadow-sm">
          <div className="w-7 h-7 rounded-lg bg-indigo-50 dark:bg-indigo-600/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xs font-mono font-bold">
            ۳
          </div>
          <h3 className="text-xs font-bold text-slate-900 dark:text-white">پیست کردن کد ماکرو</h3>
          <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
            روی دکمه «کپی کامل کد ماکرو» بزنید و کد را داخل محیط ماژول پیست (<kbd className="px-1 py-0.5 rounded bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-indigo-600 dark:text-indigo-300">Ctrl + V</kbd>) کنید.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 shadow-sm">
          <div className="w-7 h-7 rounded-lg bg-indigo-50 dark:bg-indigo-600/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xs font-mono font-bold">
            ۴
          </div>
          <h3 className="text-xs font-bold text-slate-900 dark:text-white">اجرا و خلق اسلایدها</h3>
          <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
            کلید <kbd className="px-1 py-0.5 rounded bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-indigo-600 dark:text-indigo-300">F5</kbd> یا دکمه سبز Run را بزنید؛ تمام ۲۰ اسلاید با یادداشت‌ها ساخته می‌شوند!
          </p>
        </div>
      </div>

      {/* Code Display Container */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-950 overflow-hidden shadow-2xl">
        <div className="bg-slate-900/90 border-b border-slate-800 px-4 py-2.5 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-indigo-400" />
            <span className="font-mono text-slate-300">AIPresentationAutomation.bas</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] text-slate-500 font-mono">VB For Applications (PowerPoint)</span>
            <button
              onClick={handleCopy}
              className="text-xs text-indigo-400 hover:text-white flex items-center gap-1"
            >
              <Copy className="w-3.5 h-3.5" />
              کپی
            </button>
          </div>
        </div>

        <pre className="p-5 font-mono text-[11px] sm:text-xs text-slate-300 overflow-x-auto max-h-[550px] leading-relaxed select-all">
          {vbaCode}
        </pre>
      </div>

      {/* Troubleshooting note */}
      <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
        <strong className="text-amber-600 dark:text-amber-400 block mb-1">نکته امنیتی ماکروها در پاورپوینت:</strong>
        اگر هنگام اجرای ماکرو با پیام مسدود بودن ماکروها (Macro Blocked) مواجه شدید، از مسیر <code className="text-slate-800 dark:text-slate-200">File &gt; Options &gt; Trust Center &gt; Trust Center Settings &gt; Macro Settings</code> گزینه <code className="text-slate-800 dark:text-slate-200">Enable all macros</code> را فعال کنید. همچنین می‌توانید بدون نیاز به کد، دکمه «دانلود مستقیم فایل .PPTX» در بالای صفحه را بفشارید تا همان فایل مستقیماً دانلود شود.
      </div>
    </div>
  );
};
