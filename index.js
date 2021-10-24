fetch(
  "https://cdn.d4.digital/json/d4-demo-company/F7F2Z7/FXDJ24/scripts/datafile.js"
)
  .then((res) => {
    if (res.ok) {
      console.log("success");
      return res.json();
    } else {
      console.log("error");
    }
  })
  .then((data) => {
    showText(data.items[0].headline_1.value, ".front-Title");
    addImage(data.items[0].bg_image.value);
    showText(data.items[0].headline_2.value, ".bottom_text");
  });

const showText = (text, className) => {
  const h1 = document.querySelector(className);
  h1.innerText = text;
};

const addImage = (url) => {
  const body = document.querySelector("body");
  body.style.background = `linear-gradient(to bottom, transparent 50%, white), url(${url}) no-repeat center center / cover`;
};

//gsap animation
var counter = { x: 0 };
var number = document.querySelector(".number_heading");
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const timeline = gsap.timeline({ defaults: { duration: 1 } });
timeline
  .from(".front-Title", { opacity: 0 })

  .to(".front-Title", { duration: 2, opacity: 0 }, 1)
  .fromTo(".main", { yPercent: 0 }, { duration: 2, yPercent: 100 }, 1)
  .to(
    counter,
    {
      duration: 1,
      x: 1040346,
      onUpdate: function () {
        number.innerHTML = "$" + numberWithCommas(Math.ceil(counter.x));
      },
      ease: Circ.easeOut,
    },
    3
  )
  .from(".bottom_text", { duration: 2, opacity: 0 }, 3);
