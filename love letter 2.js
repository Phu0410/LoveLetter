$(document).ready(function () {
  var envelope = $("#envelope");
  var letter = envelope.find(".letter");
  var btn_open = $("#open");
  var btn_reset = $("#reset");
  var letterCenterTimer;

  envelope.click(function () {
    open();
  });
  letter.click(function (event) {
    event.stopPropagation();
  });
  btn_open.click(function () {
    open();
  });
  btn_reset.click(function () {
    close();
  });

  function open() {
    clearTimeout(letterCenterTimer);
    letter.removeClass("letter-centered");
    envelope.addClass("open").removeClass("close");
    letterCenterTimer = setTimeout(function () {
      letter.addClass("letter-centered");
      $("body").addClass("letter-open");
    }, 5000);
  }
  function close() {
    clearTimeout(letterCenterTimer);
    letter.removeClass("letter-centered");
    envelope.addClass("close").removeClass("open");
    $("body").removeClass("letter-open");
  }
});
