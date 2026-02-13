import React from "react";

function highlightTitle(title, searchTerm) {
  if (!searchTerm.trim()) return title;

  const escaped = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`(${escaped})`, "ig");
  const parts = title.split(regex);

  return parts.map((part, index) =>
    regex.test(part) ? (
      <span key={index} className="job-card__title-highlight">
        {part}
      </span>
    ) : (
      <span key={index}>{part}</span>
    )
  );
}

export const JobCard = ({ job, searchTerm }) => {
  const getBadgeClass = (type) => {
    const normalized = type.toLowerCase().replace(/\s+/g, '-');
    return normalized === 'full-time' ? 'fulltime' : normalized;
  };

  return (
    <article className="job-card">
      <div className="job-card__content">
        <div className="job-card__header">
          <h3 className="job-card__title">
            {highlightTitle(job.title, searchTerm)}
          </h3>
          <span className={`job-card__badge job-card__badge--${getBadgeClass(job.type)}`}>
            {job.type}
          </span>
        </div>
        <p className="job-card__company">{job.company}</p>
        <div className="job-card__footer">
          <div className="job-card__location">
            <svg className="job-card__location-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" fill="currentColor"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M8 1a5 5 0 0 0-5 5c0 3.5 5 9 5 9s5-5.5 5-9a5 5 0 0 0-5-5zm0 7.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" fill="currentColor"/>
            </svg>
            <span>{job.location}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

