
		/*
      Assignment Holder - Assignment 7 - JavaScript Lab
      Part - 1 - JS
      Author:Abul Kalam Azad
      Student ID:300351811
              */
function changeColor_red(){
document.getElementById("text").style.color = "red";

}


function changeColor_blue(){
  document.getElementById("text").style.color = "blue";
  
  }

  function changeColor_green(){
    document.getElementById("text").style.color = "green";
    
    }

    function changeBg(){
     let a =  document.getElementById("colorsel").value;

  
     //let a =  document.getElementById("colorsel").value;
    if ( a =="red") {

     document.getElementById("td_text").style.backgroundColor = "red";
    }
    if ( a == "green") {
  
        document.getElementById("td_text").style.backgroundColor = "green";
       }

       if ( a == "blue") {
  
        document.getElementById("td_text").style.backgroundColor = "blue";
       }

       if ( a =="nothing") {
  
        document.getElementById("td_text").style.backgroundColor = "white";
       }
  }