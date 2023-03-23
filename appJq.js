$(document).ready(function () {
    $(".nav-link").hover(
        function () {
            // Al pasar el ratón por encima del elemento
            $(this).animate(
                {
                    fontSize: "20px",
                    paddingLeft: "10px",
                },
                200
            );
        },
        function () {
            // Al quitar el ratón del elemento
            $(this).animate(
                {
                    fontSize: "16px",
                    paddingLeft: "0px",
                },
                200
            );
        }
    );
});

