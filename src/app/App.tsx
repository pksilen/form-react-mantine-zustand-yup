import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import classNames from './App.module.scss';
import UserList from './components/userlist/UserList';
import UserRegistration from './components/userregistration/UserRegistration';

export default function App() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <main className={classNames.container}>
        <UserRegistration />
        <div className={classNames.verticalDivider}></div>
        <UserList />
      </main>
    </MantineProvider>
  );
}
