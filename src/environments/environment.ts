// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyB6yD6CxJ4rDtK3c2rMdOoE57LRSHKxi6g',
    authDomain: 'fitness-tracker-625.firebaseapp.com',
    databaseURL: 'https://fitness-tracker-625.firebaseio.com',
    projectId: 'fitness-tracker-625',
    storageBucket: 'fitness-tracker-625.appspot.com',
    messagingSenderId: '561793202982'
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
