//document.getElementById("btnSend").addEventListener("click", function () {
//    alert("Subject: " + document.getElementById("txtSubject").value +
//        "From: " + document.getElementById("txtFrom").value +
//        "Message: " + document.getElementById("txtMsg").value);

//})

$("#btnSend").click(function () {
    alert("Subject: " + $("#txtSubject").val() +
        ", From: " + $("#txtFrom").val() +
        ", Message: " + $("#txtMsg").val() +
        "Love you heaps");
})