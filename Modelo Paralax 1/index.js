
var scene = document.getElementById("scene");
var parallaxInstance = new Parallax(scene);

gsap.to(".rockbg1", 2, {
  y: 12,
  repeat: -1,
  yoyo: true,
  delay: 0
});
