// Organizer overview: a number box turns light green when the mouse is over it

let stats = document.querySelectorAll(".stat");

stats.forEach(function(stat) {
    stat.addEventListener("mouseover", function() {
        stat.style.backgroundColor = "#eef6f1";
    });

    stat.addEventListener("mouseout", function() {
        stat.style.backgroundColor = "";
    });
});
