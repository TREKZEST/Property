// script.js

// List of properties (mock data for demo)
const properties = [
  {
    title: "2 Bedroom Apartment",
    location: "New York City",
    price: "$1500/month",
    image: "https://via.placeholder.com/300x200"
  },
  {
    title: "3 Bedroom House",
    location: "Los Angeles",
    price: "$2500/month",
    image: "https://via.placeholder.com/300x200"
  },
  {
    title: "1 Bedroom Condo",
    location: "Miami",
    price: "$1200/month",
    image: "https://via.placeholder.com/300x200"
  }
];

// Function to display properties
function displayProperties() {
  const propertyList = document.querySelector('.property-list');
  properties.forEach(property => {
    const propertyItem = document.createElement('div');
    propertyItem.classList.add('property');

    propertyItem.innerHTML = `
      <img src="${property.image}" alt="${property.title}">
      <h3>${property.title}</h3>
      <p>Location: ${property.location}</p>
      <p>Price: ${property.price}</p>
      <button onclick="inquireProperty('${property.title}')">Inquire</button>
    `;

    propertyList.appendChild(propertyItem);
  });
}

// Function to handle property inquiries
function inquireProperty(propertyTitle) {
  alert(`Inquiring about: ${propertyTitle}`);
}

// Load properties on page load
window.onload = displayProperties;