# Karthikeyan K - Personal Portfolio

A modern, responsive portfolio website built with Next.js showcasing my work as a Full Stack Developer. The site features a clean design with both light and dark themes, purple accents, and is fully customizable through YAML configuration files.

## Features

- 🌟 **Modern Design**: Clean, professional design with both light and dark themes and purple accents
- 🌓 **Theme Toggle**: Seamless switching between light and dark modes with persistent preferences
- 📱 **Responsive**: Fully responsive design that works on all devices
- ⚡ **Fast**: Built with Next.js for optimal performance
- 🎨 **Customizable**: Easy customization through YAML configuration files
- 📊 **Timeline**: Interactive timeline with scroll-based animations
- 🎭 **Animations**: Smooth animations and transitions throughout
- 🌌 **Background Effects**: Animated starfield and grid background
- 🚀 **Projects Showcase**: Dedicated projects page with technology tags and repository links
- 🔧 **YAML Configuration**: All content managed through easy-to-edit YAML files
- 🎨 **Theme System**: Comprehensive CSS variable-based theme system for easy customization

## Quick Start

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Personal-Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Customize your portfolio**
   - Edit the YAML files in the `config/` directory
   - See [Configuration](#configuration) section for details

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Configuration

The portfolio is fully customizable through YAML configuration files located in the `config/` directory:

### Personal Information (`config/personal.yml`)

```yaml
name: "Your Name"
title: "Your Title"
tagline: "Your tagline"
description: "Your description"
email: "your@email.com"
location: "Your Location"
phone: "+1 234 567 8900"

social:
  github: "https://github.com/yourusername"
  linkedin: "https://www.linkedin.com/in/yourusername"
  twitter: "https://x.com/yourusername"
  instagram: "https://instagram.com/yourusername"

summary: |
  Your professional summary here...

skills:
  - "JavaScript"
  - "React"
  - "Node.js"
  # Add more skills

technologies:
  - "React"
  - "Next.js"
  - "Node.js"
  # Add more technologies
```

### Timeline (`config/timeline.yml`)

```yaml
timeline:
  - year: "2020"
    title: "Your Education/Work Title"
    description: "Description of your experience"
    type: "education" # or "work"

timeline_settings:
  title: "THE JOURNEY"
  subtitle: "Your subtitle"
  intro: "Your introduction text"
  changelog_text: "Changelog"
  changelog_emoji: "🎉"
```

### Projects (`config/projects.yml`)

```yaml
# User-specific project data (customize these)
projects:
  - title: "Project Name"
    duration: "3 Months"
    description: "Project description here..."
    frontend:
      - "React"
      - "CSS"
    backend:
      - "Node.js"
      - "MongoDB"
    repository: "https://github.com/username/project"
    demo: "https://yourproject.com" # Optional

# Customizable section settings
projects_settings:
  title: "Projects"
  subtitle: "A curated selection of things I've built and shipped recently."
  description: "Here are some of my recent projects that showcase my skills."
```

**Note**: The project structure and component logic are defined in `src/constants/projects.js` as templates. Only the data above needs to be customized in the YAML file.

### Site Settings (`config/site.yml`)

```yaml
site:
  name: "Your Portfolio Name"
  description: "Your portfolio description"
  url: "https://yourportfolio.com"
  author: "Your Name"

seo:
  title: "Your Name - Your Title"
  description: "SEO description"
  keywords: ["portfolio", "developer", "web development"]
  og_image: "/og-image.jpg"

navigation:
  - name: "Home"
    href: "/"
  - name: "About"
    href: "/about"
  # Add more navigation items

footer:
  description: "Your footer description"
  thanks_message: "Thanks for stopping by!"
  copyright: "© 2025 Your Name | Portfolio. All rights reserved."

theme:
  primary_color: "#b98fff"
  background_color: "#0b0b0f"
  text_color: "#ffffff"
  accent_color: "#7a6fff"
```

## Project Structure

```
Personal-Portfolio/
├── config/                 # Configuration files
│   ├── personal.yml       # Personal information
│   ├── timeline.yml       # Timeline data
│   ├── projects.yml       # Projects data
│   └── site.yml           # Site settings
├── src/
│   ├── app/               # Next.js app directory
│   │   ├── about/         # About page
│   │   ├── projects/      # Projects page
│   │   ├── layout.js      # Root layout with theme provider
│   │   └── page.js        # Home page
│   ├── components/        # React components
│   │   ├── Footer.js     # Footer component
│   │   ├── JourneyTimeline.js # Timeline component
│   │   ├── Navbar.js     # Navigation with theme toggle
│   │   └── ...
│   ├── contexts/         # React contexts
│   │   └── ThemeContext.js # Theme management context
│   ├── styles/           # CSS styles
│   │   ├── globals.css   # Global styles
│   │   ├── themes.css    # Theme variables and CSS custom properties
│   │   └── sections/     # Section-specific styles
│   │       ├── about.css # About page styles
│   │       ├── navbar.css # Navigation styles
│   │       ├── hero.css  # Hero section styles
│   │       ├── skills.css # Skills section styles
│   │       ├── projects.css # Projects page styles
│   │       └── footer.css # Footer styles
│   ├── constants/        # Constants and templates
│   │   ├── navigation.js # Navigation items
│   │   └── projects.js   # Project templates and structure
│   └── utils/            # Utility functions
│       └── configLoader.js # YAML config loader
├── public/               # Static assets
└── README.md
```

## Customization

### Adding New Pages

1. Create a new page in `src/app/`
2. Add navigation link in `config/site.yml`
3. Update routing as needed

### Modifying Styles

- Global styles: `src/styles/globals.css`
- Component styles: `src/styles/sections/`
- Theme variables: `src/styles/themes.css`
- Theme colors: Update `config/site.yml` theme section

### Theme System

The portfolio includes a comprehensive theme system with light and dark modes:

#### CSS Variables
All colors are defined as CSS custom properties in `src/styles/themes.css`:
- `--bg-primary`, `--bg-secondary`, `--bg-tertiary`: Background colors
- `--text-primary`, `--text-secondary`, `--text-tertiary`: Text colors
- `--accent-primary`, `--accent-secondary`, `--accent-tertiary`: Accent colors
- `--border-primary`, `--border-secondary`: Border colors
- `--shadow-primary`, `--shadow-secondary`: Shadow colors

#### Theme Context
The theme system uses React Context (`src/contexts/ThemeContext.js`) for state management:
- Automatic theme persistence in localStorage
- Hydration-safe implementation
- Smooth transitions between themes

#### Adding New Themes
To add a new theme, add a new `[data-theme="theme-name"]` selector in `themes.css` and update the context accordingly.

### Adding New Components

1. Create component in `src/components/`
2. Import and use in pages
3. Add styles if needed

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Heroku

## Technologies Used

- **Next.js 15** - React framework with App Router
- **React 18** - UI library
- **CSS3** - Styling with modern features
- **YAML** - Configuration management
- **js-yaml** - YAML parsing
- **Node.js** - Backend development
- **MongoDB** - Database
- **Git** - Version control

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help customizing your portfolio, please open an issue on GitHub.

---

**Built with ❤️ by Karthikeyan K** 🚀