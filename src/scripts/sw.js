import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute, Route } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

// Do precaching
precacheAndRoute(self.__WB_MANIFEST);

const restaurantdbApi = new Route(
    ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev/'),
    new StaleWhileRevalidate({
        cacheName: 'restaurant-api',
    }),
);

const restaurantdbImageApi = new Route(
    ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev/images/medium/'),
    new StaleWhileRevalidate({
        cacheName: 'restaurant-image-api',
    }),
);

registerRoute(restaurantdbApi);
registerRoute(restaurantdbImageApi);

self.addEventListener('install', () => {
    console.log('Service Worker: Installed');
    self.skipWaiting();
});
