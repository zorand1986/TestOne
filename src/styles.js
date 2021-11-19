import {Dimensions} from 'react-native';

export const {height, width} = Dimensions.get('window');

export const LISTITEM_HEIGHT = 70;
export const DIVIDER_HEIGHT = 1;
export const AVATAR_SIZE = {
  width: 50,
  height: 50,
};

export const SIZES = {
  xs: 4,
  s: 8,
  m: 12,
  l: 15,
  xl: 20,
};

export const COLORS = {
  backgroundPrimary: '#FFFFFF',
  backgroundSecondary: '#F3F3F3',
  backgroundTertiary: '#C8C7CC',
  textColor: '#000000',
};

export const fonts = {
  primary: 'Helvetica Neue',
  secondary: 'Helvetica',
};

export const fontWeight = {
  light: '200',
  normal: '500',
  bold: '600',
};

export const commonStyles = {
  fullPage: {
    width,
    height,
  },
  fullWidth: {
    width: '100%',
  },
  alignments: {
    centerBasic: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    alignCenter: {
      alignItems: 'center',
    },
    justifyCenter: {
      justifyContent: 'center',
    },
    absolute: {
      position: 'absolute',
    },
    row: {
      flexDirection: 'row',
    },
    column: {
      flexDirection: 'column',
    },
  },
};
