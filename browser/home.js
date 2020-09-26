$(document).ready(() => {
    $("#data").click(() => {
        $.ajax({
            method: "POST",
            url: "/get_data",
            context: document.body
        }).done((data) => {
            console.log(data);
        });
    });
});
