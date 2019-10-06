var close = document.getElementById("close-menu");
var menu_active = document.getElementById("active-menu");
var line = document.getElementById('line');
var slide = document.getElementById('slides');
var next = document.getElementsByClassName('next');
var back = document.getElementsByClassName('back');

close.onclick = function(){
    menu_active.style.top = '100%';
}

function Adaptiv(){
    menu_active.style.top = 0;

}

function lineOdj(percent, lineId){
    this.percent = percent;
    this.lineId = lineId
}

var arr = [
    new lineOdj("0%", 0),
    new lineOdj("24%", 1),
    new lineOdj("48%", 2),
    new lineOdj("73%", 3),
]



window.addEventListener("load", function(){

   
[].forEach.call(next, function(e){
    e.addEventListener('click', function (){
      a = slide.firstElementChild;
      slide.appendChild(a);
    });
});

[].forEach.call(back, function(elem){
    elem.addEventListener('click', function (){
      b = slide.lastElementChild;
      slide.insertBefore(b, slide.children[0]);

    });
});
    logo.onclick = function(){

       
        document.getElementById('section-three').style.marginLeft = '100%';
        document.getElementById('section-four').style.marginLeft = '100%';
        document.getElementById('section-two').style.marginLeft = '100%';
    }
    two.onclick = function(){    
        setTimeout(function() { 
             document.getElementById('section-three').style.marginLeft = '100%';
             document.getElementById('section-four').style.marginLeft = '100%';
            }, 500);  
        document.getElementById('section-two').style.marginLeft = '0%';

        line.style.marginLeft = arr[1].percent;

        one.onmouseout = function(){
            line.style.marginLeft = arr[1].percent;         
        }
        two.onmouseout = function(){
            line.style.marginLeft = arr[1].percent;         
        }
        three.onmouseout = function(){
            line.style.marginLeft = arr[1].percent;         
        }
        four.onmouseout = function(){
            line.style.marginLeft = arr[1].percent;         
        }
    }
    one.onclick = function(){
        document.getElementById('section-two').style.marginLeft = '100%';
        document.getElementById('section-three').style.marginLeft = '100%';
        document.getElementById('section-four').style.marginLeft = '100%';

        line.style.marginLeft = '0%';
        
        one.onmouseout = function(){
            line.style.marginLeft = '0%';         
        }
        two.onmouseout = function(){
            line.style.marginLeft = '0%';       
        }
        three.onmouseout = function(){
            line.style.marginLeft = '0%';        
        }
        four.onmouseout = function(){
            line.style.marginLeft = '0%';       
        }
    }
    three.onclick = function(){
        
        setTimeout(function() {
             document.getElementById('section-two').style.marginLeft = '100%'; 
             document.getElementById('section-four').style.marginLeft = '100%';
            }, 500);
        document.getElementById('section-three').style.marginLeft = '0%';
        line.style.marginLeft = arr[2].percent;  
        
        one.onmouseout = function(){
            line.style.marginLeft = arr[2].percent;         
        }
        two.onmouseout = function(){
            line.style.marginLeft = arr[2].percent;         
        }
        three.onmouseout = function(){
            line.style.marginLeft = arr[2].percent;         
        }
        four.onmouseout = function(){
            line.style.marginLeft = arr[2].percent;         
        }
    }
    
    four.onclick = function(){
        setTimeout(function() { 
            document.getElementById('section-three').style.marginLeft = '100%'; 
            document.getElementById('section-two').style.marginLeft = '100%'; 
        }, 500);
        document.getElementById('section-four').style.marginLeft = '0%';
        line.style.marginLeft = arr[3].percent;  
        
        one.onmouseout = function(){
            line.style.marginLeft = arr[3].percent;         
        }
        two.onmouseout = function(){
            line.style.marginLeft = arr[3].percent;         
        }
        three.onmouseout = function(){
            line.style.marginLeft = arr[3].percent;         
        }
        four.onmouseout = function(){
            line.style.marginLeft = arr[3].percent;         
        }
    }


    one.onmouseover = function(){
        line.style.marginLeft = '0%'      
    }   
    
    two.onmouseover = function(){
        line.style.marginLeft = '24%';
    } 
    
    three.onmouseover = function(){
        line.style.marginLeft = '48%';
    }
    
    four.onmouseover = function(){
        line.style.marginLeft = '73%';
    }

    one.onmouseout = function(){
        line.style.marginLeft = '0%';         
    }
    two.onmouseout = function(){
        line.style.marginLeft = '0%';       
    }
    three.onmouseout = function(){
        line.style.marginLeft = '0%';        
    }
    four.onmouseout = function(){
        line.style.marginLeft = '0%';       
    }


    /*адаптивное меню*/
    blTwo.onclick = function(){
        document.getElementById('section-two').style.marginLeft = '0%';
        document.getElementById('section-three').style.marginLeft = '100%';
        document.getElementById('section-four').style.marginLeft = '100%';
        setTimeout(function() {  menu_active.style.top = '100%'; }, 500);
    }
    blOne.onclick = function(){
        document.getElementById('section-two').style.marginLeft = '100%';
        document.getElementById('section-three').style.marginLeft = '100%';
        document.getElementById('section-four').style.marginLeft = '100%';
        setTimeout(function() {  menu_active.style.top = '100%'; }, 500);
    }
    blThree.onclick = function(){
        document.getElementById('section-two').style.marginLeft = '100%';
        document.getElementById('section-three').style.marginLeft = '0%';
        document.getElementById('section-four').style.marginLeft = '100%';
        setTimeout(function() {  menu_active.style.top = '100%'; }, 500);
    }
    blFour.onclick = function(){
        
        document.getElementById('section-two').style.marginLeft = '100%';
        document.getElementById('section-three').style.marginLeft = '100%';
        document.getElementById('section-four').style.marginLeft = '0%';
        setTimeout(function() {  menu_active.style.top = '100%'; }, 500);
    }



})


/* портфолио */


function studio(){

    document.getElementById('webStudio').style.display = "flex"
}

closeHidden.onclick = function(){
    document.getElementById('webStudio').style.display = "none";
}


function store(){
    document.getElementById('store').style.display = "flex"
}

closeStore.onclick = function(){
    document.getElementById('store').style.display = "none"
}

function bionic(){
    document.getElementById('bionic').style.display = "flex"
}

closeBionic.onclick = function(){
    document.getElementById('bionic').style.display = "none"
}


function threeD(){
    document.getElementById('threeD').style.display = "flex"
}

closeThreeD.onclick = function(){
    document.getElementById('threeD').style.display = "none"
}


function xram(){
    document.getElementById('xram').style.display = "flex"
}

closeXram.onclick = function(){
    document.getElementById('xram').style.display = "none"
}

function kuka(){
    document.getElementById('kuka').style.display = "flex"
}

closeKuka.onclick = function(){
    document.getElementById('kuka').style.display = "none"
}


function note(){
    document.getElementById('note').style.display = "flex"
}

closeNote.onclick = function(){
    document.getElementById('note').style.display = "none"
}

function everycargo(){
    document.getElementById('everycargo').style.display = "flex"
}

closeEverycargo.onclick = function(){
    document.getElementById('everycargo').style.display = "none"
}

function trends(){
    document.getElementById('trends').style.display = "flex"
}

closeTrends.onclick = function(){
    document.getElementById('trends').style.display = "none"
}



/* прелоадер */

function loadData() {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 2000);
    })
  }
  
  loadData()
    .then(() => {
      let preloaderEl = document.getElementById('preloader');
      preloaderEl.classList.add('hidden');
      preloaderEl.classList.remove('visible');
    });


