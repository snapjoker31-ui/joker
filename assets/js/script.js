// Translations
const translations = {
    en: {
        nav_about: "About",
        nav_expertise: "Expertise",
        nav_why_me: "Why Me",
        hero_eyebrow: "Hello, I'm",
        hero_role1: "Desktop App Developer",
        hero_role2: "Full-Stack Web Dev",
        hero_desc: "Specialized in WPF, .NET, and modern Web Technologies. Transforming ideas into reliable, high-quality, and commercially viable software solutions.",
        btn_view_work: "View My Work",
        sect_about: "About Me",
        about_p1: "I am a <strong>Desktop Application Developer</strong> specialized in WPF, and a <strong>Web Designer / Full-Stack Developer</strong>, with 3–5 years of experience in freelancing and personal project development.",
        about_p2: "I have strong experience in building desktop applications using <strong>C#, .NET Framework, and .NET Core / .NET 6+</strong>, following the MVVM architecture to create clean, scalable, and maintainable applications.",
        about_p3: "Performance and user experience are key priorities for me. I actively use Multi-Threading and Async Programming to ensure smooth and responsive applications. I also build robust management systems using SQLite and SQL Server with Entity Framework.",
        security_title: "Security Expert",
        security_desc: "I develop software licensing and protection systems, enabling the creation of commercial desktop applications with strong security against unauthorized use.",
        sect_expertise: "Technical Expertise",
        exp_desktop: "Desktop Development",
        skill_protection: "Software Protection & Licensing",
        exp_web: "Web Development",
        skill_api: "API Integration",
        skill_responsive: "Responsive Design",
        skill_uiux: "Modern UI/UX",
        sect_whyme: "What Sets Me Apart",
        feat_ui: "Professional UI Design",
        feat_logic: "Strong Programming Logic",
        feat_protect: "Advanced Protection Systems",
        feat_creative: "Creative Solutions",
        feat_perf: "High Performance",
        feat_detail: "Attention to Detail",
        footer_desc: "Ready to transform your ideas into reliable software solutions?",
        nav_projects: "Projects",
        projects_title: "My Projects",
        projects_desc: "Explore my latest work and creative solutions",
        badge_featured: "Featured Project",
        jokereye_desc: "JokerEye is a comprehensive desktop application specifically designed for Eye Clinic Management. It aims to simplify daily operations and enhance the efficiency of medical and administrative data management in a secure and professional manner.",
        jokereye_subtitle: "Eye Clinic Management System",
        jokereye_goal_title: "Project Goal",
        jokereye_goal_desc: "Providing a comprehensive solution to help ophthalmologists and clinic staff organize patient records, follow up on medical examinations, manage appointments, and generate medical reports through a modern and user-friendly interface.",
        tech_used: "Technologies Used:",
        key_features: "Key Features:",
        feature_1: "Patient Management: Full records and medical history documentation.",
        feature_2: "Examination Records: Tracking eye tests and health progress over time.",
        feature_3: "Appointment Management: Organizing reviews and reducing scheduling errors.",
        feature_4: "Medical Reports: Generating detailed reports with printing capabilities.",
        feature_5: "Secure Database: High performance and security using SQLite.",
        gallery_title: "Quick Preview",
        footer_back: "Back to Home",
        download_title: "Download Application",
        download_desc: "Download the full version of JokerEye Eye Clinic Management System",
        download_btn: "Download (Windows x64)",
        download_btn_Tow: "Download (Windows x86)",
        download_version: "Version 1.1.7",
        download_size: "Size: 52.3 MB",
        download_date: "Release Date: 2026-04-02",
        requirements_title: "System Requirements:",
        req_os: "Windows 10/11 (64-bit Or 86-bit)",
        req_ram: "2 GB RAM minimum",
        req_disk: "100 MB free disk space",
        req_dotnet: ".NET 6.0 Desktop Runtime",

        // JokerCashier
        cashier_title: "JokerCashier",
        cashier_subtitle: "Integrated POS System",
        cashier_desc: "JokerCashier is a comprehensive Point of Sale (POS) system designed to streamline business operations. It combines fast sales processing, detailed inventory management, and robust financial reporting into a modern, easy-to-use interface.",
        cashier_goal_title: "Project Goal",
        cashier_goal_desc: "To provide businesses with an all-in-one solution for managing sales, inventory, customers, and finances throughout an efficient, secure, and visually appealing desktop application.",
        cashier_feat_1: "Fast POS with barcode support and instant invoicing.",
        cashier_feat_2: "Advanced Inventory with categories and low stock alerts.",
        cashier_feat_3: "Financial Management: Expenses, Debts, and Reports.",
        cashier_feat_4: "Customer & Supplier Database Management.",
        cashier_feat_5: "Secure Login with User Permissions & Activity Log.",
        cashier_feat_6: "Modern WPF Design with Dark/Light mode support."
    },
    ar: {
        nav_about: "من أنا",
        nav_expertise: "الخبرات",
        nav_why_me: "لماذا أنا",
        hero_eyebrow: "مرحباً، أنا",
        hero_role1: "مطور تطبيقات سطح المكتب",
        hero_role2: "مطور ويب شامل",
        hero_desc: "متخصص في WPF و .NET وتقنيات الويب الحديثة. أحول الأفكار إلى حلول برمجية موثوقة وعالية الجودة وتجارية.",
        btn_view_work: "شاهد أعمالي",
        sect_about: "نبذة عني",
        about_p1: "أنا <strong>مطور تطبيقات سطح المكتب</strong> متخصص في WPF، و<strong>مصمم ومطور ويب شامل</strong>، بخبرة 3-5 سنوات في العمل الحر وتطوير المشاريع الشخصية.",
        about_p2: "لدي خبرة قوية في بناء تطبيقات سطح المكتب باستخدام <strong>C#, .NET Framework, .NET Core / .NET 6+</strong>، متبعاُ معمارية MVVM لإنشاء تطبيقات نظيفة وقابلة للتطوير والصيانة.",
        about_p3: "الأداء وتجربة المستخدم من أهم أولوياتي. أستخدم البرمجة غير المتزامنة وتعدد المسارات لضمان سلاسة التطبيقات. كما أبني أنظمة إدارة قوية باستخدام SQLite و SQL Server مع Entity Framework.",
        security_title: "خبير حماية",
        security_desc: "أطور أنظمة ترخيص وحماية البرمجيات، مما يتيح إنشاء تطبيقات سطح مكتب تجارية ذات حماية قوية ضد الاستخدام غير المصرح به.",
        sect_expertise: "الخبرات التقنية",
        exp_desktop: "تطوير سطح المكتب",
        skill_protection: "حماية وترخيص البرمجيات",
        exp_web: "تطوير الويب",
        skill_api: "ربط الواجهات البرمجية (API)",
        skill_responsive: "تصميم متجاوب",
        skill_uiux: "واجهات مستخدم حديثة",
        sect_whyme: "لماذا تختارني",
        feat_ui: "تصميم واجهات احترافي",
        feat_logic: "منطق برمجي قوي",
        feat_protect: "أنظمة حماية متقدمة",
        feat_creative: "حلول إبداعية",
        feat_perf: "أداء عالي",
        feat_detail: "اهتمام بالتفاصيل",
        footer_desc: "هل أنت مستعد لتحويل أفكارك إلى حلول برمجية موثوقة؟",
        nav_projects: "أعمالي",
        projects_title: "معرض أعمالي",
        projects_desc: "استكشف أحدث مشاريعي والحلول الإبداعية التي قمت بتطويرها",
        badge_featured: "مشروع مميز",
        jokereye_desc: "JokerEye هو برنامج مكتبي متكامل مُصمَّم خصيصًا لإدارة عيادات العيون، يهدف إلى تبسيط العمل اليومي داخل العيادة ورفع كفاءة إدارة البيانات الطبية والإدارية بشكل آمن واحترافي.",
        jokereye_subtitle: "نظام إدارة عيادة العيون",
        jokereye_goal_title: "🎯 الهدف من البرنامج",
        jokereye_goal_desc: "توفير حل شامل يساعد أطباء العيون وطاقم العيادة على تنظيم سجلات المرضى ومتابعة الفحوصات الطبية وإدارة المواعيد وإنشاء التقارير الطبية عبر واجهة حديثة وسهلة الاستخدام.",
        tech_used: "⚙️ التقنيات المستخدمة:",
        key_features: "⭐ المميزات الرئيسية:",
        feature_1: "إدارة المرضى: حفظ سجل كامل لكل مريض وتوثيق التاريخ الطبي.",
        feature_2: "سجل الفحوصات: تسجيل جميع فحوصات العين ومتابعة تطور الحالة.",
        feature_3: "إدارة المواعيد: تنظيم مواعيد المراجعات وتقليل أخطاء الجدولة.",
        feature_4: "التقارير الطبية: إنشاء تقارير تفصيلية للفحوصات مع إمكانية الطباعة.",
        feature_5: "قاعدة بيانات آمنة: استخدام SQLite لضمان السرعة والأمان.",
        gallery_title: "لمحة سريعة",
        footer_back: "العودة للرئيسية",
        download_title: "تحميل البرنامج",
        download_desc: "حمّل النسخة الكاملة من نظام إدارة عيادة العيون JokerEye",
        download_btn: "تحميل (Windows x64)",
        download_btn_Tow: "تحميل (Windows x86)",
        download_version: "الإصدار 1.1.7",
        download_size: "الحجم: 52.3 ميجابايت",
        download_date: "تاريخ الإصدار: 2026-04-02",
        requirements_title: "متطلبات التشغيل:",
        req_os: "ويندوز 10/11 (64-bit أو 86-bit)",
        req_ram: "2 جيجابايت ذاكرة على الأقل",
        req_disk: "100 ميجابايت مساحة حرة",
        req_dotnet: ".NET 6.0 Desktop Runtime",

        // JokerCashier
        cashier_title: "JokerCashier",
        cashier_subtitle: "نظام نقاط البيع المتكامل",
        cashier_desc: "JokerCashier هو نظام نقاط بيع (POS) متكامل وسريع، مصمم لتسهيل إدارة الأنشطة التجارية. يجمع بين سرعة البيع، دقة إدارة المخزون، والتقارير المالية الشاملة في واجهة عصرية وسهلة الاستخدام.",
        cashier_goal_title: "🎯 الهدف من البرنامج",
        cashier_goal_desc: "توفير حل شامل لإدارة المبيعات، المخزون، العملاء، والمالية، من خلال تطبيق سطح مكتب آمن وجذاب يدعم اللغة العربية والإنجليزية.",
        cashier_feat_1: "نظام بيع سريع مع دعم الباركود وطباعة الفواتير.",
        cashier_feat_2: "إدارة المخزون والتصنيفات وتنبيهات النواقص.",
        cashier_feat_3: "الإدارة المالية: المصاريف، الديون، وتقارير دورية.",
        cashier_feat_4: "قاعدة بيانات للعملاء والموردين.",
        cashier_feat_5: "نظام أمان متقدم مع صلاحيات للمستخدمين وسجل نشاطات.",
        cashier_feat_6: "واجهة عصرية (WPF) تدعم الوضع الليلي والنهاري."
    }
};



// State
let currentLang = localStorage.getItem('lang') || 'en';
let currentTheme = localStorage.getItem('theme') || 'dark';

// DOM Elements
const langToggle = document.getElementById('lang-toggle');
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;

// Initialize
function init() {
    setLanguage(currentLang);
    setTheme(currentTheme);

    // Listeners
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            currentLang = currentLang === 'en' ? 'ar' : 'en';
            setLanguage(currentLang);
        });
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(currentTheme);
        });
    }
}

function setLanguage(lang) {
    localStorage.setItem('lang', lang);
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    // Update Content
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Update Button Text
    if (langToggle) {
        langToggle.innerText = lang === 'en' ? 'AR' : 'EN';
    }
}

function setTheme(theme) {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);

    if (themeIcon) {
        themeIcon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }
}

// Run Init
document.addEventListener('DOMContentLoaded', init);


// ==========================================
// EXISTING LOGIC (Cursor, Menu, Glitch, etc)
// ==========================================

// Custom Cursor
const cursorDot = document.querySelector("#cursor-dot");
const cursorOutline = document.querySelector("#cursor-outline");

if (cursorDot && cursorOutline) {
    window.addEventListener("mousemove", (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });
}

// Mobile Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li a"); // Make sure we select 'a' inside li

if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("toggle");
    });
}

// Close menu when clicking a link
links.forEach(link => {
    link.addEventListener("click", () => {
        if (navLinks) navLinks.classList.remove("active");
        if (hamburger) hamburger.classList.remove("toggle");
    });
});

// Scroll Animation (Intersection Observer)
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const animatedElements = document.querySelectorAll(".section, .hero-content, .expertise-card, .feature-item");
animatedElements.forEach((el) => {
    el.classList.add("hidden");
    observer.observe(el);
});

// Glitch Effect for Hero Text
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
const heroText = document.querySelector(".glitch-text");

if (heroText) {
    let interval = null;

    const runGlitch = (target) => {
        let iteration = 0;
        const originalText = target.dataset.text; // Ensure this attribute exists or fallback
        if (!originalText) return;

        clearInterval(interval);

        interval = setInterval(() => {
            target.innerText = originalText
                .split("")
                .map((letter, index) => {
                    if (index < iteration) {
                        return originalText[index];
                    }
                    return letters[Math.floor(Math.random() * letters.length)];
                })
                .join("");

            if (iteration >= originalText.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;
        }, 30);
    };

    window.addEventListener('load', () => runGlitch(heroText));
    heroText.addEventListener("mouseover", (e) => runGlitch(e.target));
}
