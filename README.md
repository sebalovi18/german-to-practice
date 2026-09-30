# 🇩🇪 German to Practice

A friendly place to build German vocabulary with searchable word lists and short practice exercises. Browse the complete A1.1 and A1.2 vocabulary plus A2.1 lessons 1–4 from *Miteinander!*, or use the focused noun, verb, and adjective exercises.

## ✨ Features

- 📚 Browse 1,398 vocabulary entries across A1.1, A1.2, and A2.1 lessons 1–4.
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

- `src/data/vocabulary.ts`: the combined A1.1, A1.2, and A2.1 vocabulary
- `src/data/nouns.ts`: 739 singular and plural noun forms
- `src/data/verbs.ts`: 219 verbs
- `src/data/adjectives.ts`: 111 adjectives
- `src/data/categories.ts`: shared category identifiers used by all practice words

Entries include German forms and English and Spanish translations. The complete vocabulary also includes level, lesson, page, word type, and book examples where available.

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
