<<<<<<< HEAD
// Show PDFs when subject clicked
const subjectBtns = document.querySelectorAll(".subject-btn");
const pdfLists = document.querySelectorAll(".pdf-list");

subjectBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const pdfId = btn.getAttribute("data-pdfs");

        // Hide all pdf lists first
        pdfLists.forEach(pl => pl.style.display = "none");

        // Show selected pdf list
        const currentPDFs = document.getElementById(pdfId);
        currentPDFs.style.display = "block";
    });
});


function searchAssignments() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const pdfLists = document.querySelectorAll(".pdf-list ul li");

    pdfLists.forEach(item => {
        const text = item.innerText.toLowerCase();
        if(text.includes(input)) {
            item.style.display = "list-item";
        } else {
            item.style.display = "none";
        }
    });
}

=======
// Show PDFs when subject clicked
const subjectBtns = document.querySelectorAll(".subject-btn");
const pdfLists = document.querySelectorAll(".pdf-list");

subjectBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const pdfId = btn.getAttribute("data-pdfs");

        // Hide all pdf lists first
        pdfLists.forEach(pl => pl.style.display = "none");

        // Show selected pdf list
        const currentPDFs = document.getElementById(pdfId);
        currentPDFs.style.display = "block";
    });
});


function searchAssignments() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const pdfLists = document.querySelectorAll(".pdf-list ul li");

    pdfLists.forEach(item => {
        const text = item.innerText.toLowerCase();
        if(text.includes(input)) {
            item.style.display = "list-item";
        } else {
            item.style.display = "none";
        }
    });
}

>>>>>>> 16222117a36810f35c3e8e2c94dc5c38df6561ca
