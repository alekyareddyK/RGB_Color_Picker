const label_r=document.createElement("p");
document.querySelector('.block1').appendChild(label_r);
label_r.innerHTML=" 115 ";
label_r.style.margin="10px";

const label_g=document.createElement("p");
document.querySelector('.block1').appendChild(label_g);
label_g.innerHTML="185";
label_g.style.margin="10px";

const label_b=document.createElement("p");
document.querySelector('.block1').appendChild(label_b);
label_b.innerHTML="113";
label_b.style.margin="10px";


  const setColor = function() {
      let red = document.getElementById("red").value;
      let green = document.getElementById("green").value;
      let blue = document.getElementById("blue").value;

      const color = `rgb(${red}, ${green}, ${blue})`;

      document.body.style.background = color;

      label_r.innerHTML=`${red}`;
      label_g.innerHTML=`${green}`;
      label_b.innerHTML=`${blue}`;

  };

  document.getElementById("red").addEventListener("input", setColor);
  document.getElementById("green").addEventListener("input", setColor);
  document.getElementById("blue").addEventListener("input", setColor);