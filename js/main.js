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