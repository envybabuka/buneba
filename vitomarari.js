const inputs = document.querySelectorAll('.saxeli12');

function updatePlaceholders() {
  const windowWidth = window.innerWidth;

  inputs.forEach(input => {
    const inputId = input.getAttribute('id');
    if (windowWidth <= 1000) {
      switch (inputId) {
        case 'input1':
          input.placeholder = "სახელი";
          break;
        case 'input2':
          input.placeholder = "გვარი";
          break;
        case 'input3':
          input.placeholder = "ემაილი";
          break;
        case 'input4':
          input.placeholder = "თემა";
          break;
      }
    } else {
      input.placeholder = "";
    }
  });
}

window.addEventListener('resize', updatePlaceholders);
updatePlaceholders();

// vici ro javascript arunda gamomeyenebina mara 
// nervebi momeshala ver vaketebdi ragacas da
