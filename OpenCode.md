# WEBFOLIO DEVELOPMENT GUIDE

## Commands
- `npm run dev` - Start development server
- `npm run dev -- --open` - Start dev server and open in browser
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Run type checking with svelte-check
- `npm run check:watch` - Run type checking in watch mode

## Code Style
- **Framework**: SvelteKit with TypeScript and Tailwind CSS
- **Components**: PascalCase naming (Header.svelte, Timeline.svelte)
- **Types**: 
  - Use strict typing with interfaces prefixed with "i" (iPage, iTimeLine)
  - Export types with "T" prefix or descriptive names (WorkCategoryOption)
- **Functions/Variables**: camelCase (changeState, activeTab)
- **Imports**: Group by library/local, organize at top of files
- **Styling**: Use Tailwind utility classes for styling components
- **Event Handling**: Use Svelte on:click, on:change patterns
- **Error Handling**: Use try/catch blocks for async operations
- **Icons**: Use Font Awesome for iconography via svelte-fa

## Project Structure
- `components/` - Reusable UI components
- `pages/` - Page components
- `data/` - Constants and data files
- `routes/` - SvelteKit routes
- `assets/` - Static assets and SVG components
- `libs/` - Utility libraries and functions