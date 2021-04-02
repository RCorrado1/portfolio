//React && Functional
import React, { useState } from 'react';
import Radium from 'radium';

//Components
import Title from '../Components/Texts/Title';
import Subtitle from '../Components/Texts/Subtitle';
import Paragraph from '../Components/Texts/Paragraph';
import ModalAbout from '../Components/Modal/ModalAbout';
import ButtonRounded from '../Components/Button/ButtonRounded';

//Styles
import { sizes } from '../Styles/StylesSizes';
import { HEXColors } from '../Styles/StylesColors';
import { displaying } from '../Styles/StylesDisplaying';
import { alignElement } from '../Styles/StylesAlignment';

//Render
let Footer = (props) => {
    const [openAbout, setOpenedAbout] = useState(false);

    return(
        <div style={[
                displaying.flex,
                displaying.column,
                alignElement.center,
                sizes.h_100,
            ]}
            id='home'
        >
            <Title text='Raúl Corrado' colorText={ HEXColors.white }/>
            <Subtitle text='Full Stack Developer' colorText={ HEXColors.white} />
            <Paragraph alignment='center' fontSize='12px' colorText={ HEXColors.white } 
                text='Analista de Sistemas | Profesor | Geek Profesional' />
            <ButtonRounded event={ e => setOpenedAbout(true) }
                text='Saber más sobre mí' />
            <ModalAbout show={ openAbout } event={ e => setOpenedAbout(false) }/>
        </div>
    );
};

export default Radium(Footer);