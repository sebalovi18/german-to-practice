import assert from 'node:assert/strict'
import { createServer } from 'vite'

const normalize = value => value.replaceAll('|', '').toLocaleLowerCase('de-DE').trim()
const expected = [
  ['sich bewerben', 'bewarb sich', 'beworben'],
  ['sich ausruhen', 'ruhte sich aus', 'ausgeruht'],
  ['sich ärgern', 'ärgerte sich', 'geärgert'],
  ['sich beeilen', 'beeilte sich', 'beeilt'],
  ['sich freuen', 'freute sich', 'gefreut'],
  ['sich hinlegen', 'legte sich hin', 'hingelegt'],
  ['sich rasieren', 'rasierte sich', 'rasiert'],
  ['sich setzen', 'setzte sich', 'gesetzt'],
  ['sich umziehen', 'zog sich um', 'umgezogen'],
  ['sich waschen', 'wusch sich', 'gewaschen']
]
const server = await createServer({
  server: {
    middlewareMode: true
  },
  appType: 'custom'
})

try {
  const catalogs = await server.ssrLoadModule('/src/data/learningCatalogs.ts')

  for (const [infinitive, preteritum, perfekt] of expected) {
    const matches = catalogs.verbs.filter(word => normalize(word.infinitive) === infinitive)
    assert.equal(matches.length, 1, `Missing or duplicate verb: ${infinitive}`)
    assert.equal(matches[0].preteritum, preteritum)
    assert.equal(matches[0].perfekt, perfekt)
    assert.equal(matches[0].auxiliary, 'haben')
    assert.ok(matches[0].translations.en && matches[0].translations.es)
    assert.ok(matches[0].categories.length)
    assert.ok(catalogs.vocabulary.some(word => normalize(word.german) === infinitive))
  }

  // Moving into a home is einziehen, not a reflexive verb.
  assert.ok(catalogs.verbs.some(word => normalize(word.infinitive) === 'einziehen'))
  assert.ok(!catalogs.verbs.some(word => normalize(word.infinitive) === 'sich einziehen'))
  assert.ok(!catalogs.verbs.some(word => normalize(word.infinitive) === 'sich ärgen'))
  for (const key of ['verbs', 'vocabulary']) {
    assert.equal(new Set(catalogs[key].map(word => word.id)).size, catalogs[key].length)
  }
  console.log('Verified all 10 reflexive verbs, their forms, translations, categories and dictionary inclusion.')
} finally {
  await server.close()
}
