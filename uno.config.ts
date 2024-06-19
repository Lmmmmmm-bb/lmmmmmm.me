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
    'text-primary': 'color-#000 dark:color-#fff',
    'text-secondary': 'color-#222 dark:color-#ddd',
  },
  safelist: [
    'i-carbon:logo-github',
    'i-carbon:logo-google',
    'i-carbon:logo-x',
  ],
});
