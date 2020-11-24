//React && Functional
import React from 'react';
import Radium from 'radium';

//Components
import Title from '../Components/Texts/Title';
import Subtitle from '../Components/Texts/Subtitle';
import Paragraph from '../Components/Texts/Paragraph';

//Styles
import { HEXColors, RGBAColors } from '../Styles/StylesColors';
import { alignElement } from '../Styles/StylesAlignment';
import { displaying } from '../Styles/StylesDisplaying';
import { sizes } from '../Styles/StylesSizes';

//Render
let HomeView = (props) => {
    return(
        <div style={[
                displaying.flex,
                displaying.column,
                alignElement.center,
                sizes.h_100,
                sizes.w_100,
                { backgroundColor: RGBAColors.black }
            ]}
        >
            <Title text='Raúl Corrado' colorText={ HEXColors.white }/>
            <Subtitle text='Full Stack Developer' colorText={ HEXColors.white} />
            <Paragraph alignment='center' fontSize='12px' colorText={ HEXColors.white } 
                text='Analista de Sistemas | Profesor | Geek Profesional' />
        </div>
    );
};

HomeView = Radium(HomeView);

export default HomeView;