const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function generatePDF() {
  console.log('Starting PDF generation...');
  
  // 브라우저 시작
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  const page = await context.newPage();
  
  // dist 폴더에서 슬라이드 목록 가져오기
  const slidesDir = path.join(__dirname, 'dist/client/slides/python2026');
  const slideFiles = fs.readdirSync(slidesDir)
    .filter(f => f.endsWith('.md'))
    .sort();
  
  console.log(`Found ${slideFiles.length} slides`);
  
  const pdfs = [];
  
  for (let i = 0; i < slideFiles.length; i++) {
    const slideFile = slideFiles[i];
    const slideName = slideFile.replace('.md', '');
    const url = `http://localhost:4321/slides/python2026/${slideFile}`;
    
    console.log(`Processing ${i + 1}/${slideFiles.length}: ${slideName}`);
    
    try {
      await page.goto(url, { waitUntil: 'networkidle' });
      
      // 150% 확대
      await page.evaluate(() => {
        document.body.style.zoom = '1.5';
      });
      
      // 약간 대기
      await page.waitForTimeout(500);
      
      // PDF 생성
      const pdfPath = path.join(__dirname, `temp_slide_${i + 1}.pdf`);
      await page.pdf({
        path: pdfPath,
        format: 'A4',
        landscape: true,
        printBackground: true,
        scale: 1.0
      });
      
      pdfs.push(pdfPath);
    } catch (error) {
      console.error(`Error processing ${slideName}:`, error.message);
    }
  }
  
  await browser.close();
  
  console.log(`\n✅ Generated ${pdfs.length} PDF files`);
  console.log(`📁 Files saved in: ${__dirname}`);
  console.log('\nTo merge PDFs, use:');
  console.log('For macOS: "/System/Library/Automator/Combine PDF Pages.action/Contents/MacOS/join" -o python2026-slides.pdf temp_slide_*.pdf');
  
  return pdfs;
}

generatePDF().catch(console.error);
