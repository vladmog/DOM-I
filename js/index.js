const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])





//NAV=========================================
  //item 1
  let item = document.querySelectorAll('a');
  item[0].textContent = "Services";
  //item 2
  item[1].textContent = "Product";
  //item 3
  item[2].textContent = "Vision";
  //item 4
  item[3].textContent = "Features";
  //item 5
  item[4].textContent = "About";
  //item 6
  item[5].textContent = "Content";

  //add two new element to nav
  let nav = document.querySelector('nav');
  let newNavItem = document.createElement('a');
  newNavItem.textContent = "Gucci";
  newNavItem.href = "#";
  nav.appendChild(newNavItem);

  let newNavItem2 = document.createElement('a');
  newNavItem2.textContent = "Gang";
  newNavItem2.href = "#";
  nav.appendChild(newNavItem2);

  //change text color to green

 item = document.querySelectorAll('a');
 //item needs to be re-defined to include newly added elements^^
 


  item.forEach(function(placeHolder){
    placeHolder.style.color = "green";
  })

  // item[0].style.color = "green";
  // item[1].style.color = "green";
  // item[2].style.color = "green";
  // item[3].style.color = "green";
  // item[4].style.color = "green";
  // item[5].style.color = "green";
  // item[6].style.color = "green";
  // item[7].style.color = "green"; 

//CTA==========================================
  //h1
  let aich1 = document.querySelector('h1');
  aich1.textContent = "DOM is Awesome";

  //button
  let button = document.querySelector('button');
  button.textContent = "Get Started";

  //img
  let circle = document.getElementById('cta-img');
  circle.src = "img/header-img.png";


//MAIN-CONTENT===============================
  //features-h4
  let h4 = document.getElementsByTagName('h4');
  h4[0].textContent = "Features";

  //features-content
  let p = document.querySelectorAll("p");
  p[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

  //about-h4
  h4[1].textContent = "About";

  //about-content
  p[1].textContent =  "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

  //middle-img
  let middle_img = document.getElementById("middle-img");
  middle_img.src = "img/mid-page-accent.jpg";

  //services-h4
  h4[2].textContent = "Services";

  //services-content
  p[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

  //product-h4
  h4[3].textContent = "Product";

  //product-content
  p[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

  //vision-h4
  h4[4].textContent = "Vision"

  //vision-content
  p[4].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";


//CONTACT======================================
  //contact-h4
  h4[5].textContent = "Contact";

  //address
  p[5].textContent =  "123 Way 456 Street Somewhere, USA";

  //phone
  p[6].textContent = "1 (888) 888-8888";

  //email
  p[7].textContent = "sales@greatidea.io";


//FOOTER================================
  //copyright
  p[8].textContent = "Copyright Great Idea! 2018";

