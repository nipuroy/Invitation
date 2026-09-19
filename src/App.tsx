import React, { useState } from 'react';
import { CardTheme } from './types';
import { FormalLetterCard } from './components/FormalLetterCard';
import { ActionToolbar } from './components/ActionToolbar';
import { PrintPreviewModal } from './components/PrintPreviewModal';
import { Info, Sparkles, Printer } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState<CardTheme>('maroon');
  const [recipientName, setRecipientName] = useState<string>('প্রিয় জুনিয়ররা');
  const [isPrintPreviewOpen, setIsPrintPreviewOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 py-4 sm:py-8 px-2 xs:px-3 sm:px-6 flex flex-col items-center justify-start selection:bg-amber-300 selection:text-stone-900">
      {/* Top Banner / Notification (Only on Screen) */}
      <div className="no-print w-full max-w-[840px] text-center mb-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-medium tracking-wide">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>বিরল উপজেলা ছাত্রকল্যাণ সমিতি, হাবিপ্রবি • অফিসিয়াল আমন্ত্রণ পত্র</span>
        </div>
      </div>

      {/* Action Toolbar with Themes, Print, Copy & RSVP */}
      <ActionToolbar
        theme={theme}
        onThemeChange={setTheme}
        recipientName={recipientName}
        onRecipientNameChange={setRecipientName}
        onOpenPrintPreview={() => setIsPrintPreviewOpen(true)}
      />

      {/* Main Formal Bengali Letter Card */}
      <main className="w-full flex justify-center">
        <FormalLetterCard
          theme={theme}
          recipientName={recipientName}
          memoNumber="বিউছাস/হাবিপ্রবি/বিদায়-নবীন-২৬/০৭"
        />
      </main>

      {/* Footer Info / Print Guide */}
      <footer className="no-print mt-8 text-center text-xs text-stone-500 max-w-lg space-y-1.5 font-sans-bn pb-8">
        <p className="flex items-center justify-center gap-1.5 text-stone-400">
          <Info className="w-3.5 h-3.5 text-amber-500/80 shrink-0" />
          <span>টিপস: উপরের</span>
          <button
            onClick={() => setIsPrintPreviewOpen(true)}
            className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 underline font-semibold transition-colors"
          >
            <Printer className="w-3 h-3 inline" />
            ‘A4 প্রিন্ট প্রিভিউ’
          </button>
          <span>বাটনে ক্লিক করে সরাসরি A4 সাইজে প্রিন্ট বা PDF ডাউনলোড করতে পারবেন।</span>
        </p>
        <p className="text-stone-600">
          © ২০২৬ বিরল উপজেলা ছাত্রকল্যাণ সমিতি, হাজী মোহাম্মদ দানেশ বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয় (হাবিপ্রবি)। সর্বস্বত্ব সংরক্ষিত।
        </p>
      </footer>

      {/* Dedicated A4 Live Print Preview Modal */}
      <PrintPreviewModal
        isOpen={isPrintPreviewOpen}
        onClose={() => setIsPrintPreviewOpen(false)}
        theme={theme}
        onThemeChange={setTheme}
        recipientName={recipientName}
        memoNumber="বিউছাস/হাবিপ্রবি/বিদায়-নবীন-২৬/০৭"
      />
    </div>
  );
}
