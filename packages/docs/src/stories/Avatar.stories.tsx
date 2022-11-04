import type { StoryObj, Meta } from "@storybook/react";
import { Avatar, AvatarProps } from "@vortex-ui/react";

export default {
  title: "Data display/Avatar",
  component: Avatar,
  args: {
    src: "https://github.com/LeonardoL3.png",
    alt: "Leonardo Lazzaretti",
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
};