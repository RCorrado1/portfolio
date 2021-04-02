//React && Functional
import Radium from 'radium';
import Codepen from 'react-codepen-embed';
import React, { useEffect, useState } from 'react';
import { getWidth, sizeChanges } from '../Functions/Sizes';
import { CodepensHashs } from '../Variables/VariablesForCodepens';

//Components
import Title from '../Components/Texts/Title';
import Paragraph from '../Components/Texts/Paragraph';

//Styles
import { padding } from '../Styles/StyleBox';
import { HEXColors } from '../Styles/StylesColors';
import { displaying } from '../Styles/StylesDisplaying';

let PublicCodes = (props) => {
    const [width, setWidth] = useState();

    useEffect(() => {
        setWidth(getWidth(window.innerWidth));
        sizeChanges(setWidth);
    }, []);

    return(
        <div style={[
            padding('25px', '25px', '25px', '25px'),
            { backgroundColor: HEXColors.dark_grey }
        ]}>
            <Title text='Algunos CodePens' colorText={ HEXColors.white }/>
            <div style={[
                displaying.grid,
                {
                    gridTemplateColumns: width === 'l' || width === 'xl' ? '32% 32% 32%' : '100%',
                    gridColumnGap: width === 'l' || width === 'xl' ? '1.3%' : null,
                    gridRowGap: width !== 'l' && width !== 'xl' ? '25px' : null
                }
            ]}>
                {   CodepensHashs.map(codepen => {
                    return(
                        <div>
                            <Paragraph alignment="center"
                                fontSize={ 15 }
                                colorText={ HEXColors.white }
                                text={ codepen.name }/>
                            <Codepen hash={ codepen.hash }
                                height="265"
                                user = "bushinoippo"
                                defaultTab="result" 
                                preview={false} />
                        </div>
                    )
                })  }
            </div>
        </div>
    );
};

export default Radium(PublicCodes);