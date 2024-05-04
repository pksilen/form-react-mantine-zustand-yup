import { yupResolver } from '@hookform/resolvers/yup';
import { Alert, Button } from '@mantine/core';
import { IconExclamationCircle } from '@tabler/icons-react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { TextInput } from '../../common/components/presentational/TextInput';
import useUserStore from '../../stores/userStore';
import camelCaseIdentifierToWords from '../../utils/camelCaseIdentifierToWords';
import classes from './UserRegistration.module.scss';

const userSchema = yup
  .object({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    streetAddress: yup.string().required('Street address is required'),
    city: yup.string().required('City is required'),
    zipCode: yup.string().required('Zip code is required'),
    email: yup.string().email().required('Email is required'),
    phoneNumber: yup.string().required('Phone number is required')
  })
  .required();

export type InputUser = yup.InferType<typeof userSchema>;

const defaultValues = {
  firstName: '',
  lastName: '',
  streetAddress: '',
  zipCode: '',
  city: '',
  email: '',
  phoneNumber: ''
};

export default function UserRegistration() {
  const error = useUserStore((store) => store.error);
  const createUser = useUserStore((store) => store.actions.createUser);

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm<InputUser>({
    defaultValues,
    resolver: yupResolver(userSchema)
  });

  const onSubmit: SubmitHandler<InputUser> = async (inputUser) => {
    const didSucceed = await createUser(inputUser);

    if (didSucceed) {
      reset();
    }
  };

  const createInput = (name: keyof InputUser) => (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextInput
          classes={classes.textInput}
          error={errors?.[name]?.message}
          label={camelCaseIdentifierToWords(name)}
          required
          {...field}
        />
      )}
    />
  );

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        {createInput('lastName')}
        {createInput('firstName')}
      </fieldset>
      {createInput('streetAddress')}
      <fieldset>
        {createInput('zipCode')}
        {createInput('city')}
      </fieldset>
      {createInput('email')}
      {createInput('phoneNumber')}
      <Button size="large" type="submit">
        Register
      </Button>
      {error && (
        <Alert
          className={classes.alert}
          color="red"
          icon={<IconExclamationCircle />}
          variant="filled"
        >
          Registration failed. Please try again.
        </Alert>
      )}
    </form>
  );
}
