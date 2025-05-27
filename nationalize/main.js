const form = document.getElementById('id')
const nameInput = document.getElementById('name-input')
const button = document.querySelector("button")
const resultBox = document.getElementById('output')
const getCountryNames = new Intl.DisplayNames(["en"], { type: "region" });


button.addEventListener('click', async (e) => {
    e.preventDefault();
    const inputedValue = nameInput.value
    if (inputedValue === '') {
        resultBox.textContent = 'Input a name please.';
        return;
    }
    try {
        const response = await fetch(`https://api.nationalize.io/?name=${inputedValue}`);
        if (!response.ok) {
            resultBox.textContent = 'Error fetching data.';
            return;
        }
        const data = await response.json();
        if (!data.country || data.country.length === 0) {
            resultBox.textContent = `No country predictions found for "${inputedValue}".`;
            return;
        }
        const listItems = data.country.map(item => {
            const countryName = getCountryNames.of(item.country_id);
            const probability = (item.probability * 100).toFixed(2);
            return `<li>${countryName} - ${probability}%</li>`;
        });
        resultBox.innerHTML = `${inputedValue} is likely used in:<ul>${listItems.join('')}</ul>`;
    } catch (error) {
        resultBox.textContent = 'An error occurred. Try again.';
    }
});

