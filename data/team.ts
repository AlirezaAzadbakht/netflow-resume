import type { Bilingual } from "./products";

export type TeamMember = {
  id: string;
  name: Bilingual;
  role: Bilingual;
  initials: string;
  accent: string;
  photo?: string;
};

export const team: TeamMember[] = [
  {
    id: "arian-banaie",
    name: { en: "Arian Banaie", fa: "آرین بنایی" },
    role: { en: "CEO", fa: "مدیرعامل" },
    initials: "AB",
    accent: "from-violet-600 to-fuchsia-500",
    photo: "/team/arian-banaie.png",
  },
  {
    id: "alireza-azadbakht",
    name: { en: "Alireza Azadbakht", fa: "علیرضا آزادبخت" },
    role: { en: "CTO", fa: "مدیر فناوری" },
    initials: "AA",
    accent: "from-purple-600 to-indigo-500",
    photo: "/team/alireza-azadbakht.png",
  },
  {
    id: "ali-afzalpoor",
    name: { en: "Ali Afzalpoor", fa: "علی افضل‌پور" },
    role: { en: "Front-end Team Lead", fa: "سرپرست تیم فرانت‌اند" },
    initials: "AA",
    accent: "from-fuchsia-500 to-purple-500",
    photo: "/team/ali-afzalpoor.png",
  },
  {
    id: "shayesteh-momahhed",
    name: { en: "Shayesteh Momahhed", fa: "شایسته ممهد" },
    role: { en: "Data Team Lead", fa: "سرپرست تیم داده" },
    initials: "SM",
    accent: "from-indigo-500 to-violet-600",
    photo: "/team/shayesteh-momahhed.png",
  },
];
