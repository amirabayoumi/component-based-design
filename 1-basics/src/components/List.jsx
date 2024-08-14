import { Button } from './Button';

const list = ['Pikachu', 'Bulbazaur', 'Charmander', 'Squirtle']

export const List = () => (
  <div>
    <ul>
      {list.map((listItem) => (
        <li key={listItem}>{listItem}</li>
      ))}
    </ul>

    <Button text={"DO it"}/>
  </div>
);
