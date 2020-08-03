import {createTripInfoTemplate} from "./view/trip-info.js";
import {createSiteMenuTemplate} from "./view/site-menu.js";
import {createFilterTemplate} from "./view/filter.js";
import {createSortListTemplate} from "./view/sort-list.js";
import {createDaysListTemplate} from "./view/days-list.js";
import {createDayItemTemplate} from "./view/day-item.js";
import {createEventTemplate} from "./view/event.js";
import {createEventEditTemplate} from "./view/event-edit.js";

const EVENT_COUNT = 3;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const tripHeaderElement = document.querySelector(`.trip-main`);

render(tripHeaderElement, createTripInfoTemplate(), `afterbegin`);

const siteNavigationElement = tripHeaderElement.querySelector(`.trip-controls`);

render(siteNavigationElement, createSiteMenuTemplate(), `beforeend`);
render(siteNavigationElement, createFilterTemplate(), `beforeend`);

const siteMainElement = document.querySelector(`.page-main`);
const tripEventsElement = siteMainElement.querySelector(`.trip-events`);

render(tripEventsElement, createSortListTemplate(), `beforeend`);
render(tripEventsElement, createEventEditTemplate(), `beforeend`);
render(tripEventsElement, createDaysListTemplate(), `beforeend`);

const daysListElement = tripEventsElement.querySelector(`.trip-days`);

render(daysListElement, createDayItemTemplate(), `afterbegin`);

const dayItemElement = daysListElement.querySelector(`.day`);
const eventsListElement = dayItemElement.querySelector(`.trip-events__list`);

for (let i = 0; i < EVENT_COUNT; i++) {
  render(eventsListElement, createEventTemplate(), `beforeend`);
}
