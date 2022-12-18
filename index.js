const footer = document.querySelectorAll(".profile-footer") ; 
const btn  = document.querySelectorAll(".arrow") ;

for( let  i = 0 ; i< btn.length ; i++ )
{
    btn[i].addEventListener("click", (e) => {
      if (footer[i].classList.contains("clicked")) {
        footer[i].classList.remove("clicked");
        footer[i].style = "visibility : hidden ";
      } else {
        footer[i].classList.add("clicked");
        footer[i].style = "visibility : visible";
      }
    });
}
