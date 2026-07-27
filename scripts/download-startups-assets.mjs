import fs from "node:fs/promises";
import path from "node:path";

const BASE_1 = "https://cdn.prod.website-files.com/61477f2c24a826836f969afe/";
const BASE_2 = "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/";

// [outDir, filename, url]
const ASSETS = [
  // page-specific images
  ["startups", "startup-img.jpg", BASE_1 + "69c4822730cf82c0383cb295_Startup-img.jpg"],
  ["startups", "startups-img.jpg", BASE_1 + "69c48227b99defb29f8ab55d_Startups-img.jpg"],
  ["startups", "signals.webp", BASE_1 + "69c1e069c83e468bb4c0147e_Signals.webp"],
  ["startups", "enrichment.webp", BASE_1 + "69c1e06a9d2870a35c8bf49a_Enrichment.webp"],
  ["startups", "wedge-logo.webp", BASE_1 + "69bdcfa3c4ce3bc7b22b9e60_wedge-logo.webp"],
  ["startups", "clay-ai-skills.webp", BASE_1 + "69decd0aef610e86d4779b77_Clay%20AI%20Skills.webp"],
  ["startups", "wedge-benefit-1.jpg", BASE_1 + "69dec00cc2dbba724b432054_Frame%202147224672.jpg"],
  ["startups", "wedge-benefit-2.jpg", BASE_1 + "69dec00cd04d67a010e7ce59_Frame%202147225242.jpg"],
  ["startups", "wedge-benefit-3.jpg", BASE_1 + "69dec00c39837d7795c1dcab_Frame%202147225243.jpg"],
  ["startups", "campus-benefit-1.jpg", BASE_1 + "69dec40a9338acbdda510ee4_Frame%202147224672.jpg"],
  ["startups", "campus-benefit-2.jpg", BASE_1 + "69dec40a74020d338d58b1c6_Frame%202147225242.jpg"],
  ["startups", "campus-benefit-3.jpg", BASE_1 + "69dec40a172345ebc620815c_Frame%202147225243.jpg"],
  ["startups", "talent-hub-icon.webp", BASE_1 + "69bdcdb83a95afc9255026ff_Tile_V2_Comp-p-800.webp"],
  ["startups", "job-board-icon.webp", BASE_1 + "69bdcdb8f8ceb4e02cfa05dc_Tile_V2_Comp-1-p-800.webp"],
  ["startups", "gallery-1.jpg", BASE_1 + "69ded2e7cde1f54588be781f_IMG_3548-p-1600.jpeg"],
  ["startups", "gallery-2.jpg", BASE_1 + "69c40ecb2eaa5cedcb739b7d_1772624127046.jpg"],
  ["startups", "gallery-3.jpg", BASE_1 + "69ded30e189781e6da71a445_IMG_3467-p-1600.jpeg"],
  ["startups", "gallery-4.jpg", BASE_1 + "69c40ecb02fb53ac41b9f733_1772798126031.jpg"],
  ["startups", "gallery-5.jpg", BASE_1 + "69c40ecbd1660467d48f0e8e_1773325456332.jpg"],
  ["startups", "gallery-6.jpg", BASE_1 + "69c40ecb305b28ee30a48dff_1772798190100.jpg"],
  ["startups", "gallery-7.jpg", BASE_1 + "69c40ecb7736fcd6ebeb9f82_1772798184242.jpg"],
  ["startups", "gallery-8.jpg", BASE_1 + "69c40ecb838da10658f87aea_1773752410321.jpg"],
  ["startups", "closing-cta-bg.jpg", BASE_1 + "6a26fff108a74d8a55ddab89_Footer-Still%20(1)-p-1600.avif"],
  // missing customer logos (site-wide logos folder)
  ["logos", "lovable.svg", BASE_1 + "69a7514da5829a662bfc902b_lovable-logoblack.svg"],
  ["logos", "supabase.png", BASE_1 + "69e791e1bca997afe1034de8_supabase.png"],
  ["logos", "heygen.png", BASE_1 + "69e791e194e5baa532af9ea6_heygen.png"],
  // missing testimonial avatars (site-wide avatars folder)
  ["avatars", "stevie-case.avif", BASE_2 + "667c376cac4c1c2f449dc5c6_image%20(11)-p-500.avif"],
  ["avatars", "alexander-demoulin.avif", BASE_2 + "699dd29891bd5c96c52acc5e_adintercoms.avif"],
  ["avatars", "davide-grieco.avif", BASE_2 + "667b1c28e0f601dece9badaf_image%20(7)-p-500.avif"],
  ["avatars", "josh-kim.avif", BASE_2 + "667b1c0e213afc005ab64813_image%20(5).avif"],
  ["avatars", "kris-rudegraap.avif", BASE_2 + "667b1da0ad5a40f8dd7f1b5d_image%20(10).avif"],
  ["avatars", "julien-reiman.avif", BASE_2 + "667b1c67c6fbffc261d65d23_image%20(8).avif"],
  ["avatars", "ryan-narod.avif", BASE_2 + "667b1bf95962945c50b6ac82_image%20(4).avif"],
];

async function downloadOne([dir, filename, url]) {
  const outDir = path.join(process.cwd(), "public/images/clay.com", dir);
  await fs.mkdir(outDir, { recursive: true });
  const dest = path.join(outDir, filename);
  const res = await fetch(url);
  if (!res.ok) {
    console.error(`FAILED ${res.status} ${dir}/${filename} <- ${url}`);
    return;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  await fs.writeFile(dest, buf);
  console.log(`OK ${dir}/${filename} (${buf.length} bytes)`);
}

async function main() {
  const batchSize = 4;
  for (let i = 0; i < ASSETS.length; i += batchSize) {
    const batch = ASSETS.slice(i, i + batchSize);
    await Promise.all(batch.map(downloadOne));
  }
}

main();
