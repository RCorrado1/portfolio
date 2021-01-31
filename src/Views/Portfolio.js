//React && Functional
import Radium from 'radium';
import React, { useEffect, useState } from 'react';
import { getWidth, sizeChanges } from '../Functions/Sizes';
import { RealizedJobs } from '../Variables/VariablesForPorfolio';

//Components
import Link from '../Components/Link/Link';
import Title from '../Components/Texts/Title';
import Badge from '../Components/Badge/Badge';
import Image from '../Components/Image/Image';
import Subtitle from '../Components/Texts/Subtitle';
import Paragraph from '../Components/Texts/Paragraph';
import ListBadges from '../Components/Lists/ListBadges';

//Styles
import { HEXColors } from '../Styles/StylesColors';
import { padding, margin } from '../Styles/StyleBox';

//Render
let Portfolio = (props) => {
    //State
    const [width, setWidth] = useState();
    const [jobOpened, setJob] = useState(RealizedJobs[0]);

    //Effect al renderizar
    useEffect(() => {
        setWidth(getWidth(window.innerWidth));
        sizeChanges(setWidth);
    }, []);

    return(
        <div style={[
                padding('25px', '25px', '25px', '25px'),
                { backgroundColor: HEXColors.white }
            ]}
            id='portfolio'
        >
            <Title text='Mis trabajos' colorText={ HEXColors.black }/>
            {   RealizedJobs.map(job => {
                    return (
                        <Badge text={ job.name } event={ e => setJob(job) }/>
                    )
                }) }
            <div>
                { (jobOpened && jobOpened !== undefined && 
                    <div style={[
                        margin('5%', 0, 0, '5%'),
                        {
                            display: 'grid',
                            gridTemplateColumns: width === 'l' || width === 'xl' ? '70% 30%' : '100%',
                        }
                    ]}>
                        <Image src={ jobOpened.resource }
                            isCentered={ true }
                            alt={ jobOpened.name }
                            display='block'
                            borderRadius='20px'
                            height='400px'/>
                        <div>
                            <Subtitle text={ jobOpened.name } 
                                align={ width === 'l' || width === 'xl' ? 'left_align' : null }
                                styles={{ fontWeight: 'bold' }}/>
                            <Paragraph text={ jobOpened.description } 
                                alignment={ width !== 'l' && width !== 'xl' ? 'center' : null  }
                                fontSize={ 14 }/>
                            <Paragraph text={ `Año: ${jobOpened.year}` } 
                                alignment={ width !== 'l' && width !== 'xl' ? 'center' : null  }
                                fontSize={ 14 }/>
                            <ListBadges list={ jobOpened['techs'] } color='silver'/> 
                            <ListBadges list={ jobOpened['tags'] } color='darkgray' />
                            {   
                                (jobOpened['workOwner'] && 
                                    <span style={{ fontSize: '12px' }}>
                                        { 'Trabajo realizado para ' }
                                            <Link link={ jobOpened['workOwner'].url }
                                                text={ jobOpened['workOwner'].name } 
                                                color={ jobOpened['workOwner'].color }/>
                                    </span>)
                            }
                        </div>
                    </div>) 
                }
            </div>
        </div>
    );
};

export default Radium(Portfolio);