let rect = document.getElementById("carre");
rect.style.width = '500px';
rect.style.height = '500px';
rect.style.backgroundColor = 'black';
rect.style.display = "grid";
rect.style.margin = "0 auto";

let sous = document.getElementById("sous_carre");
sous.style.width = '300px';
sous.style.height = '300px';
sous.style.backgroundColor = 'yellow';
sous.style.margin = '0 auto';
sous.style.marginLeft = '200px';
sous.style.marginTop = '200px';
sous.style.position ="absolute";

let tiret = document.getElementById("trait");
tiret.style.backgroundColor = "yellow";
tiret.style.width = "300px";
tiret.style.height = "750px"
tiret.style.clipPath= "polygon(0 0, 0 1%, 100% 40%, 100% 38%)";

let ps = document.getElementById("pousse");
ps.style.marginLeft = "130px";
ps.style.fontSize = "9rem";
ps.style.fontWeight = "bold";

