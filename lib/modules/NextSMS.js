"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
/**
 * NextSMS
 * @see {@link https://documenter.getpostman.com/view/4680389/SW7dX7JL#intro}
 *
 * @version 0.1.0
 * @author Alpha Olomi
 */
var NextSMS = /** @class */ (function () {
    /**
     *
     * @param username
     * @param password
     * @param enviroment
     */
    function NextSMS(username, password, enviroment) {
        /**
         * root
         */
        this.ROOT_URL = 'https://messaging-service.co.tz/';
        this.key = Buffer.from((username + ":" + password).toString(), 'binary').toString('base64');
        this.enviroment = enviroment;
        this.header = {
            Authorization: "Basic " + this.key,
            'Content-Type': 'application/json',
            Accept: 'application/json',
        };
        this.base_url = '';
    }
    /**
     *
     * Send Sms to Single destination
     *
     *
     * {
     *  from = 'NEXTSMS',
     *  to = '255716718040',
     *  text = 'Your message'
     * }
     *
     * @see {@link https://documenter.getpostman.com/view/4680389/SW7dX7JL#5e466440-829b-4b56-be32-b681e4f81227}
     * @returns {Promise}
     */
    NextSMS.prototype.single_destination = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // this.base_url = this.ROOT_URL + 'api/sms/v1' + (this.enviroment === 'production') ? '' : '/test';
            // url: `${this.base_url}/text/single`,
            axios_1.default({
                method: 'post',
                url: "https://messaging-service.co.tz/api/sms/v1/test/text/single",
                headers: _this.header,
                data: data,
            })
                .then(function (response) {
                resolve(response.data);
            })
                .catch(function (error) {
                console.log(error);
                reject(error);
            });
        });
    };
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
     * * @see {@link https://documenter.getpostman.com/view/4680389/SW7dX7JL#2936eed4-6027-45e7-92c9-fe1cd7df140b}
     * @returns {Promise}
     */
    NextSMS.prototype.multiple_destinations = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // this.base_url = this.ROOT_URL + 'api/sms/v1' + (this.enviroment === 'production') ? '' : '/test';
            axios_1.default({
                method: 'post',
                // url: `${this.base_url}/text/single`,
                url: "https://messaging-service.co.tz/api/sms/v1/test/text/text/multi",
                headers: _this.header,
                data: data,
            })
                .then(function (response) {
                resolve(response.data);
            })
                .catch(function (error) {
                reject(error.response);
            });
        });
    };
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
     * @see {@link https://documenter.getpostman.com/view/4680389/SW7dX7JL#b13825ab-8b49-45f5-a4cd-fb7d21aa975a }
     * @returns {Promise}
     */
    NextSMS.prototype.multiple_messages_to_multiple_destinations_example1 = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            axios_1.default({
                method: 'post',
                url: 'https://messaging-service.co.tz/api/sms/v1/text/multi',
                headers: _this.header,
                data: data,
            })
                .then(function (response) {
                resolve(response.data);
            })
                .catch(function (error) {
                reject(error.response);
            });
        });
    };
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
     * @see {@link https://documenter.getpostman.com/view/4680389/SW7dX7JL#6916415a-4645-460d-bb3f-a6d6fbd60e4a}
     * @returns {Promise}
     */
    NextSMS.prototype.multiple_messages_to_multiple_destinations = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            axios_1.default({
                method: 'post',
                url: 'https://messaging-service.co.tz/api/sms/v1/text/multi',
                headers: _this.header,
                data: data,
            })
                .then(function (response) {
                resolve(response.data);
            })
                .catch(function (error) {
                reject(error.response);
            });
        });
    };
    /**
     *  Schedule SMS
     *
     *   To send schedule sms you required to have the following parameters:
     *   from - your Sender ID
     *   to - recipient phone number with the format begin with 255
     *   text - your text message
     *   date - date of the day to which you want to send your sms, format of Year-month-date exapmle:2020-10-01
     *   time - time of the day to which you want to send your sms, 24 hours format exapmle:12:00
     *
     *   Optional parameters to the schedule sms
     *   repeat - you can add this parameter when you want your sms to be repeated. This must be with these values in order to work: hourly, daily, weekly or monthly
     *   start_date - this parameter defines the date from this your sms can start sending, format of Year-month-date exapmle:2020-10-01.
     *   end_date - this parameter defines the date from this your sms can end sending, format of Year-month-date exapmle:2021-01-01.
     *
     *
     *   {
     *     from: 'SENDER',
     *     to: '255716718040',
     *     text: 'Your message',
     *     date: '2020-10-01',
     *     time: '12:00',
     *   }
     * @see {@link https://documenter.getpostman.com/view/4680389/SW7dX7JL#59cc2941-482b-45ab-9721-a7abffc83bba}
     *
     * @param data
     *
     * @returns {Promise}
     *
     */
    NextSMS.prototype.schedule_sms = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            axios_1.default({
                method: 'post',
                url: 'https://messaging-service.co.tz/api/sms/v1/text/single',
                headers: _this.header,
                data: data,
            })
                .then(function (response) {
                resolve(response.data);
            })
                .catch(function (error) {
                reject(error.response);
            });
        });
    };
    // - Sms Delivery Reports
    /**
     *
     * GET Get delivery reports with messageId
     *
     * @see {@link https://documenter.getpostman.com/view/4680389/SW7dX7JL#5fc5b186-c4dc-4de0-9d0f-baee93d53c7d}
     * @returns {Promise}
     */
    NextSMS.prototype.get_delivery_reports = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            axios_1.default({
                method: 'get',
                url: 'https://messaging-service.co.tz/api/sms/v1/reports',
                headers: _this.header,
            })
                .then(function (response) {
                resolve(response.data);
            })
                .catch(function (error) {
                reject(error.response);
            });
        });
    };
    /**
     * Get delivery reports with messageId
     *
     *
     * @param messageId
     *
     *
     * @see {@link https://documenter.getpostman.com/view/4680389/SW7dX7JL#6402ce4e-d0d4-44ac-8606-a9d12a900974}
     * @returns {Promise}
     */
    NextSMS.prototype.get_delivery_reports_with_message_id = function (messageId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            axios_1.default({
                method: 'get',
                url: "https://messaging-service.co.tz/api/sms/v1/reports?messageId=" + messageId,
                headers: {
                    Authorization: "Basic " + _this.key,
                    Accept: 'application/json',
                },
            })
                .then(function (response) {
                resolve(response.data);
            })
                .catch(function (error) {
                reject(error.response);
            });
        });
    };
    /**
     *
     * GET Get delivery reports with specific date range
     * @param sentSince
     * @param sentUntil
     *
     * @see {@link https://documenter.getpostman.com/view/4680389/SW7dX7JL#46fc5c9c-0cd4-4356-8cab-1e326e54940a}
     * @returns {Promise}
     */
    NextSMS.prototype.get_delivery_reports_with_specific_date_range = function (sentSince, sentUntil) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            axios_1.default({
                method: 'get',
                url: "https://messaging-service.co.tz/api/sms/v1/reports?sentSince" + sentSince + "=&sentUntil=" + sentUntil,
                headers: {
                    Authorization: "Basic " + _this.key,
                    Accept: 'application/json',
                },
            })
                .then(function (response) {
                resolve(response.data);
            })
                .catch(function (error) {
                reject(error.response);
            });
        });
    };
    // - Sent Sms Logs
    /**
     *
     * GET Get all sent SMS logs
     * @param from
     * @param limit
     * @param offset
     *
     * @see {@link https://documenter.getpostman.com/view/4680389/SW7dX7JL#493fa3f2-c96d-44cc-892d-b6e166dd0683}
     * @returns {Promise}
     */
    NextSMS.prototype.get_all_sent_sms_logs = function (from, limit, offset) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            axios_1.default({
                method: 'get',
                url: "https://messaging-service.co.tz/api/sms/v1/logs?from=" + from + "&limit=" + limit + "&offset=" + offset,
                headers: {
                    Authorization: "Basic " + _this.key,
                    Accept: 'application/json',
                },
            })
                .then(function (response) {
                resolve(response.data);
            })
                .catch(function (error) {
                reject(error.response);
            });
        });
    };
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
     * @see {@link https://documenter.getpostman.com/view/4680389/SW7dX7JL#493fa3f2-c96d-44cc-892d-b6e166dd0683}
     * @returns {Promise}
     */
    NextSMS.prototype.get_all_sent_sms = function (from, to, sentSince, sentUntil) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            axios_1.default({
                method: 'get',
                url: "https://messaging-service.co.tz/api/sms/v1/logs?from=" + from + "&to=" + to + "&sentSince=" + sentSince + "&sentUntil=" + sentUntil,
                headers: _this.header,
            })
                .then(function (response) {
                resolve(response.data);
            })
                .catch(function (error) {
                reject(error.response);
            });
        });
    };
    /**
     *
     * - Sub Customer
     *   - POST Register Sub Customer
     * {
     *     first_name = 'Api',
     *     last_name = 'Customer',
     *     username = 'apicust',
     *     email = 'apicust@customer.com',
     *     phone_number = '0738234339',
     *     account_type = 'Sub Customer (Reseller)',
     *     sms_price = 20,
     * }
     *
     * @param data sub_customer
     * @see {@link https://documenter.getpostman.com/view/4680389/SW7dX7JL#4d5c6a0a-9d16-45e2-ab8e-74211258ca00}
     * @returns {Promise}
     */
    NextSMS.prototype.register_sub_customer = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            axios_1.default({
                method: 'post',
                url: 'https://messaging-service.co.tz/api/reseller/v1/sub_customer/create',
                headers: _this.header,
                data: data,
            })
                .then(function (response) {
                resolve(response.data);
            })
                .catch(function (error) {
                reject(error.response);
            });
        });
    };
    /**
     *  Recharge customer
     *
     *  {
     *      email = 'example@email.com',
     *      smscount = 5000
     *  }
     *
     * @param data recharge_customer
     * @see {@link https://documenter.getpostman.com/view/4680389/SW7dX7JL#d3bd992c-08a8-400d-9b52-41fe6afecf44 }
     * @returns {Promise}
     */
    NextSMS.prototype.recharge_customer = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            axios_1.default({
                method: 'post',
                url: 'https://messaging-service.co.tz/api/reseller/v1/sub_customer/recharge',
                headers: _this.header,
                data: data,
            })
                .then(function (response) {
                resolve(response.data);
            })
                .catch(function (error) {
                reject(error.response);
            });
        });
    };
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
     *  @param data deduct_customer
     *  @see {@link https://documenter.getpostman.com/view/4680389/SW7dX7JL#570c9c63-4dc5-4ef5-aba5-1e4ba6d6d288}
     *  @returns {Promise}
     */
    NextSMS.prototype.deduct_customer = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            axios_1.default({
                method: 'post',
                url: 'https://messaging-service.co.tz/api/reseller/v1/sub_customer/deduct',
                headers: _this.header,
                data: data,
            })
                .then(function (response) {
                resolve(response.data);
            })
                .catch(function (error) {
                reject(error.response);
            });
        });
    };
    /**
     *
     * Get sms balance
     *
     * @see {@link https://documenter.getpostman.com/view/4680389/SW7dX7JL#570c9c63-4dc5-4ef5-aba5-1e4ba6d6d288}
     *
     * @returns {Promise}
     */
    NextSMS.prototype.get_sms_balance = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            axios_1.default({
                method: 'get',
                url: 'https://messaging-service.co.tz/api/sms/v1/balance',
                headers: _this.header,
            })
                .then(function (response) {
                resolve(response.data);
            })
                .catch(function (error) {
                reject(error.response);
            });
        });
    };
    return NextSMS;
}());
exports.default = NextSMS;
