<h2 align="center"> 🚧 Work in progress 🚧<h2>


### Road Map 

0. Make it work
1. Improve and organise internal code structure ie interfaces,exceptions.
2. Add documentations
3. Validate data input using Regex before API call.
4. Throw respective Exception depending on response status code
 
<br>

# NextSMS Nodejs Client


The **NextSMS Nodejs Client** allows developers to easily intergrate [NextSMS](https://nextsms.co.tz/) solutions in their Javascript code, and build robust applications and software.


## Documentation

Take a look at the [SDK API docs here](https://nextsms-js.netlify.app/).

## Getting Started

1. **Sign up at [NextSMS Portal](https://nextsms.co.tz/)** – Before you begin, you need to sign up for an account and retrieve your credentials.
    Credetials include username and password

2. **Minimum requirements** – To run the SDK, your system will need to meet the
   [minimum requirements](https://nextsms-js.netlify.app/docs/requirements.html), including having **Node >= 10.1**.
4. **Install the SDK** – Using [NPM](https://www.npmjs.com/) is the recommended way to install the
   Pesa SDK for JS. The SDK is available via [NPM] under the
   [`@nextsms/nextsms-js`](https://www.npmjs.com/package/@nextsms/nextsms-js) package. You can run the following in the base directory of your project to add the SDK as a dependency:
    ```sh
    npm install @nextsms/nextsms-js
    ```
    Please see the
    [Installation section of the User Guide](https://nextsms-js.netlify.app/docs/installation.html) for more
    detailed information about installing the SDK through Composer and other
    means.
4. **Using the SDK** – The best way to become familiar with how to use the SDK
   is to read the [User Guide](https://nextsms-js.netlify.app/docs/guide.html).


## Usage

> *NOTE*: 
> **Test Mode** ONLY Single destination and  Multiple destinations supprt testing mode.


### Quick Examples

```js
import { Nextsms } from '@nextsms/js-client';

// Populate the credetials
const username = 'username';
const passwor = 'password';

// Intiate with credentials
let nextsms = new NextSMS( username, password , 'testing');

// Setup the transaction
let data = {
    to: "255123456789",
    text: "Hello World",
    // ..
};

// send sms
nextsms.send_single(data)
    .then((data) => {
        // Print results
        console.log(data);
    })
    .catch((e) => {
        console.log('error: ' + e);
    });
```

### Testing

```bash
npm test
```

## Opening Issues

If you have a feature request or you encounter a bug, please file an issue on [our issue tracker on GitHub](https://github.com/nextsms/js-client/issues).


## Credits

-   [NextSMS](https://github.com/nextsms)
-   [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
