import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import classes from './App.module.scss';
import { UserList } from './components/userlist/UserList';
import { UserRegistrationForm } from './components/userregistrationform/UserRegistrationForm';

export default function App() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <main className={classes.main}>
        <UserRegistrationForm />
        <div className={classes.verticalDivider}></div>
        <UserList />
      </main>
    </MantineProvider>
  );
}
