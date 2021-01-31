export const calculateTime = (dd, mm, yyyy) => {
    let current_date = new Date(),
        current_month = current_date.getMonth(),
        current_diff = current_date.getFullYear() - yyyy;
    if(current_month < mm || 
        (current_month === mm) && dd < current_date.getDate()) 
            return current_diff - 1
    return current_diff;
};