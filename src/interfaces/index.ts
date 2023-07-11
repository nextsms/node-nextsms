export interface singleMessageSingleDestination {
  from: string;
  to: string;
  text: string;
}

export interface multipleMessagesToMultipleDestinations {
  messages: Array<singleMessageSingleDestination>;
}

///

export interface singleMessageMultipleDestinations {
  from: string;
  to: Array<number>;
  text: string;
}

export interface multipleMessagesToMultipleDifferentDestinations {
  messages: Array<singleMessageMultipleDestinations>;
}

/////////////
export interface scheduleSms {
  from: string;
  to: string;
  text: string;
  date: string;
  time: string;
}

export interface subCustomer {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phoneNumber: string;
  accountType: string;
  smsPrice: string;
}

export interface rechargeCustomer {
  email: string;
  smscount: number;
}

export interface deductCustomer {
  email: string;
  smscount: number;
}

/**
 * Options for the NextSMS class
 */
export interface Options {
  username: string | null;
  password: string | null;
  apiKey: string | null;
  environment: 'testing' | 'production';
}
