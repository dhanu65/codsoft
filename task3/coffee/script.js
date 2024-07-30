document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const contentSections = document.querySelectorAll('.content');
    const loginPopup = document.getElementById('login-popup');
    const loginForm = document.getElementById('login-form');
    const loginLink = document.querySelector('.nav-link[data-target="login"]');
    const logo = document.getElementById('logo');
  
  
      const addToCartButtons = document.querySelectorAll('.atc');
      
      addToCartButtons.forEach(button => {
          button.addEventListener('click', function(e) {
              const selectedItem = this.closest('.service');
              const itemName = selectedItem.querySelector('h3').innerText;
              const itemPriceElement = selectedItem.querySelector('p:nth-of-type(2)'); // Select the second <p> element
              const itemPrice = itemPriceElement.innerText.split(': ')[1];
              alert(`Added ${itemName} to cart. Price: ${itemPrice}`);
          });
      });
  
  
  
    // Function to close the login popup
    function closeLoginPopup() {
        loginPopup.classList.remove('active');
    }
  
     // Event listener for logo click
     logo.addEventListener('click', function() {
      window.location.href = 'index.html'; // Replace 'index.html' with the path to your home page
  });
    // Event listener for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-target');
            contentSections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetId) {
                    section.classList.add('active');
                }
            });
  
            // Close the login popup when any nav link is clicked
            closeLoginPopup();
        });
    });
  
    // Event listener for login link
    loginLink.addEventListener('click', function(e) {
        e.preventDefault();
        loginPopup.classList.toggle('active');
    });
  
    // Event listener for document click to close login popup
    document.addEventListener('click', function(e) {
        if (!loginPopup.contains(e.target) && !loginLink.contains(e.target)) {
            closeLoginPopup();
        }
    });
  
    // Event listener for form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your login form submission logic here
        alert('Login form submitted!');
        // Close the login popup after form submission
        closeLoginPopup();
    });
  
    // Event listener for logo link to navigate to home page
    logoLink.addEventListener('click', function(e) {
        e.preventDefault();
        navigateToHomePage();
    });
  });