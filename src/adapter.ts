const SHIFT = 32;
const SCALE = 5/9;
export const fahrenheitToCelsius = (value: number)=> (value-SHIFT)*SCALE;
