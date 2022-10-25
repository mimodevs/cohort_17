let cars = [
    {
      model: "Model S",
      doors: 4,
      img:
        "https://tesla-cdn.thron.com/delivery/public/image/tesla/32e5e0f3-5c04-42ef-8f8f-c6b1c26f8a9e/bvlatuR/std/2880x1800/ms-main-hero-desktop"
    },
    {
      model: "Model 3",
      doors: 4,
      img:
        "https://tesla-cdn.thron.com/delivery/public/image/tesla/859f1cff-928a-479c-a1e5-f92cfc7d3c69/bvlatuR/std/2880x1800/model-3-main-hero-b-desktop"
    },
    {
      model: "Model X",
      doors: 4,
      img:
        "https://tesla-cdn.thron.com/delivery/public/image/tesla/da705069-91b5-41cb-86f3-86a585c6fdf3/bvlatuR/std/2880x1800/MX-Hero-Desktop"
    },
    {
      model: "Model Y",
      doors: 4,
      img:
        "https://tesla-cdn.thron.com/delivery/public/image/tesla/0cf18940-c0bf-45f7-b2d8-46c3bc693c65/bvlatuR/std/0x0/model-y_R1@2"
    },
    {
      model: "cybertruck",
      doors: "∞",
      img:
        "https://tesla-cdn.thron.com/delivery/public/image/tesla/0f22af4d-15e0-452d-ba66-1359490b4a0b/bvlatuR/std/2880x1800/Cybertruck-Hero-Desktop"
    },
    {
        model: "Model S",
        doors: 4,
        img:
          "https://tesla-cdn.thron.com/delivery/public/image/tesla/32e5e0f3-5c04-42ef-8f8f-c6b1c26f8a9e/bvlatuR/std/2880x1800/ms-main-hero-desktop"
      },
      {
        model: "Model 3",
        doors: 4,
        img:
          "https://tesla-cdn.thron.com/delivery/public/image/tesla/859f1cff-928a-479c-a1e5-f92cfc7d3c69/bvlatuR/std/2880x1800/model-3-main-hero-b-desktop"
      },
      {
        model: "Model X",
        doors: 4,
        img:
          "https://tesla-cdn.thron.com/delivery/public/image/tesla/da705069-91b5-41cb-86f3-86a585c6fdf3/bvlatuR/std/2880x1800/MX-Hero-Desktop"
      },
      {
        model: "Model Y",
        doors: 4,
        img:
          "https://tesla-cdn.thron.com/delivery/public/image/tesla/0cf18940-c0bf-45f7-b2d8-46c3bc693c65/bvlatuR/std/0x0/model-y_R1@2"
      },
      {
        model: "cybertruck",
        doors: "∞",
        img:
          "https://tesla-cdn.thron.com/delivery/public/image/tesla/0f22af4d-15e0-452d-ba66-1359490b4a0b/bvlatuR/std/2880x1800/Cybertruck-Hero-Desktop"
      },
      {
        model: "Model S",
        doors: 4,
        img:
          "https://tesla-cdn.thron.com/delivery/public/image/tesla/32e5e0f3-5c04-42ef-8f8f-c6b1c26f8a9e/bvlatuR/std/2880x1800/ms-main-hero-desktop"
      },
      {
        model: "Model 3",
        doors: 4,
        img:
          "https://tesla-cdn.thron.com/delivery/public/image/tesla/859f1cff-928a-479c-a1e5-f92cfc7d3c69/bvlatuR/std/2880x1800/model-3-main-hero-b-desktop"
      },
      {
        model: "Model X",
        doors: 4,
        img:
          "https://tesla-cdn.thron.com/delivery/public/image/tesla/da705069-91b5-41cb-86f3-86a585c6fdf3/bvlatuR/std/2880x1800/MX-Hero-Desktop"
      },
      {
        model: "Model Y",
        doors: 4,
        img:
          "https://tesla-cdn.thron.com/delivery/public/image/tesla/0cf18940-c0bf-45f7-b2d8-46c3bc693c65/bvlatuR/std/0x0/model-y_R1@2"
      },
      {
        model: "cybertruck",
        doors: "∞",
        img:
          "https://tesla-cdn.thron.com/delivery/public/image/tesla/0f22af4d-15e0-452d-ba66-1359490b4a0b/bvlatuR/std/2880x1800/Cybertruck-Hero-Desktop"
      }
  ];


  for (let index = 0; index < cars.length; index = index + 1) {

    let card = document.createElement('div'); 

    card.style.backgroundImage = 'url(' + cars[index].img + ')';
    // card.innerHTML = '<p>' + cars[index].model + ', with ' + cars[index].doors + ' doors';
    card.classList.add('card');

    let gallery = document.querySelector('.gallery');

    gallery.appendChild(card);
    
}






// let document = {
    function createElement(type) {
      if (type === 'div') {
        return <div></div>
      }
    }

    
  


















// let element = {

//   type: "div",
//   classList : ['gallery' ],
//   innerText : 'text',

// }
// variable   the document obj  
// let card =  document.createElement('div');// => <div> </div>

// //  card.innerText  = 'Hello World';   // => <div> Hello World </div>
// card.innerText = prompt('hey there, leave us a mssg');

//  console.log(card)

//  let gallery = document.querySelector('.gallery');


// gallery.appendChild(card);


//  // => whatever the user types in the input 

// console.log(document);



// let reply =  document.createElement('div');// => <div> </div>

// //  card.innerText  = 'Hello World';   // => <div> Hello World </div>
// reply.innerText = prompt('hey there, leave a reply to the prev mssg');

//  console.log(card)

// //  let gallery = document.querySelector('.gallery');


// gallery.appendChild(reply);


//  // => whatever the user types in the input 

// console.log(document);
// // card.style.backgroundImage = 'url(' + cars[0].img + ')';

// // card.innerHTML = '<p>' + cars[0].model + ', with ' + cars[0].doors + ' doors';

// // card.classList.add("card")


// // document.querySelector('.gallery').appendChild(card);