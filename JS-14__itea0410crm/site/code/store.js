const store = JSON.parse(localStorage.storeBD);

if(!Array.isArray(store)){
    throw Error ("...")
}

const storeEl = store.map(({ productName, id, porductPrice, productImage, productDescription, keywords = []}) => {
    return `
    <div class="store">
    <img src="${productImage}">
    <h3 class="store-name">${productName}</h3>
    <p class="store-description">
    ${productDescription}
    </p>
    <div>
    ${keywords.map((el) => `<span class="badge bg-secondary">${el}</span>`).join("")}
     </div>  
    </div>
    `
})

document.querySelector(".store-box")
.insertAdjacentHTML("beforeend", storeEl.join(""));

