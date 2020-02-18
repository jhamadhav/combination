"use strict"

window.onload = function () {
    document.getElementById("entry").style.width = "86vw";
    document.getElementById("input").style.opacity = "1";

}

var str_r = [], sol = [], output, input, len_r, err;

function combos_find() {

    input = document.getElementById("input").value;
    output = document.getElementById("output");
    err = document.getElementById("errorMsg");
    sol = [];
    str_r = [];
    len_r = Number(input.length);

    err.innerText = "";
    if (input.length == 0) {
        output.innerHTML = `<p>NOTE :<br> It is rearrangement of elements .<br> <br>
        - When the order <b>doesn't</b> matter, it is a <b>Combination</b><br>
        - When the order <b>does</b> matter, it is a <b>Permutation</b><br><br>
        <b>Example:</b> <br>
        <b>Input:</b> <i>ab</i> <br>
        <b>Output:</b> <i>aa</i>,<i>ab</i>,<i>ba</i>,<i>bb</i>.
    </p>`;
    } else {
        for (let i = 0; i < input.length; i++) {
            if (!str_r.includes(input[i])) {
                str_r.push(input[i]);
            }
        }
        let a = '';
        while (a.length <= len_r) {
            a += to_string(str_r);
        }
        a = a.split('');
        a = to_string(a.slice(0, len_r));
        console.log(a);
        sol.push(a);

        combos();
        display_res();
    }
}


//to convert an array into a string
function to_string(str) {
    let temp = '';
    for (let i = 0; i < str.length; i++) {
        temp += str[i];
    }
    return temp;
}

//to find all the combinations 
function combos() {

    for (let i = len_r - 1; i >= 0; i--) {

        let temp_set = [];
        //console.log(sol);
        for (let j = 0; j < sol.length; j++) {

            let sol_set = [];

            for (let k = 0; k < str_r.length; k++) {

                let temp = sol[j].split('');
                if (temp[i] != str_r[k]) {
                    temp[i] = str_r[k];
                    temp = to_string(temp);
                    sol_set.push(temp);
                }
            }
            for (let k = 0; k < sol_set.length; k++) {
                temp_set.push(sol_set[k]);
            }
        }
        for (let k = 0; k < temp_set.length; k++) {
            sol.push(temp_set[k]);
        }
    }
}

//to display the results
function display_res() {
    output.innerHTML = '';
    output.innerHTML = '<div class="tab1"> No. of combo.: ' + sol.length + '</div> ';

    let a = document.getElementsByClassName('tab_holder')[0];
    for (let i = 0; i < sol.length; i++) {
        output.innerHTML += '<div class="tab">' + sol[i] + '</div>';
    }
}
//on hitting enter
addEventListener("keydown", function (event) {

    if (event.keyCode === 13) {
        combos_find();
        event.preventDefault();
        window.location.href = "#nothing";
    } return null;
}
);