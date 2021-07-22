const listItems = document.querySelectorAll('.menu-list-item');
const sections = document.querySelectorAll('section:not(#menu)');

for (let index = 0; index < sections.length; index++) {
    const section = sections[index];
    const listItem = listItems[index];
    console.log(index + '. top' + section.offsetTop);
    console.log(index + '. height' + section.clientHeight);
}


window.addEventListener('scroll', function(params) {
    console.log(window.scrollY);

    listItems.forEach(listItem => {
        listItem.classList.remove('active');
    });

    for (let index = 0; index < sections.length; index++) {
        const section = sections[index];
        const listItem = listItems[index];

        if (window.scrollY >= section.offsetTop && window.scrollY < section.offsetTop + section.clientHeight) {
            listItem.classList.add('active');
        }
    }
});