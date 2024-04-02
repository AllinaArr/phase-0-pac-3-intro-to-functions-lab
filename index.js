function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(name) {
  console.log(name.toUpperCase());
}

function logWhisper(name) {
  console.log(name.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
  if (string.toLowerCase() === string) {
    return "I can't hear you!";
  } else if (string.toUpperCase() === string) {
    return "YES INDEED!";
  } else {
    return "I would love to!";
  }
}
