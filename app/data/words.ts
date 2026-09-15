export type Category =
  | 'greeting'
  | 'pronoun'
  | 'verb'
  | 'question'
  | 'connector'
  | 'prep'
  | 'adj'
  | 'time'
  | 'noun'
  | 'function'

export interface Word<C extends string = string> {
  n: number
  en: string
  de: string
  cat: C
  note?: string
  /** rough English-reader phonetic respelling, stress in CAPS */
  pron: string
}

export const WORDS: Word<Category>[] = [
  { n: 1, en: 'a, an', de: 'ein / eine', cat: 'function', note: 'gender-dependent: ein Mann, eine Frau', pron: 'ayn / AY-nuh' },
  { n: 2, en: 'after', de: 'nach', cat: 'prep', pron: 'nahkh' },
  { n: 3, en: 'again', de: 'wieder', cat: 'time', pron: 'VEE-der' },
  { n: 4, en: 'all', de: 'alle', cat: 'function', pron: 'AH-luh' },
  { n: 5, en: 'almost', de: 'fast', cat: 'time', pron: 'fahst' },
  { n: 6, en: 'also', de: 'auch', cat: 'connector', pron: 'owkh' },
  { n: 7, en: 'always', de: 'immer', cat: 'time', pron: 'IM-er' },
  { n: 8, en: 'and', de: 'und', cat: 'connector', pron: 'oont' },
  { n: 9, en: 'because', de: 'weil', cat: 'connector', note: 'sends the verb to the end of the clause', pron: 'vyle' },
  { n: 10, en: 'before', de: 'vor / bevor', cat: 'prep', note: 'vor = preposition, bevor = conjunction', pron: 'for / buh-FOR' },
  { n: 11, en: 'big', de: 'groß', cat: 'adj', pron: 'grohss' },
  { n: 12, en: 'but', de: 'aber', cat: 'connector', pron: 'AH-ber' },
  { n: 13, en: 'can (I can)', de: 'können (ich kann)', cat: 'verb', pron: 'KUR-nen (ikh kahn)' },
  { n: 14, en: 'come (I come)', de: 'kommen (ich komme)', cat: 'verb', pron: 'KOM-en (ikh KOM-uh)' },
  { n: 15, en: 'either/or', de: 'entweder/oder', cat: 'connector', pron: 'ent-VAY-der / OH-der' },
  { n: 16, en: 'find (I find)', de: 'finden (ich finde)', cat: 'verb', pron: 'FIN-den (ikh FIN-duh)' },
  { n: 17, en: 'first', de: 'zuerst / erste', cat: 'time', note: 'zuerst = adverb, erste = adjective', pron: 'tsoo-ERST / ER-stuh' },
  { n: 18, en: 'for', de: 'für', cat: 'prep', pron: 'fewr' },
  { n: 19, en: 'friend', de: 'der Freund / die Freundin', cat: 'noun', note: 'male / female', pron: 'dair froynt / dee FROYN-din' },
  { n: 20, en: 'from', de: 'von / aus', cat: 'prep', pron: 'fon / owss' },
  { n: 21, en: 'to go (I go)', de: 'gehen (ich gehe)', cat: 'verb', pron: 'GAY-en (ikh GAY-uh)' },
  { n: 22, en: 'good', de: 'gut', cat: 'adj', pron: 'goot' },
  { n: 23, en: 'goodbye', de: 'auf Wiedersehen / tschüss', cat: 'greeting', note: 'tschüss is casual', pron: 'owf VEE-der-zayn / chews' },
  { n: 24, en: 'happy', de: 'glücklich', cat: 'adj', pron: 'GLEWK-likh' },
  { n: 25, en: 'have (I have)', de: 'haben (ich habe)', cat: 'verb', pron: 'HAH-ben (ikh HAH-buh)' },
  { n: 26, en: 'he', de: 'er', cat: 'pronoun', pron: 'air' },
  { n: 27, en: 'hello', de: 'hallo', cat: 'greeting', pron: 'hah-LOH' },
  { n: 28, en: 'here', de: 'hier', cat: 'function', pron: 'heer' },
  { n: 29, en: 'how', de: 'wie', cat: 'question', pron: 'vee' },
  { n: 30, en: 'I', de: 'ich', cat: 'pronoun', pron: 'ikh' },
  { n: 31, en: 'I am', de: 'ich bin', cat: 'verb', pron: 'ikh bin' },
  { n: 32, en: 'if', de: 'wenn / ob', cat: 'connector', pron: 'ven / ohp' },
  { n: 33, en: 'in', de: 'in', cat: 'prep', pron: 'in' },
  { n: 34, en: 'know (I know)', de: 'wissen / kennen (ich weiß / ich kenne)', cat: 'verb', note: 'wissen = facts, kennen = people/places', pron: 'VIS-en / KEN-en (ikh vice / ikh KEN-uh)' },
  { n: 35, en: 'last', de: 'letzte', cat: 'adj', pron: 'LETS-tuh' },
  { n: 36, en: 'like (I like)', de: 'mögen (ich mag)', cat: 'verb', pron: 'MUR-gen (ikh mahk)' },
  { n: 37, en: 'little', de: 'klein / wenig', cat: 'adj', note: 'klein = small, wenig = not much', pron: 'klyne / VAY-nikh' },
  { n: 38, en: 'love (I love)', de: 'lieben (ich liebe)', cat: 'verb', pron: 'LEE-ben (ikh LEE-buh)' },
  { n: 39, en: 'make (I make)', de: 'machen (ich mache)', cat: 'verb', pron: 'MAHKH-en (ikh MAHKH-uh)' },
  { n: 40, en: 'many', de: 'viele', cat: 'function', pron: 'FEE-luh' },
  { n: 41, en: 'me', de: 'mich / mir', cat: 'pronoun', note: 'mich = accusative, mir = dative', pron: 'mikh / meer' },
  { n: 42, en: 'more', de: 'mehr', cat: 'function', pron: 'mair' },
  { n: 43, en: 'most', de: 'meiste', cat: 'function', pron: 'MY-stuh' },
  { n: 44, en: 'much', de: 'viel', cat: 'function', pron: 'feel' },
  { n: 45, en: 'my', de: 'mein / meine', cat: 'pronoun', pron: 'myne / MY-nuh' },
  { n: 46, en: 'new', de: 'neu', cat: 'adj', pron: 'noy' },
  { n: 47, en: 'no', de: 'nein', cat: 'greeting', pron: 'nine' },
  { n: 48, en: 'not', de: 'nicht', cat: 'function', pron: 'nikht' },
  { n: 49, en: 'now', de: 'jetzt', cat: 'time', pron: 'yetst' },
  { n: 50, en: 'of', de: 'von', cat: 'prep', pron: 'fon' },
  { n: 51, en: 'often', de: 'oft', cat: 'time', pron: 'oft' },
  { n: 52, en: 'on', de: 'auf / an', cat: 'prep', pron: 'owf / ahn' },
  { n: 53, en: 'one', de: 'eins / ein', cat: 'function', pron: 'ines / ayn' },
  { n: 54, en: 'only', de: 'nur', cat: 'function', pron: 'noor' },
  { n: 55, en: 'or', de: 'oder', cat: 'connector', pron: 'OH-der' },
  { n: 56, en: 'other', de: 'andere', cat: 'adj', pron: 'AHN-der-uh' },
  { n: 57, en: 'our', de: 'unser / unsere', cat: 'pronoun', pron: 'OON-zer / OON-zer-uh' },
  { n: 58, en: 'out', de: 'aus / hinaus', cat: 'prep', pron: 'owss / hin-OWSS' },
  { n: 59, en: 'over', de: 'über', cat: 'prep', pron: 'EW-ber' },
  { n: 60, en: 'people', de: 'Leute / Menschen', cat: 'noun', pron: 'LOY-tuh / MEN-shen' },
  { n: 61, en: 'place', de: 'der Ort / der Platz', cat: 'noun', pron: 'dair ort / dair plahts' },
  { n: 62, en: 'please', de: 'bitte', cat: 'greeting', pron: 'BIT-uh' },
  { n: 63, en: 'same', de: 'gleich / selbe', cat: 'adj', pron: 'glykh / ZEL-buh' },
  { n: 64, en: 'see (I see)', de: 'sehen (ich sehe)', cat: 'verb', pron: 'ZAY-en (ikh ZAY-uh)' },
  { n: 65, en: 'she', de: 'sie', cat: 'pronoun', pron: 'zee' },
  { n: 66, en: 'so', de: 'so', cat: 'connector', pron: 'zoh' },
  { n: 67, en: 'some', de: 'einige / etwas', cat: 'function', pron: 'EYE-nig-uh / ET-vahs' },
  { n: 68, en: 'sometimes', de: 'manchmal', cat: 'time', pron: 'MAHNKH-mahl' },
  { n: 69, en: 'still', de: 'noch / immer noch', cat: 'time', pron: 'nokh / IM-er nokh' },
  { n: 70, en: 'such', de: 'solch / so ein', cat: 'function', pron: 'zolkh / zoh ine' },
  { n: 71, en: 'tell (I tell)', de: 'erzählen / sagen (ich erzähle / ich sage)', cat: 'verb', pron: 'air-TSAY-len / ZAH-gen (ikh air-TSAY-luh / ikh ZAH-guh)' },
  { n: 72, en: 'thank you', de: 'danke', cat: 'greeting', pron: 'DAHN-kuh' },
  { n: 73, en: 'that', de: 'das / dass / jener', cat: 'pronoun', note: "das = that one, dass = conjunction 'that'", pron: 'dahs / dahs / YAY-ner' },
  { n: 74, en: 'the', de: 'der / die / das', cat: 'function', note: 'masculine / feminine / neuter', pron: 'dair / dee / dahs' },
  { n: 75, en: 'their', de: 'ihr / ihre', cat: 'pronoun', pron: 'eer / EER-uh' },
  { n: 76, en: 'them', de: 'sie / ihnen', cat: 'pronoun', note: 'sie = accusative, ihnen = dative', pron: 'zee / EE-nen' },
  { n: 77, en: 'then', de: 'dann', cat: 'time', pron: 'dahn' },
  { n: 78, en: 'there is, there are', de: 'es gibt', cat: 'function', note: 'always singular verb + accusative object', pron: 'ess gipt' },
  { n: 79, en: 'they', de: 'sie', cat: 'pronoun', pron: 'zee' },
  { n: 80, en: 'thing', de: 'das Ding / die Sache', cat: 'noun', pron: 'dahs ding / dee ZAHKH-uh' },
  { n: 81, en: 'think (I think)', de: 'denken (ich denke)', cat: 'verb', pron: 'DENK-en (ikh DENK-uh)' },
  { n: 82, en: 'this', de: 'dieser / diese / dieses', cat: 'pronoun', note: 'masculine / feminine / neuter', pron: 'DEE-zer / DEE-zuh / DEE-zes' },
  { n: 83, en: 'time', de: 'die Zeit', cat: 'noun', pron: 'dee tsyte' },
  { n: 84, en: 'to', de: 'zu / nach', cat: 'prep', note: 'nach = to a city/country', pron: 'tsoo / nahkh' },
  { n: 85, en: 'under', de: 'unter', cat: 'prep', pron: 'OON-ter' },
  { n: 86, en: 'up', de: 'hoch / auf', cat: 'function', pron: 'hohkh / owf' },
  { n: 87, en: 'us', de: 'uns', cat: 'pronoun', pron: 'oons' },
  { n: 88, en: 'use (I use)', de: 'benutzen (ich benutze)', cat: 'verb', pron: 'buh-NOOT-sen (ikh buh-NOOT-suh)' },
  { n: 89, en: 'very', de: 'sehr', cat: 'function', pron: 'zair' },
  { n: 90, en: 'we', de: 'wir', cat: 'pronoun', pron: 'veer' },
  { n: 91, en: 'what', de: 'was', cat: 'question', pron: 'vahs' },
  { n: 92, en: 'when', de: 'wann / wenn', cat: 'question', note: 'wann = question word, wenn = if/whenever', pron: 'vahn / ven' },
  { n: 93, en: 'where', de: 'wo', cat: 'question', pron: 'voh' },
  { n: 94, en: 'which', de: 'welche', cat: 'question', pron: 'VEL-khuh' },
  { n: 95, en: 'who', de: 'wer', cat: 'question', pron: 'vair' },
  { n: 96, en: 'why', de: 'warum', cat: 'question', pron: 'vah-ROOM' },
  { n: 97, en: 'with', de: 'mit', cat: 'prep', pron: 'mit' },
  { n: 98, en: 'yes', de: 'ja', cat: 'greeting', pron: 'yah' },
  { n: 99, en: 'you', de: 'du / Sie', cat: 'pronoun', note: 'du = informal, Sie = formal', pron: 'doo / zee' },
  { n: 100, en: 'your', de: 'dein / deine / Ihr / Ihre', cat: 'pronoun', pron: 'dine / DY-nuh / eer / EER-uh' },
]

export const CATEGORIES: { id: Category | 'all'; label: string }[] = [
  { id: 'all', label: 'All 100' },
  { id: 'greeting', label: 'Greetings' },
  { id: 'pronoun', label: 'Pronouns' },
  { id: 'verb', label: 'Verbs' },
  { id: 'question', label: 'Question words' },
  { id: 'connector', label: 'Connectors' },
  { id: 'prep', label: 'Prepositions' },
  { id: 'adj', label: 'Descriptors' },
  { id: 'time', label: 'Time words' },
  { id: 'noun', label: 'Nouns' },
  { id: 'function', label: 'Other' },
]
