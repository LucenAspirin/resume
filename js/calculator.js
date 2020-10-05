const technologiesSelect = document.querySelector(
  '#calculator-form-technologies',
);

const technologiesMultiSelect = new Choices(technologiesSelect, {
  allowSearch: false,
  silent: false,
  renderChoiceLimit: -1,
  maxItemCount: -1,
  removeItems: true,
  removeItemButton: true,
  editItems: false,
  duplicateItemsAllowed: false,
  delimiter: ',',
  paste: true,
  searchEnabled: false,
  searchChoices: true,
  searchResultLimit: -1,
  position: 'auto',
  resetScrollPosition: true,
  shouldSort: true,
  shouldSortItems: false,
  placeholder: true,
  noChoicesText: 'No available options',
  itemSelectText: 'Click to select',
  classNames: {
    containerInner: 'choices__inner tech-input-container',
    input: 'choices__input',
  },
});

const calculatorForm = document.querySelector('.calculator-form');
calculatorForm.addEventListener('submit', function (event) {
  event.preventDefault();
  // selector
  const websiteTypeSelect = document.querySelector('#website-type');

  const websiteCard = document.querySelector(
    '#calculator-form-input-cart input:checked',
  );
  const websiteReception = document.querySelector(
    '#calculator-form-input-reception input:checked',
  );
  // values

  const websiteTypeValue = extractPriceFromValue(websiteTypeSelect.value);
  const technologiesValue = getTechnologiesSum(
    technologiesMultiSelect.getValue(),
  );
  const websiteCardValue = convertCartOptionToPrice(websiteCard.value);
  const websiteReceptionValue = websiteReception.value;

  console.log(websiteTypeValue);
  console.log(technologiesValue);
  console.log(websiteCardValue);
  console.log(websiteReceptionValue);
});
function getTechnologiesSum(technologiesArr) {
  let totalSum = 0;

  technologiesArr.forEach(function (tech) {
    totalSum = totalSum + extractPriceFromValue(tech.value);
  });

  return totalSum;
}
function convertCartOptionToPrice(option) {
  if (option === 'yes') {
    return 300;
  }
  return 0;
}

function extractPriceFromValue(str) {
  const price = str.match(/:\d+/);

  if (price) {
    return Number(price[0].slice(1)) || 0;
  }

  return 0;
}
