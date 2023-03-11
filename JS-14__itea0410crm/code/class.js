class StoreElementCRM {
    constructor(productName = "", productPrice = 0, productImage = "", productDescription = "", productQuantity = 0, keywords = [], dateNow = () => {}, id = () => {}) {
        this.id = id()
        this.date = dateNow()
        this.productName = productName;
        this.productPrice = productPrice;
        this.productImage = productImage === '' ? '../assets/img/error.png' : productImage;
        this.productDescription = productDescription;
        this.productQuantity = productQuantity;
        this.keywords = keywords.split(",");
        this.status = productQuantity > 0 ? true : false
    }
}

class videoElementCRM {
    constructor(productName = "", poster = '', url = "", description = "", keywords = [], dateNow = () => {}, id = () => {}) {
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
    constructor(productName = "", productWeiht = "", description = "", ingredients = [], price = 0, keywords = [], productimageUrl = "", productQuantity = 0, dateNow = () => {}, id = () => {}) {
        this.id = id()
        this.date = dateNow()
        this.productName = productName;
        this.productWeiht = productWeiht;
        this.description = description;
        this.ingredients = ingredients.split(",");
        this.price = price;
        this.keywords = keywords.split(",");
        this.productimageUrl = productimageUrl === '' ? '../assets/img/error.png' : productimageUrl;
        this.productQuantity = productQuantity;
        this.status = productQuantity > 0 ? true : false
    }
}

export { StoreElementCRM, videoElementCRM, restElementCRM }