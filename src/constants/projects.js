// Projects template structure
// This file contains the template structure for projects
// User-specific data comes from config/projects.yml

export const PROJECT_TEMPLATE = {
  title: '',
  duration: '',
  description: '',
  frontend: [],
  backend: [],
  repository: '',
  demo: null, // Optional demo link
};

// Project card component structure
export const PROJECT_CARD_STRUCTURE = {
  header: {
    title: 'project.title',
    duration: 'project.duration'
  },
  content: {
    description: 'project.description',
    technologies: {
      frontend: 'project.frontend',
      backend: 'project.backend'
    },
    links: {
      repository: 'project.repository',
      demo: 'project.demo' // Optional
    }
  }
};

// Default project settings
export const DEFAULT_PROJECT_SETTINGS = {
  title: 'Projects',
  subtitle: 'A curated selection of things I\'ve built and shipped recently.',
  description: 'Here are some of my recent projects that showcase my skills and experience.'
};
