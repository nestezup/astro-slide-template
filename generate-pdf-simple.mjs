import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 슬라이드 파일명 목록 (order 순서대로)
const slides = [
  '01-title.md', '02-why.md', '03-pypl.md', '04-rank.md', '05-trend.md',
  '06-top10.md', '07-birth.md', '08-name.md', '09-logo.md', '10-zen.md',
  '11-beauty.md', '12-simplicity.md', '13-readability.md', '14-interpreter.md',
  '15-vs-compile.md', '16-pros-cons.md', '17-machine-code.md', '18-assembly.md',
  '19-python-simple.md', '20-high-low.md', '21-variable-intro.md', '22-python-var.md',
  '23-naming.md', '24-f-string.md', '25-comparison.md', '26-data-types.md',
  '27-conditionals.md', '28-loops.md', '29-functions.md', '30-list-comprehension.md',
  '31-dict-usage.md', '32-file-io.md', '33-exception.md', '34-fibonacci.md',
  '35-requests.md', '26-library.md', '27-pypi.md', '36-pandas-basics.md',
  '37-pandas-csv.md', '38-numpy-arrays.md', '39-matplotlib.md', '28-numpy-pandas.md',
  '29-visualization.md', '30-ml-stack.md', '31-web.md', '32-nlp.md',
  '33-polars.md', '34-langchain.md', '35-ruff.md', '41-automation.md',
  '36-use-cases.md', '37-data-analysis.md', '38-ai-use.md', '39-web-use.md',
  '40-automation.md', '41-productivity.md', '42-metacognition.md', '43-active-learning.md',
  '44-tips-1.md', '45-tips-2.md', '46-tips-3.md', '47-resources.md',
  '48-conclusion.md', '49-why-summary.md', '50-next-steps.md', '51-first-step.md',
  '52-mindset.md', '53-thanks.md'
];

async function generatePDF() {
  console.log(`Starting PDF generation for ${slides.length} slides...`);
  
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  
  for (let i = 0; i < slides.length; i++) {
    const slideFile = slides[i];
    const url = `http://localhost:4321/slides/python2026/${slideFile}`;
    
    console.log(`[${i + 1}/${slides.length}] ${slideFile}`);
    
    try {
      await page.goto(url, { waitUntil: 'networkidle', timeout: 15000 });
      await page.evaluate(() => { document.body.style.zoom = '1.5'; });
      await page.waitForTimeout(500);
      
      const pdfPath = path.join(__dirname, `temp_slide_${String(i + 1).padStart(3, '0')}.pdf`);
      await page.pdf({
        path: pdfPath,
        format: 'A4',
        landscape: true,
        printBackground: true
      });
      
      console.log(`  ✓ Saved: ${pdfPath}`);
    } catch (error) {
      console.error(`  ✗ Error: ${error.message}`);
    }
  }
  
  await browser.close();
  console.log('\n✅ PDF generation complete!');
}

generatePDF().catch(console.error);
