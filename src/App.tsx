import React, {useState} from 'react';
import './App.css';
import Store from './Store';
import { Address, Restaurant } from './model/restaurant';

let data:Restaurant = {
  name:'누나네 식당',
  category:'wetern',
  address:{
    city:'incheon',
    detail:'somewhere',
    zipCode:23425523,
  },
  menu: [{name:'rose pasta', price:2000, category:"PASTA"}, {name:'garlic steak',price:3000, category:'meat'}],

}

const App:React.FC = () => {
  const[myRestaurant, setMyRestaurant] = useState<Restaurant>(data);
  const changeAddress = (address:Address) => {
    setMyRestaurant({...myRestaurant, address:address}) 
    
  };

  return (
    <div className="App">
      <Store info = {myRestaurant} changeAddress = {changeAddress} />
    </div>
  );
}

export default App;
