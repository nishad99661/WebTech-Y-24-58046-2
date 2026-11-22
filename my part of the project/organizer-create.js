// Create event (step 1): Save draft and Continue

function saveDraft(event) {
    event.preventDefault();

    let title = document.getElementById("title").value.trim();

    if (title === "") {
        alert("Add an event title to save a draft.");
    } else {
        alert("Draft saved: " + title);
    }
}

function continueNext(event) {
    let title = document.getElementById("title").value.trim();
    let host = document.getElementById("host").value;
    let category = document.getElementById("category").value;
    let description = document.getElementById("description").value.trim();
    let contact = document.getElementById("contact").value.trim();

    if (title.length < 5) {
        event.preventDefault();
        alert("Event title needs at least 5 characters.");
        return;
    }

    if (host === "Select verified organization") {
        event.preventDefault();
        alert("Please select a host organization.");
        return;
    }

    if (category === "Choose event category") {
        event.preventDefault();
        alert("Please choose an event category.");
        return;
    }

    if (description.length < 20) {
        event.preventDefault();
        alert("Description needs at least 20 characters.");
        return;
    }

    if (contact !== "" && !contact.includes("@")) {
        event.preventDefault();
        alert("Please enter a valid contact email.");
        return;
    }
}

document.getElementById("saveDraft").addEventListener("click", saveDraft);
document.getElementById("continueBtn").addEventListener("click", continueNext);
