//React && Functional
import React, { useEffect, useState } from 'react';
import Radium from 'radium';
import { animateString } from '../../Functions/Strings';
import { BackgroundHome } from '../../Variables/VariablesForHome';

//Styles
import { positionate } from '../../Styles/StylesDisplaying';

//Render
let BlurredBackground = (props) => {
    const [backgroundString, setBackString] = useState();

    const position = positionate('10%', '2%', 0, 0, 1);

    useEffect(() => {
        const BACKGROUND_STRING = BackgroundHome.split('');
        animateString(BACKGROUND_STRING, setBackString, 10);
    }, []);

    return  <div style={[
                    position.absolute,
                    position.axis,
                    position.index,
                    { 
                        color: 'green', 
                        whiteSpace: 'pre', 
                        opacity: .2, 
                        lineHeight: .5,
                        overflow: 'hidden' 
                    }
                ]}
            >
                { backgroundString }
            </div>
};

export default Radium(BlurredBackground);