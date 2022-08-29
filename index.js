const drum = Array.from(document.querySelectorAll(".drum"));

drum.map((el) => {
  el.addEventListener("click", (e) => {
    findDrum(e, "click");
  });
});

document.addEventListener("keypress", (e) => {
  findDrum(e, "key");
});

const findDrum = (e, type) => {
  let eventType;
  let drum;
  if (type === "click") {
    eventType = e.target.innerText;
  } else if (type === "key") {
    eventType = e.key;
  }
  if (eventType === "w") {
    drum = `sounds/tom-1.mp3`;
  } else if (eventType === "a") {
    drum = `sounds/tom-2.mp3`;
  } else if (eventType === "s") {
    drum = `sounds/tom-3.mp3`;
  } else if (eventType === "d") {
    drum = `sounds/tom-4.mp3`;
  } else if (eventType === "j") {
    drum = `sounds/crash.mp3`;
  } else if (eventType === "k") {
    drum = `sounds/kick-bass.mp3`;
  } else if (eventType === "l") {
    drum = `sounds/snare.mp3`;
  }
  var audio = new Audio(drum);
  audio.play();
};
