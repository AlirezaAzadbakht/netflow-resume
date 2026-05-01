import type { LucideIcon } from "lucide-react";
import {
  Workflow,
  MessageSquare,
  BookOpen,
  Database,
  Scale,
  Phone,
  Flame,
  Headphones,
  Stethoscope,
  Mic,
  ShieldCheck,
} from "lucide-react";

export type Bilingual = {
  en: string;
  fa: string;
};

export type Product = {
  slug: string;
  icon: LucideIcon;
  accent: string;
  name: Bilingual;
  short: Bilingual;
  purpose: Bilingual;
  features: {
    en: string[];
    fa: string[];
  };
  demo?: string;
  client: Bilingual;
};

export const products: Product[] = [
  {
    slug: "netflowai-platform",
    icon: Workflow,
    accent: "from-violet-500 to-fuchsia-500",
    name: {
      en: "NetflowAI Automation Platform",
      fa: "پلتفرم اتوماسیون نِت‌فلو AI",
    },
    short: {
      en: "An AI automation platform for creating, managing, and coordinating networks of intelligent agents.",
      fa: "یک پلتفرم اتوماسیون هوش مصنوعی برای ایجاد، مدیریت و هماهنگی شبکه‌ای از ایجنت‌های هوشمند.",
    },
    purpose: {
      en: "Helps users automate complex workflows such as content generation, competitor monitoring, research, reporting, social media workflows, and multi-step business processes.",
      fa: "به کاربران کمک می‌کند تا گردش‌کارهای پیچیده مثل تولید محتوا، رصد رقبا، پژوهش، گزارش‌دهی، گردش‌کارهای شبکه‌های اجتماعی و فرآیندهای چندمرحله‌ای کسب‌وکار را خودکار کنند.",
    },
    features: {
      en: [
        "Multi-agent workflow creation",
        "Uses more than 40 AI models across different categories",
        "Scheduled and continuous automation",
        "Social media integrations (Instagram, Telegram, YouTube)",
        "No-code / low-code workflow building",
        "AI coordination layer for managing multiple agents",
        "Ready-made templates: podcast generation, blog writing, research assistant, knowledge base workflows",
      ],
      fa: [
        "ایجاد گردش‌کار مولتی‌ایجنت",
        "استفاده از بیش از ۴۰ مدل هوش مصنوعی در دسته‌های مختلف",
        "اتوماسیون زمان‌بندی‌شده و مداوم",
        "اتصال به شبکه‌های اجتماعی (اینستاگرام، تلگرام، یوتیوب)",
        "ساخت گردش‌کار به‌صورت no-code / low-code",
        "لایه هماهنگی هوش مصنوعی برای مدیریت چندین ایجنت",
        "قالب‌های آماده: تولید پادکست، نگارش بلاگ، دستیار پژوهش، گردش‌کارهای پایگاه دانش",
      ],
    },
    demo: "https://netflowai.com",
    client: {
      en: "Internal NetflowAI product",
      fa: "محصول داخلی نِت‌فلو AI",
    },
  },
  {
    slug: "helpdesk",
    icon: MessageSquare,
    accent: "from-purple-500 to-indigo-500",
    name: {
      en: "Helpdesk — RAG-Driven Organizational Bot",
      fa: "هلپ‌دسک — راهنمای هوشمند سامانه‌های سازمانی",
    },
    short: {
      en: "A Persian RAG-based chatbot that helps employees find answers from official organizational knowledge, guides, and internal system documentation.",
      fa: "یک چت‌بات فارسی مبتنی بر RAG که به کارکنان کمک می‌کند پاسخ‌های خود را از مستندات رسمی، راهنماها و سامانه‌های داخلی سازمان پیدا کنند.",
    },
    purpose: {
      en: "Reduces pressure on support teams by answering frequent employee questions, guiding users step-by-step, and centralizing access to organizational knowledge.",
      fa: "با پاسخ به پرسش‌های پرتکرار کارکنان، راهنمایی گام‌به‌گام و تمرکز دسترسی به دانش سازمانی، فشار روی تیم‌های پشتیبانی را کاهش می‌دهد.",
    },
    features: {
      en: [
        "Persian conversational interface",
        "RAG-based answers grounded in official documents",
        "Step-by-step guidance for non-technical users",
        "Connects to organizational guides, procedures, internal systems",
        "User dashboard for accessing agents, asking questions, sending feedback",
        "Admin dashboard for stats, users, chats, agents, knowledge updates",
        "Feedback-based knowledge improvement",
        "24/7 availability",
        "Deployable on websites, internal portals, enterprise environments",
        "Specialized assistants for Word, Excel, PowerPoint, and internal systems",
      ],
      fa: [
        "رابط مکالمه‌ای فارسی",
        "پاسخ‌های مبتنی بر RAG و مستندات رسمی",
        "راهنمایی گام‌به‌گام برای کاربران غیرفنی",
        "اتصال به راهنماها، روال‌ها و سامانه‌های داخلی سازمان",
        "داشبورد کاربر برای دسترسی به ایجنت‌ها، پرسش و ارسال بازخورد",
        "داشبورد مدیریت برای آمار، کاربران، گفتگوها، ایجنت‌ها و به‌روزرسانی دانش",
        "بهبود دانش بر پایه بازخورد",
        "در دسترس ۲۴/۷",
        "قابل استقرار روی وب‌سایت، پورتال‌های داخلی و محیط‌های سازمانی",
        "دستیارهای تخصصی برای Word، Excel، PowerPoint و سامانه‌های داخلی",
      ],
    },
    demo: "https://helpdesk.netflowai.com/",
    client: {
      en: "Maroon Petrochemical Company",
      fa: "شرکت پتروشیمی مارون",
    },
  },
  {
    slug: "knowledge-base",
    icon: BookOpen,
    accent: "from-fuchsia-500 to-purple-600",
    name: {
      en: "Knowledge Base",
      fa: "پایگاه دانش",
    },
    short: {
      en: "A RAG-based AI question-answering and knowledge management system for specialized organizational knowledge.",
      fa: "سیستم پرسش‌وپاسخ و مدیریت دانش مبتنی بر RAG برای دانش تخصصی سازمانی.",
    },
    purpose: {
      en: "Allows organizations in sectors such as power, petrochemical, and enterprise operations to search large document collections and receive accurate answers with cited sources.",
      fa: "به سازمان‌هایی در حوزه‌هایی مانند نیرو، پتروشیمی و عملیات سازمانی اجازه می‌دهد در مجموعه‌های بزرگ مستندات جست‌وجو کنند و پاسخ‌های دقیق همراه با ارجاع به منابع دریافت کنند.",
    },
    features: {
      en: [
        "RAG-based question answering",
        "Semantic search in Persian and English",
        "Conceptual analysis of more than 10,000 documents",
        "Answers with cited sources and evidence",
        "Knowledge graph support",
        "PDF and audio transcript support",
        "On-premise deployment option",
        "Specialized knowledge management for industrial environments",
      ],
      fa: [
        "پرسش‌وپاسخ مبتنی بر RAG",
        "جست‌وجوی معنایی در فارسی و انگلیسی",
        "تحلیل مفهومی بیش از ۱۰٬۰۰۰ سند",
        "پاسخ همراه با منابع و مستندات",
        "پشتیبانی از گراف دانش",
        "پشتیبانی از PDF و رونوشت صوتی",
        "گزینه استقرار درون‌سازمانی (On-premise)",
        "مدیریت دانش تخصصی برای محیط‌های صنعتی",
      ],
    },
    demo: "https://knowledge.ainaha.com",
    client: {
      en: "Implemented in power and petrochemical industries",
      fa: "پیاده‌سازی‌شده در صنایع نیرو و پتروشیمی",
    },
  },
  {
    slug: "aibi",
    icon: Database,
    accent: "from-violet-600 to-purple-500",
    name: {
      en: "AIBI — AI DB Assistant",
      fa: "AIBI — دستیار هوش‌مند پایگاه داده",
    },
    short: {
      en: "An AI-powered database assistant that lets users ask business or operational questions in natural language and receive database-driven answers, charts, or reports.",
      fa: "دستیار پایگاه داده مبتنی بر هوش مصنوعی که به کاربران اجازه می‌دهد پرسش‌های کسب‌وکاری یا عملیاتی را به زبان طبیعی بپرسند و پاسخ، نمودار یا گزارش مبتنی بر داده دریافت کنند.",
    },
    purpose: {
      en: "Gives managers and non-technical users self-service access to data insights without relying on IT or database specialists.",
      fa: "به مدیران و کاربران غیرفنی دسترسی self-service به بینش‌های داده‌ای می‌دهد، بدون وابستگی به تیم IT یا متخصص پایگاه داده.",
    },
    features: {
      en: [
        "Natural language data querying",
        "Automated SQL/query generation",
        "Data article/report generation",
        "Chart and visualization output",
        "Database schema understanding",
        "Error correction and query refinement",
        "Self-service analytics for enterprise users",
      ],
      fa: [
        "پرسش از داده‌ها به زبان طبیعی",
        "تولید خودکار SQL و کوئری",
        "تولید مقاله و گزارش داده‌ای",
        "خروجی نمودار و مصورسازی",
        "درک ساختار (schema) پایگاه داده",
        "اصلاح خطا و بازنویسی کوئری",
        "تحلیل self-service برای کاربران سازمانی",
      ],
    },
    demo: "https://aibi.netflowai.com/",
    client: {
      en: "Maroon Petrochemical Company",
      fa: "شرکت پتروشیمی مارون",
    },
  },
  {
    slug: "moharrer",
    icon: Scale,
    accent: "from-indigo-500 to-violet-600",
    name: {
      en: "Moharrer Legal Assistant",
      fa: "محرر — دستیار حقوقی",
    },
    short: {
      en: "An AI-powered legal drafting assistant trained for the judicial and legal context of the Islamic Republic of Iran.",
      fa: "دستیار نگارش حقوقی مبتنی بر هوش مصنوعی، آموزش‌دیده برای زمینه قضایی و حقوقی جمهوری اسلامی ایران.",
    },
    purpose: {
      en: "Helps users generate accurate, customized legal documents quickly and at lower cost.",
      fa: "به کاربران کمک می‌کند اسناد حقوقی دقیق و سفارشی‌شده را به‌سرعت و با هزینه کم‌تر تولید کنند.",
    },
    features: {
      en: [
        "Legal document generation",
        "Customized drafting based on user needs",
        "Persian legal-domain support",
        "Designed with collaboration between AI and legal experts",
        "Reduces time and cost of preparing legal documents",
      ],
      fa: [
        "تولید اسناد حقوقی",
        "نگارش سفارشی بر اساس نیاز کاربر",
        "پشتیبانی از حوزه حقوق فارسی",
        "طراحی‌شده با همکاری متخصصان هوش مصنوعی و حقوق",
        "کاهش زمان و هزینه تهیه اسناد حقوقی",
      ],
    },
    demo: "https://aimoharer.com",
    client: {
      en: "Internal / product-based project",
      fa: "پروژه داخلی / محصولی",
    },
  },
  {
    slug: "naha",
    icon: Phone,
    accent: "from-purple-600 to-pink-500",
    name: {
      en: "Naha — Real-time Voice & Text AI",
      fa: "ناها — هوش گفت‌وگوی صوتی و متنی بلادرنگ",
    },
    short: {
      en: "A real-time AI-powered text and voice communication platform for customer service, consultation, and business support.",
      fa: "پلتفرم ارتباطی متنی و صوتی بلادرنگ مبتنی بر هوش مصنوعی برای خدمات مشتری، مشاوره و پشتیبانی کسب‌وکار.",
    },
    purpose: {
      en: "Enables businesses to automate phone operations, appointment scheduling, customer support, and outbound marketing calls.",
      fa: "به کسب‌وکارها اجازه می‌دهد عملیات تلفنی، رزرو وقت، پشتیبانی مشتری و تماس‌های بازاریابی خروجی را خودکار کنند.",
    },
    features: {
      en: [
        "Real-time voice and text processing",
        "AI phone operator",
        "Appointment scheduling through Google Calendar",
        "Customer support based on business policies",
        "Marketing and advertising calls",
        "Conversation analysis and processing",
        "Handles up to 500 simultaneous calls using one graphical server",
        "Lower operational cost compared with human operators",
      ],
      fa: [
        "پردازش صدا و متن به‌صورت بلادرنگ",
        "اپراتور تلفنی هوش مصنوعی",
        "رزرو وقت از طریق Google Calendar",
        "پشتیبانی مشتری بر اساس سیاست‌های کسب‌وکار",
        "تماس‌های بازاریابی و تبلیغاتی",
        "تحلیل و پردازش مکالمه",
        "پشتیبانی هم‌زمان از تا ۵۰۰ تماس با یک سرور گرافیکی",
        "هزینه عملیاتی کم‌تر نسبت به اپراتور انسانی",
      ],
    },
    demo: "https://ainaha.com",
    client: {
      en: "Internal / product-based project",
      fa: "پروژه داخلی / محصولی",
    },
  },
  {
    slug: "fire-smoke-detection",
    icon: Flame,
    accent: "from-rose-500 to-orange-500",
    name: {
      en: "Fire & Smoke Detection System",
      fa: "سیستم تشخیص آتش و دود",
    },
    short: {
      en: "An AI-based surveillance camera system for detecting fire, smoke, and unusual events in industrial environments.",
      fa: "سامانه دوربین مدار بسته مبتنی بر هوش مصنوعی برای تشخیص آتش، دود و رخدادهای غیرعادی در محیط‌های صنعتی.",
    },
    purpose: {
      en: "Enhances industrial safety by analyzing surveillance camera images and videos in real time to detect risks early.",
      fa: "ایمنی صنعتی را با تحلیل بلادرنگ تصاویر و ویدئوهای دوربین‌های نظارتی بهبود می‌دهد و ریسک‌ها را زود تشخیص می‌دهد.",
    },
    features: {
      en: [
        "Real-time video processing",
        "Fire and smoke detection",
        "Unusual event detection",
        "AI and machine learning-based pattern recognition",
        "Security and safety monitoring",
        "Reporting and operational insights",
      ],
      fa: [
        "پردازش ویدئو به‌صورت بلادرنگ",
        "تشخیص آتش و دود",
        "تشخیص رخدادهای غیرعادی",
        "تشخیص الگو مبتنی بر هوش مصنوعی و یادگیری ماشین",
        "پایش امنیت و ایمنی",
        "گزارش‌دهی و بینش‌های عملیاتی",
      ],
    },
    demo: "https://cctv.hashtai.ir",
    client: {
      en: "Apadana Petrofan Petrochemical Company",
      fa: "شرکت پتروشیمی پتروفن آپادانا",
    },
  },
  {
    slug: "poshtiban",
    icon: Headphones,
    accent: "from-violet-500 to-cyan-500",
    name: {
      en: "Poshtiban — 24/7 Customer Service Bot",
      fa: "پشتیبان — چت‌بات خدمات مشتری ۲۴/۷",
    },
    short: {
      en: "A 24/7 AI chatbot for online business customer service.",
      fa: "چت‌بات هوش مصنوعی ۲۴/۷ برای خدمات مشتری کسب‌وکارهای آنلاین.",
    },
    purpose: {
      en: "Helps businesses automate customer support, provide instant answers, and analyze support conversations.",
      fa: "به کسب‌وکارها کمک می‌کند پشتیبانی مشتری را خودکار کنند، پاسخ فوری بدهند و گفتگوهای پشتیبانی را تحلیل کنند.",
    },
    features: {
      en: [
        "24/7 customer support",
        "Personalized responses",
        "Conversation analysis and insights",
        "Multilingual support",
        "Reporting dashboard",
        "Command model for easier operation",
        "Designed for online businesses",
      ],
      fa: [
        "پشتیبانی مشتری ۲۴/۷",
        "پاسخ‌های شخصی‌سازی‌شده",
        "تحلیل گفتگو و استخراج بینش",
        "پشتیبانی چندزبانه",
        "داشبورد گزارش‌دهی",
        "مدل فرمان‌محور برای بهره‌برداری ساده‌تر",
        "طراحی‌شده برای کسب‌وکارهای آنلاین",
      ],
    },
    demo: "https://aiposhtiban.com",
    client: {
      en: "Internal / product-based project",
      fa: "پروژه داخلی / محصولی",
    },
  },
  {
    slug: "tabib",
    icon: Stethoscope,
    accent: "from-teal-500 to-violet-500",
    name: {
      en: "Tabib — AI Medical Consultation",
      fa: "طبیب — مشاوره پزشکی هوشمند",
    },
    short: {
      en: "An AI-driven diagnosis and medical consultation platform.",
      fa: "پلتفرم تشخیص و مشاوره پزشکی مبتنی بر هوش مصنوعی.",
    },
    purpose: {
      en: "Improves access to basic healthcare guidance by offering online medical consultations, preliminary diagnosis, and health recommendations.",
      fa: "با ارائه مشاوره پزشکی آنلاین، تشخیص اولیه و توصیه‌های سلامت، دسترسی به راهنمایی‌های پزشکی پایه را بهبود می‌دهد.",
    },
    features: {
      en: [
        "AI-based preliminary diagnosis",
        "Online medical consultation",
        "Health recommendation engine",
        "User-facing medical support platform",
        "Designed to improve public access to medical services",
      ],
      fa: [
        "تشخیص اولیه مبتنی بر هوش مصنوعی",
        "مشاوره پزشکی آنلاین",
        "موتور توصیه سلامت",
        "پلتفرم پشتیبانی پزشکی روبه‌کاربر",
        "طراحی‌شده برای بهبود دسترسی عمومی به خدمات پزشکی",
      ],
    },
    demo: "https://aitabib.hashtai.ir",
    client: {
      en: "Internal / product-based project",
      fa: "پروژه داخلی / محصولی",
    },
  },
  {
    slug: "catalyst-minutes",
    icon: Mic,
    accent: "from-indigo-500 to-purple-600",
    name: {
      en: "Catalyst Minutes — Diarization & Meeting Intelligence",
      fa: "Catalyst Minutes — صورت‌جلسه و هوش گردهمایی",
    },
    short: {
      en: "An AI system that converts industrial meeting audio into structured, verifiable, and actionable meeting records.",
      fa: "سامانه‌ای هوش مصنوعی که صدای جلسات صنعتی را به سوابق ساختارمند، قابل راستی‌آزمایی و قابل‌اقدام تبدیل می‌کند.",
    },
    purpose: {
      en: "Helps industrial teams capture meetings, extract decisions, identify action items, and produce auditable operational records.",
      fa: "به تیم‌های صنعتی کمک می‌کند جلسات را ثبت کنند، تصمیم‌ها را استخراج کنند، اقلام اقدام را شناسایی کنند و سوابق عملیاتی قابل ممیزی تولید کنند.",
    },
    features: {
      en: [
        "Audio capture and transcription",
        "Speaker diarization",
        "Decision extraction",
        "Action item generation",
        "Safety item identification",
        "Citation and proof linked to audio",
        "Integration potential with SAP, Maximo, Jira",
        "Secure and auditable meeting documentation",
      ],
      fa: [
        "ضبط و رونویسی صدا",
        "تفکیک گویندگان (Diarization)",
        "استخراج تصمیمات",
        "تولید اقلام اقدام",
        "شناسایی موارد ایمنی",
        "ارجاع و اثبات متصل به صدای اصلی",
        "قابلیت یکپارچه‌سازی با SAP، Maximo، Jira",
        "مستندسازی امن و قابل ممیزی جلسات",
      ],
    },
    client: {
      en: "Fara Engineering Consultors Company",
      fa: "شرکت مهندسین مشاور فرا",
    },
  },
  {
    slug: "avl-trust",
    icon: ShieldCheck,
    accent: "from-emerald-500 to-violet-600",
    name: {
      en: "AVL Trust Infrastructure",
      fa: "زیرساخت AVL Trust",
    },
    short: {
      en: "An approved vendor list and vendor trust management system for petrochemical operations.",
      fa: "سامانه فهرست تأمین‌کنندگان تأییدشده و مدیریت اعتماد تأمین‌کنندگان برای عملیات پتروشیمی.",
    },
    purpose: {
      en: "Helps organizations manage vendor data, improve supplier evaluation, support audits, and make high-stakes procurement decisions with greater confidence.",
      fa: "به سازمان‌ها کمک می‌کند داده‌های تأمین‌کنندگان را مدیریت کنند، ارزیابی را بهبود دهند، از ممیزی پشتیبانی کنند و تصمیمات تدارکاتی پراهمیت را با اعتماد بیش‌تر اتخاذ کنند.",
    },
    features: {
      en: [
        "Single authoritative vendor profile",
        "Engineering-grade filtering",
        "Continuous audit mode",
        "Regulator-friendly language",
        "Vendor profile consolidation",
        "Search by operational requirements",
        "Confidence horizon for vendor selection",
        "Designed for petrochemical procurement and vendor governance",
      ],
      fa: [
        "پروفایل واحد و معتبر تأمین‌کننده",
        "فیلترگذاری در سطح مهندسی",
        "حالت ممیزی پیوسته",
        "زبان سازگار با نهادهای ناظر",
        "تجمیع پروفایل تأمین‌کننده",
        "جست‌وجو بر اساس الزامات عملیاتی",
        "افق اطمینان در انتخاب تأمین‌کننده",
        "طراحی‌شده برای تدارکات و حاکمیت تأمین‌کنندگان پتروشیمی",
      ],
    },
    client: {
      en: "Bakhtar Holding",
      fa: "هلدینگ باختر",
    },
  },
];

export const getProductBySlug = (slug: string): Product | undefined =>
  products.find((p) => p.slug === slug);
