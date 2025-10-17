import React from 'react';
import SectionHeading from './SectionHeading';

export default function Education({ data }) {
  const { sectionHeading, allEducation } = data;

  return (
    <section className="section gray-bg" id="education">
      <div className="container">
        <SectionHeading
          miniTitle={sectionHeading.miniTitle}
          title={sectionHeading.title}
        />

        <div className="timeline">
          {allEducation?.map((item, index) => (
            <div
              className="timeline-item"
              key={index}
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay={index * 100}
            >
              <div className="timeline-content">
                <h4 className="designation">{item.degree}</h4>
                <h5 className="company">{item.school}</h5>
                <p className="duration">{item.duration}</p>
                <p className="description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
