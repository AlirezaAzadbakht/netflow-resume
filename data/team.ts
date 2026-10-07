import type { Bilingual } from "./products";

export type TeamMember = {
  id: string;
  name: Bilingual;
  role: Bilingual;
  accent: string;
  photo: string;
};

export const team: TeamMember[] = [
  {
    id: "arian-banaie",
    name: { en: "Arian Banaie", fa: "آرین بنایی" },
    role: { en: "CEO", fa: "مدیرعامل" },
    accent: "from-violet-600 to-fuchsia-500",
    photo: "/team/arian-banaie.png",
  },
  {
    id: "ali-afzalpoor",
    name: { en: "Ali Afzalpoor", fa: "علی افضل‌پور" },
    role: { en: "Front-end Team Lead", fa: "سرپرست تیم فرانت‌اند" },
    accent: "from-fuchsia-500 to-purple-500",
    photo: "/team/ali-afzalpoor.png",
  },
  {
    id: "shayesteh-momahhed",
    name: { en: "Shayesteh Momahhed", fa: "شایسته ممهد" },
    role: { en: "Data Team Lead", fa: "سرپرست تیم داده" },
    accent: "from-indigo-500 to-violet-600",
    photo: "/team/shayesteh-momahhed.png",
  },
  {
    id: "mohammad-izadkhah",
    name: { en: "Mohammad Izadkhah", fa: "محمد ایزدخواه" },
    role: { en: "VP of Marketing", fa: "معاون بازاریابی" },
    accent: "from-violet-500 to-purple-600",
    photo: "/team/mohammad-izadkhah.jpg",
  },
];
