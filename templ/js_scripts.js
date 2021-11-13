function sendData() {
    let err = 1
    if ($('#name').val().toString() == "undefined" || Boolean($('#name').val().toString())==false){
        $('#name').attr("style","background-color:red")
        err = 0
    } else {$('#name').attr("style","background-color:white")}
    if ($('#title').val().toString() == "undefined" || Boolean($('#title').val().toString())==false){
        $('#title').attr("style","background-color:red")
        err = 0
    } else {$('#title').attr("style","background-color:white")}
    if ($('#type').val().toString() == "undefined" || Boolean($('#type').val().toString())==false){
        $('#type').attr("style","background-color:red")
        err = 0
    } else {$('#type').attr("style","background-color:white")}
    if ($('#email').val().toString() == "undefined" || Boolean($('#type').val().toString())==false){
        $('#email').attr("style","background-color:red")
        err = 0
    } else {$('#email').attr("style","background-color:white")}
    if ($('#price').val().toString() == "undefined" || Boolean(parseFloat($('#price').val().toString()))==false || Boolean($('#price').val().toString())==false){
        $('#price').attr("style","background-color:red")
        err = 0
    } else {$('#price').attr("style","background-color:white")}
    if ($('#description').val().toString() == "undefined" || Boolean($('#description').val().toString())==false){
        $('#description').attr("style","background-color:red")
        err = 0
    } else {$('#description').attr("style","background-color:white")}
    if ($('#phone_number').val().toString() == "undefined" || Boolean($('#phone_number').val().toString())==false){
        $('#phone_number').attr("style","background-color:red")
        err = 0
    } else {$('#phone_number').attr("style","background-color:white")}
    if ($('#start_dates').val().toString() == "undefined" || Boolean($('#start_dates').val().toString())==false) {
        $('#start_dates').attr("style", "background-color:red")
        err = 0
    } else {$('#start_dates').attr("style","background-color:white")}
    if (err == 0){
        alert("err")
        return
    }
    let data = {
        "name": $('#name').val(),
        "title":$('#title').val(),
        "type":$('#type').val(),
        "price":$('#price').val(),
        "description":$('#description').val(),
        "email":$('#email').val(),
        "phone_number":$('#phone_number').val(),
        "start_dates":$('#start_dates').val(),
    }
    $.ajax({
        url: '/author/addannouncement',
        type: 'POST',
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success : function(data) {
                $('#name').val("");
                $('#title').val("");
                $('#type').val("");
                $('#price').val("");
                $('#description').val("");
                $('#email').val("");
                $('#phone_number').val("");
                $('#start_dates').val("");
           // $('#lines').append("<div>Title"+data.title+"</div><br>"+"<div>Name"+data.name+"</div><br>")
            //alert("added new announcement reload page!")
            Find()
        },
        error:function (){
            alert("wrong")
        }
    });
    console.log(data)
}



// function removeFromChart(item) {
//     alert("s")
//     let it = document.getElementById(item);
//     it.parentNode.removeChild(it);
//     let dataId = item.toString()
    // $.ajax({
    //     url: "/data/delFromOrder",
    //     method: "POST",
    //     data: JSON.stringify(data),
    //     contentType: "application/json; charset=utf-8",
    //     dataType: "json",
    //     success: function (data) {
    //         $("#chartitems").append("<div id=" + dataId + ">" +
    //             "<ul class='chartitem' >" +
    //             "<li><div class ='chartitemimage'></div></li>" +
    //             "<li><p>Name:" + data.name + "</p></li>" +
    //             "<li><p>Type:" + data.type + "</p></li>" +
    //             "<li><p>Date:" + data.start_date + "</p></li>" +
    //             "</ul>" +
    //             "<div style='background-color: crimson' onclick=removeFromChart('" + id + "')></div>" +
    //             "</div>");
    //     },
    //     error: function () {
    //         alert("err err chart add")
    //     },
    // })
// }

// //////////////////////////////////////////
// function start(d, axios) {
//     "use strict";
//     let inputFile = d.querySelector("#inputFile");
//     let divNotification = d.querySelector("#alert");
//
//     inputFile.addEventListener("change", addFile);
//
//     function upload(file) {
//         var formData = new FormData()
//         formData.append("file", file)
//         post("/author/addImage", formData)
//             .then(onResponse)
//             .catch(onResponse);
//     }
//     function onResponse(response) {
//         var className = (response.status !== 400) ? "success" : "error";
//         divNotification.innerHTML = response.data;
//         divNotification.classList.add(className);
//         setTimeout(function() {
//             divNotification.classList.remove(className);
//         }, 3000);
//     }
//     function addFile(e) {
//         var file = e.target.files[0]
//         if(!file){
//             return
//         }
//         upload(file);
//     }
//     setTimeout(function() {
//         divNotification.classList.remove(className);
//     }, 3000);
// }
//
// function onResponse(response) {
//     var className = (response.status !== 400) ? "success" : "error";
//     divNotification.innerHTML = response.data;
//     divNotification.classList.add(className);
//
// }
//
// function post(url, data) {
//     return axios.post(url, data)
//         .then(function (response) {
//             return response;
//         }).catch(function (error) {
//             return error.response;
//         });
// }