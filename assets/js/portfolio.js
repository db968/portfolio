$(document).ready(function() {
    var projects = [
        "path.png", "path.png", "path.png",
        "path.png", "path.png", "path.png",
        "path.png", "path.png", "path.png"
    ];

    var projectsPerPage = 9;
    var container = $("#projects-container");
    var pagination = $("#pagination");
    var currentPage = 1;

    function showProjects(page) {
        container.html("");
    
        var startIndex = (page - 1) * projectsPerPage;
        var endIndex = Math.min(startIndex + projectsPerPage, projects.length);
    
        var row = $("<div>").addClass("row");
        container.append(row);
    
        for (var i = startIndex; i < endIndex; i++) {
            var col = $("<div>").addClass("col");
            var figure = $("<figure>").addClass("figure");
            var img = $("<img>").addClass("figure-img img-fluid rounded").attr("src", "assets/img/" + projects[i]);
            var figcaption = $("<figcaption>").addClass("figure-caption").text("Project " + (i + 1));
    
            figure.append(img).append(figcaption);
            col.append(figure);
            row.append(col);
        }
    }
    

    function createPagination() {
        pagination.html("");

        var totalPages = Math.ceil(projects.length / projectsPerPage);

        for (var i = 1; i <= totalPages; i++) {
            var li = $("<li>").addClass("page-item");
            var a = $("<a>").addClass("page-link").attr("href", "#").text(i);
            a.click(function() {
                currentPage = parseInt($(this).text());
                showProjects(currentPage);
                updatePagination();
            });

            li.append(a);
            pagination.append(li);
        }

        pagination.children().eq(currentPage - 1).addClass("active");
    }

    function updatePagination() {
        pagination.children().removeClass("active");
        pagination.children().eq(currentPage - 1).addClass("active");
    }

    showProjects(currentPage);
    createPagination();
});