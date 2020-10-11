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

String.prototype.toTitleCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

$(document).ready(() => {
	$.ajax({
            method: "POST",
            url: "/get_data",
            context: document.body,
        }).done((data) => {
			makeTable(data, "#people");
			$.each(data, function (i, item) {
				$("#choices").append(
					$("<button>").text(item.losers)
								 .attr("id", item.losers.toLowerCase())
								 .attr("class", "losers")
				);
			});
		});

    $("#data").click(() => {
		location.reload();
    });

	let pickedWho = null;
	$("#picked").text("None");

	$("#continue").click(() => {
		if (pickedWho == null) {
			alertify.defaults.glossary.title = "Error!";
			alertify.alert("Please pick a name");
		} else {
			window.open(`/counter.html?loser=${pickedWho}`, "_self");
		}
	});
	
	$("#choices").on("click", "button", (e) => {
		pickedWho = e.target.id.toTitleCase();
		$("#picked").text(pickedWho);
	});
	
	$("#reset").click(() => {
		pickedWho = null;
		$("#picked").text("None");
	});
});