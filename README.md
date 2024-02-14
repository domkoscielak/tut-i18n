## Wielojęzyczność - Tłumacznia w React z i18n

### Instalacja

Zainstaluj niezbędne biblioteki:

```bash
npm install react-i18next i18next --save
```

### Konfiguracja i18next

Utwórz plik `i18n.js` w swoim projekcie (zazwyczaj w folderze src) i skonfiguruj jak poniżej:

```javascript
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Importuj pliki z tłumaczeniami
import translationEN from "./locales/en/translation.json";
import translationPL from "./locales/pl/translation.json";

// Tłumaczenia
const resources = {
  en: {
    translation: translationEN,
  },
  pl: {
    translation: translationPL,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // domyślny język
  keySeparator: false, // nie używamy kluczy w formie messages.welcome

  interpolation: {
    escapeValue: false, // React już zabezpiecza przed atakami XSS
  },
});

export default i18n;
```

### Pliki z tłumaczeniami

Utwórz pliki JSON z tłumaczeniami w odpowiedniej strukturze, np. `src/locales/en/translation.json` dla angielskiego i `src/locales/pl/translation.json` dla polskiego. Przykład:

```json

// en/translation.json
{
  "myPageTitle": "My React App",
  "myHeader": "Welcome!",
  "myDescription": "This is a description in English."
}

// pl/translation.json
{
  "myPageTitle": "Moja aplikacja React",
  "myHeader": "Witaj!",
  "myDescription": "To jest opis po polsku."
}
```

### Inicjalizacja i18next

Zaimportuj plik i18n.js w głównym pliku projektu (np. index.js lub App.js), aby zainicjować i18next:

```javascript
import "./i18n";
```

### Użycie tłumaczeń w komponentach

Użyj hooka `useTranslation` w swoich komponentach, aby korzystać z tłumaczeń. Przykład:

```javascript
import { useTranslation } from "react-i18next";
import ChangeLanguageButton from "./components/ChangeLangBtn";

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <h1>{t("myPageTitle")}</h1>
      <ChangeLanguageButton />
      <h2>{t("myHeader")}</h2>
      <p>{t("myDescription")}</p>
    </div>
  );
}

export default App;
```

### Zmiana języka

Aby umożliwić użytkownikowi zmianę języka, możesz użyć metody `i18n.changeLanguage`. Przykład:

```javascript
import React from "react";
import { useTranslation } from "react-i18next";

function ChangeLanguageButton() {
  const { i18n } = useTranslation();

  return (
    <div>
      <button onClick={() => i18n.changeLanguage("en")}>English</button>
      <button onClick={() => i18n.changeLanguage("pl")}>Polski</button>
    </div>
  );
}

export default ChangeLanguageButton;
```
