
//countdown of the tweet char and add a red text if the countdown exceed the 140 char limit
$(document).ready(function() {
  console.log('IM READY');

  console.log($('textarea[name="text"]'));

  $('textarea[name="text"]').on("input", function() {
    let text = $('textarea[name="text"]').val();
    let countdown = 140;
    const element = $("#char-limit");
    if (countdown - text.length >= 0) {
      element.val(countdown - text.length);
      $(element).removeClass('red-text');
    } else {
      element.val(countdown - text.length);
      $(element).addClass('red-text');
    }
  });
});


