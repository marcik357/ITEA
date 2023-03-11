// Додати нові продукти (Відео для відео хостингу та страви для ресторану)
// Відео має бути 3 зовнішнім посиланням та 3 відео завантажені до проекту 
import { StoreElementCRM, videoElementCRM, restElementCRM } from "./class.js";
import { dateNow, generationId } from "./functions.js";

export function addIteams() {
    let videoBD = []
    videoBD.push(new videoElementCRM('Jellyfish', '', 'jellyfish.mp4', 'swimming jellyfish', 'медузи, jellyfish', dateNow, generationId));
    videoBD.push(new videoElementCRM('Sheeps', '', 'sheep.mp4', 'sheeps in the field', 'вівці, мала вівця', dateNow, generationId));
    videoBD.push(new videoElementCRM('Beach', '', 'beach.mp4', 'view on the beachside', 'пляж, beach, beachside', dateNow, generationId));
    videoBD.push(new videoElementCRM('Car Driving On Road Over Fjords', '', 'https://dsqqu7oxq6o1v.cloudfront.net/motion-array-1081982-uvjZL4YmLG-high.mp4', 'Car Driving On Road Over Fjords By Alpha Visuals', 'Car, Driving, Mountain, Road, Lake', dateNow, generationId));
    videoBD.push(new videoElementCRM('Crowds Of People Crossing Urban Street', '', 'https://dsqqu7oxq6o1v.cloudfront.net/motion-array-1411480-w5n3u1P6RQ-high.mp4', 'Crowds Of People Crossing Urban Street By Akanelly Pictures', 'People, crowds, crowded, pedestrians, crossing, urban,', dateNow, generationId));
    videoBD.push(new videoElementCRM('Blue Nebula And Star Clusters Animation', '', 'https://dsqqu7oxq6o1v.cloudfront.net/motion-array-1412093-dC7PzCV7Xs-high.mp4', 'Blue Nebula And Star Clusters Animation By AlinStock', 'Space, slow, flying, galaxy, star, cluster, astronomy, science, nebula, animation', dateNow, generationId));
    localStorage.videoBD = JSON.stringify(videoBD);

    let storeBD = []
    storeBD.push(new StoreElementCRM('Ніж', 52, "https://img.moyo.ua/img/gallery/4913/82/1148248_middle.jpg?1619442572", 'металевий кухонний ніж', 0, 'металевий,кухонний,ніж,короткий ніж', dateNow, generationId));
    storeBD.push(new StoreElementCRM('Каструля', 340, "https://cdn.27.ua/799/f5/6a/914794_2.jpeg", 'металева каструля на 3л', 0, 'металева,каструля,3л,кухня', dateNow, generationId));
    storeBD.push(new StoreElementCRM('Lenovo ideaPad 5 pro 16`', 34000, '../assets/img/error.png', 'ноутбук Lenovo ideaPad 5 pro 16`', 0, 'Lenovo,ideaPad 5 pro,16`,ноутбук', dateNow, generationId));
    localStorage.storeBD = JSON.stringify(storeBD);

    let restorationBD = []
    restorationBD.push(new restElementCRM('Суп', 80, "звичайний суп", 'вода,овочі,м\'ясо', 120, 'суп,вода,овочі,м\'ясо', 'https://i.ytimg.com/vi/qhH131jxdvQ/maxresdefault.jpg', 0, dateNow, generationId));
    restorationBD.push(new restElementCRM('Борщ', 90, "Український борщ", 'вода,овочі,м\'ясо', 130, 'борщ,вода,овочі,м\'ясо', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Borscht_served.jpg/800px-Borscht_served.jpg', 0, dateNow, generationId));
    restorationBD.push(new restElementCRM('Цезар', 100, "салат Цезар", 'курка,майонез', 100, 'салат,Цезар,овочі,курка,майонез', '../assets/img/error.png', 0, dateNow, generationId));
    localStorage.restorationBD = JSON.stringify(restorationBD);
}