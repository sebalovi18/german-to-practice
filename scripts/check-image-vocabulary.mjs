import assert from 'node:assert/strict'
import { createServer } from 'vite'

// Canonical noun forms from the user's workplace/hotel exercise image.
// Fleischwaren and Milchprodukte are stored under their dictionary singulars.
const names = [
  'Arztpraxis', 'Wartezimmer', 'Anmeldung', 'Fernsehraum', 'Toilette',
  'Untersuchungszimmer', 'Fabrik', 'Lager', 'Einzelzimmer', 'Werkstatt',
  'Telefonzentrale', 'Fabrikhalle', 'Büro', 'Kopierraum', 'Teeküche',
  'Chefzimmer', 'Schreibbüro', 'Bar', 'Hotel', 'Kantine', 'Doppelzimmer',
  'Bad', 'Rezeption', 'Restaurant', 'Kaufhaus', 'Kasse', 'Umkleidekabine',
  'Herrenabteilung', 'Empfang', 'Café', 'Supermarkt', 'Bäckerei',
  'Fitnessraum', 'Kiosk', 'Küche', 'Speisesaal', 'Garderobe', 'Parkhaus',
  'Parkplatz', 'Informationsschalter', 'Kassenautomat', 'Treppenhaus',
  'Wärterhäuschen', 'Laden', 'Post', 'Tankstelle', 'Wäscherei', 'Geschäft',
  'Firma', 'Schule', 'Park', 'Arbeiter', 'Verkäuferin', 'Sekretärin',
  'Kellner', 'Handwerker', 'Ärztin', 'Chefin', 'Aushilfe', 'Friseur',
  'Stock', 'Treppe', 'Tiefgeschoss', 'Dachgeschoss', 'Aufzug', 'Zimmer',
  'Dachcafé', 'Schwimmbad', 'Fleischware', 'Getränke', 'Milchprodukt',
  'Beratung', 'Leute'
]
const normalize = word => word.toLocaleLowerCase('de-DE').replaceAll('|', '').trim()
const server = await createServer({
  server: {
    middlewareMode: true
  },
  appType: 'custom'
})

try {
  const catalogs = await server.ssrLoadModule('/src/data/learningCatalogs.ts')

  for (const name of names) {
    const matches = catalogs.nouns.filter(word => word.value === name)
    // Unchanged plurals such as Arbeiter legitimately have singular and plural rows.
    assert.ok(matches.length >= 1, `Missing practice noun: ${name}`)
    assert.ok(matches.filter(word => word.singular_id === null).length <= 1, `Duplicate singular noun: ${name}`)
    assert.ok(matches[0].categories.length, `Missing categories: ${name}`)
    assert.ok(matches[0].translations.en && matches[0].translations.es)
    assert.ok(catalogs.vocabulary.some(word => word.german.replace(/^(der|die|das) /, '') === name), `Missing global noun: ${name}`)
  }

  for (const name of ['passen', 'markieren', 'arbeiten', 'ankreuzen', 'zuordnen', 'sein']) {
    const matches = catalogs.verbs.filter(word => normalize(word.infinitive) === name)
    assert.equal(matches.length, 1, `Missing or duplicated verb: ${name}`)
    assert.ok(matches[0].preteritum && matches[0].perfekt)
    assert.ok(catalogs.vocabulary.some(word => normalize(word.german) === name))
  }

  for (const name of ['rechts', 'neben', 'gegenüber', 'wo']) {
    assert.ok(catalogs.vocabulary.some(word => normalize(word.german) === name), `Missing word: ${name}`)
  }

  for (const name of ['nouns', 'verbs', 'adjectives', 'vocabulary']) {
    const ids = catalogs[name].map(word => word.id)
    assert.equal(new Set(ids).size, ids.length, `Duplicate IDs in ${name}`)
  }

  assert.equal(catalogs.nouns.find(word => word.value === 'Arztpraxis').plural, 'Arztpraxen')
  assert.equal(catalogs.nouns.find(word => word.value === 'Kassenautomat').plural, 'Kassenautomaten')
  assert.equal(catalogs.nouns.find(word => word.value === 'Fleischware').plural, 'Fleischwaren')
  assert.equal(catalogs.nouns.find(word => word.value === 'Milchprodukt').plural, 'Milchprodukte')
  console.log(`Image vocabulary verified: ${names.length} noun forms, 6 verbs and 4 location/question words.`)
  console.log(Object.fromEntries(['nouns', 'verbs', 'adjectives', 'vocabulary'].map(name => [name, catalogs[name].length])))
} finally {
  await server.close()
}
