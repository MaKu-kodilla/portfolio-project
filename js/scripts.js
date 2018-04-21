
(function (callback) {
  if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
    callback();
  } else {
    document.addEventListener('DOMContentLoaded', callback);
  }
})(function () {
    var toggleNav = document.querySelector('.toggle-nav');
    var navigation = document.querySelector('.navbar-nav');

    toggleNav.addEventListener('click', function() {
        navigation.classList.toggle('active');
    });
});




