!function(){var e,t=document.querySelectorAll(" .about__slider .about__slider-line img"),n=document.querySelector(".about__slider-line"),o=0;function i(){console.log("resize"),e=document.querySelector(".about__slider").offsetWidth,n.style.width=e*t.length+"px",t.forEach((function(t){t.style.width=e+"px",t.style.height="auto"})),l()}function l(){n.style.transform="translate(-"+o*e+"px)"}window.addEventListener("resize",i),i(),document.querySelector(".about__slider-right").addEventListener("click",(function(){--o<0&&(o=t.length-1),l()})),document.querySelector(".about__slider-left").addEventListener("click",(function(){++o>=t.length&&(o=0),l()}))}();
//# sourceMappingURL=index.2f9aa65a.js.map
