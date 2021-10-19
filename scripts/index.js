/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

function create() {
  var product = {
    name: document.getElementById("product_name").value,
    description: document.getElementById("product_description").value,
    category: document.getElementById("product_category").value,
    price: document.getElementById("product_price").value,
    used: document.getElementById("product_state_used").checked,
    almost_new: document.getElementById("product_state_almost_new").checked,
    new: document.getElementById("product_state_new").checked
  }

  console.log("Produto a ser criado: ");
  console.log(product);

  document.getElementById("product_name").value = "";
  document.getElementById("product_description").value = "";
  document.getElementById("product_category").value = "";
  document.getElementById("product_price").value = "";
  document.getElementById("product_state_used").checked = false;
  document.getElementById("product_state_almost_new").checked = false;
  document.getElementById("product_state_new").checked = false;
}