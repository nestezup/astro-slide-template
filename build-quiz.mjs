import { execSync } from 'child_process';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.join(__dirname, 'dist');
const SLIDES_DIR = path.join(DIST_DIR, 'slides');

async function buildQuiz() {
  console.log('🚀 Starting Quiz-Only Build...');

  // 1. Clean previous build & Run Astro Build
  try {
    console.log('📦 Running Astro build with quiz config...');
    execSync('npx astro build --config astro.config.quiz.mjs', { stdio: 'inherit' });
  } catch (error) {
    console.error('❌ Build failed.');
    process.exit(1);
  }

  console.log('🧹 Cleaning up non-quiz content...');

  // 2. Remove non-quiz slides
  // We want to KEEP 'python-quiz' folder inside 'slides'
  // and DELETE everything else in 'slides'
  try {
    const slideFolders = await fs.readdir(SLIDES_DIR);
    
    for (const folder of slideFolders) {
      if (folder !== 'python-quiz') {
        const folderPath = path.join(SLIDES_DIR, folder);
        await fs.rm(folderPath, { recursive: true, force: true });
        console.log(`   - Removed: slides/${folder}`);
      }
    }
  } catch (e) {
    console.warn('⚠️ Warning: Could not clean slides folder (maybe empty?)');
  }

  // 3. Create redirect to first quiz slide
  try {
    const homeIndex = path.join(DIST_DIR, 'index.html');
    const redirectHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="refresh" content="0; url=/python-quiz/slides/python-quiz/01-quiz-type1/">
  <link rel="canonical" href="/python-quiz/slides/python-quiz/01-quiz-type1/">
  <title>Redirecting...</title>
</head>
<body>
  <p>Redirecting to <a href="/python-quiz/slides/python-quiz/01-quiz-type1/">quiz</a>...</p>
</body>
</html>`;
    await fs.writeFile(homeIndex, redirectHtml);
    console.log('🏠 Created redirect to first quiz slide');

    // Remove quiz-book folder (not needed)
    await fs.rm(path.join(DIST_DIR, 'quiz-book'), { recursive: true, force: true });
    console.log('   - Removed: quiz-book');
  } catch (e) {
    console.error('❌ Failed to set homepage:', e.message);
  }

  console.log('\n✨ Quiz-Only Build Complete!');
  console.log(`📂 Output: ${DIST_DIR}`);
  console.log('👉 You can now deploy the "dist" folder to GitHub Pages.');
}

buildQuiz();
