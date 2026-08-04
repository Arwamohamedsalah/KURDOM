import {
  HiOutlineHome,
  HiOutlineSpeakerphone,
  HiOutlineOfficeBuilding,
  HiOutlineLightBulb,
} from 'react-icons/hi';
import {
  FaShieldAlt,
  FaGem,
  FaEye,
  FaHandshake,
} from 'react-icons/fa';
const aboutImage =
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=85';

export const companyInfo = {
  name: 'Kurdm Real Estate',
  nameAr: 'كردم العقارية',
  location: 'Jeddah, Saudi Arabia',
  locationAr: 'جدة، المملكة العربية السعودية',
  phone: '+966 50 000 1865',
  email: 'info@kurdm.com.sa',
  website: 'www.kurdm.com.sa',
  address: 'جدة، المملكة العربية السعودية',
  falLicense: '1200030957',
  serviceArea: 'جميع أنحاء المملكة',
};

export const siteSeo = {
  siteUrl: 'https://www.kurdm.com.sa',
  title: 'كردم العقارية | Kurdm Real Estate',
  description:
    'كردم العقارية — شركة عقارية سعودية متخصصة في بيع وشراء وتأجير العقارات، التسويق العقاري، الاستشارات، وإدارة الأملاك في جدة وجميع أنحاء المملكة.',
  keywords:
    'كردم العقارية, Kurdm Real Estate, عقارات جدة, عقارات السعودية, استثمار عقاري, إدارة أملاك, تسويق عقاري, استشارات عقارية, رخصة فال',
  ogImage: '/logo%20brown.jpeg',
  locale: 'ar_SA',
};

export const brandLogos = {
  onLight: '/logo%20white.jpeg',
  onDark: '/logo%20brown.jpeg',
};

export const navLinks = [
  { id: 'home', label: 'الرئيسية', labelEn: 'Home' },
  { id: 'about', label: 'من نحن', labelEn: 'About' },
  { id: 'services', label: 'خدماتنا', labelEn: 'Services' },
  { id: 'faq', label: 'الأسئلة الشائعة', labelEn: 'FAQ' },
  { id: 'contact', label: 'تواصل معنا', labelEn: 'Contact' },
];

export const heroContent = {
  headlineEn: 'Invest with Confidence',
  headlineArLead: 'استثمر بثقة مع',
  headlineArBrandName: 'كردم',
  headlineArBrandSuffix: 'العقارية',
  description:
    'شركة عقارية متخصصة في تقديم الخدمات والحلول العقارية المتكاملة للأفراد والمستثمرين، من خلال منظومة عمل احترافية تركز على الجودة والشفافية والمصداقية.',
  primaryBtn: 'ابدأ رحلتك الاستثمارية',
  secondaryBtn: 'تواصل معنا',
  image:
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80',
};

export const aboutContent = {
  label: 'About Us',
  title: 'من نحن؟',
  description:
    'كردم العقارية شركة عقارية متخصصة في تقديم الخدمات والحلول العقارية المتكاملة للأفراد والمستثمرين، من خلال منظومة عمل احترافية تركز على الجودة والشفافية والمصداقية، بهدف تحقيق أفضل الفرص والعوائد الاستثمارية لعملائنا.',
  highlights: [
    { value: companyInfo.falLicense, label: 'رخصة فال' },
    { value: companyInfo.serviceArea, label: 'نطاق العمل' },
    { value: companyInfo.locationAr, label: 'المقر' },
    { value: companyInfo.website, label: 'الموقع الإلكتروني' },
  ],
  image: aboutImage,
};

export const visionMissionGoals = [
  {
    type: 'vision',
    title: 'رؤيتنا',
    titleEn: 'Vision',
    description:
      'الريادة في تقديم الخدمات العقارية المتكاملة والمبتكرة، وأن نكون الخيار الأول والوجهة الموثوقة للاستثمار العقاري في المملكة.',
    icon: FaEye,
  },
  {
    type: 'mission',
    title: 'رسالتنا',
    titleEn: 'Mission',
    description:
      'توفير حلول احترافية تلبي احتياجات الأفراد والمستثمرين بفعالية، من خلال بناء علاقات طويلة الأمد قائمة على الثقة والمصداقية.',
    icon: FaHandshake,
  },
  {
    type: 'goal',
    title: 'هدفنا',
    titleEn: 'Goal',
    description:
      'السعي الدائم لتقديم خدمة متميزة تسهم في تعزيز قيمة الاستثمار العقاري، وتحقيق أعلى العوائد لعملائنا وشركاء النجاح.',
    icon: FaGem,
  },
];

export const coreValues = [
  {
    title: 'الثقة والمصداقية',
    description:
      'نؤمن بأن الثقة هي حجر الزاوية في أي علاقة ناجحة، ولذلك نلتزم بأعلى درجات المصداقية والوضوح في كافة تعاملاتنا العقارية والاستشارية.',
    icon: FaShieldAlt,
  },
  {
    title: 'الجودة والشفافية',
    description:
      'نحرص على تطبيق أعلى معايير الجودة في خدماتنا، مع ضمان الشفافية التامة وإطلاع العميل على كافة التفاصيل لضمان اتخاذ قرارات سليمة.',
    icon: FaGem,
  },
];

export const servicesContent = {
  title: 'خدماتنا العقارية:',
  intro:
    'مجموعة متكاملة من الخدمات المصممة خصيصاً لتغطية كافة متطلبات السوق العقاري السعودي بأعلى مستويات الاحترافية.',
};

export const services = [
  {
    title: 'بيع وشراء وتأجير العقارات',
    icon: HiOutlineHome,
    points: [
      'توفير خيارات واسعة من العقارات السكنية والتجارية التي تتناسب مع مختلف الميزانيات والاحتياجات.',
      'إدارة عمليات التفاوض باحترافية عالية لضمان حصول العميل على أفضل قيمة ممكنة في السوق.',
      'إنهاء كافة الإجراءات القانونية والنظامية المتعلقة بالبيع والشراء وفق اللوائح المعتمدة.',
      'تقديم خدمات تأجير موثوقة تضمن حقوق الطرفين (المالك والمستأجر) بسلاسة وأمان.',
    ],
  },
  {
    title: 'التسويق العقاري',
    icon: HiOutlineSpeakerphone,
    points: [
      'حملات تسويقية مبتكرة ومدروسة للوصول إلى الشريحة المستهدفة.',
      'تسريع عمليات البيع أو التأجير بكفاءة.',
    ],
  },
  {
    title: 'الاستشارات العقارية',
    icon: HiOutlineLightBulb,
    points: [
      'دراسات سوقية دقيقة.',
      'توجيه استثماري مبني على بيانات حقيقية لضمان نجاح مشروعك العقاري.',
    ],
  },
  {
    title: 'إدارة الأملاك',
    icon: HiOutlineOfficeBuilding,
    points: [
      'الحفاظ على قيمة الأصول العقارية وتعظيم عوائدها.',
      'إدارة احترافية وعمليات تشغيل وصيانة دورية.',
    ],
  },
];

export const specializedServicesContent = {
  title: 'خدمات التميز المتخصصة',
  background: '/specialized-services-bg.png',
  items: [
    {
      title: 'إدارة الأملاك',
      description:
        'الحفاظ على قيمة الأصول العقارية وتعظيم عوائدها من خلال إدارة احترافية وعمليات تشغيل وصيانة دورية.',
    },
    {
      title: 'التسويق العقاري',
      description:
        'حملات تسويقية مبتكرة ومدروسة للوصول إلى الشريحة المستهدفة وتسريع عمليات البيع أو التأجير بكفاءة.',
    },
    {
      title: 'الاستشارات العقارية',
      description:
        'دراسات سوقية دقيقة وتوجيه استثماري مبني على بيانات حقيقية لضمان نجاح مشروعك العقاري.',
    },
  ],
};

export const whyChooseImage = '/واجهه%20جده%20البحرية%202.jpeg';

export const whyChoose = [
  {
    title: 'فريق متخصص وخبير',
    description:
      'نضم نخبة من المستشارين العقاريين الذين يمتلكون فهماً عميقاً لمتغيرات السوق العقاري المحلي، مما يضمن تقديم توصيات استراتيجية دقيقة.',
  },
  {
    title: 'فهم دقيق لاحتياجات العميل',
    description:
      'نحن لا نعرض العقارات فحسب، بل نستمع جيداً لأهدافك لتخصيص الخيارات التي تلبي تطلعاتك الشخصية والاستثمارية بشكل مثالي.',
  },
  {
    title: 'تعزيز قيمة الاستثمار',
    description:
      'نهدف إلى تحقيق أعلى عائد استثماري ممكن لعملائنا من خلال تحليل البيانات واقتناص الفرص العقارية الواعدة.',
  },
];

export const faqItems = [
  {
    question: 'ما هي الخدمات التي تقدمها كردم العقارية؟',
    answer:
      'نقدم مجموعة متكاملة من الخدمات تشمل بيع وشراء وتأجير العقارات، التسويق العقاري، الاستشارات العقارية، وإدارة الأملاك للأفراد والمستثمرين.',
  },
  {
    question: 'في أي مناطق تقدمون خدماتكم؟',
    answer:
      'نغطي نطاق عملنا جميع أنحاء المملكة العربية السعودية، مع مقرنا في جدة وخدماتنا متاحة للعملاء في مختلف مناطق المملكة.',
  },
  {
    question: 'كيف تضمنون شفافية التعامل؟',
    answer:
      'نلتزم بمبادئ الشفافية الكاملة في جميع مراحل التعامل، من التقييم الأولي حتى إتمام الصفقة، مع توثيق كل خطوة وإطلاع العميل عليها.',
  },
  {
    question: 'هل تقدمون استشارات استثمارية؟',
    answer:
      'نعم، فريقنا من المستشارين العقاريين يقدم دراسات سوقية دقيقة وتوجيهاً استثمارياً مبنياً على بيانات حقيقية لمساعدتك في اتخاذ قرارات مدروسة.',
  },
  {
    question: 'كيف يمكنني البدء في التعامل معكم؟',
    answer:
      'يمكنك التواصل معنا عبر بيانات الاتصال في الموقع أو الاتصال بنا مباشرة على +966 50 000 1865. سيتواصل معك أحد مستشارينا لمناقشة احتياجاتك.',
  },
];

export const ctaContent = {
  title: 'ابدأ رحلتك الاستثمارية اليوم',
  description:
    'تواصل مع فريق كردم العقارية واكتشف أفضل الفرص العقارية في جميع أنحاء المملكة.',
  button: 'تواصل معنا',
  background: '/Generated_image.png',
};

// Legacy exports kept for unused sections
export const featuredProperties = [];
export const testimonials = [];
