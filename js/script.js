$(document).ready(function () {
    $(".button").click(function () {
        var input = $("#input").val();
        $.ajax({
            method: "POST",
            url: "backend.php",
            dataType: "json",
            data: {
                input: input,
            },
            success: function (result) {
                $(".button").append(result);
            }
        });
    });
});