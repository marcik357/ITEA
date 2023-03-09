const video = JSON.parse(localStorage.video);

if(!Array.isArray(video)){
    throw Error ("...")
}

const videoEl = video.map(({ videoName, id, url, description, keywords, poster }) => {
    return `
    <div class="video">
    <h3 class="video-name">${videoName}</h3>
    <video id="${id}" controls poster="${poster}">
        ${url.startsWith("/video") ? `<source src="/video/${url}">`: `<source src="${url}">`}
    </video>
    <p class="video-description">
    ${description}
    </p>
    <div>
    ${keywords.map((el) => {
        return `<span class="badge bg-secondary">${el}</span>`
    }).join("")}
     </div>  
    </div>
    `
})

document.querySelector(".video-box")
.insertAdjacentHTML("beforeend", videoEl.join(""));

