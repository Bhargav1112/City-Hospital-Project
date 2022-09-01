import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, sendPasswordResetEmail } from "firebase/auth";
import { auth, provider } from "../../firebase";
import { history } from './history'
import { GoogleAuthProvider } from "firebase/auth";


export const signupApi = (data) => {

	return new Promise((resolve, reject) => {
		createUserWithEmailAndPassword(auth, data.email, data.password)
			.then((userCredential) => {
				const user = userCredential.user;
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
				if (user.emailVerified) {
					resolve(user)
					history.push('/')
				} else {
					reject({ payload: 'Please verify your email first.' })
				}
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode, errorMessage);
				if (errorCode.localeCompare('auth/wrong-password')) {
					reject({ payload: 'Email or Password wrong, please try again.' })
				} else {
					reject({ payload: 'Email or Password wrong, please try again.' })
				}
			});
	})
}

export const signOutApi = () => {
	return new Promise((resolve, reject) => {
		signOut(auth).then(() => {
			resolve({ payload: 'Loggedout successfully.' })
			history.push('/')
		}).catch(error => reject({ payload: error.code }))
	})
}

export const googleSigninApi = () => {
	return new Promise((resolve, reject) => {
		signInWithPopup(auth, provider)
			.then((result) => {

				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;

				const user = result.user;
				resolve(user)
				history.push('/')

			}).catch((error) => {

				const errorCode = error.code;
				const errorMessage = error.message;

				const email = error.customData.email;

				const credential = GoogleAuthProvider.credentialFromError(error);
				reject({ payload: errorCode })

			});
	})
}

export const forgotPasswordApi = (data) => {
	return new Promise((resolve, reject) => {
		sendPasswordResetEmail(auth, data.email)
			.then(res => {
				resolve({ payload: 'Link for change password sent to your Email.' })
			})
			.catch(error => {
				reject({ payload: error.code })
			})
	})
}