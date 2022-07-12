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
