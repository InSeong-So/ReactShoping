import { createTheme } from '@material-ui/core';

export const palette = <const>{
  red: [
    '#F49390', // 0
    '#F2817D', // 1
    '#F06F6A', // 2
    '#EE5D58', // 3
    '#EC403A', // 4
    '#EB3933', // 5
    '#E92720', // 6
    '#DF1D16', // 7
    '#CC1A14', // 8
    '#BA1812', // 9
  ],
  orange: [
    '#FFB885', // 0
    '#FFAC70', // 1
    '#FFA05C', // 2
    '#FF9447', // 3
    '#FF8833', // 4
    '#FF7515', // 5
    '#FF700A', // 6
    '#F56600', // 7
    '#E05E00', // 8
    '#CC5500', // 9
  ],
  yellow: [
    '#FFF9B2', // 0
    '#FFF79C', // 1
    '#FFF57F', // 2
    '#FFF37C', // 3
    '#FFF176', // 4
    '#FFEE58', // 5
    '#FFEB3B', // 6
    '#FDE63E', // 7
    '#FBC02D', // 8
    '#F9A825', // 9
  ],
  green: [
    '#8FE052', // 0
    '#84DD40', // 1
    '#79DA2F', // 2
    '#6FD025', // 3
    '#66BF22', // 4
    '#5CAC1E', // 5
    '#539C1C', // 6
    '#4A8B18', // 7
    '#417915', // 8
    '#376812', // 9
  ],
  blue: [
    '#E3E7F9', // 0
    '#C5D9F9', // 1
    '#9CD0F9', // 2
    '#6BC2F9', // 3
    '#42B4F9', // 4
    '#1EACFC', // 5
    '#0D9FFF', // 6
    '#049FFF', // 7
    '#0080FF', // 8
    '#0060FF', // 9
  ],
  purple: [
    '#F5F3FF', // 0
    '#EDE9FE', // 1
    '#DDD6FE', // 2
    '#C4B5FD', // 3
    '#A78BFA', // 4
    '#8B5CF6', // 5
    '#7C3AED', // 6
    '#6D28D9', // 7
    '#5B21B6', // 8
    '#4C1D95', // 9
  ],
  white: [
    '#aaaaaa', // 0
    '#bbbbbb', // 1
    '#cccccc', // 2
    '#dddddd', // 3
    '#eeeeee', // 4
    '#ffffff', // 5
  ],
  gray: [
    '#FAFAFA', // 0
    '#F4F4F5', // 1
    '#E4E4E7', // 2
    '#D4D4D8', // 3
    '#A1A1AA', // 4
    '#71717A', // 5
    '#52525B', // 6
    '#3F3F46', // 7
    '#27272A', // 8
    '#18181B', // 9
  ],
  black: [
    '#666666', // 0
    '#555555', // 1
    '#444444', // 2
    '#333333', // 3
    '#222222', // 4
    '#111111', // 5
    '#000000', // 6
  ],
};

const theme = createTheme({
  palette: {
    primary: {
      main: palette.blue[9],
    },
    secondary: {
      main: palette.gray[4],
    },
    error: {
      main: palette.red[8],
    },
    background: {
      default: palette.gray[4],
    },
  },
});

export default theme;
