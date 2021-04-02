//React && Functional
import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router-dom';

//Components
import Paragraph from '../Components/Texts/Paragraph';

//Styles
import { sizes } from '../Styles/StylesSizes';
import { HEXColors } from '../Styles/StylesColors';
import { displaying } from '../Styles/StylesDisplaying';
import { alignElement } from '../Styles/StylesAlignment';

//Render
let NotFound = (props) => {
    return(
        <div style={[
                displaying.flex,
                alignElement.center,
                sizes.h_100,
            ]}
        >
            <Paragraph alignment='center' 
                fontSize='15px' 
                colorText={ HEXColors.black } 
                text='No se ha encontrado la página solicitada :(' />
            <Link to='/'>Ir al inicio</Link>
        </div>
    );
};

export default Radium(NotFound);