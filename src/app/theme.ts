import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

// Preset Aura com as cores de src/vars.scss ($main-color, $background-color,
// $background-light, $font-color). O site é sempre escuro: o esquema dark é
// ativado pela classe .app-dark no <html> (ver src/index.html).
export const PortfolioPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#fef8ea',
      100: '#fdeec7',
      200: '#fbe0a0',
      300: '#fad078',
      400: '#f8c352',
      500: '#f7ba2c',
      600: '#d29e25',
      700: '#ad821f',
      800: '#886618',
      900: '#634a11',
      950: '#3e2f0b'
    },
    colorScheme: {
      dark: {
        surface: {
          0: '#ffffff',
          50: '#f1faee',
          100: '#d9dfd6',
          200: '#b9beb6',
          300: '#9a9e97',
          400: '#7a7d78',
          500: '#5b5d59',
          600: '#3f403e',
          700: '#30302f',
          800: '#252525',
          900: '#1c1b1b',
          950: '#141313'
        },
        primary: {
          color: '{primary.500}',
          contrastColor: '{surface.950}',
          hoverColor: '{primary.400}',
          activeColor: '{primary.300}'
        },
        text: {
          color: '{surface.50}'
        }
      }
    }
  },
  components: {
    progressspinner: {
      colorScheme: {
        dark: {
          root: {
            colorOne: '{surface.50}',
            colorTwo: '{surface.50}',
            colorThree: '{surface.50}',
            colorFour: '{surface.50}'
          }
        }
      }
    }
  }
});
