import dreal from '../Assets/dreal/web.png';
import infinite from '../Assets/infinite/web.png';
import wow_api from '../Assets/wayofwork/wowapi.png';
import wow_chat from '../Assets/wayofwork/wowchat.png';
import wow_dashboard from '../Assets/wayofwork/wowdashboard.png';
import si_gastronomia from '../Assets/servicio_integral/web.png';
import palmiro_bogliano from '../Assets/palmiro_bogliano/web.png';
import emiliano_menchaca from '../Assets/emiliano_menchaca/web.png';
import palmiro_bogliano_release from '../Assets/palmiro_bogliano/web2.png';

export const RealizedJobs = [
    {
        alias: 'Chat wow',
        name: 'Way of Work - Chat',
        resource: wow_chat,
        year: '2020',
        techs: ['html', 'css', 'javascript', 'sass', 'react native', 'firebase', 'webpack', 'babel', 'expo'],
        description: `Liderazgo de proyecto, análisis de requerimientos, diseño de modelo de datos y de
            diagrama de flujo, maquetación de Front-End, programación de Back-End`,
        tags: ['#react-native', '#web', '#mobile', '#android', '#ios'],
        workOwner: { name: 'xinnux', url: 'http://www.xinnux.com', color: '#16192f' },
        style: 'mobile'
    },
    {
        alias: 'Dash wow',
        name: 'Way of Work - Dashboard',
        resource: wow_dashboard,
        year: '2020',
        techs: ['html', 'css', 'javascript', 'sass', 'react', 'firebase', 'material-ui'],
        description: `Features, auditoría, rediseño, refactorización y modularización de código`,
        tags: ['#react', '#web'],
        workOwner: { name: 'xinnux', url: 'http://www.xinnux.com', color: '#16192f' },
        style: 'desktop'
    },
    {
        alias: 'API wow',
        name: 'Way of Work - APIRest',
        resource: wow_api,
        year: '2020',
        techs: ['node', 'express', 'firebase'],
        description: `Features, mantenimiento y desarrollo de endpoints`,
        tags: ['#node', '#backend'],
        workOwner: { name: 'xinnux', url: 'http://www.xinnux.com', color: '#16192f' },
        style: 'desktop'
    },
    {
        alias: 'Dreal',
        name: 'Dreal Comunicación',
        resource: dreal,
        year: '2018',
        techs: ['html', 'css', 'javascript', 'sass', 'wordpress'],
        description: 'Análisis, diseño y maquetación de Child-Theme Wordpress',
        tags: ['#wordpress', '#child-theme', '#design', '#analisis'],
        style: 'desktop'
    },
    {
        alias: 'Infinite',
        name: 'Descubriendo el infinito',
        resource: infinite,
        year: '2018',
        techs: ['html', 'css', 'javascript', 'sass', 'wordpress'],
        description: 'Análisis, diseño y maquetación de Custom-Theme Wordpress',
        tags: ['#wordpress', '#design', '#analisis'],
        style: 'desktop'
    },
    {
        alias: 'SI',
        name: 'Servicio Integral',
        resource: si_gastronomia,
        year: '2018',
        techs: ['html', 'css', 'javascript', 'sass', 'react'],
        description: 'Análisis, diseño y maquetación de Front-End',
        tags: ['#react', '#design', '#frontend', '#analisis'],
        style: 'desktop'
    },
    {
        alias: 'EM Seguros',
        name: 'Emiliano Menchaca - Productor de Seguros',
        resource: emiliano_menchaca,
        year: '2018',
        techs: ['html', 'css', 'javascript', 'sass'],
        description: 'Maquetación de Front-End',
        tags: ['#frontend', '#styling'],
        workOwner: { name: 'MainGroup', url: 'http://www.agustinducca.com', color: '#52d3aa' },
        style: 'desktop'
    },
    {
        alias: 'ISFD 156',
        name: 'Palmiro Bogliano v2',
        resource: palmiro_bogliano_release,
        year: '2018',
        techs: ['html', 'css', 'javascript', 'sass', 'wordpress'],
        description: 'Análisis, diseño y maquetación de Custom-Theme Wordpress',
        tags: ['#wordpress', '#custom-template', '#analisis', '#design'],
        style: 'desktop'
    },
    {
        alias: 'ISFD 156',
        name: 'Palmiro Bogliano v1',
        resource: palmiro_bogliano,
        year: '2017',
        techs: ['html', 'css', 'javascript'],
        description: 'Análisis, diseño y maquetación de WebSite',
        tags: ['#frontend', '#design'],
        style: 'desktop'
    }
]