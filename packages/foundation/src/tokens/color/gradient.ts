import { OverlayColor } from '@/tokens/color/semantic';

export const GradientColor = {
  black_80_bottom: `linear-gradient(to bottom, ${OverlayColor.black_0} 0%, ${OverlayColor.black_80} 100%)`,
  black_80_left: `linear-gradient(to left, ${OverlayColor.black_0} 0%, ${OverlayColor.black_80} 100%)`,
  black_80_right: `linear-gradient(to right, ${OverlayColor.black_0} 0%, ${OverlayColor.black_80} 100%)`,
  black_80_top: `linear-gradient(to top, ${OverlayColor.black_0} 0%, ${OverlayColor.black_80} 100%)`,
  black_50_bottom: `linear-gradient(to bottom, ${OverlayColor.black_0} 0%, ${OverlayColor.black_50} 100%)`,
  black_50_left: `linear-gradient(to left, ${OverlayColor.black_0} 0%, ${OverlayColor.black_50} 100%)`,
  black_50_right: `linear-gradient(to right, ${OverlayColor.black_0} 0%, ${OverlayColor.black_50} 100%)`,
  black_50_top: `linear-gradient(to top, ${OverlayColor.black_0} 0%, ${OverlayColor.black_50} 100%)`,
  white_100_bottom: `linear-gradient(to bottom, ${OverlayColor.white_0} 0%, ${OverlayColor.white_100} 100%)`,
  white_100_left: `linear-gradient(to left, ${OverlayColor.white_0} 0%, ${OverlayColor.white_100} 100%)`,
  white_100_right: `linear-gradient(to right, ${OverlayColor.white_0} 0%, ${OverlayColor.white_100} 100%)`,
  white_100_top: `linear-gradient(to top, ${OverlayColor.white_0} 0%, ${OverlayColor.white_100} 100%)`,
} as const;
