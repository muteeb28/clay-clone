import fs from "node:fs/promises";
import path from "node:path";

const BASE = "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/";
const OUT_DIR = path.join(process.cwd(), "public/images/clay.com/livestreams");

const ASSETS = [
  ["how-first-party-signals-become-your-gtm-moat.png", "6a5986993492c16cc875483e_How%20first%20party%20signals%20become%20your%20GTM%20moat.png"],
  ["how-clay-uses-clay-audiences.png", "6a39785087418506ee46e283_hcuc12.png"],
  ["top-1-faris-sumadi.png", "6a62328035eeb74a12987445_faristhumb.png"],
  ["how-clay-functions-mcp.png", "6a60f1f4519101df73aef92c_16x9_%20How%20Clay%20Functions%20%2B%20MCP%20power%20Enterprise%20GTM%20workflows.png"],
  ["sales-demo.avif", "69b8459022264d37d85eed75_sales%20demo.avif"],
  ["emea-sales-revops-demo.avif", "69a5b917561a0b258749bc5c_EMEA%20Sales%20%26%20Revops%20group%20demo.avif"],
  ["behind-the-scenes-webinar.png", "6a3883f871f43943045c2f88_Behind%20The%20Scenes%20Webinar.png"],
  ["fgtm-ep2.avif", "6a0f7989098131c6f506bf0d_fgtm%20ep%202.avif"],
  ["fgtm-ai-native-sdr.avif", "69f3a22d6fd8da1bc7cc30cb_6.avif"],
  ["chatgpt-integration.avif", "69766894e6131f0effe76d51_ChatGPTIntegration.avif"],
  ["what-works-for-gtm-2026.avif", "69767aa7cd94a67b75336510_What%20Works%20for%20GTM2026.avif"],
  ["hcuc-11-agents.png", "6a3f0e427558e45d5e0a1c94_HCUC%20ep11%20banner.png"],
  ["hcuc-10-mcp.png", "6a303cecb0e7b694c824f4ae_hcuc10fade.png"],
  ["hcuc-9-closed-lost.avif", "6a0e4976d75e3bb3c4d44cf4_hcuc%20ep9%20asset.avif"],
  ["hcuc-8-recruiting.avif", "69f27f68cf1b5f15405a82a1_Recruiting%20HCUC%208%20.avif"],
  ["hcuc-7-seo-aeo.png", "69d927e1b19e2a13778c6ef9_hcuc%207%201x%20thumbnail.png"],
  ["hcuc-6-abm.avif", "69cdc6c58fbd610cd27b67f5_hcuc%206%201x.avif"],
  ["hcuc-davide-account-prioritization.avif", "69c41b42fcdf2fe66d9069ce_Davide%20thumbnail.avif"],
  ["hcuc-manny-inbound.avif", "69d928d1917d90f9d88c5cea_hcuc%20manny.avif"],
  ["hcuc-ads-audiences.avif", "698b56140315377628d25688_1%20final.avif"],
  ["hcuc-bruno-qbr-decks.avif", "69d928db699ccbf0f0a577a2_bruno%20hcuc.avif"],
  ["gtm-global.avif", "69741eecc028a64d5ab21c65_GTMglobal.avif"],
  ["why-premium-data-wins.avif", "6976786e8ef781486c35f33b_whypremiumdatawins.avif"],
  ["shorter-forms-lead-enrichment.avif", "697412c11942c75f2712a88c_RMLEADENRICH2x.avif"],
  ["signal-driven-outbound.avif", "697413b4d42b8046d76ab2a8_SignalDrivenOutbound.avif"],
  ["local-goldmine.avif", "691d2a819af1299218cf519c_zmftxsgyzfw30fnuwwzj.avif"],
  ["signals-101.avif", "69741127bc0c62e854b393ce_signals101serrano.avif"],
  ["messy-to-magic-crm.avif", "691d2a8cd6bba0a9a1d4fa23_h9l4mxxo14qkqv7eotjz.avif"],
  ["scheduling-in-clay.avif", "690a8da1c3479b27ac4d9998_ohtcbnqjhqstyfzqakzo.avif"],
  ["unmasking-claygent.avif", "697ab5e392285a66945a0ae1_Unmaskingclaygent.avif"],
  ["emea-growth-marketing-demo.avif", "69a5b822b298b97d65312670_EMEA%20Marketing%20%26%20Growth%20group%20demo.avif"],
  ["marketing-demo.avif", "697ae9388c483b8ea68ecfe8_marketing%20demo.avif"],
  ["certifications-studio-crm-enrichment.avif", "69741a15a3a35c5951f030d9_SarahLivestream.avif"],
  ["certifications-studio-2.avif", "699c7c81955bef5c82d4d279_Livestream%20Asset-1.avif"],
  ["certifications-studio.avif", "699c7d52012d211f67a166ed_Livestream%20Asset%20(4).avif"],
  ["physician-pipeline-scale.avif", "69fa3f93652db7248dd8c507_16x9%20-%20healthcare%20livestream.avif"],
  ["manufacturing-outbound-motion.avif", "69fa3ecd018c21ae526fc2bf_manufacturingoutboundmotion.avif"],
  ["closed-won-lookalike-lusha.avif", "69d3e6e5fa76f5a6b0d414d4_Livestream%20Asset%20(19).avif"],
  ["reporting-engine.avif", "69c2fe97bcd8b37f65b90760_16x9%20-%20How%20to%20Build%20a%20Reporting%20Engine.avif"],
  ["leads-into-deals-attio.avif", "69c597be0bad6f678238ff70_Livestream%20Asset%20(14).avif"],
  ["self-maintaining-data-engine.avif", "69bc2fba974ca5f76bf15e16_How%20to%20Build%20a%20Self-Maintaining%20Data%20Engine.avif"],
  ["why-most-gtm-teams-fail-in-europe.avif", "69cbf43440eb42251e97a097_16x9%20-%20why%20most%20GTM%20teams%20fail%20in%20Europe%20with%20go%20nimbly.avif"],
  ["best-data-providers-europe.avif", "6994b493f1ebc6ad771aee11_How%20We%20Chose%20the%20Best%20Data%20Providers%20in%20Europe%20with%20the%20Kiln.avif"],
  ["gtm-strategies-europe.avif", "6994b2c3140bb12f25b43485_GTM%20strategies%20that%20actually%20work%20in%20europe%20with%20NewEdge%2016x9.avif"],
  ["stop-wasting-first-party-data.avif", "697ae2545b32e7f9e972da4b_stop%20final.avif"],
  ["ai-hype-into-revenue.avif", "696151c77dde9c02e00043a0_Clay%20PE%20Webinar%20(1).avif"],
  ["woodpecker-outreach.avif", "6976593bf2ed09de20fc722b_partnerwoodpecker.avif"],
  ["modash-influencer-strategy.avif", "69765daa4200b5d18276c885_modash.avif"],
  ["webflow-x-clay.avif", "690a8e1bf86dc7ebaf4f4e96_fa437f6ts8xwx89vzglt.avif"],
  ["hg-insights-tech-stack.avif", "690a8d4437e9c558b4c6c402_hsqxsej7aqdvdo4rmsmx.avif"],
  ["hubspot-abm-flows.avif", "699c84093b7cb2632decb76b_supercharge%20abm%20.avif"],
  ["clay-cup-2026-finalists.avif", "69b84b540bb0ce2d0e997f3f_Livestream%20Asset%20(3).avif"],
  ["sculpt-launch-recap.avif", "69765e61f77b70f7c5cd6ffd_Sculpt%20Launch%20recap.avif"],
  ["clay-cup-2025-finals.avif", "691e645c75b1e51b750996f7_Video%20transition%20wipe.avif"],
  ["getting-started-for-startups.avif", "69e91f17174318dd20dc2d11_goot.avif"],
  ["ai-skills-certification-studio.avif", "6978f8a33997482deea2d703_AI%20Skills%20Cert%20Thumbnail.avif"],
  ["hiring-gtm-engineers.avif", "69767156292a54ee6d7cbe6a_HiringGTME%27s.avif"],
  ["gtme-career-info-session.avif", "6976728317f8c645fe5b36b3_HowIBecameGTME.avif"],
  ["women-in-gtme.avif", "6976741978d05ab07a0d9ded_womeningtme.avif"],
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
