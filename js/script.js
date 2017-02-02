$(document).ready(() => {
    $(() => {
        $('[data-toggle="tooltip"]').tooltip();
    });

    $("#submit-search").on("click", () => {
        let searchTerm = $("#search-term").val();
        console.log(searchTerm);
    });
    $.ajax({
        url: "//en.wikipedia.org/w/api.php",
        data: {
            action: "query",
            list: "search",
            srsearch: "Hello",
            format: "json"
        },
        dataType: "jsonp",
        success: x => {
            console.log("title", x.query.search[0].title);
        }
    });
});