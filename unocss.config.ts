import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetUno,
  presetIcons
} from 'unocss';

export default defineConfig({
  presets: [
    presetAttributify(),
    presetUno(),
    presetTypography(),
    presetIcons()
  ],
  shortcuts: {
    'text-primary': 'color-#000 dark:color-#fff',
    'text-secondary': 'color-#222 dark:color-#ddd'
  }
});
