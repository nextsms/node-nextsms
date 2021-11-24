## singleDestination

<!-- []: # Path: docs/apis/00_singleDestination.md -->

In this example, we will send a single SMS to a single destination.

Input:

```json
{
  "from": "NEXTSMS",
  "to": "255716718040",
  "text": "Your message"
}
```

Output:

```json
{
  "messages": [
    {
      "to": "255747991498",
      "status": [Object],
      "messageId": "33779656999734994466",
      "smsCount": 1
    }
  ]
}
```


Example:

```js
import NextSMS from '@nextsms/js-client';

// Populate the credentials
// Obtain your credentials from https://nextsms.co.tz/
const username = 'username';
const password = 'password';

// Initiate with credentials
let nextsms = new NextSMS({username, password, environment : 'testing'}); 

// Smoosh the data into a single object
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