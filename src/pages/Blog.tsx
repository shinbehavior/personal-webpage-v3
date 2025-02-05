import React, { useEffect, useState } from 'react';
import type { LinkProps } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { BlogPost } from '../types';
import { getAllPosts } from '../utils/blog';

export function Blog() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [visitedPosts, setVisitedPosts] = useState<Set<string>>(new Set());

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  useEffect(() => {
    // Load visited posts from localStorage
    const savedVisitedPosts = localStorage.getItem('visitedPosts');
    if (savedVisitedPosts) {
      setVisitedPosts(new Set(JSON.parse(savedVisitedPosts)));
    }
  }, []);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const posts = await getAllPosts();
        setBlogPosts(posts);
      } catch (error) {
        console.error('Error loading posts:', error);
      }
    };
    
    loadPosts();
  }, []);

  const handlePostClick = (slug: string) => {
    const updatedVisitedPosts = new Set(visitedPosts).add(slug);
    setVisitedPosts(updatedVisitedPosts);
    localStorage.setItem('visitedPosts', JSON.stringify(Array.from(updatedVisitedPosts)));
  };

  const getTagStyles = (tag: 'Tech' | 'Life' | 'Other'): string => {
    switch (tag) {
      case 'Tech':
        return 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300';
      case 'Life':
        return 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300';
      case 'Other':
        return 'bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300';
    }
  };

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
        {blogPosts.map((post) => (
          <article 
            key={post.slug} 
            className={`py-6 first:pt-0 last:pb-0 group ${
              visitedPosts.has(post.slug) ? 'opacity-75' : ''
            }`}
          >
            <Link 
              to={`/blog/${post.slug}`}
              onClick={() => handlePostClick(post.slug)}
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
                    visitedPosts.has(post.slug) 
                      ? 'text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200' 
                      : 'dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400'
                  }`}>
                    {post.title}
                    {post.isNew && (
                      <span className="ml-2 inline-block px-2 py-0.5 text-[11px] font-medium bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 rounded-full leading-none">
                        NEW
                      </span>
                    )}
                  </h2>
                  <time className="text-sm text-gray-500 dark:text-gray-400 shrink-0">
                    {formatDate(post.date)}
                  </time>
                </div>
                <p className="text-[13px] text-gray-600 dark:text-gray-400 leading-relaxed">
                  {post.description}
                </p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}