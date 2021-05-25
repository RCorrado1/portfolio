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
import '../Styles/css/effects.css';
import { padding } from '../Styles/StyleBox';
import { sizes } from '../Styles/StylesSizes';
import { HEXColors } from '../Styles/StylesColors';
import { displaying, positionate } from '../Styles/StylesDisplaying';

let PublicCodes = (props) => {
    const [width, setWidth] = useState();

    useEffect(() => {
        setWidth(getWidth(window.innerWidth));
        sizeChanges(setWidth);
    }, []);

    return(
        <section style={[
                positionate().relative, sizes.h_150,
                { backgroundColor: HEXColors.light_grey }
            ]} 
            id='codes'
        >
            <div style={[
                padding('25px', '25px', '25px', '25px'),
                positionate().absolute,
                sizes.w_100,
                { 
                    backgroundColor: HEXColors.purple, 
                    zIndex: 2,
                    minHeight: '80%',
                    boxSizing: 'border-box'
                }
            ]}>
                <Title text='Algunos CodePens' colorText={ HEXColors.white }/>
                <div style={[
                    displaying.grid,
                    {
                        gridTemplateColumns: width === 'xl' ? '32% 32% 32%' : width === 'l' ? '49% 49%' : '100%',
                        gridColumnGap: width === 'xl' ? '1.3%' : width === 'l' ? '2%' : null,
                        gridRowGap: width !== 'l' && width !== 'xl' ? '25px' : null,
                        marginBottom: '1rem'
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
                                        height={265}
                                        user = "bushinoippo"
                                        defaultTab="result" 
                                        preview={false} />
                                </div>
                            )
                        })  }
                </div>
            </div>
        </section>
    );
};

export default Radium(PublicCodes);