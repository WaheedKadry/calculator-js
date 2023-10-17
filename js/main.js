// clear All Is Not Available Eror btn ( C )
function clear() {
    document.form.textview.value = '';
}
//========

function insert(num) {
  let inpt = document.form.textview.value;
//   console.log(inpt);
  let lastChar = inpt[inpt.length - 1];
  if (inpt.length < 30) {
    if (!isNaN(lastChar) || lastChar == null || !isNaN(num)) {
      document.form.textview.value = inpt + num;
    } else if (num != lastChar) {
      document.form.textview.value = inpt.replace(lastChar, num);
    }
  }
}
function equal() {
    let inpt = document.form.textview.value;
    if(inpt) {
        document.form.textview.value = eval(inpt)
    }
}
function back() {
    let inpt = document.form.textview.value
    document.form.textview.value = inpt.substring(0, inpt.length -1)
}