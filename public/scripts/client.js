/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
  $('.shared-tweet').on("mouseenter", function() {
    console.log('entered')
    // if ($("#tweeter-name").hasClass("tweeter-name")) {
      $(this).children().children("#tweeter-name").removeClass("tweeter-name");
    // }
  });
  $('.shared-tweet').on("mouseleave", function() {
    console.log('left')
    // if (!$("#tweeter-name").hasClass("tweeter-name")) {
      $(this).children().children("#tweeter-name").addClass("tweeter-name");
    // }
  });
});

