import { MagneticVariationPipe } from './magnetic-variation.pipe';

describe('magneticVariationPipe', () => {
  let pipe: MagneticVariationPipe;

  beforeEach(() => {
    pipe = new MagneticVariationPipe('en-US');
  });

  it('should return minutes and seconds with a leading 0 if < 10', () => {
    expect(pipe.transform(5.135)).toEqual('05° 08\' 06" E');
  });

  it('should still return 00 and 00 if there are no minutes or seconds', () => {
    expect(pipe.transform(3)).toEqual('03° 00\' 00" E');
  });

  it('should parse a negative value', () => {
    expect(pipe.transform(-1.37555556)).toEqual('01° 22\' 32" W');
  });

  it('should return seconds with decimal places if needed', () => {
    expect(pipe.transform(3.519475, 0, 5)).toEqual('03° 31\' 10.11" E');
    expect(pipe.transform(3.516975, 0, 5)).toEqual('03° 31\' 01.11" E');
  });

  it('should return seconds without decimal places by defaults', () => {
    expect(pipe.transform(3.519475)).toEqual('03° 31\' 10" E');
    expect(pipe.transform(3.516975)).toEqual('03° 31\' 01" E');
  });

  it('should handle .999999999 values correctly', () => {
    expect(pipe.transform(1.999999999)).toEqual('02° 00\' 00" E');
  });
});
