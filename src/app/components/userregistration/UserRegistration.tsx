import { FieldPath, SubmitHandler, useForm } from 'react-hook-form';
import { ErrorAlert } from '../../common/components/presentational/alerts/ErrorAlert';
import { SubmitButton } from '../../common/components/presentational/buttons/SubmitButton';
import { createControlledInput } from '../../common/components/presentational/factories/createControlledInput';
import { TextInput, TextInputProps } from '../../common/components/presentational/input/TextInput';
import { useUserStore } from '../../stores/userStore';
import classes from './UserRegistration.module.scss';
import { defaultValues, resolver, UserSchema } from './userSchema';

const ControlledTextInput = createControlledInput<TextInputProps, UserSchema>(TextInput, {
  classes: classes.textInput,
  required: true
});

export const UserRegistration = () => {
  const error = useUserStore((store) => store.error);
  const createUser = useUserStore((store) => store.actions.createUser);

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm<UserSchema>({ defaultValues, resolver });

  const onSubmit: SubmitHandler<UserSchema> = async (user) => {
    const didSucceed = await createUser(user);

    if (didSucceed) {
      reset();
    }
  };

  const createControlledTextInput = (name: FieldPath<UserSchema>) => (
    <ControlledTextInput control={control} errors={errors} name={name} />
  );

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <fieldset className={classes.inline}>
        {createControlledTextInput('firstName')}
        {createControlledTextInput('lastName')}
      </fieldset>
      {createControlledTextInput('streetAddress')}
      <fieldset className={classes.inline}>
        {createControlledTextInput('zipCode')}
        {createControlledTextInput('city')}
      </fieldset>
      {createControlledTextInput('email')}
      {createControlledTextInput('phoneNumber')}
      <SubmitButton>Register</SubmitButton>
      {error && <ErrorAlert>Registration failed. Please try again.</ErrorAlert>}
    </form>
  );
};
