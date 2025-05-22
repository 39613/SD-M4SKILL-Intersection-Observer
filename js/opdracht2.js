let data = [
  {
    src: "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    src: "https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    src: "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    src: "https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    src: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    src: "https://images.pexels.com/photos/68507/spring-flowers-flowers-collage-floral-68507.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    src: "https://images.pexels.com/photos/248159/pexels-photo-248159.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    src: "https://images.pexels.com/photos/46160/field-clouds-sky-earth-46160.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    src: "https://images.pexels.com/photos/2138922/pexels-photo-2138922.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    src: "https://images.pexels.com/photos/158028/bellingrath-gardens-alabama-landscape-scenic-158028.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    src: "https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    src: "https://images.pexels.com/photos/36487/above-adventure-aerial-air.jpg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    src: "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    src: "https://images.pexels.com/photos/126271/pexels-photo-126271.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    src: "https://images.pexels.com/photos/1533720/pexels-photo-1533720.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    src: "https://images.pexels.com/photos/64219/dolphin-marine-mammals-water-sea-64219.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    src: "https://images.pexels.com/photos/235990/pexels-photo-235990.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    src: "https://images.pexels.com/photos/40784/drops-of-water-water-nature-liquid-40784.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    src: "https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    src: "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    src: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

const rootElement = document.getElementById("root");
const loader = document.getElementById("loading");
let imgCount = 0;

function fetchImage() {
  if (imgCount !== 21) {
    setTimeout(() => {
      for (let i = imgCount; i < imgCount + 7; i++) {
        const image = document.createElement("img");
        image.src = data[i].src;
        rootElement.append(image);
      }
      imgCount += 7;
      console.log(imgCount);
    }, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.25,
  };

  function handleIntersect(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        fetchImage();
      }
    });
  }

  let observer = new IntersectionObserver(handleIntersect, options);

  observer.observe(loader);
});
