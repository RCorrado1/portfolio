//React && Functional
import React, { useEffect, useState } from 'react';
import Radium from 'radium';

//Styles
import { sizes } from '../Styles/StylesSizes';
import { alignElement } from '../Styles/StylesAlignment';
import { displaying } from '../Styles/StylesDisplaying';

//Render
let ContactMe = (props) => {
    const[contactData, setContactData] = useState({});

    const styles = {
        formContainer: {
            gridTemplateColumns: '40% 50%',
            gridColumnGap: '10%'
        }
    };

    return(
        <section id="contacto"
            style={[
                displaying.grid,
                alignElement.center,
                sizes.h_50,
                styles
            ]}
        >
            
        </section>
    );
};

export default Radium(ContactMe);