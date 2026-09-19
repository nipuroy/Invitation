import React, { useState } from 'react';
import {
  Printer,
  Copy,
  Check,
  CalendarPlus,
  Palette,
  UserCheck,
  Share2,
  Edit3,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { CardTheme } from '../types';

interface ActionToolbarProps {
  theme: CardTheme;
  onThemeChange: (theme: CardTheme) => void;
  recipientName: string;
  onRecipientNameChange: (name: string) => void;
}

export const ActionToolbar: React.FC<ActionToolbarProps> = ({
  theme,
  onThemeChange,
  recipientName,
  onRecipientNameChange,
}) => {
  const [copied, setCopied] = useState(false);
  const [isAttending, setIsAttending] = useState(false);
  const [attendanceCount, setAttendanceCount] = useState(148);
  const [isEditingName, setIsEditingName] = useState(false);
  const [shareSuccess, setShareSuccess] = useState(false);

  const fullLetterText = `আসসালামু আলাইকুম / নমস্কার প্রিয় জুনিয়ররা,

বিশ্ববিদ্যালয় জীবনে তোমাদের নতুন পথচলা মাত্র শুরু হয়েছে। আর এই পথচলার শুরুতেই তোমাদের সঙ্গে একটু পরিচিত হওয়া, একসঙ্গে সময় কাটানো এবং সুন্দর কিছু স্মৃতি তৈরি করার সুযোগ করে দিতে বিরল উপজেলা ছাত্রকল্যাণ সমিতি, হাবিপ্রবি আয়োজন করতে যাচ্ছে—
🎉 বিরল উপজেলার শিক্ষার্থীদের বিদায়ী সংবর্ধনা, নবীন বরণ ও বার্ষিক বনভোজন–২০২৬!

তোমাদের Immediate Senior হিসেবে বলছি—সবাই কিন্তু অবশ্যই আসবে! 😄
ক্লাস, পড়াশোনা আর ব্যস্ততার বাইরে সিনিয়র-জুনিয়র সবাই মিলে একটু আড্ডা, পরিচয় আর আনন্দ করার দারুণ একটা সুযোগ হবে।

📅 তারিখ: ২০ সেপ্টেম্বর ২০২৬, রবিবার
⏰ সময়: দুপুর ২:৩০ মিনিট
📍 স্থান: গ্যালারি রুম, ড. কুদরত-ই-খুদা ভবন, হাবিপ্রবি

🍽️ খাবারের মেনু:
পোলাও • রোস্ট • ডিম • বুটের ডাল • সালাদ • মোজো

তোমরা নতুন, তাই প্রথমদিকে অনেককিছুই হয়তো অপরিচিত লাগবে। আমরা চাই, বিরল উপজেলার বড় ভাই-বোনদের সঙ্গে তোমাদের একটা সুন্দর সম্পর্কের শুরু হোক এই আয়োজন থেকেই। ❤️
তাই সবাই সময়মতো চলে আসবে।

দেখা হবে অনুষ্ঠানে, জুনিয়ররা! 🫶

সস্নেহে,
তোমাদের Immediate Senior
বিরল উপজেলা ছাত্রকল্যাণ সমিতি
হাজী মোহাম্মদ দানেশ বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয় (হাবিপ্রবি)`;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = async () => {
    try {
      await navigator.clipboard.writeText(fullLetterText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = fullLetterText;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleAttendClick = () => {
    if (!isAttending) {
      setIsAttending(true);
      setAttendanceCount((prev) => prev + 1);

      // Trigger festive confetti explosion
      confetti({
        particleCount: 85,
        spread: 70,
        origin: { y: 0.65 },
        colors: ['#7a1820', '#d4af37', '#047857', '#e11d48'],
      });
    } else {
      setIsAttending(false);
      setAttendanceCount((prev) => prev - 1);
    }
  };

  const handleGoogleCalendar = () => {
    // 20 Sept 2026, 2:30 PM BST (UTC+6)
    // 14:30 BST is 08:30 UTC
    const startTime = '20260920T083000Z';
    const endTime = '20260920T123000Z';
    const title = encodeURIComponent(
      'বিদায়ী সংবর্ধনা, নবীন বরণ ও বার্ষিক বনভোজন–২০২৬ (বিরল উপজেলা ছাত্রকল্যাণ সমিতি)'
    );
    const details = encodeURIComponent(
      'বিরল উপজেলা ছাত্রকল্যাণ সমিতি, হাবিপ্রবি কর্তৃক আয়োজিত নবীন বরণ ও বার্ষিক বনভোজন। স্থান: গ্যালারি রুম, ড. কুদরত-ই-খুদা ভবন, হাবিপ্রবি।'
    );
    const location = encodeURIComponent('গ্যালারি রুম, ড. কুদরত-ই-খুদা ভবন, হাবিপ্রবি, দিনাজপুর');
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startTime}/${endTime}&details=${details}&location=${location}`;
    window.open(url, '_blank');
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'বিরল উপজেলা ছাত্রকল্যাণ সমিতি - আমন্ত্রণ পত্র ২০২৬',
          text: 'বিদায়ী সংবর্ধনা, নবীন বরণ ও বার্ষিক বনভোজন–২০২৬ এ আপনার সানন্দ উপস্থিতি কাম্য।',
          url: window.location.href,
        });
        setShareSuccess(true);
        setTimeout(() => setShareSuccess(false), 2000);
      } catch {
        // User cancelled or unsupported
      }
    } else {
      handleCopyText();
    }
  };

  return (
    <div className="no-print w-full max-w-[840px] mx-auto mb-4 sm:mb-6">
      {/* Top Action Bar */}
      <div className="bg-stone-800/95 backdrop-blur-md text-stone-100 rounded-xl p-2.5 sm:p-4 border border-stone-700 shadow-xl flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {/* Theme Picker */}
        <div className="flex items-center justify-between sm:justify-start gap-2">
          <span className="text-xs font-medium text-stone-300 flex items-center gap-1.5 font-sans-bn shrink-0">
            <Palette className="w-4 h-4 text-amber-400" />
            <span>থিম:</span>
          </span>
          <div className="inline-flex rounded-lg bg-stone-900/90 p-1 border border-stone-700 overflow-x-auto">
            <button
              onClick={() => onThemeChange('maroon')}
              className={`px-2 sm:px-2.5 py-1 text-[11px] sm:text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
                theme === 'maroon'
                  ? 'bg-rose-900 text-amber-200 shadow-sm border border-rose-700'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
              title="ঐতিহ্যবাহী রাজকীয় খয়েরি"
            >
              রাজকীয় খয়েরি
            </button>
            <button
              onClick={() => onThemeChange('emerald')}
              className={`px-2 sm:px-2.5 py-1 text-[11px] sm:text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
                theme === 'emerald'
                  ? 'bg-emerald-900 text-emerald-200 shadow-sm border border-emerald-700'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
              title="সবুজ শ্যামল বাংলা"
            >
              সবুজ শ্যামল
            </button>
            <button
              onClick={() => onThemeChange('navy')}
              className={`px-2 sm:px-2.5 py-1 text-[11px] sm:text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
                theme === 'navy'
                  ? 'bg-slate-800 text-amber-200 shadow-sm border border-slate-600'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
              title="অভিজাত ক্লাসিক"
            >
              অভিজাত নীল
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center sm:justify-end gap-1.5 sm:gap-2">
          {/* Print / Save PDF */}
          <button
            onClick={handlePrint}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3 py-2 sm:py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-stone-950 font-semibold text-xs sm:text-sm shadow-md transition-all active:scale-95 min-h-[38px]"
            title="প্রিন্ট করুন বা PDF হিসেবে সংরক্ষণ করুন"
          >
            <Printer className="w-4 h-4 shrink-0" />
            <span>প্রিন্ট / PDF</span>
          </button>

          {/* Copy Plain Text */}
          <button
            onClick={handleCopyText}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3 py-2 sm:py-1.5 rounded-lg bg-stone-700 hover:bg-stone-600 text-stone-200 font-medium text-xs sm:text-sm border border-stone-600 transition-all active:scale-95 min-h-[38px]"
            title="মেসেঞ্জার বা হোয়াটসঅ্যাপে পাঠাতে টেক্সট কপি করুন"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-emerald-300">কপি হয়েছে!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-stone-300 shrink-0" />
                <span>টেক্সট কপি</span>
              </>
            )}
          </button>

          {/* Add to Calendar */}
          <button
            onClick={handleGoogleCalendar}
            className="inline-flex items-center justify-center gap-1.5 px-2.5 sm:px-3 py-2 sm:py-1.5 rounded-lg bg-stone-700 hover:bg-stone-600 text-stone-200 font-medium text-xs sm:text-sm border border-stone-600 transition-all active:scale-95 min-h-[38px]"
            title="গুগল ক্যালেন্ডারে ইভেন্ট যুক্ত করুন"
          >
            <CalendarPlus className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="text-xs">ক্যালেন্ডার</span>
          </button>

          {/* Share */}
          <button
            onClick={handleShare}
            className="inline-flex items-center justify-center gap-1.5 px-2.5 sm:px-3 py-2 sm:py-1.5 rounded-lg bg-stone-700 hover:bg-stone-600 text-stone-200 font-medium text-xs sm:text-sm border border-stone-600 transition-all active:scale-95 min-h-[38px]"
            title="শেয়ার করুন"
          >
            <Share2 className="w-4 h-4 text-sky-400 shrink-0" />
            <span className="text-xs">শেয়ার</span>
          </button>
        </div>
      </div>

      {/* Secondary Bar: Personalization & RSVP Status */}
      <div className="mt-2 bg-stone-800/80 backdrop-blur-xs text-stone-200 rounded-xl p-2.5 sm:p-3 border border-stone-700/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-3 text-xs sm:text-sm">
        {/* Personalization input toggle */}
        <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
          <span className="text-stone-400 font-sans-bn flex items-center gap-1 shrink-0 text-xs">
            <Edit3 className="w-3.5 h-3.5 text-amber-400" />
            প্রাপক:
          </span>
          {isEditingName ? (
            <div className="flex items-center gap-1.5 flex-1 w-full sm:max-w-xs">
              <input
                type="text"
                value={recipientName}
                onChange={(e) => onRecipientNameChange(e.target.value)}
                placeholder="যেমন: প্রিয় তানভীর / প্রিয় ২৪ ব্যাচ"
                className="w-full px-2.5 py-1.5 rounded bg-stone-900 border border-amber-500/60 text-white text-xs focus:outline-none focus:ring-1 focus:ring-amber-400 font-serif-bn"
                autoFocus
              />
              <button
                onClick={() => setIsEditingName(false)}
                className="px-2.5 py-1.5 rounded bg-amber-600 text-stone-900 font-semibold text-xs shrink-0"
              >
                ঠিক আছে
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-serif-bn font-bold text-amber-300 text-sm">
                {recipientName}
              </span>
              <button
                onClick={() => setIsEditingName(true)}
                className="text-[11px] text-stone-400 hover:text-amber-300 underline underline-offset-2"
              >
                (নাম পরিবর্তন করুন)
              </button>
            </div>
          )}
        </div>

        {/* RSVP Interactive Button */}
        <div className="flex items-center justify-between sm:justify-end gap-3 pt-1 sm:pt-0 border-t sm:border-t-0 border-stone-700/60">
          <span className="text-xs text-stone-400 font-sans-bn">
            যুক্ত হয়েছেন: <strong className="text-amber-300 font-mono">{attendanceCount}</strong> জন
          </span>
          <button
            onClick={handleAttendClick}
            className={`inline-flex items-center justify-center gap-1.5 px-3 py-2 sm:py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all shadow-xs active:scale-95 min-h-[38px] ${
              isAttending
                ? 'bg-emerald-600 text-white hover:bg-emerald-500 border border-emerald-400'
                : 'bg-rose-950 text-rose-200 hover:bg-rose-900 border border-rose-800'
            }`}
          >
            <UserCheck className="w-4 h-4 shrink-0" />
            <span>{isAttending ? '✓ আমি উপস্থিত থাকব' : 'উপস্থিতি নিশ্চিত করুন (RSVP)'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
