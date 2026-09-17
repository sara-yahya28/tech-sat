/* ═══════════════════════════════════════════════════════════
   TECH-SAT — Central Data (v3)
   Extended for details.html
   ═══════════════════════════════════════════════════════════ */

const DATA = {

  trustStrip: {
    partner: {
      name: 'IEC Global Telecom',
      note: 'الوكيل الحصري في اليمن',
      icon: 'bi-patch-check-fill'
    },
    numbers: [
      { value: '500+', label: 'عميل موثوق' },
      { value: '15+',  label: 'دولة' },
      { value: '200+', label: 'مشروع' },
      { value: '10+',  label: 'سنوات خبرة' }
    ]
  },

  stats: [
    { icon: 'bi-people',    value: 500, label: 'عميل موثوق', suffix: '+' },
    { icon: 'bi-globe',     value: 15,  label: 'دولة',        suffix: '' },
    { icon: 'bi-broadcast', value: 200, label: 'مشروع منجز', suffix: '+' },
    { icon: 'bi-trophy',    value: 10,  label: 'سنوات خبرة', suffix: '+' }
  ],

  /* ═══════════════════════════════════════════════════════════
     VERTICALS — القطاعات (تفصيلي)
  ═══════════════════════════════════════════════════════════ */
  verticals: [
    {
      id: 'gov',
      title: { ar: 'الحكومة', en: 'Government' },
      icon: 'bi-building',
      tag: { ar: 'قطاع', en: 'Industry' },
      promise: { ar: 'أمن، امتثال، واستمرارية الاتصال.', en: 'Security, compliance, and continuity.' },
      short: {
        ar: 'حلول اتصالات سيادية مخصصة للجهات الحكومية، مع التزام كامل بمعايير الأمن والسرية.',
        en: 'Sovereign communication solutions for government entities, fully compliant with security and confidentiality standards.'
      },
      longDescription: {
        ar: 'تعتمد الجهات الحكومية على اتصالات آمنة وموثوقة لتحقيق مهامها. نوفر شبكات خاصة مشفّرة، وروابط فضائية لا يمكن تعطيلها، مع دعم كامل لاستمرارية الأعمال في أوقات الأزمات.',
        en: 'Government entities depend on secure, reliable communications to achieve their missions. We provide encrypted private networks and satellite links that cannot be interrupted, with full support for business continuity during crises.'
      },
      image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1200',
      specs: [
        { ar: 'شبكات خاصة مشفّرة', en: 'Encrypted private networks' },
        { ar: 'روابط فضائية سيادية', en: 'Sovereign satellite links' },
        { ar: 'استمرارية الأعمال', en: 'Business continuity' },
        { ar: 'امتثال للمعايير الحكومية', en: 'Government compliance' }
      ],
      stats: [
        { value: '100%', lbl: { ar: 'تغطية', en: 'Coverage' } },
        { value: '4h', lbl: { ar: 'زمن النشر', en: 'Deploy time' } },
        { value: '24/7', lbl: { ar: 'مراقبة', en: 'Monitoring' } },
        { value: 'SLA', lbl: { ar: 'اتفاقية', en: 'Agreement' } }
      ],
      faq: [
        { q: { ar: 'هل الاتصالات مشفّرة بالكامل؟', en: 'Is communication fully encrypted?' },
          a: { ar: 'نعم، نستخدم تشفيراً بمعايير حكومية عبر كل الروابط.', en: 'Yes, we use government-grade encryption across all links.' } },
        { q: { ar: 'كم يستغرق نشر المحطة؟', en: 'How long does deployment take?' },
          a: { ar: 'أقل من 4 ساعات للفرق المدرّبة.', en: 'Under 4 hours for trained teams.' } }
      ],
      tags: ['حكومي', 'دفاع', 'أمن', 'اتصالات مشفرة'],
      caseStudyId: 'gov-01'
    },
    {
      id: 'humanitarian',
      title: { ar: 'الإنساني', en: 'Humanitarian' },
      icon: 'bi-heart',
      tag: { ar: 'قطاع', en: 'Industry' },
      promise: { ar: 'نشر سريع خلال 24–48 ساعة في الأزمات.', en: 'Rapid deployment within 24–48 hours in crises.' },
      short: {
        ar: 'دعم المنظمات الإنسانية بمحطات محمولة وفرق نشر ميدانية جاهزة للعمل في أقسى الظروف.',
        en: 'Supporting humanitarian organizations with portable terminals and field deployment teams ready for the toughest conditions.'
      },
      longDescription: {
        ar: 'عند التعامل مع الأزمات، تواجه المنظمات الإنسانية عادة انهيار شبكات الاتصالات التقليدية. الاتصالات الفضائية توفر اتصالاً موثوقاً وقابلاً للنشر السريع أينما كان الفريق.',
        en: 'When dealing with crises, humanitarian organizations typically face collapse of conventional networks. Satellite communications provide reliable, rapidly deployable connectivity wherever the team is.'
      },
      image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1200',
      specs: [
        { ar: 'محطات Manpack محمولة', en: 'Portable Manpack terminals' },
        { ar: 'دعم ميداني متخصص', en: 'Specialized field support' },
        { ar: 'تعرفة مرنة', en: 'Flexible pricing' },
        { ar: 'نشر خلال 24 ساعة', en: '24-hour deployment' }
      ],
      stats: [
        { value: '24h', lbl: { ar: 'زمن النشر', en: 'Deploy time' } },
        { value: '30+', lbl: { ar: 'دولة', en: 'Countries' } },
        { value: 'Portable', lbl: { ar: 'قابل للحمل', en: 'Portable' } },
        { value: '24/7', lbl: { ar: 'دعم', en: 'Support' } }
      ],
      faq: [
        { q: { ar: 'هل يمكن النشر في مناطق الأزمات؟', en: 'Can you deploy in crisis zones?' },
          a: { ar: 'نعم، فرقنا مدرّبة على العمل في الظروف القصوى.', en: 'Yes, our teams are trained for extreme conditions.' } }
      ],
      tags: ['إنساني', 'إغاثة', 'طوارئ', 'ميداني'],
      caseStudyId: 'hum-01'
    },
    {
      id: 'maritime',
      title: { ar: 'البحري', en: 'Maritime' },
      icon: 'bi-water',
      tag: { ar: 'قطاع', en: 'Industry' },
      promise: { ar: 'Uptime عالٍ وتغطية محيطية موثوقة.', en: 'High uptime and reliable ocean coverage.' },
      short: {
        ar: 'اتصالات مستقرة للسفن والمنصات البحرية مع تتبع تلقائي للأقمار الصناعية أثناء الحركة.',
        en: 'Stable connectivity for vessels and offshore platforms with automatic satellite tracking on the move.'
      },
      longDescription: {
        ar: 'نوفر اتصالات بحرية موثوقة تتيح للسفن والمنصات البحرية البقاء على اتصال دائم مع الشاطئ، مع دعم كامل للصوت والبيانات وأنظمة إدارة الأسطول.',
        en: 'We provide reliable maritime connectivity keeping vessels and offshore platforms continuously connected with shore, with full support for voice, data, and fleet management systems.'
      },
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200',
      specs: [
        { ar: 'Marine VSAT', en: 'Marine VSAT' },
        { ar: 'تتبع تلقائي للأقمار', en: 'Auto satellite tracking' },
        { ar: 'تكامل مع أنظمة السفينة', en: 'Ship system integration' },
        { ar: 'تغطية محيطية', en: 'Ocean coverage' }
      ],
      stats: [
        { value: '99.5%', lbl: { ar: 'Uptime', en: 'Uptime' } },
        { value: 'Global', lbl: { ar: 'التغطية', en: 'Coverage' } },
        { value: 'Auto', lbl: { ar: 'التتبع', en: 'Tracking' } },
        { value: '24/7', lbl: { ar: 'دعم', en: 'Support' } }
      ],
      tags: ['بحري', 'سفن', 'موانئ', 'VSAT'],
      caseStudyId: 'mar-01'
    },
    {
      id: 'energy',
      title: { ar: 'الطاقة', en: 'Energy' },
      icon: 'bi-lightning-charge',
      tag: { ar: 'قطاع', en: 'Industry' },
      promise: { ar: 'تكامل SCADA ومراقبة عن بُعد لمواقع النفط والغاز.', en: 'SCADA integration and remote monitoring for oil & gas sites.' },
      short: {
        ar: 'حلول اتصالات صلبة لبيئات الطاقة القاسية، مع دعم بروتوكولات SCADA والقياس عن بُعد.',
        en: 'Rugged communication solutions for harsh energy environments, with full SCADA and telemetry support.'
      },
      longDescription: {
        ar: 'مواقع الطاقة غالباً ما تكون في مناطق نائية بعيدة عن الشبكات الأرضية. نوفر روابط فضائية صلبة تدعم SCADA، IoT، والقياس عن بُعد على مدار الساعة.',
        en: 'Energy sites are often located in remote areas far from terrestrial networks. We provide rugged satellite links supporting SCADA, IoT, and round-the-clock telemetry.'
      },
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200',
      specs: [
        { ar: 'SCADA over Satellite', en: 'SCADA over Satellite' },
        { ar: 'IoT Modem', en: 'IoT Modem' },
        { ar: 'مراقبة 24/7', en: '24/7 monitoring' },
        { ar: 'بيئات قاسية', en: 'Harsh environments' }
      ],
      stats: [
        { value: 'SCADA', lbl: { ar: 'الدعم', en: 'Support' } },
        { value: 'IoT', lbl: { ar: 'المودم', en: 'Modem' } },
        { value: '24/7', lbl: { ar: 'مراقبة', en: 'Monitoring' } },
        { value: 'IP66', lbl: { ar: 'الحماية', en: 'Protection' } }
      ],
      tags: ['طاقة', 'نفط', 'غاز', 'SCADA'],
      caseStudyId: 'enr-01'
    },
    {
      id: 'media',
      title: { ar: 'الإعلام', en: 'Media' },
      icon: 'bi-broadcast',
      tag: { ar: 'قطاع', en: 'Industry' },
      promise: { ar: 'بث مباشر عالي الجودة من أي موقع.', en: 'High-quality live broadcast from any location.' },
      short: {
        ar: 'نقل مباشر (Live Uplink) وحلول SNG للفرق الإعلامية الميدانية، بجودة بث احترافية.',
        en: 'Live uplink and SNG solutions for media field teams, with professional broadcast quality.'
      },
      longDescription: {
        ar: 'في صناعة الأخبار، لا يمكن انتظار الاتصال. نوفر لفرق البث الميداني أنظمة SNG ومحطات نقل مباشر تتيح البث من أي مكان في العالم بجودة عالية.',
        en: 'In the news industry, connectivity cannot wait. We provide field broadcast teams with SNG systems and live uplink terminals enabling broadcasting from anywhere in the world at high quality.'
      },
      image: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?w=1200',
      specs: [
        { ar: 'SNG Terminal', en: 'SNG Terminal' },
        { ar: 'Live Uplink', en: 'Live Uplink' },
        { ar: 'نقل ملفات ضخمة', en: 'Large file transfer' },
        { ar: 'بث بجودة HD/4K', en: 'HD/4K broadcast' }
      ],
      stats: [
        { value: 'Live', lbl: { ar: 'البث', en: 'Broadcast' } },
        { value: 'HD/4K', lbl: { ar: 'الجودة', en: 'Quality' } },
        { value: 'SNG', lbl: { ar: 'النوع', en: 'Type' } },
        { value: 'Mobile', lbl: { ar: 'التنقل', en: 'Mobility' } }
      ],
      tags: ['إعلام', 'بث', 'SNG', 'ميداني'],
      caseStudyId: 'med-01'
    },
    {
      id: 'telecom',
      title: { ar: 'اللاسلكي', en: 'Telecom / Wireless' },
      icon: 'bi-tower',
      tag: { ar: 'قطاع', en: 'Industry' },
      promise: { ar: 'Backhaul موثوق للأبراج والمحطات الأساسية.', en: 'Reliable backhaul for towers and base stations.' },
      short: {
        ar: 'ربط المحطات الأساسية والأبراج بشبكات العمود الفقري عبر الأقمار الصناعية.',
        en: 'Connecting base stations and towers to backbone networks via satellite.'
      },
      longDescription: {
        ar: 'نساعد مشغلي الاتصالات على ربط المحطات الأساسية والأبراج في المناطق التي لا تصلها الألياف البصرية، عبر روابط فضائية عالية الأداء مع SLA مكتوب.',
        en: 'We help telecom operators connect base stations and towers in areas without fiber, via high-performance satellite links with written SLA.'
      },
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200',
      specs: [
        { ar: 'Backhaul فضائي', en: 'Satellite backhaul' },
        { ar: 'تراسل بيانات عالي', en: 'High data throughput' },
        { ar: 'SLA مكتوب', en: 'Written SLA' },
        { ar: 'تكامل مع مشغلي الاتصالات', en: 'Operator integration' }
      ],
      stats: [
        { value: '99.9%', lbl: { ar: 'Uptime', en: 'Uptime' } },
        { value: 'High', lbl: { ar: 'Throughput', en: 'Throughput' } },
        { value: 'SLA', lbl: { ar: 'اتفاقية', en: 'Agreement' } },
        { value: '24/7', lbl: { ar: 'مراقبة', en: 'Monitoring' } }
      ],
      tags: ['اتصالات', 'أبراج', 'Backhaul', 'مشغلين'],
      caseStudyId: 'tel-01'
    },
    {
      id: 'enterprise',
      title: { ar: 'المؤسسات', en: 'Enterprise' },
      icon: 'bi-briefcase',
      tag: { ar: 'قطاع', en: 'Industry' },
      promise: { ar: 'شبكة مُدارة بنقطة تواصل واحدة.', en: 'Managed network with a single point of contact.' },
      short: {
        ar: 'حلول شبكات مُدارة للمؤسسات متعددة الفروع، مع دعم فني 24/7 واتفاقية مستوى خدمة.',
        en: 'Managed network solutions for multi-branch enterprises, with 24/7 support and SLA.'
      },
      longDescription: {
        ar: 'نوفر للمؤسسات متعددة الفروع شبكة مُدارة بالكامل مع نقطة تواصل واحدة، تقارير دورية، ودعم فني 24/7 عبر كل الفروع.',
        en: 'We provide multi-branch enterprises with a fully managed network with one point of contact, periodic reports, and 24/7 support across all branches.'
      },
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200',
      specs: [
        { ar: 'Managed Network', en: 'Managed Network' },
        { ar: 'SD-WAN', en: 'SD-WAN' },
        { ar: 'دعم 24/7', en: '24/7 Support' },
        { ar: 'نقطة تواصل واحدة', en: 'Single point of contact' }
      ],
      stats: [
        { value: 'Managed', lbl: { ar: 'النوع', en: 'Type' } },
        { value: '24/7', lbl: { ar: 'دعم', en: 'Support' } },
        { value: 'SLA', lbl: { ar: 'اتفاقية', en: 'Agreement' } },
        { value: 'Multi', lbl: { ar: 'فروع', en: 'Site' } }
      ],
      tags: ['مؤسسات', 'شبكات', 'SD-WAN', 'مُدارة'],
      caseStudyId: 'ent-01'
    }
  ],

  /* ═══════════════════════════════════════════════════════════
     INDUSTRIES — قائمة مبسطة (للاستخدام في القوائم فقط)
  ═══════════════════════════════════════════════════════════ */
  industries: [
    { id: 'gov',          title: { ar: 'الحكومة', en: 'Government' },   icon: 'bi-building',        short: { ar: 'اتصالات آمنة للجهات السيادية.', en: 'Secure comms for government entities.' } },
    { id: 'humanitarian', title: { ar: 'الإنساني', en: 'Humanitarian' }, icon: 'bi-heart',           short: { ar: 'دعم المنظمات الإنسانية في المناطق النائية.', en: 'Supporting humanitarian orgs in remote areas.' } },
    { id: 'maritime',     title: { ar: 'البحري', en: 'Maritime' },      icon: 'bi-water',           short: { ar: 'اتصالات للسفن والموانئ.', en: 'Comms for ships and ports.' } },
    { id: 'energy',       title: { ar: 'الطاقة', en: 'Energy' },        icon: 'bi-lightning',       short: { ar: 'اتصالات لمواقع النفط والغاز.', en: 'Comms for oil & gas sites.' } },
    { id: 'media',        title: { ar: 'الإعلام', en: 'Media' },        icon: 'bi-broadcast',       short: { ar: 'بث مباشر ونقل بيانات.', en: 'Live broadcast and data transfer.' } },
    { id: 'telecom',      title: { ar: 'الاتصالات', en: 'Telecom' },    icon: 'bi-tower',           short: { ar: 'تكامل مع مشغلي الاتصالات.', en: 'Integration with telecom operators.' } },
    { id: 'enterprise',   title: { ar: 'المؤسسات', en: 'Enterprise' },  icon: 'bi-briefcase',       short: { ar: 'شبكات مُدارة للشركات.', en: 'Managed networks for enterprises.' } }
  ],

  /* ═══════════════════════════════════════════════════════════
     SERVICES — الخدمات (مع حقول details)
  ═══════════════════════════════════════════════════════════ */
  services: [
    {
      id: 'vsat',
      category: { ar: 'خدمة', en: 'Service' },
      title: { ar: 'حلول VSAT', en: 'VSAT Solutions' },
      tag: { ar: 'اتصالات', en: 'Connectivity' },
      short: { ar: 'اتصال عالي السرعة في أي مكان.', en: 'High-speed connectivity anywhere.' },
      longDescription: {
        ar: 'نوفر حلول VSAT الثابتة والمتنقلة بأحجام مختلفة تناسب كل الاحتياجات — من ربط موقع واحد إلى ربط أسطول كامل من الفروع أو السفن. تدعم النطاقات Ku و C، وبتغطية تصل إلى 100 Mbps.',
        en: 'We provide fixed and mobile VSAT solutions in various sizes to fit every need — from connecting a single site to linking a full fleet of branches or vessels. Supporting Ku and C bands, with coverage up to 100 Mbps.'
      },
      image: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?w=1200',
      specs: [
        { ar: 'سرعة تصل إلى 100 Mbps', en: 'Up to 100 Mbps' },
        { ar: 'تغطية Ku / C-Band', en: 'Ku / C-Band coverage' },
        { ar: 'تركيب سريع', en: 'Fast installation' },
        { ar: 'دعم فني 24/7', en: '24/7 technical support' }
      ],
      audience: { ar: 'حكومة • بحري • طاقة', en: 'Government • Maritime • Energy' },
      stats: [
        { value: '100', lbl: { ar: 'Mbps', en: 'Mbps' } },
        { value: 'Ku/C', lbl: { ar: 'النطاق', en: 'Band' } },
        { value: 'Fast', lbl: { ar: 'تركيب', en: 'Install' } },
        { value: '24/7', lbl: { ar: 'دعم', en: 'Support' } }
      ],
      tags: ['VSAT', 'اتصالات', 'شبكات', 'فضاء']
    },
    {
      id: 'voice',
      category: { ar: 'خدمة', en: 'Service' },
      title: { ar: 'صوت وبيانات', en: 'Voice & Data' },
      tag: { ar: 'اتصالات', en: 'Connectivity' },
      short: { ar: 'خدمات شاملة للاتصال.', en: 'Complete communication services.' },
      longDescription: {
        ar: 'مجموعة كاملة من خدمات الصوت والبيانات تشمل VoIP، مؤتمرات الفيديو، والبيانات الآمنة — مع ضمان جودة عالية وأداء ثابت.',
        en: 'A complete suite of voice and data services including VoIP, video conferencing, and secure data — ensuring high quality and stable performance.'
      },
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200',
      specs: [
        { ar: 'VoIP بجودة عالية', en: 'High-quality VoIP' },
        { ar: 'مؤتمرات فيديو HD', en: 'HD video conferencing' },
        { ar: 'بيانات مشفّرة', en: 'Encrypted data' },
        { ar: 'دعم متعدد المواقع', en: 'Multi-site support' }
      ],
      audience: { ar: 'مؤسسات • بنوك', en: 'Enterprises • Banks' },
      stats: [
        { value: 'VoIP', lbl: { ar: 'الصوت', en: 'Voice' } },
        { value: 'HD', lbl: { ar: 'الفيديو', en: 'Video' } },
        { value: 'Secure', lbl: { ar: 'البيانات', en: 'Data' } },
        { value: 'Multi', lbl: { ar: 'المواقع', en: 'Site' } }
      ],
      tags: ['صوت', 'بيانات', 'VoIP', 'مؤتمرات']
    },
    {
      id: 'integr',
      category: { ar: 'خدمة', en: 'Service' },
      title: { ar: 'تكامل أنظمة', en: 'System Integration' },
      tag: { ar: 'تكامل', en: 'Integration' },
      short: { ar: 'حلول من البداية للنهاية.', en: 'End-to-end solutions.' },
      longDescription: {
        ar: 'نقدم خدمات تكامل الأنظمة كاملة من البداية للنهاية — من تصميم الحل وهندسته داخل الشركة، إلى التركيب والصيانة والدعم المستمر.',
        en: 'We offer complete end-to-end system integration — from in-house design and engineering to installation, maintenance, and ongoing support.'
      },
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200',
      specs: [
        { ar: 'تصميم داخلي', en: 'In-house design' },
        { ar: 'تركيب احترافي', en: 'Professional installation' },
        { ar: 'صيانة دورية', en: 'Periodic maintenance' },
        { ar: 'دعم مستمر', en: 'Ongoing support' }
      ],
      audience: { ar: 'كل القطاعات', en: 'All sectors' },
      stats: [
        { value: 'End-to-End', lbl: { ar: 'النطاق', en: 'Scope' } },
        { value: 'In-house', lbl: { ar: 'الهندسة', en: 'Engineering' } },
        { value: 'Custom', lbl: { ar: 'التصميم', en: 'Design' } },
        { value: 'SLA', lbl: { ar: 'الدعم', en: 'Support' } }
      ],
      tags: ['تكامل', 'أنظمة', 'هندسة', 'دعم']
    },
    {
      id: 'field',
      category: { ar: 'خدمة', en: 'Service' },
      title: { ar: 'خدمات ميدانية', en: 'Field Services' },
      tag: { ar: 'ميداني', en: 'Field' },
      short: { ar: 'تركيب وصيانة في الموقع.', en: 'On-site installation & maintenance.' },
      longDescription: {
        ar: 'فرق ميدانية متخصصة تصل إلى موقعك للتركيب والصيانة والدعم، مع تغطية شاملة واستجابة سريعة لجميع المحافظات.',
        en: 'Specialized field teams reach your site for installation, maintenance, and support, with full coverage and fast response across all governorates.'
      },
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200',
      specs: [
        { ar: 'فرق متخصصة', en: 'Specialized teams' },
        { ar: 'استجابة سريعة', en: 'Fast response' },
        { ar: 'تغطية شاملة', en: 'Full coverage' },
        { ar: 'صيانة وقائية', en: 'Preventive maintenance' }
      ],
      audience: { ar: 'طاقة • إنساني', en: 'Energy • Humanitarian' },
      stats: [
        { value: '24/7', lbl: { ar: 'جاهزية', en: 'Availability' } },
        { value: '15+', lbl: { ar: 'دولة', en: 'Countries' } },
        { value: 'Fast', lbl: { ar: 'استجابة', en: 'Response' } },
        { value: 'Full', lbl: { ar: 'تغطية', en: 'Coverage' } }
      ],
      tags: ['ميداني', 'تركيب', 'صيانة', 'دعم']
    },
    {
      id: 'net',
      category: { ar: 'خدمة', en: 'Service' },
      title: { ar: 'شبكات مُدارة', en: 'Managed Networks' },
      tag: { ar: 'شبكات', en: 'Networks' },
      short: { ar: 'إدارة كاملة للشبكة.', en: 'Full network management.' },
      longDescription: {
        ar: 'نتولى إدارة شبكتك بالكامل — مراقبة على مدار الساعة، تقارير دورية، وتحسين مستمر للأداء، مع اتفاقية مستوى خدمة واضحة.',
        en: 'We fully manage your network — round-the-clock monitoring, periodic reports, and continuous performance optimization, with a clear SLA.'
      },
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200',
      specs: [
        { ar: 'مراقبة 24/7', en: '24/7 monitoring' },
        { ar: 'تقارير دورية', en: 'Periodic reports' },
        { ar: 'اتفاقية SLA', en: 'SLA' },
        { ar: 'تحسين مستمر', en: 'Continuous optimization' }
      ],
      audience: { ar: 'مؤسسات', en: 'Enterprises' },
      stats: [
        { value: '24/7', lbl: { ar: 'مراقبة', en: 'Monitoring' } },
        { value: 'SLA', lbl: { ar: 'اتفاقية', en: 'Agreement' } },
        { value: 'Reports', lbl: { ar: 'تقارير', en: 'Reports' } },
        { value: 'Managed', lbl: { ar: 'النوع', en: 'Type' } }
      ],
      tags: ['شبكات', 'مُدارة', 'مراقبة', 'SLA']
    },
    {
      id: 'support',
      category: { ar: 'خدمة', en: 'Service' },
      title: { ar: 'دعم فني', en: 'Technical Support' },
      tag: { ar: 'دعم', en: 'Support' },
      short: { ar: 'دعم 24/7.', en: '24/7 support.' },
      longDescription: {
        ar: 'فريق دعم فني متاح على مدار الساعة — استجابة فورية عن بُعد، ودعم ميداني عند الحاجة، لضمان استمرارية عملك دون توقف.',
        en: 'A technical support team available 24/7 — instant remote response and field support when needed, ensuring your operation continues without interruption.'
      },
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200',
      specs: [
        { ar: 'استجابة فورية', en: 'Instant response' },
        { ar: 'دعم عن بُعد', en: 'Remote support' },
        { ar: 'دعم ميداني', en: 'Field support' },
        { ar: 'تذاكر متابعة', en: 'Ticket tracking' }
      ],
      audience: { ar: 'كل القطاعات', en: 'All sectors' },
      stats: [
        { value: '24/7', lbl: { ar: 'جاهزية', en: 'Availability' } },
        { value: 'Instant', lbl: { ar: 'استجابة', en: 'Response' } },
        { value: 'Remote', lbl: { ar: 'عن بعد', en: 'Remote' } },
        { value: 'Field', lbl: { ar: 'ميداني', en: 'Field' } }
      ],
      tags: ['دعم', 'فني', '24/7', 'ميداني']
    }
  ],

  /* ═══════════════════════════════════════════════════════════
     PRODUCTS — المنتجات (مع حقول details)
  ═══════════════════════════════════════════════════════════ */
  products: [
    {
      id: 'vsat-portable',
      category: { ar: 'محطة', en: 'Terminal' },
      title: { ar: 'محطة VSAT محمولة', en: 'Portable VSAT Terminal' },
      tag: { ar: 'محطة', en: 'Terminal' },
      short: {
        ar: 'محطة أرضية مع اكتساب تلقائي للقمر الصناعي وهيكل مقاوم للظروف القاسية، مثالية للبعثات الميدانية.',
        en: 'Ground terminal with auto satellite acquisition and ruggedized housing, ideal for field missions.'
      },
      longDescription: {
        ar: 'محطة VSAT المحمولة صُممت للبعثات الميدانية السريعة التي تحتاج اتصالاً موثوقاً بغضون دقائق من الوصول إلى الموقع. تعمل المحطة على اكتساب تلقائي للقمر الصناعي بدون أي إعداد يدوي معقد، وتأتي بحقيبة نقل مقواة بحشوات فوم مخصصة. الهيكل مقاوم للماء والغبار بمعيار IP66، مما يجعلها مناسبة للبيئات الصحراوية والبحرية والجبلية.',
        en: 'The Portable VSAT Terminal is designed for fast field missions needing reliable connectivity within minutes of arrival. It performs automatic satellite acquisition without complex manual setup, and comes in a reinforced transport case with custom foam padding. The housing is IP66 rated, making it suitable for desert, marine, and mountain environments.'
      },
      image: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?w=1200',
      specs: [
        { ar: 'اكتساب تلقائي للقمر', en: 'Auto satellite acquisition' },
        { ar: 'هيكل مقاوم IP66', en: 'IP66 rugged housing' },
        { ar: 'تركيب سريع (أقل من 10 دقائق)', en: 'Fast setup (under 10 min)' },
        { ar: 'دعم Ku / Ka', en: 'Ku / Ka support' },
        { ar: 'بطارية احتياطية 4 ساعات', en: '4-hour backup battery' }
      ],
      stats: [
        { value: 'Ku/Ka', lbl: { ar: 'النطاق', en: 'Band' } },
        { value: '10m', lbl: { ar: 'زمن النشر', en: 'Deploy' } },
        { value: 'IP66', lbl: { ar: 'الحماية', en: 'Protection' } },
        { value: '18kg', lbl: { ar: 'الوزن', en: 'Weight' } }
      ],
      faq: [
        { q: { ar: 'كم يستغرق نشر المحطة؟', en: 'How long does deployment take?' },
          a: { ar: 'من فتح الحقيبة إلى أول حزمة بيانات — أقل من 10 دقائق لفريق مدرّب.', en: 'From opening the case to first data packet — under 10 minutes for a trained team.' } },
        { q: { ar: 'هل تعمل في المناطق الجبلية؟', en: 'Does it work in mountainous areas?' },
          a: { ar: 'نعم، بشرط وجود خط رؤية مفتوح نحو القمر الصناعي.', en: 'Yes, provided there is open line of sight to the satellite.' } },
        { q: { ar: 'هل يمكن تأجير المحطة؟', en: 'Can the terminal be rented?' },
          a: { ar: 'نعم، نوفر خيارات تأجير قصيرة الأجل للمشاريع الموسمية.', en: 'Yes, we offer short-term rental options for seasonal projects.' } }
      ],
      downloads: [
        { name: { ar: 'المواصفات الفنية', en: 'Datasheet' }, size: 'PDF · 2.4 MB', icon: 'bi-file-earmark-pdf' },
        { name: { ar: 'دليل التركيب', en: 'Install Guide' }, size: 'PDF · 1.1 MB', icon: 'bi-file-earmark-text' }
      ],
      tags: ['VSAT', 'محطة', 'ميداني', 'IP66']
    },
    {
      id: 'ku-antenna',
      category: { ar: 'هوائي', en: 'Antenna' },
      title: { ar: 'هوائي Ku-Band', en: 'Ku-Band Antenna' },
      tag: { ar: 'هوائي', en: 'Antenna' },
      short: {
        ar: 'هوائي خفيف الوزن مصمم للتركيب السريع في المواقع النائية والبيئات التكتيكية.',
        en: 'Lightweight antenna designed for rapid deployment in remote locations and tactical environments.'
      },
      longDescription: {
        ar: 'هوائي Ku-Band مصمم للتركيب السريع في البيئات التكتيكية والمواقع النائية. خفيف الوزن بما يكفي ليُحمل بواسطة شخص واحد، مع نظام تثبيت ثلاثي القواعد يتحمل الرياح حتى 80 كم/س. السطح العاكس مصنوع من الألياف الزجاجية المقواة بطلاء مضاد للأشعة فوق البنفسجية.',
        en: 'Ku-Band antenna designed for rapid deployment in tactical environments and remote sites. Light enough to be carried by one person, with a tripod mount capable of withstanding winds up to 80 km/h. The reflector is made of reinforced fiberglass with UV-resistant coating.'
      },
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200',
      specs: [
        { ar: 'خفيف الوزن (18 كجم)', en: 'Lightweight (18 kg)' },
        { ar: 'تركيب سريع بدون أدوات', en: 'Tool-free setup' },
        { ar: 'تحمل الرياح حتى 80 كم/س', en: 'Withstands winds up to 80 km/h' },
        { ar: 'طلاء مضاد للأشعة فوق البنفسجية', en: 'UV-resistant coating' }
      ],
      stats: [
        { value: '1.2m', lbl: { ar: 'القطر', en: 'Diameter' } },
        { value: '18kg', lbl: { ar: 'الوزن', en: 'Weight' } },
        { value: '80 km/h', lbl: { ar: 'الرياح', en: 'Wind' } },
        { value: 'Ku', lbl: { ar: 'النطاق', en: 'Band' } }
      ],
      faq: [
        { q: { ar: 'هل يمكن تركيبه بواسطة شخص واحد؟', en: 'Can one person install it?' },
          a: { ar: 'نعم، الهوائي خفيف ويُركّب بدون أدوات خاصة.', en: 'Yes, it is light and installs without special tools.' } }
      ],
      tags: ['هوائي', 'Ku-Band', 'ميداني', 'تكتيكي']
    },
    {
      id: 'managed-modem',
      category: { ar: 'مودم', en: 'Modem' },
      title: { ar: 'مودم فضائي مُدار', en: 'Managed Satellite Modem' },
      tag: { ar: 'مودم', en: 'Modem' },
      short: {
        ar: 'مودم بمعايير مؤسسية يدعم النطاق المزدوج Ku/Ka، مع مراقبة عن بعد ودعم فني متكامل.',
        en: 'Enterprise-grade modem with dual Ku/Ka support, remote monitoring, and full technical support.'
      },
      longDescription: {
        ar: 'مودم بمعايير مؤسسية يدعم النطاق المزدوج Ku/Ka، مع مراقبة عن بعد ودعم فني متكامل. مثالي للمراكز الرئيسية والمحطات الثابتة، ويتكامل بسلاسة مع أنظمة إدارة الشبكة الحالية.',
        en: 'Enterprise-grade modem supporting dual Ku/Ka bands, with remote monitoring and full technical support. Ideal for hub sites and fixed stations, integrating seamlessly with existing network management systems.'
      },
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200',
      specs: [
        { ar: 'دعم Ku/Ka مزدوج', en: 'Dual Ku/Ka support' },
        { ar: 'مراقبة عن بعد SNMP', en: 'SNMP remote monitoring' },
        { ar: 'تصميم Rack-mounted', en: 'Rack-mounted design' },
        { ar: 'تكامل مع أنظمة الإدارة', en: 'NMS integration' }
      ],
      stats: [
        { value: 'Ku/Ka', lbl: { ar: 'النطاق', en: 'Band' } },
        { value: 'SNMP', lbl: { ar: 'الإدارة', en: 'Management' } },
        { value: 'Rack', lbl: { ar: 'الشكل', en: 'Form' } },
        { value: '24/7', lbl: { ar: 'مراقبة', en: 'Monitoring' } }
      ],
      tags: ['مودم', 'SNMP', 'مؤسسي', 'Ku/Ka']
    },
    {
      id: 'manpack',
      category: { ar: 'محطة', en: 'Terminal' },
      title: { ar: 'محطة Manpack', en: 'Manpack Terminal' },
      tag: { ar: 'محطة', en: 'Terminal' },
      short: {
        ar: 'محطة فضائية بحقيبة ظهر للعمليات الميدانية التكتيكية، مع تركيب فوري أثناء الحركة.',
        en: 'Backpack satellite terminal for tactical field operations, with instant on-the-move deployment.'
      },
      longDescription: {
        ar: 'محطة فضائية بحقيبة ظهر للعمليات الميدانية التكتيكية، مع تركيب فوري أثناء الحركة. مثالية للفرق التي تحتاج اتصالاً سريعاً دون التوقف عند موقع محدد.',
        en: 'Backpack satellite terminal for tactical field operations, with instant on-the-move deployment. Ideal for teams needing rapid connectivity without stopping at a specific site.'
      },
      image: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?w=1200',
      specs: [
        { ar: 'حقيبة ظهر مريحة', en: 'Comfortable backpack' },
        { ar: 'نشر فوري', en: 'Instant deployment' },
        { ar: 'عمليات تكتيكية', en: 'Tactical operations' },
        { ar: 'بطارية مدمجة', en: 'Integrated battery' }
      ],
      stats: [
        { value: '12kg', lbl: { ar: 'الوزن', en: 'Weight' } },
        { value: '5m', lbl: { ar: 'النشر', en: 'Setup' } },
        { value: 'Mobile', lbl: { ar: 'التنقل', en: 'Mobility' } },
        { value: 'IP67', lbl: { ar: 'الحماية', en: 'Protection' } }
      ],
      tags: ['Manpack', 'ميداني', 'تكتيكي', 'محمول']
    },
    {
      id: 'vehicle-antenna',
      category: { ar: 'هوائي', en: 'Antenna' },
      title: { ar: 'هوائي مثبت على المركبات', en: 'Vehicle-Mounted Antenna' },
      tag: { ar: 'هوائي', en: 'Antenna' },
      short: {
        ar: 'هوائي بتتبع تلقائي للمركبات المتحركة والمنصات البحرية، مع ثبات عالي أثناء الحركة.',
        en: 'Auto-tracking antenna for moving vehicles and maritime platforms, with high stability on the move.'
      },
      longDescription: {
        ar: 'هوائي بتتبع تلقائي للمركبات المتحركة والمنصات البحرية، مع ثبات عالي أثناء الحركة. مصمم للعمل في البيئات الصعبة وبدون توقف.',
        en: 'Auto-tracking antenna for moving vehicles and maritime platforms, with high stability on the move. Designed for harsh environments and continuous operation.'
      },
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200',
      specs: [
        { ar: 'تتبع تلقائي', en: 'Auto tracking' },
        { ar: 'ثبات عالي أثناء الحركة', en: 'High on-the-move stability' },
        { ar: 'للمركبات والبحر', en: 'Vehicle & marine' },
        { ar: 'مقاوم للظروف القاسية', en: 'Ruggedized' }
      ],
      stats: [
        { value: 'Auto', lbl: { ar: 'التتبع', en: 'Tracking' } },
        { value: 'Mobile', lbl: { ar: 'التنقل', en: 'Mobility' } },
        { value: 'Marine', lbl: { ar: 'البحر', en: 'Marine' } },
        { value: 'IP66', lbl: { ar: 'الحماية', en: 'Protection' } }
      ],
      tags: ['هوائي', 'مركبات', 'بحري', 'تتبع تلقائي']
    },
    {
      id: 'iot-modem',
      category: { ar: 'مودم', en: 'Modem' },
      title: { ar: 'مودم إنترنت الأشياء IoT', en: 'IoT Satellite Modem' },
      tag: { ar: 'مودم', en: 'Modem' },
      short: {
        ar: 'مودم فضائي منخفض الطاقة لأجهزة الاستشعار النائية وأنظمة القياس عن بعد.',
        en: 'Low-power satellite modem for remote sensors and telemetry systems.'
      },
      longDescription: {
        ar: 'مودم فضائي منخفض الطاقة لأجهزة الاستشعار النائية وأنظمة القياس عن بعد. مثالي لمشاريع الطاقة والزراعة والمراقبة البيئية التي تعمل لسنوات بدون تدخل.',
        en: 'Low-power satellite modem for remote sensors and telemetry systems. Ideal for energy, agriculture, and environmental monitoring projects operating for years without intervention.'
      },
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200',
      specs: [
        { ar: 'استهلاك طاقة منخفض جداً', en: 'Ultra-low power consumption' },
        { ar: 'جاهز لإنترنت الأشياء', en: 'IoT-ready' },
        { ar: 'قياس عن بعد', en: 'Telemetry support' },
        { ar: 'عمر بطارية طويل', en: 'Long battery life' }
      ],
      stats: [
        { value: 'Low', lbl: { ar: 'الطاقة', en: 'Power' } },
        { value: 'IoT', lbl: { ar: 'جاهز', en: 'Ready' } },
        { value: 'Years', lbl: { ar: 'عمر البطارية', en: 'Battery' } },
        { value: 'Remote', lbl: { ar: 'المواقع', en: 'Sites' } }
      ],
      tags: ['IoT', 'مودم', 'قياس', 'طاقة']
    },
    {
      id: 'psu',
      category: { ar: 'ملحق', en: 'Accessory' },
      title: { ar: 'وحدة إمداد طاقة PSU', en: 'PSU Power Unit' },
      tag: { ar: 'ملحق', en: 'Accessory' },
      short: {
        ar: 'وحدة إمداد طاقة احتياطية بمدى جهد واسع، مصممة للعمليات الميدانية الطويلة.',
        en: 'Backup power supply unit with wide voltage range, designed for extended field operations.'
      },
      longDescription: {
        ar: 'وحدة إمداد طاقة احتياطية بمدى جهد واسع، مصممة للعمليات الميدانية الطويلة. تحمي معداتك من تقلبات الجهد وتضمن استمرارية التشغيل.',
        en: 'Backup power supply unit with wide voltage range, designed for extended field operations. Protects your equipment from voltage fluctuations and ensures operational continuity.'
      },
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200',
      specs: [
        { ar: 'مدى جهد واسع', en: 'Wide voltage range' },
        { ar: 'بطارية احتياطية', en: 'Backup battery' },
        { ar: 'حماية من التقلبات', en: 'Surge protection' },
        { ar: 'جاهز للميدان', en: 'Field-ready' }
      ],
      stats: [
        { value: 'Wide', lbl: { ar: 'الجهد', en: 'Voltage' } },
        { value: 'Backup', lbl: { ar: 'احتياطي', en: 'Backup' } },
        { value: 'Field', lbl: { ar: 'ميداني', en: 'Field' } },
        { value: 'IP54', lbl: { ar: 'الحماية', en: 'Protection' } }
      ],
      tags: ['PSU', 'طاقة', 'احتياطي', 'ميداني']
    },
    {
      id: 'deploy-case',
      category: { ar: 'ملحق', en: 'Accessory' },
      title: { ar: 'حقيبة نقل Deploy Case', en: 'Deploy Transport Case' },
      tag: { ar: 'ملحق', en: 'Accessory' },
      short: {
        ar: 'حقيبة نقل مقاومة للصدمات مع حشوات فوم مخصصة للمحطة والهوائي معًا.',
        en: 'Shock-resistant transport case with custom foam padding for terminal and antenna together.'
      },
      longDescription: {
        ar: 'حقيبة نقل مقاومة للصدمات والماء، مع حشوات فوم مخصصة لكل قطعة من المحطة والهوائي. تحمي معداتك أثناء النقل الجوي والبحري والبري.',
        en: 'Shock- and water-resistant transport case, with custom foam padding for every part of the terminal and antenna. Protects your equipment during air, sea, and land transport.'
      },
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200',
      specs: [
        { ar: 'مقاوم للصدمات والماء', en: 'Shock & water resistant' },
        { ar: 'فوم مخصص', en: 'Custom foam' },
        { ar: 'سهل النقل', en: 'Easy to transport' },
        { ar: 'عجلات وأقفال', en: 'Wheels & locks' }
      ],
      stats: [
        { value: 'IP67', lbl: { ar: 'الحماية', en: 'Protection' } },
        { value: 'Custom', lbl: { ar: 'فوم', en: 'Foam' } },
        { value: 'Wheels', lbl: { ar: 'عجلات', en: 'Wheels' } },
        { value: 'Lock', lbl: { ar: 'أقفال', en: 'Lock' } }
      ],
      tags: ['حقيبة', 'نقل', 'ملحق', 'ميداني']
    }
  ],

  /* ═══════════════════════════════════════════════════════════
     CONVERSION PATHS
  ═══════════════════════════════════════════════════════════ */
  conversionPaths: {
    'enterprise':   { primary: 'request-service', secondary: 'talk-engineer' },
    'government':   { primary: 'request-service', secondary: 'download-brief' },
    'humanitarian': { primary: 'request-service', secondary: 'talk-engineer' },
    'media':        { primary: 'talk-engineer',   secondary: 'download-brief' },
    'energy':       { primary: 'talk-engineer',   secondary: 'download-brief' },
    'maritime':     { primary: 'request-service', secondary: 'talk-engineer' },
    'telecom':      { primary: 'talk-engineer',   secondary: 'request-service' },
    'default':      { primary: 'request-service', secondary: 'talk-engineer' }
  },

  /* ═══════════════════════════════════════════════════════════
     CONTACT
  ═══════════════════════════════════════════════════════════ */
  contact: {
    phone: '+967 2 396 056',
    email: 'info@tech-sat.com',
    address: { ar: 'عدن، اليمن', en: 'Aden, Yemen' }
  }
};