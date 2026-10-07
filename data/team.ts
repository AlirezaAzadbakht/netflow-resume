import type { Bilingual } from "./products";

export type TeamMember = {
  id: string;
  name: Bilingual;
  role: Bilingual;
  photo: string;
};

export const team: TeamMember[] = [
  {
    id: "arian-banaie",
    name: { en: "Arian Banaie", fa: "آرین بنایی" },
    role: { en: "CEO", fa: "مدیرعامل" },
    photo: "/team/arian-banaie.webp",
  },
  {
    id: "ali-afzalpoor",
    name: { en: "Ali Afzalpoor", fa: "علی افضل‌پور" },
    role: { en: "Front-end Team Lead", fa: "سرپرست تیم فرانت‌اند" },
    photo: "/team/ali-afzalpoor.webp",
  },
  {
    id: "shayesteh-momahhed",
    name: { en: "Shayesteh Momahhed", fa: "شایسته ممهد" },
    role: { en: "Data Team Lead", fa: "سرپرست تیم داده" },
    photo: "/team/shayesteh-momahhed.webp",
  },
  {
    id: "mohammad-izadkhah",
    name: { en: "Mohammad Izadkhah", fa: "محمد ایزدخواه" },
    role: { en: "VP of Marketing", fa: "معاون بازاریابی" },
    photo: "/team/mohammad-izadkhah.webp",
  },
];
