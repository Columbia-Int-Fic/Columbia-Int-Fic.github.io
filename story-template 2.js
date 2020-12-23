// Show "Are you sure" pop-up when user tries to go to home page from story.
var back = document.getElementsByClassName('story-pg-whatif');

var warning = function (e) {
    if (!confirm("Your game won't be saved. Are you sure?")) e.preventDefault();
};

back[0].addEventListener('click', warning, false);
