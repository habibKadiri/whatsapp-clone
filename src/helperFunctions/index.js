import db from "../firebase";
import firebase from "firebase"

export const createUserCollection = (user) => {
    db.collection('users')
        .doc(user.uid)
        .set({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            created: firebase.firestore.FieldValue.serverTimestamp(),
            uid: user.uid
        }).then(() => console.log("user collection made!")
    ).catch(e => console.error("error adding document", e))
}