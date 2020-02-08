// var declaration
var formColor = document.querySelector('.form-color')
var input = document.querySelector('input')
var button = document.querySelector('button')
var brushBox = document.querySelector('.brush-box')
var canvas = document.querySelector('.canvas')
var input = document.querySelector('input')

var handleClick = e => {
  e.preventDefault()
  brushBox.style.backgroundColor = input.value  
  
  // 2. =============================
  let pixels = document.querySelectorAll('.pixel')
  
  for(pixel of pixels){
    pixel.addEventListener('mouseover', handlePaint)
    pixel.addEventListener('click', handleGreenPaint)
    
    // pixel.addEventListener('click', handleGreenPaint)
  }
  // ==================================
}


formColor.addEventListener('submit', handleClick)


// contains 
// e.target.style.backgorundColor = 'green'

// 2. ========================



//=============================

// if(e.target.classList.contains('.pixel')){
  // }
  
  var handleGreenPaint = (e) => {
    
    e.target.style.backgroundColor = "green"
    e.target.removeEventListener('mouseover', handlePaint)
    e.target.addEventListener('click', handleSwitchToMouseOverOrignalColor)
  }
  
  function handlePaint(e){
    
    e.target.style.backgroundColor = input.value
    e.target.addEventListener('click', handleGreenPaint)
  }
  

  function handleSwitchToMouseOverOrignalColor(e){
    
    e.target.style.backgroundColor = input.value
    e.target.removeEventListener('click', handleGreenPaint)
    e.target.addEventListener('mouseover', handlePaint)
    
  }
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



