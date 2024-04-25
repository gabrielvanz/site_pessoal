
var chart_home = document.getElementById('chart_home');
var chart_about = document.getElementById('chart_about');
var chart_contacts = document.getElementById('chart_contacts');

var body_home = document.getElementById('section_home');
var body_about = document.getElementById('section_about');
var body_contact = document.getElementById('section_contact');


var chart_linkedin = document.getElementById('chart_linkedin');

var chartElements = [
    chart_home,
    chart_about,
    chart_contacts,
];

var bodyElements = [
    body_home,
    body_about,
    body_contact
]

function clearAllActiveElements() {
    chartElements.forEach(function(element) {
        element.classList.remove('active');
    });
    bodyElements.forEach(function(element) {
        element.classList.remove('visible');
    });
}

chart_home.addEventListener('click', function () {
    clearAllActiveElements();
    chart_home.classList.add('active');
    body_home.classList.add('visible');
});

chart_about.addEventListener('click', function () {
    clearAllActiveElements();
    chart_about.classList.add('active');
    body_about.classList.add('visible');
});

chart_contacts.addEventListener('click', function () {
    clearAllActiveElements();
    chart_contacts.classList.add('active');
    body_contact.classList.add('visible');
});
 
document.getElementById('open_btn').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('open-sidebar');
});