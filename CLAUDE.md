# WEBFOLIO DEVELOPMENT GUIDE

## Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Run type checking with svelte-check

## Code Style
- **Framework**: SvelteKit with TypeScript and Tailwind CSS
- **Components**: PascalCase naming (Header.svelte, Timeline.svelte)
- **Typing**: Use strict typing with interfaces prefixed with "i" (iPage, iTimeLine)
- **Functions/Variables**: camelCase (changeState, activeTab)
- **Imports**: Group by library/local, organize at top of files
- **Styling**: Tailwind utility classes for styling components
- **Event Handling**: Svelte on:click, on:change patterns
- **Icons**: Font Awesome for iconography
- **Project Structure**: 
  - components/ - Reusable UI components
  - pages/ - Page components
  - data/ - Constants and data files
  - routes/ - SvelteKit routes