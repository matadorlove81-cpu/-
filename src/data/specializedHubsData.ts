export interface WebPlatformModel {
  title: string;
  category: string;
  description: string;
  targetAudience: string;
  keyFeatures: string[];
  suggestedTech: string[];
  pricingRangeToman: string;
}

export interface WebAiTool {
  name: string;
  badge: string;
  bestFor: string;
  description: string;
  freeTierStatus: string;
  outputFormat: string;
  websiteUrl: string;
}

export interface N8nWorkflowTemplate {
  id: string;
  title: string;
  difficulty: 'آسان' | 'متوسط' | 'پیشرفته';
  category: string;
  description: string;
  nodesUsed: string[];
  realWorldUseCase: string;
  estimatedSetupMinutes: number;
  workflowJsonSnippet: string;
}

export interface FreeMediaTool {
  name: string;
  type: 'تصویر' | 'ویدیو' | 'صدا و موسیقی' | 'تدوین';
  freeAllowance: string;
  uniqueness: string;
  commercialLicense: boolean;
  website: string;
}

export interface UnconventionalIdea {
  title: string;
  whyUnderused: string;
  executionSteps: string[];
  monetizationModel: string;
  monthlyPotentialToman: string;
  exampleClient: string;
}

export interface ClaudeTopic {
  title: string;
  badge: string;
  summary: string;
  deepDive: string[];
  actionableTip: string;
}

// --------------------------------------------------------------------------
// 1. DATA: AI Web Design Hub
// --------------------------------------------------------------------------
export const WEB_DESIGN_MODELS: WebPlatformModel[] = [
  {
    title: 'لندینگ پیج تک‌صفحه‌ای تبلیغاتی (High-Conversion Landing)',
    category: 'لندینگ پیج',
    description: 'صفحه اختصاصی جهت کمپین‌های تبلیغاتی گوگل ادز، کمپین‌های اینستاگرام یا معرفی یک محصول فیزیکی/دیجیتال خاص با تمرکز بر بالاترین نرخ تبدیل بازدیدکننده به خریدار.',
    targetAudience: 'کسب‌وکارهای اینستاگرامی، مدرسین آنلاین، رویدادها، استارتاپ‌های پیش‌ثبت‌نام',
    keyFeatures: ['قلاب بصری قوی در هدر', 'بخش نظرات و شواهد اجتماعی', 'شمارش معکوس تخفیف', 'فرم سریع دریافت شماره و ثبت‌نام', 'اتصال مستقیم به پنل پیامکی'],
    suggestedTech: ['Tailwind CSS', 'Vite / React', 'Framer AI', 'Next.js'],
    pricingRangeToman: '۵ تا ۱۲ میلیون تومان'
  },
  {
    title: 'وب‌سایت شرکتی و خدماتی (Corporate & B2B Web Portal)',
    category: 'شرکتی',
    description: 'سایت چندصفحه‌ای رسمی جهت نمایش اعتبار، کاتالوگ خدمات، تیم، تاریخچه، معرفی دستاوردها و فرم‌های استعلام قیمت برای شرکت‌ها و دفاتر تجاری.',
    targetAudience: 'شرکت‌های بازرگانی، پیمانکاری، کلینیک‌ها، دفاتر حقوقی و کارخانجات',
    keyFeatures: ['بخش خدمات با جزئیات کامل', 'گالری پروژه‌ها و فیلتر نمونه‌کارها', 'نقشه و راه‌های ارتباطی استاندارد', 'چندزبانه بودن (انگلیسی/عربی برای صادرات)', 'سئوی ساختاریافته محلی'],
    suggestedTech: ['Next.js', 'WordPress + Elementor AI', 'Bolt.new', 'Relume'],
    pricingRangeToman: '۱۵ تا ۳۵ میلیون تومان'
  },
  {
    title: 'فروشگاه اینترنتی هوشمند (E-Commerce Store)',
    category: 'فروشگاهی',
    description: 'پلتفرم کامل فروش کالا با دسته‌بندی محصولات، فیلتر ویژگی‌ها، سبد خرید پویا، درگاه پرداخت شتابی و پنل مدیریت سفارشات.',
    targetAudience: 'تولیدکنندگان پوشاک، لوازم دیجیتال، محصولات آرایشی، کتاب و کالای خانگی',
    keyFeatures: ['کاتالوگ داینامیک و سرچ هوشمند', 'اتصال به درگاه‌های زرین‌پال، نکست‌پی و سپ', 'محاسبه خودکار هزینه پست و تیپاکس', 'سیستم پیامک خودکار ثبت سفارش', 'قابلیت مقایسه محصولات'],
    suggestedTech: ['Next.js + Supabase', 'WooCommerce + AI Addons', 'Cursor + React', 'Shopify (برای خارج)'],
    pricingRangeToman: '۳۰ تا ۸۰+ میلیون تومان'
  },
  {
    title: 'پورتفولیو و وب‌سایت شخصی (Personal Brand / Creative Portfolio)',
    category: 'شخصی',
    description: 'ویترین آنلاین چشم‌نواز برای فریلنسرها، معماران، برنامه‌نویسان و مشاوران جهت ارائه نمونه‌کارها و عقد قراردادهای بین‌المللی و داخلی.',
    targetAudience: 'برنامه‌نویسان، گرافیست‌ها، عکاسان، وکلا، مدیران ارشد و سخنرانان',
    keyFeatures: ['طراحی متمایز با انیمیشن‌های روان', 'نمایش پروژه‌ها به صورت کیس استادی', 'بخش تقدیرنامه‌ها و لاگ افتخارات', 'دانلود مستقیم رزومه PDF', 'لینک رزرو تایم مشاوره'],
    suggestedTech: ['Tailwind CSS', 'v0.dev', 'Astro', 'Framer'],
    pricingRangeToman: '۶ تا ۱۵ میلیون تومان'
  }
];

export const WEB_AI_TOOLS: WebAiTool[] = [
  {
    name: 'Bolt.new',
    badge: 'فول‌استک و لایو',
    bestFor: 'ساخت سریع وب‌اپلیکیشن کامل با کدنویسی تمیز در مرورگر',
    description: 'اجرای کانتینر واقعی Node.js در مرورگر؛ می‌توانید وب‌اپلیکیشن، دیتابیس لوکال و کامپوننت‌های مدرن را با یک پرامپت بسازید، تست کنید و مستقیم روی Netlify لایو نمایید.',
    freeTierStatus: 'سهمیه روزانه توکن رایگان قابل تمدید',
    outputFormat: 'کد تمیز Vite + React / Next / Vue',
    websiteUrl: 'https://bolt.new'
  },
  {
    name: 'v0.dev (by Vercel)',
    badge: 'شاهکار فرانت‌اند',
    bestFor: 'خلق صفحات لندینگ و کامپوننت‌های شیک UI با Tailwind CSS',
    description: 'ساخته شده توسط شرکت ورسل؛ با نوشتن توصیف یا آپلود اسکرین‌شات از یک سایت، کامپوننت‌های بی‌نظیر React و Tailwind را تولید کرده و قابلیت یکپارچه‌سازی فوری دارد.',
    freeTierStatus: 'اعتبار رایگان ماهانه ۲۰۰ کریدیت',
    outputFormat: 'React, Tailwind CSS, shadcn/ui',
    websiteUrl: 'https://v0.dev'
  },
  {
    name: 'Cursor & Windsurf',
    badge: 'ادیتور کدنویسی AI',
    bestFor: 'تبدیل شدن به یک مهندس نرم‌افزار حرفه‌ای با اهرم Claude Sonnet',
    description: 'ویرایشگر قدرتمند بر پایه VS Code با هوش مصنوعی متصل به تمام فایل‌های پروژه. با کلیدهای Cmd+K یا پنل Chat کل پروژه را تغییر می‌دهد، باگ‌ها را رفع کرده و فیچرهای جدید اضافه می‌کند.',
    freeTierStatus: 'دوره آزمایشی رایگان دو هفته‌ای بدون نیاز به کارت',
    outputFormat: 'پروژه‌های استاندارد در هر زبانی',
    websiteUrl: 'https://cursor.com'
  },
  {
    name: 'Lovable.dev',
    badge: 'بک‌اند + فرانت‌اند',
    bestFor: 'طراحی وب‌اپلیکیشن‌های دیتابیس‌محور متصل به Supabase',
    description: 'ابزار فوق‌العاده برای ساخت نرم‌افزارهای تحت وب همراه با دیتابیس، سیستم ورود و ثبت‌نام و جدول اطلاعات تنها از طریق چت به زبان فارسی و انگلیسی.',
    freeTierStatus: 'پلان رایگان برای ساخت پروژه‌های اولیه',
    outputFormat: 'کامل React + Supabase backend',
    websiteUrl: 'https://lovable.dev'
  },
  {
    name: 'Relume & Framer AI',
    badge: 'طراحی بدون کد (No-Code)',
    bestFor: 'تولید وایرفریم، ساختار سایت و دیزاین فوری برای آژانس‌های تبلیغاتی',
    description: 'طراحی سایت‌مپ و صفحات کامل در چند ثانیه و اکسپورت مستقیم به محیط طراحی فیگما یا سایت‌ساز فرایمر.',
    freeTierStatus: 'طرح رایگان ۱ پروژه‌ای',
    outputFormat: 'Framer, Figma, Webflow',
    websiteUrl: 'https://relume.io'
  }
];

export const CPANEL_DEPLOY_STEPS = [
  {
    step: 1,
    title: 'تولید بیلد نهایی پروژه (Production Build)',
    instruction: 'در ترمینال سیستم خود در پوشه پروژه، دستور زیر را اجرا کنید تا کدهای سبک و بهینه‌سازی‌شده در پوشه dist ساخته شوند:',
    codeSnippet: 'npm run build',
    note: 'این کار تمام کدهای جاوااسکریپت و CSS را فشرده (minify) کرده و برای اجرا در سرور آماده می‌کند.'
  },
  {
    step: 2,
    title: 'ایجاد فایل روتینگ .htaccess جهت جلوگیری از ارور ۴۰۴',
    instruction: 'درون پوشه dist یک فایل با نام exact بنام .htaccess بسازید و کدهای ریدایرکت زیر را درون آن قرار دهید تا در صورت تعویض صفحه یا رفرش توسط کاربر، با خطای ۴۰۴ سی‌پنل مواجه نشوید:',
    codeSnippet: `<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>`,
    note: 'این فایل قانون ریدایرکت برنامه‌های تک‌صفحه‌ای (SPA) آپاچی است.'
  },
  {
    step: 3,
    title: 'فشرده‌سازی محتویات پوشه dist به فرمت ZIP',
    instruction: 'وارد پوشه dist شوید. تمامی فایل‌های درون آن (شامل index.html، پوشه assets، فایل .htaccess و غبره) را انتخاب کرده و فشرده (Zip) کنید.',
    codeSnippet: 'select all inside dist -> Send to -> Compressed (zipped) folder (site_bundle.zip)',
    note: 'دقت کنید خود پوشه dist را زیپ نکنید؛ محتویات داخل آن باید در فایل زیپ قرار گیرد.'
  },
  {
    step: 4,
    title: 'آپلود در File Manager سی‌پنل (cPanel)',
    instruction: 'وارد کنترل‌پنل هاست سی‌پنل خود شوید. روی File Manager کلیک کنید و وارد مسیر اصلی هاست بنام public_html شوید. دکمه Upload در بالای صفحه را بزنید و فایل site_bundle.zip را آپلود کنید.',
    codeSnippet: 'cPanel > Files > File Manager > public_html > Upload',
    note: 'اگر سایت اصلی دامنه شماست، فایل‌ها باید مستقیماً در public_html اکسترکت شوند.'
  },
  {
    step: 5,
    title: 'استخراج (Extract) و فعال‌سازی SSL رایگان',
    instruction: 'روی فایل زیپ آپلود شده راست‌کلیک کرده و گزینه Extract را بزنید. سپس از بخش Security در سی‌پنل روی SSL/TLS Status رفته و دکمه Run AutoSSL را بزنید تا قفل امنیتی سبز (HTTPS) فعال شود.',
    codeSnippet: 'Right click site_bundle.zip -> Extract Here -> Delete zip file -> Run AutoSSL',
    note: 'تبریک! وب‌سایت هوشمند شما اکنون با دامنه رسمی و سرعت بالا روی هاست اشتراکی لایو است.'
  }
];

// --------------------------------------------------------------------------
// 2. DATA: n8n Automation Hub
// --------------------------------------------------------------------------
export const N8N_TERMS = [
  {
    term: 'Webhook (وب‌هوک)',
    meaning: 'یک آدرس اینترنتی اختصاصی (URL) که مانند یک زنگ در منتظر می‌ماند تا هر زمان در سایتی خریدی انجام شد، فرمی پر شد یا پیامکی رسید، فوراً داده‌ها را به n8n تحویل دهد.'
  },
  {
    term: 'Node (گره / نود)',
    meaning: 'بلوک‌های سازنده هر فرآیند؛ هر نود مسئول یک وظیفه مشخص است (مثلاً: نود ارسال پیامک، نود هوش مصنوعی، نود جستجو در دیتابیس).'
  },
  {
    term: 'Trigger Node (آغازگر)',
    meaning: 'اولین نود سمت راست ورک‌فلو که شرایط شروع را تعیین می‌کند (مثلاً: هر روز ساعت ۹ صبح، یا به محض دریافت ایمیل جدید).'
  },
  {
    term: 'AI Agent Node (ایجنت هوشمند)',
    meaning: 'مغز متفکر فرآیند که با مدل‌های زبانی (مانند Gemini یا GPT-4) تصمیم‌گیری می‌کند، ابزارهای مختلف را فراخوانی کرده و خروجی ساختاریافته تولید می‌نماید.'
  },
  {
    term: 'Credentials Vault (گاوصندوق دسترسی‌ها)',
    meaning: 'سیستم رمزنگاری‌شده فوق‌امنیتی n8n برای ذخیره کلیدهای API، توکن‌های تلگرام، رمزهای عبور دیتابیس و توکن‌های OAuth بدون لو رفتن در سناریو.'
  },
  {
    term: 'Data Mapping (نگاشت داده‌ها)',
    meaning: 'وصل کردن خروجی یک نود به ورودی نود بعدی با استفاده از اکسپرشن‌های ساده مثل: {{ $json.customer_name }} یا {{ $json.total_price }}.'
  }
];

export const N8N_TEMPLATES: N8nWorkflowTemplate[] = [
  {
    id: 'n8n-lead-gemini',
    title: 'سیستم هوشمند جذب لید و پاسخگویی خودکار متصل به Gemini و پیام‌رسان',
    category: 'فروش و لید جنریشن',
    difficulty: 'آسان',
    description: 'دریافت خودکار فرم‌های وب‌سایت یا پیام‌های مشتری، تحلیل روان‌شناختی نیاز مشتری با هوش مصنوعی و ارسال پاسخ شخصی‌سازی‌شده به همراه ثبت مستقیم در Google Sheets یا CRM.',
    nodesUsed: ['Webhook Trigger', 'Google Gemini / OpenAI Chat Node', 'Google Sheets Append', 'Telegram / SMS Sender'],
    realWorldUseCase: 'پاسخگویی آنی به استعلام قیمت در آژانس‌های گردشگری، املاک و کلینیک‌های پزشکی ظرف کمتر از ۳۰ ثانیه.',
    estimatedSetupMinutes: 20,
    workflowJsonSnippet: `{
  "name": "AI Lead Qualifier & Auto-Responder",
  "nodes": [
    {
      "name": "Webhook Trigger",
      "type": "n8n-nodes-base.webhook",
      "position": [250, 300],
      "parameters": { "path": "lead-intake", "responseMode": "onReceived" }
    },
    {
      "name": "Gemini AI Lead Analyst",
      "type": "@n8n/n8n-nodes-langchain.agent",
      "position": [480, 300],
      "parameters": {
        "text": "=تحلیل اطلاعات لید ورودی: {{ $json.body.message }} و تعیین اولویت خرید و تولید متن پاسخ مودبانه به زبان فارسی."
      }
    },
    {
      "name": "Log to Google Sheets",
      "type": "n8n-nodes-base.googleSheets",
      "position": [700, 300],
      "parameters": { "operation": "appendRow" }
    }
  ]
}`
  },
  {
    id: 'n8n-social-monitoring',
    title: 'دیده‌بان هوشمند شبکه‌های اجتماعی و سیستم هشدار مدیریت بحران',
    category: 'روابط عمومی و مانیتورینگ',
    difficulty: 'متوسط',
    description: 'رصد خودکار کامنت‌ها یا تیکت‌های پشتیبانی، تشخیص احساسات (Sentiment Analysis) با هوش مصنوعی و در صورت وجود شکایت یا نارضایتی حاد، ارسال فوری آلرت قرمز به تلفن همراه مدیر عامل.',
    nodesUsed: ['Schedule Trigger', 'RSS / API Fetcher', 'Sentiment Classifier Node', 'IF Node', 'Telegram Alert Node'],
    realWorldUseCase: 'جلوگیری از بحران‌های روابط عمومی (PR Crisis) برای برندهای بزرگ و فروشگاه‌های اینترنتی پرمشتری.',
    estimatedSetupMinutes: 35,
    workflowJsonSnippet: `{
  "name": "Crisis PR & Negative Sentiment Alert",
  "nodes": [
    { "name": "Every 15 Minutes", "type": "n8n-nodes-base.scheduleTrigger" },
    { "name": "Fetch Latest Feed", "type": "n8n-nodes-base.httpRequest" },
    { "name": "AI Sentiment Filter", "type": "@n8n/n8n-nodes-langchain.chainLlm" },
    { "name": "If Sentiment == Negative", "type": "n8n-nodes-base.if" },
    { "name": "Send Urgent SMS to CEO", "type": "n8n-nodes-base.httpRequest" }
  ]
}`
  },
  {
    id: 'n8n-doc-summarizer',
    title: 'خلاصه‌سازی اسناد و فاکتورها و صدور پیش‌فاکتور خودکار RAG',
    category: 'اداری و مالی',
    difficulty: 'پیشرفته',
    description: 'دریافت فایل‌های PDF اسناد یا قراردادها از ایمیل، استخراج داده‌های کلیدی با تکنولوژی OCR و مدل زبانی، و صدور پیش‌فاکتور رسمی بدون نیاز به دخالت دستی حسابدار.',
    nodesUsed: ['Email Trigger (IMAP)', 'PDF Extract Node', 'OpenAI / Claude Structured Parser', 'Airtable Node', 'Email Sender (SMTP)'],
    realWorldUseCase: 'کاهش ۹۰ درصدی زمان بایگانی فاکتورها در شرکت‌های بازرگانی و هلدینگ‌های تولیدی.',
    estimatedSetupMinutes: 45,
    workflowJsonSnippet: `{
  "name": "Auto Invoice Parser & CRM Sync",
  "nodes": [
    { "name": "Incoming Invoice Email", "type": "n8n-nodes-base.emailReadImap" },
    { "name": "Extract PDF Raw Text", "type": "n8n-nodes-base.readPDF" },
    { "name": "Extract JSON Items via LLM", "type": "@n8n/n8n-nodes-langchain.agent" },
    { "name": "Save To Accounting DB", "type": "n8n-nodes-base.postgres" }
  ]
}`
  }
];

// --------------------------------------------------------------------------
// 3. DATA: AI Creative, Media & Video Hub
// --------------------------------------------------------------------------
export const FREE_MEDIA_TOOLS: FreeMediaTool[] = [
  {
    name: 'Leonardo.ai',
    type: 'تصویر',
    freeAllowance: '۱۵۰ توکن روزانه که هر ۲۴ ساعت کاملاً رایگان شارژ می‌شود',
    uniqueness: 'کیفیت تصویرسازی در سطح Midjourney همراه با مدل‌های اختصاصی Kino XL و AlbedoBase برای تولید عکس‌های واقع‌گرایانه چهره و فشن.',
    commercialLicense: true,
    website: 'https://leonardo.ai'
  },
  {
    name: 'Ideogram.ai',
    type: 'تصویر',
    freeAllowance: '۱۰ پرامپت سریع رایگان در روز (۴۰ عکس در روز)',
    uniqueness: 'بی‌رقیب‌ترین ابزار جهان برای گنجاندن تایپوگرافی، تیترها و متون کاملاً بدون غلط املایی درون تصاویر گرافیکی و طراحی لوگو و پوستر.',
    commercialLicense: true,
    website: 'https://ideogram.ai'
  },
  {
    name: 'Kling AI',
    type: 'ویدیو',
    freeAllowance: 'اعتبار روزانه ۶۶ سکه رایگان (معادل ساخت ۶ ویدیوی رایگان روزانه)',
    uniqueness: 'فوق‌العاده در شبیه‌سازی قوانین فیزیک، حرکت موها، بازتاب نور در آب و پایداری اعضای بدن کاراکترها در حین حرکت در مقایسه با سایر ابزارها.',
    commercialLicense: true,
    website: 'https://klingai.com'
  },
  {
    name: 'Luma Dream Machine',
    type: 'ویدیو',
    freeAllowance: '۳۰ ویدیو رایگان در ماه با کیفیت عالی',
    uniqueness: 'تولید ویدیوهای سینمایی خیره‌کننده با حرکات دوربین حرفه‌ای (Drone Shot, Orbit, Pan) تنها با یک فریم عکس مرجع.',
    commercialLicense: true,
    website: 'https://lumalabs.ai/dream-machine'
  },
  {
    name: 'Suno AI',
    type: 'صدا و موسیقی',
    freeAllowance: '۵۰ اعتبار روزانه رایگان (معادل ۱۰ آهنگ کامل ۲ دقیقه‌ای با کلام در روز)',
    uniqueness: 'تولید آهنگ کامل در هر سبکی (پاپ، راک، حماسی، سنتی) همراه با ترانه، ملودی و خوانندگی فوق‌العاده طبیعی با یک کلیک.',
    commercialLicense: false,
    website: 'https://suno.com'
  },
  {
    name: 'CapCut Desktop AI',
    type: 'تدوین',
    freeAllowance: 'کاملاً رایگان در نسخه دسکتاپ با قابلیت‌های هوشمند متعدد',
    uniqueness: 'زیرنویس خودکار متحرک با افکت‌های ترند اینستاگرام، رونویسی صوتی به متن، حذف پس‌زمینه ویدیو با یک کلیک و فیلترهای ارتقای کیفیت چهره.',
    commercialLicense: true,
    website: 'https://capcut.com'
  }
];

export const UNCONVENTIONAL_INCOME_IDEAS: UnconventionalIdea[] = [
  {
    title: 'تولید ویدیوهای تبلیغاتی UGC (User Generated Content) با کاراکترهای مجازی',
    whyUnderused: 'بیشتر فروشگاه‌های اینترنتی بودجه پرداخت دستمزد چند ده میلیونی به بلاگرها و بازیگران تیزر را ندارند. کمتر از ۲٪ افراد بلدند با ابزارهایی مثل Hedra و Kling کاراکترهای مجازی باورپذیر بسازند که محصول را دست گرفته و تست می‌کنند.',
    executionSteps: [
      'یک عکس طبیعی از کاراکتر خریدار در Leonardo بسازید.',
      'سناریوی معرفی مشکل و تست محصول را با Claude بنویسید.',
      'صداپیشگی طبیعی فارسی را با ElevenLabs یا ابزارهای دوبله تولید کنید.',
      'با ابزار Hedra یا Kling ویدیو را متحرک کرده و در CapCut زیرنویس متحرک جذاب بزنید.'
    ],
    monetizationModel: 'فروش بسته ۵ ویدیوی تبلیغاتی کوتاه (Reels) به آنلاین‌شاپ‌ها به قیمت ۸ تا ۱۵ میلیون تومان.',
    monthlyPotentialToman: '۳۰ تا ۷۰ میلیون تومان',
    exampleClient: 'فروشگاه‌های آنلاین لوازم آرایشی، گجت‌های هوشمند و اکسسوری'
  },
  {
    title: 'کانال‌های اتوماسیون قصه و لالایی صوتی-تصویری برای کودکان (Bedtime Stories)',
    whyUnderused: 'والدین برای خواباندن کودکان هر شب ویدیوها و پادکست‌های آرامش‌بخش یوتیوب و کست‌باکس را پخش می‌کنند. نرخ تماشای این ویدیوها (Retention) نزدیک به ۱۰۰٪ است و مانیتایز یوتیوب آن فوق‌العاده بالاست.',
    executionSteps: [
      'سناریوی داستان‌های آموزنده حیوانات را با Claude بنویسید.',
      'تصاویر کارتون رنگارنگ را با سهمیه رایگان Leonardo یا Ideogram بسازید.',
      'صدای گرم و آرام‌بخش با لحن مهربانانه مادرانه با کلون صدا تولید کنید.',
      'موسیقی متن آرام پیانو با Suno تولید کرده و ویدیو را منتشر نمایید.'
    ],
    monetizationModel: 'درآمد ارزی از AdSense یوتیوب و انتشار نسخه صوتی در اسپاتیفای و کست‌باکس.',
    monthlyPotentialToman: '۲۰ تا ۸۰ میلیون تومان ($400 - $1,600)',
    exampleClient: 'مخاطبان والدین در سراسر جهان و یوتیوب بین‌الملل'
  },
  {
    title: 'ساخت آلبوم‌های صوتی ASMR و فرکانس‌های تمرکز و خواب (Focus Music)',
    whyUnderused: 'دانشجویان و برنامه‌نویسان ساعت‌ها به موزیک‌های بی‌کلام Lo-Fi و صداهای باران و جنگل گوش می‌دهند. با هوش مصنوعی ساخت این ترک‌ها نیاز به تجهیزات استودیویی ندارد.',
    executionSteps: [
      'ساخت ترک‌های ملایم Lo-Fi با سهمیه روزانه Suno یا Udio.',
      'طراحی کاورهای انیمیشنی لوپ با ابزار Luma.',
      'انتشار در قالب پخش زنده ۲۴ ساعته (Live 24/7) در یوتیوب با نرم‌افزار OBS.'
    ],
    monetizationModel: 'کسب درآمد از بازدید استریم یوتیوب و فروش پکیج صداها در پلتفرم Bandcamp.',
    monthlyPotentialToman: '۱۵ تا ۵۰ میلیون تومان',
    exampleClient: 'جامعه بین‌المللی علاقه‌مندان به مطالعه و مدیتیشن'
  }
];

// --------------------------------------------------------------------------
// 4. DATA: Claude, Gemini, NotebookLM & AI Skills Hub
// --------------------------------------------------------------------------
export const CLAUDE_ECOSYSTEM_TOPICS: ClaudeTopic[] = [
  {
    title: 'معماری حافظه دائمی (Persistent Second Brain) با کلاد',
    badge: 'دانش پیشرفته',
    summary: 'چگونه کاری کنیم که هوش مصنوعی هیچ‌گاه شخصیت، سبک کار، قوانین کسب‌وکار و حافظه شما را در گفتگوهای بعدی فراموش نکند؟',
    deepDive: [
      'استفاده از قابلیت Claude Projects و بارگذاری فایل محوری بنام CLAUDE.md یا SYSTEM_MEMORY.md در بخش دانشی پروژه.',
      'ساختاربندی حافظه در ۴ سرفصل: ۱) هویت و لحن من، ۲) قوانین غیرقابل تخطی پروژه، ۳) استک فنی و ابزارهای مورد تایید، ۴) اصطلاحات اختصاصی بازار من.',
      'ترکیب کلاد با نرم‌افزار Obsidian به عنوان نوت‌بوک محلی و ذخیره همیشگی خروجی‌ها در قالب فایل‌های متنی Markdown بر روی هارد دیسک بدون وابستگی به کلود.'
    ],
    actionableTip: 'در ابتدای هر پروژه کلاد بنویسید: «همواره قبل از پاسخ، اصول ذکر شده در فایل CLAUDE.md را بررسی کن و در تطابق کامل با آن عمل کن.»'
  },
  {
    title: 'پروتکل اتصال محتوا (Model Context Protocol - MCP) و اسکیل‌ها',
    badge: 'انقلاب ابزارهای آینده',
    summary: 'استاندارد باز انتروپیک (Anthropic) برای اتصال مستقیم هوش مصنوعی به فایل‌های کامپیوتر شما، پایگاه‌های داده، گیت‌هاب و ابزارهای تجاری.',
    deepDive: [
      'اسکیل (Skill) چیست؟ مجموعه‌ای از فایل‌های راهنما، دستورالعمل‌ها، اسکریپت‌ها و پرامپت‌های مهندسی‌شده که به هوش مصنوعی مهارت حل یک مسئله خاص را به صورت تخصصی اعطا می‌کند.',
      'سرورهای MCP اجازه می‌دهند Claude به صورت زنده دیتابیس لوکال Postgres شما را کوئری بزند، فایل‌های PDF هارد دیسک را جستجو کند و بدون کپی-پیست دستی تغییرات را در پروژه‌ها اعمال نماید.',
      'برای راه‌اندازی سرورهای MCP کافی است در اپلیکیشن دسکتاپ کلاد (Claude Desktop) فایل پیکربندی `claude_desktop_config.json` را تنظیم نمایید.'
    ],
    actionableTip: 'با راه‌اندازی MCP Filesystem در ویندوز، کلاد می‌تواند مستقیماً کدها را در پوشه پروژه شما بنویسد و فایل‌ها را ویرایش کند.'
  },
  {
    title: 'اجرای کدنویسی با کلاد در ویندوز (Claude Code CLI & Desktop)',
    badge: 'توسعه بدون دردسر',
    summary: 'روش‌های رسمی و عملیاتی بهره‌برداری از هوش مصنوعی Claude Sonnet 3.5 در سیستم‌عامل ویندوز برای برنامه‌نویسی و ساخت وب‌سایت.',
    deepDive: [
      'روش ۱ (Claude Desktop App): دانلود نرم‌افزار رسمی دسکتاپ و استفاده از قابلیت‌های پیشرفته Artifacts برای مشاهده زنده پیش‌نمایش سایت.',
      'روش ۲ (Cursor & Windsurf): ادغام کلاد به عنوان موتور پردازش کدهای پروژه در ویندوز؛ اصلاح کدهای صدها فایل تنها با فشردن یک میانبر.',
      'روش ۳ (Claude Code CLI در PowerShell / WSL): اجرای دستورات ترمینال، بیلد پروژه، اجرای تست‌ها و کامیت خودکار در گیت مستقیماً با هدایت کلاد.'
    ],
    actionableTip: 'هنگام طراحی سایت با کلاد در ویندوز، همواره درخواست کنید خروجی را در قالب یک فایل HTML تک‌فایلی همراه با CDN Tailwind بدهد تا با دبل‌کلیک در مرورگر لایو مشاهده شود.'
  },
  {
    title: 'گوگل نوت‌بوک‌ال‌ام (Google NotebookLM)؛ جادوی پژوهش و پادکست‌سازی',
    badge: 'معجزه رایگان گوگل',
    summary: 'پیشرفته‌ترین دستیار پژوهشی جهان بر پایه Gemini 1.5 Pro با امکان بارگذاری تا ۵۰ منبع و تبدیل آن به پادکست صوتی گفتگومحور فوق‌العاده جذاب.',
    deepDive: [
      'بارگذاری رایگان فایل‌های PDF سنگین، مقالات علمی، کتاب‌ها، لینک‌های یوتیوب و یادداشت‌ها بدون محدودیت حجم سنتی.',
      'پاسخگویی به سوالات شما با ذکر ارجاع مستقیم به شماره صفحه و پاراگراف منبع (Grounding) بدون هیچ‌گونه توهم یا فکت غلط.',
      'قابلیت هیجان‌انگیز Audio Overview (Deep Dive Conversation): تبدیل تمام اسناد طولانی به یک پادکست رادیویی مکالمه‌ای بین دو مجری زن و مرد با لحن صمیمی و هیجان‌انگیز.'
    ],
    actionableTip: 'پاورپوینت یا کتاب‌های طولانی را در NotebookLM آپلود کنید و با فشردن یک دکمه، پادکست خلاصه نیم‌ساعته آن را گوش دهید.'
  },
  {
    title: 'گوگل ای‌آی استودیو (Google AI Studio)؛ کانتکست ۲ میلیون توکنی رایگان',
    badge: 'قدرتمندترین پنل رایگان',
    summary: 'دسترسی حرفه‌ای به مدل‌های Gemini 2.5 و Gemini 3 با بزرگ‌ترین پنجره پردازش متن در جهان بدون پرداخت هزینه اشتراک.',
    deepDive: [
      'پنجره کانتکست ۲,۰۰۰,۰۰۰ توکن: یعنی می‌توانید یک ویدیوی ۱ ساعته، کل کدهای یک پروژه نرم‌افزاری بزرگ، یا ۵ کتاب قطور را یکجا وارد کرده و تحلیل کنید.',
      'تنظیم دقیق پارامترهای مدل: System Instructions، Temperature و ساختار خروجی استاندارد JSON برای اتوماسیون‌ها.',
      'تست و ارزیابی مستقیم پرامپت‌ها قبل از پیاده‌سازی در پروژه‌های نهایی یا ساخت ربات‌ها.'
    ],
    actionableTip: 'از پنل Google AI Studio برای استخراج اطلاعات ساختاریافته از اسناد مالی اسکن‌شده استفاده کنید؛ هیچ مدلی در پردازش فایل‌های فوق‌حجیم به پای جمنای نمی‌رسد.'
  }
];
