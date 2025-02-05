import React from 'react';
import { Github, Twitter } from 'lucide-react';
import { TimelineItem } from '../types';
import { Timeline } from '../components/Timeline';

export function Home() {
  const timelineItems: TimelineItem[] = [
    {
      type: 'blog',
      title: 'Building a Modern Web Application with React and TypeScript',
      date: 'March 15, 2024',
      description: 'A comprehensive guide on creating scalable web applications using React 18 and TypeScript.',
      link: '/blog/modern-web-application',
      isNew: true
    },
    {
      type: 'project',
      title: 'Personal Portfolio Website',
      date: 'March 1, 2024',
      description: 'A minimalist portfolio built with React, TypeScript, and Tailwind CSS.',
      link: '/projects/portfolio',
    },
    {
      type: 'blog',
      title: 'The Power of Server Components in React',
      date: 'February 20, 2024',
      description: 'Exploring the benefits and use cases of React Server Components.',
      link: '/blog/server-components',
    },
    {
      type: 'project',
      title: 'Task Management API',
      date: 'February 1, 2024',
      description: 'RESTful API built with Node.js and Express for task management.',
      link: '/projects/task-api',
    }
  ];

  return (
    <div className="max-w-3xl mx-auto px-6">
      <header className="mb-16">
        <p className="text-[15px] leading-relaxed text-gray-800 dark:text-gray-300 mb-4">
          Physical Intelligence is bringing general-purpose AI into the physical world. 
          We are a group of engineers, scientists, roboticists, and company builders 
          developing Foundation models and learning algorithms to power the robots of 
          today and the physically-actuated devices of the future.
        </p>
        <div className="flex gap-4">
          <a 
            href="https://github.com/physical-intelligence" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          >
            <Github size={18} />
          </a>
          <a 
            href="https://twitter.com/physicalintel" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          >
            <Twitter size={18} />
          </a>
        </div>
      </header>

      <Timeline items={timelineItems} />
    </div>
  );
}