import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  date: string;
  description: string;
  image?: string;
  link: string;
  githubUrl?: string;
  bulletPoints: string[];
}

export function Projects() {
  const projects: Project[] = [
    {
      title: 'AI-Powered Task Management',
      date: 'March 1, 2024',
      description: 'A smart task management system that uses AI to prioritize and categorize tasks automatically.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=400',
      link: '/projects/ai-task-manager',
      githubUrl: 'https://github.com/username/ai-task-manager',
      bulletPoints: [
        'Natural language processing for task interpretation',
        'Smart task categorization and priority assignment',
        'Real-time collaboration features',
        'Progressive Web App (PWA) support'
      ]
    },
    {
      title: 'Distributed Cache System',
      date: 'February 1, 2024',
      description: 'High-performance distributed caching system built for scale.',
      link: '/projects/distributed-cache',
      githubUrl: 'https://github.com/username/distributed-cache',
      bulletPoints: [
        'Consistent hashing for node distribution',
        'Configurable eviction policies',
        'Support for multiple data types',
        'Monitoring and analytics dashboard'
      ]
    },
    {
      title: 'Real-time Data Pipeline',
      date: 'January 15, 2024',
      description: 'Scalable data pipeline for processing real-time events and analytics.',
      image: 'https://images.unsplash.com/photo-1527474305487-b87b222841cc?auto=format&fit=crop&q=80&w=400',
      link: '/projects/data-pipeline',
      githubUrl: 'https://github.com/username/data-pipeline',
      bulletPoints: [
        'Stream processing with Apache Kafka',
        'Custom aggregation framework',
        'Fault-tolerant architecture',
        'Real-time metrics and alerting'
      ]
    },
    {
      title: 'Machine Learning Platform',
      date: 'January 5, 2024',
      description: 'End-to-end platform for training and deploying machine learning models at scale.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=400',
      link: '/projects/ml-platform',
      githubUrl: 'https://github.com/username/ml-platform',
      bulletPoints: [
        'Automated model training pipeline',
        'Model versioning and A/B testing',
        'Real-time inference API',
        'Performance monitoring dashboard'
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6">
      <header className="mb-16">
        <h1 className="text-2xl font-medium mb-4 dark:text-white">Projects</h1>
        <p className="text-[15px] leading-relaxed text-gray-800 dark:text-gray-300">
          A collection of open-source projects and experiments in software development,
          machine learning, and distributed systems.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="bg-white dark:bg-[#242424] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
          >
            {project.image && (
              <div className="h-40 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-baseline justify-between mb-4">
                <h2 className="text-lg font-medium dark:text-white">{project.title}</h2>
                <time className="text-sm text-gray-500 dark:text-gray-400 ml-4 shrink-0">{project.date}</time>
              </div>
              
              <p className="text-[15px] text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <ul className="space-y-2 mb-6 flex-1">
                {project.bulletPoints.map((point, i) => (
                  <li key={i} className="flex items-start text-[13px] text-gray-600 dark:text-gray-400">
                    <span className="mr-2 mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-300 dark:bg-gray-600" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                <a 
                  href={project.link}
                  className="inline-flex items-center gap-1 text-[13px] text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                >
                  View Project <ExternalLink size={14} className="ml-0.5" />
                </a>
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl}
                    className="inline-flex items-center gap-1 text-[13px] text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <Github size={14} /> Source
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}