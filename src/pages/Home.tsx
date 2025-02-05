import React from 'react';
import { Github, Twitter } from 'lucide-react';
import { TimelineItem } from '../types';
import { Timeline } from '../components/Timeline';

export function Home() {
  const timelineItems: TimelineItem[] = [
    {
      type: 'project',
      title: 'Personal Portfolio Website',
      date: 'Feb 5, 2025',
      description: 'A minimalist portfolio built with React, TypeScript, and Tailwind CSS.',
      link: '/projects/',
      isNew: true
    },
    {
      type: 'blog',
      title: 'Llama Hackaton by META 2nd place',
      date: 'Feb 3, 2025',
      description: 'My team was phenomenal and our idea was cold asf',
      link: '/projects',
    },
    {
      type: 'project',
      title: 'HabitXp',
      date: 'December 30, 2024',
      description: 'Habit tracker with streaks and leaderboard',
      link: '/projects/',
    },
    {
      type: 'blog',
      title: 'imagination',
      date: 'November 5, 2024',
      description: 'pop-culture effect',
      link: '/blog/imagination',
    }
  ];

  return (
    <div className="max-w-3xl mx-auto px-6">
      <header className="mb-16">
        <p className="text-[15px] leading-relaxed text-gray-800 dark:text-gray-300 mb-4">
        mle. based in norway. specializing in computer vision, LLMs, and ML model pipelines. experienced in dataset management, model tuning, and layer optimization. dedicated to research. just a guy who's curious and wants to make this world better. feel free to hit me up in DMs on X at any time!
        </p>
        <div className="flex gap-4">
          <a 
            href="https://github.com/shinbehavior" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          >
            <Github size={18} />
          </a>
          <a 
            href="https://x.com/shinbehavior" 
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