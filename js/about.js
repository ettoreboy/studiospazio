function dialogBox(e, id) {
    var msg = $("#" + id).html();
    vex.dialog.alert({
      unsafeMessage: msg,
      showCloseButton: true,
      buttons: []
    })
  }

  $(document).ready(function () {
    $('.info-box').niceScroll({
      cursorcolor: "rgba(177, 177, 177, 0.74)",
      cursorborder: "white",
      touchbehavior: true
    });
  });