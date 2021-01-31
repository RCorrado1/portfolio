export const getWidth = (width) => {
    if(width>= 1200) return 'xl';
    if(width < 1200 && width >= 768) return 'l';
    if(width < 768 && width >= 500) return 'm';
    if(width < 500 && width >= 300) return 's';
    return 'xs';
};

export const sizeChanges = (cb) => {
    window.addEventListener('resize', () => cb(getWidth(window.innerWidth)), false);
};