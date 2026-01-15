import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONTENT_DIR = path.join(__dirname, 'src/content/slides/python2026');

async function getSlides() {
  const files = await fs.readdir(CONTENT_DIR);
  const slideFiles = files.filter(f => f.endsWith('.md') || f.endsWith('.mdx'));
  
  const slides = [];
  
  for (const file of slideFiles) {
    const content = await fs.readFile(path.join(CONTENT_DIR, file), 'utf-8');
    const orderMatch = content.match(/order:\s*(\d+)/);
    
    if (orderMatch) {
      slides.push({
        file: file,
        slug: file.replace(/\.(md|mdx)$/, ''),
        order: parseInt(orderMatch[1], 10)
      });
    }
  }
  
  return slides.sort((a, b) => a.order - b.order);
}

async function generatePDF() {
  const slides = await getSlides();
  console.log(`Found ${slides.length} slides. Starting PDF generation...`);
  
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  
  // PDF 저장을 위한 temp 디렉토리 확인
  try {
    await fs.mkdir('temp_pdf', { recursive: true });
  } catch (e) {}

  for (let i = 0; i < slides.length; i++) {
    const slide = slides[i];
    const url = `http://localhost:4321/slides/python2026/${slide.slug}?print=true`; // print=true ensures answers are expanded
    
    console.log(`[${i + 1}/${slides.length}] Generating PDF for ${slide.file} (Order: ${slide.order})...`);
    
    try {
      await page.goto(url, { waitUntil: 'networkidle', timeout: 15000 });
      
      // 스타일 조정 (확대)
      await page.evaluate(() => { 
        document.body.style.zoom = '1.5'; 
        // 퀴즈 정답 강제 표시 (이미 CSS media print로 처리되지만 안전장치)
        document.querySelectorAll('details.quiz-answer').forEach(el => el.open = true);
      });
      
      await page.waitForTimeout(500);
      
      const pdfPath = path.join(__dirname, 'temp_pdf', `slide_${String(i + 1).padStart(3, '0')}_${slide.slug}.pdf`);
      await page.pdf({
        path: pdfPath,
        format: 'A4',
        landscape: true,
        printBackground: true
      });
      
      // console.log(`  ✓ Saved: ${pdfPath}`);
    } catch (error) {
      console.error(`  ✗ Error: ${error.message}`);
    }
  }
  
  await browser.close();
  console.log('\n✅ PDF generation complete! Files are in "temp_pdf" folder.');
  console.log('Use Automator or other tools to combine them.');
}

generatePDF().catch(console.error);
