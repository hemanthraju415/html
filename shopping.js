var cart=[];

function addtocart(button)
{
	cart.push(localStorage.getItem("cart"));
	var row=button.closest('tr');
	cart.push([row.cells[0].innerText],row.cells[1].innerText)
	localStorage.setItem("cart",cart);
}
function viewcart()
{
	console.log(cart);
	var c=document.querySelector("div");
	console.log(c);
	var p = document.createElement('p');
	p.setAttribute('id','name')
	c.appendChild(p);
	document.getElementById("name").innerHTML=cart;
}