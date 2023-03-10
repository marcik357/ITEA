const video = JSON.parse(localStorage.videoBD);

if(!Array.isArray(video)){
    throw Error ("...")
}

const videoEl = video.map(({ productName, id, url, description, keywords = [], poster }) => {
    return `
    <div class="video">
    <h3 class="video-name">${productName}</h3>
    <video id="${id}" controls poster="${poster}">
        <source src="${url}">
    </video>
    <p class="video-description">
    ${description}
    </p>
    <div>
    ${keywords.map((el) => `<span class="badge bg-secondary">${el}</span>`).join("")}
     </div>  
    </div>
    `
})

document.querySelector(".video-box")
.insertAdjacentHTML("beforeend", videoEl.join(""));

