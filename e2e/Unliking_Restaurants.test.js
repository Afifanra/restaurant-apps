/* eslint-disable no-undef */
const assert = require('assert');

Feature('Unliking Restaurant');
Before(({ I }) => {
  I.amOnPage('/#/favorite');
});
Scenario('showing empty liked menu restaurant', ({ I }) => {
  I.dontSeeElement('.card');
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.seeElement('.content');
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

  const unlikedRestaurantName = await I.grabTextFrom('.detail-a');
  assert.strictEqual(firstRestaurantName, unlikedRestaurantName);

  I.seeElement('.detail-a');
  await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.dontSeeElement('.card');
});
