// JavaScript source code

// read the image
$("#file0").on("change", function () {
    let fileReader = new FileReader(),
        fileType = this.files[0].type;
    fileReader.onload = function () {
        if (/^image/.test(fileType)) {   // ��ȡ�����fileReader.result����
            $("#img0").attr("src", this.result);
            $("#img0").removeClass("hide");
        }
    }
    //base64��ʽ��ȡ
    console.log(this.files[0]);
    fileReader.readAsDataURL(this.files[0]);
});

// click event
$("#analyze_text").on("click", function () {
    // get the file name of the local image
    var images_file = $("#file0").val();
    var file = images_file.substring(images_file.lastIndexOf('\\') + 1, images_file.length); 
    if (images_file == "" ) return false;

    // POST the file name get above to python
    console.log(file)
    $.ajax({
        url: 'analyze',
        method: 'POST',
        data: { 'text': file },
        beforeSend: function () {
            $("#loader").fadeIn();
        },
        
        // POST success, get the response(result) of the api call to waston visual recognition server
        success: function (response) {
            $("#loader").fadeOut();

            console.log(response);
        
            $("#result_text").html("");
            
            $("#result_text").html("<p>Watson is <span class='score'>"
                + (response['images'][0]['classifiers'][0]['classes'][0]['score'] * 100).toFixed(2)
                + "%</span> confident that this waste is <span class= 'class'>"
                + response['images'][0]['classifiers'][0]['classes'][0]['class']
                + "</span></p>");
        }
    });

    return false;
});