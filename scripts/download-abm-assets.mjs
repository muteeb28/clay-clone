import fs from "node:fs/promises";
import path from "node:path";

const BASE = "https://cdn.prod.website-files.com/61477f2c24a826836f969afe/";
const OUT_DIR = path.join(process.cwd(), "public/images/clay.com/abm");

const ASSETS = [
  ["card1-data.jpg", "694346bcd8acfbb27daa8e12_ABM01.jpg"],
  ["card2-signals.jpg", "694346c12db6ab1b5001b715_ABM02.jpg"],
  ["card3-scoring.jpg", "694346c03fb35d8eed86e177_ABM03.jpg"],
  ["card4-multichannel.jpg", "6965680bf2a260203c49af83_AMB-small.jpg"],
  ["case-verkada.webp", "684880d254f2d95af887cecb_verkada.webp"],
  ["case-recharge.jpg", "6943bafc488240c16339c158_recharge.jpg"],
  ["case-rippling.webp", "684880d2e5fd2eca6f011c42_rippling.webp"],
  ["logo-tab-verkada.svg", "66dac29242c23ab5f82e0189_img-logo-verkada.svg"],
  ["logo-tab-recharge.png", "6943bbaa203b31d310068933_Recharge_logo_Logo%201.png"],
  ["logo-tab-rippling.svg", "67cf030cbaa563765c83e019_Frame.svg"],
  ["diagram-lock-accounts.jpg", "696161e2423f3fdef588d7a8_ABM222.jpg"],
  ["diagram-tier-accounts.jpg", "69616245eea0a95bbfbcd360_card.jpg"],
  ["diagram-monitor-awareness.jpg", "69656629dea90f565f7cce61_AMB.jpg"],
  ["diagram-multichannel-campaigns.jpg", "695cd188ecd512a7963b65d0_ABM5.jpg"],
  ["everett-berry.jpg", "69692894e38c40d9e16a53b3_Everett2-p-1080.jpg"],
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
