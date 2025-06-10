
  let clickdrop =  document.getElementById("#clickdrop")
  for (const key in clickdrop) {
   
      const element = clickdrop[key];
      
      console.log(element)
   
  }

  console.log(clickdrop)

let Handdrop = () =>
  {

    alert("HI");

  }

  clickdrop.addEventListener("click",Handdrop())