# Frontend Job Listing UI

## Objective

Build a simple Job Listing user interface that allows users to browse, search, and filter job postings. This task evaluates frontend fundamentals, logic, and basic UI/UX understanding.

## Requirements

- Use React, Vanilla JavaScript, or any frontend framework of your choice.
- Use mock data (static JSON array). No backend required.
- The application should run locally in a browser.

## Job Object Structure

```json
{
  "id": 1,
  "title": "Frontend Intern",
  "company": "Acme Corp",
  "location": "Remote",
  "type": "Internship"
}
```

## Features Implemented

### Core Features

- ✅ **Display a list of job cards** with title, company, location, and type.
- ✅ **Filter jobs by location** - Dropdown filter to show jobs by location (Remote, On-site, Hybrid).
- ✅ **Filter jobs by job type** - Dropdown filter to filter by Internship or Full-time.
- ✅ **Search jobs by title** - Real-time text input search that filters jobs as you type.
- ✅ **Basic responsive layout** - Mobile-friendly design that adapts to different screen sizes.

### Bonus Features (Optional)

- ✅ **Sort jobs alphabetically by title** - Checkbox toggle to sort jobs A-Z.
- ✅ **Highlight the searched keyword** - The searched text is highlighted in the job title for better visibility.

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Better Enhance the Styles of the Components
- **Vanilla CSS** - Custom styling with media queries for responsiveness
- **Font Awesome** - Icons (via CDN)

## Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd Frontend-Job-Listing-UI
```

2. Install dependencies:
```bash
npm install
```

### Running the Application

Start the development server:
```bash
npm run dev
```

Open the URL shown in the terminal (typically `http://localhost:5173`) in your browser.

### Build for Production

To create a production build:
```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  components/
    JobCard.jsx       # Reusable job card component with keyword highlighting
  data/
    jobs.js           # Static mock job data (JSON array)
  App.jsx             # Main application component with state management and filtering logic
  main.jsx            # React entry point
  index.css           # Global styles and responsive media queries
```

## How It Works

1. **Data Loading**: Job data is loaded from `src/data/jobs.js` as a static array.
2. **Filtering Logic**: 
   - Search filters by job title (case-insensitive, partial match)
   - Location filter matches exact location values
   - Job type filter matches exact type values (Internship/Full-time)
   - All filters work together (AND logic)
3. **Sorting**: When enabled, jobs are sorted alphabetically by title (A-Z).
4. **Keyword Highlighting**: Searched terms are highlighted in the job title using regex matching.

## Assumptions

- Job data is **static** and loaded from `src/data/jobs.js` (no backend/API required).
- Location and job type filters dynamically populate from unique values in the mock data.
- Sorting is **optional** and controlled by a checkbox toggle.
- Keyword highlighting is limited to the **title** field for clarity and performance.
- All filters default to "All" options, showing all jobs initially.

## Possible Improvements

With more time, the following enhancements could be added:

- **Pagination or infinite scroll** for handling large job lists efficiently.
- **Advanced filters** - Additional filters for salary range, experience level, skills, etc.
- **URL state management** - Persist filters/search in URL query parameters for shareable links.
- **Backend integration** - Connect to a real job board API or database add mock data.
- **Accessibility improvements** - Enhanced ARIA labels, keyboard navigation, screen reader support.
- **Dark/Light theme toggle** - User preference for color scheme.
- **Job details modal** - Expandable cards or modal view for detailed job information.
- **Favorites/Bookmarks** - Allow users to save jobs for later viewing.

## Project Demonstrates:

- ✅ **JavaScript fundamentals and logic** - Proper use of React hooks, array methods, filtering, and sorting.
- ✅ **Code readability and structure** - Clean component architecture, organized file structure, meaningful variable names.
- ✅ **State management and filtering logic** - Efficient use of React state, useMemo for performance, proper filter chaining.
- ✅ **Basic UI/UX and responsiveness** - Mobile-first design, intuitive filters, clear visual hierarchy, responsive breakpoints.

