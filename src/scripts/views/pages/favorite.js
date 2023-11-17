import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
    async render() {
        return `
        <div class="content">
            <h2 class="content__heading">Your Favorite Restaurant</h2>
            <section id="restaurants" class="restaurants">
            </section>
        </div>
        `;
    },

    async afterRender() {
        const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
        const restaurantsContainer = document.querySelector('.restaurants');
        if (restaurants.length > 0) {
        restaurants.forEach((restaurant) => {
            restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
        });
        } else {
        restaurantsContainer.innerHTML = `
            <div class="restaurant-empty">Belum ada restoran yang di tambahkan</div>
        `;
        }
    },
};

export default Favorite;
