import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generatePDF() {
  console.log('Starting PDF generation...');
  
  // 브라우저 시작
  const browser = await chromium.launch({
    headless: true
  });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  const page = await context.newPage();
  
  // 슬라이드 개수 확인 (1-68)
  const totalSlides = 68;
  const pdfs = [];
  
  console.log(`Generating ${totalSlides} slides...`);
  
  for (let i = 1; i <= totalSlides; i++) {
    console.log(`Processing slide ${i}/${totalSlides}...`);
    
    // 슬라이드 번호 순으로 접근
    const url = `http://localhost:4321/`;
    
    try {
      await page.goto(url, { waitUntil: 'networkidle', timeout: 10000 });
      
      // 사이드바에서 i번째 슬라이드 클릭
      const slideSelector = `.nav-list .nav-item:nth-child(${i}) a`;
      await page.click(slideSelector);
      await page.waitForTimeout(1000);
      
      // 150% 확대
      await page.evaluate(() => {
        document.body.style.zoom = '1.5';
      });
      
      await page.waitForTimeout(500);
      
      // PDF 생성
      const pdfPath = path.join(__dirname, `temp_slide_${String(i).padStart(3, '0')}.pdf`);
      await page.pdf({
        path: pdfPath,
        format: 'A4',
        landscape: true,
        printBackground: true,
        scale: 1.0,
        margin: {
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px'
        }
      });
      
      pdfs.push(pdfPath);
    } catch (error) {
      console.error(`Error processing slide ${i}:`, error.message);
    }
  }
  
  await browser.close();
  
  console.log(`\n✅ Generated ${pdfs.length} PDF files`);
  console.log(`📁 Files saved in: ${__dirname}`);
  console.log('\nMerging PDFs...');
  
  return pdfs;
}

generatePDF().catch(console.error);
