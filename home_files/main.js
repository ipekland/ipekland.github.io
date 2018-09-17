function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


document.getElementById("avatar").addEventListener("click", function(){
  document.getElementById("ipek").style.color = getRandomColor();
});


function updateCopyrightYear() {
  const $copyrightYear = document.getElementById('copyright-year');
  if ($copyrightYear)  {
    $copyrightYear.innerHTML = new Date().getFullYear();
  }
}

document.addEventListener( "DOMContentLoaded" , () => {
  updateCopyrightYear();
});
