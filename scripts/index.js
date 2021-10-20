/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var subitem = document.getElementsByClassName("dropdown-subitem");
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

for (i = 0; i < subitem.length; i++) {
  subitem[i].addEventListener("click", function () {
    //Remove o negrito de todos os subitens e depois adiciona no subitem pressionado
    for (j = 0; j < subitem.length; j++) {
      if (subitem[j].classList.contains("active")) {
        subitem[j].classList.toggle("active");
      }
    }
    this.classList.toggle("active");

    //Ajusta o texto dos itens mais visitados
    var mostVisited = document.getElementById("most-visited").textContent;
    if (mostVisited.includes("(")) {
      mostVisited = mostVisited.substring(0, mostVisited.indexOf("(") - 1);
    }
    mostVisited += " (" + this.textContent + ")";
    document.getElementById("most-visited").innerHTML = mostVisited;
  });
}

function create() {
  let name = document.getElementById("product_name").value;
  if (name === "") {
    alert("O campo nome é inválido!\nO nome do produto não pode ser vazio");
    return;
  }

  let description = document.getElementById("product_description").value;
  if (description === "") {
    alert("O campo descrição é inválido!\nA descrição do produto não pode ser vazia");
    return;
  }

  let category = document.getElementById("product_category").value;
  if (category === "") {
    alert("O campo categoria é inválido!\nA categoria do produto não pode ser vazia");
    return;
  }

  let price = document.getElementById("product_price").value;
  if (price === "") {
    alert("O campo preço é inválido!\nO preço do produto não pode ser vazio");
    return;
  }
  if (price <= 0) {
    alert("O campo preço é inválido!\nO preço do produto deve ser maior que zero");
    return;
  }

  let used = document.getElementById("product_state_used").checked;
  let almost_new = document.getElementById("product_state_almost_new").checked;
  let new_ = document.getElementById("product_state_new").checked;
  if (used == false && almost_new == false && new_ == false) {
    alert("É necessário selecionar o estado do produto!");
    return;
  }

  alert("Parabéns!\nSeu produto foi anunciado com sucesso!");

  document.getElementById("product_name").value = "";
  document.getElementById("product_description").value = "";
  document.getElementById("product_category").value = "";
  document.getElementById("product_price").value = "";
  document.getElementById("product_state_used").checked = false;
  document.getElementById("product_state_almost_new").checked = false;
  document.getElementById("product_state_new").checked = false;
}