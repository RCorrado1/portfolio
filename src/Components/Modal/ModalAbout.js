//React && Functional
import React, { useEffect, useState } from 'react';
import Radium from 'radium';
import { calculateTime } from '../../Functions/Dates';

//Components
import Modal from './Modal';
import Career from '../../Views/Career';
import Paragraph from '../Texts/Paragraph';
import ImageRounded from '../Image/ImageRounded';
import ButtonRounded from '../Button/ButtonRounded';

//Image
import me from '../../Assets/aboutme.png';

//Styles
import { HEXColors } from '../../Styles/StylesColors';
import { alignElement } from '../../Styles/StylesAlignment';
import { displaying, positionate } from '../../Styles/StylesDisplaying';


//Render
let ModalAbout = (props) => {
    const [isShow, setShow] = useState(false);

    useEffect(() => {
        setShow(props.show);
    }, [props.show]);

    const ParrafoUno = `¡Hola! Me llamo Raúl, tengo ${calculateTime(14, 12, 1994)} años y vivo en Azul, 
        Buenos Aires.
        Estudié Análisis de Sistemas y Profesorado en Lengua y Literatura (relacionadísimos) y, si bien
        desde que tengo uso de razón me encanta todo lo relacionado con la informática, hace 
        ${calculateTime(1, 9, 2017)} que me aventuré en este maravilloso mundo del desarrollo de software.`;

    if(!isShow || isShow === undefined) return null;
    return(
        <Modal content={
            <div style={[
                    displaying.flex,
                    displaying.column,
                    alignElement.center
                ]}
            >
                <ImageRounded src={ me }
                    alt='me'
                    width='90px'
                    height='90px'
                    display='block'
                    isCentered={ true } />
                <Paragraph text={ ParrafoUno }
                    alignment='center'
                    colorText={ HEXColors.black } />
                <Career />
                <ButtonRounded event={ props.event }
                    backColor={ HEXColors.black }
                    textColor={ HEXColors.white }
                    hoverColor={ HEXColors.black }
                    text='Cerrar' />
            </div>
        } />
    );
};

export default Radium(ModalAbout);