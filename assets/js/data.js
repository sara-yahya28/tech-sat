/*TECH-SAT — Central Data (bilingual)*/
const DATA = {

  stats: [
    { icon: 'bi-people', value: 500, label: 'عميل موثوق', suffix: '+' },
    { icon: 'bi-globe', value: 15, label: 'دولة', suffix: '' },
    { icon: 'bi-broadcast', value: 200, label: 'مشروع منجز', suffix: '+' },
    { icon: 'bi-trophy', value: 10, label: 'سنوات خبرة', suffix: '+' },
  ],

  packages: [
    {
      id: 'gov',
      title:    { ar: 'باكيج القطاع العام', en: 'Public Sector Package' },
      category: { ar: 'الأكثر طلبًا', en: 'Most Requested' },
      image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800',
      short:    { ar: 'حلول اتصالات آمنة للجهات الحكومية والمنظمات الإنسانية.', en: 'Secure communication solutions for government and humanitarian organizations.' },
      features: [
        { ar: 'VSAT مشفر', en: 'Encrypted VSAT' },
        { ar: 'اتصالات آمنة', en: 'Secure communications' },
        { ar: 'صوت وبيانات', en: 'Voice & data' },
        { ar: 'نشر سريع', en: 'Rapid deployment' },
        { ar: 'دعم 24/7', en: '24/7 support' }
      ],
      audience: { ar: 'وزارات، سفارات، UN، منظمات الإغاثة', en: 'Ministries, embassies, UN, relief organizations' }
    },
    {
      id: 'field',
      title:    { ar: 'باكيج العمليات الميدانية', en: 'Field Operations Package' },
      image: 'https://images.unsplash.com/photo-1505705694340-019e1e335916?w=800',
      short:    { ar: 'اتصالات موثوقة في المواقع النائية والظروف الصعبة.', en: 'Reliable communications in remote locations and harsh conditions.' },
      features: [
        { ar: 'Marine VSAT', en: 'Marine VSAT' },
        { ar: 'أجهزة محمولة', en: 'Portable devices' },
        { ar: 'نطاق عالي', en: 'High bandwidth' },
        { ar: 'خطوط احتياطية', en: 'Backup lines' },
        { ar: 'دعم ميداني', en: 'Field support' }
      ],
      audience: { ar: 'شركات الشحن، منصات النفط، القنوات التلفزيونية', en: 'Shipping companies, oil platforms, TV channels' }
    },
    {
      id: 'ent',
      title:    { ar: 'باكيج المؤسسات', en: 'Enterprise Package' },
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
      short:    { ar: 'حلول شبكات مُدارة للشركات متعددة الفروع.', en: 'Managed network solutions for multi-branch enterprises.' },
      features: [
        { ar: 'شبكة مُدارة', en: 'Managed network' },
        { ar: 'VPN', en: 'VPN' },
        { ar: 'ضمان SLA', en: 'SLA guarantee' },
        { ar: 'مراقبة 24/7', en: '24/7 monitoring' },
        { ar: 'تقارير أداء', en: 'Performance reports' }
      ],
      audience: { ar: 'بنوك، شركات اتصالات، مؤسسات كبرى', en: 'Banks, telecom companies, large enterprises' }
    }
  ],

  services: [
    {
      id: 'vsat',
      title: { ar: 'حلول VSAT', en: 'VSAT Solutions' },
      image: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?w=800',
      short: { ar: 'اتصال عالي السرعة في أي مكان.', en: 'High-speed connectivity anywhere.' },
      features: [
        { ar: 'سرعة 100 Mbps', en: 'Up to 100 Mbps' },
        { ar: 'تغطية Ku/C-Band', en: 'Ku/C-Band coverage' },
        { ar: 'تركيب سريع', en: 'Fast installation' }
      ],
      audience: { ar: 'حكومة • بحري • طاقة', en: 'Government • Maritime • Energy' }
    },
    {
      id: 'voice',
      title: { ar: 'صوت وبيانات', en: 'Voice & Data' },
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800',
      short: { ar: 'خدمات شاملة للاتصال.', en: 'Complete communication services.' },
      features: [
        { ar: 'VoIP', en: 'VoIP' },
        { ar: 'فيديو مؤتمرات', en: 'Video conferencing' },
        { ar: 'بيانات آمنة', en: 'Secure data' }
      ],
      audience: { ar: 'مؤسسات • بنوك', en: 'Enterprises • Banks' }
    },
    {
      id: 'integr',
      title: { ar: 'تكامل أنظمة', en: 'System Integration' },
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
      short: { ar: 'حلول من البداية للنهاية.', en: 'End-to-end solutions.' },
      features: [
        { ar: 'تصميم', en: 'Design' },
        { ar: 'تركيب', en: 'Installation' },
        { ar: 'صيانة', en: 'Maintenance' }
      ],
      audience: { ar: 'الكل', en: 'Everyone' }
    },
    {
      id: 'field',
      title: { ar: 'خدمات ميدانية', en: 'Field Services' },
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800',
      short: { ar: 'تركيب وصيانة في الموقع.', en: 'On-site installation & maintenance.' },
      features: [
        { ar: 'فرق متخصصة', en: 'Specialized teams' },
        { ar: 'استجابة سريعة', en: 'Fast response' },
        { ar: 'تغطية شاملة', en: 'Full coverage' }
      ],
      audience: { ar: 'طاقة • إنساني', en: 'Energy • Humanitarian' }
    },
    {
      id: 'net',
      title: { ar: 'شبكات مُدارة', en: 'Managed Networks' },
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
      short: { ar: 'إدارة كاملة للشبكة.', en: 'Full network management.' },
      features: [
        { ar: 'مراقبة 24/7', en: '24/7 monitoring' },
        { ar: 'تقارير', en: 'Reports' },
        { ar: 'SLA', en: 'SLA' }
      ],
      audience: { ar: 'مؤسسات', en: 'Enterprises' }
    },
    {
      id: 'support',
      title: { ar: 'دعم فني', en: 'Technical Support' },
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800',
      short: { ar: 'دعم 24/7.', en: '24/7 support.' },
      features: [
        { ar: 'استجابة فورية', en: 'Instant response' },
        { ar: 'دعم عن بعد', en: 'Remote support' },
        { ar: 'دعم ميداني', en: 'Field support' }
      ],
      audience: { ar: 'الكل', en: 'Everyone' }
    }
  ],

  products: [
    {
      id: 'vsat-portable',
      category: { ar: 'محطة', en: 'Terminal' },
      title: { ar: 'محطة VSAT محمولة', en: 'Portable VSAT Terminal' },
      image: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?w=800',
      short: { ar: 'محطة أرضية مع اكتساب تلقائي للقمر الصناعي وهيكل مقاوم للظروف القاسية، مثالية للبعثات الميدانية.', en: 'Ground terminal with auto satellite acquisition and ruggedized housing, ideal for field missions.' },
      specs: [
        { ar: 'اكتساب تلقائي', en: 'Auto acquisition' },
        { ar: 'هيكل مقاوم', en: 'Rugged housing' },
        { ar: 'تركيب سريع', en: 'Fast setup' }
      ]
    },
    {
      id: 'ku-antenna',
      category: { ar: 'هوائي', en: 'Antenna' },
      title: { ar: 'هوائي Ku-Band', en: 'Ku-Band Antenna' },
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
      short: { ar: 'هوائي خفيف الوزن مصمم للتركيب السريع في المواقع النائية والبيئات التكتيكية.', en: 'Lightweight antenna designed for rapid deployment in remote locations and tactical environments.' },
      specs: [
        { ar: 'خفيف الوزن', en: 'Lightweight' },
        { ar: 'تركيب سريع', en: 'Rapid setup' },
        { ar: 'Ku-Band', en: 'Ku-Band' }
      ]
    },
    {
      id: 'managed-modem',
      category: { ar: 'مودم', en: 'Modem' },
      title: { ar: 'مودم فضائي مُدار', en: 'Managed Satellite Modem' },
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800',
      short: { ar: 'مودم بمعايير مؤسسية يدعم النطاق المزدوج Ku/Ka، مع مراقبة عن بعد ودعم فني متكامل.', en: 'Enterprise-grade modem with dual Ku/Ka support, remote monitoring, and full technical support.' },
      specs: [
        { ar: 'Ku/Ka مزدوج', en: 'Dual Ku/Ka' },
        { ar: 'مراقبة عن بعد', en: 'Remote monitoring' },
        { ar: 'دعم مؤسسي', en: 'Enterprise support' }
      ]
    },
    {
      id: 'rf-cables',
      category: { ar: 'ملحق', en: 'Accessory' },
      title: { ar: 'طقم كابلات RF', en: 'RF Cable Kit' },
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
      short: { ar: 'كابلات محورية منخفضة الفقدان مع موصلات مقاومة للماء والعوامل الجوية.', en: 'Low-loss coaxial cables with weather-resistant connectors.' },
      specs: [
        { ar: 'فقدان منخفض', en: 'Low loss' },
        { ar: 'مقاوم للماء', en: 'Water-resistant' },
        { ar: 'مقاوم للعوامل الجوية', en: 'Weather-resistant' }
      ]
    },
    {
      id: 'manpack',
      category: { ar: 'محطة', en: 'Terminal' },
      title: { ar: 'محطة Manpack', en: 'Manpack Terminal' },
      image: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?w=800',
      short: { ar: 'محطة فضائية بحقيبة ظهر للعمليات الميدانية التكتيكية، مع تركيب فوري أثناء الحركة.', en: 'Backpack satellite terminal for tactical field operations, with instant on-the-move deployment.' },
      specs: [
        { ar: 'حقيبة ظهر', en: 'Backpack' },
        { ar: 'نشر فوري', en: 'Instant deploy' },
        { ar: 'عمليات تكتيكية', en: 'Tactical ops' }
      ]
    },
    {
      id: 'vehicle-antenna',
      category: { ar: 'هوائي', en: 'Antenna' },
      title: { ar: 'هوائي مثبت على المركبات', en: 'Vehicle-Mounted Antenna' },
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
      short: { ar: 'هوائي بتتبع تلقائي للمركبات المتحركة والمنصات البحرية، مع ثبات عالي أثناء الحركة.', en: 'Auto-tracking antenna for moving vehicles and maritime platforms, with high stability on the move.' },
      specs: [
        { ar: 'تتبع تلقائي', en: 'Auto-tracking' },
        { ar: 'ثبات عالي', en: 'High stability' },
        { ar: 'للمركبات والبحر', en: 'Vehicle & marine' }
      ]
    },
    {
      id: 'iot-modem',
      category: { ar: 'مودم', en: 'Modem' },
      title: { ar: 'مودم إنترنت الأشياء IoT', en: 'IoT Satellite Modem' },
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800',
      short: { ar: 'مودم فضائي منخفض الطاقة لأجهزة الاستشعار النائية وأنظمة القياس عن بعد.', en: 'Low-power satellite modem for remote sensors and telemetry systems.' },
      specs: [
        { ar: 'طاقة منخفضة', en: 'Low power' },
        { ar: 'IoT جاهز', en: 'IoT-ready' },
        { ar: 'قياس عن بعد', en: 'Telemetry' }
      ]
    },
    {
      id: 'psu',
      category: { ar: 'ملحق', en: 'Accessory' },
      title: { ar: 'وحدة إمداد طاقة PSU', en: 'PSU Power Unit' },
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
      short: { ar: 'وحدة إمداد طاقة احتياطية بمدى جهد واسع، مصممة للعمليات الميدانية الطويلة.', en: 'Backup power supply unit with wide voltage range, designed for extended field operations.' },
      specs: [
        { ar: 'مدى جهد واسع', en: 'Wide voltage' },
        { ar: 'احتياطي', en: 'Backup' },
        { ar: 'للميدان', en: 'Field-ready' }
      ]
    },
    {
      id: 'deploy-case',
      category: { ar: 'ملحق', en: 'Accessory' },
      title: { ar: 'حقيبة نقل Deploy Case', en: 'Deploy Transport Case' },
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
      short: { ar: 'حقيبة نقل مقاومة للصدمات مع حشوات فوم مخصصة للمحطة والهوائي معًا.', en: 'Shock-resistant transport case with custom foam padding for terminal and antenna together.' },
      specs: [
        { ar: 'مقاوم للصدمات', en: 'Shock-resistant' },
        { ar: 'فوم مخصص', en: 'Custom foam' },
        { ar: 'للنقل', en: 'Transport' }
      ]
    }
  ],

  industries: [
    { id: 'gov', title: 'الحكومة', icon: 'bi-building', short: 'اتصالات آمنة للجهات السيادية.' },
    { id: 'humanitarian', title: 'الإنساني', icon: 'bi-heart', short: 'دعم المنظمات الإنسانية في المناطق النائية.' },
    { id: 'maritime', title: 'البحري', icon: 'bi-water', short: 'اتصالات للسفن والموانئ.' },
    { id: 'energy', title: 'الطاقة', icon: 'bi-lightning', short: 'اتصالات لمواقع النفط والغاز.' },
    { id: 'media', title: 'الإعلام', icon: 'bi-broadcast', short: 'بث مباشر ونقل بيانات.' },
    { id: 'enterprise', title: 'المؤسسات', icon: 'bi-briefcase', short: 'شبكات مُدارة للشركات.' },
    { id: 'telecom', title: 'الاتصالات', icon: 'bi-tower', short: 'تكامل مع مشغلي الاتصالات.' },
  ],

  contact: {
    phone: '+967 2 396 056',
    email: 'info@tech-sat.com',
    address: 'عدن، اليمن'
  }
};