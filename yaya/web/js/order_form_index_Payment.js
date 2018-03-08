var order_form_index_Payment_ds2 = document.getElementsByClassName('order_form_index_Payment_ds2')[0];
var order_form_index_Payment_d6_d1 = document.getElementsByClassName('order_form_index_Payment_d6_d1')[0];
var order_form_index_Payment_d6_d2 = document.getElementsByClassName('order_form_index_Payment_d6_d2')[0];
var order_form_index_Payment_as4 = document.getElementsByClassName('order_form_index_Payment_as4')[0];
var order_form_index_Payment_as5 = document.getElementsByClassName('order_form_index_Payment_as5')[0];
order_form_index_Payment_as4.onclick = function(){
	order_form_index_Payment_d6_d1.className = "order_form_index_Payment_on";
	order_form_index_Payment_d6_d2.className = "";
	order_form_index_Payment_as4.style.border = "1px solid #F3610B";
	order_form_index_Payment_as5.style.border = "1px solid #ccc";
}
order_form_index_Payment_as5.onclick = function(){
	order_form_index_Payment_d6_d1.className = "";
	order_form_index_Payment_d6_d2.className = "order_form_index_Payment_on";
	order_form_index_Payment_as5.style.border = "1px solid #F3610B";
	order_form_index_Payment_as4.style.border = "1px solid #ccc";
}
