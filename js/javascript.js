function commitButton_Click() {
    document.getElementById("qrcode").innerHTML = "";
    document.getElementById("qrcode").style.width = document.getElementById("widthBox").value + "px";
    document.getElementById("qrcode").style.height = document.getElementById("heightBox").value + "px";
    document.getElementById("downloadImg").style.display = "";
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: document.getElementById("inputBox").value,
        width: document.getElementById("widthBox").value,
        height: document.getElementById("heightBox").value,
        colorDark: document.getElementById("colorBox").value,
        colorLight: document.getElementById("bakColorBox").value,
        correctLevel: QRCode.CorrectLevel.H
    });
}
function downloadImg_Click() {
    var imageUrl;
    try {
        //父元素
        var parentElement = document.getElementById('qrcode');
        //遍历父元素
        Array.from(parentElement.children).forEach(function (child) {
            //找到没有ID的img元素
            if (child.tagName == 'IMG' && !child.id) {
                imageUrl = child.src;
                throw new Error('LoopOver');
            }
        });
    } catch { }
    if (imageUrl != null) {
        var a = document.createElement("a");
        a.href = imageUrl;
        a.download = "qrcode.png";
        a.click();
    }
}