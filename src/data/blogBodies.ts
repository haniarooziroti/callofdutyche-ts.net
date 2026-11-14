import { t } from '../i18n';

const intro =
  'These notes are for Call of Duty on PC—Multiplayer, Operations, and extraction runs. They explain how operators tune modules before checkout; they do not bypass anti-cheat or guarantee outcomes.';

/** Short article bodies keyed by blog slug (paragraphs). */
export const blogBodies: Record<string, string[]> = {
  'how-to-install-delta-force-cheats': [
    intro,
    'Download only from the portal linked in your receipt email. Run the loader as administrator when the guide asks, add Defender exclusions before the first launch, and verify the status banner is green after each supported PC titles patch.',
    'Start in a private match: enable player boxes only, then add loot filters. Save a config slot before you queue ranked Operations.',
  ],
  'delta-force-esp-settings': [
    intro,
    'Mute squad silhouettes first, then set enemy draw distance under 120m on night maps. Use thin boxes instead of thick glow so breach stairs stay readable.',
    'Swap to a warfare preset when you rotate into Havoc—wider FOV overlays are easier to over-tune on open lanes.',
  ],
  'delta-force-aimbot-smoothing': [
    intro,
    'Keep hip and ADS smoothing on separate sliders. Start with a 4–6° FOV cap and visible-check enabled before you test ranked queues.',
    'Use bone selection on closest or chest for CQB extraction sites; reserve head priority for longer warfare lanes after you verify kill-cam behavior.',
  ],
  'delta-force-anti-cheat-notes': [
    intro,
    'Platform rules still apply on every branch the seller lists. Read module scope on the product page, pause overlays after security drops, and never stack unknown drivers.',
    'Cloud DMA add-ons are hardware paths—confirm cabling and firmware with the store before you enable combat assists.',
  ],
  'delta-force-wallhack-layout': [
    intro,
    'Skeleton plus glow can block the reticle on stair pushes. Try box-only with distance tags, and push bomb or objective intel to screen corners.',
    'Enable chams only in clutch profiles so stream captures stay clean when capture-friendly mode is on.',
  ],
  'delta-force-triggerbot-timing': [
    intro,
    'Add 40–80ms delay before the first shot on peek angles. Hitchance gates help avoid spraying through smoke when loot ESP is still enabled.',
    'Disable trigger assists during extraction evac timers—combat-hide presets are faster to toggle with a hotkey.',
  ],
  'delta-force-loader-errors': [
    intro,
    'Copy the exact loader or integrity message into support mail—do not paraphrase. Verify game files through the PC client, reboot, and wait for a green portal banner after patch nights.',
    'Pause modules until the operator posts an updated build; running an old DLL after supported PC titles updates is the most common boot failure.',
  ],
  'hwid-spoof-new-delta-force-account': [
    intro,
    'Create a restore point, uninstall conflicting spoof tools, and cold-boot before you verify serials. Run the post-spoof checker the portal provides.',
    'Pair conservative ESP presets with a fresh account—hardware rotation does not erase reputation flags on its own.',
  ],
  'delta-force-radar-overlay-tips': [
    intro,
    'Radar reinforcement works best as a second signal—keep audio callouts primary on Operations. Shrink dot size so the minimap does not duplicate full ESP clutter.',
  ],
  'delta-force-stream-proof-overlays': [
    intro,
    'Test OBS game capture with stream-proof or capture-friendly toggles before you go live. Hide loot price tags if chat readability matters more than economy intel.',
  ],
  'aimbot-hud-tuning': [
    intro,
    'Keep hip and ADS smoothing on separate sliders. Start with a 4–6° FOV cap and visible-check enabled, then open checkout only after a private-range kill-cam check.',
    'If the seller lists separate warfare presets, save one slot for Havoc lanes and one for Operations CQB before you pay for extended aimbot access.',
  ],
  'esp-tactical-layout': [
    intro,
    'Mute squad silhouettes first, shorten enemy draw distance under 120m on night maps, and filter loot ESP to high-value items so the ESP module you buy matches how you actually queue.',
    'When descriptions mention capture-friendly HUD, test teammate mute before ranked—refunds are slower than toggling boxes pre-purchase.',
  ],
  'wallhack-breach-reads': [
    intro,
    'Skeleton plus glow can block the reticle on stair pushes. Box-only with distance tags is the preset most buyers keep after checkout—enable chams only in a clutch profile.',
    'Compare wallhack scope on the product page, then align box colors with your ESP tier so you are not stacking redundant overlays on the same subscription.',
  ],
  'extraction-loot-filters': [
    intro,
    'Set minimum value on item ESP, mute corpses during firefights, and map a combat-hide hotkey before extraction timers start—this is the layout extraction buyers keep after purchase.',
    'If loot intel is a paid add-on, verify filter limits in the storefront listing before you checkout so raid economy tags match the seller screenshot.',
  ],
};

export function getBlogBody(slug: string): string[] {
  if (blogBodies[slug]) return blogBodies[slug]!;
  const post = t.blog.items.find((p) => p.slug === slug);
  return post ? [intro, post.desc, 'Compare modules on the product hub, then open checkout when the scope matches your queue.'] : [intro];
}
