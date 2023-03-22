document.querySelector(".menu").addEventListener("click", () => {
    document.querySelectorAll(".target").forEach((item) => {
      item.classList.toggle("change");
    });
  });
  
  document.querySelectorAll(".wrapper").forEach((item) => {
    item.addEventListener("click", () => {
      document.querySelectorAll(".target").forEach((item) => {
        item.classList.remove("change");
      });
    });
  });
  
  const videos = document.querySelectorAll(".video");
  
  videos.forEach((video) => {
    video.addEventListener("mouseover", () => {
      video.play();
    });
    video.addEventListener("mouseout", () => {
      video.pause();
    });
  });

fetch("http://localhost:3000/cars")
.then(function (response) {
  return response;
})
.then(function (data) {
  return data.json();
})
.then(function (Normal) {
  const html = Normal.map(
    (data) => `<div class="cars">
      <h4> ${data.id}</h4>
      <h1> ${data.make} ${data.model} </</h1>
      <h2> ${data.price}</h2>
  </div>`
  );
  document.getElementById("cars-list").innerHTML = html;
})
.catch(function (err) {
  console.log("Fetch problem show: " + err.message);
});
