let video = document.getElementById('video');
let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

var startX, endX, startY, endY;
let mouseIsDown = 0;

let areaSquare;


let reference;
let sumTime = 0;
let on = false;


const duration = 300;
let threshhold = 10;


canvas.addEventListener("mousedown", mouseDown, false);
canvas.addEventListener("mousemove", mouseXY, false);
canvas.addEventListener("mouseup", mouseUp, false);

function interval() {
  context.drawImage(video, 0, 0, 600, 480);
  drawSquare();

  if (areaSquare) {
    scan();
  }

  window.requestAnimationFrame(interval);
}

let time;
let str = '';

function scan() {
  let area = context.getImageData(areaSquare.x, areaSquare.y, areaSquare.width, areaSquare.height).data;
  sum = area.reduce((first, second) => first + second);
  let average = sum / area.length;


  var now = new Date().getTime();
  var dt = now - (time || now);
  time = now;


  if ((average - reference) > threshhold) {
    // ON
    if (!on) {

      console.log('on', sumTime);
      sumTime = 0;
    } else {
      sumTime += dt;
    }

    on = true;
  } else {
    // OFF
    if (on) {
      //
      //console.log('off', sumTime);
      if (sumTime > duration) {
        str += '-';
        console.log('-');
      } else {
        str += '.';
        console.log('.');
      }

      sumTime = 0;
    } else {

      if (sumTime > duration) {
        str += ' ';
        console.log(str);
      }

      sumTime += dt;
    }
    on = false;
  }
}


navigator.mediaDevices.getUserMedia({video: true, audio: false})
  .then(function(mediaStream) {
    video.src = window.URL.createObjectURL(mediaStream);
    video.play();
    window.requestAnimationFrame(interval);

  })
  .catch(function(error) {

  });


function mouseUp(eve) {
  if (mouseIsDown !== 0) {
    mouseIsDown = 0;
    var pos = getMousePos(canvas, eve);
    endX = pos.x;
    endY = pos.y;
  }

  areaSquare = {
    x: startX,
    y: startY,
    width: Math.abs(startX - pos.x),
    height: Math.abs(startY - pos.y)
  };

  calibrate();
}

function calibrate() {
  let area = context.getImageData(areaSquare.x, areaSquare.y, areaSquare.width, areaSquare.height).data;
  reference = area.reduce((first, second) => first + second) / area.length;
}


function mouseDown(eve) {
  mouseIsDown = 1;
  var pos = getMousePos(canvas, eve);
  startX = endX = pos.x;
  startY = endY = pos.y;
}

function mouseXY(eve) {

  if (mouseIsDown !== 0) {
    var pos = getMousePos(canvas, eve);
    endX = pos.x;
    endY = pos.y;

    drawSquare();
  }
}

function drawSquare() {
  // creating a square
  var w = endX - startX;
  var h = endY - startY;
  var offsetX = (w < 0) ? w : 0;
  var offsetY = (h < 0) ? h : 0;
  var width = Math.abs(w);
  var height = Math.abs(h);

  context.beginPath();
  context.rect(startX + offsetX, startY + offsetY, width, height);
  context.lineWidth = 4;
  context.strokeStyle = 'red';
  context.stroke();
}

function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}