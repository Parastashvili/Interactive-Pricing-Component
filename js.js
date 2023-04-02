let slider = document.getElementById("range");
let output = document.getElementById("bill_amount");
let output2 = document.getElementById("bill_amount2");
let views = document.getElementById("viewers");
let toggle = document.getElementById('sale');
let billing=document.getElementById("month")
let billing1=document.getElementById("month1")
let dicounted_price = 1;


toggle.addEventListener('change', () => {
    if (toggle.checked) {
        dicounted_price = Number(0.85*12);
        billing.innerHTML=" / Yearly";
        billing1.innerHTML=" / Yearly";
        slider.onchange = count_price;
    }
    else {
        dicounted_price = Number(1);
        billing.innerHTML=" / Monthly";
        billing1.innerHTML=" / Monthly";
        slider.onchange = count_price;
    }
});

slider.onchange = count_price;

function count_price() {
    let value = Number(this.value);
    if (value == 1) {
        output.innerHTML = "$" + (8 * dicounted_price).toFixed(2);
        output2.innerHTML = "$" + (8 * dicounted_price).toFixed(2);
        views.innerHTML = 10;
    } else if (value == 2) {
        output.innerHTML = "$" + (12 * dicounted_price).toFixed(2);
        output2.innerHTML = "$" + (12 * dicounted_price).toFixed(2);
        views.innerHTML = 50;
    } else if (value == 3) {
        output.innerHTML = "$" + (16 * dicounted_price).toFixed(2);
        output2.innerHTML = "$" + (16 * dicounted_price).toFixed(2);
        views.innerHTML = 100;
    } else if (value == 4) {
        output.innerHTML = "$" + (24 * dicounted_price).toFixed(2);
        output2.innerHTML = "$" + (24 * dicounted_price).toFixed(2);
        views.innerHTML = 500;
    } else {
        output.innerHTML = "$" + (36 * dicounted_price).toFixed(2);
        output2.innerHTML = "$" + (36 * dicounted_price).toFixed(2);
        views.innerHTML = 1000;
    }
};


let slider_color=document.getElementById("range");
slider_color.oninput = function() {
    let value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, #A4F3EB 0%, #A4F3EB ' + value + '%, #fff ' + value + '%, white 100%)'
  };

