document.querySelectorAll('.copy-email').forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    var email = link.textContent.trim();
    var original = email;

    link.style.display = 'inline-block';
    link.style.width = link.offsetWidth + 'px';
    link.style.textAlign = 'center';

    navigator.clipboard.writeText(email).then(function () {
      link.textContent = 'Kopiert';
      setTimeout(function () {
        link.textContent = original;
        link.style.width = '';
      }, 1500);
    });
  });
});