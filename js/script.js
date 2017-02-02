function getSearchResults() {
    let searchTerm = $("#search-term").val();
    let API = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${searchTerm}`;

    $.ajax({
        url: API,
        dataType: 'jsonp',
        success: function (searchResults) {
            $("#search-results").html("");

            for (let i = searchResults[1].length - 1; i >= 0; i--) {
                $("#search-results").prepend(
                    `<div class="result card col-lg-4 col-md-6 col-sm-12 col-xs-12">
                        <span id="result-number">${i + 1}</span> 
                        <div class="card-block">
                            <a class="card-link" href=${searchResults[3][i]} target="_blank">
                            <h2 class="card-title card-header">${searchResults[1][i]}</h2>
                            <p class="card-text">${searchResults[2][i]}</p></a>
                        </div>
                    </div>`);
            }
        }
    });
}

$(document).ready(() => {
    $(() => {
        $('[data-toggle="tooltip"]').tooltip();
    });

    $("#submit-search").on("click", () => {
        getSearchResults();
    });

    $("#search-term").keypress(key => {
        if (keyPress.keyCode === 13) {
            getSearchResults();
        }
    })
});