document.addEventListener("DOMContentLoaded", function() {
    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-placeholder").innerHTML = data;
        });

    const footerCss = document.createElement('link');
    footerCss.rel = 'stylesheet';
    footerCss.href = 'css/footer.css';
    document.head.appendChild(footerCss);
});