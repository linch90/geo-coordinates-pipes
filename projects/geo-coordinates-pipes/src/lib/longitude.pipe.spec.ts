import { LongitudePipe } from './longitude.pipe';

describe('longitudePipe', () => {
  let pipe: LongitudePipe;

  beforeEach(() => {
    pipe = new LongitudePipe('en-US');
  });

  it('should return minutes and seconds with a leading 0 if < 10', () => {
    expect(pipe.transform(45.135)).toEqual('045° 08\' 06" E');
  });

  it('should still return 00 and 00 if there are no minutes or seconds', () => {
    expect(pipe.transform(50)).toEqual('050° 00\' 00" E');
  });

  it('should parse a negative value', () => {
    expect(pipe.transform(-19.37555556)).toEqual('019° 22\' 32" W');
  });

  it('should return seconds with decimal places if needed', () => {
    expect(pipe.transform(51.519475)).toEqual('051° 31\' 10.11" E');
    expect(pipe.transform(51.516975)).toEqual('051° 31\' 01.11" E');
  });

  it('should return precise values', () => {
    expect(pipe.transform(31.011306)).toEqual('031° 00\' 40.7016" E');
  });

  it('should handle precision correctly', () => {
    expect(pipe.transform(120.99999996)).toEqual('120° 59\' 59.9999" E');
    expect(pipe.transform(120.9999999)).toEqual('120° 59\' 59.9996" E');
    expect(pipe.transform(120.999999)).toEqual('120° 59\' 59.9964" E');
    expect(pipe.transform(120.99999)).toEqual('120° 59\' 59.964" E');
    expect(pipe.transform(120.9999)).toEqual('120° 59\' 59.64" E');
    expect(pipe.transform(120.999)).toEqual('120° 59\' 56.4" E');
    expect(pipe.transform(120.99)).toEqual('120° 59\' 24" E');
    expect(pipe.transform(120.9)).toEqual('120° 54\' 00" E');
    expect(pipe.transform(120.1)).toEqual('120° 06\' 00" E');
  });

  it('should handle .999999999 values correctly', () => {
    expect(pipe.transform(8.999999999)).toEqual('009° 00\' 00" E');
  });
});
