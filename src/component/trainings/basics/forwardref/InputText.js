import React, {useImperativeHandle, useRef} from 'react';

export const InputText = React.forwardRef((props, ref) => {
    const inputRef = useRef();

    const activate = () => {
        inputRef.current.focus();
    }

    useImperativeHandle(ref, () => {
        return {
            focus: activate
        }
    })

    return (
        <>
            <label htmlFor={props.id}>(child) Type something:</label>
            <input
                ref={inputRef}
                type="text"
                id={props.id}
            />
        </>
    );
});
