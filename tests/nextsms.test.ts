import NextSMS from '../src';

describe('nextsms', () => {
  it('can instantiate nextsms class ', () => {
    // expect(sum(1, 1)).toEqual(2);
    let nextsms = new NextSMS({ username: 'username', password: 'password', environment: 'testing' });
    expect(nextsms).toBeInstanceOf(NextSMS);
  });
});
