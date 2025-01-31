// Function to load content into a popup frame
function loadPopup(url) {
    document.getElementById("popupFrame").src = url;
}

// Function to confirm deletion
function confirmDelete() {
    alert("Transaction deleted successfully!");
    // You can add your AJAX call or page refresh logic here
    document.querySelector("#deleteConfirmModal .btn-close").click(); // Close modal after delete
}

function searchBookings() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const rows = document.querySelectorAll('.bookings-table tbody tr');

    rows.forEach(row => {
        let matchFound = false;

        row.querySelectorAll("td").forEach(cell => {
            if (cell.textContent.toLowerCase().includes(query)) {
                matchFound = true; // If any cell contains the query, keep the row visible
            }
        });

        row.style.display = matchFound ? "" : "none"; // Show row if a match is found, else hide
    });
}


