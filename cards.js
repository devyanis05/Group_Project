function Items(category) {

    // hide everything
    let all = document.querySelectorAll(".item-card");
    all.forEach(a => a.style.display = "none");

    // show selected category
    let selected = document.querySelectorAll(`[data="${category}"]`);
    selected.forEach(s => s.style.display = "block");

    
}
