$(document).ready(function(){
    function toggleDropdown() {
        if($(window).width() < 992){
            $("#dropdownContent").hide();
        } else {
            $("#dropdownContent").show();
        }
    }

    $("#dropdownIcon").click(function(){
        $("#dropdownContent").toggle();
    });

    let isSmallScreen = $(window).width() < 992;
    $(window).resize(function() {
        const currentIsSmallScreen = $(window).width() < 992;
        if (currentIsSmallScreen !== isSmallScreen) {
            isSmallScreen = currentIsSmallScreen;
            toggleDropdown();
        }
    });

    toggleDropdown();
});


function addStylesToTTLinks() {
    var ttLinks = document.querySelectorAll('a.tt');
    var screenWidth = window.innerWidth;
    if (screenWidth < 250 || screenWidth < 1200 && screenWidth > 991) {
        ttLinks.forEach(function(link) {
            link.classList.add('d-inline-block', 'text-truncate');
            link.style.maxWidth = '140px';
        });
    } else {
        ttLinks.forEach(function(link) {
            link.classList.remove('d-inline-block', 'text-truncate');
            link.style.maxWidth = '';
        });
    }
}

addStylesToTTLinks();

window.addEventListener('resize', function() {
    addStylesToTTLinks();
});