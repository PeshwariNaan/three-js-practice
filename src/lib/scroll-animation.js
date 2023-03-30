import gsap from 'gsap';

export const scrollAnimation = (position, target, onUpdate) => {
  const tl = gsap.timeline();

  tl.to(position, {
    x: -3.38,
    y: -10.74,
    z: -5.93,
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
    x: 1.52,
    y: 0.77,
    z: -1.08,
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
    x: 1.56,
    y: 5.0,
    z: 0.01,
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
    x: -0.55,
    y: 0.32,
    z: 0.0,
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
