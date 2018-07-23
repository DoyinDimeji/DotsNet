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

    //Using the XMLHttpRequest to get data from the json file on the server:
    var xmlhttp = new XMLHttpRequest();

    $("#primaryFront").click(function () {
        j = 0; k = 0; x = 0;
        i++;
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var obj = JSON.parse(this.responseText);
                var address = obj.Edulevel[0].Address; $(".address>p").text(address);
                var contact = obj.Edulevel[0].Contact; $(".contact>p").text(contact);
                var duration = obj.Edulevel[0].Duration; $(".duration>p").text(duration);
                $("#secondaryRight").css({
                    "background-image": "url(../img/HeadsetSpace.jpg)", "background-position": "center",
                    "background-repeat": "no-repeat",
                    "background-size": "cover"
                });
                var txt = "";
                txt += "<ul class='list-unstyled'><h3>Society(ies)</h3>"
                for (j in obj.Edulevel[0].Societies) {

                    txt += "<li><p>" + obj.Edulevel[0].Societies[j] + "</p></li>";

                }
                txt += "</ul>"
                document.getElementById("societies").innerHTML = txt;

                var txt = "";
                txt += "<ul class='list-unstyled'><h3>Milestone(s)</h3>"
                for (j in obj.Edulevel[0].Milestones) {

                    txt += "<li><p>" + obj.Edulevel[0].Milestones[j] + "</p></li>";

                }
                txt += "</ul>"
                document.getElementById("milestones").innerHTML = txt;

                console.log(obj.Edulevel[0].Level);
            }
        };
        xmlhttp.open("GET", "js/schooldetails.json", true);
        xmlhttp.send();
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


    //SECONDARY
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
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var obj = JSON.parse(this.responseText);
                var address = obj.Edulevel[1].Level.SS.Address; $(".address>p").text(address);
                var contact = obj.Edulevel[1].Level.SS.Contact; $(".contact>p").text(contact);
                var duration = obj.Edulevel[1].Level.SS.Duration; $(".duration>p").text(duration);

                var txt = "";
                txt += "<ul class='list-unstyled'><h3>Society(ies)</h3>"
                for (s in obj.Edulevel[1].Level.SS.Societies) {

                    txt += "<li><p>" + obj.Edulevel[1].Level.SS.Societies[s] + "</p></li>";

                }
                txt += "</ul>"
                document.getElementById("societies").innerHTML = txt;

                var txt = "";
                txt += "<ul class='list-unstyled'><h3>Milestone(s)</h3>"
                for (s in obj.Edulevel[1].Level.SS.Milestones) {

                    txt += "<li><p class='line-height'>" + obj.Edulevel[1].Level.SS.Milestones[s] + "</p></li>";

                }
                txt += "</ul>"
                document.getElementById("milestones").innerHTML = txt;

                console.log("adding " + obj.Edulevel[1].Level.SS.School);
            }
        };
        xmlhttp.open("GET", "js/schooldetails.json", true);
        xmlhttp.send();

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


    //TETIARY
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
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var obj = JSON.parse(this.responseText);
                var address = obj.Edulevel[2].Address; $(".address>p").text(address);
                var contact = obj.Edulevel[2].Contact; $(".contact>p").text(contact);
                var duration = obj.Edulevel[2].Duration; $(".duration>p").text(duration);

                var txt = "";
                txt += "<ul class='list-unstyled'><h3>Society(ies)</h3>"
                for (j in obj.Edulevel[2].Societies) {

                    txt += "<li><p>" + obj.Edulevel[2].Societies[j] + "</p></li>";

                }
                txt += "</ul>"
                document.getElementById("societies").innerHTML = txt;

                var txt = "";
                txt += "<ul class='list-unstyled'><h3>Milestone(s)</h3>"
                for (j in obj.Edulevel[2].Milestones) {

                    txt += "<li><p>" + obj.Edulevel[2].Milestones[j] + "</p></li>";

                }
                txt += "</ul>"
                document.getElementById("milestones").innerHTML = txt;

                console.log(obj.Edulevel[2].Level);
            }
        };
        xmlhttp.open("GET", "js/schooldetails.json", true);
        xmlhttp.send();
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


    //OTHER
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