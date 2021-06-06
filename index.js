var colors=generateRandomColor(6);
var squares=document.getElementsByClassName("squares");
var pickColor=colors[randomColor()];
var pickedColor=document.getElementById("selected-color");
var messageDisplay=document.getElementById("message");
var header=document.getElementById("header-section");
var new_colors=document.getElementById("new-colors");
var selected=document.getElementsByClassName("selected");
var modeButton=document.querySelectorAll(".mode");
var numOfSquares=6;


//show picked color in the header section
pickedColor.textContent=pickColor;
//assign colors to squares
for(var i=0; i<squares.length;i++)
{
    squares[i].style.background=colors[i];
    squares[i].addEventListener("click",function()
    {
        var clickedColor=this.style.background;
        if (clickedColor==pickColor)
    {
        
        messageDisplay.textContent="Correct!";
        changeColor(clickedColor);
        header.style.background=clickedColor;
        new_colors.textContent="Play Again?";

        
    }
    else
    {
        this.style.background="black";
        messageDisplay.textContent="Try Again!";
    }
    })
    
}
// change color of all squares to picked color
function changeColor(color)
{
    for(var i=0; i<colors.length;i++)
    {
       squares[i].style.background=color;
       
    }
}

// onclick event to add new colors and replace the previous ones.
new_colors.addEventListener("click", function()
{
    reset();
   
})
//function to pick random set of colors based on the mode of buttons
function reset()
{
    colors=generateRandomColor(numOfSquares);
    pickColor=colors[randomColor()];
    pickedColor.textContent=pickColor;
    header.style.background="steelblue";
    messageDisplay.textContent="";
    new_colors.textContent="New Colors";
    for(var i=0; i<squares.length;i++)
    {
        if(colors[i])
        {
            squares[i].style.background=colors[i];
            squares[i].style.display="block";
        }
        else
        {
            squares[i].style.display="none";
        }
    
    }
}
// Change mode of game based on the buttons
for(var i=0; i<modeButton.length;i++)
{
    modeButton[i].addEventListener("click", function()
    {
    modeButton[0].classList.remove("selected");
    modeButton[1].classList.remove("selected");
    this.classList.add("selected");
    if(this.textContent==="Easy")
    {
        numOfSquares=3;
    }
    else
    {
        numOfSquares=6;
    }
   
    reset();
})
    
}

//pick random color from the array
function randomColor()
{
    var random=(Math.floor(Math.random() * colors.length));
    return random;
}

//generate random set of colors
function generateRandomColor(num)
{   var arr=[]
    for(var i=0;i<num;i++)
    {
        arr.push(generateRGB());
    }
    return arr;
}

//generate rgb set of colors
function generateRGB()
{
    var r=Math.floor(Math.random() * 256);
    var g=Math.floor(Math.random() * 256);
    var b=Math.floor(Math.random() * 256);
    return "rgb("+ r + ", " + g + ", " + b + ")";
}
