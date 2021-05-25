//React && Functional
import Radium from 'radium';
import React, { useState } from 'react';
import { Experiences } from '../Variables/VariablesForCareer';

//Components
import Badge from '../Components/Badge/Badge';
import Paragraph from '../Components/Texts/Paragraph';

//Styles
import { sizes } from '../Styles/StylesSizes';
import { displaying } from '../Styles/StylesDisplaying';
import { alignElement } from '../Styles/StylesAlignment';
import { DefaultColors, HEXColors } from '../Styles/StylesColors';

//Render
let Career = (props) => {
    const [openCareer, setOpenedCareer] = useState();

    const Styles = {
        ':hover': {
            cursor: 'pointer'
        }
    }

    const handleXP = (id) => setOpenedCareer(openCareer !== id ? id : null);

    return(
        <div style={ sizes.w_100 }>
            <Paragraph text='Mi línea de tiempo' 
                colorText={ HEXColors.black } 
                alignment='center'
                fontSize={15} />
            <div style={[
                displaying.grid,
                alignElement.center,
                { gridTemplateColumns: "30% 30% 30%" }
            ]}>
                {   (Experiences.length > 0 &&
                        Experiences.map(xp => {
                            return (
                                <Badge fontSize={12}
                                    minWidth='auto'
                                    color={ DefaultColors.indexOf('silver') }
                                    text={ xp.year }
                                    styles={[ Styles, {margin: '5px'} ]}
                                    event={ e => handleXP(xp.id) }/>
                            );
                    }))     }
            </div>
            {   !isNaN(openCareer) && typeof Experiences[openCareer] === 'object'
                    ?   <div style={{ padding: '2px' }}>
                            <Paragraph text={ Experiences[openCareer].mainAction }
                                colorText={ HEXColors.black } 
                                fontSize={14}
                                styles={{ fontWeight: 'bold' }}
                                alignment='center' />
                            {   Experiences[openCareer].hasOwnProperty('secondaryAction') 
                                    ?   <Paragraph text={ Experiences[openCareer].secondaryAction }
                                            colorText={ HEXColors.black } 
                                            fontSize={14}
                                            styles={{ fontWeight: 'bold' }}
                                            alignment='center' />
                                    :   null    }
                        </div>
                    :   null    
            }
        </div>
    );
};

export default Radium(Career);