import React from 'react';
import {
  MonitorPlay,
  Layers,
  Globe,
  Workflow,
  Film,
  Brain,
  Table,
  CheckSquare,
  Code2,
  Download,
  Sun,
  Moon,
  Sparkles
} from 'lucide-react';

export type ActiveTabType =
  | 'presentation'
  | 'slides'
  | 'webdesign'
  | 'n8n'
  | 'content'
  | 'claude'
  | 'matrix'
  | 'checklist'
  | 'vba';

interface NavbarProps {
  activeTab: ActiveTabType;
  setActiveTab: (tab: ActiveTabType) => void;
  onDownloadPptx: () => void;
  isDownloading: boolean;
  onOpenAiCoach: () => void;
  theme: 'dark' | 'light';
  setTheme: (theme: 'dark' | 'light') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onDownloadPptx,
  isDownloading,
  onOpenAiCoach,
  theme,
  setTheme,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
        {/* Zone 1: Single-line Brand Title */}
        <div className="flex items-center gap-2.5 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-indigo-600/10 dark:bg-indigo-600/30 border border-indigo-500/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold">
            <MonitorPlay className="w-4 h-4" />
          </div>
          <span className="text-sm sm:text-base font-black tracking-tight text-slate-900 dark:text-white whitespace-nowrap">
            مرجع جامع کسب درآمد از هوش مصنوعی
          </span>
        </div>

        {/* Zone 2: Navigation Links (Clean single line) */}
        <nav className="hidden xl:flex items-center gap-5 text-xs font-semibold text-slate-600 dark:text-slate-400">
          <button
            onClick={() => setActiveTab('presentation')}
            className={`whitespace-nowrap transition-colors flex items-center gap-1 py-1 ${
              activeTab === 'presentation'
                ? 'text-indigo-600 dark:text-indigo-400 font-bold border-b-2 border-indigo-600 dark:border-indigo-400'
                : 'hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <MonitorPlay className="w-3.5 h-3.5" />
            حالت ارائه
          </button>

          <button
            onClick={() => setActiveTab('slides')}
            className={`whitespace-nowrap transition-colors flex items-center gap-1 py-1 ${
              activeTab === 'slides'
                ? 'text-indigo-600 dark:text-indigo-400 font-bold border-b-2 border-indigo-600 dark:border-indigo-400'
                : 'hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            اسلایدها (۲۰)
          </button>

          <button
            onClick={() => setActiveTab('webdesign')}
            className={`whitespace-nowrap transition-colors flex items-center gap-1 py-1 ${
              activeTab === 'webdesign'
                ? 'text-indigo-600 dark:text-indigo-400 font-bold border-b-2 border-indigo-600 dark:border-indigo-400'
                : 'hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Globe className="w-3.5 h-3.5 text-indigo-500" />
            طراحی سایت و cPanel
          </button>

          <button
            onClick={() => setActiveTab('n8n')}
            className={`whitespace-nowrap transition-colors flex items-center gap-1 py-1 ${
              activeTab === 'n8n'
                ? 'text-indigo-600 dark:text-indigo-400 font-bold border-b-2 border-indigo-600 dark:border-indigo-400'
                : 'hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Workflow className="w-3.5 h-3.5 text-emerald-500" />
            اتوماسیون n8n
          </button>

          <button
            onClick={() => setActiveTab('content')}
            className={`whitespace-nowrap transition-colors flex items-center gap-1 py-1 ${
              activeTab === 'content'
                ? 'text-indigo-600 dark:text-indigo-400 font-bold border-b-2 border-indigo-600 dark:border-indigo-400'
                : 'hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Film className="w-3.5 h-3.5 text-rose-500" />
            استودیو ویدیو و عکس
          </button>

          <button
            onClick={() => setActiveTab('claude')}
            className={`whitespace-nowrap transition-colors flex items-center gap-1 py-1 ${
              activeTab === 'claude'
                ? 'text-indigo-600 dark:text-indigo-400 font-bold border-b-2 border-indigo-600 dark:border-indigo-400'
                : 'hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Brain className="w-3.5 h-3.5 text-amber-500" />
            کلاد، اسکیل‌ها و NotebookLM
          </button>

          <button
            onClick={() => setActiveTab('matrix')}
            className={`whitespace-nowrap transition-colors flex items-center gap-1 py-1 ${
              activeTab === 'matrix'
                ? 'text-indigo-600 dark:text-indigo-400 font-bold border-b-2 border-indigo-600 dark:border-indigo-400'
                : 'hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Table className="w-3.5 h-3.5" />
            جدول درآمد
          </button>

          <button
            onClick={() => setActiveTab('checklist')}
            className={`whitespace-nowrap transition-colors flex items-center gap-1 py-1 ${
              activeTab === 'checklist'
                ? 'text-indigo-600 dark:text-indigo-400 font-bold border-b-2 border-indigo-600 dark:border-indigo-400'
                : 'hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <CheckSquare className="w-3.5 h-3.5" />
            چک‌لیست
          </button>

          <button
            onClick={() => setActiveTab('vba')}
            className={`whitespace-nowrap transition-colors flex items-center gap-1 py-1 ${
              activeTab === 'vba'
                ? 'text-indigo-600 dark:text-indigo-400 font-bold border-b-2 border-indigo-600 dark:border-indigo-400'
                : 'hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            ماکرو VBA
          </button>
        </nav>

        {/* Zone 3: Actions & Dual Theme Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Black & White Dual Theme Toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-lg border border-slate-300 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white transition-colors"
            title={theme === 'dark' ? 'تغییر به تم روشن (سفید)' : 'تغییر به تم تاریک (مشکی)'}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          {/* AI Coach */}
          <button
            onClick={onOpenAiCoach}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg border border-slate-300 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:border-indigo-500 transition-colors whitespace-nowrap"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            مربی هوشمند
          </button>

          {/* PPTX Download */}
          <button
            onClick={onDownloadPptx}
            disabled={isDownloading}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 disabled:opacity-50 rounded-lg transition-colors shadow-sm shadow-indigo-600/30 whitespace-nowrap"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{isDownloading ? 'آماده‌سازی...' : 'دانلود فایل پاورپوینت (.pptx)'}</span>
            <span className="sm:hidden">PPTX</span>
          </button>
        </div>
      </div>

      {/* Responsive Horizontal Tab Bar for Medium/Small Viewports */}
      <div className="xl:hidden flex items-center gap-1 px-4 py-2 overflow-x-auto border-t border-slate-200 dark:border-slate-800 text-xs bg-slate-50 dark:bg-slate-900/60">
        <button
          onClick={() => setActiveTab('presentation')}
          className={`px-2.5 py-1 rounded-md whitespace-nowrap font-medium ${
            activeTab === 'presentation'
              ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900'
              : 'text-slate-600 dark:text-slate-400'
          }`}
        >
          ارائه زنده
        </button>
        <button
          onClick={() => setActiveTab('slides')}
          className={`px-2.5 py-1 rounded-md whitespace-nowrap font-medium ${
            activeTab === 'slides'
              ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900'
              : 'text-slate-600 dark:text-slate-400'
          }`}
        >
          اسلایدها (۲۰)
        </button>
        <button
          onClick={() => setActiveTab('webdesign')}
          className={`px-2.5 py-1 rounded-md whitespace-nowrap font-medium ${
            activeTab === 'webdesign'
              ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900'
              : 'text-slate-600 dark:text-slate-400'
          }`}
        >
          طراحی سایت و cPanel
        </button>
        <button
          onClick={() => setActiveTab('n8n')}
          className={`px-2.5 py-1 rounded-md whitespace-nowrap font-medium ${
            activeTab === 'n8n'
              ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900'
              : 'text-slate-600 dark:text-slate-400'
          }`}
        >
          اتوماسیون n8n
        </button>
        <button
          onClick={() => setActiveTab('content')}
          className={`px-2.5 py-1 rounded-md whitespace-nowrap font-medium ${
            activeTab === 'content'
              ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900'
              : 'text-slate-600 dark:text-slate-400'
          }`}
        >
          استودیو ویدیو
        </button>
        <button
          onClick={() => setActiveTab('claude')}
          className={`px-2.5 py-1 rounded-md whitespace-nowrap font-medium ${
            activeTab === 'claude'
              ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900'
              : 'text-slate-600 dark:text-slate-400'
          }`}
        >
          کلاد و NotebookLM
        </button>
        <button
          onClick={() => setActiveTab('matrix')}
          className={`px-2.5 py-1 rounded-md whitespace-nowrap font-medium ${
            activeTab === 'matrix'
              ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900'
              : 'text-slate-600 dark:text-slate-400'
          }`}
        >
          جدول درآمد
        </button>
        <button
          onClick={() => setActiveTab('checklist')}
          className={`px-2.5 py-1 rounded-md whitespace-nowrap font-medium ${
            activeTab === 'checklist'
              ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900'
              : 'text-slate-600 dark:text-slate-400'
          }`}
        >
          چک‌لیست
        </button>
        <button
          onClick={() => setActiveTab('vba')}
          className={`px-2.5 py-1 rounded-md whitespace-nowrap font-medium ${
            activeTab === 'vba'
              ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900'
              : 'text-slate-600 dark:text-slate-400'
          }`}
        >
          کد VBA
        </button>
      </div>
    </header>
  );
};
