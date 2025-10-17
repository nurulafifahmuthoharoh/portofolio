import { Icon } from '@iconify/react';
import React from 'react';
import parser from 'html-react-parser';
import { Link as ScrollLink } from 'react-scroll';

export default function About({ data }) {
  // Ambil data dari props
  const { imgSrc, miniTitle, title, description, skills, btnText, btnUrl } = data;

  return (
    <section className="about-section section" id="about">
      <div className="container">
        {/* Efek dekorasi */}
        <div className="effect-1">
          <img
            src="/images/effect-1.svg"
            alt="Shape"
            data-aos="zoom-in"
            data-aos-duration="1200"
            data-aos-delay="500"
          />
        </div>
        <div className="effect-2">
          <img
            src="/images/effect-2.svg"
            alt="Shape"
            data-aos="zoom-in"
            data-aos-duration="1200"
            data-aos-delay="400"
          />
        </div>

        {/* Konten utama */}
        <div className="row align-items-center justify-content-center gy-5">
          {/* Gambar kiri */}
          <div
            className="col-lg-6 col-xl-5"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="500"
          >
            <div className="about-banner text-center">
              <img src={imgSrc} alt="Thumb" className="img-fluid rounded-3 shadow-lg" />
            </div>
          </div>

          {/* Teks kanan */}
          <div className="col-lg-6 col-xl-5 px-lg-5">
            <div
              className="about-text"
              data-aos="fade"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              {/* Judul */}
              <div className="section-heading mb-4">
                {miniTitle && (
                  <h6 className="text-teal-400 uppercase tracking-wide">
                    <span>{miniTitle}</span>
                  </h6>
                )}
                {title && (
                  <h2 className="text-3xl font-bold text-white leading-snug">
                    {parser(title)}
                  </h2>
                )}
              </div>

              <p className="text-gray-300 mb-4">{description}</p>

              {/* === Skill Bars (2 kolom) === */}
              <div className="skill-bars mt-4">
                <div
                  className="skills-grid"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '20px 40px',
                  }}
                >
                  {skills?.map((skill, index) => (
                    <div className="skill-item" key={index}>
                      <div
                        className="skill-header"
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          marginBottom: '5px',
                        }}
                      >
                        <h6
                          style={{
                            fontSize: '14px',
                            fontWeight: 500,
                            color: '#14A3B8',
                          }}
                        >
                          {skill.title}
                        </h6>
                        <span
                          style={{
                            fontSize: '13px',
                            color: '#14A3B8',
                          }}
                        >
                          {skill.percentage}%
                        </span>
                      </div>
                      <div
                        className="skill-bar"
                        style={{
                          width: '100%',
                          backgroundColor: '#222',
                          borderRadius: '5px',
                          overflow: 'hidden',
                          height: '8px',
                        }}
                      >
                        <div
                          className="skill-progress"
                          style={{
                            width: `${skill.percentage}%`,
                            backgroundColor: '#14A3B8',
                            height: '8px',
                            borderRadius: '5px',
                            transition: 'width 0.6s ease',
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tombol kontak */}
              <div className="btn-bar mt-5">
                <ScrollLink
                  to={btnUrl}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={300}
                  className="px-btn inline-flex items-center gap-2 text-white bg-teal-500 hover:bg-teal-600 px-4 py-2 rounded-full transition-all"
                >
                  <span>{btnText}</span>
                  <i>
                    <Icon icon="bi:arrow-right" />
                  </i>
                </ScrollLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
