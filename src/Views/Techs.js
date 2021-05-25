//React && Functional
import 'devicon';
import Radium from 'radium';
import React, { useEffect, useState } from 'react';
import { Techs } from '../Variables/VariablesForTechs';
import { getWidth, sizeChanges } from '../Functions/Sizes';

//Components
import Arrows from '../Components/Arrows';
import SpanTech from '../Components/SpanTech';
import Title from '../Components/Texts/Title';

//Styles
import { HEXColors } from '../Styles/StylesColors';
import { margin, padding } from '../Styles/StyleBox';
import { displaying } from '../Styles/StylesDisplaying';
import { alignElement } from '../Styles/StylesAlignment';

let TechsView = (props) => {
    const [max, setMax] = useState(0);
    const [width, setWidth] = useState();
    const [index, setIndex] = useState(0);
    const [techs, setTechs] = useState([]);
    const [paddingValue, setPadding] = useState(padding('4.5rem', '25px', '25px', '5rem'));

    const handlePrev = () => {
        let new_index = index > 0 ? index - 1 : (Techs.length - max),
            maximo = new_index + max;
        setIndex(new_index);
        setTechs(Techs.filter((t, i) => i >= new_index && i < maximo));
    };

    const handleNext = () => {
        let new_index = index < (Techs.length - max) ? index + 1 : 0,
            maximo = index < (Techs.length - max) ? new_index + max : max;
        setIndex(new_index);
        setTechs(Techs.filter((t, i) => i > new_index - 1 && i < maximo));
    };

    useEffect(() => {
        setWidth(getWidth(window.innerWidth));
        sizeChanges(setWidth);
    }, []);

    useEffect(() => {
        setMax(width === 'l' || width === 'xl' ? 6 : width === 'm' ? 3 : 2);
        let padding_top = (width !== 'l' && width !== 'xl') ? '45rem' : '4.5rem';
        setPadding(padding(padding_top, '25px', '25px', '25px'));
    }, [width]);

    useEffect(() => {
        setTechs(Techs.filter((t, i) => i < max))
    }, [max]);
    
    return(
        <section id="techs" style={[
            paddingValue,
            { backgroundColor: HEXColors.light_grey }
        ]}>
            <Title text='Tecnologías que manejo' />
            <div style={[
                displaying.flex,
                alignElement.center
            ]}>
                <Arrows direction="left" event={ handlePrev } />
                <div style={[
                    displaying.flex, 
                    alignElement.spacing_h,
                    margin('5%', 'auto', 'auto', '5%'),
                    {
                        width: '90%',
                        overflow: 'hidden'
                    }
                ]}>
                    {   techs.map((tech, index) => { return <SpanTech tech={ tech } key={index} /> })  }
                </div>
                <Arrows event={ handleNext } direction="right" />
            </div>
        </section>
    );
};

export default Radium(TechsView);