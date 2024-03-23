var projects = [
    { title: "Project #1", description: "", image: "assets/img/path.png" },
    { title: "Project #2", description: "", image: "assets/img/path.png" },
    { title: "Project #3", description: "", image: "assets/img/path.png" },
    { title: "Project #4", description: "", image: "assets/img/path.png" },
    { title: "Project #5", description: "", image: "assets/img/path.png" },
    { title: "Project #6", description: "", image: "assets/img/path.png" },
    { title: "Project #7", description: "", image: "assets/img/path.png" },
    { title: "Project #8", description: "", image: "assets/img/path.png" },
    { title: "Project #9", description: "", image: "assets/img/path.png" }
];

// Function to generate HTML for project card
function generateProjectCard(project) {
    return `
    <div class="col-md-4 mb-4">
        <div class="card project">
            <div class="hover-effect">
                <img src="${project.image}" class="card-img-top">
                <i class="fas fa-eye"></i>
            </div>
            <div class="card-body">
                <h5 class="card-title text-white">${project.title}</h5>
                <p class="card-text mt-1">${project.description}</p>
                <a href="#" class="btn btn-warning">Watch</a>
            </div>
        </div>
    </div>
    `;
}

// Function to display projects based on current page
function displayProjects(pageNumber, pageSize) {
    var startIndex = (pageNumber - 1) * pageSize;
    var endIndex = startIndex + pageSize;
    var projectsToShow = projects.slice(startIndex, endIndex);

    $('#projectContainer').empty();

    var windowWidth = $(window).width();

    if (windowWidth <= 768 && $('a.nav-link[href="#pf"]').hasClass('active')) {
        var targetOffset = ($(window).width() <= 768) ? 315 : 0;
        if (targetOffset !== undefined) {
            $(window).scrollTop(targetOffset);
        }
        setTimeout(function() {
            projectsToShow.forEach(function(project, index) {
                var $projectCard = $(generateProjectCard(project));
                $('#projectContainer').append($projectCard);
                $projectCard.hide().delay(index * 200).fadeIn(500);
            });
        },500);
    } else {
        projectsToShow.forEach(function(project, index) {
            var $projectCard = $(generateProjectCard(project));
            $('#projectContainer').append($projectCard);
            $projectCard.hide().delay(index * 200).fadeIn(500);
        });
    }
}

// Function to generate pagination buttons
function generatePaginationButtons(totalPages) {
    $('#paginationList').empty();
    for (var i = 1; i <= totalPages; i++) {
        var activeClass = (i === 1) ? 'active' : '';
        $('#paginationList').append(`<li class="page-item ${activeClass}"><a class="page-link" href="#">${i}</a></li>`);
    }
}

// Initial display
var pageSize = 6;
var totalPages = Math.ceil(projects.length / pageSize);
displayProjects(1, pageSize);
generatePaginationButtons(totalPages);

// Event handler for pagination buttons
$('#paginationList').on('click', '.page-link', function(event) {
    event.preventDefault();
    var pageNumber = parseInt($(this).text());
    displayProjects(pageNumber, pageSize);
    
    $('#paginationList .page-item').removeClass('active');
    $(this).parent().addClass('active');
});