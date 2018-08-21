import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAms0vkVcgUVnL8XFpXmwL_edo3av9Og6Q",
    authDomain: "beerscene-1292.firebaseapp.com",
    databaseURL: "https://beerscene-1292.firebaseio.com",
    projectId: "beerscene-1292",
    storageBucket: "beerscene-1292.appspot.com",
    messagingSenderId: "371198701107"

  };

  firebase.initializeApp(config);

  const database = firebase.database();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export { firebase, googleAuthProvider, database as default };


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

  
  
