class StoreElementCRM {
    constructor(productName = "", porductPrice = 0, productImage = "../site/assets/img/error.png", productDescription = "", productQuantity = 0, keywords = [], dateNow = () => {}, id = () => {}) {
        this.id = id()
        this.date = dateNow()
        this.productName = productName;
        this.porductPrice = porductPrice;
        this.productImage = productImage;
        this.productDescription = productDescription;
        this.productQuantity = productQuantity;
        this.keywords = keywords.split(",");
        this.status = false
    }
}

class videoElementCRM {
    constructor(productName = "", poster = '../site/assets/img/error.png', url = "", description = "", keywords = [], dateNow = () => {}, id = () => {}) {
        this.id = id()
        this.date = dateNow()
        this.productName = productName;
        this.poster = poster;
        this.url = url;
        this.description = description;
        this.keywords = keywords.split(",");
        this.status = false
    }
}

class restElementCRM {
    constructor(productName = "", productWeiht = "", description = "", ingredients = [], price = 0, keywords = [], productimageUrl = "../site/assets/img/error.png", dateNow = () => {}, id = () => {}) {
        this.id = id()
        this.date = dateNow()
        this.productName = productName;
        this.productWeiht = productWeiht;
        this.description = description;
        this.ingredients = ingredients.split(",");
        this.price = price;
        this.keywords = keywords.split(",");
        this.productimageUrl = productimageUrl;
        this.status = false
    }
}

export { StoreElementCRM, videoElementCRM, restElementCRM }