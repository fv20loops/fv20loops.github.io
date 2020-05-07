//a function which checks the flags of aeach page in local storage and tallys them up
//project pages are pages 0-10
//mod pages are 11-14

function resetAlert(){
  var x = sessionStorage.getItem('reset');
  console.log(x);
  if (x==null) {x=0};
  if (x==0) {
    console.log("its 0 now");
    if(confirm("restart?")==true){
      localStorage.clear();
      sessionStorage.setItem('reset', 1);
      console.log(sessionStorage.getItem('reset'));
    } else {
      sessionStorage.setItem('reset', 1);
      console.log(sessionStorage.getItem('reset'));
    }
  };
}
function tallyHome() {
  var x = 0;
  var y = 0;
  for (i=0; i <11; i++) {
    x = parseInt(localStorage.getItem("page"+i));
    if (isNaN(x)) {x = 0};
    console.log("page"+i+" "+x);
    if(x==1) {document.getElementById('project'+i).style.color = "#737373"};
    y = y +x;
    console.log("pageTotal "+y);
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

  function modTally() {
    var x = 0;
    var y = 0;
    for (i=11; i <15; i++) {
      x = parseInt(localStorage.getItem("page"+i));
      if (isNaN(x)) {x = 0};
      console.log("modpage"+i+" "+x);
    };
    if (localStorage.getItem("page11")==1) {
      console.log("mod1");
      document.body.style.filter = "invert(1)";
    };
    if (localStorage.getItem("page12")==1) {
      console.log("mod2");
      document.body.style.filter = "blur(3px)";
    };
    if (localStorage.getItem("page13")==1) {
      console.log("mod3");
      document.body.style.filter = "brightness(2) saturate(30%) sepia(10%)";

  };
    if (localStorage.getItem("page14")==1) {console.log("mod4")};

  };

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
  for (i=11; i<15; i++) {
    x = parseInt(localStorage.getItem("page"+i));
    if (isNaN(x)) {x=0};
    if (x==1) {
      console.log("modpage"+i+" "+x);
      arr.push(i);
      console.log(arr);
    };
  }
  if (arr.length > 0) {
    console.log("array length"+arr.length);
    chooser = Math.round(Math.random() * (arr.length-1));
    console.log("chooser"+chooser);
    console.log("am gonna invert this mod!"+arr[chooser]);
    localStorage.setItem("page"+arr[chooser], 0);
    setTimeout(function(){window.location.href='index.html'}, 500);
  }
  else {
    x = 0;
    y = 0;
    arr = [];
    chooser = 0;
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
  chooser = Math.round(Math.random() * (arr.length-1));
  console.log("the index of the array...:"+chooser);
  console.log("page am going to is... "+arr[chooser]);
  // setTimeout(function(){window.location.href='projects/project'+arr[chooser]+'.html';}, 1000);

  }
}

function gameLose() {
    console.log("lose");
    var x = 0;
    var y = 0;
    var arr = [];
    var chooser = 0;
    var chosen = 0;
    for(i=0; i<11; i++) {
      x = parseInt(localStorage.getItem("page"+i));
      if (isNaN(x)) {x=0};
      if (x==1) {
        console.log("page"+i+" "+x);
        arr.push(i);
        console.log(arr);
      };
    }
    if (arr.length>0){
    console.log("array length: "+arr.length);
    chooser = Math.round(Math.random() * (arr.length));
    console.log("the index of the array...:"+chooser);
    chosen = arr[chooser];
    console.log("page am going to DELEEEETE is... "+chosen);
    localStorage.setItem("page"+chooser, 0);
    console.log("the deed... is done. page"+chooser+" is deleted");
    window.location.href='./index.html';
  } else {
    console.log("already on 0");
    window.location.href='./index.html';}
}
