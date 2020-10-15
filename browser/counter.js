function whoIs() {
    var urlParams = new URLSearchParams(window.location.search);
    var who = urlParams.get("loser");
    return who;
}

let clicks = 0;
function count(who) {
    clicks++;
    $.ajax({
        type: "PUT",
        url: `/put_data?loser=${who}&clicks=${clicks}`,
    }).done((data) => {
        $("#clicks").text(clicks);
    });
}

function getCount(who) {
    $.ajax({
        type: "POST",
        url: `/get_amount?loser=${who}`
    }).done((data) => {
        var amount = data.match(/\d+/g);
        $("#clicks").text(amount);
        clicks = +amount;
    });
}

$(document).ready(() => {
    $("#loser").text(whoIs());
    getCount(whoIs());

    $("#counter").click(() => {
        count(whoIs());
    });
});
