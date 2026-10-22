export type VerbType = 'regular' | 'irregular' | 'modal'

export interface Example {
  de: string
  en: string
}

export interface Verb {
  inf: string
  en: string
  pron: string
  type: VerbType
  /** ich, du, er/sie/es, wir, ihr, sie/Sie */
  forms: [string, string, string, string, string, string]
  note?: string
  /** not in the 100 or A1 word lists, but too common at A1 to leave out */
  extra?: boolean
  examples: Example[]
}

export const PERSONS = ['ich', 'du', 'er / sie / es', 'wir', 'ihr', 'sie / Sie'] as const

export const VERBS: Verb[] = [
  {
    inf: 'sein',
    en: 'to be',
    pron: 'zyne',
    type: 'irregular',
    forms: ['bin', 'bist', 'ist', 'sind', 'seid', 'sind'],
    note: 'Completely irregular — the most important verb to know by heart.',
    examples: [
      { de: 'Ich bin heute sehr müde.', en: 'I am very tired today.' },
      { de: 'Mein Vater ist Lehrer.', en: 'My father is a teacher.' },
      { de: 'Wo seid ihr jetzt?', en: 'Where are you (all) now?' },
    ],
  },
  {
    inf: 'haben',
    en: 'to have',
    pron: 'HAH-ben',
    type: 'irregular',
    forms: ['habe', 'hast', 'hat', 'haben', 'habt', 'haben'],
    note: 'du hast / er hat drop the b.',
    examples: [
      { de: 'Ich habe einen Bruder und eine Schwester.', en: 'I have a brother and a sister.' },
      { de: 'Hast du am Freitag Zeit?', en: 'Do you have time on Friday?' },
      { de: 'Wir haben kein Geld.', en: "We don't have any money." },
    ],
  },
  {
    inf: 'kommen',
    en: 'to come',
    pron: 'KOM-en',
    type: 'regular',
    forms: ['komme', 'kommst', 'kommt', 'kommen', 'kommt', 'kommen'],
    note: 'Pattern verb: stem komm- + e, st, t, en, t, en.',
    examples: [
      { de: 'Ich komme aus England.', en: 'I come from England.' },
      { de: 'Kommst du morgen auch?', en: 'Are you coming tomorrow too?' },
      { de: 'Meine Eltern kommen am Sonntag.', en: 'My parents are coming on Sunday.' },
    ],
  },
  {
    inf: 'gehen',
    en: 'to go (on foot)',
    pron: 'GAY-en',
    type: 'regular',
    forms: ['gehe', 'gehst', 'geht', 'gehen', 'geht', 'gehen'],
    examples: [
      { de: 'Wir gehen am Samstag in die Stadt.', en: "We're going into town on Saturday." },
      { de: 'Ich gehe nicht, weil es kalt ist.', en: "I'm not going because it's cold." },
      { de: 'Wie geht es dir?', en: 'How are you? (lit. how goes it to you?)' },
    ],
  },
  {
    inf: 'machen',
    en: 'to make, to do',
    pron: 'MAHKH-en',
    type: 'regular',
    forms: ['mache', 'machst', 'macht', 'machen', 'macht', 'machen'],
    examples: [
      { de: 'Was machst du am Sonntag?', en: 'What are you doing on Sunday?' },
      { de: 'Meine Mutter macht Kaffee.', en: 'My mother is making coffee.' },
    ],
  },
  {
    inf: 'heißen',
    en: 'to be called',
    pron: 'HY-sen',
    type: 'regular',
    forms: ['heiße', 'heißt', 'heißt', 'heißen', 'heißt', 'heißen'],
    note: 'Stem ends in ß, so du heißt (not heißst).',
    extra: true,
    examples: [
      { de: 'Wie heißt du?', en: "What's your name?" },
      { de: 'Ich heiße Anna und meine Schwester heißt Lena.', en: "My name is Anna and my sister's name is Lena." },
    ],
  },
  {
    inf: 'wohnen',
    en: 'to live (reside)',
    pron: 'VOH-nen',
    type: 'regular',
    forms: ['wohne', 'wohnst', 'wohnt', 'wohnen', 'wohnt', 'wohnen'],
    examples: [
      { de: 'Wo wohnst du?', en: 'Where do you live?' },
      { de: 'Ich wohne in einer Wohnung in der Stadt.', en: 'I live in an apartment in the city.' },
      { de: 'Meine Eltern wohnen in Deutschland.', en: 'My parents live in Germany.' },
    ],
  },
  {
    inf: 'arbeiten',
    en: 'to work',
    pron: 'AHR-by-ten',
    type: 'regular',
    forms: ['arbeite', 'arbeitest', 'arbeitet', 'arbeiten', 'arbeitet', 'arbeiten'],
    note: 'Stem ends in t, so an extra e is added: du arbeitest, er arbeitet.',
    examples: [
      { de: 'Mein Vater arbeitet als Arzt.', en: 'My father works as a doctor.' },
      { de: 'Arbeitest du am Samstag?', en: 'Do you work on Saturday?' },
    ],
  },
  {
    inf: 'spielen',
    en: 'to play',
    pron: 'SHPEE-len',
    type: 'regular',
    forms: ['spiele', 'spielst', 'spielt', 'spielen', 'spielt', 'spielen'],
    examples: [
      { de: 'Die Kinder spielen im Haus, weil es kalt ist.', en: "The children play in the house because it's cold." },
      { de: 'Spielst du oft mit deinem Bruder?', en: 'Do you often play with your brother?' },
    ],
  },
  {
    inf: 'kaufen',
    en: 'to buy',
    pron: 'KOW-fen',
    type: 'regular',
    forms: ['kaufe', 'kaufst', 'kauft', 'kaufen', 'kauft', 'kaufen'],
    examples: [
      { de: 'Ich kaufe Brot und Milch.', en: "I'm buying bread and milk." },
      { de: 'Er kauft eine Jacke, weil es kalt ist.', en: "He's buying a jacket because it's cold." },
    ],
  },
  {
    inf: 'brauchen',
    en: 'to need',
    pron: 'BROW-khen',
    type: 'regular',
    forms: ['brauche', 'brauchst', 'braucht', 'brauchen', 'braucht', 'brauchen'],
    examples: [
      { de: 'Ich brauche neue Schuhe.', en: 'I need new shoes.' },
      { de: 'Brauchst du Geld?', en: 'Do you need money?' },
    ],
  },
  {
    inf: 'finden',
    en: 'to find; to think (opinion)',
    pron: 'FIN-den',
    type: 'regular',
    forms: ['finde', 'findest', 'findet', 'finden', 'findet', 'finden'],
    note: 'Stem ends in d, so an extra e is added: du findest, er findet.',
    examples: [
      { de: 'Ich finde die Jacke sehr teuer.', en: 'I think the jacket is very expensive.' },
      { de: 'Wo finde ich den Bahnhof?', en: 'Where do I find the train station?' },
    ],
  },
  {
    inf: 'kennen',
    en: 'to know (people, places)',
    pron: 'KEN-en',
    type: 'regular',
    forms: ['kenne', 'kennst', 'kennt', 'kennen', 'kennt', 'kennen'],
    note: 'kennen = be familiar with; wissen = know a fact.',
    examples: [
      { de: 'Kennst du meinen Bruder?', en: 'Do you know my brother?' },
      { de: 'Ich kenne die Stadt gut.', en: 'I know the city well.' },
    ],
  },
  {
    inf: 'lieben',
    en: 'to love',
    pron: 'LEE-ben',
    type: 'regular',
    forms: ['liebe', 'liebst', 'liebt', 'lieben', 'liebt', 'lieben'],
    examples: [
      { de: 'Ich liebe dich.', en: 'I love you.' },
      { de: 'Wir lieben den Sommer.', en: 'We love summer.' },
    ],
  },
  {
    inf: 'sagen',
    en: 'to say',
    pron: 'ZAH-gen',
    type: 'regular',
    forms: ['sage', 'sagst', 'sagt', 'sagen', 'sagt', 'sagen'],
    examples: [
      { de: 'Was sagst du?', en: 'What are you saying?' },
      { de: 'Er sagt, dass er krank ist.', en: 'He says that he is sick.' },
    ],
  },
  {
    inf: 'erzählen',
    en: 'to tell (a story)',
    pron: 'air-TSAY-len',
    type: 'regular',
    forms: ['erzähle', 'erzählst', 'erzählt', 'erzählen', 'erzählt', 'erzählen'],
    examples: [
      { de: 'Mein Großvater erzählt immer viel.', en: 'My grandfather always tells a lot (of stories).' },
      { de: 'Sie erzählt von ihrer Familie.', en: 'She is talking about her family.' },
    ],
  },
  {
    inf: 'denken',
    en: 'to think',
    pron: 'DENK-en',
    type: 'regular',
    forms: ['denke', 'denkst', 'denkt', 'denken', 'denkt', 'denken'],
    examples: [
      { de: 'Ich denke, das ist gut.', en: 'I think that is good.' },
      { de: 'Er denkt oft an seine Mutter.', en: 'He often thinks about his mother.' },
    ],
  },
  {
    inf: 'benutzen',
    en: 'to use',
    pron: 'buh-NOOT-sen',
    type: 'regular',
    forms: ['benutze', 'benutzt', 'benutzt', 'benutzen', 'benutzt', 'benutzen'],
    note: 'Stem ends in z, so du benutzt (not benutzst).',
    examples: [
      { de: 'Wir benutzen die Küche oft.', en: 'We use the kitchen often.' },
      { de: 'Benutzt du mein Zimmer?', en: 'Are you using my room?' },
    ],
  },
  {
    inf: 'lernen',
    en: 'to learn',
    pron: 'LAIR-nen',
    type: 'regular',
    forms: ['lerne', 'lernst', 'lernt', 'lernen', 'lernt', 'lernen'],
    extra: true,
    examples: [
      { de: 'Ich lerne Deutsch.', en: "I'm learning German." },
      { de: 'Lernst du auch Spanisch?', en: 'Are you learning Spanish too?' },
    ],
  },
  {
    inf: 'trinken',
    en: 'to drink',
    pron: 'TRINK-en',
    type: 'regular',
    forms: ['trinke', 'trinkst', 'trinkt', 'trinken', 'trinkt', 'trinken'],
    extra: true,
    examples: [
      { de: 'Ich trinke Kaffee mit Milch.', en: 'I drink coffee with milk.' },
      { de: 'Trinkst du Tee oder Wasser?', en: 'Are you drinking tea or water?' },
    ],
  },
  {
    inf: 'sehen',
    en: 'to see',
    pron: 'ZAY-en',
    type: 'irregular',
    forms: ['sehe', 'siehst', 'sieht', 'sehen', 'seht', 'sehen'],
    note: 'Stem change e → ie in du and er/sie/es only.',
    examples: [
      { de: 'Ich sehe meine Freundin heute.', en: "I'm seeing my (girl)friend today." },
      { de: 'Er sieht viele Leute in der Stadt.', en: 'He sees many people in the city.' },
    ],
  },
  {
    inf: 'sprechen',
    en: 'to speak',
    pron: 'SHPREKH-en',
    type: 'irregular',
    forms: ['spreche', 'sprichst', 'spricht', 'sprechen', 'sprecht', 'sprechen'],
    note: 'Stem change e → i in du and er/sie/es only.',
    extra: true,
    examples: [
      { de: 'Ich spreche Englisch und ein wenig Deutsch.', en: 'I speak English and a little German.' },
      { de: 'Sprechen Sie Französisch?', en: 'Do you speak French? (formal)' },
    ],
  },
  {
    inf: 'essen',
    en: 'to eat',
    pron: 'ES-en',
    type: 'irregular',
    forms: ['esse', 'isst', 'isst', 'essen', 'esst', 'essen'],
    note: 'Stem change e → i: du isst, er isst.',
    extra: true,
    examples: [
      { de: 'Ich esse kein Fleisch.', en: "I don't eat meat." },
      { de: 'Isst du Fisch?', en: 'Do you eat fish?' },
    ],
  },
  {
    inf: 'fahren',
    en: 'to drive, to travel',
    pron: 'FAH-ren',
    type: 'irregular',
    forms: ['fahre', 'fährst', 'fährt', 'fahren', 'fahrt', 'fahren'],
    note: 'Stem change a → ä in du and er/sie/es only.',
    extra: true,
    examples: [
      { de: 'Wir fahren im Sommer nach Italien.', en: "We're travelling to Italy in summer." },
      { de: 'Fährst du am Montag in die Stadt?', en: 'Are you going into town on Monday?' },
    ],
  },
  {
    inf: 'wissen',
    en: 'to know (a fact)',
    pron: 'VIS-en',
    type: 'irregular',
    forms: ['weiß', 'weißt', 'weiß', 'wissen', 'wisst', 'wissen'],
    note: 'Like a modal: ich and er/sie/es are identical with no ending.',
    examples: [
      { de: 'Ich weiß es nicht.', en: "I don't know." },
      { de: 'Weißt du, wo der Bahnhof ist?', en: 'Do you know where the train station is?' },
    ],
  },
  {
    inf: 'können',
    en: 'can, to be able to',
    pron: 'KUR-nen',
    type: 'modal',
    forms: ['kann', 'kannst', 'kann', 'können', 'könnt', 'können'],
    note: 'Modal: the second verb goes to the end in its infinitive form.',
    examples: [
      { de: 'Ich kann am Freitag nicht kommen.', en: "I can't come on Friday." },
      { de: 'Kannst du Deutsch sprechen?', en: 'Can you speak German?' },
    ],
  },
  {
    inf: 'müssen',
    en: 'must, to have to',
    pron: 'MEW-sen',
    type: 'modal',
    forms: ['muss', 'musst', 'muss', 'müssen', 'müsst', 'müssen'],
    examples: [
      { de: 'Ich muss heute arbeiten.', en: 'I have to work today.' },
      { de: 'Du musst viel Wasser trinken.', en: 'You must drink a lot of water.' },
    ],
  },
  {
    inf: 'wollen',
    en: 'to want',
    pron: 'VOL-en',
    type: 'modal',
    forms: ['will', 'willst', 'will', 'wollen', 'wollt', 'wollen'],
    note: 'Careful: ich will = I want (not "I will").',
    examples: [
      { de: 'Ich will Deutsch lernen.', en: 'I want to learn German.' },
      { de: 'Willst du mit uns kommen?', en: 'Do you want to come with us?' },
    ],
  },
  {
    inf: 'möchten',
    en: 'would like',
    pron: 'MURKH-ten',
    type: 'modal',
    forms: ['möchte', 'möchtest', 'möchte', 'möchten', 'möchtet', 'möchten'],
    note: 'The polite way to ask for things — use it when ordering or shopping.',
    extra: true,
    examples: [
      { de: 'Ich möchte ein Wasser, bitte.', en: "I'd like a water, please." },
      { de: 'Möchtest du Tee oder Kaffee?', en: 'Would you like tea or coffee?' },
    ],
  },
  {
    inf: 'mögen',
    en: 'to like',
    pron: 'MUR-gen',
    type: 'modal',
    forms: ['mag', 'magst', 'mag', 'mögen', 'mögt', 'mögen'],
    note: 'Usually used with a noun, not a second verb.',
    examples: [
      { de: 'Ich mag Kaffee, aber ich mag keinen Tee.', en: "I like coffee, but I don't like tea." },
      { de: 'Magst du Fisch?', en: 'Do you like fish?' },
    ],
  },
  {
    inf: 'sollen',
    en: 'should, to be supposed to',
    pron: 'ZOL-en',
    type: 'modal',
    forms: ['soll', 'sollst', 'soll', 'sollen', 'sollt', 'sollen'],
    examples: [
      { de: 'Was soll ich kaufen?', en: 'What should I buy?' },
      { de: 'Du sollst nicht so viel arbeiten.', en: "You shouldn't work so much." },
    ],
  },
  {
    inf: 'dürfen',
    en: 'may, to be allowed to',
    pron: 'DEWR-fen',
    type: 'modal',
    forms: ['darf', 'darfst', 'darf', 'dürfen', 'dürft', 'dürfen'],
    examples: [
      { de: 'Darf ich die Küche benutzen?', en: 'May I use the kitchen?' },
      { de: 'Die Kinder dürfen hier spielen.', en: 'The children are allowed to play here.' },
    ],
  },
]

export const VERB_TYPES: { id: VerbType | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'regular', label: 'Regular' },
  { id: 'irregular', label: 'Irregular' },
  { id: 'modal', label: 'Modal' },
]
