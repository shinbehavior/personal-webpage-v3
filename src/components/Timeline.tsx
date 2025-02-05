import React from 'react';
import { FolderGit2 } from 'lucide-react';
import { TimelineItem } from '../types';
import { Link } from 'react-router-dom';

interface TimelineProps {
  items: TimelineItem[];
  title?: string;
}

export function Timeline({ items, title = 'Latest' }: TimelineProps) {
  return (
    <section>
      <h2 className="text-lg font-medium mb-8 dark:text-white">{title}</h2>
      <div className="relative">
        {/* Vertical Timeline Line */}
        <div className="absolute left-[9px] top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700" />
        
        <div className="space-y-8">
          {items.map((item, index) => (
            <div key={index} className="group relative pl-12">
              {/* Timeline Marker */}
              <div className="absolute left-0 top-1.5">
                {item.type === 'project' ? (
                  <div className="relative z-10 bg-[#fafafa] dark:bg-[#1a1a1a] flex items-center justify-center w-[18px] h-[18px] transition-colors group-hover:text-blue-500 dark:text-gray-400 dark:group-hover:text-blue-400">
                    <FolderGit2 size={18} className="transition-colors" />
                  </div>
                ) : (
                  <div className="w-[9px] h-[9px] rounded-full bg-gray-400 dark:bg-gray-500 relative z-10 transition-colors group-hover:bg-blue-500 dark:group-hover:bg-blue-400" />
                )}
              </div>
              
              {/* Card Content */}
              <Link 
                to={item.link || '#'} 
                className="block -mt-1.5 p-4 rounded-lg transition-all hover:bg-white dark:hover:bg-[#242424] hover:shadow-sm"
              >
                <div className="flex items-center justify-between gap-4 mb-1">
                  <div className="flex items-center gap-2 min-w-0">
                    {item.isNew && (
                      <span className="relative shrink-0 px-2 py-0.5 text-[11px] font-medium bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 rounded-full leading-none overflow-hidden">
                        NEW
                        <div className="absolute inset-0 w-3 h-full bg-white/40 dark:bg-white/10 skew-x-12 animate-shine" />
                      </span>
                    )}
                    <h3 className={`text-[15px] font-medium truncate transition-colors ${
                      'group-hover:text-blue-600 dark:text-gray-200 dark:group-hover:text-blue-400'
                    }`}>
                      {item.title}
                    </h3>
                  </div>
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400 shrink-0">{item.date}</span>
                </div>
                <p className="text-[13px] text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}