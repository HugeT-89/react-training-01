export const isDateEven = () => {
    const date = new Date();
    return date.getDate() % 2 === 0;
}

export const generateRadndomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
