




function callNumber() {
    var phoneNumber = "9033399017";
    window.location.href = "tel:" + phoneNumber;
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); 
    }
}

function openInsta(){
  var instaUrl = "https://www.instagram.com/gabrielsmobiledetail/"
  window.open(instaUrl, '_blank')
}


function toggleCard(buttonElement) {
  // 1. Find the parent '.salsa-frame' of the clicked button
  const salsaFrame = buttonElement.closest('.salsa-frame');

  if (salsaFrame) {
    // 2. Find the specific toggle button within this frame
    //    (This is the buttonElement itself, but good to be explicit if needed later)
    const toggleButton = salsaFrame.querySelector('.salsa-toggle-btn');

    // 3. Find the specific salsa-frame-toggle within this frame
    const frameToToggle = salsaFrame.querySelector('.salsa-frame-toggle');

    // 4. Toggle the 'toggled' class on both elements
    if (toggleButton) {
      toggleButton.classList.toggle('toggled');
    }

    if (frameToToggle) {
      frameToToggle.classList.toggle('toggled');
    }
  } else {
    console.error("Could not find the parent '.salsa-frame' for the clicked button.");
  }
}



// SCROLL REVEAL JS
const sr = ScrollReveal({
  distance: '100px',
  duration: 2000,
})

sr.reveal(`.top`,{
  origin: 'top',
  interval: 150,
})

sr.reveal(`.sq, .bottom`,{
  origin: 'bottom',
  interval: 150,
})


// Split the word "Salsoligist" into individual letters for wave effect
const waveSplit = new SplitType('.wave-trigger', { types: 'chars' });

gsap.set('.wave-trigger .char', {
  display: 'inline-block',
  y: 0,
  color: '#141414',
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
  color: '#141414',
  stagger: {
    each: 0.07,
    from: 'start',
    ease: 'sine.inOut',
  },
  duration: 0.4,
  ease: 'power2.inOut',
}, "+=0.1");