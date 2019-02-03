document.querySelector('button').addEventListener('click', function(){
	// alert('Did u just clicked me? hunhun, I didnt, i just touch u!')
	// console.log(mul);

	user_inp = document.getElementById('product_name').value;
	product_qty = document.getElementById('product_quantity').value;
	product_pr = document.getElementById('product_price').value;

	var total = product_qty * product_pr;

	total = document.getElementById('total').innerHTML = total;





	// console.log(product_pr);
	// alert(total);
	// console.log(total);


checking(result);
})



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