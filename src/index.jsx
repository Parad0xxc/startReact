import * as React from 'react';
import * as ReactDOM from './Header';
import {Header} from "./Header";

window.addEventListener('load', () => {
    ReactDOM.render(Header, document.getElementById('react_root'))
})