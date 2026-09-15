import type { Word } from './words'

export type A1Category =
  | 'number'
  | 'calendar'
  | 'family'
  | 'food'
  | 'color'
  | 'clothing'
  | 'body'
  | 'profession'
  | 'country'
  | 'home'
  | 'weather'
  | 'shopping'
  | 'verb'
  | 'adj'

export const A1_WORDS: Word<A1Category>[] = [
  // numbers
  { n: 1, en: 'zero', de: 'null', cat: 'number', pron: 'nool' },
  { n: 2, en: 'one', de: 'eins', cat: 'number', pron: 'ines' },
  { n: 3, en: 'two', de: 'zwei', cat: 'number', pron: 'tsvy' },
  { n: 4, en: 'three', de: 'drei', cat: 'number', pron: 'dry' },
  { n: 5, en: 'four', de: 'vier', cat: 'number', pron: 'feer' },
  { n: 6, en: 'five', de: 'fünf', cat: 'number', pron: 'fewnf' },
  { n: 7, en: 'six', de: 'sechs', cat: 'number', pron: 'zex' },
  { n: 8, en: 'seven', de: 'sieben', cat: 'number', pron: 'ZEE-ben' },
  { n: 9, en: 'eight', de: 'acht', cat: 'number', pron: 'ahkht' },
  { n: 10, en: 'nine', de: 'neun', cat: 'number', pron: 'noyn' },
  { n: 11, en: 'ten', de: 'zehn', cat: 'number', pron: 'tsayn' },
  { n: 12, en: 'eleven', de: 'elf', cat: 'number', pron: 'elf' },
  { n: 13, en: 'twelve', de: 'zwölf', cat: 'number', pron: 'tsvurlf' },
  { n: 14, en: 'twenty', de: 'zwanzig', cat: 'number', pron: 'TSVAHN-tsikh' },
  { n: 15, en: 'thirty', de: 'dreißig', cat: 'number', pron: 'DRY-sikh' },
  { n: 16, en: 'forty', de: 'vierzig', cat: 'number', pron: 'FEER-tsikh' },
  { n: 17, en: 'fifty', de: 'fünfzig', cat: 'number', pron: 'FEWNF-tsikh' },
  { n: 18, en: 'sixty', de: 'sechzig', cat: 'number', pron: 'ZEKH-tsikh' },
  { n: 19, en: 'seventy', de: 'siebzig', cat: 'number', pron: 'ZEEP-tsikh' },
  { n: 20, en: 'eighty', de: 'achtzig', cat: 'number', pron: 'AHKH-tsikh' },
  { n: 21, en: 'ninety', de: 'neunzig', cat: 'number', pron: 'NOYN-tsikh' },
  { n: 22, en: 'hundred', de: 'hundert', cat: 'number', pron: 'HOON-dert' },

  // calendar & time
  { n: 23, en: 'Monday', de: 'Montag', cat: 'calendar', pron: 'MOHN-tahk' },
  { n: 24, en: 'Tuesday', de: 'Dienstag', cat: 'calendar', pron: 'DEENS-tahk' },
  { n: 25, en: 'Wednesday', de: 'Mittwoch', cat: 'calendar', pron: 'MIT-vokh' },
  { n: 26, en: 'Thursday', de: 'Donnerstag', cat: 'calendar', pron: 'DON-ers-tahk' },
  { n: 27, en: 'Friday', de: 'Freitag', cat: 'calendar', pron: 'FRY-tahk' },
  { n: 28, en: 'Saturday', de: 'Samstag', cat: 'calendar', note: 'Sonnabend in northern Germany', pron: 'ZAHMS-tahk' },
  { n: 29, en: 'Sunday', de: 'Sonntag', cat: 'calendar', pron: 'ZON-tahk' },
  { n: 30, en: 'January', de: 'Januar', cat: 'calendar', pron: 'YAH-noo-ar' },
  { n: 31, en: 'February', de: 'Februar', cat: 'calendar', pron: 'FAY-broo-ar' },
  { n: 32, en: 'March', de: 'März', cat: 'calendar', pron: 'mairts' },
  { n: 33, en: 'April', de: 'April', cat: 'calendar', pron: 'ah-PRIL' },
  { n: 34, en: 'May', de: 'Mai', cat: 'calendar', pron: 'my' },
  { n: 35, en: 'June', de: 'Juni', cat: 'calendar', pron: 'YOO-nee' },
  { n: 36, en: 'July', de: 'Juli', cat: 'calendar', pron: 'YOO-lee' },
  { n: 37, en: 'August', de: 'August', cat: 'calendar', pron: 'ow-GOOST' },
  { n: 38, en: 'September', de: 'September', cat: 'calendar', pron: 'zep-TEM-ber' },
  { n: 39, en: 'October', de: 'Oktober', cat: 'calendar', pron: 'ok-TOH-ber' },
  { n: 40, en: 'November', de: 'November', cat: 'calendar', pron: 'no-VEM-ber' },
  { n: 41, en: 'December', de: 'Dezember', cat: 'calendar', pron: 'day-TSEM-ber' },
  { n: 42, en: 'spring', de: 'der Frühling', cat: 'calendar', pron: 'dair FREW-ling' },
  { n: 43, en: 'summer', de: 'der Sommer', cat: 'calendar', pron: 'dair ZOM-er' },
  { n: 44, en: 'autumn, fall', de: 'der Herbst', cat: 'calendar', pron: 'dair hairpst' },
  { n: 45, en: 'winter', de: 'der Winter', cat: 'calendar', pron: 'dair VIN-ter' },
  { n: 46, en: 'today', de: 'heute', cat: 'calendar', pron: 'HOY-tuh' },
  { n: 47, en: 'tomorrow', de: 'morgen', cat: 'calendar', pron: 'MOR-gen' },
  { n: 48, en: 'yesterday', de: 'gestern', cat: 'calendar', pron: 'GES-tern' },
  { n: 49, en: 'week', de: 'die Woche', cat: 'calendar', pron: 'dee VOKH-uh' },
  { n: 50, en: 'month', de: 'der Monat', cat: 'calendar', pron: 'dair MOH-naht' },
  { n: 51, en: 'year', de: 'das Jahr', cat: 'calendar', pron: 'dahs yahr' },
  { n: 52, en: "o'clock, the clock", de: 'die Uhr', cat: 'calendar', pron: 'dee oor' },

  // family
  { n: 53, en: 'mother', de: 'die Mutter', cat: 'family', pron: 'dee MOOT-er' },
  { n: 54, en: 'father', de: 'der Vater', cat: 'family', pron: 'dair FAH-ter' },
  { n: 55, en: 'parents', de: 'die Eltern', cat: 'family', pron: 'dee EL-tern' },
  { n: 56, en: 'brother', de: 'der Bruder', cat: 'family', pron: 'dair BROO-der' },
  { n: 57, en: 'sister', de: 'die Schwester', cat: 'family', pron: 'dee SHVES-ter' },
  { n: 58, en: 'son', de: 'der Sohn', cat: 'family', pron: 'dair zohn' },
  { n: 59, en: 'daughter', de: 'die Tochter', cat: 'family', pron: 'dee TOKH-ter' },
  { n: 60, en: 'child', de: 'das Kind', cat: 'family', pron: 'dahs kint' },
  { n: 61, en: 'grandmother', de: 'die Großmutter', cat: 'family', pron: 'dee GROHS-moot-er' },
  { n: 62, en: 'grandfather', de: 'der Großvater', cat: 'family', pron: 'dair GROHS-fah-ter' },

  // food & drink
  { n: 63, en: 'bread', de: 'das Brot', cat: 'food', pron: 'dahs broht' },
  { n: 64, en: 'water', de: 'das Wasser', cat: 'food', pron: 'dahs VAHS-er' },
  { n: 65, en: 'coffee', de: 'der Kaffee', cat: 'food', pron: 'dair kah-FAY' },
  { n: 66, en: 'tea', de: 'der Tee', cat: 'food', pron: 'dair tay' },
  { n: 67, en: 'milk', de: 'die Milch', cat: 'food', pron: 'dee milkh' },
  { n: 68, en: 'egg', de: 'das Ei', cat: 'food', pron: 'dahs eye' },
  { n: 69, en: 'apple', de: 'der Apfel', cat: 'food', pron: 'dair AHP-fel' },
  { n: 70, en: 'meat', de: 'das Fleisch', cat: 'food', pron: 'dahs flysh' },
  { n: 71, en: 'fish', de: 'der Fisch', cat: 'food', pron: 'dair fish' },
  { n: 72, en: 'vegetable(s)', de: 'das Gemüse', cat: 'food', pron: 'dahs guh-MEW-zuh' },

  // colors
  { n: 73, en: 'red', de: 'rot', cat: 'color', pron: 'roht' },
  { n: 74, en: 'blue', de: 'blau', cat: 'color', pron: 'blow' },
  { n: 75, en: 'green', de: 'grün', cat: 'color', pron: 'grewn' },
  { n: 76, en: 'yellow', de: 'gelb', cat: 'color', pron: 'gelp' },
  { n: 77, en: 'black', de: 'schwarz', cat: 'color', pron: 'shvahrts' },
  { n: 78, en: 'white', de: 'weiß', cat: 'color', pron: 'vice' },
  { n: 79, en: 'brown', de: 'braun', cat: 'color', pron: 'brown' },
  { n: 80, en: 'grey', de: 'grau', cat: 'color', pron: 'grow' },

  // clothing
  { n: 81, en: 'pants, trousers', de: 'die Hose', cat: 'clothing', pron: 'dee HOH-zuh' },
  { n: 82, en: 'shirt', de: 'das Hemd', cat: 'clothing', pron: 'dahs hemt' },
  { n: 83, en: 'dress', de: 'das Kleid', cat: 'clothing', pron: 'dahs klite' },
  { n: 84, en: 'shoes', de: 'die Schuhe', cat: 'clothing', pron: 'dee SHOO-uh' },
  { n: 85, en: 'jacket', de: 'die Jacke', cat: 'clothing', pron: 'dee YAH-kuh' },

  // body
  { n: 86, en: 'head', de: 'der Kopf', cat: 'body', pron: 'dair kopf' },
  { n: 87, en: 'hand', de: 'die Hand', cat: 'body', pron: 'dee hahnt' },
  { n: 88, en: 'foot', de: 'der Fuß', cat: 'body', pron: 'dair foos' },
  { n: 89, en: 'eye', de: 'das Auge', cat: 'body', pron: 'dahs OW-guh' },
  { n: 90, en: 'stomach', de: 'der Bauch', cat: 'body', pron: 'dair bowkh' },

  // professions
  { n: 91, en: 'teacher', de: 'der Lehrer / die Lehrerin', cat: 'profession', note: 'male / female', pron: 'dair LAY-rer / dee LAY-rer-in' },
  { n: 92, en: 'doctor', de: 'der Arzt / die Ärztin', cat: 'profession', note: 'male / female', pron: 'dair artst / dee AIRTS-tin' },
  { n: 93, en: 'student', de: 'der Student / die Studentin', cat: 'profession', note: 'male / female', pron: 'dair shtoo-DENT / dee shtoo-DEN-tin' },
  { n: 94, en: 'salesperson', de: 'der Verkäufer / die Verkäuferin', cat: 'profession', note: 'male / female', pron: 'dair fer-KOY-fer / dee fer-KOY-fer-in' },
  { n: 95, en: 'waiter, waitress', de: 'der Kellner / die Kellnerin', cat: 'profession', note: 'male / female', pron: 'dair KEL-ner / dee KEL-ner-in' },
  { n: 96, en: 'cook', de: 'der Koch / die Köchin', cat: 'profession', note: 'male / female', pron: 'dair kokh / dee KUR-khin' },

  // countries & languages
  { n: 97, en: 'Germany / German', de: 'Deutschland / Deutsch', cat: 'country', pron: 'DOYTCH-lahnt / doytch' },
  { n: 98, en: 'England / English', de: 'England / Englisch', cat: 'country', pron: 'ENG-lahnt / ENG-lish' },
  { n: 99, en: 'France / French', de: 'Frankreich / Französisch', cat: 'country', pron: 'FRAHNK-ryekh / frahn-TSUR-zish' },
  { n: 100, en: 'Spain / Spanish', de: 'Spanien / Spanisch', cat: 'country', pron: 'SHPAH-nee-en / SHPAH-nish' },
  { n: 101, en: 'Italy / Italian', de: 'Italien / Italienisch', cat: 'country', pron: 'ee-TAH-lee-en / ee-tah-lee-AY-nish' },

  // home & places
  { n: 102, en: 'house', de: 'das Haus', cat: 'home', pron: 'dahs house' },
  { n: 103, en: 'apartment', de: 'die Wohnung', cat: 'home', pron: 'dee VOH-noong' },
  { n: 104, en: 'room', de: 'das Zimmer', cat: 'home', pron: 'dahs TSIM-er' },
  { n: 105, en: 'kitchen', de: 'die Küche', cat: 'home', pron: 'dee KEW-khuh' },
  { n: 106, en: 'city, town', de: 'die Stadt', cat: 'home', pron: 'dee shtaht' },
  { n: 107, en: 'train station', de: 'der Bahnhof', cat: 'home', pron: 'dair BAHN-hohf' },

  // weather
  { n: 108, en: 'sun', de: 'die Sonne', cat: 'weather', pron: 'dee ZON-uh' },
  { n: 109, en: 'rain', de: 'der Regen', cat: 'weather', pron: 'dair RAY-gen' },
  { n: 110, en: 'snow', de: 'der Schnee', cat: 'weather', pron: 'dair shnay' },
  { n: 111, en: 'warm', de: 'warm', cat: 'weather', pron: 'vahrm' },
  { n: 112, en: 'cold', de: 'kalt', cat: 'weather', pron: 'kahlt' },

  // shopping & money
  { n: 113, en: 'price', de: 'der Preis', cat: 'shopping', pron: 'dair price' },
  { n: 114, en: 'money', de: 'das Geld', cat: 'shopping', pron: 'dahs gelt' },
  { n: 115, en: 'euro', de: 'der Euro', cat: 'shopping', pron: 'dair OY-roh' },
  { n: 116, en: 'buy (I buy)', de: 'kaufen (ich kaufe)', cat: 'shopping', pron: 'KOW-fen (ikh KOW-fuh)' },
  { n: 117, en: 'expensive', de: 'teuer', cat: 'shopping', pron: 'TOY-er' },
  { n: 118, en: 'cheap', de: 'billig', cat: 'shopping', pron: 'BIL-ikh' },

  // more verbs (incl. missing modals)
  { n: 119, en: 'must (I must)', de: 'müssen (ich muss)', cat: 'verb', pron: 'MEW-sen (ikh moos)' },
  { n: 120, en: 'want (I want)', de: 'wollen (ich will)', cat: 'verb', pron: 'VOL-en (ikh vil)' },
  { n: 121, en: 'should (I should)', de: 'sollen (ich soll)', cat: 'verb', pron: 'ZOL-en (ikh zol)' },
  { n: 122, en: 'may, allowed to (I may)', de: 'dürfen (ich darf)', cat: 'verb', pron: 'DEWR-fen (ikh dahrf)' },
  { n: 123, en: 'need (I need)', de: 'brauchen (ich brauche)', cat: 'verb', pron: 'BROW-khen (ikh BROW-khuh)' },
  { n: 124, en: 'work (I work)', de: 'arbeiten (ich arbeite)', cat: 'verb', pron: 'AHR-by-ten (ikh AHR-by-tuh)' },
  { n: 125, en: 'live (I live)', de: 'wohnen (ich wohne)', cat: 'verb', pron: 'VOH-nen (ikh VOH-nuh)' },
  { n: 126, en: 'play (I play)', de: 'spielen (ich spiele)', cat: 'verb', pron: 'SHPEE-len (ikh SHPEE-luh)' },

  // feelings & descriptors
  { n: 127, en: 'tired', de: 'müde', cat: 'adj', pron: 'MEW-duh' },
  { n: 128, en: 'sick', de: 'krank', cat: 'adj', pron: 'krahnk' },
  { n: 129, en: 'hungry', de: 'hungrig', cat: 'adj', pron: 'HOONG-rikh' },
  { n: 130, en: 'thirsty', de: 'durstig', cat: 'adj', pron: 'DOOR-stikh' },
  { n: 131, en: 'important', de: 'wichtig', cat: 'adj', pron: 'VIKH-tikh' },
]

export const A1_CATEGORIES: { id: A1Category | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'number', label: 'Numbers' },
  { id: 'calendar', label: 'Calendar' },
  { id: 'family', label: 'Family' },
  { id: 'food', label: 'Food & Drink' },
  { id: 'color', label: 'Colors' },
  { id: 'clothing', label: 'Clothing' },
  { id: 'body', label: 'Body' },
  { id: 'profession', label: 'Professions' },
  { id: 'country', label: 'Countries' },
  { id: 'home', label: 'Home & Places' },
  { id: 'weather', label: 'Weather' },
  { id: 'shopping', label: 'Shopping' },
  { id: 'verb', label: 'More Verbs' },
  { id: 'adj', label: 'Feelings' },
]
