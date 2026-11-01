import React, { useState, useEffect } from 'react';
import { Navbar, ActiveTabType } from './components/Navbar';
import { PresentationView } from './components/PresentationView';
import { SlideDetailView } from './components/SlideDetailView';
import { WebDesignHub } from './components/WebDesignHub';
import { N8nAutomationHub } from './components/N8nAutomationHub';
import { ContentStudioHub } from './components/ContentStudioHub';
import { ClaudeEcosystemHub } from './components/ClaudeEcosystemHub';
import { MonetizationMatrix } from './components/MonetizationMatrix';
import { ChecklistView } from './components/ChecklistView';
import { VbaExportView } from './components/VbaExportView';
import { AiCoachDrawer } from './components/AiCoachDrawer';
import { SLIDES_DATA } from './data/slidesData';
import { INITIAL_CHECKLIST } from './data/checklistData';
import { downloadPowerPointFile } from './utils/pptxExport';
import { AudienceType, PresentationLevel, SlideData } from './types/presentation';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTabType>('presentation');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [audience, setAudience] = useState<AudienceType>('general');
  const [level, setLevel] = useState<PresentationLevel>('intermediate');
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const [isAiCoachOpen, setIsAiCoachOpen] = useState<boolean>(false);
  const [coachSlide, setCoachSlide] = useState<SlideData>(SLIDES_DATA[0]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync theme with document.documentElement for Tailwind v4 dark variant
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const handleDownloadPptx = async () => {
    try {
      setIsDownloading(true);
      await downloadPowerPointFile();
      showToast('فایل پاورپوینت (.pptx) با تمام ۲۰ اسلاید و یادداشت‌ها با موفقیت دانلود شد!');
    } catch (error) {
      console.error('Failed to export PPTX:', error);
      showToast('خطا در دانلود خودکار PPTX. می‌توانید از تب کد ماکروی VBA استفاده کنید.');
    } finally {
      setIsDownloading(false);
    }
  };

  const handleOpenAiCoach = (slide?: SlideData) => {
    setCoachSlide(slide || SLIDES_DATA[currentSlideIndex]);
    setIsAiCoachOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors selection:bg-indigo-500 selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-xl bg-slate-900 text-white border border-indigo-500 text-xs sm:text-sm shadow-2xl flex items-center gap-2 animate-fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onDownloadPptx={handleDownloadPptx}
        isDownloading={isDownloading}
        onOpenAiCoach={() => handleOpenAiCoach(SLIDES_DATA[currentSlideIndex])}
        theme={theme}
        setTheme={setTheme}
      />

      {/* Main Tab Routing */}
      <main className="flex-1">
        {activeTab === 'presentation' && (
          <PresentationView
            slides={SLIDES_DATA}
            audience={audience}
            setAudience={setAudience}
            level={level}
            setLevel={setLevel}
            currentSlideIndex={currentSlideIndex}
            setCurrentSlideIndex={setCurrentSlideIndex}
            onOpenAiCoachForSlide={handleOpenAiCoach}
          />
        )}

        {activeTab === 'slides' && (
          <SlideDetailView
            slides={SLIDES_DATA}
            onSelectSlideForPresentation={(idx) => {
              setCurrentSlideIndex(idx);
              setActiveTab('presentation');
            }}
            onOpenAiCoachForSlide={handleOpenAiCoach}
          />
        )}

        {activeTab === 'webdesign' && <WebDesignHub />}

        {activeTab === 'n8n' && <N8nAutomationHub />}

        {activeTab === 'content' && <ContentStudioHub />}

        {activeTab === 'claude' && <ClaudeEcosystemHub />}

        {activeTab === 'matrix' && (
          <MonetizationMatrix
            slides={SLIDES_DATA}
            onSelectSlide={(idx) => {
              setCurrentSlideIndex(idx);
              setActiveTab('presentation');
            }}
          />
        )}

        {activeTab === 'checklist' && (
          <ChecklistView initialItems={INITIAL_CHECKLIST} />
        )}

        {activeTab === 'vba' && (
          <VbaExportView
            onDownloadPptx={handleDownloadPptx}
            isDownloading={isDownloading}
          />
        )}
      </main>

      {/* AI Presenter Coach Drawer */}
      <AiCoachDrawer
        isOpen={isAiCoachOpen}
        onClose={() => setIsAiCoachOpen(false)}
        currentSlide={coachSlide}
        audience={audience}
        level={level}
      />
    </div>
  );
}
