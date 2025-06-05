

// SCROLL REVEAL JS
const sr = ScrollReveal({
    distance: '30px',
    duration: 1200,
  })
  
  sr.reveal(`.top`,{
    origin: 'top',
    interval: 150,
  })
  
  sr.reveal(`.bottom`,{
    origin: 'bottom',
    interval: 150,
  })

  // Split the word "Salsoligist" into individual letters for wave effect
const waveSplit = new SplitType('.wave-trigger', { types: 'chars' });

gsap.set('.wave-trigger .char', {
  display: 'inline-block',
  y: 0,
  color: '#FFF0E6',
});

const waveTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: '.wave-trigger',
    start: 'center center',
    toggleActions: 'play none none none',
    once: true,
  }
});

waveTimeline.to('.wave-trigger .char', {
  y: -20,
  color: '#B10D09',
  stagger: {
    each: 0.07,
    from: 'start',
    ease: 'sine.inOut',
  },
  duration: 0.4,
  ease: 'power2.out',
})
.to('.wave-trigger .char', {
  y: 0,
  color: '#FFF0E6',
  stagger: {
    each: 0.07,
    from: 'start',
    ease: 'sine.inOut',
  },
  duration: 0.4,
  ease: 'power2.inOut',
}, "+=0.1");