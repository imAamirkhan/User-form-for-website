window.onload = function () {
    document.getElementById("download")
        .addEventListener("click", () => {
            const invoice = this.document.getElementById("invoice");
            console.log(invoice);
            console.log(window);
            document.getElementById("download").style.display="none";
            var opt = {
                margin: 1,
                filename: 'myfile.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
             
            };
            html2pdf()
            .from(invoice)
            .set(opt)
            .save();
        })
        let n = document.querySelectorAll(".number");
        for (i=0;i<n.length;i++){
            n[i].value = Math.floor(Math.random() * 100);
        }
}



