import frontMatter from 'front-matter';
import MarkdownIt from 'markdown-it';
import type { BlogPost, BlogFrontmatter } from '../types';

const md = new MarkdownIt({
  html: true,
  breaks: true,
  linkify: true,
  typographer: true,
  highlight: function (str, lang) {
    return `<pre class="bg-gray-50 dark:bg-[#2a2a2a] p-4 rounded-lg overflow-x-auto"><code class="language-${lang}">${str}</code></pre>`;
  }
});

export async function getAllPosts(): Promise<BlogPost[]> {
  const files = import.meta.glob('/src/content/blog/*.md', { 
    query: '?raw',
    import: 'default',
    eager: true
  });

  const posts = Object.entries(files)
    .map(([filepath, content]) => {
      if (typeof content !== 'string') {
        console.error('Unexpected content type for', filepath);
        return null;
      }

      const fileName = filepath.split('/').pop() || '';
      const slug = fileName.replace(/\.md$/, '');
      
      try {
        const { attributes, body } = frontMatter<BlogFrontmatter>(content);
        
        return {
          slug,
          title: attributes.title,
          date: attributes.date,
          content: md.render(body),
          description: attributes.description || body.slice(0, 150) + '...',
          tag: attributes.tag,
          isNew: new Date(attributes.date) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) // New if less than 7 days old
        } as BlogPost;
      } catch (error) {
        console.error('Error processing', filepath, error);
        return null;
      }
    })
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const files = import.meta.glob('/src/content/blog/*.md', { 
    query: '?raw',
    import: 'default',
    eager: true
  });

  const filePath = Object.keys(files).find(path => path.includes(`${slug}.md`));
  if (!filePath) return null;

  const content = files[filePath];
  if (typeof content !== 'string') return null;

  try {
    const { attributes, body } = frontMatter<BlogFrontmatter>(content);
    
    return {
      slug,
      title: attributes.title,
      date: attributes.date,
      content: md.render(body),
      description: attributes.description || body.slice(0, 150) + '...',
      tag: attributes.tag,
      isNew: new Date(attributes.date) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    } as BlogPost;
  } catch (error) {
    console.error('Error processing', filePath, error);
    return null;
  }
}