window.addEventListener('scroll', function() { 
    var navbar = document.getElementById('navbar'); 
    if (window.scrollY > 50) { 
        navbar.classList.add('scroll-nav'); 
    } else { 
        navbar.classList.remove('scroll-nav'); 
    } 
  });
