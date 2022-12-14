import { ComponentProps, forwardRef } from "react";
import { Input, Prefix, TextInputContainer } from "./styles";

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ prefix, ...rest }, ref) => {
    return (
      <TextInputContainer>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input ref={ref} {...rest} />
      </TextInputContainer>
    );
  }
);

TextInput.displayName = "TextInput";
