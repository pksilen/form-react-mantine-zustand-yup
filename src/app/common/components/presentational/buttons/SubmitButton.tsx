import { Button } from '@mantine/core';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

export const SubmitButton = ({ children }: Props) => <Button type="submit">{children}</Button>;
