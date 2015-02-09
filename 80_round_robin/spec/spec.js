var roundRobin = require('../src');

describe('roundRobin', function () {

  it('returns rounds for 6 correctly', function () {
    pending();
    var input = [1,2,3,4,5,6];
    var result = roundRobin(input);
    expect(result[0]).toEqual([
      [1,4],
      [2,5],
      [3,6],
    ]);
    expect(result[1]).toEqual([
      [1,5],
      [4,6],
      [2,3],
    ]);
    expect(result[2]).toEqual([
      [1,6],
      [5,3],
      [4,2],
    ]);
    expect(result[3]).toEqual([
      [1,3],
      [6,2],
      [5,4]
    ]);
    expect(result[4]).toEqual([
      [1,2],
      [3,4],
      [6,5],
    ]);
    expect(result[5]).toEqual(undefined);
  });

  it('returns rounds for 8 correctly', function () {
    pending();
    var input = [1,2,3,4,5,6,7,8];
    var result = roundRobin(input);
    expect(result[0]).toEqual([
      [1,5],
      [2,6],
      [3,7],
      [4,8],
    ]);
    expect(result[1]).toEqual([
      [1,6],
      [5,7],
      [2,8],
      [3,4],
    ]);
    expect(result[2]).toEqual([
      [1,7],
      [6,8],
      [5,4],
      [2,3],
    ]);
    expect(result[3]).toEqual([
      [1,8],
      [7,4],
      [6,3],
      [5,2],
    ]);
    expect(result[4]).toEqual([
      [1,4],
      [8,3],
      [7,2],
      [6,5],
    ]);
    expect(result[5]).toEqual([
      [1,3],
      [4,2],
      [8,5],
      [7,6],
    ]);
    expect(result[6]).toEqual([
      [1,2],
      [3,5],
      [4,6],
      [8,7],
    ]);
    expect(result[7]).toEqual(undefined);
  });

});
