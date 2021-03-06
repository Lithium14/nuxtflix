import colors from 'vuetify/es5/util/colors'
import { mdiArrowDownDropCircle, mdiEarth, mdiEye, mdiEyeOff, mdiPlus } from '@mdi/js'

export default {
  breakpoint: {
    thresholds: {

    }
  },
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: colors.blue.darken2,
        accent: colors.grey.darken3,
        secondary: colors.amber.darken3,
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3
      },
      light: {
        primary :'',
        secondary: '',
        accent: ''
      }
    }
  },
  icons: {
    values: {
      'mdi-plus': mdiPlus,
      'mdi-earth': mdiEarth,
      'mdi-arrow-drop-down-circle': mdiArrowDownDropCircle,
      'mdi-eye': mdiEye,
      'mdi-eye-off': mdiEyeOff
    }
  },
};
