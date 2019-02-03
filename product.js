document.querySelector('button').addEventListener('click', function(e){
	// alert('Did u just clicked me? hunhun, I didnt, i just touch u!')
	// console.log(mul);


	user_inp = document.getElementById('product_name').value; //get the qty num
	product_qty = document.getElementById('product_quantity').value; //get the price num
	product_pr = document.getElementById('product_price').value;
	e.preventDefault();
	var total = product_qty * product_pr; //multiply the qty and price
	
	total = document.getElementById('total').innerHTML = total; //show it to d span tag
	// console.log(product_pr);
	// alert(total);
	// console.log(total);
// checking(result);

});

// product_name = document.getElementById('product_name', 'product_quantity', 'product_price').value;

// function checking(product_qty, product_price){
// 	var total = product_qty + product_price;
// 	alert();


// // 	// add = document.getElementById('total').innerHTML = 'mul';

// 	return total;
// }


// var result = checking(document.getElementById('product_quantity').value * document.getElementById('product_price').value);
// console.log(result);
// var	rice = 100;
// var semo = 200;
// var stick = 300;