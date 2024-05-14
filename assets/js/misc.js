function videoPlayerInit() {
  var player = videojs("my-video");
  player.responsive(true);
  var player2 = videojs("golddisc");
  player2.responsive(true);
}

// bootleg slideshow init

function bootlegCoverArt() {
  var AA = document.getElementById("bootlegcoverart");
  AA.style.display = "flex";
  var AA1 = document.getElementById("div-1");
  AA1.style.display = "block";
  var AA2 = document.getElementById("div-2");
  AA2.style.display = "none";
  var AA3 = document.getElementById("div-3");
  AA3.style.display = "none";
  var AA3 = document.getElementById("div-4");
  AA3.style.display = "none";
}

function bootlegCoverArtClose() {
  var AB = document.getElementById("bootlegcoverart");
  AB.style.display = "none";
}

// yes, i asked for this in stack overflow. source: https://stackoverflow.com/questions/78321655/javascript-runs-last-function-on-script-when-key-pressed-question-regarding-usi/78322225#78322225

// "arrow keys" and stuff for bootleg gallery
// tell your application what position youre at and how many positions are possible
var slider_position = 1; // position vector
var number_of_slides = 3; // number of slides

document.addEventListener("keydown", function (e) {
  // only act if left or right arrow keys are used
  if (e.keyCode == 39 || e.keyCode == 37) {
    // if 39, add 1, else subtract 1
    slider_position += e.keyCode == 39 ? 1 : -1;

    if (slider_position < 1) {
      // if slider position is less than 1, go to last slide
      slider_position = number_of_slides;
    } else if (slider_position > number_of_slides) {
      // if slider position is more than the number of slides, go to 1
      slider_position = 1;
    }

    // create an array from a list of your slider elements
    // then, forEach slider as "x", hide it
    Array.from(document.getElementsByClassName("slider_pane")).forEach((x) => {
      x.style.display = "none";
    });

    // then display the slider at the current slider position
    document.getElementById("div-" + slider_position).style.display = "block";
  }
});

function previous() {
  var keyboardEvent = document.createEvent("KeyboardEvent");
  var initMethod =
    typeof keyboardEvent.initKeyboardEvent !== "undefined"
      ? "initKeyboardEvent"
      : "initKeyEvent";

  keyboardEvent[initMethod](
    "keypress", // event type: keydown, keyup, keypress
    true, // bubbles
    true, // cancelable
    window, // view: should be window
    false, // ctrlKey
    false, // altKey
    false, // shiftKey
    false, // metaKey
    37, // keyCode: unsigned long - the virtual key code, else 0
    0 // charCode: unsigned long - the Unicode character associated with the depressed key, else 0
  );
  document.dispatchEvent(keyboardEvent);
}

function next() {
  var keyboardEvent = document.createEvent("KeyboardEvent");
  var initMethod =
    typeof keyboardEvent.initKeyboardEvent !== "undefined"
      ? "initKeyboardEvent"
      : "initKeyEvent";

  keyboardEvent[initMethod](
    "keypress", // event type: keydown, keyup, keypress
    true, // bubbles
    true, // cancelable
    window, // view: should be window
    false, // ctrlKey
    false, // altKey
    false, // shiftKey
    false, // metaKey
    39, // keyCode: unsigned long - the virtual key code, else 0
    0 // charCode: unsigned long - the Unicode character associated with the depressed key, else 0
  );
  document.dispatchEvent(keyboardEvent);
}
