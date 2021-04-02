//React && Functional
import React, { useEffect, useState } from 'react';
import { animateString } from '../Functions/Strings';
import Radium from 'radium';

//Image
import background from '../Assets/background.jpg';

//Components
import BlurredBackground from '../Components/Background/BlurredBackground';

//Styles
import { sizes } from '../Styles/StylesSizes';
import { alignElement } from '../Styles/StylesAlignment';
import { displaying, positionate } from '../Styles/StylesDisplaying';

//Render
let WeAreWorking = (props) => {
    const[working, setWorking] = useState();

    const WORKING_STRING = 'Estamos trabajando en este portfolio :3'.split('');

    useEffect(() => {
        animateString(WORKING_STRING, setWorking);
    }, []);

    return(
        <div style={[
                displaying.flex,
                alignElement.center,
                sizes.h_100,
            ]}
        >
            <BlurredBackground background={ background} />
            <div style={[
                positionate().relative,
                positionate(0, 0, 0, 0, 1).index,
                displaying.flex,
                alignElement.center,
                { fontSize: '14px', fontWeight: 'bold' }
            ]}>
                { working }
            </div>
        </div>
    );
};

export default Radium(WeAreWorking);