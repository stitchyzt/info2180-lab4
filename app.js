$( document ).ready(function() {



    $("#srchbutton").click(function(event) {

        event.preventDefault();
        console.log("You clicked a link!");
        var xmhl = new XMLHttpRequest();
        var a =  document.getElementById("alias");
        var n = document.getElementById("name");
        var b = document.getElementById("biography");
        var result = document.getElementById("result");
        result.innerHTML = "";
        a.innerHTML="";
        n.innerHTML="";
        b.innerHTML="";
        xmhl.onreadystatechange = function (){
          
          if (xmhl.readyState == 4 && xmhl.status == 200){

            if (txt.length != 0 ){

            
              var results = JSON.parse(xmhl.responseText);

            
              if (results == "Superhero Not Found"){
               
                result.innerHTML = "Superhero Not Found";

              }else{
                    
                      var alias = results.alias;
                      var name = results.name; 
                      var biography = results.biography;

                      console.log(this.responseText);
                      a.innerHTML= alias;
                      n.innerHTML="A.K.A " + name;
                      b.innerHTML=biography;
                  }
      
            }else{

              result.innerHTML = this.responseText;

            }
              
          }
        }

        var txt = document.getElementById("text_field").value;
        

        var url = "http://localhost:8080/superheroes.php?q="+txt;
        xmhl.open("GET",url,true);
        xmhl.send();
    
      });
});