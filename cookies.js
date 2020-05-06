//a function which checks the flags of aeach page in local storage and tallys them up

function tallyHome() {
  var x = 0;
  var y = 0;
  for (i=0; i < 11; i++) {
    x = parseInt(localStorage.getItem("page"+i));
    if (isNaN(x)) {x = 0};
    console.log("page"+i+" "+x);
    y = y +x;
    console.log("pageTotal "+y)
  };
  document.getElementById("basket").innerHTML = y;

  for (i=0; i<y; i++) {
    var newDiv = document.createElement("div");
    newDiv.setAttribute("class", "logoColumnHome");
    var newContent = document.createElement("IMG");
    var selector = Math.random();
    if (selector<0.5) {
      newContent.setAttribute("src", "images/loopsLogo/LoopsOFill.png");
    } else {
      newContent.setAttribute("src", "images/loopsLogo/LoopsOTarget.png");
    };
    // add the new image node to the newly created div
    newDiv.appendChild(newContent);

    // // add the newly created element and its content into the DOM
     var currentDiv = document.getElementById("logoBefore");
     var parentDiv = document.getElementById("logoRow")
     parentDiv.insertBefore(newDiv, currentDiv);
  };

}

function tally() {
  var x = 0;
  var y = 0;
  for (i=0; i < 11; i++) {
    x = parseInt(localStorage.getItem("page"+i));
    if (isNaN(x)) {x = 0};
    console.log("page"+i+" "+x);
    y = y +x;
    console.log("pageTotal "+y)
  };

  for (i=0; i<y; i++) {
    var newDiv = document.createElement("div");
    newDiv.setAttribute("class", "logoColumn");
    var newContent = document.createElement("IMG");
    var selector = Math.random();
    if (selector<0.5) {
      newContent.setAttribute("src", "images/loopsLogo/LoopsOFill.png");
    } else {
      newContent.setAttribute("src", "images/loopsLogo/LoopsOTarget.png");
    };
    // add the new image node to the newly created div
    newDiv.appendChild(newContent);

    // // add the newly created element and its content into the DOM
     var currentDiv = document.getElementById("logoBefore");
     var parentDiv = document.getElementById("logoRow")
     parentDiv.insertBefore(newDiv, currentDiv);
  };

}

function pageNumComplete(pageNum) {
  localStorage.setItem("page"+pageNum, 1);
}

function reset(){
  localStorage.clear();
  location.reload();
}

function gameWin() {
  console.log("win");
  var x = 0;
  var y = 0;
  var arr = [];
  var chooser = 0;
  for(i=0; i<11; i++) {
    x = parseInt(localStorage.getItem("page"+i));
    if (isNaN(x)) {x=0};
    if (x==0) {
      console.log("page"+i+" "+x);
      arr.push(i);
      console.log(arr);
    };
  }
  console.log("array length: "+arr.length);
  chooser = Math.round(Math.random() * (arr.length));
  console.log("the index of the array...:"+chooser);
  console.log("page am going to is... "+arr[chooser]);
  window.location.href='projects/project'+arr[chooser]+'.html';
}
