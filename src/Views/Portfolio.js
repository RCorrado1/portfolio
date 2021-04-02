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
import ModalImage from '../Components/Modal/ModalImage';
import ListBadges from '../Components/Lists/ListBadges';

//Styles
import { HEXColors } from '../Styles/StylesColors';
import { padding, margin } from '../Styles/StyleBox';
import { displaying } from '../Styles/StylesDisplaying';
import { alignElement } from '../Styles/StylesAlignment';

//Render
let Portfolio = (props) => {
    const [width, setWidth] = useState();
    const [imageModal, setImage] = useState();
    const [isModalOpen, setModal] = useState(false);
    const [jobOpened, setJob] = useState(RealizedJobs[0]);

    const openImage = (image = null) => {
        setImage(image)
        setModal(!isModalOpen);
    };

    useEffect(() => {
        setWidth(getWidth(window.innerWidth));
        sizeChanges(setWidth);
    }, []);

    return(
        <div style={[
            padding('25px', '25px', '25px', '25px'),
            { backgroundColor: HEXColors.white }
        ]}>
            <Title text='Mis trabajos' colorText={ HEXColors.black }/>
            <div style={[ 
                    displaying.flex,
                    alignElement.center,
                    { flexWrap: 'wrap' }
                ]}
            >
                {   RealizedJobs.map(job => {
                        return  <Badge text={ job.alias } 
                                    styles={{ margin: '5px 10px'}}
                                    event={ e => setJob(job) }/>
                    })  }
            </div>
            <div>
                { (jobOpened && jobOpened !== undefined && 
                    <div style={[
                        margin('5%', 0, 0, '5%'),
                        {
                            display: 'grid',
                            justifyContent: 'space-between',
                            gridTemplateColumns: width === 'l' || width === 'xl' ? '69% 30%' : '100%',
                        }
                    ]}>
                        <Image src={ jobOpened.resource }
                            event={ e => openImage(jobOpened.resource) }
                            isCentered={ true }
                            alt={ jobOpened.name }
                            display='block'
                            borderRadius='20px'
                            width={ jobOpened.style === 'desktop' ? '100%' : 'auto' }
                            height={ jobOpened.style === 'mobile' ? '400px' : 'auto' }/>
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
                                    <div style={{ 
                                        fontSize: '15px',
                                        textAlign: width !== 'l' && width !== 'xl' 
                                            ? 'center' : null 
                                    }}>
                                        { 'Trabajo realizado para ' }
                                            <Link link={ jobOpened['workOwner'].url }
                                                text={ jobOpened['workOwner'].name } 
                                                color={ jobOpened['workOwner'].color }/>
                                    </div>)
                            }
                        </div>
                    </div>) 
                }
            </div>
            {   isModalOpen && jobOpened && jobOpened !== undefined && typeof imageModal === 'string'
                    &&  <ModalImage image={ imageModal }
                            jobOpenedStyle={ jobOpened.style }
                            event={ e => openImage(jobOpened.resource) } />    }
        </div>
    );
};

export default Radium(Portfolio);