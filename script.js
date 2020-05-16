const element = $('#floating-mountain');

//Triggers Float animation after zoom in of mountains
element.on('animationend', () => {
    

    element.css({
        animation: "floating 4s linear infinite"
      }); 
      
});
