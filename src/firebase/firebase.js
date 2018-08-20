import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

  firebase.initializeApp(config);

  const database = firebase.database();

  export { firebase, database as default };


  //child removed
  // database.ref('beers').on('child_removed', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val());
  // });

  //child changes

  // database.ref('beers').on('child_changed', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val());
  // });

  // child_added

  // database.ref('beers').on('child_added', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val());
  // });

  // database.ref('beers')
  //   .once('value')
  //   .then((snapshot) => {
  //     const beers = [];
  //     snapshot.forEach((childSnapshot) => {
  //       beers.push({
  //         id: childSnapshot.key,
  //         ...childSnapshot.val()
  //       });
  //   });

  //   console.log(beers);
  // });

// database.ref('beers')
//   .on('value', (snapshot) => {
//     const beers = [];

//   snapshot.forEach((childSnapshot) => {
//     beers.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(beers);

// });

//     database.ref('beers').push({
//       beername: 'Valami IPA',
//       IBU: 12,
//       country: 'Denmark'
//   });

  
  
