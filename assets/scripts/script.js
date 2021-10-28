let suggestionContainer = document.querySelector(".suggestionContainer");
suggestionContainer.setAttribute("class", "suggestionContainer");

for (let i = 0; i < 10; i++) {
  let playlistVideoContainer = document.createElement("div");
  playlistVideoContainer.setAttribute("class", "playlistVideoContainer");

  let playlistVideo = document.createElement("div");
  playlistVideo.setAttribute("class", "playlistVideo");

  let iframe = document.createElement("iframe");
  iframe.src =
    "https://www.youtube.com/embed/videoseries?list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma";
  iframe.title = "YouTube video player";
  iframe.frameborder = "0";
  iframe.allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
  iframe.allowFullscreen = true;

  playlistVideo.appendChild(iframe);
  playlistVideoContainer.appendChild(playlistVideo);

  let playlistVideoTitle = document.createElement("div");
  playlistVideoTitle.setAttribute("class", "playlistVideoTitle");

  let p1 = document.createElement("p");
  p1.id = "suggestionChannelTitle";
  p1.textContent = "Two Sum Problem | Leetcode's First Ever Problem";
  let p2 = document.createElement("p");
  p2.id = "suggestionChannelName";
  p2.textContent = "take U forward";
  let p3 = document.createElement("p");
  p3.id = "suggestionChannelDate";
  p3.textContent = "7 Aug 2020";

  playlistVideoTitle.appendChild(p1);
  playlistVideoTitle.appendChild(p2);
  playlistVideoTitle.appendChild(p3);

  playlistVideoContainer.appendChild(playlistVideoTitle);
  suggestionContainer.appendChild(playlistVideoContainer);
}
let ShowMore = document.getElementById("fullDescription");
let fullDescriptionText = document.getElementById("fullDescrptionText");

function showless() {
  ShowMore.onclick = show;
  fullDescriptionText.style.display = "none";
}
showless();

function show() {
  fullDescriptionText.style.display = "inline";
  ShowMore.textContent = "Show less";
  ShowMore.onclick = showless;
}
