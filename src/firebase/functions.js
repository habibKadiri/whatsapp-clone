const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp()


exports.createProfile = functions.auth.user().onCreate(async user => {
    const { uid, displayName, email, photoURL } = user
    return await admin
        .firestore()
        .collection('users')
        .doc(uid)
        .set({
        displayName,
        photoURL,
        uid,
        email
    });
})