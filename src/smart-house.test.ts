import { expect } from 'chai';
import { makeCelsius } from './i-face-brand-c';
import { makeFahrenheit } from './i-face-brand-f';
import { controlPanel } from './smart-house';
import { fahrenheitToCelsius } from './adapter';

const NATIVE_BOILING = makeCelsius(100);
const GUEST_BOILING = makeFahrenheit(212);

describe('поведение умного дома', () => {
  it('использует систему СИ единиц измерения', () => {
    const kettle = controlPanel.getKettle();
    kettle.keepTemperature(NATIVE_BOILING);
    const realTemperature = kettle.getWater();
    expect(realTemperature - NATIVE_BOILING).lessThan(Number.EPSILON);
  });
  it('адаптируется под привычки гостей', () => {
    const kettle = controlPanel.getKettle();
    kettle.keepTemperature(fahrenheitToCelsius(GUEST_BOILING));
    const realTemperature = kettle.getWater();
    expect(realTemperature - NATIVE_BOILING).lessThan(Number.EPSILON);
  });
});
