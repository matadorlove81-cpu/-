import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || '',
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

app.post('/api/ai/coach', async (req, res) => {
  try {
    const { question, slideTitle, audience, level } = req.body;
    
    if (!process.env.GEMINI_API_KEY) {
      return res.status(200).json({
        answer: 'کلید وب‌سرویس هوش مصنوعی (GEMINI_API_KEY) شناسایی نشد، اما راهنمای پیشنهادی: در ارائه این موضوع بر ROI (بازگشت سرمایه)، مثال‌های ملموس کسب‌وکارهای ایرانی و جهانی و پرهیز از اصطلاحات بیش از حد پیچیده تمرکز کنید.'
      });
    }

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: `تو یک متخصص ارائه‌سازی حرفه‌ای و مشاور ارشد کسب‌وکار در حوزه هوش مصنوعی هستی.
مخاطب هدف ارائه: ${audience || 'عموم علاقه‌مندان و کارآفرینان'}
سطح تسلط مخاطبان: ${level || 'متوسط'}
اسلاید فعلی: ${slideTitle || 'هوش مصنوعی و راه‌های کسب درآمد از آن'}

سوال، چالش یا سناریوی سخنران:
${question}

لطفاً پاسخی کاربردی، کاملاً عملی، انگیزشی و حرفه‌ای به زبان فارسی بده. شامل:
۱) پاسخ استراتژیک مستقیم
۲) یک تکنیک طلایی برای درگیر کردن حضار در این لحظه
۳) پاسخ به اعتراض احتمالی مخاطب (Objection Handling)`,
    });

    res.json({ answer: response.text });
  } catch (error: any) {
    console.error('Error generating coach response:', error);
    res.status(500).json({ error: error.message || 'خطا در برقراری ارتباط با مدل هوش مصنوعی' });
  }
});

// Production and Development vite middleware handling
async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  } else {
    const { createServer } = await import('vite');
    const vite = await createServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

startServer();
