import { CATEGORIES } from './categories'

import type { Category } from './categories'
import type { GermanAdjective } from '@/interfaces/GermanAdjectives'
import type { GermanArticle } from '@/interfaces/GermanArticle'
import type { GermanNoun } from '@/interfaces/GermanNoun'
import type { GermanVerb } from '@/interfaces/GermanVerbs'
import type { VocabularyEntry } from '@/interfaces/VocabularyEntry'

type DefinitionBase = {
  categories: Category[]
  en: string
  es: string
}

type NounDefinition = DefinitionBase & {
  type: 'noun'
  article: GermanArticle
  singular: string
  plural: string | null
}

type VerbDefinition = DefinitionBase & {
  type: 'verb'
  infinitive: string
  preteritum: string
  perfekt: string
  auxiliary: 'haben' | 'sein'
}

type AdjectiveDefinition = DefinitionBase & {
  type: 'adjective'
  adjective: string
  comparative: string
  superlative: string
}

type Definition = NounDefinition | VerbDefinition | AdjectiveDefinition
type DefinitionWithoutCategories = Omit<NounDefinition, 'categories'> | Omit<VerbDefinition, 'categories'> | Omit<AdjectiveDefinition, 'categories'>

const noun = (
  article: GermanArticle,
  singular: string,
  plural: string | null,
  en: string,
  es: string
): DefinitionWithoutCategories => ({
  type: 'noun',
  article,
  singular,
  plural,
  en,
  es
})

const verb = (
  infinitive: string,
  preteritum: string,
  perfekt: string,
  auxiliary: 'haben' | 'sein',
  en: string,
  es: string
): DefinitionWithoutCategories => ({
  type: 'verb',
  infinitive,
  preteritum,
  perfekt,
  auxiliary,
  en,
  es
})

const adjective = (
  value: string,
  comparative: string,
  superlative: string,
  en: string,
  es: string
): DefinitionWithoutCategories => ({
  type: 'adjective',
  adjective: value,
  comparative,
  superlative,
  en,
  es
})

const pair = (
  first: Category,
  second: Category,
  shared: DefinitionWithoutCategories[],
  firstOnly: DefinitionWithoutCategories[],
  secondOnly: DefinitionWithoutCategories[]
): Definition[] => [
  ...shared.map(item => ({
    ...item,
    categories: [first, second]
  } as Definition)),
  ...firstOnly.map(item => ({
    ...item,
    categories: [first]
  } as Definition)),
  ...secondOnly.map(item => ({
    ...item,
    categories: [second]
  } as Definition))
]

const definitions: Definition[] = [
  ...pair(CATEGORIES.ABSTRACT, CATEGORIES.EMOTIONS, [
    noun('der', 'Gedanke', 'Gedanken', 'thought', 'pensamiento'),
    noun('das', 'Gefühl', 'Gefühle', 'feeling', 'sentimiento'),
    noun('die', 'Hoffnung', 'Hoffnungen', 'hope', 'esperanza'),
    noun('die', 'Angst', 'Ängste', 'fear', 'miedo'),
    noun('die', 'Freude', 'Freuden', 'joy', 'alegría'),
    noun('der', 'Wunsch', 'Wünsche', 'wish', 'deseo'),
    noun('die', 'Meinung', 'Meinungen', 'opinion', 'opinión'),
    noun('die', 'Erinnerung', 'Erinnerungen', 'memory', 'recuerdo'),
    noun('die', 'Entscheidung', 'Entscheidungen', 'decision', 'decisión'),
    noun('die', 'Überraschung', 'Überraschungen', 'surprise', 'sorpresa'),
    verb('fühlen', 'fühlte', 'gefühlt', 'haben', 'feel', 'sentir'),
    verb('hoffen', 'hoffte', 'gehofft', 'haben', 'hope', 'esperar'),
    verb('befürchten', 'befürchtete', 'befürchtet', 'haben', 'fear / be afraid', 'temer'),
    adjective('emotional', 'emotionaler', 'am emotionalsten', 'emotional', 'emocional'),
    adjective('bewusst', 'bewusster', 'am bewusstesten', 'conscious / aware', 'consciente')
  ], [
    noun('der', 'Grund', 'Gründe', 'reason', 'motivo'),
    noun('die', 'Möglichkeit', 'Möglichkeiten', 'possibility', 'posibilidad'),
    noun('der', 'Unterschied', 'Unterschiede', 'difference', 'diferencia'),
    verb('entscheiden', 'entschied', 'entschieden', 'haben', 'decide', 'decidir'),
    verb('vergleichen', 'verglich', 'verglichen', 'haben', 'compare', 'comparar'),
    adjective('möglich', 'möglicher', 'am möglichsten', 'possible', 'posible'),
    adjective('ähnlich', 'ähnlicher', 'am ähnlichsten', 'similar', 'similar')
  ], [
    noun('der', 'Ärger', null, 'anger / annoyance', 'enojo'),
    noun('die', 'Enttäuschung', 'Enttäuschungen', 'disappointment', 'decepción'),
    noun('die', 'Sehnsucht', 'Sehnsüchte', 'longing', 'anhelo'),
    verb('sich freuen', 'freute sich', 'gefreut', 'haben', 'be happy / look forward to', 'alegrarse'),
    verb('sich ärgern', 'ärgerte sich', 'geärgert', 'haben', 'get annoyed', 'enojarse'),
    adjective('nervös', 'nervöser', 'am nervösesten', 'nervous', 'nervioso/a'),
    adjective('ruhig', 'ruhiger', 'am ruhigsten', 'calm', 'tranquilo/a'),
    adjective('eifersüchtig', 'eifersüchtiger', 'am eifersüchtigsten', 'jealous', 'celoso/a')
  ]),

  ...pair(CATEGORIES.ARTS, CATEGORIES.MUSIC, [
    noun('das', 'Lied', 'Lieder', 'song', 'canción'),
    noun('die', 'Melodie', 'Melodien', 'melody', 'melodía'),
    noun('der', 'Rhythmus', 'Rhythmen', 'rhythm', 'ritmo'),
    noun('das', 'Konzert', 'Konzerte', 'concert', 'concierto'),
    noun('die', 'Bühne', 'Bühnen', 'stage', 'escenario'),
    noun('der', 'Künstler', 'Künstler', 'artist', 'artista'),
    noun('das', 'Instrument', 'Instrumente', 'instrument', 'instrumento'),
    noun('das', 'Publikum', null, 'audience', 'público'),
    verb('komponieren', 'komponierte', 'komponiert', 'haben', 'compose', 'componer'),
    verb('auf|treten', 'trat auf', 'aufgetreten', 'sein', 'perform / appear', 'actuar'),
    verb('proben', 'probte', 'geprobt', 'haben', 'rehearse', 'ensayar'),
    adjective('kreativ', 'kreativer', 'am kreativsten', 'creative', 'creativo/a'),
    adjective('musikalisch', 'musikalischer', 'am musikalischsten', 'musical', 'musical'),
    adjective('laut', 'lauter', 'am lautesten', 'loud', 'ruidoso/a'),
    adjective('leise', 'leiser', 'am leisesten', 'quiet', 'silencioso/a')
  ], [
    noun('das', 'Gemälde', 'Gemälde', 'painting', 'cuadro'),
    noun('die', 'Ausstellung', 'Ausstellungen', 'exhibition', 'exposición'),
    noun('die', 'Skulptur', 'Skulpturen', 'sculpture', 'escultura'),
    verb('zeichnen', 'zeichnete', 'gezeichnet', 'haben', 'draw', 'dibujar'),
    verb('gestalten', 'gestaltete', 'gestaltet', 'haben', 'design / create', 'diseñar'),
    adjective('modern', 'moderner', 'am modernsten', 'modern', 'moderno/a'),
    adjective('originell', 'origineller', 'am originellsten', 'original / inventive', 'original')
  ], [
    noun('die', 'Gitarre', 'Gitarren', 'guitar', 'guitarra'),
    noun('das', 'Klavier', 'Klaviere', 'piano', 'piano'),
    noun('das', 'Schlagzeug', 'Schlagzeuge', 'drum kit', 'batería'),
    noun('der', 'Klang', 'Klänge', 'sound / tone', 'sonido'),
    noun('die', 'Band', 'Bands', 'band', 'banda'),
    verb('musizieren', 'musizierte', 'musiziert', 'haben', 'make music', 'hacer música'),
    verb('aufnehmen', 'nahm auf', 'aufgenommen', 'haben', 'record', 'grabar'),
    adjective('akustisch', '—', '—', 'acoustic', 'acústico/a')
  ]),

  ...pair(CATEGORIES.BODY, CATEGORIES.HEALTH, [
    noun('der', 'Kopf', 'Köpfe', 'head', 'cabeza'),
    noun('der', 'Hals', 'Hälse', 'neck / throat', 'cuello / garganta'),
    noun('die', 'Schulter', 'Schultern', 'shoulder', 'hombro'),
    noun('der', 'Rücken', 'Rücken', 'back', 'espalda'),
    noun('der', 'Bauch', 'Bäuche', 'belly / stomach', 'vientre / barriga'),
    noun('das', 'Knie', 'Knie', 'knee', 'rodilla'),
    noun('die', 'Haut', 'Häute', 'skin', 'piel'),
    noun('das', 'Herz', 'Herzen', 'heart', 'corazón'),
    noun('das', 'Blut', null, 'blood', 'sangre'),
    noun('der', 'Schmerz', 'Schmerzen', 'pain', 'dolor'),
    verb('atmen', 'atmete', 'geatmet', 'haben', 'breathe', 'respirar'),
    verb('husten', 'hustete', 'gehustet', 'haben', 'cough', 'toser'),
    verb('sich verletzen', 'verletzte sich', 'verletzt', 'haben', 'injure oneself', 'lesionarse'),
    adjective('gesund', 'gesünder', 'am gesündesten', 'healthy', 'saludable'),
    adjective('krank', 'kränker', 'am kränksten', 'ill / sick', 'enfermo/a')
  ], [
    noun('der', 'Ellbogen', 'Ellbogen', 'elbow', 'codo'),
    noun('das', 'Handgelenk', 'Handgelenke', 'wrist', 'muñeca'),
    noun('die', 'Brust', 'Brüste', 'chest / breast', 'pecho'),
    verb('sich beugen', 'beugte sich', 'gebeugt', 'haben', 'bend', 'inclinarse'),
    verb('heben', 'hob', 'gehoben', 'haben', 'lift / raise', 'levantar'),
    adjective('muskulös', 'muskulöser', 'am muskulösesten', 'muscular', 'musculoso/a'),
    adjective('körperlich', '—', '—', 'physical', 'físico/a')
  ], [
    noun('das', 'Fieber', null, 'fever', 'fiebre'),
    noun('der', 'Husten', null, 'cough', 'tos'),
    noun('die', 'Erkältung', 'Erkältungen', 'cold', 'resfriado'),
    noun('die', 'Tablette', 'Tabletten', 'tablet / pill', 'pastilla'),
    verb('behandeln', 'behandelte', 'behandelt', 'haben', 'treat', 'tratar'),
    verb('sich erholen', 'erholte sich', 'erholt', 'haben', 'recover / rest', 'recuperarse'),
    adjective('ansteckend', 'ansteckender', 'am ansteckendsten', 'contagious', 'contagioso/a'),
    adjective('medizinisch', '—', '—', 'medical', 'médico/a')
  ]),

  ...pair(CATEGORIES.CLOTHING, CATEGORIES.SHOPPING, [
    noun('die', 'Größe', 'Größen', 'size', 'talla'),
    noun('die', 'Umkleidekabine', 'Umkleidekabinen', 'changing room', 'probador'),
    noun('die', 'Kasse', 'Kassen', 'checkout / till', 'caja'),
    noun('der', 'Rabatt', 'Rabatte', 'discount', 'descuento'),
    noun('das', 'Sonderangebot', 'Sonderangebote', 'special offer', 'oferta especial'),
    noun('die', 'Marke', 'Marken', 'brand', 'marca'),
    noun('der', 'Stoff', 'Stoffe', 'fabric', 'tela'),
    noun('die', 'Kundin', 'Kundinnen', 'female customer', 'clienta'),
    noun('der', 'Kunde', 'Kunden', 'customer', 'cliente'),
    verb('an|probieren', 'probierte an', 'anprobiert', 'haben', 'try on', 'probarse'),
    verb('um|tauschen', 'tauschte um', 'umgetauscht', 'haben', 'exchange', 'cambiar'),
    verb('bezahlen', 'bezahlte', 'bezahlt', 'haben', 'pay', 'pagar'),
    adjective('passend', 'passender', 'am passendsten', 'suitable / matching', 'adecuado/a'),
    adjective('günstig', 'günstiger', 'am günstigsten', 'affordable / favourable', 'económico/a'),
    adjective('reduziert', '—', '—', 'reduced / discounted', 'rebajado/a')
  ], [
    noun('das', 'Hemd', 'Hemden', 'shirt', 'camisa'),
    noun('der', 'Rock', 'Röcke', 'skirt', 'falda'),
    noun('die', 'Jacke', 'Jacken', 'jacket', 'chaqueta'),
    noun('die', 'Socke', 'Socken', 'sock', 'calcetín'),
    verb('sich um|ziehen', 'zog sich um', 'umgezogen', 'haben', 'change clothes', 'cambiarse de ropa'),
    adjective('eng', 'enger', 'am engsten', 'tight / narrow', 'ajustado/a'),
    adjective('bequem', 'bequemer', 'am bequemsten', 'comfortable', 'cómodo/a')
  ], [
    noun('die', 'Rechnung', 'Rechnungen', 'invoice / bill', 'factura'),
    noun('die', 'Quittung', 'Quittungen', 'receipt', 'recibo'),
    noun('der', 'Einkaufswagen', 'Einkaufswagen', 'shopping trolley', 'carrito de compras'),
    noun('die', 'Bestellung', 'Bestellungen', 'order', 'pedido'),
    verb('zurück|geben', 'gab zurück', 'zurückgegeben', 'haben', 'return / give back', 'devolver'),
    verb('liefern', 'lieferte', 'geliefert', 'haben', 'deliver', 'entregar'),
    adjective('erhältlich', '—', '—', 'available for purchase', 'disponible'),
    adjective('ausverkauft', '—', '—', 'sold out', 'agotado/a')
  ]),

  ...pair(CATEGORIES.COMMUNICATION, CATEGORIES.LANGUAGE, [
    noun('die', 'Nachricht', 'Nachrichten', 'message / news', 'mensaje / noticia'),
    noun('das', 'Gespräch', 'Gespräche', 'conversation', 'conversación'),
    noun('die', 'Frage', 'Fragen', 'question', 'pregunta'),
    noun('die', 'Antwort', 'Antworten', 'answer', 'respuesta'),
    noun('der', 'Satz', 'Sätze', 'sentence', 'frase'),
    noun('das', 'Wort', 'Wörter', 'word', 'palabra'),
    noun('die', 'Bedeutung', 'Bedeutungen', 'meaning', 'significado'),
    noun('die', 'Aussprache', null, 'pronunciation', 'pronunciación'),
    verb('erklären', 'erklärte', 'erklärt', 'haben', 'explain', 'explicar'),
    verb('wiederholen', 'wiederholte', 'wiederholt', 'haben', 'repeat', 'repetir'),
    verb('übersetzen', 'übersetzte', 'übersetzt', 'haben', 'translate', 'traducir'),
    verb('antworten', 'antwortete', 'geantwortet', 'haben', 'answer', 'responder'),
    adjective('deutlich', 'deutlicher', 'am deutlichsten', 'clear / distinct', 'claro/a'),
    adjective('höflich', 'höflicher', 'am höflichsten', 'polite', 'educado/a'),
    adjective('schriftlich', '—', '—', 'written / in writing', 'escrito/a')
  ], [
    noun('der', 'Anruf', 'Anrufe', 'phone call', 'llamada'),
    noun('die', 'Sprachnachricht', 'Sprachnachrichten', 'voice message', 'mensaje de voz'),
    noun('der', 'Kontakt', 'Kontakte', 'contact', 'contacto'),
    verb('mit|teilen', 'teilte mit', 'mitgeteilt', 'haben', 'inform / communicate', 'comunicar'),
    verb('erwähnen', 'erwähnte', 'erwähnt', 'haben', 'mention', 'mencionar'),
    adjective('direkt', 'direkter', 'am direktesten', 'direct', 'directo/a'),
    adjective('missverständlich', 'missverständlicher', 'am missverständlichsten', 'ambiguous / misleading', 'confuso/a')
  ], [
    noun('die', 'Grammatik', 'Grammatiken', 'grammar', 'gramática'),
    noun('die', 'Vokabel', 'Vokabeln', 'vocabulary word', 'palabra de vocabulario'),
    noun('die', 'Muttersprache', 'Muttersprachen', 'native language', 'lengua materna'),
    noun('die', 'Fremdsprache', 'Fremdsprachen', 'foreign language', 'idioma extranjero'),
    verb('aus|sprechen', 'sprach aus', 'ausgesprochen', 'haben', 'pronounce', 'pronunciar'),
    verb('konjugieren', 'konjugierte', 'konjugiert', 'haben', 'conjugate', 'conjugar'),
    adjective('fließend', 'fließender', 'am fließendsten', 'fluent', 'fluido/a'),
    adjective('zweisprachig', '—', '—', 'bilingual', 'bilingüe')
  ]),

  ...pair(CATEGORIES.DATES, CATEGORIES.TIME, [
    noun('das', 'Datum', 'Daten', 'date', 'fecha'),
    noun('der', 'Kalender', 'Kalender', 'calendar', 'calendario'),
    noun('der', 'Termin', 'Termine', 'appointment', 'cita'),
    noun('die', 'Frist', 'Fristen', 'deadline', 'plazo'),
    noun('der', 'Zeitraum', 'Zeiträume', 'period', 'período'),
    noun('der', 'Anfang', 'Anfänge', 'beginning', 'inicio'),
    noun('das', 'Ende', 'Enden', 'end', 'final'),
    noun('die', 'Dauer', null, 'duration', 'duración'),
    verb('dauern', 'dauerte', 'gedauert', 'haben', 'last / take time', 'durar'),
    verb('verschieben', 'verschob', 'verschoben', 'haben', 'postpone', 'posponer'),
    verb('vereinbaren', 'vereinbarte', 'vereinbart', 'haben', 'arrange / agree', 'acordar'),
    adjective('rechtzeitig', '—', '—', 'in time', 'a tiempo'),
    adjective('pünktlich', 'pünktlicher', 'am pünktlichsten', 'punctual', 'puntual'),
    adjective('monatlich', '—', '—', 'monthly', 'mensual'),
    adjective('jährlich', '—', '—', 'annual', 'anual')
  ], [
    noun('der', 'Geburtstag', 'Geburtstage', 'birthday', 'cumpleaños'),
    noun('der', 'Feiertag', 'Feiertage', 'public holiday', 'día festivo'),
    noun('der', 'Jahrestag', 'Jahrestage', 'anniversary', 'aniversario'),
    verb('datieren', 'datierte', 'datiert', 'haben', 'date', 'fechar'),
    verb('ein|tragen', 'trug ein', 'eingetragen', 'haben', 'enter / record', 'anotar'),
    adjective('zukünftig', '—', '—', 'future', 'futuro/a'),
    adjective('vergangen', '—', '—', 'past', 'pasado/a')
  ], [
    noun('die', 'Sekunde', 'Sekunden', 'second', 'segundo'),
    noun('die', 'Minute', 'Minuten', 'minute', 'minuto'),
    noun('die', 'Stunde', 'Stunden', 'hour', 'hora'),
    noun('die', 'Weile', 'Weilen', 'while', 'rato'),
    verb('sich beeilen', 'beeilte sich', 'beeilt', 'haben', 'hurry', 'darse prisa'),
    verb('warten', 'wartete', 'gewartet', 'haben', 'wait', 'esperar'),
    adjective('frühzeitig', '—', '—', 'early / in good time', 'con antelación'),
    adjective('gleichzeitig', '—', '—', 'simultaneous', 'simultáneo/a')
  ]),

  ...pair(CATEGORIES.DOCUMENTS, CATEGORIES.TECHNOLOGY, [
    noun('die', 'Datei', 'Dateien', 'file', 'archivo'),
    noun('der', 'Ordner', 'Ordner', 'folder', 'carpeta'),
    noun('das', 'Formular', 'Formulare', 'form', 'formulario'),
    noun('das', 'Passwort', 'Passwörter', 'password', 'contraseña'),
    noun('die', 'Kopie', 'Kopien', 'copy', 'copia'),
    noun('der', 'Drucker', 'Drucker', 'printer', 'impresora'),
    noun('der', 'Bildschirm', 'Bildschirme', 'screen', 'pantalla'),
    noun('die', 'Tastatur', 'Tastaturen', 'keyboard', 'teclado'),
    verb('speichern', 'speicherte', 'gespeichert', 'haben', 'save', 'guardar'),
    verb('herunter|laden', 'lud herunter', 'heruntergeladen', 'haben', 'download', 'descargar'),
    verb('hoch|laden', 'lud hoch', 'hochgeladen', 'haben', 'upload', 'subir'),
    verb('aus|drucken', 'druckte aus', 'ausgedruckt', 'haben', 'print', 'imprimir'),
    adjective('digital', '—', '—', 'digital', 'digital'),
    adjective('elektronisch', '—', '—', 'electronic', 'electrónico/a'),
    adjective('gültig', 'gültiger', 'am gültigsten', 'valid', 'válido/a')
  ], [
    noun('der', 'Vertrag', 'Verträge', 'contract', 'contrato'),
    noun('die', 'Unterschrift', 'Unterschriften', 'signature', 'firma'),
    noun('der', 'Antrag', 'Anträge', 'application / request', 'solicitud'),
    verb('unterschreiben', 'unterschrieb', 'unterschrieben', 'haben', 'sign', 'firmar'),
    verb('beantragen', 'beantragte', 'beantragt', 'haben', 'apply for', 'solicitar'),
    adjective('offiziell', '—', '—', 'official', 'oficial'),
    adjective('vertraulich', 'vertraulicher', 'am vertraulichsten', 'confidential', 'confidencial')
  ], [
    noun('die', 'Software', null, 'software', 'software'),
    noun('das', 'Netzwerk', 'Netzwerke', 'network', 'red'),
    noun('das', 'Gerät', 'Geräte', 'device', 'dispositivo'),
    noun('der', 'Akku', 'Akkus', 'rechargeable battery', 'batería'),
    verb('installieren', 'installierte', 'installiert', 'haben', 'install', 'instalar'),
    verb('aktualisieren', 'aktualisierte', 'aktualisiert', 'haben', 'update', 'actualizar'),
    adjective('kabellos', '—', '—', 'wireless', 'inalámbrico/a'),
    adjective('automatisch', '—', '—', 'automatic', 'automático/a')
  ]),

  ...pair(CATEGORIES.DRINK, CATEGORIES.FOOD, [
    noun('das', 'Gericht', 'Gerichte', 'dish', 'plato'),
    noun('die', 'Zutat', 'Zutaten', 'ingredient', 'ingrediente'),
    noun('der', 'Geschmack', 'Geschmäcker', 'taste / flavour', 'sabor'),
    noun('der', 'Hunger', null, 'hunger', 'hambre'),
    noun('der', 'Durst', null, 'thirst', 'sed'),
    noun('die', 'Mahlzeit', 'Mahlzeiten', 'meal', 'comida'),
    noun('die', 'Speisekarte', 'Speisekarten', 'menu', 'carta'),
    noun('das', 'Rezept', 'Rezepte', 'recipe', 'receta'),
    verb('kochen', 'kochte', 'gekocht', 'haben', 'cook', 'cocinar'),
    verb('bestellen', 'bestellte', 'bestellt', 'haben', 'order', 'pedir'),
    verb('probieren', 'probierte', 'probiert', 'haben', 'try / taste', 'probar'),
    verb('servieren', 'servierte', 'serviert', 'haben', 'serve', 'servir'),
    adjective('lecker', 'leckerer', 'am leckersten', 'tasty', 'sabroso/a'),
    adjective('frisch', 'frischer', 'am frischesten', 'fresh', 'fresco/a'),
    adjective('vegetarisch', '—', '—', 'vegetarian', 'vegetariano/a')
  ], [
    noun('das', 'Mineralwasser', null, 'mineral water', 'agua mineral'),
    noun('die', 'Limonade', 'Limonaden', 'lemonade / soft drink', 'limonada'),
    noun('der', 'Smoothie', 'Smoothies', 'smoothie', 'batido'),
    verb('ein|schenken', 'schenkte ein', 'eingeschenkt', 'haben', 'pour', 'servir una bebida'),
    verb('schlucken', 'schluckte', 'geschluckt', 'haben', 'swallow', 'tragar'),
    adjective('alkoholfrei', '—', '—', 'alcohol-free', 'sin alcohol'),
    adjective('durstig', 'durstiger', 'am durstigsten', 'thirsty', 'sediento/a')
  ], [
    noun('die', 'Nudel', 'Nudeln', 'noodle / pasta', 'pasta'),
    noun('das', 'Mehl', null, 'flour', 'harina'),
    noun('das', 'Öl', 'Öle', 'oil', 'aceite'),
    noun('das', 'Salz', 'Salze', 'salt', 'sal'),
    verb('braten', 'briet', 'gebraten', 'haben', 'fry / roast', 'freír / asar'),
    verb('würzen', 'würzte', 'gewürzt', 'haben', 'season', 'condimentar'),
    adjective('knusprig', 'knuspriger', 'am knusprigsten', 'crispy', 'crujiente'),
    adjective('roh', 'roher', 'am rohesten', 'raw', 'crudo/a')
  ]),

  ...pair(CATEGORIES.EDUCATION, CATEGORIES.WORK, [
    noun('die', 'Aufgabe', 'Aufgaben', 'task / exercise', 'tarea'),
    noun('die', 'Prüfung', 'Prüfungen', 'exam', 'examen'),
    noun('der', 'Kurs', 'Kurse', 'course', 'curso'),
    noun('die', 'Erfahrung', 'Erfahrungen', 'experience', 'experiencia'),
    noun('die', 'Fähigkeit', 'Fähigkeiten', 'skill / ability', 'habilidad'),
    noun('das', 'Ziel', 'Ziele', 'goal', 'objetivo'),
    noun('das', 'Ergebnis', 'Ergebnisse', 'result', 'resultado'),
    noun('das', 'Projekt', 'Projekte', 'project', 'proyecto'),
    verb('lernen', 'lernte', 'gelernt', 'haben', 'learn / study', 'aprender / estudiar'),
    verb('üben', 'übte', 'geübt', 'haben', 'practise', 'practicar'),
    verb('vor|bereiten', 'bereitete vor', 'vorbereitet', 'haben', 'prepare', 'preparar'),
    verb('verbessern', 'verbesserte', 'verbessert', 'haben', 'improve', 'mejorar'),
    adjective('erfolgreich', 'erfolgreicher', 'am erfolgreichsten', 'successful', 'exitoso/a'),
    adjective('fleißig', 'fleißiger', 'am fleißigsten', 'hard-working', 'aplicado/a'),
    adjective('verantwortlich', 'verantwortlicher', 'am verantwortlichsten', 'responsible', 'responsable')
  ], [
    noun('die', 'Hausaufgabe', 'Hausaufgaben', 'homework assignment', 'tarea'),
    noun('der', 'Unterricht', null, 'lesson / instruction', 'clase'),
    noun('das', 'Zeugnis', 'Zeugnisse', 'school report / certificate', 'boletín / certificado'),
    verb('bestehen', 'bestand', 'bestanden', 'haben', 'pass / exist', 'aprobar / existir'),
    verb('sich melden', 'meldete sich', 'gemeldet', 'haben', 'raise one’s hand / report', 'levantar la mano / avisar'),
    adjective('mündlich', '—', '—', 'oral', 'oral'),
    adjective('akademisch', '—', '—', 'academic', 'académico/a')
  ], [
    noun('der', 'Arbeitsplatz', 'Arbeitsplätze', 'workplace', 'lugar de trabajo'),
    noun('die', 'Bewerbung', 'Bewerbungen', 'job application', 'solicitud de empleo'),
    noun('das', 'Gehalt', 'Gehälter', 'salary', 'sueldo'),
    noun('die', 'Schicht', 'Schichten', 'shift', 'turno'),
    verb('sich bewerben', 'bewarb sich', 'beworben', 'haben', 'apply', 'postularse'),
    verb('kündigen', 'kündigte', 'gekündigt', 'haben', 'resign / terminate', 'renunciar / cancelar'),
    adjective('beruflich', '—', '—', 'professional / work-related', 'profesional'),
    adjective('selbstständig', '—', '—', 'self-employed / independent', 'autónomo/a')
  ]),

  ...pair(CATEGORIES.FAMILY, CATEGORIES.PEOPLE, [
    noun('die', 'Beziehung', 'Beziehungen', 'relationship', 'relación'),
    noun('der', 'Partner', 'Partner', 'partner', 'pareja'),
    noun('das', 'Kind', 'Kinder', 'child', 'niño/a'),
    noun('die', 'Eltern', null, 'parents', 'padres'),
    noun('der', 'Verwandte', 'Verwandten', 'relative', 'pariente'),
    noun('die', 'Hochzeit', 'Hochzeiten', 'wedding', 'boda'),
    noun('die', 'Geburt', 'Geburten', 'birth', 'nacimiento'),
    noun('der', 'Nachbar', 'Nachbarn', 'neighbour', 'vecino'),
    verb('heiraten', 'heiratete', 'geheiratet', 'haben', 'marry', 'casarse'),
    verb('sich kümmern', 'kümmerte sich', 'gekümmert', 'haben', 'take care of', 'cuidar de'),
    verb('besuchen', 'besuchte', 'besucht', 'haben', 'visit', 'visitar'),
    verb('kennenlernen', 'lernte kennen', 'kennengelernt', 'haben', 'get to know', 'conocer'),
    adjective('freundlich', 'freundlicher', 'am freundlichsten', 'friendly', 'amable'),
    adjective('ledig', '—', '—', 'single / unmarried', 'soltero/a'),
    adjective('verheiratet', '—', '—', 'married', 'casado/a')
  ], [
    noun('der', 'Cousin', 'Cousins', 'male cousin', 'primo'),
    noun('die', 'Cousine', 'Cousinen', 'female cousin', 'prima'),
    noun('die', 'Schwiegermutter', 'Schwiegermütter', 'mother-in-law', 'suegra'),
    verb('erziehen', 'erzog', 'erzogen', 'haben', 'raise / educate', 'criar / educar'),
    verb('auf|wachsen', 'wuchs auf', 'aufgewachsen', 'sein', 'grow up', 'crecer'),
    adjective('familiär', '—', '—', 'family-related / familiar', 'familiar'),
    adjective('kinderlos', '—', '—', 'childless', 'sin hijos')
  ], [
    noun('der', 'Erwachsene', 'Erwachsenen', 'adult', 'adulto/a'),
    noun('der', 'Jugendliche', 'Jugendlichen', 'young person', 'joven'),
    noun('der', 'Fremde', 'Fremden', 'stranger', 'desconocido/a'),
    noun('der', 'Bekannte', 'Bekannten', 'acquaintance', 'conocido/a'),
    verb('sich vor|stellen', 'stellte sich vor', 'vorgestellt', 'haben', 'introduce oneself', 'presentarse'),
    verb('begrüßen', 'begrüßte', 'begrüßt', 'haben', 'greet', 'saludar'),
    adjective('hilfsbereit', 'hilfsbereiter', 'am hilfsbereitesten', 'helpful', 'servicial'),
    adjective('respektvoll', 'respektvoller', 'am respektvollsten', 'respectful', 'respetuoso/a')
  ]),

  ...pair(CATEGORIES.HOUSEHOLD, CATEGORIES.KITCHEN, [
    noun('der', 'Haushalt', 'Haushalte', 'household', 'hogar'),
    noun('das', 'Geschirr', null, 'dishes / crockery', 'vajilla'),
    noun('der', 'Kühlschrank', 'Kühlschränke', 'fridge', 'nevera'),
    noun('der', 'Herd', 'Herde', 'stove', 'cocina'),
    noun('der', 'Ofen', 'Öfen', 'oven', 'horno'),
    noun('die', 'Spüle', 'Spülen', 'sink', 'fregadero'),
    noun('die', 'Waschmaschine', 'Waschmaschinen', 'washing machine', 'lavadora'),
    noun('der', 'Müll', null, 'rubbish', 'basura'),
    verb('auf|räumen', 'räumte auf', 'aufgeräumt', 'haben', 'tidy up', 'ordenar'),
    verb('putzen', 'putzte', 'geputzt', 'haben', 'clean', 'limpiar'),
    verb('waschen', 'wusch', 'gewaschen', 'haben', 'wash', 'lavar'),
    verb('ab|waschen', 'wusch ab', 'abgewaschen', 'haben', 'wash up', 'lavar los platos'),
    adjective('sauber', 'sauberer', 'am saubersten', 'clean', 'limpio/a'),
    adjective('schmutzig', 'schmutziger', 'am schmutzigsten', 'dirty', 'sucio/a'),
    adjective('ordentlich', 'ordentlicher', 'am ordentlichsten', 'tidy / orderly', 'ordenado/a')
  ], [
    noun('die', 'Miete', 'Mieten', 'rent', 'alquiler'),
    noun('der', 'Schlüssel', 'Schlüssel', 'key', 'llave'),
    noun('die', 'Heizung', 'Heizungen', 'heating', 'calefacción'),
    verb('ein|richten', 'richtete ein', 'eingerichtet', 'haben', 'furnish / set up', 'amueblar / configurar'),
    verb('reparieren', 'reparierte', 'repariert', 'haben', 'repair', 'reparar'),
    adjective('gemütlich', 'gemütlicher', 'am gemütlichsten', 'cosy', 'acogedor/a'),
    adjective('möbliert', '—', '—', 'furnished', 'amueblado/a')
  ], [
    noun('das', 'Schneidebrett', 'Schneidebretter', 'chopping board', 'tabla de cortar'),
    noun('der', 'Kochlöffel', 'Kochlöffel', 'wooden spoon', 'cuchara de cocina'),
    noun('das', 'Sieb', 'Siebe', 'sieve / strainer', 'colador'),
    noun('der', 'Wasserkocher', 'Wasserkocher', 'kettle', 'hervidor'),
    verb('schälen', 'schälte', 'geschält', 'haben', 'peel', 'pelar'),
    verb('um|rühren', 'rührte um', 'umgerührt', 'haben', 'stir', 'remover'),
    adjective('scharf', 'schärfer', 'am schärfsten', 'spicy / sharp', 'picante / afilado'),
    adjective('gar', '—', '—', 'cooked / done', 'cocido/a')
  ]),

  ...pair(CATEGORIES.LEISURE, CATEGORIES.SPORTS, [
    noun('das', 'Hobby', 'Hobbys', 'hobby', 'afición'),
    noun('die', 'Freizeit', null, 'free time', 'tiempo libre'),
    noun('der', 'Verein', 'Vereine', 'club / association', 'club / asociación'),
    noun('das', 'Training', 'Trainings', 'training', 'entrenamiento'),
    noun('die', 'Mannschaft', 'Mannschaften', 'team', 'equipo'),
    noun('der', 'Wettbewerb', 'Wettbewerbe', 'competition', 'competición'),
    noun('der', 'Ausflug', 'Ausflüge', 'outing / excursion', 'excursión'),
    noun('das', 'Spiel', 'Spiele', 'game', 'juego / partido'),
    verb('trainieren', 'trainierte', 'trainiert', 'haben', 'train', 'entrenar'),
    verb('teil|nehmen', 'nahm teil', 'teilgenommen', 'haben', 'participate', 'participar'),
    verb('gewinnen', 'gewann', 'gewonnen', 'haben', 'win', 'ganar'),
    verb('sich entspannen', 'entspannte sich', 'entspannt', 'haben', 'relax', 'relajarse'),
    adjective('aktiv', 'aktiver', 'am aktivsten', 'active', 'activo/a'),
    adjective('fit', 'fitter', 'am fittesten', 'fit', 'en forma'),
    adjective('spannend', 'spannender', 'am spannendsten', 'exciting', 'emocionante')
  ], [
    noun('das', 'Brettspiel', 'Brettspiele', 'board game', 'juego de mesa'),
    noun('das', 'Kino', 'Kinos', 'cinema', 'cine'),
    noun('die', 'Party', 'Partys', 'party', 'fiesta'),
    verb('sich aus|ruhen', 'ruhte sich aus', 'ausgeruht', 'haben', 'rest', 'descansar'),
    verb('sammeln', 'sammelte', 'gesammelt', 'haben', 'collect', 'coleccionar'),
    adjective('unterhaltsam', 'unterhaltsamer', 'am unterhaltsamsten', 'entertaining', 'entretenido/a'),
    adjective('gemütlich', 'gemütlicher', 'am gemütlichsten', 'cosy / relaxed', 'acogedor/a')
  ], [
    noun('das', 'Turnier', 'Turniere', 'tournament', 'torneo'),
    noun('der', 'Schläger', 'Schläger', 'racket / bat', 'raqueta / bate'),
    noun('das', 'Tor', 'Tore', 'goal', 'gol / portería'),
    noun('der', 'Punkt', 'Punkte', 'point', 'punto'),
    verb('werfen', 'warf', 'geworfen', 'haben', 'throw', 'lanzar'),
    verb('treten', 'trat', 'getreten', 'haben', 'kick / step', 'patear / pisar'),
    adjective('sportlich', 'sportlicher', 'am sportlichsten', 'sporty / athletic', 'deportivo/a'),
    adjective('fair', 'fairer', 'am fairsten', 'fair', 'justo/a')
  ]),

  ...pair(CATEGORIES.LOCATIONS, CATEGORIES.TRAVEL, [
    noun('das', 'Ziel', 'Ziele', 'destination / goal', 'destino / objetivo'),
    noun('der', 'Weg', 'Wege', 'way / path', 'camino'),
    noun('die', 'Unterkunft', 'Unterkünfte', 'accommodation', 'alojamiento'),
    noun('das', 'Hotel', 'Hotels', 'hotel', 'hotel'),
    noun('der', 'Bahnhof', 'Bahnhöfe', 'railway station', 'estación de tren'),
    noun('der', 'Flughafen', 'Flughäfen', 'airport', 'aeropuerto'),
    noun('das', 'Zentrum', 'Zentren', 'centre', 'centro'),
    noun('die', 'Adresse', 'Adressen', 'address', 'dirección'),
    verb('an|kommen', 'kam an', 'angekommen', 'sein', 'arrive', 'llegar'),
    verb('ab|reisen', 'reiste ab', 'abgereist', 'sein', 'depart / leave', 'partir'),
    verb('übernachten', 'übernachtete', 'übernachtet', 'haben', 'stay overnight', 'pasar la noche'),
    verb('sich verirren', 'verirrte sich', 'verirrt', 'haben', 'get lost', 'perderse'),
    adjective('zentral', 'zentraler', 'am zentralsten', 'central', 'céntrico/a'),
    adjective('entfernt', 'weiter entfernt', 'am weitesten entfernt', 'distant', 'lejano/a'),
    adjective('unterwegs', '—', '—', 'on the way', 'de camino')
  ], [
    noun('das', 'Rathaus', 'Rathäuser', 'town hall', 'ayuntamiento'),
    noun('die', 'Apotheke', 'Apotheken', 'pharmacy', 'farmacia'),
    noun('die', 'Bäckerei', 'Bäckereien', 'bakery', 'panadería'),
    verb('sich befinden', 'befand sich', 'befunden', 'haben', 'be located', 'encontrarse'),
    verb('liegen', 'lag', 'gelegen', 'haben', 'lie / be located', 'estar situado'),
    adjective('öffentlich', '—', '—', 'public', 'público/a'),
    adjective('nahe', 'näher', 'am nächsten', 'near', 'cercano/a')
  ], [
    noun('die', 'Fahrkarte', 'Fahrkarten', 'ticket', 'billete'),
    noun('das', 'Gepäck', null, 'luggage', 'equipaje'),
    noun('der', 'Reisepass', 'Reisepässe', 'passport', 'pasaporte'),
    noun('die', 'Verspätung', 'Verspätungen', 'delay', 'retraso'),
    verb('buchen', 'buchte', 'gebucht', 'haben', 'book', 'reservar'),
    verb('ein|packen', 'packte ein', 'eingepackt', 'haben', 'pack', 'empacar'),
    adjective('ausländisch', '—', '—', 'foreign', 'extranjero/a'),
    adjective('sehenswert', 'sehenswerter', 'am sehenswertesten', 'worth seeing', 'digno/a de ver')
  ]),

  ...pair(CATEGORIES.MEASUREMENTS, CATEGORIES.NUMBERS, [
    noun('die', 'Länge', 'Längen', 'length', 'longitud'),
    noun('die', 'Breite', 'Breiten', 'width', 'anchura'),
    noun('die', 'Höhe', 'Höhen', 'height', 'altura'),
    noun('das', 'Gewicht', 'Gewichte', 'weight', 'peso'),
    noun('die', 'Menge', 'Mengen', 'quantity', 'cantidad'),
    noun('die', 'Hälfte', 'Hälften', 'half', 'mitad'),
    noun('das', 'Viertel', 'Viertel', 'quarter', 'cuarto'),
    noun('das', 'Prozent', 'Prozent', 'percent', 'porcentaje'),
    verb('messen', 'maß', 'gemessen', 'haben', 'measure', 'medir'),
    verb('wiegen', 'wog', 'gewogen', 'haben', 'weigh', 'pesar'),
    verb('zählen', 'zählte', 'gezählt', 'haben', 'count', 'contar'),
    verb('berechnen', 'berechnete', 'berechnet', 'haben', 'calculate', 'calcular'),
    adjective('genau', 'genauer', 'am genauesten', 'exact', 'exacto/a'),
    adjective('ungefähr', '—', '—', 'approximate', 'aproximado/a'),
    adjective('doppelt', '—', '—', 'double', 'doble')
  ], [
    noun('der', 'Zentimeter', 'Zentimeter', 'centimetre', 'centímetro'),
    noun('der', 'Kilometer', 'Kilometer', 'kilometre', 'kilómetro'),
    noun('der', 'Liter', 'Liter', 'litre', 'litro'),
    verb('schätzen', 'schätzte', 'geschätzt', 'haben', 'estimate', 'estimar'),
    verb('vergleichen', 'verglich', 'verglichen', 'haben', 'compare', 'comparar'),
    adjective('schwer', 'schwerer', 'am schwersten', 'heavy / difficult', 'pesado/a / difícil'),
    adjective('leicht', 'leichter', 'am leichtesten', 'light / easy', 'ligero/a / fácil')
  ], [
    noun('die', 'Summe', 'Summen', 'sum', 'suma'),
    noun('der', 'Durchschnitt', 'Durchschnitte', 'average', 'promedio'),
    noun('die', 'Reihenfolge', 'Reihenfolgen', 'order / sequence', 'orden / secuencia'),
    noun('die', 'Nummer', 'Nummern', 'number', 'número'),
    verb('addieren', 'addierte', 'addiert', 'haben', 'add', 'sumar'),
    verb('teilen', 'teilte', 'geteilt', 'haben', 'divide / share', 'dividir / compartir'),
    adjective('gerade', '—', '—', 'even / straight', 'par / recto/a'),
    adjective('ungerade', '—', '—', 'odd', 'impar')
  ]),

  ...pair(CATEGORIES.NATURE, CATEGORIES.WEATHER, [
    noun('die', 'Sonne', 'Sonnen', 'sun', 'sol'),
    noun('der', 'Regen', null, 'rain', 'lluvia'),
    noun('der', 'Wind', 'Winde', 'wind', 'viento'),
    noun('die', 'Wolke', 'Wolken', 'cloud', 'nube'),
    noun('der', 'Himmel', 'Himmel', 'sky', 'cielo'),
    noun('die', 'Temperatur', 'Temperaturen', 'temperature', 'temperatura'),
    noun('die', 'Jahreszeit', 'Jahreszeiten', 'season', 'estación del año'),
    noun('die', 'Landschaft', 'Landschaften', 'landscape', 'paisaje'),
    verb('regnen', 'regnete', 'geregnet', 'haben', 'rain', 'llover'),
    verb('schneien', 'schneite', 'geschneit', 'haben', 'snow', 'nevar'),
    verb('wehen', 'wehte', 'geweht', 'haben', 'blow', 'soplar'),
    verb('frieren', 'fror', 'gefroren', 'haben', 'freeze / feel cold', 'congelarse / tener frío'),
    adjective('sonnig', 'sonniger', 'am sonnigsten', 'sunny', 'soleado/a'),
    adjective('bewölkt', 'bewölkter', 'am bewölktesten', 'cloudy', 'nublado/a'),
    adjective('feucht', 'feuchter', 'am feuchtesten', 'damp / humid', 'húmedo/a')
  ], [
    noun('der', 'Wald', 'Wälder', 'forest', 'bosque'),
    noun('die', 'Wiese', 'Wiesen', 'meadow', 'prado'),
    noun('der', 'Berg', 'Berge', 'mountain', 'montaña'),
    verb('wachsen', 'wuchs', 'gewachsen', 'sein', 'grow', 'crecer'),
    verb('pflanzen', 'pflanzte', 'gepflanzt', 'haben', 'plant', 'plantar'),
    adjective('natürlich', 'natürlicher', 'am natürlichsten', 'natural', 'natural'),
    adjective('wild', 'wilder', 'am wildesten', 'wild', 'silvestre / salvaje')
  ], [
    noun('das', 'Gewitter', 'Gewitter', 'thunderstorm', 'tormenta'),
    noun('der', 'Sturm', 'Stürme', 'storm', 'tormenta / vendaval'),
    noun('der', 'Nebel', null, 'fog', 'niebla'),
    noun('der', 'Frost', 'Fröste', 'frost', 'helada'),
    verb('sich auf|klaren', 'klarte sich auf', 'aufgeklart', 'haben', 'clear up', 'despejarse'),
    verb('ab|kühlen', 'kühlte ab', 'abgekühlt', 'haben', 'cool down', 'enfriarse'),
    adjective('stürmisch', 'stürmischer', 'am stürmischsten', 'stormy', 'tormentoso/a'),
    adjective('neblig', 'nebliger', 'am nebligsten', 'foggy', 'con niebla')
  ]),

  ...pair(CATEGORIES.MONEY, CATEGORIES.PERSONAL_INFO, [
    noun('das', 'Konto', 'Konten', 'account', 'cuenta'),
    noun('die', 'Bank', 'Banken', 'bank', 'banco'),
    noun('die', 'Adresse', 'Adressen', 'address', 'dirección'),
    noun('der', 'Name', 'Namen', 'name', 'nombre'),
    noun('das', 'Einkommen', 'Einkommen', 'income', 'ingresos'),
    noun('die', 'Ausgabe', 'Ausgaben', 'expense', 'gasto'),
    noun('die', 'Steuer', 'Steuern', 'tax', 'impuesto'),
    noun('die', 'Versicherung', 'Versicherungen', 'insurance', 'seguro'),
    verb('bezahlen', 'bezahlte', 'bezahlt', 'haben', 'pay', 'pagar'),
    verb('überweisen', 'überwies', 'überwiesen', 'haben', 'transfer money', 'transferir'),
    verb('sparen', 'sparte', 'gespart', 'haben', 'save money', 'ahorrar'),
    verb('verdienen', 'verdiente', 'verdient', 'haben', 'earn', 'ganar'),
    adjective('persönlich', 'persönlicher', 'am persönlichsten', 'personal', 'personal'),
    adjective('finanziell', '—', '—', 'financial', 'financiero/a'),
    adjective('privat', 'privater', 'am privatesten', 'private', 'privado/a')
  ], [
    noun('das', 'Bargeld', null, 'cash', 'efectivo'),
    noun('die', 'Münze', 'Münzen', 'coin', 'moneda'),
    noun('der', 'Schein', 'Scheine', 'banknote / bill', 'billete'),
    verb('kosten', 'kostete', 'gekostet', 'haben', 'cost', 'costar'),
    verb('leihen', 'lieh', 'geliehen', 'haben', 'lend / borrow', 'prestar / pedir prestado'),
    adjective('kostenlos', '—', '—', 'free of charge', 'gratis'),
    adjective('teuer', 'teurer', 'am teuersten', 'expensive', 'caro/a')
  ], [
    noun('der', 'Geburtsort', 'Geburtsorte', 'place of birth', 'lugar de nacimiento'),
    noun('die', 'Staatsangehörigkeit', 'Staatsangehörigkeiten', 'nationality', 'nacionalidad'),
    noun('der', 'Familienstand', null, 'marital status', 'estado civil'),
    noun('die', 'Unterschrift', 'Unterschriften', 'signature', 'firma'),
    verb('buchstabieren', 'buchstabierte', 'buchstabiert', 'haben', 'spell', 'deletrear'),
    verb('an|geben', 'gab an', 'angegeben', 'haben', 'state / provide', 'indicar'),
    adjective('männlich', '—', '—', 'male', 'masculino'),
    adjective('weiblich', '—', '—', 'female', 'femenino')
  ]),

  ...pair(CATEGORIES.PROFESSIONS, CATEGORIES.TRANSPORTATION, [
    noun('der', 'Fahrer', 'Fahrer', 'driver', 'conductor'),
    noun('der', 'Pilot', 'Piloten', 'pilot', 'piloto'),
    noun('der', 'Mechaniker', 'Mechaniker', 'mechanic', 'mecánico'),
    noun('die', 'Logistik', null, 'logistics', 'logística'),
    noun('die', 'Lieferung', 'Lieferungen', 'delivery', 'entrega'),
    noun('das', 'Fahrzeug', 'Fahrzeuge', 'vehicle', 'vehículo'),
    noun('die', 'Werkstatt', 'Werkstätten', 'workshop / garage', 'taller'),
    noun('der', 'Verkehr', null, 'traffic / transport', 'tráfico'),
    verb('fahren', 'fuhr', 'gefahren', 'sein', 'drive / travel', 'conducir / viajar'),
    verb('transportieren', 'transportierte', 'transportiert', 'haben', 'transport', 'transportar'),
    verb('liefern', 'lieferte', 'geliefert', 'haben', 'deliver', 'entregar'),
    verb('reparieren', 'reparierte', 'repariert', 'haben', 'repair', 'reparar'),
    adjective('beruflich', '—', '—', 'professional / work-related', 'profesional'),
    adjective('mobil', 'mobiler', 'am mobilsten', 'mobile', 'móvil'),
    adjective('zuverlässig', 'zuverlässiger', 'am zuverlässigsten', 'reliable', 'fiable')
  ], [
    noun('der', 'Architekt', 'Architekten', 'architect', 'arquitecto'),
    noun('der', 'Anwalt', 'Anwälte', 'lawyer', 'abogado'),
    noun('der', 'Apotheker', 'Apotheker', 'pharmacist', 'farmacéutico'),
    verb('ein|stellen', 'stellte ein', 'eingestellt', 'haben', 'hire', 'contratar'),
    verb('entlassen', 'entließ', 'entlassen', 'haben', 'dismiss / fire', 'despedir'),
    adjective('qualifiziert', 'qualifizierter', 'am qualifiziertesten', 'qualified', 'cualificado/a'),
    adjective('erfahren', 'erfahrener', 'am erfahrensten', 'experienced', 'experimentado/a')
  ], [
    noun('die', 'U-Bahn', 'U-Bahnen', 'underground / subway', 'metro'),
    noun('die', 'Straßenbahn', 'Straßenbahnen', 'tram', 'tranvía'),
    noun('die', 'Haltestelle', 'Haltestellen', 'stop / station', 'parada'),
    noun('die', 'Kreuzung', 'Kreuzungen', 'intersection', 'cruce'),
    verb('um|steigen', 'stieg um', 'umgestiegen', 'sein', 'change trains / transfer', 'hacer transbordo'),
    verb('bremsen', 'bremste', 'gebremst', 'haben', 'brake', 'frenar'),
    adjective('voll', 'voller', 'am vollsten', 'full / crowded', 'lleno/a'),
    adjective('leer', 'leerer', 'am leersten', 'empty', 'vacío/a')
  ])
]

const definitionKey = (definition: EssentialDefinition) => {
  const german = definition.type === 'noun'
    ? definition.singular
    : definition.type === 'verb'
      ? definition.infinitive
      : definition.adjective

  return `${definition.type}:${german.replaceAll('|', '').toLocaleLowerCase('de-DE')}`
}

const mergedDefinitions = Array.from(
  definitions.reduce((entries, definition) => {
    const key = definitionKey(definition)
    const current = entries.get(key)

    entries.set(key, current
      ? {
        ...current,
        categories: Array.from(new Set([...current.categories, ...definition.categories]))
      }
      : definition)

    return entries
  }, new Map<string, EssentialDefinition>()).values()
)

const slugify = (value: string) => value
  .replaceAll('|', '')
  .toLocaleLowerCase('de-DE')
  .replaceAll('ä', 'ae')
  .replaceAll('ö', 'oe')
  .replaceAll('ü', 'ue')
  .replaceAll('ß', 'ss')
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-|-$/g, '')

export const essentialNouns: GermanNoun[] = mergedDefinitions
  .filter((definition): definition is NounDefinition => definition.type === 'noun')
  .map((definition) => ({
    id: `essential-noun-${slugify(definition.singular)}`,
    type: 'noun',
    article: definition.article,
    value: definition.singular,
    singular_id: null,
    plural_id: null,
    plural: definition.plural,
    translations: {
      en: definition.en,
      es: definition.es
    },
    translationArticles: {
      en: 'the',
      es: null
    },
    levels: ['A1–A2'],
    categories: definition.categories
  }))

export const essentialVerbs: GermanVerb[] = mergedDefinitions
  .filter((definition): definition is VerbDefinition => definition.type === 'verb')
  .map((definition) => ({
    id: `essential-verb-${slugify(definition.infinitive)}`,
    type: 'verb',
    infinitive: definition.infinitive,
    preteritum: definition.preteritum,
    perfekt: definition.perfekt,
    auxiliary: definition.auxiliary,
    translations: {
      en: definition.en,
      es: definition.es
    },
    levels: ['A1–A2'],
    categories: definition.categories
  }))

export const essentialAdjectives: GermanAdjective[] = mergedDefinitions
  .filter((definition): definition is AdjectiveDefinition => definition.type === 'adjective')
  .map((definition) => ({
    id: `essential-adjective-${slugify(definition.adjective)}`,
    type: 'adjective',
    adjective: definition.adjective,
    comparative: definition.comparative,
    superlative: definition.superlative,
    translations: {
      en: definition.en,
      es: definition.es
    },
    levels: ['A1–A2'],
    categories: definition.categories
  }))

export const essentialVocabulary: VocabularyEntry[] = mergedDefinitions.map((definition) => {
  if (definition.type === 'noun') {
    return {
      id: `essential-vocabulary-noun-${slugify(definition.singular)}`,
      german: `${definition.article} ${definition.singular}`,
      kind: 'Sustantivo',
      lesson: 'Essential vocabulary',
      level: 'A1–A2',
      page: null,
      sheet: null,
      forms: definition.plural ? `die ${definition.plural}` : null,
      translations: {
        en: definition.en,
        es: definition.es
      },
      example: null
    }
  }

  if (definition.type === 'verb') {
    return {
      id: `essential-vocabulary-verb-${slugify(definition.infinitive)}`,
      german: definition.infinitive.replaceAll('|', ''),
      kind: 'Verbo',
      lesson: 'Essential vocabulary',
      level: 'A1–A2',
      page: null,
      sheet: null,
      forms: `Präteritum: ${definition.preteritum}; Perfekt: ${definition.auxiliary} ${definition.perfekt}`,
      translations: {
        en: definition.en,
        es: definition.es
      },
      example: null
    }
  }

  return {
    id: `essential-vocabulary-adjective-${slugify(definition.adjective)}`,
    german: definition.adjective,
    kind: 'Adjetivo',
    lesson: 'Essential vocabulary',
    level: 'A1–A2',
    page: null,
    sheet: null,
    forms: `Komparativ: ${definition.comparative}; Superlativ: ${definition.superlative}`,
    translations: {
      en: definition.en,
      es: definition.es
    },
    example: null
  }
})

const normalize = (value: string) => value
  .replaceAll('|', '')
  .trim()
  .toLocaleLowerCase('de-DE')

const mergeCategories = (current: Category[], additional: Category[]) =>
  Array.from(new Set([...current, ...additional]))

export const mergeEssentialNouns = (base: GermanNoun[]): GermanNoun[] => {
  const essentialsByValue = new Map(essentialNouns.map(item => [normalize(item.value), item]))
  const baseValues = new Set(base.map(item => normalize(item.value)))

  return [
    ...base.map(item => {
      const essential = essentialsByValue.get(normalize(item.value))
      return essential ? {
        ...item,
        categories: mergeCategories(item.categories, essential.categories)
      } : item
    }),
    ...essentialNouns.filter(item => !baseValues.has(normalize(item.value)))
  ]
}

export const mergeEssentialVerbs = (base: GermanVerb[]): GermanVerb[] => {
  const essentialsByValue = new Map(essentialVerbs.map(item => [normalize(item.infinitive), item]))
  const baseValues = new Set(base.map(item => normalize(item.infinitive)))

  return [
    ...base.map(item => {
      const essential = essentialsByValue.get(normalize(item.infinitive))
      return essential ? {
        ...item,
        categories: mergeCategories(item.categories, essential.categories)
      } : item
    }),
    ...essentialVerbs.filter(item => !baseValues.has(normalize(item.infinitive)))
  ]
}

export const mergeEssentialAdjectives = (base: GermanAdjective[]): GermanAdjective[] => {
  const essentialsByValue = new Map(essentialAdjectives.map(item => [normalize(item.adjective), item]))
  const baseValues = new Set(base.map(item => normalize(item.adjective)))

  return [
    ...base.map(item => {
      const essential = essentialsByValue.get(normalize(item.adjective))
      return essential ? {
        ...item,
        categories: mergeCategories(item.categories, essential.categories)
      } : item
    }),
    ...essentialAdjectives.filter(item => !baseValues.has(normalize(item.adjective)))
  ]
}

export const mergeEssentialVocabulary = (base: VocabularyEntry[]): VocabularyEntry[] => {
  const baseKeys = new Set(base.map(item => `${item.kind}:${normalize(item.german)}`))

  return [
    ...base,
    ...essentialVocabulary.filter(item => !baseKeys.has(`${item.kind}:${normalize(item.german)}`))
  ]
}
