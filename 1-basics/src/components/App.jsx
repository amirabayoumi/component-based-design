import { List } from './List';
import { Button } from './Button';
import { Header } from './header';

import './App.css';


export const App = () => (
  <>
    <Header />
    <Button text={'Click Me'}/>

    <main>
      <List />
    </main>
  </>
);
