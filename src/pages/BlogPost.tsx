import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

export function BlogPost() {
  const { slug } = useParams();

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#1a1a1a] relative">
      {/* Back button - Desktop Only */}
      <div className="hidden lg:block fixed top-24 left-6 z-40">
        <Link 
          to="/blog"
          className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
        >
          <ArrowLeft size={16} className="mr-1" />
          Back to Blog
        </Link>
      </div>

      {/* Table of Contents - Desktop Only */}
      <div className="hidden lg:block fixed top-40 left-[max(2rem,calc(50%-45rem))] w-56">
        <h4 className="text-sm font-medium text-gray-900 dark:text-gray-200 mb-4">Table of Contents</h4>
        <nav className="space-y-1">
          <a href="#introduction" className="block text-[13px] text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">Introduction</a>
          <a href="#getting-started" className="block text-[13px] text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">Getting Started</a>
          <a href="#prerequisites" className="block text-[13px] pl-4 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">Prerequisites</a>
          <a href="#installation" className="block text-[13px] pl-4 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">Installation</a>
          <a href="#core-concepts" className="block text-[13px] text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">Core Concepts</a>
          <a href="#components" className="block text-[13px] pl-4 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">Components</a>
          <a href="#state-management" className="block text-[13px] pl-4 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">State Management</a>
          <a href="#conclusion" className="block text-[13px] text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">Conclusion</a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-6 py-16">
        <article className="prose prose-gray dark:prose-invert max-w-none">
          <h1 id="introduction" className="text-3xl font-medium mb-8 text-gray-900 dark:text-gray-100">
            Building a Modern Web Application with React and TypeScript
          </h1>

          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-12">
            <time>March 15, 2024</time>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              Tech
            </span>
          </div>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-12">
            Modern web development has evolved significantly over the years, and building 
            robust applications requires a solid understanding of various tools and best practices.
            In this comprehensive guide, we'll explore how to create a production-ready web 
            application using React and TypeScript.
          </p>

          <h2 id="getting-started" className="text-2xl font-medium mt-16 mb-6 text-gray-900 dark:text-gray-100">
            Getting Started
          </h2>

          <h3 id="prerequisites" className="text-xl font-medium mt-8 mb-4 text-gray-800 dark:text-gray-200">
            Prerequisites
          </h3>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Before we begin, ensure you have the following tools installed on your system:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-8">
            <li>Node.js (version 18 or higher)</li>
            <li>npm or yarn package manager</li>
            <li>A code editor (VS Code recommended)</li>
          </ul>

          <h3 id="installation" className="text-xl font-medium mt-8 mb-4 text-gray-800 dark:text-gray-200">
            Installation
          </h3>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Let's start by creating a new project using Vite, a modern build tool that offers 
            instant server start and lightning-fast HMR.
          </p>

          <pre className="bg-gray-50 dark:bg-[#2a2a2a] p-4 rounded-lg overflow-x-auto mb-8">
            <code className="text-gray-800 dark:text-gray-300">npm create vite@latest my-app -- --template react-ts</code>
          </pre>

          <h2 id="core-concepts" className="text-2xl font-medium mt-16 mb-6 text-gray-900 dark:text-gray-100">
            Core Concepts
          </h2>

          <h3 id="components" className="text-xl font-medium mt-8 mb-4 text-gray-800 dark:text-gray-200">
            Components
          </h3>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            React components are the building blocks of your application. With TypeScript, 
            we can add type safety to our components, making them more maintainable and 
            less prone to errors.
          </p>

          <h3 id="state-management" className="text-xl font-medium mt-8 mb-4 text-gray-800 dark:text-gray-200">
            State Management
          </h3>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Effective state management is crucial for building scalable applications. 
            We'll explore various approaches, from local component state to global 
            state management solutions.
          </p>

          <h2 id="conclusion" className="text-2xl font-medium mt-16 mb-6 text-gray-900 dark:text-gray-100">
            Conclusion
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Building modern web applications with React and TypeScript offers numerous 
            benefits, from improved developer experience to better maintainability. 
            By following the practices outlined in this guide, you'll be well-equipped 
            to create robust and scalable applications.
          </p>
        </article>
      </div>
    </div>
  );
}