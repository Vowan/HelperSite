$(function () {
debugger;
    $("[href='#section1']").click(function (e) {
        e.preventDefault();
        console.log("side")
        $("#control").load("http://localhost:8383/myTutorSite/CSSGenerator/fragments/dimensions.html");
    });
});


