// Registrations: search participants, view details and export

let rows = document.querySelectorAll("#regTable tbody tr");

function getCell(row, number) {
    return row.querySelector("td:nth-child(" + number + ")").textContent.trim();
}

function filterTable() {
    let search = document.getElementById("q").value.trim().toLowerCase();
    let count = 0;

    rows.forEach(function(row) {
        let show = row.textContent.toLowerCase().includes(search);

        if (show) {
            row.style.display = "";
            count++;
        } else {
            row.style.display = "none";
        }
        row.classList.toggle("shade", show && count % 2 === 0);
    });
}

function searchParticipants(event) {
    event.preventDefault();
    filterTable();
}

function exportCsv(event) {
    event.preventDefault();
    alert("Exporting registrations to CSV.");
}

// View link: show the details of that row
rows.forEach(function(row) {
    row.querySelector("a").addEventListener("click", function(event) {
        event.preventDefault();
        alert("ID: " + getCell(row, 1) + "\nName / Team: " + getCell(row, 2) + "\nSegment: " + getCell(row, 3) + "\nStatus: " + getCell(row, 4));
    });
});

document.getElementById("filterForm").addEventListener("submit", searchParticipants);
document.getElementById("q").addEventListener("input", filterTable);
document.getElementById("exportBtn").addEventListener("click", exportCsv);
document.getElementById("downloadLink").addEventListener("click", exportCsv);
