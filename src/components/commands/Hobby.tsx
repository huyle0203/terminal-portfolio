import React from 'react';
import { GoVerified } from 'react-icons/go';
import { SiGithub, SiInstagram, SiLinkedin, SiPatreon, SiYoutube } from 'react-icons/si';
import { ImageSlider } from '../ImageSlider';

export default function Hobby() {
  const IMAGES = [
    { url: '/IMG_2640.png', alt: 'Hobby Image 1' },
    { url: '/IMG_1163.jpg', alt: 'Hobby Image 2' },
    { url: '/IMG_7712.jpg', alt: 'Hobby Image 3' },
    { url: '/fallConcert.png', alt: 'Hobby Image 4' },
    { url: '/HuyLe.png', alt: 'Hobby Image 5' },
    { url: '/IMG_2737.png', alt: 'Hobby Image 6' },
  ];

  return (
    <div>
      <p className="mt-2 mb-2 w-11/12 mx-auto">
        I love to DJ for parties and friends' birthdays. I got to open for BBNO$'s College Concert too! Hope one day I will make it to EDC, Coachella and Tomorrowland
        lol! Is Anyone here a fan of EDM, like Bass House, Future House, and Speed House?
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
      <a
          href="https://www.instagram.com/reel/DCoQctXR5Fx/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          className="text-white hover:text-red-500 block text-center my-5"
      >
          See How I Hype the Crowd!
      </a>


      </div>
  );
}