import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
    <div class="detail">
        <h2 class="detail_name">${restaurant.name}</h2>
        <div class="detail_item">
        <img class=" lazyload detail_poster" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
        <div class="detail_info">
        <h3>Information</h3>
            <h4>Address</h4>
            <p>${restaurant.address} , Kota ${restaurant.city}</p>
            <h4>Rating</h4>
            <p>${restaurant.rating}</p>
            <h4>Categories</h4>
            <p>${restaurant.categories.map((categori) => categori.name).join(' | ')}</p>
            <h4>Foods</h4>
            <p>${restaurant.menus.foods.map((food) => food.name).join(' | ')}</p>
            <h4>Drinks</h4>
            <p>${restaurant.menus.drinks.map((drink) => drink.name).join(' | ')}</p>
        </div>
        </div>
        <div class="detail_description">
            <h3>Description</h3>
            <br>
            <p>${restaurant.description}</p>
        </div>
    </div>
    <div class="detail_review" id="review">
        <h3>Customer Reviews</h3>
    </div>
`;

const createReviewItem = (review) => `
<div class="detail_review_item">
        <h4>Nama</h4>
        <p>${review.name}</p>
        <h4>Ulasan</h4>
        <p>${review.review}</p>
        <h4>Tanggal</h4>
        <p>${review.date}</p>
</div>`;

const createRestaurantItemTemplate = (restaurant) => `
    <article class="card">
        <div class="restaurant-item__header">
            <h2 tabindex="0" class="location">${restaurant.city}</h2>
            <img class="lazyload thumbnail" alt="${restaurant.name}"
            data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
            <div class="content">
            <p tabindex="0" class="rating">Rating: ${restaurant.rating} ⭐</p>
            <h1 tabindex="0" class="title">${restaurant.name}</h1>
            <p tabindex="0" class="description">${restaurant.description.slice(0, 140)}...</p>
            <br>
            <a href="${`/#/detail/${restaurant.id}`}" class="detail-a">Detail</a>
            </div>
        </div>
    </article>
`;

const createLikeButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
        <i class="bi bi-heart"></i>
    </button>
`;

const createLikedButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
        <i class="bi bi-heart-fill"></i>
    </button>
`;

export {
    createRestaurantItemTemplate,
    createRestaurantDetailTemplate,
    createReviewItem,
    createLikeButtonTemplate,
    createLikedButtonTemplate,
};
