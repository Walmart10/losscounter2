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

$(document).ready(() => {
    $("#data").click(() => {
        $.ajax({
            method: "POST",
            url: "/get_data",
            context: document.body,
        }).done((data) => {
			makeTable(data, "table");
        })
    });
});
