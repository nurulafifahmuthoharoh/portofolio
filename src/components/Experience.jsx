import React from 'react';
import SectionHeading from './SectionHeading';

export default function Experience({ data = {} }) {
  // Beri nilai default biar tidak error saat data belum dikirim
  const { sectionHeading = {}, allExperience = [] } = data;

  return (
    <section className="section gray-bg" id="experience">
      <div className="container">
        {/* Heading Section */}
        <SectionHeading
          miniTitle={sectionHeading.miniTitle || 'My Resume'}
          title={sectionHeading.title || 'Working Experience'}
        />

        {/* Timeline Content */}
        <div className="timeline">
          {allExperience.length > 0 ? (
            allExperience.map((item, index) => (
              <div
                className="timeline-item"
                key={index}
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay={index * 100}
              >
                <div className="timeline-content">
                  <h4 className="designation">{item.designation}</h4>
                  <h5 className="company">{item.company}</h5>
                  <p className="duration">{item.duration}</p>
                  <label className="job-type">{item.jobType}</label>
                  <h6 className="title mt-2">{item.companyTitle}</h6>
                  <p className="description">{item.companyDescription}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400 mt-3">
              No experience data available.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
