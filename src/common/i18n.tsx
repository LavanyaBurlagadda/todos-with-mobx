import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import "../../public/i18n/translations";

i18n.use(initReactI18next).init(
  {
    lng: "en",
    fallbackLng: "en",
    backend: {
      loadPath: "/i18n/translations/{{lng}}/{{ns}}.json",
    },
    ns: ["common"],
    defaultNS: "common",

    react: {
      useSuspense: true,
    },
  },
  (err) => {
    if (err)
      console.log(
        "An Error occured from **i18n** while loading resources\n",
        err
      );
  }
);

i18n.loadNamespaces(["common"], (err) => {
  if (err) console.log("error while loading i18n namespaces\n", err);
});
