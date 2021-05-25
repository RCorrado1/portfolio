//React && Functional
import React, { useState } from 'react';
import Radium from 'radium';

//Components
import List from '../Lists/List';
import MenuBurger from '../MenuBurger';

//Styles
import { HEXColors } from '../../Styles/StylesColors';
import { positionate } from '../../Styles/StylesDisplaying';
import { useEffect } from 'react/cjs/react.development';
 
//Render
let Header = (props) => {
    const [items, setItems] = useState([]);
    const [openSidebar, openingSidebar] = useState(false);

    const Position = positionate(0, 0, 0, 0, 9);

    const handleOpenSidebar = () => openingSidebar(!openSidebar);

    useEffect(() => {
        let section = document.querySelectorAll('section');
        section.forEach(sec => setItems(items => ([...items, sec.getAttribute('id') ])));
    }, [])

    if(openSidebar && items.length > 0) 
        return  <List items={ items } clicEvent={ handleOpenSidebar }/>
    return  <header style={[
                Position.fixed,
                Position.index,
                { 
                    width: '100%',
                    backgroundColor: HEXColors.black
                }
            ]}>
                <MenuBurger clicEvent={ handleOpenSidebar }/>
            </header>
};

export default Radium(Header);