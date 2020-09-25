$(document).ready(() => {
  $("#fetch").click(() => {
    $.ajax({
      method: "GET",
      url: "/data"
      context: document.body
    });
  })
})
