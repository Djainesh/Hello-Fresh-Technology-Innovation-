import { useState, useEffect } from 'react'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { firebaseApp, firebaseDb } from './firebase';
import { doc, setDoc, getDoc } from "firebase/firestore";

const formatAuthUser = (user, fname, lname) => ({
    uid: user.uid,
    email: user.email,
    firstName: fname,
    lastName: lname
});

const getUserData = async uid => {
    const docRef = doc(firebaseDb, 'users', uid)
    const docSnap = await getDoc(docRef)
    let fname = ''
    let lname = ''
    if (docSnap.exists()) {
        const data = docSnap.data();
        fname = data.firstName
        lname = data.lastName
    } else {
        console.log("ERROR: No user found in firestore");
    }

    return { fname, lname }

}

//https://blog.logrocket.com/implementing-authentication-in-next-js-with-firebase/
export default function useFirebaseAuth() {
    const [authUser, setAuthUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const auth = getAuth(firebaseApp);
    const authStateChanged = async (authState) => {
        if (!authState) {
            setAuthUser(null)
            setLoading(false)
            return;
        }

        const { fname, lname } = await getUserData(authState.uid)
        setLoading(true)
        var formattedUser = formatAuthUser(authState, fname, lname);
        setAuthUser(formattedUser);
        setLoading(false);
    };

    const clear = () => {
        setAuthUser(null);
        setLoading(true);
    };

    const signIn = (email, password) =>
        signInWithEmailAndPassword(auth, email, password);

    const createUser = (email, password, fname, lname) =>
        createUserWithEmailAndPassword(auth, email, password)
            .then(value => {
                console.log("created user" + value)
                setDoc(doc(firebaseDb, "users", value.user.uid), {
                    firstName: fname,
                    lastName: lname,
                }).then(() => {
                    console.log(value.user.uid + ": user created in firestore")
                })
                // storeUserInFirestore(value.user.uid, fname, lname)
            }).catch((error) => {
                console.log("Error:" + error)
            });


    const signOutUser = () =>
        signOut(auth).then(clear);

    // listen for Firebase state change
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(authStateChanged);
        return () => unsubscribe();
    }, []);

    return {
        authUser,
        loading,
        signIn,
        createUser,
        signOutUser
    };
}