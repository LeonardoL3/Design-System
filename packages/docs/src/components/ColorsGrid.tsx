import { colors } from "@vortex-ui/tokens";
import { ColorPalette, ColorItem } from "@storybook/addon-docs";

export function ColorsGrid() {
  const getAllGreenColors = Object.entries(colors).filter(([key, value]) =>
    key.includes("green")
  );
  const getAllGrayColors = Object.entries(colors).filter(([key, value]) =>
    key.includes("gray")
  );

  return (
    // @ts-ignore
    <ColorPalette>
      <ColorItem
        title="plain white"
        subtitle="white"
        colors={{ white: colors.white }}
      />
      <ColorItem
        title="plain black"
        subtitle="black"
        colors={{ black: colors.black }}
      />
      <ColorItem
        title="grays"
        subtitle="some of the grays"
        colors={Object.fromEntries(getAllGrayColors)}
      />
      <ColorItem
        title="greens"
        subtitle="some of the greens"
        colors={Object.fromEntries(getAllGreenColors)}
      />
    </ColorPalette>
  );
}
