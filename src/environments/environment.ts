// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  homeUrl : 'http://localhost:8080/api/auth/homes/',
  typeHomeUrl: 'http://localhost:8080/api/auth/type-home/',
  typeRoomUrl: 'http://localhost:8080/api/auth/type-room/',
  statusUrl: 'https://my-json-server.typicode.com/datnd97/Fake-Json/status/',
  bookingUrl : 'http://localhost:8080/api/auth/booking/',
  firebase: {
    apiKey: 'xxx',
    authDomain: 'gkz-angular-firebase.firebaseapp.com',
    databaseURL: 'https://gkz-angular-firebase.firebaseio.com',
    projectId: 'gkz-angular-firebase',
    storageBucket: 'gkz-angular-firebase.appspot.com',
    messagingSenderId: 'xxx'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
