import { ElementType, ComponentProps } from "react";
import { styled } from "../styles";

export const BoxTwo = styled("div", {
  padding: "$4",
  borderRadius: "$md",
  backgroundColor: "$gray800",
  border: "1px solid $gray600",
});

export interface BoxPropsTwo extends ComponentProps<typeof BoxTwo> {
  as?: ElementType;
}

BoxTwo.displayName = "BoxTwo";
