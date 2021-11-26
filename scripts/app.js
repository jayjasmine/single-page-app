function showPage(pageId) {
    //hide all pages
    let pages = document.getElementsByClassName("pages")
    for (let page of pages) {
        page.style.display = "none"
    }

    //show only page with pageId
    let pageToShow = document.getElementById(pageId)
    pageToShow.style.display = "block"

    $('a').click(function () {
        $('a').css("text-decoration", "none")
        $(this).css("text-decoration", "underline")
    })

}
showPage('page1');
$('a').first().css("text-decoration", "underline");

// function activeMenu