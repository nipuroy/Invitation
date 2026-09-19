import React from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Utensils,
  Sparkles,
  Heart,
  BookOpen,
  GraduationCap,
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
}

export const FormalLetterCard: React.FC<FormalLetterCardProps> = ({
  theme,
  recipientName = 'প্রিয় জুনিয়ররা',
  memoNumber = 'বিউছাস/হাবিপ্রবি/বিদায়-নবীন/২০২৬-০৮',
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
      outerBorder: 'border-[#7a1820]/50',
      headerGradient: 'from-[#7a1820] via-[#8c1c25] to-[#7a1820]',
      menuBadge: 'bg-amber-50 border-amber-300 text-stone-800',
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
      outerBorder: 'border-[#064e3b]/50',
      headerGradient: 'from-[#064e3b] via-[#047857] to-[#064e3b]',
      menuBadge: 'bg-emerald-50 border-emerald-300 text-stone-800',
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
      outerBorder: 'border-[#0f172a]/50',
      headerGradient: 'from-[#0f172a] via-[#1e293b] to-[#0f172a]',
      menuBadge: 'bg-slate-50 border-slate-300 text-stone-800',
    },
  }[theme];

  const menuItems = [
    { name: 'পোলাও', icon: '🍚' },
    { name: 'চিকেন রোস্ট', icon: '🍗' },
    { name: 'ডিম ভুনা', icon: '🥚' },
    { name: 'বুটের ডাল', icon: '🍲' },
    { name: 'স্পেশাল সালাদ', icon: '🥗' },
    { name: 'ঠান্ডা মোজো', icon: '🥤' },
  ];

  return (
    <div
      id="invitation-letter"
      className={`print-container relative w-full max-w-[840px] mx-auto ${themeStyles.bgBase} text-stone-800 rounded-xl shadow-2xl p-2.5 sm:p-6 md:p-8 border-2 sm:border-4 ${themeStyles.outerBorder} overflow-hidden transition-all duration-300`}
    >
      {/* Traditional Double Inner Border with Alpona Corners */}
      <div
        className={`relative border sm:border-2 ${themeStyles.borderPrimary} border-opacity-70 p-3.5 sm:p-6 md:p-8 rounded-lg`}
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
          <AssociationCrest color={themeStyles.alponaColor} size={420} />
        </div>

        {/* ================= HEADER SECTION ================= */}
        <header className="relative text-center z-10 pt-2 sm:pt-1 pb-3 sm:pb-4 px-1 sm:px-2">
          {/* Top Traditional Invocation / Tagline */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-1 text-[11px] sm:text-xs md:text-sm text-stone-500 font-serif-bn mb-3 border-b border-stone-200/80 pb-2 px-1">
            <span className="font-semibold text-stone-600 tracking-wide text-center sm:text-left">
              স্মারক নং: <span className="font-mono text-stone-700">{memoNumber}</span>
            </span>
            <span className="hidden sm:inline-block text-amber-800 font-medium px-2 py-0.5 rounded bg-amber-50/80 border border-amber-200 text-xs">
              ঐক্য • প্রীতি • সৌহার্দ্য
            </span>
            <span className="font-semibold text-stone-600 text-center sm:text-right">
              তারিখ: ২০ সেপ্টেম্বর ২০২৬
            </span>
          </div>

          {/* Association Crest & Official Letterhead */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 my-2">
            <AssociationCrest color={themeStyles.alponaColor} size={62} />
            <div className="text-center sm:text-left">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold tracking-wider uppercase bg-amber-100 text-amber-900 border border-amber-300/80 mb-1">
                <GraduationCap className="w-3.5 h-3.5 text-amber-800 shrink-0" />
                অফিসিয়াল আমন্ত্রণ পত্র • Formal Invitation
              </span>
              <h1
                className={`text-xl sm:text-3xl md:text-4xl font-extrabold font-serif-bn tracking-tight ${themeStyles.primaryText} leading-snug`}
              >
                বিরল উপজেলা ছাত্রকল্যাণ সমিতি
              </h1>
              <p className="text-xs sm:text-base font-semibold text-stone-700 font-serif-bn tracking-wide">
                হাজী মোহাম্মদ দানেশ বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয় (হাবিপ্রবি)
              </p>
              <p className="text-[11px] sm:text-xs text-stone-500 font-sans-bn">
                দিনাজপুর-৫২০০, বাংলাদেশ
              </p>
            </div>
          </div>

          {/* Ornamental Divider */}
          <BengaliDivider color={themeStyles.alponaColor} className="my-2.5 sm:my-3" />

          {/* Event Grand Title Banner */}
          <div className="mt-2 mb-3 sm:mb-4 px-1">
            <div
              className={`inline-block w-full sm:w-auto px-3 sm:px-8 py-2 sm:py-3 rounded-lg bg-gradient-to-r ${themeStyles.headerGradient} text-white shadow-md border-b-2 border-amber-400`}
            >
              <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-amber-200 text-[11px] sm:text-sm font-medium tracking-wide">
                <Sparkles className="w-3.5 h-3.5 animate-pulse text-amber-300 shrink-0" />
                <span>বার্ষিক মহাসম্মেলন ও প্রীতি সম্মিলন</span>
                <Sparkles className="w-3.5 h-3.5 animate-pulse text-amber-300 shrink-0" />
              </div>
              <h2 className="text-base sm:text-2xl md:text-[26px] font-bold font-serif-bn mt-0.5 tracking-wide drop-shadow-xs leading-snug">
                বিদায়ী সংবর্ধনা, নবীন বরণ ও বার্ষিক বনভোজন–২০২৬
              </h2>
            </div>
          </div>
        </header>

        {/* ================= FORMAL LETTER BODY ================= */}
        <main className="relative z-10 text-stone-800 font-serif-bn px-1 sm:px-3 text-left sm:text-justify leading-relaxed">
          {/* Formal Salutation */}
          <div className="mb-4">
            <p className="text-base sm:text-lg font-bold text-stone-900 border-l-4 border-amber-600 pl-3 py-0.5">
              আসসালামু আলাইকুম / আদাব ও শুভেচ্ছা,
            </p>
            <p className={`text-lg sm:text-xl font-extrabold ${themeStyles.primaryText} mt-1 pl-3 font-serif-bn`}>
              {recipientName ? recipientName : 'প্রিয় জুনিয়ররা'},
            </p>
          </div>

          {/* Opening Paragraph */}
          <p className="text-sm sm:text-base text-stone-800 indent-6 leading-relaxed mb-3">
            বিশ্ববিদ্যালয় জীবনে তোমাদের নতুন পথচলা মাত্র শুরু হয়েছে। আর এই পথচলার শুরুতেই তোমাদের সঙ্গে একটু পরিচিত হওয়া, একসঙ্গে সময় কাটানো এবং সুন্দর কিছু স্মৃতি তৈরি করার সুযোগ করে দিতে <strong className="font-bold text-stone-900">বিরল উপজেলা ছাত্রকল্যাণ সমিতি, হাবিপ্রবি</strong> আয়োজন করতে যাচ্ছে এক আনন্দঘন উৎসব—<span className={`font-bold ${themeStyles.primaryText}`}>‘বিদায়ী সংবর্ধনা, নবীন বরণ ও বার্ষিক বনভোজন–২০২৬’</span>।
          </p>

          {/* Senior Warm Note Quote Box */}
          <div
            className={`my-4 p-3.5 sm:p-4 rounded-lg bg-stone-50/90 border-l-4 ${themeStyles.borderPrimary} border shadow-xs relative`}
          >
            <p className="text-sm sm:text-[15px] font-medium text-stone-800 leading-relaxed">
              তোমাদের <span className="font-bold underline decoration-amber-500 decoration-2">Immediate Senior</span> হিসেবে বলছি—<strong className="text-stone-900">সবাই কিন্তু অবশ্যই আসবে!</strong> 😄 ক্লাস, পড়াশোনা আর বিশ্ববিদ্যালয় জীবনের ব্যস্ততার বাইরে সিনিয়র-জুনিয়র সবাই মিলে একটু মনখোলা আড্ডা, আত্মিক পরিচয় আর প্রাণোচ্ছল আনন্দ করার এটি এক দারুণ ও স্মরণীয় সুযোগ।
            </p>
          </div>

          {/* ================= PROGRAM SCHEDULE / EVENT DETAILS CARD ================= */}
          <section className="my-5" aria-label="অনুষ্ঠানের সময়সূচি">
            <div className="text-center mb-2">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-900 bg-amber-100/90 px-3 py-1 rounded-full border border-amber-300">
                ★ অনুষ্ঠানের সময়সূচি ও স্থান নির্দেশিকা ★
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-3">
              {/* Date Card */}
              <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-white border border-stone-200 shadow-xs text-center transition-transform hover:-translate-y-0.5">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-1.5 ${themeStyles.badgeBg}`}>
                  <Calendar className="w-5 h-5" />
                </div>
                <span className="text-xs font-medium text-stone-500 font-sans-bn">
                  তারিখ ও বার
                </span>
                <strong className="text-sm sm:text-base font-bold text-stone-900 font-serif-bn">
                  ২০ সেপ্টেম্বর ২০২৬
                </strong>
                <span className="text-xs font-semibold text-amber-700 font-sans-bn">
                  রবিবার
                </span>
              </div>

              {/* Time Card */}
              <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-white border border-stone-200 shadow-xs text-center transition-transform hover:-translate-y-0.5">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-1.5 ${themeStyles.badgeBg}`}>
                  <Clock className="w-5 h-5" />
                </div>
                <span className="text-xs font-medium text-stone-500 font-sans-bn">
                  নির্ধারিত সময়
                </span>
                <strong className="text-sm sm:text-base font-bold text-stone-900 font-serif-bn">
                  দুপুর ২:৩০ মিনিট
                </strong>
                <span className="text-xs font-medium text-stone-500 font-sans-bn">
                  (সময়মতো উপস্থিতি কাম্য)
                </span>
              </div>

              {/* Venue Card */}
              <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-white border border-stone-200 shadow-xs text-center transition-transform hover:-translate-y-0.5">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-1.5 ${themeStyles.badgeBg}`}>
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-xs font-medium text-stone-500 font-sans-bn">
                  অনুষ্ঠানস্থল
                </span>
                <strong className="text-sm sm:text-base font-bold text-stone-900 font-serif-bn leading-tight">
                  গ্যালারি রুম
                </strong>
                <span className="text-xs font-medium text-stone-600 font-serif-bn mt-0.5">
                  ড. কুদরত-ই-খুদা ভবন, হাবিপ্রবি
                </span>
              </div>
            </div>
          </section>

          {/* ================= FOOD MENU RIBBON ================= */}
          <section className="my-5 p-3.5 sm:p-4 rounded-xl bg-amber-50/60 border border-amber-200/90 shadow-xs" aria-label="খাবারের মেনু">
            <div className="flex items-center gap-2 mb-2.5">
              <div className="p-1 rounded-md bg-amber-700 text-white">
                <Utensils className="w-4 h-4" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-amber-950 font-serif-bn">
                ঐতিহ্যবাহী মধ্যাহ্নভোজ ও আপ্যায়ন পর্ব:
              </h3>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
              {menuItems.map((item, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-white text-stone-800 border border-amber-300/80 shadow-2xs hover:border-amber-500 transition-colors"
                >
                  <span className="text-sm">{item.icon}</span>
                  <span>{item.name}</span>
                </span>
              ))}
            </div>
          </section>

          {/* Emotional Junior Advice Paragraph */}
          <p className="text-sm sm:text-[15px] text-stone-800 indent-6 leading-relaxed mb-3">
            তোমরা এই বিশ্ববিদ্যালয়ে একদম নতুন, তাই প্রথমদিকে হয়তো অনেককিছুই কিছুটা অচেনা বা অপরিচিত মনে হতে পারে। আমরা চাই, ক্যাম্পাস প্রাঙ্গণে আমাদের নিজস্ব উপজেলা—<strong className="text-stone-900">বিরলের বড় ভাই-বোনদের সঙ্গে তোমাদের একটি সুদৃঢ়, নিবিড় ও পারিবারিক সম্পর্কের সেতুবন্ধন</strong> তৈরি হোক এই আনন্দ আয়োজনের মধ্য দিয়েই। ❤️
          </p>

          <p className="text-sm sm:text-[15px] text-stone-800 leading-relaxed font-semibold text-center my-3 text-amber-950 bg-stone-100/70 py-1.5 rounded border border-stone-200/80">
            তাই পরিবারের অনুজ সদস্য হিসেবে সবাই যথাসময়ে অনুষ্ঠানে উপস্থিত হয়ে আমাদের আয়োজনকে সার্থক করবে।
          </p>

          <div className="text-center my-2">
            <span className={`inline-flex items-center gap-1.5 text-base sm:text-lg font-bold ${themeStyles.primaryText} font-serif-bn`}>
              দেখা হবে অনুষ্ঠানে, প্রিয় জুনিয়ররা! 🫶
            </span>
          </div>
        </main>

        {/* ================= SIGNATURE & OFFICIAL CLOSING ================= */}
        <footer className="relative z-10 mt-6 pt-5 border-t border-stone-200/90 font-serif-bn">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left: Association Info / Motto */}
            <div className="w-full md:w-1/3 order-3 md:order-1 text-center md:text-left text-xs text-stone-500 space-y-1.5">
              <div className="flex items-center justify-center md:justify-start gap-1.5 text-stone-700 font-semibold">
                <BookOpen className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                <span>বিরল উপজেলা ছাত্রকল্যাণ সমিতি</span>
              </div>
              <p className="text-[11px] leading-relaxed text-stone-500 max-w-xs mx-auto md:mx-0">
                হাজী মোহাম্মদ দানেশ বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়, দিনাজপুর।
              </p>
              <div className="inline-flex items-center gap-1 text-[10px] text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/80">
                <span>স্মারক সংরক্ষিত ও সত্যায়িত</span>
              </div>
            </div>

            {/* Center: Official Verification Seal */}
            <div className="order-2 flex items-center justify-center py-2 md:py-0">
              <OfficialSealStamp theme={theme} />
            </div>

            {/* Right: Formal Signatory Block */}
            <div className="w-full md:w-1/3 order-1 md:order-3 text-center md:text-right flex flex-col items-center md:items-end">
              <p className="text-xs sm:text-sm text-stone-600 italic mb-1">
                সস্নেহে ও গভীর ভালোবাসায়—
              </p>

              {/* Natural flow container without fixed h-9 height */}
              <div className="my-1 py-1 border-b-2 border-amber-700/60 max-w-full">
                <span className="font-serif-bn text-base sm:text-lg md:text-xl text-amber-900 font-bold italic tracking-wide leading-snug block">
                  তোমাদের Immediate Senior
                </span>
              </div>

              <p className={`text-sm sm:text-base font-extrabold ${themeStyles.primaryText} mt-1.5 leading-snug`}>
                বিরল উপজেলা ছাত্রকল্যাণ সমিতি
              </p>
              <p className="text-xs text-stone-600 font-medium leading-relaxed mt-0.5">
                হাজী মোহাম্মদ দানেশ বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
