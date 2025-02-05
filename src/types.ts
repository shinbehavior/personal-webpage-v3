export interface TimelineItem {
  type: 'blog' | 'project';
  title: string;
  date: string;
  description: string;
  link?: string;
  isNew?: boolean;
}