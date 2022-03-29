function check_length(id, min_length, max_length, index_list_error) {
    let div_right = document.querySelector(`.box-${id}`);
    let new_element = document.createElement("p");
    new_element.innerHTML = `${id} cần phải có độ dài từ ${min_length} đến ${max_length} kí tự`;
    new_element.style.color = 'red';
    new_element.style.fontSize = '12px';
    new_element.style.margin = '2px 0 0 22%';
    document.getElementById(`${id}`).addEventListener('blur', function() {
        if (this.value.length > 0 && (this.value.length < min_length || this.value.length > max_length)) {
            this.style.color = "red";
            this.style.borderColor = "red";
            list_error[index_list_error] = false;
            div_right.appendChild(new_element);
        } else {
            this.style.color = "black";
            this.style.borderColor = "black";
            list_error[index_list_error] = true;
            div_right.removeChild(new_element);
        }
    });
}

function check_type(id, value_check, message, index_list_error){
	let div_right = document.querySelector(`.box-${id}`);
	let new_element = document.createElement("p");
	new_element.innerHTML = `${id} ${message}`;
	new_element.style.color = 'red';
	new_element.style.fontSize = '12px';
	new_element.style.margin = '2px 0 0 22%';
	document.getElementById(`${id}`).addEventListener('blur', function(){
		if(this.value.length>0 && !value_check.test(this.value)){
			this.style.color = "red";
			this.style.borderColor = "red";
			list_error[index_list_error] = false;
			div_right.appendChild(new_element);
		}
		else{
			this.style.color = "black";
			this.style.borderColor = "black";
			list_error[index_list_error] = true;
			div_right.removeChild(new_element);
		}
	});
}

function onlyOne(checkbox) {
    let checkboxes = document.getElementsByName('language')
    let atLeastOneChecked = false;
    checkboxes.forEach((item) => {
        if (item !== checkbox)
        	item.checked = false;
    });

    checkboxes.forEach((item) => {
        if (item.checked === true)
        	atLeastOneChecked = true;
    });

	if(atLeastOneChecked === true) {
		checkboxes.forEach((item) =>{
			item.required = false;
		});
	}
	else{
		checkboxes.forEach((item) =>{
			item.required = true;
		});
	}
}

function check_error(){
	if(list_error.includes(false)){
		alert("Bạn cần nhập đúng thông tin theo yêu cầu");
		return false;
	}
	return true;
}

let list_error = [false,false,false,false,false];

let check_alphabates = /^[a-zA-Z]+$/;
let message_alphabates = 'chỉ được phép chứa các chữ cái a-z hoặc A-Z';
let check_numeric = /^[0-9]+$/;
let message_numeric = 'chỉ được phép chứa các số 0-9';
let check_email = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,6}/igm;
let message_email = 'email không hợp lệ';

check_length('user-id',5,12,0);
check_length('password',7,12,1);
check_type('name', check_alphabates, message_alphabates,2);
check_type('zip-code', check_numeric, message_numeric,3);
check_type('email', check_email, message_email,4);