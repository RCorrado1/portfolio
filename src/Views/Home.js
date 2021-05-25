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
import '../Styles/css/effects.css';
import { HEXColors } from '../Styles/StylesColors';
import { alignElement } from '../Styles/StylesAlignment';
import { displaying, positionate } from '../Styles/StylesDisplaying';

//Render
let HomeView = (props) => {
    const [openAbout, setOpenedAbout] = useState(false);

    const position = positionate(0, 0, 0, 0, 1);

    const styles = { 
        height: '100vh', 
        marginBottom: '5rem',
        backgroundColor: HEXColors.mate_black,
    }

    return(
        <section id='home' style={ styles }>
            <BlurredBackground background={ background } />
            <div style={[
                    displaying.flex,
                    displaying.column,
                    alignElement.center,
                    position.relative,
                    position.index,
                    position.axis,
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
            </div>
            <ModalAbout show={ openAbout } event={ e => setOpenedAbout(false) }/>
        </section>
    );
};

export default Radium(HomeView);