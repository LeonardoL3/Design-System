import type { StoryObj, Meta } from "@storybook/react";
import { Box, Text, Checkbox, CheckboxProps } from "@vortex-ui/react";

export default {
  title: "Form/Checkbox",
  component: Checkbox,
  argTypes: {
    onClick: {
      action: "click",
    },
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
          <Text size="sm"> Accept terms of use </Text>
        </Box>
      );
    },
  ],
} as Meta<CheckboxProps>;

export const Primary: StoryObj<CheckboxProps> = {
  args: {
    placeholder: "Add any observations...",
  },
};
