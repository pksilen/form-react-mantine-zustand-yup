import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import classes from './App.module.scss';
import { UserList } from './components/userlist/UserList';
import { UserRegistration } from './components/userregistration/UserRegistration';

export default function App() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <main className={classes.main}>
        <UserRegistration />
        <div className={classes.verticalDivider}></div>
        <UserList />
      </main>
    </MantineProvider>
  );
}
