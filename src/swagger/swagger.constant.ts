import moment from "moment";

export const SWAGGER_API_ENDPOINT = '/docs';
export const SWAGGER_API_NAME = `BE SOCIAL NETWORK service api specification ${process.env.NODE_ENV}`;
export const SWAGGER_API_DESCRIPTION = `BE SOCIAL NETWORK service api descriptions   -  Start:  ${moment(new Date())
  .utcOffset(7)
  .format()}`;
export const SWAGGER_API_DEFAULT_VERSION = '1.0.0';