import i18n from "i18next";

function ChangeLanguageButton() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button onClick={() => i18n.changeLanguage("pl")}>Polski</button>
      <button onClick={() => i18n.changeLanguage("en")}>English</button>
    </div>
  );
}

export default ChangeLanguageButton;
