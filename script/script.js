let sing_up_form_children = document.forms.sing_up_form.children;
console.log(sing_up_form_children[10].href);
let sing_up_form = document.forms.sing_up_form.elements;
var count = 0;
console.log(sing_up_form);


let data_input = {
    first_name: false,
    second_name: false,
    email_address: false,
    select_position: false,
}
// 
sing_up_form.first_name.onfocus = function () {
    sing_up_form.agree.checked = false;
    sing_up_form.sing_up.disabled = true;
}
sing_up_form.second_name.onfocus = function () {
    sing_up_form.agree.checked = false;
    sing_up_form.sing_up.disabled = true;
}
sing_up_form.email_address.onfocus = function () {
    sing_up_form.agree.checked = false;
    sing_up_form.sing_up.disabled = true;
}
sing_up_form.select_position.onfocus = function () {
    sing_up_form.agree.checked = false;
    sing_up_form.sing_up.disabled = true;
}
// 
sing_up_form.first_name.onblur = function () {
    if (sing_up_form.first_name.value.length > 0) {
        data_input.first_name = true;
    } else {
        data_input.first_name = false;
    }
}
sing_up_form.second_name.onblur = function () {
    if (sing_up_form.second_name.value.length > 0) {
        data_input.second_name = true;
    } else {
        data_input.second_name = false;
    }
}
sing_up_form.email_address.onblur = function () {
    if (sing_up_form.email_address.value.length > 0) {
        data_input.email_address = true;
    } else {
        data_input.email_address = false;
    }
}
sing_up_form.select_position.onclick = function () {
    if (sing_up_form.select_position.value != "choose") {
        data_input.select_position = true;
    } else {
        data_input.select_position = false;
    }
}
sing_up_form.agree.onclick = function () {
    if (sing_up_form.agree.checked == true) {
        console.log(data_input);

        for (const property in data_input) {
            if (data_input[property] == true) {
                count++;
            }
        }
        console.log(count);

        if (count == 4) {
            sing_up_form.sing_up.disabled = false;
            count = 0;
        } else {
            sing_up_form.sing_up.disabled = true;
            count = 0;
        }
    } else if (sing_up_form.agree.checked == false) {
        sing_up_form.sing_up.disabled = true;
    }
}
// 
sing_up_form.sing_up.onclick = function () {
    if (sing_up_form.man.checked == true) {
        let avatar = document.getElementById("avatar");
        let wrapper_user = document.getElementById("wrapper_user");
        let form_wrapper = document.getElementById("form_wrapper");
        avatar.style.background = `url(img/man.ico) silver`;
        avatar.style.backgroundPosition = "bottom";
        avatar.style.backgroundRepeat = "no-repeat";
        avatar.style.backgroundSize = "90%";
        form_wrapper.style.display = "none";
        wrapper_user.style.display = "block";


        let name = document.getElementById("name");
        let email = document.getElementById("email");
        let position = document.getElementById("position");
        name.textContent = sing_up_form.first_name.value + ' ' + sing_up_form.second_name.value;
        email.textContent = sing_up_form.email_address.value;
        position.textContent = sing_up_form.select_position.value;
    } else if (sing_up_form.woman.checked == true) {
        let avatar = document.getElementById("avatar");
        let wrapper_user = document.getElementById("wrapper_user");
        let form_wrapper = document.getElementById("form_wrapper");
        avatar.style.background = `url(img/woman.ico) silver`;
        avatar.style.backgroundPosition = "bottom";
        avatar.style.backgroundRepeat = "no-repeat";
        avatar.style.backgroundSize = "90%";
        form_wrapper.style.display = "none";
        wrapper_user.style.display = "block";


        let name = document.getElementById("name");
        let email = document.getElementById("email");
        let position = document.getElementById("position");
        name.textContent = sing_up_form.first_name.value + ' ' + sing_up_form.second_name.value;
        email.textContent = sing_up_form.email_address.value;
        position.textContent = sing_up_form.select_position.value;
    }

    sing_up_form.first_name.value = "";
    sing_up_form.second_name.value = "";
    sing_up_form.email_address.value = "";
    sing_up_form.man.checked = "true";
    sing_up_form.select_position.value = "choose";
    sing_up_form.agree.checked = false;
}

function sing_out() {
    let wrapper_user = document.getElementById("wrapper_user");
    let form_wrapper = document.getElementById("form_wrapper");
    form_wrapper.style.display = "flex";
    wrapper_user.style.display = "none";
}