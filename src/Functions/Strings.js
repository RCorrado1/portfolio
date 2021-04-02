export const animateString = (array, cb, time = 100) => {
    let i = 0,
        current = '',
        interval = setInterval(() => {
            if(i < array.length) {
                current = `${current}${array[i]}`;
                cb(current);
                i++;
            } else clearInterval(interval);
        }, time);  
};