import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

if (!firebase.apps.length) {
  const config = {
    apiKey: 'AIzaSyApnbff4xztIa8dnssKwepmxw43t_aw5Fk',
    authDomain: 'pickingupthebill-8d422.firebaseapp.com',
    databaseURL: 'https://pickingupthebill-8d422.firebaseio.com',
    projectId: 'pickingupthebill-8d422',
    storageBucket: 'pickingupthebill-8d422.appspot.com',
    messagingSenderId: '280187208039',
    appId: '1:280187208039:web:4c502d5f6f21cbe2'
  }
  firebase.initializeApp(config)
}

const fireDb = firebase.firestore()
export { fireDb }

export default (context, inject) => {
  inject('firebase', firebase)
}
