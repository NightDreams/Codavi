import countries from "i18n-iso-countries";

export const useCountryFlag = (countryCode) => {
  countries.registerLocale(require("i18n-iso-countries/langs/es.json"));
  return countries.getName(countryCode, "es");
};
