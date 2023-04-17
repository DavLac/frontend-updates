import React, {useEffect, useReducer, useState} from 'react';
import {Section} from "../../../element/section/Section";

const styleValid = {
    color: 'green'
}

const styleNotValid = {
    color: 'red'
}

const mailRegex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

const mailInit = {
    value: '',
    isValid: false
};

const emailReducer = (state, action) => {
    if(action.type === 'USER_INPUT') {
        return {
            value: action.val,
            isValid: mailRegex.test(action.val)
        };
    }
    return mailInit;
}

const passwordInit = {
    value: '',
    isValid: false
};

const passwordReducer = (state, action) => {
    if(action.type === 'USER_INPUT') {
        return {
            value: action.val,
            isValid: action.val.length >= 5
        };
    }
    return passwordInit;
}

export const UseReducerLogin = (props) => {

    const [loginFormValid, setLoginFormValid] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [emailState, dispatchEmail] = useReducer(emailReducer, mailInit);
    const [passwordState, dispatchPassword] = useReducer(passwordReducer, passwordInit);

    const onChangeHandlerMail = (event) => {
        dispatchEmail({
            type: 'USER_INPUT',
            val: event.target.value
        });
    }

    const onChangeHandlerPassword = (event) => {
        dispatchPassword({
            type: 'USER_INPUT',
            val: event.target.value
        });
    }

    /*
        instead of checking the form validity on each keystroke,
        we check when the user stop to write after 500ms
        setTimeout / clearTimeout
     */
    useEffect(() => {
        const id = setTimeout(() => {
            setLoginFormValid(!(emailState.isValid && passwordState.isValid));
        }, 500);
        return () => clearTimeout(id);
    }, [emailState.isValid, passwordState.isValid]);

    const handleClickLogin = () => {
        dispatchEmail({
            type: 'USER_INPUT',
            val: ''
        });
        dispatchPassword({
            type: 'USER_INPUT',
            val: ''
        });
        setIsLoggedIn(true);
    }

    const handleClickLogout = () => {
        setIsLoggedIn(false);
    }

    return (
        <Section title="useReducer - login example"
                 anchor="reducer-anchor"
                 background={props.color}
                 description='useReducer: login example - same than with useState but with reducer.
                 One by one field useReducer. Have a look on the big form example for a global handling.'
        >
            {
                (!isLoggedIn)
                    ?
                    <>
                        <div style={(emailState.isValid) ? styleValid : styleNotValid}>
                            <label htmlFor="mail">Mail:</label>
                            <input type="email" id="mail" onChange={onChangeHandlerMail}/>
                        </div>
                        <div style={(passwordState.isValid) ? styleValid : styleNotValid}>
                            <label htmlFor="mail">Password:</label>
                            <input type="password" id="mail" onChange={onChangeHandlerPassword}/>
                            <span>(Min 5 char)</span>
                        </div>
                        <button type="button" onClick={handleClickLogin} disabled={loginFormValid}>Login</button>
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
