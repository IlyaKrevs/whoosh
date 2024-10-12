import React from 'react';

import './App.scss';
import { Logo } from './Components/Logo/Logo';
import { LoginBtn } from './Components/LoginBtn/LoginBtn';
import { ColorBtn } from './Components/ColorBtn/ColorBtn';
import { SquareCard } from './Components/SquareCard/SquareCard';

import { ReactComponent as Icon } from './assets/courierIcon.svg'

function App() {
  return (
    <div className="App">
      <div className="container">

        <SquareCard
          titleText='Become a Courier'
          desc='You choose a schedule. You decide how much and when to earn. Earnings from day one'
          svgIcon={<Icon />}
          isShowRoute={true}
        />

      </div>
    </div>
  );
}



export default App;



