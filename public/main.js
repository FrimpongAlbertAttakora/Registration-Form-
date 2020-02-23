// For Student list
var trial = document.getElementById('try');

var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'http://localhost:2100/api/students');
ourRequest.onload = function(){
    var ourData = JSON.parse(ourRequest.responseText);
    console.log(ourData);
    renderHTML(ourData);
    ourData.forEach(student => console.log(student.name));
};
ourRequest.send();

function renderHTML(data){
    var names = ""; 
    data.forEach(student => {
        names += 
            '<p>' + student.name + '</p>'
          +  '<p>' + student.email + '</p>' 
           + '<p>' + student.program + '</p>'
        ;
    });
    trial.innerHTML = names;
}





