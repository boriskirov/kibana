import React from 'react';
import type { KbnPalettes } from '@kbn/palettes';
import type { ColorMapping } from '../../config';
export declare function Gradient({ paletteId, colorMode, isDarkMode, palettes, }: {
    paletteId: string;
    isDarkMode: boolean;
    colorMode: ColorMapping.Config['colorMode'];
    palettes: KbnPalettes;
}): React.JSX.Element | null;
