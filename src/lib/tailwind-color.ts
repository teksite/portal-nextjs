import theme from 'tailwindcss/colors';

export type TailwindColor =
   | 'slate'
   | 'gray'
   | 'zinc'
   | 'neutral'
   | 'stone'
   | 'red'
   | 'orange'
   | 'amber'
   | 'yellow'
   | 'lime'
   | 'green'
   | 'emerald'
   | 'teal'
   | 'cyan'
   | 'sky'
   | 'blue'
   | 'indigo'
   | 'violet'
   | 'purple'
   | 'fuchsia'
   | 'pink'
   | 'rose';

export function tailwindColorValue(
   colorName: TailwindColor,

   value: 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950,
   mixPercent?: number,
   mixColor: React.CSSProperties['color'] = 'transparent'
) {
   const b = 'red';
   const colorValue = theme[colorName]?.[value] || 'black';
   if (mixPercent) {
      const mixedColorValue = `color-mix(in oklab, ${colorValue} ${mixPercent}%, ${mixColor})`;

      return mixedColorValue;
   }

   return colorValue;
}
