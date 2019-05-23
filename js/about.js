
function dialogBox(e, id) {
    const msg = $("#" + id).html();
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

    //Register dialog boxes for names
    const dialogs = document.querySelectorAll('a.dialog-box');

    dialogs.forEach(element => {
      
      element.addEventListener('click', event => {
        const name = element.dataset.person;
        dialogBox(event, name);
      });
    });
  });