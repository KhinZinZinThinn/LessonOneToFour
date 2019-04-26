/**
 * Created by root on 6/24/18.
 */
$("#myForm").on('submit',function (e) {
    e.preventDefault();
    var name=$("#name").val();
    // var showText=$("#showText");
    // showText.html(name);
    var myList=$("#myList");
    myList.append("<li>"+name+"</li>");
   $("#name").val("");
});


$("#name").on('change',function () {
    $("#myForm").submit();
});


