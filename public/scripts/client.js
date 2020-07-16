/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


/* const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]; */

const escape = function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const createTweetElement = (tweet) => {
  const newTweet = `<article class="shared-tweet"> 
  <header class="image-container">
      <img src=${tweet.user.avatars}>
      <span id="tweeter-name">${tweet.user.handle}</span>
  </header>
  <div class="tweet">
    ${escape(tweet.content.text)}
  </div>
  <footer class="shared-tweet"> 
    <span>${tweet.created_at}</span>
    <div class="tweet-icons">
      <i class="fa fa-heart" aria-hidden="true"></i>
      <i class="fa fa-retweet" aria-hidden="true"></i>
      <i class="fa fa-flag" aria-hidden="true"></i>
    </div>
    </footer>
  </footer>
</article>`;
  return newTweet;
};


const loadTweets = () => {
  $.ajax({
    url: 'http://localhost:8080/tweets',
    method: 'GET'
  }).then((response) => {
    $('#tweet-list').empty();

    response.forEach((tweet) => {
      $('#tweet-list').prepend(createTweetElement(tweet));
    });
  });
};

// transform the name to bold when hovering
// submit the form to /tweets when someone right a tweet in the textarea
//
$(document).ready(function() {
  //when hovering, change to bold
  $('.shared-tweet').on("mouseenter", function() {
    $(this).children().children("#tweeter-name").addClass("highlight");
  });
  $('.shared-tweet').on("mouseleave", function() {
    $(this).children().children("#tweeter-name").removeClass("highlight");
  });

  //looking for a form and submit it
  $(".new-tweet form").submit(function(event) {
    event.preventDefault();

    const element = $("#tweet-error");
    // if the tweets have less than 140 char or have nothing inside, alert
    if ($('textarea[name="text"]').val().length > 140) {
      $(element).addClass('show');
      return;
    } else if ($('textarea[name="text"]').val() === "" || $('textarea[name="text"]').val() === null) {
      $(element).addClass('show');
      return;
    } else {
      $(element).removeClass('show');
    }

    $.ajax('/tweets', {
      method: 'POST',
      data: $(this).serialize()
    })
      .then(function() {
        $('textarea[name="text"]').val("");
        loadTweets();
      });
  });


  $(".btn1").click(function() {
    if ($(".tweet-container").is(":visible")) {
      $(".tweet-container").slideUp();
    } else {
      $(".tweet-container").slideDown();
    }
  });
});



