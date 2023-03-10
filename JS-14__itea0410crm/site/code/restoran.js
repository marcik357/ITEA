const rest = JSON.parse(localStorage.restorationBD);

if (!Array.isArray(rest)) {
    throw Error("...")
}

const restEl = rest.map(({ productName, id, porductPrice, productimageUrl, productDescription, keywords = [] }) => {
    return `
    <div class="rest-iteam">
    <img src="${productimageUrl}">
    <h3 class="rest-name">${productName}</h3>
    <p class="rest-description">
    ${productDescription}
    </p>
    <div>
    ${keywords.map((el) => `<span class="badge bg-secondary">${el}</span>`).join("")}
     </div>  
    </div>
    `
})

document.querySelector(".rest-box")
    .insertAdjacentHTML("beforeend", restEl.join(""));

