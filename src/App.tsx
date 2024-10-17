import React from 'react';

import './App.scss';
import { Logo } from './Components/Logo/Logo';
import { LoginBtn } from './Components/LoginBtn/LoginBtn';
import { ColorBtn } from './Components/ColorBtn/ColorBtn';
import { SquareCard } from './Components/SquareCard/SquareCard';

import { courierIcon, suitcaseIcon, supportIcon, littleSuitcaseIcon } from './assets/iconsSVG';
import { CustomSearchInput } from './Components/CustomSearchInput/CustomSearchInput';
import { RadioGroup } from './Components/RadioGroup/RadioGroup';
import { CustomLabelTextInput } from './Components/CustomLabelTextInput/CustomLabelTextInput';
import { ETCpoints } from './Components/ETCpoints/ETCpoints';
import { TextWithArrow } from './Components/Texts/TextWithArrow/TextWithArrow';
import { NavBarText } from './Components/Texts/NavBarText/NavBarText';
import { UnderlinedText } from './Components/Texts/UnderlinedText/UnderlinedText';
import { VideoItem } from './Components/VideoItem/VideoItem';
import { Tooltip } from './Components/Tooltip/Tooltip';
import { HeaderContainer } from './Containers/HeaderContainer/HeaderContainer';
import { GetStartedContainer } from './Containers/GetStartedContainer/GetStartedContainer';
import { TrackCard } from './Components/TrackCard/TrackCard';
import { BreakBoxLine } from './Components/BreakBoxLine/BreakBoxLine';
import { BtnWithIcon } from './Components/BtnWithIcon/BtnWithIcon';
import { SVGcontainer } from './Components/SVGcontainer/SVGcontainer';
import { Block2 } from './Blocks/Block2/Block2';
import { Block1 } from './Blocks/Block1/Block1';
import { Block3 } from './Blocks/Block3/Block3';
import { Block4 } from './Blocks/Block4/Block4';
import { Block5 } from './Blocks/Block5/Block5';
import { Block6 } from './Blocks/Block6/Block6';
import { FooterContainer } from './Containers/FooterContainer/FooterContainer';



function App() {
  return (
    <div className="App">

      <HeaderContainer />

      <Block1 />

      <Block2 />


      <BreakBoxLine />

      <Block3 />

      <Block4 />

      <Block5 />

      <BreakBoxLine />

      <Block6 />

      <FooterContainer />

    </div>
  );
}

export default App;

