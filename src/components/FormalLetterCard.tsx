import React from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  BookOpen,
  GraduationCap,
  Award,
  Users,
  Camera,
  Coffee,
} from 'lucide-react';
import { CardTheme } from '../types';
import {
  AlponaCorner,
  BengaliDivider,
  AssociationCrest,
  OfficialSealStamp,
} from './BengaliMotifs';

interface FormalLetterCardProps {
  theme: CardTheme;
  recipientName?: string;
  memoNumber?: string;
  id?: string;
}

export const FormalLetterCard: React.FC<FormalLetterCardProps> = ({
  theme,
  recipientName = 'প্রিয় জুনিয়ররা',
  memoNumber = 'বিউছাস/হাবিপ্রবি/বিদায়-নবীন/২০২৬-০৮',
  id = 'invitation-letter',
}) => {
  // Theme palette configuration
  const themeStyles = {
    maroon: {
      primaryText: 'text-[#6e1319]',
      accentBg: 'bg-[#7a1820]',
      badgeBg: 'bg-[#7a1820]/10 text-[#7a1820] border-[#7a1820]/25',
      borderPrimary: 'border-[#7a1820]',
      borderSecondary: 'border-[#d4af37]',
      alponaColor: '#7a1820',
      goldColor: '#d4af37',
      bgBase: 'bg-[#fdfbf7]',
      cardBorder: 'border-[#7a1820]/30',
      outerBorder: 'border-[#7a1820]/60',
      headerGradient: 'from-[#7a1820] via-[#8c1c25] to-[#7a1820]',
      boxBg: 'bg-amber-50/70 border-amber-200/90',
      highlightTag: 'bg-[#7a1820]/10 text-[#6e1319] border-[#7a1820]/30',
    },
    emerald: {
      primaryText: 'text-[#064e3b]',
      accentBg: 'bg-[#064e3b]',
      badgeBg: 'bg-[#064e3b]/10 text-[#064e3b] border-[#064e3b]/25',
      borderPrimary: 'border-[#064e3b]',
      borderSecondary: 'border-[#b45309]',
      alponaColor: '#064e3b',
      goldColor: '#b45309',
      bgBase: 'bg-[#f8faf8]',
      cardBorder: 'border-[#064e3b]/30',
      outerBorder: 'border-[#064e3b]/60',
      headerGradient: 'from-[#064e3b] via-[#047857] to-[#064e3b]',
      boxBg: 'bg-emerald-50/70 border-emerald-200/90',
      highlightTag: 'bg-[#064e3b]/10 text-[#064e3b] border-[#064e3b]/30',
    },
    navy: {
      primaryText: 'text-[#0f172a]',
      accentBg: 'bg-[#1e293b]',
      badgeBg: 'bg-[#0f172a]/10 text-[#0f172a] border-[#0f172a]/25',
      borderPrimary: 'border-[#0f172a]',
      borderSecondary: 'border-[#d97706]',
      alponaColor: '#1e293b',
      goldColor: '#d97706',
      bgBase: 'bg-[#f8fafc]',
      cardBorder: 'border-[#0f172a]/30',
      outerBorder: 'border-[#0f172a]/60',
      headerGradient: 'from-[#0f172a] via-[#1e293b] to-[#0f172a]',
      boxBg: 'bg-slate-50/80 border-slate-200/90',
      highlightTag: 'bg-[#0f172a]/10 text-[#0f172a] border-[#0f172a]/30',
    },
  }[theme];

  // Ceremonial highlights relating directly to the student celebration letter
  const eventHighlights = [
    {
      title: 'বরণডালা ও শুভেচ্ছা স্মারক',
      desc: 'নবীন অনুজদের আন্তরিক অভ্যর্থনা ও বিশেষ শুভেচ্ছা স্মারক উপহার প্রদান',
      icon: <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />,
    },
    {
      title: 'বিদায়ী সংবর্ধনা ও সম্মাননা',
      desc: 'অগ্রজ সিনিয়র ব্যাচের অনুপ্রেরণামূলক স্মৃতিচারণ ও বিদায়ী স্মারক প্রদান',
      icon: <Award className="w-3.5 h-3.5 text-amber-600 shrink-0" />,
    },
    {
      title: 'সৌহার্দ্যপূর্ণ আড্ডা ও সাংস্কৃতিক পর্ব',
      desc: 'সিনিয়র-জুনিয়রদের আত্মিক পরিচয়, গান, অনুভূতি প্রকাশ ও প্রাণোচ্ছল মুক্ত আড্ডা',
      icon: <Users className="w-3.5 h-3.5 text-amber-600 shrink-0" />,
    },
    {
      title: 'স্মরণীয় ফটোসেশন ও গেট-টুগেদার',
      desc: 'ক্যাম্পাস জীবনে বিরল পরিবারের সৌহার্দ্যময় মুহূর্তগুলো ফ্রেমে বন্দি করা',
      icon: <Camera className="w-3.5 h-3.5 text-amber-600 shrink-0" />,
    },
    {
      title: 'প্রীতিভোজ ও মধ্যাহ্ন আপ্যায়ন',
      desc: 'আনন্দঘন দিনের সমাপ্তিতে সকলের জন্য ঐতিহ্যবাহী প্রীতিময় মধ্যাহ্নভোজ',
      icon: <Coffee className="w-3.5 h-3.5 text-amber-600 shrink-0" />,
    },
  ];

  return (
    <div
      id={id}
      className={`print-container relative w-full max-w-[820px] mx-auto min-h-[1020px] ${themeStyles.bgBase} text-stone-800 rounded-xl shadow-2xl p-2.5 sm:p-4 md:p-5 border-3 sm:border-4 ${themeStyles.outerBorder} transition-all duration-300 flex flex-col justify-between`}
    >
      {/* Traditional Double Inner Border with Alpona Corners */}
      <div
        className={`relative flex-1 border sm:border-2 ${themeStyles.borderPrimary} border-opacity-70 p-2.5 sm:p-3.5 md:p-4 rounded-lg flex flex-col justify-between`}
      >
        {/* Fine gold hair-line inside border */}
        <div className="absolute inset-1 sm:inset-1.5 border border-amber-600/30 rounded pointer-events-none" />

        {/* 4 Corner Traditional Alpona Motifs */}
        <AlponaCorner
          position="top-left"
          color={themeStyles.alponaColor}
          className="absolute top-0 left-0"
        />
        <AlponaCorner
          position="top-right"
          color={themeStyles.alponaColor}
          className="absolute top-0 right-0"
        />
        <AlponaCorner
          position="bottom-left"
          color={themeStyles.alponaColor}
          className="absolute bottom-0 left-0"
        />
        <AlponaCorner
          position="bottom-right"
          color={themeStyles.alponaColor}
          className="absolute bottom-0 right-0"
        />

        {/* Watermark Logo Background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.035] pointer-events-none select-none">
          <AssociationCrest color={themeStyles.alponaColor} size={380} />
        </div>

        {/* ================= HEADER SECTION ================= */}
        <header className="relative text-center z-10 pt-1 pb-1 px-1">
          {/* Top Traditional Invocation / Tagline */}
          <div className="flex flex-row items-center justify-between gap-1 text-[11px] sm:text-xs text-stone-500 font-serif-bn mb-1.5 border-b border-stone-200/80 pb-1 px-1">
            <span className="font-semibold text-stone-600 tracking-wide text-left">
              স্মারক নং: <span className="font-mono text-stone-700">{memoNumber}</span>
            </span>
            <span className="inline-block text-amber-800 font-medium px-2.5 py-0.5 rounded bg-amber-50/90 border border-amber-200 text-xs">
              ঐক্য • প্রীতি • সৌহার্দ্য
            </span>
            <span className="font-semibold text-stone-600 text-right">
              তারিখ: ২০ সেপ্টেম্বর ২০২৬
            </span>
          </div>

          {/* Association Crest & Official Letterhead */}
          <div className="flex flex-row items-center justify-center gap-2.5 sm:gap-4 my-1">
            <AssociationCrest color={themeStyles.alponaColor} size={46} className="shrink-0" />
            <div className="text-left">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9.5px] sm:text-[11px] font-semibold tracking-wider uppercase bg-amber-100 text-amber-900 border border-amber-300/80">
                <GraduationCap className="w-3 h-3 text-amber-800 shrink-0" />
                অফিসিয়াল আমন্ত্রণ পত্র • Formal Invitation
              </span>
              <h1
                className={`text-lg sm:text-2xl md:text-[26px] font-extrabold font-serif-bn tracking-tight ${themeStyles.primaryText} leading-tight mt-0.5`}
              >
                বিরল উপজেলা ছাত্রকল্যাণ সমিতি
              </h1>
              <p className="text-[11px] sm:text-xs font-semibold text-stone-700 font-serif-bn tracking-wide leading-tight">
                হাজী মোহাম্মদ দানেশ বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয় (হাবিপ্রবি), দিনাজপুর-৫২০০
              </p>
            </div>
          </div>

          {/* Ornamental Divider */}
          <BengaliDivider color={themeStyles.alponaColor} className="my-1" />

          {/* Event Grand Title Banner */}
          <div className="mt-0.5 mb-1.5 px-1">
            <div
              className={`inline-block w-full sm:w-auto px-3 sm:px-6 py-1.5 rounded-lg bg-gradient-to-r ${themeStyles.headerGradient} text-white shadow-xs border-b-2 border-amber-400`}
            >
              <div className="flex items-center justify-center gap-1.5 text-amber-200 text-[11px] sm:text-xs font-medium tracking-wide">
                <Sparkles className="w-3 h-3 animate-pulse text-amber-300 shrink-0" />
                <span>বার্ষিক মহাসম্মেলন ও প্রীতি সম্মিলন</span>
                <Sparkles className="w-3 h-3 animate-pulse text-amber-300 shrink-0" />
              </div>
              <h2 className="text-sm sm:text-lg md:text-xl font-bold font-serif-bn mt-0.5 tracking-wide leading-tight">
                বিদায়ী সংবর্ধনা, নবীন বরণ ও বার্ষিক বনভোজন–২০২৬
              </h2>
            </div>
          </div>
        </header>

        {/* ================= FORMAL LETTER BODY ================= */}
        <main className="relative z-10 flex-1 flex flex-col justify-between text-stone-800 font-serif-bn px-1 sm:px-2 text-left sm:text-justify leading-relaxed py-0.5">
          {/* Formal Salutation */}
          <div className="mb-1.5 flex items-baseline gap-1.5 flex-wrap border-l-3 border-amber-600 pl-2 py-0.5">
            <p className="text-xs sm:text-[13px] font-bold text-stone-900">
              আসসালামু আলাইকুম / নমস্কার ও শুভেচ্ছা
            </p>
            <p className={`text-xs sm:text-[13px] font-extrabold ${themeStyles.primaryText} font-serif-bn`}>
              {recipientName ? recipientName : 'প্রিয় জুনিয়ররা'},
            </p>
          </div>

          {/* Opening Paragraph */}
          <p className="text-xs sm:text-[12.5px] text-stone-800 indent-4 leading-relaxed mb-1.5">
            বিশ্ববিদ্যালয় জীবনে তোমাদের নতুন পথচলা মাত্র শুরু হয়েছে। আর এই পথচলার সূচনাতেই তোমাদের সঙ্গে একটু পরিচিত হওয়া, একসঙ্গে আনন্দঘন সময় কাটানো এবং সুন্দর স্মৃতিময় মুহূর্ত রচনা করার সুযোগ করে দিতে <strong className="font-bold text-stone-900">বিরল উপজেলা ছাত্রকল্যাণ সমিতি, হাবিপ্রবি</strong> আয়োজন করতে যাচ্ছে এক মিলনমেলা—<span className={`font-bold ${themeStyles.primaryText}`}>‘বিদায়ী সংবর্ধনা, নবীন বরণ ও বার্ষিক বনভোজন–২০২৬’</span>।
          </p>

          {/* Senior Heartfelt Note Quote Box */}
          <div
            className={`my-1 p-2 sm:p-2.5 rounded-md bg-stone-50/90 border-l-3 sm:border-l-4 ${themeStyles.borderPrimary} border shadow-2xs relative`}
          >
            <p className="text-xs sm:text-[12.5px] font-medium text-stone-800 leading-snug">
              তোমাদের <span className="font-bold underline decoration-amber-500 decoration-1">Immediate Senior</span> হিসেবে বলছি—<strong className="text-stone-900">সবাই কিন্তু অবশ্যই আসবে!</strong> 😄 ক্লাস ও পড়াশোনার নিয়মিত ব্যস্ততার বাইরে সিনিয়র-জুনিয়র সবাই মিলে একটু মনখোলা আড্ডা, আত্মিক পরিচয় আর প্রাণোচ্ছল আনন্দ উপভোগ করার এটি এক অনাবিল ও স্মরণীয় সুযোগ।
            </p>
          </div>

          {/* ================= EVENT SCHEDULE SECTION ================= */}
          <section className="my-1.5" aria-label="অনুষ্ঠানের সময়সূচি">
            <div className="text-center mb-1">
              <span className="text-[10.5px] sm:text-[11px] font-bold uppercase tracking-wider text-amber-900 bg-amber-100/90 px-3 py-0.5 rounded-full border border-amber-300 shadow-2xs">
                ★ অনুষ্ঠানের সময়সূচি ও স্থান নির্দেশিকা ★
              </span>
            </div>

            <div className="grid grid-cols-3 gap-1.5 sm:gap-2.5 mt-1">
              {/* Date Card */}
              <div className="flex flex-col items-center justify-center p-1.5 sm:p-2 rounded-lg bg-white border border-stone-200 shadow-2xs text-center">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center mb-0.5 ${themeStyles.badgeBg}`}>
                  <Calendar className="w-3.5 h-3.5" />
                </div>
                <span className="text-[9.5px] font-medium text-stone-500 font-sans-bn">
                  তারিখ ও বার
                </span>
                <strong className="text-[11.5px] sm:text-xs font-bold text-stone-900 font-serif-bn leading-tight">
                  ২০ সেপ্টেম্বর ২০২৬
                </strong>
                <span className="text-[10px] font-semibold text-amber-700 font-sans-bn">
                  রবিবার
                </span>
              </div>

              {/* Time Card */}
              <div className="flex flex-col items-center justify-center p-1.5 sm:p-2 rounded-lg bg-white border border-stone-200 shadow-2xs text-center">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center mb-0.5 ${themeStyles.badgeBg}`}>
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <span className="text-[9.5px] font-medium text-stone-500 font-sans-bn">
                  নির্ধারিত সময়
                </span>
                <strong className="text-[11.5px] sm:text-xs font-bold text-stone-900 font-serif-bn leading-tight">
                  দুপুর ২:৩০ মিনিট
                </strong>
                <span className="text-[9px] font-medium text-stone-500 font-sans-bn">
                  (সময়মতো উপস্থিতি কাম্য)
                </span>
              </div>

              {/* Venue Card */}
              <div className="flex flex-col items-center justify-center p-1.5 sm:p-2 rounded-lg bg-white border border-stone-200 shadow-2xs text-center">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center mb-0.5 ${themeStyles.badgeBg}`}>
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span className="text-[9.5px] font-medium text-stone-500 font-sans-bn">
                  অনুষ্ঠানস্থল
                </span>
                <strong className="text-[11.5px] sm:text-xs font-bold text-stone-900 font-serif-bn leading-tight">
                  গ্যালারি রুম
                </strong>
                <span className="text-[9px] font-medium text-stone-600 font-serif-bn">
                  ড. কুদরত-ই-খুদা ভবন, হাবিপ্রবি
                </span>
              </div>
            </div>
          </section>

          {/* ================= ENRICHED HIGHLIGHTS SECTION ================= */}
          <section
            className={`my-1.5 p-2 rounded-lg ${themeStyles.boxBg} shadow-2xs`}
            aria-label="আয়োজনের মূল আকর্ষণ ও কর্মসূচি"
          >
            <div className="flex items-center justify-center gap-1.5 mb-1">
              <span className="text-xs sm:text-[12.5px] font-bold text-stone-900 font-serif-bn flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-700" />
                আয়োজনের বিশেষ আকর্ষণ ও কর্মসূচি:
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-1.5">
              {eventHighlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 bg-white/95 px-2 py-1 rounded-md border border-amber-200/80 shadow-2xs"
                >
                  <div className="shrink-0 p-1 rounded bg-amber-50 border border-amber-200">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-[11px] sm:text-[11.5px] font-bold text-stone-900 font-serif-bn leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-[9.5px] sm:text-[10px] text-stone-600 font-sans-bn leading-tight">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Emotional Junior Advice & Fraternity Motto */}
          <div className="my-1">
            <p className="text-xs sm:text-[12px] text-stone-800 indent-4 leading-relaxed mb-1">
              তোমরা এই ক্যাম্পাসে নতুন, তাই প্রথমদিকে সবকিছু অচেনা মনে হলেও আমরা চাই ক্যাম্পাস প্রাঙ্গণে আমাদের নিজস্ব উপজেলা—<strong className="text-stone-900">বিরলের বড় ভাই-বোনদের সঙ্গে তোমাদের একটি সুদৃঢ়, গভীর ও পারিবারিক সম্পর্কের অটুট মেলবন্ধন</strong> গড়ে উঠুক এই আনন্দ আয়োজনের মধ্য দিয়েই। ❤️
            </p>

            <div className="text-center my-0.5 py-1 px-2.5 rounded-md bg-stone-100/80 border border-stone-200/90">
              <p className="text-[10.5px] sm:text-[11px] font-semibold text-amber-950 font-serif-bn italic">
                “শিকড়ের টানে প্রীতির বন্ধন — বিরল থেকে হাবিপ্রবি প্রাঙ্গণে আমাদের এই আত্মিক পথচলা থাকুক চির অম্লান।”
              </p>
            </div>

            <div className="text-center mt-1">
              <span
                className={`inline-flex items-center gap-1 text-xs sm:text-sm font-bold ${themeStyles.primaryText} font-serif-bn`}
              >
                দেখা হবে অনুষ্ঠানে, প্রিয় জুনিয়ররা! 🫶
              </span>
            </div>
          </div>
        </main>

        {/* ================= SIGNATURE & OFFICIAL CLOSING ================= */}
        <footer className="relative z-10 mt-1.5 pt-1.5 border-t border-stone-200/90 font-serif-bn">
          <div className="flex flex-row items-center justify-between gap-2 sm:gap-4">
            {/* Left: Association Info / Motto */}
            <div className="w-1/3 text-left text-[9.5px] sm:text-[10px] text-stone-500 space-y-0.5">
              <div className="flex items-center gap-1 text-stone-700 font-semibold">
                <BookOpen className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                <span className="truncate">বিরল উপজেলা ছাত্রকল্যাণ সমিতি</span>
              </div>
              <p className="text-[8.5px] sm:text-[9.5px] leading-tight text-stone-500">
                হাজী মোহাম্মদ দানেশ বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয় (হাবিপ্রবি), দিনাজপুর।
              </p>
              <div className="inline-flex items-center gap-1 text-[8.5px] sm:text-[9px] text-amber-800 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200/80">
                <span>স্মারক সংরক্ষিত ও সত্যায়িত</span>
              </div>
            </div>

            {/* Center: Official Verification Seal */}
            <div className="w-1/3 flex items-center justify-center">
              <OfficialSealStamp theme={theme} size="sm" />
            </div>

            {/* Right: Formal Signatory Block */}
            <div className="w-1/3 text-right flex flex-col items-end">
              <p className="text-[10px] sm:text-[10.5px] text-stone-600 italic">
                সস্নেহে ও গভীর ভালোবাসায়—
              </p>
              <div className="my-0.5 py-0.5 border-b border-amber-700/60 inline-block">
                <span className="font-serif-bn text-xs sm:text-sm text-amber-900 font-bold italic tracking-wide">
                  তোমাদের Immediate Senior
                </span>
              </div>
              <p className={`text-xs sm:text-sm font-extrabold ${themeStyles.primaryText} leading-tight mt-0.5`}>
                বিরল উপজেলা ছাত্রকল্যাণ সমিতি
              </p>
              <p className="text-[9px] sm:text-[9.5px] text-stone-600 font-medium leading-tight">
                হাবিপ্রবি, দিনাজপুর
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
