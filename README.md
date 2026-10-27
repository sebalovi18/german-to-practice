# 🇩🇪 German to Practice

A friendly place to build German vocabulary with searchable word lists and short practice exercises. Browse the A1.1, A1.2, and A2.1 lessons 1–8 vocabulary from the supplied *Miteinander!* scans and an A1–A2 essential vocabulary collection, or use the focused noun, verb, and adjective exercises.

## ✨ Features

- 📚 Browse 1,964 vocabulary entries across A1.1, A1.2, A2.1 lessons 1–8, and the essential A1–A2 collection.
- 🔎 Search German words, forms, examples, and English or Spanish translations.
- 🏷️ Filter the complete vocabulary by level and word type.
- 📖 Browse German nouns with articles, singular forms, and plural forms.
- 🏋️ Practice articles with randomized sessions for `der`, `die`, and `das`.
- 🧠 Practice meanings for nouns, verbs, and adjectives.
- 🗂️ Combine one or more vocabulary categories before starting any practice exercise.
- 🔢 See how many words each category contains for the selected exercise.
- 💡 Use hints, show answers, and move through exercises at your own pace.
- ⌨️ Use keyboard shortcuts during practice, including number keys for answers.
- 🌍 Switch the interface between English and Spanish.
- 🔤 Choose a preferred display font and keep it saved for next time.
- 🏷️ See translated browser titles for each page.

## 🧾 Vocabulary Data

The vocabulary lives in `src/data`:

- `src/data/vocabulary.ts`: the imported A1.1, A1.2, and A2.1 vocabulary
- `src/data/learningCatalogs.ts`: the combined imported and essential vocabulary used by the app
- `src/data/essentialVocabulary.ts`: the shared essential vocabulary catalog and category assignments
- `src/data/a21RemainingVocabulary.ts`: 278 book entries from lessons 5–8 (printed pages 220–229), plus their noun, verb, and adjective practice forms
- The combined learning catalogs contain 1,067 noun entries/forms, 346 verbs, and 221 adjectives.
- `src/data/categories.ts`: shared category identifiers used by all practice words

Entries include German forms and English and Spanish translations. The complete vocabulary also includes level, lesson, page, word type, and book examples where available.

The supplied scans end on printed page 229. The lesson 5 import starts at the bottom of page 220, which was intentionally excluded from the earlier lessons 1–4 import. New entries retain book page/lesson references; examples are currently omitted (`null`). Plural-only words are marked as plural for exercises. Run `node scripts/check-a21-remaining.mjs` to check page coverage, translations, IDs, and integration.

## 🧭 Pages

- `/` opens the home page.
- `/vocabulary` shows the complete imported vocabulary.
- `/nouns` shows the searchable noun list.
- `/verbs` shows the searchable verb list.
- `/adjectives` shows the searchable adjective list.
- `/practice` opens the practice menu.
- `/practice/articles` starts article practice.
- `/practice/nouns-meanings` starts noun meaning practice.
- `/practice/verbs-meanings` starts verb meaning practice.
- `/practice/adjectives-meanings` starts adjective meaning practice.

## 🛠️ Project Setup

Install dependencies:

```sh
yarn
```

Start the development server:

```sh
yarn dev
```

Type-check and build:

```sh
yarn build
```

Lint the project:

```sh
yarn lint
```

Format source files:

```sh
yarn format
```
