function copyMagnetLink() {
    var magnetLink = document.getElementById("magnetLink");
    copyToClipboard(magnetLink.textContent);
    alert("磁力链接已复制到剪贴板！");
}

function copyDownloadLink() {
    var downloadLink = document.getElementById("downloadLink");
    copyToClipboard(downloadLink.textContent);
    alert("下载链接已复制到剪贴板！");
}

function copyToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
}