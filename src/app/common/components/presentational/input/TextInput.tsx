import { TextInput as MantineTextInput } from '@mantine/core';
import React from 'react';

export type TextInputProps = {
  classes?: string;
  error?: string | null | undefined;
  label?: string;
  required?: boolean;
};

export const TextInput = React.forwardRef(
  ({ classes, error, label, required, ...restOfProps }: TextInputProps, ref) => (
    <MantineTextInput
      className={classes}
      error={error}
      label={label}
      withAsterisk={required}
      {...restOfProps}
    />
  )
);
