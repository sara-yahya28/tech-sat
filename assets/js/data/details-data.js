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

 /* ═══════════════════════════════════════════════════
         CONTENT
         ═══════════════════════════════════════════════════ */
    export const CONTENT = {

        /* ═══════════════════════════════════════════════════════════
           PRODUCTS — المنتجات (9)
           ═══════════════════════════════════════════════════════════ */

        'product:vsat-portable': {
          type: 'product',
          typeLabel: { ar: 'منتج', en: 'Product' },
          category: { ar: 'محطات', en: 'Terminals' },
          title: { ar: 'محطة VSAT محمولة', en: 'Portable VSAT Terminal' },
          subtitle: {
            ar: 'اتصال فضائي موثوق من أي مكان في أقل من 10 دقائق.',
            en: 'Reliable satellite connectivity from anywhere in under 10 minutes.'
          },
          cover: 'assets/img/products/vsat-portable.png',
          coverFit: 'contain',
          stats: [
            { val: 'Ku / Ka', lbl: { ar: 'نطاق التردد', en: 'Frequency Band' } },
            { val: '10 دقائق', lbl: { ar: 'زمن النشر', en: 'Deployment Time' } },
            { val: 'IP66', lbl: { ar: 'معيار الحماية', en: 'Protection Rating' } },
            { val: '18 kg', lbl: { ar: 'الوزن الإجمالي', en: 'Total Weight' } }
          ],
          sections: [
            { title: { ar: 'نظرة عامة', en: 'Overview' }, body: { ar: 'محطة VSAT المحمولة صُممت للبعثات الميدانية السريعة التي تحتاج اتصالاً موثوقاً بغضون دقائق من الوصول إلى الموقع. تعمل المحطة على اكتساب تلقائي للقمر الصناعي بدون أي إعداد يدوي معقد.', en: 'The Portable VSAT Terminal is designed for fast field missions that need reliable connectivity within minutes of arriving on site. It performs automatic satellite acquisition without complex manual setup.' } },
            {
              title: { ar: 'المواصفات التقنية', en: 'Technical Specifications' }, specs: [
                { lbl: { ar: 'نطاق التردد', en: 'Frequency Band' }, val: { ar: 'Ku / Ka مزدوج', en: 'Dual Ku / Ka' } },
                { lbl: { ar: 'قطر الطبق', en: 'Dish Diameter' }, val: { ar: '1.2 متر', en: '1.2 meters' } },
                { lbl: { ar: 'الوزن الإجمالي', en: 'Total Weight' }, val: { ar: '18 كجم', en: '18 kg' } },
                { lbl: { ar: 'زمن النشر', en: 'Deployment Time' }, val: { ar: 'أقل من 10 دقائق', en: 'Under 10 minutes' } },
                { lbl: { ar: 'معيار الحماية', en: 'Protection Rating' }, val: { ar: 'IP66', en: 'IP66' } },
                { lbl: { ar: 'مدى الحرارة', en: 'Temperature Range' }, val: { ar: '-20 إلى +55 °C', en: '-20 to +55 °C' } },
                { lbl: { ar: 'الطاقة', en: 'Power' }, val: { ar: 'بطارية 4 ساعات + شمسي', en: '4h battery + solar' } },
                { lbl: { ar: 'السرعة', en: 'Throughput' }, val: { ar: 'حتى 20 Mbps', en: 'Up to 20 Mbps' } }
              ]
            },
            {
              title: { ar: 'المزايا الرئيسية', en: 'Key Features' }, features: [
                { ic: 'bi-lightning-charge-fill', t: { ar: 'اكتساب تلقائي', en: 'Auto Acquisition' }, d: { ar: 'بدون إعداد يدوي', en: 'No manual setup' } },
                { ic: 'bi-shield-fill-check', t: { ar: 'مقاومة IP66', en: 'IP66 Protected' }, d: { ar: 'ماء وغبار وصدمات', en: 'Water, dust, shock' } },
                { ic: 'bi-battery-charging', t: { ar: 'بطارية 4 ساعات', en: '4-Hour Battery' }, d: { ar: 'تشغيل متواصل', en: 'Continuous operation' } },
                { ic: 'bi-cloud-check-fill', t: { ar: 'إدارة سحابية', en: 'Cloud Managed' }, d: { ar: 'مراقبة عن بعد', en: 'Remote monitoring' } }
              ]
            },
            {
              title: { ar: 'حالات الاستخدام', en: 'Use Cases' }, features: [
                { ic: 'bi-people-fill', t: { ar: 'فرق الإغاثة', en: 'Relief Teams' }, d: { ar: 'في مناطق الكوارث', en: 'In disaster zones' } },
                { ic: 'bi-camera-video-fill', t: { ar: 'البث الميداني', en: 'Field Broadcasting' }, d: { ar: 'لنقل الأحداث', en: 'For live coverage' } },
                { ic: 'bi-truck', t: { ar: 'المواقع النائية', en: 'Remote Sites' }, d: { ar: 'خارج التغطية', en: 'Off-grid locations' } },
                { ic: 'bi-shield-shaded', t: { ar: 'العمليات التكتيكية', en: 'Tactical Ops' }, d: { ar: 'اتصال سريع ومشفّر', en: 'Fast encrypted comms' } }
              ]
            },
            {
              title: { ar: 'التنزيلات', en: 'Downloads' }, downloads: [
                { ic: 'bi-file-earmark-pdf', n: { ar: 'المواصفات الفنية', en: 'Datasheet' }, m: { ar: 'PDF · 2.4 MB', en: 'PDF · 2.4 MB' } },
                { ic: 'bi-file-earmark-text', n: { ar: 'دليل التركيب', en: 'Install Guide' }, m: { ar: 'PDF · 1.1 MB', en: 'PDF · 1.1 MB' } },
                { ic: 'bi-file-earmark-zip', n: { ar: 'برامج التشغيل', en: 'Drivers' }, m: { ar: 'ZIP · 18 MB', en: 'ZIP · 18 MB' } },
                { ic: 'bi-file-earmark-image', n: { ar: 'صور المنتج', en: 'Product Photos' }, m: { ar: 'ZIP · 32 MB', en: 'ZIP · 32 MB' } }
              ]
            },
            {
              title: { ar: 'الأسئلة الشائعة', en: 'FAQ' }, faqs: [
                { q: { ar: 'كم يستغرق نشر المحطة؟', en: 'How long does deployment take?' }, a: { ar: 'من فتح الحقيبة إلى أول حزمة بيانات — أقل من 10 دقائق لفريق مدرّب.', en: 'From opening the case to first data packet — under 10 minutes for a trained team.' } },
                { q: { ar: 'هل تعمل في المناطق الجبلية؟', en: 'Does it work in mountainous areas?' }, a: { ar: 'نعم، بشرط وجود خط رؤية مفتوح نحو القمر الصناعي.', en: 'Yes, provided there is open line of sight to the satellite.' } },
                { q: { ar: 'هل يمكن تأجير المحطة؟', en: 'Can the terminal be rented?' }, a: { ar: 'نعم، نوفر خيارات تأجير قصيرة الأجل.', en: 'Yes, we offer short-term rental options.' } }
              ]
            }
          ],
          related: ['product:ku-antenna', 'product:managed-modem', 'product:manpack']
        },

        'product:ku-antenna': {
          type: 'product',
          typeLabel: { ar: 'منتج', en: 'Product' },
          category: { ar: 'هوائيات', en: 'Antennas' },
          title: { ar: 'هوائي Ku-Band', en: 'Ku-Band Antenna' },
          subtitle: { ar: 'هوائي خفيف الوزن مصمم للتركيب السريع في المواقع النائية.', en: 'Lightweight antenna designed for quick setup in remote sites.' },
          cover: 'assets/img/products/ku-antenna.png',
          coverFit: 'contain',
          stats: [
            { val: '1.2m', lbl: { ar: 'قطر الطبق', en: 'Dish Size' } },
            { val: '18kg', lbl: { ar: 'الوزن', en: 'Weight' } },
            { val: '80 km/h', lbl: { ar: 'تحمل الرياح', en: 'Wind Rating' } },
            { val: 'IP65', lbl: { ar: 'الحماية', en: 'Protection' } }
          ],
          sections: [
            { title: { ar: 'نظرة عامة', en: 'Overview' }, body: { ar: 'هوائي Ku-Band مصمم للتركيب السريع في البيئات التكتيكية والمواقع النائية.', en: 'The Ku-Band antenna is designed for quick setup in tactical environments and remote sites.' } },
            {
              title: { ar: 'المواصفات التقنية', en: 'Technical Specifications' }, specs: [
                { lbl: { ar: 'قطر الطبق', en: 'Dish Diameter' }, val: { ar: '1.2 / 1.8 متر', en: '1.2 / 1.8 m' } },
                { lbl: { ar: 'النطاق', en: 'Band' }, val: { ar: 'Ku-Band (12–18 GHz)', en: 'Ku-Band (12–18 GHz)' } },
                { lbl: { ar: 'الوزن', en: 'Weight' }, val: { ar: '18 كجم', en: '18 kg' } },
                { lbl: { ar: 'تحمل الرياح', en: 'Wind Rating' }, val: { ar: 'حتى 80 كم/س', en: 'Up to 80 km/h' } },
                { lbl: { ar: 'الحماية', en: 'Protection' }, val: { ar: 'IP65', en: 'IP65' } },
                { lbl: { ar: 'الكسب', en: 'Gain' }, val: { ar: '40 dBi @ 12 GHz', en: '40 dBi @ 12 GHz' } }
              ]
            },
            {
              title: { ar: 'المزايا', en: 'Features' }, features: [
                { ic: 'bi-feather', t: { ar: 'خفيف الوزن', en: 'Lightweight' }, d: { ar: 'يُحمل بشخص واحد', en: 'One-person carry' } },
                { ic: 'bi-tools', t: { ar: 'تركيب سريع', en: 'Quick Setup' }, d: { ar: 'بدون أدوات خاصة', en: 'No special tools' } },
                { ic: 'bi-wind', t: { ar: 'تحمل الرياح', en: 'Wind Resistant' }, d: { ar: 'حتى 80 كم/س', en: 'Up to 80 km/h' } },
                { ic: 'bi-shield-check', t: { ar: 'طلاء UV', en: 'UV Coated' }, d: { ar: 'مضاد للتآكل', en: 'Anti-corrosion' } }
              ]
            },
            {
              title: { ar: 'التنزيلات', en: 'Downloads' }, downloads: [
                { ic: 'bi-file-earmark-pdf', n: { ar: 'المواصفات الفنية', en: 'Datasheet' }, m: { ar: 'PDF · 1.8 MB', en: 'PDF · 1.8 MB' } },
                { ic: 'bi-file-earmark-text', n: { ar: 'دليل التركيب', en: 'Install Guide' }, m: { ar: 'PDF · 900 KB', en: 'PDF · 900 KB' } }
              ]
            },
            {
              title: { ar: 'الأسئلة الشائعة', en: 'FAQ' }, faqs: [
                { q: { ar: 'ما مدة التركيب؟', en: 'Installation time?' }, a: { ar: 'حوالي 15 دقيقة لفريق من شخصين.', en: 'Around 15 minutes for a 2-person team.' } },
                { q: { ar: 'هل تدعم Ka-Band؟', en: 'Does it support Ka-Band?' }, a: { ar: 'لا، هذا الموديل Ku-Band فقط.', en: 'No, this model is Ku only.' } }
              ]
            }
          ],
          related: ['product:vsat-portable', 'product:managed-modem', 'product:vehicle-antenna']
        },

        'product:managed-modem': {
          type: 'product',
          typeLabel: { ar: 'منتج', en: 'Product' },
          category: { ar: 'مودمات', en: 'Modems' },
          title: { ar: 'مودم فضائي مُدار', en: 'Managed Satellite Modem' },
          subtitle: { ar: 'مودم بمعايير مؤسسية يدعم النطاق المزدوج Ku/Ka.', en: 'Enterprise-grade modem supporting dual Ku/Ka bands.' },
          cover: 'assets/img/products/managed-modem.png',
          coverFit: 'contain',
          stats: [
            { val: 'Ku/Ka', lbl: { ar: 'النطاق', en: 'Band' } },
            { val: 'SNMP', lbl: { ar: 'الإدارة', en: 'Management' } },
            { val: 'Rack', lbl: { ar: 'الشكل', en: 'Form Factor' } },
            { val: '24/7', lbl: { ar: 'مراقبة', en: 'Monitoring' } }
          ],
          sections: [
            { title: { ar: 'نظرة عامة', en: 'Overview' }, body: { ar: 'مودم بمعايير مؤسسية يدعم النطاق المزدوج Ku/Ka، مع مراقبة عن بعد ودعم فني متكامل.', en: 'An enterprise-grade modem supporting dual Ku/Ka bands, with remote monitoring and full support.' } },
            {
              title: { ar: 'المواصفات التقنية', en: 'Technical Specifications' }, specs: [
                { lbl: { ar: 'النطاق', en: 'Band' }, val: { ar: 'Ku / Ka مزدوج', en: 'Dual Ku / Ka' } },
                { lbl: { ar: 'السرعة', en: 'Throughput' }, val: { ar: 'حتى 200 Mbps', en: 'Up to 200 Mbps' } },
                { lbl: { ar: 'الإدارة', en: 'Management' }, val: { ar: 'SNMP / HTTPS', en: 'SNMP / HTTPS' } },
                { lbl: { ar: 'الشكل', en: 'Form Factor' }, val: { ar: '1U Rack', en: '1U Rack' } },
                { lbl: { ar: 'التغذية', en: 'Power' }, val: { ar: '100–240V AC', en: '100–240V AC' } },
                { lbl: { ar: 'الحماية', en: 'Protection' }, val: { ar: 'Surge + ESD', en: 'Surge + ESD' } }
              ]
            },
            {
              title: { ar: 'المزايا', en: 'Features' }, features: [
                { ic: 'bi-cloud-check-fill', t: { ar: 'إدارة سحابية', en: 'Cloud Managed' }, d: { ar: 'منصة مركزية', en: 'Centralized platform' } },
                { ic: 'bi-speedometer2', t: { ar: 'أداء عالٍ', en: 'High Performance' }, d: { ar: 'حتى 200 Mbps', en: 'Up to 200 Mbps' } },
                { ic: 'bi-sliders', t: { ar: 'QoS متقدم', en: 'Advanced QoS' }, d: { ar: 'أولوية الحركة', en: 'Traffic priority' } },
                { ic: 'bi-headset', t: { ar: 'دعم 24/7', en: '24/7 Support' }, d: { ar: 'بالعربية والإنجليزية', en: 'Arabic & English' } }
              ]
            },
            {
              title: { ar: 'التنزيلات', en: 'Downloads' }, downloads: [
                { ic: 'bi-file-earmark-pdf', n: { ar: 'المواصفات الفنية', en: 'Datasheet' }, m: { ar: 'PDF · 3.2 MB', en: 'PDF · 3.2 MB' } },
                { ic: 'bi-file-earmark-text', n: { ar: 'دليل الإدارة', en: 'Admin Guide' }, m: { ar: 'PDF · 2 MB', en: 'PDF · 2 MB' } }
              ]
            },
            {
              title: { ar: 'الأسئلة الشائعة', en: 'FAQ' }, faqs: [
                { q: { ar: 'هل يدعم النطاقين؟', en: 'Dual band support?' }, a: { ar: 'نعم، Ku و Ka في نفس الوحدة.', en: 'Yes, Ku and Ka in one unit.' } }
              ]
            }
          ],
          related: ['product:vsat-portable', 'product:ku-antenna', 'product:iot-modem']
        },

        'product:manpack': {
          type: 'product',
          typeLabel: { ar: 'منتج', en: 'Product' },
          category: { ar: 'محطات', en: 'Terminals' },
          title: { ar: 'محطة Manpack', en: 'Manpack Terminal' },
          subtitle: { ar: 'محطة فضائية بحقيبة ظهر للعمليات الميدانية التكتيكية.', en: 'Backpack satellite terminal for tactical field operations.' },
          cover: 'assets/img/products/manpack.png',
          coverFit: 'contain',
          stats: [
            { val: '12 kg', lbl: { ar: 'الوزن', en: 'Weight' } },
            { val: '5 دقائق', lbl: { ar: 'النشر', en: 'Setup' } },
            { val: 'X-Band', lbl: { ar: 'النطاق', en: 'Band' } },
            { val: 'IP67', lbl: { ar: 'الحماية', en: 'Protection' } }
          ],
          sections: [
            { title: { ar: 'نظرة عامة', en: 'Overview' }, body: { ar: 'محطة فضائية بحقيبة ظهر للعمليات الميدانية التكتيكية، مع تركيب فوري أثناء الحركة.', en: 'A backpack satellite terminal for tactical field operations, with instant on-the-move setup.' } },
            {
              title: { ar: 'المواصفات التقنية', en: 'Technical Specifications' }, specs: [
                { lbl: { ar: 'الوزن الكلي', en: 'Total Weight' }, val: { ar: '12 كجم', en: '12 kg' } },
                { lbl: { ar: 'زمن النشر', en: 'Deployment Time' }, val: { ar: '< 5 دقائق', en: '< 5 minutes' } },
                { lbl: { ar: 'النطاق', en: 'Band' }, val: { ar: 'X-Band / Ku', en: 'X-Band / Ku' } },
                { lbl: { ar: 'الحماية', en: 'Protection' }, val: { ar: 'IP67', en: 'IP67' } },
                { lbl: { ar: 'البطارية', en: 'Battery' }, val: { ar: '3 ساعات', en: '3 hours' } },
                { lbl: { ar: 'السرعة', en: 'Throughput' }, val: { ar: 'حتى 8 Mbps', en: 'Up to 8 Mbps' } }
              ]
            },
            {
              title: { ar: 'المزايا', en: 'Features' }, features: [
                { ic: 'bi-backpack2-fill', t: { ar: 'تصميم حقيبة', en: 'Backpack Design' }, d: { ar: 'يُحمل بسهولة', en: 'Easy to carry' } },
                { ic: 'bi-clock-fill', t: { ar: 'نشر فوري', en: 'Instant Setup' }, d: { ar: '< 5 دقائق', en: '< 5 minutes' } },
                { ic: 'bi-shield-fill-check', t: { ar: 'IP67', en: 'IP67' }, d: { ar: 'ضد الماء والغبار', en: 'Water & dust proof' } },
                { ic: 'bi-battery-charging', t: { ar: 'بطارية قابلة', en: 'Swappable Battery' }, d: { ar: 'استبدال سريع', en: 'Quick swap' } }
              ]
            },
            {
              title: { ar: 'التنزيلات', en: 'Downloads' }, downloads: [
                { ic: 'bi-file-earmark-pdf', n: { ar: 'المواصفات الفنية', en: 'Datasheet' }, m: { ar: 'PDF · 2 MB', en: 'PDF · 2 MB' } },
                { ic: 'bi-file-earmark-text', n: { ar: 'دليل سريع', en: 'Quick Start' }, m: { ar: 'PDF · 800 KB', en: 'PDF · 800 KB' } }
              ]
            },
            {
              title: { ar: 'الأسئلة الشائعة', en: 'FAQ' }, faqs: [
                { q: { ar: 'هل يمكن حمله بالطائرة؟', en: 'Is it air-transportable?' }, a: { ar: 'نعم، ضمن حدود الأمتعة المحمولة.', en: 'Yes, within carry-on limits.' } }
              ]
            }
          ],
          related: ['product:vsat-portable', 'product:ku-antenna', 'product:deploy-case']
        },

        'product:rf-cables': {
          type: 'product',
          typeLabel: { ar: 'منتج', en: 'Product' },
          category: { ar: 'ملحقات', en: 'Accessories' },
          title: { ar: 'طقم كابلات RF', en: 'RF Cables Kit' },
          subtitle: { ar: 'كابلات محورية منخفضة الفقدان للاستخدام الخارجي الدائم.', en: 'Low-loss coaxial cables for permanent outdoor use.' },
          cover: 'assets/img/products/rf-cables.png',
          coverFit: 'contain',
          stats: [
            { val: '0.15 dB', lbl: { ar: 'الفقدان', en: 'Loss' } },
            { val: 'IP68', lbl: { ar: 'الحماية', en: 'Protection' } },
            { val: 'N-Type', lbl: { ar: 'الموصل', en: 'Connector' } },
            { val: 'UV', lbl: { ar: 'مقاوم', en: 'Resistant' } }
          ],
          sections: [
            { title: { ar: 'نظرة عامة', en: 'Overview' }, body: { ar: 'كابلات محورية منخفضة الفقدان مع موصلات مقاومة للماء والعوامل الجوية.', en: 'Low-loss coaxial cables with weather-resistant connectors.' } },
            {
              title: { ar: 'المواصفات', en: 'Specifications' }, specs: [
                { lbl: { ar: 'الفقدان', en: 'Loss' }, val: { ar: '< 0.15 dB/m', en: '< 0.15 dB/m' } },
                { lbl: { ar: 'الموصل', en: 'Connector' }, val: { ar: 'N-Type ذهبي', en: 'Gold N-Type' } },
                { lbl: { ar: 'الحماية', en: 'Protection' }, val: { ar: 'IP68', en: 'IP68' } },
                { lbl: { ar: 'المعاوقة', en: 'Impedance' }, val: { ar: '50 Ohm', en: '50 Ohm' } }
              ]
            },
            {
              title: { ar: 'المزايا', en: 'Features' }, features: [
                { ic: 'bi-graph-down', t: { ar: 'فقدان منخفض', en: 'Low Loss' }, d: { ar: 'إشارة أوضح', en: 'Clearer signal' } },
                { ic: 'bi-shield-fill-check', t: { ar: 'IP68', en: 'IP68' }, d: { ar: 'مقاوم للماء', en: 'Waterproof' } }
              ]
            },
            {
              title: { ar: 'الأسئلة الشائعة', en: 'FAQ' }, faqs: [
                { q: { ar: 'هل الأطوال قابلة للتخصيص؟', en: 'Customizable lengths?' }, a: { ar: 'نعم، نصنّع حسب الطلب.', en: 'Yes, made to order.' } }
              ]
            }
          ],
          related: ['product:managed-modem', 'product:psu', 'product:ku-antenna']
        },

        'product:vehicle-antenna': {
          type: 'product',
          typeLabel: { ar: 'منتج', en: 'Product' },
          category: { ar: 'هوائيات', en: 'Antennas' },
          title: { ar: 'هوائي مثبت على المركبات', en: 'Vehicle-Mounted Antenna' },
          subtitle: { ar: 'هوائي بتتبع تلقائي للمركبات المتحركة والمنصات البحرية.', en: 'Auto-tracking antenna for moving vehicles and maritime platforms.' },
          cover: 'assets/img/products/vehicle-antenna.png',
          coverFit: 'contain',
          stats: [
            { val: '60°/s', lbl: { ar: 'سرعة التتبع', en: 'Tracking Speed' } },
            { val: 'Ku-Band', lbl: { ar: 'النطاق', en: 'Band' } },
            { val: 'Auto', lbl: { ar: 'التتبع', en: 'Tracking' } },
            { val: 'IP66', lbl: { ar: 'الحماية', en: 'Protection' } }
          ],
          sections: [
            { title: { ar: 'نظرة عامة', en: 'Overview' }, body: { ar: 'هوائي بتتبع تلقائي للمركبات المتحركة والمنصات البحرية.', en: 'Auto-tracking antenna for moving vehicles and maritime platforms.' } },
            {
              title: { ar: 'المواصفات', en: 'Specifications' }, specs: [
                { lbl: { ar: 'سرعة التتبع', en: 'Tracking Speed' }, val: { ar: '60°/ثانية', en: '60°/s' } },
                { lbl: { ar: 'النطاق', en: 'Band' }, val: { ar: 'Ku-Band', en: 'Ku-Band' } },
                { lbl: { ar: 'الوزن', en: 'Weight' }, val: { ar: '42 كجم', en: '42 kg' } },
                { lbl: { ar: 'مقاومة الرياح', en: 'Wind Rating' }, val: { ar: 'حتى 100 كم/س', en: 'Up to 100 km/h' } }
              ]
            },
            {
              title: { ar: 'المزايا', en: 'Features' }, features: [
                { ic: 'bi-radar', t: { ar: 'تتبع ديناميكي', en: 'Dynamic Tracking' }, d: { ar: 'مستمر أثناء الحركة', en: 'Continuous on move' } },
                { ic: 'bi-truck', t: { ar: 'تركيب مرن', en: 'Flexible Mount' }, d: { ar: 'سقف أو منصة', en: 'Roof or deck' } }
              ]
            },
            {
              title: { ar: 'الأسئلة الشائعة', en: 'FAQ' }, faqs: [
                { q: { ar: 'هل يعمل أثناء القيادة؟', en: 'Works while driving?' }, a: { ar: 'نعم، حتى 120 كم/س.', en: 'Yes, up to 120 km/h.' } }
              ]
            }
          ],
          related: ['product:vsat-portable', 'product:ku-antenna', 'product:managed-modem']
        },

        'product:iot-modem': {
          type: 'product',
          typeLabel: { ar: 'منتج', en: 'Product' },
          category: { ar: 'مودمات', en: 'Modems' },
          title: { ar: 'مودم إنترنت الأشياء IoT', en: 'IoT Satellite Modem' },
          subtitle: { ar: 'مودم منخفض الطاقة لأجهزة الاستشعار النائية.', en: 'Low-power modem for remote sensors and telemetry.' },
          cover: 'img-product/MDM2510_white-Photoroom.png',
          coverFit: 'contain',
          stats: [
            { val: '< 2W', lbl: { ar: 'الاستهلاك', en: 'Consumption' } },
            { val: 'IoT', lbl: { ar: 'النوع', en: 'Type' } },
            { val: 'Cloud', lbl: { ar: 'الإدارة', en: 'Management' } },
            { val: 'M2M', lbl: { ar: 'الاتصال', en: 'Connectivity' } }
          ],
          sections: [
            { title: { ar: 'نظرة عامة', en: 'Overview' }, body: { ar: 'مودم فضائي منخفض الطاقة مصمم لأجهزة الاستشعار النائية وأنظمة SCADA/M2M.', en: 'Low-power satellite modem designed for remote sensors and SCADA/M2M systems.' } },
            {
              title: { ar: 'المواصفات', en: 'Specifications' }, specs: [
                { lbl: { ar: 'الاستهلاك', en: 'Consumption' }, val: { ar: '< 2W', en: '< 2W' } },
                { lbl: { ar: 'العمر بالبطارية', en: 'Battery Life' }, val: { ar: 'حتى 5 سنوات', en: 'Up to 5 years' } },
                { lbl: { ar: 'البروتوكولات', en: 'Protocols' }, val: { ar: 'MQTT / Modbus', en: 'MQTT / Modbus' } }
              ]
            },
            {
              title: { ar: 'المزايا', en: 'Features' }, features: [
                { ic: 'bi-battery', t: { ar: 'طاقة منخفضة', en: 'Low Power' }, d: { ar: '< 2 واط', en: '< 2W' } },
                { ic: 'bi-cloud', t: { ar: 'سحابي', en: 'Cloud' }, d: { ar: 'إدارة الأسطول', en: 'Fleet management' } }
              ]
            },
            {
              title: { ar: 'الأسئلة الشائعة', en: 'FAQ' }, faqs: [
                { q: { ar: 'هل يحتاج كهرباء خارجية؟', en: 'External power needed?' }, a: { ar: 'لا، بطارية داخلية 5 سنوات.', en: 'No, internal 5-year battery.' } }
              ]
            }
          ],
          related: ['product:managed-modem', 'product:psu']
        },

        'product:psu': {
          type: 'product',
          typeLabel: { ar: 'منتج', en: 'Product' },
          category: { ar: 'ملحقات', en: 'Accessories' },
          title: { ar: 'وحدة إمداد طاقة PSU', en: 'PSU Power Supply' },
          subtitle: { ar: 'وحدة إمداد طاقة احتياطية بمدى جهد واسع.', en: 'Backup power supply with wide voltage range.' },
          cover: 'img-product/images-Photoroom.png',
          coverFit: 'contain',
          stats: [
            { val: '90–264V', lbl: { ar: 'مدى الجهد', en: 'Voltage Range' } },
            { val: '92%', lbl: { ar: 'الكفاءة', en: 'Efficiency' } },
            { val: 'PSU', lbl: { ar: 'النوع', en: 'Type' } },
            { val: 'Field', lbl: { ar: 'الاستخدام', en: 'Use Case' } }
          ],
          sections: [
            { title: { ar: 'نظرة عامة', en: 'Overview' }, body: { ar: 'وحدة إمداد طاقة احتياطية بمدى جهد واسع مصممة للعمليات الميدانية الطويلة.', en: 'Backup power supply with wide voltage range for long field operations.' } },
            {
              title: { ar: 'المواصفات', en: 'Specifications' }, specs: [
                { lbl: { ar: 'مدى الجهد', en: 'Voltage' }, val: { ar: '90–264V AC', en: '90–264V AC' } },
                { lbl: { ar: 'الكفاءة', en: 'Efficiency' }, val: { ar: '92%', en: '92%' } },
                { lbl: { ar: 'الخرج', en: 'Output' }, val: { ar: '24V DC / 5A', en: '24V DC / 5A' } }
              ]
            },
            {
              title: { ar: 'المزايا', en: 'Features' }, features: [
                { ic: 'bi-plug-fill', t: { ar: 'مدى واسع', en: 'Wide Range' }, d: { ar: '90–264V AC', en: '90–264V AC' } },
                { ic: 'bi-shield-check', t: { ar: 'حماية مدمجة', en: 'Built-in Protection' }, d: { ar: 'Overload + Short', en: 'Overload + Short' } }
              ]
            },
            {
              title: { ar: 'الأسئلة الشائعة', en: 'FAQ' }, faqs: [
                { q: { ar: 'هل يدعم 110V؟', en: 'Supports 110V?' }, a: { ar: 'نعم، 90–264V تلقائي.', en: 'Yes, auto 90–264V.' } }
              ]
            }
          ],
          related: ['product:managed-modem', 'product:iot-modem']
        },

        'product:deploy-case': {
          type: 'product',
          typeLabel: { ar: 'منتج', en: 'Product' },
          category: { ar: 'ملحقات', en: 'Accessories' },
          title: { ar: 'حقيبة نقل Deploy Case', en: 'Deploy Transport Case' },
          subtitle: { ar: 'حقيبة نقل مقاومة للصدمات والماء.', en: 'Shock and water-resistant transport case.' },
          cover: 'img-product/images (1)-Photoroom.png',
          coverFit: 'contain',
          stats: [
            { val: 'IP67', lbl: { ar: 'الحماية', en: 'Protection' } },
            { val: 'Shock', lbl: { ar: 'مقاومة', en: 'Resistance' } },
            { val: 'Custom', lbl: { ar: 'الرغوة', en: 'Foam' } },
            { val: 'Military', lbl: { ar: 'المعيار', en: 'Standard' } }
          ],
          sections: [
            { title: { ar: 'نظرة عامة', en: 'Overview' }, body: { ar: 'حقيبة نقل مقاومة للصدمات والماء لحماية المحطات الفضائية أثناء التنقل.', en: 'Shock and water-resistant transport case for satellite terminals.' } },
            {
              title: { ar: 'المواصفات', en: 'Specifications' }, specs: [
                { lbl: { ar: 'الحماية', en: 'Protection' }, val: { ar: 'IP67', en: 'IP67' } },
                { lbl: { ar: 'المعيار', en: 'Standard' }, val: { ar: 'MIL-STD-810', en: 'MIL-STD-810' } },
                { lbl: { ar: 'الوزن الفارغ', en: 'Empty Weight' }, val: { ar: '6.5 كجم', en: '6.5 kg' } }
              ]
            },
            {
              title: { ar: 'المزايا', en: 'Features' }, features: [
                { ic: 'bi-shield-check', t: { ar: 'حماية IP67', en: 'IP67 Protection' }, d: { ar: 'ماء وغبار', en: 'Water & dust' } },
                { ic: 'bi-box-seam', t: { ar: 'رغوة مخصصة', en: 'Custom Foam' }, d: { ar: 'لكل قطعة', en: 'Per part' } }
              ]
            },
            {
              title: { ar: 'الأسئلة الشائعة', en: 'FAQ' }, faqs: [
                { q: { ar: 'هل يمكن تخصيص الرغوة؟', en: 'Custom foam available?' }, a: { ar: 'نعم، حسب مقاسات معداتك.', en: 'Yes, sized to your gear.' } }
              ]
            }
          ],
          related: ['product:vsat-portable', 'product:manpack', 'product:rf-cables']
        },

        /* ═══════════════════════════════════════════════════════════
           SERVICES — الخدمات (10) — IDs match services.html
           ═══════════════════════════════════════════════════════════ */

        'service:vsat': {
          type: 'service',
          typeLabel: { ar: 'خدمة', en: 'Service' },
          category: { ar: 'اتصالات', en: 'Connectivity' },
          title: { ar: 'حلول VSAT', en: 'VSAT Solutions' },
          subtitle: { ar: 'اتصالات فضائية عالية السرعة للثابت والمتنقل، بتغطية شاملة في أصعب المواقع.', en: 'High-speed satellite connectivity for fixed and mobile sites, with comprehensive coverage.' },
          cover: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1000&h=750&fit=crop&auto=format',
          coverFit: 'cover',
          stats: [
            { val: '100 Mbps', lbl: { ar: 'السرعة القصوى', en: 'Max Speed' } },
            { val: 'Ku/C', lbl: { ar: 'النطاقات', en: 'Bands' } },
            { val: '24-48h', lbl: { ar: 'التركيب', en: 'Install' } },
            { val: '24/7', lbl: { ar: 'الدعم', en: 'Support' } }
          ],
          sections: [
            { title: { ar: 'نظرة عامة', en: 'Overview' }, body: { ar: 'حلول VSAT من Tech-Sat توفر اتصالات فضائية عالية السرعة للثابت والمتنقل، مع تغطية شاملة في أصعب المواقع الجغرافية. مثالية للمشاريع الحكومية، الإنسانية، والصناعية.', en: 'Tech-Sat VSAT solutions provide high-speed satellite connectivity for fixed and mobile sites, with comprehensive coverage in the toughest locations. Ideal for government, humanitarian, and industrial projects.' } },
            {
              title: { ar: 'المواصفات', en: 'Specifications' }, specs: [
                { lbl: { ar: 'السرعة', en: 'Speed' }, val: { ar: 'حتى 100 Mbps', en: 'Up to 100 Mbps' } },
                { lbl: { ar: 'النطاقات', en: 'Bands' }, val: { ar: 'Ku / C-Band', en: 'Ku / C-Band' } },
                { lbl: { ar: 'التغطية', en: 'Coverage' }, val: { ar: 'عالمية', en: 'Global' } },
                { lbl: { ar: 'زمن التركيب', en: 'Install Time' }, val: { ar: '24-48 ساعة', en: '24-48 hours' } }
              ]
            },
            {
              title: { ar: 'المزايا', en: 'Features' }, features: [
                { ic: 'bi-broadcast-pin', t: { ar: 'تغطية شاملة', en: 'Full Coverage' }, d: { ar: 'في أي موقع', en: 'Any location' } },
                { ic: 'bi-speedometer2', t: { ar: 'سرعة عالية', en: 'High Speed' }, d: { ar: 'حتى 100 Mbps', en: 'Up to 100 Mbps' } },
                { ic: 'bi-tools', t: { ar: 'تركيب سريع', en: 'Quick Install' }, d: { ar: '24-48 ساعة', en: '24-48 hours' } },
                { ic: 'bi-headset', t: { ar: 'دعم فني', en: 'Support' }, d: { ar: 'على مدار الساعة', en: '24/7' } }
              ]
            },
            {
              title: { ar: 'الأسئلة الشائعة', en: 'FAQ' }, faqs: [
                { q: { ar: 'ما الفرق بين Ku و C-Band؟', en: 'Difference between Ku and C-Band?' }, a: { ar: 'Ku أسرع لكن حساس للمطر، C-Band أكثر ثباتاً في الظروف القاسية.', en: 'Ku is faster but rain-sensitive, C-Band is more stable in harsh conditions.' } },
                { q: { ar: 'هل تغطي اليمن كلها؟', en: 'Cover all of Yemen?' }, a: { ar: 'نعم، بما فيها المناطق النائية.', en: 'Yes, including remote areas.' } }
              ]
            }
          ],
          related: ['service:voice', 'service:net', 'service:integr']
        },

        'service:voice': {
          type: 'service',
          typeLabel: { ar: 'خدمة', en: 'Service' },
          category: { ar: 'اتصالات', en: 'Connectivity' },
          title: { ar: 'صوت وبيانات', en: 'Voice & Data' },
          subtitle: { ar: 'خدمات صوتية وبيانات شاملة بتقنيات VoIP والبث الحي عبر الأقمار الصناعية.', en: 'Comprehensive voice and data services with VoIP and live broadcast over satellite.' },
          cover: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1000&h=750&fit=crop&auto=format',
          coverFit: 'cover',
          stats: [
            { val: 'VoIP', lbl: { ar: 'الصوت', en: 'Voice' } },
            { val: 'HD', lbl: { ar: 'الفيديو', en: 'Video' } },
            { val: 'آمن', lbl: { ar: 'النقل', en: 'Transfer' } },
            { val: '24/7', lbl: { ar: 'الدعم', en: 'Support' } }
          ],
          sections: [
            { title: { ar: 'نظرة عامة', en: 'Overview' }, body: { ar: 'خدمات صوتية وبيانات شاملة بتقنيات VoIP والبث الحي عبر الأقمار الصناعية، لكل القطاعات — من الحكومة إلى الإعلام.', en: 'Comprehensive voice and data services with VoIP and live broadcast over satellite, for all sectors — from government to media.' } },
            {
              title: { ar: 'المواصفات', en: 'Specifications' }, specs: [
                { lbl: { ar: 'الصوت', en: 'Voice' }, val: { ar: 'VoIP عالي الجودة', en: 'HD VoIP' } },
                { lbl: { ar: 'الفيديو', en: 'Video' }, val: { ar: 'بث مباشر HD', en: 'Live HD' } },
                { lbl: { ar: 'الأمان', en: 'Security' }, val: { ar: 'تشفير كامل', en: 'Full encryption' } },
                { lbl: { ar: 'البروتوكولات', en: 'Protocols' }, val: { ar: 'SIP / H.323', en: 'SIP / H.323' } }
              ]
            },
            {
              title: { ar: 'المزايا', en: 'Features' }, features: [
                { ic: 'bi-telephone-fill', t: { ar: 'VoIP عالي الجودة', en: 'HD VoIP' }, d: { ar: 'صوت واضح', en: 'Clear voice' } },
                { ic: 'bi-camera-video-fill', t: { ar: 'بث حي', en: 'Live Broadcast' }, d: { ar: 'HD / 4K', en: 'HD / 4K' } },
                { ic: 'bi-shield-lock-fill', t: { ar: 'نقل آمن', en: 'Secure Transfer' }, d: { ar: 'تشفير end-to-end', en: 'End-to-end' } },
                { ic: 'bi-globe', t: { ar: 'تغطية عالمية', en: 'Global Coverage' }, d: { ar: 'أي مكان', en: 'Anywhere' } }
              ]
            },
            {
              title: { ar: 'الأسئلة الشائعة', en: 'FAQ' }, faqs: [
                { q: { ar: 'هل يدعم مكالمات متعددة؟', en: 'Multi-call support?' }, a: { ar: 'نعم، عبر SIP Trunk.', en: 'Yes, via SIP Trunk.' } },
                { q: { ar: 'ما زمن التأخير؟', en: 'What is the latency?' }, a: { ar: 'منخفض حسب القمر المستخدم.', en: 'Low, satellite-dependent.' } }
              ]
            }
          ],
          related: ['service:vsat', 'service:net', 'service:traksat']
        },

        'service:net': {
          type: 'service',
          typeLabel: { ar: 'خدمة', en: 'Service' },
          category: { ar: 'تكامل', en: 'Integration' },
          title: { ar: 'شبكات مُدارة', en: 'Managed Networks' },
          subtitle: { ar: 'إدارة كاملة للشبكة مع مراقبة NOC على مدار الساعة واتفاقيات مستوى خدمة (SLA).', en: 'Full network management with 24/7 NOC monitoring and SLAs.' },
          cover: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1000&h=750&fit=crop&auto=format',
          coverFit: 'cover',
          stats: [
            { val: 'Managed', lbl: { ar: 'النوع', en: 'Type' } },
            { val: '24/7', lbl: { ar: 'مراقبة', en: 'Monitoring' } },
            { val: 'SLA', lbl: { ar: 'اتفاقية', en: 'Agreement' } },
            { val: 'Multi-site', lbl: { ar: 'تغطية', en: 'Coverage' } }
          ],
          sections: [
            { title: { ar: 'نظرة عامة', en: 'Overview' }, body: { ar: 'حلول اتصالات شبكية مُدارة للعمليات الموزعة مع مراقبة مستمرة من NOC متخصص على مدار الساعة.', en: 'Managed network solutions for distributed operations with continuous monitoring from a dedicated 24/7 NOC.' } },
            {
              title: { ar: 'المواصفات', en: 'Specifications' }, specs: [
                { lbl: { ar: 'النوع', en: 'Type' }, val: { ar: 'مُدارة بالكامل', en: 'Fully managed' } },
                { lbl: { ar: 'المراقبة', en: 'Monitoring' }, val: { ar: 'NOC 24/7', en: 'NOC 24/7' } },
                { lbl: { ar: 'SLA', en: 'SLA' }, val: { ar: '99.5% - 99.9%', en: '99.5% - 99.9%' } }
              ]
            },
            {
              title: { ar: 'المزايا', en: 'Features' }, features: [
                { ic: 'bi-eye-fill', t: { ar: 'مراقبة 24/7', en: '24/7 Monitoring' }, d: { ar: 'NOC متخصص', en: 'Dedicated NOC' } },
                { ic: 'bi-shield-check', t: { ar: 'SLA موثوق', en: 'Reliable SLA' }, d: { ar: 'حتى 99.9%', en: 'Up to 99.9%' } }
              ]
            },
            {
              title: { ar: 'الأسئلة الشائعة', en: 'FAQ' }, faqs: [
                { q: { ar: 'من يدير الشبكة؟', en: 'Who runs the network?' }, a: { ar: 'فريق NOC لدينا بالكامل.', en: 'Our full NOC team.' } }
              ]
            }
          ],
          related: ['service:vsat', 'service:integr', 'service:optiview']
        },

        'service:integr': {
          type: 'service',
          typeLabel: { ar: 'خدمة', en: 'Service' },
          category: { ar: 'تكامل', en: 'Integration' },
          title: { ar: 'تكامل الأنظمة', en: 'Systems Integration' },
          subtitle: { ar: 'تصميم ودمج حلول الاتصالات الكاملة مع أنظمة العميل الحالية.', en: 'Design and integration of complete communication solutions with existing systems.' },
          cover: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1000&h=750&fit=crop&auto=format',
          coverFit: 'cover',
          stats: [
            { val: 'End-to-End', lbl: { ar: 'النطاق', en: 'Scope' } },
            { val: 'In-house', lbl: { ar: 'الهندسة', en: 'Engineering' } },
            { val: 'Custom', lbl: { ar: 'التصميم', en: 'Design' } },
            { val: 'SLA', lbl: { ar: 'الدعم', en: 'Support' } }
          ],
          sections: [
            { title: { ar: 'نظرة عامة', en: 'Overview' }, body: { ar: 'تصميم ودمج حلول الاتصالات الكاملة مع أنظمة العميل الحالية، من البداية للنهاية، مع تصميم وهندسة داخلية.', en: 'Design and integration of complete communication solutions with existing systems, end-to-end, with in-house design and engineering.' } },
            {
              title: { ar: 'المواصفات', en: 'Specifications' }, specs: [
                { lbl: { ar: 'النطاق', en: 'Scope' }, val: { ar: 'End-to-End', en: 'End-to-End' } },
                { lbl: { ar: 'التسليم', en: 'Delivery' }, val: { ar: 'Turnkey', en: 'Turnkey' } },
                { lbl: { ar: 'الاختبار', en: 'Testing' }, val: { ar: 'FAT / SAT', en: 'FAT / SAT' } }
              ]
            },
            {
              title: { ar: 'المزايا', en: 'Features' }, features: [
                { ic: 'bi-diagram-3-fill', t: { ar: 'تكامل شامل', en: 'Full Integration' }, d: { ar: 'منتج + شبكة + خدمة', en: 'Product + Network + Service' } },
                { ic: 'bi-tools', t: { ar: 'هندسة داخلية', en: 'In-house Engineering' }, d: { ar: 'تصميم مخصص', en: 'Custom design' } }
              ]
            },
            {
              title: { ar: 'الأسئلة الشائعة', en: 'FAQ' }, faqs: [
                { q: { ar: 'كم يستغرق المشروع؟', en: 'Project duration?' }, a: { ar: 'من 4 إلى 12 أسبوعاً.', en: '4 to 12 weeks.' } }
              ]
            }
          ],
          related: ['service:vsat', 'service:net', 'service:onegate']
        },

        'service:field': {
          type: 'service',
          typeLabel: { ar: 'خدمة', en: 'Service' },
          category: { ar: 'ميدانية', en: 'Field' },
          title: { ar: 'خدمات ميدانية', en: 'Field Services' },
          subtitle: { ar: 'تركيب وصيانة وتشغيل محطات VSAT في أي موقع داخل اليمن.', en: 'Installation and maintenance of VSAT stations anywhere in Yemen.' },
          cover: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1000&h=750&fit=crop&auto=format',
          coverFit: 'cover',
          stats: [
            { val: '24-48h', lbl: { ar: 'زمن التركيب', en: 'Install Time' } },
            { val: '22', lbl: { ar: 'محافظة', en: 'Governorates' } },
            { val: 'مدرّب', lbl: { ar: 'الفريق', en: 'Team' } },
            { val: '24/7', lbl: { ar: 'دعم', en: 'Support' } }
          ],
          sections: [
            { title: { ar: 'نظرة عامة', en: 'Overview' }, body: { ar: 'تركيب وصيانة وتشغيل محطات VSAT في أي موقع داخل اليمن، بفرق فنية متخصصة مدربة على التعامل مع أصعب الظروف.', en: 'Installation and maintenance of VSAT stations anywhere in Yemen, by specialized technical teams trained for the toughest conditions.' } },
            {
              title: { ar: 'المواصفات', en: 'Specifications' }, specs: [
                { lbl: { ar: 'زمن التركيب', en: 'Install Time' }, val: { ar: '24-48 ساعة', en: '24-48 hours' } },
                { lbl: { ar: 'التغطية', en: 'Coverage' }, val: { ar: 'كل المحافظات', en: 'All governorates' } },
                { lbl: { ar: 'الفريق', en: 'Team' }, val: { ar: 'فنيون مدرّبون', en: 'Trained techs' } },
                { lbl: { ar: 'التدريب', en: 'Training' }, val: { ar: 'لعملائنا', en: 'For clients' } }
              ]
            },
            {
              title: { ar: 'المزايا', en: 'Features' }, features: [
                { ic: 'bi-tools', t: { ar: 'فرق متخصصة', en: 'Specialized Teams' }, d: { ar: 'خبرة ميدانية', en: 'Field expertise' } },
                { ic: 'bi-geo-alt-fill', t: { ar: 'تغطية كاملة', en: 'Full Coverage' }, d: { ar: 'كل المحافظات', en: 'All governorates' } },
                { ic: 'bi-mortarboard-fill', t: { ar: 'تدريب العملاء', en: 'Client Training' }, d: { ar: 'على التشغيل', en: 'On operation' } },
                { ic: 'bi-clock-history', t: { ar: 'استجابة سريعة', en: 'Fast Response' }, d: { ar: 'خلال ساعات', en: 'Within hours' } }
              ]
            },
            {
              title: { ar: 'الأسئلة الشائعة', en: 'FAQ' }, faqs: [
                { q: { ar: 'هل تصلون لكل اليمن؟', en: 'Do you cover all of Yemen?' }, a: { ar: 'نعم، مع فروق أمنية حسب المنطقة.', en: 'Yes, with security arrangements by region.' } }
              ]
            }
          ],
          related: ['service:vsat', 'service:support', 'service:net']
        },

        'service:support': {
          type: 'service',
          typeLabel: { ar: 'خدمة', en: 'Service' },
          category: { ar: 'دعم', en: 'Support' },
          title: { ar: 'دعم فني 24/7', en: '24/7 Technical Support' },
          subtitle: { ar: 'فريق دعم متخصص متاح على مدار الساعة مع استجابة ميدانية خلال 24 ساعة.', en: 'Dedicated 24/7 support team with field response within 24 hours.' },
          cover: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1000&h=750&fit=crop&auto=format',
          coverFit: 'cover',
          stats: [
            { val: '24/7', lbl: { ar: 'التوفر', en: 'Availability' } },
            { val: '< 4h', lbl: { ar: 'الاستجابة', en: 'Response' } },
            { val: 'SLA', lbl: { ar: 'الضمان', en: 'Guarantee' } },
            { val: 'عربي', lbl: { ar: 'اللغة', en: 'Language' } }
          ],
          sections: [
            { title: { ar: 'نظرة عامة', en: 'Overview' }, body: { ar: 'فريق دعم متخصص متاح على مدار الساعة، مع استجابة ميدانية خلال 24 ساعة كحد أقصى. دعم بالعربية والإنجليزية.', en: 'Dedicated support team available around the clock, with field response within 24 hours. Arabic and English support 24/7.' } },
            {
              title: { ar: 'المواصفات', en: 'Specifications' }, specs: [
                { lbl: { ar: 'التوفر', en: 'Availability' }, val: { ar: '24/7/365', en: '24/7/365' } },
                { lbl: { ar: 'الاستجابة', en: 'Response' }, val: { ar: '< 4 ساعات', en: '< 4 hours' } },
                { lbl: { ar: 'اللغات', en: 'Languages' }, val: { ar: 'عربي / إنجليزي', en: 'Arabic / English' } },
                { lbl: { ar: 'SLA', en: 'SLA' }, val: { ar: 'متفاوت (أساسي/متقدم)', en: 'Tiered (basic/advanced)' } }
              ]
            },
            {
              title: { ar: 'المزايا', en: 'Features' }, features: [
                { ic: 'bi-headset', t: { ar: 'دعم هاتفي', en: 'Phone Support' }, d: { ar: '24/7', en: '24/7' } },
                { ic: 'bi-envelope-fill', t: { ar: 'بريد إلكتروني', en: 'Email Support' }, d: { ar: 'رد سريع', en: 'Fast reply' } },
                { ic: 'bi-tools', t: { ar: 'دعم ميداني', en: 'On-site Support' }, d: { ar: 'خلال 24 ساعة', en: 'Within 24h' } },
                { ic: 'bi-arrow-repeat', t: { ar: 'صيانة دورية', en: 'Periodic Maintenance' }, d: { ar: 'زيارات مجدولة', en: 'Scheduled visits' } }
              ]
            },
            {
              title: { ar: 'الأسئلة الشائعة', en: 'FAQ' }, faqs: [
                { q: { ar: 'هل الدعم مجاني؟', en: 'Is support free?' }, a: { ar: 'أساسي مجاني، متقدم حسب الباقة.', en: 'Basic free, advanced per plan.' } },
                { q: { ar: 'هل هناك SLA مخصص؟', en: 'Custom SLA?' }, a: { ar: 'نعم، للعقود الكبيرة.', en: 'Yes, for enterprise contracts.' } }
              ]
            }
          ],
          related: ['service:vsat', 'service:field', 'service:optishield']
        },

        'service:optishield': {
          type: 'service',
          typeLabel: { ar: 'خدمة', en: 'Service' },
          category: { ar: 'دعم', en: 'Support' },
          title: { ar: 'أمن سيبراني (OptiShield)', en: 'OptiShield Cybersecurity' },
          subtitle: { ar: 'حماية العمليات المتصلة بخدمات الأمن السيبراني المُدارة.', en: 'Protect connected operations with managed cybersecurity.' },
          cover: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1000&h=750&fit=crop&auto=format',
          coverFit: 'cover',
          stats: [
            { val: '24/7', lbl: { ar: 'مراقبة', en: 'Monitoring' } },
            { val: 'مُدار', lbl: { ar: 'النوع', en: 'Type' } },
            { val: 'SSL', lbl: { ar: 'التشفير', en: 'Encryption' } },
            { val: 'SLA', lbl: { ar: 'الحماية', en: 'Protection' } }
          ],
          sections: [
            { title: { ar: 'نظرة عامة', en: 'Overview' }, body: { ar: 'OptiShield يحمي عملياتك المتصلة بخدمات الأمن السيبراني المُدارة، وحماية الشبكة، والاستجابة للحوادث، مما يضمن سلامة بياناتك على مدار الساعة.', en: 'OptiShield protects your connected operations with managed cybersecurity, network protection, and incident response.' } },
            {
              title: { ar: 'المواصفات', en: 'Specifications' }, specs: [
                { lbl: { ar: 'النوع', en: 'Type' }, val: { ar: 'مُدار', en: 'Managed' } },
                { lbl: { ar: 'المراقبة', en: 'Monitoring' }, val: { ar: '24/7', en: '24/7' } },
                { lbl: { ar: 'الحماية', en: 'Protection' }, val: { ar: 'Firewall / IDS / IPS', en: 'Firewall / IDS / IPS' } },
                { lbl: { ar: 'الاستجابة', en: 'Response' }, val: { ar: 'SLA مضمون', en: 'SLA backed' } }
              ]
            },
            {
              title: { ar: 'المزايا', en: 'Features' }, features: [
                { ic: 'bi-shield-lock-fill', t: { ar: 'حماية متقدمة', en: 'Advanced Protection' }, d: { ar: 'ضد التهديدات', en: 'Against threats' } },
                { ic: 'bi-eye-fill', t: { ar: 'مراقبة مستمرة', en: 'Continuous Monitoring' }, d: { ar: '24/7 SOC', en: '24/7 SOC' } },
                { ic: 'bi-file-earmark-lock', t: { ar: 'تشفير البيانات', en: 'Data Encryption' }, d: { ar: 'SSL / IPSec', en: 'SSL / IPSec' } }
              ]
            },
            {
              title: { ar: 'الأسئلة الشائعة', en: 'FAQ' }, faqs: [
                { q: { ar: 'هل يغطي المواقع النائية؟', en: 'Does it cover remote sites?' }, a: { ar: 'نعم، عبر الأقمار الصناعية والروابط الأرضية.', en: 'Yes, over satellite and terrestrial links.' } }
              ]
            }
          ],
          related: ['service:support', 'service:net', 'service:optiview']
        },

        'service:optiview': {
          type: 'service',
          typeLabel: { ar: 'خدمة', en: 'Service' },
          category: { ar: 'تكامل', en: 'Integration' },
          title: { ar: 'منصة إدارة الشبكة (OptiView)', en: 'OptiView Platform' },
          subtitle: { ar: 'منصة واحدة لرؤية كاملة لبيئتك المتصلة.', en: 'One platform for complete visibility over your connected environment.' },
          cover: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&h=750&fit=crop&auto=format',
          coverFit: 'cover',
          stats: [
            { val: 'Real-time', lbl: { ar: 'الرؤية', en: 'Visibility' } },
            { val: 'Web', lbl: { ar: 'الوصول', en: 'Access' } },
            { val: 'Multi-site', lbl: { ar: 'التغطية', en: 'Coverage' } },
            { val: 'Alert', lbl: { ar: 'الإشعارات', en: 'Alerts' } }
          ],
          sections: [
            { title: { ar: 'نظرة عامة', en: 'Overview' }, body: { ar: 'OptiView منصة ويب تمنحك رؤية كاملة وتحكماً مباشراً في بيئة الاتصال — مراقبة الأداء والاستخدام والمواقع النائية من لوحة تحكم واحدة.', en: 'OptiView is a web platform giving you full visibility and direct control over your connected environment.' } },
            {
              title: { ar: 'المواصفات', en: 'Specifications' }, specs: [
                { lbl: { ar: 'النوع', en: 'Type' }, val: { ar: 'منصة ويب', en: 'Web platform' } },
                { lbl: { ar: 'الرؤية', en: 'Visibility' }, val: { ar: 'Real-time', en: 'Real-time' } },
                { lbl: { ar: 'الإشعارات', en: 'Alerts' }, val: { ar: 'Email / SMS', en: 'Email / SMS' } }
              ]
            },
            {
              title: { ar: 'المزايا', en: 'Features' }, features: [
                { ic: 'bi-bar-chart-line', t: { ar: 'تحليلات متقدمة', en: 'Advanced Analytics' }, d: { ar: 'تقارير دورية', en: 'Periodic reports' } },
                { ic: 'bi-geo-alt-fill', t: { ar: 'خريطة المواقع', en: 'Site Map' }, d: { ar: 'رؤية جغرافية', en: 'Geographic view' } },
                { ic: 'bi-bell-fill', t: { ar: 'تنبيهات فورية', en: 'Instant Alerts' }, d: { ar: 'عند أي خلل', en: 'On any issue' } }
              ]
            },
            {
              title: { ar: 'الأسئلة الشائعة', en: 'FAQ' }, faqs: [
                { q: { ar: 'هل يتطلب تركيباً معقداً؟', en: 'Complex installation?' }, a: { ar: 'لا، عبر المتصفح مباشرة.', en: 'No, works via browser.' } }
              ]
            }
          ],
          related: ['service:net', 'service:optishield', 'service:onegate']
        },

        'service:traksat': {
          type: 'service',
          typeLabel: { ar: 'خدمة', en: 'Service' },
          category: { ar: 'اتصالات', en: 'Connectivity' },
          title: { ar: 'Traksat PTT والتتبع', en: 'Traksat PTT & Tracking' },
          subtitle: { ar: 'اتصال جماعي وتتبع لحظي للفرق الميدانية.', en: 'Group communication and real-time tracking for field teams.' },
          cover: 'https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=1000&h=750&fit=crop&auto=format',
          coverFit: 'cover',
          stats: [
            { val: 'PTT', lbl: { ar: 'الاتصال', en: 'Comms' } },
            { val: 'GPS', lbl: { ar: 'التتبع', en: 'Tracking' } },
            { val: 'SOS', lbl: { ar: 'الطوارئ', en: 'Emergency' } },
            { val: 'Satellite', lbl: { ar: 'الشبكة', en: 'Network' } }
          ],
          sections: [
            { title: { ar: 'نظرة عامة', en: 'Overview' }, body: { ar: 'Traksat منصة رقمية تجمع بين الضغط-للتحدث (PTT)، التتبع، وإحداثيات GPS — ليبقى فريقك على اتصال دائم حتى في أبعد المواقع.', en: 'Traksat combines push-to-talk, tracking, and GPS — keeping your team connected even in the most remote locations.' } },
            {
              title: { ar: 'المواصفات', en: 'Specifications' }, specs: [
                { lbl: { ar: 'الاتصال', en: 'Comms' }, val: { ar: 'Push-to-Talk', en: 'Push-to-Talk' } },
                { lbl: { ar: 'التتبع', en: 'Tracking' }, val: { ar: 'GPS لحظي', en: 'Real-time GPS' } },
                { lbl: { ar: 'الطوارئ', en: 'Emergency' }, val: { ar: 'زر SOS', en: 'SOS Button' } }
              ]
            },
            {
              title: { ar: 'المزايا', en: 'Features' }, features: [
                { ic: 'bi-broadcast', t: { ar: 'اتصال جماعي', en: 'Group Call' }, d: { ar: 'PTT فوري', en: 'Instant PTT' } },
                { ic: 'bi-geo-alt-fill', t: { ar: 'تتبع لحظي', en: 'Live Tracking' }, d: { ar: 'على الخريطة', en: 'On map' } },
                { ic: 'bi-exclamation-triangle-fill', t: { ar: 'استغاثة', en: 'SOS' }, d: { ar: 'زر طوارئ', en: 'Emergency button' } }
              ]
            },
            {
              title: { ar: 'الأسئلة الشائعة', en: 'FAQ' }, faqs: [
                { q: { ar: 'هل يعمل في الصحارى؟', en: 'Works in deserts?' }, a: { ar: 'نعم، عبر الأقمار الصناعية.', en: 'Yes, via satellite.' } }
              ]
            }
          ],
          related: ['service:vsat', 'service:voice', 'service:onegate']
        },

        'service:onegate': {
          type: 'service',
          typeLabel: { ar: 'خدمة', en: 'Service' },
          category: { ar: 'تكامل', en: 'Integration' },
          title: { ar: 'خدمات OneGate', en: 'OneGate Services' },
          subtitle: { ar: 'مجموعة خدمات مضافة لتحسين أداء SATCOM.', en: 'A suite of value-added services optimizing SATCOM performance.' },
          cover: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1000&h=750&fit=crop&auto=format',
          coverFit: 'cover',
          stats: [
            { val: 'Compression', lbl: { ar: 'الضغط', en: 'Compression' } },
            { val: 'VPN', lbl: { ar: 'الأمان', en: 'Security' } },
            { val: 'Email', lbl: { ar: 'البريد', en: 'Email' } },
            { val: 'Optimization', lbl: { ar: 'التحسين', en: 'Optimization' } }
          ],
          sections: [
            { title: { ar: 'نظرة عامة', en: 'Overview' }, body: { ar: 'OneGate مجموعة خدمات مضافة ترفع كفاءة الاتصال الفضائي عبر ضغط البيانات وتحسين النطاق والبريد الإلكتروني السريع وVPN آمن.', en: 'OneGate enhances satellite connectivity via data compression, bandwidth optimization, fast email, and secure VPN.' } },
            {
              title: { ar: 'المواصفات', en: 'Specifications' }, specs: [
                { lbl: { ar: 'ضغط البيانات', en: 'Data Compression' }, val: { ar: 'حتى 80%', en: 'Up to 80%' } },
                { lbl: { ar: 'البريد السريع', en: 'Fast Email' }, val: { ar: '3-5x أسرع', en: '3-5x faster' } },
                { lbl: { ar: 'VPN', en: 'VPN' }, val: { ar: 'IPSec آمن', en: 'Secure IPSec' } }
              ]
            },
            {
              title: { ar: 'المزايا', en: 'Features' }, features: [
                { ic: 'bi-file-zip-fill', t: { ar: 'ضغط متقدم', en: 'Advanced Compression' }, d: { ar: 'بيانات أقل', en: 'Less data' } },
                { ic: 'bi-speedometer2', t: { ar: 'تصفح أسرع', en: 'Faster Browsing' }, d: { ar: '3-5x', en: '3-5x' } },
                { ic: 'bi-shield-lock-fill', t: { ar: 'VPN آمن', en: 'Secure VPN' }, d: { ar: 'ربط خاص', en: 'Private link' } }
              ]
            },
            {
              title: { ar: 'الأسئلة الشائعة', en: 'FAQ' }, faqs: [
                { q: { ar: 'هل يعمل مع أي مزود؟', en: 'Works with any provider?' }, a: { ar: 'نعم، لا يعتمد على شبكة معينة.', en: 'Yes, provider-independent.' } }
              ]
            }
          ],
          related: ['service:vsat', 'service:net', 'service:optiview']
        },

        /* ═══════════════════════════════════════════════════════════
           INDUSTRIES — القطاعات (6) — IDs match industries.html
           ═══════════════════════════════════════════════════════════ */

        'industry:government': {
          type: 'industry',
          typeLabel: { ar: 'قطاع', en: 'Industry' },
          category: { ar: 'حكومي', en: 'Government' },
          title: { ar: 'حلول القطاع الحكومي', en: 'Government Solutions' },
          subtitle: { ar: 'اتصالات آمنة ومرنة وقابلة للنشر السريع.', en: 'Secure, flexible, rapidly deployable communications.' },
          cover: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1000&h=750&fit=crop&auto=format',
          coverFit: 'cover',
          stats: [
            { val: '100%', lbl: { ar: 'تغطية', en: 'Coverage' } },
            { val: '4 ساعات', lbl: { ar: 'النشر', en: 'Deployment' } },
            { val: 'مشفّر', lbl: { ar: 'الاتصال', en: 'Security' } },
            { val: '24/7', lbl: { ar: 'مراقبة', en: 'Monitoring' } }
          ],
          sections: [
            { title: { ar: 'نظرة عامة', en: 'Overview' }, body: { ar: 'المواقع الحكومية النائية تحتاج اتصالاً لا يمكن تعطيله أو التنصت عليه. نوفر حلولاً موثوقة وآمنة تلبي أعلى المعايير.', en: 'Remote government sites need a link that cannot be interrupted or intercepted. We provide reliable, secure solutions meeting the highest standards.' } },
            {
              title: { ar: 'المواصفات', en: 'Specifications' }, specs: [
                { lbl: { ar: 'التغطية', en: 'Coverage' }, val: { ar: '100% جغرافية', en: '100% geographic' } },
                { lbl: { ar: 'التشفير', en: 'Encryption' }, val: { ar: 'AES-256', en: 'AES-256' } },
                { lbl: { ar: 'الجاهزية', en: 'Uptime' }, val: { ar: '99.9%', en: '99.9%' } }
              ]
            },
            {
              title: { ar: 'المزايا', en: 'Features' }, features: [
                { ic: 'bi-shield-lock-fill', t: { ar: 'روابط مشفرة', en: 'Encrypted Links' }, d: { ar: 'AES-256', en: 'AES-256' } },
                { ic: 'bi-clock-history', t: { ar: 'نشر سريع', en: 'Rapid Deploy' }, d: { ar: 'خلال ساعات', en: 'Within hours' } }
              ]
            },
            {
              title: { ar: 'الأسئلة الشائعة', en: 'FAQ' }, faqs: [
                { q: { ar: 'هل الاتصال آمن؟', en: 'Is the link secure?' }, a: { ar: 'نعم، تشفير AES-256 من الطرفين.', en: 'Yes, end-to-end AES-256.' } }
              ]
            }
          ],
          related: ['industry:humanitarian', 'industry:media', 'industry:energy']
        },

        'industry:humanitarian': {
          type: 'industry',
          typeLabel: { ar: 'قطاع', en: 'Industry' },
          category: { ar: 'إنساني', en: 'Humanitarian' },
          title: { ar: 'الحلول الإنسانية', en: 'Humanitarian Solutions' },
          subtitle: { ar: 'اتصالات قابلة للنشر السريع لفرق الميدان.', en: 'Rapidly deployable connectivity for field teams.' },
          cover: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1000&h=750&fit=crop&auto=format',
          coverFit: 'cover',
          stats: [
            { val: '24 ساعة', lbl: { ar: 'النشر', en: 'Deployment' } },
            { val: '30+', lbl: { ar: 'دولة', en: 'Countries' } },
            { val: 'متنقل', lbl: { ar: 'الحمل', en: 'Portable' } },
            { val: '24/7', lbl: { ar: 'دعم', en: 'Support' } }
          ],
          sections: [
            { title: { ar: 'نظرة عامة', en: 'Overview' }, body: { ar: 'نوفر للفرق الميدانية اتصالات صوتية وبيانات عاجلة خلال ساعات من وصولها للمنطقة، عبر محطات محمولة.', en: 'We provide field teams with urgent voice and data connectivity within hours of arrival via portable terminals.' } },
            {
              title: { ar: 'المواصفات', en: 'Specifications' }, specs: [
                { lbl: { ar: 'النشر', en: 'Deployment' }, val: { ar: '< 24 ساعة', en: '< 24 hours' } },
                { lbl: { ar: 'الدول', en: 'Countries' }, val: { ar: '30+', en: '30+' } },
                { lbl: { ar: 'الطاقة', en: 'Power' }, val: { ar: 'شمسي + بطارية', en: 'Solar + battery' } }
              ]
            },
            {
              title: { ar: 'المزايا', en: 'Features' }, features: [
                { ic: 'bi-lightning-fill', t: { ar: 'نشر سريع', en: 'Rapid Deployment' }, d: { ar: 'خلال ساعات', en: 'Within hours' } },
                { ic: 'bi-sun-fill', t: { ar: 'طاقة شمسية', en: 'Solar Powered' }, d: { ar: 'بدون كهرباء', en: 'No grid needed' } }
              ]
            },
            {
              title: { ar: 'الأسئلة الشائعة', en: 'FAQ' }, faqs: [
                { q: { ar: 'ما مدة التجهيز؟', en: 'Setup time?' }, a: { ar: 'من 6 إلى 24 ساعة.', en: '6 to 24 hours.' } }
              ]
            }
          ],
          related: ['industry:government', 'industry:media', 'industry:energy']
        },

        'industry:media': {
          type: 'industry',
          typeLabel: { ar: 'قطاع', en: 'Industry' },
          category: { ar: 'إعلام', en: 'Media' },
          title: { ar: 'حلول الإعلام', en: 'Media Solutions' },
          subtitle: { ar: 'أنظمة البث المباشر وSNG للقنوات الإخبارية.', en: 'Live broadcasting and SNG systems for broadcasters.' },
          cover: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?w=1000&h=750&fit=crop&auto=format',
          coverFit: 'cover',
          stats: [
            { val: 'Live', lbl: { ar: 'البث', en: 'Broadcast' } },
            { val: 'HD', lbl: { ar: 'الجودة', en: 'Quality' } },
            { val: 'SNG', lbl: { ar: 'النوع', en: 'Type' } },
            { val: 'Mobile', lbl: { ar: 'التنقل', en: 'Mobility' } }
          ],
          sections: [
            { title: { ar: 'نظرة عامة', en: 'Overview' }, body: { ar: 'أنظمة البث المباشر وSNG للقنوات الإخبارية أثناء التنقل، مع ضمان جودة البث من أي موقع.', en: 'Live broadcasting and SNG systems for broadcasters on the move, ensuring broadcast quality from any location.' } },
            {
              title: { ar: 'المواصفات', en: 'Specifications' }, specs: [
                { lbl: { ar: 'النوع', en: 'Type' }, val: { ar: 'Live + SNG', en: 'Live + SNG' } },
                { lbl: { ar: 'الجودة', en: 'Quality' }, val: { ar: 'HD / 4K', en: 'HD / 4K' } },
                { lbl: { ar: 'الإعداد', en: 'Setup' }, val: { ar: 'دقائق', en: 'Minutes' } }
              ]
            },
            {
              title: { ar: 'المزايا', en: 'Features' }, features: [
                { ic: 'bi-broadcast', t: { ar: 'بث مباشر', en: 'Live Broadcast' }, d: { ar: 'من أي موقع', en: 'From any location' } },
                { ic: 'bi-camera-video-fill', t: { ar: 'جودة HD/4K', en: 'HD/4K Quality' }, d: { ar: 'لبث احترافي', en: 'Professional feed' } }
              ]
            },
            {
              title: { ar: 'الأسئلة الشائعة', en: 'FAQ' }, faqs: [
                { q: { ar: 'هل تدعمون 4K؟', en: 'Do you support 4K?' }, a: { ar: 'نعم، في معظم الباقات.', en: 'Yes, in most packages.' } }
              ]
            }
          ],
          related: ['industry:government', 'industry:humanitarian', 'industry:energy']
        },

        'industry:energy': {
          type: 'industry',
          typeLabel: { ar: 'قطاع', en: 'Industry' },
          category: { ar: 'طاقة', en: 'Energy' },
          title: { ar: 'حلول الطاقة', en: 'Energy Solutions' },
          subtitle: { ar: 'خدمات فضائية ثابتة ومتنقلة، SCADA/M2M وتكامل الأنظمة لمواقع الطاقة النائية.', en: 'Fixed and mobile satellite services, SCADA/M2M and systems integration for remote energy sites.' },
          cover: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1000&h=750&fit=crop&auto=format',
          coverFit: 'cover',
          stats: [
            { val: 'SCADA', lbl: { ar: 'التحكم', en: 'Control' } },
            { val: 'M2M', lbl: { ar: 'الاستشعار', en: 'Sensing' } },
            { val: '24/7', lbl: { ar: 'المراقبة', en: 'Monitoring' } },
            { val: 'Fixed', lbl: { ar: 'النوع', en: 'Type' } }
          ],
          sections: [
            { title: { ar: 'نظرة عامة', en: 'Overview' }, body: { ar: 'مواقع الطاقة النائية — من حقول النفط إلى منصات الغاز والمصافي — تحتاج اتصالاً لا ينقطع. نوفر حلول SCADA/M2M وأنظمة تكامل لتشغيل أتمتة كاملة.', en: 'Remote energy sites — from oil fields to gas platforms and refineries — need uninterrupted connectivity. We provide SCADA/M2M solutions and integration systems for full automation.' } },
            {
              title: { ar: 'المواصفات', en: 'Specifications' }, specs: [
                { lbl: { ar: 'التحكم', en: 'Control' }, val: { ar: 'SCADA / M2M', en: 'SCADA / M2M' } },
                { lbl: { ar: 'المراقبة', en: 'Monitoring' }, val: { ar: '24/7 عن بعد', en: '24/7 Remote' } },
                { lbl: { ar: 'النطاق', en: 'Band' }, val: { ar: 'Ku / C-Band', en: 'Ku / C-Band' } },
                { lbl: { ar: 'الطاقة', en: 'Power' }, val: { ar: 'شمسي / بطاريات', en: 'Solar / Batteries' } }
              ]
            },
            {
              title: { ar: 'المزايا', en: 'Features' }, features: [
                { ic: 'bi-cpu-fill', t: { ar: 'أتمتة كاملة', en: 'Full Automation' }, d: { ar: 'SCADA متكامل', en: 'Integrated SCADA' } },
                { ic: 'bi-battery-charging', t: { ar: 'طاقة مستقلة', en: 'Standalone Power' }, d: { ar: 'شمسية', en: 'Solar' } },
                { ic: 'bi-graph-up', t: { ar: 'قياس عن بعد', en: 'Telemetry' }, d: { ar: 'قراءات دورية', en: 'Periodic readings' } },
                { ic: 'bi-shield-check', t: { ar: 'بنية تحتية حيوية', en: 'Critical Infrastructure' }, d: { ar: 'موثوقية عالية', en: 'High reliability' } }
              ]
            },
            {
              title: { ar: 'حالات الاستخدام', en: 'Use Cases' }, features: [
                { ic: 'bi-fuel-pump', t: { ar: 'حقول النفط', en: 'Oil Fields' }, d: { ar: 'آبار ومنصات', en: 'Wells & rigs' } },
                { ic: 'bi-fire', t: { ar: 'منصات الغاز', en: 'Gas Platforms' }, d: { ar: 'بحرية وبرية', en: 'Offshore & onshore' } },
                { ic: 'bi-lightning-charge', t: { ar: 'محطات الكهرباء', en: 'Power Plants' }, d: { ar: 'شبكات توزيع', en: 'Distribution grids' } },
                { ic: 'bi-geo-alt-fill', t: { ar: 'أنابيب النقل', en: 'Pipelines' }, d: { ar: 'مراقبة مستمرة', en: 'Continuous monitoring' } }
              ]
            },
            {
              title: { ar: 'الأسئلة الشائعة', en: 'FAQ' }, faqs: [
                { q: { ar: 'هل تدعمون SCADA؟', en: 'Do you support SCADA?' }, a: { ar: 'نعم، مع تكامل كامل مع أنظمة العميل.', en: 'Yes, with full integration.' } },
                { q: { ar: 'ما مصدر الطاقة؟', en: 'Power source?' }, a: { ar: 'شمسي أو بطاريات أو هجين.', en: 'Solar, battery, or hybrid.' } }
              ]
            }
          ],
          related: ['industry:government', 'industry:enterprise', 'industry:maritime']
        },

        'industry:enterprise': {
          type: 'industry',
          typeLabel: { ar: 'قطاع', en: 'Industry' },
          category: { ar: 'مؤسسات', en: 'Enterprise' },
          title: { ar: 'حلول المؤسسات', en: 'Enterprise Solutions' },
          subtitle: { ar: 'أبقِ مكاتبك النائية متصلة بالبريد والمكالمات والتطبيقات الحيوية في أي مكان.', en: 'Keep remote offices connected to email, calls and critical business applications — anywhere.' },
          cover: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1000&h=750&fit=crop&auto=format',
          coverFit: 'cover',
          stats: [
            { val: 'VPN', lbl: { ar: 'الربط', en: 'Linking' } },
            { val: 'QoS', lbl: { ar: 'الأداء', en: 'Performance' } },
            { val: 'Multi-site', lbl: { ar: 'التغطية', en: 'Coverage' } },
            { val: '24/7', lbl: { ar: 'الدعم', en: 'Support' } }
          ],
          sections: [
            { title: { ar: 'نظرة عامة', en: 'Overview' }, body: { ar: 'المؤسسات ذات الفروع الموزعة تحتاج ربطاً مستقراً بين المكاتب، والوصول إلى التطبيقات السحابية، ومكالمات VoIP واضحة — نوفر ذلك عبر روابط فضائية موثوقة.', en: 'Enterprises with distributed branches need stable inter-office linking, cloud app access, and clear VoIP calls — we deliver that via reliable satellite links.' } },
            {
              title: { ar: 'المواصفات', en: 'Specifications' }, specs: [
                { lbl: { ar: 'الربط', en: 'Linking' }, val: { ar: 'MPLS / VPN', en: 'MPLS / VPN' } },
                { lbl: { ar: 'الأداء', en: 'Performance' }, val: { ar: 'QoS / CoS', en: 'QoS / CoS' } },
                { lbl: { ar: 'التغطية', en: 'Coverage' }, val: { ar: 'متعدد المواقع', en: 'Multi-site' } },
                { lbl: { ar: 'النسخ الاحتياطي', en: 'Backup' }, val: { ar: 'Automatic Failover', en: 'Automatic Failover' } }
              ]
            },
            {
              title: { ar: 'المزايا', en: 'Features' }, features: [
                { ic: 'bi-diagram-3-fill', t: { ar: 'ربط الفروع', en: 'Branch Linking' }, d: { ar: 'MPLS آمن', en: 'Secure MPLS' } },
                { ic: 'bi-cloud-check-fill', t: { ar: 'تطبيقات سحابية', en: 'Cloud Apps' }, d: { ar: 'O365 / Salesforce', en: 'O365 / Salesforce' } },
                { ic: 'bi-telephone-fill', t: { ar: 'VoIP واضح', en: 'Clear VoIP' }, d: { ar: 'SIP Trunk', en: 'SIP Trunk' } },
                { ic: 'bi-arrow-repeat', t: { ar: 'نسخ احتياطي', en: 'Failover' }, d: { ar: 'تلقائي', en: 'Automatic' } }
              ]
            },
            {
              title: { ar: 'حالات الاستخدام', en: 'Use Cases' }, features: [
                { ic: 'bi-bank', t: { ar: 'البنوك', en: 'Banks' }, d: { ar: 'فروع وصرافات', en: 'Branches & ATMs' } },
                { ic: 'bi-shop', t: { ar: 'التجزئة', en: 'Retail' }, d: { ar: 'نقاط البيع', en: 'POS networks' } },
                { ic: 'bi-building', t: { ar: 'الشركات', en: 'Corporations' }, d: { ar: 'مكاتب موزعة', en: 'Distributed offices' } },
                { ic: 'bi-mortarboard-fill', t: { ar: 'التعليم', en: 'Education' }, d: { ar: 'فروع جامعية', en: 'University branches' } }
              ]
            },
            {
              title: { ar: 'الأسئلة الشائعة', en: 'FAQ' }, faqs: [
                { q: { ar: 'هل يتكامل مع أنظمتنا؟', en: 'Integrates with our systems?' }, a: { ar: 'نعم، مع أي بنية شبكة قياسية.', en: 'Yes, with any standard network.' } },
                { q: { ar: 'ما زمن التأخير؟', en: 'Latency?' }, a: { ar: 'منخفض عبر الأقمار الحديثة.', en: 'Low via modern satellites.' } }
              ]
            }
          ],
          related: ['industry:government', 'industry:energy', 'industry:maritime']
        },

        'industry:maritime': {
          type: 'industry',
          typeLabel: { ar: 'قطاع', en: 'Industry' },
          category: { ar: 'بحري', en: 'Maritime' },
          title: { ar: 'الحلول البحرية', en: 'Maritime Solutions' },
          subtitle: { ar: 'اتصالات صوت وبيانات موثوقة واقتصادية على متن السفن في أي محيط.', en: 'Reliable, cost-effective voice and data connectivity on board, on any ocean.' },
          cover: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1000&h=750&fit=crop&auto=format',
          coverFit: 'cover',
          stats: [
            { val: 'Global', lbl: { ar: 'التغطية', en: 'Coverage' } },
            { val: 'Ku/Ka', lbl: { ar: 'النطاق', en: 'Band' } },
            { val: 'Stabilized', lbl: { ar: 'الهوائي', en: 'Antenna' } },
            { val: '24/7', lbl: { ar: 'الدعم', en: 'Support' } }
          ],
          sections: [
            { title: { ar: 'نظرة عامة', en: 'Overview' }, body: { ar: 'السفن التجارية، أساطيل الصيد، والمنصات البحرية تحتاج اتصالاً مستقراً في عرض البحر. نوفر أنظمة Marine VSAT مع هوائيات مثبتة ضد الحركة والاهتزاز.', en: 'Commercial vessels, fishing fleets, and offshore platforms need stable connectivity at sea. We provide Marine VSAT systems with motion-stabilized antennas.' } },
            {
              title: { ar: 'المواصفات', en: 'Specifications' }, specs: [
                { lbl: { ar: 'الهوائي', en: 'Antenna' }, val: { ar: 'Stabilized', en: 'Stabilized' } },
                { lbl: { ar: 'النطاق', en: 'Band' }, val: { ar: 'Ku / Ka', en: 'Ku / Ka' } },
                { lbl: { ar: 'التغطية', en: 'Coverage' }, val: { ar: 'عالمية', en: 'Global' } },
                { lbl: { ar: 'المقاومة', en: 'Resistance' }, val: { ar: 'IP66 / بحري', en: 'IP66 / Marine' } }
              ]
            },
            {
              title: { ar: 'المزايا', en: 'Features' }, features: [
                { ic: 'bi-water', t: { ar: 'مثبت ضد الحركة', en: 'Motion Stabilized' }, d: { ar: 'تتبع ديناميكي', en: 'Dynamic tracking' } },
                { ic: 'bi-globe', t: { ar: 'تغطية عالمية', en: 'Global Coverage' }, d: { ar: 'أي محيط', en: 'Any ocean' } },
                { ic: 'bi-telephone-fill', t: { ar: 'VoIP للطاقم', en: 'Crew VoIP' }, d: { ar: 'مكالمات اقتصادية', en: 'Cost-effective' } },
                { ic: 'bi-graph-up', t: { ar: 'تتبع الأسطول', en: 'Fleet Tracking' }, d: { ar: 'على الخريطة', en: 'On map' } }
              ]
            },
            {
              title: { ar: 'حالات الاستخدام', en: 'Use Cases' }, features: [
                { ic: 'bi-box-seam', t: { ar: 'الشحن التجاري', en: 'Cargo Shipping' }, d: { ar: 'أسطول تجاري', en: 'Commercial fleet' } },
                { ic: 'bi-water', t: { ar: 'الصيد', en: 'Fishing' }, d: { ar: 'أسطول صيد', en: 'Fishing fleet' } },
                { ic: 'bi-fuel-pump', t: { ar: 'المنصات البحرية', en: 'Offshore Rigs' }, d: { ar: 'نفط وغاز', en: 'Oil & gas' } },
                { ic: 'bi-people-fill', t: { ar: 'اليخوت', en: 'Yachts' }, d: { ar: 'ترفيهية', en: 'Leisure' } }
              ]
            },
            {
              title: { ar: 'الأسئلة الشائعة', en: 'FAQ' }, faqs: [
                { q: { ar: 'هل يعمل أثناء العواصف؟', en: 'Works in storms?' }, a: { ar: 'نعم، مصمم للظروف القاسية.', en: 'Yes, built for harsh conditions.' } },
                { q: { ar: 'ما العائد؟', en: 'ROI?' }, a: { ar: 'تخفيض تكاليف الاتصال بنسبة 40-60%.', en: '40-60% call cost reduction.' } }
              ]
            }
          ],
          related: ['industry:energy', 'industry:government', 'industry:enterprise']
        },

      };