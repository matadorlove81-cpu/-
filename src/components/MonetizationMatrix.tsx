import React, { useState } from 'react';
import { SlideData } from '../types/presentation';
import {
  ArrowUpDown,
  Search,
  Download,
  Copy,
  Check,
  TrendingUp,
  Table as TableIcon
} from 'lucide-react';

interface MonetizationMatrixProps {
  slides: SlideData[];
  onSelectSlide: (index: number) => void;
}

export const MonetizationMatrix: React.FC<MonetizationMatrixProps> = ({
  slides,
  onSelectSlide,
}) => {
  const [search, setSearch] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('all');
  const [sortField, setSortField] = useState<'attractivenessScore' | 'difficulty' | 'title'>('attractivenessScore');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [isCopied, setIsCopied] = useState(false);

  // Extract all slides that have monetization details
  const methodSlides = slides.filter((s) => s.monetization);

  const filteredMethods = methodSlides
    .filter((s) => {
      const matchesSearch =
        s.title.toLowerCase().includes(search.toLowerCase()) ||
        s.monetization?.tools.some((t) => t.toLowerCase().includes(search.toLowerCase())) ||
        s.monetization?.realWorldExample.toLowerCase().includes(search.toLowerCase());

      const matchesDiff =
        difficultyFilter === 'all' || s.monetization?.difficulty.includes(difficultyFilter);

      return matchesSearch && matchesDiff;
    })
    .sort((a, b) => {
      if (sortField === 'attractivenessScore') {
        const valA = a.monetization?.attractivenessScore || 0;
        const valB = b.monetization?.attractivenessScore || 0;
        return sortDirection === 'desc' ? valB - valA : valA - valB;
      }
      if (sortField === 'title') {
        return sortDirection === 'desc'
          ? b.title.localeCompare(a.title)
          : a.title.localeCompare(b.title);
      }
      return 0;
    });

  const handleSort = (field: 'attractivenessScore' | 'difficulty' | 'title') => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'desc' ? 'asc' : 'desc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  const copyTableMarkdown = () => {
    let md = `| شماره | روش کسب درآمد | سطح سختی | سرمایه اولیه | درآمد ماهانه (تومان) | درآمد دلاری | زمان تا درآمد | ابزارها | مثال واقعی |\n`;
    md += `|---|---|---|---|---|---|---|---|---|\n`;

    filteredMethods.forEach((m) => {
      const mon = m.monetization!;
      md += `| ${m.methodCode || m.slideNumber} | ${m.title} | ${mon.difficulty} | ${mon.initialCapital} | ${mon.estimatedMonthlyIncomeToman} | ${mon.estimatedMonthlyIncomeUSD} | ${mon.timeToFirstIncome} | ${mon.tools.slice(0, 3).join('، ')} | ${mon.realWorldExample} |\n`;
    });

    navigator.clipboard.writeText(md);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const downloadCSV = () => {
    let csv = `ردیف,روش کسب درآمد,سطح سختی,سرمایه اولیه,درآمد ماهانه تومان,درآمد ماهانه دلار,زمان تا اولین درآمد,ابزارها,مثال واقعی\n`;
    filteredMethods.forEach((m) => {
      const mon = m.monetization!;
      csv += `"${m.methodCode || m.slideNumber}","${m.title}","${mon.difficulty}","${mon.initialCapital}","${mon.estimatedMonthlyIncomeToman}","${mon.estimatedMonthlyIncomeUSD}","${mon.timeToFirstIncome}","${mon.tools.join(' - ')}","${mon.realWorldExample.replace(/"/g, '""')}"\n`;
    });

    const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'جدول_روش_های_کسب_درآمد_هوش_مصنوعی.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Title & Stats */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
              <TableIcon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              جدول جامع مقایسه‌ای روش‌های درآمدزایی هوش مصنوعی
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
              تحلیل و رتبه‌بندی ۱۲ متد آزمایش‌شده بر اساس سختی، سرمایه مورد نیاز، پتانسیل درآمدی و ابزارها
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={copyTableMarkdown}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs text-slate-700 dark:text-slate-200 transition-colors"
            >
              {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              کپی متن جدول (Markdown)
            </button>

            <button
              onClick={downloadCSV}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white transition-colors shadow-sm shadow-indigo-600/20"
            >
              <Download className="w-3.5 h-3.5" />
              خروجی اکسل (CSV)
            </button>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="mt-6 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-slate-50 dark:bg-slate-900/80 p-3 rounded-2xl border border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-slate-500 dark:text-slate-400 ml-1">فیلتر سختی:</span>
            <button
              onClick={() => setDifficultyFilter('all')}
              className={`px-3 py-1.5 rounded-lg transition-colors font-medium ${
                difficultyFilter === 'all'
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              همه ({methodSlides.length})
            </button>
            <button
              onClick={() => setDifficultyFilter('آسان')}
              className={`px-3 py-1.5 rounded-lg transition-colors font-medium ${
                difficultyFilter === 'آسان'
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              آسان
            </button>
            <button
              onClick={() => setDifficultyFilter('متوسط')}
              className={`px-3 py-1.5 rounded-lg transition-colors font-medium ${
                difficultyFilter === 'متوسط'
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              متوسط
            </button>
            <button
              onClick={() => setDifficultyFilter('پیشرفته')}
              className={`px-3 py-1.5 rounded-lg transition-colors font-medium ${
                difficultyFilter === 'پیشرفته'
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              پیشرفته
            </button>
          </div>

          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-slate-400 absolute right-3 top-2.5" />
            <input
              type="text"
              placeholder="جستجوی ابزار، متد یا مثال..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg pr-9 pl-3 py-1.5 text-xs text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>
      </div>

      {/* Table Container with horizontal scroll */}
      <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
        <table className="w-full text-right text-xs">
          <thead className="bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400 uppercase border-b border-slate-200 dark:border-slate-800 font-medium">
            <tr>
              <th className="py-3.5 px-4 whitespace-nowrap">کد</th>
              <th
                onClick={() => handleSort('title')}
                className="py-3.5 px-4 cursor-pointer hover:text-indigo-600 dark:hover:text-white whitespace-nowrap"
              >
                <div className="flex items-center gap-1">
                  <span>روش کسب درآمد</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th className="py-3.5 px-4 whitespace-nowrap">سختی</th>
              <th className="py-3.5 px-4 whitespace-nowrap">سرمایه اولیه</th>
              <th className="py-3.5 px-4 whitespace-nowrap">درآمد ماهانه (تومان)</th>
              <th className="py-3.5 px-4 whitespace-nowrap">درآمد ارزی</th>
              <th className="py-3.5 px-4 whitespace-nowrap">زمان تا درآمد</th>
              <th
                onClick={() => handleSort('attractivenessScore')}
                className="py-3.5 px-4 cursor-pointer hover:text-indigo-600 dark:hover:text-white whitespace-nowrap"
              >
                <div className="flex items-center gap-1">
                  <span>امتیاز</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th className="py-3.5 px-4 whitespace-nowrap min-w-[200px]">ابزارهای اصلی</th>
              <th className="py-3.5 px-4 whitespace-nowrap min-w-[240px]">مثال واقعی در بازار</th>
              <th className="py-3.5 px-4 text-center whitespace-nowrap">اقدام</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
            {filteredMethods.map((slide) => {
              const mon = slide.monetization!;
              const slideIndex = slides.findIndex((s) => s.id === slide.id);

              return (
                <tr key={slide.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                  <td className="py-3.5 px-4 font-mono font-bold text-indigo-600 dark:text-indigo-400 whitespace-nowrap">
                    {slide.methodCode || `روش ${slide.slideNumber}`}
                  </td>
                  <td className="py-3.5 px-4 font-bold text-slate-900 dark:text-white whitespace-nowrap">
                    {slide.title}
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <span
                      className={`font-semibold ${
                        mon.difficulty.includes('آسان')
                          ? 'text-emerald-600 dark:text-emerald-400'
                          : mon.difficulty.includes('متوسط')
                          ? 'text-amber-600 dark:text-amber-400'
                          : 'text-rose-600 dark:text-rose-400'
                      }`}
                    >
                      {mon.difficulty}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    {mon.initialCapital}
                  </td>
                  <td className="py-3.5 px-4 font-bold text-emerald-600 dark:text-emerald-400 tabular-nums whitespace-nowrap">
                    {mon.estimatedMonthlyIncomeToman}
                  </td>
                  <td className="py-3.5 px-4 font-semibold text-emerald-600 dark:text-emerald-400 tabular-nums whitespace-nowrap">
                    {mon.estimatedMonthlyIncomeUSD}
                  </td>
                  <td className="py-3.5 px-4 text-slate-500 whitespace-nowrap">
                    {mon.timeToFirstIncome}
                  </td>
                  <td className="py-3.5 px-4 font-mono font-bold text-amber-500 whitespace-nowrap">
                    ★ {mon.attractivenessScore} / ۱۰
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="flex flex-wrap gap-1 max-w-xs">
                      {mon.tools.slice(0, 3).map((tool, tI) => (
                        <span
                          key={tI}
                          className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-[11px] text-slate-700 dark:text-indigo-300 font-mono whitespace-nowrap"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
                    {mon.realWorldExample}
                  </td>
                  <td className="py-3.5 px-4 text-center whitespace-nowrap">
                    <button
                      onClick={() => onSelectSlide(slideIndex)}
                      className="px-2.5 py-1 rounded bg-indigo-50 dark:bg-indigo-600/20 hover:bg-indigo-600 text-indigo-600 dark:text-indigo-300 hover:text-white border border-indigo-200 dark:border-indigo-500/30 text-xs transition-colors font-medium"
                    >
                      اسلاید
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
