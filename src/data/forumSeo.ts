/** Hand-authored forum thread `<title>` and meta description (50–60 / 120–155 chars). */
export interface ForumThreadSeo {
  title: string;
  description: string;
  /** When set, this thread is noindex and points readers at the ranking guide. */
  guideHref?: string;
}

export const FORUM_THREAD_SEO: Record<string, ForumThreadSeo> = {
  'cod-forum-aimbot': {
    title: 'Aimbot FOV for Multiplayer | Call of Duty Cheats',
    description:
      'Multiplayer thread on aimbot FOV caps and ADS smoothing. The settings write-up lives in the aimbot FOV guide.',
    guideHref: '/blogs/cod-aimbot-fov/',
  },
  'cod-loader-boot': {
    title: 'Win11 loader first boot & Defender paths | Call of Duty Cheats',
    description:
      'First-boot loader thread: which Windows Defender exclusions worked on Win11 for Call of Duty cheat downloads—order of operations before ranked play.',
  },
  'cod-esp-night': {
    title: 'Night Raid ESP Clutter | Call of Duty Cheats',
    description:
      'Thread on teammate outlines and loot tags during night raids. Distance caps and box thickness are in the ESP settings guide.',
    guideHref: '/blogs/cod-esp-settings/',
  },
  'cod-wallhack-box': {
    title: 'Skeleton vs Box Wallhack | Call of Duty Cheats',
    description:
      'Breach thread on skeleton layouts versus box-only reads. The comparison is in the wallhack and ESP guide.',
    guideHref: '/blogs/cod-wallhack/',
  },
  'cod-patch-loader': {
    title: 'Loader Verify Spin After a Patch | Call of Duty Cheats',
    description:
      'Thread for a loader that sits on verify after a game update. The wait-and-retest steps are in the patch day guide.',
    guideHref: '/blogs/cod-patch-day/',
  },
  'cod-loot-timing': {
    title: 'Loot intel ESP with player ESP — worth it? | Call of Duty Cheats',
    description:
      'Solo queue loot intel ESP debate: container filters and HUD noise on long extractions—read player tips before adding loot modules at checkout.',
  },
  'cod-stream-leak': {
    title: 'Stream mode ESP leaking in OBS recordings | Call of Duty Cheats',
    description:
      'OBS capture thread when stream-safe ESP still appears in MP4 exports—scene checks and game capture fixes before streaming with Call of Duty overlays.',
  },
  'cod-dma-one-pc': {
    title: 'Cloud DMA without a second PC — realistic? | Call of Duty Cheats',
    description:
      'Cloud DMA thread for Call of Duty: second PC, cabling, and what a single gaming PC cannot do on its own.',
  },
  'cod-hwid-account': {
    title: 'HWID Order Before a New Account | Call of Duty Cheats',
    description:
      'Thread on restore points and a cold boot before a new Call of Duty login. The utility page covers the spoof steps.',
    guideHref: '/products/call-of-duty-cheats/hwid-spoofer/',
  },
  'cod-trigger-pistol': {
    title: 'Trigger delay pistol profile vs rifles | Call of Duty Cheats',
    description:
      'Separate pistol trigger delay profiles for CQB—forum settings that look natural in kill cam before you enable combat modules on Call of Duty PC.',
  },
  'cod-lite-vs-full': {
    title: 'Lite ESP stack vs full combat modules | Call of Duty Cheats',
    description:
      'Weekend squad thread on intel-only ESP versus full aim and trigger stacks—match modules to role before checkout on the Call of Duty cheat catalog.',
  },
  'cod-chams-night': {
    title: 'Chams brightness on dark maps — eye strain | Call of Duty Cheats',
    description:
      'Chams opacity and team color tips for moonlit Call of Duty maps—balance visibility with eye comfort before you save configs or buy visual modules.',
  },
  'cod-ricochet-overview': {
    title: 'RICOCHET awareness for Call of Duty PC | Call of Duty Cheats',
    description:
      'Informational RICOCHET and anti-cheat expectations for Call of Duty on PC—not bypass advice. Read risks, loader pauses, and FAQ links before play.',
  },
  'cod-mouse-sens': {
    title: 'Mouse sensitivity baseline before aimbot | Call of Duty Cheats',
    description:
      'Lock cm/360 and ADS splits before tuning aimbot FOV on Call of Duty PC—forum baseline habits so overlay curves match your real muscle memory.',
  },
  'cod-ranked-esp': {
    title: 'Ranked Play ESP density settings on PC | Call of Duty Cheats',
    description:
      'Ranked Search and Destroy ESP density tips: distance caps, teammate mute, and thinner boxes—forum presets before you queue with Call of Duty modules.',
  },
  'cod-config-swap': {
    title: 'Config profiles between playlists on PC | Call of Duty Cheats',
    description:
      'Swap loader configs between Battle Royale and Multiplayer on Call of Duty PC—forum steps for wider ESP in BR and tighter combat HUD in MP.',
  },
  'cod-checkout': {
    title: 'Where Call of Duty Plans Are Listed | Call of Duty Cheats',
    description:
      'Thread on monthly and lifetime plans. The step list for paying and saving the receipt is in the checkout guide.',
    guideHref: '/blogs/buy-cod-cheats/',
  },
  'cod-win11-loader': {
    title: 'Windows 11 first-boot loader checklist | Call of Duty Cheats',
    description:
      'Windows 11 Defender exclusions, reboot order, and the first loader launch for Call of Duty on PC.',
  },
};

export function getForumThreadSeo(
  slug: string,
  fallbackTitle: string,
  fallbackExcerpt: string,
): ForumThreadSeo {
  const hit = FORUM_THREAD_SEO[slug];
  if (hit) return hit;
  const title = `${fallbackTitle} | callofdutycheats.net`;
  const description = fallbackExcerpt;
  return { title, description };
}