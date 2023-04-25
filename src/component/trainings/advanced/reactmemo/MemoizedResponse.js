import React, {useEffect, useState} from "react";
import GenderizeApiGateway from './http/GenderizeApiGateway';
import Skeleton from '@mui/material/Skeleton';

class GenderResponse {
    constructor(data) {
        this.count = data.count;
        this.gender = data.gender;
        this.name = data.name;
        this.probability = data.probability;
    }
}

const objectResponseToJsxList = (genderResponse) => {
    return <ul>
        {Object.entries(genderResponse).map(([key, value], index) =>
            <li key={index++}>{key} : {value}</li>)
        }
    </ul>;
}

const getFieldSkeleton = () => <Skeleton variant="rectangular" width={50} height={15}
                                         style={{display: "inline-block"}}/>;

const generatePlaceholder = () => {
    return <ul>
        <li>count : {getFieldSkeleton()}</li>
        <li>gender : {getFieldSkeleton()}</li>
        <li>name : {getFieldSkeleton()}</li>
        <li>probability : {getFieldSkeleton()}</li>
    </ul>;
}

const MemoizedResponse = (props) => {

    const [genderResponse, setGenderResponse] = useState();

    useEffect(() => {
        if (props.name !== "") {
            setGenderResponse(generatePlaceholder());
            GenderizeApiGateway.getGenderByName(props.name)
                .then(response => setGenderResponse(
                    objectResponseToJsxList(new GenderResponse(response.data))))
                .catch(error => setGenderResponse(JSON.stringify(error)))
        }
    }, [props.name]);

    return (
        <div>Response : <br/>{(genderResponse) && <>{genderResponse}</>}</div>
    )
};

export default React.memo(MemoizedResponse);