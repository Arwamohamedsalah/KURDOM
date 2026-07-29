import {
  HiOutlineHome,
  HiOutlineKey,
  HiOutlineSpeakerphone,
  HiOutlineOfficeBuilding,
  HiOutlineLightBulb,
} from 'react-icons/hi';
import {
  FaShieldAlt,
  FaEye,
  FaGem,
  FaUserTie,
  FaHandshake,
  FaHeart,
} from 'react-icons/fa';
import aboutImage from '../assets/about-premium-villa.png';

export const companyInfo = {
  name: 'Kurdm Real Estate',
  nameAr: 'كردم العقارية',
  location: 'Jeddah, Saudi Arabia',
  locationAr: 'جدة، المملكة العربية السعودية',
  phone: '+966 12 000 0000',
  email: 'info@kurdm.sa',
  address: 'جدة، حي الروضة، المملكة العربية السعودية',
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
  headlineAr: 'استثمر بثقة مع كردم العقارية',
  description:
    'نقدم حلولاً عقارية متكاملة للأفراد والمستثمرين بخبرة احترافية ورؤية استثمارية تساعدك على اغتنام أفضل الفرص وتحقيق أعلى العوائد في السوق العقاري السعودي.',
  primaryBtn: 'ابدأ رحلتك الاستثمارية',
  secondaryBtn: 'تواصل معنا',
  image:
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80',
};

export const aboutContent = {
  label: 'About Us',
  title: 'شريكك الموثوق في عالم العقارات',
  description:
    'كردم العقارية شركة عقارية احترافية متخصصة في تقديم خدمات عقارية شاملة وحلول استثمارية للأفراد والمستثمرين في المملكة العربية السعودية. نبني على أساس الجودة والشفافية والثقة والاحترافية، لنساعد عملاءنا في العثور على أفضل الفرص العقارية وتعظيم قيمة استثماراتهم.',
  stats: [
    { value: 500, suffix: '+', label: 'عقار تم تسويقه' },
    { value: 350, suffix: '+', label: 'عميل راضٍ' },
    { value: 15, suffix: '+', label: 'سنة خبرة' },
    { value: 98, suffix: '%', label: 'نسبة رضا العملاء' },
  ],
  image: aboutImage,
};

export const visionMissionGoals = [
  {
    type: 'vision',
    title: 'رؤيتنا',
    titleEn: 'Vision',
    description:
      'أن نكون المزود الرائد للخدمات العقارية المبتكرة والمتكاملة، والوجهة الأكثر ثقة للاستثمار العقاري في المملكة العربية السعودية.',
    icon: FaEye,
  },
  {
    type: 'mission',
    title: 'رسالتنا',
    titleEn: 'Mission',
    description:
      'تقديم حلول عقارية احترافية تلبي احتياجات الأفراد والمستثمرين من خلال بناء علاقات طويلة الأمد قائمة على الثقة والمصداقية والشفافية.',
    icon: FaHandshake,
  },
  {
    type: 'goal',
    title: 'هدفنا',
    titleEn: 'Goal',
    description:
      'تقديم خدمات عقارية متميزة تزيد من قيمة الاستثمار وتساعد العملاء على تحقيق أعلى عائد ممكن على استثماراتهم.',
    icon: FaGem,
  },
];

export const coreValues = [
  { title: 'الثقة', icon: FaShieldAlt },
  { title: 'الشفافية', icon: FaEye },
  { title: 'الجودة', icon: FaGem },
  { title: 'الاحترافية', icon: FaUserTie },
  { title: 'المصداقية', icon: FaHandshake },
  { title: 'رضا العملاء', icon: FaHeart },
];

export const services = [
  {
    title: 'شراء وبيع العقارات',
    description:
      'نساعد العملاء في شراء وبيع العقارات السكنية والتجارية مع إدارة جميع الإجراءات القانونية والإدارية باحترافية.',
    icon: HiOutlineHome,
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
  },
  {
    title: 'تأجير العقارات',
    description:
      'نوفر حلول تأجير موثوقة تحمي حقوق الملاك والمستأجرين على حد سواء.',
    icon: HiOutlineKey,
    image:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80',
  },
  {
    title: 'التسويق العقاري',
    description:
      'ننشئ حملات تسويقية استراتيجية لتسريع عمليات بيع وتأجير العقارات.',
    icon: HiOutlineSpeakerphone,
    image:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80',
  },
  {
    title: 'إدارة العقارات',
    description:
      'ندير ونصون الأصول العقارية لتعظيم قيمتها وربحيتها على المدى الطويل.',
    icon: HiOutlineOfficeBuilding,
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
  },
  {
    title: 'الاستشارات العقارية',
    description:
      'نقدم تحليلات السوق والإرشاد الاستثماري والاستشارات المهنية لدعم القرارات المدروسة.',
    icon: HiOutlineLightBulb,
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
  },
];

export const whyChoose = [
  'مستشارون عقاريون ذوو خبرة',
  'فهم عميق للسوق العقاري السعودي',
  'حلول استثمارية مخصصة',
  'تواصل شفاف ومباشر',
  'خدمة عملاء احترافية',
  'شراكات طويلة الأمد',
  'نصائح استثمارية استراتيجية',
  'تعظيم عوائد الاستثمار',
];

export const featuredProperties = [
  {
    id: 1,
    title: 'فيلا فاخرة — حي الروضة',
    type: 'سكني',
    price: '4,500,000',
    currency: 'ر.س',
    beds: 5,
    baths: 6,
    area: 650,
    image:
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
  },
  {
    id: 2,
    title: 'شقة راقية — كورنيش جدة',
    type: 'سكني',
    price: '1,850,000',
    currency: 'ر.س',
    beds: 3,
    baths: 3,
    area: 220,
    image:
      'https://images.unsplash.com/photo-1502672260266-1c1ef2cd936f?w=800&q=80',
  },
  {
    id: 3,
    title: 'مكتب تجاري — برج الأعمال',
    type: 'تجاري',
    price: '3,200,000',
    currency: 'ر.س',
    beds: null,
    baths: 2,
    area: 380,
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  },
  {
    id: 4,
    title: 'عمارة استثمارية — حي الحمراء',
    type: 'استثماري',
    price: '8,750,000',
    currency: 'ر.س',
    beds: 12,
    baths: 14,
    area: 1200,
    image:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'أحمد العمري',
    role: 'مستثمر عقاري',
    text: 'تعاملت مع كردم العقارية في عدة مشاريع استثمارية، وكانت تجربة استثنائية من حيث الشفافية والاحترافية. أنصح بها بشدة.',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
  },
  {
    id: 2,
    name: 'سارة الحربي',
    role: 'مالكة عقار',
    text: 'فريق كردم ساعدني في إدارة وتأجير عقاراتي بكفاءة عالية. الخدمة ممتازة والتواصل مستمر ومباشر.',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
  },
  {
    id: 3,
    name: 'خالد الشمري',
    role: 'رجل أعمال',
    text: 'استشاراتهم العقارية ساعدتني في اتخاذ قرارات استثمارية مدروسة حققت عوائد ممتازة. شركاء موثوقون.',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80',
  },
];

export const faqItems = [
  {
    question: 'ما هي الخدمات التي تقدمها كردم العقارية؟',
    answer:
      'نقدم مجموعة شاملة من الخدمات تشمل شراء وبيع العقارات، التأجير، التسويق العقاري، إدارة العقارات، والاستشارات العقارية للأفراد والمستثمرين.',
  },
  {
    question: 'في أي مناطق تقدمون خدماتكم؟',
    answer:
      'نركز على خدمة عملائنا في جدة والمناطق المحيطة، مع تغطية واسعة للسوق العقاري في المملكة العربية السعودية.',
  },
  {
    question: 'كيف تضمنون شفافية التعامل؟',
    answer:
      'نلتزم بمبادئ الشفافية الكاملة في جميع مراحل التعامل، من التقييم الأولي حتى إتمام الصفقة، مع توثيق كل خطوة وإطلاع العميل عليها.',
  },
  {
    question: 'هل تقدمون استشارات استثمارية؟',
    answer:
      'نعم، فريقنا من المستشارين العقاريين يقدم تحليلات السوق ودراسات الجدوى والإرشاد الاستثماري لمساعدتك في اتخاذ قرارات مدروسة.',
  },
  {
    question: 'كيف يمكنني البدء في التعامل معكم؟',
    answer:
      'يمكنك التواصل معنا عبر نموذج الاتصال في الموقع أو الاتصال بنا مباشرة. سيتواصل معك أحد مستشارينا لمناقشة احتياجاتك.',
  },
];

export const ctaContent = {
  title: 'ابدأ رحلتك الاستثمارية اليوم',
  description:
    'تواصل مع فريق كردم العقارية واكتشف أفضل الفرص العقارية في السوق السعودي.',
  button: 'تواصل معنا',
};
