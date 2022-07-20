import './style.css'
import {setupRatingHandler, setupSubmitHandler} from "./handler.js";
const rating = `
  <div class="rating-component">
    <img class="rating-component__icon-star" src="/public/icon-star.svg" alt="icon-star">
    <div class="rating-component__heading mt-20">How did we do?</div>
    <div class="rating-component__description mt-20 mb-20">
        Please let us know how we did how we did with your support request. All feedback is appreciated to help us improve our offering!
    </div>
    <div class="rating-component__rating-group mt-20 mb-20">
        <ul>
          <li class="rating-component__rating-list-item">1</li>
          <li class="rating-component__rating-list-item">2</li>
          <li class="rating-component__rating-list-item">3</li>
          <li class="rating-component__rating-list-item">4</li>
          <li class="rating-component__rating-list-item">5</li>
        </ul>
    </div>
    <button class="rating-component__button">SUBMIT</button>
  </div>
`;

const summary = (rating) => `
  <div class="rating-component text-center">
    <img class="rating-component__icon-thank-you mb-20" src="/public/illustration-thank-you.svg" alt="icon-star">
    <div class="rating-component__rating-result mb-20 mt-20">You selected ${rating} out of 5</div>
    <div class="rating-component__heading mt-20">Thank you!</div>
     <div class="rating-component__description mt-10">
        We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
    </div>
  </div>
`;
document.querySelector('#app').innerHTML = rating;

setupRatingHandler(document.getElementsByClassName('rating-component__rating-list-item'));
setupSubmitHandler(document.getElementsByClassName('rating-component__button'), summary);