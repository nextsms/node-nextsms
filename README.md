<h2 align="center"> NextSMS for Nodejs</h2>
<p align="center"><a href="https://github.com/nextsms/js-client/actions/workflows/node.js.yml"><img src="https://github.com/nextsms/js-client/actions/workflows/node.js.yml/badge.svg" alt="Tests"></a></p>
    
<br>

The **NextSMS SDK** allows developers to easily integrate [NextSMS](https://nextsms.co.tz/) solutions in their Javascript code, and build robust applications and software.

## Documentation

Take a look at the [SDK docs here](hhttps://nextsms.github.io/js-client/).

## Usage

> _NOTE_:
> **Test Mode** ONLY Single destination and Multiple destinations support testing mode.

### Quick Examples


```sh
yarn add @nextsms/js-client
# or
npm i @nextsms/js-client
```

```js
import { Nextsms } from '@nextsms/js-client';

// Populate the credentials
const username = 'username';
const password = 'password';

// Initiate with credentials
let nextsms = new NextSMS(username, password, 'testing');

// Setup the transaction
let data = {
  from: 'NEXTSMS',
  to: '255123456789',
  text: 'Hello World',
};

// send sms
nextsms
  .singleDestination(data)
  .then(data => {
    // Print results
    console.log(data);
  })
  .catch(e => {
    console.log('error: ' + e);
  });
```

### Testing

```bash
yarn test
```

## Opening Issues

If you have a feature request or you encounter a bug, please file an issue on [our issue tracker on GitHub](https://github.com/nextsms/js-client/issues).

## Credits

- [Alpha Olomi](https://github.com/alphaolomi)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
