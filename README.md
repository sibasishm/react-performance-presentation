# react-performance-presentation

Slides for my presentation on react performance at Goodera prepared using MDX
Deck and deployed to Vercel.

## Development

To run the presentation deck in development mode:

```sh
npm start
```

Edit the [`deck.mdx`](deck.mdx) file to get started.

## Exporting

To build the presentation deck as static HTML:

```sh
npm run build
```

To export a PDF:

```sh
npm run pdf
```

To export an image of the title slide:

```sh
npm run image
```

For more documentation see the [mdx-deck][] repo.

[mdx-deck]: https://github.com/jxnblk/mdx-deck

## Deploy

### Vercel

1. Clone the project locally and add to your Github
2. Add the repo to Vercel

## ⚙️ Vercel settings

We give vercel a build script to run each time we make a commit to the repo. And
the deploy folder is the place where mdx-deck exports the static HTML/JS
version, and by pointing Vercel there it displays our deck after building.

1. Set the build script to `npm run build`
1. Set the deploy folder to `dist`

[See the demo site here](https://react-performance-presentation.vercel.app/)

## Credits

- [mdx-deck](https://github.com/jxnblk/mdx-deck) by
  [@jxnblk](https://github.com/jxnblk)
- [Deploy MDX-Deck to Netlify](https://whoisryosuke.com/blog/2018/mdx-deck-on-netlify/)
  by [@whoisryosuke](https://github.com/whoisryosuke)
