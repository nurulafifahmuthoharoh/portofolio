import React, { useEffect } from 'react';
import Brands from '../components/Brands';
import Projects from '../components/Projects';
import Award from '../components/Testimonial';
import Hero from '../components/Hero';
import About from '../components/About';
import Education from '../components/Service';
import HomePagdData from '../data/HomePagdData.json';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

export default function Home() {
  const {
    hero,
    socialBtns,
    brands,
    about,
    projects,
    education,
    experience,
    award,
    contact,
  } = HomePagdData;
  return (
    <>
      <Hero data={hero} socialData={socialBtns} />
      <Brands data={brands} />
      <Education data={education} />
      <About data={about} /> 
      <Experience data={experience} />
      <Projects data={projects} /> 
      <Award data={award} />
      <Contact data={contact} socialData={socialBtns} />
    </>
  );
}
