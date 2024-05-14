const $rangeMask = document.querySelector("#range-mask");
const $range = document.querySelector("#range");
const $amount = document.querySelector("#amount");
const $potencial = document.querySelector("#potencial");

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const min = parseInt($range.min, 10);
const max = parseInt($range.max, 10);

$rangeMask.style.setProperty("--percentage", "0%");
$range.addEventListener("input", (event) => {
  const { value } = event.target;

  const amount = parseInt(value, 10);
  const calc = amount * 5;
  const potencial = formatter.format(calc)

  const percentage = ((amount - min) / (max - min)) * 100;

  $amount.textContent = formatter.format(amount);
  $potencial.textContent = potencial;

  $rangeMask.style.setProperty("--percentage", `${percentage}%`);
});