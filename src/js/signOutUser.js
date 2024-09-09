import { auth } from "./initFirebase";
import { signOut } from "firebase/auth";

export default function signOutUser() {
    const signOutBtn = document.querySelector('.btn-sign-out');
    if (signOutBtn) {
        signOutBtn.addEventListener('click', () => {
            signOut(auth).then(() => {
                window.location.pathname = window.location.pathname.replace('login.html', '');
            }).catch((error) => {
                throw new Error(error);
            })
        });
    }
}