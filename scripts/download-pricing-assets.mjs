import fs from "node:fs/promises";
import path from "node:path";

const BASE = "https://cdn.prod.website-files.com/61477f2c24a826836f969afe/";
const OUT_DIR = path.join(process.cwd(), "public/images/clay.com/pricing");

const ASSETS = [
  ["testimonial-cards.png", "69a86bdadd4468f56fa50492_testimonial%20cards.png"],
  ["case-study-1.jpg", "69a870e8850bf0ebe9d8a371_Rectangle%2034624432.jpg"],
  ["case-study-2.jpg", "69a870d8536c170814da28ad_Rectangle%2034624431.jpg"],
  ["case-study-3.jpg", "69a870d80254bfb76fd08c68_Rectangle%2034624433.jpg"],
  ["case-study-4.jpg", "69a870d7b3a5dfe7629d2518_Rectangle%2034624429.jpg"],
  ["case-study-5.jpg", "69a870d8550be9d70a7f6045_Rectangle%2034624434.jpg"],
  ["case-study-6.jpg", "69a870d8a82de0d807fe0b95_Group%202147225502.jpg"],
  ["badge-soc2.avif", "678ff28d3da7210678ba8646_SOC2-0001.avif"],
  ["badge-gdpr.avif", "67896c1edb3f2f384f819b99_GDPR-0001.avif"],
  ["badge-ccpa.avif", "67896c1edb3f2f384f819b96_CCPA-0001.avif"],
  ["badge-iso27001.avif", "67896c1e53f87da7d3ee3d10_ISO-0001.avif"],
  ["badge-iso42001.png", "69a321d51f0bcfef2960157e_iso42001.png"],
];

async function downloadOne([filename, remotePath]) {
  const url = BASE + remotePath;
  const dest = path.join(OUT_DIR, filename);
  const res = await fetch(url);
  if (!res.ok) {
    console.error(`FAILED ${res.status} ${filename} <- ${url}`);
    return;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  await fs.writeFile(dest, buf);
  console.log(`OK ${filename} (${buf.length} bytes)`);
}

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true });
  const batchSize = 4;
  for (let i = 0; i < ASSETS.length; i += batchSize) {
    const batch = ASSETS.slice(i, i + batchSize);
    await Promise.all(batch.map(downloadOne));
  }
}

main();
