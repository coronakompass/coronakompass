import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import CloseIcon from '@material-ui/icons/Close';
import LocalGasStationIcon from '@material-ui/icons/LocalGasStation';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import LocalPharmacyIcon from '@material-ui/icons/LocalPharmacy';
import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';
import RoomIcon from '@material-ui/icons/Room';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { mapValues } from 'lodash';

const placeTypes = {
  accounting: {
    open: null,
    text:
      "Viele Steuerberater, Anwälte und Berater arbeiten mittlerweile nur noch mit einer kleinen Belegschaft im Büro, oder sind komplett auf Home-Office umgeschwenkt. Ruf' doch kurz an um sicher zu gehen, dass jemand dort sein wird.",
  },
  airport: {
    open: true,
    text:
      'Der Flughafen ist offen, allerdings fallen zur Zeit viele Flüge aus. Wenn du sicher gehen möchtest, dass dein Flug stattfindet, kontaktiere bitte die Fluggesellschaft.',
  },
  amusement_park: {
    open: false,
    text: 'Freizeitparks sind leider bis auf Weiteres geschlossen.',
  },
  aquarium: {
    open: false,
    text: 'Freizeitparks sind leider bis auf Weiteres geschlossen.',
  },
  art_gallery: {
    open: false,
    text: 'Galerien und Museen sind leider bis auf Weiteres geschlossen.',
  },
  atm: { open: true, Icon: AccountBalanceIcon },
  bakery: { open: true, Icon: ShoppingCartIcon },
  bank: {
    open: true,
    Icon: AccountBalanceIcon,
    text:
      "Einige Banken haben ihre Kapazitäten in der Kundenberatung eingeschränkt oder ganze Fillialen geschlossen. Geldautomaten im Außenbereich sollten aber erreichbar sein. Falls du Beratung wünschst, ruf' am Besten kurz an.",
  },
  bar: {
    open: false,
    text: 'Bars sind leider bis auf Weiteres geschlossen.',
  },
  beauty_salon: {
    open: false,
    text:
      'Frisöre, Barbiere, Nagelstudios und Beauty Salons sind leider bis auf Weiteres geschlossen.',
  },
  bicycle_store: {
    open: null,
    text:
      'In den meisten Bundesländern sind Fahrradläden leider geschlossen, einige Läden mit angeschlossener Werkstatt betreiben diese allerdings weiter. Am Besten du rufst kurz an.',
  },
  book_store: {
    open: null,
    text:
      'In den meisten Bundesländern sind Buchhandlungen bis auf Weiteres geschlossen, einige Bundesländer erlauben allerdings die Öffnung. Am Besten du rufst kurz an.',
  },
  bowling_alley: {
    open: false,
    text: 'Bowling-Center sind leider bis auf Weiteres geschlossen.',
  },
  bus_station: {
    open: true,
    text:
      'Einige Gemeinden haben den Takt der öffentlichen Verkehrsmittel eingeschränkt, aber früher oder später kommt bestimmt ein Bus!',
  },
  cafe: {
    open: false,
    text: 'Cafés sind leider bis auf Weiteres geschlossen.',
  },
  campground: {
    open: false,
    text: 'Campingplätze sind leider bis auf Weiteres geschlossen.',
  },
  car_dealer: {
    open: false,
    text:
      "Autohäuser müssen leider schließen, der Werkstattbetrieb ist allerdings in den meisten Bundesländern weiterhin erlaubt. Ruf' am Besten kurz an.",
  },
  car_rental: {
    open: true,
    text: "Einige Stationen wurden geschlossen. Ruf' am Besten kurz an.",
  },
  car_repair: {
    open: true,
    text: 'KFZ-Werkstätten dürfen weiterhin geöffnet bleiben.',
  },
  car_wash: {
    open: true,
    text: '(Auto-) Hygiene ist in diesen Zeiten wichtig, keine Frage!?',
  },
  casino: {
    open: false,
    text: 'Casinos und Wettbüros sind leider bis auf Weiteres geschlossen.',
  },
  cemetery: {
    open: true,
    text: 'Friedhöfe sind weiterhin geöffnet.',
  },
  church: {
    open: false,
    text:
      'Zur Vermeidung von größeren Menschenansammlungen sind Gottesdienste leider zur Zeit nur via Live-Stream möglich. Für eine stille Andacht sind aber die meisten Gotteshäuser weiterhin geöffnet.',
  },
  city_hall: {
    open: true,
    text:
      "Die öffentliche Hand und Verwaltung steht weiterhin zu deiner Verfügung. Neuerdings ist allerdings immer mehr auch ohne persönlichen Kontakt möglich, ruf' am Besten kurz an um dein Anliegen zu klären.",
  },
  clothing_store: {
    open: false,
    text:
      'Shopping muss leider derzeit auf das Internet verlagert werden. Oder auf später, falls du deinen Lieblingsladen unterstützen möchtest.',
  },
  convenience_store: {
    open: true,
    Icon: ShoppingCartIcon,
    text:
      'Die Versorgung mit Lebensmitteln und Gütern des alltäglichen Bedarfs wird selbstverständlich weiterhin sicher gestellt. Am Besten du kaufst mit Augenmaß – genügend um nicht morgen erneut einkaufen gehen zu müssen, aber es wäre schön, wenn du von besonders gefragten Waren auch noch etwas übrig lassen würdest.',
  },
  courthouse: {
    open: true,
    text: '',
  },
  dentist: { open: true, Icon: LocalHospitalIcon },
  department_store: { open: false },
  doctor: { open: true, Icon: LocalHospitalIcon },
  drugstore: { open: true, Icon: LocalPharmacyIcon },
  electrician: { open: null },
  electronics_store: { open: false },
  embassy: { open: true },
  fire_station: { open: true },
  florist: { open: false },
  funeral_home: { open: true },
  furniture_store: { open: false },
  gas_station: { open: true, Icon: LocalGasStationIcon },
  grocery_or_supermarket: { open: true, Icon: ShoppingCartIcon },
  gym: { open: false },
  hair_care: {
    open: false,
    text:
      'Dienstleistungsbetriebe im Bereich der Körperpflege sind wegen erhöhter Ansteckungsgefahr derzeit geschlossen.',
  },
  hardware_store: { open: true }, // FIXME
  hindu_temple: { open: false },
  home_goods_store: { open: true, Icon: ShoppingCartIcon },
  hospital: { open: true, Icon: LocalHospitalIcon },
  insurance_agency: { open: null },
  jewelry_store: { open: false },
  laundry: { open: null },
  lawyer: { open: true },
  library: { open: false },
  light_rail_station: { open: true },
  liquor_store: { open: true },
  local_government_office: { open: true },
  locksmith: { open: false },
  lodging: { open: false },
  meal_delivery: { open: true },
  meal_takeaway: { open: true },
  mosque: { open: false },
  movie_rental: { open: false },
  movie_theater: { open: false },
  moving_company: { open: true },
  museum: { open: false },
  night_club: { open: false },
  painter: { open: true },
  park: { open: true },
  parking: { open: true },
  pet_store: { open: false },
  pharmacy: { open: true, Icon: LocalPharmacyIcon },
  physiotherapist: { open: true },
  plumber: { open: true },
  police: { open: true },
  post_office: { open: true },
  primary_school: { open: false },
  real_estate_agency: { open: true },
  restaurant: { open: false },
  roofing_contractor: { open: true },
  rv_park: { open: true },
  school: { open: false },
  secondary_school: { open: false },
  shoe_store: { open: false },
  shopping_mall: { open: false },
  spa: { open: false },
  stadium: { open: false },
  storage: { open: true },
  store: { open: true },
  subway_station: { open: true },
  supermarket: { open: true, Icon: ShoppingCartIcon },
  synagogue: { open: false },
  taxi_stand: { open: true },
  tourist_attraction: { open: true },
  train_station: { open: true },
  transit_station: { open: true },
  travel_agency: { open: false },
  university: { open: false },
  veterinary_care: { open: true },
  zoo: { open: false },
  administrative_area_level_1: { open: null },
  administrative_area_level_2: { open: null },
  administrative_area_level_3: { open: null },
  administrative_area_level_4: { open: null },
  administrative_area_level_5: { open: null },
  archipelago: { open: null },
  colloquial_area: { open: null },
  continent: { open: null },
  country: { open: null },
  establishment: { open: null },
  finance: { open: null },
  floor: { open: null },
  food: { open: null },
  general_contractor: { open: null },
  geocode: { open: null },
  health: { open: true, Icon: LocalHospitalIcon },
  intersection: { open: null },
  locality: { open: null },
  natural_feature: { open: null },
  neighborhood: { open: null },
  place_of_worship: { open: null },
  point_of_interest: { open: null },
  political: { open: null },
  post_box: { open: null },
  postal_code: { open: null },
  postal_code_prefix: { open: null },
  postal_code_suffix: { open: null },
  postal_town: { open: null },
  premise: { open: null },
  room: { open: null },
  route: { open: null },
  street_address: { open: null },
  street_number: { open: null },
  sublocality: { open: null },
  sublocality_level_1: { open: null },
  sublocality_level_2: { open: null },
  sublocality_level_3: { open: null },
  sublocality_level_4: { open: null },
  sublocality_level_5: { open: null },
  subpremise: { open: null },
  town_square: { open: null },
};

function fallbackIcon(isOpen) {
  if (isOpen === true) {
    return RoomIcon;
  }
  if (isOpen === false) {
    return CloseIcon;
  }
  return NotListedLocationIcon;
}

export default mapValues(placeTypes, (placeType) => ({
  Icon: fallbackIcon(placeType.open),
  ...placeType,
}));
