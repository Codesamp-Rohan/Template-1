const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".moveDown",
    start: "top 80%",
    end: "bottom 80%",
    scrub: 1,
    // markers: true,
  },
});
tl.to(".moveDown", {
  opacity: 0,
});

const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page2",
    start: "top 70%",
    end: "bottom 100%",
    scrub: 1,
    // markers: true,
  },
});

tl2.to(
  "main",
  {
    backgroundColor: "#000",
    color: "#eee",
  },
  "amin"
);
tl2.to(
  ".box",
  {
    marginTop: "0px",
  },
  "amin"
);

const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page3",
    start: "top 80%",
    end: "bottom 110%",
    scrub: 1,
    // markers: true,
  },
});

tl3.to(
  "main",
  {
    backgroundColor: "#eee",
    color: "#000",
  },
  "boom"
);
tl3.to(
  ".line",
  {
    width: "50vw",
  },
  "boom"
);

const tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page5",
    start: "top 100%",
    end: "bottom 100%",
    scrub: 1,
    markers: true,
  },
});

tl4.to("main", {
  backgroundColor: "#101010",
  color: "#eee",
});
