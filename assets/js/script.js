document.addEventListener('DOMContentLoaded', function() {

    const desktopLinks = document.querySelectorAll('.custom-navbar .navigation .nav-link');
    const mobileLinks = document.querySelectorAll('.bottom-navbar .navbar-nav .nav-link');
    const contents = document.querySelectorAll('.page-content, .portfolio, .contact');
    const dropdownContent = document.getElementById("dropdownContent");
    const dropdownIcon = document.getElementById("dropdownIcon");
    const ttLinks = document.querySelectorAll('a.tt');

    function showContent(index) {
        contents.forEach(content => {
            content.classList.add('d-none');
        });
        contents[index].classList.remove('d-none');
    }

    function setActiveLink(links, index) {
        links.forEach(link => {
            link.classList.remove('active');
        });
        links[index].classList.add('active');
    }

    function handleLinkClick(links) {
        return function(event) {
            event.preventDefault();
            const index = Array.from(links).indexOf(this);
            setActiveLink(links, index);
            showContent(index);
        };
    }

    desktopLinks.forEach(link => {
        link.addEventListener('click', handleLinkClick(desktopLinks));
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', handleLinkClick(mobileLinks));
    });

    function toggleDropdown() {
        dropdownContent.style.display = (window.innerWidth >= 992) ? 'block' : 'none';
    }

    dropdownIcon.addEventListener('click', function() {
        dropdownContent.style.display = (dropdownContent.style.display === 'none') ? 'block' : 'none';
    });

    function addStylesToTTLinks() {
        const screenWidth = window.innerWidth;
        const maxWidth = (screenWidth < 250 || (screenWidth < 1200 && screenWidth > 991)) ? '140px' : '';
        ttLinks.forEach(link => {
            link.classList.toggle('d-inline-block', maxWidth !== '');
            link.classList.toggle('text-truncate', maxWidth !== '');
            link.style.maxWidth = maxWidth;
        });
    }

    function updateZoom() {
        if (window.innerWidth < 250) {
            const zoom = window.innerWidth / 250;
            document.body.style.zoom = zoom;
        } else {
            document.body.style.zoom = 1;
        }
    }

    let isSmallScreen = window.innerWidth < 992;
    window.addEventListener('resize', function() {
        const currentIsSmallScreen = window.innerWidth < 992;
        if (currentIsSmallScreen !== isSmallScreen) {
            isSmallScreen = currentIsSmallScreen;
            toggleDropdown();
        }
        addStylesToTTLinks();
        updateZoom();
    });

    toggleDropdown();
    addStylesToTTLinks();
    updateZoom();
});
