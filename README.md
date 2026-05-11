# German to Practice

German to Practice is a small Vue app for studying German vocabulary through searchable reference lists and focused exercises. The current version is centered on German nouns, especially practicing the correct articles: `der`, `die`, and `das`.

The project is personal learning software: it keeps vocabulary data close to the code, makes it easy to browse translations, and turns that data into short practice rounds.

## Features

- Browse a noun list with article, singular form, plural form, and translations.
- Search nouns by German word, plural form, or translation.
- Practice articles with randomized 10-word sessions.
- Get two attempts per noun, reveal a hint, show the answer, and move to the next card.
- Use keyboard shortcuts during practice: `1`, `2`, `3` for articles, `h` for hint, `a` for answer, and `n` for next.
- Switch UI language between English, German, Spanish, and Turkish.
- Choose a preferred display font, saved in local storage.

## Current Data

The noun dataset lives in `src/data/nouns.ts` and currently includes 100 nouns. Each noun stores:

- the German article
- singular and plural forms
- translations for `en`, `de`, `es`, and `tr`
- optional level and category metadata

## App Structure

- `/nouns` shows the searchable noun table.
- `/practice/articles` starts the article practice exercise.
- `/verbs` and `/adjetives` are present as future sections.

The app is built with Vue 3, Vite, TypeScript, Vue Router, Vue I18n, Tailwind CSS, Radix Vue, Lucide icons, and FormKit Auto Animate.

## Project Setup

```sh
yarn
```

### Start Development Server

```sh
yarn dev
```

### Type-Check and Build

```sh
yarn build
```

### Lint

```sh
yarn lint
```

### Format Source Files

```sh
yarn format
```
