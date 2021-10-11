const container = document.getElementById('container')
container.addEventListener('input', percentage);

function percentage(){
  const amount = Number(document.getElementById('amount').value);
  const percent = document.getElementById('range').value;
  const num = document.getElementById('num')

  const result = (amount / 100) * percent;
  let value = result.toFixed(2)

  num.innerHTML = value;

  let newResult = document.getElementById('per');
  newResult.innerHTML = percent + '%';
}