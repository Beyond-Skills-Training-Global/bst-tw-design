function toggleMenu() {
    var h = document.getElementById("header");
    var x = document.getElementById("menu");
    var y = document.getElementById("openMenuSvg");
    var z = document.getElementById("closeMenuSvg");


    if (x.style.display === "block") {
        x.style.display = "none";
        y.style.display = "block";
        z.style.display = "none";
        h.style.background = "linear-gradient(rgba(0,0,0,1) 0%,rgba(0,0,0,0.8) 40%,rgba(0,0,0,0.3) 100%)";

        a.style.display = "none";
        b.style.display = "block";
        c.style.display = "none";
        d.style.marginTop = "16px";
    } else {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "block";
        h.style.background = "#262626";
    }
}

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
