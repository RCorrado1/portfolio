//React && Functional
import React, { useState } from 'react';
import Radium from 'radium';

//Components
import Title from '../Components/Texts/Title';
import Subtitle from '../Components/Texts/Subtitle';
import Paragraph from '../Components/Texts/Paragraph';
import ModalAbout from '../Components/Modal/ModalAbout';
import ButtonRounded from '../Components/Button/ButtonRounded';
import BlurredBackground from '../Components/Background/BlurredBackground';

//Image
import background from '../Assets/background.jpg';

//Styles
import { HEXColors } from '../Styles/StylesColors';
import { alignElement } from '../Styles/StylesAlignment';
import { displaying, positionate } from '../Styles/StylesDisplaying';

//Render
let HomeView = (props) => {
    const [openAbout, setOpenedAbout] = useState(false);

    return(
        <section id='section-home' style={{ height: '100vh' }}>
            <BlurredBackground background={ background }/>
            <div style={[
                    displaying.flex,
                    displaying.column,
                    alignElement.center,
                    positionate().relative,
                    positionate(0, 0, 0, 0, 1).index,
                    { height: '100%' }
                ]}
            >
                <Title text='Raúl Corrado' colorText={ HEXColors.white }/> 
                <Subtitle text='Full Stack Developer' colorText={ HEXColors.white} /> 
                <Paragraph alignment='center' fontSize='12px' 
                    colorText={ HEXColors.white } 
                    text='Analista de Sistemas | Profesor | Geek Profesional' /> 
                <ButtonRounded event={ e => setOpenedAbout(true) }
                    text='Saber más sobre mí' /> 
                <ModalAbout show={ openAbout } event={ e => setOpenedAbout(false) }/>
            </div>
        </section>
    );
};

export default Radium(HomeView);