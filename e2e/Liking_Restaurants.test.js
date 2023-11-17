/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable no-shadow */
/* eslint-disable no-await-in-loop */
const assert = require('assert');
const { async } = require('regenerator-runtime');

Feature('Liking Restaurant');

Before(async ({ I }) => {
    I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurant', ({ I }) => {
    I.seeElement('#restaurants');
    I.see('Belum ada restoran yang di tambahkan', '.restaurant-empty');
});

Scenario('liking one restaurant', async ({ I }) => {
    I.see('Belum ada restoran yang di tambahkan', '.restaurant-empty');

    I.amOnPage('/');

    I.waitForElement('.detail-a');
    I.seeElement('.detail-a');
    const firstRestaurant = locate('.detail-a').first();
    const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.card');

    I.amOnPage('/#/favorite');
    const likedRestaurantName = await I.grabTextFrom('.detail-a');
    assert.strictEqual(firstRestaurantName, likedRestaurantName);
});
