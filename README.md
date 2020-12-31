## 🚧 Work in progres 🚧

# NextSMS Nodejs Client

## Usage

### Quick Examples

```js
import { Nextsms } from '@nextsms/js-client';

// Popolate the credtials
const username = 'username';
const passwor = 'password';

// Intiate with credentials
let pesa = new NextSMS({ username, password });

// Setup the transaction
let data = {
    to: "255123456789",
    text: "Hello World",
    // ..
};

// send sms
pesa.send_single(data)
    .then((data) => {
        // Print results
        console.log(data);
    })
    .catch((e) => {
        console.log('err: ' + e);
    });
```

### Testing

```bash
npm test
```

## Opening Issues

If you have a feature request or you encounter a bug, please file an issue on [our issue tracker on GitHub](https://github.com/nextsms/js-client/issues).

## Road Map 

0. Make it work
1. Validate data input using Regex before API call.

## Credits

-   [NextSMS](https://github.com/nextsms)
-   [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
