import UrlParser from '../../routes/url-parser';
import RestaurantDBSource from '../../data/restaurantdb-source';
import { createRestaurantDetailTemplate, createReviewItem } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-presenter';

    const DetailRestaurant = {
    async render() {
        return `
            <section id="content-detail" class="content"></section>
            <div id="likeButtonContainer"></div>
        `;
    },
    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurant = await RestaurantDBSource.detail(url.id);
        const restaurantContainer = document.querySelector('#content-detail');
        restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

        const reviewContainer = document.querySelector('#review');
        restaurant.customerReviews.forEach((res) => {
            reviewContainer.innerHTML += createReviewItem(res);
        });

    LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        restaurant: {
            id: restaurant.id,
            name: restaurant.name,
            description: restaurant.description,
            pictureId: restaurant.pictureId,
            city: restaurant.city,
            rating: restaurant.rating,
        },
        });
    },
};

export default DetailRestaurant;
