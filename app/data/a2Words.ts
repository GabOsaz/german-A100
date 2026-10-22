/**
 * Goethe-Zertifikat A2 Wortliste (Goethe-Institut, 2016): the alphabetical
 * vocabulary with its official example sentences, plus the topic word groups.
 * English translations added for study.
 */

export interface A2Example {
  de: string
  en: string
}

export interface A2Entry {
  /** headword as printed, nouns with their article */
  de: string
  /** English-style pronunciation respelling, stressed syllable in caps */
  pron: string
  /** plural for nouns, 3rd person + perfect for verbs */
  grammar?: string
  en: string
  examples: A2Example[]
}

export interface A2Section {
  letter: string
  entries: A2Entry[]
}

export interface A2GroupItem {
  de: string
  pron: string
  grammar?: string
  en: string
}

export interface A2Group {
  title: string
  en: string
  items: A2GroupItem[]
}

export const A2_SECTIONS: A2Section[] = [
  {
    letter: 'A',
    entries: [
      {
        de: 'ab',
        pron: 'ahp',
        en: 'from (time/place); off',
        examples: [
          { de: 'Ab morgen muss ich wieder arbeiten.', en: 'From tomorrow on I have to work again.' },
        ],
      },
      {
        de: 'aber',
        pron: 'AH-ber',
        en: 'but; really (emphasis)',
        examples: [
          { de: 'Heute kann ich nicht kommen, aber morgen habe ich Zeit.', en: 'I can\'t come today, but tomorrow I have time.' },
          { de: 'Wir haben nur eine kleine Wohnung, sind aber damit zufrieden.', en: 'We only have a small flat, but we\'re happy with it.' },
          { de: 'Es war sehr schön. Jetzt muss ich aber gehen.', en: 'It was very nice. But now I really have to go.' },
          { de: 'Das ist aber nett von dir.', en: 'That\'s really nice of you.' },
        ],
      },
      {
        de: 'abgeben',
        pron: 'AHP-gay-ben',
        grammar: 'gibt ab · hat abgegeben',
        en: 'to hand in; to leave (with someone)',
        examples: [
          { de: 'Ich muss meinen Schlüssel an der Rezeption abgeben.', en: 'I have to hand in my key at reception.' },
        ],
      },
      {
        de: 'abholen',
        pron: 'AHP-hoh-len',
        grammar: 'holt ab · hat abgeholt',
        en: 'to pick up, to collect',
        examples: [
          { de: 'Wann kann ich die Sachen bei dir abholen?', en: 'When can I pick up the things from your place?' },
          { de: 'Wir müssen noch meinen Bruder abholen.', en: 'We still have to pick up my brother.' },
        ],
      },
      {
        de: 'abschließen',
        pron: 'AHP-shlee-sen',
        grammar: 'schließt ab · hat abgeschlossen',
        en: 'to lock; to finish, to complete',
        examples: [
          { de: 'Hast du die Tür abgeschlossen?', en: 'Did you lock the door?' },
          { de: 'Ich schließe dieses Jahr mein Studium/meine Ausbildung ab.', en: 'I\'m finishing my degree/my training this year.' },
        ],
      },
      {
        de: 'Achtung',
        pron: 'AHKH-toong',
        grammar: 'no plural',
        en: 'attention; watch out',
        examples: [
          { de: 'Achtung an Gleis drei: Die Türen schließen. Der Zug fährt jetzt ab.', en: 'Attention at platform three: the doors are closing. The train is now departing.' },
          { de: 'Achtung! Pass auf! Der Verkehr ist hier gefährlich.', en: 'Watch out! Be careful! The traffic here is dangerous.' },
        ],
      },
      {
        de: 'die Adresse',
        pron: 'dee ah-DRES-uh',
        grammar: 'pl. die Adressen',
        en: 'address',
        examples: [
          { de: 'Können Sie mir Ihre Adresse geben?', en: 'Can you give me your address?' },
        ],
      },
      {
        de: 'die Ahnung',
        pron: 'dee AH-noong',
        grammar: 'pl. die Ahnungen',
        en: 'idea, notion',
        examples: [
          { de: 'Ich hatte keine Ahnung, dass du heute Geburtstag hast.', en: 'I had no idea that it\'s your birthday today.' },
          { de: 'Wie spät ist es? - Ich habe keine Ahnung.', en: 'What time is it? - I have no idea.' },
        ],
      },
      {
        de: 'aktiv',
        pron: 'ahk-TEEF',
        en: 'active',
        examples: [
          { de: 'Peter ist sehr aktiv und macht viel Sport.', en: 'Peter is very active and does a lot of sport.' },
        ],
      },
      {
        de: 'aktuell',
        pron: 'ahk-too-EL',
        en: 'current, up-to-date',
        examples: [
          { de: 'Das ist das aktuelle Kinoprogramm.', en: 'This is the current cinema programme.' },
        ],
      },
      {
        de: 'all-',
        pron: 'ahl-',
        en: 'all; everything; everyone',
        examples: [
          { de: 'Ich wünsche dir alles Gute!', en: 'I wish you all the best!' },
          { de: 'Hast du alles?', en: 'Do you have everything?' },
          { de: 'Möchten Sie noch etwas? - Nein, danke. Das ist alles.', en: 'Would you like anything else? - No, thanks. That\'s all.' },
          { de: 'Sind alle da? - Nein, Rita fehlt noch.', en: 'Is everyone here? - No, Rita is still missing.' },
          { de: 'Alle Freunde kommen.', en: 'All the friends are coming.' },
        ],
      },
      {
        de: 'allein',
        pron: 'ah-LINE',
        en: 'alone; by oneself',
        examples: [
          { de: 'Kommt seine Freundin mit? - Nein, er kommt allein.', en: 'Is his girlfriend coming along? - No, he\'s coming alone.' },
          { de: 'Soll ich Ihnen/dir helfen? - Nein danke, ich schaffe das schon allein.', en: 'Shall I help you? - No thanks, I can manage it by myself.' },
        ],
      },
      {
        de: 'als',
        pron: 'ahls',
        en: 'than; as',
        examples: [
          { de: 'Hector ist jünger als seine Schwester.', en: 'Hector is younger than his sister.' },
          { de: 'Sie arbeitet als Krankenschwester.', en: 'She works as a nurse.' },
        ],
      },
      {
        de: 'also',
        pron: 'AHL-zoh',
        en: 'so; well; therefore',
        examples: [
          { de: 'Also, die Sache ist so: …', en: 'Well, the thing is this: …' },
          { de: 'Er hat Zeit, also kann er uns helfen.', en: 'He has time, so he can help us.' },
        ],
      },
      {
        de: 'alt',
        pron: 'ahlt',
        en: 'old',
        examples: [
          { de: 'Wie alt sind Sie?', en: 'How old are you?' },
          { de: 'Mein Computer ist schon sehr alt.', en: 'My computer is already very old.' },
          { de: 'Wir wohnen in einem ganz alten Haus.', en: 'We live in a very old house.' },
          { de: 'Köln ist eine alte Stadt.', en: 'Cologne is an old city.' },
        ],
      },
      {
        de: 'das Alter',
        pron: 'dahs AHL-ter',
        grammar: 'no plural',
        en: 'age',
        examples: [
          { de: 'Alter: 18 Jahre.', en: 'Age: 18 years.' },
        ],
      },
      {
        de: 'die Ampel',
        pron: 'dee AHM-pel',
        grammar: 'pl. die Ampeln',
        en: 'traffic light',
        examples: [
          { de: 'Du kannst fahren, die Ampel ist grün.', en: 'You can drive, the light is green.' },
          { de: 'Nach der Ampel musst du nach links fahren.', en: 'After the traffic light you have to turn left.' },
        ],
      },
      {
        de: 'an',
        pron: 'ahn',
        en: 'at; on; to; (switched) on',
        examples: [
          { de: 'Fahren Sie an der nächsten Kreuzung nach rechts.', en: 'Turn right at the next crossroads.' },
          { de: 'Wir treffen uns am Bahnhof/am Kino/am Stand.', en: 'We\'ll meet at the station/at the cinema/at the stand.' },
          { de: 'Am nächsten Montag geht es leider nicht.', en: 'Unfortunately next Monday doesn\'t work.' },
          { de: 'Das Licht war die ganze Nacht an.', en: 'The light was on all night.' },
        ],
      },
      {
        de: 'anbieten',
        pron: 'AHN-bee-ten',
        grammar: 'bietet an · hat angeboten',
        en: 'to offer',
        examples: [
          { de: 'Darf ich Ihnen/dir ein Stück Kuchen anbieten?', en: 'May I offer you a piece of cake?' },
          { de: 'Er hat mir eine Stelle als Verkäuferin angeboten.', en: 'He offered me a job as a sales assistant.' },
        ],
      },
      {
        de: 'das Angebot',
        pron: 'dahs AHN-guh-boht',
        grammar: 'pl. die Angebote',
        en: 'offer; special offer',
        examples: [
          { de: 'Heute sind Bananen im Angebot.', en: 'Bananas are on special offer today.' },
          { de: 'Stellenangebote finden Sie in der Zeitung oder im Internet.', en: 'You can find job offers in the newspaper or on the internet.' },
        ],
      },
      {
        de: 'ander-',
        pron: 'AHN-der-',
        en: 'other; different',
        examples: [
          { de: 'Willst du diesen Mantel? – Nein, ich möchte den anderen.', en: 'Do you want this coat? – No, I\'d like the other one.' },
          { de: 'Die anderen sind schon nach Hause gegangen.', en: 'The others have already gone home.' },
          { de: 'Bitte nicht alle auf einmal! Einer nach dem anderen.', en: 'Not all at once, please! One after the other.' },
        ],
      },
      {
        de: 'ändern',
        pron: 'EN-dern',
        grammar: 'ändert · hat geändert',
        en: 'to change',
        examples: [
          { de: 'Das Wetter hat sich geändert.', en: 'The weather has changed.' },
          { de: 'Wie kann ich mein Passwort ändern?', en: 'How can I change my password?' },
        ],
      },
      {
        de: 'anders',
        pron: 'AHN-ders',
        en: 'differently; different',
        examples: [
          { de: 'Anders geht das leider nicht.', en: 'Unfortunately it can\'t be done any other way.' },
          { de: 'Oliver ist anders als seine Freunde.', en: 'Oliver is different from his friends.' },
        ],
      },
      {
        de: 'anfangen',
        pron: 'AHN-fahng-en',
        grammar: 'fängt an · hat angefangen',
        en: 'to begin, to start',
        examples: [
          { de: 'Hier fängt die Bahnhofstraße an.', en: 'This is where Bahnhofstraße begins.' },
          { de: 'Der Unterricht fängt gleich an.', en: 'The lesson is about to start.' },
          { de: 'Würden Sie bitte anfangen?', en: 'Would you please begin?' },
          { de: 'Ich fange im Herbst meine Ausbildung an.', en: 'I\'m starting my training in the autumn.' },
        ],
      },
      {
        de: 'der Anfang',
        pron: 'dair AHN-fahng',
        grammar: 'pl. die Anfänge',
        en: 'beginning, start',
        examples: [
          { de: 'Sie wohnt am Anfang der Straße.', en: 'She lives at the beginning of the street.' },
          { de: 'Wir machen Anfang Juli Urlaub.', en: 'We\'re going on holiday at the beginning of July.' },
        ],
      },
      {
        de: 'die Angst',
        pron: 'dee ahngst',
        grammar: 'pl. die Ängste',
        en: 'fear',
        examples: [
          { de: 'Hab keine Angst!', en: 'Don\'t be afraid!' },
          { de: 'Ich habe Angst vor großen Hunden.', en: 'I\'m afraid of big dogs.' },
        ],
      },
      {
        de: 'ankommen',
        pron: 'AHN-kom-en',
        grammar: 'kommt an · ist angekommen',
        en: 'to arrive',
        examples: [
          { de: 'Wann kommt dieser Zug in Hamburg an?', en: 'When does this train arrive in Hamburg?' },
        ],
      },
      {
        de: 'die Ankunft',
        pron: 'dee AHN-koonft',
        grammar: 'pl. die Ankünfte',
        en: 'arrival',
        examples: [
          { de: 'Auf diesem Fahrplan steht nur die Ankunft der Züge.', en: 'This timetable only shows the arrival of the trains.' },
        ],
      },
      {
        de: 'anmachen',
        pron: 'AHN-mahkh-en',
        grammar: 'macht an · hat angemacht',
        en: 'to switch on, to turn on',
        examples: [
          { de: 'Mach bitte das Licht an!', en: 'Please turn on the light!' },
        ],
      },
      {
        de: 'anmelden (sich)',
        pron: 'AHN-mel-den (zikh)',
        grammar: 'meldet an · hat angemeldet',
        en: 'to register, to sign up',
        examples: [
          { de: 'Wo kann ich mich anmelden?', en: 'Where can I register?' },
        ],
      },
      {
        de: 'die Anmeldung',
        pron: 'dee AHN-mel-doong',
        grammar: 'pl. die Anmeldungen',
        en: 'registration; reception',
        examples: [
          { de: 'Eine Anmeldung für diesen Kurs ist nicht mehr möglich.', en: 'Registration for this course is no longer possible.' },
          { de: 'Wo bekomme ich das Formular für die Anmeldung?', en: 'Where do I get the registration form?' },
        ],
      },
      {
        de: 'der Anrufbeantworter',
        pron: 'dair AHN-roof-buh-ahnt-vor-ter',
        grammar: 'pl. die Anrufbeantworter',
        en: 'answering machine',
        examples: [
          { de: 'Wir sind im Moment nicht da. Sprechen Sie bitte auf den Anrufbeantworter.', en: 'We\'re not here at the moment. Please leave a message on the answering machine.' },
        ],
      },
      {
        de: 'anrufen',
        pron: 'AHN-roo-fen',
        grammar: 'ruft an · hat angerufen',
        en: 'to call, to phone',
        examples: [
          { de: 'Kann ich Sie heute Abend anrufen?', en: 'Can I call you this evening?' },
          { de: 'Juan ruft seine Freundin an.', en: 'Juan calls his girlfriend.' },
        ],
      },
      {
        de: 'der Anruf',
        pron: 'dair AHN-roof',
        grammar: 'pl. die Anrufe',
        en: 'phone call',
        examples: [
          { de: 'Eva bekommt viele Anrufe von ihrem Freund Juan.', en: 'Eva gets a lot of calls from her boyfriend Juan.' },
        ],
      },
      {
        de: 'der Anschluss',
        pron: 'dair AHN-shlooss',
        grammar: 'pl. die Anschlüsse',
        en: 'connection; hook-up',
        examples: [
          { de: 'In Mannheim haben Sie Anschluss nach Saarbrücken.', en: 'In Mannheim you have a connection to Saarbrücken.' },
          { de: 'In Stuttgart erreichen Sie alle Anschlüsse. Auch der Zug nach Paris wartet.', en: 'In Stuttgart you\'ll make all your connections. The train to Paris is waiting too.' },
          { de: 'Gibt es in der Wohnung einen Waschmaschinenanschluss?', en: 'Is there a washing machine connection in the flat?' },
        ],
      },
      {
        de: 'ansehen',
        pron: 'AHN-zay-en',
        grammar: 'sieht an · hat angesehen',
        en: 'to look at; to watch',
        examples: [
          { de: 'Darf ich eure Urlaubsfotos ansehen?', en: 'May I look at your holiday photos?' },
          { de: 'Ich sehe (mir) diese Sendung jeden Tag an.', en: 'I watch this programme every day.' },
        ],
      },
      {
        de: 'antworten',
        pron: 'AHNT-vor-ten',
        grammar: 'antwortet · hat geantwortet',
        en: 'to answer, to reply',
        examples: [
          { de: 'Er antwortet nicht.', en: 'He doesn\'t answer.' },
        ],
      },
      {
        de: 'die Antwort',
        pron: 'dee AHNT-vort',
        grammar: 'pl. die Antworten',
        en: 'answer, reply',
        examples: [
          { de: 'Er gibt leider keine Antwort.', en: 'Unfortunately he doesn\'t give an answer.' },
        ],
      },
      {
        de: 'die Anzeige',
        pron: 'dee AHN-tsy-guh',
        grammar: 'pl. die Anzeigen',
        en: 'advertisement, ad',
        examples: [
          { de: 'Ich habe Ihre Anzeige in der Zeitung gelesen.', en: 'I read your ad in the newspaper.' },
        ],
      },
      {
        de: 'der Anzug',
        pron: 'dair AHN-tsook',
        grammar: 'pl. die Anzüge',
        en: 'suit',
        examples: [
          { de: 'Mein Mann muss sich einen neuen Anzug kaufen.', en: 'My husband has to buy himself a new suit.' },
        ],
      },
      {
        de: 'der Apfel',
        pron: 'dair AHP-fel',
        grammar: 'pl. die Äpfel',
        en: 'apple',
        examples: [
          { de: 'Ein Kilo Äpfel, bitte.', en: 'A kilo of apples, please.' },
        ],
      },
      {
        de: 'die Apotheke',
        pron: 'dee ah-poh-TAY-kuh',
        grammar: 'pl. die Apotheken',
        en: 'pharmacy',
        examples: [
          { de: 'Das Medikament bekommen Sie in der Apotheke.', en: 'You can get the medicine at the pharmacy.' },
        ],
      },
      {
        de: 'der Apparat',
        pron: 'dair ah-pah-RAHT',
        grammar: 'pl. die Apparate',
        en: 'device, appliance; camera',
        examples: [
          { de: 'Was machen wir mit deinem alten Apparat?', en: 'What shall we do with your old device?' },
          { de: 'Ich habe einen neuen Fotoapparat.', en: 'I have a new camera.' },
        ],
      },
      {
        de: 'arbeiten',
        pron: 'AHR-by-ten',
        grammar: 'arbeitet · hat gearbeitet',
        en: 'to work',
        examples: [
          { de: 'Wo arbeiten Sie?', en: 'Where do you work?' },
          { de: 'Ich arbeite als Krankenschwester in einem Krankenhaus.', en: 'I work as a nurse in a hospital.' },
        ],
      },
      {
        de: 'die Arbeit',
        pron: 'dee AR-bite',
        grammar: 'pl. die Arbeiten',
        en: 'work; job',
        examples: [
          { de: 'Mein Bruder sucht Arbeit.', en: 'My brother is looking for work.' },
        ],
      },
      {
        de: 'arbeitslos',
        pron: 'AHR-bites-lohs',
        en: 'unemployed',
        examples: [
          { de: 'Seit wann ist er schon arbeitslos?', en: 'Since when has he been unemployed?' },
          { de: 'Es gibt bei uns viele Leute, die schon lange arbeitslos sind.', en: 'Where we live there are many people who have been unemployed for a long time.' },
        ],
      },
      {
        de: 'ärgern (sich)',
        pron: 'AIR-gern (zikh)',
        grammar: 'ärgert · hat geärgert',
        en: 'to be annoyed; to annoy',
        examples: [
          { de: 'Warum ärgerst du dich? - Ich ärgere mich, weil das Wetter schlecht ist.', en: 'Why are you annoyed? - I\'m annoyed because the weather is bad.' },
        ],
      },
      {
        de: 'arm',
        pron: 'ahrm',
        en: 'poor',
        examples: [
          { de: 'Sie haben nicht viel Geld, sie sind arm.', en: 'They don\'t have much money, they\'re poor.' },
        ],
      },
      {
        de: 'der Arm',
        pron: 'dair ahrm',
        grammar: 'pl. die Arme',
        en: 'arm',
        examples: [
          { de: 'Mein Arm tut weh.', en: 'My arm hurts.' },
        ],
      },
      {
        de: 'der Artikel',
        pron: 'dair ar-TEE-kel',
        grammar: 'pl. die Artikel',
        en: 'article',
        examples: [
          { de: 'Im Deutschen gibt es drei Artikel: der, die und das.', en: 'In German there are three articles: der, die and das.' },
          { de: 'Ich habe in der Zeitung einen interessanten Artikel gelesen.', en: 'I read an interesting article in the newspaper.' },
        ],
      },
      {
        de: 'auch',
        pron: 'owkh',
        en: 'also, too',
        examples: [
          { de: 'Ich bin auch Spanier.', en: 'I\'m Spanish too.' },
          { de: 'Maria muss auch am Wochenende arbeiten.', en: 'Maria has to work at the weekend too.' },
        ],
      },
      {
        de: 'auf',
        pron: 'owf',
        en: 'on; to; open',
        examples: [
          { de: 'Das Wörterbuch liegt auf dem Tisch.', en: 'The dictionary is on the table.' },
          { de: 'Die Kinder spielen auf der Straße.', en: 'The children are playing in the street.' },
          { de: 'Am Samstag gehen wir auf eine Party.', en: 'On Saturday we\'re going to a party.' },
          { de: 'Meine Eltern wohnen auf dem Land.', en: 'My parents live in the country.' },
          { de: 'Auf dem Foto ist auch meine Schwester.', en: 'My sister is in the photo too.' },
          { de: 'Die Tür ist auf, kommen Sie rein!', en: 'The door is open, come in!' },
          { de: 'Hat das Geschäft noch auf?', en: 'Is the shop still open?' },
          { de: 'Auf Wiedersehen.', en: 'Goodbye.' },
          { de: 'Wie heißt das auf Deutsch?', en: 'What\'s that called in German?' },
        ],
      },
      {
        de: 'auf jeden/keinen Fall',
        pron: 'owf YAY-den/KY-nen fahl',
        en: 'definitely / under no circumstances',
        examples: [
          { de: 'Ich möchte auf jeden Fall den neuen James-Bond-Film sehen. - Wirklich? Ich finde James-Bond-Filme langweilig. Ich sehe ihn auf keinen Fall an!', en: 'I definitely want to see the new James Bond film. - Really? I find James Bond films boring. I\'m definitely not watching it!' },
        ],
      },
      {
        de: 'aufhören',
        pron: 'OWF-hur-ren',
        grammar: 'hört auf · hat aufgehört',
        en: 'to stop, to quit',
        examples: [
          { de: 'Wann hört ihr mit der Arbeit auf?', en: 'When do you finish work?' },
          { de: 'Kannst du bitte damit aufhören? Ich muss jetzt arbeiten.', en: 'Can you please stop that? I have to work now.' },
        ],
      },
      {
        de: 'aufmachen',
        pron: 'OWF-mahkh-en',
        grammar: 'macht auf · hat aufgemacht',
        en: 'to open',
        examples: [
          { de: 'Kannst du bitte die Tür aufmachen?', en: 'Can you please open the door?' },
        ],
      },
      {
        de: 'aufpassen',
        pron: 'OWF-pahs-en',
        grammar: 'passt auf · hat aufgepasst',
        en: 'to pay attention; to look after',
        examples: [
          { de: 'Pass auf, der Teller fällt gleich auf den Boden!', en: 'Watch out, the plate is about to fall on the floor!' },
          { de: 'Der Babysitter passt heute Abend auf die Kinder auf.', en: 'The babysitter is looking after the children this evening.' },
          { de: 'Er passt im Unterricht nicht auf.', en: 'He doesn\'t pay attention in class.' },
        ],
      },
      {
        de: 'aufräumen',
        pron: 'OWF-roy-men',
        grammar: 'räumt auf · hat aufgeräumt',
        en: 'to tidy up',
        examples: [
          { de: 'Die Kinder müssen ihr Zimmer aufräumen.', en: 'The children have to tidy their room.' },
        ],
      },
      {
        de: 'aufregend',
        pron: 'OWF-ray-gent',
        en: 'exciting',
        examples: [
          { de: 'Die letzte Woche war sehr aufregend.', en: 'Last week was very exciting.' },
          { de: 'Der Film ist nicht besonders aufregend.', en: 'The film isn\'t particularly exciting.' },
        ],
      },
      {
        de: 'aufstehen',
        pron: 'OWF-shtay-en',
        grammar: 'steht auf · ist aufgestanden',
        en: 'to get up, to stand up',
        examples: [
          { de: 'Ich stehe jeden Morgen um sieben Uhr auf.', en: 'I get up at seven o\'clock every morning.' },
        ],
      },
      {
        de: 'der Aufzug',
        pron: 'dair OWF-tsook',
        grammar: 'pl. die Aufzüge',
        en: 'lift, elevator',
        examples: [
          { de: 'In diesem Haus gibt es keinen Aufzug.', en: 'There\'s no lift in this building.' },
          { de: 'Der Aufzug ist leider kaputt.', en: 'Unfortunately the lift is broken.' },
        ],
      },
      {
        de: 'das Auge',
        pron: 'dahs OW-guh',
        grammar: 'pl. die Augen',
        en: 'eye',
        examples: [
          { de: 'Er hat blaue Augen.', en: 'He has blue eyes.' },
          { de: 'Mein rechtes Auge tut seit Sonntag weh.', en: 'My right eye has been hurting since Sunday.' },
        ],
      },
      {
        de: 'aus',
        pron: 'owss',
        en: 'from; out of; made of; off',
        examples: [
          { de: 'Michele kommt aus Brasilien.', en: 'Michele comes from Brazil.' },
          { de: 'Frau Müller geht immer um acht Uhr aus dem Haus.', en: 'Ms Müller always leaves the house at eight o\'clock.' },
          { de: 'Der Tisch ist aus Glas.', en: 'The table is made of glass.' },
          { de: 'Ich sehe nichts. Das Licht ist aus.', en: 'I can\'t see anything. The light is off.' },
        ],
      },
      {
        de: 'die Ausbildung',
        pron: 'dee OWS-bil-doong',
        grammar: 'pl. die Ausbildungen',
        en: 'training, apprenticeship; education',
        examples: [
          { de: 'Ich möchte eine Ausbildung zum Krankenpfleger machen.', en: 'I\'d like to train as a nurse.' },
        ],
      },
      {
        de: 'der Ausflug',
        pron: 'dair OWS-flook',
        grammar: 'pl. die Ausflüge',
        en: 'trip, outing',
        examples: [
          { de: 'Morgen machen wir einen Ausflug nach Heidelberg/an die Ostsee.', en: 'Tomorrow we\'re going on a trip to Heidelberg/to the Baltic Sea.' },
        ],
      },
      {
        de: 'ausfüllen',
        pron: 'OWS-few-len',
        grammar: 'füllt aus · hat ausgefüllt',
        en: 'to fill in, to fill out',
        examples: [
          { de: 'Füllen Sie/Füll bitte dieses Formular aus!', en: 'Please fill in this form!' },
        ],
      },
      {
        de: 'der Ausgang',
        pron: 'dair OWS-gahng',
        grammar: 'pl. die Ausgänge',
        en: 'exit',
        examples: [
          { de: 'Entschuldigung, wo ist der Ausgang?', en: 'Excuse me, where is the exit?' },
        ],
      },
      {
        de: 'ausgeben',
        pron: 'OWS-gay-ben',
        grammar: 'gibt aus · hat ausgegeben',
        en: 'to spend (money)',
        examples: [
          { de: 'Agata gibt viel Geld für Bücher aus.', en: 'Agata spends a lot of money on books.' },
          { de: 'Ich möchte nicht so viel Geld ausgeben.', en: 'I don\'t want to spend so much money.' },
        ],
      },
      {
        de: 'ausgehen',
        pron: 'OWS-gay-en',
        grammar: 'geht aus · ist ausgegangen',
        en: 'to go out; to go off (light)',
        examples: [
          { de: 'Gehen wir am Freitag zusammen aus?', en: 'Shall we go out together on Friday?' },
          { de: 'Plötzlich ist das Licht ausgegangen.', en: 'Suddenly the light went out.' },
        ],
      },
      {
        de: 'die Auskunft',
        pron: 'dee OWS-koonft',
        grammar: 'pl. die Auskünfte',
        en: 'information; information desk',
        examples: [
          { de: 'Wo ist die Auskunft?', en: 'Where is the information desk?' },
          { de: 'Können Sie mir bitte eine Auskunft geben?', en: 'Can you please give me some information?' },
        ],
      },
      {
        de: 'das Ausland',
        pron: 'dahs OWS-lahnt',
        grammar: 'no plural',
        en: 'abroad, foreign countries',
        examples: [
          { de: 'Fahren Sie ins Ausland?', en: 'Are you going abroad?' },
        ],
      },
      {
        de: 'ausmachen',
        pron: 'OWS-mahkh-en',
        grammar: 'macht aus · hat ausgemacht',
        en: 'to switch off, to turn off',
        examples: [
          { de: 'Mach bitte das Licht aus!', en: 'Please turn off the light!' },
        ],
      },
      {
        de: 'auspacken',
        pron: 'OWS-pahk-en',
        grammar: 'packt aus · hat ausgepackt',
        en: 'to unpack',
        examples: [
          { de: 'Packst du bitte den Koffer aus?', en: 'Will you unpack the suitcase, please?' },
        ],
      },
      {
        de: 'ausruhen (sich)',
        pron: 'OWS-roo-en (zikh)',
        grammar: 'ruht aus · hat ausgeruht',
        en: 'to rest',
        examples: [
          { de: 'Ruh dich erst mal aus! Du bist sicher müde.', en: 'Have a rest first! You must be tired.' },
          { de: 'Er ruht sich nach der Arbeit immer aus.', en: 'He always rests after work.' },
        ],
      },
      {
        de: 'aussehen',
        pron: 'OWS-zay-en',
        grammar: 'sieht aus · hat ausgesehen',
        en: 'to look (like), to appear',
        examples: [
          { de: 'Wie sieht er aus? - Groß und blond.', en: 'What does he look like? - Tall and blond.' },
          { de: 'Sie sieht wie ihre Mutter aus.', en: 'She looks like her mother.' },
          { de: 'Das Kleid sieht hübsch aus.', en: 'The dress looks pretty.' },
        ],
      },
      {
        de: 'außer',
        pron: 'OW-ser',
        en: 'except, apart from',
        examples: [
          { de: 'Außer Lisa möchte niemand den Film sehen.', en: 'Nobody except Lisa wants to see the film.' },
          { de: 'Wir haben täglich außer Samstag geöffnet.', en: 'We\'re open daily except Saturday.' },
        ],
      },
      {
        de: 'außerdem',
        pron: 'OW-ser-daym',
        en: 'besides, in addition',
        examples: [
          { de: 'Vier Brötchen, möchten Sie außerdem noch etwas?', en: 'Four rolls, would you like anything else?' },
        ],
      },
      {
        de: 'außerhalb',
        pron: 'OW-ser-hahlp',
        en: 'outside',
        examples: [
          { de: 'Die Wohnung ist nicht in der Stadt, sie liegt etwas außerhalb.', en: 'The flat isn\'t in town, it\'s a bit outside.' },
        ],
      },
      {
        de: 'aussprechen',
        pron: 'OWS-shprekh-en',
        grammar: 'spricht aus · hat ausgesprochen',
        en: 'to pronounce',
        examples: [
          { de: 'Wie spricht man das Wort aus?', en: 'How do you pronounce the word?' },
        ],
      },
      {
        de: 'aussteigen',
        pron: 'OWS-shty-gen',
        grammar: 'steigt aus · ist ausgestiegen',
        en: 'to get off, to get out',
        examples: [
          { de: 'Wo müssen wir aussteigen? – An der nächsten Haltestelle.', en: 'Where do we have to get off? – At the next stop.' },
        ],
      },
      {
        de: 'die Ausstellung',
        pron: 'dee OWS-shtel-oong',
        grammar: 'pl. die Ausstellungen',
        en: 'exhibition',
        examples: [
          { de: 'Gehen wir morgen zusammen in die Ausstellung?', en: 'Shall we go to the exhibition together tomorrow?' },
        ],
      },
      {
        de: 'austragen',
        pron: 'OWS-trah-gen',
        grammar: 'trägt aus · hat ausgetragen',
        en: 'to deliver',
        examples: [
          { de: 'Er trägt jeden Morgen die Zeitung aus.', en: 'He delivers the newspaper every morning.' },
        ],
      },
      {
        de: 'der Ausweis',
        pron: 'dair OWS-vice',
        grammar: 'pl. die Ausweise',
        en: 'ID card',
        examples: [
          { de: 'Darf ich bitte mal Ihren Ausweis sehen? – Hier ist mein Ausweis.', en: 'May I see your ID, please? – Here is my ID.' },
        ],
      },
      {
        de: 'das Auto',
        pron: 'dahs OW-toh',
        grammar: 'pl. die Autos',
        en: 'car',
        examples: [
          { de: 'Er fährt mit dem Auto.', en: 'He goes by car.' },
        ],
      },
      {
        de: 'die Autobahn',
        pron: 'dee OW-toh-bahn',
        grammar: 'pl. die Autobahnen',
        en: 'motorway, highway',
        examples: [
          { de: 'Darf ich mit dem Motorroller auf der Autobahn fahren?', en: 'Am I allowed to ride a scooter on the motorway?' },
          { de: 'Das Dorf liegt direkt an der Autobahn.', en: 'The village is right next to the motorway.' },
        ],
      },
      {
        de: 'der Automat',
        pron: 'dair ow-toh-MAHT',
        grammar: 'pl. die Automaten',
        en: 'machine, vending machine',
        examples: [
          { de: 'Fahrkarten gibt es nur am Automaten.', en: 'Tickets are only available from the machine.' },
          { de: 'In Berlin ist der Fahrkartenautomat auf dem Bahnsteig.', en: 'In Berlin the ticket machine is on the platform.' },
        ],
      },
      {
        de: 'automatisch',
        pron: 'ow-toh-MAH-tish',
        en: 'automatic(ally)',
        examples: [
          { de: 'Achtung, die Türen schließen automatisch!', en: 'Caution, the doors close automatically!' },
        ],
      },
    ],
  },
  {
    letter: 'B',
    entries: [
      {
        de: 'das Baby',
        pron: 'dahs BAY-bee',
        grammar: 'pl. die Babys',
        en: 'baby',
        examples: [
          { de: 'Wir haben ein Baby. Es ist sechs Wochen alt.', en: 'We have a baby. It\'s six weeks old.' },
        ],
      },
      {
        de: 'der Babysitter',
        pron: 'dair BAY-bee-sit-er',
        grammar: 'pl. die Babysitter',
        en: 'babysitter',
        examples: [
          { de: 'Meine Tochter arbeitet als Babysitter bei einer Familie mit vier Kindern.', en: 'My daughter works as a babysitter for a family with four children.' },
        ],
      },
      {
        de: 'backen',
        pron: 'BAHK-en',
        grammar: 'bäckt/backt · hat gebacken',
        en: 'to bake',
        examples: [
          { de: 'Wenn du kommst, backe ich einen Kuchen.', en: 'If you come, I\'ll bake a cake.' },
        ],
      },
      {
        de: 'die Bäckerei',
        pron: 'dee bek-uh-RYE',
        grammar: 'pl. die Bäckereien',
        en: 'bakery',
        examples: [
          { de: 'Ich geh mal schnell zur Bäckerei.', en: 'I\'ll just pop to the bakery.' },
        ],
      },
      {
        de: 'das Bad',
        pron: 'dahs baht',
        grammar: 'pl. die Bäder',
        en: 'bathroom; bath',
        examples: [
          { de: 'Das Haus ist sehr alt. Es hat kein Bad.', en: 'The house is very old. It has no bathroom.' },
          { de: 'Im Winter nehme ich gern ein warmes Bad.', en: 'In winter I like to have a warm bath.' },
        ],
      },
      {
        de: 'baden',
        pron: 'BAH-den',
        grammar: 'badet · hat gebadet',
        en: 'to bathe, to have a bath; to swim',
        examples: [
          { de: 'Ich bade nicht so gern, ich dusche lieber.', en: 'I don\'t like having baths much, I prefer showering.' },
          { de: 'In diesem See darf man nicht baden.', en: 'You\'re not allowed to swim in this lake.' },
        ],
      },
      {
        de: 'die Bahn',
        pron: 'dee bahn',
        grammar: 'pl. die Bahnen',
        en: 'train, railway',
        examples: [
          { de: 'Wir fahren lieber mit der Bahn als mit dem Bus.', en: 'We prefer going by train to going by bus.' },
          { de: 'Ich nehme die nächste S-Bahn.', en: 'I\'ll take the next suburban train.' },
        ],
      },
      {
        de: 'der Bahnhof',
        pron: 'dair BAHN-hohf',
        grammar: 'pl. die Bahnhöfe',
        en: 'train station',
        examples: [
          { de: 'Entschuldigung, komme ich hier zum Bahnhof?', en: 'Excuse me, is this the way to the station?' },
        ],
      },
      {
        de: 'der Bahnsteig',
        pron: 'dair BAHN-shtyke',
        grammar: 'pl. die Bahnsteige',
        en: 'platform',
        examples: [
          { de: 'Auf Hauptbahnhöfen gibt es meist viele Bahnsteige.', en: 'Main stations usually have many platforms.' },
        ],
      },
      {
        de: 'bald',
        pron: 'bahlt',
        en: 'soon',
        examples: [
          { de: 'Ich komme bald.', en: 'I\'m coming soon.' },
          { de: 'Auf Wiedersehen! Bis bald!', en: 'Goodbye! See you soon!' },
        ],
      },
      {
        de: 'der Balkon',
        pron: 'dair bahl-KOHN',
        grammar: 'pl. die Balkone',
        en: 'balcony',
        examples: [
          { de: 'Die Wohnung hat auch einen kleinen Balkon.', en: 'The flat also has a small balcony.' },
        ],
      },
      {
        de: 'der Ball',
        pron: 'dair bahl',
        grammar: 'pl. die Bälle',
        en: 'ball',
        examples: [
          { de: 'Meine Kinder spielen gern Ball.', en: 'My children like playing ball.' },
        ],
      },
      {
        de: 'die Banane',
        pron: 'dee bah-NAH-nuh',
        grammar: 'pl. die Bananen',
        en: 'banana',
        examples: [
          { de: 'Drei Bananen, bitte!', en: 'Three bananas, please!' },
        ],
      },
      {
        de: 'die Band',
        pron: 'dee bent',
        grammar: 'pl. die Bands',
        en: 'band (music)',
        examples: [
          { de: 'Was ist deine Lieblingsband?', en: 'What\'s your favourite band?' },
          { de: 'Anton spielt in einer Band.', en: 'Anton plays in a band.' },
        ],
      },
      {
        de: 'die Bank',
        pron: 'dee bahnk',
        grammar: 'pl. die Banken',
        en: 'bank (money)',
        examples: [
          { de: 'Bei welcher Bank haben Sie Ihr Konto?', en: 'Which bank is your account with?' },
        ],
      },
      {
        de: 'die Bank',
        pron: 'dee bahnk',
        grammar: 'pl. die Bänke',
        en: 'bench',
        examples: [
          { de: 'Kommt, wir setzen uns auf diese Bank.', en: 'Come on, let\'s sit on this bench.' },
        ],
      },
      {
        de: 'bar',
        pron: 'bahr',
        en: 'in cash',
        examples: [
          { de: 'Muss ich bar zahlen oder geht\'s auch mit Karte?', en: 'Do I have to pay cash or can I pay by card too?' },
        ],
      },
      {
        de: 'der Basketball',
        pron: 'dair BAHS-ket-bahl',
        grammar: 'pl. die Basketbälle',
        en: 'basketball',
        examples: [
          { de: 'Yannick spielt lieber Basketball als Fußball.', en: 'Yannick prefers playing basketball to football.' },
        ],
      },
      {
        de: 'basteln',
        pron: 'BAHS-teln',
        grammar: 'bastelt · hat gebastelt',
        en: 'to do crafts, to make (by hand)',
        examples: [
          { de: 'Die Kinder haben etwas gebastelt.', en: 'The children have made something.' },
        ],
      },
      {
        de: 'der Bauch',
        pron: 'dair bowkh',
        grammar: 'pl. die Bäuche',
        en: 'belly, stomach',
        examples: [
          { de: 'Seit gestern tut mir der Bauch weh.', en: 'My stomach has been hurting since yesterday.' },
        ],
      },
      {
        de: 'bauen',
        pron: 'BOW-en',
        grammar: 'baut · hat gebaut',
        en: 'to build',
        examples: [
          { de: 'Unsere Nachbarn bauen ein neues Haus.', en: 'Our neighbours are building a new house.' },
        ],
      },
      {
        de: 'der Baum',
        pron: 'dair bowm',
        grammar: 'pl. die Bäume',
        en: 'tree',
        examples: [
          { de: 'Der Baum ist über hundert Jahre alt.', en: 'The tree is over a hundred years old.' },
          { de: 'Wir haben zwei Apfelbäume im Garten.', en: 'We have two apple trees in the garden.' },
        ],
      },
      {
        de: 'die Baustelle',
        pron: 'dee BOW-shtel-uh',
        grammar: 'pl. die Baustellen',
        en: 'construction site; roadworks',
        examples: [
          { de: 'Vor unserem Haus ist eine große Baustelle.', en: 'There\'s a big construction site in front of our house.' },
        ],
      },
      {
        de: 'beantworten',
        pron: 'buh-AHNT-vor-ten',
        grammar: 'beantwortet · hat beantwortet',
        en: 'to answer (something)',
        examples: [
          { de: 'Können Sie meine Frage bitte beantworten?', en: 'Can you please answer my question?' },
          { de: 'Hast du die Mail schon beantwortet?', en: 'Have you answered the email yet?' },
        ],
      },
      {
        de: 'bedanken (sich)',
        pron: 'buh-DAHN-ken (zikh)',
        grammar: 'bedankt · hat bedankt',
        en: 'to thank, to say thank you',
        examples: [
          { de: 'Ich möchte mich noch einmal sehr herzlich für Ihre Hilfe bedanken.', en: 'I\'d like to thank you once again very warmly for your help.' },
        ],
      },
      {
        de: 'bedeuten',
        pron: 'buh-DOY-ten',
        grammar: 'bedeutet · hat bedeutet',
        en: 'to mean',
        examples: [
          { de: 'Was bedeutet das Wort?', en: 'What does the word mean?' },
        ],
      },
      {
        de: 'beeilen (sich)',
        pron: 'buh-EYE-len (zikh)',
        grammar: 'beeilt · hat beeilt',
        en: 'to hurry',
        examples: [
          { de: 'Kannst du dich bitte beeilen? Der Bus fährt gleich ab!', en: 'Can you please hurry up? The bus is about to leave!' },
        ],
      },
      {
        de: 'beenden',
        pron: 'buh-EN-den',
        grammar: 'beendet · hat beendet',
        en: 'to finish, to end',
        examples: [
          { de: 'Du musst deine Ausbildung auf jeden Fall beenden.', en: 'You definitely have to finish your training.' },
        ],
      },
      {
        de: 'beginnen',
        pron: 'buh-GIN-en',
        grammar: 'beginnt · hat begonnen',
        en: 'to begin, to start',
        examples: [
          { de: 'Das Spiel beginnt um 15.30 Uhr.', en: 'The game starts at 3:30 pm.' },
        ],
      },
      {
        de: 'begründen',
        pron: 'buh-GREWN-den',
        grammar: 'begründet · hat begründet',
        en: 'to give reasons for, to justify',
        examples: [
          { de: 'Bitte begründen Sie Ihre Meinung.', en: 'Please give reasons for your opinion.' },
        ],
      },
      {
        de: 'bei',
        pron: 'by',
        en: 'near; at; with; at (someone\'s place)',
        examples: [
          { de: 'Offenbach liegt bei Frankfurt.', en: 'Offenbach is near Frankfurt.' },
          { de: 'Ich wohne bei meinen Eltern.', en: 'I live with my parents.' },
          { de: 'Bei uns ist das anders als hier.', en: 'Where we come from it\'s different from here.' },
          { de: 'Er arbeitet bei Siemens.', en: 'He works at Siemens.' },
          { de: 'Ich möchte euch nicht beim Essen stören.', en: 'I don\'t want to disturb you while you\'re eating.' },
        ],
      },
      {
        de: 'beide',
        pron: 'BY-duh',
        en: 'both',
        examples: [
          { de: 'Wir kommen beide.', en: 'We\'re both coming.' },
          { de: 'Welche Bluse möchten Sie, die rote oder die grüne? - Ich nehme beide.', en: 'Which blouse would you like, the red one or the green one? - I\'ll take both.' },
        ],
      },
      {
        de: 'das Bein',
        pron: 'dahs bine',
        grammar: 'pl. die Beine',
        en: 'leg',
        examples: [
          { de: 'Mein rechtes Bein tut weh.', en: 'My right leg hurts.' },
        ],
      },
      {
        de: 'bekannt',
        pron: 'buh-KAHNT',
        en: 'well-known, famous',
        examples: [
          { de: 'Picasso ist sehr bekannt. Er ist ein bekannter Maler.', en: 'Picasso is very well-known. He is a famous painter.' },
        ],
      },
      {
        de: 'der/die Bekannte',
        pron: 'dair / dee buh-KAHN-tuh',
        grammar: 'pl. die Bekannten',
        en: 'acquaintance',
        examples: [
          { de: 'Ein Bekannter von mir heißt Klaus.', en: 'An acquaintance of mine is called Klaus.' },
        ],
      },
      {
        de: 'bekommen',
        pron: 'buh-KOM-en',
        grammar: 'bekommt · hat bekommen',
        en: 'to get, to receive',
        examples: [
          { de: 'Haben Sie meinen Brief bekommen?', en: 'Did you get my letter?' },
          { de: 'Aspirin bekommen Sie in der Apotheke.', en: 'You can get aspirin at the pharmacy.' },
        ],
      },
      {
        de: 'beliebt',
        pron: 'buh-LEEPT',
        en: 'popular',
        examples: [
          { de: 'Fußball ist bei vielen Menschen beliebt.', en: 'Football is popular with many people.' },
        ],
      },
      {
        de: 'benutzen',
        pron: 'buh-NOOT-sen',
        grammar: 'benutzt · hat benutzt',
        en: 'to use',
        examples: [
          { de: 'Die Aufzüge bitte nicht benutzen!', en: 'Please do not use the lifts!' },
        ],
      },
      {
        de: 'bequem',
        pron: 'buh-KVAYM',
        en: 'comfortable',
        examples: [
          { de: 'Das Sofa ist sehr bequem.', en: 'The sofa is very comfortable.' },
          { de: 'Meine Kinder ziehen am liebsten bequeme Schuhe an.', en: 'My children like wearing comfortable shoes best.' },
        ],
      },
      {
        de: 'beraten',
        pron: 'buh-RAH-ten',
        grammar: 'berät · hat beraten',
        en: 'to advise',
        examples: [
          { de: 'Unsere Sekretärin berät Sie gern, wenn Sie Fragen haben.', en: 'Our secretary will be happy to advise you if you have any questions.' },
        ],
      },
      {
        de: 'der Berg',
        pron: 'dair bairk',
        grammar: 'pl. die Berge',
        en: 'mountain',
        examples: [
          { de: 'Die Zugspitze ist der höchste Berg in Deutschland.', en: 'The Zugspitze is the highest mountain in Germany.' },
          { de: 'Wir fahren am Wochenende in die Berge.', en: 'We\'re going to the mountains at the weekend.' },
        ],
      },
      {
        de: 'berichten',
        pron: 'buh-RIKH-ten',
        grammar: 'berichtet · hat berichtet',
        en: 'to report',
        examples: [
          { de: 'Alle Zeitungen berichten von dem Unfall.', en: 'All the newspapers are reporting on the accident.' },
        ],
      },
      {
        de: 'der Beruf',
        pron: 'dair buh-ROOF',
        grammar: 'pl. die Berufe',
        en: 'profession, job',
        examples: [
          { de: 'Was bist du von Beruf?', en: 'What do you do for a living?' },
        ],
      },
      {
        de: 'berühmt',
        pron: 'buh-REWMT',
        en: 'famous',
        examples: [
          { de: 'Thomas Müller ist ein berühmter Fußballspieler.', en: 'Thomas Müller is a famous football player.' },
        ],
      },
      {
        de: 'der Bescheid (bekommen/geben/sagen)',
        pron: 'dair buh-SHITE (buh-KOM-en / GAY-ben / ZAH-gen)',
        grammar: 'no plural',
        en: 'information, notice (to hear / let know)',
        examples: [
          { de: 'Kann Lisa in Heidelberg studieren? - Sie weiß es noch nicht. Sie bekommt erst nächste Woche Bescheid.', en: 'Can Lisa study in Heidelberg? - She doesn\'t know yet. She won\'t hear until next week.' },
          { de: 'Kannst du mir bis morgen Bescheid geben?', en: 'Can you let me know by tomorrow?' },
          { de: 'Ich frage Herrn Maier und sage Ihnen dann Bescheid.', en: 'I\'ll ask Mr Maier and then let you know.' },
        ],
      },
      {
        de: 'beschreiben',
        pron: 'buh-SHRY-ben',
        grammar: 'beschreibt · hat beschrieben',
        en: 'to describe',
        examples: [
          { de: 'Kannst du mir den Weg zum Bahnhof beschreiben?', en: 'Can you describe the way to the station for me?' },
        ],
      },
      {
        de: 'beschweren (sich)',
        pron: 'buh-SHVAY-ren (zikh)',
        grammar: 'beschwert · hat beschwert',
        en: 'to complain',
        examples: [
          { de: 'Hier ist es zu laut. Wo können wir uns beschweren?', en: 'It\'s too loud here. Where can we complain?' },
          { de: 'Mein Nachbar beschwert sich immer über unsere Kinder, wenn sie im Garten spielen.', en: 'My neighbour always complains about our children when they play in the garden.' },
        ],
      },
      {
        de: 'besetzt',
        pron: 'buh-ZETST',
        en: 'occupied, taken; busy (phone)',
        examples: [
          { de: 'Ist dieser Platz frei? - Nein, er ist besetzt.', en: 'Is this seat free? - No, it\'s taken.' },
          { de: 'Die Nummer ist immer besetzt.', en: 'The number is always busy.' },
        ],
      },
      {
        de: 'besichtigen',
        pron: 'buh-ZIKH-ti-gen',
        grammar: 'besichtigt · hat besichtigt',
        en: 'to visit, to view (a sight, a flat)',
        examples: [
          { de: 'Ich möchte gern das Schloss besichtigen.', en: 'I\'d like to visit the castle.' },
          { de: 'Sie können die Wohnung am Mittwochabend besichtigen.', en: 'You can view the flat on Wednesday evening.' },
        ],
      },
      {
        de: 'besonders',
        pron: 'buh-ZON-ders',
        en: 'especially, particularly',
        examples: [
          { de: 'Dieses Angebot ist besonders günstig.', en: 'This offer is especially good value.' },
          { de: 'Hier ist die Pizza besonders gut.', en: 'The pizza here is particularly good.' },
          { de: 'Wie geht\'s? - Nicht besonders.', en: 'How are you? - Not great.' },
        ],
      },
      {
        de: 'bestätigen',
        pron: 'buh-SHTAI-ti-gen',
        grammar: 'bestätigt · hat bestätigt',
        en: 'to confirm',
        examples: [
          { de: 'Ich kann bestätigen, dass er hier war.', en: 'I can confirm that he was here.' },
        ],
      },
      {
        de: 'bestehen',
        pron: 'buh-SHTAY-en',
        grammar: 'besteht · hat bestanden',
        en: 'to pass (an exam); to consist (of)',
        examples: [
          { de: 'Ich habe die Prüfung bestanden!', en: 'I passed the exam!' },
          { de: 'Die Prüfung besteht aus vier Teilen: Hören, Lesen, Schreiben und Sprechen.', en: 'The exam consists of four parts: listening, reading, writing and speaking.' },
        ],
      },
      {
        de: 'bestellen',
        pron: 'buh-SHTEL-en',
        grammar: 'bestellt · hat bestellt',
        en: 'to order',
        examples: [
          { de: 'Wir möchten bitte bestellen.', en: 'We\'d like to order, please.' },
          { de: 'Dieses Buch haben wir nicht da. Sollen wir es für Sie bestellen?', en: 'We don\'t have this book in stock. Shall we order it for you?' },
        ],
      },
      {
        de: 'der Besuch',
        pron: 'dair buh-ZOOKH',
        grammar: 'pl. die Besuche',
        en: 'visit; visitors',
        examples: [
          { de: 'Wir bekommen am Wochenende Besuch.', en: 'We\'re having visitors at the weekend.' },
          { de: 'Ich mache einen Besuch im Krankenhaus.', en: 'I\'m paying a visit to the hospital.' },
        ],
      },
      {
        de: 'besuchen',
        pron: 'buh-ZOO-khen',
        grammar: 'besucht · hat besucht',
        en: 'to visit',
        examples: [
          { de: 'Darf ich dich mal besuchen?', en: 'May I visit you sometime?' },
          { de: 'Möchtest du mich in den Ferien besuchen?', en: 'Would you like to visit me during the holidays?' },
        ],
      },
      {
        de: 'das Bett',
        pron: 'dahs bet',
        grammar: 'pl. die Betten',
        en: 'bed',
        examples: [
          { de: 'Sie ist krank und muss heute im Bett bleiben.', en: 'She\'s ill and has to stay in bed today.' },
        ],
      },
      {
        de: 'bewerben (sich)',
        pron: 'buh-VAIR-ben (zikh)',
        grammar: 'bewirbt · hat beworben',
        en: 'to apply (for a job)',
        examples: [
          { de: 'Ich möchte mich um diese Stelle bewerben.', en: 'I\'d like to apply for this job.' },
        ],
      },
      {
        de: 'die Bewerbung',
        pron: 'dee buh-VAIR-boong',
        grammar: 'pl. die Bewerbungen',
        en: 'application',
        examples: [
          { de: 'Kannst du mir bei meiner Bewerbung helfen?', en: 'Can you help me with my application?' },
        ],
      },
      {
        de: 'bewölkt',
        pron: 'buh-VURLKT',
        en: 'cloudy',
        examples: [
          { de: 'Heute ist es bewölkt.', en: 'It\'s cloudy today.' },
        ],
      },
      {
        de: 'die Wolke',
        pron: 'dee VOL-kuh',
        grammar: 'pl. die Wolken',
        en: 'cloud',
        examples: [
          { de: 'Es gibt viele Wolken am Himmel.', en: 'There are a lot of clouds in the sky.' },
        ],
      },
      {
        de: 'bezahlen',
        pron: 'buh-TSAH-len',
        grammar: 'bezahlt · hat bezahlt',
        en: 'to pay',
        examples: [
          { de: 'Wo kann ich bezahlen?', en: 'Where can I pay?' },
        ],
      },
      {
        de: 'die Bibliothek',
        pron: 'dee bib-lee-oh-TAYK',
        grammar: 'pl. die Bibliotheken',
        en: 'library',
        examples: [
          { de: 'Sie lernt jeden Tag in der Bibliothek.', en: 'She studies in the library every day.' },
        ],
      },
      {
        de: 'das Bier',
        pron: 'dahs beer',
        grammar: 'pl. die Biere',
        en: 'beer',
        examples: [
          { de: 'Noch ein Bier, bitte.', en: 'Another beer, please.' },
        ],
      },
      {
        de: 'das Bild',
        pron: 'dahs bilt',
        grammar: 'pl. die Bilder',
        en: 'picture, image',
        examples: [
          { de: 'Hast du ein Bild von deinem Sohn?', en: 'Do you have a picture of your son?' },
        ],
      },
      {
        de: 'billig',
        pron: 'BIL-ikh',
        en: 'cheap',
        examples: [
          { de: 'Das Wörterbuch kostet nur fünf Euro. - Fünf Euro? Das ist aber billig!', en: 'The dictionary only costs five euros. - Five euros? That\'s really cheap!' },
        ],
      },
      {
        de: 'die Birne',
        pron: 'dee BIR-nuh',
        grammar: 'pl. die Birnen',
        en: 'pear',
        examples: [
          { de: 'Ein Kilo Birnen, bitte!', en: 'A kilo of pears, please!' },
        ],
      },
      {
        de: 'bis',
        pron: 'bis',
        en: 'until; as far as',
        examples: [
          { de: 'Ich fahre nur bis Stuttgart.', en: 'I\'m only going as far as Stuttgart.' },
          { de: 'Ich warte bis Freitag.', en: 'I\'ll wait until Friday.' },
          { de: 'Tschüss, bis gleich!', en: 'Bye, see you in a bit!' },
        ],
      },
      {
        de: 'bisschen',
        pron: 'BIS-khen',
        en: 'a bit, a little',
        examples: [
          { de: 'Können Sie bitte ein bisschen lauter sprechen?', en: 'Can you please speak a bit louder?' },
          { de: 'Ich spreche ein bisschen Französisch.', en: 'I speak a little French.' },
          { de: 'Möchten Sie noch ein bisschen Salat?', en: 'Would you like a bit more salad?' },
        ],
      },
      {
        de: 'bitte',
        pron: 'BIT-uh',
        en: 'please; you\'re welcome; here you are',
        examples: [
          { de: 'Eine Tasse Kaffee bitte! - Bitte schön!', en: 'A cup of coffee, please! - Here you are!' },
          { de: 'Wie bitte? Sprechen Sie bitte ein bisschen lauter!', en: 'Pardon? Please speak a bit louder!' },
        ],
      },
      {
        de: 'die Bitte',
        pron: 'dee BIT-uh',
        grammar: 'pl. die Bitten',
        en: 'request',
        examples: [
          { de: 'Ich habe noch eine Bitte.', en: 'I have one more request.' },
        ],
      },
      {
        de: 'bitten',
        pron: 'BIT-en',
        grammar: 'bittet · hat gebeten',
        en: 'to ask (for), to request',
        examples: [
          { de: 'Darf ich Sie um etwas bitten?', en: 'May I ask you for something?' },
        ],
      },
      {
        de: 'bitter',
        pron: 'BIT-er',
        en: 'bitter',
        examples: [
          { de: 'Kaffee ohne Zucker schmeckt bitter.', en: 'Coffee without sugar tastes bitter.' },
        ],
      },
      {
        de: 'das Blatt',
        pron: 'dahs blaht',
        grammar: 'pl. die Blätter',
        en: 'sheet (of paper); leaf',
        examples: [
          { de: 'Haben Sie ein Blatt Papier für mich?', en: 'Do you have a sheet of paper for me?' },
          { de: 'Die Bäume haben schon gelbe Blätter.', en: 'The trees already have yellow leaves.' },
        ],
      },
      {
        de: 'bleiben',
        pron: 'BLY-ben',
        grammar: 'bleibt · ist geblieben',
        en: 'to stay, to remain',
        examples: [
          { de: 'Wir bleiben drei Tage in Berlin.', en: 'We\'re staying in Berlin for three days.' },
          { de: 'Bitte bleiben Sie stehen!', en: 'Please stay where you are!' },
          { de: 'Oh nein, meine Uhr ist stehen geblieben. Wie spät ist es?', en: 'Oh no, my watch has stopped. What time is it?' },
          { de: 'Ich bleibe heute zu Hause.', en: 'I\'m staying at home today.' },
        ],
      },
      {
        de: 'der Bleistift',
        pron: 'dair BLY-shtift',
        grammar: 'pl. die Bleistifte',
        en: 'pencil',
        examples: [
          { de: 'Hast du einen Bleistift?', en: 'Do you have a pencil?' },
        ],
      },
      {
        de: 'blöd',
        pron: 'blurt',
        en: 'stupid, silly',
        examples: [
          { de: 'Ich finde es blöd, dass du morgen gehen musst.', en: 'I think it\'s a shame that you have to leave tomorrow.' },
        ],
      },
      {
        de: 'der/das Blog',
        pron: 'dair / dahs blog',
        grammar: 'pl. die Blogs',
        en: 'blog',
        examples: [
          { de: 'Ich schreibe einen Blog über Mode.', en: 'I write a blog about fashion.' },
        ],
      },
      {
        de: 'blond',
        pron: 'blont',
        en: 'blond',
        examples: [
          { de: 'Lisa hat blonde Haare.', en: 'Lisa has blond hair.' },
        ],
      },
      {
        de: 'die Blume',
        pron: 'dee BLOO-muh',
        grammar: 'pl. die Blumen',
        en: 'flower',
        examples: [
          { de: 'Gefallen dir die Blumen?', en: 'Do you like the flowers?' },
        ],
      },
      {
        de: 'die Bluse',
        pron: 'dee BLOO-zuh',
        grammar: 'pl. die Blusen',
        en: 'blouse',
        examples: [
          { de: 'Ich suche eine weiße Bluse.', en: 'I\'m looking for a white blouse.' },
        ],
      },
      {
        de: 'die Bohne',
        pron: 'dee BOH-nuh',
        grammar: 'pl. die Bohnen',
        en: 'bean',
        examples: [
          { de: 'Hans isst nicht gern Bohnen.', en: 'Hans doesn\'t like eating beans.' },
        ],
      },
      {
        de: 'böse',
        pron: 'BUR-zuh',
        en: 'angry, cross; bad, evil',
        examples: [
          { de: 'Sie ist richtig böse auf mich.', en: 'She\'s really angry with me.' },
          { de: 'Ich habe dein Buch vergessen. Hoffentlich bist du mir nicht böse.', en: 'I forgot your book. I hope you\'re not cross with me.' },
        ],
      },
      {
        de: 'braten',
        pron: 'BRAH-ten',
        grammar: 'brät · hat gebraten',
        en: 'to fry, to roast',
        examples: [
          { de: 'Braten Sie das Fleisch in etwas Öl!', en: 'Fry the meat in a little oil!' },
          { de: 'Der Fisch brät in der Pfanne.', en: 'The fish is frying in the pan.' },
        ],
      },
      {
        de: 'brauchen',
        pron: 'BROW-khen',
        grammar: 'braucht · hat gebraucht',
        en: 'to need',
        examples: [
          { de: 'Ich brauche ein neues Auto.', en: 'I need a new car.' },
          { de: 'Brauchst du die Zeitung noch oder kann ich sie haben?', en: 'Do you still need the newspaper or can I have it?' },
          { de: 'Meine Großmutter ist krank. Sie braucht viel Ruhe.', en: 'My grandmother is ill. She needs a lot of rest.' },
        ],
      },
      {
        de: 'der Brief',
        pron: 'dair breef',
        grammar: 'pl. die Briefe',
        en: 'letter',
        examples: [
          { de: 'Haben Sie einen Brief für mich?', en: 'Do you have a letter for me?' },
        ],
      },
      {
        de: 'die Briefmarke',
        pron: 'dee BREEF-mar-kuh',
        grammar: 'pl. die Briefmarken',
        en: 'stamp',
        examples: [
          { de: 'Bitte die Briefmarke nicht vergessen!', en: 'Please don\'t forget the stamp!' },
        ],
      },
      {
        de: 'die Brille',
        pron: 'dee BRIL-uh',
        grammar: 'pl. die Brillen',
        en: 'glasses, spectacles',
        examples: [
          { de: 'Wo ist meine Brille?', en: 'Where are my glasses?' },
          { de: 'Mit dieser Brille kann ich nicht mehr gut sehen.', en: 'I can\'t see well with these glasses any more.' },
        ],
      },
      {
        de: 'bringen',
        pron: 'BRING-en',
        grammar: 'bringt · hat gebracht',
        en: 'to bring; to take',
        examples: [
          { de: 'Bringen Sie mir bitte noch einen Kaffee!', en: 'Please bring me another coffee!' },
          { de: 'Wir müssen Max ins Krankenhaus bringen.', en: 'We have to take Max to the hospital.' },
        ],
      },
      {
        de: 'das Brot',
        pron: 'dahs broht',
        grammar: 'pl. die Brote',
        en: 'bread; sandwich',
        examples: [
          { de: 'Nimm doch noch ein Brot für das Abendessen.', en: 'Why don\'t you take another sandwich for dinner.' },
          { de: 'Haben Sie auch Weißbrot?', en: 'Do you have white bread too?' },
        ],
      },
      {
        de: 'das Brötchen',
        pron: 'dahs BRURT-khen',
        grammar: 'pl. die Brötchen',
        en: 'bread roll',
        examples: [
          { de: 'Möchtest du Brot oder Brötchen zum Frühstück?', en: 'Would you like bread or rolls for breakfast?' },
        ],
      },
      {
        de: 'die Brücke',
        pron: 'dee BREW-kuh',
        grammar: 'pl. die Brücken',
        en: 'bridge',
        examples: [
          { de: 'Fahren Sie über die nächste Brücke und dann nach links.', en: 'Drive over the next bridge and then turn left.' },
        ],
      },
      {
        de: 'das Buch',
        pron: 'dahs bookh',
        grammar: 'pl. die Bücher',
        en: 'book',
        examples: [
          { de: 'Was kostet das Buch, bitte?', en: 'How much is the book, please?' },
          { de: 'In diesem Wörterbuch finden Sie mehr als 20.000 Wörter.', en: 'You\'ll find more than 20,000 words in this dictionary.' },
        ],
      },
      {
        de: 'buchen',
        pron: 'BOO-khen',
        grammar: 'bucht · hat gebucht',
        en: 'to book',
        examples: [
          { de: 'Morgen buche ich unsere Urlaubsreise.', en: 'Tomorrow I\'m booking our holiday trip.' },
        ],
      },
      {
        de: 'der Buchstabe',
        pron: 'dair BOOKH-shtah-buh',
        grammar: 'pl. die Buchstaben',
        en: 'letter (of the alphabet)',
        examples: [
          { de: 'Diesen Buchstaben gibt es in meiner Sprache nicht.', en: 'This letter doesn\'t exist in my language.' },
        ],
      },
      {
        de: 'buchstabieren',
        pron: 'bookh-shtah-BEE-ren',
        grammar: 'buchstabiert · hat buchstabiert',
        en: 'to spell',
        examples: [
          { de: 'Würden Sie bitte Ihren Namen buchstabieren?', en: 'Would you please spell your name?' },
        ],
      },
      {
        de: 'bunt',
        pron: 'boont',
        en: 'colourful',
        examples: [
          { de: 'Anna trägt gern bunte Kleider.', en: 'Anna likes wearing colourful dresses.' },
          { de: 'Meine Wohnung ist sehr bunt: Das Wohnzimmer ist rot, die Küche grün und das Bad blau.', en: 'My flat is very colourful: the living room is red, the kitchen green and the bathroom blue.' },
        ],
      },
      {
        de: 'das Büro',
        pron: 'dahs bew-ROH',
        grammar: 'pl. die Büros',
        en: 'office',
        examples: [
          { de: 'Ich arbeite in einem Büro.', en: 'I work in an office.' },
          { de: 'Unser Büro ist bis Dienstag geschlossen.', en: 'Our office is closed until Tuesday.' },
        ],
      },
      {
        de: 'der Bus',
        pron: 'dair booss',
        grammar: 'pl. die Busse',
        en: 'bus',
        examples: [
          { de: 'Wann kommt der nächste Bus?', en: 'When is the next bus coming?' },
        ],
      },
      {
        de: 'die Butter',
        pron: 'dee BOO-ter',
        grammar: 'no plural',
        en: 'butter',
        examples: [
          { de: 'Möchtest du Butter aufs Brot oder nur Käse?', en: 'Would you like butter on your bread or just cheese?' },
        ],
      },
    ],
  },
  {
    letter: 'C',
    entries: [
      {
        de: 'das Café',
        pron: 'dahs kah-FAY',
        grammar: 'pl. die Cafés',
        en: 'café',
        examples: [
          { de: 'Kommst du mit ins Café? Ich möchte gern einen Kaffee trinken.', en: 'Are you coming to the café? I\'d like to have a coffee.' },
        ],
      },
      {
        de: 'die Cafeteria',
        pron: 'dee kah-feh-teh-REE-ah',
        grammar: 'pl. die Cafeterias',
        en: 'cafeteria',
        examples: [
          { de: 'Ich gehe jetzt in die Cafeteria. Soll ich dir etwas mitbringen?', en: 'I\'m going to the cafeteria now. Should I bring you something?' },
        ],
      },
      {
        de: 'chatten',
        pron: 'CHET-en',
        grammar: 'chattet · hat gechattet',
        en: 'to chat (online)',
        examples: [
          { de: 'Luis chattet gern mit seinen Freunden im Internet.', en: 'Luis likes chatting with his friends online.' },
        ],
      },
      {
        de: 'der Chef / die Chefin',
        pron: 'dair shef / dee SHEF-in',
        grammar: 'pl. die Chefs / die Chefinnen',
        en: 'boss',
        examples: [
          { de: 'Wir haben eine neue Chefin.', en: 'We have a new (female) boss.' },
        ],
      },
      {
        de: 'der Club / der Klub',
        pron: 'dair kloop / dair kloop',
        grammar: 'pl. die Clubs / die Klubs',
        en: 'club',
        examples: [
          { de: 'Gibt es hier einen Tennis-Club/Klub?', en: 'Is there a tennis club here?' },
          { de: 'Ich möchte gern tanzen gehen. Wo gibt es hier einen Club/Klub mit guter Musik?', en: 'I\'d like to go dancing. Where is there a club with good music around here?' },
        ],
      },
      {
        de: 'der/das Comic',
        pron: 'dair / dahs KOM-ik',
        grammar: 'pl. die Comics',
        en: 'comic',
        examples: [
          { de: 'Mein Sohn liest immer nur Comics.', en: 'My son only ever reads comics.' },
        ],
      },
      {
        de: 'der Computer',
        pron: 'dair kom-PYOO-ter',
        grammar: 'pl. die Computer',
        en: 'computer',
        examples: [
          { de: 'Wann bekommst du deinen neuen Computer?', en: 'When are you getting your new computer?' },
        ],
      },
      {
        de: 'die Creme',
        pron: 'dee kraym',
        grammar: 'pl. die Cremes / die Cremen',
        en: 'cream (cosmetic; in a cake)',
        examples: [
          { de: 'Ich suche eine Creme für die Hände.', en: 'I\'m looking for a hand cream.' },
          { de: 'Der Kuchen schmeckt super! Was ist in der Creme? – Das ist eine Buttercreme mit viel Schokolade.', en: 'The cake tastes great! What\'s in the cream? – It\'s a buttercream with lots of chocolate.' },
        ],
      },
    ],
  },
  {
    letter: 'D',
    entries: [
      {
        de: 'da',
        pron: 'dah',
        en: 'there; here; then',
        examples: [
          { de: 'Welche Bluse nehmen Sie? – Die da.', en: 'Which blouse will you take? – That one there.' },
          { de: 'Ist Herr Klein schon da?', en: 'Is Mr Klein here yet?' },
          { de: 'Wir sprechen gerade über Paul. Da kommt er ja.', en: 'We\'re just talking about Paul. Here he comes.' },
          { de: 'Da drüben ist der Bahnhof.', en: 'The station is over there.' },
        ],
      },
      {
        de: 'da(r)- (z. B. darauf, darüber)',
        pron: 'dah(r)- (tsoom BY-shpeel dah-ROWF, dah-REW-ber)',
        en: 'there-/it + preposition: on it, about it, etc.',
        examples: [
          { de: 'Darauf fällt mir keine Antwort ein.', en: 'I can\'t think of an answer to that.' },
          { de: 'Darüber spreche ich nicht gern.', en: 'I don\'t like talking about that.' },
        ],
      },
      {
        de: 'dabei (sein)',
        pron: 'dah-BY (zyne)',
        grammar: 'ist dabei · war dabei · ist dabei gewesen',
        en: 'to have on you; to be there, take part',
        examples: [
          { de: 'Hast du einen Stift dabei?', en: 'Do you have a pen on you?' },
          { de: 'Schön, dass du da bist. Ist deine Familie auch dabei?', en: 'Nice that you\'re here. Is your family here too?' },
        ],
      },
      {
        de: 'dafür/dagegen sein',
        pron: 'dah-FEWR/dah-GAY-gen zyne',
        grammar: 'ist dafür/dagegen · war dafür/dagegen · ist dafür/dagegen gewesen',
        en: 'to be for/against it',
        examples: [
          { de: 'Ich bin dafür/dagegen.', en: 'I\'m for/against it.' },
        ],
      },
      {
        de: 'damals',
        pron: 'DAH-mahls',
        en: 'back then, at that time',
        examples: [
          { de: 'Als Student hatte ich viel Zeit und wollte reisen. Aber damals hatte ich kein Geld.', en: 'As a student I had lots of time and wanted to travel. But back then I had no money.' },
        ],
      },
      {
        de: 'die Dame',
        pron: 'dee DAH-muh',
        grammar: 'pl. die Damen',
        en: 'lady',
        examples: [
          { de: 'Damen (an der Toilette)', en: 'Ladies (sign on a toilet)' },
          { de: 'Sehr geehrte Damen und Herren,', en: 'Dear Sir or Madam, / Ladies and gentlemen,' },
        ],
      },
      {
        de: 'daneben',
        pron: 'dah-NAY-ben',
        en: 'next to it',
        examples: [
          { de: 'Du weißt doch, wo die Post ist. Daneben ist die Bank.', en: 'You know where the post office is. The bank is next to it.' },
        ],
      },
      {
        de: 'der Dank',
        pron: 'dair dahnk',
        grammar: 'no plural',
        en: 'thanks',
        examples: [
          { de: 'Vielen Dank!', en: 'Many thanks!' },
          { de: 'Herzlichen Dank!', en: 'Thank you very much!' },
        ],
      },
      {
        de: 'danke',
        pron: 'DAHN-kuh',
        en: 'thank you, thanks',
        examples: [
          { de: 'Soll ich Ihnen helfen? – Sehr freundlich, ja danke!', en: 'Shall I help you? – Very kind, yes thank you!' },
          { de: 'Guten Appetit! – Danke gleichfalls.', en: 'Enjoy your meal! – Thanks, you too.' },
        ],
      },
      {
        de: 'danken',
        pron: 'DAHN-ken',
        grammar: 'dankt · hat gedankt',
        en: 'to thank',
        examples: [
          { de: 'Ich danke Ihnen für die Einladung.', en: 'Thank you for the invitation.' },
        ],
      },
      {
        de: 'dann',
        pron: 'dahn',
        en: 'then',
        examples: [
          { de: 'Ich muss noch schnell zur Post, dann komme ich.', en: 'I just have to pop to the post office, then I\'ll come.' },
          { de: 'Wenn es nicht regnet, dann kommen wir.', en: 'If it doesn\'t rain, then we\'ll come.' },
        ],
      },
      {
        de: 'dass',
        pron: 'dahs',
        en: 'that (conjunction)',
        examples: [
          { de: 'Rico hat gesagt, dass er auch zur Party kommt.', en: 'Rico said that he\'s coming to the party too.' },
          { de: 'Ich finde es super, dass du mich besuchst.', en: 'I think it\'s great that you\'re visiting me.' },
        ],
      },
      {
        de: 'die Datei',
        pron: 'dee dah-TY',
        grammar: 'pl. die Dateien',
        en: '(computer) file',
        examples: [
          { de: 'Wo hast du die Datei gespeichert?', en: 'Where did you save the file?' },
          { de: 'Kannst du die Datei bitte öffnen?', en: 'Can you open the file, please?' },
        ],
      },
      {
        de: 'das Datum',
        pron: 'dahs DAH-toom',
        grammar: 'pl. die Daten',
        en: 'date; (pl.) data, details',
        examples: [
          { de: 'Bitte Datum und Unterschrift nicht vergessen!', en: 'Please don\'t forget the date and signature!' },
          { de: 'Welches Datum haben wir heute?', en: 'What\'s the date today?' },
          { de: 'Haben Sie meine Kontaktdaten?', en: 'Do you have my contact details?' },
        ],
      },
      {
        de: 'dauern',
        pron: 'DOW-ern',
        grammar: 'dauert · hat gedauert',
        en: 'to last, to take (time)',
        examples: [
          { de: 'Wie lange dauert die Pause? – Eine halbe Stunde.', en: 'How long is the break? – Half an hour.' },
        ],
      },
      {
        de: 'denken',
        pron: 'DEN-ken',
        grammar: 'denkt · hat gedacht',
        en: 'to think',
        examples: [
          { de: 'Ich denke, du hast recht.', en: 'I think you\'re right.' },
          { de: 'Ich denke oft an meine Freundin.', en: 'I often think of my girlfriend.' },
          { de: 'Was denkst du? Sollen wir heute Abend ins Kino gehen?', en: 'What do you think? Should we go to the cinema tonight?' },
        ],
      },
      {
        de: 'denn',
        pron: 'den',
        en: 'because; (particle in questions)',
        examples: [
          { de: 'Ich kann nicht kommen, denn ich bin krank.', en: 'I can\'t come because I\'m ill.' },
        ],
      },
      {
        de: 'deshalb',
        pron: 'DES-hahlp',
        en: 'therefore, that\'s why',
        examples: [
          { de: 'Ich bin krank. Deshalb komme ich heute nicht ins Büro.', en: 'I\'m ill. That\'s why I\'m not coming to the office today.' },
        ],
      },
      {
        de: 'deutlich',
        pron: 'DOYT-likh',
        en: 'clear(ly), distinct(ly)',
        examples: [
          { de: 'Sprechen Sie bitte deutlich!', en: 'Please speak clearly!' },
          { de: 'Können Sie das bitte deutlicher schreiben? Ich kann das nicht lesen.', en: 'Could you write that more clearly, please? I can\'t read it.' },
        ],
      },
      {
        de: 'dick',
        pron: 'dik',
        en: 'fat; thick',
        examples: [
          { de: 'Ich bin zu dick. Ich muss weniger essen.', en: 'I\'m too fat. I have to eat less.' },
        ],
      },
      {
        de: 'das Ding',
        pron: 'dahs ding',
        grammar: 'pl. die Dinge',
        en: 'thing',
        examples: [
          { de: 'Gib mir bitte mal das Ding da drüben!', en: 'Please give me that thing over there!' },
          { de: 'Was macht man mit diesem Ding? – Damit kann man Flaschen öffnen.', en: 'What do you do with this thing? – You can open bottles with it.' },
        ],
      },
      {
        de: 'direkt',
        pron: 'dee-REKT',
        en: 'direct(ly); right, straight',
        examples: [
          { de: 'Wir wohnen direkt über dem Café.', en: 'We live directly above the café.' },
          { de: 'Gibt es keinen direkten Zug nach Hamburg? – Nein, Sie müssen immer umsteigen.', en: 'Isn\'t there a direct train to Hamburg? – No, you always have to change.' },
          { de: 'Ich möchte nicht direkt nach der Schule studieren. Ich möchte erst reisen.', en: 'I don\'t want to go to university straight after school. I want to travel first.' },
          { de: 'Wir liefern Ihnen das Sofa direkt ins Haus.', en: 'We\'ll deliver the sofa right to your home.' },
        ],
      },
      {
        de: 'die Disco / die Disko',
        pron: 'dee DIS-koh / dee DIS-koh',
        grammar: 'pl. die Discos / die Diskos',
        en: 'disco, club',
        examples: [
          { de: 'Wir gehen heute Abend in die Disco/Disko.', en: 'We\'re going to the disco tonight.' },
        ],
      },
      {
        de: 'diskutieren',
        pron: 'dis-koo-TEE-ren',
        grammar: 'diskutiert · hat diskutiert',
        en: 'to discuss',
        examples: [
          { de: 'Ich möchte das mit meinen Kollegen diskutieren.', en: 'I\'d like to discuss that with my colleagues.' },
        ],
      },
      {
        de: 'doch',
        pron: 'dokh',
        en: 'yes (contradicting a negative); after all; (particle)',
        examples: [
          { de: 'Hast du keinen Hunger? – Doch, ich bin sehr hungrig.', en: 'Aren\'t you hungry? – Yes I am, I\'m very hungry.' },
          { de: 'Kannst du morgen nicht kommen? – Doch.', en: 'Can\'t you come tomorrow? – Yes, I can.' },
          { de: 'Geh doch mal wieder ins Kino!', en: 'Why don\'t you go to the cinema again!' },
          { de: 'Das macht doch nichts!', en: 'That doesn\'t matter at all!' },
        ],
      },
      {
        de: 'das Doppelzimmer',
        pron: 'dahs DOP-el-tsim-er',
        grammar: 'pl. die Doppelzimmer',
        en: 'double room',
        examples: [
          { de: 'Möchten Sie ein Doppelzimmer oder ein Einzelzimmer?', en: 'Would you like a double room or a single room?' },
        ],
      },
      {
        de: 'das Dorf',
        pron: 'dahs dorf',
        grammar: 'pl. die Dörfer',
        en: 'village',
        examples: [
          { de: 'Unser Dorf liegt direkt an der Autobahn.', en: 'Our village is right by the motorway.' },
          { de: 'Meine Familie lebt in einem Dorf.', en: 'My family lives in a village.' },
        ],
      },
      {
        de: 'dort, -her, -hin',
        pron: 'dort, -hair, -hin',
        en: 'there; from there; (to) there',
        examples: [
          { de: 'Wir treffen uns vor dem Kino. – Gut, ich bin in fünf Minuten dort.', en: 'We\'ll meet in front of the cinema. – OK, I\'ll be there in five minutes.' },
          { de: 'Dort ist unser Haus.', en: 'Our house is over there.' },
          { de: 'Deine Tasche kannst du dorthin stellen.', en: 'You can put your bag over there.' },
          { de: 'Kommst du mit in die Stadt? – Nein, ich komme gerade dorther/von dort.', en: 'Are you coming into town? – No, I\'ve just come from there.' },
        ],
      },
      {
        de: 'draußen',
        pron: 'DROW-sen',
        en: 'outside',
        examples: [
          { de: 'Das Wetter ist so schön. Wollen wir draußen sitzen?', en: 'The weather is so nice. Shall we sit outside?' },
          { de: 'Hunde müssen draußen bleiben.', en: 'Dogs must stay outside.' },
        ],
      },
      {
        de: 'dringend',
        pron: 'DRING-ent',
        en: 'urgent(ly)',
        examples: [
          { de: 'Bitte kommen Sie schnell. Es ist dringend.', en: 'Please come quickly. It\'s urgent.' },
        ],
      },
      {
        de: 'drinnen',
        pron: 'DRIN-en',
        en: 'inside',
        examples: [
          { de: 'Wollen Sie drinnen oder draußen sitzen?', en: 'Do you want to sit inside or outside?' },
          { de: 'Hier drinnen ist es sehr warm.', en: 'It\'s very warm in here.' },
        ],
      },
      {
        de: 'drüben',
        pron: 'DREW-ben',
        en: 'over there',
        examples: [
          { de: 'Da drüben ist die Haltestelle.', en: 'The stop is over there.' },
        ],
      },
      {
        de: 'drücken',
        pron: 'DREWK-en',
        grammar: 'drückt · hat gedrückt',
        en: 'to push, to press; to pinch (shoes)',
        examples: [
          { de: 'An dieser Tür musst du drücken, nicht ziehen, dann geht sie auf.', en: 'You have to push this door, not pull, then it opens.' },
          { de: 'Drücken Sie „Bestätigen“!', en: 'Press "Confirm"!' },
          { de: 'Meine Schuhe drücken.', en: 'My shoes pinch.' },
        ],
      },
      {
        de: 'drucken',
        pron: 'DROOK-en',
        grammar: 'druckt · hat gedruckt',
        en: 'to print',
        examples: [
          { de: 'Wähle einfach „Datei drucken“!', en: 'Just choose "Print file"!' },
        ],
      },
      {
        de: 'der Drucker',
        pron: 'dair DROOK-er',
        grammar: 'pl. die Drucker',
        en: 'printer',
        examples: [
          { de: 'Mein Drucker ist kaputt.', en: 'My printer is broken.' },
        ],
      },
      {
        de: 'dumm',
        pron: 'doom',
        en: 'stupid',
        examples: [
          { de: 'Ich finde den Film dumm.', en: 'I think the film is stupid.' },
          { de: 'Entschuldigung, das war dumm von mir.', en: 'Sorry, that was stupid of me.' },
          { de: 'Das ist mir zu dumm.', en: 'I\'ve had enough of this.' },
        ],
      },
      {
        de: 'dunkel',
        pron: 'DOON-kel',
        en: 'dark',
        examples: [
          { de: 'Um sechs Uhr ist es schon dunkel.', en: 'It\'s already dark at six o\'clock.' },
          { de: 'Meine Schwester hat dunkle Haare.', en: 'My sister has dark hair.' },
          { de: 'Ich will eine dunkelblaue Bluse kaufen.', en: 'I want to buy a dark blue blouse.' },
        ],
      },
      {
        de: 'dünn',
        pron: 'dewn',
        en: 'thin',
        examples: [
          { de: 'Das Buch ist sehr dünn. Es hat nur 40 Seiten.', en: 'The book is very thin. It only has 40 pages.' },
          { de: 'Mein Bruder ist 1,80 Meter groß und 62 Kilo schwer, er ist zu dünn.', en: 'My brother is 1.80 metres tall and weighs 62 kilos – he\'s too thin.' },
        ],
      },
      {
        de: 'durch',
        pron: 'doorkh',
        en: 'through',
        examples: [
          { de: 'Am besten gehen Sie durch die Tengstraße.', en: 'It\'s best to go through Tengstraße.' },
          { de: 'Wir fahren mit dem Fahrrad durch den Wald.', en: 'We\'re cycling through the forest.' },
        ],
      },
      {
        de: 'dürfen',
        pron: 'DEWR-fen',
        grammar: 'darf · durfte · hat gedurft',
        en: 'to be allowed to, may',
        examples: [
          { de: 'Sie dürfen hier nicht parken.', en: 'You\'re not allowed to park here.' },
          { de: 'Dürfen wir heute länger fernsehen?', en: 'Can we watch TV longer today?' },
          { de: 'Darf ich Sie zu einem Kaffee einladen?', en: 'May I invite you for a coffee?' },
        ],
      },
      {
        de: 'der Durst',
        pron: 'dair doorst',
        grammar: 'no plural',
        en: 'thirst',
        examples: [
          { de: 'Hast du etwas zu trinken? Ich habe großen Durst.', en: 'Do you have something to drink? I\'m very thirsty.' },
        ],
      },
      {
        de: 'die Dusche',
        pron: 'dee DOO-shuh',
        grammar: 'pl. die Duschen',
        en: 'shower',
        examples: [
          { de: 'Unsere Wohnung hat nur eine Dusche.', en: 'Our flat only has a shower.' },
        ],
      },
      {
        de: 'duschen (sich)',
        pron: 'DOO-shen (zikh)',
        grammar: 'duscht · hat geduscht',
        en: 'to shower, to take a shower',
        examples: [
          { de: 'Ich bade nicht so gern, ich dusche lieber.', en: 'I don\'t like baths that much, I prefer to shower.' },
          { de: 'Möchten Sie sich duschen? Das Badezimmer ist dort hinten links.', en: 'Would you like to take a shower? The bathroom is back there on the left.' },
        ],
      },
    ],
  },
  {
    letter: 'E',
    entries: [
      {
        de: 'das E-Book',
        pron: 'dahs EE-book',
        grammar: 'pl. die E-Books',
        en: 'e-book',
        examples: [
          { de: 'Liest du lieber E-Books oder Bücher aus Papier?', en: 'Do you prefer reading e-books or paper books?' },
          { de: 'Entschuldigung, kann man hier E-Books kaufen?', en: 'Excuse me, can you buy e-books here?' },
        ],
      },
      {
        de: 'echt',
        pron: 'ekht',
        en: 'real, genuine; really',
        examples: [
          { de: 'Ist das Bild ein echter Picasso?', en: 'Is the painting a real Picasso?' },
          { de: 'Der Film ist echt gut.', en: 'The film is really good.' },
        ],
      },
      {
        de: 'die Ecke',
        pron: 'dee EK-uh',
        grammar: 'pl. die Ecken',
        en: 'corner',
        examples: [
          { de: 'Gehen Sie an der nächsten Ecke links. Dann kommen Sie zur Apotheke.', en: 'Turn left at the next corner. Then you\'ll come to the pharmacy.' },
          { de: 'Wir stellen das Regal in die Ecke.', en: 'We\'ll put the shelf in the corner.' },
        ],
      },
      {
        de: 'egal',
        pron: 'ay-GAHL',
        en: 'all the same, doesn\'t matter',
        examples: [
          { de: 'Das ist mir egal.', en: 'I don\'t care.' },
          { de: 'Willst du Tee oder Kaffee trinken? – Egal.', en: 'Do you want tea or coffee? – Doesn\'t matter.' },
        ],
      },
      {
        de: 'die Ehefrau / der Ehemann',
        pron: 'dee AY-uh-frow / dair AY-uh-mahn',
        grammar: 'pl. die Ehefrauen / die Ehemänner',
        en: 'wife / husband',
        examples: [
          { de: 'Das ist mein Ehemann/meine Ehefrau.', en: 'This is my husband/my wife.' },
        ],
      },
      {
        de: 'der Ehepartner',
        pron: 'dair AY-uh-part-ner',
        grammar: 'pl. die Ehepartner',
        en: 'spouse',
        examples: [
          { de: 'Das ist mein Ehemann/meine Ehefrau.', en: 'This is my husband/my wife.' },
        ],
      },
      {
        de: 'das Ei',
        pron: 'dahs eye',
        grammar: 'pl. die Eier',
        en: 'egg',
        examples: [
          { de: 'Möchtest du ein Ei zum Frühstück?', en: 'Would you like an egg for breakfast?' },
        ],
      },
      {
        de: 'eigen-',
        pron: 'EYE-gen-',
        en: 'own',
        examples: [
          { de: 'Nicht alle Kinder haben ein eigenes Zimmer.', en: 'Not all children have their own room.' },
        ],
      },
      {
        de: 'eigentlich',
        pron: 'EYE-gent-likh',
        en: 'actually; by the way',
        examples: [
          { de: 'Wir wollten eigentlich Freunde besuchen, aber dann sind wir doch zu Hause geblieben.', en: 'We actually wanted to visit friends, but then we stayed at home after all.' },
          { de: 'Kennst du eigentlich Susanne?', en: 'By the way, do you know Susanne?' },
        ],
      },
      {
        de: 'eilig',
        pron: 'EYE-likh',
        en: 'hurried, urgent',
        examples: [
          { de: 'Hast du es eilig?', en: 'Are you in a hurry?' },
        ],
      },
      {
        de: 'einfach',
        pron: 'AYN-fahkh',
        en: 'simple, easy; one-way (ticket); simply',
        examples: [
          { de: 'Die Prüfung ist ganz einfach.', en: 'The exam is quite easy.' },
          { de: 'Ich verstehe das nicht. Kannst du es bitte einfacher sagen?', en: 'I don\'t understand. Can you say it more simply, please?' },
          { de: 'Hin und zurück? – Nein, bitte nur eine einfache Fahrt nach Berlin.', en: 'Return? – No, just a one-way ticket to Berlin, please.' },
        ],
      },
      {
        de: 'der Eingang',
        pron: 'dair INE-gahng',
        grammar: 'pl. die Eingänge',
        en: 'entrance',
        examples: [
          { de: 'Der Eingang ist um die Ecke.', en: 'The entrance is around the corner.' },
        ],
      },
      {
        de: 'einig-',
        pron: 'AY-nikh-',
        en: 'some, a few',
        examples: [
          { de: 'In diesem Text sind einige Fehler.', en: 'There are some mistakes in this text.' },
          { de: 'Das dauert noch einige Zeit, bis das Essen fertig ist.', en: 'It\'ll be some time before the food is ready.' },
        ],
      },
      {
        de: 'einkaufen',
        pron: 'AYN-kow-fen',
        grammar: 'kauft ein · hat eingekauft',
        en: 'to shop, to go shopping',
        examples: [
          { de: 'Ich muss noch für morgen einkaufen.', en: 'I still have to do the shopping for tomorrow.' },
        ],
      },
      {
        de: 'das Einkaufszentrum',
        pron: 'dahs INE-kowfs-tsen-troom',
        grammar: 'pl. die Einkaufszentren',
        en: 'shopping centre, mall',
        examples: [
          { de: 'Kommst du morgen mit ins Einkaufszentrum?', en: 'Are you coming to the shopping centre with me tomorrow?' },
        ],
      },
      {
        de: 'einladen',
        pron: 'AYN-lah-den',
        grammar: 'lädt ein · hat eingeladen',
        en: 'to invite',
        examples: [
          { de: 'Darf ich Sie zu einem Kaffee einladen?', en: 'May I invite you for a coffee?' },
        ],
      },
      {
        de: 'die Einladung',
        pron: 'dee INE-lah-doong',
        grammar: 'pl. die Einladungen',
        en: 'invitation',
        examples: [
          { de: 'Danke für die Einladung zu deinem Geburtstag!', en: 'Thanks for the invitation to your birthday!' },
        ],
      },
      {
        de: 'einmal',
        pron: 'AYN-mahl',
        en: 'once; one time; ever',
        examples: [
          { de: 'Rufen Sie/Ruf mich bitte morgen noch einmal an.', en: 'Please call me again tomorrow.' },
          { de: 'Diese Prüfung mache ich nicht noch einmal.', en: 'I\'m not taking this exam again.' },
          { de: 'Warst du schon einmal in Paris?', en: 'Have you ever been to Paris?' },
        ],
      },
      {
        de: 'einpacken',
        pron: 'AYN-pahk-en',
        grammar: 'packt ein · hat eingepackt',
        en: 'to pack; to wrap',
        examples: [
          { de: 'Pack bitte die Handtücher ein!', en: 'Please pack the towels!' },
          { de: 'Soll ich Ihnen das als Geschenk einpacken?', en: 'Shall I gift-wrap that for you?' },
        ],
      },
      {
        de: 'einsteigen',
        pron: 'AYN-shty-gen',
        grammar: 'steigt ein · ist eingestiegen',
        en: 'to get on/in (a vehicle), to board',
        examples: [
          { de: 'Schnell, steig ein, der Zug fährt gleich ab.', en: 'Quick, get on, the train is about to leave.' },
          { de: 'Bitte ab 20 Uhr vorn im Bus einsteigen.', en: 'From 8 pm, please board the bus at the front.' },
        ],
      },
      {
        de: 'eintragen (sich)',
        pron: 'AYN-trah-gen (zikh)',
        grammar: 'trägt ein · hat eingetragen',
        en: 'to enter, to fill in; to sign up',
        examples: [
          { de: 'Tragen Sie sich bitte in diese Liste ein!', en: 'Please put your name on this list!' },
          { de: 'Sie müssen Ihren Namen und Ihre Adresse eintragen.', en: 'You have to enter your name and address.' },
        ],
      },
      {
        de: 'der Eintritt',
        pron: 'dair INE-trit',
        grammar: 'pl. die Eintritte',
        en: 'admission, entry (fee)',
        examples: [
          { de: 'Der Eintritt kostet fünf Euro.', en: 'Admission costs five euros.' },
          { de: 'Der Eintritt ist frei. Sie müssen nichts bezahlen.', en: 'Admission is free. You don\'t have to pay anything.' },
        ],
      },
      {
        de: 'einverstanden sein',
        pron: 'AYN-fer-shtahn-den zine',
        grammar: 'ist einverstanden · war einverstanden · ist einverstanden gewesen',
        en: 'to agree, to be OK with',
        examples: [
          { de: 'Als Termin schlage ich den 11. Juni vor. – Gut, (ich bin) einverstanden.', en: 'I suggest 11 June for the appointment. – Fine, agreed.' },
          { de: 'Bist du einverstanden, wenn wir bald nach Hause gehen?', en: 'Is it OK with you if we go home soon?' },
        ],
      },
      {
        de: 'einzel-',
        pron: 'INE-tsel-',
        en: 'single, individual',
        examples: [
          { de: 'Nicht alle zusammen. Könnt ihr bitte einzeln sprechen?', en: 'Not all at once. Can you speak one at a time, please?' },
          { de: 'Florian ist ein Einzelkind. Er hat keine Geschwister.', en: 'Florian is an only child. He has no brothers or sisters.' },
          { de: 'Ein Einzelzimmer ist noch frei.', en: 'One single room is still available.' },
        ],
      },
      {
        de: 'einziehen',
        pron: 'AYN-tsee-en',
        grammar: 'zieht ein · ist eingezogen',
        en: 'to move in',
        examples: [
          { de: 'Im Juni ziehen unsere neuen Nachbarn ein.', en: 'Our new neighbours are moving in in June.' },
          { de: 'Wann können wir in die Wohnung einziehen?', en: 'When can we move into the flat?' },
        ],
      },
      {
        de: 'das Eis',
        pron: 'dahs ice',
        grammar: 'no plural',
        en: 'ice cream; ice',
        examples: [
          { de: 'Möchtest du auch ein Eis?', en: 'Would you like an ice cream too?' },
        ],
      },
      {
        de: 'die (E-)Mail',
        pron: 'dee (EE-)mayl',
        grammar: 'pl. die (E-)Mails',
        en: 'e-mail',
        examples: [
          { de: 'Ich schreibe Ihnen/dir eine E-Mail.', en: 'I\'ll write you an e-mail.' },
        ],
      },
      {
        de: 'der Empfänger',
        pron: 'dair emp-FENG-er',
        grammar: 'pl. die Empfänger',
        en: 'recipient',
        examples: [
          { de: 'Auf dem Brief steht dein Name, also bist du der Empfänger.', en: 'Your name is on the letter, so you\'re the recipient.' },
        ],
      },
      {
        de: 'empfehlen',
        pron: 'emp-FAY-len',
        grammar: 'empfiehlt · hat empfohlen',
        en: 'to recommend',
        examples: [
          { de: 'Welchen Wein können Sie mir empfehlen?', en: 'Which wine can you recommend?' },
        ],
      },
      {
        de: 'das Ende',
        pron: 'dahs EN-duh',
        grammar: 'pl. die Enden',
        en: 'end',
        examples: [
          { de: 'Sie wohnt am Ende der Straße.', en: 'She lives at the end of the street.' },
          { de: 'Er bekommt sein Geld am Monatsende.', en: 'He gets his money at the end of the month.' },
        ],
      },
      {
        de: 'enden',
        pron: 'EN-den',
        grammar: 'endet · hat geendet',
        en: 'to end',
        examples: [
          { de: 'Die Straße endet hier.', en: 'The street ends here.' },
          { de: 'Der Kurs endet in einer Woche.', en: 'The course ends in a week.' },
        ],
      },
      {
        de: 'endlich',
        pron: 'ENT-likh',
        en: 'finally, at last',
        examples: [
          { de: 'Wann kommst du endlich? Der Film fängt gleich an.', en: 'When are you finally coming? The film is about to start.' },
          { de: 'Endlich bist du da!', en: 'At last you\'re here!' },
        ],
      },
      {
        de: 'eng',
        pron: 'eng',
        en: 'tight; narrow',
        examples: [
          { de: 'Diese Hose ist zu eng. Gibt es sie auch eine Nummer größer?', en: 'These trousers are too tight. Do you have them one size bigger?' },
        ],
      },
      {
        de: 'entschuldigen (sich)',
        pron: 'ent-SHOOL-dee-gen (zikh)',
        grammar: 'entschuldigt · hat entschuldigt',
        en: 'to excuse; to apologize',
        examples: [
          { de: 'Entschuldigen Sie bitte!', en: 'Excuse me, please!' },
          { de: 'Ich möchte mich bei dir entschuldigen.', en: 'I\'d like to apologize to you.' },
        ],
      },
      {
        de: 'die Entschuldigung',
        pron: 'dee ent-SHOOL-di-goong',
        grammar: 'pl. die Entschuldigungen',
        en: 'apology; excuse me, sorry',
        examples: [
          { de: 'Oh, Entschuldigung! – Macht nichts. Kein Problem.', en: 'Oh, sorry! – Never mind. No problem.' },
        ],
      },
      {
        de: 'das Erdgeschoss',
        pron: 'dahs AIRT-guh-shos',
        grammar: 'pl. die Erdgeschosse',
        en: 'ground floor',
        examples: [
          { de: 'Ich wohne im Erdgeschoss.', en: 'I live on the ground floor.' },
        ],
      },
      {
        de: 'die Erfahrung',
        pron: 'dee air-FAH-roong',
        grammar: 'pl. die Erfahrungen',
        en: 'experience',
        examples: [
          { de: 'Ich habe zehn Jahre Erfahrung in diesem Beruf.', en: 'I have ten years\' experience in this profession.' },
        ],
      },
      {
        de: 'erinnern (sich)',
        pron: 'air-IN-ern (zikh)',
        grammar: 'erinnert · hat erinnert',
        en: 'to remember; to remind',
        examples: [
          { de: 'Erinnerst du dich an José? – Nein, ich erinnere mich nicht an ihn, tut mir leid.', en: 'Do you remember José? – No, I don\'t remember him, sorry.' },
          { de: 'Kannst du mich morgen bitte an meinen Arzttermin erinnern?', en: 'Can you remind me about my doctor\'s appointment tomorrow?' },
        ],
      },
      {
        de: 'erkältet sein',
        pron: 'air-KEL-tet zine',
        grammar: 'ist erkältet · war erkältet · ist erkältet gewesen',
        en: 'to have a cold',
        examples: [
          { de: 'Lisa ist erkältet. Sie kann heute nicht zur Schule gehen.', en: 'Lisa has a cold. She can\'t go to school today.' },
        ],
      },
      {
        de: 'erklären',
        pron: 'air-KLAIR-en',
        grammar: 'erklärt · hat erklärt',
        en: 'to explain',
        examples: [
          { de: 'Ich verstehe das nicht. Kannst du mir das erklären?', en: 'I don\'t understand. Can you explain it to me?' },
        ],
      },
      {
        de: 'erlauben',
        pron: 'air-LOW-ben',
        grammar: 'erlaubt · hat erlaubt',
        en: 'to allow, to permit',
        examples: [
          { de: 'Meine Kinder dürfen diesen Film sehen. Ich habe es ihnen erlaubt.', en: 'My children may watch this film. I\'ve allowed them to.' },
        ],
      },
      {
        de: 'erlaubt sein',
        pron: 'air-LOWPT zine',
        grammar: 'ist erlaubt · war erlaubt · ist erlaubt gewesen',
        en: 'to be allowed',
        examples: [
          { de: 'Parken ist hier nicht erlaubt.', en: 'Parking is not allowed here.' },
        ],
      },
      {
        de: 'die Erlaubnis',
        pron: 'dee air-LOWP-nis',
        grammar: 'no plural',
        en: 'permission, permit',
        examples: [
          { de: 'Haben Sie eine Arbeitserlaubnis?', en: 'Do you have a work permit?' },
        ],
      },
      {
        de: 'die Ermäßigung',
        pron: 'dee air-MAY-si-goong',
        grammar: 'pl. die Ermäßigungen',
        en: 'discount, reduction',
        examples: [
          { de: 'Für Schüler, Studenten und Rentner gibt es eine Ermäßigung.', en: 'There\'s a discount for pupils, students and pensioners.' },
        ],
      },
      {
        de: 'erreichen',
        pron: 'air-RY-khen',
        grammar: 'erreicht · hat erreicht',
        en: 'to reach; to catch (a train)',
        examples: [
          { de: 'Wenn wir uns beeilen, erreichen wir noch den Zug um acht Uhr.', en: 'If we hurry, we\'ll still catch the eight o\'clock train.' },
          { de: 'Bis 18 Uhr können Sie mich im Büro erreichen.', en: 'You can reach me at the office until 6 pm.' },
        ],
      },
      {
        de: 'erst',
        pron: 'airst',
        en: 'only, not until; first',
        examples: [
          { de: 'Wir können erst morgen kommen.', en: 'We can\'t come until tomorrow.' },
          { de: 'Dina ist keine 18, sie ist erst 16 Jahre alt.', en: 'Dina isn\'t 18, she\'s only 16.' },
        ],
      },
      {
        de: 'der Erwachsene',
        pron: 'dair air-VAHK-suh-nuh',
        grammar: 'pl. die Erwachsenen',
        en: 'adult',
        examples: [
          { de: 'Erwachsene zahlen zehn Euro, für Kinder ist der Eintritt frei.', en: 'Adults pay ten euros; admission is free for children.' },
          { de: 'Dieser Film ist nur für Erwachsene.', en: 'This film is for adults only.' },
        ],
      },
      {
        de: 'erzählen',
        pron: 'air-TSAY-len',
        grammar: 'erzählt · hat erzählt',
        en: 'to tell',
        examples: [
          { de: 'Wir müssen euch etwas erzählen!', en: 'We have to tell you something!' },
          { de: 'Erzählst du mir eine Geschichte?', en: 'Will you tell me a story?' },
        ],
      },
      {
        de: 'essen',
        pron: 'ES-en',
        grammar: 'isst · hat gegessen',
        en: 'to eat',
        examples: [
          { de: 'Was gibt es zu essen?', en: 'What is there to eat?' },
        ],
      },
      {
        de: 'das Essen',
        pron: 'dahs ES-en',
        grammar: 'pl. die Essen',
        en: 'food; meal',
        examples: [
          { de: 'Das Essen in der Cafeteria ist meistens ganz gut.', en: 'The food in the cafeteria is usually quite good.' },
          { de: 'Darf ich Sie zum Essen einladen?', en: 'May I invite you for a meal?' },
        ],
      },
      {
        de: 'etwas',
        pron: 'ET-vahs',
        en: 'something; some, a little',
        examples: [
          { de: 'Ich muss dir etwas erzählen!', en: 'I have to tell you something!' },
          { de: 'Haben Sie etwas zum Schreiben?', en: 'Do you have something to write with?' },
          { de: 'Ich habe leider nur Tee. Etwas anderes kann ich dir leider nicht anbieten.', en: 'Sorry, I only have tea. I\'m afraid I can\'t offer you anything else.' },
        ],
      },
    ],
  },
  {
    letter: 'F',
    entries: [
      {
        de: 'das Fach',
        pron: 'dahs fahkh',
        grammar: 'pl. die Fächer',
        en: '(school) subject; compartment',
        examples: [
          { de: 'Welches Fach magst du in der Schule am liebsten?', en: 'Which subject do you like best at school?' },
        ],
      },
      {
        de: '(ab)fahren',
        pron: '(AHP-)fah-ren',
        grammar: 'fährt (ab) · ist (ab)gefahren',
        en: 'to drive, to go; to depart',
        examples: [
          { de: 'Ich fahre mit dem Auto zur Arbeit.', en: 'I drive to work.' },
          { de: 'Achtung an Gleis 17! Der Zug München – Paris fährt jetzt ab.', en: 'Attention, platform 17! The Munich–Paris train is now departing.' },
        ],
      },
      {
        de: 'die Abfahrt',
        pron: 'dee AHP-fahrt',
        grammar: 'pl. die Abfahrten',
        en: 'departure',
        examples: [
          { de: 'Wir haben noch zwanzig Minuten bis zur Abfahrt.', en: 'We still have twenty minutes until departure.' },
        ],
      },
      {
        de: 'die Fahrkarte',
        pron: 'dee FAHR-kar-tuh',
        grammar: 'pl. die Fahrkarten',
        en: 'ticket (travel)',
        examples: [
          { de: 'Hast du schon eine Fahrkarte?', en: 'Do you already have a ticket?' },
          { de: 'Ihre Fahrkarten, bitte!', en: 'Your tickets, please!' },
        ],
      },
      {
        de: 'der Fahrplan',
        pron: 'dair FAHR-plahn',
        grammar: 'pl. die Fahrpläne',
        en: 'timetable',
        examples: [
          { de: 'Ist das der neue Fahrplan?', en: 'Is that the new timetable?' },
        ],
      },
      {
        de: 'das (Fahr)Rad',
        pron: 'dahs (FAHR-)raht',
        grammar: 'pl. die (Fahr)Räder',
        en: 'bicycle, bike',
        examples: [
          { de: 'Wenn es nicht regnet, fahre ich mit dem Fahrrad.', en: 'If it doesn\'t rain, I go by bike.' },
        ],
      },
      {
        de: 'fallen',
        pron: 'FAHL-en',
        grammar: 'fällt · ist gefallen',
        en: 'to fall',
        examples: [
          { de: 'Pass auf, das Glas fällt gleich vom Tisch.', en: 'Watch out, the glass is about to fall off the table.' },
        ],
      },
      {
        de: 'falsch',
        pron: 'fahlsh',
        en: 'wrong',
        examples: [
          { de: 'Die Lösung ist falsch.', en: 'The answer is wrong.' },
          { de: 'Sie haben die falsche Nummer gewählt.', en: 'You\'ve dialled the wrong number.' },
        ],
      },
      {
        de: 'die Familie',
        pron: 'dee fah-MEE-lee-uh',
        grammar: 'pl. die Familien',
        en: 'family',
        examples: [
          { de: 'Meine Familie lebt in Spanien.', en: 'My family lives in Spain.' },
          { de: 'Ich habe eine große Familie.', en: 'I have a big family.' },
        ],
      },
      {
        de: 'der Familienname',
        pron: 'dair fah-MEE-lee-en-nah-muh',
        grammar: 'pl. die Familiennamen',
        en: 'surname, family name',
        examples: [
          { de: 'Mein Familienname ist González.', en: 'My surname is González.' },
        ],
      },
      {
        de: 'der Fan',
        pron: 'dair fen',
        grammar: 'pl. die Fans',
        en: 'fan',
        examples: [
          { de: 'Er ist ein großer Fußballfan.', en: 'He\'s a big football fan.' },
          { de: 'Bella ist ein Fan von Rammstein.', en: 'Bella is a Rammstein fan.' },
        ],
      },
      {
        de: 'fantastisch',
        pron: 'fahn-TAHS-tish',
        en: 'fantastic',
        examples: [
          { de: 'Dein neues Kleid sieht fantastisch aus!', en: 'Your new dress looks fantastic!' },
          { de: 'Das Buch ist fantastisch. Du musst es unbedingt lesen!', en: 'The book is fantastic. You absolutely have to read it!' },
        ],
      },
      {
        de: 'die Farbe',
        pron: 'dee FAR-buh',
        grammar: 'pl. die Farben',
        en: 'colour',
        examples: [
          { de: 'Die Farbe gefällt mir gut.', en: 'I really like the colour.' },
          { de: 'Was ist deine Lieblingsfarbe?', en: 'What\'s your favourite colour?' },
        ],
      },
      {
        de: 'fast',
        pron: 'fahst',
        en: 'almost, nearly',
        examples: [
          { de: 'Der Film ist fast zu Ende.', en: 'The film is almost over.' },
          { de: 'Ich habe fast alles verstanden.', en: 'I understood almost everything.' },
        ],
      },
      {
        de: 'faul',
        pron: 'fowl',
        en: 'lazy',
        examples: [
          { de: 'Heute sind wir faul: Wir machen keine Hausaufgaben und arbeiten nicht.', en: 'Today we\'re lazy: we\'re not doing homework and we\'re not working.' },
        ],
      },
      {
        de: 'fehlen',
        pron: 'FAY-len',
        grammar: 'fehlt · hat gefehlt',
        en: 'to be missing, to be absent',
        examples: [
          { de: 'Herr Müller ist nicht da, er fehlt schon seit drei Tagen.', en: 'Mr Müller isn\'t here – he\'s been absent for three days.' },
          { de: 'Was fehlt Ihnen?', en: 'What\'s wrong with you?' },
        ],
      },
      {
        de: 'der Fehler',
        pron: 'dair FAY-ler',
        grammar: 'pl. die Fehler',
        en: 'mistake, error',
        examples: [
          { de: 'Diesen Fehler mache ich immer wieder.', en: 'I keep making this mistake.' },
        ],
      },
      {
        de: 'die Feier (z. B. Feierabend, Feiertag)',
        pron: 'dee FY-er (tsoom BY-shpeel FY-er-ah-bent, FY-er-tahk)',
        grammar: 'pl. die Feiern',
        en: 'party, celebration',
        examples: [
          { de: 'Wann hast du Feierabend?', en: 'When do you finish work?' },
          { de: 'Am ersten Mai ist ein Feiertag.', en: 'The first of May is a public holiday.' },
        ],
      },
      {
        de: 'feiern',
        pron: 'FY-ern',
        grammar: 'feiert · hat gefeiert',
        en: 'to celebrate',
        examples: [
          { de: 'Wir feiern heute meinen Geburtstag.', en: 'We\'re celebrating my birthday today.' },
          { de: 'Die Feier war sehr schön.', en: 'The party was very nice.' },
        ],
      },
      {
        de: 'das Fenster',
        pron: 'dahs FEN-ster',
        grammar: 'pl. die Fenster',
        en: 'window',
        examples: [
          { de: 'Kannst du bitte das Fenster öffnen?', en: 'Can you open the window, please?' },
        ],
      },
      {
        de: 'die Ferien',
        pron: 'dee FAY-ree-en',
        grammar: 'plural only',
        en: 'holidays, vacation',
        examples: [
          { de: 'Bald haben wir Ferien.', en: 'Soon we\'ll have holidays.' },
          { de: 'Fährst du in den Ferien weg oder bleibst du zu Hause?', en: 'Are you going away for the holidays or staying at home?' },
        ],
      },
      {
        de: 'fernsehen',
        pron: 'FERN-zay-en',
        grammar: 'sieht fern · hat ferngesehen',
        en: 'to watch TV',
        examples: [
          { de: 'Lass uns heute Abend mal fernsehen.', en: 'Let\'s watch TV this evening.' },
        ],
      },
      {
        de: 'der Fernseher',
        pron: 'dair FAIRN-zay-er',
        grammar: 'pl. die Fernseher',
        en: 'TV set',
        examples: [
          { de: 'Der Fernseher ist kaputt.', en: 'The TV is broken.' },
        ],
      },
      {
        de: 'fertig sein',
        pron: 'FAIR-tikh zine',
        grammar: 'ist fertig · war fertig · ist fertig gewesen',
        en: 'to be ready; to be finished',
        examples: [
          { de: 'Das Essen ist gleich fertig. Kommst du?', en: 'The food is almost ready. Are you coming?' },
          { de: 'Wir müssen gleich gehen. Bist du fertig?', en: 'We have to go soon. Are you ready?' },
        ],
      },
      {
        de: 'das Fest',
        pron: 'dahs fest',
        grammar: 'pl. die Feste',
        en: 'celebration, party; festival',
        examples: [
          { de: 'Frohes Fest!', en: 'Happy holidays!' },
          { de: 'Am Wochenende feiern wir ein Fest. Meine Tochter hat Geburtstag.', en: 'We\'re having a party at the weekend. It\'s my daughter\'s birthday.' },
        ],
      },
      {
        de: 'das Festival',
        pron: 'dahs FES-tee-vahl',
        grammar: 'pl. die Festivals',
        en: 'festival',
        examples: [
          { de: 'Am Wochenende ist in der Stadt ein Musik-Festival.', en: 'There\'s a music festival in town at the weekend.' },
        ],
      },
      {
        de: 'fett',
        pron: 'fet',
        en: 'fatty, greasy',
        examples: [
          { de: 'Die Wurst ist mir zu fett.', en: 'The sausage is too fatty for me.' },
        ],
      },
      {
        de: 'das Fieber',
        pron: 'dahs FEE-ber',
        grammar: 'no plural',
        en: 'fever, temperature',
        examples: [
          { de: 'Sie hat hohes Fieber.', en: 'She has a high fever.' },
        ],
      },
      {
        de: 'der Film',
        pron: 'dair film',
        grammar: 'pl. die Filme',
        en: 'film, movie',
        examples: [
          { de: 'Ich möchte gern diesen Film sehen.', en: 'I\'d like to see this film.' },
        ],
      },
      {
        de: 'finden',
        pron: 'FIN-den',
        grammar: 'findet · hat gefunden',
        en: 'to find; to think (opinion)',
        examples: [
          { de: 'Wir müssen den Schlüssel finden.', en: 'We have to find the key.' },
          { de: 'Ich finde es nicht gut, dass du so viel arbeitest.', en: 'I don\'t think it\'s good that you work so much.' },
          { de: 'Ich finde ihn sehr nett.', en: 'I think he\'s very nice.' },
        ],
      },
      {
        de: 'die Firma',
        pron: 'dee FIR-mah',
        grammar: 'pl. die Firmen',
        en: 'company, firm',
        examples: [
          { de: 'Er arbeitet jetzt bei einer anderen Firma.', en: 'He works for a different company now.' },
        ],
      },
      {
        de: 'der Fisch',
        pron: 'dair fish',
        grammar: 'pl. die Fische',
        en: 'fish',
        examples: [
          { de: 'Fisch mag ich lieber als Fleisch.', en: 'I like fish more than meat.' },
        ],
      },
      {
        de: 'fit sein',
        pron: 'fit zine',
        grammar: 'ist fit · war fit · ist fit gewesen',
        en: 'to be fit',
        examples: [
          { de: 'Tom will fit sein. Er geht jeden Tag ins Fitnessstudio.', en: 'Tom wants to be fit. He goes to the gym every day.' },
        ],
      },
      {
        de: 'die Flasche',
        pron: 'dee FLAH-shuh',
        grammar: 'pl. die Flaschen',
        en: 'bottle',
        examples: [
          { de: 'Eine Flasche Mineralwasser, bitte!', en: 'A bottle of mineral water, please!' },
        ],
      },
      {
        de: 'das Fleisch',
        pron: 'dahs flysh',
        grammar: 'no plural',
        en: 'meat',
        examples: [
          { de: 'Fleisch mag ich nicht.', en: 'I don\'t like meat.' },
        ],
      },
      {
        de: 'fleißig',
        pron: 'FLY-sikh',
        en: 'hard-working',
        examples: [
          { de: 'Ibrahim ist sehr fleißig. Er macht immer seine Hausaufgaben.', en: 'Ibrahim is very hard-working. He always does his homework.' },
        ],
      },
      {
        de: '(ab)fliegen',
        pron: '(AHP-)flee-gen',
        grammar: 'fliegt (ab) · ist (ab)geflogen',
        en: 'to fly; to fly out, take off',
        examples: [
          { de: 'Ich fliege nicht gern; ich fahre lieber mit dem Zug.', en: 'I don\'t like flying; I prefer to go by train.' },
          { de: 'Ich fliege in den Ferien nach Spanien.', en: 'I\'m flying to Spain for the holidays.' },
          { de: 'Wann fliegst du ab?', en: 'When do you fly out?' },
        ],
      },
      {
        de: 'der Flohmarkt',
        pron: 'dair FLOH-markt',
        grammar: 'pl. die Flohmärkte',
        en: 'flea market',
        examples: [
          { de: 'Ich gehe gern auf den Flohmarkt.', en: 'I like going to the flea market.' },
          { de: 'Diesen Hut habe ich auf dem Flohmarkt gekauft.', en: 'I bought this hat at the flea market.' },
        ],
      },
      {
        de: 'der Flug',
        pron: 'dair flook',
        grammar: 'pl. die Flüge',
        en: 'flight',
        examples: [
          { de: 'Ich möchte einen Flug nach Kanada buchen.', en: 'I\'d like to book a flight to Canada.' },
          { de: 'Der Flug LH123 von München nach Frankfurt ist um 21:00 Uhr.', en: 'Flight LH123 from Munich to Frankfurt is at 9 pm.' },
        ],
      },
      {
        de: 'der Flughafen',
        pron: 'dair FLOOK-hah-fen',
        grammar: 'pl. die Flughäfen',
        en: 'airport',
        examples: [
          { de: 'Kannst du mich zum Flughafen bringen?', en: 'Can you take me to the airport?' },
        ],
      },
      {
        de: 'das Flugzeug',
        pron: 'dahs FLOOK-tsoyk',
        grammar: 'pl. die Flugzeuge',
        en: 'plane, aeroplane',
        examples: [
          { de: 'Das Flugzeug aus Berlin hat Verspätung.', en: 'The plane from Berlin is delayed.' },
          { de: 'Das Flugzeug startet in einer halben Stunde. Wir müssen uns beeilen.', en: 'The plane takes off in half an hour. We have to hurry.' },
        ],
      },
      {
        de: 'der Fluss',
        pron: 'dair flooss',
        grammar: 'pl. die Flüsse',
        en: 'river',
        examples: [
          { de: 'Der Rhein ist ein großer Fluss.', en: 'The Rhine is a big river.' },
        ],
      },
      {
        de: 'das Formular',
        pron: 'dahs for-moo-LAHR',
        grammar: 'pl. die Formulare',
        en: 'form (to fill in)',
        examples: [
          { de: 'Sie müssen dieses Formular ausfüllen.', en: 'You have to fill in this form.' },
        ],
      },
      {
        de: 'der Fotoapparat',
        pron: 'dair FOH-toh-ah-pah-raht',
        grammar: 'pl. die Fotoapparate',
        en: 'camera',
        examples: [
          { de: 'Ich möchte mir einen Fotoapparat kaufen.', en: 'I\'d like to buy myself a camera.' },
        ],
      },
      {
        de: 'fotografieren',
        pron: 'foh-toh-grah-FEE-ren',
        grammar: 'fotografiert · hat fotografiert',
        en: 'to take photos, to photograph',
        examples: [
          { de: 'Ich fotografiere gern.', en: 'I like taking photos.' },
        ],
      },
      {
        de: 'das Foto',
        pron: 'dahs FOH-toh',
        grammar: 'pl. die Fotos',
        en: 'photo',
        examples: [
          { de: 'Darf ich ein Foto machen?', en: 'May I take a photo?' },
        ],
      },
      {
        de: 'die Frage',
        pron: 'dee FRAH-guh',
        grammar: 'pl. die Fragen',
        en: 'question',
        examples: [
          { de: 'Ich habe eine Frage.', en: 'I have a question.' },
        ],
      },
      {
        de: 'fragen',
        pron: 'FRAH-gen',
        grammar: 'fragt · hat gefragt',
        en: 'to ask',
        examples: [
          { de: 'Er fragt, wann er kommen kann.', en: 'He\'s asking when he can come.' },
          { de: 'Ich möchte Sie etwas fragen.', en: 'I\'d like to ask you something.' },
        ],
      },
      {
        de: 'die Frau',
        pron: 'dee frow',
        grammar: 'pl. die Frauen',
        en: 'woman; wife; Mrs, Ms',
        examples: [
          { de: 'Das ist Frau Becker.', en: 'This is Ms Becker.' },
          { de: 'Guten Tag, Frau Schmitt!', en: 'Hello, Ms Schmitt!' },
          { de: 'Hier arbeiten mehr Frauen als Männer.', en: 'More women than men work here.' },
        ],
      },
      {
        de: 'frei',
        pron: 'fry',
        en: 'free; vacant; off (work)',
        examples: [
          { de: 'Entschuldigung, ist dieser Platz noch frei?', en: 'Excuse me, is this seat free?' },
          { de: 'Morgen haben wir frei.', en: 'We have the day off tomorrow.' },
          { de: 'Eintritt frei.', en: 'Admission free.' },
        ],
      },
      {
        de: 'freiwillig',
        pron: 'FRY-vil-ikh',
        en: 'voluntary, voluntarily',
        examples: [
          { de: 'Manchmal bleibe ich freiwillig länger im Büro.', en: 'Sometimes I stay longer at the office voluntarily.' },
        ],
      },
      {
        de: 'die Freizeit',
        pron: 'dee FRY-tsite',
        grammar: 'no plural',
        en: 'free time, leisure',
        examples: [
          { de: 'In meiner Freizeit spiele ich oft Fußball.', en: 'In my free time I often play football.' },
        ],
      },
      {
        de: 'fremd',
        pron: 'fremt',
        en: 'foreign; strange, unfamiliar',
        examples: [
          { de: 'Das weiß ich nicht; ich bin fremd hier.', en: 'I don\'t know; I\'m not from around here.' },
          { de: 'Ich reise gern in fremde Länder.', en: 'I like travelling to foreign countries.' },
        ],
      },
      {
        de: 'freuen (sich)',
        pron: 'FROY-en (zikh)',
        grammar: 'freut · hat gefreut',
        en: 'to be happy/pleased (about); to look forward (to)',
        examples: [
          { de: 'Zum Geburtstag habe ich ein interessantes Buch bekommen. Ich freue mich sehr über das Geschenk.', en: 'I got an interesting book for my birthday. I\'m very pleased with the present.' },
          { de: 'Die Kinder freuen sich schon auf die Ferien.', en: 'The children are already looking forward to the holidays.' },
          { de: 'Ich freue mich, weil ich heute mit meinen Freunden Fußball spiele.', en: 'I\'m happy because I\'m playing football with my friends today.' },
          { de: 'Es/Das freut mich!', en: 'I\'m glad (to hear that)!' },
        ],
      },
      {
        de: 'der Freund / die Freundin',
        pron: 'dair froynt / dee FROYN-din',
        grammar: 'pl. die Freunde / die Freundinnen',
        en: 'friend; boyfriend / girlfriend',
        examples: [
          { de: 'Das ist ein Freund von mir.', en: 'This is a friend of mine.' },
          { de: 'Das ist meine Freundin Susanne.', en: 'This is my girlfriend Susanne.' },
        ],
      },
      {
        de: 'freundlich',
        pron: 'FROYNT-likh',
        en: 'friendly, kind',
        examples: [
          { de: 'Er ist immer sehr freundlich zu mir.', en: 'He\'s always very friendly to me.' },
          { de: 'Mit freundlichen Grüßen', en: 'Kind regards' },
        ],
      },
      {
        de: 'frisch',
        pron: 'frish',
        en: 'fresh',
        examples: [
          { de: 'Das Brot ist noch ganz frisch. Ich habe es gerade gekauft.', en: 'The bread is still really fresh. I\'ve just bought it.' },
        ],
      },
      {
        de: 'froh',
        pron: 'froh',
        en: 'glad, happy',
        examples: [
          { de: 'Ich bin froh, dass du kommen kannst.', en: 'I\'m glad you can come.' },
          { de: 'Frohes Fest!', en: 'Happy holidays!' },
        ],
      },
      {
        de: 'früh',
        pron: 'frew',
        en: 'early',
        examples: [
          { de: 'Geht es auch später? Sechs Uhr ist mir zu früh.', en: 'Could we do it later? Six o\'clock is too early for me.' },
          { de: 'Ich muss morgen sehr früh aufstehen.', en: 'I have to get up very early tomorrow.' },
        ],
      },
      {
        de: 'früher',
        pron: 'FREW-er',
        en: 'earlier; in the past, used to',
        examples: [
          { de: 'Früher habe ich in Berlin gewohnt.', en: 'I used to live in Berlin.' },
          { de: 'Wir nehmen den früheren Zug.', en: 'We\'ll take the earlier train.' },
        ],
      },
      {
        de: 'das Frühstück',
        pron: 'dahs FREW-shtewk',
        grammar: 'no plural',
        en: 'breakfast',
        examples: [
          { de: 'Möchtest du ein Ei zum Frühstück?', en: 'Would you like an egg for breakfast?' },
        ],
      },
      {
        de: 'frühstücken',
        pron: 'FREW-shtewk-en',
        grammar: 'frühstückt · hat gefrühstückt',
        en: 'to have breakfast',
        examples: [
          { de: 'Ich frühstücke immer um 9:00 Uhr.', en: 'I always have breakfast at 9:00.' },
        ],
      },
      {
        de: 'fühlen (sich)',
        pron: 'FEW-len (zikh)',
        grammar: 'fühlt · hat gefühlt',
        en: 'to feel',
        examples: [
          { de: 'Wie fühlen Sie sich?', en: 'How are you feeling?' },
          { de: 'Ich fühle mich heute nicht gut.', en: 'I don\'t feel well today.' },
        ],
      },
      {
        de: 'der Führerschein',
        pron: 'dair FEW-rer-shine',
        grammar: 'pl. die Führerscheine',
        en: 'driving licence',
        examples: [
          { de: 'Hast du den Führerschein?', en: 'Do you have a driving licence?' },
          { de: 'Sie hat die Führerscheinprüfung bestanden.', en: 'She passed her driving test.' },
        ],
      },
      {
        de: 'die Führung',
        pron: 'dee FEW-roong',
        grammar: 'pl. die Führungen',
        en: 'guided tour',
        examples: [
          { de: 'Die nächste Führung beginnt um 15 Uhr.', en: 'The next guided tour starts at 3 pm.' },
        ],
      },
      {
        de: 'die Fundsachen',
        pron: 'dee FOONT-zah-khen',
        grammar: 'plural only',
        en: 'lost property',
        examples: [
          { de: 'Haben Sie meinen Schirm gefunden? – Sie können dort bei den Fundsachen schauen.', en: 'Have you found my umbrella? – You can look over there in the lost property.' },
        ],
      },
      {
        de: 'für',
        pron: 'fewr',
        en: 'for',
        examples: [
          { de: 'Das Paket ist für Sie.', en: 'The parcel is for you.' },
          { de: 'Das ist der Schlüssel für die Haustür.', en: 'This is the key for the front door.' },
          { de: 'Gibt es hier einen Sportverein für Jugendliche?', en: 'Is there a sports club for young people here?' },
        ],
      },
      {
        de: 'furchtbar',
        pron: 'FOORKHT-bar',
        en: 'terrible, awful',
        examples: [
          { de: 'Er hat furchtbare Schmerzen.', en: 'He\'s in terrible pain.' },
          { de: 'Die Hose sieht ja furchtbar aus. So kannst du nicht zur Arbeit gehen!', en: 'Those trousers look awful. You can\'t go to work like that!' },
        ],
      },
      {
        de: 'der Fuß',
        pron: 'dair fooss',
        grammar: 'pl. die Füße',
        en: 'foot',
        examples: [
          { de: 'Der linke Fuß tut mir weh.', en: 'My left foot hurts.' },
          { de: 'Gehen Sie zu Fuß zur Arbeit?', en: 'Do you walk to work?' },
        ],
      },
      {
        de: 'der Fußball',
        pron: 'dair FOOSS-bahl',
        grammar: 'pl. die Fußbälle',
        en: 'football, soccer',
        examples: [
          { de: 'Spielt ihr gern Fußball?', en: 'Do you like playing football?' },
        ],
      },
    ],
  },
  {
    letter: 'G',
    entries: [
      {
        de: 'die Gabel',
        pron: 'dee GAH-bel',
        grammar: 'pl. die Gabeln',
        en: 'fork',
        examples: [
          { de: 'Kann ich bitte eine Gabel haben?', en: 'Can I have a fork, please?' },
        ],
      },
      {
        de: 'ganz',
        pron: 'gahnts',
        en: 'whole, entire; quite; completely; intact',
        examples: [
          { de: 'Oh nein! Was ist passiert? Ist deine Brille jetzt kaputt? – Nein, zum Glück ist sie noch ganz!', en: 'Oh no! What happened? Are your glasses broken now? – No, luckily they\'re still in one piece!' },
          { de: 'Morgen haben wir den ganzen Tag Schule.', en: 'Tomorrow we have school all day.' },
          { de: 'Ich bin ganz sicher, dass dein Termin am Montag ist.', en: 'I\'m quite sure your appointment is on Monday.' },
          { de: 'Ich finde Lara ganz nett.', en: 'I think Lara is quite nice.' },
          { de: 'Oh, ich habe meinen Zahnarzttermin ganz vergessen.', en: 'Oh, I completely forgot my dentist appointment.' },
        ],
      },
      {
        de: 'die Garage',
        pron: 'dee gah-RAH-zhuh',
        grammar: 'pl. die Garagen',
        en: 'garage',
        examples: [
          { de: 'Hier ist eine Garage für dein Auto.', en: 'Here\'s a garage for your car.' },
        ],
      },
      {
        de: 'der Garten',
        pron: 'dair GAR-ten',
        grammar: 'pl. die Gärten',
        en: 'garden',
        examples: [
          { de: 'Wir haben leider keinen Garten.', en: 'Unfortunately we don\'t have a garden.' },
        ],
      },
      {
        de: 'der Gast',
        pron: 'dair gahst',
        grammar: 'pl. die Gäste',
        en: 'guest',
        examples: [
          { de: 'Heute Abend haben wir Gäste.', en: 'We have guests this evening.' },
        ],
      },
      {
        de: 'geben',
        pron: 'GAY-ben',
        grammar: 'gibt · hat gegeben',
        en: 'to give; es gibt = there is/are',
        examples: [
          { de: 'Kannst du mir mal deinen Stift geben?', en: 'Can you give me your pen?' },
          { de: 'Es gibt keine Karten mehr für das Konzert.', en: 'There are no more tickets for the concert.' },
        ],
      },
      {
        de: 'geboren',
        pron: 'guh-BOH-ren',
        en: 'born',
        examples: [
          { de: 'Ich bin in Zagreb geboren.', en: 'I was born in Zagreb.' },
          { de: 'Wann und wo sind Sie geboren?', en: 'When and where were you born?' },
        ],
      },
      {
        de: 'Geburts- (jahr, ort, tag)',
        pron: 'guh-BOORTS- (yahr, ort, tahk)',
        grammar: 'das Geburtsjahr, der Geburtsort, der Geburtstag · pl. -e',
        en: 'year / place / day of birth; birthday',
        examples: [
          { de: 'Das Geburtsjahr Ihres Sohnes, bitte?', en: 'Your son\'s year of birth, please?' },
          { de: 'Bitte tragen Sie Ihren Geburtsort noch ein.', en: 'Please also enter your place of birth.' },
          { de: 'Herzlichen Glückwunsch zum Geburtstag!', en: 'Happy birthday!' },
        ],
      },
      {
        de: 'geehrt-',
        pron: 'guh-AIRT-',
        en: 'honoured; Dear (in formal letters)',
        examples: [
          { de: 'Sehr geehrte Damen und Herren,', en: 'Dear Sir or Madam,' },
        ],
      },
      {
        de: 'gefährlich',
        pron: 'guh-FAIR-likh',
        en: 'dangerous',
        examples: [
          { de: 'Du darfst nicht bei Rot über die Straße gehen. Das ist gefährlich.', en: 'You mustn\'t cross the road when the light is red. That\'s dangerous.' },
        ],
      },
      {
        de: 'gefallen',
        pron: 'guh-FAHL-en',
        grammar: 'gefällt · hat gefallen',
        en: 'to please; to like (es gefällt mir = I like it)',
        examples: [
          { de: 'Das Bild gefällt mir.', en: 'I like the picture.' },
          { de: 'Wie gefällt es Ihnen in Berlin?', en: 'How do you like it in Berlin?' },
        ],
      },
      {
        de: 'gegen',
        pron: 'GAY-gen',
        en: 'against; into; for (an illness); versus',
        examples: [
          { de: 'Fahr nicht gegen den Baum!', en: 'Don\'t drive into the tree!' },
          { de: 'Ich bin gegen diesen Vorschlag.', en: 'I\'m against this suggestion.' },
          { de: 'Wer spielt gegen wen? – Bayern gegen Dortmund.', en: 'Who\'s playing whom? – Bayern against Dortmund.' },
          { de: 'Haben Sie etwas gegen Grippe?', en: 'Do you have anything for flu?' },
        ],
      },
      {
        de: 'das Gegenteil',
        pron: 'dahs GAY-gen-tile',
        grammar: 'pl. die Gegenteile',
        en: 'opposite',
        examples: [
          { de: 'Das Gegenteil von „klein“ ist „groß“.', en: 'The opposite of “small” is “big”.' },
        ],
      },
      {
        de: 'gegenüber',
        pron: 'gay-gen-EW-ber',
        en: 'opposite, across from',
        examples: [
          { de: 'Die Post ist gegenüber vom Bahnhof.', en: 'The post office is opposite the station.' },
          { de: 'Die Hausnummer 84 ist gleich gegenüber.', en: 'House number 84 is right across the street.' },
        ],
      },
      {
        de: 'das Gehalt',
        pron: 'dahs guh-HAHLT',
        grammar: 'pl. die Gehälter',
        en: 'salary',
        examples: [
          { de: 'Sie ist mit ihrem Gehalt zufrieden.', en: 'She is happy with her salary.' },
        ],
      },
      {
        de: 'gehen',
        pron: 'GAY-en',
        grammar: 'geht · ist gegangen',
        en: 'to go, to walk; to work (be possible)',
        examples: [
          { de: 'Ich weiß nicht, wie das geht.', en: 'I don\'t know how that works.' },
          { de: 'Wie geht\'s? - Es geht.', en: 'How are you? - So-so.' },
          { de: 'Ich muss jetzt leider gehen.', en: 'Unfortunately I have to go now.' },
          { de: 'Ich muss zum Arzt gehen.', en: 'I have to go to the doctor.' },
          { de: 'Das geht (doch) nicht!', en: 'That\'s not possible!' },
          { de: 'Nimmst du die Straßenbahn? - Nein, ich gehe lieber zu Fuß.', en: 'Are you taking the tram? - No, I\'d rather walk.' },
        ],
      },
      {
        de: 'gehören',
        pron: 'guh-HUR-ren',
        grammar: 'gehört · hat gehört',
        en: 'to belong (to)',
        examples: [
          { de: 'Gehört der Stift dir?', en: 'Does the pen belong to you?' },
        ],
      },
      {
        de: 'das Geld',
        pron: 'dahs gelt',
        grammar: 'no plural',
        en: 'money',
        examples: [
          { de: 'Hast du noch Geld?', en: 'Do you still have money?' },
          { de: 'Kannst du mir ein bisschen Geld leihen?', en: 'Can you lend me a little money?' },
        ],
      },
      {
        de: 'die Geldbörse',
        pron: 'dee GELT-bur-zuh',
        grammar: 'pl. die Geldbörsen',
        en: 'wallet, purse',
        examples: [
          { de: 'Sie hat ihre Geldbörse verloren.', en: 'She has lost her wallet.' },
        ],
      },
      {
        de: 'das Gemüse',
        pron: 'dahs guh-MEW-zuh',
        grammar: 'no plural',
        en: 'vegetables',
        examples: [
          { de: 'Wir kaufen das Gemüse immer auf dem Markt.', en: 'We always buy the vegetables at the market.' },
          { de: 'Tomaten sind mein Lieblingsgemüse.', en: 'Tomatoes are my favourite vegetable.' },
        ],
      },
      {
        de: 'genau',
        pron: 'guh-NOW',
        en: 'exact(ly), precise(ly)',
        examples: [
          { de: 'Sind Sie sicher, dass die Prüfung am 15. Juni ist? - Ja, das weiß ich genau.', en: 'Are you sure the exam is on 15 June? - Yes, I know that for certain.' },
          { de: 'Die Uhr geht genau.', en: 'The clock keeps exact time.' },
          { de: 'Es ist genau acht Uhr.', en: 'It is exactly eight o\'clock.' },
        ],
      },
      {
        de: 'genug',
        pron: 'guh-NOOK',
        en: 'enough',
        examples: [
          { de: 'Es ist noch genug Pizza da. Möchtest du noch ein Stück?', en: 'There\'s still enough pizza. Would you like another piece?' },
          { de: 'Ich verdiene nicht genug.', en: 'I don\'t earn enough.' },
        ],
      },
      {
        de: 'das Gepäck',
        pron: 'dahs guh-PEK',
        grammar: 'no plural',
        en: 'luggage, baggage',
        examples: [
          { de: 'Wollen Sie Ihr Gepäck mitnehmen?', en: 'Do you want to take your luggage with you?' },
          { de: 'Sie können Ihr Gepäck auch im Hotel lassen.', en: 'You can also leave your luggage at the hotel.' },
        ],
      },
      {
        de: 'gerade',
        pron: 'guh-RAH-duh',
        en: 'just, right now; straight',
        examples: [
          { de: 'Kannst du später anrufen? Wir essen gerade.', en: 'Can you call later? We\'re eating right now.' },
          { de: 'Was machst du gerade?', en: 'What are you doing at the moment?' },
          { de: 'Da kommt er ja gerade.', en: 'There he comes right now.' },
        ],
      },
      {
        de: 'geradeaus',
        pron: 'guh-rah-duh-OWS',
        en: 'straight ahead',
        examples: [
          { de: 'Gehen Sie immer geradeaus!', en: 'Keep going straight ahead!' },
        ],
      },
      {
        de: 'das Gerät',
        pron: 'dahs guh-RAIT',
        grammar: 'pl. die Geräte',
        en: 'device, appliance',
        examples: [
          { de: 'Elektrogeräte finden Sie im dritten Stock.', en: 'You\'ll find electrical appliances on the third floor.' },
        ],
      },
      {
        de: 'das Gericht',
        pron: 'dahs guh-RIKHT',
        grammar: 'pl. die Gerichte',
        en: 'dish (food)',
        examples: [
          { de: 'Mein Lieblingsgericht ist Pizza.', en: 'My favourite dish is pizza.' },
        ],
      },
      {
        de: 'gern, lieber, am liebsten',
        pron: 'gairn, LEE-ber, ahm LEEP-sten',
        en: 'gladly, like to; rather; most of all',
        examples: [
          { de: 'Ich helfe Ihnen gern.', en: 'I\'m happy to help you.' },
          { de: 'Kaffee oder Tee? - Ich trinke lieber einen Tee.', en: 'Coffee or tea? - I\'d rather have tea.' },
          { de: 'Am liebsten trinke ich Kaffee.', en: 'Most of all I like drinking coffee.' },
        ],
      },
      {
        de: 'das Geschäft',
        pron: 'dahs guh-SHEFT',
        grammar: 'pl. die Geschäfte',
        en: 'shop, store; business',
        examples: [
          { de: 'Die Geschäfte schließen um 18.30 Uhr.', en: 'The shops close at 6:30 p.m.' },
        ],
      },
      {
        de: 'das Geschenk',
        pron: 'dahs guh-SHENK',
        grammar: 'pl. die Geschenke',
        en: 'present, gift',
        examples: [
          { de: 'Danke für das schöne Geschenk.', en: 'Thank you for the lovely present.' },
        ],
      },
      {
        de: 'die Geschichte',
        pron: 'dee guh-SHIKH-tuh',
        grammar: 'pl. die Geschichten',
        en: 'story; history',
        examples: [
          { de: 'Erzählst du mir eine Geschichte?', en: 'Will you tell me a story?' },
          { de: 'Ich interessiere mich nicht für Geschichte.', en: 'I\'m not interested in history.' },
          { de: 'Paul hat gute Noten in Geschichte.', en: 'Paul has good grades in history.' },
        ],
      },
      {
        de: 'das Geschirr',
        pron: 'dahs guh-SHIR',
        grammar: 'no plural',
        en: 'dishes, crockery',
        examples: [
          { de: 'Stellst du bitte das Geschirr in den Schrank?', en: 'Could you put the dishes in the cupboard, please?' },
        ],
      },
      {
        de: 'das Gesicht',
        pron: 'dahs guh-ZIKHT',
        grammar: 'pl. die Gesichter',
        en: 'face',
        examples: [
          { de: 'Wasch dir bitte das Gesicht.', en: 'Please wash your face.' },
          { de: 'Sie hat ein freundliches Gesicht.', en: 'She has a friendly face.' },
        ],
      },
      {
        de: 'das Gespräch',
        pron: 'dahs guh-SHPRAIKH',
        grammar: 'pl. die Gespräche',
        en: 'conversation, talk',
        examples: [
          { de: 'Sie hören ein Gespräch. Zu diesem Gespräch gibt es fünf Aufgaben.', en: 'You will hear a conversation. There are five tasks on this conversation.' },
          { de: 'Das Gespräch mit Frau Kunz ist um 14 Uhr.', en: 'The meeting with Ms Kunz is at 2 p.m.' },
        ],
      },
      {
        de: 'gestern',
        pron: 'GES-tern',
        en: 'yesterday',
        examples: [
          { de: 'Gestern wollte ich dich anrufen.', en: 'I wanted to call you yesterday.' },
        ],
      },
      {
        de: 'gesund',
        pron: 'guh-ZOONT',
        en: 'healthy',
        examples: [
          { de: 'Ich hatte Grippe. Jetzt bin ich wieder gesund.', en: 'I had the flu. Now I\'m healthy again.' },
        ],
      },
      {
        de: 'die Gesundheit',
        pron: 'dee guh-ZOONT-hite',
        grammar: 'no plural',
        en: 'health; Bless you!',
        examples: [
          { de: 'Gesundheit! Sind Sie erkältet?', en: 'Bless you! Do you have a cold?' },
        ],
      },
      {
        de: 'das Getränk',
        pron: 'dahs guh-TRENK',
        grammar: 'pl. die Getränke',
        en: 'drink, beverage',
        examples: [
          { de: 'Mein Lieblingsgetränk ist Tomatensaft.', en: 'My favourite drink is tomato juice.' },
          { de: 'Die Getränkekarte, bitte!', en: 'The drinks menu, please!' },
        ],
      },
      {
        de: 'gewinnen',
        pron: 'guh-VIN-en',
        grammar: 'gewinnt · hat gewonnen',
        en: 'to win',
        examples: [
          { de: 'Unsere Mannschaft hat gewonnen.', en: 'Our team has won.' },
          { de: 'Mein Sohn will bei diesem Spiel immer gewinnen.', en: 'My son always wants to win at this game.' },
        ],
      },
      {
        de: 'das Gewitter',
        pron: 'dahs guh-VIT-er',
        grammar: 'pl. die Gewitter',
        en: 'thunderstorm',
        examples: [
          { de: 'Ich glaube, es gibt heute ein Gewitter.', en: 'I think there\'ll be a thunderstorm today.' },
        ],
      },
      {
        de: 'die Gitarre',
        pron: 'dee gee-TAH-ruh',
        grammar: 'pl. die Gitarren',
        en: 'guitar',
        examples: [
          { de: 'Er kann gut Gitarre spielen.', en: 'He can play the guitar well.' },
        ],
      },
      {
        de: 'das Glas',
        pron: 'dahs glahs',
        grammar: 'pl. die Gläser',
        en: 'glass',
        examples: [
          { de: 'Bitte noch ein Glas Apfelsaft!', en: 'Another glass of apple juice, please!' },
          { de: 'Wir brauchen noch drei Gläser.', en: 'We need three more glasses.' },
        ],
      },
      {
        de: 'glauben',
        pron: 'GLOW-ben',
        grammar: 'glaubt · hat geglaubt',
        en: 'to believe; to think',
        examples: [
          { de: 'Sie können mir glauben, es ist so.', en: 'You can believe me, that\'s how it is.' },
          { de: 'Ich glaube, er kommt gleich.', en: 'I think he\'ll be here in a moment.' },
        ],
      },
      {
        de: 'gleich',
        pron: 'glykh',
        en: 'right away, in a moment; same',
        examples: [
          { de: 'Ich komme gleich.', en: 'I\'ll be right there.' },
          { de: 'Wir sind gleich alt.', en: 'We are the same age.' },
        ],
      },
      {
        de: 'das Gleis',
        pron: 'dahs glice',
        grammar: 'pl. die Gleise',
        en: 'platform, track',
        examples: [
          { de: 'Der ICE nach Berlin hält heute an Gleis 12.', en: 'The ICE to Berlin stops at platform 12 today.' },
        ],
      },
      {
        de: 'das Glück',
        pron: 'dahs glewk',
        grammar: 'no plural',
        en: 'luck; happiness',
        examples: [
          { de: 'Viel Glück!', en: 'Good luck!' },
          { de: 'Oh, es regnet. Zum Glück habe ich meinen Schirm dabei.', en: 'Oh, it\'s raining. Luckily I have my umbrella with me.' },
        ],
      },
      {
        de: 'glücklich',
        pron: 'GLEWK-likh',
        en: 'happy',
        examples: [
          { de: 'Meine Tochter ist glücklich verheiratet.', en: 'My daughter is happily married.' },
          { de: 'Ein glückliches neues Jahr!', en: 'Happy New Year!' },
        ],
      },
      {
        de: 'der Glückwunsch',
        pron: 'dair GLEWK-voonsh',
        grammar: 'pl. die Glückwünsche',
        en: 'congratulations, good wishes',
        examples: [
          { de: 'Herzlichen Glückwunsch zum Geburtstag!', en: 'Happy birthday!' },
        ],
      },
      {
        de: 'gratulieren',
        pron: 'grah-too-LEE-ren',
        grammar: 'gratuliert · hat gratuliert',
        en: 'to congratulate',
        examples: [
          { de: 'Ich gratuliere dir!', en: 'Congratulations!' },
        ],
      },
      {
        de: 'grillen',
        pron: 'GRIL-en',
        grammar: 'grillt · hat gegrillt',
        en: 'to grill, to barbecue',
        examples: [
          { de: 'Heute grillen wir im Garten.', en: 'Today we\'re having a barbecue in the garden.' },
        ],
      },
      {
        de: 'die Grippe',
        pron: 'dee GRIP-uh',
        grammar: 'no plural',
        en: 'flu',
        examples: [
          { de: 'Ich habe eine Grippe und kann leider nicht kommen.', en: 'I have the flu and unfortunately can\'t come.' },
        ],
      },
      {
        de: 'groß',
        pron: 'grohss',
        en: 'big, large; tall',
        examples: [
          { de: 'Mein Bruder und ich sind gleich groß.', en: 'My brother and I are the same height.' },
          { de: 'Frankfurt ist eine große Stadt.', en: 'Frankfurt is a big city.' },
          { de: 'Unsere Wohnung ist 80 m² groß.', en: 'Our flat is 80 m² in size.' },
        ],
      },
      {
        de: 'die Größe',
        pron: 'dee GRUR-suh',
        grammar: 'pl. die Größen',
        en: 'size',
        examples: [
          { de: 'Haben Sie das T-Shirt auch in Größe M?', en: 'Do you also have the T-shirt in size M?' },
        ],
      },
      {
        de: 'die Gruppe',
        pron: 'dee GROO-puh',
        grammar: 'pl. die Gruppen',
        en: 'group',
        examples: [
          { de: 'Die erste Gruppe beginnt um 16 Uhr.', en: 'The first group starts at 4 p.m.' },
          { de: 'Für Gruppen gibt es eine Ermäßigung.', en: 'There is a discount for groups.' },
        ],
      },
      {
        de: 'der Gruß',
        pron: 'dair grooss',
        grammar: 'pl. die Grüße',
        en: 'greeting',
        examples: [
          { de: 'Viele Grüße an Ihre Frau.', en: 'Best regards to your wife.' },
          { de: 'Liebe Grüße', en: 'Love / Best wishes' },
          { de: 'Mit freundlichen Grüßen', en: 'Kind regards / Yours sincerely' },
        ],
      },
      {
        de: 'gültig sein',
        pron: 'GEWL-tikh zine',
        grammar: 'ist gültig · war gültig · ist gültig gewesen',
        en: 'to be valid',
        examples: [
          { de: 'Der Pass ist nicht mehr gültig.', en: 'The passport is no longer valid.' },
        ],
      },
      {
        de: 'günstig',
        pron: 'GEWN-stikh',
        en: 'cheap, good value; favourable',
        examples: [
          { de: 'In diesem Laden gibt es immer günstige Angebote.', en: 'There are always good deals in this shop.' },
          { de: 'Ich suche ein günstiges Sofa.', en: 'I\'m looking for an inexpensive sofa.' },
        ],
      },
      {
        de: 'gut, besser, am besten',
        pron: 'goot, BES-er, ahm BES-ten',
        en: 'good, well; better; best',
        examples: [
          { de: 'Das finde ich gut.', en: 'I think that\'s good.' },
          { de: 'Ich komme um 17 Uhr. – Gut!', en: 'I\'ll come at 5 p.m. – Good!' },
          { de: 'Guten Morgen!', en: 'Good morning!' },
          { de: 'Ein gutes neues Jahr!', en: 'Happy New Year!' },
          { de: 'Guten Appetit!', en: 'Enjoy your meal!' },
          { de: 'Welches Bild gefällt dir besser?', en: 'Which picture do you like better?' },
          { de: 'Dieses Kleid finde ich am besten.', en: 'I like this dress best.' },
        ],
      },
    ],
  },
  {
    letter: 'H',
    entries: [
      {
        de: 'das Haar',
        pron: 'dahs hahr',
        grammar: 'pl. die Haare',
        en: 'hair',
        examples: [
          { de: 'Sie hat lange Haare.', en: 'She has long hair.' },
        ],
      },
      {
        de: 'haben',
        pron: 'HAH-ben',
        grammar: 'hat · hatte · hat gehabt',
        en: 'to have',
        examples: [
          { de: 'Ich habe ein neues Auto.', en: 'I have a new car.' },
          { de: 'Hast du kurz Zeit?', en: 'Do you have a moment?' },
        ],
      },
      {
        de: 'das Hähnchen',
        pron: 'dahs HAIN-khen',
        grammar: 'pl. die Hähnchen',
        en: 'chicken (food)',
        examples: [
          { de: 'Ein Hähnchen mit Pommes, bitte!', en: 'A chicken with fries, please!' },
        ],
      },
      {
        de: 'die Halle',
        pron: 'dee HAH-luh',
        grammar: 'pl. die Hallen',
        en: 'hall',
        examples: [
          { de: 'Wir treffen uns in Halle B.', en: 'We\'ll meet in Hall B.' },
          { de: 'Wo ist die neue Sporthalle?', en: 'Where is the new sports hall?' },
        ],
      },
      {
        de: 'hallo',
        pron: 'hah-LOH',
        en: 'hello, hi',
        examples: [
          { de: 'Hallo Inge! Wie geht\'s?', en: 'Hi Inge! How are you?' },
        ],
      },
      {
        de: 'der Hals',
        pron: 'dair hahls',
        grammar: 'pl. die Hälse',
        en: 'neck; throat',
        examples: [
          { de: 'Mir tut der Hals weh.', en: 'My throat hurts.' },
          { de: 'Ich habe seit gestern Halsschmerzen.', en: 'I\'ve had a sore throat since yesterday.' },
        ],
      },
      {
        de: 'halten',
        pron: 'HAHL-ten',
        grammar: 'hält · hat gehalten',
        en: 'to stop; to hold',
        examples: [
          { de: 'Dieser Zug hält nicht in Rüdesheim.', en: 'This train doesn\'t stop in Rüdesheim.' },
          { de: 'Kannst du mal kurz meine Jacke halten?', en: 'Can you hold my jacket for a moment?' },
        ],
      },
      {
        de: 'die Haltestelle',
        pron: 'dee HAHL-tuh-shtel-uh',
        grammar: 'pl. die Haltestellen',
        en: 'stop (bus, tram)',
        examples: [
          { de: 'An der nächsten Haltestelle müssen Sie aussteigen.', en: 'You have to get off at the next stop.' },
        ],
      },
      {
        de: 'der Hamburger',
        pron: 'dair HEM-bur-ger',
        grammar: 'pl. die Hamburger',
        en: 'hamburger',
        examples: [
          { de: 'Einen Hamburger ohne Salat, bitte.', en: 'A hamburger without lettuce, please.' },
        ],
      },
      {
        de: 'die Hand',
        pron: 'dee hahnt',
        grammar: 'pl. die Hände',
        en: 'hand',
        examples: [
          { de: 'Wasch dir bitte die Hände vor dem Essen.', en: 'Please wash your hands before eating.' },
        ],
      },
      {
        de: 'das Handtuch',
        pron: 'dahs HAHNT-tookh',
        grammar: 'pl. die Handtücher',
        en: 'towel',
        examples: [
          { de: 'Gibst du mir bitte ein frisches Handtuch?', en: 'Could you give me a fresh towel, please?' },
        ],
      },
      {
        de: 'das Handy',
        pron: 'dahs HEN-dee',
        grammar: 'pl. die Handys',
        en: 'mobile phone',
        examples: [
          { de: 'In der Schule bitte die Handys ausmachen!', en: 'Please switch off your phones at school!' },
          { de: 'Kannst du mir bitte deine Handynummer geben?', en: 'Can you give me your mobile number, please?' },
        ],
      },
      {
        de: 'hängen',
        pron: 'HENG-en',
        grammar: 'hängt · hat gehangen / hat gehängt',
        en: 'to hang',
        examples: [
          { de: 'Im Museum hängen moderne Bilder.', en: 'Modern pictures hang in the museum.' },
          { de: 'Warum hast du das Bild noch nicht an die Wand gehängt?', en: 'Why haven\'t you hung the picture on the wall yet?' },
          { de: 'Das Bild von meiner Tochter hat im Wohnzimmer gehangen.', en: 'The picture of my daughter hung in the living room.' },
        ],
      },
      {
        de: 'hart',
        pron: 'hahrt',
        en: 'hard',
        examples: [
          { de: 'Ich finde das Bett zu hart.', en: 'I find the bed too hard.' },
          { de: 'Die Brötchen sind ja ganz hart.', en: 'The rolls are really hard.' },
        ],
      },
      {
        de: 'hässlich',
        pron: 'HES-likh',
        en: 'ugly',
        examples: [
          { de: 'Ich finde das Kleid hässlich. Es gefällt mir nicht.', en: 'I think the dress is ugly. I don\'t like it.' },
        ],
      },
      {
        de: 'die Hauptstadt',
        pron: 'dee HOWPT-shtaht',
        grammar: 'pl. die Hauptstädte',
        en: 'capital (city)',
        examples: [
          { de: 'Berlin ist die Hauptstadt von Deutschland.', en: 'Berlin is the capital of Germany.' },
        ],
      },
      {
        de: 'das Haus',
        pron: 'dahs house',
        grammar: 'pl. die Häuser',
        en: 'house; home',
        examples: [
          { de: 'In welchem Haus wohnst du?', en: 'Which house do you live in?' },
          { de: 'Ich gehe jetzt nach Hause.', en: 'I\'m going home now.' },
          { de: 'Paul ist nicht zu Hause.', en: 'Paul is not at home.' },
        ],
      },
      {
        de: 'der Haushalt',
        pron: 'dair HOWS-hahlt',
        grammar: 'pl. die Haushalte',
        en: 'household; housework',
        examples: [
          { de: 'Wer macht bei euch den Haushalt? - Meine Frau und ich machen den Haushalt zusammen: Ich wasche die Wäsche und sie putzt und räumt auf.', en: 'Who does the housework at your place? - My wife and I do it together: I do the laundry and she cleans and tidies up.' },
        ],
      },
      {
        de: 'das Heft',
        pron: 'dahs heft',
        grammar: 'pl. die Hefte',
        en: 'exercise book, notebook',
        examples: [
          { de: 'Hast du dein Heft dabei?', en: 'Do you have your exercise book with you?' },
        ],
      },
      {
        de: 'die Heimat',
        pron: 'dee HY-maht',
        grammar: 'no plural',
        en: 'home, homeland',
        examples: [
          { de: 'Ich komme aus der Schweiz. Das ist meine Heimat.', en: 'I come from Switzerland. That is my home.' },
          { de: 'Mein Heimatland ist Italien. Dort bin ich geboren.', en: 'My home country is Italy. I was born there.' },
          { de: 'Jetzt lebe ich in Deutschland, das ist meine neue Heimat.', en: 'Now I live in Germany, that is my new home.' },
        ],
      },
      {
        de: 'heiraten',
        pron: 'HY-rah-ten',
        grammar: 'heiratet · hat geheiratet',
        en: 'to marry, to get married',
        examples: [
          { de: 'Meine Schwester heiratet nächsten Monat.', en: 'My sister is getting married next month.' },
        ],
      },
      {
        de: 'heiß',
        pron: 'hice',
        en: 'hot',
        examples: [
          { de: 'Vorsicht, der Tee ist heiß!', en: 'Careful, the tea is hot!' },
          { de: 'Mir ist heiß. Kannst du das Fenster öffnen?', en: 'I\'m hot. Can you open the window?' },
        ],
      },
      {
        de: 'heißen',
        pron: 'HY-sen',
        grammar: 'heißt · hat geheißen',
        en: 'to be called; to mean',
        examples: [
          { de: 'Ich heiße Charlotte Meier.', en: 'My name is Charlotte Meier.' },
          { de: 'Wie heißt das auf Deutsch?', en: 'What is that called in German?' },
        ],
      },
      {
        de: 'die Heizung',
        pron: 'dee HY-tsoong',
        grammar: 'pl. die Heizungen',
        en: 'heating, radiator',
        examples: [
          { de: 'Es ist kalt. Ist die Heizung kaputt?', en: 'It\'s cold. Is the heating broken?' },
        ],
      },
      {
        de: 'helfen',
        pron: 'HEL-fen',
        grammar: 'hilft · hat geholfen',
        en: 'to help',
        examples: [
          { de: 'Würden Sie mir bitte helfen?', en: 'Would you help me, please?' },
        ],
      },
      {
        de: 'hell',
        pron: 'hel',
        en: 'light, bright',
        examples: [
          { de: 'Im Sommer ist es bis 21 Uhr hell.', en: 'In summer it\'s light until 9 p.m.' },
          { de: 'Mein Zimmer ist sehr hell.', en: 'My room is very bright.' },
          { de: 'Haben Sie das T-Shirt auch in Hellblau?', en: 'Do you also have the T-shirt in light blue?' },
        ],
      },
      {
        de: 'das Hemd',
        pron: 'dahs hemt',
        grammar: 'pl. die Hemden',
        en: 'shirt',
        examples: [
          { de: 'Nick trägt heute ein neues Hemd.', en: 'Nick is wearing a new shirt today.' },
        ],
      },
      {
        de: 'her/her-/-her',
        pron: 'hair / hair- / -hair',
        en: 'here (towards the speaker); from',
        examples: [
          { de: 'Komm bitte mal her!', en: 'Come here, please!' },
          { de: 'Herein! Die Tür ist offen.', en: 'Come in! The door is open.' },
          { de: 'Woher kommen Sie?', en: 'Where are you from?' },
        ],
      },
      {
        de: 'heraus/raus',
        pron: 'hair-OWS / rows',
        en: 'out (towards the speaker)',
        examples: [
          { de: 'Möchtet ihr nicht rauskommen? Das Wetter ist so schön.', en: 'Don\'t you want to come out? The weather is so nice.' },
          { de: 'Kannst du bitte den Müll rausbringen?', en: 'Can you take the rubbish out, please?' },
        ],
      },
      {
        de: 'herein/rein',
        pron: 'hair-INE / rine',
        en: 'in (towards the speaker)',
        examples: [
          { de: 'Herein! Die Tür ist offen.', en: 'Come in! The door is open.' },
          { de: 'Möchtest du nicht reinkommen? Ich kann uns einen Tee machen.', en: 'Wouldn\'t you like to come in? I can make us some tea.' },
        ],
      },
      {
        de: 'der Herd',
        pron: 'dair hairt',
        grammar: 'pl. die Herde',
        en: 'cooker, stove',
        examples: [
          { de: 'In der neuen Küche fehlt noch der Herd.', en: 'The new kitchen is still missing a stove.' },
        ],
      },
      {
        de: 'der Herr',
        pron: 'dair hair',
        grammar: 'pl. die Herren',
        en: 'Mr; gentleman',
        examples: [
          { de: 'Guten Tag, Herr Sommer!', en: 'Good day, Mr Sommer!' },
        ],
      },
      {
        de: 'herstellen',
        pron: 'HAIR-shtel-en',
        grammar: 'stellt her · hat hergestellt',
        en: 'to make, to produce',
        examples: [
          { de: 'In unserer Firma stellen wir Möbel her.', en: 'In our company we make furniture.' },
        ],
      },
      {
        de: 'herunterladen',
        pron: 'hair-OON-ter-lah-den',
        grammar: 'lädt herunter · hat heruntergeladen',
        en: 'to download',
        examples: [
          { de: 'Er lädt die Musik aus dem Internet herunter.', en: 'He downloads the music from the internet.' },
        ],
      },
      {
        de: 'herzlich',
        pron: 'HAIRTS-likh',
        en: 'warm, cordial, heartfelt',
        examples: [
          { de: 'Herzlichen Glückwunsch!', en: 'Congratulations!' },
        ],
      },
      {
        de: 'heute',
        pron: 'HOY-tuh',
        en: 'today',
        examples: [
          { de: 'Heute ist ein schöner Tag.', en: 'Today is a beautiful day.' },
          { de: 'Heute muss ich nur bis 16 Uhr arbeiten.', en: 'Today I only have to work until 4 p.m.' },
        ],
      },
      {
        de: 'hier',
        pron: 'heer',
        en: 'here',
        examples: [
          { de: 'Elektro Bauer, guten Tag. Hier ist Pamela Linke. Was kann ich für Sie tun?', en: 'Elektro Bauer, good day. This is Pamela Linke. What can I do for you?' },
          { de: 'Hier wohne ich.', en: 'I live here.' },
          { de: 'Unterschreiben Sie bitte hier!', en: 'Please sign here!' },
        ],
      },
      {
        de: 'die Hilfe',
        pron: 'dee HIL-fuh',
        grammar: 'no plural',
        en: 'help',
        examples: [
          { de: 'Hilfe! Bitte helfen Sie mir!', en: 'Help! Please help me!' },
          { de: 'Er bekommt Hilfe von Freunden.', en: 'He gets help from friends.' },
        ],
      },
      {
        de: 'der Himmel',
        pron: 'dair HIM-el',
        grammar: 'no plural',
        en: 'sky; heaven',
        examples: [
          { de: 'Heute ist so tolles Wetter: Der Himmel ist blau und es gibt keine Wolken.', en: 'The weather is so great today: the sky is blue and there are no clouds.' },
        ],
      },
      {
        de: 'hin/hin-/-hin',
        pron: 'hin / hin- / -hin',
        en: 'there (away from the speaker); to',
        examples: [
          { de: 'Wo gehst du hin? / Wohin gehst du?', en: 'Where are you going?' },
          { de: 'Wohin ist Paul gegangen? – Ich glaube dorthin.', en: 'Where did Paul go? – I think over there.' },
          { de: 'Er geht in den Garten hinaus.', en: 'He goes out into the garden.' },
          { de: 'Wir gehen ins Haus hinein.', en: 'We go into the house.' },
        ],
      },
      {
        de: 'hinten',
        pron: 'HIN-ten',
        en: 'at the back, behind',
        examples: [
          { de: 'Die Tür zum Aussteigen ist hinten.', en: 'The exit door is at the back.' },
          { de: 'Bitte hinten aussteigen!', en: 'Please exit at the back!' },
        ],
      },
      {
        de: 'hinter',
        pron: 'HIN-ter',
        en: 'behind',
        examples: [
          { de: 'Hinter dem Haus haben wir einen Garten.', en: 'We have a garden behind the house.' },
        ],
      },
      {
        de: 'das Hobby',
        pron: 'dahs HOB-ee',
        grammar: 'pl. die Hobbys',
        en: 'hobby',
        examples: [
          { de: 'Meine Hobbys sind Joggen und Schwimmen.', en: 'My hobbies are jogging and swimming.' },
        ],
      },
      {
        de: 'hoch',
        pron: 'hohkh',
        en: 'high, tall',
        examples: [
          { de: 'Der Mount Everest ist circa 8.880 Meter hoch.', en: 'Mount Everest is about 8,880 metres high.' },
          { de: 'Die Preise in diesem Laden sind sehr hoch.', en: 'The prices in this shop are very high.' },
        ],
      },
      {
        de: 'die Hochzeit',
        pron: 'dee HOKH-tsite',
        grammar: 'pl. die Hochzeiten',
        en: 'wedding',
        examples: [
          { de: 'Zu seiner Hochzeit kommen mehr als einhundert Gäste.', en: 'More than a hundred guests are coming to his wedding.' },
        ],
      },
      {
        de: 'hoffen',
        pron: 'HOF-en',
        grammar: 'hofft · hat gehofft',
        en: 'to hope',
        examples: [
          { de: 'Ich hoffe, dass es dir gut geht.', en: 'I hope you\'re doing well.' },
        ],
      },
      {
        de: 'hoffentlich',
        pron: 'HOF-ent-likh',
        en: 'hopefully',
        examples: [
          { de: 'Hoffentlich hat unser Zug keine Verspätung.', en: 'Hopefully our train isn\'t delayed.' },
        ],
      },
      {
        de: 'holen',
        pron: 'HOH-len',
        grammar: 'holt · hat geholt',
        en: 'to fetch, to get',
        examples: [
          { de: 'Soll ich uns etwas zu trinken holen?', en: 'Shall I get us something to drink?' },
        ],
      },
      {
        de: 'die Homepage',
        pron: 'dee HOHM-payj',
        grammar: 'pl. die Homepages',
        en: 'homepage, website',
        examples: [
          { de: 'Auf der Homepage von Freiburg gibt es alle wichtigen Informationen über die Stadt.', en: 'Freiburg\'s website has all the important information about the city.' },
          { de: 'Kennst du eine Homepage mit Deutschübungen?', en: 'Do you know a website with German exercises?' },
        ],
      },
      {
        de: 'hören',
        pron: 'HUR-en',
        grammar: 'hört · hat gehört',
        en: 'to hear; to listen',
        examples: [
          { de: 'Hör mal! Was ist das?', en: 'Listen! What is that?' },
          { de: 'Ich habe das Lied schon mal gehört.', en: 'I\'ve heard the song before.' },
        ],
      },
      {
        de: 'die Hose',
        pron: 'dee HOH-zuh',
        grammar: 'pl. die Hosen',
        en: 'trousers, pants',
        examples: [
          { de: 'Kann ich die Hose waschen?', en: 'Can I wash the trousers?' },
        ],
      },
      {
        de: 'das Hotel',
        pron: 'dahs hoh-TEL',
        grammar: 'pl. die Hotels',
        en: 'hotel',
        examples: [
          { de: 'Im Urlaub sind wir in einem Hotel am Meer.', en: 'On holiday we\'re staying in a hotel by the sea.' },
        ],
      },
      {
        de: 'der Hund',
        pron: 'dair hoont',
        grammar: 'pl. die Hunde',
        en: 'dog',
        examples: [
          { de: 'Magst du Hunde?', en: 'Do you like dogs?' },
          { de: 'Meine Tochter hat Angst vor Hunden.', en: 'My daughter is afraid of dogs.' },
        ],
      },
      {
        de: 'der Hunger',
        pron: 'dair HOONG-er',
        grammar: 'no plural',
        en: 'hunger',
        examples: [
          { de: 'Ich habe Hunger! Wann können wir endlich essen?', en: 'I\'m hungry! When can we finally eat?' },
        ],
      },
      {
        de: 'husten',
        pron: 'HOOS-ten',
        grammar: 'hustet · hat gehustet',
        en: 'to cough',
        examples: [
          { de: 'Sie hustet seit zwei Tagen. Sie ist krank.', en: 'She has been coughing for two days. She is ill.' },
        ],
      },
    ],
  },
  {
    letter: 'I',
    entries: [
      {
        de: 'die Idee',
        pron: 'dee ee-DAY',
        grammar: 'pl. die Ideen',
        en: 'idea',
        examples: [
          { de: 'Was machen wir heute Abend? Hast du eine gute Idee?', en: 'What shall we do this evening? Do you have a good idea?' },
        ],
      },
      {
        de: 'immer',
        pron: 'IM-er',
        en: 'always',
        examples: [
          { de: 'Frau Bast kommt immer zu spät.', en: 'Ms Bast is always late.' },
        ],
      },
      {
        de: 'in',
        pron: 'in',
        en: 'in, into; within',
        examples: [
          { de: 'Ich wohne in Wiesbaden.', en: 'I live in Wiesbaden.' },
          { de: 'Der Zug kommt in fünf Minuten.', en: 'The train is coming in five minutes.' },
          { de: 'Frau Rausch arbeitet im Reisebüro.', en: 'Ms Rausch works at the travel agency.' },
          { de: 'Komm, wir gehen ins Kino.', en: 'Come on, let\'s go to the cinema.' },
        ],
      },
      {
        de: 'die Information',
        pron: 'dee in-for-mah-TSYOHN',
        grammar: 'pl. die Informationen',
        en: 'information; information desk',
        examples: [
          { de: 'Wir haben hier einige wichtige Informationen für Sie.', en: 'We have some important information for you here.' },
          { de: 'Wenn Sie Fragen haben, gehen Sie zur Information.', en: 'If you have questions, go to the information desk.' },
        ],
      },
      {
        de: 'informieren (sich) (über)',
        pron: 'in-for-MEE-ren (zikh) (EW-ber)',
        grammar: 'informiert · hat informiert',
        en: 'to inform; to find out (about)',
        examples: [
          { de: 'Ich möchte mich vor der Reise über das Land informieren.', en: 'I\'d like to find out about the country before the trip.' },
          { de: 'Hast du dich über die Prüfung informiert?', en: 'Have you found out about the exam?' },
        ],
      },
      {
        de: 'die Insel',
        pron: 'dee IN-zel',
        grammar: 'pl. die Inseln',
        en: 'island',
        examples: [
          { de: 'Ich möchte im Sommer auf einer Insel Urlaub machen.', en: 'I\'d like to holiday on an island in summer.' },
          { de: 'Rügen ist die größte deutsche Insel.', en: 'Rügen is the largest German island.' },
        ],
      },
      {
        de: 'das Instrument',
        pron: 'dahs in-stroo-MENT',
        grammar: 'pl. die Instrumente',
        en: '(musical) instrument',
        examples: [
          { de: 'Ich spiele Klavier. Spielen Sie auch ein Instrument?', en: 'I play the piano. Do you play an instrument too?' },
        ],
      },
      {
        de: 'intelligent',
        pron: 'in-tel-i-GENT',
        en: 'intelligent',
        examples: [
          { de: 'Einstein war sehr intelligent.', en: 'Einstein was very intelligent.' },
        ],
      },
      {
        de: 'das Interesse',
        pron: 'dahs in-tuh-RES-uh',
        grammar: 'pl. die Interessen',
        en: 'interest',
        examples: [
          { de: 'Ich habe viele Interessen: Sport, Lesen, Kultur, Reisen.', en: 'I have many interests: sport, reading, culture, travel.' },
        ],
      },
      {
        de: 'interessieren (sich)',
        pron: 'in-teh-reh-SEE-ren (zikh)',
        grammar: 'interessiert · hat interessiert',
        en: 'to interest; to be interested (in)',
        examples: [
          { de: 'Ich interessiere mich für Fußball.', en: 'I\'m interested in football.' },
        ],
      },
      {
        de: 'interessant',
        pron: 'in-teh-reh-SAHNT',
        en: 'interesting',
        examples: [
          { de: 'Den Artikel über Brasilien finde ich sehr interessant.', en: 'I find the article about Brazil very interesting.' },
          { de: 'Ich lese gerade ein interessantes Buch.', en: 'I\'m reading an interesting book at the moment.' },
        ],
      },
      {
        de: 'international',
        pron: 'in-ter-nah-tsyoh-NAHL',
        en: 'international',
        examples: [
          { de: 'Unser Deutschkurs ist international: Silvana kommt aus Italien, Conchi aus Spanien, Yin aus China …', en: 'Our German course is international: Silvana is from Italy, Conchi from Spain, Yin from China …' },
        ],
      },
      {
        de: 'das Internet',
        pron: 'dahs IN-ter-net',
        grammar: 'no plural',
        en: 'internet',
        examples: [
          { de: 'Das findest du im Internet.', en: 'You\'ll find that on the internet.' },
          { de: 'Du kannst im Internet Musik hören oder Spiele spielen.', en: 'You can listen to music or play games on the internet.' },
        ],
      },
      {
        de: 'das Interview',
        pron: 'dahs IN-ter-vyoo',
        grammar: 'pl. die Interviews',
        en: 'interview',
        examples: [
          { de: 'Komm schnell! Im Radio kommt ein Interview mit deinem Lieblingssänger.', en: 'Come quickly! There\'s an interview with your favourite singer on the radio.' },
        ],
      },
    ],
  },
  {
    letter: 'J',
    entries: [
      {
        de: 'ja',
        pron: 'yah',
        en: 'yes; (emphasis) really',
        examples: [
          { de: 'Sind Sie Herr Watanabe? – Ja.', en: 'Are you Mr Watanabe? – Yes.' },
          { de: 'Du bist hier in Berlin? Das ist ja toll!', en: 'You\'re here in Berlin? That\'s really great!' },
        ],
      },
      {
        de: 'die Jacke',
        pron: 'dee YAH-kuh',
        grammar: 'pl. die Jacken',
        en: 'jacket',
        examples: [
          { de: 'Zieh dir eine Jacke an. Es ist kalt.', en: 'Put on a jacket. It\'s cold.' },
        ],
      },
      {
        de: 'die Jeans',
        pron: 'dee jeens',
        grammar: 'plural only',
        en: 'jeans',
        examples: [
          { de: 'Ich mag Jeans lieber als Röcke.', en: 'I like jeans more than skirts.' },
        ],
      },
      {
        de: 'jeder, jede, jedes',
        pron: 'YAY-der, YAY-duh, YAY-des',
        en: 'every, each',
        examples: [
          { de: 'Das Restaurant hat jeden Tag geöffnet.', en: 'The restaurant is open every day.' },
          { de: 'Jedes Kind bekommt einen Ball.', en: 'Every child gets a ball.' },
        ],
      },
      {
        de: 'jemand',
        pron: 'YAY-mahnt',
        en: 'somebody, anybody',
        examples: [
          { de: 'Hat jemand meinen Stift?', en: 'Does anyone have my pen?' },
          { de: 'Hallo, ist jemand da?', en: 'Hello, is anybody there?' },
        ],
      },
      {
        de: 'jetzt',
        pron: 'yetst',
        en: 'now',
        examples: [
          { de: 'Jetzt machen wir eine Pause.', en: 'Now we\'ll take a break.' },
        ],
      },
      {
        de: 'der Job',
        pron: 'dair job',
        grammar: 'pl. die Jobs',
        en: 'job',
        examples: [
          { de: 'Jenny hat einen neuen Job bei der Post.', en: 'Jenny has a new job at the post office.' },
          { de: 'Ich suche noch einen Ferienjob.', en: 'I\'m still looking for a holiday job.' },
        ],
      },
      {
        de: 'joggen',
        pron: 'JOG-en',
        grammar: 'joggt · ist/hat gejoggt',
        en: 'to jog',
        examples: [
          { de: 'Ich jogge gern im Park.', en: 'I like jogging in the park.' },
        ],
      },
      {
        de: 'die Jugendherberge',
        pron: 'dee YOO-gent-hair-bair-guh',
        grammar: 'pl. die Jugendherbergen',
        en: 'youth hostel',
        examples: [
          { de: 'Wir übernachten in einer Jugendherberge.', en: 'We\'re staying overnight in a youth hostel.' },
        ],
      },
      {
        de: 'der/die Jugendliche',
        pron: 'dair / dee YOO-gent-li-khuh',
        grammar: 'pl. die Jugendlichen',
        en: 'young person, teenager',
        examples: [
          { de: 'Viele Jugendliche hören den ganzen Tag Musik.', en: 'Many young people listen to music all day.' },
          { de: 'Der Eintritt für Kinder und Jugendliche bis 16 Jahre ist frei.', en: 'Admission is free for children and young people up to 16.' },
        ],
      },
      {
        de: 'jung',
        pron: 'yoong',
        en: 'young',
        examples: [
          { de: 'Claudia ist 21. – Was? Noch so jung?', en: 'Claudia is 21. – What? Still so young?' },
          { de: 'Bei uns im Haus wohnen viele junge Leute.', en: 'Lots of young people live in our building.' },
          { de: 'Mein Bruder ist fünf Jahre jünger als ich.', en: 'My brother is five years younger than me.' },
        ],
      },
      {
        de: 'der Junge',
        pron: 'dair YOONG-uh',
        grammar: 'pl. die Jungen',
        en: 'boy',
        examples: [
          { de: 'In der Klasse von meiner Tochter sind 13 Jungen und 15 Mädchen.', en: 'There are 13 boys and 15 girls in my daughter\'s class.' },
        ],
      },
    ],
  },
  {
    letter: 'K',
    entries: [
      {
        de: 'der Kaffee',
        pron: 'dair KAH-fay',
        grammar: 'pl. die Kaffees',
        en: 'coffee',
        examples: [
          { de: 'Zum Frühstück trinke ich immer Kaffee.', en: 'I always drink coffee with breakfast.' },
          { de: 'Einen Kaffee, bitte.', en: 'A coffee, please.' },
        ],
      },
      {
        de: 'der Kalender',
        pron: 'dair kah-LEN-der',
        grammar: 'pl. die Kalender',
        en: 'calendar, diary',
        examples: [
          { de: 'Haben Sie am Montag Zeit? - Einen Moment, ich schaue in meinem Kalender.', en: 'Are you free on Monday? - One moment, I\'ll check my calendar.' },
          { de: 'Ich schreibe alle Termine in meinen Kalender.', en: 'I write all my appointments in my calendar.' },
        ],
      },
      {
        de: 'kalt',
        pron: 'kahlt',
        en: 'cold',
        examples: [
          { de: 'Heute ist es sehr kalt.', en: 'It\'s very cold today.' },
          { de: 'Der Kaffee ist kalt. Ich möchte ihn nicht mehr trinken.', en: 'The coffee is cold. I don\'t want to drink it any more.' },
          { de: 'Mir ist kalt.', en: 'I\'m cold.' },
        ],
      },
      {
        de: 'die Kamera',
        pron: 'dee KAH-meh-rah',
        grammar: 'pl. die Kameras',
        en: 'camera',
        examples: [
          { de: 'Hannes hat eine neue Kamera. Er kann mit der Kamera Fotos und Filme machen.', en: 'Hannes has a new camera. He can take photos and make films with it.' },
        ],
      },
      {
        de: 'kaputt',
        pron: 'kah-POOT',
        en: 'broken',
        examples: [
          { de: 'Unsere Waschmaschine ist kaputt.', en: 'Our washing machine is broken.' },
        ],
      },
      {
        de: 'die Karte',
        pron: 'dee KAR-tuh',
        grammar: 'pl. die Karten',
        en: 'card; ticket; menu; map',
        examples: [
          { de: 'Ich schreibe meinen Bekannten eine Karte aus dem Urlaub.', en: 'I\'m writing my friends a postcard from my holiday.' },
          { de: 'Wollen wir Karten spielen?', en: 'Shall we play cards?' },
          { de: 'Du musst noch die Karten für das Konzert abholen, vergiss das bitte nicht!', en: 'You still have to pick up the concert tickets, please don\'t forget!' },
          { de: 'Die Karte, bitte! Ich möchte etwas bestellen.', en: 'The menu, please! I\'d like to order something.' },
          { de: 'Kann ich auch mit Karte bezahlen?', en: 'Can I also pay by card?' },
        ],
      },
      {
        de: 'die Kartoffel',
        pron: 'dee kar-TOF-el',
        grammar: 'pl. die Kartoffeln',
        en: 'potato',
        examples: [
          { de: 'Für Pommes frites braucht man Kartoffeln.', en: 'You need potatoes for French fries.' },
        ],
      },
      {
        de: 'der Käse',
        pron: 'dair KAY-zuh',
        grammar: 'no plural',
        en: 'cheese',
        examples: [
          { de: 'Isst du lieber Käse oder Wurst?', en: 'Do you prefer cheese or sausage?' },
        ],
      },
      {
        de: 'die Kasse',
        pron: 'dee KAH-suh',
        grammar: 'pl. die Kassen',
        en: 'till, checkout, cash desk',
        examples: [
          { de: 'Zahlen Sie bitte an der Kasse.', en: 'Please pay at the checkout.' },
        ],
      },
      {
        de: 'die Katze',
        pron: 'dee KAHT-suh',
        grammar: 'pl. die Katzen',
        en: 'cat',
        examples: [
          { de: 'Meine Tochter wünscht sich eine Katze.', en: 'My daughter wants a cat.' },
        ],
      },
      {
        de: 'kaufen',
        pron: 'KOW-fen',
        grammar: 'kauft · hat gekauft',
        en: 'to buy',
        examples: [
          { de: 'Tim kauft sich ein neues Auto.', en: 'Tim is buying himself a new car.' },
        ],
      },
      {
        de: 'das Kaufhaus',
        pron: 'dahs KOWF-house',
        grammar: 'pl. die Kaufhäuser',
        en: 'department store',
        examples: [
          { de: 'Meine Pullover kaufe ich immer im Kaufhaus Hertie.', en: 'I always buy my jumpers at the Hertie department store.' },
        ],
      },
      {
        de: 'kein, keine',
        pron: 'kine, KY-nuh',
        en: 'no, not a, not any',
        examples: [
          { de: 'Hast du keinen Hunger?', en: 'Aren\'t you hungry?' },
          { de: 'Ich habe heute leider keine Zeit.', en: 'Unfortunately I have no time today.' },
          { de: 'Ich spreche leider kein Chinesisch.', en: 'Unfortunately I don\'t speak any Chinese.' },
          { de: 'Ich habe keine Kinder.', en: 'I have no children.' },
        ],
      },
      {
        de: 'der Keller',
        pron: 'dair KEL-er',
        grammar: 'pl. die Keller',
        en: 'cellar, basement',
        examples: [
          { de: 'Bitte bring die Kartoffeln in den Keller!', en: 'Please take the potatoes down to the cellar!' },
          { de: 'Die Waschmaschinen sind im Keller.', en: 'The washing machines are in the basement.' },
        ],
      },
      {
        de: 'kennen',
        pron: 'KEN-en',
        grammar: 'kennt · hat gekannt',
        en: 'to know (be familiar with)',
        examples: [
          { de: 'Kennen Sie diese Frau? – Nein, leider nicht.', en: 'Do you know this woman? – No, unfortunately not.' },
          { de: 'Kennen Sie Berlin? – Ja, eine tolle Stadt.', en: 'Do you know Berlin? – Yes, a great city.' },
        ],
      },
      {
        de: 'kennenlernen',
        pron: 'KEN-en-lair-nen',
        grammar: 'lernt kennen · hat kennengelernt',
        en: 'to get to know, to meet',
        examples: [
          { de: 'Wo habt ihr euch kennengelernt? – Wir haben uns in München kennengelernt.', en: 'Where did you meet? – We met in Munich.' },
        ],
      },
      {
        de: 'die Kenntnisse',
        pron: 'dee KENT-nis-uh',
        grammar: 'plural only',
        en: 'knowledge, skills',
        examples: [
          { de: 'Deine Deutschkenntnisse sind sehr gut!', en: 'Your German is very good!' },
          { de: 'Ich möchte meine Computerkenntnisse verbessern.', en: 'I\'d like to improve my computer skills.' },
        ],
      },
      {
        de: 'die Kette',
        pron: 'dee KET-uh',
        grammar: 'pl. die Ketten',
        en: 'necklace; chain',
        examples: [
          { de: 'Meine Mutter bekommt eine schöne Kette zum Geburtstag.', en: 'My mother is getting a beautiful necklace for her birthday.' },
        ],
      },
      {
        de: 'das Kind',
        pron: 'dahs kint',
        grammar: 'pl. die Kinder',
        en: 'child',
        examples: [
          { de: 'Wie viele Kinder haben Sie?', en: 'How many children do you have?' },
        ],
      },
      {
        de: 'der Kindergarten',
        pron: 'dair KIN-der-gar-ten',
        grammar: 'pl. die Kindergärten',
        en: 'nursery school, kindergarten',
        examples: [
          { de: 'Die kleine Laura geht schon in den Kindergarten.', en: 'Little Laura already goes to kindergarten.' },
        ],
      },
      {
        de: 'das Kino',
        pron: 'dahs KEE-noh',
        grammar: 'pl. die Kinos',
        en: 'cinema',
        examples: [
          { de: 'Gehen wir heute Abend zusammen ins Kino?', en: 'Shall we go to the cinema together this evening?' },
        ],
      },
      {
        de: 'der Kiosk',
        pron: 'dair KEE-osk',
        grammar: 'pl. die Kioske',
        en: 'kiosk, newsstand',
        examples: [
          { de: 'Zeitungen kannst du am Kiosk kaufen.', en: 'You can buy newspapers at the kiosk.' },
        ],
      },
      {
        de: 'die Kirche',
        pron: 'dee KIR-khuh',
        grammar: 'pl. die Kirchen',
        en: 'church',
        examples: [
          { de: 'Diese Kirche ist fast 800 Jahre alt.', en: 'This church is almost 800 years old.' },
        ],
      },
      {
        de: 'klappen',
        pron: 'KLAH-pen',
        grammar: 'klappt · hat geklappt',
        en: 'to work out',
        examples: [
          { de: 'Können wir uns heute Mittag treffen? – Ja, das klappt.', en: 'Can we meet at lunchtime today? – Yes, that works.' },
          { de: 'Wie war die Reise? - Gut, es hat alles super geklappt.', en: 'How was the trip? - Good, everything went really well.' },
        ],
      },
      {
        de: 'klar',
        pron: 'klahr',
        en: 'clear; of course',
        examples: [
          { de: 'Kommst du mit? – Klar!', en: 'Are you coming along? – Of course!' },
          { de: 'Ich komme morgen zu deiner Party, das ist doch klar.', en: 'I\'m coming to your party tomorrow, that goes without saying.' },
        ],
      },
      {
        de: 'das Klavier',
        pron: 'dahs klah-VEER',
        grammar: 'pl. die Klaviere',
        en: 'piano',
        examples: [
          { de: 'Jakob kann sehr gut Klavier spielen.', en: 'Jakob can play the piano very well.' },
        ],
      },
      {
        de: 'das Kleid',
        pron: 'dahs klyte',
        grammar: 'pl. die Kleider',
        en: 'dress; (pl.) clothes',
        examples: [
          { de: 'Julia möchte ein rotes Kleid kaufen.', en: 'Julia wants to buy a red dress.' },
        ],
      },
      {
        de: 'die Kleidung',
        pron: 'dee KLY-doong',
        grammar: 'no plural',
        en: 'clothing, clothes',
        examples: [
          { de: 'Wo finde ich Kleidung? – Hosen im ersten, Kleider und Röcke im zweiten Stock.', en: 'Where can I find clothing? – Trousers on the first floor, dresses and skirts on the second.' },
        ],
      },
      {
        de: 'klein',
        pron: 'klyne',
        en: 'small, little',
        examples: [
          { de: 'Unsere Wohnung ist sehr klein.', en: 'Our flat is very small.' },
          { de: 'Unsere Tochter ist noch klein. Sie ist erst zwei Jahre alt.', en: 'Our daughter is still little. She\'s only two years old.' },
          { de: 'Wir machen am Wochenende einen kleinen Ausflug.', en: 'We\'re going on a little trip at the weekend.' },
        ],
      },
      {
        de: 'klug',
        pron: 'klook',
        en: 'clever, smart',
        examples: [
          { de: 'Molly ist ein kluges Mädchen.', en: 'Molly is a clever girl.' },
          { de: 'Lisa ist sehr klug. Sie bekommt immer gute Noten.', en: 'Lisa is very clever. She always gets good grades.' },
          { de: 'Das ist klug von dir.', en: 'That\'s smart of you.' },
        ],
      },
      {
        de: 'kochen',
        pron: 'KOKH-en',
        grammar: 'kocht · hat gekocht',
        en: 'to cook; to boil',
        examples: [
          { de: 'Herr Georgi kann gut kochen.', en: 'Mr Georgi is a good cook.' },
          { de: 'Das Wasser kocht.', en: 'The water is boiling.' },
        ],
      },
      {
        de: 'der Koffer',
        pron: 'dair KOF-er',
        grammar: 'pl. die Koffer',
        en: 'suitcase',
        examples: [
          { de: 'Hast du den Koffer schon gepackt?', en: 'Have you packed the suitcase yet?' },
        ],
      },
      {
        de: 'der Kollege / die Kollegin',
        pron: 'dair ko-LAY-guh / dee ko-LAY-gin',
        grammar: 'pl. die Kollegen / die Kolleginnen',
        en: 'colleague',
        examples: [
          { de: 'Wie heißt die neue Kollegin?', en: 'What\'s the new colleague\'s name?' },
        ],
      },
      {
        de: 'komisch',
        pron: 'KOH-mish',
        en: 'funny; strange, odd',
        examples: [
          { de: 'Der Film war sehr komisch. Wir haben viel gelacht.', en: 'The film was very funny. We laughed a lot.' },
          { de: 'Eine grüne Hose und gelbe Schuhe? Das sieht komisch aus.', en: 'Green trousers and yellow shoes? That looks odd.' },
          { de: 'Das Essen schmeckt komisch. Probier mal!', en: 'The food tastes strange. Try it!' },
        ],
      },
      {
        de: 'kommen',
        pron: 'KOM-en',
        grammar: 'kommt · ist gekommen',
        en: 'to come',
        examples: [
          { de: 'Woher kommen Sie? – Aus Frankreich.', en: 'Where are you from? – From France.' },
          { de: 'Er wird bald kommen.', en: 'He\'ll come soon.' },
        ],
      },
      {
        de: 'können',
        pron: 'KUR-nen',
        grammar: 'kann · konnte · hat gekonnt',
        en: 'can, to be able to; to know (a language)',
        examples: [
          { de: 'Ich kann Deutsch und Russisch. Aber Englisch kann ich nicht.', en: 'I know German and Russian. But I don\'t know English.' },
          { de: 'Können Sie mir helfen?', en: 'Can you help me?' },
          { de: 'Du kannst durch den Park laufen, das ist am schnellsten.', en: 'You can walk through the park, that\'s the quickest.' },
          { de: 'Kann ich jetzt nach Hause gehen?', en: 'Can I go home now?' },
          { de: 'Sie können mit dem Bus an den Bahnhof fahren.', en: 'You can take the bus to the station.' },
        ],
      },
      {
        de: 'der Kontakt',
        pron: 'dair kon-TAHKT',
        grammar: 'pl. die Kontakte',
        en: 'contact',
        examples: [
          { de: 'Ich habe wenig Kontakt zu meinen Kollegen.', en: 'I have little contact with my colleagues.' },
          { de: 'Bitte schicken Sie mir Ihre Kontaktdaten!', en: 'Please send me your contact details!' },
        ],
      },
      {
        de: 'das Konto',
        pron: 'dahs KON-toh',
        grammar: 'pl. die Konten',
        en: '(bank) account',
        examples: [
          { de: 'Das Geld überweisen wir am ersten März auf Ihr Konto.', en: 'We\'ll transfer the money to your account on the first of March.' },
        ],
      },
      {
        de: 'kontrollieren',
        pron: 'kon-tro-LEE-ren',
        grammar: 'kontrolliert · hat kontrolliert',
        en: 'to check, to inspect',
        examples: [
          { de: 'Können Sie bei meinem Auto bitte das Öl kontrollieren?', en: 'Can you check the oil in my car, please?' },
          { de: 'Bitte öffnen Sie Ihren Koffer, wir müssen Ihr Gepäck kontrollieren.', en: 'Please open your suitcase, we have to inspect your luggage.' },
        ],
      },
      {
        de: 'das Konzert',
        pron: 'dahs kon-TSAIRT',
        grammar: 'pl. die Konzerte',
        en: 'concert',
        examples: [
          { de: 'Für das Konzert am Sonntag gibt es noch Karten.', en: 'There are still tickets for the concert on Sunday.' },
        ],
      },
      {
        de: 'der Kopf',
        pron: 'dair kopf',
        grammar: 'pl. die Köpfe',
        en: 'head',
        examples: [
          { de: 'Mein Kopf tut weh!', en: 'My head hurts!' },
        ],
      },
      {
        de: 'der Körper',
        pron: 'dair KUR-per',
        grammar: 'pl. die Körper',
        en: 'body',
        examples: [
          { de: 'Der Arzt sagt, ich muss etwas für meinen Körper tun, z. B. schwimmen oder Fahrrad fahren.', en: 'The doctor says I need to do something for my body, e.g. swimming or cycling.' },
        ],
      },
      {
        de: 'die Kosmetik',
        pron: 'dee kos-MAY-tik',
        grammar: 'no plural',
        en: 'cosmetics',
        examples: [
          { de: 'Kosmetik können Sie im Erdgeschoss kaufen.', en: 'You can buy cosmetics on the ground floor.' },
        ],
      },
      {
        de: 'kosten',
        pron: 'KOS-ten',
        grammar: 'kostet · hat gekostet',
        en: 'to cost',
        examples: [
          { de: 'Wie viel kostet das Buch? – 20 Euro.', en: 'How much does the book cost? – 20 euros.' },
        ],
      },
      {
        de: 'kostenlos',
        pron: 'KOS-ten-lohs',
        en: 'free (of charge)',
        examples: [
          { de: 'Diese Zeitschrift kostet nichts. Sie ist kostenlos.', en: 'This magazine costs nothing. It\'s free.' },
        ],
      },
      {
        de: 'krank',
        pron: 'krahnk',
        en: 'ill, sick',
        examples: [
          { de: 'Ich kann heute nicht zur Arbeit kommen, ich bin krank und liege im Bett.', en: 'I can\'t come to work today, I\'m ill and in bed.' },
        ],
      },
      {
        de: 'das Krankenhaus',
        pron: 'dahs KRAHN-ken-house',
        grammar: 'pl. die Krankenhäuser',
        en: 'hospital',
        examples: [
          { de: 'Meine Tante ist im Krankenhaus.', en: 'My aunt is in hospital.' },
          { de: 'Er hat sich verletzt und muss ins Krankenhaus.', en: 'He has hurt himself and has to go to hospital.' },
        ],
      },
      {
        de: 'die Krankenkasse',
        pron: 'dee KRAHN-ken-kah-suh',
        grammar: 'pl. die Krankenkassen',
        en: 'health insurance (company)',
        examples: [
          { de: 'Bei welcher Krankenkasse sind Sie?', en: 'Which health insurance are you with?' },
        ],
      },
      {
        de: 'die Krankheit',
        pron: 'dee KRAHNK-hite',
        grammar: 'pl. die Krankheiten',
        en: 'illness, disease',
        examples: [
          { de: 'Welche Krankheit hat Herr Brandner?', en: 'What illness does Mr Brandner have?' },
        ],
      },
      {
        de: 'der Kredit',
        pron: 'dair kray-DEET',
        grammar: 'pl. die Kredite',
        en: 'loan, credit',
        examples: [
          { de: 'Ich brauche einen Kredit von der Bank.', en: 'I need a loan from the bank.' },
          { de: 'Bezahlen Sie mit Kreditkarte?', en: 'Are you paying by credit card?' },
        ],
      },
      {
        de: 'die Kreuzung',
        pron: 'dee KROY-tsoong',
        grammar: 'pl. die Kreuzungen',
        en: 'crossroads, junction',
        examples: [
          { de: 'Fahren Sie an der nächsten Kreuzung rechts.', en: 'Turn right at the next junction.' },
        ],
      },
      {
        de: 'kriegen',
        pron: 'KREE-gen',
        grammar: 'kriegt · hat gekriegt',
        en: 'to get (informal); to catch',
        examples: [
          { de: 'Ich kriege 15 Euro pro Stunde für meinen Job.', en: 'I get 15 euros an hour for my job.' },
          { de: 'Auch wenn du schnell läufst: Ich kriege dich.', en: 'Even if you run fast: I\'ll catch you.' },
          { de: 'Was kriegen Sie? – Ein Käsebrötchen, bitte.', en: 'What will you have? – A cheese roll, please.' },
        ],
      },
      {
        de: 'der Krimi',
        pron: 'dair KREE-mee',
        grammar: 'pl. die Krimis',
        en: 'crime novel / film, thriller',
        examples: [
          { de: 'Miriam liest gern spannende Krimis.', en: 'Miriam likes reading exciting crime novels.' },
          { de: 'Schauen wir am Sonntag zusammen den Tatort? – Nein, ich mag keine Krimis.', en: 'Shall we watch Tatort together on Sunday? – No, I don\'t like crime shows.' },
        ],
      },
      {
        de: 'die Küche',
        pron: 'dee KEW-khuh',
        grammar: 'pl. die Küchen',
        en: 'kitchen; cuisine',
        examples: [
          { de: 'Ich suche eine neue Wohnung mit drei Zimmern, Küche und Bad.', en: 'I\'m looking for a new flat with three rooms, kitchen and bathroom.' },
        ],
      },
      {
        de: 'der Kuchen',
        pron: 'dair KOO-khen',
        grammar: 'pl. die Kuchen',
        en: 'cake',
        examples: [
          { de: 'Er isst sonntags ein Stück Kuchen.', en: 'He eats a piece of cake on Sundays.' },
          { de: 'Schokoladenkuchen schmeckt mir am besten.', en: 'I like chocolate cake best.' },
        ],
      },
      {
        de: 'kühl',
        pron: 'kewl',
        en: 'cool',
        examples: [
          { de: 'Es ist kühl draußen. Zieh dir eine Jacke an.', en: 'It\'s cool outside. Put on a jacket.' },
        ],
      },
      {
        de: 'der Kühlschrank',
        pron: 'dair KEWL-shrahnk',
        grammar: 'pl. die Kühlschränke',
        en: 'fridge',
        examples: [
          { de: 'Haben wir noch Milch? – Ja, im Kühlschrank.', en: 'Do we have any milk left? – Yes, in the fridge.' },
        ],
      },
      {
        de: 'die Kultur',
        pron: 'dee kool-TOOR',
        grammar: 'pl. die Kulturen',
        en: 'culture',
        examples: [
          { de: 'Ich finde fremde Länder und Kulturen sehr interessant.', en: 'I find foreign countries and cultures very interesting.' },
          { de: 'Jana interessiert sich sehr für Kultur. Sie geht jede Woche ins Theater oder ins Museum.', en: 'Jana is very interested in culture. She goes to the theatre or a museum every week.' },
        ],
      },
      {
        de: 'kümmern (sich)',
        pron: 'KEW-mern (zikh)',
        grammar: 'kümmert · hat gekümmert',
        en: 'to take care of, to look after',
        examples: [
          { de: 'Sonja kann nicht arbeiten. Sie muss sich um ihre Tochter kümmern.', en: 'Sonja can\'t work. She has to look after her daughter.' },
          { de: 'Ich habe jetzt keine Zeit. Ich muss mich um das Essen kümmern.', en: 'I don\'t have time now. I have to see to the food.' },
        ],
      },
      {
        de: 'der Kunde / die Kundin',
        pron: 'dair KOON-duh / dee KOON-din',
        grammar: 'pl. die Kunden / die Kundinnen',
        en: 'customer, client',
        examples: [
          { de: 'Einen Moment, bitte. Ich habe eine Kundin.', en: 'One moment, please. I have a customer.' },
        ],
      },
      {
        de: 'kündigen',
        pron: 'KEWN-di-gen',
        grammar: 'kündigt · hat gekündigt',
        en: 'to quit (a job); to cancel',
        examples: [
          { de: 'Meine Arbeit gefällt mir nicht mehr. Ich habe heute gekündigt.', en: 'I don\'t like my job any more. I handed in my notice today.' },
        ],
      },
      {
        de: 'die Kunst',
        pron: 'dee koonst',
        grammar: 'pl. die Künste',
        en: 'art',
        examples: [
          { de: 'Ich verstehe nichts von moderner Kunst.', en: 'I don\'t understand anything about modern art.' },
          { de: 'Kunst war mein Lieblingsfach in der Schule.', en: 'Art was my favourite subject at school.' },
        ],
      },
      {
        de: 'der Kurs',
        pron: 'dair koors',
        grammar: 'pl. die Kurse',
        en: 'course, class',
        examples: [
          { de: 'Der Deutschkurs dauert zwei Monate.', en: 'The German course lasts two months.' },
        ],
      },
      {
        de: 'kurz',
        pron: 'koorts',
        en: 'short; briefly',
        examples: [
          { de: 'Ricardo hat kurze Haare.', en: 'Ricardo has short hair.' },
          { de: 'Kann ich Sie kurz sprechen?', en: 'Can I speak to you briefly?' },
        ],
      },
    ],
  },
  {
    letter: 'L',
    entries: [
      {
        de: 'lachen',
        pron: 'LAHKH-en',
        grammar: 'lacht · hat gelacht',
        en: 'to laugh',
        examples: [
          { de: 'Die Kinder lachen über den Witz.', en: 'The children laugh at the joke.' },
          { de: 'Lachen ist gesund.', en: 'Laughing is healthy.' },
        ],
      },
      {
        de: 'der Laden',
        pron: 'dair LAH-den',
        grammar: 'pl. die Läden',
        en: 'shop, store',
        examples: [
          { de: 'Ich kaufe meine Kleider immer in einem kleinen Laden im Zentrum.', en: 'I always buy my clothes in a small shop in the centre.' },
        ],
      },
      {
        de: 'die Lampe',
        pron: 'dee LAHM-puh',
        grammar: 'pl. die Lampen',
        en: 'lamp',
        examples: [
          { de: 'Mach bitte die Lampe an. Es ist so dunkel.', en: 'Please turn on the lamp. It\'s so dark.' },
        ],
      },
      {
        de: 'das Land',
        pron: 'dahs lahnt',
        grammar: 'pl. die Länder',
        en: 'country; countryside',
        examples: [
          { de: 'Deutschland ist ein schönes Land.', en: 'Germany is a beautiful country.' },
          { de: 'Möchten Sie lieber auf dem Land oder in der Stadt wohnen?', en: 'Would you rather live in the country or in the city?' },
        ],
      },
      {
        de: 'die Landschaft',
        pron: 'dee LAHNT-shahft',
        grammar: 'pl. die Landschaften',
        en: 'landscape, scenery',
        examples: [
          { de: 'Die Landschaft ist sehr schön.', en: 'The scenery is very beautiful.' },
        ],
      },
      {
        de: 'lang',
        pron: 'lahng',
        en: 'long',
        examples: [
          { de: 'Die Hose ist zu lang. Können Sie sie ändern?', en: 'The trousers are too long. Can you alter them?' },
        ],
      },
      {
        de: 'lange',
        pron: 'LAHNG-uh',
        en: 'for a long time; long',
        examples: [
          { de: 'Wie lange fährt der Zug von Hamburg nach Berlin?', en: 'How long does the train take from Hamburg to Berlin?' },
        ],
      },
      {
        de: 'langsam',
        pron: 'LAHNG-zahm',
        en: 'slow; slowly',
        examples: [
          { de: 'Könnten Sie bitte etwas langsamer sprechen?', en: 'Could you please speak a little more slowly?' },
        ],
      },
      {
        de: 'langweilig',
        pron: 'LAHNG-vy-likh',
        en: 'boring',
        examples: [
          { de: 'Mir ist langweilig.', en: 'I\'m bored.' },
          { de: 'Sie findet Fußball sehr langweilig.', en: 'She finds football very boring.' },
        ],
      },
      {
        de: 'der/das Laptop',
        pron: 'dair / dahs LEP-top',
        grammar: 'pl. die Laptops',
        en: 'laptop',
        examples: [
          { de: 'Ich brauche einen neuen Laptop.', en: 'I need a new laptop.' },
        ],
      },
      {
        de: 'lassen',
        pron: 'LAH-sen',
        grammar: 'lässt · hat gelassen',
        en: 'to let; to leave',
        examples: [
          { de: 'Lass mich in Ruhe!', en: 'Leave me alone!' },
          { de: 'Kann ich mein Auto hier stehen lassen?', en: 'Can I leave my car parked here?' },
          { de: 'Ich kann meine kleine Tochter noch nicht allein lassen.', en: 'I can\'t leave my little daughter alone yet.' },
        ],
      },
      {
        de: 'laufen',
        pron: 'LOW-fen',
        grammar: 'läuft · ist gelaufen',
        en: 'to run; to walk; to be showing (film)',
        examples: [
          { de: 'Ich gehe jeden Morgen laufen.', en: 'I go running every morning.' },
          { de: 'Unsere Tochter ist erst ein Jahr alt, aber sie kann schon laufen.', en: 'Our daughter is only one year old, but she can already walk.' },
          { de: 'Wann läuft der Film?', en: 'When is the film showing?' },
        ],
      },
      {
        de: 'laut',
        pron: 'lowt',
        en: 'loud; loudly',
        examples: [
          { de: 'Nicht so laut! Das Baby schläft.', en: 'Not so loud! The baby is sleeping.' },
        ],
      },
      {
        de: 'leben',
        pron: 'LAY-ben',
        grammar: 'lebt · hat gelebt',
        en: 'to live',
        examples: [
          { de: 'Sie lebt bei ihrer Schwester.', en: 'She lives with her sister.' },
          { de: 'Ihre Großeltern leben nicht mehr.', en: 'Her grandparents are no longer alive.' },
        ],
      },
      {
        de: 'das Leben',
        pron: 'dahs LAY-ben',
        grammar: 'pl. die Leben',
        en: 'life',
        examples: [
          { de: 'Hier in London ist das Leben teuer.', en: 'Life is expensive here in London.' },
        ],
      },
      {
        de: 'die Lebensmittel',
        pron: 'dee LAY-bens-mit-el',
        grammar: 'plural only',
        en: 'groceries, food',
        examples: [
          { de: 'Lebensmittel bekommen Sie im Supermarkt.', en: 'You can get groceries at the supermarket.' },
        ],
      },
      {
        de: 'leer',
        pron: 'lair',
        en: 'empty',
        examples: [
          { de: 'Die Kanne ist fast leer. Ich mache neuen Tee.', en: 'The pot is almost empty. I\'ll make fresh tea.' },
        ],
      },
      {
        de: 'legen',
        pron: 'LAY-gen',
        grammar: 'legt · hat gelegt',
        en: 'to lay, to put (flat)',
        examples: [
          { de: 'Legen Sie das Buch auf den Tisch.', en: 'Put the book on the table.' },
        ],
      },
      {
        de: 'leicht',
        pron: 'lykht',
        en: 'light (weight); easy',
        examples: [
          { de: 'Das Paket ist leicht, es wiegt nur ein Kilo.', en: 'The parcel is light; it only weighs one kilo.' },
          { de: 'Die Aufgabe ist nicht leicht.', en: 'The task is not easy.' },
        ],
      },
      {
        de: 'leider',
        pron: 'LY-der',
        en: 'unfortunately',
        examples: [
          { de: 'Leider kann ich nicht kommen. Ich muss zum Arzt.', en: 'Unfortunately I can\'t come. I have to go to the doctor.' },
        ],
      },
      {
        de: 'leidtun/leid tun',
        pron: 'LITE-toon / lite toon',
        grammar: 'tut leid · hat leidgetan',
        en: 'to be sorry',
        examples: [
          { de: 'Es tut mir leid, dass ich nicht kommen kann.', en: 'I\'m sorry that I can\'t come.' },
        ],
      },
      {
        de: 'leihen',
        pron: 'LY-en',
        grammar: 'leiht · hat geliehen',
        en: 'to lend; to borrow',
        examples: [
          { de: 'Kannst du mir fünf Euro leihen?', en: 'Can you lend me five euros?' },
        ],
      },
      {
        de: 'leise',
        pron: 'LY-zuh',
        en: 'quiet; quietly',
        examples: [
          { de: 'Seid leise. Die anderen schlafen schon.', en: 'Be quiet. The others are already asleep.' },
        ],
      },
      {
        de: 'lernen',
        pron: 'LAIR-nen',
        grammar: 'lernt · hat gelernt',
        en: 'to learn; to study',
        examples: [
          { de: 'Wie lange lernen Sie schon Deutsch?', en: 'How long have you been learning German?' },
        ],
      },
      {
        de: 'lesen',
        pron: 'LAY-zen',
        grammar: 'liest · hat gelesen',
        en: 'to read',
        examples: [
          { de: 'In der Schule lesen wir ein Buch von Goethe.', en: 'At school we are reading a book by Goethe.' },
        ],
      },
      {
        de: 'letzt-',
        pron: 'letst-',
        en: 'last',
        examples: [
          { de: 'Morgen ist der letzte Kurstag.', en: 'Tomorrow is the last day of the course.' },
          { de: 'Was hast du letzte Woche gemacht?', en: 'What did you do last week?' },
        ],
      },
      {
        de: 'die Leute',
        pron: 'dee LOY-tuh',
        grammar: 'plural only',
        en: 'people',
        examples: [
          { de: 'Auf der Party sind viele Leute.', en: 'There are lots of people at the party.' },
        ],
      },
      {
        de: 'das Licht',
        pron: 'dahs likht',
        grammar: 'pl. die Lichter',
        en: 'light',
        examples: [
          { de: 'Es ist so dunkel. Mach bitte das Licht an!', en: 'It\'s so dark. Please turn on the light!' },
        ],
      },
      {
        de: 'lieb-',
        pron: 'leep-',
        en: 'dear; kind; (lieber) rather',
        examples: [
          { de: 'Liebe Susanne, lieber Hans,', en: 'Dear Susanne, dear Hans,' },
          { de: 'Ich fahre lieber mit dem Zug als mit dem Bus.', en: 'I prefer going by train to going by bus.' },
          { de: 'Möchtest du Pommes oder lieber eine Pizza?', en: 'Would you like fries, or would you rather have a pizza?' },
        ],
      },
      {
        de: 'lieben',
        pron: 'LEE-ben',
        grammar: 'liebt · hat geliebt',
        en: 'to love',
        examples: [
          { de: 'Ich liebe dich!', en: 'I love you!' },
        ],
      },
      {
        de: 'Lieblings-',
        pron: 'LEEP-lings-',
        en: 'favourite (prefix)',
        examples: [
          { de: 'Meine Lieblingsfarbe ist Blau.', en: 'My favourite colour is blue.' },
        ],
      },
      {
        de: 'das Lied',
        pron: 'dahs leet',
        grammar: 'pl. die Lieder',
        en: 'song',
        examples: [
          { de: 'Zum Geburtstag singen wir dir ein Lied.', en: 'We\'ll sing you a song for your birthday.' },
        ],
      },
      {
        de: 'liefern',
        pron: 'LEE-fern',
        grammar: 'liefert · hat geliefert',
        en: 'to deliver',
        examples: [
          { de: 'Wir liefern Ihnen den Schrank nach Hause.', en: 'We\'ll deliver the wardrobe to your home.' },
        ],
      },
      {
        de: 'liegen',
        pron: 'LEE-gen',
        grammar: 'liegt · hat/ist gelegen',
        en: 'to lie; to be located',
        examples: [
          { de: 'Die Zeitung liegt auf dem Tisch.', en: 'The newspaper is lying on the table.' },
          { de: 'Judith liegt noch im Bett.', en: 'Judith is still in bed.' },
          { de: 'Frankfurt liegt am Main.', en: 'Frankfurt is on the River Main.' },
        ],
      },
      {
        de: 'der Link',
        pron: 'dair link',
        grammar: 'pl. die Links',
        en: 'link',
        examples: [
          { de: 'Ich schicke dir einen Link zu Deutschübungen.', en: 'I\'ll send you a link to German exercises.' },
        ],
      },
      {
        de: 'links',
        pron: 'links',
        en: 'left; on the left',
        examples: [
          { de: 'Gehen Sie die nächste Straße links.', en: 'Take the next street on the left.' },
        ],
      },
      {
        de: 'der Löffel',
        pron: 'dair LUR-fel',
        grammar: 'pl. die Löffel',
        en: 'spoon',
        examples: [
          { de: 'Bitte bringen Sie mir einen Löffel.', en: 'Please bring me a spoon.' },
        ],
      },
      {
        de: 'das Lokal',
        pron: 'dahs loh-KAHL',
        grammar: 'pl. die Lokale',
        en: 'pub, restaurant',
        examples: [
          { de: 'Gibt es hier in der Nähe ein gutes Lokal?', en: 'Is there a good restaurant near here?' },
        ],
      },
      {
        de: 'die Lüge',
        pron: 'dee LEW-guh',
        grammar: 'pl. die Lügen',
        en: 'lie',
        examples: [
          { de: 'Das stimmt nicht! Das ist eine Lüge!', en: 'That\'s not true! That\'s a lie!' },
        ],
      },
      {
        de: 'lügen',
        pron: 'LEW-gen',
        grammar: 'lügt · hat gelogen',
        en: 'to lie (tell lies)',
        examples: [
          { de: 'Du sollst nicht lügen.', en: 'You shouldn\'t lie.' },
          { de: 'Glaub ihm nicht, er lügt.', en: 'Don\'t believe him, he\'s lying.' },
        ],
      },
      {
        de: 'die Lust',
        pron: 'dee loost',
        grammar: 'no plural',
        en: 'desire; (Lust haben) to feel like',
        examples: [
          { de: 'Gehen wir heute Abend ins Kino? - Nein, ich habe keine Lust.', en: 'Shall we go to the cinema tonight? - No, I don\'t feel like it.' },
          { de: 'Ich habe Lust auf Schokolade.', en: 'I feel like some chocolate.' },
        ],
      },
      {
        de: 'lustig',
        pron: 'LOOS-tikh',
        en: 'funny; fun',
        examples: [
          { de: 'Warum lacht ihr? Was ist so lustig?', en: 'Why are you laughing? What\'s so funny?' },
          { de: 'Ich mag lustige Filme.', en: 'I like funny films.' },
        ],
      },
    ],
  },
  {
    letter: 'M',
    entries: [
      {
        de: 'machen',
        pron: 'MAHKH-en',
        grammar: 'macht · hat gemacht',
        en: 'to do; to make',
        examples: [
          { de: 'Was machst du heute Abend?', en: 'What are you doing tonight?' },
          { de: 'Ich muss jetzt das Essen machen.', en: 'I have to make dinner now.' },
          { de: 'Das macht 5 Euro 95.', en: 'That comes to 5 euros 95.' },
          { de: 'Entschuldigung! - Das macht doch nichts.', en: 'Sorry! - That doesn\'t matter at all.' },
        ],
      },
      {
        de: 'das Mädchen',
        pron: 'dahs MAIT-khen',
        grammar: 'pl. die Mädchen',
        en: 'girl',
        examples: [
          { de: 'Familie Kurz bekommt ein Baby. – Junge oder Mädchen?', en: 'The Kurz family is having a baby. – Boy or girl?' },
        ],
      },
      {
        de: 'der Magen',
        pron: 'dair MAH-gen',
        grammar: 'pl. die Mägen',
        en: 'stomach',
        examples: [
          { de: 'Mein Magen tut weh.', en: 'My stomach hurts.' },
        ],
      },
      {
        de: 'die Mailbox',
        pron: 'dee MAYL-boks',
        grammar: 'pl. die Mailboxen',
        en: 'voicemail',
        examples: [
          { de: 'Hier ist die Mailbox von Susanne König.', en: 'This is Susanne König\'s voicemail.' },
          { de: 'Ich habe dir auf die Mailbox gesprochen.', en: 'I left you a voicemail.' },
        ],
      },
      {
        de: 'mal / das Mal',
        pron: 'mahl / dahs mahl',
        grammar: 'pl. die Male',
        en: 'just (softener); time, occasion',
        examples: [
          { de: 'Sag mal, wie gefällt dir mein neues Kleid?', en: 'Tell me, how do you like my new dress?' },
          { de: 'Das erste Mal war ich vor fünf Jahren in England.', en: 'The first time I was in England was five years ago.' },
          { de: 'Tschüss, bis zum nächsten Mal!', en: 'Bye, until next time!' },
        ],
      },
      {
        de: 'malen',
        pron: 'MAH-len',
        grammar: 'malt · hat gemalt',
        en: 'to paint',
        examples: [
          { de: 'Mein Sohn kann gut malen.', en: 'My son is good at painting.' },
        ],
      },
      {
        de: 'man',
        pron: 'mahn',
        en: 'one, you, people (in general)',
        examples: [
          { de: 'Wie schreibt man das?', en: 'How do you spell that?' },
          { de: 'Hier darf man nicht rauchen.', en: 'You\'re not allowed to smoke here.' },
        ],
      },
      {
        de: 'manch-',
        pron: 'mahnkh-',
        en: 'some, many a',
        examples: [
          { de: 'Manche Nachbarn sind unfreundlich.', en: 'Some neighbours are unfriendly.' },
        ],
      },
      {
        de: 'manchmal',
        pron: 'MAHNKH-mahl',
        en: 'sometimes',
        examples: [
          { de: 'Manchmal essen wir im Restaurant.', en: 'Sometimes we eat at a restaurant.' },
          { de: 'Rauchen Sie? - Manchmal.', en: 'Do you smoke? - Sometimes.' },
        ],
      },
      {
        de: 'der Mann',
        pron: 'dair mahn',
        grammar: 'pl. die Männer',
        en: 'man; husband',
        examples: [
          { de: 'Mein Mann ist Polizist.', en: 'My husband is a police officer.' },
        ],
      },
      {
        de: 'männlich',
        pron: 'MEN-likh',
        en: 'male',
        examples: [
          { de: 'Bitte wählen Sie: „weiblich“ oder „männlich“.', en: 'Please choose: "female" or "male".' },
        ],
      },
      {
        de: 'die Mannschaft',
        pron: 'dee MAHN-shahft',
        grammar: 'pl. die Mannschaften',
        en: 'team',
        examples: [
          { de: 'Meine Lieblingsmannschaft hat 1:0 verloren.', en: 'My favourite team lost 1–0.' },
        ],
      },
      {
        de: 'der Mantel',
        pron: 'dair MAHN-tel',
        grammar: 'pl. die Mäntel',
        en: 'coat',
        examples: [
          { de: 'Es ist kalt. Zieh deinen Mantel an!', en: 'It\'s cold. Put your coat on!' },
        ],
      },
      {
        de: 'der Markt',
        pron: 'dair markt',
        grammar: 'pl. die Märkte',
        en: 'market',
        examples: [
          { de: 'Ich gehe heute auf den Markt.', en: 'I\'m going to the market today.' },
          { de: 'Samstags ist hier Markt.', en: 'There\'s a market here on Saturdays.' },
        ],
      },
      {
        de: 'die Maschine',
        pron: 'dee mah-SHEE-nuh',
        grammar: 'pl. die Maschinen',
        en: 'machine',
        examples: [
          { de: 'Die Waschmaschine funktioniert sehr gut.', en: 'The washing machine works very well.' },
        ],
      },
      {
        de: 'das Medikament',
        pron: 'dahs may-dee-kah-MENT',
        grammar: 'pl. die Medikamente',
        en: 'medicine, medication',
        examples: [
          { de: 'Nehmen Sie dieses Medikament dreimal pro Tag!', en: 'Take this medicine three times a day!' },
        ],
      },
      {
        de: 'das Meer',
        pron: 'dahs mair',
        grammar: 'pl. die Meere',
        en: 'sea',
        examples: [
          { de: 'Wir machen Urlaub am Meer.', en: 'We\'re going on holiday by the sea.' },
        ],
      },
      {
        de: 'mehr',
        pron: 'mair',
        en: 'more',
        examples: [
          { de: 'Dieses Auto kostet 1.000 Euro mehr als das andere.', en: 'This car costs 1,000 euros more than the other one.' },
          { de: 'Mehr kann ich nicht essen!', en: 'I can\'t eat any more!' },
          { de: 'Ich möchte mehr Taschengeld.', en: 'I\'d like more pocket money.' },
        ],
      },
      {
        de: 'meinen',
        pron: 'MY-nen',
        grammar: 'meint · hat gemeint',
        en: 'to mean; to think',
        examples: [
          { de: 'Wie meinst du das? Erklär mir das bitte genauer!', en: 'What do you mean by that? Please explain it to me more precisely!' },
          { de: 'Der Film ist gut. Was meinst du?', en: 'The film is good. What do you think?' },
        ],
      },
      {
        de: 'die Meinung',
        pron: 'dee MY-noong',
        grammar: 'pl. die Meinungen',
        en: 'opinion',
        examples: [
          { de: 'Meine Meinung zu dem Thema ist: …', en: 'My opinion on the topic is: …' },
          { de: 'Was ist deine Meinung dazu?', en: 'What\'s your opinion on that?' },
          { de: 'Ich habe meine Meinung geändert.', en: 'I\'ve changed my mind.' },
        ],
      },
      {
        de: 'meist-',
        pron: 'myst-',
        en: 'most',
        examples: [
          { de: 'Ich bin neu hier im Haus. Die meisten Nachbarn kenne ich noch nicht.', en: 'I\'m new in the building. I don\'t know most of the neighbours yet.' },
        ],
      },
      {
        de: 'meistens',
        pron: 'MY-stens',
        en: 'mostly, usually',
        examples: [
          { de: 'Meistens trinke ich zum Frühstück nur einen Kaffee.', en: 'Usually I just have a coffee for breakfast.' },
        ],
      },
      {
        de: 'die Menge',
        pron: 'dee MENG-uh',
        grammar: 'pl. die Mengen',
        en: 'amount; (eine Menge) a lot',
        examples: [
          { de: 'Wir haben noch eine Menge Zeit.', en: 'We still have plenty of time.' },
          { de: 'Ich kenne eine Menge Leute in dieser Stadt.', en: 'I know a lot of people in this town.' },
        ],
      },
      {
        de: 'der Mensch',
        pron: 'dair mensh',
        grammar: 'pl. die Menschen',
        en: 'person, human being',
        examples: [
          { de: 'Die Menschen sind hier ein bisschen anders als im Süden.', en: 'The people here are a bit different from in the south.' },
        ],
      },
      {
        de: 'merken',
        pron: 'MAIR-ken',
        grammar: 'merkt · hat gemerkt',
        en: 'to notice; (sich merken) to remember',
        examples: [
          { de: 'Ich kann mir keine Zahlen merken. Ich vergesse sie sofort.', en: 'I can\'t remember numbers. I forget them immediately.' },
          { de: 'Merkst du, dass es wärmer wird?', en: 'Do you notice that it\'s getting warmer?' },
        ],
      },
      {
        de: 'die Messe',
        pron: 'dee MES-uh',
        grammar: 'pl. die Messen',
        en: 'trade fair',
        examples: [
          { de: 'Kommst du mit zur Buchmesse nach Frankfurt?', en: 'Are you coming with me to the book fair in Frankfurt?' },
        ],
      },
      {
        de: 'das Messer',
        pron: 'dahs MES-er',
        grammar: 'pl. die Messer',
        en: 'knife',
        examples: [
          { de: 'Das Messer schneidet nicht gut.', en: 'The knife doesn\'t cut well.' },
          { de: 'Ich habe nur ein Messer. Kannst du mir bitte noch eine Gabel bringen?', en: 'I only have a knife. Can you bring me a fork as well, please?' },
        ],
      },
      {
        de: 'die Miete',
        pron: 'dee MEE-tuh',
        grammar: 'pl. die Mieten',
        en: 'rent',
        examples: [
          { de: 'Wie viel Miete bezahlst du für deine Wohnung?', en: 'How much rent do you pay for your flat?' },
        ],
      },
      {
        de: 'mieten',
        pron: 'MEE-ten',
        grammar: 'mietet · hat gemietet',
        en: 'to rent',
        examples: [
          { de: 'Ich möchte ein Auto mieten.', en: 'I\'d like to rent a car.' },
        ],
      },
      {
        de: 'die Milch',
        pron: 'dee milkh',
        grammar: 'no plural',
        en: 'milk',
        examples: [
          { de: 'Die Milch steht im Kühlschrank.', en: 'The milk is in the fridge.' },
        ],
      },
      {
        de: 'mindestens',
        pron: 'MIN-des-tens',
        en: 'at least',
        examples: [
          { de: 'Bitte kommen Sie mindestens zwei Stunden vor Ihrem Flug zum Flughafen.', en: 'Please arrive at the airport at least two hours before your flight.' },
          { de: 'Schreiben Sie mindestens sieben Sätze!', en: 'Write at least seven sentences!' },
          { de: 'Ich warte schon mindestens 20 Minuten. Wann kommst du denn endlich?', en: 'I\'ve been waiting at least 20 minutes. When are you finally coming?' },
        ],
      },
      {
        de: 'das Mineralwasser',
        pron: 'dahs mee-nuh-RAHL-vahs-er',
        grammar: 'no plural',
        en: 'mineral water',
        examples: [
          { de: 'Ein Glas Mineralwasser, bitte.', en: 'A glass of mineral water, please.' },
        ],
      },
      {
        de: 'mit (+ mitbringen/-kommen/-machen/-nehmen/-spielen)',
        pron: 'mit (+ MIT-brin-gen / -kom-en / -mahkh-en / -nay-men / -shpee-len)',
        en: 'with; along (verb prefix)',
        examples: [
          { de: 'Trinken Sie den Kaffee mit oder ohne Zucker?', en: 'Do you take your coffee with or without sugar?' },
          { de: 'Fahren wir mit dem Auto oder mit dem Zug nach Hamburg?', en: 'Shall we go to Hamburg by car or by train?' },
          { de: 'Ich komme mit meinem Freund.', en: 'I\'m coming with my boyfriend.' },
          { de: 'Ich gehe einkaufen. Soll ich dir was mitbringen?', en: 'I\'m going shopping. Shall I bring you something?' },
          { de: 'Ich gehe ins Kino. Kommst du mit?', en: 'I\'m going to the cinema. Are you coming along?' },
          { de: 'Wir organisieren ein Fest. Möchtest du auch mitmachen?', en: 'We\'re organising a party. Would you like to join in too?' },
          { de: 'Wir fahren am Wochenende in die Berge. Ich muss mein Zelt mitnehmen.', en: 'We\'re going to the mountains at the weekend. I have to take my tent.' },
          { de: 'Warum spielt ihr nicht mit?', en: 'Why aren\'t you playing too?' },
        ],
      },
      {
        de: 'der Mitarbeiter',
        pron: 'dair MIT-ar-by-ter',
        grammar: 'pl. die Mitarbeiter',
        en: 'employee, colleague',
        examples: [
          { de: 'Unsere Firma hat sieben Mitarbeiter.', en: 'Our company has seven employees.' },
        ],
      },
      {
        de: 'das Mittagessen',
        pron: 'dahs MIT-ahk-es-en',
        grammar: 'pl. die Mittagessen',
        en: 'lunch',
        examples: [
          { de: 'Um zwölf Uhr gibt es Mittagessen.', en: 'Lunch is at twelve o\'clock.' },
        ],
      },
      {
        de: 'die Mitte',
        pron: 'dee MIT-uh',
        grammar: 'pl. die Mitten',
        en: 'middle; (Mitte August) mid-',
        examples: [
          { de: 'Den Schrank stellen wir an die Wand, den Tisch in die Mitte.', en: 'We\'ll put the cupboard against the wall and the table in the middle.' },
          { de: 'Ich habe bis Mitte August frei.', en: 'I\'m off until mid-August.' },
        ],
      },
      {
        de: 'das Mittel',
        pron: 'dahs MIT-el',
        grammar: 'pl. die Mittel',
        en: 'remedy; agent, product',
        examples: [
          { de: 'Haben Sie ein Mittel gegen Magenschmerzen?', en: 'Do you have something for stomach ache?' },
          { de: 'Das neue Waschmittel ist sehr gut.', en: 'The new detergent is very good.' },
        ],
      },
      {
        de: 'die Möbel',
        pron: 'dee MUR-bel',
        grammar: 'plural only',
        en: 'furniture',
        examples: [
          { de: 'Eure Möbel sind sehr schön.', en: 'Your furniture is very nice.' },
        ],
      },
      {
        de: 'das Mobiltelefon',
        pron: 'dahs moh-BEEL-tay-lay-fohn',
        grammar: 'pl. die Mobiltelefone',
        en: 'mobile phone',
        examples: [
          { de: 'Wie kann ich Sie erreichen? Haben Sie ein Mobiltelefon?', en: 'How can I reach you? Do you have a mobile phone?' },
        ],
      },
      {
        de: 'möchten',
        pron: 'MURKH-ten',
        grammar: 'möchte · mochte · hat gemocht',
        en: 'would like',
        examples: [
          { de: 'Was möchten Sie trinken?', en: 'What would you like to drink?' },
        ],
      },
      {
        de: 'die Mode',
        pron: 'dee MOH-duh',
        grammar: 'pl. die Moden',
        en: 'fashion',
        examples: [
          { de: 'Wie findest du die neue Mode?', en: 'What do you think of the new fashion?' },
        ],
      },
      {
        de: 'modern',
        pron: 'moh-DERN',
        en: 'modern',
        examples: [
          { de: 'Das Stadtzentrum von Frankfurt ist sehr modern.', en: 'Frankfurt\'s city centre is very modern.' },
        ],
      },
      {
        de: 'mögen',
        pron: 'MUR-gen',
        grammar: 'mag · mochte · hat gemocht',
        en: 'to like',
        examples: [
          { de: 'Magst du Schokolade? - Nein, ich mag keine Süßigkeiten.', en: 'Do you like chocolate? - No, I don\'t like sweets.' },
        ],
      },
      {
        de: 'möglich',
        pron: 'MURK-likh',
        en: 'possible',
        examples: [
          { de: 'Kann ich bitte sofort einen Termin haben? - Das ist leider nicht möglich.', en: 'Can I have an appointment right away, please? - Unfortunately that\'s not possible.' },
        ],
      },
      {
        de: 'der Moment',
        pron: 'dair moh-MENT',
        grammar: 'pl. die Momente',
        en: 'moment',
        examples: [
          { de: 'Einen Moment, bitte.', en: 'One moment, please.' },
          { de: 'Warten Sie bitte einen Moment.', en: 'Please wait a moment.' },
          { de: 'Ich habe im Moment sehr viel zu tun.', en: 'I have a lot to do at the moment.' },
        ],
      },
      {
        de: 'morgen',
        pron: 'MOR-gen',
        en: 'tomorrow',
        examples: [
          { de: 'Morgen beginnt die Schule erst um zehn Uhr.', en: 'Tomorrow school doesn\'t start until ten o\'clock.' },
        ],
      },
      {
        de: 'der Motor',
        pron: 'dair MOH-tor',
        grammar: 'pl. die Motoren',
        en: 'engine',
        examples: [
          { de: 'Der Motor ist kaputt. Das Auto fährt nicht mehr.', en: 'The engine is broken. The car doesn\'t run any more.' },
        ],
      },
      {
        de: 'der Motorroller',
        pron: 'dair MOH-tor-rol-er',
        grammar: 'pl. die Motorroller',
        en: 'scooter',
        examples: [
          { de: 'Oskar fährt mit dem Motorroller zur Arbeit.', en: 'Oskar rides his scooter to work.' },
        ],
      },
      {
        de: 'müde',
        pron: 'MEW-duh',
        en: 'tired',
        examples: [
          { de: 'Ich bin müde. Ich gehe schlafen.', en: 'I\'m tired. I\'m going to bed.' },
        ],
      },
      {
        de: 'der Müll',
        pron: 'dair mewl',
        grammar: 'no plural',
        en: 'rubbish, trash',
        examples: [
          { de: 'Bringst du bitte den Müll raus?', en: 'Will you take the rubbish out, please?' },
          { de: 'Kann ich die Zeitungen wegwerfen? - Ja, sie sind alt. Bring/Wirf sie bitte in den Müll!', en: 'Can I throw the newspapers away? - Yes, they\'re old. Please take/throw them in the bin!' },
        ],
      },
      {
        de: 'der Mund',
        pron: 'dair moont',
        grammar: 'pl. die Münder',
        en: 'mouth',
        examples: [
          { de: 'Öffnen Sie bitte den Mund. Ich möchte in Ihren Hals sehen.', en: 'Please open your mouth. I\'d like to look at your throat.' },
        ],
      },
      {
        de: 'das Museum',
        pron: 'dahs moo-ZAY-oom',
        grammar: 'pl. die Museen',
        en: 'museum',
        examples: [
          { de: 'Im Kunstmuseum gibt es eine neue Ausstellung.', en: 'There\'s a new exhibition at the art museum.' },
        ],
      },
      {
        de: 'die Musik',
        pron: 'dee moo-ZEEK',
        grammar: 'no plural',
        en: 'music',
        examples: [
          { de: 'Wie findest du die Musik?', en: 'What do you think of the music?' },
          { de: 'Spanische Musik gefällt mir gut.', en: 'I really like Spanish music.' },
        ],
      },
      {
        de: 'müssen',
        pron: 'MEW-sen',
        grammar: 'muss · musste',
        en: 'must, to have to',
        examples: [
          { de: 'Ich muss jeden Tag von 8 Uhr bis 18 Uhr arbeiten.', en: 'I have to work from 8 a.m. to 6 p.m. every day.' },
        ],
      },
      {
        de: 'die Mütze',
        pron: 'dee MEWT-suh',
        grammar: 'pl. die Mützen',
        en: 'cap, woolly hat',
        examples: [
          { de: 'Haben Sie rote Mützen?', en: 'Do you have red caps?' },
        ],
      },
    ],
  },
  {
    letter: 'N',
    entries: [
      {
        de: 'nach',
        pron: 'nahkh',
        en: 'to; after; past (time)',
        examples: [
          { de: 'Ich gehe jetzt nach Hause.', en: 'I\'m going home now.' },
          { de: 'Ich fliege nach München.', en: 'I\'m flying to Munich.' },
          { de: 'Es ist schon fünf nach zwölf.', en: 'It\'s already five past twelve.' },
          { de: 'Wir treffen uns nach der Arbeit.', en: 'We\'re meeting after work.' },
        ],
      },
      {
        de: 'der Nachbar / die Nachbarin',
        pron: 'dair NAHKH-bar / dee NAHKH-bah-rin',
        grammar: 'pl. die Nachbarn / die Nachbarinnen',
        en: 'neighbour',
        examples: [
          { de: 'Mein Nachbar kommt aus Brasilien und meine Nachbarin ist Italienerin.', en: 'My (male) neighbour is from Brazil and my (female) neighbour is Italian.' },
          { de: 'Die neuen Nachbarn sind sehr nett.', en: 'The new neighbours are very nice.' },
        ],
      },
      {
        de: 'die Nachricht',
        pron: 'dee NAHKH-rikht',
        grammar: 'pl. die Nachrichten',
        en: 'message; (pl.) the news',
        examples: [
          { de: 'Ich sehe abends immer die Nachrichten im Fernsehen.', en: 'I always watch the news on TV in the evening.' },
          { de: 'Kommst du mit ins Kino? - Ich weiß es noch nicht. Ich schreibe dir später eine Nachricht.', en: 'Are you coming to the cinema? - I don\'t know yet. I\'ll text you later.' },
          { de: 'Sie haben keine neuen Nachrichten.', en: 'You have no new messages.' },
        ],
      },
      {
        de: 'nächste, -er, -es',
        pron: 'NAIKHS-tuh, -ter, -tes',
        en: 'next; nearest',
        examples: [
          { de: 'Sehen wir uns nächste Woche?', en: 'Shall we see each other next week?' },
          { de: 'Ihr nächster Termin ist in einem Monat.', en: 'Your next appointment is in a month.' },
          { de: 'Bis nächstes Mal!', en: 'Until next time!' },
        ],
      },
      {
        de: 'die Nähe',
        pron: 'dee NAY-uh',
        grammar: 'no plural',
        en: 'vicinity; (in der Nähe) nearby',
        examples: [
          { de: 'Die Post ist in der Nähe vom Bahnhof.', en: 'The post office is near the station.' },
        ],
      },
      {
        de: 'der Name',
        pron: 'dair NAH-muh',
        grammar: 'pl. die Namen',
        en: 'name',
        examples: [
          { de: 'Wie ist Ihr Name?', en: 'What is your name?' },
          { de: 'Mein Name ist Thomas Schmidt.', en: 'My name is Thomas Schmidt.' },
          { de: 'Mein Vorname ist Thomas; Schmidt ist der Familienname.', en: 'My first name is Thomas; Schmidt is the surname.' },
        ],
      },
      {
        de: 'nass',
        pron: 'nahss',
        en: 'wet',
        examples: [
          { de: 'Geh nicht mit den nassen Schuhen ins Wohnzimmer!', en: 'Don\'t go into the living room with your wet shoes!' },
          { de: 'Du bist ja ganz nass. Hast du den Regenschirm vergessen?', en: 'You\'re soaking wet. Did you forget your umbrella?' },
        ],
      },
      {
        de: 'die Natur',
        pron: 'dee nah-TOOR',
        grammar: 'no plural',
        en: 'nature',
        examples: [
          { de: 'Ich bin gern draußen in der Natur.', en: 'I like being outdoors in nature.' },
        ],
      },
      {
        de: 'natürlich',
        pron: 'nah-TEWR-likh',
        en: 'of course; natural',
        examples: [
          { de: 'Natürlich helfen wir dir.', en: 'Of course we\'ll help you.' },
          { de: 'Kommst du zu meiner Party? – Natürlich.', en: 'Are you coming to my party? – Of course.' },
        ],
      },
      {
        de: 'neben',
        pron: 'NAY-ben',
        en: 'next to, beside',
        examples: [
          { de: 'Neben mir ist noch ein Platz frei.', en: 'There\'s still a free seat next to me.' },
          { de: 'Die Apotheke ist neben der Post.', en: 'The pharmacy is next to the post office.' },
        ],
      },
      {
        de: 'nebenan',
        pron: 'nay-ben-AHN',
        en: 'next door',
        examples: [
          { de: 'Das ist José. Er wohnt nebenan.', en: 'This is José. He lives next door.' },
        ],
      },
      {
        de: 'neblig',
        pron: 'NAYB-likh',
        en: 'foggy',
        examples: [
          { de: 'Fahr vorsichtig! Es ist neblig.', en: 'Drive carefully! It\'s foggy.' },
        ],
      },
      {
        de: 'nehmen',
        pron: 'NAY-men',
        grammar: 'nimmt · hat genommen',
        en: 'to take; to have (order)',
        examples: [
          { de: 'Nehmen Sie die Tabletten vor dem Essen!', en: 'Take the tablets before meals!' },
          { de: 'Was möchten Sie? – Ich nehme einen Salat.', en: 'What would you like? – I\'ll have a salad.' },
          { de: 'Ich nehme den Bus.', en: 'I\'m taking the bus.' },
        ],
      },
      {
        de: 'nein',
        pron: 'nine',
        en: 'no',
        examples: [
          { de: 'Möchten Sie ein Stück Kuchen? – Nein, danke.', en: 'Would you like a piece of cake? – No, thank you.' },
          { de: 'Fährst du auch nach München? – Nein, ich habe keine Zeit.', en: 'Are you going to Munich too? – No, I don\'t have time.' },
        ],
      },
      {
        de: 'nennen',
        pron: 'NEN-en',
        grammar: 'nennt · hat genannt',
        en: 'to call, to name',
        examples: [
          { de: 'Mein Freund heißt Alexander, aber alle nennen ihn Alex.', en: 'My friend\'s name is Alexander, but everyone calls him Alex.' },
        ],
      },
      {
        de: 'nervös',
        pron: 'ner-VURS',
        en: 'nervous',
        examples: [
          { de: 'Bei Prüfungen bin ich immer sehr nervös.', en: 'I\'m always very nervous in exams.' },
        ],
      },
      {
        de: 'nett',
        pron: 'net',
        en: 'nice, kind',
        examples: [
          { de: 'Ich habe viele nette Kollegen.', en: 'I have lots of nice colleagues.' },
          { de: 'Vielen Dank! Das ist sehr nett von dir.', en: 'Thanks a lot! That\'s very kind of you.' },
        ],
      },
      {
        de: 'neu',
        pron: 'noy',
        en: 'new',
        examples: [
          { de: 'Ich bin der neue Mitarbeiter.', en: 'I\'m the new employee.' },
          { de: 'Wir haben eine neue Wohnung.', en: 'We have a new flat.' },
          { de: 'Zeig mal! Ist das dein neues Handy?', en: 'Show me! Is that your new phone?' },
        ],
      },
      {
        de: 'nicht',
        pron: 'nikht',
        en: 'not',
        examples: [
          { de: 'Das stimmt nicht.', en: 'That\'s not right.' },
          { de: 'Ich kann morgen leider nicht kommen.', en: 'Unfortunately I can\'t come tomorrow.' },
          { de: 'Lisa wohnt nicht in Hamburg, sie wohnt in Bremen.', en: 'Lisa doesn\'t live in Hamburg, she lives in Bremen.' },
        ],
      },
      {
        de: 'nichts',
        pron: 'nikhts',
        en: 'nothing',
        examples: [
          { de: 'Das macht nichts.', en: 'That doesn\'t matter.' },
          { de: 'Hier kaufe ich nichts. Der Laden gefällt mir nicht.', en: 'I\'m not buying anything here. I don\'t like the shop.' },
        ],
      },
      {
        de: 'nie',
        pron: 'nee',
        en: 'never',
        examples: [
          { de: 'Er kommt nie pünktlich.', en: 'He\'s never on time.' },
        ],
      },
      {
        de: 'niemand',
        pron: 'NEE-mahnt',
        en: 'nobody, no one',
        examples: [
          { de: 'Hier ist niemand.', en: 'There\'s nobody here.' },
          { de: 'Hier ist der Anrufbeantworter von Familie Klein. Leider ist im Moment niemand zu Hause.', en: 'This is the Klein family\'s answering machine. Unfortunately nobody is at home right now.' },
        ],
      },
      {
        de: 'nirgends',
        pron: 'NEER-gents',
        en: 'nowhere',
        examples: [
          { de: 'Hier kann man nirgends parken.', en: 'You can\'t park anywhere around here.' },
          { de: 'Wo ist Stefan? Ich kann ihn nirgends sehen.', en: 'Where\'s Stefan? I can\'t see him anywhere.' },
        ],
      },
      {
        de: 'noch',
        pron: 'nokh',
        en: 'still; yet; more',
        examples: [
          { de: 'Vielleicht kommt er noch.', en: 'Maybe he\'ll still come.' },
          { de: 'Es dauert noch ein paar Minuten.', en: 'It\'ll take a few more minutes.' },
          { de: 'Ich habe noch 20 Euro.', en: 'I\'ve still got 20 euros.' },
        ],
      },
      {
        de: 'normal',
        pron: 'nor-MAHL',
        en: 'normal',
        examples: [
          { de: 'Das ist doch ganz normal.', en: 'That\'s completely normal.' },
        ],
      },
      {
        de: 'die Note',
        pron: 'dee NOH-tuh',
        grammar: 'pl. die Noten',
        en: 'grade, mark',
        examples: [
          { de: 'Eva hat immer sehr gute Noten in Deutsch.', en: 'Eva always gets very good marks in German.' },
        ],
      },
      {
        de: 'notieren',
        pron: 'noh-TEE-ren',
        grammar: 'notiert · hat notiert',
        en: 'to note down',
        examples: [
          { de: 'Notieren Sie bitte alle wichtigen Informationen.', en: 'Please note down all the important information.' },
        ],
      },
      {
        de: 'die Notiz',
        pron: 'dee noh-TEETS',
        grammar: 'pl. die Notizen',
        en: 'note',
        examples: [
          { de: 'Schreib mir bitte eine Notiz.', en: 'Please write me a note.' },
          { de: 'Haben Sie einen Notizzettel für mich?', en: 'Do you have a notepad sheet for me?' },
        ],
      },
      {
        de: 'notwendig',
        pron: 'NOHT-ven-dikh',
        en: 'necessary',
        examples: [
          { de: 'Muss ich noch einmal kommen? – Nein, das ist nicht notwendig.', en: 'Do I have to come again? – No, that\'s not necessary.' },
        ],
      },
      {
        de: 'die Nudel',
        pron: 'dee NOO-del',
        grammar: 'pl. die Nudeln',
        en: 'noodle; (pl.) pasta',
        examples: [
          { de: 'Möchten Sie lieber Reis oder Nudeln? – Lieber Nudeln, bitte.', en: 'Would you prefer rice or pasta? – Pasta, please.' },
        ],
      },
      {
        de: 'die Nummer',
        pron: 'dee NOOM-er',
        grammar: 'pl. die Nummern',
        en: 'number; size',
        examples: [
          { de: 'Sie haben Zimmer Nummer zwölf.', en: 'You have room number twelve.' },
          { de: 'Welche Hausnummer haben Sie?', en: 'What\'s your house number?' },
          { de: 'Können Sie mir bitte Ihre Nummer geben?', en: 'Can you give me your number, please?' },
          { de: 'Haben Sie die Bluse auch eine Nummer kleiner?', en: 'Do you have the blouse in a size smaller too?' },
        ],
      },
      {
        de: 'nur',
        pron: 'noor',
        en: 'only, just',
        examples: [
          { de: 'Ich möchte nur ein Glas Wasser.', en: 'I\'d just like a glass of water.' },
          { de: 'Das T-Shirt kostet nur fünf Euro.', en: 'The T-shirt only costs five euros.' },
        ],
      },
      {
        de: 'nützlich',
        pron: 'NEWTS-likh',
        en: 'useful',
        examples: [
          { de: 'Danke für den Tipp. Er war sehr nützlich.', en: 'Thanks for the tip. It was very useful.' },
        ],
      },
    ],
  },
  {
    letter: 'O',
    entries: [
      {
        de: 'oben',
        pron: 'OH-ben',
        en: 'above, upstairs, at the top',
        examples: [
          { de: 'Ich wohne oben im 4. Stock.', en: 'I live upstairs on the 4th floor.' },
        ],
      },
      {
        de: 'das Obst',
        pron: 'dahs ohpst',
        grammar: 'no plural',
        en: 'fruit',
        examples: [
          { de: 'Obst kaufe ich immer auf dem Markt. Heute kaufe ich Äpfel und Orangen.', en: 'I always buy fruit at the market. Today I\'m buying apples and oranges.' },
        ],
      },
      {
        de: 'oder',
        pron: 'OH-der',
        en: 'or',
        examples: [
          { de: 'Wann können Sie kommen – heute oder morgen?', en: 'When can you come – today or tomorrow?' },
          { de: 'Entweder fahren wir mit dem Bus oder wir gehen zu Fuß.', en: 'Either we take the bus or we walk.' },
        ],
      },
      {
        de: 'offen',
        pron: 'OF-en',
        en: 'open',
        examples: [
          { de: 'Ist das Fenster im Bad noch offen?', en: 'Is the bathroom window still open?' },
          { de: 'Ich glaube, der Supermarkt ist jetzt noch offen.', en: 'I think the supermarket is still open now.' },
        ],
      },
      {
        de: 'öffnen',
        pron: 'URF-nen',
        grammar: 'öffnet · hat geöffnet',
        en: 'to open',
        examples: [
          { de: 'Ich öffne die Tür.', en: 'I\'ll open the door.' },
          { de: 'Der Laden ist samstags bis 16.00 Uhr geöffnet.', en: 'The shop is open until 4 p.m. on Saturdays.' },
        ],
      },
      {
        de: 'oft',
        pron: 'oft',
        en: 'often',
        examples: [
          { de: 'Ich gehe nicht oft ins Kino.', en: 'I don\'t often go to the cinema.' },
        ],
      },
      {
        de: 'ohne',
        pron: 'OH-nuh',
        en: 'without',
        examples: [
          { de: 'Bitte einen Kaffee ohne Milch und Zucker.', en: 'A coffee without milk or sugar, please.' },
          { de: 'Schaffst du das auch ohne mich oder soll ich dir helfen?', en: 'Can you manage without me, or shall I help you?' },
        ],
      },
      {
        de: 'das Ohr',
        pron: 'dahs ohr',
        grammar: 'pl. die Ohren',
        en: 'ear',
        examples: [
          { de: 'Ich habe Ohrenschmerzen.', en: 'I have earache.' },
        ],
      },
      {
        de: 'das Öl',
        pron: 'dahs url',
        grammar: 'pl. die Öle',
        en: 'oil',
        examples: [
          { de: 'Machen wir den Salat mit Öl?', en: 'Shall we make the salad with oil?' },
          { de: 'Können Sie bei meinem Auto bitte das Öl kontrollieren?', en: 'Could you check the oil in my car, please?' },
        ],
      },
      {
        de: 'online',
        pron: 'ON-line',
        en: 'online',
        examples: [
          { de: 'Wann bist du wieder online?', en: 'When will you be online again?' },
          { de: 'Ich habe hier kein Internet. Ich bin erst heute Abend wieder online.', en: 'I don\'t have internet here. I won\'t be online again until this evening.' },
          { de: 'Sie können das Geld auch online überweisen.', en: 'You can also transfer the money online.' },
        ],
      },
      {
        de: 'die Orange',
        pron: 'dee oh-RAHN-zhuh',
        grammar: 'pl. die Orangen',
        en: 'orange',
        examples: [
          { de: 'Ich esse gern Orangen.', en: 'I like eating oranges.' },
        ],
      },
      {
        de: 'die Ordnung',
        pron: 'dee ORT-noong',
        grammar: 'pl. die Ordnungen',
        en: 'order, tidiness; (in Ordnung) OK',
        examples: [
          { de: 'Er hat seine Hausaufgabe gut gemacht. Das ist alles in Ordnung.', en: 'He did his homework well. Everything is fine.' },
          { de: 'Ich mache gleich Ordnung in meinem Zimmer.', en: 'I\'m going to tidy up my room in a moment.' },
        ],
      },
      {
        de: 'organisieren',
        pron: 'or-gah-nee-ZEE-ren',
        grammar: 'organisiert · hat organisiert',
        en: 'to organise',
        examples: [
          { de: 'Frau Gomez organisiert unseren Ausflug.', en: 'Ms Gomez is organising our trip.' },
          { de: 'Hast du schon alles für deinen Urlaub organisiert?', en: 'Have you organised everything for your holiday yet?' },
        ],
      },
      {
        de: 'der Ort',
        pron: 'dair ort',
        grammar: 'pl. die Orte',
        en: 'place; village, town',
        examples: [
          { de: 'Vergessen Sie Ort und Datum nicht, wenn Sie einen Brief schreiben.', en: 'Don\'t forget the place and date when you write a letter.' },
          { de: 'Der Ort liegt in den Bergen.', en: 'The village is in the mountains.' },
          { de: 'Wohnort: Köln.', en: 'Place of residence: Cologne.' },
        ],
      },
    ],
  },
  {
    letter: 'P',
    entries: [
      {
        de: 'das Paar',
        pron: 'dahs pahr',
        grammar: 'pl. die Paare',
        en: 'couple; pair',
        examples: [
          { de: 'Romeo und Julia sind ein Paar.', en: 'Romeo and Juliet are a couple.' },
          { de: 'Ich brauche ein Paar Schuhe.', en: 'I need a pair of shoes.' },
        ],
      },
      {
        de: 'ein paar',
        pron: 'ayn pahr',
        en: 'a few, a couple of',
        examples: [
          { de: 'Wir fahren ein paar Tage ans Meer.', en: 'We\'re going to the seaside for a few days.' },
          { de: 'Hast du ein paar Minuten Zeit?', en: 'Do you have a few minutes?' },
        ],
      },
      {
        de: 'packen',
        pron: 'PAHK-en',
        grammar: 'packt · hat gepackt',
        en: 'to pack',
        examples: [
          { de: 'Ich muss noch meinen Koffer packen.', en: 'I still have to pack my suitcase.' },
        ],
      },
      {
        de: 'das Paket',
        pron: 'dahs pah-KAYT',
        grammar: 'pl. die Pakete',
        en: 'parcel, package',
        examples: [
          { de: 'Bringst du bitte das Paket zur Post?', en: 'Will you take the parcel to the post office, please?' },
        ],
      },
      {
        de: 'das Papier',
        pron: 'dahs pah-PEER',
        grammar: 'pl. die Papiere',
        en: 'paper',
        examples: [
          { de: 'Hier sind Papier und Bleistift.', en: 'Here are paper and a pencil.' },
        ],
      },
      {
        de: 'die Papiere',
        pron: 'dee pah-PEE-ruh',
        grammar: 'plural only',
        en: 'documents, papers (ID)',
        examples: [
          { de: 'Haben Sie Ihre Papiere dabei?', en: 'Do you have your papers with you?' },
        ],
      },
      {
        de: 'das Parfüm',
        pron: 'dahs pahr-FEWM',
        grammar: 'pl. die Parfüms',
        en: 'perfume',
        examples: [
          { de: 'Ich suche ein Parfüm als Geschenk für meine Frau.', en: 'I\'m looking for a perfume as a present for my wife.' },
        ],
      },
      {
        de: 'der Park',
        pron: 'dair park',
        grammar: 'pl. die Parks',
        en: 'park',
        examples: [
          { de: 'Ich gehe gern im Park spazieren.', en: 'I like walking in the park.' },
        ],
      },
      {
        de: 'parken',
        pron: 'PAR-ken',
        grammar: 'parkt · hat geparkt',
        en: 'to park',
        examples: [
          { de: 'Darf ich hier parken?', en: 'May I park here?' },
          { de: 'Hier ist Parken verboten.', en: 'Parking is prohibited here.' },
        ],
      },
      {
        de: 'der Partner / die Partnerin',
        pron: 'dair PART-ner / dee PART-ner-in',
        grammar: 'pl. die Partner / die Partnerinnen',
        en: 'partner',
        examples: [
          { de: 'Veronika ist meine Partnerin.', en: 'Veronika is my partner.' },
        ],
      },
      {
        de: 'die Party',
        pron: 'dee PAR-tee',
        grammar: 'pl. die Partys',
        en: 'party',
        examples: [
          { de: 'Heute Abend machen wir eine Party.', en: 'We\'re having a party tonight.' },
        ],
      },
      {
        de: 'der Pass',
        pron: 'dair pahs',
        grammar: 'pl. die Pässe',
        en: 'passport',
        examples: [
          { de: 'Am Flughafen brauchst du deinen Pass.', en: 'You need your passport at the airport.' },
        ],
      },
      {
        de: 'passen',
        pron: 'PAHS-en',
        grammar: 'passt · hat gepasst',
        en: 'to fit; to suit, to match',
        examples: [
          { de: 'Die Bluse passt mir nicht.', en: 'The blouse doesn\'t fit me.' },
          { de: 'Welches Wort passt? Wählen Sie.', en: 'Which word fits? Choose.' },
        ],
      },
      {
        de: 'passieren',
        pron: 'pah-SEE-ren',
        grammar: 'passiert · ist passiert',
        en: 'to happen',
        examples: [
          { de: 'Wie ist der Unfall passiert?', en: 'How did the accident happen?' },
          { de: 'Was ist passiert?', en: 'What happened?' },
        ],
      },
      {
        de: 'das Passwort',
        pron: 'dahs PAHS-vort',
        grammar: 'pl. die Passwörter',
        en: 'password',
        examples: [
          { de: 'Bitte schreiben Sie Ihr Passwort.', en: 'Please write your password.' },
          { de: 'Sie brauchen ein Passwort.', en: 'You need a password.' },
          { de: 'Ich habe mein Passwort vergessen.', en: 'I\'ve forgotten my password.' },
        ],
      },
      {
        de: 'die Pause',
        pron: 'dee POW-zuh',
        grammar: 'pl. die Pausen',
        en: 'break, pause',
        examples: [
          { de: 'Von 12.00 bis 12.30 Uhr haben wir Mittagspause.', en: 'We have our lunch break from 12:00 to 12:30.' },
        ],
      },
      {
        de: 'die Person',
        pron: 'dee pair-ZOHN',
        grammar: 'pl. die Personen',
        en: 'person',
        examples: [
          { de: 'Eintritt pro Person: 5 Euro.', en: 'Admission per person: 5 euros.' },
        ],
      },
      {
        de: 'das Pferd',
        pron: 'dahs pfairt',
        grammar: 'pl. die Pferde',
        en: 'horse',
        examples: [
          { de: 'Amira liebt Pferde. Sie reitet seit zehn Jahren.', en: 'Amira loves horses. She has been riding for ten years.' },
        ],
      },
      {
        de: 'die Pflanze',
        pron: 'dee PFLAHN-tsuh',
        grammar: 'pl. die Pflanzen',
        en: 'plant',
        examples: [
          { de: 'Können Sie sich bitte um unsere Pflanzen kümmern? Wir sind nächste Woche im Urlaub.', en: 'Could you please look after our plants? We\'re on holiday next week.' },
        ],
      },
      {
        de: 'die Pizza',
        pron: 'dee PIT-sah',
        grammar: 'pl. die Pizzas / die Pizzen',
        en: 'pizza',
        examples: [
          { de: 'Mein Lieblingsessen ist Pizza.', en: 'My favourite food is pizza.' },
          { de: 'Eine Pizza mit viel Käse, bitte.', en: 'A pizza with lots of cheese, please.' },
        ],
      },
      {
        de: 'das Plakat',
        pron: 'dahs plah-KAHT',
        grammar: 'pl. die Plakate',
        en: 'poster, placard',
        examples: [
          { de: 'Wir machen im Unterricht ein Plakat zum Thema „Essen und Trinken“.', en: 'In class we\'re making a poster on the topic "Food and Drink".' },
        ],
      },
      {
        de: 'der Plan',
        pron: 'dair plahn',
        grammar: 'pl. die Pläne',
        en: 'plan; map',
        examples: [
          { de: 'Ich kaufe mir einen Stadtplan.', en: 'I\'m buying myself a city map.' },
          { de: 'Morgen schwimmen ... ist ein guter Plan.', en: 'Swimming tomorrow ... is a good plan.' },
        ],
      },
      {
        de: 'planen',
        pron: 'PLAH-nen',
        grammar: 'plant · hat geplant',
        en: 'to plan',
        examples: [
          { de: 'Wir sollen zusammen eine Klassenparty planen.', en: 'We\'re supposed to plan a class party together.' },
        ],
      },
      {
        de: 'der Platz',
        pron: 'dair plahts',
        grammar: 'pl. die Plätze',
        en: 'seat; space; square',
        examples: [
          { de: 'Hier ist noch ein Platz frei.', en: 'There\'s still a free seat here.' },
          { de: 'Bitte nehmen Sie Platz!', en: 'Please take a seat!' },
          { de: 'Ich wohne am Messeplatz 5.', en: 'I live at Messeplatz 5.' },
          { de: 'Ich finde keinen Parkplatz.', en: 'I can\'t find a parking space.' },
        ],
      },
      {
        de: 'plötzlich',
        pron: 'PLURTS-likh',
        en: 'suddenly',
        examples: [
          { de: 'Plötzlich war das Licht aus.', en: 'Suddenly the light went out.' },
        ],
      },
      {
        de: 'die Polizei',
        pron: 'dee poh-lee-TSY',
        grammar: 'no plural',
        en: 'police',
        examples: [
          { de: 'Rufen Sie die Polizei!', en: 'Call the police!' },
        ],
      },
      {
        de: 'die Pommes frites',
        pron: 'dee pom FRIT',
        grammar: 'plural only',
        en: 'French fries, chips',
        examples: [
          { de: 'Die Kinder essen Bratwurst mit Pommes frites.', en: 'The children are eating fried sausage with chips.' },
        ],
      },
      {
        de: 'die Portion',
        pron: 'dee por-TSYOHN',
        grammar: 'pl. die Portionen',
        en: 'portion, serving',
        examples: [
          { de: 'Ich nehme eine kleine Portion Eis.', en: 'I\'ll have a small portion of ice cream.' },
        ],
      },
      {
        de: 'die Post',
        pron: 'dee post',
        grammar: 'no plural',
        en: 'post office; mail',
        examples: [
          { de: 'Entschuldigung, wo ist die Post?', en: 'Excuse me, where is the post office?' },
          { de: 'Ist Post für mich da?', en: 'Is there any mail for me?' },
        ],
      },
      {
        de: 'das Poster',
        pron: 'dahs POHS-ter',
        grammar: 'pl. die Poster',
        en: 'poster',
        examples: [
          { de: 'Das Poster hängt über dem Bett.', en: 'The poster is hanging above the bed.' },
        ],
      },
      {
        de: 'die Postkarte',
        pron: 'dee POST-kar-tuh',
        grammar: 'pl. die Postkarten',
        en: 'postcard',
        examples: [
          { de: 'Schreibst du mir eine Postkarte aus Kanada?', en: 'Will you write me a postcard from Canada?' },
        ],
      },
      {
        de: 'die Postleitzahl',
        pron: 'dee POST-lite-tsahl',
        grammar: 'pl. die Postleitzahlen',
        en: 'postcode, zip code',
        examples: [
          { de: 'Wie ist Ihre Postleitzahl?', en: 'What is your postcode?' },
        ],
      },
      {
        de: 'das Praktikum',
        pron: 'dahs PRAHK-tee-koom',
        grammar: 'pl. die Praktika',
        en: 'internship',
        examples: [
          { de: 'Ich mache ein Praktikum bei Siemens.', en: 'I\'m doing an internship at Siemens.' },
        ],
      },
      {
        de: 'praktisch',
        pron: 'PRAHK-tish',
        en: 'practical, handy',
        examples: [
          { de: 'Mit meinem neuen Handy kann ich auch im Internet surfen und Fotos machen. Das finde ich sehr praktisch.', en: 'With my new phone I can also surf the internet and take photos. I find that very handy.' },
        ],
      },
      {
        de: 'die Praxis',
        pron: 'dee PRAHK-sis',
        grammar: 'pl. die Praxen',
        en: '(doctor\'s) practice, surgery',
        examples: [
          { de: 'Unsere Praxis ist ab acht Uhr geöffnet. Frau Doktor Weiß hat ab neun Uhr Sprechstunde.', en: 'Our practice is open from eight o\'clock. Dr Weiß sees patients from nine o\'clock.' },
        ],
      },
      {
        de: 'der Preis',
        pron: 'dair price',
        grammar: 'pl. die Preise',
        en: 'price; prize',
        examples: [
          { de: 'Die Preise sind hier viel höher als bei uns.', en: 'Prices here are much higher than where we live.' },
        ],
      },
      {
        de: 'preiswert',
        pron: 'PRICE-vairt',
        en: 'good value, inexpensive',
        examples: [
          { de: 'Die Jacke ist sehr preiswert. Sie kostet nur 15 Euro.', en: 'The jacket is very good value. It only costs 15 euros.' },
        ],
      },
      {
        de: 'privat',
        pron: 'pree-VAHT',
        en: 'private',
        examples: [
          { de: 'Das ist meine Nummer im Büro und das ist meine private Handynummer.', en: 'This is my office number and this is my private mobile number.' },
          { de: 'Dieser Strand ist privat. Wir dürfen hier nicht schwimmen gehen.', en: 'This beach is private. We\'re not allowed to swim here.' },
          { de: 'Hey, du darfst die Mail nicht lesen! Sie ist privat.', en: 'Hey, you\'re not allowed to read that email! It\'s private.' },
        ],
      },
      {
        de: 'pro',
        pron: 'proh',
        en: 'per',
        examples: [
          { de: 'Das Zimmer kostet 100 Euro pro Nacht.', en: 'The room costs 100 euros per night.' },
        ],
      },
      {
        de: 'probieren',
        pron: 'proh-BEE-ren',
        grammar: 'probiert · hat probiert',
        en: 'to try; to taste',
        examples: [
          { de: 'Möchten Sie den Käse probieren?', en: 'Would you like to try the cheese?' },
          { de: 'Die Tür geht schwer auf. Probier mal!', en: 'The door is hard to open. Give it a try!' },
        ],
      },
      {
        de: 'das Problem',
        pron: 'dahs proh-BLAYM',
        grammar: 'pl. die Probleme',
        en: 'problem',
        examples: [
          { de: 'Ich habe ein Problem. Können Sie mir bitte helfen?', en: 'I have a problem. Can you help me, please?' },
        ],
      },
      {
        de: 'das Produkt',
        pron: 'dahs proh-DOOKT',
        grammar: 'pl. die Produkte',
        en: 'product',
        examples: [
          { de: 'Unsere Produkte haben eine sehr hohe Qualität.', en: 'Our products are of very high quality.' },
        ],
      },
      {
        de: 'das Programm',
        pron: 'dahs proh-GRAHM',
        grammar: 'pl. die Programme',
        en: 'programme; schedule; channel',
        examples: [
          { de: 'Dieses Programm im Radio interessiert mich nicht.', en: 'This radio programme doesn\'t interest me.' },
          { de: 'Was kommt heute im Kino? Hast du das Programm hier?', en: 'What\'s on at the cinema today? Do you have the listings here?' },
        ],
      },
      {
        de: 'das Projekt',
        pron: 'dahs proh-YEKT',
        grammar: 'pl. die Projekte',
        en: 'project',
        examples: [
          { de: 'Wir machen ein Projekt über Sehenswürdigkeiten in unserer Stadt.', en: 'We\'re doing a project on the sights in our town.' },
        ],
      },
      {
        de: 'der Prospekt',
        pron: 'dair proh-SPEKT',
        grammar: 'pl. die Prospekte',
        en: 'brochure',
        examples: [
          { de: 'Bitte schicken Sie mir einen Prospekt von Ihrem Hotel.', en: 'Please send me a brochure for your hotel.' },
        ],
      },
      {
        de: 'prüfen',
        pron: 'PREW-fen',
        grammar: 'prüft · hat geprüft',
        en: 'to check, to test',
        examples: [
          { de: 'Bitte prüfen Sie die Rechnung sofort.', en: 'Please check the bill immediately.' },
        ],
      },
      {
        de: 'die Prüfung',
        pron: 'dee PREW-foong',
        grammar: 'pl. die Prüfungen',
        en: 'exam, test',
        examples: [
          { de: 'Ich habe die Prüfung bestanden.', en: 'I passed the exam.' },
        ],
      },
      {
        de: 'der Pullover',
        pron: 'dair poo-LOH-ver',
        grammar: 'pl. die Pullover',
        en: 'jumper, sweater',
        examples: [
          { de: 'Ich muss mir einen Pullover kaufen.', en: 'I have to buy myself a jumper.' },
        ],
      },
      {
        de: 'pünktlich',
        pron: 'PEWNKT-likh',
        en: 'punctual, on time',
        examples: [
          { de: 'Der Bus fährt pünktlich um acht Uhr.', en: 'The bus leaves at eight o\'clock sharp.' },
          { de: 'Herr Müller ist immer pünktlich.', en: 'Mr Müller is always punctual.' },
        ],
      },
      {
        de: 'putzen',
        pron: 'POOT-sen',
        grammar: 'putzt · hat geputzt',
        en: 'to clean',
        examples: [
          { de: 'Ich muss heute noch das Bad putzen.', en: 'I still have to clean the bathroom today.' },
        ],
      },
    ],
  },
  {
    letter: 'Q',
    entries: [
      {
        de: 'die Qualität',
        pron: 'dee kvah-lee-TAYT',
        grammar: 'pl. die Qualitäten',
        en: 'quality',
        examples: [
          { de: 'Dieser Fernseher hat eine gute Qualität.', en: 'This television is good quality.' },
          { de: 'Ich finde die Qualität wichtiger als den Preis.', en: 'I think quality is more important than price.' },
        ],
      },
      {
        de: 'das Quiz',
        pron: 'dahs kvis',
        grammar: 'no plural',
        en: 'quiz',
        examples: [
          { de: 'Er schaut gern Quizsendungen an.', en: 'He likes watching quiz shows.' },
          { de: 'Sie hat beim Quiz gewonnen.', en: 'She won the quiz.' },
        ],
      },
    ],
  },
  {
    letter: 'R',
    entries: [
      {
        de: 'das Radio',
        pron: 'dahs RAH-dee-oh',
        grammar: 'pl. die Radios',
        en: 'radio',
        examples: [
          { de: 'Ich höre im Auto gern Radio.', en: 'I like listening to the radio in the car.' },
        ],
      },
      {
        de: 'raten',
        pron: 'RAH-ten',
        grammar: 'rät · hat geraten',
        en: 'to advise; to guess',
        examples: [
          { de: 'Ich weiß nicht, welches Handy ich kaufen soll. Was raten Sie mir?', en: 'I don\'t know which phone to buy. What do you advise?' },
          { de: 'Rate mal, wen ich heute gesehen habe! Deinen Lehrer.', en: 'Guess who I saw today! Your teacher.' },
        ],
      },
      {
        de: 'das Rathaus',
        pron: 'dahs RAHT-house',
        grammar: 'pl. die Rathäuser',
        en: 'town hall',
        examples: [
          { de: 'Das Formular bekommen Sie im Rathaus.', en: 'You can get the form at the town hall.' },
          { de: 'Sie müssen sich im Rathaus anmelden.', en: 'You have to register at the town hall.' },
        ],
      },
      {
        de: 'das Rätsel',
        pron: 'dahs RAIT-sel',
        grammar: 'pl. die Rätsel',
        en: 'puzzle, riddle',
        examples: [
          { de: 'Das Rätsel ist schwierig! Ich weiß die Antwort nicht.', en: 'The puzzle is difficult! I don\'t know the answer.' },
        ],
      },
      {
        de: 'rauchen',
        pron: 'ROW-khen',
        grammar: 'raucht · hat geraucht',
        en: 'to smoke',
        examples: [
          { de: 'Stört es Sie, wenn ich rauche?', en: 'Do you mind if I smoke?' },
          { de: 'Rauchen ist hier verboten!', en: 'Smoking is prohibited here!' },
        ],
      },
      {
        de: 'der Raum',
        pron: 'dair rowm',
        grammar: 'pl. die Räume',
        en: 'room; space',
        examples: [
          { de: 'Der Unterricht findet heute in Raum 332 statt.', en: 'Today the class takes place in room 332.' },
        ],
      },
      {
        de: 'rechnen',
        pron: 'REKH-nen',
        grammar: 'rechnet · hat gerechnet',
        en: 'to calculate, to do sums',
        examples: [
          { de: 'Sarah kann gut rechnen.', en: 'Sarah is good at maths.' },
        ],
      },
      {
        de: 'die Rechnung',
        pron: 'dee REKH-noong',
        grammar: 'pl. die Rechnungen',
        en: 'bill, invoice',
        examples: [
          { de: 'Schicken Sie die Rechnung an mich.', en: 'Send the invoice to me.' },
          { de: 'Bitte, die Rechnung!', en: 'The bill, please!' },
        ],
      },
      {
        de: 'recht haben',
        pron: 'rekht HAH-ben',
        grammar: 'hat recht · hatte recht · hat recht gehabt',
        en: 'to be right',
        examples: [
          { de: 'Du hast (nicht) recht.', en: 'You\'re (not) right.' },
        ],
      },
      {
        de: 'rechts',
        pron: 'rekhts',
        en: 'right; on the right',
        examples: [
          { de: 'Der Bahnhof ist hier rechts.', en: 'The station is here on the right.' },
        ],
      },
      {
        de: 'reden',
        pron: 'RAY-den',
        grammar: 'redet · hat geredet',
        en: 'to talk',
        examples: [
          { de: 'Mit meiner Freundin kann ich über alles reden.', en: 'I can talk to my girlfriend about anything.' },
          { de: 'Rede nicht so viel!', en: 'Don\'t talk so much!' },
        ],
      },
      {
        de: 'der Regen',
        pron: 'dair RAY-gen',
        grammar: 'no plural',
        en: 'rain',
        examples: [
          { de: 'Bei Regen gehe ich nicht aus dem Haus.', en: 'When it rains, I don\'t leave the house.' },
        ],
      },
      {
        de: 'regnen',
        pron: 'RAYG-nen',
        grammar: 'regnet · hat geregnet',
        en: 'to rain',
        examples: [
          { de: 'Wenn es regnet, bleiben wir zu Hause.', en: 'If it rains, we\'ll stay at home.' },
        ],
      },
      {
        de: 'reich',
        pron: 'ryekh',
        en: 'rich',
        examples: [
          { de: 'Lotte ist reich. Sie hat sehr viel Geld.', en: 'Lotte is rich. She has a lot of money.' },
        ],
      },
      {
        de: 'der Reifen',
        pron: 'dair RY-fen',
        grammar: 'pl. die Reifen',
        en: 'tyre',
        examples: [
          { de: 'Ich brauche neue Reifen für mein Auto.', en: 'I need new tyres for my car.' },
        ],
      },
      {
        de: 'die Reihe',
        pron: 'dee RY-uh',
        grammar: 'pl. die Reihen',
        en: 'row; turn',
        examples: [
          { de: 'Ich habe Karten für das Konzert. Wir sitzen in der dritten Reihe.', en: 'I have tickets for the concert. We\'re sitting in the third row.' },
          { de: 'Wer ist jetzt an der Reihe?', en: 'Whose turn is it now?' },
        ],
      },
      {
        de: 'die Reinigung',
        pron: 'dee RY-ni-goong',
        grammar: 'pl. die Reinigungen',
        en: 'dry cleaner\'s; cleaning',
        examples: [
          { de: 'Bringst du bitte die Bluse in die Reinigung? Man darf sie nicht in der Waschmaschine waschen.', en: 'Will you take the blouse to the dry cleaner\'s, please? It can\'t be washed in the washing machine.' },
        ],
      },
      {
        de: 'der Reis',
        pron: 'dair rice',
        grammar: 'no plural',
        en: 'rice',
        examples: [
          { de: 'Ich esse gern Reis mit Gemüse und Fisch.', en: 'I like eating rice with vegetables and fish.' },
        ],
      },
      {
        de: 'die Reise',
        pron: 'dee RY-zuh',
        grammar: 'pl. die Reisen',
        en: 'trip, journey',
        examples: [
          { de: 'Wir machen eine Reise nach Österreich.', en: 'We\'re taking a trip to Austria.' },
          { de: 'Ich mache nächste Woche eine Geschäftsreise.', en: 'I\'m going on a business trip next week.' },
        ],
      },
      {
        de: 'das Reisebüro',
        pron: 'dahs RY-zuh-bew-roh',
        grammar: 'pl. die Reisebüros',
        en: 'travel agency',
        examples: [
          { de: 'Wir organisieren eine Rundreise durch Deutschland.', en: 'We\'re organizing a tour around Germany.' },
          { de: 'Wir buchen die Reise im Reisebüro.', en: 'We\'re booking the trip at the travel agency.' },
        ],
      },
      {
        de: 'der Reiseführer',
        pron: 'dair RY-zuh-few-rer',
        grammar: 'pl. die Reiseführer',
        en: 'travel guide (book); tour guide',
        examples: [
          { de: 'Ich kaufe mir einen Reiseführer von Berlin.', en: 'I\'m buying myself a travel guide to Berlin.' },
          { de: 'Unser Reiseführer heißt Robert und ist sehr sympathisch.', en: 'Our tour guide is called Robert and is very nice.' },
        ],
      },
      {
        de: 'reisen',
        pron: 'RY-zen',
        grammar: 'reist · ist gereist',
        en: 'to travel',
        examples: [
          { de: 'Ich reise gern.', en: 'I like to travel.' },
        ],
      },
      {
        de: 'reiten',
        pron: 'RY-ten',
        grammar: 'reitet · ist geritten',
        en: 'to ride (a horse)',
        examples: [
          { de: 'Möchtest du reiten lernen?', en: 'Would you like to learn to ride?' },
        ],
      },
      {
        de: 'renovieren',
        pron: 'ray-noh-VEE-ren',
        grammar: 'renoviert · hat renoviert',
        en: 'to renovate',
        examples: [
          { de: 'Wir renovieren das ganze Haus.', en: 'We\'re renovating the whole house.' },
        ],
      },
      {
        de: 'der Rentner / die Rentnerin',
        pron: 'dair RENT-ner / dee RENT-ner-in',
        grammar: 'pl. die Rentner / die Rentnerinnen',
        en: 'pensioner, retiree',
        examples: [
          { de: 'Mein Onkel arbeitet nicht mehr. Er ist Rentner.', en: 'My uncle doesn\'t work anymore. He\'s retired.' },
        ],
      },
      {
        de: 'die Reparatur',
        pron: 'dee reh-pah-rah-TOOR',
        grammar: 'pl. die Reparaturen',
        en: 'repair',
        examples: [
          { de: 'Die Reparatur ist sehr teuer.', en: 'The repair is very expensive.' },
        ],
      },
      {
        de: 'reparieren',
        pron: 'ray-pah-REE-ren',
        grammar: 'repariert · hat repariert',
        en: 'to repair, to fix',
        examples: [
          { de: 'Er muss den Motor reparieren.', en: 'He has to repair the engine.' },
        ],
      },
      {
        de: 'reservieren',
        pron: 'ray-zer-VEE-ren',
        grammar: 'reserviert · reservierte · hat reserviert',
        en: 'to reserve, to book',
        examples: [
          { de: 'Reservieren Sie bitte ein Doppelzimmer.', en: 'Please reserve a double room.' },
          { de: 'Ich möchte gern einen Tisch für fünf Personen reservieren.', en: 'I\'d like to reserve a table for five people.' },
        ],
      },
      {
        de: 'der Rest',
        pron: 'dair rest',
        grammar: 'pl. die Reste',
        en: 'rest, remainder; leftover',
        examples: [
          { de: 'Hier sind 50 Euro. Den Rest gebe ich dir später.', en: 'Here\'s 50 euros. I\'ll give you the rest later.' },
          { de: 'Es ist noch ein Rest Suppe da. Möchtest du noch?', en: 'There\'s still some soup left. Would you like more?' },
        ],
      },
      {
        de: 'das Restaurant',
        pron: 'dahs res-toh-RAHNG',
        grammar: 'pl. die Restaurants',
        en: 'restaurant',
        examples: [
          { de: 'Wir essen heute in einem Restaurant.', en: 'We\'re eating in a restaurant today.' },
        ],
      },
      {
        de: 'das Rezept',
        pron: 'dahs ruh-TSEPT',
        grammar: 'pl. die Rezepte',
        en: 'recipe; prescription',
        examples: [
          { de: 'Dieser Kuchen schmeckt super! Kannst du mir bitte das Rezept geben?', en: 'This cake tastes great! Can you give me the recipe, please?' },
          { de: 'Dieses Medikament gibt es nur auf Rezept.', en: 'This medicine is only available on prescription.' },
        ],
      },
      {
        de: 'die Rezeption',
        pron: 'dee reh-tsep-TSYOHN',
        grammar: 'pl. die Rezeptionen',
        en: 'reception (desk)',
        examples: [
          { de: 'Geben Sie bitte den Schlüssel an der Rezeption ab.', en: 'Please hand in the key at reception.' },
        ],
      },
      {
        de: 'richtig',
        pron: 'RIKH-tikh',
        en: 'right, correct',
        examples: [
          { de: 'Habe ich das richtig verstanden?', en: 'Did I understand that correctly?' },
          { de: 'Das ist richtig.', en: 'That\'s correct.' },
        ],
      },
      {
        de: 'riechen',
        pron: 'REE-khen',
        grammar: 'riecht · hat gerochen',
        en: 'to smell',
        examples: [
          { de: 'Diese Blumen riechen gut.', en: 'These flowers smell good.' },
          { de: 'Hier riecht es nach Fisch.', en: 'It smells of fish here.' },
        ],
      },
      {
        de: 'das Rind',
        pron: 'dahs rint',
        grammar: 'pl. die Rinder',
        en: 'cow, cattle; beef',
        examples: [
          { de: 'Ich esse nur Fleisch vom Rind.', en: 'I only eat beef.' },
        ],
      },
      {
        de: 'der Ring',
        pron: 'dair ring',
        grammar: 'pl. die Ringe',
        en: 'ring',
        examples: [
          { de: 'Ich habe meinen Ring verloren.', en: 'I\'ve lost my ring.' },
        ],
      },
      {
        de: 'der Rock',
        pron: 'dair rok',
        grammar: 'pl. die Röcke',
        en: 'skirt',
        examples: [
          { de: 'Der Rock ist zu eng.', en: 'The skirt is too tight.' },
        ],
      },
      {
        de: 'romantisch',
        pron: 'roh-MAHN-tish',
        en: 'romantic',
        examples: [
          { de: 'Dieser Film ist sehr romantisch.', en: 'This film is very romantic.' },
          { de: 'Meine Freundin ist total romantisch.', en: 'My girlfriend is really romantic.' },
        ],
      },
      {
        de: 'die Rose',
        pron: 'dee ROH-zuh',
        grammar: 'pl. die Rosen',
        en: 'rose',
        examples: [
          { de: 'Er schenkt seiner Freundin rote Rosen zum Geburtstag.', en: 'He gives his girlfriend red roses for her birthday.' },
        ],
      },
      {
        de: 'der Rücken',
        pron: 'dair REW-ken',
        grammar: 'pl. die Rücken',
        en: 'back',
        examples: [
          { de: 'Mein Rücken tut mir weh.', en: 'My back hurts.' },
        ],
      },
      {
        de: 'der Rucksack',
        pron: 'dair ROOK-zahk',
        grammar: 'pl. die Rucksäcke',
        en: 'backpack',
        examples: [
          { de: 'Ich nehme lieber einen Rucksack als einen Koffer mit.', en: 'I\'d rather take a backpack than a suitcase.' },
        ],
      },
      {
        de: 'rufen',
        pron: 'ROO-fen',
        grammar: 'ruft · hat gerufen',
        en: 'to call',
        examples: [
          { de: 'Rufst du bitte die Kinder. Das Essen ist fertig.', en: 'Will you call the children, please? Dinner is ready.' },
          { de: 'Wir müssen einen Arzt rufen.', en: 'We have to call a doctor.' },
        ],
      },
      {
        de: 'die Ruhe',
        pron: 'dee ROO-uh',
        grammar: 'no plural',
        en: 'quiet, peace; rest',
        examples: [
          { de: 'Ruhe, bitte! Hier in der Bibliothek darf man nicht laut sprechen.', en: 'Quiet, please! You\'re not allowed to talk loudly here in the library.' },
          { de: 'Meine Großmutter ist krank. Sie braucht viel Ruhe.', en: 'My grandmother is ill. She needs a lot of rest.' },
        ],
      },
      {
        de: 'ruhig',
        pron: 'ROO-ikh',
        en: 'quiet, calm',
        examples: [
          { de: 'Ich möchte ein ruhiges Zimmer.', en: 'I\'d like a quiet room.' },
        ],
      },
      {
        de: 'rund',
        pron: 'roont',
        en: 'round; around, about',
        examples: [
          { de: 'Unser Wohnzimmertisch ist rund.', en: 'Our living room table is round.' },
          { de: 'Bis Berlin sind es noch rund 80 Kilometer.', en: 'It\'s still about 80 kilometres to Berlin.' },
        ],
      },
      {
        de: 'der Rundgang',
        pron: 'dair ROONT-gahng',
        grammar: 'pl. die Rundgänge',
        en: 'tour, walk around',
        examples: [
          { de: 'Der Rundgang durch das Schloss beginnt in wenigen Minuten.', en: 'The tour of the castle starts in a few minutes.' },
        ],
      },
    ],
  },
  {
    letter: 'S',
    entries: [
      {
        de: 'die Sache',
        pron: 'dee ZAH-khuh',
        grammar: 'pl. die Sachen',
        en: 'thing; matter',
        examples: [
          { de: 'Ihr könnt eure Sachen im Hotel lassen.', en: 'You can leave your things at the hotel.' },
          { de: 'Nimm deine Sachen und komm!', en: 'Take your things and come!' },
          { de: 'Das ist meine Sache.', en: 'That\'s my business.' },
        ],
      },
      {
        de: 'der Saft',
        pron: 'dair zahft',
        grammar: 'pl. die Säfte',
        en: 'juice',
        examples: [
          { de: 'Möchtest du einen Apfelsaft?', en: 'Would you like an apple juice?' },
        ],
      },
      {
        de: 'sagen',
        pron: 'ZAH-gen',
        grammar: 'sagt · hat gesagt',
        en: 'to say, to tell',
        examples: [
          { de: 'Entschuldigung, was haben Sie gesagt?', en: 'Sorry, what did you say?' },
          { de: 'Wie sagt man „sorry“ auf Deutsch?', en: 'How do you say "sorry" in German?' },
          { de: 'Sag mal, wie geht es dir denn?', en: 'Tell me, how are you doing?' },
        ],
      },
      {
        de: 'der Salat',
        pron: 'dair zah-LAHT',
        grammar: 'pl. die Salate',
        en: 'salad; lettuce',
        examples: [
          { de: 'Wie schmeckt dir der Salat?', en: 'How do you like the salad?' },
          { de: 'Möchten Sie zum Fisch einen Salat?', en: 'Would you like a salad with the fish?' },
        ],
      },
      {
        de: 'das Salz',
        pron: 'dahs zahlts',
        grammar: 'pl. die Salze',
        en: 'salt',
        examples: [
          { de: 'Entschuldigung, kann ich bitte Salz haben?', en: 'Excuse me, could I have the salt, please?' },
        ],
      },
      {
        de: 'sammeln',
        pron: 'ZAHM-eln',
        grammar: 'sammelt · hat gesammelt',
        en: 'to collect, to gather',
        examples: [
          { de: 'Peter sammelt Briefmarken.', en: 'Peter collects stamps.' },
          { de: 'Im Herbst sammeln wir im Wald bunte Blätter.', en: 'In autumn we collect colourful leaves in the forest.' },
        ],
      },
      {
        de: 'der Satz',
        pron: 'dair zahts',
        grammar: 'pl. die Sätze',
        en: 'sentence',
        examples: [
          { de: 'Den letzten Satz verstehe ich nicht.', en: 'I don\'t understand the last sentence.' },
        ],
      },
      {
        de: 'sauber',
        pron: 'ZOW-ber',
        en: 'clean',
        examples: [
          { de: 'Bringen Sie mir bitte ein sauberes Glas!', en: 'Please bring me a clean glass!' },
        ],
      },
      {
        de: 'sauer',
        pron: 'ZOW-er',
        en: 'sour; annoyed, cross',
        examples: [
          { de: 'Zitronen sind mir zu sauer.', en: 'Lemons are too sour for me.' },
          { de: 'Was ist los? – Ich bin sauer. Ich muss am Wochenende zu Hause bleiben und darf nicht mit meinen Freunden ins Kino gehen.', en: 'What\'s wrong? – I\'m annoyed. I have to stay home at the weekend and I\'m not allowed to go to the cinema with my friends.' },
        ],
      },
      {
        de: 'schade',
        pron: 'SHAH-duh',
        en: 'a pity, a shame',
        examples: [
          { de: 'Schade, dass du nicht kommen kannst.', en: 'What a pity you can\'t come.' },
        ],
      },
      {
        de: 'schädlich',
        pron: 'SHAIT-likh',
        en: 'harmful',
        examples: [
          { de: 'Rauchen ist schädlich für die Gesundheit.', en: 'Smoking is harmful to your health.' },
        ],
      },
      {
        de: 'schaffen',
        pron: 'SHAHF-en',
        grammar: 'schafft · hat geschafft',
        en: 'to manage, to get done',
        examples: [
          { de: 'Kannst du mir bitte helfen? Ich schaffe das nicht alleine.', en: 'Can you help me, please? I can\'t manage this on my own.' },
          { de: 'Geschafft! Das Projekt ist endlich fertig.', en: 'Done! The project is finally finished.' },
        ],
      },
      {
        de: 'der Schalter',
        pron: 'dair SHAHL-ter',
        grammar: 'pl. die Schalter',
        en: 'counter (window); switch',
        examples: [
          { de: 'Gehen Sie bitte zum Schalter drei!', en: 'Please go to counter three!' },
          { de: 'Der Lichtschalter ist neben der Tür.', en: 'The light switch is next to the door.' },
        ],
      },
      {
        de: 'scharf',
        pron: 'sharf',
        en: 'spicy, hot; sharp',
        examples: [
          { de: 'Die Suppe ist mir zu scharf.', en: 'The soup is too spicy for me.' },
          { de: 'Pass auf! Das Messer ist sehr scharf.', en: 'Careful! The knife is very sharp.' },
        ],
      },
      {
        de: 'scheinen',
        pron: 'SHY-nen',
        grammar: 'scheint · hat geschienen',
        en: 'to shine; to seem',
        examples: [
          { de: 'Die Sonne scheint.', en: 'The sun is shining.' },
        ],
      },
      {
        de: 'schenken',
        pron: 'SHENG-ken',
        grammar: 'schenkt · hat geschenkt',
        en: 'to give (as a present)',
        examples: [
          { de: 'Was schenken wir Michael zum Geburtstag?', en: 'What shall we give Michael for his birthday?' },
        ],
      },
      {
        de: 'die Schere',
        pron: 'dee SHAY-ruh',
        grammar: 'pl. die Scheren',
        en: 'scissors',
        examples: [
          { de: 'Die Schere schneidet nicht gut. Hast du eine andere?', en: 'The scissors don\'t cut well. Do you have another pair?' },
        ],
      },
      {
        de: 'schicken',
        pron: 'SHIK-en',
        grammar: 'schickt · hat geschickt',
        en: 'to send',
        examples: [
          { de: 'Bitte schicken Sie mir eine E-Mail.', en: 'Please send me an email.' },
          { de: 'Ich schicke dir den Brief nach Hause.', en: 'I\'ll send the letter to your home.' },
        ],
      },
      {
        de: 'das Schiff',
        pron: 'dahs shif',
        grammar: 'pl. die Schiffe',
        en: 'ship',
        examples: [
          { de: 'Wir fahren mit dem Schiff von Basel nach Köln.', en: 'We\'re going by ship from Basel to Cologne.' },
        ],
      },
      {
        de: 'das Schild',
        pron: 'dahs shilt',
        grammar: 'pl. die Schilder',
        en: 'sign',
        examples: [
          { de: 'Haben Sie das Schild nicht gesehen?', en: 'Didn\'t you see the sign?' },
        ],
      },
      {
        de: 'schimpfen',
        pron: 'SHIMP-fen',
        grammar: 'schimpft · hat geschimpft',
        en: 'to complain; to scold',
        examples: [
          { de: 'Warum schimpfst du denn so laut? – Ich ärgere mich über mein Auto.', en: 'Why are you complaining so loudly? – I\'m annoyed about my car.' },
          { de: 'Alle schimpfen über/auf das Wetter.', en: 'Everyone complains about the weather.' },
        ],
      },
      {
        de: 'der Schirm',
        pron: 'dair shirm',
        grammar: 'pl. die Schirme',
        en: 'umbrella',
        examples: [
          { de: 'Nimm den Schirm mit, es regnet.', en: 'Take the umbrella, it\'s raining.' },
        ],
      },
      {
        de: 'schlafen',
        pron: 'SHLAH-fen',
        grammar: 'schläft · hat geschlafen',
        en: 'to sleep',
        examples: [
          { de: 'Ich schlafe meistens acht Stunden.', en: 'I usually sleep eight hours.' },
          { de: 'Haben Sie gut geschlafen?', en: 'Did you sleep well?' },
          { de: 'Gute Nacht! Schlaf gut und träum süß!', en: 'Good night! Sleep well and sweet dreams!' },
        ],
      },
      {
        de: 'das Schlafzimmer',
        pron: 'dahs SHLAHF-tsim-er',
        grammar: 'pl. die Schlafzimmer',
        en: 'bedroom',
        examples: [
          { de: 'Hier ist das Schlafzimmer.', en: 'Here is the bedroom.' },
        ],
      },
      {
        de: 'schlecht',
        pron: 'shlekht',
        en: 'bad; ill, sick',
        examples: [
          { de: 'Das Wetter ist schlecht. Wir haben schon seit einer Woche schlechtes Wetter.', en: 'The weather is bad. We\'ve had bad weather for a week now.' },
          { de: 'Mir ist schlecht!', en: 'I feel sick!' },
          { de: 'Mir geht es schlecht. Ich habe Fieber.', en: 'I\'m not well. I have a fever.' },
        ],
      },
      {
        de: 'schließen',
        pron: 'SHLEE-sen',
        grammar: 'schließt · hat geschlossen',
        en: 'to close, to shut',
        examples: [
          { de: 'Bitte schließen Sie die Tür.', en: 'Please close the door.' },
          { de: 'Wir müssen uns beeilen, die Bank schließt um 18 Uhr.', en: 'We have to hurry, the bank closes at 6 p.m.' },
        ],
      },
      {
        de: 'schlimm',
        pron: 'shlim',
        en: 'bad, serious',
        examples: [
          { de: 'Kein Problem, das ist nicht so schlimm.', en: 'No problem, it\'s not that bad.' },
        ],
      },
      {
        de: 'das Schloss',
        pron: 'dahs shlos',
        grammar: 'pl. die Schlösser',
        en: 'castle, palace; lock',
        examples: [
          { de: 'Am Wochenende besichtigen wir Schloss Neuschwanstein.', en: 'At the weekend we\'re visiting Neuschwanstein Castle.' },
          { de: 'An unserer Tür ist das Schloss kaputt.', en: 'The lock on our door is broken.' },
        ],
      },
      {
        de: 'der Schluss',
        pron: 'dair shlooss',
        grammar: 'pl. die Schlüsse',
        en: 'end; conclusion',
        examples: [
          { de: 'Zum Schluss nochmals herzlichen Dank.', en: 'Finally, many thanks once again.' },
          { de: 'Ich muss jetzt Schluss machen. Bis bald!', en: 'I have to stop now. See you soon!' },
        ],
      },
      {
        de: 'der Schlüssel',
        pron: 'dair SHLEW-sel',
        grammar: 'pl. die Schlüssel',
        en: 'key',
        examples: [
          { de: 'Ich gebe Ihnen noch den Zimmerschlüssel.', en: 'Let me give you the room key.' },
          { de: 'Ich finde meinen Schlüssel nicht.', en: 'I can\'t find my key.' },
        ],
      },
      {
        de: 'schmecken',
        pron: 'SHMEK-en',
        grammar: 'schmeckt · hat geschmeckt',
        en: 'to taste (good)',
        examples: [
          { de: 'Schmeckt dir die Suppe?', en: 'Do you like the soup?' },
          { de: 'Hat es Ihnen geschmeckt?', en: 'Did you enjoy your meal?' },
          { de: 'Schmeckt\'s?', en: 'Does it taste good?' },
        ],
      },
      {
        de: 'der Schmerz',
        pron: 'dair shmairts',
        grammar: 'pl. die Schmerzen',
        en: 'pain',
        examples: [
          { de: 'Haben Sie Schmerzen?', en: 'Are you in pain?' },
          { de: 'Ich habe Bauchschmerzen.', en: 'I have a stomachache.' },
        ],
      },
      {
        de: 'schmutzig',
        pron: 'SHMOOT-sikh',
        en: 'dirty',
        examples: [
          { de: 'Das Handtuch ist schmutzig.', en: 'The towel is dirty.' },
        ],
      },
      {
        de: 'der Schnee',
        pron: 'dair shnay',
        grammar: 'no plural',
        en: 'snow',
        examples: [
          { de: 'In den Bergen liegt viel Schnee.', en: 'There\'s a lot of snow in the mountains.' },
        ],
      },
      {
        de: 'schneiden (sich)',
        pron: 'SHNY-den (zikh)',
        grammar: 'schneidet · hat geschnitten',
        en: 'to cut (oneself)',
        examples: [
          { de: 'Das Messer schneidet nicht gut.', en: 'The knife doesn\'t cut well.' },
          { de: 'Wer schneidet dir die Haare?', en: 'Who cuts your hair?' },
          { de: 'Aua! Ich habe mich geschnitten!', en: 'Ouch! I\'ve cut myself!' },
        ],
      },
      {
        de: 'schneien',
        pron: 'SHNY-en',
        grammar: 'schneit · hat geschneit',
        en: 'to snow',
        examples: [
          { de: 'Morgen schneit es.', en: 'It will snow tomorrow.' },
        ],
      },
      {
        de: 'schnell',
        pron: 'shnel',
        en: 'fast, quick',
        examples: [
          { de: 'Warum fährst du so schnell?', en: 'Why are you driving so fast?' },
        ],
      },
      {
        de: 'die Schokolade',
        pron: 'dee shoh-koh-LAH-duh',
        grammar: 'no plural',
        en: 'chocolate',
        examples: [
          { de: 'Julia liebt Schokolade.', en: 'Julia loves chocolate.' },
        ],
      },
      {
        de: 'schon',
        pron: 'shohn',
        en: 'already; yet',
        examples: [
          { de: 'Ist das Essen schon fertig?', en: 'Is the food ready yet?' },
          { de: 'Ich wohne schon seit fünf Jahren in Freiburg.', en: 'I\'ve been living in Freiburg for five years now.' },
        ],
      },
      {
        de: 'schön',
        pron: 'shurn',
        en: 'beautiful, nice',
        examples: [
          { de: 'Schöne Ferien!', en: 'Have a nice holiday!' },
          { de: 'Das Bild ist sehr schön.', en: 'The picture is very beautiful.' },
          { de: 'Schön, dass du kommst.', en: 'Nice that you\'re coming.' },
        ],
      },
      {
        de: 'der Schrank',
        pron: 'dair shrahnk',
        grammar: 'pl. die Schränke',
        en: 'cupboard, wardrobe',
        examples: [
          { de: 'Die Gläser stehen im Schrank.', en: 'The glasses are in the cupboard.' },
          { de: 'Legst du bitte die Handtücher in den Schrank?', en: 'Will you put the towels in the cupboard, please?' },
        ],
      },
      {
        de: 'schrecklich',
        pron: 'SHREK-likh',
        en: 'terrible, awful',
        examples: [
          { de: 'Ich finde ihren Rock schrecklich. Er sieht furchtbar aus!', en: 'I think her skirt is awful. It looks terrible!' },
          { de: 'Ich finde den Film schrecklich. Er macht mir Angst.', en: 'I think the film is terrible. It scares me.' },
        ],
      },
      {
        de: 'schreiben',
        pron: 'SHRY-ben',
        grammar: 'schreibt · hat geschrieben',
        en: 'to write',
        examples: [
          { de: 'Ich schreibe dir eine E-Mail.', en: 'I\'ll write you an email.' },
        ],
      },
      {
        de: 'schriftlich',
        pron: 'SHRIFT-likh',
        en: 'written, in writing',
        examples: [
          { de: 'Sie müssen sich schriftlich anmelden.', en: 'You have to register in writing.' },
          { de: 'Die schriftliche Prüfung dauert 70 Minuten.', en: 'The written exam takes 70 minutes.' },
        ],
      },
      {
        de: 'der Schuh',
        pron: 'dair shoo',
        grammar: 'pl. die Schuhe',
        en: 'shoe',
        examples: [
          { de: 'Zieh die Schuhe aus!', en: 'Take your shoes off!' },
          { de: 'Die neuen Schuhe sind mir zu eng. Sie drücken.', en: 'The new shoes are too tight for me. They pinch.' },
        ],
      },
      {
        de: 'die Schule',
        pron: 'dee SHOO-luh',
        grammar: 'pl. die Schulen',
        en: 'school',
        examples: [
          { de: 'Meine Tochter geht schon in die Schule.', en: 'My daughter already goes to school.' },
          { de: 'Die Schule ist gleich hier um die Ecke.', en: 'The school is just around the corner here.' },
        ],
      },
      {
        de: 'der Schüler / die Schülerin',
        pron: 'dair SHEW-ler / dee SHEW-ler-in',
        grammar: 'pl. die Schüler / die Schülerinnen',
        en: 'pupil, student',
        examples: [
          { de: 'In meinem Kurs sind acht Schülerinnen und fünf Schüler.', en: 'In my course there are eight female and five male students.' },
        ],
      },
      {
        de: 'schwach',
        pron: 'shvahkh',
        en: 'weak',
        examples: [
          { de: 'Er ist krank und schwach.', en: 'He is ill and weak.' },
          { de: 'Ich fühle mich sehr schwach.', en: 'I feel very weak.' },
          { de: 'Die Tabletten sind zu schwach. Sie helfen nicht.', en: 'The tablets are too weak. They don\'t help.' },
        ],
      },
      {
        de: 'schwanger',
        pron: 'SHVAHNG-er',
        en: 'pregnant',
        examples: [
          { de: 'Lena ist schwanger. Sie bekommt im Juli ein Kind.', en: 'Lena is pregnant. She\'s having a baby in July.' },
        ],
      },
      {
        de: 'das Schwein',
        pron: 'dahs shvine',
        grammar: 'pl. die Schweine',
        en: 'pig',
        examples: [
          { de: 'Ich esse kein Schweinefleisch.', en: 'I don\'t eat pork.' },
        ],
      },
      {
        de: 'schwer',
        pron: 'shvair',
        en: 'heavy; difficult',
        examples: [
          { de: 'Wie schwer ist das Paket?', en: 'How heavy is the parcel?' },
          { de: 'Das ist eine schwere Arbeit.', en: 'That is hard work.' },
        ],
      },
      {
        de: 'schwierig',
        pron: 'SHVEE-rikh',
        en: 'difficult',
        examples: [
          { de: 'Die Prüfung war nicht schwierig.', en: 'The exam wasn\'t difficult.' },
        ],
      },
      {
        de: 'das Schwimmbad',
        pron: 'dahs SHVIM-baht',
        grammar: 'pl. die Schwimmbäder',
        en: 'swimming pool',
        examples: [
          { de: 'Kommst du mit ins Schwimmbad?', en: 'Are you coming to the swimming pool?' },
        ],
      },
      {
        de: 'schwimmen',
        pron: 'SHVIM-en',
        grammar: 'schwimmt · ist geschwommen',
        en: 'to swim',
        examples: [
          { de: 'Ich schwimme täglich einen Kilometer.', en: 'I swim a kilometre every day.' },
        ],
      },
      {
        de: 'der See',
        pron: 'dair zay',
        grammar: 'pl. die Seen',
        en: 'lake',
        examples: [
          { de: 'Morgen fahren wir mal an einen See schwimmen.', en: 'Tomorrow we\'re going swimming at a lake.' },
          { de: 'Komm, wir fahren an den Bodensee.', en: 'Come on, let\'s go to Lake Constance.' },
        ],
      },
      {
        de: 'die See',
        pron: 'dee zay',
        grammar: 'no plural',
        en: 'sea',
        examples: [
          { de: 'Die See ist heute ruhig.', en: 'The sea is calm today.' },
          { de: 'Wir machen Urlaub an der Nordsee.', en: 'We\'re on holiday at the North Sea.' },
        ],
      },
      {
        de: 'sehen',
        pron: 'ZAY-en',
        grammar: 'sieht · hat gesehen',
        en: 'to see; to watch',
        examples: [
          { de: 'Ich kann dich nicht sehen.', en: 'I can\'t see you.' },
          { de: 'Möchtest du einen Film sehen?', en: 'Would you like to watch a film?' },
          { de: 'Ich habe Lisa lange nicht gesehen. Ist sie im Urlaub?', en: 'I haven\'t seen Lisa for a long time. Is she on holiday?' },
          { de: 'Darf ich mal Ihren Ausweis sehen?', en: 'May I see your ID?' },
        ],
      },
      {
        de: 'die Sehenswürdigkeit',
        pron: 'dee ZAY-ens-vewr-dikh-kite',
        grammar: 'pl. die Sehenswürdigkeiten',
        en: 'sight, attraction',
        examples: [
          { de: 'Welche Sehenswürdigkeiten gibt es in Frankfurt?', en: 'What sights are there in Frankfurt?' },
        ],
      },
      {
        de: 'sehr',
        pron: 'zair',
        en: 'very',
        examples: [
          { de: 'Danke sehr!', en: 'Thank you very much!' },
          { de: 'Das Wetter ist heute sehr schön.', en: 'The weather is very nice today.' },
        ],
      },
      {
        de: 'die Seife',
        pron: 'dee ZY-fuh',
        grammar: 'pl. die Seifen',
        en: 'soap',
        examples: [
          { de: 'Hier gibt es keine Seife.', en: 'There\'s no soap here.' },
        ],
      },
      {
        de: 'sein',
        pron: 'zyne',
        grammar: 'ist · war · ist gewesen',
        en: 'to be',
        examples: [
          { de: 'Das sind meine Kollegen.', en: 'These are my colleagues.' },
          { de: 'Ich bin Mechaniker.', en: 'I\'m a mechanic.' },
          { de: 'Die Cola ist kalt.', en: 'The cola is cold.' },
          { de: 'Mir ist kalt.', en: 'I\'m cold.' },
          { de: 'Ich bin dreiundzwanzig.', en: 'I\'m twenty-three.' },
          { de: 'Um halb elf ist Pause.', en: 'There\'s a break at half past ten.' },
          { de: 'Frau Berger ist im Urlaub.', en: 'Ms Berger is on holiday.' },
        ],
      },
      {
        de: 'an sein',
        pron: 'ahn zyne',
        en: 'to be on (light, device)',
        examples: [
          { de: 'Das Licht ist noch an/schon aus.', en: 'The light is still on/already off.' },
        ],
      },
      {
        de: 'aus sein',
        pron: 'owss zyne',
        en: 'to be off (light, device); to be over',
        examples: [
          { de: 'Das Licht ist noch an/schon aus.', en: 'The light is still on/already off.' },
        ],
      },
      {
        de: 'auf sein',
        pron: 'owf zyne',
        en: 'to be open',
        examples: [
          { de: 'Das Fenster ist noch auf.', en: 'The window is still open.' },
        ],
      },
      {
        de: 'weg sein',
        pron: 'vek zyne',
        en: 'to be gone, to be away',
        examples: [
          { de: 'Herr Meier ist schon weg.', en: 'Mr Meier has already left.' },
        ],
      },
      {
        de: 'zu sein',
        pron: 'tsoo zyne',
        en: 'to be closed, to be shut',
        examples: [
          { de: 'Die Tür ist zu.', en: 'The door is closed.' },
        ],
      },
      {
        de: 'seit',
        pron: 'zite',
        en: 'since; for (time)',
        examples: [
          { de: 'Ich wohne seit drei Jahren in Köln.', en: 'I\'ve been living in Cologne for three years.' },
        ],
      },
      {
        de: 'die Seite',
        pron: 'dee ZY-tuh',
        grammar: 'pl. die Seiten',
        en: 'page; side',
        examples: [
          { de: 'Öffnen Sie das Kursbuch auf Seite 20.', en: 'Open the coursebook at page 20.' },
          { de: 'Das ist die Bachstraße. Mein Haus ist auf der linken Seite.', en: 'This is Bachstraße. My house is on the left side.' },
        ],
      },
      {
        de: 'selbst',
        pron: 'zelpst',
        en: 'oneself (myself, yourself…); even',
        examples: [
          { de: 'Du musst mir nicht helfen, ich mache das selbst.', en: 'You don\'t have to help me, I\'ll do it myself.' },
        ],
      },
      {
        de: 'die Sendung',
        pron: 'dee ZEN-doong',
        grammar: 'pl. die Sendungen',
        en: 'programme, broadcast; shipment',
        examples: [
          { de: 'Welche Sendungen schaust du gern an? – Ich mag Sportsendungen.', en: 'Which programmes do you like to watch? – I like sports programmes.' },
          { de: 'Diese Sendung ist nicht für Jugendliche unter 18 Jahren.', en: 'This programme is not for young people under 18.' },
        ],
      },
      {
        de: 'der Service',
        pron: 'dair SUR-vis',
        grammar: 'no plural',
        en: 'service',
        examples: [
          { de: 'Ich bin mit dem Service in der Werkstatt sehr zufrieden.', en: 'I\'m very happy with the service at the garage.' },
          { de: 'Rufst du beim Pizza-Service an?', en: 'Will you call the pizza delivery service?' },
        ],
      },
      {
        de: 'setzen (sich)',
        pron: 'ZET-sen (zikh)',
        grammar: 'setzt · hat gesetzt',
        en: 'to sit down; to put',
        examples: [
          { de: 'Setz dich doch!', en: 'Do sit down!' },
        ],
      },
      {
        de: 'sicher',
        pron: 'ZIKH-er',
        en: 'safe; sure, certain; surely',
        examples: [
          { de: 'Dieses Auto ist besonders sicher.', en: 'This car is especially safe.' },
          { de: 'Ich bin ganz sicher, dass er kommt.', en: 'I\'m quite sure he\'s coming.' },
          { de: 'Er ist sicher gleich da.', en: 'He\'ll surely be here any minute.' },
        ],
      },
      {
        de: 'singen',
        pron: 'ZING-en',
        grammar: 'singt · hat gesungen',
        en: 'to sing',
        examples: [
          { de: 'Er singt gern.', en: 'He likes to sing.' },
        ],
      },
      {
        de: 'die Situation',
        pron: 'dee zi-too-ah-TSYOHN',
        grammar: 'pl. die Situationen',
        en: 'situation',
        examples: [
          { de: 'Ich bin in einer schwierigen Situation. Ich weiß nicht, was ich tun soll.', en: 'I\'m in a difficult situation. I don\'t know what to do.' },
          { de: 'Lesen Sie die Anzeigen und die Aufgaben 11-15. Welche Anzeige passt zu welcher Situation?', en: 'Read the ads and tasks 11–15. Which ad matches which situation?' },
        ],
      },
      {
        de: 'sitzen',
        pron: 'ZIT-sen',
        grammar: 'sitzt · hat/ist gesessen',
        en: 'to sit, to be sitting',
        examples: [
          { de: 'Wo möchten Sie sitzen? – Bitte ganz hinten.', en: 'Where would you like to sit? – Right at the back, please.' },
        ],
      },
      {
        de: 'der Ski',
        pron: 'dair shee',
        grammar: 'pl. die Ski / die Skier',
        en: 'ski',
        examples: [
          { de: 'Gehen wir am Wochenende Ski fahren?', en: 'Shall we go skiing at the weekend?' },
          { de: 'Er kauft sich neue Ski.', en: 'He\'s buying himself new skis.' },
        ],
      },
      {
        de: 'so',
        pron: 'zoh',
        en: 'so; like this; as',
        examples: [
          { de: 'Sie müssen das so machen!', en: 'You have to do it like this!' },
          { de: 'Fahren Sie bitte nicht so schnell!', en: 'Please don\'t drive so fast!' },
          { de: 'Meine Frau ist so groß wie ich.', en: 'My wife is as tall as me.' },
          { de: 'So, das war\'s/wär\'s!', en: 'Right, that\'s it!' },
        ],
      },
      {
        de: 'das Sofa',
        pron: 'dahs ZOH-fah',
        grammar: 'pl. die Sofas',
        en: 'sofa',
        examples: [
          { de: 'Das Sofa ist bequem.', en: 'The sofa is comfortable.' },
        ],
      },
      {
        de: 'sofort',
        pron: 'zoh-FORT',
        en: 'immediately, at once',
        examples: [
          { de: 'Bitte antworten Sie sofort.', en: 'Please reply immediately.' },
          { de: 'Sie können sich ab sofort für den Kurs anmelden.', en: 'You can register for the course starting now.' },
        ],
      },
      {
        de: 'sogar',
        pron: 'zoh-GAR',
        en: 'even',
        examples: [
          { de: 'Heute ist es sehr kalt. In den Bergen schneit es sogar.', en: 'It\'s very cold today. It\'s even snowing in the mountains.' },
          { de: 'Zu meiner Hochzeit kommen viele Gäste. Sogar meine Tante aus Kanada kommt.', en: 'Many guests are coming to my wedding. Even my aunt from Canada is coming.' },
        ],
      },
      {
        de: 'sollen',
        pron: 'ZOL-en',
        grammar: 'soll · sollte',
        en: 'should, to be supposed to',
        examples: [
          { de: 'Wann soll ich kommen und was soll ich mitbringen?', en: 'When should I come and what should I bring?' },
          { de: 'Und, was hat der Arzt gesagt? – Ich soll drei Tage im Bett bleiben und viel Tee trinken.', en: 'So, what did the doctor say? – I\'m supposed to stay in bed for three days and drink lots of tea.' },
        ],
      },
      {
        de: 'die Sonne',
        pron: 'dee ZON-uh',
        grammar: 'pl. die Sonnen',
        en: 'sun',
        examples: [
          { de: 'Die Sonne scheint.', en: 'The sun is shining.' },
        ],
      },
      {
        de: 'sonnig',
        pron: 'ZON-ikh',
        en: 'sunny',
        examples: [
          { de: 'Morgen ist das Wetter wieder warm und sonnig.', en: 'Tomorrow the weather will be warm and sunny again.' },
        ],
      },
      {
        de: 'sonst',
        pron: 'zonst',
        en: 'else; otherwise',
        examples: [
          { de: 'Haben Sie sonst noch einen Wunsch? – Nein danke, das ist alles.', en: 'Would you like anything else? – No thanks, that\'s all.' },
          { de: 'Beeil dich, sonst kommen wir zu spät!', en: 'Hurry up, otherwise we\'ll be late!' },
        ],
      },
      {
        de: 'spannend',
        pron: 'SHPAHN-ent',
        en: 'exciting, gripping',
        examples: [
          { de: 'Ich finde den Film sehr spannend.', en: 'I find the film very exciting.' },
        ],
      },
      {
        de: 'sparen',
        pron: 'SHPAH-ren',
        grammar: 'spart · hat gespart',
        en: 'to save (money)',
        examples: [
          { de: 'Ein neues Auto ist sehr teuer. Ich muss sparen.', en: 'A new car is very expensive. I have to save.' },
        ],
      },
      {
        de: 'der Spaß',
        pron: 'dair shpahss',
        grammar: 'no plural',
        en: 'fun',
        examples: [
          { de: 'Meine Arbeit macht mir Spaß.', en: 'I enjoy my work.' },
          { de: 'Ich will nicht aufräumen. Das macht mir keinen Spaß.', en: 'I don\'t want to tidy up. It\'s no fun.' },
          { de: 'Viel Spaß!', en: 'Have fun!' },
        ],
      },
      {
        de: 'spät',
        pron: 'shpayt',
        en: 'late',
        examples: [
          { de: 'Es ist schon spät, ich muss gehen.', en: 'It\'s already late, I have to go.' },
        ],
      },
      {
        de: 'später',
        pron: 'SHPAY-ter',
        en: 'later',
        examples: [
          { de: 'Das können wir später machen.', en: 'We can do that later.' },
        ],
      },
      {
        de: 'spazieren gehen',
        pron: 'shpah-TSEE-ren GAY-en',
        grammar: 'geht spazieren · ist spazieren gegangen',
        en: 'to go for a walk',
        examples: [
          { de: 'Wir gehen sonntags immer spazieren.', en: 'We always go for a walk on Sundays.' },
        ],
      },
      {
        de: 'der Spaziergang',
        pron: 'dair shpah-TSEER-gahng',
        grammar: 'pl. die Spaziergänge',
        en: 'walk, stroll',
        examples: [
          { de: 'Abends mache ich immer einen Spaziergang.', en: 'I always go for a walk in the evening.' },
        ],
      },
      {
        de: 'speichern',
        pron: 'SHPY-khern',
        grammar: 'speichert · hat gespeichert',
        en: 'to save (data)',
        examples: [
          { de: 'Sie müssen die Datei speichern.', en: 'You have to save the file.' },
        ],
      },
      {
        de: 'die Speisekarte',
        pron: 'dee SHPY-zuh-kar-tuh',
        grammar: 'pl. die Speisekarten',
        en: 'menu',
        examples: [
          { de: 'Entschuldigung, bringen Sie uns bitte die Speisekarte.', en: 'Excuse me, please bring us the menu.' },
        ],
      },
      {
        de: 'das Spiel',
        pron: 'dahs shpeel',
        grammar: 'pl. die Spiele',
        en: 'game; match',
        examples: [
          { de: 'Welche Kartenspiele kennen Sie?', en: 'Which card games do you know?' },
          { de: 'Monopoly ist ein sehr bekanntes Spiel.', en: 'Monopoly is a very well-known game.' },
        ],
      },
      {
        de: 'spielen',
        pron: 'SHPEE-len',
        grammar: 'spielt · hat gespielt',
        en: 'to play',
        examples: [
          { de: 'Die Kinder spielen draußen.', en: 'The children are playing outside.' },
          { de: 'Spielen Sie Karten?', en: 'Do you play cards?' },
          { de: 'Jakob spielt Klavier.', en: 'Jakob plays the piano.' },
        ],
      },
      {
        de: 'der Sport',
        pron: 'dair shport',
        grammar: 'no plural',
        en: 'sport, exercise',
        examples: [
          { de: 'Ich mache viel Sport.', en: 'I do a lot of sport.' },
        ],
      },
      {
        de: 'sportlich',
        pron: 'SHPORT-likh',
        en: 'sporty, athletic',
        examples: [
          { de: 'Tom ist sehr sportlich.', en: 'Tom is very sporty.' },
        ],
      },
      {
        de: 'der Sportplatz',
        pron: 'dair SHPORT-plahts',
        grammar: 'pl. die Sportplätze',
        en: 'sports field',
        examples: [
          { de: 'Das Fußballtraining ist um 17 Uhr auf dem Sportplatz.', en: 'Football practice is at 5 p.m. on the sports field.' },
        ],
      },
      {
        de: 'die Sprache',
        pron: 'dee SHPRAH-khuh',
        grammar: 'pl. die Sprachen',
        en: 'language',
        examples: [
          { de: 'Welche Sprachen sprichst du? – Ich spreche Englisch und Spanisch.', en: 'Which languages do you speak? – I speak English and Spanish.' },
        ],
      },
      {
        de: 'sprechen',
        pron: 'SHPREH-khen',
        grammar: 'spricht · hat gesprochen',
        en: 'to speak, to talk',
        examples: [
          { de: 'Kann ich (mit) Herrn Klein sprechen?', en: 'Can I speak to Mr Klein?' },
        ],
      },
      {
        de: 'die Sprechstunde',
        pron: 'dee SHPREKH-shtoon-duh',
        grammar: 'pl. die Sprechstunden',
        en: 'office hours, surgery hours',
        examples: [
          { de: 'Frau Doktor Weiß hat von 9:00 bis 12:30 Uhr Sprechstunde.', en: 'Dr Weiß has surgery hours from 9:00 to 12:30.' },
        ],
      },
      {
        de: 'die Stadt',
        pron: 'dee shtaht',
        grammar: 'pl. die Städte',
        en: 'town, city',
        examples: [
          { de: 'Heidelberg ist eine alte Stadt.', en: 'Heidelberg is an old town.' },
        ],
      },
      {
        de: 'der Stadtplan',
        pron: 'dair SHTAHT-plahn',
        grammar: 'pl. die Stadtpläne',
        en: 'city map',
        examples: [
          { de: 'Haben Sie einen Stadtplan von Salzburg?', en: 'Do you have a map of Salzburg?' },
        ],
      },
      {
        de: 'der Star',
        pron: 'dair star',
        grammar: 'pl. die Stars',
        en: 'star (celebrity)',
        examples: [
          { de: 'Diese Sängerin ist ein Star in Deutschland.', en: 'This singer is a star in Germany.' },
        ],
      },
      {
        de: 'stark',
        pron: 'shtark',
        en: 'strong; heavy',
        examples: [
          { de: 'Ich habe starke Kopfschmerzen.', en: 'I have a bad headache.' },
          { de: 'Es regnet stark.', en: 'It\'s raining heavily.' },
          { de: 'Der Kaffee ist sehr stark.', en: 'The coffee is very strong.' },
        ],
      },
      {
        de: 'stattfinden',
        pron: 'SHTAHT-fin-den',
        grammar: 'findet statt · hat stattgefunden',
        en: 'to take place',
        examples: [
          { de: 'Das Spiel findet auch bei Regen statt.', en: 'The match takes place even if it rains.' },
        ],
      },
      {
        de: 'stehen',
        pron: 'SHTAY-en',
        grammar: 'steht · hat/ist gestanden',
        en: 'to stand; to be (written)',
        examples: [
          { de: 'Der Bus steht schon an der Haltestelle.', en: 'The bus is already at the stop.' },
          { de: 'Ich bin Verkäuferin. In meinem Beruf muss ich viel stehen.', en: 'I\'m a sales assistant. In my job I have to stand a lot.' },
          { de: 'Was steht heute in der Zeitung?', en: 'What\'s in the paper today?' },
        ],
      },
      {
        de: 'die Stelle',
        pron: 'dee SHTEL-uh',
        grammar: 'pl. die Stellen',
        en: 'job, position; place, spot',
        examples: [
          { de: 'Ich habe eine neue Stelle. Ich arbeite jetzt bei Mercedes.', en: 'I have a new job. I work at Mercedes now.' },
          { de: 'Wir treffen uns hier an dieser Stelle.', en: 'We\'ll meet here at this spot.' },
        ],
      },
      {
        de: 'stellen',
        pron: 'SHTEL-en',
        grammar: 'stellt · hat gestellt',
        en: 'to put, to place (upright)',
        examples: [
          { de: 'Stell die Milch bitte in den Kühlschrank!', en: 'Please put the milk in the fridge!' },
        ],
      },
      {
        de: 'sterben',
        pron: 'SHTER-ben',
        grammar: 'stirbt · ist gestorben',
        en: 'to die',
        examples: [
          { de: 'Herr Müller kommt heute nicht. Sein Vater ist gestern gestorben.', en: 'Mr Müller isn\'t coming today. His father died yesterday.' },
        ],
      },
      {
        de: 'der Stiefel',
        pron: 'dair SHTEE-fel',
        grammar: 'pl. die Stiefel',
        en: 'boot',
        examples: [
          { de: 'Wie viel kosten die roten Stiefel?', en: 'How much are the red boots?' },
        ],
      },
      {
        de: 'der Stift',
        pron: 'dair shtift',
        grammar: 'pl. die Stifte',
        en: 'pen, pencil',
        examples: [
          { de: 'Kannst du mir bitte einen Stift geben? – Was brauchst du? Einen Farbstift oder einen Bleistift oder einen Kugelschreiber?', en: 'Can you give me a pen, please? – What do you need? A coloured pencil, a pencil or a ballpoint pen?' },
        ],
      },
      {
        de: 'das Stipendium',
        pron: 'dahs shti-PEN-dee-oom',
        grammar: 'pl. die Stipendien',
        en: 'scholarship',
        examples: [
          { de: 'Wenn ich ein gutes Zeugnis habe, bekomme ich ein Stipendium.', en: 'If I get a good report, I\'ll get a scholarship.' },
        ],
      },
      {
        de: 'der Stock',
        pron: 'dair shtok',
        grammar: 'pl. die Stöcke',
        en: 'floor, storey',
        examples: [
          { de: 'Unsere Wohnung liegt im ersten Stock.', en: 'Our flat is on the first floor.' },
        ],
      },
      {
        de: 'das Stockwerk',
        pron: 'dahs SHTOK-vairk',
        grammar: 'pl. die Stockwerke',
        en: 'floor, storey',
        examples: [
          { de: 'Das Gebäude hat zwanzig Stockwerke.', en: 'The building has twenty floors.' },
        ],
      },
      {
        de: 'stören',
        pron: 'SHTUR-ren',
        grammar: 'stört · hat gestört',
        en: 'to disturb, to bother',
        examples: [
          { de: 'Störe ich?', en: 'Am I disturbing you?' },
          { de: 'Darf ich Sie kurz stören?', en: 'May I disturb you for a moment?' },
          { de: 'Mach die Musik leiser! Sie stört mich.', en: 'Turn the music down! It\'s bothering me.' },
        ],
      },
      {
        de: 'der Strand',
        pron: 'dair shtrahnt',
        grammar: 'pl. die Strände',
        en: 'beach',
        examples: [
          { de: 'Im Urlaub bin ich am liebsten am Strand.', en: 'On holiday I like being at the beach most.' },
        ],
      },
      {
        de: 'die Straße',
        pron: 'dee SHTRAH-suh',
        grammar: 'pl. die Straßen',
        en: 'street, road',
        examples: [
          { de: 'In welcher Straße wohnen Sie?', en: 'Which street do you live on?' },
        ],
      },
      {
        de: 'die Straßenbahn',
        pron: 'dee SHTRAH-sen-bahn',
        grammar: 'pl. die Straßenbahnen',
        en: 'tram',
        examples: [
          { de: 'Fahren wir mit der Straßenbahn oder mit der U-Bahn?', en: 'Shall we take the tram or the underground?' },
        ],
      },
      {
        de: 'streiten (sich)',
        pron: 'SHTRY-ten (zikh)',
        grammar: 'streitet · hat gestritten',
        en: 'to argue, to quarrel',
        examples: [
          { de: 'Die Kinder streiten (sich) oft.', en: 'The children often argue.' },
        ],
      },
      {
        de: 'streng',
        pron: 'shtreng',
        en: 'strict',
        examples: [
          { de: 'Der Lehrer von meiner Tochter ist sehr streng.', en: 'My daughter\'s teacher is very strict.' },
        ],
      },
      {
        de: 'der Stress',
        pron: 'dair shtress',
        grammar: 'no plural',
        en: 'stress',
        examples: [
          { de: 'Ich habe bei der Arbeit viel Stress.', en: 'I have a lot of stress at work.' },
        ],
      },
      {
        de: 'stressig',
        pron: 'SHTRESS-ikh',
        en: 'stressful',
        examples: [
          { de: 'Meine Arbeit ist stressig.', en: 'My work is stressful.' },
        ],
      },
      {
        de: 'das Stück',
        pron: 'dahs shtewk',
        grammar: 'pl. die Stücke',
        en: 'piece; play',
        examples: [
          { de: 'Möchten Sie noch ein Stück Kuchen?', en: 'Would you like another piece of cake?' },
          { de: 'Im Theater spielen sie heute das Stück „Romeo und Julia“.', en: 'Today at the theatre they\'re performing the play "Romeo and Juliet".' },
        ],
      },
      {
        de: 'der Student / die Studentin',
        pron: 'dair shtoo-DENT / dee shtoo-DEN-tin',
        grammar: 'pl. die Studenten / die Studentinnen',
        en: '(university) student',
        examples: [
          { de: 'Ich bin Studentin.', en: 'I\'m a student.' },
        ],
      },
      {
        de: 'studieren',
        pron: 'shtoo-DEE-ren',
        grammar: 'studiert · hat studiert',
        en: 'to study (at university)',
        examples: [
          { de: 'Ich studiere in Mainz.', en: 'I study in Mainz.' },
        ],
      },
      {
        de: 'das Studium',
        pron: 'dahs SHTOO-dee-oom',
        grammar: 'no plural',
        en: '(university) studies, degree',
        examples: [
          { de: 'Das Studium dauert drei Jahre.', en: 'The degree takes three years.' },
        ],
      },
      {
        de: 'der Stuhl',
        pron: 'dair shtool',
        grammar: 'pl. die Stühle',
        en: 'chair',
        examples: [
          { de: 'Ist der Stuhl frei?', en: 'Is this chair free?' },
        ],
      },
      {
        de: 'suchen',
        pron: 'ZOO-khen',
        grammar: 'sucht · hat gesucht',
        en: 'to look for, to search',
        examples: [
          { de: 'Suchst du etwas?', en: 'Are you looking for something?' },
          { de: 'Ich suche meine Brille.', en: 'I\'m looking for my glasses.' },
          { de: 'Wir suchen eine größere Wohnung.', en: 'We\'re looking for a bigger flat.' },
        ],
      },
      {
        de: 'super',
        pron: 'ZOO-per',
        en: 'great, super',
        examples: [
          { de: 'Der Film ist super.', en: 'The film is great.' },
          { de: 'Er kann super tanzen.', en: 'He dances brilliantly.' },
        ],
      },
      {
        de: 'der Supermarkt',
        pron: 'dair ZOO-per-markt',
        grammar: 'pl. die Supermärkte',
        en: 'supermarket',
        examples: [
          { de: 'Ich kaufe oft im Supermarkt ein.', en: 'I often shop at the supermarket.' },
        ],
      },
      {
        de: 'die Suppe',
        pron: 'dee ZOOP-uh',
        grammar: 'pl. die Suppen',
        en: 'soup',
        examples: [
          { de: 'Schmeckt dir die Suppe?', en: 'Do you like the soup?' },
        ],
      },
      {
        de: 'surfen',
        pron: 'ZUR-fen',
        grammar: 'surft · hat/ist gesurft',
        en: 'to surf',
        examples: [
          { de: 'Ich möchte gern surfen lernen.', en: 'I\'d like to learn to surf.' },
          { de: 'Surfst du oft im Internet?', en: 'Do you often surf the internet?' },
        ],
      },
      {
        de: 'süß',
        pron: 'zewss',
        en: 'sweet; cute',
        examples: [
          { de: 'Ich finde die Torte zu süß.', en: 'I find the cake too sweet.' },
          { de: 'Ist das deine Tochter? Die ist ja süß!', en: 'Is that your daughter? She\'s so cute!' },
        ],
      },
      {
        de: 'die Süßigkeiten',
        pron: 'dee ZEW-sikh-ky-ten',
        grammar: 'plural only',
        en: 'sweets, candy',
        examples: [
          { de: 'Welche Süßigkeiten isst du am liebsten? – Schokolade und Eis.', en: 'Which sweets do you like best? – Chocolate and ice cream.' },
        ],
      },
      {
        de: 'sympathisch',
        pron: 'zewm-PAH-tish',
        en: 'nice, likeable',
        examples: [
          { de: 'Der neue Chef ist sehr sympathisch.', en: 'The new boss is very likeable.' },
        ],
      },
    ],
  },
  {
    letter: 'T',
    entries: [
      {
        de: 'das Tablet',
        pron: 'dahs TEB-let',
        grammar: 'pl. die Tablets',
        en: 'tablet (computer)',
        examples: [
          { de: 'Hast du ein Tablet? – Nein, ich habe einen Laptop und ein Handy.', en: 'Do you have a tablet? – No, I have a laptop and a mobile phone.' },
        ],
      },
      {
        de: 'die Tablette',
        pron: 'dee tah-BLET-uh',
        grammar: 'pl. die Tabletten',
        en: 'tablet, pill',
        examples: [
          { de: 'Du sollst am Abend zwei Tabletten nehmen.', en: 'You should take two tablets in the evening.' },
        ],
      },
      {
        de: 'die Tafel',
        pron: 'dee TAH-fel',
        grammar: 'pl. die Tafeln',
        en: 'board, blackboard; (info) board',
        examples: [
          { de: 'Der Lehrer schreibt das neue Wort an die Tafel.', en: 'The teacher writes the new word on the board.' },
          { de: 'Am Eingang gibt es Tafeln mit Informationen.', en: 'At the entrance there are boards with information.' },
          { de: 'Die Infotafel ist am Eingang.', en: 'The information board is at the entrance.' },
        ],
      },
      {
        de: 'tanzen',
        pron: 'TAHN-tsen',
        grammar: 'tanzt · hat getanzt',
        en: 'to dance',
        examples: [
          { de: 'Tanzen Sie gern?', en: 'Do you like dancing?' },
        ],
      },
      {
        de: 'die Tasche',
        pron: 'dee TAH-shuh',
        grammar: 'pl. die Taschen',
        en: 'bag; pocket',
        examples: [
          { de: 'Ich habe die Schlüssel in der Tasche.', en: 'I have the keys in my bag.' },
          { de: 'Ich habe nicht viel Gepäck. Nur eine Tasche.', en: 'I don\'t have much luggage. Just one bag.' },
        ],
      },
      {
        de: 'das Taschengeld',
        pron: 'dahs TAH-shen-gelt',
        grammar: 'no plural',
        en: 'pocket money',
        examples: [
          { de: 'Wie viel Taschengeld bekommen deine Kinder?', en: 'How much pocket money do your children get?' },
        ],
      },
      {
        de: 'die Tasse',
        pron: 'dee TAH-suh',
        grammar: 'pl. die Tassen',
        en: 'cup',
        examples: [
          { de: 'Möchten Sie eine Tasse Kaffee?', en: 'Would you like a cup of coffee?' },
        ],
      },
      {
        de: '(aus)tauschen',
        pron: '(OWS-)tow-shen',
        grammar: 'tauscht (aus) · hat (aus)getauscht',
        en: 'to swap, to exchange',
        examples: [
          { de: 'Können wir bitte die Plätze tauschen?', en: 'Can we swap seats, please?' },
          { de: 'Können wir unsere Adressen austauschen?', en: 'Can we exchange addresses?' },
        ],
      },
      {
        de: 'das Taxi',
        pron: 'dahs TAHK-see',
        grammar: 'pl. die Taxis',
        en: 'taxi',
        examples: [
          { de: 'Bitte rufen Sie mir ein Taxi.', en: 'Please call me a taxi.' },
        ],
      },
      {
        de: 'das Team',
        pron: 'dahs teem',
        grammar: 'pl. die Teams',
        en: 'team',
        examples: [
          { de: 'Ich arbeite gern in einem Team.', en: 'I like working in a team.' },
          { de: 'Welches Fußballteam findest du am besten?', en: 'Which football team do you like best?' },
        ],
      },
      {
        de: 'der Tee',
        pron: 'dair tay',
        grammar: 'pl. die Tees',
        en: 'tea',
        examples: [
          { de: 'Ich trinke morgens immer Tee.', en: 'I always drink tea in the morning.' },
        ],
      },
      {
        de: 'teilen',
        pron: 'TY-len',
        grammar: 'teilt · hat geteilt',
        en: 'to share; to divide',
        examples: [
          { de: 'Wollen wir die Pizza teilen?', en: 'Shall we share the pizza?' },
          { de: 'Mein Mann und ich teilen uns die Arbeit.', en: 'My husband and I share the work.' },
        ],
      },
      {
        de: 'teilnehmen',
        pron: 'TILE-nay-men',
        grammar: 'nimmt teil · hat teilgenommen',
        en: 'to take part, to participate',
        examples: [
          { de: 'Ich möchte an dem Tanzkurs teilnehmen.', en: 'I\'d like to take part in the dance course.' },
        ],
      },
      {
        de: 'das Telefon',
        pron: 'dahs TAY-luh-fohn',
        grammar: 'pl. die Telefone',
        en: 'telephone',
        examples: [
          { de: 'Darf ich bitte Ihr Telefon benutzen?', en: 'May I use your phone, please?' },
        ],
      },
      {
        de: 'telefonieren',
        pron: 'tay-luh-foh-NEE-ren',
        grammar: 'telefoniert · hat telefoniert',
        en: 'to make a phone call',
        examples: [
          { de: 'Ich muss kurz telefonieren.', en: 'I need to make a quick phone call.' },
        ],
      },
      {
        de: 'der Teller',
        pron: 'dair TEL-er',
        grammar: 'pl. die Teller',
        en: 'plate',
        examples: [
          { de: 'Stell die Teller bitte auf den Tisch!', en: 'Please put the plates on the table!' },
          { de: 'Möchtest du noch einen Teller Suppe?', en: 'Would you like another plate of soup?' },
        ],
      },
      {
        de: 'das Tennis',
        pron: 'dahs TEN-is',
        grammar: 'no plural',
        en: 'tennis',
        examples: [
          { de: 'Steffi spielt sehr gut Tennis.', en: 'Steffi plays tennis very well.' },
        ],
      },
      {
        de: 'der Termin',
        pron: 'dair tair-MEEN',
        grammar: 'pl. die Termine',
        en: 'appointment',
        examples: [
          { de: 'Am besten machen wir sofort einen Termin.', en: 'It\'s best if we make an appointment right away.' },
          { de: 'Ich habe heute einen Termin bei meiner Zahnärztin.', en: 'I have an appointment with my dentist today.' },
        ],
      },
      {
        de: 'teuer',
        pron: 'TOY-er',
        en: 'expensive',
        examples: [
          { de: 'Das ist mir zu teuer.', en: 'That\'s too expensive for me.' },
        ],
      },
      {
        de: 'der Text',
        pron: 'dair text',
        grammar: 'pl. die Texte',
        en: 'text',
        examples: [
          { de: 'Lesen Sie bitte den Text.', en: 'Please read the text.' },
        ],
      },
      {
        de: 'das Theater',
        pron: 'dahs tay-AH-ter',
        grammar: 'pl. die Theater',
        en: 'theatre',
        examples: [
          { de: 'Ich gehe nicht gern ins Theater.', en: 'I don\'t like going to the theatre.' },
        ],
      },
      {
        de: 'das Thema',
        pron: 'dahs TAY-mah',
        grammar: 'pl. die Themen',
        en: 'topic, subject',
        examples: [
          { de: 'Heute heißt unser Thema: „Essen und Trinken“.', en: 'Today our topic is "Food and Drink".' },
        ],
      },
      {
        de: 'das Ticket',
        pron: 'dahs TIK-et',
        grammar: 'pl. die Tickets',
        en: 'ticket',
        examples: [
          { de: 'Wie viel kostet das Ticket?', en: 'How much is the ticket?' },
        ],
      },
      {
        de: 'tief',
        pron: 'teef',
        en: 'deep',
        examples: [
          { de: 'Vorsicht, das Wasser ist tief!', en: 'Careful, the water is deep!' },
        ],
      },
      {
        de: 'das Tier',
        pron: 'dahs teer',
        grammar: 'pl. die Tiere',
        en: 'animal',
        examples: [
          { de: 'Wir dürfen keine Tiere in der Wohnung haben.', en: 'We\'re not allowed to have pets in the flat.' },
          { de: 'Meine Lieblingstiere sind Katzen.', en: 'My favourite animals are cats.' },
        ],
      },
      {
        de: 'der Tipp',
        pron: 'dair tip',
        grammar: 'pl. die Tipps',
        en: 'tip, hint',
        examples: [
          { de: 'Kannst du mir einen guten Tipp geben?', en: 'Can you give me a good tip?' },
        ],
      },
      {
        de: 'der Tisch',
        pron: 'dair tish',
        grammar: 'pl. die Tische',
        en: 'table',
        examples: [
          { de: 'Das Essen steht schon auf dem Tisch.', en: 'The food is already on the table.' },
        ],
      },
      {
        de: 'der Titel',
        pron: 'dair TEE-tel',
        grammar: 'pl. die Titel',
        en: 'title',
        examples: [
          { de: 'Wie heißt der Film? – Ich weiß den Titel nicht mehr.', en: 'What\'s the film called? – I can\'t remember the title.' },
        ],
      },
      {
        de: 'die Toilette',
        pron: 'dee toy-LET-uh',
        grammar: 'pl. die Toiletten',
        en: 'toilet',
        examples: [
          { de: 'Wo ist die Toilette, bitte?', en: 'Where is the toilet, please?' },
        ],
      },
      {
        de: 'toll',
        pron: 'tol',
        en: 'great, fantastic',
        examples: [
          { de: 'Der Urlaub war toll.', en: 'The holiday was great.' },
        ],
      },
      {
        de: 'die Tomate',
        pron: 'dee toh-MAH-tuh',
        grammar: 'pl. die Tomaten',
        en: 'tomato',
        examples: [
          { de: 'Die Tomate ist noch grün.', en: 'The tomato is still green.' },
        ],
      },
      {
        de: 'der Topf',
        pron: 'dair topf',
        grammar: 'pl. die Töpfe',
        en: 'pot, saucepan',
        examples: [
          { de: 'Hast du keinen größeren Topf? Ich möchte Kartoffeln kochen.', en: 'Don\'t you have a bigger pot? I want to boil potatoes.' },
        ],
      },
      {
        de: 'die Torte',
        pron: 'dee TOR-tuh',
        grammar: 'pl. die Torten',
        en: 'cake, gateau',
        examples: [
          { de: 'Zum Geburtstag backe ich dir eine Torte.', en: 'I\'ll bake you a cake for your birthday.' },
        ],
      },
      {
        de: 'tot',
        pron: 'toht',
        en: 'dead',
        examples: [
          { de: 'Meine Großeltern sind schon lange tot.', en: 'My grandparents died a long time ago.' },
        ],
      },
      {
        de: 'total',
        pron: 'toh-TAHL',
        en: 'totally, completely',
        examples: [
          { de: 'Der Film ist total langweilig.', en: 'The film is totally boring.' },
        ],
      },
      {
        de: 'die Tour',
        pron: 'dee toor',
        grammar: 'pl. die Touren',
        en: 'tour, trip',
        examples: [
          { de: 'Wo kann ich eine Stadttour buchen?', en: 'Where can I book a city tour?' },
          { de: 'Wir gehen am Wochenende wandern. Ich kenne eine schöne Tour in den Bergen.', en: 'We\'re going hiking at the weekend. I know a nice route in the mountains.' },
        ],
      },
      {
        de: 'der Tourist / die Touristin',
        pron: 'dair too-RIST / dee too-RIS-tin',
        grammar: 'pl. die Touristen / die Touristinnen',
        en: 'tourist',
        examples: [
          { de: 'Im Sommer kommen viele Touristen in diese Stadt.', en: 'In summer many tourists come to this town.' },
        ],
      },
      {
        de: 'tragen',
        pron: 'TRAH-gen',
        grammar: 'trägt · hat getragen',
        en: 'to carry; to wear',
        examples: [
          { de: 'Ich kann den Koffer nicht tragen, er ist zu schwer.', en: 'I can\'t carry the suitcase, it\'s too heavy.' },
          { de: 'Er trägt heute einen blauen Anzug.', en: 'He\'s wearing a blue suit today.' },
        ],
      },
      {
        de: 'trainieren',
        pron: 'tray-NEE-ren',
        grammar: 'trainiert · hat trainiert',
        en: 'to train, to practise',
        examples: [
          { de: 'Wir trainieren einmal pro Woche im Sportverein.', en: 'We train once a week at the sports club.' },
        ],
      },
      {
        de: 'das Training',
        pron: 'dahs TRAY-ning',
        grammar: 'pl. die Trainings',
        en: 'training, practice',
        examples: [
          { de: 'Das Training ist immer dienstags.', en: 'Training is always on Tuesdays.' },
          { de: 'Ich gehe jede Woche zum Training.', en: 'I go to training every week.' },
        ],
      },
      {
        de: 'der Traum',
        pron: 'dair trowm',
        grammar: 'pl. die Träume',
        en: 'dream',
        examples: [
          { de: 'Ich möchte eine eigene Firma, das ist mein Traum.', en: 'I\'d like my own company, that\'s my dream.' },
        ],
      },
      {
        de: 'träumen',
        pron: 'TROY-men',
        grammar: 'träumt · hat geträumt',
        en: 'to dream',
        examples: [
          { de: 'Ich habe schlecht geträumt.', en: 'I had a bad dream.' },
          { de: 'Ich träume von einem großen Haus mit Garten.', en: 'I dream of a big house with a garden.' },
        ],
      },
      {
        de: 'traurig',
        pron: 'TROW-rikh',
        en: 'sad',
        examples: [
          { de: 'Ich bin sehr traurig. Meine Katze ist weggelaufen.', en: 'I\'m very sad. My cat has run away.' },
        ],
      },
      {
        de: 'treffen (sich)',
        pron: 'TREF-en (zikh)',
        grammar: 'trifft · hat getroffen',
        en: 'to meet',
        examples: [
          { de: 'Ich treffe in der Stadt einen Kollegen.', en: 'I\'m meeting a colleague in town.' },
          { de: 'Wir treffen uns immer freitags.', en: 'We always meet on Fridays.' },
        ],
      },
      {
        de: 'die Treppe',
        pron: 'dee TREP-uh',
        grammar: 'pl. die Treppen',
        en: 'stairs, staircase',
        examples: [
          { de: 'Ich nehme die Treppe, nicht den Aufzug.', en: 'I\'ll take the stairs, not the lift.' },
          { de: 'Wo ist die Toilette? – Die Treppe hoch und dann links.', en: 'Where is the toilet? – Up the stairs and then left.' },
        ],
      },
      {
        de: 'trinken',
        pron: 'TRING-ken',
        grammar: 'trinkt · hat getrunken',
        en: 'to drink',
        examples: [
          { de: 'Möchtest du etwas trinken?', en: 'Would you like something to drink?' },
        ],
      },
      {
        de: 'trocken',
        pron: 'TROK-en',
        en: 'dry',
        examples: [
          { de: 'Die Wäsche ist bald trocken.', en: 'The laundry will soon be dry.' },
        ],
      },
      {
        de: 'tschüs',
        pron: 'chewss',
        en: 'bye',
        examples: [
          { de: 'Tschüs, bis morgen!', en: 'Bye, see you tomorrow!' },
        ],
      },
      {
        de: 'das T-Shirt',
        pron: 'dahs TEE-shurt',
        grammar: 'pl. die T-Shirts',
        en: 'T-shirt',
        examples: [
          { de: 'Haben Sie dieses T-Shirt auch in M?', en: 'Do you have this T-shirt in M as well?' },
        ],
      },
      {
        de: 'tun',
        pron: 'toon',
        grammar: 'tut · hat getan',
        en: 'to do',
        examples: [
          { de: 'Mein Rücken tut weh.', en: 'My back hurts.' },
          { de: 'Es tut mir leid, ich kann leider nicht kommen.', en: 'I\'m sorry, unfortunately I can\'t come.' },
          { de: 'Was kann ich für Sie tun?', en: 'What can I do for you?' },
        ],
      },
      {
        de: 'die Tür',
        pron: 'dee tewr',
        grammar: 'pl. die Türen',
        en: 'door',
        examples: [
          { de: 'Mach bitte die Tür zu!', en: 'Please close the door!' },
        ],
      },
      {
        de: 'typisch',
        pron: 'TEW-pish',
        en: 'typical',
        examples: [
          { de: 'Diese Musik ist typisch für dieses Land.', en: 'This music is typical of this country.' },
          { de: 'Typisch Anna, sie kommt natürlich wieder zu spät.', en: 'Typical Anna – of course she\'s late again.' },
        ],
      },
    ],
  },
  {
    letter: 'U',
    entries: [
      {
        de: 'üben',
        pron: 'EW-ben',
        grammar: 'übt · hat geübt',
        en: 'to practise',
        examples: [
          { de: 'Ich lerne gerade Gitarre spielen. Ich übe jeden Tag zwei Stunden.', en: 'I\'m learning to play the guitar. I practise two hours every day.' },
        ],
      },
      {
        de: 'über',
        pron: 'EW-ber',
        en: 'over, above; across; about; more than',
        examples: [
          { de: 'Gehen Sie lieber hier über die Straße.', en: 'Better cross the street here.' },
          { de: 'Über uns wohnt Familie Schneider.', en: 'The Schneider family lives above us.' },
          { de: 'Sind Sie über 18?', en: 'Are you over 18?' },
        ],
      },
      {
        de: 'überall',
        pron: 'ew-ber-AHL',
        en: 'everywhere',
        examples: [
          { de: 'Ich habe überall gesucht, aber ich kann meine Brille nicht finden.', en: 'I\'ve looked everywhere, but I can\'t find my glasses.' },
        ],
      },
      {
        de: 'übermorgen',
        pron: 'EW-ber-mor-gen',
        en: 'the day after tomorrow',
        examples: [
          { de: 'Morgen habe ich frei. Ich komme übermorgen wieder ins Büro.', en: 'I\'m off tomorrow. I\'ll be back in the office the day after tomorrow.' },
        ],
      },
      {
        de: 'übernachten',
        pron: 'ew-ber-NAHKH-ten',
        grammar: 'übernachtet · hat übernachtet',
        en: 'to stay the night',
        examples: [
          { de: 'Du kannst bei mir übernachten.', en: 'You can stay the night at my place.' },
        ],
      },
      {
        de: 'übersetzen',
        pron: 'ew-ber-ZET-sen',
        grammar: 'übersetzt · hat übersetzt',
        en: 'to translate',
        examples: [
          { de: 'Können Sie mir den Brief bitte übersetzen?', en: 'Could you please translate the letter for me?' },
        ],
      },
      {
        de: 'die Übersetzung',
        pron: 'dee ew-ber-ZET-soong',
        grammar: 'pl. die Übersetzungen',
        en: 'translation',
        examples: [
          { de: 'Ich brauche eine Übersetzung von meinem Zeugnis.', en: 'I need a translation of my certificate.' },
        ],
      },
      {
        de: 'überweisen',
        pron: 'ew-ber-VY-zen',
        grammar: 'überweist · hat überwiesen',
        en: 'to transfer (money)',
        examples: [
          { de: 'Sie können das Geld auch überweisen.', en: 'You can also transfer the money.' },
          { de: 'Ich überweise dir das Geld.', en: 'I\'ll transfer the money to you.' },
        ],
      },
      {
        de: 'die Uhr',
        pron: 'dee oor',
        grammar: 'pl. die Uhren',
        en: 'clock, watch; o\'clock',
        examples: [
          { de: 'Es ist vier Uhr.', en: 'It\'s four o\'clock.' },
          { de: 'Geht deine Uhr richtig?', en: 'Is your watch right?' },
        ],
      },
      {
        de: 'um',
        pron: 'oom',
        en: 'at (time); around',
        examples: [
          { de: 'Er kommt um sieben Uhr.', en: 'He\'s coming at seven o\'clock.' },
          { de: 'Die Apotheke ist gleich um die Ecke.', en: 'The pharmacy is just around the corner.' },
        ],
      },
      {
        de: 'umsteigen',
        pron: 'OOM-shty-gen',
        grammar: 'steigt um · ist umgestiegen',
        en: 'to change (trains, buses)',
        examples: [
          { de: 'Sie müssen in Mannheim umsteigen.', en: 'You have to change in Mannheim.' },
        ],
      },
      {
        de: 'umziehen',
        pron: 'OOM-tsee-en',
        grammar: 'zieht um · ist umgezogen',
        en: 'to move (house)',
        examples: [
          { de: 'Nächsten Monat ziehen wir um.', en: 'We\'re moving next month.' },
        ],
      },
      {
        de: 'sich umziehen',
        pron: 'zikh OOM-tsee-en',
        grammar: 'zieht sich um · zog sich um · hat sich umgezogen',
        en: 'to get changed',
        examples: [
          { de: 'Warte bitte, ich muss mich noch umziehen.', en: 'Please wait, I still have to get changed.' },
        ],
      },
      {
        de: 'der Umzug',
        pron: 'dair OOM-tsook',
        grammar: 'pl. die Umzüge',
        en: 'move (house), relocation',
        examples: [
          { de: 'Der Umzug ist nächste Woche.', en: 'The move is next week.' },
        ],
      },
      {
        de: 'unbedingt',
        pron: 'OON-buh-dingt',
        en: 'absolutely, definitely',
        examples: [
          { de: 'Ich muss unbedingt mit dir sprechen.', en: 'I really must talk to you.' },
        ],
      },
      {
        de: 'und',
        pron: 'oont',
        en: 'and',
        examples: [
          { de: 'Ich habe heute und morgen frei.', en: 'I\'m off today and tomorrow.' },
          { de: 'Ich kaufe ein und mein Mann kocht.', en: 'I do the shopping and my husband cooks.' },
        ],
      },
      {
        de: 'der Unfall',
        pron: 'dair OON-fahl',
        grammar: 'pl. die Unfälle',
        en: 'accident',
        examples: [
          { de: 'Ich hatte gestern einen Unfall.', en: 'I had an accident yesterday.' },
          { de: 'Wie ist der Unfall passiert?', en: 'How did the accident happen?' },
        ],
      },
      {
        de: 'die Universität',
        pron: 'dee oo-nee-ver-zee-TAIT',
        grammar: 'pl. die Universitäten',
        en: 'university',
        examples: [
          { de: 'Er studiert an der Universität Freiburg.', en: 'He studies at the University of Freiburg.' },
        ],
      },
      {
        de: 'unten',
        pron: 'OON-ten',
        en: 'below, downstairs',
        examples: [
          { de: 'Er wohnt ganz unten im Haus.', en: 'He lives right at the bottom of the building.' },
        ],
      },
      {
        de: 'unter',
        pron: 'OON-ter',
        en: 'under, below; among',
        examples: [
          { de: 'Unter uns wohnt eine Familie mit drei Kindern.', en: 'A family with three children lives below us.' },
        ],
      },
      {
        de: 'unterhalten (sich)',
        pron: 'oon-ter-HAHL-ten (zikh)',
        grammar: 'unterhält · hat unterhalten',
        en: 'to talk, to chat',
        examples: [
          { de: 'Andreas und Nessrin unterhalten sich.', en: 'Andreas and Nessrin are chatting.' },
          { de: 'Wir haben uns über das Fußballspiel unterhalten.', en: 'We talked about the football match.' },
        ],
      },
      {
        de: 'die Unterkunft',
        pron: 'dee OON-ter-koonft',
        grammar: 'pl. die Unterkünfte',
        en: 'accommodation',
        examples: [
          { de: 'Ich suche noch eine Unterkunft in Basel. Kennst du ein günstiges Hotel?', en: 'I\'m still looking for accommodation in Basel. Do you know a cheap hotel?' },
        ],
      },
      {
        de: 'unternehmen',
        pron: 'oon-ter-NAY-men',
        grammar: 'unternimmt · hat unternommen',
        en: 'to do (something), to undertake',
        examples: [
          { de: 'Wollen wir heute Abend etwas unternehmen?', en: 'Shall we do something this evening?' },
        ],
      },
      {
        de: 'der Unterricht',
        pron: 'dair OON-ter-rikht',
        grammar: 'no plural',
        en: 'lessons, class',
        examples: [
          { de: 'Der Unterricht dauert bis 19 Uhr.', en: 'Class lasts until 7 p.m.' },
        ],
      },
      {
        de: 'der Unterschied',
        pron: 'dair OON-ter-sheet',
        grammar: 'pl. die Unterschiede',
        en: 'difference',
        examples: [
          { de: 'Was ist der Unterschied zwischen den beiden Kursen? – Die Kurse sind gleich. Es gibt keinen Unterschied.', en: 'What\'s the difference between the two courses? – The courses are the same. There\'s no difference.' },
        ],
      },
      {
        de: 'unterschreiben',
        pron: 'oon-ter-SHRY-ben',
        grammar: 'unterschreibt · hat unterschrieben',
        en: 'to sign',
        examples: [
          { de: 'Wo muss ich unterschreiben?', en: 'Where do I have to sign?' },
        ],
      },
      {
        de: 'die Unterschrift',
        pron: 'dee OON-ter-shrift',
        grammar: 'pl. die Unterschriften',
        en: 'signature',
        examples: [
          { de: 'Hier fehlt noch Ihre Unterschrift.', en: 'Your signature is still missing here.' },
        ],
      },
      {
        de: 'untersuchen',
        pron: 'oon-ter-ZOO-khen',
        grammar: 'untersucht · hat untersucht',
        en: 'to examine',
        examples: [
          { de: 'Der Arzt hat mich untersucht.', en: 'The doctor examined me.' },
          { de: 'Der Arzt muss dein Bein untersuchen.', en: 'The doctor has to examine your leg.' },
        ],
      },
      {
        de: 'unterwegs sein',
        pron: 'oon-ter-VAYKS zyne',
        grammar: 'ist unterwegs · war unterwegs · ist unterwegs gewesen',
        en: 'to be on the way, to be out',
        examples: [
          { de: 'Warte bitte auf mich. Ich bin unterwegs und komme gleich.', en: 'Please wait for me. I\'m on my way and will be there soon.' },
        ],
      },
      {
        de: 'der Urlaub',
        pron: 'dair OOR-lowp',
        grammar: 'pl. die Urlaube',
        en: 'holiday, vacation',
        examples: [
          { de: 'Ich nehme im September Urlaub.', en: 'I\'m taking holiday in September.' },
        ],
      },
    ],
  },
  {
    letter: 'V',
    entries: [
      {
        de: 'verabredet sein',
        pron: 'fer-AHP-ruh-det zyne',
        grammar: 'ist verabredet · war verabredet · ist verabredet gewesen',
        en: 'to have arranged to meet',
        examples: [
          { de: 'Ich bin mit meiner Freundin verabredet.', en: 'I\'ve arranged to meet my girlfriend.' },
        ],
      },
      {
        de: 'die Veranstaltung',
        pron: 'dee fer-AHN-shtahl-toong',
        grammar: 'pl. die Veranstaltungen',
        en: 'event',
        examples: [
          { de: 'Am Samstag ist unser Restaurant geschlossen. Wir haben eine Veranstaltung.', en: 'Our restaurant is closed on Saturday. We have an event.' },
        ],
      },
      {
        de: 'verbieten',
        pron: 'fer-BEE-ten',
        grammar: 'verbietet · hat verboten',
        en: 'to forbid, to ban',
        examples: [
          { de: 'Hier ist Rauchen verboten.', en: 'Smoking is prohibited here.' },
        ],
      },
      {
        de: 'verboten sein',
        pron: 'fer-BOH-ten zyne',
        grammar: 'ist verboten · war verboten · ist verboten gewesen',
        en: 'to be forbidden',
        examples: [
          { de: 'Hier ist Rauchen verboten.', en: 'Smoking is prohibited here.' },
        ],
      },
      {
        de: 'verdienen',
        pron: 'fer-DEE-nen',
        grammar: 'verdient · hat verdient',
        en: 'to earn',
        examples: [
          { de: 'Ich verdiene 1.500 Euro im Monat.', en: 'I earn 1,500 euros a month.' },
        ],
      },
      {
        de: 'der Verein',
        pron: 'dair fair-INE',
        grammar: 'pl. die Vereine',
        en: 'club, association',
        examples: [
          { de: 'Er ist seit vielen Jahren im Verein.', en: 'He has been in the club for many years.' },
          { de: 'Es gibt einen neuen Sportverein in der Stadt.', en: 'There\'s a new sports club in town.' },
        ],
      },
      {
        de: 'vereinbaren',
        pron: 'fer-EYN-bah-ren',
        grammar: 'vereinbart · hat vereinbart',
        en: 'to arrange, to agree on',
        examples: [
          { de: 'Können wir einen Termin vereinbaren?', en: 'Can we arrange an appointment?' },
        ],
      },
      {
        de: 'vergessen',
        pron: 'fer-GESS-en',
        grammar: 'vergisst · hat vergessen',
        en: 'to forget',
        examples: [
          { de: 'Ich habe meine Hausaufgaben vergessen.', en: 'I forgot my homework.' },
          { de: 'Vergiss deinen Arzttermin nicht!', en: 'Don\'t forget your doctor\'s appointment!' },
        ],
      },
      {
        de: 'vergleichen',
        pron: 'fer-GLY-khen',
        grammar: 'vergleicht · hat verglichen',
        en: 'to compare',
        examples: [
          { de: 'Vergleichen Sie die Angebote!', en: 'Compare the offers!' },
          { de: 'Können wir die Antworten vergleichen?', en: 'Can we compare the answers?' },
        ],
      },
      {
        de: 'verkaufen',
        pron: 'fer-KOW-fen',
        grammar: 'verkauft · hat verkauft',
        en: 'to sell',
        examples: [
          { de: 'Er verkauft sein altes Auto.', en: 'He\'s selling his old car.' },
        ],
      },
      {
        de: 'der Verkehr',
        pron: 'dair fair-KAIR',
        grammar: 'no plural',
        en: 'traffic',
        examples: [
          { de: 'Morgens gibt es hier immer viel Verkehr.', en: 'There\'s always a lot of traffic here in the mornings.' },
        ],
      },
      {
        de: 'das Verkehrsmittel',
        pron: 'dahs fair-KAIRS-mit-el',
        grammar: 'pl. die Verkehrsmittel',
        en: 'means of transport',
        examples: [
          { de: 'Welche Verkehrsmittel benutzen Sie oft?', en: 'Which means of transport do you use often?' },
        ],
      },
      {
        de: 'verletzen (sich)',
        pron: 'fer-LET-sen (zikh)',
        grammar: 'verletzt · hat verletzt',
        en: 'to injure, to hurt (oneself)',
        examples: [
          { de: 'Sind Sie verletzt? – Ja, am Bein.', en: 'Are you injured? – Yes, my leg.' },
          { de: 'Haben Sie sich verletzt?', en: 'Did you hurt yourself?' },
        ],
      },
      {
        de: 'verlieben (sich)',
        pron: 'fer-LEE-ben (zikh)',
        grammar: 'verliebt · hat verliebt',
        en: 'to fall in love',
        examples: [
          { de: 'Ich bin total verliebt.', en: 'I\'m totally in love.' },
        ],
      },
      {
        de: 'verlieren',
        pron: 'fer-LEE-ren',
        grammar: 'verliert · hat verloren',
        en: 'to lose',
        examples: [
          { de: 'Ich habe meinen Schlüssel verloren.', en: 'I\'ve lost my key.' },
          { de: 'Michael hat seine Arbeit verloren.', en: 'Michael has lost his job.' },
          { de: 'Wir haben das Fußballspiel verloren.', en: 'We lost the football match.' },
        ],
      },
      {
        de: 'vermieten',
        pron: 'fer-MEE-ten',
        grammar: 'vermietet · hat vermietet',
        en: 'to rent out, to let',
        examples: [
          { de: 'Die Wohnung ist schon vermietet.', en: 'The flat has already been let.' },
        ],
      },
      {
        de: 'der Vermieter / die Vermieterin',
        pron: 'dair fair-MEE-ter / dee fair-MEE-ter-in',
        grammar: 'pl. die Vermieter / die Vermieterinnen',
        en: 'landlord / landlady',
        examples: [
          { de: 'Unser Vermieter ist nett.', en: 'Our landlord is nice.' },
        ],
      },
      {
        de: 'verpassen',
        pron: 'fer-PAH-sen',
        grammar: 'verpasst · hat verpasst',
        en: 'to miss (a train, a chance)',
        examples: [
          { de: 'Ich habe den Zug verpasst.', en: 'I missed the train.' },
        ],
      },
      {
        de: 'verreisen',
        pron: 'fer-RY-zen',
        grammar: 'verreist · ist verreist',
        en: 'to go away (on a trip)',
        examples: [
          { de: 'Verreist ihr in den Ferien?', en: 'Are you going away in the holidays?' },
          { de: 'Frau Doktor Müller ist zurzeit verreist. Sie kommt erst nächste Woche zurück.', en: 'Dr Müller is away at the moment. She won\'t be back until next week.' },
        ],
      },
      {
        de: 'verschieben',
        pron: 'fer-SHEE-ben',
        grammar: 'verschiebt · hat verschoben',
        en: 'to postpone; to move',
        examples: [
          { de: 'Leider muss ich den Termin verschieben.', en: 'Unfortunately I have to postpone the appointment.' },
        ],
      },
      {
        de: 'verschieden',
        pron: 'fer-SHEE-den',
        en: 'different, various',
        examples: [
          { de: 'Unsere beiden Kinder sind sehr verschieden.', en: 'Our two children are very different.' },
          { de: 'Ich habe diese Schuhe in verschiedenen Farben.', en: 'I have these shoes in different colours.' },
        ],
      },
      {
        de: 'die Verspätung',
        pron: 'dee fer-SHPAY-toong',
        grammar: 'pl. die Verspätungen',
        en: 'delay',
        examples: [
          { de: 'Unser Zug hat leider 15 Minuten Verspätung.', en: 'Unfortunately our train is 15 minutes late.' },
        ],
      },
      {
        de: 'verstehen',
        pron: 'fer-SHTAY-en',
        grammar: 'versteht · hat verstanden',
        en: 'to understand',
        examples: [
          { de: 'Können Sie mich verstehen?', en: 'Can you understand me?' },
          { de: 'Ich verstehe diese Aufgabe nicht.', en: 'I don\'t understand this task.' },
        ],
      },
      {
        de: 'versuchen',
        pron: 'fer-ZOO-khen',
        grammar: 'versucht · hat versucht',
        en: 'to try',
        examples: [
          { de: 'Kann ich es auch einmal versuchen?', en: 'Can I have a try too?' },
          { de: 'Haben Sie es schon einmal mit diesem Mittel versucht?', en: 'Have you ever tried this remedy?' },
        ],
      },
      {
        de: 'der Vertrag',
        pron: 'dair fair-TRAHK',
        grammar: 'pl. die Verträge',
        en: 'contract',
        examples: [
          { de: 'Ich muss den Vertrag noch unterschreiben.', en: 'I still have to sign the contract.' },
        ],
      },
      {
        de: 'viel, viele',
        pron: 'feel, FEE-luh',
        en: 'much, a lot; many',
        examples: [
          { de: 'Ich habe leider nicht viel Zeit.', en: 'Unfortunately I don\'t have much time.' },
          { de: 'Viel Spaß!', en: 'Have fun!' },
          { de: 'Im Winter sind viele Leute erkältet.', en: 'In winter a lot of people have colds.' },
        ],
      },
      {
        de: 'vielleicht',
        pron: 'fee-LYKHT',
        en: 'maybe, perhaps',
        examples: [
          { de: 'Vielleicht bekomme ich diesen Job.', en: 'Maybe I\'ll get this job.' },
          { de: 'Er besucht uns vielleicht am Wochenende.', en: 'He may visit us at the weekend.' },
          { de: 'Kannst du mir vielleicht ein bisschen Geld leihen?', en: 'Could you perhaps lend me a bit of money?' },
        ],
      },
      {
        de: 'der Vogel',
        pron: 'dair FOH-gel',
        grammar: 'pl. die Vögel',
        en: 'bird',
        examples: [
          { de: 'Nadine mag Vögel.', en: 'Nadine likes birds.' },
          { de: 'Morgens singen die Vögel immer laut.', en: 'The birds always sing loudly in the morning.' },
        ],
      },
      {
        de: 'voll',
        pron: 'fol',
        en: 'full',
        examples: [
          { de: 'Morgens und abends sind die Züge immer sehr voll.', en: 'The trains are always very full in the mornings and evenings.' },
          { de: 'Die Flasche ist noch ganz voll.', en: 'The bottle is still completely full.' },
        ],
      },
      {
        de: 'der Volleyball',
        pron: 'dair VOL-ee-bahl',
        grammar: 'pl. die Volleybälle',
        en: 'volleyball',
        examples: [
          { de: 'Ich spiele gern Volleyball.', en: 'I like playing volleyball.' },
        ],
      },
      {
        de: 'von',
        pron: 'fon',
        en: 'from; of; by',
        examples: [
          { de: 'Das Auto von Felix ist kaputt.', en: 'Felix\'s car is broken.' },
          { de: 'Er kommt gerade von Köln/von zu Hause.', en: 'He\'s just coming from Cologne/from home.' },
          { de: 'Die Brötchen sind leider von gestern.', en: 'Unfortunately the rolls are from yesterday.' },
        ],
      },
      {
        de: 'vor',
        pron: 'for',
        en: 'in front of; before; ago',
        examples: [
          { de: 'Er ist vor einer Stunde gegangen.', en: 'He left an hour ago.' },
          { de: 'Das Auto steht vor der Tür.', en: 'The car is outside the door.' },
        ],
      },
      {
        de: 'vorbei',
        pron: 'for-BY',
        en: 'past; over',
        examples: [
          { de: 'Die Linie 8 fährt am Krankenhaus vorbei.', en: 'Line 8 goes past the hospital.' },
          { de: 'Kommst du morgen bei mir vorbei?', en: 'Will you drop by my place tomorrow?' },
        ],
      },
      {
        de: 'vorbereiten',
        pron: 'FOR-buh-ry-ten',
        grammar: 'bereitet vor · hat vorbereitet',
        en: 'to prepare',
        examples: [
          { de: 'Morgen mache ich eine Party. Ich muss noch viel dafür vorbereiten.', en: 'I\'m having a party tomorrow. I still have a lot to prepare for it.' },
          { de: 'Ich muss mich auf meine Prüfung vorbereiten.', en: 'I have to prepare for my exam.' },
        ],
      },
      {
        de: 'vorgestern',
        pron: 'FOR-guess-tern',
        en: 'the day before yesterday',
        examples: [
          { de: 'Er hat mich vorgestern angerufen.', en: 'He called me the day before yesterday.' },
        ],
      },
      {
        de: 'vorher',
        pron: 'for-HAIR',
        en: 'before, beforehand',
        examples: [
          { de: 'Ich komme mit ins Café. Vorher muss ich aber noch zur Bank.', en: 'I\'ll come to the café with you. But first I have to go to the bank.' },
        ],
      },
      {
        de: 'vorn(e)',
        pron: 'forn(-uh)',
        en: 'at the front',
        examples: [
          { de: 'Bitte vorne einsteigen!', en: 'Please board at the front!' },
        ],
      },
      {
        de: 'der Vorname',
        pron: 'dair FOR-nah-muh',
        grammar: 'pl. die Vornamen',
        en: 'first name',
        examples: [
          { de: 'Ich heiße Müller, mein Vorname ist Eva.', en: 'My surname is Müller, my first name is Eva.' },
        ],
      },
      {
        de: 'der Vorschlag',
        pron: 'dair FOR-shlahk',
        grammar: 'pl. die Vorschläge · einen Vorschlag haben/machen',
        en: 'suggestion',
        examples: [
          { de: 'Was machen wir am Wochenende? Hast du einen guten Vorschlag? – Wir können ins Kino gehen.', en: 'What shall we do at the weekend? Do you have a good suggestion? – We could go to the cinema.' },
          { de: 'Was schenken wir Christina zur Hochzeit? – Wir haben doch schon so viele Vorschläge gemacht.', en: 'What shall we give Christina for her wedding? – But we\'ve already made so many suggestions.' },
        ],
      },
      {
        de: 'vorsichtig',
        pron: 'FOR-zikh-tikh',
        en: 'careful',
        examples: [
          { de: 'Sei vorsichtig!', en: 'Be careful!' },
          { de: 'Du musst vorsichtig fahren, es ist neblig.', en: 'You must drive carefully, it\'s foggy.' },
        ],
      },
      {
        de: 'vorstellen (sich)',
        pron: 'FOR-shtel-en (zikh)',
        grammar: 'stellt vor · hat vorgestellt',
        en: 'to introduce (oneself)',
        examples: [
          { de: 'Wir wollen uns kennenlernen. Können Sie sich bitte vorstellen?', en: 'We\'d like to get to know each other. Could you please introduce yourself?' },
          { de: 'Darf ich Ihnen meine Frau vorstellen?', en: 'May I introduce my wife to you?' },
        ],
      },
      {
        de: 'vorwärts',
        pron: 'FOR-verts',
        en: 'forwards',
        examples: [
          { de: 'Fahren Sie bitte noch ein Stück vorwärts.', en: 'Please drive forward a little more.' },
        ],
      },
    ],
  },
  {
    letter: 'W',
    entries: [
      {
        de: 'wach',
        pron: 'vahkh',
        en: 'awake',
        examples: [
          { de: 'Bist du schon lange wach?', en: 'Have you been awake long?' },
          { de: 'Ich bin noch nicht ganz wach.', en: 'I\'m not quite awake yet.' },
        ],
      },
      {
        de: 'der Wagen',
        pron: 'dair VAH-gen',
        grammar: 'pl. die Wagen',
        en: 'car; carriage (of a train)',
        examples: [
          { de: 'Wo steht Ihr Wagen?', en: 'Where is your car parked?' },
          { de: 'Im zweiten Wagen ist unser Zugrestaurant.', en: 'Our restaurant car is in the second carriage.' },
        ],
      },
      {
        de: 'wählen',
        pron: 'VAY-len',
        grammar: 'wählt · hat gewählt',
        en: 'to choose; to dial; to vote',
        examples: [
          { de: 'Sie müssen erst eine Null wählen.', en: 'You have to dial a zero first.' },
          { de: 'Wählen Sie bitte ein Getränk.', en: 'Please choose a drink.' },
        ],
      },
      {
        de: 'wahr',
        pron: 'vahr',
        en: 'true',
        examples: [
          { de: 'Das ist (nicht) wahr!', en: 'That\'s (not) true!' },
        ],
      },
      {
        de: 'wahrscheinlich',
        pron: 'VAHR-shine-likh',
        en: 'probably',
        examples: [
          { de: 'Wahrscheinlich mache ich im Herbst einen Deutschkurs.', en: 'I\'ll probably do a German course in the autumn.' },
          { de: 'Er kommt wahrscheinlich nicht.', en: 'He probably isn\'t coming.' },
        ],
      },
      {
        de: 'der Wald',
        pron: 'dair vahlt',
        grammar: 'pl. die Wälder',
        en: 'forest, woods',
        examples: [
          { de: 'Im Wald ist es ruhig.', en: 'It\'s quiet in the forest.' },
          { de: 'Ich gehe gern im Wald spazieren.', en: 'I like walking in the woods.' },
        ],
      },
      {
        de: 'wandern',
        pron: 'VAHN-dern',
        grammar: 'wandert · ist gewandert',
        en: 'to hike',
        examples: [
          { de: 'Wir gehen oft wandern.', en: 'We often go hiking.' },
        ],
      },
      {
        de: 'wann',
        pron: 'vahn',
        en: 'when',
        examples: [
          { de: 'Wann bist du fertig?', en: 'When will you be ready?' },
          { de: 'Wann kann ich Sie anrufen?', en: 'When can I call you?' },
        ],
      },
      {
        de: 'warm',
        pron: 'vahrm',
        en: 'warm',
        examples: [
          { de: 'Hier ist es sehr warm.', en: 'It\'s very warm here.' },
          { de: 'Mittags esse ich oft ein warmes Essen.', en: 'At lunchtime I often have a hot meal.' },
          { de: 'Ich brauche einen warmen Pullover.', en: 'I need a warm jumper.' },
        ],
      },
      {
        de: 'warten',
        pron: 'VAHR-ten',
        grammar: 'wartet · hat gewartet',
        en: 'to wait',
        examples: [
          { de: 'Können Sie ein paar Minuten warten?', en: 'Can you wait a few minutes?' },
          { de: 'Auf wen warten Sie?', en: 'Who are you waiting for?' },
        ],
      },
      {
        de: 'warum',
        pron: 'vah-ROOM',
        en: 'why',
        examples: [
          { de: 'Warum kommt er nicht?', en: 'Why isn\'t he coming?' },
        ],
      },
      {
        de: 'was',
        pron: 'vahss',
        en: 'what',
        examples: [
          { de: 'Was ist das?', en: 'What is that?' },
          { de: 'Was möchten Sie?', en: 'What would you like?' },
        ],
      },
      {
        de: 'die Wäsche',
        pron: 'dee VESH-uh',
        grammar: 'pl. die Wäschen',
        en: 'laundry, washing',
        examples: [
          { de: 'Ich muss noch Wäsche waschen.', en: 'I still have to do the laundry.' },
        ],
      },
      {
        de: 'waschen (sich)',
        pron: 'VAH-shen (zikh)',
        grammar: 'wäscht · hat gewaschen',
        en: 'to wash (oneself)',
        examples: [
          { de: 'Wo kann ich mir die Hände waschen?', en: 'Where can I wash my hands?' },
        ],
      },
      {
        de: 'das Wasser',
        pron: 'dahs VAH-ser',
        grammar: 'no plural',
        en: 'water',
        examples: [
          { de: 'Ein Glas Wasser, bitte.', en: 'A glass of water, please.' },
          { de: 'Gibt es hier kein warmes Wasser?', en: 'Is there no hot water here?' },
        ],
      },
      {
        de: 'die Webseite',
        pron: 'dee VEP-zy-tuh',
        grammar: 'pl. die Webseiten',
        en: 'website, web page',
        examples: [
          { de: 'Es gibt viele Webseiten mit Grammatikübungen.', en: 'There are lots of websites with grammar exercises.' },
        ],
      },
      {
        de: 'wechseln',
        pron: 'VEK-seln',
        grammar: 'wechselt · hat gewechselt',
        en: 'to change; to exchange',
        examples: [
          { de: 'Wir müssen den Reifen wechseln.', en: 'We have to change the tyre.' },
          { de: 'Können Sie mir zehn Dollar wechseln?', en: 'Can you change ten dollars for me?' },
        ],
      },
      {
        de: 'wecken',
        pron: 'VEK-en',
        grammar: 'weckt · hat geweckt',
        en: 'to wake (someone) up',
        examples: [
          { de: 'Bitte wecken Sie mich morgen früh um fünf.', en: 'Please wake me at five tomorrow morning.' },
        ],
      },
      {
        de: 'weg / weg- (wegbringen, -fahren, -gehen, -laufen, -machen, -nehmen, -werfen)',
        pron: 'vek (VEK-bring-en, -fah-ren, -gay-en, -low-fen, -mahkh-en, -nay-men, -ver-fen)',
        en: 'away, gone; away- (verb prefix)',
        examples: [
          { de: 'Meine Brille ist weg. Ich finde sie nicht mehr.', en: 'My glasses are gone. I can\'t find them anymore.' },
          { de: 'Bringst du bitte den Müll weg?', en: 'Could you take the rubbish out, please?' },
          { de: 'Können Sie Ihr Auto bitte wegfahren?', en: 'Could you please move your car?' },
          { de: 'Ich gehe jetzt weg.', en: 'I\'m going out now.' },
          { de: 'Unser Hund ist weggelaufen.', en: 'Our dog has run away.' },
          { de: 'Kannst du das bitte wegmachen?', en: 'Can you get rid of that, please?' },
          { de: 'Warum hast du dem Kind den Ball weggenommen?', en: 'Why did you take the ball away from the child?' },
          { de: 'Sie können diese Papiere wegwerfen.', en: 'You can throw these papers away.' },
        ],
      },
      {
        de: 'der Weg',
        pron: 'dair vayk',
        grammar: 'pl. die Wege',
        en: 'way, path, route',
        examples: [
          { de: 'Das ist der kürzeste Weg.', en: 'That\'s the shortest way.' },
          { de: 'Können Sie mir bitte den Weg zum Flughafen beschreiben?', en: 'Could you please tell me the way to the airport?' },
        ],
      },
      {
        de: 'wegen',
        pron: 'VAY-gen',
        en: 'because of; about',
        examples: [
          { de: 'Wegen seiner Arbeit kann er leider nicht kommen.', en: 'Unfortunately he can\'t come because of his work.' },
          { de: 'Ich rufe wegen meiner Tochter an.', en: 'I\'m calling about my daughter.' },
        ],
      },
      {
        de: 'wehtun',
        pron: 'VAY-toon',
        grammar: 'tut weh · hat wehgetan',
        en: 'to hurt',
        examples: [
          { de: 'Wo tut es weh?', en: 'Where does it hurt?' },
          { de: 'Ich will dir nicht wehtun.', en: 'I don\'t want to hurt you.' },
        ],
      },
      {
        de: 'weiblich',
        pron: 'VYE-plikh',
        en: 'female',
        examples: [
          { de: 'Wählen Sie bitte: „weiblich“ oder „männlich“.', en: 'Please choose: “female” or “male”.' },
        ],
      },
      {
        de: 'weich',
        pron: 'vyekh',
        en: 'soft',
        examples: [
          { de: 'Ich möchte zum Frühstück ein weiches Ei.', en: 'I\'d like a soft-boiled egg for breakfast.' },
          { de: 'Das Bett im Hotel war zu weich.', en: 'The bed in the hotel was too soft.' },
        ],
      },
      {
        de: 'weil',
        pron: 'vyle',
        en: 'because',
        examples: [
          { de: 'Ich kann nicht kommen, weil ich arbeiten muss.', en: 'I can\'t come because I have to work.' },
        ],
      },
      {
        de: 'der Wein',
        pron: 'dair vine',
        grammar: 'pl. die Weine',
        en: 'wine',
        examples: [
          { de: 'Nein danke, ich möchte keinen Wein.', en: 'No thanks, I don\'t want any wine.' },
        ],
      },
      {
        de: 'weinen',
        pron: 'VY-nen',
        grammar: 'weint · hat geweint',
        en: 'to cry',
        examples: [
          { de: 'Warum weint das Baby?', en: 'Why is the baby crying?' },
          { de: 'Weine bitte nicht!', en: 'Please don\'t cry!' },
        ],
      },
      {
        de: 'weit',
        pron: 'vyte',
        en: 'far; wide',
        examples: [
          { de: 'Zum Bahnhof ist es nicht weit.', en: 'It\'s not far to the station.' },
        ],
      },
      {
        de: 'weiter (weitermachen, weiterhelfen)',
        pron: 'VY-ter (VY-ter-mahkh-en, VY-ter-hel-fen)',
        en: 'further, on; to continue',
        examples: [
          { de: 'Der Bus fährt nicht weiter.', en: 'The bus doesn\'t go any further.' },
          { de: 'Können wir jetzt weitermachen?', en: 'Can we carry on now?' },
          { de: 'Entschuldigung, können Sie mir bitte weiterhelfen?', en: 'Excuse me, could you help me, please?' },
        ],
      },
      {
        de: 'welcher, welche, welches',
        pron: 'VEL-kher, VEL-khuh, VEL-khess',
        en: 'which',
        examples: [
          { de: 'Welcher Tag ist heute?', en: 'What day is it today?' },
          { de: 'Welchen Kurs möchtest du machen?', en: 'Which course would you like to do?' },
          { de: 'Welche Bluse nehmen Sie?', en: 'Which blouse will you take?' },
          { de: 'Welches Buch suchst du?', en: 'Which book are you looking for?' },
        ],
      },
      {
        de: 'die Welt',
        pron: 'dee velt',
        grammar: 'pl. die Welten',
        en: 'world',
        examples: [
          { de: 'Ich möchte gern einmal um die Welt reisen.', en: 'I\'d love to travel around the world one day.' },
          { de: 'Die Studenten kommen aus vielen Ländern. Sie kommen aus der ganzen Welt.', en: 'The students come from many countries. They come from all over the world.' },
        ],
      },
      {
        de: 'wenig, wenige',
        pron: 'VAY-nikh, VAY-nee-guh',
        en: 'little; few',
        examples: [
          { de: 'Ich habe leider nur wenig verstanden.', en: 'Unfortunately I only understood a little.' },
          { de: 'Er verdient wenig.', en: 'He doesn\'t earn much.' },
        ],
      },
      {
        de: 'wenigstens',
        pron: 'VAY-nikh-stenss',
        en: 'at least',
        examples: [
          { de: 'Ich habe keinen Hunger. – Ach, essen Sie wenigstens ein Stück Kuchen.', en: 'I\'m not hungry. – Oh, at least have a piece of cake.' },
        ],
      },
      {
        de: 'wenn',
        pron: 'ven',
        en: 'if; when(ever)',
        examples: [
          { de: 'Wenn ich nicht arbeiten muss, komme ich.', en: 'If I don\'t have to work, I\'ll come.' },
        ],
      },
      {
        de: 'wer (wen, wem)',
        pron: 'vair (vayn, vaym)',
        en: 'who (whom, to whom)',
        examples: [
          { de: 'Wer ist das?', en: 'Who is that?' },
        ],
      },
      {
        de: 'werden',
        pron: 'VAIR-den',
        grammar: 'wird · ist geworden',
        en: 'to become; will (future)',
        examples: [
          { de: 'Mein Sohn will Arzt werden.', en: 'My son wants to become a doctor.' },
          { de: 'Das Wetter am Wochenende wird gut. Das haben sie im Radio gesagt.', en: 'The weather will be good at the weekend. They said so on the radio.' },
        ],
      },
      {
        de: 'die Werkstatt',
        pron: 'dee VERK-shtaht',
        grammar: 'pl. die Werkstätten',
        en: 'workshop; (car) garage',
        examples: [
          { de: 'Mein Auto ist kaputt. Es ist in der Werkstatt.', en: 'My car is broken. It\'s at the garage.' },
        ],
      },
      {
        de: 'der Wettbewerb',
        pron: 'dair VET-buh-vairp',
        grammar: 'pl. die Wettbewerbe',
        en: 'competition',
        examples: [
          { de: 'Mein Sohn hat bei einem Wettbewerb gewonnen.', en: 'My son won a competition.' },
        ],
      },
      {
        de: 'das Wetter',
        pron: 'dahs VET-er',
        grammar: 'no plural',
        en: 'weather',
        examples: [
          { de: 'Heute ist das Wetter gut: Es ist sonnig und warm.', en: 'The weather is good today: it\'s sunny and warm.' },
          { de: 'Wir hatten im Urlaub schlechtes Wetter.', en: 'We had bad weather on holiday.' },
        ],
      },
      {
        de: 'wichtig',
        pron: 'VIKH-tikh',
        en: 'important',
        examples: [
          { de: 'Es ist wichtig, dass Sie auch kommen.', en: 'It\'s important that you come too.' },
          { de: 'Morgen habe ich einen wichtigen Termin.', en: 'I have an important appointment tomorrow.' },
        ],
      },
      {
        de: 'wie',
        pron: 'vee',
        en: 'how; like, as',
        examples: [
          { de: 'Wie heißt du?', en: 'What\'s your name?' },
          { de: 'Wie bitte? Können Sie das bitte wiederholen?', en: 'Pardon? Could you repeat that, please?' },
          { de: 'Er schreibt wie ein Kind.', en: 'He writes like a child.' },
          { de: 'Meine Frau ist so groß wie ich.', en: 'My wife is as tall as me.' },
          { de: 'Wie groß ist die Wohnung?', en: 'How big is the flat?' },
          { de: 'Wie soll ich das machen?', en: 'How should I do that?' },
          { de: 'Wie lange bist du schon hier?', en: 'How long have you been here?' },
        ],
      },
      {
        de: 'wie viel, wie viele',
        pron: 'vee feel, vee FEE-luh',
        en: 'how much, how many',
        examples: [
          { de: 'Wie viel kostet diese Hose?', en: 'How much are these trousers?' },
          { de: 'Wie viele Kinder haben Sie?', en: 'How many children do you have?' },
        ],
      },
      {
        de: 'wieder',
        pron: 'VEE-der',
        en: 'again; back',
        examples: [
          { de: 'Stefan kann wieder zum Fußballtraining kommen.', en: 'Stefan can come to football training again.' },
          { de: 'Geht es dir wieder besser?', en: 'Are you feeling better again?' },
          { de: 'Du kommst schon wieder zu spät.', en: 'You\'re late again.' },
          { de: 'Wann kommst du wieder?', en: 'When are you coming back?' },
        ],
      },
      {
        de: 'wiederholen',
        pron: 'vee-der-HOH-len',
        grammar: 'wiederholt · hat wiederholt',
        en: 'to repeat',
        examples: [
          { de: 'Können Sie das bitte wiederholen?', en: 'Could you repeat that, please?' },
        ],
      },
      {
        de: 'das Wiederhören',
        pron: 'dahs VEE-der-hur-en',
        en: '(auf) Wiederhören: goodbye (on the phone)',
        examples: [
          { de: 'Wir müssen jetzt Schluss machen. Also auf Wiederhören!', en: 'We have to finish now. So, goodbye!' },
        ],
      },
      {
        de: 'das Wiedersehen',
        pron: 'dahs VEE-der-zay-en',
        en: '(auf) Wiedersehen: goodbye',
        examples: [
          { de: 'Auf Wiedersehen!', en: 'Goodbye!' },
        ],
      },
      {
        de: 'willkommen',
        pron: 'vil-KOM-en',
        en: 'welcome',
        examples: [
          { de: 'Herzlich willkommen in Berlin!', en: 'A warm welcome to Berlin!' },
        ],
      },
      {
        de: 'der Wind',
        pron: 'dair vint',
        grammar: 'pl. die Winde',
        en: 'wind',
        examples: [
          { de: 'Der Wind ist kalt.', en: 'The wind is cold.' },
        ],
      },
      {
        de: 'windig',
        pron: 'VIN-dikh',
        en: 'windy',
        examples: [
          { de: 'Heute ist es sehr windig.', en: 'It\'s very windy today.' },
        ],
      },
      {
        de: 'wirklich',
        pron: 'VIRK-likh',
        en: 'really',
        examples: [
          { de: 'Du glaubst mir nicht? Es ist aber wirklich so.', en: 'You don\'t believe me? But it really is like that.' },
        ],
      },
      {
        de: 'wissen',
        pron: 'VISS-en',
        grammar: 'weiß · hat gewusst',
        en: 'to know (a fact)',
        examples: [
          { de: 'Weißt du, wie der Hausmeister heißt?', en: 'Do you know what the caretaker\'s name is?' },
          { de: 'Woher wissen Sie das?', en: 'How do you know that?' },
        ],
      },
      {
        de: 'der Witz',
        pron: 'dair vits',
        grammar: 'pl. die Witze',
        en: 'joke',
        examples: [
          { de: 'Wir haben Witze erzählt und viel gelacht.', en: 'We told jokes and laughed a lot.' },
        ],
      },
      {
        de: 'witzig',
        pron: 'VIT-sikh',
        en: 'funny',
        examples: [
          { de: 'Warum lachst du? Ich finde das nicht witzig.', en: 'Why are you laughing? I don\'t find that funny.' },
        ],
      },
      {
        de: 'wo',
        pron: 'voh',
        en: 'where',
        examples: [
          { de: 'Wo waren Sie im Urlaub? – In Frankreich.', en: 'Where did you go on holiday? – To France.' },
          { de: 'Wo ist meine Uhr?', en: 'Where is my watch?' },
          { de: 'Wo sind Sie geboren?', en: 'Where were you born?' },
        ],
      },
      {
        de: 'woher',
        pron: 'voh-HAIR',
        en: 'where from',
        examples: [
          { de: 'Woher kommen Sie?', en: 'Where are you from?' },
          { de: 'Woher wissen Sie das?', en: 'How do you know that?' },
        ],
      },
      {
        de: 'wohin',
        pron: 'voh-HIN',
        en: 'where (to)',
        examples: [
          { de: 'Wohin fährt dieser Bus? – Nach Dresden.', en: 'Where does this bus go? – To Dresden.' },
          { de: 'Wohin wollen Sie am Wochenende gehen?', en: 'Where do you want to go at the weekend?' },
        ],
      },
      {
        de: 'wohnen',
        pron: 'VOH-nen',
        grammar: 'wohnt · hat gewohnt',
        en: 'to live (reside)',
        examples: [
          { de: 'Ich wohne in Kiel.', en: 'I live in Kiel.' },
        ],
      },
      {
        de: 'die Wohnung',
        pron: 'dee VOH-noong',
        grammar: 'pl. die Wohnungen',
        en: 'flat, apartment',
        examples: [
          { de: 'Haben Sie schon eine neue Wohnung gefunden?', en: 'Have you found a new flat yet?' },
          { de: 'Meine Wohnung ist sehr hell.', en: 'My flat is very bright.' },
        ],
      },
      {
        de: 'das Wohnzimmer',
        pron: 'dahs VOHN-tsim-er',
        grammar: 'pl. die Wohnzimmer',
        en: 'living room',
        examples: [
          { de: 'Die Kinder sitzen im Wohnzimmer und sehen fern.', en: 'The children are sitting in the living room watching TV.' },
        ],
      },
      {
        de: 'die Wolke',
        pron: 'dee VOL-kuh',
        grammar: 'pl. die Wolken',
        en: 'cloud',
        examples: [
          { de: 'Heute gibt es viele Wolken.', en: 'There are a lot of clouds today.' },
        ],
      },
      {
        de: 'wollen',
        pron: 'VOL-en',
        grammar: 'will · wollte · hat gewollt (hat … wollen as a modal verb)',
        en: 'to want',
        examples: [
          { de: 'Wollen Sie einen Kaffee trinken?', en: 'Would you like to have a coffee?' },
        ],
      },
      {
        de: 'der Workshop',
        pron: 'dair VURK-shop',
        grammar: 'pl. die Workshops',
        en: 'workshop',
        examples: [
          { de: 'Das war ein toller Workshop. Ich habe viel gelernt.', en: 'That was a great workshop. I learned a lot.' },
          { de: 'Am Freitag gibt es einen Computer-Workshop in meiner Firma.', en: 'On Friday there\'s a computer workshop at my company.' },
        ],
      },
      {
        de: 'das Wort',
        pron: 'dahs vort',
        grammar: 'pl. die Wörter',
        en: 'word',
        examples: [
          { de: 'Ich kenne das Wort nicht.', en: 'I don\'t know the word.' },
          { de: 'Ich muss das Wort im Wörterbuch suchen.', en: 'I have to look the word up in the dictionary.' },
        ],
      },
      {
        de: 'wunderbar',
        pron: 'VOON-der-bar',
        en: 'wonderful',
        examples: [
          { de: 'Diese Schokolade schmeckt wunderbar.', en: 'This chocolate tastes wonderful.' },
          { de: 'Wir hatten im Urlaub wunderbares Wetter.', en: 'We had wonderful weather on holiday.' },
        ],
      },
      {
        de: 'der Wunsch',
        pron: 'dair voonsh',
        grammar: 'pl. die Wünsche',
        en: 'wish',
        examples: [
          { de: 'Ich wünsche Ihnen alles Gute!', en: 'I wish you all the best!' },
          { de: 'Sie wünschen? – Ich möchte ein halbes Kilo Äpfel, bitte.', en: 'What would you like? – I\'d like half a kilo of apples, please.' },
          { de: 'Haben Sie noch einen Wunsch?', en: 'Would you like anything else?' },
          { de: 'Was ist dein größter Wunsch?', en: 'What is your greatest wish?' },
        ],
      },
      {
        de: 'wünschen',
        pron: 'VEWN-shen',
        grammar: 'wünscht · hat gewünscht',
        en: 'to wish; to want',
        examples: [
          { de: 'Ich wünsche mir eine Kamera zum Geburtstag.', en: 'I\'d like a camera for my birthday.' },
        ],
      },
      {
        de: 'die Wurst',
        pron: 'dee voorst',
        grammar: 'pl. die Würste',
        en: 'sausage',
        examples: [
          { de: 'Eine Wurst mit Pommes, bitte.', en: 'A sausage and chips, please.' },
        ],
      },
    ],
  },
  {
    letter: 'Z',
    entries: [
      {
        de: 'die Zahl',
        pron: 'dee tsahl',
        grammar: 'pl. die Zahlen',
        en: 'number',
        examples: [
          { de: 'Können Sie die Zahl bitte wiederholen?', en: 'Could you repeat the number, please?' },
        ],
      },
      {
        de: 'zahlen',
        pron: 'TSAH-len',
        grammar: 'zahlt · hat gezahlt',
        en: 'to pay',
        examples: [
          { de: 'Entschuldigung, zahlen bitte!', en: 'Excuse me, the bill please!' },
        ],
      },
      {
        de: 'der Zahn',
        pron: 'dair tsahn',
        grammar: 'pl. die Zähne',
        en: 'tooth',
        examples: [
          { de: 'Der Zahn tut mir schon seit einer Woche weh.', en: 'My tooth has been hurting for a week.' },
        ],
      },
      {
        de: 'zeichnen',
        pron: 'TSYKH-nen',
        grammar: 'zeichnet · hat gezeichnet',
        en: 'to draw',
        examples: [
          { de: 'Caterina kann gut zeichnen. Sieh mal das Bild hier.', en: 'Caterina draws well. Look at this picture here.' },
        ],
      },
      {
        de: 'zeigen',
        pron: 'TSY-gen',
        grammar: 'zeigt · hat gezeigt',
        en: 'to show',
        examples: [
          { de: 'Können Sie mir bitte den Weg zum Bahnhof zeigen?', en: 'Could you please show me the way to the station?' },
        ],
      },
      {
        de: 'die Zeit',
        pron: 'dee tsite',
        grammar: 'pl. die Zeiten',
        en: 'time',
        examples: [
          { de: 'Ich habe heute keine Zeit.', en: 'I don\'t have time today.' },
        ],
      },
      {
        de: 'die Zeitschrift',
        pron: 'dee TSITE-shrift',
        grammar: 'pl. die Zeitschriften',
        en: 'magazine',
        examples: [
          { de: 'Diese Zeitschrift kauft Andrea jede Woche.', en: 'Andrea buys this magazine every week.' },
        ],
      },
      {
        de: 'die Zeitung',
        pron: 'dee TSY-toong',
        grammar: 'pl. die Zeitungen',
        en: 'newspaper',
        examples: [
          { de: 'Ich lese manchmal Zeitung.', en: 'I sometimes read the newspaper.' },
          { de: 'Wo ist die Zeitung von heute?', en: 'Where is today\'s newspaper?' },
        ],
      },
      {
        de: 'das Zelt',
        pron: 'dahs tselt',
        grammar: 'pl. die Zelte',
        en: 'tent',
        examples: [
          { de: 'Im Sommer schlafen wir manchmal im Zelt.', en: 'In summer we sometimes sleep in a tent.' },
        ],
      },
      {
        de: 'das Zentrum',
        pron: 'dahs TSEN-troom',
        grammar: 'pl. die Zentren',
        en: 'centre',
        examples: [
          { de: 'Der Bahnhof ist im Stadtzentrum.', en: 'The station is in the city centre.' },
          { de: 'Wohnst du im Zentrum? – Nein, ich wohne nicht direkt in der Stadt.', en: 'Do you live in the centre? – No, I don\'t live right in town.' },
        ],
      },
      {
        de: 'der Zettel',
        pron: 'dair TSET-el',
        grammar: 'pl. die Zettel',
        en: 'note, slip of paper',
        examples: [
          { de: 'Hast du einen Zettel für mich? Ich muss etwas notieren.', en: 'Do you have a slip of paper for me? I need to write something down.' },
          { de: 'Schreiben Sie Ihre Telefonnummer bitte auf den Zettel.', en: 'Please write your phone number on the slip of paper.' },
        ],
      },
      {
        de: 'das Zeugnis',
        pron: 'dahs TSOYK-nis',
        grammar: 'pl. die Zeugnisse',
        en: 'school report; certificate',
        examples: [
          { de: 'Morgen bekommen die Kinder ihr Zeugnis.', en: 'Tomorrow the children get their school reports.' },
        ],
      },
      {
        de: '(an-)/(aus)ziehen',
        pron: '(AHN-)/(OWS-)tsee-en',
        grammar: 'zieht (an/aus) · hat/ist (an/aus)gezogen',
        en: 'to pull; to put on / take off (clothes); to move in / out',
        examples: [
          { de: 'Ich ziehe (mir) eine Jacke an.', en: 'I\'m putting on a jacket.' },
          { de: 'Er hat sein T-Shirt ausgezogen und ein Hemd angezogen.', en: 'He took off his T-shirt and put on a shirt.' },
          { de: 'Die Nachbarn sind am Wochenende ausgezogen.', en: 'The neighbours moved out at the weekend.' },
        ],
      },
      {
        de: 'das Ziel',
        pron: 'dahs tseel',
        grammar: 'pl. die Ziele',
        en: 'goal; finish line; destination',
        examples: [
          { de: 'John läuft sehr schnell. Er war als Erster am Ziel.', en: 'John runs very fast. He was the first to reach the finish.' },
          { de: 'Was ist dein Ziel im Leben?', en: 'What is your goal in life?' },
        ],
      },
      {
        de: 'das Zimmer',
        pron: 'dahs TSIM-er',
        grammar: 'pl. die Zimmer',
        en: 'room',
        examples: [
          { de: 'Das Zimmer ist am größten.', en: 'This room is the biggest.' },
          { de: 'Mach im Schlafzimmer das Fenster zu!', en: 'Close the window in the bedroom!' },
          { de: 'Die Wohnung hat drei Zimmer.', en: 'The flat has three rooms.' },
          { de: 'Ich habe im Hotel ein Zimmer bestellt.', en: 'I\'ve booked a room at the hotel.' },
        ],
      },
      {
        de: 'der Zirkus',
        pron: 'dair TSIR-koos',
        grammar: 'pl. die Zirkusse',
        en: 'circus',
        examples: [
          { de: 'Heute gehen wir mit den Kindern in den Zirkus.', en: 'Today we\'re going to the circus with the children.' },
        ],
      },
      {
        de: 'die Zitrone',
        pron: 'dee tsee-TROH-nuh',
        grammar: 'pl. die Zitronen',
        en: 'lemon',
        examples: [
          { de: 'Ich trinke den Tee mit Zitrone.', en: 'I drink my tea with lemon.' },
          { de: 'Lucia mag Zitroneneis.', en: 'Lucia likes lemon ice cream.' },
        ],
      },
      {
        de: 'der Zoo',
        pron: 'dair tsoh',
        grammar: 'pl. die Zoos',
        en: 'zoo',
        examples: [
          { de: 'Am Sonntag gehen wir in den Zoo.', en: 'On Sunday we\'re going to the zoo.' },
        ],
      },
      {
        de: 'zu',
        pron: 'tsoo',
        en: 'to; at; too; closed',
        examples: [
          { de: 'Der Bus fährt zum Bahnhof.', en: 'The bus goes to the station.' },
          { de: 'Ich gehe zu Fuß.', en: 'I\'m walking.' },
          { de: 'Ich bin zu Hause.', en: 'I\'m at home.' },
          { de: 'Das Kleid ist mir zu teuer.', en: 'The dress is too expensive for me.' },
          { de: 'Ich trinke zum Essen ein Bier.', en: 'I\'m having a beer with my meal.' },
        ],
      },
      {
        de: 'der Zucker',
        pron: 'dair TSOOK-er',
        grammar: 'no plural',
        en: 'sugar',
        examples: [
          { de: 'Trinken Sie den Tee mit oder ohne Zucker?', en: 'Do you take your tea with or without sugar?' },
        ],
      },
      {
        de: 'zuerst',
        pron: 'tsoo-ERST',
        en: 'first; at first',
        examples: [
          { de: 'Zuerst müsst ihr die Hausaufgaben machen, dann könnt ihr spielen.', en: 'First you have to do your homework, then you can play.' },
          { de: 'Zuerst hat mir die Arbeit gar nicht gefallen. Jetzt geht es besser.', en: 'At first I didn\'t like the job at all. Now it\'s better.' },
        ],
      },
      {
        de: 'zufrieden',
        pron: 'tsoo-FREE-den',
        en: 'satisfied, happy (with)',
        examples: [
          { de: 'Ich bin mit der Wohnung zufrieden. Sie ist nicht groß, aber sie hat einen Balkon.', en: 'I\'m happy with the flat. It isn\'t big, but it has a balcony.' },
        ],
      },
      {
        de: 'der Zug',
        pron: 'dair tsook',
        grammar: 'pl. die Züge',
        en: 'train',
        examples: [
          { de: 'Ich fahre gern mit dem Zug.', en: 'I like travelling by train.' },
        ],
      },
      {
        de: 'zuhören',
        pron: 'TSOO-hur-ren',
        grammar: 'hört zu · hat zugehört',
        en: 'to listen',
        examples: [
          { de: 'Hör mir doch mal zu! Ich rede mit dir.', en: 'Listen to me! I\'m talking to you.' },
        ],
      },
      {
        de: 'zuletzt',
        pron: 'tsoo-LETST',
        en: 'last; the last time',
        examples: [
          { de: 'Wir haben uns vor drei Jahren zuletzt gesehen.', en: 'We last saw each other three years ago.' },
          { de: 'Diese Aufgabe machen wir zuletzt.', en: 'We\'ll do this task last.' },
        ],
      },
      {
        de: 'zum Beispiel',
        pron: 'tsoom BY-shpeel',
        en: 'for example',
        examples: [
          { de: 'Mein Freund hat viele Hobbys, zum Beispiel Kochen, Lesen und Tanzen.', en: 'My boyfriend has lots of hobbies, for example cooking, reading and dancing.' },
        ],
      },
      {
        de: 'zumachen',
        pron: 'TSOO-mahkh-en',
        grammar: 'macht zu · hat zugemacht',
        en: 'to close',
        examples: [
          { de: 'Machst du bitte das Fenster zu?', en: 'Could you close the window, please?' },
        ],
      },
      {
        de: 'zurück',
        pron: 'tsoo-REWK',
        en: 'back',
        examples: [
          { de: 'Eine Fahrkarte nach Frankfurt und zurück, bitte.', en: 'A return ticket to Frankfurt, please.' },
        ],
      },
      {
        de: 'zurück- (fahren, geben, gehen, kommen, laufen)',
        pron: 'tsoo-REWK (FAH-ren, GAY-ben, GAY-en, KOM-en, LOW-fen)',
        en: 'back- (verb prefix): to drive/give/go/come/run back',
        examples: [
          { de: 'Fahrt ihr nach der Party zurück nach Hause?', en: 'Are you going back home after the party?' },
          { de: 'Wann muss ich das Buch zurückgeben?', en: 'When do I have to give the book back?' },
          { de: 'Wir gehen wieder zurück.', en: 'We\'re going back again.' },
          { de: 'Wann kommst du zurück?', en: 'When are you coming back?' },
          { de: 'Ich habe mein Buch vergessen. Ich laufe schnell nach Hause zurück.', en: 'I\'ve forgotten my book. I\'ll quickly run back home.' },
        ],
      },
      {
        de: 'zusammen',
        pron: 'tsoo-ZAHM-en',
        en: 'together',
        examples: [
          { de: 'Wollen wir zusammen essen gehen?', en: 'Shall we go out to eat together?' },
          { de: 'Zahlen, bitte. – Zusammen oder getrennt?', en: 'The bill, please. – Together or separately?' },
          { de: 'Das macht zusammen 10 Euro 80.', en: 'That comes to 10 euros 80 altogether.' },
        ],
      },
      {
        de: 'zwischen',
        pron: 'TSVISH-en',
        en: 'between',
        examples: [
          { de: 'Heidelberg liegt zwischen Frankfurt und Stuttgart.', en: 'Heidelberg lies between Frankfurt and Stuttgart.' },
          { de: 'Zwischen acht und zehn Uhr bin ich zu Hause.', en: 'I\'m at home between eight and ten o\'clock.' },
        ],
      },
    ],
  },
]

export const A2_GROUPS: A2Group[] = [
  {
    title: 'Abkürzungen',
    en: 'Abbreviations',
    items: [
      { de: 'ca.', pron: 'TSIR-kah', en: 'approximately (circa)' },
      { de: 'd. h.', pron: 'dahs HYSST', en: 'that is, i.e. (das heißt)' },
      { de: 'der ICE', pron: 'dair ee-tsay-AY', en: 'intercity express train (Intercity-Express)' },
      { de: 'der Lkw', pron: 'dair el-kah-VAY', grammar: 'pl. die Lkws', en: 'truck, lorry (Lastkraftwagen)' },
      { de: 'der PC', pron: 'dair pay-TSAY', grammar: 'pl. die PCs', en: 'PC, personal computer' },
      { de: 'die SMS', pron: 'dee es-em-ES', en: 'text message' },
      { de: 'usw.', pron: 'oont zoh VY-ter', en: 'etc. (und so weiter)' },
      { de: 'das WC', pron: 'dahs vay-TSAY', grammar: 'pl. die WCs', en: 'toilet, restroom' },
      { de: 'z. B.', pron: 'tsoom BY-shpeel', en: 'for example (zum Beispiel)' },
    ],
  },
  {
    title: 'Anweisungssprache zur Prüfung',
    en: 'Exam instruction words',
    items: [
      { de: 'der Antwortbogen', pron: 'dair AHNT-vort-boh-gen', grammar: 'pl. die Antwortbogen', en: 'answer sheet' },
      { de: 'die Aufgabe', pron: 'dee OWF-gah-buh', grammar: 'pl. die Aufgaben', en: 'task, exercise' },
      { de: 'das Beispiel', pron: 'dahs BY-shpeel', grammar: 'pl. die Beispiele', en: 'example' },
      { de: 'die Durchsage', pron: 'dee DOORKH-zah-guh', grammar: 'pl. die Durchsagen', en: 'announcement' },
      { de: 'die Lösung', pron: 'dee LUR-zoong', grammar: 'pl. die Lösungen', en: 'solution, answer' },
      { de: 'markieren', pron: 'mahr-KEE-ren', en: 'to mark' },
      { de: 'der Prüfer / die Prüferin', pron: 'dair PREW-fer / dee PREW-fer-in', grammar: 'pl. die Prüfer / die Prüferinnen', en: 'examiner' },
      { de: 'die Prüfung', pron: 'dee PREW-foong', grammar: 'pl. die Prüfungen', en: 'exam, test' },
      { de: 'der Punkt', pron: 'dair poonkt', grammar: 'pl. die Punkte', en: 'point' },
      { de: 'der Teil', pron: 'dair tile', grammar: 'pl. die Teile', en: 'part, section' },
      { de: 'der Test', pron: 'dair test', grammar: 'pl. die Tests', en: 'test' },
      { de: 'der Text', pron: 'dair text', grammar: 'pl. die Texte', en: 'text' },
      { de: 'das Wörterbuch', pron: 'dahs VUR-ter-bookh', grammar: 'pl. die Wörterbücher', en: 'dictionary' },
    ],
  },
  {
    title: 'Berufe',
    en: 'Professions',
    items: [
      { de: 'der Angestellte / die Angestellte', pron: 'dair AHN-guh-shtel-tuh / dee AHN-guh-shtel-tuh', grammar: 'pl. die Angestellten', en: 'employee' },
      { de: 'der Arzt / die Ärztin', pron: 'dair ahrtst / dee AIRTS-tin', grammar: 'pl. die Ärzte / die Ärztinnen', en: 'doctor' },
      { de: 'der Auszubildende / die Auszubildende', pron: 'dair OWS-tsoo-bil-den-duh / dee OWS-tsoo-bil-den-duh', grammar: 'pl. die Auszubildenden', en: 'trainee, apprentice' },
      { de: 'der Autor / die Autorin', pron: 'dair OW-tor / dee ow-TOH-rin', grammar: 'pl. die Autoren / die Autorinnen', en: 'author' },
      { de: 'der Babysitter', pron: 'dair BAY-bee-sit-er', grammar: 'pl. die Babysitter', en: 'babysitter' },
      { de: 'der Bäcker / die Bäckerin', pron: 'dair BEK-er / dee BEK-er-in', grammar: 'pl. die Bäcker / die Bäckerinnen', en: 'baker' },
      { de: 'der Doktor / die Doktorin', pron: 'dair DOK-tor / dee dok-TOH-rin', grammar: 'pl. die Doktoren / die Doktorinnen', en: 'doctor' },
      { de: 'der Fahrer / die Fahrerin', pron: 'dair FAH-rer / dee FAH-rer-in', grammar: 'pl. die Fahrer / die Fahrerinnen', en: 'driver' },
      { de: 'der Friseur / die Friseurin', pron: 'dair free-ZUR / dee free-ZUR-in', grammar: 'pl. die Friseure / die Friseurinnen', en: 'hairdresser' },
      { de: 'der Handwerker / die Handwerkerin', pron: 'dair HAHNT-vair-ker / dee HAHNT-vair-ker-in', grammar: 'pl. die Handwerker / die Handwerkerinnen', en: 'tradesperson, craftsperson' },
      { de: 'der Hausmann / die Hausfrau', pron: 'dair HOWS-mahn / dee HOWS-frow', grammar: 'pl. die Hausmänner / die Hausfrauen', en: 'househusband / housewife' },
      { de: 'der Journalist / die Journalistin', pron: 'dair zhoor-nah-LIST / dee zhoor-nah-LIS-tin', grammar: 'pl. die Journalisten / die Journalistinnen', en: 'journalist' },
      { de: 'der Kaufmann / die Kauffrau', pron: 'dair KOWF-mahn / dee KOWF-frow', grammar: 'pl. die Kaufleute / die Kauffrauen', en: 'businessperson, salesperson' },
      { de: 'der Kellner / die Kellnerin', pron: 'dair KEL-ner / dee KEL-ner-in', grammar: 'pl. die Kellner / die Kellnerinnen', en: 'waiter / waitress' },
      { de: 'der Koch / die Köchin', pron: 'dair kokh / dee KUR-khin', grammar: 'pl. die Köche / die Köchinnen', en: 'cook, chef' },
      { de: 'der Krankenpfleger / die Krankenschwester', pron: 'dair KRAHN-ken-pflay-ger / dee KRAHN-ken-shves-ter', grammar: 'pl. die Krankenpfleger / die Krankenschwestern', en: 'nurse' },
      { de: 'der Künstler / die Künstlerin', pron: 'dair KEWNST-ler / dee KEWNST-ler-in', grammar: 'pl. die Künstler / die Künstlerinnen', en: 'artist' },
      { de: 'der Lehrer / die Lehrerin', pron: 'dair LAY-rer / dee LAY-rer-in', grammar: 'pl. die Lehrer / die Lehrerinnen', en: 'teacher' },
      { de: 'der Mechaniker / die Mechanikerin', pron: 'dair may-KHAH-nee-ker / dee may-KHAH-nee-ker-in', grammar: 'pl. die Mechaniker / die Mechanikerinnen', en: 'mechanic' },
      { de: 'das Model', pron: 'dahs MOD-el', grammar: 'pl. die Models', en: '(fashion) model' },
      { de: 'der Musiker / die Musikerin', pron: 'dair MOO-zee-ker / dee MOO-zee-ker-in', grammar: 'pl. die Musiker / die Musikerinnen', en: 'musician' },
      { de: 'der Polizist / die Polizistin', pron: 'dair poh-lee-TSIST / dee poh-lee-TSIS-tin', grammar: 'pl. die Polizisten / die Polizistinnen', en: 'police officer' },
      { de: 'der Rentner / die Rentnerin', pron: 'dair RENT-ner / dee RENT-ner-in', grammar: 'pl. die Rentner / die Rentnerinnen', en: 'pensioner, retiree' },
      { de: 'der Sänger / die Sängerin', pron: 'dair ZENG-er / dee ZENG-er-in', grammar: 'pl. die Sänger / die Sängerinnen', en: 'singer' },
      { de: 'der Schauspieler / die Schauspielerin', pron: 'dair SHOW-shpee-ler / dee SHOW-shpee-ler-in', grammar: 'pl. die Schauspieler / die Schauspielerinnen', en: 'actor / actress' },
      { de: 'der Techniker / die Technikerin', pron: 'dair TEKH-nee-ker / dee TEKH-nee-ker-in', grammar: 'pl. die Techniker / die Technikerinnen', en: 'technician' },
      { de: 'der Verkäufer / die Verkäuferin', pron: 'dair fair-KOY-fer / dee fair-KOY-fer-in', grammar: 'pl. die Verkäufer / die Verkäuferinnen', en: 'salesperson, shop assistant' },
    ],
  },
  {
    title: 'Familienmitglieder',
    en: 'Family members',
    items: [
      { de: 'der Bruder', pron: 'dair BROO-der', grammar: 'pl. die Brüder', en: 'brother' },
      { de: 'der Cousin', pron: 'dair koo-ZANG', grammar: 'pl. die Cousins', en: 'cousin (male)' },
      { de: 'die Cousine', pron: 'dee koo-ZEE-nuh', grammar: 'pl. die Cousinen', en: 'cousin (female)' },
      { de: 'die Eltern', pron: 'dee EL-tern', grammar: 'plural only', en: 'parents' },
      { de: 'der Enkel', pron: 'dair ENG-kel', grammar: 'pl. die Enkel', en: 'grandson, grandchild' },
      { de: 'die Enkelin', pron: 'dee ENG-kuh-lin', grammar: 'pl. die Enkelinnen', en: 'granddaughter' },
      { de: 'die Geschwister', pron: 'dee guh-SHVIS-ter', grammar: 'plural only', en: 'siblings' },
      { de: 'die Großeltern', pron: 'dee GROHS-el-tern', grammar: 'plural only', en: 'grandparents' },
      { de: 'die Großmutter (Oma)', pron: 'dee GROHS-moo-ter (OH-mah)', grammar: 'pl. die Großmütter', en: 'grandmother (grandma)' },
      { de: 'der Großvater (Opa)', pron: 'dair GROHS-fah-ter (OH-pah)', grammar: 'pl. die Großväter', en: 'grandfather (grandpa)' },
      { de: 'das Kind', pron: 'dahs kint', grammar: 'pl. die Kinder', en: 'child' },
      { de: 'die Mutter (Mama)', pron: 'dee MOO-ter (MAH-mah)', grammar: 'pl. die Mütter', en: 'mother (mom)' },
      { de: 'der Onkel', pron: 'dair ONG-kel', grammar: 'pl. die Onkel', en: 'uncle' },
      { de: 'die Schwester', pron: 'dee SHVES-ter', grammar: 'pl. die Schwestern', en: 'sister' },
      { de: 'der Sohn', pron: 'dair zohn', grammar: 'pl. die Söhne', en: 'son' },
      { de: 'die Tante', pron: 'dee TAHN-tuh', grammar: 'pl. die Tanten', en: 'aunt' },
      { de: 'die Tochter', pron: 'dee TOKH-ter', grammar: 'pl. die Töchter', en: 'daughter' },
      { de: 'der Vater (Papa)', pron: 'dair FAH-ter (PAH-pah)', grammar: 'pl. die Väter', en: 'father (dad)' },
      { de: 'der / die Verwandte', pron: 'dair / dee fair-VAHN-tuh', grammar: 'pl. die Verwandten', en: 'relative' },
    ],
  },
  {
    title: 'Familienstand',
    en: 'Marital status',
    items: [
      { de: 'ledig', pron: 'LAY-dikh', en: 'single, unmarried' },
      { de: 'verheiratet', pron: 'fer-HY-rah-tet', en: 'married' },
      { de: 'getrennt', pron: 'guh-TRENT', en: 'separated' },
      { de: 'geschieden', pron: 'guh-SHEE-den', en: 'divorced' },
    ],
  },
  {
    title: 'Farben',
    en: 'Colours',
    items: [
      { de: 'blau', pron: 'blow', en: 'blue' },
      { de: 'braun', pron: 'brown', en: 'brown' },
      { de: 'gelb', pron: 'gelp', en: 'yellow' },
      { de: 'grau', pron: 'grow', en: 'grey' },
      { de: 'grün', pron: 'grewn', en: 'green' },
      { de: 'lila', pron: 'LEE-lah', en: 'purple' },
      { de: 'orange', pron: 'oh-RAHNZH', en: 'orange' },
      { de: 'rosa', pron: 'ROH-zah', en: 'pink' },
      { de: 'rot', pron: 'roht', en: 'red' },
      { de: 'schwarz', pron: 'shvahrts', en: 'black' },
      { de: 'weiß', pron: 'vice', en: 'white' },
    ],
  },
  {
    title: 'Himmelsrichtungen',
    en: 'Points of the compass',
    items: [
      { de: 'der Norden', pron: 'dair NOR-den', en: 'north' },
      { de: 'der Süden', pron: 'dair ZEW-den', en: 'south' },
      { de: 'der Osten', pron: 'dair OS-ten', en: 'east' },
      { de: 'der Westen', pron: 'dair VES-ten', en: 'west' },
    ],
  },
  {
    title: 'Länder und Nationalitäten',
    en: 'Countries and nationalities',
    items: [
      { de: 'Deutschland', pron: 'DOYCH-lahnt', en: 'Germany' },
      { de: 'der / die Deutsche', pron: 'dair / dee DOY-chuh', grammar: 'pl. die Deutschen', en: 'German (person)' },
      { de: 'deutsch', pron: 'doych', en: 'German (adjective)' },
      { de: 'auf Deutsch', pron: 'owf doytsh', en: 'in German' },
      { de: 'Österreich', pron: 'UR-ster-ryekh', en: 'Austria' },
      { de: 'der Österreicher / die Österreicherin', pron: 'dair UR-steh-ry-kher / dee UR-steh-ry-kher-in', grammar: 'pl. die Österreicher / die Österreicherinnen', en: 'Austrian (person)' },
      { de: 'österreichisch', pron: 'UR-ster-ry-khish', en: 'Austrian (adjective)' },
      { de: 'die Schweiz', pron: 'dee shvites', en: 'Switzerland' },
      { de: 'der Schweizer / die Schweizerin', pron: 'dair SHVY-tser / dee SHVY-tser-in', grammar: 'pl. die Schweizer / die Schweizerinnen', en: 'Swiss (person)' },
      { de: 'schweizerisch', pron: 'SHVY-tseh-rish', en: 'Swiss (adjective)' },
      { de: 'Luxemburg', pron: 'LOOK-sem-boork', en: 'Luxembourg' },
      { de: 'der Luxemburger / die Luxemburgerin', pron: 'dair LOOK-sem-boor-ger / dee LOOK-sem-boor-ger-in', grammar: 'pl. die Luxemburger / die Luxemburgerinnen', en: 'Luxembourger (person)' },
      { de: 'luxemburgisch', pron: 'LOOK-sem-boor-gish', en: 'Luxembourgish (adjective)' },
      { de: 'Europa', pron: 'oy-ROH-pah', en: 'Europe' },
      { de: 'der Europäer / die Europäerin', pron: 'dair oy-roh-PAY-er / dee oy-roh-PAY-er-in', grammar: 'pl. die Europäer / die Europäerinnen', en: 'European (person)' },
      { de: 'europäisch', pron: 'oy-roh-PAY-ish', en: 'European (adjective)' },
    ],
  },
  {
    title: 'Schule und Schulfächer',
    en: 'School and school subjects',
    items: [
      { de: 'das Abitur', pron: 'dahs ah-bee-TOOR', grammar: 'no plural', en: 'school-leaving exam (A levels)' },
      { de: 'der Direktor', pron: 'dair dee-REK-tor', grammar: 'pl. die Direktoren', en: 'head teacher, principal' },
      { de: 'die Hausaufgabe', pron: 'dee HOWS-owf-gah-buh', grammar: 'pl. die Hausaufgaben', en: 'homework' },
      { de: 'die Klasse', pron: 'dee KLAH-suh', grammar: 'pl. die Klassen', en: 'class, school year' },
      { de: 'die Klassenfahrt', pron: 'dee KLAH-sen-fahrt', grammar: 'pl. die Klassenfahrten', en: 'school trip' },
      { de: 'das Sekretariat', pron: 'dahs zay-kray-tah-ree-AHT', grammar: 'pl. die Sekretariate', en: 'school office, secretary\'s office' },
      { de: 'der Stundenplan', pron: 'dair SHTOON-den-plahn', grammar: 'pl. die Stundenpläne', en: 'timetable' },
      { de: 'Biologie', pron: 'bee-oh-loh-GEE', en: 'biology' },
      { de: 'Chemie', pron: 'khay-MEE', en: 'chemistry' },
      { de: 'Deutsch', pron: 'doych', en: 'German' },
      { de: 'Englisch', pron: 'ENG-lish', en: 'English' },
      { de: 'Französisch', pron: 'frahn-TSUR-zish', en: 'French' },
      { de: 'Geografie', pron: 'gay-oh-grah-FEE', en: 'geography' },
      { de: 'Geschichte', pron: 'guh-SHIKH-tuh', en: 'history' },
      { de: 'Kunst (Kunsterziehung)', pron: 'koonst (KOONST-air-tsee-oong)', en: 'art (art education)' },
      { de: 'Latein', pron: 'lah-TINE', en: 'Latin' },
      { de: 'Mathematik', pron: 'mah-teh-mah-TEEK', en: 'mathematics' },
      { de: 'Musik', pron: 'moo-ZEEK', en: 'music' },
      { de: 'Physik', pron: 'few-ZEEK', en: 'physics' },
      { de: 'Religion', pron: 'ray-lee-GYOHN', en: 'religious education' },
      { de: 'Sozialkunde', pron: 'zoh-TSYAHL-koon-duh', en: 'social studies' },
      { de: 'Sport', pron: 'shport', en: 'PE, sport' },
    ],
  },
  {
    title: 'Währungen und Maße',
    en: 'Currencies and measurements',
    items: [
      { de: '1 Euro = 100 Cent', pron: 'ayn OY-roh = HOON-dert sent', grammar: 'ein Euro = hundert Cent', en: '1 euro = 100 cents' },
      { de: '1 Franke = 100 Rappen', pron: 'ayn FRAHN-ken = HOON-dert RAH-pen', grammar: 'ein Franken = hundert Rappen', en: '1 Swiss franc = 100 centimes' },
      { de: '1 m', pron: 'ayn MAY-ter', grammar: 'ein Meter', en: '1 metre' },
      { de: '1,50 m', pron: 'ayn MAY-ter FEWNF-tsikh', grammar: 'ein Meter fünfzig', en: '1.50 metres' },
      { de: '1 cm', pron: 'ayn TSEN-tee-may-ter', grammar: 'ein Zentimeter', en: '1 centimetre' },
      { de: '2 km', pron: 'tsvy kee-loh-MAY-ter', grammar: 'zwei Kilometer', en: '2 kilometres' },
      { de: '1 %', pron: 'ayn proh-TSENT', grammar: 'ein Prozent', en: '1 percent' },
      { de: '1 l', pron: 'ayn LEE-ter', grammar: 'ein Liter', en: '1 litre' },
      { de: '1 g', pron: 'ayn grahm', grammar: 'ein Gramm', en: '1 gram' },
      { de: '1 kg', pron: 'ayn KEE-loh-grahm', grammar: 'ein Kilogramm', en: '1 kilogram' },
      { de: '10 °C', pron: 'tsayn graht TSEL-zee-oos', grammar: 'zehn Grad Celsius', en: '10 degrees Celsius' },
    ],
  },
  {
    title: 'Datum',
    en: 'Dates',
    items: [
      { de: '1848', pron: 'AHKH-tsayn-hoon-dert-ahkht-oont-feer-tsikh', grammar: 'achtzehnhundertachtundvierzig', en: '1848 (year)' },
      { de: 'Heute ist der 20.2.2012', pron: 'HOY-tuh ist dair TSVAHN-tsikh-stuh TSVY-tuh tsvy-tow-zent-TSVURLF', grammar: 'der zwanzigste zweite (Februar) zweitausendzwölf', en: 'Today is 20 February 2012' },
      { de: 'Berlin, 14.3.2013', pron: 'bair-LEEN, FEER-tsayn-ter DRIT-ter tsvy-tow-zent-DRY-tsayn', grammar: 'vierzehnter dritter zweitausenddreizehn', en: 'Berlin, 14 March 2013 (letter heading)' },
    ],
  },
  {
    title: 'Feiertage',
    en: 'Holidays',
    items: [
      { de: 'der Karneval', pron: 'dair KAR-nuh-vahl', en: 'carnival' },
      { de: 'Ostern', pron: 'OHS-tern', en: 'Easter' },
      { de: 'Weihnachten', pron: 'VY-nahkh-ten', en: 'Christmas' },
      { de: 'das Neujahr', pron: 'dahs NOY-yahr', en: 'New Year\'s Day' },
      { de: 'Silvester', pron: 'zil-VES-ter', en: 'New Year\'s Eve' },
    ],
  },
  {
    title: 'Jahreszeiten',
    en: 'Seasons',
    items: [
      { de: 'der Frühling / das Frühjahr', pron: 'dair FREW-ling / dahs FREW-yahr', en: 'spring' },
      { de: 'der Sommer', pron: 'dair ZOM-er', en: 'summer' },
      { de: 'der Herbst', pron: 'dair hairpst', en: 'autumn, fall' },
      { de: 'der Winter', pron: 'dair VIN-ter', en: 'winter' },
    ],
  },
  {
    title: 'Monate',
    en: 'Months',
    items: [
      { de: 'der Januar', pron: 'dair YAH-noo-ar', en: 'January' },
      { de: 'der Februar', pron: 'dair FAY-broo-ar', en: 'February' },
      { de: 'der März', pron: 'dair mairts', en: 'March' },
      { de: 'der April', pron: 'dair ah-PRIL', en: 'April' },
      { de: 'der Mai', pron: 'dair my', en: 'May' },
      { de: 'der Juni', pron: 'dair YOO-nee', en: 'June' },
      { de: 'der Juli', pron: 'dair YOO-lee', en: 'July' },
      { de: 'der August', pron: 'dair ow-GOOST', en: 'August' },
      { de: 'der September', pron: 'dair zep-TEM-ber', en: 'September' },
      { de: 'der Oktober', pron: 'dair ok-TOH-ber', en: 'October' },
      { de: 'der November', pron: 'dair noh-VEM-ber', en: 'November' },
      { de: 'der Dezember', pron: 'dair day-TSEM-ber', en: 'December' },
    ],
  },
  {
    title: 'Tageszeiten',
    en: 'Times of day',
    items: [
      { de: 'der Tag', pron: 'dair tahk', grammar: 'pl. die Tage', en: 'day' },
      { de: 'der Morgen', pron: 'dair MOR-gen', grammar: 'pl. die Morgen', en: 'morning' },
      { de: 'der Vormittag', pron: 'dair FOR-mit-tahk', grammar: 'pl. die Vormittage', en: 'late morning (before noon)' },
      { de: 'der Mittag', pron: 'dair MIT-tahk', grammar: 'pl. die Mittage', en: 'midday, noon' },
      { de: 'der Nachmittag', pron: 'dair NAHKH-mit-tahk', grammar: 'pl. die Nachmittage', en: 'afternoon' },
      { de: 'der Abend', pron: 'dair AH-bent', grammar: 'pl. die Abende', en: 'evening' },
      { de: 'die Nacht', pron: 'dee nahkht', grammar: 'pl. die Nächte', en: 'night' },
      { de: 'die Mitternacht', pron: 'dee MIT-er-nahkht', en: 'midnight' },
      { de: 'täglich', pron: 'TEG-likh', en: 'daily' },
      { de: 'tagsüber', pron: 'tahks-EW-ber', en: 'during the day' },
      { de: 'morgens / am Morgen', pron: 'MOR-gens / ahm MOR-gen', en: 'in the morning' },
      { de: 'vormittags / am Vormittag', pron: 'FOR-mit-tahks / ahm FOR-mit-tahk', en: 'in the (late) morning' },
      { de: 'mittags / am Mittag', pron: 'MIT-tahks / ahm MIT-tahk', en: 'at midday, at noon' },
      { de: 'nachmittags / am Nachmittag', pron: 'NAHKH-mit-tahks / ahm NAHKH-mit-tahk', en: 'in the afternoon' },
      { de: 'abends / am Abend', pron: 'AH-bents / ahm AH-bent', en: 'in the evening' },
      { de: 'nachts / in der Nacht', pron: 'nahkhts / in dair nahkht', en: 'at night' },
      { de: 'um Mitternacht', pron: 'oom MIT-er-nahkht', en: 'at midnight' },
    ],
  },
  {
    title: 'Uhrzeit',
    en: 'Telling the time',
    items: [
      { de: '07.03', pron: 'ZEE-ben oor dry', grammar: 'sieben Uhr drei', en: '7:03' },
      { de: '3.15', pron: 'dry oor FEWNF-tsayn', grammar: 'drei Uhr fünfzehn', en: '3:15' },
      { de: '15.30', pron: 'FEWNF-tsayn oor DRY-sikh / hahlp feer', grammar: 'fünfzehn Uhr dreißig / halb vier', en: '3:30 pm' },
      { de: '24.00', pron: 'FEER-oont-tsvahn-tsikh oor', grammar: 'vierundzwanzig Uhr', en: 'midnight (24:00)' },
      { de: '13.00', pron: 'DRY-tsayn oor / ayn oor', grammar: 'dreizehn Uhr / ein Uhr', en: '1:00 pm' },
      { de: '11.30', pron: 'hahlp tsvurlf', grammar: 'halb zwölf', en: '11:30' },
      { de: '14.05', pron: 'FEER-tsayn oor fewnf / fewnf nahkh tsvy', grammar: 'vierzehn Uhr fünf / fünf nach zwei', en: '2:05 pm' },
      { de: '14.55', pron: 'FEER-tsayn oor FEWNF-oont-fewnf-tsikh / fewnf for dry', grammar: 'vierzehn Uhr fünfundfünfzig / fünf vor drei', en: '2:55 pm' },
      { de: '10.15', pron: 'FIR-tel nahkh tsayn', grammar: 'Viertel nach zehn', en: 'quarter past ten' },
      { de: '6.45', pron: 'FIR-tel for ZEE-ben', grammar: 'Viertel vor sieben', en: 'quarter to seven' },
      { de: '20.40', pron: 'TSVAHN-tsikh oor FEER-tsikh / TSVAHN-tsikh for noyn', grammar: 'zwanzig Uhr vierzig / zwanzig vor neun', en: '8:40 pm' },
    ],
  },
  {
    title: 'Wochentage',
    en: 'Days of the week',
    items: [
      { de: 'am Wochenende', pron: 'ahm VOKH-en-en-duh', en: 'at the weekend' },
      { de: 'montags / am Montag', pron: 'MOHN-tahks / ahm MOHN-tahk', en: 'on Mondays / on Monday' },
      { de: 'dienstags / am Dienstag', pron: 'DEENS-tahks / ahm DEENS-tahk', en: 'on Tuesdays / on Tuesday' },
      { de: 'mittwochs / am Mittwoch', pron: 'MIT-vokhs / ahm MIT-vokh', en: 'on Wednesdays / on Wednesday' },
      { de: 'donnerstags / am Donnerstag', pron: 'DON-ers-tahks / ahm DON-ers-tahk', en: 'on Thursdays / on Thursday' },
      { de: 'freitags / am Freitag', pron: 'FRY-tahks / ahm FRY-tahk', en: 'on Fridays / on Friday' },
      { de: 'samstags / am Samstag', pron: 'ZAHMS-tahks / ahm ZAHMS-tahk', en: 'on Saturdays / on Saturday' },
      { de: 'sonntags / am Sonntag', pron: 'ZON-tahks / ahm ZON-tahk', en: 'on Sundays / on Sunday' },
      { de: 'der Arbeitstag / der Werktag', pron: 'dair AR-bites-tahk / dair VAIRK-tahk', grammar: 'pl. die Arbeitstage / die Werktage', en: 'working day, weekday' },
      { de: 'der Feiertag', pron: 'dair FY-er-tahk', grammar: 'pl. die Feiertage', en: 'public holiday' },
    ],
  },
  {
    title: 'Zeitmaße',
    en: 'Units of time',
    items: [
      { de: 'die Sekunde', pron: 'dee zay-KOON-duh', grammar: 'pl. die Sekunden', en: 'second' },
      { de: 'die Minute', pron: 'dee mee-NOO-tuh', grammar: 'pl. die Minuten', en: 'minute' },
      { de: 'die Stunde', pron: 'dee SHTOON-duh', grammar: 'pl. die Stunden', en: 'hour' },
      { de: 'die Woche', pron: 'dee VOKH-uh', grammar: 'pl. die Wochen', en: 'week' },
      { de: 'das Jahr', pron: 'dahs yahr', grammar: 'pl. die Jahre', en: 'year' },
    ],
  },
  {
    title: 'Zahlen',
    en: 'Numbers',
    items: [
      { de: '1', pron: 'ines', grammar: 'eins', en: 'one' },
      { de: '2', pron: 'tsvy', grammar: 'zwei', en: 'two' },
      { de: '3', pron: 'dry', grammar: 'drei', en: 'three' },
      { de: '4', pron: 'feer', grammar: 'vier', en: 'four' },
      { de: '5', pron: 'fewnf', grammar: 'fünf', en: 'five' },
      { de: '6', pron: 'zex', grammar: 'sechs', en: 'six' },
      { de: '7', pron: 'ZEE-ben', grammar: 'sieben', en: 'seven' },
      { de: '8', pron: 'ahkht', grammar: 'acht', en: 'eight' },
      { de: '9', pron: 'noyn', grammar: 'neun', en: 'nine' },
      { de: '10', pron: 'tsayn', grammar: 'zehn', en: 'ten' },
      { de: '11', pron: 'elf', grammar: 'elf', en: 'eleven' },
      { de: '12', pron: 'tsvurlf', grammar: 'zwölf', en: 'twelve' },
      { de: '13', pron: 'DRY-tsayn', grammar: 'dreizehn', en: 'thirteen' },
      { de: '14', pron: 'FEER-tsayn', grammar: 'vierzehn', en: 'fourteen' },
      { de: '15', pron: 'FEWNF-tsayn', grammar: 'fünfzehn', en: 'fifteen' },
      { de: '16', pron: 'ZEKH-tsayn', grammar: 'sechzehn', en: 'sixteen' },
      { de: '17', pron: 'ZEEP-tsayn', grammar: 'siebzehn', en: 'seventeen' },
      { de: '18', pron: 'AHKH-tsayn', grammar: 'achtzehn', en: 'eighteen' },
      { de: '19', pron: 'NOYN-tsayn', grammar: 'neunzehn', en: 'nineteen' },
      { de: '20', pron: 'TSVAHN-tsikh', grammar: 'zwanzig', en: 'twenty' },
      { de: '21', pron: 'AYN-oont-tsvahn-tsikh', grammar: 'einundzwanzig', en: 'twenty-one' },
      { de: '30', pron: 'DRY-sikh', grammar: 'dreißig', en: 'thirty' },
      { de: '40', pron: 'FEER-tsikh', grammar: 'vierzig', en: 'forty' },
      { de: '50', pron: 'FEWNF-tsikh', grammar: 'fünfzig', en: 'fifty' },
      { de: '60', pron: 'ZEKH-tsikh', grammar: 'sechzig', en: 'sixty' },
      { de: '70', pron: 'ZEEP-tsikh', grammar: 'siebzig', en: 'seventy' },
      { de: '80', pron: 'AHKH-tsikh', grammar: 'achtzig', en: 'eighty' },
      { de: '90', pron: 'NOYN-tsikh', grammar: 'neunzig', en: 'ninety' },
      { de: '100', pron: '(AYN-)hoon-dert', grammar: '(ein)hundert', en: 'one hundred' },
      { de: '101', pron: 'hoon-dert-INES', grammar: 'hunderteins', en: 'one hundred and one' },
      { de: '200', pron: 'TSVY-hoon-dert', grammar: 'zweihundert', en: 'two hundred' },
      { de: '1000', pron: '(AYN-)tow-zent', grammar: '(ein)tausend', en: 'one thousand' },
      { de: '2001', pron: 'TSVY-tow-zent-eyns', grammar: 'zweitausendeins', en: 'two thousand and one' },
      { de: '1000000', pron: 'AY-nuh mil-YOHN', grammar: 'eine Million', en: 'one million' },
      { de: 'der / die erste', pron: 'dair / dee AIR-stuh', en: 'the first' },
      { de: 'der / die zweite', pron: 'dair / dee TSVY-tuh', en: 'the second' },
      { de: 'der / die dritte', pron: 'dair / dee DRIT-uh', en: 'the third' },
      { de: 'der / die vierte', pron: 'dair / dee FEER-tuh', en: 'the fourth' },
      { de: '1.', pron: 'AIR-stens', grammar: 'erstens', en: 'firstly' },
      { de: '2.', pron: 'TSVY-tens', grammar: 'zweitens', en: 'secondly' },
      { de: '3.', pron: 'DRIT-ens', grammar: 'drittens', en: 'thirdly' },
      { de: '4.', pron: 'FEER-tens', grammar: 'viertens', en: 'fourthly' },
      { de: 'einmal', pron: 'AYN-mahl', en: 'once' },
      { de: 'zweimal', pron: 'TSVY-mahl', en: 'twice' },
      { de: 'dreimal', pron: 'DRY-mahl', en: 'three times' },
      { de: 'viermal', pron: 'FEER-mahl', en: 'four times' },
    ],
  },
]
