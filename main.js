function readMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

function showMenu() {
    var icon = document.getElementById('icon');
    var links = document.getElementById('links');

    if (links.style.display === 'none') {
        links.style.display = 'flex';
    } else if (links.style.display === 'flex') {
        links.style.display = 'none';
    }
};