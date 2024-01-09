const input = document.querySelector('#date');
const calculated = document.querySelector('#Calculated');
const button = document.querySelector('#btn');

function calculateAge() {
    const inputValue = input.value;

    if (inputValue) {
        const birthDay = new Date(inputValue);
        const currentDate = new Date();

        let ageYear = currentDate.getFullYear() - birthDay.getFullYear();
        let ageMonth = currentDate.getMonth() - birthDay.getMonth();
        let ageDay = currentDate.getDate() - birthDay.getDate();

        // Adjust negative values
        if (ageDay < 0) {
            const lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
            ageDay += lastMonth.getDate();
            ageMonth--;
        }

        if (ageMonth < 0) {
            ageMonth += 12;
            ageYear--;
        }

        let result = '';

        if (ageYear !== 0) {
            result += `${ageYear} Year${ageYear !== 1 ? 's' : ''}`;
            if (ageMonth !== 0 || ageDay !== 0) {
                result += ' and ';
            }
        }

        if (ageMonth !== 0) {
            result += `${ageMonth} Month${ageMonth !== 1 ? 's' : ''}`;
            if (ageDay !== 0) {
                result += ' and ';
            }
        }

        if (ageDay !== 0) {
            result += `${ageDay} Day${ageDay !== 1 ? 's' : ''}`;
        }

        calculated.innerHTML = `Your age is approximately ${result}.`;
    }
}

button.addEventListener('click', () => {
    calculateAge();
});
