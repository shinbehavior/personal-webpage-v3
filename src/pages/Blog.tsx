import React, { useEffect, useState } from 'react';

type TagType = 'Tech' | 'Life' | 'Other';

interface BlogPost {
  title: string;
  date: string;
  link: string;
  tag: TagType;
}

export function Blog() {
  const [visitedPosts, setVisitedPosts] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Load visited posts from localStorage
    const savedVisitedPosts = localStorage.getItem('visitedPosts');
    if (savedVisitedPosts) {
      setVisitedPosts(new Set(JSON.parse(savedVisitedPosts)));
    }
  }, []);

  const handlePostClick = (link: string) => {
    const updatedVisitedPosts = new Set(visitedPosts).add(link);
    setVisitedPosts(updatedVisitedPosts);
    localStorage.setItem('visitedPosts', JSON.stringify(Array.from(updatedVisitedPosts)));
  };

  const getTagStyles = (tag: TagType): string => {
    switch (tag) {
      case 'Tech':
        return 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300';
      case 'Life':
        return 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300';
      case 'Other':
        return 'bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300';
    }
  };

  const blogPosts: BlogPost[] = [
    {
      title: 'Building a Modern Web Application with React and TypeScript',
      date: 'March 15, 2024',
      link: '/blog/modern-web-application',
      tag: 'Tech'
    },
    {
      title: 'The Power of Server Components in React',
      date: 'February 20, 2024',
      link: '/blog/server-components',
      tag: 'Tech'
    },
    {
      title: 'Finding Balance in Remote Work',
      date: 'January 25, 2024',
      link: '/blog/remote-work-balance',
      tag: 'Life'
    },
    {
      title: 'The Future of AI in Our Daily Lives',
      date: 'January 10, 2024',
      link: '/blog/ai-daily-lives',
      tag: 'Other'
    }
  ];

  return (
    <div className="max-w-3xl mx-auto px-6">
      <header className="mb-16">
        <h1 className="text-2xl font-medium mb-4 dark:text-white">Blog</h1>
        <p className="text-[15px] leading-relaxed text-gray-800 dark:text-gray-300">
          Thoughts and insights on software development, artificial intelligence, 
          and the future of technology.
        </p>
      </header>

      <div className="divide-y divide-gray-100 dark:divide-gray-800">
        {blogPosts.map((post, index) => (
          <article 
            key={index} 
            className={`py-6 first:pt-0 last:pb-0 group ${
              visitedPosts.has(post.link) ? 'opacity-75' : ''
            }`}
          >
            <a 
              href={post.link} 
              onClick={() => handlePostClick(post.link)}
              className="block group-hover:bg-white dark:group-hover:bg-[#242424] group-hover:shadow-sm rounded-lg transition-all p-4 -m-4"
            >
              <div className="flex flex-col gap-2">
                <span 
                  className={`inline-flex items-center self-start px-2.5 py-0.5 rounded-full text-xs font-medium ${getTagStyles(post.tag)}`}
                >
                  {post.tag}
                </span>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                  <h2 className={`text-[15px] font-medium transition-colors ${
                    visitedPosts.has(post.link) 
                      ? 'text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200' 
                      : 'dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400'
                  }`}>
                    {post.title}
                  </h2>
                  <time className="text-sm text-gray-500 dark:text-gray-400 shrink-0">{post.date}</time>
                </div>
              </div>
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}