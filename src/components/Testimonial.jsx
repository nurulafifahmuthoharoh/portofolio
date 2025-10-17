import React from 'react';
import SectionHeading from './SectionHeading';

export default function Award({ data }) {
  const { sectionHeading, allAward } = data;

  return (
    <section className="section gray-bg" id="award">
      <div className="container">
        <SectionHeading
          miniTitle={sectionHeading.miniTitle}
          title={sectionHeading.title}
        />

        <div className="timeline">
          {allAward?.map((item, index) => (
            <div
              className="timeline-item"
              key={index}
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay={index * 100}
            >
              <div className="timeline-content">
                <h5 className="designation">{item.title}</h5>
                <p className="description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
