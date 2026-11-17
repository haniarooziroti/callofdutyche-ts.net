/** Hand-authored forum thread `<title>` and meta description (50–60 / 120–155 chars). */
export interface ForumThreadSeo {
  title: string;
  description: string;
}

export const FORUM_THREAD_SEO: Record<string, ForumThreadSeo> = {
  'aimbot-fov-smoothness-ranked-ops': {
    title: 'Aimbot FOV and smoothness for Multiplayer | COD forum',
    description:
      'Players compare aimbot FOV caps and smoothing for Call of Duty Multiplayer on PC—readable settings before you tune modules or open checkout on COD CHEAT.',
  },
  'loader-first-boot-defender-exclusions': {
    title: 'Win11 loader first boot & Defender paths | COD forum',
    description:
      'First-boot loader thread: which Windows Defender exclusions worked on Win11 for Call of Duty cheat downloads—order of operations before ranked play.',
  },
  'esp-clutter-night-raids': {
    title: 'ESP clutter on night raids — distance caps | COD forum',
    description:
      'Night raid ESP thread on culling teammate outlines and loot tags—how PC players cut HUD clutter before tuning Call of Duty cheat modules on COD CHEAT.',
  },
  'wallhack-skeleton-vs-box-only': {
    title: 'Wallhack skeleton vs box-only breach tips | COD forum',
    description:
      'Skeleton or box-only wallhack layouts for breach pushes on PC—forum notes on ultrawide crosshair gap before you match product modules or checkout.',
  },
  'patch-night-loader-verify-spin': {
    title: 'Patch night loader verify spin after update | COD forum',
    description:
      'Patch-night thread when the Call of Duty loader stalls on verify—wait for hub status, hash updates, and safe retest steps from COD CHEAT players.',
  },
  'loot-intel-extraction-timing': {
    title: 'Loot intel ESP with player ESP — worth it? | COD forum',
    description:
      'Solo queue loot intel ESP debate: container filters and HUD noise on long extractions—read player tips before adding loot modules at checkout.',
  },
  'stream-mode-esp-leak-obs': {
    title: 'Stream mode ESP leaking in OBS recordings | COD forum',
    description:
      'OBS capture thread when stream-safe ESP still appears in MP4 exports—scene checks and game capture fixes before streaming with Call of Duty overlays.',
  },
  'cloud-dma-worth-single-pc': {
    title: 'Cloud DMA without a second PC — realistic? | COD forum',
    description:
      'Cloud DMA hardware thread for Call of Duty: second PC, laptop reader paths, cabling, and risk notes—read before you add DMA SKUs at external checkout.',
  },
  'hwid-spoof-before-new-account': {
    title: 'HWID spoof order before new COD account | COD forum',
    description:
      'HWID spoofer workflow before a fresh Call of Duty login: restore points, cold boot verify, and loader order—forum checklist from COD CHEAT utilities.',
  },
  'trigger-delay-pistol-profile': {
    title: 'Trigger delay pistol profile vs rifles | COD forum',
    description:
      'Separate pistol trigger delay profiles for CQB—forum settings that look natural in kill cam before you enable combat modules on Call of Duty PC.',
  },
  'lite-vs-full-module-stack': {
    title: 'Lite ESP stack vs full combat modules | COD forum hub',
    description:
      'Weekend squad thread on intel-only ESP versus full aim and trigger stacks—match modules to role before checkout on the Call of Duty cheat catalog.',
  },
  'chams-brightness-night-map': {
    title: 'Chams brightness on dark maps — eye strain | COD forum',
    description:
      'Chams opacity and team color tips for moonlit Call of Duty maps—balance visibility with eye comfort before you save configs or buy visual modules.',
  },
  'cod-ricochet-overview': {
    title: 'RICOCHET awareness for Call of Duty PC | COD forum',
    description:
      'Informational RICOCHET and anti-cheat expectations for Call of Duty on PC—not bypass advice. Read risks, loader pauses, and FAQ links before play.',
  },
  'cod-mouse-sensitivity-baseline': {
    title: 'Mouse sensitivity baseline before aimbot | COD forum',
    description:
      'Lock cm/360 and ADS splits before tuning aimbot FOV on Call of Duty PC—forum baseline habits so overlay curves match your real muscle memory.',
  },
  'cod-ranked-play-esp-density': {
    title: 'Ranked Play ESP density settings on PC | COD forum',
    description:
      'Ranked Search and Destroy ESP density tips: distance caps, teammate mute, and thinner boxes—forum presets before you queue with Call of Duty modules.',
  },
  'cod-config-profile-swap': {
    title: 'Config profiles between playlists on PC | COD forum',
    description:
      'Swap loader configs between Battle Royale and Multiplayer on Call of Duty PC—forum steps for wider ESP in BR and tighter combat HUD in MP.',
  },
  'cod-checkout-plans': {
    title: 'Where Call of Duty checkout plans are listed | COD forum',
    description:
      'Checkout thread: Proceed to Checkout opens live monthly and lifetime plans on the store—confirm module scope on COD CHEAT product pages before you pay.',
  },
  'cod-windows-11-loader-notes': {
    title: 'Windows 11 first-boot loader checklist | COD forum',
    description:
      'Win11 Defender exclusions, reboot order, and first inject checklist for Call of Duty cheat loaders—support habits from COD CHEAT setup threads.',
  },
};

export function getForumThreadSeo(
  slug: string,
  fallbackTitle: string,
  fallbackExcerpt: string,
): ForumThreadSeo {
  const hit = FORUM_THREAD_SEO[slug];
  if (hit) return hit;
  const title = `${fallbackTitle} | cod-cheats.com`;
  const description = fallbackExcerpt;
  return { title, description };
}