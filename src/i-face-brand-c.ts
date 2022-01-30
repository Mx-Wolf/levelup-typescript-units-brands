export type Celsius = number & {celsius:void};
export const makeCelsius = (value:number) => value as Celsius;
