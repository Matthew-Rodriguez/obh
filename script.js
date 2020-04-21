document.addEventListener("DOMContentLoaded", function(event) {

const swup = new Swup();







const TAIL_LENGTH = 40;

const cursor = document.getElementById('cursor');

let mouseX = 0;
let mouseY = 0;

let cursorCircles;
let cursorHistory = Array(TAIL_LENGTH).fill({x: 0, y: 0});

function onMouseMove(event) {
  mouseX = event.clientX;
  mouseY = event.clientY;
}

function onClick(event) {
  for (let i = 0; i < TAIL_LENGTH; i++) {
    cursorHistory[i].x += Math.random() * 100 - 50;
    cursorHistory[i].y += Math.random() * 100 - 50;
    }
}


function initCursor() {
  for (let i = 0; i < TAIL_LENGTH; i++) {
    let div = document.createElement('div');
    div.classList.add('cursor-circle') ;
    cursor.append(div);
  }
  cursorCircles = Array.from(document.querySelectorAll('.cursor-circle'));
}

function updateCursor() {  
  cursorHistory.shift();
  cursorHistory.push({ x: mouseX, y: mouseY });
    
  for (let i = 0; i < TAIL_LENGTH; i++) {
    let current = cursorHistory[i];
    let next = cursorHistory[i + 1] || cursorHistory[TAIL_LENGTH - 1];
    
    let xDiff = next.x - current.x;
    let yDiff = next.y - current.y;
    
    current.x += xDiff * 0.75;
    current.y += yDiff * 0.75;
    cursorCircles[i].style.transform = `translate(${current.x}px, ${current.y}px) scale(${i/TAIL_LENGTH})`;  
  }
  requestAnimationFrame(updateCursor)
}

document.addEventListener('mousemove', onMouseMove, false);
document.addEventListener('click', onClick, false);

initCursor();
updateCursor();









    function pageTransition() {
        var tl = gsap.timeline();
    
        tl.to('ul.transition li', { duration: .2, scaleY: 1, transformOrigin: "bottom left", stagger: .2 })
        tl.to('ul.transition li', { duration: .2, scaleY: 0, transformOrigin: "bottom left", stagger: .1, delay: .1})
    }
    
    function contentAnimation() {
        var tl = gsap.timeline();
        tl.from('.left', { duration: 1, translateY: 50, opacity: 0})
        tl.from('.figma', { duration: 1.3, translateX: 50, opacity: 0}, "-=.8")
        tl.from('.figma_two', { duration: 1, translateY: -30, opacity: .9}, "-=.8")
        tl.from('.figma_four', { duration: 1, translateX: -50, opacity: 0}, "-=.8")
    
        tl.from('.figma_three', { duration: 1.3, translateX: 50, opacity: 0}, "-=.8")
        tl.from('.figma_five', { duration: 3.3, translateX: 100, opacity: 0}, "-=.9")
    
    }
    
  

    



    let
    elapsedTime = 0,
    started = false,
    intervalID,
    counter = 0;

  const
    timer = document.getElementById("timer"),
    startBtn = document.getElementById("startStopBtn"),
    resetBtn = document.getElementById("resetBtn"),
    recordBtn = document.getElementById("recordBtn"),
    timeRecords = document.getElementById("time-records");
  
  // Registered Events
  startBtn.addEventListener('click', function() {
      if (started === false) {
          startTimer();
      } else if(counter === 7 ) {
          stopTimer();
      } else {
        stopTimer();
      }
  });
  
  resetBtn.addEventListener('click', resetTimer);
  recordBtn.addEventListener('click', recordTime);
  
  document.addEventListener('keydown', (event) => {
      if (event.key === 's') {
          if (started === false) {
              startTimer();
          } else {
              stopTimer();
          }
      } else if (event.key === 't') {
          recordTime();
      } else if (event.key === 'r') {
          resetTimer();
      }
  });
  
  /**
   * @param {}
   * @return 
   * Starts the stopwatch, and updates the watch DOM, every 
   * 0.5s
   */
  function startTimer() {
  
      intervalID = setInterval(() => {
          elapsedTime += 0.01;
          timer.innerHTML = roundTime(elapsedTime);
         
        
      }, 100);
  
      started = true;
   
  }
  
  /**
   * @function stopTimer
   * @param {}
   * @return 
   * Stops the stopwatch
   */
  function stopTimer() {
      clearInterval(intervalID);
      started = false;
  }
  
  /**
   * @function resetTimer
   * @param {}
   * @return
   * Resets the stopwatch to 0 and updates the DOM accordingly
   */
  function resetTimer() {
      clearInterval(intervalID);
      elapsedTime = 0;
      timer.innerHTML = elapsedTime;
      started = false;
      clearTimeRecords();
  }
  
  /**
   * @function recordTime
   * @param {}
   * @return
   * Records the current Elapsed time and updates the DOM accordingly
   */
  function recordTime() {
      const li = document.createElement('li');
      li.appendChild(document.createTextNode(roundTime(elapsedTime)));
      timeRecords.appendChild(li);
  }
  
  /**
   * @function clearTimeRecords
   * @param {}
   * @return
   * Clears the recorded times
   */
  function clearTimeRecords() {
      timeRecords.innerHTML = '';
  }
  
  /**
   * @function roundTime
   * @param {Number} time 
   * @param {Number} dp
   * @return {Number}
   */
  function roundTime(time, dp=2) { // d.p = decimal places
      time = time.toFixed(dp);
      return time;
  }




  		var blob1 = document.getElementById('#blob1');
		var blob2 = document.getElementById('#blob2')
		var blob3 = document.getElementById('#blob3')
		var blob4 = document.getElementById('#blob4')
		var blob5 = document.getElementById('#blob5')
		var blob6 = document.getElementById('#blob6')
		var blob7 = document.getElementById('#blob7')
  var allBlobs = document.getElementsByClassName('.blobs')


		$("#blob").click(function() {
			counter++ 
      console.log(counter)
      if(counter === 1) {
        startTimer();
        
    }  

		else	if( counter === 7) {
        stopTimer();
        $('#nextLevel').css({
          "display":"unset",
          
        })

        if(elapsedTime < 0.45) {
          console.log('hey')
          $('#youWin').css({
            "display":"unset"
          })
        } else if (elapsedTime >= 0.46 && elapsedTime < 0.56){
          console.log('hey')
          $('#youWin_silver').css({
            "display":"unset",
            "color": "yellow"
          })
        } else if (elapsedTime >= 0.57){
          console.log('hey')
          $('#youWin_bronze').css({
            "display":"unset",
            "color": "green"
          })
        }
    
$("#body").css({
	"animation": "fadeIn 3s forwards"

});
}
    $("#blob").css({
		'opacity': '.7',
		'box-shdow': '0px 0px 33px blue',
		"transform":"scale(1.1)"

    });
  
});

$('#blob2').click(function() {
	counter++
	console.log(counter)
  if(counter === 1) {
    startTimer();
}  

else	if( counter === 7 ) {

    stopTimer();

    if(elapsedTime < 0.45) {
      console.log('hey')
      $('#youWin').css({
        "display":"unset"
      })
    } else if (elapsedTime >= 0.46 && elapsedTime < 0.56){
      console.log('hey')
      $('#youWin_silver').css({
        "display":"unset",
        "color": "yellow"
      })
    } else if (elapsedTime >= 0.57){
      console.log('hey')
      $('#youWin_bronze').css({
        "display":"unset",
        "color": "green"
      })
    }

 $('#nextLevel').css({
          "display":"unset"
        })
$("#body").css({
	"animation": "fadeIn 3s forwards"

});
}
    $('#blob2').css({
		'opacity': '.7',
		'box-shdow': '0px 0px 33px blue',
		"transform":"scale(1.1)"

    });
});

$('#blob3').click(function() {
	counter++
	console.log(counter)
  if(counter === 1) {
    startTimer();
}  

else	if( counter === 7 ) {

    stopTimer();

    if(elapsedTime < 0.45) {
      console.log('hey')
      $('#youWin').css({
        "display":"unset"
      })
    } else if (elapsedTime >= 0.46 && elapsedTime < 0.56){
      console.log('hey')
      $('#youWin_silver').css({
        "display":"unset",
        "color": "yellow"
      })
    } else if (elapsedTime >= 0.57){
      console.log('hey')
      $('#youWin_bronze').css({
        "display":"unset",
        "color": "green"
      })
    }

    $('#nextLevel').css({
      "display":"unset"
    })
$("#body").css({
	"animation": "fadeIn 3s forwards"

});
}
    $('#blob3').css({
		'opacity': '.7',
		'box-shdow': '0px 0px 33px blue'

    });
});

$('#blob4').click(function() {
	counter++
	console.log(counter)
  if(counter === 1) {
    startTimer();
}  

else	if( counter === 7 ) {

    stopTimer();

    if(elapsedTime < 0.45) {
      console.log('hey')
      $('#youWin').css({
        "display":"unset"
      })
    } else if (elapsedTime >= 0.46 && elapsedTime < 0.56){
      console.log('hey')
      $('#youWin_silver').css({
        "display":"unset",
        "color": "yellow"
      })
    } else if (elapsedTime >= 0.57){
      console.log('hey')
      $('#youWin_bronze').css({
        "display":"unset",
        "color": "green"
      })
    }

    $('#nextLevel').css({
      "display":"unset"
    })
$("#body").css({
	"animation": "fadeIn 3s forwards"

});
}
    $('#blob4').css({
		'opacity': '.7',
		'box-shdow': '0px 0px 33px blue'

    });
});

$('#blob5').click(function() {
	counter++
  if(counter === 1) {
    startTimer();
}  

else	if( counter === 7 ) {

    stopTimer();

    if(elapsedTime < 0.45) {
      console.log('hey')
      $('#youWin').css({
        "display":"unset"
      })
    } else if (elapsedTime >= 0.46 && elapsedTime < 0.57){
      console.log('hey')
      $('#youWin_silver').css({
        "display":"unset",
        "color": "yellow"
      })
    } else if (elapsedTime >= 0.58){
      console.log('hey')
      $('#youWin_bronze').css({
        "display":"unset",
        "color": "green"
      })
    }

    $('#nextLevel').css({
      "display":"unset"
    })
$("#body").css({
	"animation": "fadeIn 3s forwards"

});
}
	console.log(counter)
    $('#blob5').css({
		'opacity': '.7',
		'box-shdow': '0px 0px 33px blue'

    });
});

$('#blob6').click(function() {
	counter++
	console.log(counter)
  if(counter === 1) {
    startTimer();
}  

else	if( counter === 7 ) {

    stopTimer();

    if(elapsedTime < 0.45) {
      console.log('hey')
      $('#youWin').css({
        "display":"unset"
      })
    } else if (elapsedTime >= 0.46 && elapsedTime < 0.57){
      console.log('hey')
      $('#youWin_silver').css({
        "display":"unset",
        "color": "yellow"
      })
    } else if (elapsedTime >= 0.58){
      console.log('hey')
      $('#youWin_bronze').css({
        "display":"unset",
        "color": "green"
      })
    }

    $('#nextLevel').css({
      "display":"unset"
    })
$("#body").css({
	"animation": "fadeIn 3s forwards"

});
}

    $('#blob6').css({
		'opacity': '.7',
		'box-shdow': '0px 0px 33px blue'

    });
});

$('#blob7').click(function() {
	counter++
	console.log(counter)
  if(counter === 1) {
    startTimer();
}  

else	if( counter === 7 ) {

    stopTimer();

    if(elapsedTime < 0.45) {
      console.log('hey')
      $('#youWin').css({
        "display":"unset"
      })
    } else if (elapsedTime >= 0.46 && elapsedTime < 0.56){
      console.log('hey')
      $('#youWin_silver').css({
        "display":"unset",
        "color": "yellow"
      })
    } else if (elapsedTime >= 0.57){
      console.log('hey')
      $('#youWin_bronze').css({
        "display":"unset",
        "color": "green"
      })
    }
    $('#nextLevel').css({
      "display":"unset"
    })
$("#body").css({
	"animation": "fadeIn 3s forwards"

});
}
    $('#blob7').css({
		'opacity': '.7',
		'box-shdow': '0px 0px 33px blue'
		
    });
});


$("#gotit").click(function() {

  $('#title').css({
    "display":"none"
  })

$('.directions').css({
  "display":"none"
})
$('.timerbody').css({
  "display":"unset"
})
$("#body").css({
	"animation": "fadeIn 3s forwards"

});

$("#blob").css({
'opacity': '.1',
'box-shdow': '0px 0px 33px blue',
"display": "unset"
})
$("#blob2").css({
  'opacity': '.1',
  'box-shdow': '0px 0px 33px blue',
  "display": "unset"
  })
  $("#blob3").css({
    'opacity': '.1',
    'box-shdow': '0px 0px 33px blue',
    "display": "unset"
    })
    $("#blob4").css({
      'opacity': '.1',
      'box-shdow': '0px 0px 33px blue',
      "display": "unset"
      })
      $("#blob5").css({
        'opacity': '.1',
        'box-shdow': '0px 0px 33px blue',
        "display": "unset"
        })
        $("#blob6").css({
          'opacity': '.4',
          'box-shdow': '0px 0px 33px blue',
          "display": "unset"
          })
          $("#blob7").css({
            'opacity': '.1',
            'box-shdow': '0px 0px 33px blue',
            "display": "unset"
            })
});



// next level js

let counter2 = 0

$("#blob11").click(function() {
  counter2++
  console.log(counter)
  if(counter2 === 1) {
    startTimer();

}  

else	if( counter2 === 7 ) {

    stopTimer();
    if(elapsedTime < 0.35) {
      console.log('hey')
      $('#youWin').css({
        "display":"unset"
      })
    } else if (elapsedTime >= 0.36 && elapsedTime < 0.47){
      console.log('hey')
      $('#youWin_silver').css({
        "display":"unset",
        "color": "yellow"
      })
    } else if (elapsedTime >= 0.48){
      console.log('hey')
      $('#youWin_bronze').css({
        "display":"unset",
        "color": "green"
      })
    }



    $('#nextLevel').css({
      "display":"unset",
      
    })

$("#body").css({
"animation": "fadeIn 3s forwards"

});
}
$("#blob11").css({
'opacity': '.7',
'box-shdow': '0px 0px 33px blue',
"transform":"scale(1.1)"

});

});


$("#blob22").click(function() {
  counter2++
  console.log(counter2)
  if(counter2 === 1) {
    startTimer();

}  

else	if( counter2 === 7 ) {

    stopTimer();

    if(elapsedTime < 0.35) {
      console.log('hey')
      $('#youWin').css({
        "display":"unset"
      })
    } else if (elapsedTime >= 0.36 && elapsedTime < 0.47){
      console.log('hey')
      $('#youWin_silver').css({
        "display":"unset",
        "color": "yellow"
      })
    } else if (elapsedTime >= 0.48){
      console.log('hey')
      $('#youWin_bronze').css({
        "display":"unset",
        "color": "green"
      })
    }
    $('#nextLevel').css({
      "display":"unset",
      
    })

$("#body").css({
"animation": "fadeIn 3s forwards"

});
}
$("#blob22").css({
'opacity': '.7',
'box-shdow': '0px 0px 33px blue',
"transform":"scale(1.1)"

});

});


$("#blob33").click(function() {
  counter2++
  console.log(counter2)
  if(counter2 === 1) {
    startTimer();

}  

else	if( counter2 === 7 ) {

    stopTimer();

    if(elapsedTime < 0.35) {
      console.log('hey')
      $('#youWin').css({
        "display":"unset"
      })
    } else if (elapsedTime >= 0.36 && elapsedTime < 0.47){
      console.log('hey')
      $('#youWin_silver').css({
        "display":"unset",
        "color": "yellow"
      })
    } else if (elapsedTime >= 0.48){
      console.log('hey')
      $('#youWin_bronze').css({
        "display":"unset",
        "color": "green"
      })
    }

    $('#nextLevel').css({
      "display":"unset",
      
    })

$("#body").css({
"animation": "fadeIn 3s forwards"

});
}
$("#blob33").css({
'opacity': '.7',
'box-shdow': '0px 0px 33px blue',
"transform":"scale(1.1)"

});

});


$("#blob44").click(function() {
  counter2++
  console.log(counter2)
  if(counter2 === 1) {
    startTimer();

}  

else	if( counter2 === 7 ) {

    stopTimer();

    if(elapsedTime < 0.35) {
      console.log('hey')
      $('#youWin').css({
        "display":"unset"
      })
    } else if (elapsedTime >= 0.36 && elapsedTime < 0.47){
      console.log('hey')
      $('#youWin_silver').css({
        "display":"unset",
        "color": "yellow"
      })
    } else if (elapsedTime >= 0.48){
      console.log('hey')
      $('#youWin_bronze').css({
        "display":"unset",
        "color": "green"
      })
    }

    $('#nextLevel').css({
      "display":"unset",
      
    })

$("#body").css({
"animation": "fadeIn 3s forwards"

});
}
$("#blob44").css({
'opacity': '.7',
'box-shdow': '0px 0px 33px blue',
"transform":"scale(1.1)"

});

});


$("#blob55").click(function() {
  counter2++
  console.log(counter2)
  if(counter2 === 1) {
    startTimer();

}  

else	if( counter2 === 7 ) {

    stopTimer();

    if(elapsedTime < 0.35) {
      console.log('hey')
      $('#youWin').css({
        "display":"unset"
      })
    } else if (elapsedTime >= 0.36 && elapsedTime < 0.47){
      console.log('hey')
      $('#youWin_silver').css({
        "display":"unset",
        "color": "yellow"
      })
    } else if (elapsedTime >= 0.48){
      console.log('hey')
      $('#youWin_bronze').css({
        "display":"unset",
        "color": "green"
      })
    }

    $('#nextLevel').css({
      "display":"unset",
      
    })

$("#body").css({
"animation": "fadeIn 3s forwards"

});
}
$("#blob55").css({
'opacity': '.7',
'box-shdow': '0px 0px 33px blue',
"transform":"scale(1.1)"

});

});


$("#blob66").click(function() {
  counter2++
  console.log(counter2)
  if(counter2 === 1) {
    startTimer();

}  

else	if( counter2 === 7 ) {

    stopTimer();

    if(elapsedTime < 0.35) {
      console.log('hey')
      $('#youWin').css({
        "display":"unset"
      })
    } else if (elapsedTime >= 0.36 && elapsedTime < 0.47){
      console.log('hey')
      $('#youWin_silver').css({
        "display":"unset",
        "color": "yellow"
      })
    } else if (elapsedTime >= 0.48){
      console.log('hey')
      $('#youWin_bronze').css({
        "display":"unset",
        "color": "green"
      })
    }

    $('#nextLevel').css({
      "display":"unset",
      
    })

$("#body").css({
"animation": "fadeIn 3s forwards"

});
}
$("#blob66").css({
'opacity': '.7',
'box-shdow': '0px 0px 33px blue',
"transform":"scale(1.1)"

});

});


$("#blob77").click(function() {
  counter2++
  console.log(counter2)
  if(counter2 === 1) {
    startTimer();

}  

else	if( counter2 === 7 ) {

    stopTimer();

    if(elapsedTime < 0.35) {
      console.log('hey')
      $('#youWin').css({
        "display":"unset"
      })
    } else if (elapsedTime >= 0.36 && elapsedTime < 0.47){
      console.log('hey')
      $('#youWin_silver').css({
        "display":"unset",
        "color": "yellow"
      })
    } else if (elapsedTime >= 0.48){
      console.log('hey')
      $('#youWin_bronze').css({
        "display":"unset",
        "color": "green"
      })
    }

    $('#nextLevel').css({
      "display":"unset",
      
    })

$("#body").css({
"animation": "fadeIn 3s forwards"

});
}
$("#blob77").css({
'opacity': '.7',
'box-shdow': '0px 0px 33px blue',
"transform":"scale(1.1)"
});

});



//LEVEL 3







let counter3 = 0

$("#blob122").click(function() {
  counter3++
  console.log(counter)
  if(counter3 === 1) {
    startTimer();

}  

else	if( counter3 === 7 ) {

    stopTimer();
    if(elapsedTime < 0.35) {
      console.log('hey')
      $('#youWin').css({
        "display":"unset"
      })
    } else if (elapsedTime >= 0.36 && elapsedTime < 0.47){
      console.log('hey')
      $('#youWin_silver').css({
        "display":"unset",
        "color": "yellow"
      })
    } else if (elapsedTime >= 0.48){
      console.log('hey')
      $('#youWin_bronze').css({
        "display":"unset",
        "color": "green"
      })
    }



    $('#nextLevel').css({
      "display":"unset",
      
    })


}
$("#blob122").css({
'opacity': '.7',
'box-shdow': '0px 0px 33px blue',
"transform":"scale(1.1)"

});

});


$("#blob222").click(function() {
  counter3++
  console.log(counter3)
  if(counter3 === 1) {
    startTimer();

}  

else	if( counter3 === 7 ) {

    stopTimer();

    if(elapsedTime < 0.35) {
      console.log('hey')
      $('#youWin').css({
        "display":"unset"
      })
    } else if (elapsedTime >= 0.36 && elapsedTime < 0.47){
      console.log('hey')
      $('#youWin_silver').css({
        "display":"unset",
        "color": "yellow"
      })
    } else if (elapsedTime >= 0.48){
      console.log('hey')
      $('#youWin_bronze').css({
        "display":"unset",
        "color": "green"
      })
    }
    $('#nextLevel').css({
      "display":"unset",
      
    })


}
$("#blob222").css({
'opacity': '.7',
'box-shdow': '0px 0px 33px blue',
"transform":"scale(1.1)"

});

});


$("#blob333").click(function() {
  counter3++
  console.log(counter3)
  if(counter3 === 1) {
    startTimer();

}  

else	if( counter3 === 7 ) {

    stopTimer();

    if(elapsedTime < 0.35) {
      console.log('hey')
      $('#youWin').css({
        "display":"unset"
      })
    } else if (elapsedTime >= 0.36 && elapsedTime < 0.47){
      console.log('hey')
      $('#youWin_silver').css({
        "display":"unset",
        "color": "yellow"
      })
    } else if (elapsedTime >= 0.48){
      console.log('hey')
      $('#youWin_bronze').css({
        "display":"unset",
        "color": "green"
      })
    }

    $('#nextLevel').css({
      "display":"unset",
      
    })


}
$("#blob333").css({
'opacity': '.7',
'box-shdow': '0px 0px 33px blue',
"transform":"scale(1.1)"

});

});


$("#blob444").click(function() {
  counter3++
  console.log(counter3)
  if(counter3 === 1) {
    startTimer();

}  

else	if( counter3 === 7 ) {

    stopTimer();

    if(elapsedTime < 0.35) {
      console.log('hey')
      $('#youWin').css({
        "display":"unset"
      })
    } else if (elapsedTime >= 0.36 && elapsedTime < 0.47){
      console.log('hey')
      $('#youWin_silver').css({
        "display":"unset",
        "color": "yellow"
      })
    } else if (elapsedTime >= 0.48){
      console.log('hey')
      $('#youWin_bronze').css({
        "display":"unset",
        "color": "green"
      })
    }

    $('#nextLevel').css({
      "display":"unset",
      
    })


}
$("#blob444").css({
'opacity': '.7',
'box-shdow': '0px 0px 33px blue',
"transform":"scale(1.1)"

});

});


$("#blob555").click(function() {
  counter3++
  console.log(counter3)
  if(counter3 === 1) {
    startTimer();

}  

else	if( counter3 === 7 ) {

    stopTimer();

    if(elapsedTime < 0.35) {
      console.log('hey')
      $('#youWin').css({
        "display":"unset"
      })
    } else if (elapsedTime >= 0.36 && elapsedTime < 0.47){
      console.log('hey')
      $('#youWin_silver').css({
        "display":"unset",
        "color": "yellow"
      })
    } else if (elapsedTime >= 0.48){
      console.log('hey')
      $('#youWin_bronze').css({
        "display":"unset",
        "color": "green"
      })
    }

    $('#nextLevel').css({
      "display":"unset",
      
    })


}
$("#blob555").css({
'opacity': '.7',
'box-shdow': '0px 0px 33px blue',
"transform":"scale(1.1)"

});

});


$("#blob666").click(function() {
  counter3++
  console.log(counter3)
  if(counter3 === 1) {
    startTimer();

}  

else	if( counter3 === 7 ) {

    stopTimer();

    if(elapsedTime < 0.35) {
      console.log('hey')
      $('#youWin').css({
        "display":"unset"
      })
    } else if (elapsedTime >= 0.36 && elapsedTime < 0.47){
      console.log('hey')
      $('#youWin_silver').css({
        "display":"unset",
        "color": "yellow"
      })
    } else if (elapsedTime >= 0.48){
      console.log('hey')
      $('#youWin_bronze').css({
        "display":"unset",
        "color": "green"
      })
    }

    $('#nextLevel').css({
      "display":"unset",
      
    })


}
$("#blob666").css({
'opacity': '.7',
'box-shdow': '0px 0px 33px blue',
"transform":"scale(1.1)"

});

});


$("#blob777").click(function() {
  counter3++
  console.log(counter3)
  if(counter3 === 1) {
    startTimer();

}  

else	if( counter3 === 7 ) {

    stopTimer();

    if(elapsedTime < 0.35) {
      console.log('hey')
      $('#youWin').css({
        "display":"unset"
      })
    } else if (elapsedTime >= 0.36 && elapsedTime < 0.47){
      console.log('hey')
      $('#youWin_silver').css({
        "display":"unset",
        "color": "yellow"
      })
    } else if (elapsedTime >= 0.48){
      console.log('hey')
      $('#youWin_bronze').css({
        "display":"unset",
        "color": "green"
      })
    }

    $('#nextLevel').css({
      "display":"unset",
      
    })


}
$("#blob777").css({
'opacity': '.7',
'box-shdow': '0px 0px 33px blue',
"transform":"scale(1.1)"
});

});


//LEVEL 4








let counter4 = 0

$("#blob1222").click(function() {
  counter4++
  console.log(counter)
  if(counter4 === 1) {
    startTimer();

}  

else	if( counter4 === 7 ) {

    stopTimer();
    if(elapsedTime < 0.35) {
      console.log('hey')
      $('#youWin').css({
        "display":"unset"
      })
    } else if (elapsedTime >= 0.36 && elapsedTime < 0.47){
      console.log('hey')
      $('#youWin_silver').css({
        "display":"unset",
        "color": "yellow"
      })
    } else if (elapsedTime >= 0.48){
      console.log('hey')
      $('#youWin_bronze').css({
        "display":"unset",
        "color": "green"
      })
    }



    $('#nextLevel').css({
      "display":"unset",
      
    })


}
$("#blob1222").css({
'opacity': '.7',
'box-shdow': '0px 0px 33px blue',
"transform":"scale(1.1)"

});

});


$("#blob2222").click(function() {
  counter4++
  console.log(counter4)
  if(counter4 === 1) {
    startTimer();

}  

else	if( counter4 === 7 ) {

    stopTimer();

    if(elapsedTime < 0.35) {
      console.log('hey')
      $('#youWin').css({
        "display":"unset"
      })
    } else if (elapsedTime >= 0.36 && elapsedTime < 0.47){
      console.log('hey')
      $('#youWin_silver').css({
        "display":"unset",
        "color": "yellow"
      })
    } else if (elapsedTime >= 0.48){
      console.log('hey')
      $('#youWin_bronze').css({
        "display":"unset",
        "color": "green"
      })
    }
    $('#nextLevel').css({
      "display":"unset",
      
    })


}
$("#blob2222").css({
'opacity': '.7',
'box-shdow': '0px 0px 33px blue',
"transform":"scale(1.1)"

});

});


$("#blob3333").click(function() {
  counter4++
  console.log(counter4)
  if(counter4 === 1) {
    startTimer();

}  

else	if( counter4 === 7 ) {

    stopTimer();

    if(elapsedTime < 0.35) {
      console.log('hey')
      $('#youWin').css({
        "display":"unset"
      })
    } else if (elapsedTime >= 0.36 && elapsedTime < 0.47){
      console.log('hey')
      $('#youWin_silver').css({
        "display":"unset",
        "color": "yellow"
      })
    } else if (elapsedTime >= 0.48){
      console.log('hey')
      $('#youWin_bronze').css({
        "display":"unset",
        "color": "green"
      })
    }

    $('#nextLevel').css({
      "display":"unset",
      
    })


}
$("#blob3333").css({
'opacity': '.7',
'box-shdow': '0px 0px 33px blue',
"transform":"scale(1.1)"

});

});


$("#blob4444").click(function() {
  counter4++
  console.log(counter4)
  if(counter4 === 1) {
    startTimer();

}  

else	if( counter4 === 7 ) {

    stopTimer();

    if(elapsedTime < 0.35) {
      console.log('hey')
      $('#youWin').css({
        "display":"unset"
      })
    } else if (elapsedTime >= 0.36 && elapsedTime < 0.47){
      console.log('hey')
      $('#youWin_silver').css({
        "display":"unset",
        "color": "yellow"
      })
    } else if (elapsedTime >= 0.48){
      console.log('hey')
      $('#youWin_bronze').css({
        "display":"unset",
        "color": "green"
      })
    }

    $('#nextLevel').css({
      "display":"unset",
      
    })


}
$("#blob4444").css({
'opacity': '.7',
'box-shdow': '0px 0px 33px blue',
"transform":"scale(1.1)"

});

});


$("#blob5555").click(function() {
  counter4++
  console.log(counter4)
  if(counter4 === 1) {
    startTimer();

}  

else	if( counter4 === 7 ) {

    stopTimer();

    if(elapsedTime < 0.35) {
      console.log('hey')
      $('#youWin').css({
        "display":"unset"
      })
    } else if (elapsedTime >= 0.36 && elapsedTime < 0.47){
      console.log('hey')
      $('#youWin_silver').css({
        "display":"unset",
        "color": "yellow"
      })
    } else if (elapsedTime >= 0.48){
      console.log('hey')
      $('#youWin_bronze').css({
        "display":"unset",
        "color": "green"
      })
    }

    $('#nextLevel').css({
      "display":"unset",
      
    })


}
$("#blob5555").css({
'opacity': '.7',
'box-shdow': '0px 0px 33px blue',
"transform":"scale(1.1)"

});

});


$("#blob6666").click(function() {
  counter4++
  console.log(counter4)
  if(counter4 === 1) {
    startTimer();

}  

else	if( counter4 === 7 ) {

    stopTimer();

    if(elapsedTime < 0.35) {
      console.log('hey')
      $('#youWin').css({
        "display":"unset"
      })
    } else if (elapsedTime >= 0.36 && elapsedTime < 0.47){
      console.log('hey')
      $('#youWin_silver').css({
        "display":"unset",
        "color": "yellow"
      })
    } else if (elapsedTime >= 0.48){
      console.log('hey')
      $('#youWin_bronze').css({
        "display":"unset",
        "color": "green"
      })
    }

    $('#nextLevel').css({
      "display":"unset",
      
    })


}
$("#blob6666").css({
'opacity': '.7',
'box-shdow': '0px 0px 33px blue',
"transform":"scale(1.1)"

});

});


$("#blob7777").click(function() {
  counter4++
  console.log(counter4)
  if(counter4 === 1) {
    startTimer();

}  

else	if( counter4 === 7 ) {

    stopTimer();

    if(elapsedTime < 0.35) {
      console.log('hey')
      $('#youWin').css({
        "display":"unset"
      })
    } else if (elapsedTime >= 0.36 && elapsedTime < 0.47){
      console.log('hey')
      $('#youWin_silver').css({
        "display":"unset",
        "color": "yellow"
      })
    } else if (elapsedTime >= 0.48){
      console.log('hey')
      $('#youWin_bronze').css({
        "display":"unset",
        "color": "green"
      })
    }

    $('#nextLevel').css({
      "display":"unset",
      
    })


}
$("#blob7777").css({
'opacity': '.7',
'box-shdow': '0px 0px 33px blue',
"transform":"scale(1.1)"
});

});

})