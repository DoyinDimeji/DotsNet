$(document).ready(function () {
    //var eduqualArray = [$("#primary"), $("#secondary"), $("#tetiary"), $("#others")];
    //for (var i = 0; i < length; i++) {

    //}
    //$.each(eduqualArray, function (key,value) {
    //    console.log(key + ": " + value);
    //});


    var i = 0;
    $("#primaryFront").on({
        mouseenter: function () {
            $("#primaryFront>div").css("color", "orange");
        },
        mouseleave: function () {
            $("#primaryFront>div").css("color", "white");
        }
    });
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            console.log(xhttp.responseText);
        }
        xhttp.open("GET", "schooldetails.json", true);
        xhttp.send();
    }
    $("#primaryFront").click(function () {
        j = 0; k = 0; x = 0;
        i++;

        $("#secondaryRight>p").text("I have been rotated from primary button");
        if (i % 2 == 0) {
            if ($("#secondary").hasClass("rotate")) {
                $("#secondary").removeClass("rotate");
                $("#secondary").addClass("rotateBack");
                console.log("secondary: Removed rotate, added rotateBack class");

                $("#tetiary").removeClass("rotate");
                $("#tetiary").addClass("rotateBack");
                console.log("tetiary: Removed rotate, added rotateBack class");

                $("#others").removeClass("rotate");
                $("#others").addClass("rotateBack");
                console.log("others: Removed rotate, added rotateBack class");
            }
            else {
                $("#secondary").addClass("rotateBack");
                console.log("Secondary: Newly added rotateBack class");
                $("#tetiary").addClass("rotateBack");
                console.log("tetiary: Newly added rotateBack class");
                $("#others").addClass("rotateBack");
                console.log("others: Newly added rotateBack class");
            }
        }

        else {
            if ($("#secondary").hasClass("rotateBack")) {
                $("#secondary").removeClass("rotateBack");
                $("#secondary").addClass("rotate");
                console.log("secondary: Removed rotateBack, added rotate class");

                $("#tetiary").removeClass("rotateBack");
                $("#tetiary").addClass("rotate");
                console.log("tetiary: Removed rotateBack, added rotate class");

                $("#others").removeClass("rotateBack");
                $("#others").addClass("rotate");
                console.log("others: Removed rotateBack, added rotate class");
            }
            else {
                $("#secondary").addClass("rotate");
                console.log("Secondary: Newly added rotate class");
                $("#tetiary").addClass("rotate");
                console.log("tetiary: Newly added rotate class");
                $("#others").addClass("rotate");
                console.log("others: Newly added rotate class");
            }
        }
    });


    var j = 0;
    $("#secondaryFront").on({
        mouseenter: function () {
            $("#secondaryFront>div").css("color", "orange");
        },
        mouseleave: function () {
            $("#secondaryFront>div").css("color", "white");
        }
    });
    $("#secondaryFront").click(function () {
        i = 0; k = 0; x = 0;
        j++;
        if (j % 2 == 0) {
            if ($("#primary").hasClass("rotate")) {
                $("#primary").removeClass("rotate");
                $("#primary").addClass("rotateBack");
                console.log("primary: Removed rotate, added rotateBack class");

                $("#tetiary").removeClass("rotate");
                $("#tetiary").addClass("rotateBack");
                console.log("tetiary: Removed rotate, added rotateBack class");

                $("#others").removeClass("rotate");
                $("#others").addClass("rotateBack");
                console.log("others: Removed rotate, added rotateBack class");
            }
            else {
                $("#primary").addClass("rotateBack");
                console.log("primary: Newly added rotateBack class");
                $("#tetiary").addClass("rotateBack");
                console.log("tetiary: Newly added rotateBack class");
                $("#others").addClass("rotateBack");
                console.log("others: Newly added rotateBack class");
            }
        }

        else {
            if ($("#primary").hasClass("rotateBack")) {
                $("#primary").removeClass("rotateBack");
                $("#primary").addClass("rotate");
                console.log("secondary: Removed rotateBack, added rotate class");

                $("#tetiary").removeClass("rotateBack");
                $("#tetiary").addClass("rotate");
                console.log("tetiary: Removed rotateBack, added rotate class");

                $("#others").removeClass("rotateBack");
                $("#others").addClass("rotate");
                console.log("others: Removed rotateBack, added rotate class");
            }
            else {
                $("#primary").addClass("rotate");
                console.log("primary: Newly added rotate class");
                $("#tetiary").addClass("rotate");
                console.log("tetiary: Newly added rotate class");
                $("#others").addClass("rotate");
                console.log("others: Newly added rotate class");
            }
        }
    });

    var k = 0;
    $("#tetiaryFront").on({
        mouseenter: function () {
            $("#tetiaryFront>div").css("color", "orange");
        },
        mouseleave: function () {
            $("#tetiaryFront>div").css("color", "white");
        }
    });
    $("#tetiaryFront").click(function () {
        i = 0; j = 0; x = 0;
        k++;
        $("#secondaryRight>p").text("I have been rotated from tetiary button");
        if (k % 2 == 0) {
            if ($("#secondary").hasClass("rotate")) {
                $("#secondary").removeClass("rotate");
                $("#secondary").addClass("rotateBack");
                console.log("secondary: Removed rotate, added rotateBack class");

                $("#primary").removeClass("rotate");
                $("#primary").addClass("rotateBack");
                console.log("primary: Removed rotate, added rotateBack class");

                $("#others").removeClass("rotate");
                $("#others").addClass("rotateBack");
                console.log("others: Removed rotate, added rotateBack class");
            }
            else {
                $("#secondary").addClass("rotateBack");
                console.log("Secondary: Newly added rotateBack class");
                $("#primary").addClass("rotateBack");
                console.log("primary: Newly added rotateBack class");
                $("#others").addClass("rotateBack");
                console.log("others: Newly added rotateBack class");
            }
        }

        else {
            if ($("#secondary").hasClass("rotateBack")) {
                $("#secondary").removeClass("rotateBack");
                $("#secondary").addClass("rotate");
                console.log("secondary: Removed rotateBack, added rotate class");

                $("#primary").removeClass("rotateBack");
                $("#primary").addClass("rotate");
                console.log("tetiary: Removed rotateBack, added rotate class");

                $("#others").removeClass("rotateBack");
                $("#others").addClass("rotate");
                console.log("others: Removed rotateBack, added rotate class");
            }
            else {
                $("#secondary").addClass("rotate");
                console.log("Secondary: Newly added rotate class");
                $("#primary").addClass("rotate");
                console.log("primary: Newly added rotate class");
                $("#others").addClass("rotate");
                console.log("others: Newly added rotate class");
            }
        }
    });

    var x = 0;
    $("#othersFront").on({
        mouseenter: function () {
            $("#othersFront>div").css("color", "orange");
        },
        mouseleave: function () {
            $("#othersFront>div").css("color", "white");
        }
    });
    $("#othersFront").click(function () {
        i = 0; k = 0; k = 0;
        x++;
        $("#secondaryRight>p").text("I have been rotated from others button");
        if (x % 2 == 0) {
            if ($("#secondary").hasClass("rotate")) {
                $("#secondary").removeClass("rotate");
                $("#secondary").addClass("rotateBack");
                console.log("secondary: Removed rotate, added rotateBack class");

                $("#tetiary").removeClass("rotate");
                $("#tetiary").addClass("rotateBack");
                console.log("tetiary: Removed rotate, added rotateBack class");

                $("#primary").removeClass("rotate");
                $("#primary").addClass("rotateBack");
                console.log("primary: Removed rotate, added rotateBack class");
            }
            else {
                $("#secondary").addClass("rotateBack");
                console.log("Secondary: Newly added rotateBack class");
                $("#tetiary").addClass("rotateBack");
                console.log("tetiary: Newly added rotateBack class");
                $("#primary").addClass("rotateBack");
                console.log("primary: Newly added rotateBack class");
            }
        }

        else {
            if ($("#secondary").hasClass("rotateBack")) {
                $("#secondary").removeClass("rotateBack");
                $("#secondary").addClass("rotate");
                console.log("secondary: Removed rotateBack, added rotate class");

                $("#tetiary").removeClass("rotateBack");
                $("#tetiary").addClass("rotate");
                console.log("tetiary: Removed rotateBack, added rotate class");

                $("#primary").removeClass("rotateBack");
                $("#primary").addClass("rotate");
                console.log("primary: Removed rotateBack, added rotate class");
            }
            else {
                $("#secondary").addClass("rotate");
                console.log("Secondary: Newly added rotate class");
                $("#tetiary").addClass("rotate");
                console.log("tetiary: Newly added rotate class");
                $("#primary").addClass("rotate");
                console.log("primary: Newly added rotate class");
            }
        }
    });
});