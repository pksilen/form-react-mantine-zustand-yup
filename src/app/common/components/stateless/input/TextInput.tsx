import { TextInput as MantineTextInput } from '@mantine/core';
import React from 'react';

export type TextInputProps = Readonly<{
  classes?: string;
  error?: string | null | undefined;
  label?: string;
  maxLength?: number;
  required?: boolean;
}>;

export const TextInput = React.forwardRef(
  ({ classes, error, label, maxLength, required, ...restOfProps }: TextInputProps, ref) => (
    <MantineTextInput
      className={classes}
      error={error}
      label={label}
      maxLength={maxLength}
      withAsterisk={required}
      {...restOfProps}
    />
  )
);
