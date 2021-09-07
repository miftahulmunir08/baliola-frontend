window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.background = "#040812";
    document.getElementById("navbar").style.borderBottom = "1px solid #040812";
    document.getElementById("navbarr").style.background = "red";
    document.getElementById("navbarr").style.borderBottom = "1px solid #040812";
  } else {
    document.getElementById("navbar").style.background = "transparent";
    document.getElementById("navbar").style.borderBottom =
      "1px solid transparent";

    document.getElementById("navbarr").style.background = "#040812";
    document.getElementById("navbarr").style.borderBottom =
      "1px solid transparent";
  }
}
