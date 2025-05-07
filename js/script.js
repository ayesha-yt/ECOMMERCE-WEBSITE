/////// Enable tooltip of Bootstrap5
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

/////// Prevent closing from click inside dropdown
document.querySelectorAll('.dropdown-menu').forEach(function(element) {
    element.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});
// end querySelectorAll


// prevent empty links with # from scrolling top
var links = document.links;
var linksCount = links.length;
for (var i = 0; i < linksCount; i++) {
    var link = links[i].attributes.href.value; // prodam garage
    if (link == "" || link == "#") {
        links[i].setAttribute("onclick", "return false;");
    }
}



function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}
