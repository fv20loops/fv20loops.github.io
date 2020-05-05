//a function which checks the flags of aeach page in local storage and tallys them up

function tally() {
  var x = 0;
  var y = 0;
  for (i=0; i < 10; i++) {
    x = parseInt(localStorage.getItem("page"+i));
    if (isNaN(x)) {x = 0};
    console.log("page"+i+" "+x);
    y = y +x;
    console.log("pageTotal "+y)
  };
  document.getElementById("basket").innerHTML = y;
}

function pageNumComplete(pageNum) {
  localStorage.setItem("page"+pageNum, 1);
}

function reset(){
  localStorage.clear();
  location.reload();
}



  // document.getElementById("basket").innerHTML = x;
