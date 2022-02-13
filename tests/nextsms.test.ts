import NextSMS from '../src';

describe('nextsms', () => {
  it('can instantiate nextsms class ', () => {
    // expect(sum(1, 1)).toEqual(2);
    let nextsms = new NextSMS({ username: 'username', password: 'password', apiKey: null, environment: 'testing' });
    expect(nextsms).toBeInstanceOf(NextSMS);
  });

  it('can instantiate nextsms class with apiKey ', () => {
    // expect(sum(1, 1)).toEqual(2);
    let nextsms = new NextSMS({ username: null, password: null, apiKey: 'apiKey', environment: 'testing' });
    expect(nextsms).toBeInstanceOf(NextSMS);
  });
});
