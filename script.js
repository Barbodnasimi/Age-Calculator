const input = document.querySelector('#date');
const calculated = document.querySelector('#Calculated');
const button = document.querySelector('#btn');

button.addEventListener('click', () => {
    const inputValue = input.value;

    if (inputValue) {
        const birthDay = new Date(inputValue);
        const currentDate = new Date();

        const ageYear = currentDate.getFullYear() - birthDay.getFullYear();
        const ageMonth = currentDate.getMonth() - birthDay.getMonth();
        const ageDay = currentDate.getDate() - birthDay.getDate();

        let result = '';

        if (ageYear !== 0) {
            result += `${ageYear} Year`;
            if (ageYear !== 1) {
                result += 's';
            }
            result += ' and ';
        }

        if (ageMonth !== 0) {
            result += `${ageMonth} Month`;
            if (ageMonth !== 1) {
                result += 's';
            }
            result += ' and ';
        }

        result += `${ageDay} Day`;

        calculated.innerHTML = result;
    }
});
