jQuery(
    function () {
        let counter = 0;

        $("#dateBox").datepicker(
            {
                dayNamesMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],

                dateFormat: "MM d, yy",

                showOtherMonths:true,
                changeMonth:true,
                changeYear:true,
                minDate: 0,
            });

        // 100% opacity when inside the input texbox 
        // reverts back to 50% once the user leaves
        $("#textBtn").click(
            function() {
            $("#textBtn").css("opacity", "100%");
            });
        $("#textBtn").on("blur",
            function() {
            $("#textBtn").css("opacity", "50%");
            });
            $("#dateBox").click(
                function() {
                $("#dateBox").css("opacity", "100%");
                });
            $("#dateBox").on("blur",
                function() {
                $("#dateBox").css("opacity", "50%");
                });

        $("#addBtn").click((function(){
            // var to save value
            var inputString = $("#textBtn").val();
            // val to save date value
            const dateVal = $("#dateBox").val();
            //counter to save how many times the button's been clicked
            counter++;
            // saves today's date to the today variable
            let today = new Date().getTime() / 86400000;
            // saves the desired date onto dueDate plus 1 day
            let dueDate = (new Date(dateVal).getTime() / 86400000) + 1;
            // rounds the date variables
            today = Math.floor(today);
            dueDate = Math.floor(dueDate);
            daysLeft = dueDate - today;

            //add counter to the title
            $("#counterText").html("<p>" + counter + "</p>");
            //adds inputString to the ul 
            $("#todoList").append("<li>" + inputString + "</li>");
            //adds date to the ul
            $("#todoList").append("<li>Due Date: " + dateVal + "</li>");
            //defaults the val of dateBox to a space
            $('#dateBox').val('');
            //defaults the val of the textBox to a space
            $('#textBtn').val('');

            // add "days left" before the event
            // If the returned value is NaN then nothing will be written
            if(!(isNaN(daysLeft)))
            {
            $("#todoList").append("<li># of days until deadline: " + daysLeft + " days</li><br>");
            }
            else{

            };
            //adds a class to the above items
            $("#todoList li").attr("class", "listItems");
            $("#todoList li").css("width", "550px");
            $("#todoList").css("padding-left", "0px");
            $(".headText").css("margin", "0px");


            // I tried to sort the output but I believe the way I coded the appended content doesn't allow me to do it
            
            // $("li").sort(function(a,b){
            //     return +new Date($(a).text()) - +new Date($(b).text());
            // }).each(function(){
            //     $("#todoList").append(this);
            // })
        }))
        
        

        } //end of main
        ) //end Jquery
    