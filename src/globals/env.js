const functions = require('firebase-functions');
// const admin = require('firebase-admin');

let REACT_APP_PAYPAL_CLIENT_ID = '';
let REACT_APP_GOOGLE_MAPS_API_KEY = '';

switch (process.env.NODE_ENV) {
  case 'development':
    REACT_APP_PAYPAL_CLIENT_ID = process.env.REACT_APP_PAYPAL_CLIENT_ID;
    REACT_APP_GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    break;
  case 'production':
    // get variables de entorno firebase:
    REACT_APP_PAYPAL_CLIENT_ID = functions.config().google
      .react_app_paypal_client_id;
    REACT_APP_GOOGLE_MAPS_API_KEY = functions.config().google
      .react_app_google_maps_api_key;

    break;
}

export { REACT_APP_PAYPAL_CLIENT_ID, REACT_APP_GOOGLE_MAPS_API_KEY };
