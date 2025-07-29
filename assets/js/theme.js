const main = document.getElementById("main");

main.onscroll = function () {
  var scrollTop = main.scrollTop;
  var scrollHeight = main.scrollHeight - main.clientHeight;
  var scrolled = (scrollTop / scrollHeight) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
};
