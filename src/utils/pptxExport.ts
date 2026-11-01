import pptxgen from 'pptxgenjs';
import { SLIDES_DATA } from '../data/slidesData';

/**
 * Generates and downloads a real, editable PowerPoint (.pptx) file directly in the user's browser.
 */
export async function downloadPowerPointFile(): Promise<void> {
  const pptx = new pptxgen();

  pptx.layout = 'LAYOUT_16x9';
  pptx.author = 'AI Studio Presentation Builder';
  pptx.company = 'AI Business Academy';
  pptx.title = 'هوش مصنوعی و راه‌های کسب درآمد از آن';
  pptx.subject = 'راهنمای جامع ورود به اقتصاد هوشمند و ساخت جریان‌های درآمدی پایدار';

  // Process all 20 slides
  SLIDES_DATA.forEach((slide) => {
    const pSlide = pptx.addSlide();

    // Dark slate minimalist background
    pSlide.background = { color: '0F172A' };

    // Slide category badge / number
    const categoryLabel = slide.methodCode 
      ? `${slide.methodCode} | دسته‌بندی روش‌های درآمدی`
      : `اسلاید ${slide.slideNumber} از ۲۰ | هوش مصنوعی و کسب درآمد`;

    pSlide.addText(categoryLabel, {
      x: '5%',
      y: '5%',
      w: '90%',
      h: 0.35,
      fontSize: 10,
      fontFace: 'Arial',
      color: '38BDF8',
      bold: true,
      align: 'right',
      rtlMode: true,
    });

    // Title
    pSlide.addText(slide.title, {
      x: '5%',
      y: '10%',
      w: '90%',
      h: 0.8,
      fontSize: 22,
      fontFace: 'Arial',
      color: 'F8FAFC',
      bold: true,
      align: 'right',
      rtlMode: true,
    });

    // Subtitle
    pSlide.addText(slide.subtitle, {
      x: '5%',
      y: '19%',
      w: '90%',
      h: 0.5,
      fontSize: 12,
      fontFace: 'Arial',
      color: '94A3B8',
      align: 'right',
      rtlMode: true,
    });

    // Bullets container
    const bulletItems = slide.bullets.map((b) => ({
      text: `• ${b.text}\n`,
      options: {
        fontSize: 14,
        color: 'E2E8F0',
        breakLine: true,
        fontFace: 'Arial',
      },
    }));

    const contentWidth = slide.monetization ? '55%' : '90%';
    const contentX = slide.monetization ? '40%' : '5%';

    pSlide.addText(bulletItems, {
      x: contentX,
      y: '27%',
      w: contentWidth,
      h: '60%',
      align: 'right',
      rtlMode: true,
      lineSpacing: 26,
    });

    // If slide has monetization details, add a structured card on the left
    if (slide.monetization) {
      const mon = slide.monetization;
      // Background box for monetization summary
      pSlide.addShape(pptx.ShapeType.roundRect, {
        x: '5%',
        y: '28%',
        w: '32%',
        h: '58%',
        fill: { color: '1E293B' },
        line: { color: '334155', width: 1 },
        rectRadius: 0.1,
      });

      const monInfo = [
        { text: `سختی: ${mon.difficulty}\n`, options: { fontSize: 11, bold: true, color: '38BDF8' } },
        { text: `سرمایه اولیه: ${mon.initialCapital}\n`, options: { fontSize: 11, color: 'E2E8F0' } },
        { text: `درآمد ماهانه (تومان): ${mon.estimatedMonthlyIncomeToman}\n`, options: { fontSize: 11, bold: true, color: '10B981' } },
        { text: `درآمد دلاری: ${mon.estimatedMonthlyIncomeUSD}\n`, options: { fontSize: 11, color: '10B981' } },
        { text: `زمان تا اولین درآمد: ${mon.timeToFirstIncome}\n\n`, options: { fontSize: 10, color: '94A3B8' } },
        { text: `ابزارهای کلیدی:\n`, options: { fontSize: 10, bold: true, color: 'A855F7' } },
        { text: `${mon.tools.slice(0, 4).join(' ، ')}\n\n`, options: { fontSize: 10, color: 'CBD5E1' } },
        { text: `نمونه واقعی:\n`, options: { fontSize: 10, bold: true, color: 'F59E0B' } },
        { text: `${mon.realWorldExample}`, options: { fontSize: 9, color: '94A3B8' } },
      ];

      pSlide.addText(monInfo, {
        x: '6%',
        y: '30%',
        w: '30%',
        h: '54%',
        align: 'right',
        rtlMode: true,
      });
    }

    // Add speaker notes
    const fullNotes = `قلاب شروع سخنران:\n${slide.speakerNote.hook}\n\nنکات اصلی:\n${slide.speakerNote.mainPoints.join('\n')}\n\nتوصیه زبان بدن: ${slide.speakerNote.bodyLanguageTip}\nتله قابل اجتناب: ${slide.speakerNote.pitfallToAvoid}`;
    pSlide.addNotes(fullNotes);
  });

  // Save presentation
  await pptx.writeFile({ fileName: 'هوش_مصنوعی_و_راه_های_کسب_درامد_۲۰_اسلاید.pptx' });
}
