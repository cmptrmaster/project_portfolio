// site_listeners.js
//
// this file is designed to produce and react to the listeners on the web site.

let eventTarget = document.getElementById('project-description');
eventTarget.addEventListener('mouseover', function () {
    document.getElementById('description').style.display = 'block';
});
eventTarget.addEventListener('mouseleave', function () {
    document.getElementById('description').style.display = 'none';
});
