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

let subscribeButton = document.getElementById("subscribeButton");
let clicked = false;

subscribeButton.onclick = () => {
  if (!clicked) {
    subscribeButton.style["background-color"] = "gray";
    subscribeButton.textContent = "Subscribed";
    clicked = true;
  } else {
    subscribeButton.style["background-color"] = "red";
    subscribeButton.textContent = "Subscribe";
    clicked = false;
  }
};

let bellIsClicked = false;
let videoNotification = document.getElementById("videoNotification");

videoNotification.onclick = () => {
  if (!bellIsClicked) {
    videoNotification.classList.remove("fa-bell-o");
    videoNotification.classList.add("fa-bell");
    bellIsClicked = true;
  } else {
    videoNotification.classList.remove("fa-bell");
    videoNotification.classList.add("fa-bell-o");
    bellIsClicked = false;
  }
};

let likeIsClicked = false;
let like = document.getElementById("likes");
let likeCount = document.getElementById("likeCount");

like.onclick = () => {
  if (!likeIsClicked) {
    like.classList.remove("fa-thumbs-o-up");
    like.classList.add("fa-thumbs-up");
    likeIsClicked = true;
    console.log();
    likeCount.textContent = Number(likeCount.textContent) + 1;
  } else {
    like.classList.remove("fa-thumbs-up");
    like.classList.add("fa-thumbs-o-up");
    likeIsClicked = false;
    likeCount.textContent = Number(likeCount.textContent) - 1;
  }
};

let dislikeIsClicked = false;
let dislike = document.getElementById("dislikes");
let dislikeCount = document.getElementById("dislikeCount");

dislike.onclick = () => {
  if (!dislikeIsClicked) {
    dislikes.classList.remove("fa-thumbs-o-down");
    dislikes.classList.add("fa-thumbs-down");
    dislikeIsClicked = true;
    console.log();
    dislikeCount.textContent = Number(dislikeCount.textContent) + 1;
  } else {
    dislikes.classList.remove("fa-thumbs-down");
    dislikes.classList.add("fa-thumbs-o-down");
    dislikeIsClicked = false;
    dislikeCount.textContent = Number(dislikeCount.textContent) - 1;
  }
};
