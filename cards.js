function Items(category) {

    // hide everything
    let all = document.querySelectorAll(".item-card");
    all.forEach(a => a.style.display = "none");

    // show selected category
    let selected = document.querySelectorAll(`[data="${category}"]`);
    selected.forEach(s => s.style.display = "block");

    // // show all if category = "all"
    // if(category === "all") {
    //     all.forEach(a => a.style.display = "block");
    // }
}
