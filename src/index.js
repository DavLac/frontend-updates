import React from "react";
import ReactDOM from "react-dom";
import "./sass/main.scss";
import App from "./component/app/App";
import {Provider} from "react-redux";
import store from "./component/trainings/advanced/reduxtoolkit/store/store";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
