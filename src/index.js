import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { IntlProvider } from 'react-intl';
import locale_en from "./translations/en.json";
import locale_nl from "./translations/nl.json";

const data = {
  'nl': locale_nl,
  'en': locale_en
};

const language = navigator.language.split(/[-_]/)[0];

ReactDOM.render(
  <React.StrictMode>
    {/* <IntlProvider local={language} messages={data[language]}> */}
    <App />
    {/* </IntlProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
