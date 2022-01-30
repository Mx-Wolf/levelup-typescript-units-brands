import { Celsius, makeCelsius } from './i-face-brand-c';
import { Fahrenheit } from './i-face-brand-f';

const SHIFT = 32;
const SCALE = 5 / 9;
export const fahrenheitToCelsius = (value: Fahrenheit): Celsius => makeCelsius((value - SHIFT) * SCALE);
