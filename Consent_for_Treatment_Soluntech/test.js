function success() {
    var updateClass = document.getElementsByClassName('cbUpdateButton');
    $('input[name="EditRecordSignature_1"]').val($('#cb_sign_wrapper_1 .output').val());
    if (document.getElementById("EditRecordSignature_1").value == "") {
        updateClass[0].disabled = true;
        document.getElementById("alert").style.display = "flex";
        /*document.getElementById("alert").classList.remove("hiddenDiv"); */
    } else {
        updateClass[0].disabled = false;
        updateClass[0].click();
    }
}
document.getElementsByClass("cbUpdateButton").onclick = function () {
    var sig = document.getElementById("EditRecordSignature_1");
    if (sig.value == "") {
        document.getElementById("alert").style.display = "flex";
    }
}
document.addEventListener('BeforeFormSubmit', function (event) {
    var sig = document.getElementById("EditRecordSignature_1");
    if (sig.value == "") {
        document.getElementById("alert").classList.toggle("hiddenDiv");
        //document.getElementById("alert").style.display = "flex";
        //sleep(1500);
        // put the signatures on the proper fields
    }
    $('input[name="EditRecordSignature_1"]').val($('#cb_sign_wrapper_1 .output').val());
});

document.addEventListener('DataPageReady', function (event) {
    $('#cb_sign_wrapper_1').signaturePad({ drawOnly: true });
    $('#cb_sign_wrapper_2').signaturePad({ drawOnly: true });
});