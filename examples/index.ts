import NextSMS from '../src/modules/NextSMS';

// Populate the credetials
const username = '';
const password = '';

// Intiate with credentials
const nextsms = new NextSMS(username, password, 'testing');

// Setup the transaction
const data = {
    from: 'NEXTSMS',
    to: '255123456789',
    text: 'Hello World',
};

// send sms
nextsms
    .single_destination(data)
    .then((data) => {
        // Print results
        console.log(data);
        console.log(data.messages[0]);
    })
    .catch((e) => {
        console.log('error: ' + e);
    });
