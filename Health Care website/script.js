    // const specialtyFilter = document.getElementById('specialtyFilter');
    // const searchInput = document.getElementById('searchInput');
    // const cards = document.querySelectorAll('.practitioner-card');

    // function filterPractitioners() {
    //   const selected = specialtyFilter.value.toLowerCase();
    //   const keyword = searchInput.value.toLowerCase();

    //   cards.forEach(card => {
    //     const specialty = card.getAttribute('data-specialty').toLowerCase();
    //     const name = card.querySelector('h3').textContent.toLowerCase();
    //     const matchesSpecialty = (selected === 'all' || specialty === selected);
    //     const matchesSearch = (name.includes(keyword) || specialty.includes(keyword));

    //     if (matchesSpecialty && matchesSearch) {
    //       card.style.display = 'block';
    //     } else {
    //       card.style.display = 'none';
    //     }
    //   });
    // }

    // specialtyFilter.addEventListener('change', filterPractitioners);
    // searchInput.addEventListener('input', filterPractitioners);





    // // Testimonial Slider

    // const slider = document.querySelector('.testimonial-slider');
    // setInterval(() => {
    //   slider.scrollBy({ left: 350, behavior: 'smooth' });
    // }, 5000); // Auto-scroll every 5 seconds
    

    // // Contact form validation

    // function validateForm() {
    //   const name = document.getElementById("name").value.trim();
    //   const email = document.getElementById("email").value.trim();
    //   const message = document.getElementById("message").value.trim();
    //   const errorDiv = document.getElementById("form-errors");
    //   let errors = [];
    
    //   // Validate name
    //   if (name.length < 3) {
    //     errors.push("Name must be at least 3 characters long.");
    //   }
    
    //   // Validate email format
    //   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //   if (!emailPattern.test(email)) {
    //     errors.push("Please enter a valid email address.");
    //   }
    
    //   // Validate message
    //   if (message.length < 10) {
    //     errors.push("Message must be at least 10 characters long.");
    //   }
    
    //   // Display errors or allow submission
    //   if (errors.length > 0) {
    //     errorDiv.innerHTML = errors.join("<br>");
    //     return false;
    //   }
    
    //   errorDiv.innerHTML = ""; // Clear errors
    //   return true; // Allow form submission
    // }

// toggle icon navbar
// let menuIcon = document.querySelector('.menu');
// let navbar = document.querySelector('.nav-link');
// let nav = document.querySelector('.navbar')

// menuIcon.onclick = () => {
//     // menuIcon.classList.toggle('bx-bx');
//     navbar.classList.toggle('active');  // Toggle class to show/hide 
//     console.log("Clicked")
// };
// const menuIcon = document.getElementById("menu-icon")
// function clickedIcon () {
//   console.log("clicked")
//   navbar.classList.toggle('active');
// }
// menuIcon.addEventListener("click", clickedIcon)
// function removeNavbar () {
//   navbar.classList.remove('active');
// }
// navbar.addEventListener("click", removeNavbar)



document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const menuIcon = document.getElementById('menu-icon');
  const navbar = document.querySelector('.nav-link');

  if (menuIcon && navbar) {
    menuIcon.addEventListener('click', (event) => {
      event.stopPropagation();
      navbar.classList.toggle('active');
      console.log('Menu toggled:', navbar.classList.contains('active') ? 'Open' : 'Closed');
    });

    // Close menu when clicking a link
    navbar.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navbar.classList.remove('active');
        console.log('Menu closed via link click');
      });
    });

    // Close menu when clicking outside (excluding the menu icon)
    document.addEventListener('click', (event) => {
      if (!navbar.contains(event.target) && !menuIcon.contains(event.target)) {
        navbar.classList.remove('active');
        console.log('Menu closed via outside click');
      }
    });
  } else {
    console.error('Menu elements not found: menuIcon or navbar missing');
  }

  // Practitioner Filtering
  const specialtyFilter = document.getElementById('specialtyFilter');
  const searchInput = document.getElementById('searchInput');
  const cards = document.querySelectorAll('.practitioner-card');

  function filterPractitioners() {
    if (!specialtyFilter || !searchInput || !cards) {
      console.error('Filter elements not found');
      return;
    }

    const selected = specialtyFilter.value.toLowerCase();
    const keyword = searchInput.value.toLowerCase();

    cards.forEach(card => {
      const specialty = card.getAttribute('data-specialty')?.toLowerCase() || '';
      const name = card.querySelector('h3')?.textContent.toLowerCase() || '';
      const matchesSpecialty = (selected === 'all' || specialty === selected);
      const matchesSearch = (name.includes(keyword) || specialty.includes(keyword));

      card.style.display = (matchesSpecialty && matchesSearch) ? 'block' : 'none';
    });
  }

  if (specialtyFilter) {
    specialtyFilter.addEventListener('change', filterPractitioners);
  }
  if (searchInput) {
    searchInput.addEventListener('input', filterPractitioners);
  }

  // Testimonial Slider
  const slider = document.querySelector('.testimonial-slider');
  if (slider) {
    setInterval(() => {
      const cardWidth = slider.querySelector('.testimonial-card')?.offsetWidth || 300;
      slider.scrollBy({ left: cardWidth, behavior: 'smooth' });
      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
        slider.scrollTo({ left: 0, behavior: 'smooth' });
      }
    }, 5000);
  }

  // Contact Form Validation
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      if (validateForm()) {
        console.log('Form submitted successfully');
        contactForm.reset();
      }
    });
  }

  function validateForm() {
    const name = document.getElementById('name')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    const message = document.getElementById('message')?.value.trim();
    const errorDiv = document.getElementById('form-errors');

    if (!name || !email || !message || !errorDiv) {
      console.error('Form elements not found');
      return false;
    }

    let errors = [];

    if (name.length < 3) {
      errors.push('Name must be at least 3 characters long.');
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      errors.push('Please enter a valid email address.');
    }

    if (message.length < 10) {
      errors.push('Message must be at least 10 characters long.');
    }

    errorDiv.innerHTML = errors.length > 0 ? errors.join('<br>') : '';
    return errors.length === 0;
  }
});