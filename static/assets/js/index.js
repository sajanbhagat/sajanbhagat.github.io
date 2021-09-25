/*
    Avatar images change code base
*/
location.href = location.href;

const cats = [
    'static/assets/images/profile/Avatar1.jpg',
    'static/assets/images/profile/Avatar2.jpg'
]

const node = document.getElementById("avatar-image");

const cycleImages = (images, container, step) => {
    images.forEach((image, index) => (
    setTimeout(() => {
        container.src = image 
    }, step * (index + 1))
))
setTimeout(() => cycleImages(images, container, step), step * images.length)
}

cycleImages(cats, node, 5000)

/*
    Toggle Dynamic section behaviour
*/
const dynamicSections = ['about_me','contact','experience','projects','skills','blogs']
var current_section = 'about_me'
var previous_section = 'about_me'

window.addEventListener('popstate', function (event) {
	// The URL changed...
    previous_section = current_section.replace('#','');
    document.getElementById(previous_section).classList.remove('active');
    document.getElementById(previous_section).classList.add('hidden');

    current_section = event.target.location.hash.replace('#','');

    document.getElementById(current_section).classList.remove('hidden');
    document.getElementById(current_section).classList.add('active');
});

