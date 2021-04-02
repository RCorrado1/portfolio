//React && Functional
import React, { useEffect, useState } from 'react';
import { getWidth, sizeChanges } from '../../Functions/Sizes';
import Radium from 'radium';

//Components && Icons
import Modal from './Modal';
import Image from '../Image/Image';
import ButtonCross from '../Button/ButtonCross';

//Styles
import { sizes } from '../../Styles/StylesSizes';
import { RGBAColors } from '../../Styles/StylesColors';
import { alignElement } from '../../Styles/StylesAlignment';
import { displaying, positionate } from '../../Styles/StylesDisplaying';


const ModalImage = (props) => {
    const [width, setWidth] = useState();

    const position = positionate(0, 0, 0, 0, 9);

    useEffect(() => {
        setWidth(getWidth(window.innerWidth));
        sizeChanges(setWidth);
    }, []);

    return(
        <Modal backColor='transparent'
            boxShadow='none'
            style={[
                displaying.flex,
                alignElement.center,
                position.axis,
                position.index,
                {
                    width: sizes.w_100,
                    height: sizes.h_100,
                    backgroundColor: RGBAColors.black
                }
            ]}
            maxWidth='auto'
            borderRadius={0}
            content={ 
                <div style={[ 
                        displaying.flex, 
                        displaying.column,
                        { width: props.jobOpenedStyle === 'desktop' 
                                    ? width === 'l' || width === 'xl' 
                                        ? '50%' : '100%' : 'auto' }
                    ]}
                >
                    <ButtonCross event={ props.event } />
                    <Image src={ props.image }
                        isCentered={ true }
                        display='block'
                        width={ props.jobOpenedStyle === 'desktop' ? '100%' : 'auto' }
                        height={ props.jobOpenedStyle === 'mobile' ? '400px' : 'auto' }/> 
                </div>
            } /> 
            
    );
};

export default Radium(ModalImage);