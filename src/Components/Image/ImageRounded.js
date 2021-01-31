import React from 'react';
import Radium from 'radium';

//Components
import Image from './Image';

let ImageRounded = (props) => {
    return(
        <Image src={ props.src }
            alt={ props.alt}
            width={ props.width }
            height={ props.height }
            display={ props.display }
            isCentered={ props.isCentered } 
            borderRadius='50%'/>
    );
};

export default Radium(ImageRounded);