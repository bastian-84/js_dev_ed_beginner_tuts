console.log("Test");
//console.log(this);

var apples = function(){
    console.log('apple');
}
// Aufruf-Möglichkeiten
//apples();
//window.apples();    // Muss nicht angegeben werden. Wird automatisch erkannt. 
this.apples();      // Selbe wie mit window, this bezieht sich automatisch auf window
