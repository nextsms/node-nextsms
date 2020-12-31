import axios from "axios";

class NextSMS {
  username: string;
  password: string;
  enviroment: "testing" | "production";
  private key
  constructor(
    username: string,
    password: string,
    enviroment: "testing" | "production"        
  ) {
      this.key = ''
      
  }  

  //   - POST Single destination
  // - Send Sms
  Single_destination({
    from= "NEXTSMS",
    to= "255716718040",
    text= "Your message",
  }) {

    

    axios({
        method: "post",
        url: "https://messaging-service.co.tz/api/sms/v1/test/text/single",
        headers: {
          Authorization: "Basic aW0yM246MjNuMjNu",
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        data: JSON.stringify({
            from,
            to,
            text,
          }),
      })
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  //   - POST Multiple destinations
  multiple_destinations({
      from= "NEXTSMS",
      to= ["255655912841", "255716718040"],
      text= "Your message",
    }) {
  

    axios( {
        method: "post",
        url: "https://messaging-service.co.tz/api/sms/v1/test/text/single",
        headers: {
          Authorization: "Basic dGVzdDE6MTIzNDU2",
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        data: JSON.stringify({
            from,
            to,
            text,
          }),
      })
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  //   - POST Multiple messages to Multiple destinations (Example 1)
  multiple_messages_to_multiple_destinations_example1({
      messages= [
        { from: "NEXTSMS", to: "255716718040", text: "Your message" },
        { from: "NEXTSMS", to: "255655912841", text: "Your other message" },
      ],
    }) {
    

    axios({
        method: "post",
        url: "https://messaging-service.co.tz/api/sms/v1/text/multi",
        headers: {
          Authorization: "Basic dGVzdDE6MTIzNDU2",
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        data: JSON.stringify({
      messages: [
        { from: "NEXTSMS", to: "255716718040", text: "Your message" },
        { from: "NEXTSMS", to: "255655912841", text: "Your other message" },
      ],
    }),
      })
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  //   - POST Multiple messages to Multiple destinations (Example 2)
  multiple_messages_to_multiple_destinations() {
    var data = JSON.stringify({
      messages: [
        {
          from: "NEXTSMS",
          to: ["255716718040", "255758483019"],
          text: "Your message",
        },
        {
          from: "NEXTSMS",
          to: ["255758483019", "255655912841", "255716718040"],
          text: "Your other message",
        },
      ],
    });

    

    axios( {
        method: "post",
        url: "https://messaging-service.co.tz/api/sms/v1/text/multi",
        headers: {
          Authorization: "Basic dGVzdDE6MTIzNDU2",
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        data: data,
      })
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  //   - POST Schedule SMS
  schedule_sms() {
    var data = JSON.stringify({
      from: "SENDER",
      to: "255716718040",
      text: "Your message",
      date: "2020-10-01",
      time: "12:00",
    });

    var config =;

    axios( {
        method: "post",
        url: "https://messaging-service.co.tz/api/sms/v1/text/single",
        headers: {
          Authorization: "Basic dGVzdDE6MTIzNDU2",
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        data: data,
      })
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // - Sms Delivery Reports

  //   - GET Get delivery reports with messageId
  get_delivery_reports_with_message_id() {
 

    axios({
        method: "get",
        url: "https://messaging-service.co.tz/api/sms/v1/reports",
        headers: {
          Authorization: "Basic aW0yM246MTIzNDU2",
          Accept: "application/json",
        },
        data: data,
      })
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  //   - GET Get delivery reports with specific date range
  get_delivery_reports_with_specific_date_range(data:string) {
    
    axios({
        method: "get",
        url:
          "https://messaging-service.co.tz/api/sms/v1/reports?sentSince=2020-02-01&sentUntil=2020-02-20",
        headers: {
          Authorization: "Basic aW0yM246MTIzNDU2",
          Accept: "application/json",
        },
        data: data,
      })
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // - Sent Sms Logs

  //   - GET Get all sent SMS logs
  Get_all_sent_SMS_logs(data) {
    

    axios( {
        method: "get",
        url: "https://messaging-service.co.tz/api/sms/v1/logs",
        headers: {
          Authorization: "Basic aW0yM246MTIzNDU2",
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        data: data,
      })
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  //   - GET Get all sent SMS logs with optional parameter
  Get_all_sent_SMS(data) {
   
    axios( {
        method: "get",
        url:
          "https://messaging-service.co.tz/api/sms/v1/logs?from=NEXTSMS&to=255716718040&sentSince=2020-02-01&sentUntil=2020-02-20",
        headers: {
          Authorization: "Basic aW0yM246MTIzNDU2",
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        data: data,
      })
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // - Sub Customer

  //   - POST Register Sub Customer
  Register_Sub_Customer({ first_name= "Api",
  last_name= "Customer",
  username= "apicust",
  email= "apicust@customer.com",
  phone_number= "0738234339",
  account_type= "Sub Customer (Reseller)",
  sms_price= 20,}) {
    
    

    axios({
        method: "post",
        url:
          "https://messaging-service.co.tz/api/reseller/v1/sub_customer/create",
        headers: {
          Authorization: "Basic bmV3MjNuOjEyMzQ1Ng==",
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        data: JSON.stringify({
          first_name,
          last_name,
          username,
          email,
          phone_number,
          account_type,
          sms_price,
      })
    })
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  //   - POST Recharge customer
  Recharge_customer({ email= "example@email.com", smscount= 5000 }) {
    

    

    axios({
        method: "post",
        url:
          "https://messaging-service.co.tz/api/reseller/v1/sub_customer/recharge",
        headers: {
          Authorization: "Basic aW0yM246MTIzNDU2",
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        data: data,
      })
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  //   - POST Deduct customer
  Deduct_customer({ email= "example@email.com", smscount= 2000 }) {
    

    axios( {
        method: "post",
        url:
          "https://messaging-service.co.tz/api/reseller/v1/sub_customer/deduct",
        headers: {
          Authorization: "Basic aW0yM246MTIzNDU2",
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        data: JSON.stringify({ email, smscount }),
      })
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  //   - GET Get sms balance
  Get_sms_balance(data) {

    axios({
        method: "get",
        url: "https://messaging-service.co.tz/api/sms/v1/balance",
        headers: {
          Authorization: "Basic c3ViY3VzdG9tZXI6MTIzNDU2",
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        data: data,
      })
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
