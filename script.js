function changeSection(e, link) {
  $('.selected').removeClass('selected');
  e.toElement.classList.add('selected');
  var sections = $('.content');
  for (var i = 0; i < sections.length; i++) {

    if (sections[i].classList.contains(link.toLowerCase())) {

      sections[i].classList.remove('hidden');
    } else {
      sections[i].classList.add('hidden');
    }
  }
};

function navigate (e) {
  var link = e.currentTarget.innerText;
  if (link === 'Resume') {
    window.open('chris_delauder_resume_2017.pdf');
  } else if (link === ' Github') {
    window.open('https://github.com/cdelauder');
  } else if (link === ' Linkedin') {
    window.open('https://linkedin.com/in/chrisdelauder/');
  } else {
    changeSection(e, link);
  }
};

function bindListeners () {
  $('.nav-item').on('click', navigate);
};

$(document).ready(bindListeners);