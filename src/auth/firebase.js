const functions = require('firebase-functions');

functions.config().google.react_app_paypal_client_id;
functions.config().google.react_app_google_maps_api_key;

const REACT_APP_PAYPAL_CLIENT_ID = functions.config().google
  .react_app_paypal_client_id;
const REACT_APP_GOOGLE_MAPS_API_KEY = functions.config().google
  .react_app_google_maps_api_key;

export { REACT_APP_PAYPAL_CLIENT_ID, REACT_APP_GOOGLE_MAPS_API_KEY };
