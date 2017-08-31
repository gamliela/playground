import * as React from "react";
import * as ReactDOM from "react-dom";
import {useStrict} from "mobx";
import {AppManager} from "./AppManager";
import MainPage from "./pages/MainPage/index";

// mobx configuration
useStrict(true);

// create our app manager
const appManager: AppManager = new AppManager();

ReactDOM.render(
    <MainPage/>,
    document.getElementById('app-root'));
