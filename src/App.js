import "./App.css";
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
