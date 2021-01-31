export const padding = (top = 0, left = 0, right = 0, bottom = 0) => {
    return {
            paddingTop: top || 0,
            paddingLeft: left || 0,
            paddingRight: right || 0,
            paddingBottom: bottom || 0
    };
};

export const margin = (top = 0, left = 0, right = 0, bottom = 0) => {
    return {
            marginTop: top,
            marginLeft: left,
            marginRight: right,
            marginBottom: bottom
    };
};

export const borderRadius = (radius = 0) => { return { borderRadius: radius };
};

export const borderStyle = (type = 'none') => { return { border: type } };

export const BoxShadow = { boxShadow: '1px 3px 10px #0a0a0a' };

export const RemoveFocusOutline = { outline: 'none' };