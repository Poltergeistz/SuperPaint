var socket;
var colorPicker = document.getElementById("colorpicker");
var sizeLine = document.getElementById("sizeLine");

// reset
var reset = document.getElementById('reset');
// fill
var fill = document.getElementById('fill');

/*colorPicker.addEventListener("input", function () {
    var pickedColor = colorPicker.value;
    console.log(pickedColor);
}, false);*/

function setup() {
    createCanvas(800, 600);
    background(50);
    socket = io();
    socket.on('drawSend', function (data) {
        strokeWeight(data.size);
        stroke(data.cl);
        line(data.x, data.y, data.px, data.py);
    });
    socket.on('userCount', function (data) {
        var title = document.getElementById("numusers");
        title.innerHTML = "Nombre d'utilisateur: " + data;
    });
}

function mouseDragged() {
    console.log(mouseX + "," + mouseY+", selectedIndex:"+sizeLine.selectedIndex);
    
    var data = {
        x: mouseX,
        y: mouseY,
        px: pmouseX,
        py: pmouseY,
        cl: colorPicker.value,
        size: 2*Number(sizeLine.selectedIndex+1)
    }
    
    socket.emit('mouseDraw', data);
    strokeWeight(data.size);
    stroke(data.cl);
    line(data.x, data.y, data.px, data.py);

}

function draw() {

    /* var data = {
        x: mouseX,
        y: mouseY,
        px: pmouseX,
        py: pmouseY,
        cl: colorPicker.value,
        size: 2*Number(sizeLine.selectedIndex+1)
    } */

    // effacer le dessin /!\ ne pas enlever les commentaires au risque de tout casser
    // socket.on('resetbg', function(){
    //     background(50)
    // })

    // reset.addEventListener('click', function(e){
    //     socket.emit('reset', {msg:"reset"})
    // })

    // remplir le canvas avec une couleur du colorpicker
    //socket.emit('fill', data);
    //fill(data.cl)

    //fill.addEventListener('click', function(e){
    //     socket.emit('fill', {msg:"fill"})
    // })
}
