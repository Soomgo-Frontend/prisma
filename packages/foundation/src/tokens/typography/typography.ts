// import localFont from 'next/font/local';

// export const font = localFont({
//   src: [
//     { path: '../../foundation/typography/fonts/Pretendard-Regular.woff2', weight: '400' },
//     { path: '../../foundation/typography/fonts/Pretendard-Medium.woff2', weight: '500' },
//     { path: '../../foundation/typography/fonts/Pretendard-SemiBold.woff2', weight: '600' },
//     { path: '../../foundation/typography/fonts/Pretendard-Bold.woff2', weight: '700' },
//   ],
// });

const getUpperKey = (key: string) => key.replace(/^[a-z]/, (c) => c.toUpperCase());

const fontWeightKeys = ['regular', 'medium', 'bold'] as const;

const displayTypo = [
  'display52',
  'display36',
  'display34',
  'display28',
  /* deprecated */
  'display1',
  'display2',
  'display3',
] as const;
const headlineTypo = [
  'headline24',
  'headline20',
  'headline18',
  'headline16',
  /* deprecated */
  'headline1',
  'headline2',
  'headline3',
  'headline4',
] as const;
const bodyTypo = [
  'body18',
  'body16',
  'body14',
  'body12',
  /* deprecated */
  'body1',
  'body2',
  'body3',
  'body4',
] as const;
const miscTypo = [
  'chip14',
  'button12',
  'button14',
  'button16',
  'button18',
  'navigation10',
  /* deprecated */
  'chip',
  'button1',
  'button2',
  'button3',
] as const;

export type DisplayType = (typeof displayTypo)[number];
export type HeadlineType = (typeof headlineTypo)[number];
export type BodyType = (typeof bodyTypo)[number];
export type MiscType = (typeof miscTypo)[number];
export type FontWeightType = (typeof fontWeightKeys)[number];

export const remSize = 16;

export enum FontSize {
  Display52 = 52 / remSize,
  Display36 = 36 / remSize,
  Display34 = 34 / remSize,
  Display28 = 28 / remSize,
  Headline24 = 24 / remSize,
  Headline20 = 20 / remSize,
  Headline18 = 18 / remSize,
  Headline16 = 16 / remSize,
  Body18 = 18 / remSize,
  Body16 = 16 / remSize,
  Body14 = 14 / remSize,
  Body12 = 12 / remSize,
  Chip14 = 14 / remSize,
  Button18 = 18 / remSize,
  Button16 = 16 / remSize,
  Button14 = 14 / remSize,
  Button12 = 12 / remSize,
  Navigation10 = 10 / remSize,
  /* deprecated toekn name */
  Display1 = 36 / remSize,
  Display2 = 34 / remSize,
  Display3 = 28 / remSize,
  Headline1 = 24 / remSize,
  Headline2 = 20 / remSize,
  Headline3 = 18 / remSize,
  Headline4 = 16 / remSize,
  Body1 = 18 / remSize,
  Body2 = 16 / remSize,
  Body3 = 14 / remSize,
  Body4 = 12 / remSize,
  Chip = 14 / remSize,
  Button1 = 16 / remSize,
  Button2 = 14 / remSize,
  Button3 = 12 / remSize,
}

const normalHeight = 8 / remSize;

export enum LineHeight {
  Display52 = FontSize.Display52 + 20 / remSize,
  Display36 = FontSize.Display36 + 10 / remSize,
  Display34 = FontSize.Display34 + 10 / remSize,
  Display28 = FontSize.Display28 + 10 / remSize,
  Headline24 = FontSize.Headline24 + normalHeight,
  Headline20 = FontSize.Headline20 + normalHeight,
  Headline18 = FontSize.Headline18 + normalHeight,
  Headline16 = FontSize.Headline16 + normalHeight,
  Body18 = FontSize.Body18 + normalHeight,
  Body16 = FontSize.Body16 + normalHeight,
  Body14 = FontSize.Body14 + normalHeight,
  Body12 = FontSize.Body12 + normalHeight,
  Chip14 = FontSize.Chip14 + 2 / remSize,
  Button18 = FontSize.Button16 + 8 / remSize,
  Button16 = FontSize.Button16 + 4 / remSize,
  Button14 = FontSize.Button14 + 6 / remSize,
  Button12 = FontSize.Button12 + 4 / remSize,
  Navigation10 = FontSize.Navigation10 + 4 / remSize,
  /* deprecated toekn name */
  Display1 = FontSize.Display1 + 10 / remSize,
  Display2 = FontSize.Display2 + 10 / remSize,
  Display3 = FontSize.Display3 + 10 / remSize,
  Headline1 = FontSize.Headline1 + normalHeight,
  Headline2 = FontSize.Headline2 + normalHeight,
  Headline3 = FontSize.Headline3 + normalHeight,
  Headline4 = FontSize.Headline4 + normalHeight,
  Body1 = FontSize.Body1 + normalHeight,
  Body2 = FontSize.Body2 + normalHeight,
  Body3 = FontSize.Body3 + normalHeight,
  Body4 = FontSize.Body4 + normalHeight,
  Chip = FontSize.Chip + 2 / remSize,
  Button1 = FontSize.Button1 + 4 / remSize,
  Button2 = FontSize.Button2 + 6 / remSize,
  Button3 = FontSize.Button3 + 4 / remSize,
}

export enum FontWeight {
  Regular = 400,
  Medium = 500,
  SemiBold = 600,
  Bold = 700,
}

type FontWeightDict = { fontWeight: FontWeight };
export interface TypographyBase extends Partial<FontWeightDict> {
  fontSize: FontSize;
  lineHeight: LineHeight;
}
export type TypographyWeight = Record<FontWeightType, FontWeightDict>;
export type TypographyProps = TypographyBase & TypographyWeight;

const bodyFontWeightDict: TypographyWeight = {
  regular: {
    fontWeight: FontWeight.Regular,
  },
  medium: {
    fontWeight: FontWeight.Medium,
  },
  bold: {
    fontWeight: FontWeight.SemiBold,
  },
};

const miscFontWeightDict: TypographyWeight = {
  regular: {
    fontWeight: FontWeight.Regular,
  },
  medium: {
    fontWeight: FontWeight.Medium,
  },
  bold: {
    fontWeight: FontWeight.SemiBold,
  },
};

type DisplayTypoDict = Record<DisplayType, TypographyBase>;
type HeadlineTypoDict = Record<HeadlineType, TypographyBase>;
type BodyTypoDict = Record<BodyType, TypographyProps>;
type MiscTypoDict = Record<MiscType, TypographyProps>;
const getCommonStyleProperties = (key: string) => {
  const upperKey = getUpperKey(key);
  return {
    fontSize: FontSize[upperKey as keyof typeof FontSize],
    lineHeight: LineHeight[upperKey as keyof typeof LineHeight],
  };
};
export const displayTypoDict = displayTypo.reduce(
  (dict, key) => ({
    ...dict,
    [key]: {
      ...getCommonStyleProperties(key),
      fontWeight: FontWeight.Bold,
    },
  }),
  {} as DisplayTypoDict
);
export const headlineTypoDict = headlineTypo.reduce(
  (dict, key) => ({
    ...dict,
    [key]: {
      ...getCommonStyleProperties(key),
      fontWeight: FontWeight.Bold,
    },
  }),
  {} as HeadlineTypoDict
);
export const bodyTypoDict = bodyTypo.reduce(
  (dict, key) => ({
    ...dict,
    [key]: {
      ...getCommonStyleProperties(key),
      ...bodyFontWeightDict,
    },
  }),
  {} as BodyTypoDict
);
export const miscTypoDict = miscTypo.reduce(
  (dict, key) => ({
    ...dict,
    [key]: {
      ...getCommonStyleProperties(key),
      ...miscFontWeightDict,
    },
  }),
  {} as MiscTypoDict
);

export const typographies = {
  ...displayTypoDict,
  ...headlineTypoDict,
  ...bodyTypoDict,
  ...miscTypoDict,
};
export type TypographyKeys = keyof typeof typographies;
