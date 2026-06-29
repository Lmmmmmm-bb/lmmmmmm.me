import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
} from 'unocss';

export default defineConfig({
  presets: [
    presetAttributify(),
    presetUno(),
    presetTypography(),
    presetIcons(),
  ],
  shortcuts: {
    'home-shell': 'min-h-[100svh] grid place-items-center p-[clamp(24px,6vw,72px)] color-[var(--lm-ink)] max-sm:place-items-start max-sm:p-4',
    'hero-panel': 'relative isolate w-[min(100%,1040px)] min-h-[min(680px,calc(100svh-48px))] grid content-center gap-[clamp(22px,3vw,36px)] p-[clamp(28px,7vw,88px)] border border-[var(--lm-ink)] [--lm-display-font:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe_UI",sans-serif] [background:linear-gradient(90deg,var(--lm-rule)_1px,transparent_1px)_0_0/44px_44px,linear-gradient(0deg,var(--lm-rule)_1px,transparent_1px)_0_0/44px_44px,var(--lm-bg)] shadow-[14px_14px_0_var(--lm-ink)] overflow-hidden before:content-["lm"] before:absolute before:right-[clamp(-30px,-2vw,12px)] before:bottom-[clamp(-58px,-4vw,-18px)] before:-z-1 before:font-mono before:text-[clamp(180px,34vw,430px)] before:font-900 before:leading-[.72] before:tracking-[-.18em] before:color-transparent before:[-webkit-text-stroke:1px_var(--lm-watermark)] before:[text-stroke:1px_var(--lm-watermark)] after:content-empty after:absolute after:inset-3.5 after:-z-1 after:pointer-events-none after:border after:border-dashed after:border-[var(--lm-hairline)] max-sm:min-h-[calc(100svh-32px)] max-sm:p-[clamp(28px,9vw,42px)_clamp(22px,6vw,34px)] max-sm:shadow-[7px_7px_0_var(--lm-ink)] max-sm:after:inset-2.5',
    'mono-label': 'font-mono text-[clamp(.72rem,1.4vw,.82rem)] font-700 leading-none tracking-[.18em] uppercase',
    'kicker': 'mono-label w-fit px-3 py-2.5 color-[var(--lm-bg)] bg-[var(--lm-ink)]',
    'hero-header': 'grid gap-[clamp(10px,2vw,18px)]',
    'hello-mark': 'w-fit border-b-5 border-b-[var(--lm-ink)] font-[var(--lm-display-font)] text-[clamp(2.6rem,8vw,7.2rem)] font-950 leading-[.78] tracking-[-.075em]',
    'intro-copy': 'max-w-[64ch] grid gap-3 border-l-8 border-l-[var(--lm-ink)] pl-[clamp(16px,3vw,28px)] text-[clamp(1.04rem,2vw,1.35rem)] leading-[1.6] color-[var(--lm-muted)] max-sm:border-l-5',
    'signal-strip': 'mono-label flex flex-wrap gap-2 color-[var(--lm-ink)]',
    'signal-chip': 'px-[11px] py-[9px] border border-[var(--lm-ink)] bg-[var(--lm-bg)]',
    'signal-chip-active': 'color-[var(--lm-bg)] bg-[var(--lm-ink)]',
    'external-links': 'flex flex-wrap gap-2.5',
    'external-link': 'inline-flex items-center justify-center w-11 h-11 color-[var(--lm-ink)] bg-[var(--lm-bg)] border border-[var(--lm-ink)] no-underline [transition:color_180ms_ease,background_180ms_ease,transform_180ms_ease,box-shadow_180ms_ease] hover:color-[var(--lm-bg)] hover:bg-[var(--lm-ink)] hover:shadow-[4px_4px_0_var(--lm-ink)] hover:translate-[-2px] focus-visible:outline-2 focus-visible:outline-[var(--lm-ink)] focus-visible:outline-offset-4 motion-reduce:[transition:none] motion-reduce:hover:translate-0',
    'home-title': 'max-w-full m-0 font-[var(--lm-display-font)] text-[clamp(3.8rem,12vw,10rem)] font-950 leading-[.82] tracking-[-.078em] lowercase max-sm:text-[clamp(3.4rem,16vw,5.8rem)] max-sm:tracking-[-.072em]',
    'home-title-line': 'block',
    'name-line': 'home-title-line max-w-full text-[clamp(3.3rem,10.4vw,8.4rem)] tracking-[-.088em] whitespace-nowrap max-sm:text-[clamp(2.85rem,13.2vw,4.9rem)] max-sm:tracking-[-.09em]',
    'text-primary': 'color-#000 dark:color-#fff',
    'text-secondary': 'color-#222 dark:color-#ddd',
  },
  safelist: [
    'i-carbon:logo-github',
    'i-carbon:logo-google',
    'i-carbon:logo-x',
  ],
});
