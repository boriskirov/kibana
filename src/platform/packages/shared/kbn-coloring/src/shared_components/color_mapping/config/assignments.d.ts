import type { KbnPalettes } from '@kbn/palettes';
import type { ColorMapping } from '.';
export declare function updateAssignmentsPalette(assignments: ColorMapping.Config['assignments'], colorMode: ColorMapping.Config['colorMode'], paletteId: string, palettes: KbnPalettes, preserveColorChanges: boolean): ColorMapping.Config['assignments'];
export declare function updateColorModePalette(colorMode: ColorMapping.Config['colorMode'], paletteId: string, preserveColorChanges: boolean): ColorMapping.Config['colorMode'];
