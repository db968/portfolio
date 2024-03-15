$(document).ready(function() {
    
    const $desktopLinks = $('.custom-navbar .navigation .nav-link');
    const $mobileLinks = $('.bottom-navbar .navbar-nav .nav-link');
    const $contents = $('.page-content, .portfolio, .contact');
    const $dropdownContent = $("#dropdownContent");
    const $dropdownIcon = $("#dropdownIcon");
    const $ttLinks = $('a.tt');

    function showContent(index) { $contents.addClass('d-none').eq(index).removeClass('d-none'); }

    function setActiveLink($links, index) { $links.removeClass('active').eq(index).addClass('active'); }

    function handleLinkClick($links) {
        return function(event) {
            event.preventDefault();
            const index = $links.index(this);
            setActiveLink($links, index);
            showContent(index);
        };
    }

    $desktopLinks.on('click', handleLinkClick($desktopLinks));

    $mobileLinks.on('click', handleLinkClick($mobileLinks));

    function toggleDropdown() { $dropdownContent.toggle($(window).width() >= 992); }

    $dropdownIcon.click(function() { $dropdownContent.toggle(); });

    function addStylesToTTLinks() {
        const screenWidth = $(window).width();
        const maxWidth = screenWidth < 250 || (screenWidth < 1200 && screenWidth > 991) ? '140px' : '';
        $ttLinks.toggleClass('d-inline-block text-truncate', maxWidth !== '').css('max-width', maxWidth);
    }

    function updateZoom() {
        if ($(window).width() < 250) {
            const zoom = $(window).width() / 250;
            $('body').css('zoom', zoom);
        } else {
            $('body').css('zoom', 1);
        }
    }

    let isSmallScreen = $(window).width() < 992;
    $(window).on('resize', function() {
        const currentIsSmallScreen = $(window).width() < 992;
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