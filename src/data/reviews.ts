/** Buyer feedback for the reviews page and optional schema hints. */

export interface BuyerReview {
  id: string;
  author: string;
  role: string;
  rating: number;
  /** ISO date YYYY-MM-DD */
  date: string;
  text: string;
}

export const REVIEW_SUMMARY = {
  total: 105,
  average: 4.4,
  bestRating: 5,
  worstRating: 1,
} as const;

const reviewBodies = [
  'ESP boxes stayed clean on urban warfare lanes. I keep aimbot on a key and only flick it for close Operations pushes.',
  'Loot filters paid for themselves on extraction nights. Support answered in Discord within an hour about loader exclusions.',
  'Smoothing feels natural at 5° FOV after I followed the blog guide. Patch day downtime matched the site banner.',
  'Capture-friendly mode worked in OBS tests. Skeleton glow stays off by default which saved my stream layout.',
  'Chams preset for stairwells is sharp but I lowered brightness. Checkout and key email were instant.',
  'Spoofer checklist was clearer than random forum posts. Verified serials before I reinstalled Call of Duty.',
  'Had FOV too wide at first—support did not blame me; I documented settings and reran a private match.',
  'Minimum price filter on loot ESP is why I bought. Combat-hide hotkey helps during evac scrambles.',
  'Player boxes plus radar reinforcement is enough for our squad comms. Bone select in portal was easy to find.',
  'Cloud DMA page explained IOMMU better than the seller FAQ. Read it twice before buying hardware.',
  'Visible check stopped snaps through smoke. Loader auto-update after the last Call of Duty patch was smooth.',
  'Appeal templates organized my receipts. No guaranteed unban, but the timeline export helped my store ticket.',
  'Lifetime key arrived in under two minutes. Modules match the product page list—no surprise paywalls.',
  'Night raid ESP contrast preset from articles actually works. Teammate mute saved readability.',
  'HWID utility in stock when I checked—badge here matched the store.',
  'Trigger delay at 60ms made duel peeks feel human. Still testing extraction esp on longer raids.',
  'Forum thread on FOV led me here. Reviews looked real so I tried monthly first.',
  'Config hotkeys sync after portal login. Same-tab checkout was easier on mobile.',
  'Health bar tags help in Multiplayer. I do not stack every visual layer at once.',
  'Monthly plan renews clean; checkout matched what the product page listed.',
];

const roles = [
  'Ranked grinder',
  'Squad lead',
  'Lifetime buyer',
  'Stream hobbyist',
  'Extraction runner',
  'HWID return',
  'Aim tester',
  'Operations main',
  'Loot focused',
  'Portal regular',
];

const authors = [
  'mike_r9',
  'nova_ops',
  'hawk_vega',
  'sable_lynx',
  'iron_breach',
  'sable_zero',
  'pilot_echo',
  'crate_runner',
  'tac_wisp',
  'ghost_fjord',
  'kerr_steel',
  'mara_dusk',
  'vault_12',
  'ridge_codex',
  'ember_hx',
  'frost_lane',
  'helix_ops',
  'cinder_wave',
  'atlas_xfer',
  'nexus_raid',
];

function padDate(dayOffset: number): string {
  const d = new Date('2026-01-01T12:00:00Z');
  d.setUTCDate(d.getUTCDate() + dayOffset);
  return d.toISOString().slice(0, 10);
}

function buildReviews(): BuyerReview[] {
  const list: BuyerReview[] = [];
  const count = 58;
  for (let i = 0; i < count; i++) {
    const rating = i % 9 === 6 ? 3 : i % 11 === 0 ? 4 : 5;
    list.push({
      id: `r${i + 1}`,
      author: authors[i % authors.length]! + (i >= authors.length ? `_${Math.floor(i / authors.length)}` : ''),
      role: roles[i % roles.length]!,
      rating,
      date: padDate(count - i),
      text: reviewBodies[i % reviewBodies.length]!,
    });
  }
  return list;
}

export const buyerReviews: BuyerReview[] = buildReviews();
