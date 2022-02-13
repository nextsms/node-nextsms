<h2 align="center"> NextSMS Client for Node.js</h2>

<p align="center"><a href="https://github.com/nextsms/js-client/actions/workflows/node.js.yml"><img src="https://github.com/nextsms/js-client/actions/workflows/node.js.yml/badge.svg" alt="Tests"></a></p>

<br>

The **NextSMS SDK** allows developers to easily integrate [NextSMS](https://nextsms.co.tz/) solutions in their Javascript code, and build robust applications and software.

## Documentation

Take a look at the [SDK docs here](hhttps://nextsms.github.io/js-client/).

## Usage

> **NOTE**: <br> > _Test Mode_ ONLY `Single destination` and `Multiple destinations` APIs support testing mode.

### Quick Examples

```sh
yarn add @nextsms/js-client
# or
npm i @nextsms/js-client
```

```js
import NextSMS from '@nextsms/js-client';

// Populate the credentials
const username = 'username';
const password = 'password';
const apiKey = null';

// Initiate with credentials
let nextsms = new NextSMS({ username, password, apiKey, environment: 'testing' });

const data = {
  from: 'NEXTSMS',
  to: '255123456789',
  text: 'Hello World',
};

// Send the sms
nextsms
  .singleDestination(data)
  .then(data => {
    // Print results
    console.log(data);
  })
  .catch(error => {
    console.log('error: ' + error);
  });
```

## Using base64 api key

```js
import NextSMS from '@nextsms/js-client';

// Populate the credentials
const username = null;
const password = null;
const apiKey = 'yourBase64Key'; // this is generated on https://www.blitter.se/utils/basic-authentication-header-generator/ as mentioned on nextsms api documentation.

// Initiate with credentials
let nextsms = new NextSMS({ username, password, apiKey, environment: 'testing' });

const data = {
  from: 'NEXTSMS',
  to: '255123456789',
  text: 'Hello World',
};

// Send the sms
nextsms
  .singleDestination(data)
  .then(data => {
    // Print results
    console.log(data);
  })
  .catch(error => {
    console.log('error: ' + error);
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
