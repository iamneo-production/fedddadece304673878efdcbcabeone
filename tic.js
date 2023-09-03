function myfunc(){
    var b1 , b2 , b3 , b4 , b5 , b6 , b7 , b8 , b9 ;
    b1= document.getElementById("b1").Value;
    b2= document.getElementById("b2").Value;
    b3= document.getElementById("b3").Value;
    b4= document.getElementById("b4").Value;
    b5= document.getElementById("b5").Value;
    b6= document.getElementById("b6").Value;
    b7= document.getElementById("b7").Value;
    b8= document.getElementById("b8").Value;
    b9= document.getElementById("b9").Value;

    var b1btn,b2btn,b3btn,b4btn,b5btn,b6btn,b7btn,b8btn,b9btn;

    b1btn = document.getElementById("b1");
    b2btn = document.getElementById("b2");
    b3btn = document.getElementById("b3");
    b4btn = document.getElementById("b4");
    b5btn = document.getElementById("b5");
    b6btn = document.getElementById("b6");
    b7btn = document.getElementById("b7");
    b8btn = document.getElementById("b8");
    b9btn = document.getElementById("b9");


    if((b1 == 'x' ||b1 == "X")&&(b2 == 'x'||b2 =='X')&&(b3 == 'x'||b3 =='X')){
        document.getElementById('print').innerHTML = "Player X won";
    }