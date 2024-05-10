import { Button } from '@mantine/core';
import React from 'react';

type Props = Readonly<{
  children: React.ReactNode;
  className?: string;
}>;

export const SubmitButton = ({ children, className }: Props) => (
  <Button className={className} type="submit">
    {children}
  </Button>
);
