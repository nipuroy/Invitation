import React, { useState, useEffect } from 'react';
import {
  Printer,
  X,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Check,
  Palette,
  FileText,
  Sliders,
  Sparkles,
  Info,
} from 'lucide-react';
import { CardTheme } from '../types';
import { FormalLetterCard } from './FormalLetterCard';

interface PrintPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme: CardTheme;
  onThemeChange: (theme: CardTheme) => void;
  recipientName: string;
  memoNumber?: string;
}

export const PrintPreviewModal: React.FC<PrintPreviewModalProps> = ({
  isOpen,
  onClose,
  theme,
  onThemeChange,
  recipientName,
  memoNumber = 'বিউছাস/হাবিপ্রবি/বিদায়-নবীন-২৬/০৭',
}) => {
  const [scale, setScale] = useState<number>(0.85);
  const [showCropMarks, setShowCropMarks] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<'preview' | 'guide'>('preview');

  // Themes list for in-modal quick switcher
  const themesList: { id: CardTheme; name: string; color: string }[] = [
    { id: 'maroon', name: 'রাজকীয় খয়েরি', color: 'bg-[#7a1820]' },
    { id: 'emerald', name: 'সবুজ শ্যামল', color: 'bg-[#064e3b]' },
    { id: 'navy', name: 'অভিজাত নীল', color: 'bg-[#1e3a8a]' },
  ];

  // Adjust default scale based on window size
  useEffect(() => {
    if (!isOpen) return;

    const calculateScale = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setScale(0.48);
      } else if (width < 1024) {
        setScale(0.7);
      } else {
        setScale(0.85);
      }
    };

    calculateScale();
    window.addEventListener('resize', calculateScale);
    return () => window.removeEventListener('resize', calculateScale);
  }, [isOpen]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
      if ((e.ctrlKey || e.metaKey) && e.key === 'p' && isOpen) {
        e.preventDefault();
        handleTriggerPrint();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleTriggerPrint = () => {
    window.print();
  };

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.1, 1.25));
  };

  const handleZoomOut = () => {
    setScale((prev) => Math.max(prev - 0.1, 0.4));
  };

  const handleResetZoom = () => {
    const width = window.innerWidth;
    if (width < 640) setScale(0.48);
    else if (width < 1024) setScale(0.7);
    else setScale(0.85);
  };

  return (
    <div
      id="print-preview-modal"
      className="no-print fixed inset-0 z-50 flex flex-col bg-stone-950/95 backdrop-blur-md animate-fadeIn transition-opacity select-none"
    >
      {/* Top Header Bar */}
      <header className="shrink-0 h-16 px-3 sm:px-6 bg-stone-900/90 border-b border-stone-800 flex items-center justify-between gap-2 sm:gap-4 z-20">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
            <FileText className="w-5 h-5" />
          </div>
          <div className="truncate">
            <div className="flex items-center gap-2">
              <h2 className="font-serif-bn font-bold text-white text-sm sm:text-base tracking-wide truncate">
                লাইভ A4 প্রিন্ট প্রিভিউ
              </h2>
              <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                A4 (২১০ × ২৯৭ মিমি)
              </span>
            </div>
            <p className="text-[11px] text-stone-400 font-sans-bn truncate hidden xs:block">
              প্রিন্ট বা PDF সংরক্ষণের আগে ডকুমেন্টের মূল লেআউট মিলিয়ে নিন
            </p>
          </div>
        </div>

        {/* Center/Right Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Zoom controls */}
          <div className="hidden sm:flex items-center bg-stone-800/80 border border-stone-700/70 rounded-lg p-0.5 text-xs text-stone-300">
            <button
              onClick={handleZoomOut}
              className="p-1.5 hover:bg-stone-700 rounded text-stone-300 hover:text-white transition-colors"
              title="জুম কমান"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="px-2 font-mono text-[11px] text-amber-300 min-w-[48px] text-center">
              {Math.round(scale * 100)}%
            </span>
            <button
              onClick={handleZoomIn}
              className="p-1.5 hover:bg-stone-700 rounded text-stone-300 hover:text-white transition-colors"
              title="জুম বাড়ান"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={handleResetZoom}
              className="p-1.5 hover:bg-stone-700 rounded text-stone-300 hover:text-white transition-colors ml-0.5"
              title="স্ক্রিনে ফিট করুন"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Quick Print CTA */}
          <button
            onClick={handleTriggerPrint}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 font-semibold text-xs sm:text-sm shadow-lg shadow-amber-600/20 active:scale-95 transition-all"
            title="ব্রাউজার প্রিন্ট ডায়ালগ ওপেন করুন (Ctrl+P)"
          >
            <Printer className="w-4 h-4" />
            <span className="font-sans-bn font-bold">প্রিন্ট / PDF তৈরি</span>
          </button>

          {/* Close Modal */}
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-stone-800 hover:bg-rose-950/60 hover:text-rose-400 text-stone-400 border border-stone-700/60 transition-all active:scale-95"
            title="বন্ধ করুন (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Sub-bar: Theme preview & Print guides */}
      <div className="shrink-0 px-4 py-2 bg-stone-900/60 border-b border-stone-800/80 flex items-center justify-between text-xs text-stone-400 overflow-x-auto gap-4">
        {/* In-modal Theme Switcher */}
        <div className="flex items-center gap-2 shrink-0">
          <Palette className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span className="text-[11px] font-sans-bn text-stone-300">প্রিন্ট থিম:</span>
          <div className="flex items-center gap-1.5">
            {themesList.map((t) => (
              <button
                key={t.id}
                onClick={() => onThemeChange(t.id)}
                className={`flex items-center gap-1 px-2 py-1 rounded-md text-[11px] font-sans-bn transition-all ${
                  theme === t.id
                    ? 'bg-amber-500/20 border border-amber-500/50 text-amber-300 font-semibold'
                    : 'bg-stone-800/60 hover:bg-stone-800 border border-transparent text-stone-400'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${t.color}`} />
                <span>{t.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Guides toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <label className="flex items-center gap-1.5 cursor-pointer hover:text-stone-300">
            <input
              type="checkbox"
              checked={showCropMarks}
              onChange={(e) => setShowCropMarks(e.target.checked)}
              className="rounded bg-stone-800 border-stone-700 text-amber-500 focus:ring-0 w-3.5 h-3.5"
            />
            <span className="text-[11px]">প্রিন্ট মার্জিন গাইড</span>
          </label>
          <span className="text-stone-600">|</span>
          <span className="text-[11px] text-amber-400/90 font-mono hidden sm:inline">
            A4 Portrait (210mm × 297mm)
          </span>
        </div>
      </div>

      {/* Main Canvas Area: Virtual A4 Sheet */}
      <div
        className="flex-1 overflow-auto p-4 sm:p-8 flex items-start justify-center relative bg-radial from-stone-900/40 to-stone-950/90"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            // Click outside sheet closes or focus
          }
        }}
      >
        <div
          style={{
            transform: `scale(${scale})`,
            transformOrigin: 'top center',
            transition: 'transform 0.15s ease-out',
          }}
          className="relative shrink-0 select-text"
        >
          {/* Simulated A4 Paper Sheet */}
          <div
            className={`relative bg-white text-stone-900 rounded-sm shadow-2xl transition-all ${
              showCropMarks ? 'ring-1 ring-amber-500/40' : 'ring-1 ring-black/20'
            }`}
            style={{
              width: '794px', // 210mm at ~96dpi = ~794px standard screen representation
              minHeight: '1123px', // 297mm at ~96dpi = ~1123px
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.05)',
            }}
          >
            {/* Corner Crop Marks (Optional visual helper) */}
            {showCropMarks && (
              <>
                {/* Top-Left Crop Mark */}
                <div className="absolute -top-3 -left-3 w-3 h-3 border-r border-b border-amber-400/60 pointer-events-none" />
                {/* Top-Right Crop Mark */}
                <div className="absolute -top-3 -right-3 w-3 h-3 border-l border-b border-amber-400/60 pointer-events-none" />
                {/* Bottom-Left Crop Mark */}
                <div className="absolute -bottom-3 -left-3 w-3 h-3 border-r border-t border-amber-400/60 pointer-events-none" />
                {/* Bottom-Right Crop Mark */}
                <div className="absolute -bottom-3 -right-3 w-3 h-3 border-l border-t border-amber-400/60 pointer-events-none" />

                {/* Bleed outline guide */}
                <div className="absolute inset-0 border border-dashed border-amber-500/20 pointer-events-none rounded-sm" />
              </>
            )}

            {/* The Live Rendered Card Component */}
            <div className="p-4 sm:p-6 bg-[#fdfbf7]">
              <FormalLetterCard
                theme={theme}
                recipientName={recipientName}
                memoNumber={memoNumber}
              />
            </div>

            {/* Simulated Page Footer Marker */}
            <div className="absolute bottom-2 left-0 right-0 flex items-center justify-between px-8 text-[10px] text-stone-400 font-mono pointer-events-none opacity-60">
              <span>বিরল উপজেলা ছাত্রকল্যাণ সমিতি, হাবিপ্রবি</span>
              <span>পৃষ্ঠা ১ / ১ • A4 Portrait (210×297mm)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sticky Info & Guidance Bar */}
      <footer className="shrink-0 px-4 py-2.5 bg-stone-900 border-t border-stone-800 flex flex-wrap items-center justify-between gap-3 text-xs text-stone-300">
        <div className="flex items-center gap-2 text-stone-400 font-sans-bn">
          <Info className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            <strong className="text-white">প্রিন্ট পরামর্শ:</strong> ব্রাউজারের প্রিন্ট ডায়ালগে{' '}
            <strong className="text-amber-300">"Destination"</strong> এ{' '}
            <em className="text-stone-200">Save as PDF</em> এবং{' '}
            <strong className="text-amber-300">"Background graphics"</strong> অন রাখুন।
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-md bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs font-sans-bn transition-colors"
          >
            ফিরে যান
          </button>
          <button
            onClick={handleTriggerPrint}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-md bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-xs transition-all shadow"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>এখনই প্রিন্ট করুন</span>
          </button>
        </div>
      </footer>
    </div>
  );
};
