class StoreElementCRM {
    constructor (productName = "", porductPrice = 0, productImage = "/img/error.png", productDescription = "", productQuantity = 0, keywords = [], dateNow = () => {}, id = () => {}) {
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
    constructor(productName = "", poster = '/img/error.png', url = "", description = "", keywords = [], dateNow = () => {}, id = () => {}) {
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
    constructor(productName = "", productWeiht = "", ingredients = [], description = "", keywords = [], price = 0, productimageUrl = "/img/error.png", dateNow = () => {}, id = () => {}) {
        this.id = id()
        this.date = dateNow()
        this.productName = productName;
        this.productWeiht = productWeiht;
        this.ingredients = ingredients.split(",");
        this.description = description;
        this.keywords = keywords.split(",");
        this.price = price;
        this.productimageUrl = productimageUrl;
        this.status = false
    }
}

export { StoreElementCRM, videoElementCRM, restElementCRM }