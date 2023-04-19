import React, {useState} from "react";
import {Section} from "../../../element/section/Section";
import MemoizedResponse from "./MemoizedResponse";

export const Memo = (props) => {

    const [name, setName] = useState('');

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setName(e.target.name.value);
    }

    return (
        <Section
            title="React.memo: memoized API call"
            anchor="reactmemo-anchor"
            background={props.color}
            description='React.memo: do not update child component (call API) if props are the same.
            /!\ do not put React.memo all the time, it costs resources'
        >
            <p>Predict the gender of a person based on their name</p>
            <form onSubmit={onSubmitHandler}>
                <label htmlFor={"name"}>Name</label>
                <input type="text" id={"name"}></input>
                <button type="submit">Get gender</button>
            </form>
            <br/>
            <MemoizedResponse name={name}/>
        </Section>
    );
};
