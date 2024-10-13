import React from 'react';

import './App.scss';
import { Logo } from './Components/Logo/Logo';
import { LoginBtn } from './Components/LoginBtn/LoginBtn';
import { ColorBtn } from './Components/ColorBtn/ColorBtn';
import { SquareCard } from './Components/SquareCard/SquareCard';

import { courierIcon, suitcaseIcon, supportIcon } from './assets/iconsSVG';
import { CustomSearchInput } from './Components/CustomSearchInput/CustomSearchInput';
import { RadioGroup } from './Components/RadioGroup/RadioGroup';
import { CustomLabelTextInput } from './Components/CustomLabelTextInput/CustomLabelTextInput';
import { ETCpoints } from './Components/ETCpoints/ETCpoints';
import { TextWithArrow } from './Components/Texts/TextWithArrow/TextWithArrow';
import { NavBarText } from './Components/Texts/NavBarText/NavBarText';
import { UnderlinedText } from './Components/Texts/UnderlinedText/UnderlinedText';
import { VideoItem } from './Components/VideoItem/VideoItem';

function App() {
  return (
    <div className="App">
      <div className="container">

        <VideoItem />

      </div>
    </div>
  );
}

export default App;




