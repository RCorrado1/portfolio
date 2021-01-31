export const displaying = {
    flex:{
        display: 'flex'
    },
    column:{
        flexDirection: 'column'
    },
    grid: {
        display: 'grid'
    }
};

export const positionate = (top = 0, left = 0, right = 0, bottom = 0) => {
    return {
        absolute: {
            position: 'absolute'
        },
        fixed: {
            position: 'fixed'
        },
        axis: {
            top: top,
            left: left,
            right: right,
            bottom: bottom
        }
    };
};