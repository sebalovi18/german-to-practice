import { CATEGORIES as C } from './categories'
import type { Category } from './categories'
import type { GermanNoun } from '@/interfaces/GermanNoun'
import type { GermanVerb } from '@/interfaces/GermanVerbs'
import type { GermanAdjective } from '@/interfaces/GermanAdjectives'
import type { VocabularyEntry } from '@/interfaces/VocabularyEntry'

type Word = {
  german: string
  en: string
  es: string
  kind: string
  plural?: string | null
  preteritum?: string
  participle?: string
  auxiliary?: 'haben' | 'sein'
  comparative?: string
  superlative?: string
}
const n = (german: string, plural: string | null, en: string, es: string): Word => ({
  german,
  plural,
  en,
  es,
  kind: 'Sustantivo'
})
const v = (german: string, preteritum: string, participle: string, auxiliary: 'haben' | 'sein', en: string, es: string): Word => ({
  german,
  preteritum,
  participle,
  auxiliary,
  en,
  es,
  kind: 'Verbo'
})
const a = (german: string, comparative: string, superlative: string, en: string, es: string): Word => ({
  german,
  comparative,
  superlative,
  en,
  es,
  kind: 'Adjetivo'
})
const o = (german: string, en: string, es: string, kind = 'Adverbio'): Word => ({
  german,
  en,
  es,
  kind
})
type Section = {
  lesson: number,
  page: number,
  categories: Category[],
  words: Word[]
}

// Transcribed from the supplied scans, printed pages 220–229.
// Page 220 also contains the beginning of lesson 5, excluded from the earlier import.
const sections: Section[] = [
  {
    lesson: 5,
    page: 220,
    categories: [C.EDUCATION],
    words: [
      n('das Bonbon', 'Bonbons', 'sweet / candy', 'caramelo'),
      a('frech', 'frecher', 'am frechsten', 'cheeky', 'descarado/a'),
      n('die Note', 'Noten', 'grade / mark', 'nota / calificación'),
      n('die Mathematik', null, 'mathematics / maths', 'matemáticas'),
      a('egal', '—', '—', 'all the same / unimportant', 'indiferente / sin importancia'),
      n('die Broschüre', 'Broschüren', 'brochure', 'folleto'),
      n('die Webseite', 'Webseiten', 'web page', 'página web'),
      v('kontrollieren', 'kontrollierte', 'kontrolliert', 'haben', 'check', 'comprobar / revisar'),
      n('die Süßigkeiten', null, 'sweets / candy', 'golosinas'),
      a('musikalisch', 'musikalischer', 'am musikalischsten', 'musical', 'musical'),
      o('zurzeit', 'currently', 'actualmente'),
      o('deshalb', 'therefore / that is why', 'por eso'),
      o('nun', 'now', 'ahora'),
      n('das Instrument', 'Instrumente', 'instrument', 'instrumento')
    ]
  },
  {
    lesson: 5,
    page: 221,
    categories: [C.EDUCATION],
    words: [
      n('das Fach', 'Fächer', 'school subject', 'asignatura'),
      n('die Region', 'Regionen', 'region', 'región'),
      n('die Geografie', null, 'geography', 'geografía'),
      n('die Kunst', null, 'art', 'arte'),
      n('die Physik', null, 'physics', 'física'),
      n('die Chemie', null, 'chemistry', 'química'),
      n('die Biologie', null, 'biology', 'biología'),
      n('die Geschichte', null, 'history', 'historia'),
      n('die Sozialkunde', null, 'social studies', 'ciencias sociales'),
      o('weg', 'away / gone', 'fuera / ausente'),
      o('wenigstens', 'at least', 'al menos'),
      o('alles', 'everything', 'todo', 'Pronombre'),
      o('Ihr-', 'your (formal)', 'su / sus (de usted)', 'Posesivo'),
      o('unser-', 'our', 'nuestro/a', 'Posesivo'),
      n('die Sendung', 'Sendungen', 'programme / broadcast', 'programa / emisión'),
      n('das Thema', 'Themen', 'topic', 'tema'),
      o('diesmal', 'this time', 'esta vez'),
      v('senden', 'sendete', 'gesendet', 'haben', 'send / broadcast', 'enviar / emitir'),
      n('das Radio', 'Radios', 'radio', 'radio'),
      a('streng', 'strenger', 'am strengsten', 'strict', 'estricto/a'),
      a('spannend', 'spannender', 'am spannendsten', 'exciting', 'emocionante'),
      a('ähnlich', 'ähnlicher', 'am ähnlichsten', 'similar', 'parecido/a'),
      a('unterschiedlich', 'unterschiedlicher', 'am unterschiedlichsten', 'different', 'diferente'),
      a('furchtbar', 'furchtbarer', 'am furchtbarsten', 'terrible', 'terrible'),
      v('schimpfen', 'schimpfte', 'geschimpft', 'haben', 'scold / complain', 'retar / quejarse'),
      n('die Grundschule', 'Grundschulen', 'primary school', 'escuela primaria'),
      n('der Elternabend', 'Elternabende', 'parents’ evening', 'reunión de padres'),
      n('das Projekt', 'Projekte', 'project', 'proyecto'),
      n('die Klassenfahrt', 'Klassenfahrten', 'school trip', 'viaje escolar'),
      n('die Grippe', null, 'flu', 'gripe'),
      o('spätestens', 'at the latest', 'a más tardar'),
      n('das Sekretariat', 'Sekretariate', 'administrative office', 'secretaría'),
      v('sich krank|melden', 'meldete sich krank', 'krankgemeldet', 'haben', 'report sick', 'avisar que se está enfermo/a'),
      o('mindestens', 'at least', 'como mínimo')
    ]
  },
  {
    lesson: 5,
    page: 222,
    categories: [C.EDUCATION],
    words: [
      a('schriftlich', '—', '—', 'written', 'escrito/a'),
      n('die Flöte', 'Flöten', 'flute', 'flauta'),
      n('die Energie', null, 'energy', 'energía'),
      v('empfehlen', 'empfahl', 'empfohlen', 'haben', 'recommend', 'recomendar'),
      n('der Zucker', null, 'sugar', 'azúcar'),
      n('die Frucht', 'Früchte', 'fruit', 'fruta'),
      v('mit|nehmen', 'nahm mit', 'mitgenommen', 'haben', 'take along', 'llevar consigo'),
      n('der Junge', 'Jungen', 'boy', 'niño'),
      n('das Mädchen', 'Mädchen', 'girl', 'niña'),
      n('die Ferien', null, 'school holidays', 'vacaciones escolares'),
      v('sich an|melden', 'meldete sich an', 'angemeldet', 'haben', 'register / sign up', 'inscribirse'),
      o('miteinander', 'with one another', 'juntos / entre sí'),
      v('stehen', 'stand', 'gestanden', 'haben', 'stand / be written', 'estar de pie / decir (un texto)'),
      a('freiwillig', '—', '—', 'voluntary', 'voluntario/a'),
      n('die Gesamtschule', 'Gesamtschulen', 'comprehensive school', 'escuela secundaria integrada'),
      n('das Gymnasium', 'Gymnasien', 'academic secondary school', 'instituto de secundaria orientado al Abitur'),
      n('die Hauptschule', 'Hauptschulen', 'general secondary school', 'escuela secundaria básica'),
      n('die Mittelschule', 'Mittelschulen', 'middle school', 'escuela secundaria media'),
      n('die Kita', 'Kitas', 'daycare centre', 'guardería'),
      n('die Realschule', 'Realschulen', 'intermediate secondary school', 'escuela secundaria de nivel intermedio')
    ]
  },
  {
    lesson: 6,
    page: 222,
    categories: [C.LEISURE],
    words: [
      v('verbringen', 'verbrachte', 'verbracht', 'haben', 'spend (time)', 'pasar (tiempo)'),
      n('die Lust', null, 'desire / inclination', 'ganas'),
      o('eben', 'then / simply (modal particle)', 'entonces / pues'),
      n('die Mediathek', 'Mediatheken', 'on-demand media library', 'biblioteca multimedia')
    ]
  },
  {
    lesson: 6,
    page: 223,
    categories: [C.LEISURE, C.COMMUNICATION, C.TECHNOLOGY],
    words: [
      n('der Fan', 'Fans', 'fan', 'admirador/a'),
      n('die Staffel', 'Staffeln', 'season (TV series)', 'temporada (serie)'),
      o('endlich', 'finally', 'por fin'),
      v('starten', 'startete', 'gestartet', 'sein', 'start / begin', 'empezar'),
      n('der Streit', 'Streite', 'argument / dispute', 'discusión'),
      v('rufen', 'rief', 'gerufen', 'haben', 'call / shout', 'llamar / gritar'),
      v('aus|gehen', 'ging aus', 'ausgegangen', 'sein', 'go out / turn out', 'salir / resultar'),
      n('der Traum', 'Träume', 'dream', 'sueño'),
      o('Traum-', 'dream / ideal (prefix)', 'ideal / de ensueño', 'Prefijo'),
      o('jährig-', 'years old (suffix)', 'de … años', 'Sufijo'),
      o('vor allem', 'above all / especially', 'sobre todo'),
      n('die Fantasie', 'Fantasien', 'imagination / fantasy', 'imaginación / fantasía'),
      v('verbinden', 'verband', 'verbunden', 'haben', 'connect / combine', 'conectar / combinar'),
      v('erfahren', 'erfuhr', 'erfahren', 'haben', 'find out / learn', 'enterarse / averiguar'),
      n('die Dokumentation', 'Dokumentationen', 'documentary', 'documental'),
      n('die Folge', 'Folgen', 'episode', 'episodio'),
      v('sich streiten', 'stritt sich', 'gestritten', 'haben', 'argue', 'discutir'),
      o('zu viel', 'too much', 'demasiado'),
      o('bestimmt', 'certainly / surely', 'seguramente'),
      v('nerven', 'nervte', 'genervt', 'haben', 'annoy', 'molestar'),
      n('die Chips', null, 'crisps / chips', 'papas fritas de bolsa'),
      o('trotzdem', 'nevertheless / even so', 'a pesar de eso'),
      n('der Messengerdienst', 'Messengerdienste', 'messaging service', 'servicio de mensajería'),
      a('sozial', 'sozialer', 'am sozialsten', 'social', 'social'),
      n('das Netzwerk', 'Netzwerke', 'network', 'red'),
      v('nutzen', 'nutzte', 'genutzt', 'haben', 'use', 'utilizar'),
      n('der Podcast', 'Podcasts', 'podcast', 'pódcast'),
      v('posten', 'postete', 'gepostet', 'haben', 'post (online)', 'publicar (en internet)'),
      o('tagsüber', 'during the day', 'durante el día'),
      n('die Medien', null, 'media', 'medios de comunicación'),
      n('das Medium', 'Medien', 'medium', 'medio de comunicación'),
      v('befragen', 'befragte', 'befragt', 'haben', 'question / survey', 'encuestar / preguntar')
    ]
  },
  {
    lesson: 6,
    page: 224,
    categories: [C.LEISURE, C.COMMUNICATION],
    words: [
      v('gucken', 'guckte', 'geguckt', 'haben', 'look / watch', 'mirar'),
      n('die Talkshow', 'Talkshows', 'talk show', 'programa de entrevistas'),
      n('der Streamingdienst', 'Streamingdienste', 'streaming service', 'servicio de streaming'),
      n('der Horror', null, 'horror', 'terror'),
      n('das Netz', null, 'internet / net', 'internet / red'),
      n('das Tutorial', 'Tutorials', 'tutorial', 'tutorial'),
      o('abends', 'in the evenings', 'por las tardes / noches'),
      n('die Spannung', null, 'suspense / excitement', 'suspenso / emoción'),
      n('der Krimi', 'Krimis', 'crime film / novel', 'película / novela policial'),
      n('das Lexikon', 'Lexika', 'encyclopedia / reference work', 'enciclopedia / diccionario enciclopédico'),
      o('freitags', 'on Fridays', 'los viernes'),
      o('samstags', 'on Saturdays', 'los sábados'),
      n('das Kopfweh', null, 'headache', 'dolor de cabeza'),
      n('die Nachrichten', null, 'news', 'noticias'),
      o('montags', 'on Mondays', 'los lunes'),
      o('dienstags', 'on Tuesdays', 'los martes'),
      o('mittwochs', 'on Wednesdays', 'los miércoles'),
      o('donnerstags', 'on Thursdays', 'los jueves'),
      o('sonntags', 'on Sundays', 'los domingos'),
      o('morgens', 'in the mornings', 'por las mañanas'),
      o('vormittags', 'in the late mornings', 'por la mañana (antes del mediodía)'),
      o('mittags', 'at midday', 'al mediodía'),
      o('nachmittags', 'in the afternoons', 'por las tardes'),
      o('nachts', 'at night', 'por las noches')
    ]
  },
  {
    lesson: 7,
    page: 225,
    categories: [C.HOUSEHOLD],
    words: [
      v('ein|ziehen', 'zog ein', 'eingezogen', 'sein', 'move in', 'mudarse (a una vivienda)'),
      v('renovieren', 'renovierte', 'renoviert', 'haben', 'renovate / redecorate', 'renovar'),
      n('das Loch', 'Löcher', 'hole', 'agujero'),
      n('die Wand', 'Wände', 'wall', 'pared'),
      v('ein|richten', 'richtete ein', 'eingerichtet', 'haben', 'furnish / set up', 'amueblar / equipar'),
      o('vorn / vorne', 'at the front', 'delante'),
      n('der Flur', 'Flure', 'hallway', 'pasillo'),
      o('oben', 'up / upstairs', 'arriba'),
      o('unten', 'down / downstairs', 'abajo'),
      n('die Ecke', 'Ecken', 'corner', 'esquina / rincón'),
      n('die Bohrmaschine', 'Bohrmaschinen', 'drill', 'taladro'),
      n('der Kofferraum', 'Kofferräume', 'car boot / trunk', 'maletero / baúl del auto'),
      o('außerdem', 'besides / in addition', 'además'),
      n('der Müll', null, 'rubbish', 'basura'),
      n('die Kiste', 'Kisten', 'box / crate', 'caja'),
      o('drin', 'inside', 'dentro'),
      a('möglich', '—', '—', 'possible', 'posible'),
      a('selbstverständlich', 'selbstverständlicher', 'am selbstverständlichsten', 'self-evident / of course', 'evidente / por supuesto'),
      a('eilig', 'eiliger', 'am eiligsten', 'urgent / in a hurry', 'urgente / apurado/a'),
      n('der Schalter', 'Schalter', 'switch', 'interruptor'),
      o('auf jeden Fall', 'definitely / in any case', 'sin duda / en todo caso'),
      o('auf keinen Fall', 'under no circumstances', 'de ninguna manera'),
      n('das Dach', 'Dächer', 'roof', 'techo / tejado'),
      n('der Reifen', 'Reifen', 'tyre / tire', 'neumático'),
      n('der Vermieter', 'Vermieter', 'landlord', 'arrendador'),
      n('die Vermieterin', 'Vermieterinnen', 'landlady', 'arrendadora'),
      n('die Kündigung', 'Kündigungen', 'notice of termination', 'rescisión / aviso de cancelación'),
      n('die Treppe', 'Treppen', 'stairs / staircase', 'escalera'),
      o('runter', 'down', 'hacia abajo'),
      o('rauf', 'up', 'hacia arriba'),
      o('rein', 'in / inside', 'hacia dentro'),
      o('raus', 'out / outside', 'hacia fuera'),
      o('rüber', 'over / across', 'al otro lado')
    ]
  },
  {
    lesson: 7,
    page: 226,
    categories: [C.HOUSEHOLD],
    words: [
      a('windig', 'windiger', 'am windigsten', 'windy', 'ventoso/a'),
      o('nebenan', 'next door', 'al lado'),
      n('das Paket', 'Pakete', 'parcel / package', 'paquete'),
      v('organisieren', 'organisierte', 'organisiert', 'haben', 'organise', 'organizar'),
      n('der Hinweis', 'Hinweise', 'note / tip / instruction', 'indicación / aviso'),
      n('die Aufgabe', 'Aufgaben', 'task', 'tarea'),
      v('aus|ziehen', 'zog aus', 'ausgezogen', 'sein', 'move out', 'mudarse / dejar una vivienda'),
      v('packen', 'packte', 'gepackt', 'haben', 'pack', 'empacar'),
      n('der Wagen', 'Wagen', 'car / vehicle / cart', 'vehículo / carro'),
      n('der Nagel', 'Nägel', 'nail', 'clavo'),
      v('ziehen', 'zog', 'gezogen', 'haben', 'pull', 'tirar de'),
      v('streichen', 'strich', 'gestrichen', 'haben', 'paint / brush', 'pintar'),
      n('die Mülltonne', 'Mülltonnen', 'rubbish bin / wheelie bin', 'contenedor de basura'),
      n('der Raum', 'Räume', 'room / space', 'habitación / espacio'),
      v('ab|schließen', 'schloss ab', 'abgeschlossen', 'haben', 'lock / complete', 'cerrar con llave / finalizar'),
      v('ab|geben', 'gab ab', 'abgegeben', 'haben', 'hand in / return', 'entregar / devolver'),
      v('auf|bauen', 'baute auf', 'aufgebaut', 'haben', 'assemble / build', 'armar / montar'),
      v('aus|packen', 'packte aus', 'ausgepackt', 'haben', 'unpack', 'desempacar'),
      n('die Vorsicht', null, 'caution', 'precaución'),
      n('das Geschirr', 'Geschirre', 'dishes / crockery', 'vajilla'),
      v('übernehmen', 'übernahm', 'übernommen', 'haben', 'take on / take over', 'hacerse cargo de'),
      n('der Mülleimer', 'Mülleimer', 'rubbish bin', 'cubo de basura'),
      n('der Sessel', 'Sessel', 'armchair', 'sillón'),
      v('hängen', 'hängte', 'gehängt', 'haben', 'hang (something)', 'colgar (algo)'),
      n('die Vase', 'Vasen', 'vase', 'florero'),
      v('stellen', 'stellte', 'gestellt', 'haben', 'put / place upright', 'poner / colocar de pie'),
      v('setzen', 'setzte', 'gesetzt', 'haben', 'sit / set down', 'sentar / colocar'),
      v('legen', 'legte', 'gelegt', 'haben', 'lay / put down', 'poner / colocar horizontalmente'),
      n('der Teppich', 'Teppiche', 'carpet / rug', 'alfombra')
    ]
  },
  {
    lesson: 7,
    page: 227,
    categories: [C.HOUSEHOLD],
    words: [
      n('die Pflanze', 'Pflanzen', 'plant', 'planta'),
      n('der Zettel', 'Zettel', 'note / slip of paper', 'nota / papelito'),
      v('auf|teilen', 'teilte auf', 'aufgeteilt', 'haben', 'divide / allocate', 'repartir / dividir'),
      n('das Kinderzimmer', 'Kinderzimmer', 'children’s room', 'habitación infantil'),
      n('das Arbeitszimmer', 'Arbeitszimmer', 'study / home office', 'despacho / estudio'),
      n('die Ruhe', null, 'peace / quiet', 'tranquilidad'),
      v('nach|denken', 'dachte nach', 'nachgedacht', 'haben', 'think / reflect', 'reflexionar'),
      v('zeichnen', 'zeichnete', 'gezeichnet', 'haben', 'draw', 'dibujar'),
      o('wahrscheinlich', 'probably', 'probablemente'),
      v('klappen', 'klappte', 'geklappt', 'haben', 'work out / succeed', 'salir bien / funcionar'),
      n('die Chance', 'Chancen', 'chance / opportunity', 'oportunidad / posibilidad'),
      n('die Hauptsache', null, 'main thing', 'lo principal'),
      n('die Größe', 'Größen', 'size', 'tamaño'),
      a('eigen', '—', '—', 'own', 'propio/a'),
      a('modern', 'moderner', 'am modernsten', 'modern', 'moderno/a'),
      a('preiswert', 'preiswerter', 'am preiswertesten', 'inexpensive / good value', 'económico/a'),
      a('zentral', 'zentraler', 'am zentralsten', 'central', 'céntrico/a'),
      n('das Erdgeschoss', 'Erdgeschosse', 'ground floor', 'planta baja'),
      v('erreichen', 'erreichte', 'erreicht', 'haben', 'reach', 'alcanzar / llegar a'),
      n('der Lift', 'Lifte', 'lift / elevator', 'ascensor'),
      n('die Garage', 'Garagen', 'garage', 'garaje'),
      o('manch-', 'some / many a', 'algunos/as', 'Determinante')
    ]
  },
  {
    lesson: 8,
    page: 227,
    categories: [C.TRAVEL, C.TRANSPORTATION],
    words: [
      n('der Stress', null, 'stress', 'estrés'),
      n('die Fahrt', 'Fahrten', 'journey / ride', 'viaje / trayecto'),
      n('die Dauer', null, 'duration', 'duración'),
      n('die Abfahrt', 'Abfahrten', 'departure', 'salida'),
      n('die Ankunft', null, 'arrival', 'llegada'),
      n('der Zug', 'Züge', 'train', 'tren'),
      n('das Gleis', 'Gleise', 'track', 'vía'),
      n('die Verbindung', 'Verbindungen', 'connection', 'conexión')
    ]
  },
  {
    lesson: 8,
    page: 228,
    categories: [C.TRAVEL, C.LOCATIONS, C.TRANSPORTATION],
    words: [
      n('die Verspätung', 'Verspätungen', 'delay', 'retraso'),
      o('frei sein', 'be available / free', 'estar libre', 'Expresión'),
      o('besetzt sein', 'be occupied', 'estar ocupado/a', 'Expresión'),
      v('zu|steigen', 'stieg zu', 'zugestiegen', 'sein', 'get on / board', 'subir (a un transporte)'),
      n('der Fahrplan', 'Fahrpläne', 'timetable', 'horario de transporte'),
      n('das Taschentuch', 'Taschentücher', 'handkerchief / tissue', 'pañuelo'),
      n('der Kinderwagen', 'Kinderwagen', 'pram / stroller', 'cochecito de bebé'),
      n('die Zeitschrift', 'Zeitschriften', 'magazine', 'revista'),
      n('die Landschaft', 'Landschaften', 'landscape', 'paisaje'),
      n('der Wunsch', 'Wünsche', 'wish', 'deseo'),
      n('die Natur', null, 'nature', 'naturaleza'),
      n('der Fluss', 'Flüsse', 'river', 'río'),
      n('das Zelt', 'Zelte', 'tent', 'carpa / tienda de campaña'),
      n('der Busbahnhof', 'Busbahnhöfe', 'bus station', 'terminal de autobuses'),
      n('der Turm', 'Türme', 'tower', 'torre'),
      n('die Apotheke', 'Apotheken', 'pharmacy', 'farmacia'),
      o('vorbei / vorbei-', 'past / by', 'pasando / de largo'),
      o('gegenüber', 'opposite / across from', 'enfrente de', 'Preposición'),
      n('das Rathaus', 'Rathäuser', 'town hall', 'ayuntamiento'),
      o('durch', 'through', 'a través de', 'Preposición'),
      n('die Unterführung', 'Unterführungen', 'underpass', 'paso subterráneo'),
      o('entlang', 'along', 'a lo largo de', 'Preposición'),
      n('das Tor', 'Tore', 'gate', 'portón / puerta de entrada'),
      n('das Einkaufszentrum', 'Einkaufszentren', 'shopping centre', 'centro comercial'),
      n('der Marktplatz', 'Marktplätze', 'market square', 'plaza del mercado'),
      n('die Kreuzung', 'Kreuzungen', 'intersection', 'cruce'),
      n('der Parkplatz', 'Parkplätze', 'car park / parking space', 'aparcamiento'),
      n('die Ampel', 'Ampeln', 'traffic light', 'semáforo'),
      n('das Parkhaus', 'Parkhäuser', 'multi-storey car park', 'estacionamiento de varias plantas'),
      n('die Brücke', 'Brücken', 'bridge', 'puente'),
      n('die Markthalle', 'Markthallen', 'market hall', 'mercado cubierto'),
      n('die Unterkunft', 'Unterkünfte', 'accommodation', 'alojamiento'),
      n('der Aufenthalt', 'Aufenthalte', 'stay', 'estadía'),
      o('mitten', 'in the middle', 'en medio'),
      a('direkt', 'direkter', 'am direktesten', 'direct', 'directo/a')
    ]
  },
  {
    lesson: 8,
    page: 229,
    categories: [C.TRAVEL],
    words: [
      n('die Übernachtung', 'Übernachtungen', 'overnight stay', 'pernoctación / noche de alojamiento'),
      n('das Einzelzimmer', 'Einzelzimmer', 'single room', 'habitación individual'),
      n('das Doppelzimmer', 'Doppelzimmer', 'double room', 'habitación doble'),
      n('das WC', 'WCs', 'toilet / WC', 'baño / inodoro'),
      n('die Halbpension', null, 'half board', 'media pensión'),
      n('die Vollpension', null, 'full board', 'pensión completa'),
      n('der Fitnessraum', 'Fitnessräume', 'fitness room / gym', 'gimnasio'),
      n('die Sauna', 'Saunen', 'sauna', 'sauna'),
      o('inklusive', 'included / including', 'incluido / incluyendo', 'Preposición'),
      n('der Zugang', 'Zugänge', 'access', 'acceso'),
      v('reservieren', 'reservierte', 'reserviert', 'haben', 'reserve / book', 'reservar'),
      n('die Rezeption', 'Rezeptionen', 'reception', 'recepción'),
      n('die Ferienwohnung', 'Ferienwohnungen', 'holiday apartment', 'apartamento de vacaciones'),
      n('die Küchenzeile', 'Küchenzeilen', 'kitchenette', 'cocina compacta'),
      n('das Badezimmer', 'Badezimmer', 'bathroom', 'cuarto de baño'),
      n('die Pension', 'Pensionen', 'guesthouse', 'pensión / hostería'),
      n('die Jugendherberge', 'Jugendherbergen', 'youth hostel', 'albergue juvenil'),
      n('das Hostel', 'Hostels', 'hostel', 'hostal'),
      n('die Verpflegung', null, 'meals / catering', 'comidas / manutención'),
      n('das Familienzimmer', 'Familienzimmer', 'family room', 'habitación familiar'),
      n('das Mehrbettzimmer', 'Mehrbettzimmer', 'shared room / dormitory', 'habitación compartida'),
      n('der Nichtraucher', 'Nichtraucher', 'non-smoker', 'no fumador'),
      n('das WLAN', 'WLANs', 'Wi-Fi / wireless network', 'wifi / red inalámbrica')
    ]
  }
]

const slug = (word: string) => word.toLowerCase().replaceAll('|', '').replace(/[^a-zäöüß0-9]+/g, '-').replace(/^-|-$/g, '')
const words = sections.flatMap(section => section.words.map((word, index) => ({
  ...word,
  lesson: section.lesson,
  page: section.page,
  categories: section.categories,
  id: `a21-rest-${section.page}-${index + 1}-${slug(word.german)}`
})))

export const a21RemainingVocabulary: VocabularyEntry[] = words.map(word => ({
  id: word.id,
  level: 'A2.1',
  lesson: `Lektion ${word.lesson}`,
  page: word.page,
  sheet: word.page - 174,
  kind: word.kind,
  german: word.german.replaceAll('|', ''),
  forms: word.kind === 'Sustantivo'
    ? word.plural ? `die ${word.plural}` : ['die Süßigkeiten', 'die Ferien', 'die Chips', 'die Medien', 'die Nachrichten'].includes(word.german) ? 'Solo plural' : 'Solo singular en este uso'
    : word.kind === 'Verbo'
      ? `${word.preteritum}; ${word.auxiliary} ${word.participle}`
      : word.kind === 'Adjetivo' ? `${word.comparative}; ${word.superlative}` : null,
  translations: {
    en: word.en,
    es: word.es
  },
  example: null
}))

export const a21RemainingNouns: GermanNoun[] = words.filter(word => word.kind === 'Sustantivo').map(word => ({
  id: word.id,
  type: 'noun',
  article: word.german.slice(0, 3) as GermanNoun['article'],
  value: word.german.slice(4),
  singular_id: ['die Süßigkeiten', 'die Ferien', 'die Chips', 'die Medien', 'die Nachrichten'].includes(word.german) ? word.id : null,
  plural_id: null,
  plural: word.plural,
  translations: {
    en: word.en,
    es: word.es
  },
  translationArticles: {
    en: null,
    es: null
  },
  levels: ['A2.1'],
  categories: word.categories
}))

export const a21RemainingVerbs: GermanVerb[] = words.filter(word => word.kind === 'Verbo').map(word => ({
  id: word.id,
  type: 'verb',
  infinitive: word.german,
  preteritum: word.preteritum!,
  perfekt: word.participle!,
  auxiliary: word.auxiliary,
  translations: {
    en: word.en,
    es: word.es
  },
  levels: ['A2.1'],
  categories: word.categories
}))

export const a21RemainingAdjectives: GermanAdjective[] = words.filter(word => word.kind === 'Adjetivo').map(word => ({
  id: word.id,
  type: 'adjective',
  adjective: word.german,
  comparative: word.comparative!,
  superlative: word.superlative!,
  translations: {
    en: word.en,
    es: word.es
  },
  levels: ['A2.1'],
  categories: word.categories
}))
