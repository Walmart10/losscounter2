function makeTable(jsonData, tableName) {
	$.each(jsonData, function(i, item) {
		$(tableName).append(
			$("<tr>").append(
				$("<td>").text(item.losers),
				$("<td>").text(item.times)
			)
		);
	});
}

function makeButtons(jsonData, divId) {
	$.each(jsonData, function (i, item) {
		$(divId).append(
			$("<button>").text(jsonData.losers).attr("id", jsonData.losers.toLowerCase())
		)
	});
}

$(document).ready(() => {
	$.ajax({
            method: "POST",
            url: "/get_data",
            context: document.body,
        }).done((data) => {
			makeTable(data, "#people");
			makeButton(data, "choices");
        });
	});
	
    $("#data").click(() => {
        $.ajax({
            method: "POST",
            url: "/get_data",
            context: document.body,
        }).done((data) => {
			makeTable(data, "#people");
//			makeButton(data, "choices");
        });
    });
});