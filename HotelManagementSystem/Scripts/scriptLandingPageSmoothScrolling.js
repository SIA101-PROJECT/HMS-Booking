// smooth scrolling for header navigation links
document.querySelectorAll('header .nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // remove active class from all
        document.querySelectorAll('header .nav a').forEach(link =>
            link.classList.remove('active')
        );

        // add active to clicked link
        this.classList.add('active');

        // scroll to target section
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
