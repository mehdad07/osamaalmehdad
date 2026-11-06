export type PageId = 'about' | 'cv' | 'education' | 'vision' | 'contact';

export interface SocialLink {
  label: string;
  href: string;
  shortLabel: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface EducationItem {
  title: string;
  institution: string;
  period: string;
  type: string;
  description: string;
}

export interface ProjectItem {
  title: string;
  type: string;
  technologies: string;
  description: string;
  highlights: string[];
}

export interface ValueItem {
  title: string;
  description: string;
}

export interface ContactMethod {
  label: string;
  value: string;
  href: string;
  description: string;
}

export const portfolioData = {
  profile: {
    name: 'أسامة عبدالله المحداد',
    initials: 'أ م',
    image: '/images/profile.jpeg',
    role: 'مطور برمجيات وتطبيقات الهاتف ومواقع الويب',
    location: 'المملكة العربية السعودية',
    availability: 'متاح لفرص العمل والتعاون',
    summary: 'مطور برمجيات خريج بكالوريوس تقنية معلومات، متخصص في تصميم وتطوير تطبيقات الويب والهواتف الذكية وبناء حلول رقمية عملية ومبتكرة.',
    bio: 'مطور برمجيات خريج بكالوريوس تقنية معلومات، أمتلك معرفة في تصميم وتطوير تطبيقات الويب والهواتف الذكية، وربط وتكامل واجهات برمجة التطبيقات APIs، وبناء واجهات مستخدم UI/UX تفاعلية. أسعى إلى توظيف مهاراتي البرمجية في تحويل المتطلبات التقنية إلى حلول رقمية مبتكرة تخدم الأهداف التقنية والتشغيلية للأعمال.',
    email: 'osamaalmehdad@gmail.com',
    phone: '+966539235218',
    socialLinks: [
      { label: 'البريد الإلكتروني', shortLabel: 'Email', href: 'mailto:osamaalmehdad@gmail.com' },
      { label: 'LinkedIn', shortLabel: 'LinkedIn', href: 'https://www.linkedin.com/in/اسامه-المحداد-43180b291' },
      { label: 'GitHub', shortLabel: 'GitHub', href: 'https://github.com/mehdad07' },
    ] satisfies SocialLink[],
  },
  navigation: [
    { id: 'about', label: 'من أنا', eyebrow: '01' },
    { id: 'cv', label: 'السيرة الذاتية', eyebrow: '02' },
    { id: 'education', label: 'التعليم', eyebrow: '03' },
    { id: 'vision', label: 'الرؤية', eyebrow: '04' },
    { id: 'contact', label: 'تواصل معي', eyebrow: '05' },
  ] satisfies Array<{ id: PageId; label: string; eyebrow: string }>,
  experiences: [
    {
      role: 'مطور تطبيقات الهاتف المحمول — تدريب',
      company: 'يمن سوفت',
      period: 'تدريب لمدة 4 أشهر',
      description: 'المشاركة في تحليل وتصميم وتطوير تطبيقات الهاتف المحمول، والعمل ضمن فريق برمجي من مرحلة التخطيط والتصميم وصولاً إلى التنفيذ والاختبار.',
      highlights: [
        'المساهمة في تطوير تطبيقات هاتفية باستخدام Flutter وDart.',
        'تصميم واجهات استخدام تفاعلية مع مراعاة مبادئ UI/UX.',
        'التعاون مع الفريق ومتابعة جودة التنفيذ وتسليم المهام في الوقت المحدد.',
      ],
    },
  ] satisfies Experience[],
  skills: [
    'Flutter',
    'Dart',
    'Laravel',
    'PHP',
    'HTML',
    'CSS',
    'JavaScript',
    'RESTful APIs',
    'UI/UX',
    'Figma',
    'MySQL',
    'SQL',
    'SQLite',
    'Hive',
    'Git',
    'GitHub',
    'Microsoft Office',
  ],
  education: [
    {
      title: 'بكالوريوس تقنية المعلومات',
      institution: 'جامعة الناصر — صنعاء، اليمن',
      period: 'أكتوبر 2021 — مايو 2025',
      type: 'مؤهل أكاديمي',
      description: 'درجة البكالوريوس في تقنية المعلومات مع اهتمام بتطوير البرمجيات وتطبيقات الويب والهواتف الذكية.',
    },
    {
      title: 'دورات متقدمة في اللغة الإنجليزية',
      institution: 'معهد سيدز — صنعاء، اليمن',
      period: 'سبتمبر 2020 — يونيو 2021',
      type: 'دراسة وتطوير لغوي',
      description: 'دورات متقدمة لتطوير مهارات اللغة الإنجليزية والقراءة والفهم والتواصل المهني.',
    },
    {
      title: 'إدارة المشاريع — Introduction to Project Management',
      institution: 'Udemy',
      period: '2024 — 2025',
      type: 'دورة تدريبية',
      description: 'محتوى تدريبي في أساسيات إدارة المشاريع وتنظيم مراحل العمل ومتابعة الإنجاز.',
    },
    {
      title: 'تصميم تجربة المستخدم — User Experience Design Essentials',
      institution: 'Udemy',
      period: '2024 — 2025',
      type: 'دورة تدريبية',
      description: 'مفاهيم أساسية في تصميم تجربة المستخدم وبناء واجهات سهلة وواضحة.',
    },
    {
      title: 'Git & GitHub للمطورين',
      institution: 'Udemy',
      period: '2024 — 2025',
      type: 'دورة تدريبية',
      description: 'استخدام Git وGitHub لإدارة الإصدارات وتنظيم العمل البرمجي والتعاون مع فرق التطوير.',
    },
  ] satisfies EducationItem[],
  projects: [
    {
      title: 'منصة توظيف — مشروع التخرج',
      type: 'تطبيق هاتف وموقع ويب',
      technologies: 'Flutter · Dart · Laravel · PHP · Bloc Pattern',
      description: 'منصة تساعد الباحثين عن العمل وأصحاب الأعمال على إدارة فرص التوظيف والتقديم عليها.',
      highlights: [
        'تصميم واجهات التطبيق باستخدام Flutter مع تطبيق مبادئ UX.',
        'بناء صفحات الملف الشخصي والبحث عن الوظائف والتقديم عليها.',
        'ربط الواجهة الخلفية بالواجهة الأمامية باستخدام Bloc Pattern.',
        'تطوير مزايا مرتبطة بالذكاء الاصطناعي وتصميم صفحات الويب الخلفية باستخدام Laravel وPHP.',
      ],
    },
    {
      title: 'تطبيق المشتريات والموردين',
      type: 'تطبيق هاتف',
      technologies: 'Flutter · Dart · SQLite',
      description: 'تطبيق لإدارة عروض الموردين وعمليات البيع والمشتريات والمخزون.',
      highlights: [
        'إنشاء قاعدة بيانات محلية وحفظ البيانات داخل التطبيق.',
        'تنفيذ عمليات الإضافة والتعديل والحذف بطريقة منظمة.',
        'تصميم تجربة استخدام مناسبة لمتابعة الموردين والعمليات اليومية.',
      ],
    },
    {
      title: 'متجر إلكتروني',
      type: 'مشروع شخصي',
      technologies: 'Laravel · Blade · JavaScript · Tailwind CSS',
      description: 'متجر إلكتروني متكامل لإدارة المحتوى والمنتجات والعملاء والطلبات.',
      highlights: [
        'بناء لوحة تحكم لإدارة المحتوى والمنتجات والعملاء.',
        'تنفيذ نظام الصلاحيات باستخدام Spatie Permission.',
        'دعم تعدد اللغات والمصادقة الثنائية والتحكم بالجلسات.',
        'تحسين الظهور في محركات البحث باستخدام Meta Tags وOpen Graph.',
      ],
    },
  ] satisfies ProjectItem[],
  values: [
    { title: 'حلول عملية', description: 'أحوّل المتطلبات التقنية إلى حلول رقمية واضحة وقابلة للاستخدام والتطوير.' },
    { title: 'تعلم مستمر', description: 'أطوّر مهاراتي باستمرار في البرمجة وتصميم التجارب وأدوات العمل الحديثة.' },
    { title: 'عمل جماعي', description: 'أؤمن بأهمية التعاون والتواصل والالتزام للوصول إلى نتائج ناجحة.' },
  ] satisfies ValueItem[],
  vision: {
    statement: 'أطمح إلى بناء حلول رقمية مبتكرة تجعل التقنية أكثر فائدة ووضوحاً للأفراد والأعمال.',
    paragraphs: [
      'رؤيتي المهنية هي تطوير تطبيقات ومنتجات رقمية تجمع بين جودة التنفيذ وسهولة الاستخدام، وتساعد المؤسسات على تحويل احتياجاتها إلى نتائج قابلة للقياس.',
      'أسعى إلى النمو داخل بيئة مهنية أستطيع فيها التعلم من فريق متخصص، والمساهمة في مشاريع تقنية ذات أثر، وتطوير خبرتي في تطبيقات الهاتف والويب والذكاء الاصطناعي.',
    ],
  },
  contacts: [
    { label: 'Whatsapp', value: 'https://wa.me/+966539235218', href: 'https://wa.me/+966539235218', description: 'تواصل معي على واتساب' },
    { label: 'البريد الإلكتروني', value: 'osamaalmehdad@gmail.com', href: 'mailto:osamaalmehdad@gmail.com', description: 'للتواصل المهني وطلبات العمل والتعاون.' },
    { label: 'الهاتف', value: '+966539235218', href: 'tel:+967772123962', description: 'للتواصل  .' },
    { label: 'LinkedIn', value: 'https://www.linkedin.com/in/اسامه-المحداد-43180b291', href: 'https://www.linkedin.com/in/اسامه-المحداد-43180b291', description: ' ملفي الشخصي على LinkedIn.' },
    { label: 'GitHub', value: 'https://github.com/mehdad07', href: 'https://github.com/mehdad07', description: 'حسابي على GitHub' },
  ] satisfies ContactMethod[],
} as const;

export type PortfolioData = typeof portfolioData;
