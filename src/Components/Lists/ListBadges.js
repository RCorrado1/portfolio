//React && Functional
import Radium from 'radium';
import React, { useState, useEffect } from 'react';
import { getWidth, sizeChanges } from '../../Functions/Sizes';

//Components
import Badge from '../../Components/Badge/Badge';

//Styles
import { sizes } from '../../Styles/StylesSizes';
import { padding, margin } from '../../Styles/StyleBox';
import { DefaultColors } from '../../Styles/StylesColors';
import { displaying } from '../../Styles/StylesDisplaying';
import { alignElement } from '../../Styles/StylesAlignment';

let ListBadges = (props) => {
    const [width, setWidth] = useState();
    const [list, setList] = useState([]);

    useEffect(() => {
        setWidth(getWidth(window.innerWidth));
        sizeChanges(setWidth);
    }, []);

    useEffect(() => {
        if(Array.isArray(props.list)) setList(props.list);
    }, [props.list]);

    return(
        <ul style={[
            sizes.w_100,
            padding(0, 0, 0, 0),
            displaying.flex,
            width !== 'l' && width !== 'xl' ? alignElement.center : null,
            { flexWrap: 'wrap' }
        ]}>
            {   
                list.map(item => {
                    return <Badge text={ item }
                        styles={ margin('5px', '5px', '5px', '5px') }
                        color={ DefaultColors.indexOf(props.color) }/>
                })
            }
        </ul>
    );
};

export default Radium(ListBadges);