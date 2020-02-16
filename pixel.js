
var formColor = document.querySelector('.form-color')
var input = document.querySelector('input')
var button = document.querySelector('button')
var brushBox = document.querySelector('.brush-box')
var canvas = document.querySelector('.canvas')
var input = document.querySelector('input')

var handleClick = e => {
  e.preventDefault()
  brushBox.style.backgroundColor = input.value  
  canvas.addEventListener('mouseover', handlePaint)

}

function handlePaint(e){
    
    if (e.target.classList.contains('pixel') && e.target.dataset.colorFilled2 !== "green" && e.target.dataset.eventAction !== "mouseover"){
          e.target.style.backgroundColor = input.value
          e.target.dataset.colorFilled1 = input.value
          e.target.dataset.eventAction = "mouseover"
          e.target.addEventListener('click', handleGreenPaint)
    }
  
}

var handleGreenPaint = (e) => {
  
  if(e.target.dataset.colorFilled1 === input.value){
    e.target.style.backgroundColor = "green"
    e.target.dataset.colorFilled1 = "green"
  }else{
    e.target.style.backgroundColor = input.value
    e.target.dataset.colorFilled1 = input.value
    e.target.dataset.eventAction = ""
  }
    // e.target.dataset.colorFilledw = input.value
  
}


formColor.addEventListener('submit', handleClick)


// contains 
// e.target.style.backgorundColor = 'green'

// 2. ========================



//=============================

// if(e.target.classList.contains('.pixel')){
  // }
  
  var makeRows = (rows, cols) => {
    canvas.style.setProperty('--grid-rows', rows)
    canvas.style.setProperty('--grid-cols', cols)
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div")
      canvas.appendChild(cell).classList.add("pixel")
      
    }
  }
  makeRows(50, 40);
  


  var formMovie = document.forms.formMovie
  
  
  


var handleMovieClick = function (e) {
          e.preventDefault() // you will forget this
          
          
          // make an ajax request using the input value as part of the url
          
          var movieName = formMovie.querySelector('input[name="movieName"]') 
          // var movieName = 'bb.jpeg'

          //Obj
          var options = {
                       
        
          url: `http://omdbapi.com/?t=${movieName.value}&apikey=2f6435d9`,
          method: 'get' // default 
          }
          
          var handleResponse = function (res) {

            
              canvas.style.background = 'url(' + res.Poster + ')'
              canvas.style.backgroundRepeat = "no-repeat";
              canvas.style.backgroundSize = "contain";
          
              
          }
            
          $.ajax(options).done(handleResponse)

}

formMovie.addEventListener('submit', handleMovieClick)



