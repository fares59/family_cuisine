function btnFunc1() {
    var dots = document.getElementById("dots1");
    var moreText = document.getElementById("more1");
    var btnText = document.getElementById("sBtn1");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Details";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Back";
      moreText.style.display = "inline";
    }
  }
  
  function btnFunc2() {
    var dots = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("sBtn2");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Details";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Back";
      moreText.style.display = "inline";
    }
  }
  
  function chBtnFunc1() {
    var dots = document.getElementById("chDots1");
    var choice = document.getElementById("choice1");
    var btnText = document.getElementById("chBtn1");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Show";
      choice.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Hide";
      choice.style.display = "inline";
    }
  }
  
  function chBtnFunc2() {
    var dots = document.getElementById("chDots2");
    var choice = document.getElementById("choice2");
    var btnText = document.getElementById("chBtn2");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Show";
      choice.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Hide";
      choice.style.display = "inline";
    }
  }
  