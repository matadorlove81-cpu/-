import { SLIDES_DATA } from '../data/slidesData';

/**
 * Generates ready-to-run Microsoft PowerPoint VBA macro code that builds all 20 slides automatically.
 */
export function generatePowerPointVbaCode(): string {
  const codeLines: string[] = [];

  codeLines.push(`' =========================================================================`);
  codeLines.push(`' ماکروی خودکار ساخت اسلایدهای ارائه: هوش مصنوعی و راه‌های کسب درآمد از آن`);
  codeLines.push(`' ساختار: ۲۰ اسلاید کامل شامل تیتر، بولت‌های ساختاریافته و یادداشت‌های سخنران`);
  codeLines.push(`' نحوه اجرا در نرم‌افزار PowerPoint:`);
  codeLines.push(`' ۱. نرم‌افزار Microsoft PowerPoint را باز کرده و یک Presentation خالی ایجاد کنید.`);
  codeLines.push(`' ۲. کلیدهای ترکیبی Alt + F11 را فشار دهید تا پنجره VBA باز شود.`);
  codeLines.push(`' ۳. از منوی Insert، گزینه Module را انتخاب کنید.`);
  codeLines.push(`' ۴. تمام کدهای زیر را در پنجره ماژول کپی و پیست کنید.`);
  codeLines.push(`' ۵. کلید F5 را فشار دهید یا دکمه Run را بزنید تا کل ارائه ظرف چند ثانیه ساخته شود.`);
  codeLines.push(`' =========================================================================`);
  codeLines.push(``);
  codeLines.push(`Sub CreateAIPresentation()`);
  codeLines.push(`    Dim pptApp As PowerPoint.Application`);
  codeLines.push(`    Dim pptPres As PowerPoint.Presentation`);
  codeLines.push(`    Dim newSlide As PowerPoint.Slide`);
  codeLines.push(`    Dim titleShape As PowerPoint.Shape`);
  codeLines.push(`    Dim contentShape As PowerPoint.Shape`);
  codeLines.push(`    Dim noteText As String`);
  codeLines.push(`    Dim i As Long`);
  codeLines.push(``);
  codeLines.push(`    On Error Resume Next`);
  codeLines.push(`    Set pptPres = ActivePresentation`);
  codeLines.push(`    If pptPres Is Nothing Then`);
  codeLines.push(`        Set pptApp = Application`);
  codeLines.push(`        Set pptPres = pptApp.Presentations.Add(msoTrue)`);
  codeLines.push(`    End If`);
  codeLines.push(`    On Error GoTo 0`);
  codeLines.push(``);
  codeLines.push(`    ' تنظیم نسبت تصویر ۱۶:۹ مدرن`);
  codeLines.push(`    With pptPres.PageSetup`);
  codeLines.push(`        .SlideWidth = 960`);
  codeLines.push(`        .SlideHeight = 540`);
  codeLines.push(`    End With`);
  codeLines.push(``);

  SLIDES_DATA.forEach((slide) => {
    const slideVar = `slide${slide.slideNumber}`;
    const cleanTitle = slide.title.replace(/"/g, '""');
    const cleanSubtitle = slide.subtitle.replace(/"/g, '""');
    const bulletListText = slide.bullets
      .map((b) => `• ${b.text.replace(/"/g, '""')}`)
      .join(`" & vbCrLf & "`);

    const speakerNotesText = `${slide.speakerNote.hook} \\n\\nنکات کلیدی:\\n${slide.speakerNote.mainPoints.join('\\n')}\\n\\nتوصیه زبان بدن: ${slide.speakerNote.bodyLanguageTip}`.replace(/"/g, '""');

    codeLines.push(`    ' -------------------------------------------------------------`);
    codeLines.push(`    ' اسلاید شماره ${slide.slideNumber}: ${cleanTitle}`);
    codeLines.push(`    ' -------------------------------------------------------------`);
    codeLines.push(`    Set newSlide = pptPres.Slides.Add(pptPres.Slides.Count + 1, ppLayoutCustom)`);
    codeLines.push(`    newSlide.FollowMasterBackground = msoFalse`);
    codeLines.push(`    newSlide.Background.Fill.Solid`);
    codeLines.push(`    newSlide.Background.Fill.ForeColor.RGB = RGB(15, 23, 42) ' Dark Slate 950`);
    codeLines.push(``);

    // Header shape (Title + Subtitle)
    codeLines.push(`    ' عنوان و زیرعنوان`);
    codeLines.push(`    Set titleShape = newSlide.Shapes.AddTextbox(msoTextOrientationHorizontal, 50, 40, 860, 90)`);
    codeLines.push(`    With titleShape.TextFrame`);
    codeLines.push(`        .WordWrap = msoTrue`);
    codeLines.push(`        With .TextRange`);
    codeLines.push(`            .Text = "${cleanTitle}" & vbCrLf & "${cleanSubtitle}"`);
    codeLines.push(`            .Font.Name = "Vazirmatn"`);
    codeLines.push(`            .Font.Size = 24`);
    codeLines.push(`            .Font.Bold = msoTrue`);
    codeLines.push(`            .Font.Color.RGB = RGB(248, 250, 252)`);
    codeLines.push(`            .ParagraphFormat.Alignment = ppAlignRight`);
    codeLines.push(`            ' زیرعنوان فونت ملایم‌تر`);
    codeLines.push(`            If .Paragraphs.Count > 1 Then`);
    codeLines.push(`                With .Paragraphs(2)`);
    codeLines.push(`                    .Font.Size = 13`);
    codeLines.push(`                    .Font.Bold = msoFalse`);
    codeLines.push(`                    .Font.Color.RGB = RGB(148, 163, 184)`);
    codeLines.push(`                End With`);
    codeLines.push(`            End If`);
    codeLines.push(`        End With`);
    codeLines.push(`    End With`);
    codeLines.push(``);

    // Content box with bullets
    codeLines.push(`    ' محتوای اصلی و بولت‌ها`);
    codeLines.push(`    Set contentShape = newSlide.Shapes.AddTextbox(msoTextOrientationHorizontal, 50, 140, 860, 320)`);
    codeLines.push(`    With contentShape.TextFrame`);
    codeLines.push(`        .WordWrap = msoTrue`);
    codeLines.push(`        With .TextRange`);
    codeLines.push(`            .Text = "${bulletListText}"`);
    codeLines.push(`            .Font.Name = "Vazirmatn"`);
    codeLines.push(`            .Font.Size = 16`);
    codeLines.push(`            .Font.Color.RGB = RGB(226, 232, 240)`);
    codeLines.push(`            .ParagraphFormat.Alignment = ppAlignRight`);
    codeLines.push(`            .ParagraphFormat.SpaceWithin = 1.3`);
    codeLines.push(`        End With`);
    codeLines.push(`    End With`);
    codeLines.push(``);

    // Speaker Notes
    codeLines.push(`    ' یادداشت‌های سخنران`);
    codeLines.push(`    noteText = "${speakerNotesText}"`);
    codeLines.push(`    On Error Resume Next`);
    codeLines.push(`    newSlide.NotesPage.Shapes.Placeholders(2).TextFrame.TextRange.Text = noteText`);
    codeLines.push(`    On Error GoTo 0`);
    codeLines.push(``);
  });

  codeLines.push(`    MsgBox "ارائه ۲۰ اسلایدی هوش مصنوعی و راه‌های کسب درآمد با موفقیت در پاورپوینت ساخته شد!", vbInformation, "پایان عملیات"`);
  codeLines.push(`End Sub`);

  return codeLines.join('\n');
}
