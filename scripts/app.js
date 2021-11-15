function showPage(pageId) {
    //hide all pages
    let pages = document.getElementsByClassName("pages")
    for (let page of pages) {
        page.style.display = "none"
    }

    //show only page with pageId
    let pageToShow = document.getElementById(pageId)
    pageToShow.style.display = "block"

}
showPage('page1');
console.log("working2")