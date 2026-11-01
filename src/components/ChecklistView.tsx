import React, { useState } from 'react';
import { ChecklistItem } from '../types/presentation';
import {
  CheckCircle2,
  Circle,
  RotateCcw,
  CheckCheck,
  ShieldCheck,
  Cpu,
  FileText,
  Mic,
  Users
} from 'lucide-react';

interface ChecklistViewProps {
  initialItems: ChecklistItem[];
}

export const ChecklistView: React.FC<ChecklistViewProps> = ({ initialItems }) => {
  const [items, setItems] = useState<ChecklistItem[]>(initialItems);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const toggleItem = (id: string) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, isDone: !item.isDone } : item))
    );
  };

  const markAllDone = () => {
    setItems((prev) => prev.map((item) => ({ ...item, isDone: true })));
  };

  const resetAll = () => {
    setItems((prev) => prev.map((item) => ({ ...item, isDone: false })));
  };

  const completedCount = items.filter((i) => i.isDone).length;
  const progressPercent = Math.round((completedCount / items.length) * 100);

  const filteredItems = items.filter(
    (item) => selectedCategory === 'all' || item.category === selectedCategory
  );

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Title */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              چک‌لیست آماده‌سازی قبل از اجرای ارائه
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
              مجموعه کامل اقدامات فنی، ساختاری و روانی سخنران برای تضمین یک ارائه بی‌نقص و به یادماندنی
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={resetAll}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs text-slate-700 dark:text-slate-300 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              ریست چک‌لیست
            </button>
            <button
              onClick={markAllDone}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white transition-colors shadow-sm shadow-indigo-600/20"
            >
              <CheckCheck className="w-3.5 h-3.5" />
              انجام همه
            </button>
          </div>
        </div>

        {/* Progress Bar Card */}
        <div className="mt-6 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 shadow-sm">
          <div className="flex items-center justify-between text-xs font-medium">
            <span className="text-slate-700 dark:text-slate-300">میزان آمادگی سخنران برای شروع:</span>
            <span className="text-indigo-600 dark:text-indigo-400 font-mono font-bold tabular-nums">
              {completedCount} از {items.length} آیتم ({progressPercent}٪)
            </span>
          </div>
          <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-950 rounded-full overflow-hidden border border-slate-200 dark:border-slate-800">
            <div
              className={`h-full transition-all duration-500 ${
                progressPercent === 100
                  ? 'bg-emerald-500'
                  : progressPercent > 50
                  ? 'bg-indigo-500'
                  : 'bg-amber-500'
              }`}
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          {progressPercent === 100 && (
            <div className="text-xs text-emerald-600 dark:text-emerald-400 font-medium pt-1 flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4" />
              تبریک! شما ۱۰۰٪ برای اجرای یک ارائه فوق‌العاده و مقتدرانه آماده هستید.
            </div>
          )}
        </div>

        {/* Category Filters */}
        <div className="mt-6 flex items-center gap-2 overflow-x-auto pb-1 text-xs">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors font-medium ${
              selectedCategory === 'all'
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm'
                : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            همه بخش‌ها ({items.length})
          </button>
          <button
            onClick={() => setSelectedCategory('hardware')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors font-medium flex items-center gap-1 ${
              selectedCategory === 'hardware'
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm'
                : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            تجهیزات و سخت‌افزار
          </button>
          <button
            onClick={() => setSelectedCategory('content')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors font-medium flex items-center gap-1 ${
              selectedCategory === 'content'
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm'
                : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            محتوا و اسلایدها
          </button>
          <button
            onClick={() => setSelectedCategory('rehearsal')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors font-medium flex items-center gap-1 ${
              selectedCategory === 'rehearsal'
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm'
                : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Mic className="w-3.5 h-3.5" />
            تمرین و فن بیان
          </button>
          <button
            onClick={() => setSelectedCategory('presentation')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors font-medium flex items-center gap-1 ${
              selectedCategory === 'presentation'
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm'
                : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            اجرای صحنه و پرسش‌وپاسخ
          </button>
        </div>
      </div>

      {/* Checklist Items List */}
      <div className="space-y-3">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => toggleItem(item.id)}
            className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 ${
              item.isDone
                ? 'bg-slate-50 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800/80 text-slate-400'
                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm'
            }`}
          >
            <div className="mt-0.5 shrink-0">
              {item.isDone ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              ) : (
                <Circle className="w-5 h-5 text-slate-400 dark:text-slate-600 hover:text-indigo-500" />
              )}
            </div>

            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between gap-3">
                <h3
                  className={`text-sm font-semibold tracking-tight ${
                    item.isDone ? 'line-through text-slate-400 dark:text-slate-600' : 'text-slate-900 dark:text-white'
                  }`}
                >
                  {item.title}
                </h3>

                <span
                  className={`text-[11px] px-2 py-0.5 rounded font-medium whitespace-nowrap ${
                    item.priority === 'ضروری'
                      ? 'bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300'
                      : item.priority === 'مهم'
                      ? 'bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  {item.priority}
                </span>
              </div>

              <p className={`text-xs leading-relaxed ${item.isDone ? 'text-slate-400 dark:text-slate-600' : 'text-slate-600 dark:text-slate-400'}`}>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
