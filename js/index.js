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


// Nav Anchors
const navLinks = document.getElementsByTagName('a')
navLinks[0].textContent = 'Services'
navLinks[1].textContent = 'Product'
navLinks[2].textContent = 'Vision'
navLinks[3].textContent = 'Features'
navLinks[4].textContent = 'About'
navLinks[5].textContent = 'Contact'

const navColor = document.querySelectorAll('a')
navColor.forEach(element => {
  element.style.color = 'green'
})

// .append and .prepend
const appItem = document.createElement('a')
appItem.textContent = 'APPENDERATOR'
const secondaryAppItem = document.querySelector('nav')
secondaryAppItem.append(appItem)

const prepItem = document.createElement('a')
prepItem.textContent = 'PREPENDERATOR'
const secondaryPrepItem = document.querySelector('nav')
secondaryPrepItem.prepend(prepItem)

// cta h1
const ctaH1 = document.querySelector('.cta-text h1')
ctaH1.textContent = 'DOM Is Awesome'
document.querySelector('.cta-text h1').innerHTML = siteContent.cta.h1.split(' ').join('<br> ')

// cta button
const ctaButton = document.querySelector('.cta-text button')
ctaButton.textContent = 'Get Started'

// ctaImg add src
const ctaImg = document.getElementById('cta-img')
ctaImg.setAttribute('src', 'img/header-img.png')


// Top Features
const featuresContent = document.querySelector('.text-content h4')
featuresContent.textContent = 'Features'
const featuresContentP = document.querySelector('.text-content p')
featuresContentP.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

// Top About
const about = document.querySelector('.text-content:nth-of-type(2) h4')
about.textContent = 'About'
const aboutP = document.querySelector('.text-content:nth-of-type(2) p')
aboutP.textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

// Img Code Snippet
const middleImgSrc = document.querySelector('#middle-img')
middleImgSrc.src = 'img/mid-page-accent.jpg'

// Bottom Services
const servicesH4 = document.querySelector('.bottom-content .text-content h4')
servicesH4.textContent = 'Services'

const servicesP = document.querySelector('.bottom-content .text-content p')
servicesP.textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

// Bottom Product
const productH4 = document.querySelector('.bottom-content .text-content:nth-of-type(2) h4')
productH4.textContent = 'Product'
const productP = document.querySelector('.bottom-content .text-content:nth-of-type(2) p')
productP.textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

// Bottom Vision
const visionH4 = document.querySelector('.bottom-content .text-content:nth-of-type(3) h4')
visionH4.textContent = 'Vision'
const visionP = document.querySelector('.bottom-content .text-content:nth-of-type(3) p')
visionP.textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

// Contact
const contactH4 = document.querySelector('.contact h4')
contactH4.textContent = 'Contact'
const contactP = document.querySelector('.contact p')
contactP.textContent = '123 Way 456 Street Somewhere, USA'
let stAddress = siteContent.contact.address.split(" ");;
document.querySelector('.contact p:nth-of-type(1)').innerHTML = stAddress[0]+" "+stAddress[1]+" "+stAddress[2]+ " "+stAddress[3]+ "<br>" + stAddress[4] + stAddress[5] ;



const contactPhone = document.querySelector('.contact p:nth-of-type(2)')
contactPhone.textContent = '1 (888) 888-8888'
const contactEmail = document.querySelector('.contact p:nth-of-type(3)')
contactEmail.textContent = 'sales@greatidea.io'

const footer = document.querySelector('footer p')
footer.textContent = 'Copyright Great Idea! 2018'


// STRETCH
document.querySelector('button').onmouseover = function() {mouseOver()}
function mouseOver() {
  document.querySelector('button').style.color = 'orange'
}

document.querySelector('button').onmouseout = function() {mouseOut()}
function mouseOut() {
  document.querySelector('button').style.color = 'black'
}