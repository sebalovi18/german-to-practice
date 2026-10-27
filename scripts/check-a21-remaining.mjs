import assert from 'node:assert/strict'
import { createServer } from 'vite'

const server = await createServer({
  server: {
    middlewareMode: true
  },
  appType: 'custom'
})

try {
  const imported = await server.ssrLoadModule('/src/data/a21RemainingVocabulary.ts')
  const catalogs = await server.ssrLoadModule('/src/data/learningCatalogs.ts')
  const entries = imported.a21RemainingVocabulary
  const byPage = Object.groupBy(entries, entry => entry.page)
  const expectedCounts = {
    220: 14,
    221: 34,
    222: 24,
    223: 32,
    224: 24,
    225: 33,
    226: 29,
    227: 30,
    228: 35,
    229: 23
  }

  for (const [page, count] of Object.entries(expectedCounts)) {
    assert.equal(byPage[page]?.length, count, `Coverage mismatch on printed page ${page}`)
  }

  for (const entry of entries) {
    assert.ok(entry.translations.en && entry.translations.es)
    assert.equal(entry.sheet, entry.page - 174)
    assert.ok(catalogs.vocabulary.some(word => word.id === entry.id))
  }

  for (const name of ['nouns', 'verbs', 'adjectives', 'vocabulary']) {
    const ids = catalogs[name].map(word => word.id)
    assert.equal(new Set(ids).size, ids.length, `${name}: duplicate IDs`)
  }

  for (const word of imported.a21RemainingVerbs) {
    assert.ok(word.preteritum && word.perfekt && word.auxiliary)
    assert.ok(catalogs.verbs.some(item => item.infinitive.replaceAll('|', '') === word.infinitive.replaceAll('|', '')))
  }

  const pluralOnly = imported.a21RemainingNouns.filter(word => word.singular_id)
  assert.equal(pluralOnly.length, 5)
  console.log(JSON.stringify({
    imported: entries.length,
    byPage: expectedCounts,
    catalogs: Object.fromEntries(['nouns', 'verbs', 'adjectives', 'vocabulary'].map(key => [key, catalogs[key].length]))
  }, null, 2))
} finally {
  await server.close()
}
