import fs from 'node:fs';
import path from 'node:path';

const out = path.join(process.cwd(), 'src/data/forum.ts');

const content = `export interface ForumComment {
  author: string;
  age: string;
  score: number;
  body: string;
  replies?: ForumComment[];
}

export interface ForumPost {
  slug: string;
  category: string;
  categoryTone: 'purple' | 'blue' | 'green' | 'orange';
  title: string;
  excerpt: string;
  author: string;
  age: string;
  commentsCount: number;
  upvotes: number;
  flair?: string;
  body: string[];
  comments: ForumComment[];
}

export const forumCategories = [
  { name: 'Setup & Loader', tone: 'blue', icon: 'settings' },
  { name: 'Aimbot', tone: 'orange', icon: 'featureAimbot' },
  { name: 'ESP & Wallhack', tone: 'green', icon: 'featureEsp' },
  { name: 'Loot & Extraction', tone: 'green', icon: 'package' },
  { name: 'Cloud DMA', tone: 'purple', icon: 'compatMonitor' },
  { name: 'Purchasing', tone: 'purple', icon: 'instantDelivery' },
  { name: 'General', tone: 'purple', icon: 'users' },
] as const;

export const forumPosts: ForumPost[] = ${JSON.stringify(
  [
    {
      slug: 'aimbot-settings-level-why-wont-ban',
      category: 'Aimbot',
      categoryTone: 'orange',
      title: 'Aimbot Settings: What Level & Why Won’t I Get Banned?',
      excerpt:
        'Trying to pick FOV/smooth for Call of Duty PvP without looking like a highlight reel. What are you actually running?',
      author: 'ridge_runner_47',
      age: '4 hours ago',
      commentsCount: 5,
      upvotes: 142,
      flair: 'Tuning',
      body: [
        'Bought the full module set for Call of Duty and keep bouncing between aim profiles. Wide FOV feels great in the firing range but my buddy watching Discord said the snaps look “too clean” in Warfare mode.',
        'I know nothing is risk-free — I just want a starting point that does not scream rage. What smooth/FOV do you leave alone for whole evenings?',
      ],
      comments: [
        {
          author: 'stick_to_chest',
          age: '3 hours ago',
          score: 38,
          body: 'FOV 6–9, smooth 12–16 for ARs. Head bone only inside 12m, chest past that. Boring but stops the magnet look.',
        },
        {
          author: 'dma_pc_guy',
          age: '3 hours ago',
          score: 21,
          body: 'Cloud DMA build still needs sane values. Hardware does not fix a 180° snap on stream.',
          replies: [
            {
              author: 'ridge_runner_47',
              age: '2 hours ago',
              score: 9,
              body: 'Dropped FOV to 8 and it already feels less twitchy. Thanks.',
            },
            {
              author: 'stick_to_chest',
              age: '2 hours ago',
              score: 6,
              body: 'Log the numbers. Next patch you will forget what worked.',
            },
          ],
        },
        {
          author: 'salty_legit',
          age: '90 min. ago',
          score: -1,
          body: 'There is no “won’t ban” setting. Stop asking like the game owes you safety.',
        },
        {
          author: 'weekend_warrior',
          age: '1 hour ago',
          score: 4,
          body: 'Separate hotkeys for hip and ADS saved me. One global slider never felt right on SMGs.',
        },
      ],
    },
    {
      slug: 'instructions-first-loader-cloud-dma',
      category: 'Setup & Loader',
      categoryTone: 'blue',
      title: 'Instructions to use the cheats — first boot with HVCI still on?',
      excerpt: 'Followed the PDF but loader hangs on “waiting for DMA link”. Secure Boot is on like the checklist says.',
      author: 'fresh_install_11',
      age: '6 hours ago',
      commentsCount: 4,
      upvotes: 88,
      flair: 'Setup',
      body: [
        'Windows 11, TPM on, Core Isolation on, HVCI on — all green in the requirements list. Game launches fine but the client never gets past waiting for hardware path.',
        'Do I start the second PC first or the game PC? Manual is vague about order.',
      ],
      comments: [
        {
          author: 'dual_boxer',
          age: '5 hours ago',
          score: 29,
          body: 'DMA rig powered → cable seated → loader on game PC → then launch Call of Duty borderless. Fullscreen blocked me for a week.',
        },
        {
          author: 'it_denied_me',
          age: '4 hours ago',
          score: 7,
          body: 'Spent 3 hours and still stuck. Ticket answered next day which is meh but they fixed a bad driver hash.',
          replies: [
            {
              author: 'fresh_install_11',
              age: '3 hours ago',
              score: 5,
              body: 'Borderless + DMA first fixed the hang. Wish the doc said that louder.',
            },
          ],
        },
        {
          author: 'dual_boxer',
          age: '3 hours ago',
          score: 11,
          body: 'If verify spins after a patch, don’t reinstall old files — wait for the new hash post.',
        },
      ],
    },
    {
      slug: 'valorant-style-features-delta-force',
      category: 'General',
      categoryTone: 'purple',
      title: 'Call of Duty Cheats Features — does it cover Warfare and Hazard ops?',
      excerpt: 'Looking for ESP + aim like I saw in Valorant cheat demos but for Call of Duty modes. Same license?',
      author: 'mode_hopper',
      age: '8 hours ago',
      commentsCount: 3,
      upvotes: 64,
      body: [
        'Friend sent a Valorant cheats features list (trigger, wallhack, ESP colors). Store page for Call of Duty looks similar but mentions loot ESP and chams.',
        'Anyone run one config for large-scale Warfare and a quieter one for extraction, or do you swap profiles?',
      ],
      comments: [
        {
          author: 'extract_main',
          age: '7 hours ago',
          score: 19,
          body: 'Two profiles: “Warfare” with skeleton off, “Hazard” with loot price filter at 8k+. Combat mode hide is clutch when pushing extract.',
        },
        {
          author: 'disappointed_buyer',
          age: '6 hours ago',
          score: 2,
          body: 'Loot ESP mislabels some crates after last patch. Waited two days for a fix — worked but annoying.',
        },
        {
          author: 'mode_hopper',
          age: '5 hours ago',
          score: 8,
          body: 'Split profiles helped. Still wish chams had a faster toggle for streams.',
        },
      ],
    },
    {
      slug: 'esp-skeleton-distance-cap',
      category: 'ESP & Wallhack',
      categoryTone: 'green',
      title: 'ESP skeleton + boxes — distance cap before the HUD melts?',
      excerpt: 'Night map with rain and every operator glows like a Christmas tree. How do you cap distance?',
      author: 'hud_anxiety',
      age: '9 hours ago',
      commentsCount: 5,
      upvotes: 73,
      flair: 'ESP',
      body: [
        'Helmet level tags are sweet for picking fights but past 120m the screen is spaghetti. Running 1440p on a 3070.',
        'Do you disable skeleton first or drop max distance? Also team number colors — defaults ok?',
      ],
      comments: [
        {
          author: 'clean_crosshair',
          age: '8 hours ago',
          score: 24,
          body: 'Max distance 110m, skeleton off, keep helmet level text. Snaplines only under 40m.',
        },
        {
          author: 'colorblind_ftw',
          age: '7 hours ago',
          score: 15,
          body: 'Cyan enemies, desaturated teammates. Stock red/green vanished on the rainy map for me.',
          replies: [
            {
              author: 'hud_anxiety',
              age: '6 hours ago',
              score: 7,
              body: 'Cyan preset saved. FPS went up too lol',
            },
          ],
        },
        {
          author: 'minimalist_esp',
          age: '5 hours ago',
          score: 9,
          body: 'Combat mode hide AI corpses — loot ESP stays, less clutter.',
        },
        {
          author: 'nocap',
          age: '4 hours ago',
          score: -2,
          body: 'Just play the game normally bro',
        },
      ],
    },
    {
      slug: 'loot-esp-minimum-price-filter',
      category: 'Loot & Extraction',
      categoryTone: 'green',
      title: 'Loot ESP minimum price filter — what do you set for fast raids?',
      excerpt: 'Computers and chest rigs light up the overlay. Need sane filters for 20-minute runs.',
      author: 'speed_freak',
      age: '11 hours ago',
      commentsCount: 4,
      upvotes: 51,
      body: [
        'Playing hazard raids for cash. Loot ESP shows every soda can. Store listing mentions minimum price filter but default feels random.',
        'What number do you use so high-value crates pop without scrolling fifty lines of junk?',
      ],
      comments: [
        {
          author: 'market_watcher',
          age: '10 hours ago',
          score: 18,
          body: 'Start at 12k, bump to 18k on busy nights. Corpses off unless I’m looting players.',
        },
        {
          author: 'speed_freak',
          age: '9 hours ago',
          score: 5,
          body: '12k works. Still wish computer ESP had a distance cap.',
          replies: [
            {
              author: 'market_watcher',
              age: '8 hours ago',
              score: 6,
              body: 'Toggle computers with a hotkey. I only flip it on when pushing data centers.',
            },
          ],
        },
        {
          author: 'unlucky_spawn',
          age: '7 hours ago',
          score: 3,
          body: 'Filter helps but I still died to a camper twice. ESP doesn’t fix ears.',
        },
      ],
    },
    {
      slug: 'chams-rgb-vs-static',
      category: 'ESP & Wallhack',
      categoryTone: 'green',
      title: 'Chams — static color or RGB for PvP?',
      excerpt: 'RGB looks sick in screenshots but worried it’s loud for reports. What’s practical?',
      author: 'shader_kid',
      age: '13 hours ago',
      commentsCount: 3,
      upvotes: 44,
      body: [
        'Chams module applies to players and weapons. RGB cycles fast and I love it in the menu, but is that dumb live?',
      ],
      comments: [
        {
          author: 'low_profile',
          age: '12 hours ago',
          score: 16,
          body: 'Static dull purple for enemies, chams off on own weapon hands. RGB is for offline screenshots only imo.',
        },
        {
          author: 'shader_kid',
          age: '11 hours ago',
          score: 6,
          body: 'Went static. Still visible through smoke which is the whole point.',
        },
        {
          author: 'honest_take',
          age: '9 hours ago',
          score: 4,
          body: 'Any chams is a report magnet if you prefire every wall. Settings won’t fix positioning.',
        },
      ],
    },
    {
      slug: 'cloud-dma-second-pc-worth-it',
      category: 'Cloud DMA',
      categoryTone: 'purple',
      title: 'Cloud DMA required — is the second PC worth the hassle?',
      excerpt: 'Requirements say Cloud DMA for full features. Debating mini PC vs skipping the buy.',
      author: 'budget_builder',
      age: '1 day ago',
      commentsCount: 6,
      upvotes: 97,
      flair: 'Hardware',
      body: [
        'Main rig is solid. Store says supported builds need Cloud DMA for everything. That’s another machine, cabling, firmware anxiety.',
        'For folks who went through it — stable or constant tinkering?',
      ],
      comments: [
        {
          author: 'lab_rat',
          age: '23 hours ago',
          score: 27,
          body: 'Stable once firmware matched the seller list. First week was BIOS hell, now I don’t touch it unless a patch note says to.',
        },
        {
          author: 'returned_it',
          age: '22 hours ago',
          score: -3,
          body: 'Gave up after bricked USB twice. Not worth if you’re not technical.',
          replies: [
            {
              author: 'lab_rat',
              age: '20 hours ago',
              score: 8,
              body: 'Follow restore points. I almost bricked too by skipping backup.',
            },
            {
              author: 'budget_builder',
              age: '18 hours ago',
              score: 5,
              body: 'Ordered the mini PC anyway. Hoping your stable story repeats.',
            },
          ],
        },
        {
          author: 'single_pc_sad',
          age: '21 hours ago',
          score: 6,
          body: 'Tried software-only path before requirements changed. No hate but DMA path is the supported lane now.',
        },
        {
          author: 'cable_gore',
          age: '19 hours ago',
          score: 12,
          body: 'Label your HDMI and USB. Future you at 2am will thank you.',
        },
      ],
    },
    {
      slug: 'week-key-vs-monthly-value',
      category: 'Purchasing',
      categoryTone: 'purple',
      title: 'Week key vs monthly — which did you keep?',
      excerpt: 'Patch week made me nervous. Grabbed 7 days first. Worth upgrading if it stays stable?',
      author: 'cautious_wallet',
      age: '1 day ago',
      commentsCount: 4,
      upvotes: 61,
      body: [
        'Week key runs fine after the last hotfix. I play maybe 5 nights. Monthly is cheaper per day but only if nothing breaks mid-season.',
      ],
      comments: [
        {
          author: 'long_sub',
          age: '22 hours ago',
          score: 22,
          body: 'If you play more than twice a week, month pays for itself. Week is for patch anxiety weeks only.',
        },
        {
          author: 'refund_angry',
          age: '20 hours ago',
          score: -4,
          body: 'Module went offline 2 days into my month. Support credited 3 days — better than nothing I guess.',
        },
        {
          author: 'cautious_wallet',
          age: '18 hours ago',
          score: 7,
          body: 'Sticking weekly until next major patch drops. Paranoid but whatever.',
          replies: [
            {
              author: 'long_sub',
              age: '17 hours ago',
              score: 5,
              body: 'Fair. Check the status banner before every session anyway.',
            },
          ],
        },
      ],
    },
    {
      slug: 'third-person-hotkey-extract',
      category: 'General',
      categoryTone: 'purple',
      title: 'Third person view hotkey — cheesy or useful for corners?',
      excerpt: 'Misc tab has third person and FOV changer. Feel dirty using it but corners are brutal.',
      author: 'corner_peek',
      age: '16 hours ago',
      commentsCount: 2,
      upvotes: 36,
      body: [
        'Tried third person for one extract push and survived a duel I’d have lost blind. Keep it or ditch for “feel” reasons?',
      ],
      comments: [
        {
          author: 'bind_master',
          age: '15 hours ago',
          score: 14,
          body: 'Hold key only, never toggle. Use for 2 seconds on peek then back to first person so muscle memory stays.',
        },
        {
          author: 'streamer_guilt',
          age: '14 hours ago',
          score: 5,
          body: 'Turn it off if you record. Angle looks obvious on replay even if live feels fine.',
        },
      ],
    },
    {
      slug: 'patch-day-loader-offline',
      category: 'Setup & Loader',
      categoryTone: 'blue',
      title: 'Patch day — loader offline banner, anyone still playing?',
      excerpt: 'Client updated, banner red. Squad wants to queue anyway. Bad idea?',
      author: 'impatient_squad',
      age: '2 days ago',
      commentsCount: 5,
      upvotes: 112,
      body: [
        'Call of Duty dropped a patch this morning. Portal says offline/testing. Teammates swear old build still “works”. I’d rather not gamble the account.',
      ],
      comments: [
        {
          author: 'patience_wins',
          age: '2 days ago',
          score: 41,
          body: 'Red banner = don’t inject. Lost an account last season ignoring that. Not worth one night.',
        },
        {
          author: 'yolo_boi',
          age: '2 days ago',
          score: -6,
          body: 'Ran it anyway, fine so far. You guys baby this stuff too much.',
          replies: [
            {
              author: 'patience_wins',
              age: '2 days ago',
              score: 12,
              body: '“So far” isn’t data. Post again when the timeout email hits.',
            },
            {
              author: 'impatient_squad',
              age: '1 day ago',
              score: 8,
              body: 'We waited. Green banner came back ~14h later. Yolo dude still hasn’t replied lol',
            },
          ],
        },
        {
          author: 'support_reply',
          age: '1 day ago',
          score: 9,
          body: 'If banner is yellow, some modules test-only. Read notes before enabling combat mode hide etc.',
        },
      ],
    },
  ],
  null,
  2,
).replace(/"categoryTone":/g, 'categoryTone:').replace(/"([^"]+)":/g, '$1:').replace(/categoryTone: "(purple|blue|green|orange)"/g, "categoryTone: '$1'")};

// JSON.stringify is easier to maintain — emit valid TS instead
`;

// Simpler: write pre-built TS without broken replace
const ts = fs.readFileSync(path.join(process.cwd(), 'scripts/delta-forum-data.json'), 'utf8');
`;
