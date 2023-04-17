import React, {useEffect, useState} from 'react';
import {Section} from "../../../element/section/Section";

const styleValid = {
    color: 'green'
}

const styleNotValid = {
    color: 'red'
}

const mailRegex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

export const UseEffectWithDependency = (props) => {

    const [login, setLogin] = useState(
        {
            inputMail: '',
            mailValid: false,
            inputPassword: '',
            passwordValid: false,
            loginFormValid: false,
            state: false
        }
    );

    const onChangeHandlerMail = (event) => {
        setLogin({...login, mailValid: mailRegex.test(event.target.value)});
    }

    const onChangeHandlerPassword = (event) => {
        setLogin({...login, passwordValid: event.target.value.length >= 5});
    }

    /*
        instead of checking the form validity on each keystroke,
        we check when the user stop to write after 500ms
        setTimeout / clearTimeout
     */
    useEffect(() => {
        const id = setTimeout(() => {
            setLogin({...login, loginFormValid: !(login.mailValid && login.passwordValid)});
        }, 500);
        return () => clearTimeout(id);
    }, [login.mailValid, login.passwordValid]);

    const handleClickLogin = () => {
        setLogin({
            ...login,
            state: true,
            mailValid: false,
            passwordValid: false
        });
    }

    const handleClickLogout = () => {
        setLogin({...login, state: false});
    }

    return (
        <Section title="useEffect with dependency - login example"
                 anchor="effect2-anchor"
                 background={props.color}
                 description='useEffect with dependency - login example - run code at runtime and on each keystroke.
                    Instead of checking the form validity on each keystroke,
                    we check when the user stop to write after 500ms using cleanup function : setTimeout / clearTimeout'
        >
            {
                (!login.state)
                    ?
                    <>
                        <div style={(login.mailValid) ? styleValid : styleNotValid}>
                            <label htmlFor="mail">Mail:</label>
                            <input type="email" id="mail" onChange={onChangeHandlerMail}/>
                        </div>
                        <div style={(login.passwordValid) ? styleValid : styleNotValid}>
                            <label htmlFor="mail">Password:</label>
                            <input type="password" id="mail" onChange={onChangeHandlerPassword}/>
                            <span>(Min 5 char)</span>
                        </div>
                        <button type="button" onClick={handleClickLogin} disabled={login.loginFormValid}>Login</button>
                    </>
                    :
                    <>
                        <p>Welcome, you are logged in !</p>
                        <button type="button" onClick={handleClickLogout}>Logout</button>
                    </>
            }
        </Section>
    );
};
