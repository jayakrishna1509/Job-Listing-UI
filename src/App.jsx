import React, { useMemo, useState } from "react";
import jobsData from "./data/jobs";
import { JobCard } from "./components/JobCard";
import "./index.css";

const ALL_LOCATIONS = "All Locations";
const ALL_TYPES = "All Types";

const JOBS_DATA = Array.isArray(jobsData) ? jobsData : [];

function getUniqueValues(list, key) {
  if (!Array.isArray(list) || list.length === 0) return [];
  const values = list.map((item) => item && item[key]).filter((v) => v != null && v !== "");
  return Array.from(new Set(values)).sort();
}

export const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState(ALL_LOCATIONS);
  const [typeFilter, setTypeFilter] = useState(ALL_TYPES);
  const [sortByTitle, setSortByTitle] = useState(false);

  const locations = useMemo(
    () => [ALL_LOCATIONS, ...getUniqueValues(JOBS_DATA, "location")],
    []
  );
  const jobTypes = useMemo(
    () => [ALL_TYPES, ...getUniqueValues(JOBS_DATA, "type")],
    []
  );

  const filteredJobs = useMemo(() => {
    let result = JOBS_DATA.filter((job) => {
      if (!job || typeof job !== "object") return false;
      const title = (job.title || "").toLowerCase();
      const search = (searchTerm || "").toLowerCase().trim();
      const matchesTitle = !search || title.includes(search);
      const loc = (locationFilter || "").trim();
      const matchesLocation = loc === ALL_LOCATIONS || (job.location != null && String(job.location) === loc);
      const type = (typeFilter || "").trim();
      const matchesType = type === ALL_TYPES || (job.type != null && String(job.type) === type);
      return matchesTitle && matchesLocation && matchesType;
    });

    if (sortByTitle) {
      result = [...result].sort((a, b) =>
        (a.title || "").localeCompare(b.title || "", undefined, { sensitivity: "base" })
      );
    }

    return result;
  }, [searchTerm, locationFilter, typeFilter, sortByTitle]);

  return (
    <div className="app">
      <header className="app-header">
        <div className="app-header__content">
          <h1 className="app-title">Frontend Job Listing UI</h1>
          <p className="app-subtitle">
            Browse Internships and Full-Time Jobs with Filters.
          </p>
          <div className="hero-search">
            <div className="input-wrapper input-wrapper--hero">
              <i className="fas fa-search input-icon" aria-hidden="true" />
              <input
                id="search"
                type="text"
                placeholder="Search Job Title"
                className="text-input text-input--hero"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </header>

      <main className="app-main">
        <div className="app-main__container">
          <aside className="controls">
            <h2 className="controls__title">Filters</h2>

            <div className="controls__section">
              <label htmlFor="location-filter" className="field-label">
                Location
              </label>
              <div className="select-wrapper">
                <select
                  id="location-filter"
                  className="select-input"
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                >
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="controls__section">
              <label htmlFor="type-filter" className="field-label">
                Job type
              </label>
              <div className="select-wrapper">
                <select
                  id="type-filter"
                  className="select-input"
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                >
                  {jobTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="controls__section">
              <label className="checkbox-wrapper">
                <input
                  type="checkbox"
                  checked={sortByTitle}
                  onChange={(e) => setSortByTitle(e.target.checked)}
                  className="checkbox-input"
                />
                <span className="checkbox-label">Sort Alphabetically by Title</span>
              </label>
            </div>
          </aside>

          <section className="results">
            <header className="results__header">
              <h2 className="results__title">Job Listings</h2>
              <p className="results__count">
                Showing <strong>{filteredJobs.length}</strong> of{" "}
                <strong>{JOBS_DATA.length}</strong> jobs
              </p>
            </header>

            {filteredJobs.length === 0 ? (
              <div className="results__empty" role="status" aria-live="polite">
                <i className="fas fa-briefcase results__empty-icon" aria-hidden="true" />
                <h3 className="results__empty-title">No jobs found</h3>
                <p className="results__empty-subtitle">
                  No listings match your current search or filters. Try a different search term, or set Location and Job type to “All” to see everything.
                </p>
              </div>
            ) : (
              <div className="results__grid">
                {filteredJobs.map((job) => (
                  <JobCard key={job.id} job={job} searchTerm={searchTerm} />
                ))}
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
};

export default App;
