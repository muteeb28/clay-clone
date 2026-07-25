// Downloads Clay.com homepage assets into public/. Run with: node scripts/download-assets.mjs
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const IMG_PREFIX = "https://cdn.prod.website-files.com/61477f2c24a826836f969afe/";
const ROOT = process.cwd();

const images = [
  "6778506d788ebf16fef48551_Clay%20primary%20logo.avif|logo/clay-logo.avif",
  "6a3a92ab841a6313dc068fb8_dot-com_favicon_2026_512.png|__SEO__/favicon-512.png",
  "6a3ab15061812432ead96f56_Clay_Homepage_og-image%201000.png|__SEO__/og-image.png",
  "6a231084ed9c142b6d5c41c6_hero-still_v3.avif|hero/hero-poster.avif",
  "6a230420e94a7c3edcefe6df_Data-Still%201.avif|features/data-poster.avif",
  "6a230420f8c4e2d47d16de94_Agents-Still%201.avif|features/agents-poster.avif",
  "6a2304209a92a279ce577172_Orch-Still%201.avif|features/orch-poster.avif",
  "6a230421656b77ff82758b42_Execution-Still%201.avif|features/execution-poster.avif",
  "6a230ed1b32bb44bb4710471_Reps-Still%201.avif|features/reps-poster.avif",
  "6a26fff108a74d8a55ddab89_Footer-Still%20(1).avif|footer/footer-poster.avif",
  "6a164e8facfbaa9df371b518_Footer-Illo.avif|footer/footer-illo.avif",
  // marquee logos
  "6a0ccb555445092a87f2709e_stripe.svg|logos/stripe.svg",
  "6a0de741bbaa090adc89091a_figma.svg|logos/figma.svg",
  "6a0ccb0c2bf53107f21d44c7_openai.svg|logos/openai.svg",
  "6a0ccbb286520a4c0e24960d_cursor.svg|logos/cursor.svg",
  "6a0df040091092333801bccc_hubspot.svg|logos/hubspot.svg",
  "6a0df1791215a474231062b4_intercom.svg|logos/intercom.svg",
  "6a0de6e1e1dac677646e8b46_vanta.svg|logos/vanta.svg",
  "6a0de6610ad9f1586b27b2a7_Canva.svg|logos/canva.svg",
  "6a0df205f982e4d9bdc0e6e3_Perplexity.svg|logos/perplexity.svg",
  "6a0df09c2211b0094722ac24_Notion.svg|logos/notion.svg",
  "6a0df119144736bb9e7310b2_google.svg|logos/google.svg",
  "6a0de7adeebce78e9afbcd29_anthropic.svg|logos/anthropic.svg",
  "6a0df0d97c25defd00b0fa06_rippling.svg|logos/rippling.svg",
  "6a0de774f8c55d6f2dd0864f_workday.svg|logos/workday.svg",
  "6a0df15ead79765c58028f4c_uber.svg|logos/uber.svg",
  "6a0df14a9b0484a8e77799d4_okta.svg|logos/okta.svg",
  "6a0df080f837402bbf30791b_verkada.svg|logos/verkada.svg",
  "6a0df1b2385b73a20f7b534d_elevenlabs.svg|logos/elevenlabs.svg",
  "6a0df12ff09e285248c8b732_ramp.svg|logos/ramp.svg",
  "6a0ccb35071378dbf0e7baf2_Klaviyo.svg|logos/klaviyo.svg",
  // testimonial avatars
  "6a27072fed8d41627f686ded_Kyle-Ketchum.png|avatars/kyle-ketchum.png",
  "6a270645d902327911a1d724_Keith-Jones.png|avatars/keith-jones.png",
  "6a27069f5ff2c61149c44189_Adam-Wall.png|avatars/adam-wall.png",
  "6a2706e2b82567445788397d_David-Bulmer.png|avatars/david-bulmer.png",
  // feature panel customer/vendor mark chips
  "6a19d21cf5433eaf16559d34_anthropic-mark.svg|marks/anthropic-mark.svg",
  "6a0e5cc36c6c1fb12fafec17_intercom-mark.svg|marks/intercom-mark.svg",
  "6a19cc922508a770f774386d_mistralai.svg|marks/mistralai-mark.svg",
  "6a0f9da98e6616e14184123c_openai-mark.svg|marks/openai-mark.svg",
  "6a0fa04090e5a20076dda461_canva-mark.svg|marks/canva-mark.svg",
  "6a0fa08bf5aa625a3043914f_vanta-mark.svg|marks/vanta-mark.svg",
  "6a19d0fa0946858e6cbb4ad4_elevenlabs-mark.svg|marks/elevenlabs-mark.svg",
  "6a0f9dc63998c216525e3954_v-mark.svg|marks/verkada-mark.svg",
  "6a0fa066588fad364ee3f091_lovable-mark.svg|marks/lovable-mark.svg",
  "6a19d14446f706677e064370_rippling-mark.svg|marks/rippling-mark.svg",
  "6a2370e1303e00f4e41117aa_legora-mark.svg|marks/legora-mark.svg",
  "6a0f9de05192826ecf1acdfa_figma-mark.svg|marks/figma-mark.svg",
  "6a19d4e456842bfe0c1ea942_pendo-mark.svg|marks/pendo-mark.svg",
  "6a2371bba98c22a3005fcd06_hex-mark.svg|marks/hex-mark.svg",
  "6a237276303e00f4e4114292_terrappin-mark.svg|marks/terrapinn-mark.svg",
  // case studies / resources grid
  "6a16471db36485482904d85c_hex.avif|resources/hex-thumb.avif",
  "6a164762948537452e857d1c_v-logo-ph.avif|resources/verkada-thumb.avif",
  "6a2349f4fea507fcd5a01e42_poster-clay-story.avif|resources/livestream-poster.avif",
  "6a42d02ac96c9652b4a86e47_Content%20Card.svg|resources/sculpt-card.svg",
  "6a3a8ef1e9ef8b7642e8f3bb_69a8c5e3e7848a9f84d7b885_HCUC%20Livestream%20Asset.avif|resources/hcuc-livestream.avif",
  "6a19ed63725d3d3f66c4a991_community%20story.avif|resources/community-sandra.avif",
  "6a164e208220d25c3d28961a_Blog-card-3.avif|resources/university-card.avif",
  "6a164e4f36cd8072834477c6_more-clay-4.avif|resources/community-story-2.avif",
  "69d5e1ece9bc0e6bbc08127c_sculpt-Logo-Container.svg|resources/sculpt-logo-container.svg",
  // pill carousel dashboard mockups (7 tabs)
  "6a1797e6d3521b590356310e_case-1.avif|pills/case-1.avif",
  "6a1797e881c7e667e295352b_case-2.avif|pills/case-2.avif",
  "6a1797e635ca38900bfbb10a_case-4.avif|pills/case-4.avif",
  "6a1797eac527a0f357c5c344_case-5.avif|pills/case-5.avif",
  "6a1797e6aa3f837f06d2ba87_case-6.avif|pills/case-6.avif",
  "6a1797e66f7069ecbc07c7e9_case-7.avif|pills/case-7.avif",
  "6a17999e7db7a603d7ee0d66_case-8.avif|pills/case-8.avif",
  "6a17999dacf41661f8506bb7_case-9.avif|pills/case-9.avif",
  "6a17999dacf41661f8506ba0_case-10.avif|pills/case-10.avif",
  "6a179fb22da16e223f77e1ba_case-11.avif|pills/case-11.avif",
  "6a179fafd3521b5903574d32_case-12.avif|pills/case-12.avif",
  "6a179faff90f119220577af5_case-13.avif|pills/case-13.avif",
  "6a17a05226b22fa10e5df344_case-14.avif|pills/case-14.avif",
  "6a17a050b4b2caf5acfde214_case-15.avif|pills/case-15.avif",
  "6a17a0504d077d0205e53b81_case-16.avif|pills/case-16.avif",
  "6a17a25f992e1d665e16ea68_case-21.avif|pills/case-21.avif",
  "6a17a25c1fdaacf23f129e06_case-22.avif|pills/case-22.avif",
  "6a17a25c2ff7f5b53dc40b65_case-23.avif|pills/case-23.avif",
  "6a18e5abd503d973ad198052_replace-crm.avif|pills/replace-crm.avif",
  "6a2094daa832750c04c2510a_Clay%20Tam.png|pills/tab-tam.png",
  "6a209b5b885ec16359b408da_Clay%20Inbound.png|pills/tab-inbound.png",
  "6a20996884e854bc0fa08864_Clay%20Lead.png|pills/tab-lead.png",
  "6a209a14d3a0cd1f90f8b5bd_Clay%20Automated.png|pills/tab-automated.png",
  "6a20971c17129d6ab257e262_Clay%20CRM.png|pills/tab-crm.png",
  "6a209c0067df927ff4f57f25_Clay%20Ads.png|pills/tab-ads.png",
  "6a209b92aa1359df0a87f75b_Clay%20Rep.png|pills/tab-rep.png",
].map((line) => {
  const [file, dest] = line.split("|");
  if (dest.startsWith("__SEO__/")) {
    return { url: IMG_PREFIX + file, dest: path.join(ROOT, "public/seo", dest.slice("__SEO__/".length)) };
  }
  return { url: IMG_PREFIX + file, dest: path.join(ROOT, "public/images/clay.com", dest) };
});

const videos = [
  ["https://assets.clayrun.dev/Hero%2006-02%20Lossy%200001-0240.mp4", "hero.mp4"],
  ["https://assets.clayrun.dev/Data%2006-16%201000px.webm", "data.webm"],
  ["https://assets.clayrun.dev/Agents%2006-16%201000px.webm", "agents.webm"],
  ["https://assets.clayrun.dev/Orch%2006-16%201000px.webm", "orchestration.webm"],
  ["https://assets.clayrun.dev/Execution%2006-16%201000px.webm", "execution.webm"],
  ["https://assets.clayrun.dev/Reps%2006-16%201500px.webm", "reps.webm"],
  ["https://assets.clayrun.dev/Footer%2005-29%20Lossy%200001-0060.mp4", "footer.mp4"],
].map(([url, name]) => ({ url, dest: path.join(ROOT, "public/videos/clay.com", name) }));

async function downloadOne({ url, dest }) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await mkdir(path.dirname(dest), { recursive: true });
    await writeFile(dest, buf);
    console.log("OK  ", path.relative(ROOT, dest));
  } catch (err) {
    console.error("FAIL", path.relative(ROOT, dest), err.message);
  }
}

async function downloadBatch(items, concurrency = 4) {
  let i = 0;
  async function worker() {
    while (i < items.length) {
      const item = items[i++];
      await downloadOne(item);
    }
  }
  await Promise.all(Array.from({ length: concurrency }, worker));
}

console.log(`Downloading ${images.length} images and ${videos.length} videos...`);
await downloadBatch(images, 6);
await downloadBatch(videos, 3);
console.log("Done.");
