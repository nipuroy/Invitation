import React from 'react';

// Traditional Bengali Alpona Corner Ornament
export const AlponaCorner: React.FC<{
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  color?: string;
  className?: string;
}> = ({ position, color = 'currentColor', className = '' }) => {
  const transforms = {
    'top-left': '',
    'top-right': 'scale-x-[-1]',
    'bottom-left': 'scale-y-[-1]',
    'bottom-right': 'scale-[-1]',
  };

  return (
    <div
      className={`w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 pointer-events-none select-none opacity-40 sm:opacity-75 ${transforms[position]} ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Outer corner frame */}
        <path d="M2 98V2H98" stroke={color} strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
        <path d="M8 92V8H92" stroke={color} strokeWidth="1" strokeDasharray="2 3" opacity="0.6" />
        
        {/* Kolka Paisley / Floral Corner Leaf */}
        <path
          d="M12 12C28 12 36 24 36 38C36 54 22 66 12 66C12 50 20 42 20 34C20 26 16 20 12 12Z"
          fill={color}
          opacity="0.25"
        />
        <path
          d="M12 12C28 12 36 24 36 38C36 54 22 66 12 66C12 50 20 42 20 34C20 26 16 20 12 12Z"
          stroke={color}
          strokeWidth="1.5"
        />

        {/* Small Lotus petal */}
        <circle cx="20" cy="20" r="4" fill={color} opacity="0.9" />
        <circle cx="38" cy="14" r="2.5" fill={color} opacity="0.7" />
        <circle cx="14" cy="38" r="2.5" fill={color} opacity="0.7" />
        <circle cx="48" cy="12" r="2" fill={color} opacity="0.5" />
        <circle cx="12" cy="48" r="2" fill={color} opacity="0.5" />

        {/* Delicate swirling tendril */}
        <path
          d="M24 24C34 34 50 34 60 26C70 18 68 8 58 10C50 12 48 20 54 24"
          stroke={color}
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
          opacity="0.8"
        />
        <path
          d="M24 24C34 34 34 50 26 60C18 70 8 68 10 58C12 50 20 48 24 54"
          stroke={color}
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
          opacity="0.8"
        />
      </svg>
    </div>
  );
};

// Traditional Floral & Lotus Center Divider
export const BengaliDivider: React.FC<{ color?: string; className?: string }> = ({
  color = 'currentColor',
  className = '',
}) => {
  return (
    <div className={`flex items-center justify-center my-3 w-full max-w-md mx-auto ${className}`}>
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-current to-current opacity-40"></div>
      <div className="mx-3 flex items-center space-x-1.5 opacity-90">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-inherit">
          {/* Stylized Lotus Center */}
          <path
            d="M12 4C10.5 7 9 10 9 13.5C9 16 10.3 17.5 12 18.5C13.7 17.5 15 16 15 13.5C15 10 13.5 7 12 4Z"
            fill={color}
            opacity="0.85"
          />
          <path
            d="M8.5 8C7 10.5 5 12.5 5 15C5 17 6.5 18 8 18C9.5 18 10.5 17 11 16C10 14 9.5 11 8.5 8Z"
            fill={color}
            opacity="0.6"
          />
          <path
            d="M15.5 8C17 10.5 19 12.5 19 15C19 17 17.5 18 16 18C14.5 18 13.5 17 13 16C14 14 14.5 11 15.5 8Z"
            fill={color}
            opacity="0.6"
          />
          <circle cx="12" cy="19.5" r="1.5" fill={color} />
        </svg>
      </div>
      <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-current to-current opacity-40"></div>
    </div>
  );
};

// Association Seal Crest / Monogram (বিরল উপজেলা ছাত্রকল্যাণ সমিতি, হাবিপ্রবি)
export const AssociationCrest: React.FC<{ color?: string; size?: number; className?: string }> = ({
  color = '#881337',
  size = 72,
  className = '',
}) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={`relative inline-flex items-center justify-center select-none ${className}`}
    >
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Outer Circular border with beaded dots */}
        <circle cx="50" cy="50" r="47" stroke={color} strokeWidth="2" opacity="0.9" />
        <circle cx="50" cy="50" r="43" stroke={color} strokeWidth="1" strokeDasharray="3 2" opacity="0.7" />
        <circle cx="50" cy="50" r="38" stroke={color} strokeWidth="1.5" opacity="0.8" />

        {/* Sun rays of enlightenment / Dinajpur dawn */}
        <path d="M50 18V24M50 76V82M18 50H24M76 50H82M27 27L32 32M68 68L73 73M27 73L32 68M68 32L73 27" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />

        {/* Central Shield or Open Book & Torch of Knowledge */}
        <circle cx="50" cy="50" r="24" fill={color} fillOpacity="0.08" />

        {/* Open Book of Education */}
        <path
          d="M36 52C40 50 46 49 50 51C54 49 60 50 64 52V62C60 60 54 59 50 61C46 59 40 60 36 62V52Z"
          fill={color}
          opacity="0.85"
        />
        {/* Book spine */}
        <line x1="50" y1="51" x2="50" y2="61" stroke="#ffffff" strokeWidth="1.2" />

        {/* Torch / Flame above book */}
        <path
          d="M50 34C48 37 47 39 47 41C47 43 48.3 44.5 50 44.5C51.7 44.5 53 43 53 41C53 39 52 37 50 34Z"
          fill={color}
        />

        {/* Laurel / Paddy ear wreath (ধানের শীষ ও জয়মাল্য) */}
        <path
          d="M30 65C28 55 29 42 34 33M70 65C72 55 71 42 66 33"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.65"
        />
      </svg>
    </div>
  );
};

// Traditional Wax / Official Rubber Stamp (অফিসিয়াল সিলমোহর)
export const OfficialSealStamp: React.FC<{ theme: string }> = ({ theme }) => {
  const colorMap = {
    maroon: {
      border: 'border-rose-900/60',
      text: 'text-rose-900/90',
      bg: 'bg-rose-900/5',
      star: 'text-amber-700',
    },
    emerald: {
      border: 'border-emerald-900/60',
      text: 'text-emerald-900/90',
      bg: 'bg-emerald-900/5',
      star: 'text-amber-700',
    },
    navy: {
      border: 'border-slate-900/60',
      text: 'text-slate-900/90',
      bg: 'bg-slate-900/5',
      star: 'text-amber-700',
    },
  }[theme] || {
    border: 'border-rose-900/60',
    text: 'text-rose-900/90',
    bg: 'bg-rose-900/5',
    star: 'text-amber-700',
  };

  return (
    <div
      className={`w-28 h-28 rounded-full border-2 border-dashed ${colorMap.border} ${colorMap.bg} p-1 flex flex-col items-center justify-center text-center transform -rotate-6 select-none shadow-xs pointer-events-none transition-transform hover:rotate-0`}
    >
      <div className={`w-full h-full rounded-full border border-double ${colorMap.border} flex flex-col items-center justify-center p-1 font-serif-bn leading-tight`}>
        <span className={`text-[8.5px] font-bold uppercase tracking-wider ${colorMap.text}`}>
          বিরল উপজেলা
        </span>
        <div className="w-5 h-[1px] bg-amber-700 my-0.5 opacity-60"></div>
        <span className={`text-[9.5px] font-extrabold ${colorMap.text}`}>
          ছাত্রকল্যাণ সমিতি
        </span>
        <span className="text-[7.5px] font-medium text-stone-600">
          হাবিপ্রবি, দিনাজপুর
        </span>
        <div className="flex items-center gap-0.5 mt-0.5 text-amber-700 text-[8px]">
          ★ ২০২৬ ★
        </div>
      </div>
    </div>
  );
};
