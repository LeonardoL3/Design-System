import type { StoryObj, Meta } from "@storybook/react";
import { Box, MultiStep, MultiStepProps } from "@ascendent_leonardo/react";

export default {
  title: "Form/Multi Step",
  component: MultiStep,
  args: {
    size: 4,
    currentStep: 1,
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          htmlFor="input-example"
          css={{ display: "flex", alignItems: "center", gap: "$2" }}
        >
          {Story()}
        </Box>
      );
    },
  ],
} as Meta<MultiStepProps>;

export const Primary: StoryObj<MultiStepProps> = {};

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
    size: 4,
  },
};
