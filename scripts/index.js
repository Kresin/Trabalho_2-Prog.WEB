
/* Codigo copiado de https://code.tutsplus.com/tutorials/making-a-sliding-side-navigation-menu-for-responsive-designs--cms-28400 */
function openNav() {
    document.getElementById("sideNavigation").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}
 
function closeNav() {
    document.getElementById("sideNavigation").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}