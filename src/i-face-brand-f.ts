export type Fahrenheit = number & {fahrenheit: void};
export const makeFahrenheit = (value: number) => value as Fahrenheit;
