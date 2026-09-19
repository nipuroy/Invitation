export type CardTheme = 'maroon' | 'emerald' | 'navy';

export interface EventDetails {
  title: string;
  subTitle: string;
  organization: string;
  university: string;
  locationDetails: string;
  memoNo: string;
  date: string;
  day: string;
  time: string;
  venue: string;
  building: string;
  menu: string[];
  salutation: string;
  recipientName: string;
  organizerSign: string;
  signatoryTitle: string;
}
