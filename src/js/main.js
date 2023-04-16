const anchors = document.querySelectorAll('a[href*="#"]');
  anchors.forEach(function (anchor) {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const bolckId = anchor.getAttribute('href').substring(1);
      document.getElementById(bolckId).scrollIntoView(
        {
          behavior: 'smooth',
          block: 'start',
        }
      );
    });
  });
