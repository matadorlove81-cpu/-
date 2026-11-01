import { ChecklistItem } from '../types/presentation';

export const INITIAL_CHECKLIST: ChecklistItem[] = [
  // سخت‌افزار و تجهیزات فنی
  {
    id: 'chk-1',
    category: 'hardware',
    title: 'تست پروژکتور، کابل HDMI / تبدیل Type-C و رزولوشن صفحه (16:9)',
    description: 'مطمئن شوید تصویر بدون پرش، با نسبت تصویر عریض و رنگ‌های استاندارد پخش می‌شود.',
    isDone: true,
    priority: 'ضروری'
  },
  {
    id: 'chk-2',
    category: 'hardware',
    title: 'تست میکروفون، باتری زاپاس و کیفیت پژواک سالن',
    description: 'میکروفون یقه‌ای یا بی‌سیم را در گوشه‌های مختلف سالن تست کنید تا از عدم فیدبک صوتی مطمئن شوید.',
    isDone: true,
    priority: 'ضروری'
  },
  {
    id: 'chk-3',
    category: 'hardware',
    title: 'آماده‌سازی پوینتر (Presenter Clicker) و ریموت اسلاید',
    description: 'بررسی باتری کلیکر و تست دکمه‌های جلو، عقب و صفحه سیاه (Blank Screen).',
    isDone: false,
    priority: 'مهم'
  },
  {
    id: 'chk-4',
    category: 'hardware',
    title: 'اینترنت پرسرعت پشتیبان (هات‌اسپات موبایل)',
    description: 'اگر دموی زنده آنلاین دارید، هرگز به وای‌فای عمومی سالن متکی نباشید.',
    isDone: false,
    priority: 'ضروری'
  },

  // محتوا و اسلایدها
  {
    id: 'chk-5',
    category: 'content',
    title: 'راستی‌آزمایی آمار بازار (Bloomberg و WEF) و تاریخ اعداد',
    description: 'مطمئن شوید ارقام و استنادات دقیقاً با منابع رسمی مطابقت دارند.',
    isDone: true,
    priority: 'ضروری'
  },
  {
    id: 'chk-6',
    category: 'content',
    title: 'همگام‌سازی لحن و اصطلاحات با تیپ مخاطب جلسه',
    description: 'اگر مخاطبان کارآفرین هستند بر ROI و اگر دانشجو هستند بر شروع بدون سرمایه تمرکز کنید.',
    isDone: false,
    priority: 'ضروری'
  },
  {
    id: 'chk-7',
    category: 'content',
    title: 'داشتن ۲ مثال بومی ایرانی و ۲ نمونه بین‌المللی برای هر متد',
    description: 'مخاطب وقتی مثال فروشگاه ایرانی یا استارتاپ ملموس را می‌شنود، ارتباط حسی عمیق‌تری می‌گیرد.',
    isDone: true,
    priority: 'مهم'
  },
  {
    id: 'chk-8',
    category: 'content',
    title: 'تنظیم فونت وزیرمتن و عدم جابه‌جایی المان‌های بصری در سیستم مقصد',
    description: 'استفاده از فرمت PDF یا فونت‌های Embed شده در فایل پاورپوینت برای جلوگیری از به‌هم‌ریختگی.',
    isDone: true,
    priority: 'ضروری'
  },

  // تمرین و زمان‌بندی (Rehearsal)
  {
    id: 'chk-9',
    category: 'rehearsal',
    title: 'تمرین زمان‌بندی کل ارائه (Run-through با کرونومتر)',
    description: 'مدت هر اسلاید را حدود ۲ دقیقه نگه دارید تا در مجموع ۴۰ تا ۴۵ دقیقه زمان به پایان برسد.',
    isDone: false,
    priority: 'ضروری'
  },
  {
    id: 'chk-10',
    category: 'rehearsal',
    title: 'تمرین قلاب افتتاحیه (Hook ۳۰ ثانیه اول)',
    description: 'جمله اول را بدون من‌من کردن و با قدرت بیان حفظ کرده و به نرمی اجرا کنید.',
    isDone: false,
    priority: 'ضروری'
  },
  {
    id: 'chk-11',
    category: 'rehearsal',
    title: 'تمرین تنفس دیافراگمی و مکث‌های ۲ ثانیه‌ای قبل از نکات کلیدی',
    description: 'سکوت‌های آگاهانه بسیار تاثیرگذارتر از پر کردن کلام با کلمات زائد («اممم...»، «درواقع...») است.',
    isDone: false,
    priority: 'پیشنهادی'
  },

  // اجرای صحنه و پرسش و پاسخ
  {
    id: 'chk-12',
    category: 'presentation',
    title: 'پیش‌بینی ۳ سوال فوق‌العاده چالش‌برانگیز حضار و آماده‌سازی پاسخ',
    description: 'مانند: «آیا تحریم‌ها مانع درآمد ارزی نیست؟»، «اگر هوش مصنوعی اشتباه کند مسئولیت با کیست؟».',
    isDone: false,
    priority: 'ضروری'
  },
  {
    id: 'chk-13',
    category: 'presentation',
    title: 'همراه داشتن بطری آب ولرم و تنفس عمیق ۱۰ دقیقه قبل از ورود به سن',
    description: 'آرام‌سازی تارهای صوتی و پایین آوردن آدرنالین طبیعی اولیه.',
    isDone: false,
    priority: 'مهم'
  },
  {
    id: 'chk-14',
    category: 'presentation',
    title: 'آماده‌سازی QR کد یا لینک اختصاصی دانلود اسلایدها و منابع برای حضار',
    description: 'تبدیل حضار به لید یا فالوور از طریق ارائه هدیه فایل کامل و نقشه راه در انتهای جلسه.',
    isDone: true,
    priority: 'پیشنهادی'
  }
];
