import { Alert } from '@mantine/core';
import { IconExclamationCircle } from '@tabler/icons-react';
import React from 'react';
import classes from '../../../../components/userregistration/UserRegistration.module.scss';

type Props = {
  children: React.ReactNode;
};

export const ErrorAlert = ({ children }: Props) => (
  <Alert className={classes.alert} color="red" icon={<IconExclamationCircle />} variant="filled">
    {children}
  </Alert>
);
