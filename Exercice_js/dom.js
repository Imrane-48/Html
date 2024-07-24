function modif_paragraphe() {
    
    let paragraphe = document.getElementById("premier");
    paragraphe.innerHTML = paragraphe.innerHTML.replace("original", "<i>original</i>");
  }

  function centrage_h1() {
    let titre = document.getElementsByTagName("h1")[0];
    titre.setAttribute("align", "center");
  }

  document.getElementById("titre").addEventListener("click", modif_paragraphe);
  document.getElementById("premier").addEventListener("click", centrage_h1);