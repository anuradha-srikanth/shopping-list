
$(document).ready(function(){

    $("#header").on('click', function(event){

        console.log($(this).attr('class') == "non-item");

        var template = "<li class=\"category\"><h3> Category 1 </h3><form id=\"userInput\"> <button class=\"cat1-button\" type=\"submit\"><i class=\"ion-plus-round\"></i></button><input type=\"text\" name=\"add-item\" class=\"add-item\"></form><ul class=\"items\"></ul></li>"
        $(".categories").append(template);
    })

    $("form").submit(function(banana){
        banana.preventDefault();
        $(".cat1-button").click(function(){
        var item1 = $(".add-item").val();
        console.log(item1);

        //append item to list 
        var list = $(".items");
        //make template and include item in it
        //var template = "<p>" + item1 + "</p>";
        /*var temp = "<li class=" + "non-item" + ">" + "<i class=" + "ion-record" + ">" + "</i>" + "<p>" + item1 + "</p>" + "<i id=" + "close" + " class=" + "ion-ios-close-empty" + ">" + "</i>" + "</li>";*/
        if (item1 != 0){
            var templ = "<li class =\"non-item\"> <i class=\"ion-record\"> </i> <p>" + item1 + " </p> <i id=\"close\" class=\"ion-ios-close-empty\"> </i> </li>"

            list.append(templ);
            $("#userInput")[0].reset();
        }
        });
    }); 

/*
    $("ul").finish().on('click', '.checked-item', function(event){
        var item = $("li").val();
        console.log(item);
        //$(this).find("p").css("text-decoration", "line-through");
        $(this).removeClass('checked-item').addClass('non-item');
        $(this).children(":first").removeClass('ion-checkmark-circled').addClass('ion-record');
    });
*/

    $("ul").on('click', '.non-item, .checked-item', function(event){
        var item = $("li").val();
        console.log($(this).attr('class') == "non-item");
        //$(this).find("p").css("text-decoration", "line-through");
        //$(this).removeClass('non-item').addClass('checked-item');
        //$(this).children(":first").removeClass('ion-record').addClass('ion-checkmark-circled');

        /*$(this).toggleClass('checked-item').toggleClass('non-item');
        $(this).children(":first").toggleClass('ion-checkmark-circled').toggleClass('ion-record');*/
        //if $(this).attr('class') = 
        if($(this).attr('class') == "non-item"){
            $(this).toggleClass('non-item').toggleClass('checked-item');
            $(this).children(":first").toggleClass('ion-record').toggleClass('ion-checkmark-circled');
        } else {
            //$(this).toggleClass('checked-item').toggleClass('non-item');
            //$(this).children(":first").toggleClass('ion-checkmark-circled').toggleClass('ion-record');
        }
    });

    $("li").on('click', '#close', function(event){
        $(this).closest('li').remove();
    })

 })

/*
"<li class =\"non-item\">
                        <i class=\"ion-record\"> </i>
                        <p> Item 1 </p>
                        <i id=\"close\" class=\"ion-ios-close-empty\"> </i>
                    </li>"


*/

/*
$(document).ready(function(){

    $("ul").finish().on('click', '.checked-item', function(event){
        var item = $("li").val();
        console.log(item);
        //$(this).find("p").css("text-decoration", "line-through");
        $(this).removeClass('checked-item').addClass('non-item');
        $(this).children(":first").removeClass('ion-checkmark-circled').addClass('ion-record');
    });


})

*/