function toggleSubMenu(dropdownId, menuId, menuCloseId, sectionMenuId) {
    var a = document.getElementById(dropdownId);
    var b = document.getElementById(menuId);
    var c = document.getElementById(menuCloseId);
    var d = document.getElementById(sectionMenuId);

    if (a.style.display === "block") {
        a.style.display = "none";
        b.style.display = "block";
        c.style.display = "none";
        d.style.marginTop = "16px";
    } else {
        a.style.display = "block";
        b.style.display = "none";
        c.style.display = "block";
        d.style.marginTop = "0px";
    }
}

function toggleFaq(element) {
    let toggleId = element.dataset.controls;
    let toggleState = element.dataset.expanded;
    let toggleElement = document.getElementById(toggleId);
    let plusElement = element.querySelector(".plus");
    let minusElement = element.querySelector(".minus");
    if (toggleState == "true") {
        element.dataset.expanded = false;
        toggleElement.classList.add("hidden");
        toggleElement.classList.remove("block");
        element.classList.remove("!bg-gold-600");
        if (plusElement) {
            plusElement.classList.remove("hidden");
            minusElement.classList.add("hidden");
        }
    } else {
        element.dataset.expanded = true;
        toggleElement.classList.remove("hidden");
        toggleElement.classList.add("block");
        element.classList.add("!bg-gold-600");
        if (plusElement) {
            plusElement.classList.add("hidden");
            minusElement.classList.remove("hidden");
        }
    }
}
