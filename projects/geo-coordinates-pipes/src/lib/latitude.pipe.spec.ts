import { LatitudePipe } from './latitude.pipe';

describe('latitudePipe', () => {
  let pipe: LatitudePipe;

  beforeEach(() => {
    pipe = new LatitudePipe('en-US');
  });

  it('should return minutes and seconds with a leading 0 if < 10', () => {
    expect(pipe.transform(45.135)).toEqual('45° 08\' 06" N');
  });

  it('should still return 00 and 00 if there are no minutes or seconds', () => {
    expect(pipe.transform(50)).toEqual('50° 00\' 00" N');
  });

  it('should parse a negative value', () => {
    expect(pipe.transform(-19.37555556)).toEqual('19° 22\' 32" S');
  });

  it('should return seconds with decimal places if needed', () => {
    expect(pipe.transform(51.519475)).toEqual('51° 31\' 10.11" N');
    expect(pipe.transform(51.516975)).toEqual('51° 31\' 01.11" N');
  });

  it('should return precise values', () => {
    expect(pipe.transform(31.011306)).toEqual('31° 00\' 40.7016" N');
  });

  it('should handle precision correctly', () => {
    expect(pipe.transform(88.99999996)).toEqual('88° 59\' 59.9999" N');
    expect(pipe.transform(88.9999999)).toEqual('88° 59\' 59.9996" N');
    expect(pipe.transform(88.999999)).toEqual('88° 59\' 59.9964" N');
    expect(pipe.transform(88.99999)).toEqual('88° 59\' 59.964" N');
    expect(pipe.transform(88.9999)).toEqual('88° 59\' 59.64" N');
    expect(pipe.transform(88.999)).toEqual('88° 59\' 56.4" N');
    expect(pipe.transform(88.99)).toEqual('88° 59\' 24" N');
    expect(pipe.transform(88.9)).toEqual('88° 54\' 00" N');
    expect(pipe.transform(88.1)).toEqual('88° 06\' 00" N');
  });

  it('should handle .999999999 values correctly', () => {
    expect(pipe.transform(8.999999999)).toEqual('09° 00\' 00" N');
  });
});
