'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

//Old school way to call API

//Using XMLHttpRequest

function renderCountry(data, className='') {
    const html = `
    <article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${+data.population}</p>
      <p class="country__row"><span>🗣️</span>${Object.values(data.languages).slice().join(", ")}</p>
      <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
    </div>
    </article>
    `;
    
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
}

function getCountryAndNeighbour(country) {
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
    request.send();
    
    request.addEventListener('load', function () {
      console.log(JSON.parse(this.responseText));
      const data = JSON.parse(this.responseText)[country === 'india' ? 0:1];
      renderCountry(data);
     
      let [neighbouringCountry] = data?.borders;
      if(!neighbouringCountry) return;
      
      const request2 = new XMLHttpRequest();
      request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbouringCountry}`);
      request2.send();
      
      request2.addEventListener('load', function () {
        const [data2] = JSON.parse(this.responseText);
        renderCountry(data2, 'neighbour');        
      })
    })
}

getCountryAndNeighbour('india');

console.log("Test Start"); //First
setTimeout(() => console.log('0 sec timer'), 0); //Forth
Promise.resolve('Resolved Promise 1').then(res => console.log(res)); //Third => Micro Task queue
console.log('Test End'); //Second


//Lets Build our own promises...

/**
 * Promise took online one argument
 */
const lotteryPromise = new Promise(function(resolve, reject) {
  if(Math.random() >= 0.5 ) {
    
  }
})