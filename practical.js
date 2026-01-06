<<<<<<< HEAD
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
=======
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
>>>>>>> 16222117a36810f35c3e8e2c94dc5c38df6561ca
});