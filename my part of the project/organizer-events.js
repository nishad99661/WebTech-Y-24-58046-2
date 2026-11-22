// My events: search the table and filter by status

function filterTable() {
    let search = document.getElementById("q").value.trim().toLowerCase();
    let status = document.getElementById("status").value;
    let rows = document.querySelectorAll("#eventsTable tbody tr");
    let count = 0;

    rows.forEach(function(row) {
        let text = row.textContent.toLowerCase();
        let rowStatus = row.querySelector("td:nth-child(2)").textContent.trim();
        let show = true;

        if (!text.includes(search)) {
            show = false;
        }
        if (status !== "Status: All events" && rowStatus !== status) {
            show = false;
        }

        if (show) {
            row.style.display = "";
            count++;
        } else {
            row.style.display = "none";
        }
        row.classList.toggle("shade", show && count % 2 === 0);
    });
}

function searchEvents(event) {
    event.preventDefault();
    filterTable();
}

document.getElementById("filterForm").addEventListener("submit", searchEvents);
document.getElementById("q").addEventListener("input", filterTable);
document.getElementById("status").addEventListener("change", filterTable);
