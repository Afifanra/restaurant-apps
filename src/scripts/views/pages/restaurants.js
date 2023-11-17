import RestaurantDBSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Restaurants = {
    async render() {
        return `
        <section>
        <div id="content" class="content">
            <div class="latest">
                <h1 tabindex="0" class="latest-label">EXPLORE CAFE</h1>
            </div>
        </div>
        </section>

        <div id="card" class="post"> </div>
        `;
    },
    async afterRender() {
        const restaurants = await RestaurantDBSource.list();
        const restaurantContainer = document.querySelector('#card');
        restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
        });
    },
};

export default Restaurants;
