import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import CloseIcon from '@material-ui/icons/Close';
import LocalGasStationIcon from '@material-ui/icons/LocalGasStation';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import LocalPharmacyIcon from '@material-ui/icons/LocalPharmacy';
import LocalPostOfficeIcon from '@material-ui/icons/LocalPostOffice';
import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';
import RoomIcon from '@material-ui/icons/Room';
import SchoolIcon from '@material-ui/icons/School';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SubwayIcon from '@material-ui/icons/Subway';
import TrainIcon from '@material-ui/icons/Train';
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
  atm: {
    open: true,
    Icon: AccountBalanceIcon,
  },
  bakery: {
    open: true,
    Icon: ShoppingCartIcon,
  },
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
    text: 'Friedhöfe sind i.d.R. weiterhin geöffnet (Ausnahme: Berlin).',
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
      'Die Versorgung mit Lebensmitteln und Gütern des alltäglichen Bedarfs wird selbstverständlich weiterhin sicher gestellt. Am Besten du kaufst mit Augenmaß – genügend um nicht morgen erneut einkaufen gehen zu müssen. Es wäre aber schön, wenn du von besonders gefragten Waren auch noch etwas übrig lassen würdest.',
  },
  courthouse: {
    open: true,
    text:
      'In Schleswig-Holstein ist der Besucherverkehr zu Gerichten und Staatsanwalten weitestgehend eingeschränkt, aber der Gerichtsbetrieb läuft weiter. Mit Vorladung musst du wohl hin...',
  },
  dentist: {
    open: true,
    Icon: LocalHospitalIcon,
    text:
      'Zahnarztpraxen sind regulär geöffnet. Ob du es riskieren kannst, eine Vorsorgeuntersuchung sausen zu lassen, musst du selbst entscheiden.',
  },
  department_store: {
    open: false,
    text:
      'Shopping muss leider derzeit auf das Internet verlagert werden. Oder auf später, falls du deinen Lieblingsladen unterstützen möchtest.',
  },
  doctor: {
    open: true,
    Icon: LocalHospitalIcon,
    text:
      'Arztpraxen sind regulär geöffnet. Bitte rufe bei Grippe-Symptomen unbedingt vor dem Besuch des Arztes dort an!',
  },
  drugstore: {
    open: true,
    Icon: LocalPharmacyIcon,
    text: 'Apotheken sind weiterhin für dich da.',
  },
  electrician: {
    open: true,
    text: 'Es gibt keine Einschränkungen für Elektriker.',
  },
  electronics_store: {
    open: false,
    text:
      'Shopping muss leider derzeit auf das Internet verlagert werden. Oder auf später, falls du deinen Lieblingsladen unterstützen möchtest.',
  },
  embassy: {
    open: true,
    text:
      'Die Öffnung oder Schliessung von Botschaften obliegt den jeweiligen Ländern, die sie vertreten. Es sind keine Einschränkungen bekannt.',
  },
  fire_station: {
    open: true,
    text: 'Die Feuerwehr ist weiterhin für dich da.',
  },
  florist: {
    open: false,
    text: 'Floristen und Blumenläden sind leider bis auf Weiteres geschlossen.',
  },
  funeral_home: {
    open: true,
    text: 'Es gibt keine Einschränkungen für Bestattungsunternehmen.',
  },
  furniture_store: {
    open: false,
    text:
      'Shopping muss leider derzeit auf das Internet verlagert werden. Oder auf später, falls du deinen Lieblingsladen unterstützen möchtest.',
  },
  gas_station: {
    open: true,
    Icon: LocalGasStationIcon,
    text: 'Tankstellen sind weiterhin für dich da.',
  },
  grocery_or_supermarket: {
    open: true,
    Icon: ShoppingCartIcon,
    text:
      'Die Versorgung mit Lebensmitteln und Gütern des alltäglichen Bedarfs wird selbstverständlich weiterhin sicher gestellt. Am Besten du kaufst mit Augenmaß – genügend um nicht morgen erneut einkaufen gehen zu müssen. Es wäre aber schön, wenn du von besonders gefragten Waren auch noch etwas übrig lassen würdest.',
  },
  gym: {
    open: false,
    text: 'Fitnessstudios und öffentliche Schwimmbäder sind leider derzeit geschlossen.',
  },
  hair_care: {
    open: false,
    text:
      'Dienstleistungsbetriebe im Bereich der Körperpflege sind wegen erhöhter Ansteckungsgefahr derzeit geschlossen.',
  },
  hardware_store: {
    open: null,
    text:
      'In Bayern, Mecklenburg-Vorpommern, Niedersachsen und Sachsen sind Baumärkte geschlossen. Es gibt teilweise Aunahmen für die Abholung und für gewerbliche Kunden.',
  },
  hindu_temple: {
    open: false,
    text: 'Auch in Gotteshäusern sind größere Veranstaltungen zur Zeit leider untersagt.',
  },
  home_goods_store: {
    open: true,
    Icon: ShoppingCartIcon,
    text:
      'Shopping muss leider derzeit auf das Internet verlagert werden. Oder auf später, falls du deinen Lieblingsladen unterstützen möchtest.',
  },
  hospital: {
    open: true,
    Icon: LocalHospitalIcon,
    text:
      "Bitte geh' bei Grippe-Symptomen nicht unangekündigt ins Krankenhaus. Die zentrale Hotline unter 116117 hilft dir weiter, oder im Notfall natürlich auch der Notruf unter 112.",
  },
  insurance_agency: {
    open: null,
    text:
      "Viele Versicherungsmakler arbeiten mittlerweile nur noch mit einer kleinen Belegschaft im Büro, oder sind komplett auf Home-Office umgeschwenkt. Ruf' doch kurz an um sicher zu gehen, dass jemand dort sein wird.",
  },
  jewelry_store: {
    open: false,
    text: 'Eventuell kann dir online weiter geholfen werden, wenn du die Ringröße weißt.',
  },
  laundry: {
    open: true,
    text: 'Waschsalons stehen weiterhin für dich zur Verfügung.',
  },
  lawyer: {
    open: true,
    text:
      "Viele Anwälte arbeiten mittlerweile nur noch mit einer kleinen Belegschaft im Büro, oder sind komplett auf Home-Office umgeschwenkt. Ruf' doch kurz an um sicher zu gehen, dass jemand dort sein wird.",
  },
  library: {
    open: false,
    text:
      'Keine Panik, Leihfristen werden i.d.R. bis zur Wiedereröffnung verlängert, aber guck . Die meisten Bibliotheken bieten auch ein Online-Angebot.  ',
  },
  light_rail_station: {
    open: true,
  },
  liquor_store: {
    open: true,
    text:
      'Zur Not desinfiziert Alkohol, am effizientesten bei etwa 70% Alkoholgehalt. Am meisten Spaß macht orale Desinfektion.',
  },
  local_government_office: {
    open: true,
    text:
      "Die öffentliche Hand und Verwaltung steht weiterhin zu deiner Verfügung. Neuerdings ist allerdings immer mehr auch ohne persönlichen Kontakt möglich, ruf' am Besten kurz an um dein Anliegen zu klären.",
  },
  locksmith: {
    open: false,
    text:
      'In der Regel ist es zwar angenehmer zum Schlüsseldienst zu gehen als ihn kommen lassen zu müssen. Ersteres geht aber nun nicht mehr – wobei der Außendienst weiterhin zur Verfügung steht!',
  },
  lodging: {
    open: true,
    text:
      'Hotels stehen Geschäftsreisenden weiterhin offen. Aber Vorsicht: Die Nord- und Ostsee-Inseln sind für Tourismus gesperrt, und Bonn hat alle Hotels geschlossen!',
  },
  meal_delivery: {
    open: true,
    text: 'Kontaktlose Zahlung verringert das Ansteckungsrisiko. Guten Appetit!',
  },
  meal_takeaway: {
    open: true,
    text:
      "Restaurants dürfen Speisen zum Mitnehmen anbieten. Die Öffnungszeiten könnten sich geändert haben, ruf' am Besten kurz an.",
  },
  mosque: {
    open: false,
    text: 'Auch in Gotteshäusern sind größere Veranstaltungen zur Zeit leider untersagt.',
  },
  movie_rental: {
    open: false,
    text: 'Videotheken müssen geschlossen bleiben.',
  },
  movie_theater: {
    open: false,
    text:
      'Kinos sind leider geschlossen, aber Fernsehsender und Streaminganbieter haben ihr Programm angepasst.',
  },
  moving_company: {
    open: null,
    text:
      'Vermutlich der schlechteste Moment der letzten 50 Jahre für einen Umzug, wenn es trotzdem sein muss am besten vorher anrufen.',
  },
  museum: {
    open: false,
    text:
      'Alle Museen sind geschlossen, aber es gibt inzwischen viele virtuelle Museen - einfach mal googeln.',
  },
  night_club: {
    open: false,
    text: 'Leider nicht.',
  },
  painter: {
    open: true,
    text: 'Handwerksbetriebe arbeiten weiter, auf jeden Fall aber vorher anrufen.',
  },
  park: {
    open: true,
    text:
      'Parks sind weiterhin zugänglich, Besuche allerdings nur alleine, mit einer weiteren nicht im Haushalt lebenden Person oder im Kreis der Angehörigen des eigenen Hausstands gestattet.',
  },
  parking: {
    open: true,
  },
  pet_store: {
    open: false,
    text: 'Zoohandlungen haben weiterhin geöffnet.',
  },
  pharmacy: {
    open: true,
    text: 'Apotheken haben weiterhin geöffnet.',
    Icon: LocalPharmacyIcon,
  },
  physiotherapist: {
    open: true,
    text:
      'Medizinisch dringend erforderliche Physiotherapie sind weiterhin möglich, bitte vorher anrufen.',
  },
  plumber: {
    open: true,
    text: 'Handwerksbetriebe arbeiten weiter, auf jeden Fall aber vorher anrufen.',
  },
  police: {
    open: true,
    text:
      'Polizeistationen sind natürlich weiterhin im Dienst, aber auch hier am besten vorher anrufen.',
  },
  post_office: {
    open: true,
    text:
      'Post wird weiterhin ausgeliefert und auch Postfilialen sind weiterhin geöffnet. Einige Paketshops sind allerdings geschlossen.',
    Icon: LocalPostOfficeIcon,
  },
  primary_school: {
    open: false,
    text: 'Alle Schulen sind vorerst bis zum Ende der Osterferien geschlossen.',
    Icon: SchoolIcon,
  },
  real_estate_agency: {
    open: false,
    text: 'Immobilienmakler bieten ihre Dienste aktuell vor allem über Telefon und Email an.',
  },
  restaurant: {
    open: false,
    text:
      'Restaurants sind geschlossen, in vielen Fällen können aber weiterhin Speisen zum Mitnehmen gekauft werden.',
  },
  roofing_contractor: {
    open: true,
    text: 'Handwerksbetriebe arbeiten weiter, auf jeden Fall aber vorher anrufen.',
  },
  rv_park: {
    open: false,
    text: 'Campingplätze sind geschlossen.',
  },
  school: {
    open: false,
    text: 'Alle Schulen sind vorerst bis zum Ende der Osterferien geschlossen.',
    Icon: SchoolIcon,
  },
  secondary_school: {
    open: false,
    text: 'Alle Schulen sind vorerst bis zum Ende der Osterferien geschlossen.',
    Icon: SchoolIcon,
  },
  shoe_store: {
    open: false,
    text: 'Schuhgeschäfte haben geschlossen, es gibt aber viele Alternativen online.',
    Icon: ShoppingCartIcon,
  },
  shopping_mall: {
    open: false,
    text:
      'Einkaufszentren haben geschlossen (ausser z.B. Lebensmittelläden und Apotheken), es gibt aber viele Alternativen online.',
    Icon: ShoppingCartIcon,
  },
  spa: {
    open: false,
    text: 'Heilbäder sind genau wie Schwimmhallen aktuell geschlossen.',
  },
  stadium: {
    open: false,
    text: 'Alle Stadien und öffentlich Sportanlagen sind aktuell geschlossen.',
  },
  storage: { open: true },
  store: {
    open: false,
    text:
      'Alle Läden (bis auf z.B. Lebensmittelläden und Apotheken) haben geschlossen, es gibt für vieles aber Alternativen online.',
    Icon: ShoppingCartIcon,
  },
  subway_station: {
    open: true,
    text: 'Der öffentliche Nahverkehr steht für notwendige Fahrten weiterhin zur Verfügung.',
    Icon: SubwayIcon,
  },
  supermarket: {
    open: true,
    text: 'Supermärkte haben weiterhin geöffnet. Bitte kaufe massvoll ein.',
    Icon: ShoppingCartIcon,
  },
  synagogue: {
    open: false,
    text:
      'Gottesdienste in Synagogen sind verboten, es gibt allerdings zunehmend alternative Angebote online.',
  },
  taxi_stand: {
    open: true,
    text: 'Taxis fahren weiterhin, am besten aber telefonisch bestellen.',
  },
  tourist_attraction: {
    open: false,
    text: 'Touristische Sehenswürdigkeiten sind bis auf weiteres geschlossen.',
  },
  train_station: {
    open: true,
    text:
      'Der öffentliche Nah- und Fernverkehrverkehr steht für notwendige Fahrten weiterhin mit eingeschränktem Fahrplan zur Verfügung.',
    Icon: TrainIcon,
  },
  transit_station: {
    open: true,
    text:
      'Der öffentliche Nah- und Fernverkehrverkehr steht für notwendige Fahrten weiterhin mit eingeschränktem Fahrplan zur Verfügung.',
    Icon: TrainIcon,
  },
  travel_agency: {
    open: false,
    text: 'Reiseveranstalter bieten ihre Dienste aktuell nur Online an.',
  },
  university: {
    open: false,
    text: 'Alle Universitäten sind bis auf weiteres geschlossen.',
    Icon: SchoolIcon,
  },
  veterinary_care: {
    open: true,
    text: 'Tierärzte sind nach telefonischer Terminvereinbarung erreichbar.',
  },
  zoo: {
    open: false,
    text: 'Zoos sind leider bis auf Weiteres geschlossen.',
  },
  administrative_area_level_1: {
    open: null,
    text:
      'Dieser Ort kann bei Vorliegen eines Ausnahmegrundes vermutlich aufgesucht werden. Bitte informiere dich.',
  },
  administrative_area_level_2: {
    open: null,
    text:
      'Dieser Ort kann bei Vorliegen eines Ausnahmegrundes vermutlich aufgesucht werden. Bitte informiere dich.',
  },
  administrative_area_level_3: {
    open: null,
    text:
      'Dieser Ort kann bei Vorliegen eines Ausnahmegrundes vermutlich aufgesucht werden. Bitte informiere dich.',
  },
  administrative_area_level_4: {
    open: null,
    text:
      'Dieser Ort kann bei Vorliegen eines Ausnahmegrundes vermutlich aufgesucht werden. Bitte informiere dich.',
  },
  administrative_area_level_5: {
    open: null,
    text:
      'Dieser Ort kann bei Vorliegen eines Ausnahmegrundes vermutlich aufgesucht werden. Bitte informiere dich.',
  },
  archipelago: {
    open: null,
  },
  colloquial_area: {
    open: null,
  },
  continent: {
    open: null,
  },
  country: {
    open: null,
    text:
      'Viele Staaten haben Einreisebeschränkungen erlassen. Bitte informiere dich auf der Seite des Auswuartigen Amtes.',
  },
  establishment: {
    open: null,
  },
  finance: {
    open: true,
    Icon: AccountBalanceIcon,
    text:
      "Einige Banken haben ihre Kapazitäten in der Kundenberatung eingeschränkt oder ganze Fillialen geschlossen. Geldautomaten im Außenbereich sollten aber erreichbar sein. Falls du Beratung wünschst, ruf' am Besten kurz an.",
  },
  floor: {
    open: null,
    text:
      'Dieser Ort kann bei Vorliegen eines Ausnahmegrundes vermutlich aufgesucht werden. Bitte informiere dich.',
  },
  food: {
    open: true,
    Icon: ShoppingCartIcon,
    text:
      'Die Versorgung mit Lebensmitteln und Gütern des alltäglichen Bedarfs wird selbstverständlich weiterhin sicher gestellt. Am Besten du kaufst mit Augenmaß – genügend um nicht morgen erneut einkaufen gehen zu müssen. Es wäre aber schön, wenn du von besonders gefragten Waren auch noch etwas übrig lassen würdest.',
  },
  general_contractor: { open: null },
  geocode: {
    open: null,
    text:
      'Dieser Ort kann bei Vorliegen eines Ausnahmegrundes vermutlich aufgesucht werden. Bitte informiere dich.',
  },
  health: {
    open: true,
    text:
      'Krankenhäuser und Arztpraxen sind weiterhin geöffnet. Vor einem Besuch aber bitte anrufen.',
    Icon: LocalHospitalIcon,
  },
  intersection: {
    open: null,
    text:
      'Dieser Ort kann bei Vorliegen eines Ausnahmegrundes vermutlich aufgesucht werden. Bitte informiere dich.',
  },
  locality: {
    open: null,
    text:
      'Dieser Ort kann bei Vorliegen eines Ausnahmegrundes vermutlich aufgesucht werden. Bitte informiere dich.',
  },
  natural_feature: {
    open: null,
    text:
      'Dieser Ort kann bei Vorliegen eines Ausnahmegrundes vermutlich aufgesucht werden. Bitte informiere dich.',
  },
  neighborhood: {
    open: null,
    text:
      'Dieser Ort kann bei Vorliegen eines Ausnahmegrundes vermutlich aufgesucht werden. Bitte informiere dich.',
  },
  place_of_worship: {
    open: false,
    text:
      'Gottesdienste und religiöse Zusammenkünfte sind verboten, es gibt allerdings zunehmend alternative Angebote online.',
  },
  point_of_interest: {
    open: null,
    text:
      'Dieser Ort kann bei Vorliegen eines Ausnahmegrundes vermutlich aufgesucht werden. Bitte informiere dich.',
  },
  political: {
    open: null,
    text:
      'Dieser Ort kann bei Vorliegen eines Ausnahmegrundes vermutlich aufgesucht werden. Bitte informiere dich.',
  },
  post_box: {
    open: true,
    text: 'Post wird weiterhin ausgeliefert. Einige Paketshops sind allerdings geschlossen.',
    Icon: LocalPostOfficeIcon,
  },
  postal_code: {
    open: null,
    text:
      'Dieser Ort kann bei Vorliegen eines Ausnahmegrundes vermutlich aufgesucht werden. Bitte informiere dich.',
  },
  postal_code_prefix: {
    open: null,
    text:
      'Dieser Ort kann bei Vorliegen eines Ausnahmegrundes vermutlich aufgesucht werden. Bitte informiere dich.',
  },
  postal_code_suffix: {
    open: null,
    text:
      'Dieser Ort kann bei Vorliegen eines Ausnahmegrundes vermutlich aufgesucht werden. Bitte informiere dich.',
  },
  postal_town: {
    open: null,
    text:
      'Dieser Ort kann bei Vorliegen eines Ausnahmegrundes vermutlich aufgesucht werden. Bitte informiere dich.',
  },
  premise: {
    open: null,
    text:
      'Dieser Ort kann bei Vorliegen eines Ausnahmegrundes vermutlich aufgesucht werden. Bitte informiere dich.',
  },
  room: {
    open: null,
    text:
      'Dieser Ort kann bei Vorliegen eines Ausnahmegrundes vermutlich aufgesucht werden. Bitte informiere dich.',
  },
  route: {
    open: null,
    text:
      'Dieser Ort kann bei Vorliegen eines Ausnahmegrundes vermutlich aufgesucht werden. Bitte informiere dich.',
  },
  street_address: {
    open: null,
    text:
      'Dieser Ort kann bei Vorliegen eines Ausnahmegrundes vermutlich aufgesucht werden. Bitte informiere dich.',
  },
  street_number: {
    open: null,
    text:
      'Dieser Ort kann bei Vorliegen eines Ausnahmegrundes vermutlich aufgesucht werden. Bitte informiere dich.',
  },
  sublocality: {
    open: null,
    text:
      'Dieser Ort kann bei Vorliegen eines Ausnahmegrundes vermutlich aufgesucht werden. Bitte informiere dich.',
  },
  sublocality_level_1: {
    open: null,
    text:
      'Dieser Ort kann bei Vorliegen eines Ausnahmegrundes vermutlich aufgesucht werden. Bitte informiere dich.',
  },
  sublocality_level_2: {
    open: null,
    text:
      'Dieser Ort kann bei Vorliegen eines Ausnahmegrundes vermutlich aufgesucht werden. Bitte informiere dich.',
  },
  sublocality_level_3: {
    open: null,
    text:
      'Dieser Ort kann bei Vorliegen eines Ausnahmegrundes vermutlich aufgesucht werden. Bitte informiere dich.',
  },
  sublocality_level_4: {
    open: null,
    text:
      'Dieser Ort kann bei Vorliegen eines Ausnahmegrundes vermutlich aufgesucht werden. Bitte informiere dich.',
  },
  sublocality_level_5: {
    open: null,
    text:
      'Dieser Ort kann bei Vorliegen eines Ausnahmegrundes vermutlich aufgesucht werden. Bitte informiere dich.',
  },
  subpremise: {
    open: null,
    text:
      'Dieser Ort kann bei Vorliegen eines Ausnahmegrundes vermutlich aufgesucht werden. Bitte informiere dich.',
  },
  town_square: {
    open: null,
    text:
      'Dieser Ort kann bei Vorliegen eines Ausnahmegrundes vermutlich aufgesucht werden. Bitte informiere dich.',
  },
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
