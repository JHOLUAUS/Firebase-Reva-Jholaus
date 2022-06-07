// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

/*
      // Import the functions you need from the SDKs you need
      import { initializeApp } from "firebase/app";
      // TODO: Add SDKs for Firebase products that you want to use
      // https://firebase.google.com/docs/web/setup#available-libraries

      // Your web app's Firebase configuration
      const firebaseConfig = {
        apiKey: "AIzaSyCxO7y_C59K5FFSW09SwrIUBqDt1hBHJGY",
        authDomain: "damcrudfirebase-8168d.firebaseapp.com",
        projectId: "damcrudfirebase-8168d",
        storageBucket: "damcrudfirebase-8168d.appspot.com",
        messagingSenderId: "1061225967592",
        appId: "1:1061225967592:web:5d7b81fdf0a18963adbe5d"
      };

      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
*/
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyCxO7y_C59K5FFSW09SwrIUBqDt1hBHJGY",
    authDomain: "damcrudfirebase-8168d.firebaseapp.com",
    projectId: "damcrudfirebase-8168d",
    storageBucket: "damcrudfirebase-8168d.appspot.com",
    messagingSenderId: "1061225967592",
    appId: "1:1061225967592:web:5d7b81fdf0a18963adbe5d"
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
