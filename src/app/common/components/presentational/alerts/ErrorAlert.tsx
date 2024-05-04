import { Alert } from '@mantine/core';
import { IconExclamationCircle } from '@tabler/icons-react';
import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const ErrorAlert = ({ children, className }: Props) => (
  <Alert className={className} color="red" icon={<IconExclamationCircle />} variant="filled">
    {children}
  </Alert>
);
