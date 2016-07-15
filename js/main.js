
$(document).ready(function(){

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

    $("ul").finish.on('click', '.checked-item', function(event){
        var item = $("li").val();
        console.log(item);
        //$(this).find("p").css("text-decoration", "line-through");
        $(this).removeClass('checked-item').addClass('non-item');
        $(this).children(":first").removeClass('ion-checkmark-circled').addClass('ion-record');
    });

    $("ul").finish().on('click', '.non-item', function(event){
        var item = $("li").val();
        console.log(item);
        //$(this).find("p").css("text-decoration", "line-through");
        $(this).removeClass('non-item').addClass('checked-item');
        $(this).children(":first").removeClass('ion-record').addClass('ion-checkmark-circled');
    });

 })

/*
"<li class =\"non-item\">
                        <i class=\"ion-record\"> </i>
                        <p> Item 1 </p>
                        <i id=\"close\" class=\"ion-ios-close-empty\"> </i>
                    </li>"


*/