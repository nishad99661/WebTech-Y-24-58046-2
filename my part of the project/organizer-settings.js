// Organization settings: check the form and invite a member

function saveSettings(event) {
    event.preventDefault();

    let org = document.getElementById("org").value.trim();
    let site = document.getElementById("site").value.trim();
    let email = document.getElementById("email").value.trim();
    let social = document.getElementById("social").value.trim();
    let about = document.getElementById("about").value.trim();

    if (org.length < 3) {
        alert("Organization name needs at least 3 characters.");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid contact email.");
        return;
    }

    if (site !== "" && site.slice(0, 4) !== "http") {
        alert("Official website must start with http");
        return;
    }

    if (social !== "" && social.slice(0, 4) !== "http") {
        alert("Social link must start with http");
        return;
    }

    if (about === "") {
        alert("Please write a short description.");
        return;
    }

    alert("Organization settings saved.");
}

// Invite member: add a new box at the end of the member list
function inviteMember() {
    let box = document.createElement("div");
    box.innerHTML = "<strong>New member</strong><span>Invited - waiting for reply</span>";
    document.getElementById("members").appendChild(box);
}

document.getElementById("settingsForm").addEventListener("submit", saveSettings);
document.getElementById("inviteBtn").addEventListener("click", inviteMember);
