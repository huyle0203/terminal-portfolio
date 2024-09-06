import React from 'react';
import { GoVerified } from 'react-icons/go';
import { SiGithub, SiInstagram, SiLinkedin, SiPatreon, SiYoutube } from 'react-icons/si';
import { ImageSlider } from '../ImageSlider';

export default function Hobby() {
  const IMAGES = [
    { url: '/IMG_2640.png', alt: 'Hobby Image 1' },
    { url: '/IMG_1163.jpg', alt: 'Hobby Image 2' },
    { url: '/IMG_7712.jpg', alt: 'Hobby Image 3' },
  ];

  return (
    <div>
      <p className="mt-2 mb-2 w-11/12 mx-auto">
        I love to DJ for parties and friends' birthdays! Hope one day I will make it to EDC, Coachella and Tomorrowland
        lol! Is Anyone here a fan of EDM, Techno, and Future House?
      </p>
      <div
        className="mt-2 mb-2 w-11/12 mx-auto"
        style={{
          //maxWidth: '1200px',
          width: '50%',
          aspectRatio: '10 / 6',
          margin: '1 auto',
        }}
      >
        <ImageSlider images={IMAGES} />
      </div>
      <a href="/" style={{ fontSize: '1rem' }}>
        Link
      </a>
    </div>
  );
}