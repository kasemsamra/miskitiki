$(document).ready(function() {
  $("#aboutUsButton").click(function() {
    togglePopup("aboutUsPopup");
    toggleScrollLock();
  });

  $("#socialMediaButton").click(function() {
    togglePopup("socialMediaPopup");
    toggleScrollLock();
  });

  $("#privacyPolicyButton").click(function() {
    togglePopup("privacyPolicyPopup");
    toggleScrollLock();
  });

  $(".closeButton").click(function() {
    var popupMenu = $(this).parent();
    popupMenu.css("display", "none");
    toggleScrollLock();
  });
});

function togglePopup(popupId) {
  var popupMenu = $("#" + popupId);
  $(".popupMenu").css("display", "none");
  popupMenu.css("display", "block");
}

function toggleScrollLock() {
  $("body").toggleClass("scroll-lock");
}
