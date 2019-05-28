function myFunction(name) {

    var tempDots = "dots-"+name;
    var tempMore = "more-"+name;
    var tempBtn = "myBtn"+name;
    var dots = document.getElementById(tempDots);
    var moreText = document.getElementById(tempMore);
    var btnText = document.getElementById(tempBtn);
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more &#8897;"; 
      $(moreText).fadeOut();
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less &#8896;"; 
      $(moreText).fadeIn();
      moreText.style.display = "inline";
    }
  }