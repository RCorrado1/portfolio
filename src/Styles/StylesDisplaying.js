export const displaying = {
    flex:{
        display: 'flex'
    },
    column:{
        flexDirection: 'column'
    },
    grid: {
        display: 'grid'
    },
    row: {
        flexDirection: 'row'
    },
    none: {
        display: 'none'
    }
};

export const positionate = (top = 0, left = 0, right = 0, bottom = 0, index = 0) => {
    return {
        absolute: {
            position: 'absolute'
        },
        fixed: {
            position: 'fixed'
        },
        relative: {
            position: 'relative'
        },
        sticky: {
            position: 'sticky'
        },
        axis: {
            top: top,
            left: left,
            right: right,
            bottom: bottom
        },
        index: {
            zIndex: index
        }
    };
};