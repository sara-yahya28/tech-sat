/* TECH-SAT — Central Data */

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
            title: 'باكيج القطاع العام',
            category: 'الأكثر طلبًا',
            image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800',
            short: 'حلول اتصالات آمنة للجهات الحكومية والمنظمات الإنسانية.',
            features: ['VSAT مشفر', 'اتصالات آمنة', 'صوت وبيانات', 'نشر سريع', 'دعم 24/7'],
            audience: 'وزارات، سفارات، UN، منظمات الإغاثة',
        },
        {
            id: 'field',
            title: 'باكيج العمليات الميدانية',
            image: 'https://images.unsplash.com/photo-1505705694340-019e1e335916?w=800',
            short: 'اتصالات موثوقة في المواقع النائية والظروف الصعبة.',
            features: ['Marine VSAT', 'أجهزة محمولة', 'نطاق عالي', 'خطوط احتياطية', 'دعم ميداني'],
            audience: 'شركات الشحن، منصات النفط، القنوات التلفزيونية',
        },
        {
            id: 'ent',
            title: 'باكيج المؤسسات',
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
            short: 'حلول شبكات مُدارة للشركات متعددة الفروع.',
            features: ['شبكة مُدارة', 'VPN', 'ضمان SLA', 'مراقبة 24/7', 'تقارير أداء'],
            audience: 'بنوك، شركات اتصالات، مؤسسات كبرى',
        },
    ],

    services: [
        { id: 'vsat', title: 'حلول VSAT', image: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?w=800', short: 'اتصال عالي السرعة في أي مكان.', features: ['سرعة 100 Mbps', 'تغطية Ku/C-Band', 'تركيب سريع'], audience: 'حكومة • بحري • طاقة' },
        { id: 'voice', title: 'صوت وبيانات', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800', short: 'خدمات شاملة للاتصال.', features: ['VoIP', 'فيديو مؤتمرات', 'بيانات آمنة'], audience: 'مؤسسات • بنوك' },
        { id: 'integr', title: 'تكامل أنظمة', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800', short: 'حلول من البداية للنهاية.', features: ['تصميم', 'تركيب', 'صيانة'], audience: 'الكل' },
        { id: 'field', title: 'خدمات ميدانية', image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800', short: 'تركيب وصيانة في الموقع.', features: ['فرق متخصصة', 'استجابة سريعة', 'تغطية شاملة'], audience: 'طاقة • إنساني' },
        { id: 'net', title: 'شبكات مُدارة', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800', short: 'إدارة كاملة للشبكة.', features: ['مراقبة 24/7', 'تقارير', 'SLA'], audience: 'مؤسسات' },
        { id: 'support', title: 'دعم فني', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800', short: 'دعم 24/7.', features: ['استجابة فورية', 'دعم عن بعد', 'دعم ميداني'], audience: 'الكل' },
    ],

    products: [
        { id: 'vsat-term', category: 'vsat', title: 'VSAT Terminal', image: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?w=800', short: 'محطة أرضية عالية الأداء.', specs: ['Ku-Band', '20/5 Mbps', '1.2m'] },
        { id: 'sat-phone', category: 'phones', title: 'Satellite Phone', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800', short: 'هاتف فضائي محمول.', specs: ['تغطية عالمية', 'بطارية 8h', 'GPS'] },
        { id: 'broadband', category: 'vsat', title: 'Broadband Kit', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800', short: 'مجموعة الإنترنت الفضائي.', specs: ['سهل التركيب', 'سرعة عالية'] },
        { id: 'marine', category: 'vsat', title: 'Marine VSAT', image: 'https://images.unsplash.com/photo-1505705694340-019e1e335916?w=800', short: 'اتصالات بحرية.', specs: ['مقاوم للماء', 'تتبع تلقائي'] },
        { id: 'portable', category: 'vsat', title: 'Portable Terminal', image: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?w=800', short: 'محطة محمولة.', specs: ['حقيبة ظهر', 'وزن 8kg'] },
        { id: 'antenna', category: 'antennas', title: 'Fixed Antenna', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800', short: 'هوائي ثابت.', specs: ['قطر 1.8m', 'مقاوم للرياح'] },
        { id: 'modem', category: 'modems', title: 'Satellite Modem', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800', short: 'مودم فضائي.', specs: ['Ku/Ka Band', '2W'] },
        { id: 'router', category: 'modems', title: 'Network Router', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800', short: 'راوتر شبكات.', specs: ['4 منافذ', 'WiFi 6'] },
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

    reviews: [
        { quote: 'فريق Tech-Sat قدّم لنا حلاً متكاملاً في وقت قياسي. الاتصال مستقر 100% في أصعب الظروف.', name: 'أحمد الشامي', role: 'مدير تقني — وزارة الاتصالات', img: 'https://i.pravatar.cc/150?img=12', size: 'large' },
        { img: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?w=600', size: 'img' },
        { quote: 'خدمة VSAT البحرية نقلت عملياتنا لمرحلة جديدة.', name: 'خالد العمري', role: 'شركة الشحن الوطنية', img: 'https://i.pravatar.cc/150?img=33' },
        { quote: 'الدعم الفني 24/7 أنقذ مشروعنا في لحظة حرجة.', name: 'سارة المقطري', role: 'منظمة إنسانية دولية', img: 'https://i.pravatar.cc/150?img=45' },
        { quote: 'منذ أن تعاملنا مع Tech-Sat، اختفت مشاكل الاتصال تمامًا. احترافية نادرة في المنطقة.', name: 'محمد الحداد', role: 'الرئيس التنفيذي — شركة طاقة', img: 'https://i.pravatar.cc/150?img=52', size: 'wide' },
    ],

    faqs: [
        { q: 'ما هي خدمات Tech-Sat الأساسية؟', a: 'نقدم حلول VSAT، صوت وبيانات، تكامل أنظمة، خدمات ميدانية، شبكات مُدارة، ودعم فني.' },
        { q: 'هل تغطي خدماتكم جميع مناطق اليمن؟', a: 'نعم، تغطيتنا تشمل كل المحافظات اليمنية إضافة إلى دول الجوار.' },
        { q: 'كم يستغرق تركيب نظام VSAT؟', a: 'من 24 إلى 48 ساعة حسب الموقع ونوع النظام.' },
        { q: 'هل توفرون دعمًا فنيًا على مدار الساعة؟', a: 'نعم، فريق الدعم متاح 24/7/365 عبر الهاتف والدردشة.' },
        { q: 'كيف أحصل على عرض سعر؟', a: 'تواصل معنا عبر النموذج أو الهاتف، وسنرسل لك عرضًا خلال 24 ساعة.' },
    ],

    contact: {
        phone: '+967 1 XXX XXX',
        email: 'info@tech-sat.com',
        address: 'صنعاء، اليمن',
        hours: 'السبت - الخميس: 8ص - 5م',
        branches: [
            { city: 'صنعاء', role: 'المقر الرئيسي', map: '#', phone: '+967 1 XXX 001' },
            { city: 'عدن', role: 'فرع', map: '#', phone: '+967 2 XXX 002' },
            { city: 'الحديدة', role: 'فرع', map: '#', phone: '+967 3 XXX 003' },
        ],
    },
};