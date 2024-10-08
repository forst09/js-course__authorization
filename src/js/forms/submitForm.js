import createUser from "../auth/createUser";
import loginUser from "../auth/loginUser";
import { auth } from "../auth/initFirebase";

export default function submitForm(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const emailInput = form.querySelector('.email-input');
        const passwordInput = form.querySelector('.password-input');
        const errors = document.querySelectorAll('.form__error');

        if (errors.length > 0) {
            errors.forEach(error=> {
                error.remove();
            })
        };

        if (form.getAttribute('data-form') === 'sign-up') {
            createUser(form, emailInput, passwordInput, auth);
        }
        else {
            loginUser(form, emailInput, passwordInput, auth);
        }
    })
}