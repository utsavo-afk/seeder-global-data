// transform data
import countries_json from "./assets/countries.json";
import states_json from "./assets/states.json";
// import cities_json from "./assets/cities.json"; !! too large
import mongoose from "mongoose";

// transform countries
/**
 * {
    id: 247,
    name: "Zimbabwe",
    iso3: "ZWE",
    iso2: "ZW",
    numeric_code: "716",
    phone_code: "263",
    capital: "Harare",
    currency: "ZWL",
    currency_name: "Zimbabwe Dollar",
    currency_symbol: "$",
    tld: ".zw",
    native: "Zimbabwe",
    region: "Africa",
    subregion: "Eastern Africa",
    timezones: [
      {
        zoneName: "Africa/Harare",
        gmtOffset: 7200,
        gmtOffsetName: "UTC+02:00",
        abbreviation: "CAT",
        tzName: "Central Africa Time"
      }
    ],
    translations: {
      kr: "짐바브웨",
      "pt-BR": "Zimbabwe",
      pt: "Zimbabué",
      nl: "Zimbabwe",
      hr: "Zimbabve",
      fa: "زیمباوه",
      de: "Simbabwe",
      es: "Zimbabue",
      fr: "Zimbabwe",
      ja: "ジンバブエ",
      it: "Zimbabwe",
      cn: "津巴布韦",
      tr: "Zimbabve"
    },
    latitude: "-20.00000000",
    longitude: "30.00000000",
    emoji: "🇿🇼",
    emojiU: "U+1F1FF U+1F1FC"
  }
 */
const countries = countries_json.map((c) => ({
  _id: new mongoose.Types.ObjectId(),
  name: c.name,
  shortName: c.iso2,
  isActive: true,
  createdAt: new Date(),
  updatedAt: new Date(),
}));

// transform states
const states = states_json.map((s) => ({
  _id: new mongoose.Types.ObjectId(),
  name: s.name,
  shortName: s.state_code,
  countryId: getIdFromKey(s.country_code, countries),
  isActive: true,
  createdAt: new Date(),
  updatedAt: new Date(),
}));

// console.log(states[0]);

function getIdFromKey(code: string, array: any[]) {
  return array.find((el) => el.shortName === code)["_id"];
}
