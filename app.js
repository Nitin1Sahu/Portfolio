const t1 = gsap.timeline();

t1.from('#nav #logo, #nav ul, #nav #burger', {
    y: -100,
    duration: 1,
    delay: 0.5,
    stagger: 0.5,
    opacity: 0
})
t1.from('#page-1 #text-section h1', {
    y: 100,
    duration: 1,
    stagger: 0.5,
    opacity: 0,
    color: 'black'
})
t1.from('#text-section #tech img', {
    y: 100,
    duration: 1,
    opacity: 0,
    stagger: 0.5
})
t1.from('#profile-img', {
    x: 200,
    duration: 1,
    opacity: 0
})
t1.to('#profile-img', {
    scale: 0.9,
    repeat: -1,
    yoyo: true,
    duration: 10
})