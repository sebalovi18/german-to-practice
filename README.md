# 🇩🇪 German to Practice

A friendly place to build German vocabulary with searchable word lists and short practice exercises. Browse nouns, verbs, and adjectives, then turn them into quick study rounds whenever you want to review.

## ✨ Features

- 📚 Browse German nouns with articles, singular forms, plural forms, and translations.
- 🔎 Search nouns, verbs, and adjectives by German word, form, or translation.
- 🏋️ Practice articles with randomized sessions for `der`, `die`, and `das`.
- 🧠 Practice meanings for nouns, verbs, and adjectives.
- 💡 Use hints, show answers, and move through exercises at your own pace.
- ⌨️ Use keyboard shortcuts during practice, including number keys for answers.
- 🌍 Switch the interface between English, German, Spanish, and Turkish.
- 🔤 Choose a preferred display font and keep it saved for next time.
- 🏷️ See translated browser titles for each page.

## 🧾 Vocabulary Data

The vocabulary lives in `src/data`:

- `src/data/nouns.ts`: 270 nouns
- `src/data/verbs.ts`: 70 verbs
- `src/data/adjectives.ts`: 33 adjectives

Each entry includes German forms and translations for `en`, `de`, `es`, and `tr`. Some entries also include level and category metadata for more focused practice later.

## 🧭 Pages

- `/` opens the home page.
- `/nouns` shows the searchable noun list.
- `/verbs` shows the searchable verb list.
- `/adjetives` shows the searchable adjective list.
- `/practice` opens the practice menu.
- `/practice/articles` starts article practice.
- `/practice/nouns-meanings` starts noun meaning practice.
- `/practice/verbs-meanings` starts verb meaning practice.
- `/practice/adjetives-meanings` starts adjective meaning practice.

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
