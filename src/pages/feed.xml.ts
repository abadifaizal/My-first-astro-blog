import rss from '@astrojs/rss'
import sanitize from 'sanitize-html';
import MarkdownIt from 'markdown-it';
import { getCollection } from 'astro:content'
import type { APIContext } from 'astro'

const parser = new MarkdownIt();

export async function GET(context: APIContext) {
  const posts = await getCollection('blog');

  return rss({
    title: 'Blackhole blog',
    description: 'A blog about blackholes',
    site: context.site?.toString() || 'https://abadifaizal.com',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/blog/${post.slug}`,
      content: sanitize(parser.render(post.body)),
    }))
  })
}