$(document).ready(function () {
    // Sidebar toggle
    $(".btn-sidebar-toggle").click(function () {
        $("#sidebar").toggleClass("collapsed");
        $("#content").toggleClass("expanded");
    });
});
