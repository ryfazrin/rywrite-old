# Rywrite
## What is Rywrite?
The small Noted in RyWrite becomes a Story. The blog with Next.js's [Static Generation](https://nextjs.org/docs/basic-features/pages) feature using Markdown files as the data source.

## Features

To create the blog posts Rywrite use [`remark`](https://github.com/remarkjs/remark) and [`remark-html`](https://github.com/remarkjs/remark-html) to convert the Markdown files into an HTML string, and then send it down as a prop to the page. The metadata of every post is handled by [`gray-matter`](https://github.com/jonschlinkert/gray-matter) and also sent in props to the page.

## Look at me

[rywrite.vercel.app](https://rywrite.vercel.app/)

Template By [Next JS](https://nextjs.org/docs/basic-features/pages#static-generation-recommended)
