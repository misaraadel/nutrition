$(document).ready(function () {
    //start active navbar
    $('.vertical-menu-btn').click(function(){
        $('#sidebar-menu').toggleClass('removeOverflow');
    });
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });
});
function activeFilter(){
    var filterContent = document.getElementById("filterContent");
    filterContent.classList.toggle("active-filter");
}
function searchFilter(){
    var searchFilter = document.getElementById("searchFilter");
    searchFilter.classList.toggle("active-search-filter");
}