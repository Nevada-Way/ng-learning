import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'milesToMetric',
})
export class MilesConverter implements PipeTransform {
  transform(value: number, targetUnit: string): unknown {
    if (!value) {
      return '';
    }

    console.log(`targetUnit = ${targetUnit}`);

    const valueInKm = value * 1.609;
    switch (targetUnit) {
      case 'km':
        return valueInKm;
      case 'm':
        return valueInKm * 1000;
      default:
        throw new Error(`The unit "${targetUnit}" is not supported.`);
    }

    return value;
  }
}
