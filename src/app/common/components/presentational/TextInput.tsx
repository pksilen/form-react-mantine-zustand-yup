import { TextInput as MantineTextInput } from '@mantine/core';

type Props = {
  classes: string;
  error: string | undefined;
  label: string;
  required: boolean;
};

export const TextInput = ({ classes, error, label, required, ...restOfProps }: Props) => (
  <MantineTextInput
    className={classes}
    error={error}
    label={label}
    withAsterisk={required}
    {...restOfProps}
  />
);
