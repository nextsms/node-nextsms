import axios, { AxiosError, AxiosRequestHeaders, AxiosResponse } from 'axios';
import {
  deductCustomer,
  multipleMessagesToMultipleDestinations,
  multipleMessagesToMultipleDifferentDestinations,
  Options,
  rechargeCustomer,
  scheduleSms,
  SMS,
  subCustomer,
} from '../interfaces';

/**
 * NextSMS
 * {@link https://documenter.getpostman.com/view/4680389/SW7dX7JL#intro}
 * 
 * 
 * ```typescript
 * import NextSMS from '@nextsms/js-client';
 * 
 * let nextsms = new NextSMS({
 *    username: 'username', 
 *    password: 'password',
 *    environment: 'testing' 
 * });
 * ```
 *
 * @class NextSMS
 * @since 0.0.1
 * @author Alpha Olomi <hello@alphaolomi.com>
 *
 */
class NextSMS {
  /**
   * environment
   */
  private environment: 'testing' | 'production';

  /**
   * key
   */
  private key: string;

  /**
   * header
   */
  private header: AxiosRequestHeaders;

  /**
   * root
   */
  private ROOT_URL = 'https://messaging-service.co.tz/';


  /**
   *
   * @param username Options['username']  
   * @param password Options['password']
   * @param environment Options['environment']
   */
  constructor({ username, password, environment = 'production' }: Options) {
    this.key = Buffer.from(`${username}:${password}`.toString(), 'binary').toString('base64');
    this.environment = environment;
    this.header = {
      Authorization: `Basic ${this.key}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
  }

  /**
   *
   * Send Sms to Single destination
   *
   *
   * {
   *  from : 'NEXTSMS',
   *  to : '255716718040',
   *  text : 'Your message'
   * }
   *
   * {@link https://documenter.getpostman.com/view/4680389/SW7dX7JL#5e466440-829b-4b56-be32-b681e4f81227}
   * @returns {Promise}
   */
  singleDestination(data: SMS): Promise<any> {
    return new Promise((resolve, reject) => {
      const _url = `${this.ROOT_URL}api/sms/v1${this.environment !== 'production' ? '/test' : ''}/text/single`;
      axios({
        method: 'post',
        url: _url,
        headers: this.header,
        data: data,
      })
        .then((response: AxiosResponse) => {
          resolve(response.data);
        })
        .catch((error: AxiosError) => {
          console.log(error);
          reject(error);
        });
    });
  }

  /**
   *
   *  Multiple destinations
   * For sending the single messages to multiple phone numbers,
   *
   * {
   *  from = 'NEXTSMS',
   *  to = ['255655912841', '255716718040'],
   *  text = 'Your message'
   * }
   *
   * * {@link https://documenter.getpostman.com/view/4680389/SW7dX7JL#2936eed4-6027-45e7-92c9-fe1cd7df140b}
   * @returns {Promise}
   */
  multipleDestinations(data: multipleMessagesToMultipleDestinations): Promise<any> {
    return new Promise((resolve, reject) => {
      const _url = `${this.ROOT_URL}api/sms/v1${this.environment !== 'production' ? '/test' : ''}/text/multi`;
      axios({
        method: 'post',
        url: _url,
        headers: this.header,
        data: data,
      })
        .then((response: AxiosResponse) => {
          resolve(response.data);
        })
        .catch((error: AxiosError) => {
          reject(error.response);
        });
    });
  }
  /**
   *
   *   Multiple messages to Multiple destinations (Format 1)
   *
   * {
   *     messages = [
   *         { from: 'NEXTSMS', to: '255716718040', text: 'Your message' },
   *         { from: 'NEXTSMS', to: '255655912841', text: 'Your other message' },
   *     ],
   * }
   * @param data
   *
   *
   * {@link https://documenter.getpostman.com/view/4680389/SW7dX7JL#b13825ab-8b49-45f5-a4cd-fb7d21aa975a }
   * @returns {Promise}
   */
  multipleMessagesToMultipleDestinations(data: multipleMessagesToMultipleDestinations): Promise<any> {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url: 'https://messaging-service.co.tz/api/sms/v1/text/multi',
        headers: this.header,
        data: data,
      })
        .then((response: AxiosResponse) => {
          resolve(response.data);
        })
        .catch((error: AxiosError) => {
          reject(error.response);
        });
    });
  }

  /**
   *
   *  Multiple messages to Multiple destinations (Format 2)
   * For sending the multiple messages to multiple phone numbers,
   * {
   *     messages: [
   *         {
   *             from: 'NEXTSMS',
   *             to: ['255716718040', '255758483019'],
   *             text: 'Your message',
   *         },
   *         {
   *             from: 'NEXTSMS',
   *             to: ['255758483019', '255655912841', '255716718040'],
   *             text: 'Your other message',
   *         },
   *     ],
   * }
   *
   *
   * {@link https://documenter.getpostman.com/view/4680389/SW7dX7JL#6916415a-4645-460d-bb3f-a6d6fbd60e4a}
   * @returns {Promise}
   */
  multipleMessagesToMultipleDifferentDestinations(data: multipleMessagesToMultipleDifferentDestinations): Promise<any> {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url: 'https://messaging-service.co.tz/api/sms/v1/text/multi',
        headers: this.header,
        data: data,
      })
        .then((response: AxiosResponse) => {
          resolve(response.data);
        })
        .catch((error: AxiosError) => {
          reject(error.response);
        });
    });
  }

  /**
   *  Schedule SMS
   *
   *   To send schedule sms you required to have the following parameters:
   *   from - your Sender ID
   *   to - recipient phone number with the format begin with 255
   *   text - your text message
   *   date - date of the day to which you want to send your sms, format of Year-month-date example: 2020-10-01
   *   time - time of the day to which you want to send your sms, 24 hours format example: 12:00
   *
   *   Optional parameters to the schedule sms
   *   repeat - you can add this parameter when you want your sms to be repeated. This must be with these values in order to work: hourly, daily, weekly or monthly
   *   start_date - this parameter defines the date from this your sms can start sending, format of Year-month-date example: 2020-10-01.
   *   end_date - this parameter defines the date from this your sms can end sending, format of Year-month-date example: 2021-01-01.
   *
   *
   *   {
   *     from: 'SENDER',
   *     to: '255716718040',
   *     text: 'Your message',
   *     date: '2020-10-01',
   *     time: '12:00',
   *   }
   * {@link https://documenter.getpostman.com/view/4680389/SW7dX7JL#59cc2941-482b-45ab-9721-a7abffc83bba}
   *
   * @param data
   *
   * @returns {Promise}
   *
   */
  scheduleSms(data: scheduleSms): Promise<any> {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url: 'https://messaging-service.co.tz/api/sms/v1/text/single',
        headers: this.header,
        data: data,
      })
        .then((response: AxiosResponse) => {
          resolve(response.data);
        })
        .catch((error: AxiosError) => {
          reject(error.response);
        });
    });
  }

  // - Sms Delivery Reports

  /**
   *
   * GET Get delivery reports with messageId
   *
   * {@link https://documenter.getpostman.com/view/4680389/SW7dX7JL#5fc5b186-c4dc-4de0-9d0f-baee93d53c7d}
   * @returns {Promise}
   */
  getDeliveryReports(): Promise<any> {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: 'https://messaging-service.co.tz/api/sms/v1/reports',
        headers: this.header,
      })
        .then((response: AxiosResponse) => {
          resolve(response.data);
        })
        .catch((error: AxiosError) => {
          reject(error.response);
        });
    });
  }

  /**
   * Get delivery reports with messageId
   *
   *
   * @param messageId
   *
   *
   * {@link https://documenter.getpostman.com/view/4680389/SW7dX7JL#6402ce4e-d0d4-44ac-8606-a9d12a900974}
   * @returns {Promise}
   */
  getDeliveryReportsWithMessageId(messageId: number): Promise<any> {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: `https://messaging-service.co.tz/api/sms/v1/reports?messageId=${messageId}`,
        headers: this.header,
      })
        .then((response: AxiosResponse) => {
          resolve(response.data);
        })
        .catch((error: AxiosError) => {
          reject(error.response);
        });
    });
  }

  /**
   *
   * GET Get delivery reports with specific date range
   * @param sentSince
   * @param sentUntil
   *
   * {@link https://documenter.getpostman.com/view/4680389/SW7dX7JL#46fc5c9c-0cd4-4356-8cab-1e326e54940a}
   * @returns {Promise}
   */
  getDeliveryReportsWithSpecificDateRange(sentSince: string, sentUntil: string): Promise<any> {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: `https://messaging-service.co.tz/api/sms/v1/reports?sentSince${sentSince}=&sentUntil=${sentUntil}`,
        headers: this.header,
      })
        .then((response: AxiosResponse) => {
          resolve(response.data);
        })
        .catch((error: AxiosError) => {
          reject(error.response);
        });
    });
  }

  // - Sent Sms Logs

  /**
   *
   * GET Get all sent SMS logs
   * @param from
   * @param limit
   * @param offset
   *
   * {@link https://documenter.getpostman.com/view/4680389/SW7dX7JL#493fa3f2-c96d-44cc-892d-b6e166dd0683}
   * @returns {Promise}
   */
  getAllSentSmsLogs(from: string, limit: number, offset: number): Promise<any> {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: `https://messaging-service.co.tz/api/sms/v1/logs?from=${from}&limit=${limit}&offset=${offset}`,
        headers: this.header,
      })
        .then((response: AxiosResponse) => {
          resolve(response.data);
        })
        .catch((error: AxiosError) => {
          reject(error.response);
        });
    });
  }

  /**
   *  GET Get all sent SMS logs with optional parameter
   *
   *
   * from=NEXTSMS
   * to=255716718040
   * sentSince=2020-02-01
   * sentUntil=2020-02-20
   *
   * @param from  string
   * @param to string
   * @param sentSince string
   * @param sentUntil string
   *
   *
   * {@link https://documenter.getpostman.com/view/4680389/SW7dX7JL#493fa3f2-c96d-44cc-892d-b6e166dd0683}
   * @returns {Promise}
   */
  getAllSentSms(from: string, to: string, sentSince: string, sentUntil: string): Promise<any> {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: `https://messaging-service.co.tz/api/sms/v1/logs?from=${from}&to=${to}&sentSince=${sentSince}&sentUntil=${sentUntil}`,
        headers: this.header,
      })
        .then((response: AxiosResponse) => {
          resolve(response.data);
        })
        .catch((error: AxiosError) => {
          reject(error.response);
        });
    });
  }

  /**
   *
   * - Sub Customer
   *   - POST Register Sub Customer
   * {
   *     firstName = 'Api',
   *     lastName = 'Customer',
   *     username = 'apicust',
   *     email = 'apicust@customer.com',
   *     phoneNumber = '0738234339',
   *     accountType = 'Sub Customer (Reseller)',
   *     smsPrice = 20,
   * }
   *
   * @param data subCustomer
   * {@link https://documenter.getpostman.com/view/4680389/SW7dX7JL#4d5c6a0a-9d16-45e2-ab8e-74211258ca00}
   * @returns {Promise}
   */
  registerSubcustomer(data: subCustomer): Promise<any> {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url: 'https://messaging-service.co.tz/api/reseller/v1/sub_customer/create',
        headers: this.header,
        data: {
          first_name: data.firstName,
          last_name: data.lastName,
          username: data.username,
          email: data.email,
          phone_number: data.phoneNumber,
          account_type: data.accountType,
          sms_price: data.smsPrice,
        },
      })
        .then((response: AxiosResponse) => {
          resolve(response.data);
        })
        .catch((error: AxiosError) => {
          reject(error.response);
        });
    });
  }

  /**
   *  Recharge customer
   *
   *  {
   *      email = 'example@email.com',
   *      smscount = 5000
   *  }
   *
   * @param data rechargeCustomer
   * {@link https://documenter.getpostman.com/view/4680389/SW7dX7JL#d3bd992c-08a8-400d-9b52-41fe6afecf44 }
   * @returns {Promise}
   */
  rechargeCustomer(data: rechargeCustomer): Promise<any> {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url: 'https://messaging-service.co.tz/api/reseller/v1/sub_customer/recharge',
        headers: this.header,
        data: data,
      })
        .then((response: AxiosResponse) => {
          resolve(response.data);
        })
        .catch((error: AxiosError) => {
          reject(error.response);
        });
    });
  }

  /**
   *  Deduct customer
   *  To deduct your customer you are required to specify
   *  your customer email account which has been registered with the customer
   *  and smscount number of sms you want to deduct from a customer account.
   *
   *  {
   *      email = 'example@email.com',
   *      smscount = 2000
   *  }
   *
   *  @param data deductCustomer
   *  {@link https://documenter.getpostman.com/view/4680389/SW7dX7JL#570c9c63-4dc5-4ef5-aba5-1e4ba6d6d288}
   *  @returns {Promise}
   */
  deductCustomer(data: deductCustomer): Promise<any> {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url: 'https://messaging-service.co.tz/api/reseller/v1/sub_customer/deduct',
        headers: this.header,
        data: data,
      })
        .then((response: AxiosResponse) => {
          resolve(response.data);
        })
        .catch((error: AxiosError) => {
          reject(error.response);
        });
    });
  }

  /**
   *
   * Get sms balance
   *
   * {@link https://documenter.getpostman.com/view/4680389/SW7dX7JL#570c9c63-4dc5-4ef5-aba5-1e4ba6d6d288}
   *
   * @returns {Promise}
   */
  getSmsBalance(): Promise<any> {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: 'https://messaging-service.co.tz/api/sms/v1/balance',
        headers: this.header,
      })
        .then((response: AxiosResponse) => {
          resolve(response.data);
        })
        .catch((error: AxiosError) => {
          reject(error.response);
        });
    });
  }
}

export default NextSMS;
