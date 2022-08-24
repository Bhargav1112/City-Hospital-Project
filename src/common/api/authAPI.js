import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";


export const signupApi = (data) => {
	return new Promise((resolve, reject) => {
		createUserWithEmailAndPassword(auth, data.email, data.password)
			.then((userCredential) => {
				const user = userCredential.user;
				console.log(user);
				sendEmailVerification(auth.currentUser).then(() => resolve({ payload: 'please check your email to verify.' }))
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode);
				if (errorCode.localeCompare('auth/email-already-in-use')) {
					reject({ payload: 'email is already in use, please try another email address. ' })
				} else {
					reject({ payload: 'Error accoured.' })
				}
			});
	})
}

export const signinApi = (data) => {
	return new Promise((resolve, reject) => {
		signInWithEmailAndPassword(auth, data.email, data.password)
			.then((userCredential) => {
				const user = userCredential.user;
				console.log(user);
				if (user.emailVerified) {
					resolve({ payload: 'Successfully loggedin.' })
				} else {
					reject({ payload: 'Please verify your email first.' })
				}
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode);
			});
	})
}