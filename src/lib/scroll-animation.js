import gsap from 'gsap';

export const scrollAnimation = (position, target, onUpdate, isMobile) => {
  const tl = gsap.timeline();

  tl.to(position, {
    x: !isMobile ? -3.38 : -7.0,
    y: !isMobile ? -10.74 : -12.2,
    z: !isMobile ? -5.93 : -6.0,
    scrollTrigger: {
      trigger: '.sound-section',
      start: 'top bottom', //Top of sound section meets the bottom of viewport
      end: 'top top', //Top of section meets top of viewport
      scrub: 2, //This is a transition property (the 2 is a delay) we can also set it to true
      immediateRender: false,
    },
    onUpdate,
  });
  tl.to(target, {
    x: !isMobile ? 1.52 : 0.7,
    y: !isMobile ? 0.77 : 1.9,
    z: !isMobile ? -1.08 : 0.7,
    scrollTrigger: {
      trigger: '.sound-section',
      start: 'top bottom', //Top of sound section meets the bottom of viewport
      end: 'top top', //Top of section meets top of viewport
      scrub: 2, //This is a transition property (the 2 is a delay) we can also set it to true
      immediateRender: false,
    },
  });
  tl.to('.jumbotron-section', {
    opacity: 0,
    scrollTrigger: {
      trigger: '.sound-section',
      start: 'top bottom', //Top of sound section meets the bottom of viewport
      end: 'top top', //Top of section meets top of viewport
      scrub: 2, //This is a transition property (the 2 is a delay) we can also set it to true
      immediateRender: false,
    },
  });
  tl.to('.sound-section-content', {
    opacity: 1,
    scrollTrigger: {
      trigger: '.sound-section',
      start: 'top bottom', //Top of sound section meets the bottom of viewport
      end: 'top top', //Top of section meets top of viewport
      scrub: 2, //This is a transition property (the 2 is a delay) we can also set it to true
      immediateRender: false,
    },
  });
  tl.to(position, {
    x: !isMobile ? 1.56 : 9.36,
    y: !isMobile ? 5.0 : 10.95,
    z: !isMobile ? 0.01 : 0.09,
    scrollTrigger: {
      trigger: '.display-section',
      start: 'top bottom', //Top of sound section meets the bottom of viewport
      end: 'top top', //Top of section meets top of viewport
      scrub: 2, //This is a transition property (the 2 is a delay) we can also set it to true
      immediateRender: false,
    },
    onUpdate,
  });
  tl.to(target, {
    x: !isMobile ? -0.55 : -1.62,
    y: !isMobile ? 0.32 : 0.02,
    z: !isMobile ? 0.0 : -0.06,
    scrollTrigger: {
      trigger: '.display-section',
      start: 'top bottom', //Top of sound section meets the bottom of viewport
      end: 'top top', //Top of section meets top of viewport
      scrub: 2, //This is a transition property (the 2 is a delay) we can also set it to true
      immediateRender: false,
    },
  });
  tl.to('.display-section', {
    opacity: 1,
    scrollTrigger: {
      trigger: '.display-section',
      start: 'top bottom', //Top of sound section meets the bottom of viewport
      end: 'top top', //Top of section meets top of viewport
      scrub: 2, //This is a transition property (the 2 is a delay) we can also set it to true
      immediateRender: false,
    },
  });
};
