import { formatNumber } from '@angular/common';
import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';
import { ɵstringify as stringify } from '@angular/core';
import { decimalToSexagesimal, isValue, strToNumber } from './utils';

@Pipe({
  name: 'magneticVariation',
})
export class MagneticVariationPipe implements PipeTransform {
  constructor(@Inject(LOCALE_ID) private _locale: string) {}

  transform(
    value: number | string | null | undefined,
    minFractionDigits: number = 0,
    maxFractionDigits: number = 0
  ): string | null {
    if (!isValue(value)) {
      return null;
    }

    try {
      const num = strToNumber(value);
      const regex = /^([0-9]*)\s*°\s*([0-9]*)\s*\'\s*([0-9\.]*)\s*\"\s*/;
      let dmsText = decimalToSexagesimal(num);
      const match = dmsText.match(regex)!;
      const degrees = formatNumber(+match[1], this._locale, '2.0-0');
      const minutes = formatNumber(+match[2], this._locale, '2.0-0');
      const seconds = formatNumber(
        +match[3],
        this._locale,
        `2.${minFractionDigits}-${maxFractionDigits}`
      );
      let pos = Math.sign(num) === -1 ? 'W' : 'E';
      return `${degrees}° ${minutes}' ${seconds}" ${pos}`;
    } catch (error: any) {
      throw Error(
        `InvalidPipeArgument: '${error.message}' for pipe '${stringify(
          MagneticVariationPipe
        )}'`
      );
    }
  }
}
