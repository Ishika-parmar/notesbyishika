const practicalBtns = document.querySelectorAll(".practical-btn");
const pdfLists = document.querySelectorAll(".pdf-list");

practicalBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const targetId = btn.getAttribute("data-sub");

        // hide all practical lists
        pdfLists.forEach(list => {
            list.style.display = "none";
        });

        // show selected practical
        const targetDiv = document.getElementById(targetId);
        if (targetDiv) {
            targetDiv.style.display = "block";
        }
    });
});