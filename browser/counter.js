function whoIs() {
    var urlParams = new URLSearchParams(window.location.search);
    var who = urlParams.get("loser");
    return who;
}

let clicks = 0;

function count(who) {
    clicks++;
    console.log(clicks);
    $.ajax({
        type: "PUT",
        url: `/put_data?loser=${who}&clicks=${clicks}`,
        context: document.body
    });
}

$(document).ready(() => {
    $("#counter").click(() => {
        count(whoIs());
    });
});