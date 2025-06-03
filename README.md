# Mestiza Collections

A modern e-commerce website showcasing Mestiza Collections' products and brand story.

## Project Structure

### Source Directory (`/src`)

#### Main Files
- `main.jsx` - Application entry point
- `App.jsx` - Root component with main layout structure
- `index.css` - Global styles
- `App.css` - Application-specific styles

#### Components Directory (`/src/components`)

##### Main Sections
1. **HeroIntro** - Landing page hero section
2. **FounderSection** - Founder's story and brand introduction
3. **CollabSection** - Collaboration showcase
4. **YogaEdit** - Yoga collection showcase
5. **CallToAction** - Call to action section

##### Collection Sections (`/src/components/collection/`)
1. **MonogramSection** - Monogram collection showcase
2. **BlackCollection** - Black collection showcase
3. **DottedCollection** - Dotted collection showcase
4. **WhiteCollection** - White collection showcase
5. **GreenCollection** - Green collection showcase

#### Assets Directory (`/src/assets/`)
- Contains all images, icons, and other static assets used in the application

### Features
- Responsive design
- Modern UI/UX
- Collection showcases
- Brand storytelling
- Product galleries
- Smooth scroll snapping between sections

### Technologies Used
- React
- Vite
- CSS Modules
- React Slick (for carousels)

### Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

### Development
The project uses Vite as the build tool and development server. The main application structure is organized into modular components, each handling a specific section of the website.

### Styling
- Global styles are managed through `index.css`
- Component-specific styles use CSS modules
- Responsive design is implemented throughout all components
- Scroll snapping for smooth section transitions

### Collections
Each collection section is implemented as a separate component, allowing for easy maintenance and updates. Collections include:
- Monogram Collection
- Black Collection
- Dotted Collection
- White Collection
- Green Collection

### Brand Sections
The website includes several sections dedicated to brand storytelling:
- Hero Introduction
- Founder's Story
- Collaboration Showcase
- Yoga Edit
- Call to Action

### Scroll Snapping
The website implements smooth scroll snapping between sections using CSS scroll-snap properties:
- Vertical scroll snapping
- Smooth transitions between sections
- Custom scrollbar styling
- Optimized for touch and mouse interactions
