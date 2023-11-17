import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDBSource {
    static async list() {
        const response = await fetch(API_ENDPOINT.RESTAURANTS);
        const responseJson = await response.json();
        return responseJson.restaurants;
    }

    static async detail(id) {
        const response = await fetch(API_ENDPOINT.DETAIL(id));
        const result = await response.json();
        return result.restaurant;
    }
}

export default RestaurantDBSource;
