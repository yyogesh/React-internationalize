import React from 'react';
import './App.css';
import { FormattedMessage, } from 'react-intl';
import { IntlProvider } from 'react-intl';


const messages = {
  en: {
    greeting: "Hello {name}! How are you?",
    time: "The time is {t, time, short}.",
    date: "The date is {d, date}."
  },
  es: {
    greeting: "¡Hola {name}! ¿Cómo estás?",
    time: "La hora es {t, time, short}.",
    date: "La fecha es {d, date}."
  },
  fr: {
    greeting: "Bonjour {name}! Comment ça va?",
    time: "Il est {t, time, short}.",
    date: "La date est {d, date}."
  },
  de: {
    greeting: "Hallo {name}! Wie geht's?",
    time: "Es ist {t, time, short} Uhr.",
    date: "Das Datum ist {d, date}."
  }
};

function App() {
  const [name, setName] = React.useState("");
  const [locale, setLocale] = React.useState("en");
  const handleChange = e => {
    setName(e.target.value);
  };
  const handleSelect = e => {
    setLocale(e.target.value);
  };

  return (
    <div className="App">
      <input placeholder="Enter name" onChange={handleChange} />
      <select onChange={handleSelect} defaultValue={locale}>
        {["en", "es", "fr", "de"].map(l => (
          <option key={l}>{l}</option>
        ))}
      </select>
      <div dangerouslySetInnerHTML={{ __html: '<h1>App</h1>' }} />
      {/* <FormattedHTMLMessage
        id="app.text"
        defaultMessage="<h1>Hello, welcome {user} </h1>"
        description="Welcome message"
        values={{ user: "John Doe" }} /> */}

      {/* <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
        <FormattedMessage
          id="app.link"
          defaultMessage="Go to link"
          description="Check website" />
      </a> */}
      <IntlProvider local={locale} messages={messages[locale]}>
        <p>
          <FormattedMessage id="greeting" values={{ name }} />
          <br />
          <FormattedMessage id="time" values={{ t: Date.now() }} />
          <br />
          <FormattedMessage id="date" values={{ d: Date.now() }} />
        </p>
      </IntlProvider>
    </div>
  );
}

export default App;
