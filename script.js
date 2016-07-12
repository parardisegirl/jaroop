function addTerm(){
    
    var addTermError = "";
    var addTermError2 = "";
    
    if(!document.getElementById("inputText").value){
         addTermError += "This field is required.";
    }
    
    if(!document.getElementById("posneg").value){
        addTermError2 += "This field is required.";
    }
    
    if(addTermError){
        document.getElementById("errorMessage").innerHTML = addTermError;
        
    }

    if(addTermError2){
        document.getElementById("errorMessage2").innerHTML = addTermError2;
    }
    
    
    //var posneg = document.getElementById("posneg").selectedIndex;
    
   if(document.getElementById("posneg").value == "Positive" && document.getElementById("inputText")){
            var text = document.getElementById("inputText").value;
            document.getElementById("textarea1").innerHTML = text;
        
   }

    else if(document.getElementsByTagName("option").value  == "Negative" && document.getElementById("inputText")){
            var text2 = document.getElementById("inputText").value;
            document.getElementById("textarea2").innerHTML = text2;
         
    }
    
    
    //alert(document.getElementsByTagName("option")[posneg].value);
    
    
    var text = document.getElementById("inputText").value;
    document.getElementById("textarea1").innerHTML = text;
}   
