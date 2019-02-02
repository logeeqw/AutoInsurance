/**
 * @author Logee, Quinn
 * @version 0.01
 *@summary determines auto insurance
 * @todo nothing
 */

const PROMPT = require(`readline-sync`);
let lastName, firstName;
let policyNum, birthYear, dueDate, accidentNum, age, agePrice, accidentPrice, totalPrice;

/**
 * @method
 * @desc The dispatch method for the program
 * @return (null)
 */
function main() {
    setPolicyNum();
    setDueDate();
    setFirstName();
    setLastName();
    setBirthYear();
    setAccidentNum();
    setAge();
    setAgePrice();
    setAccidentPrice();
    setTotalPrice();
    printTotal();
}

main();

/**
 * @method
 * @desc sets customer's first name
 * @returns null
 */
function setFirstName() {
    firstName = PROMPT.question(`\nPlease enter your first name: `)
}

/**
 * @method
 * @desc sets customer's last name
 * @returns null
 */
function setLastName() {
    lastName = PROMPT.question(`\nPlease enter your last name: `)
}

//what is the policy number supposed to do?
/**
 * @method
 * @desc sets the policy number
 * @returns null
 */
function setPolicyNum() {
    policyNum = PROMPT.question(`\nPlease enter which policy number you would like: `)
}

/**
 * @method
 * @desc sets customer's birth year
 * @returns null
 */
function setBirthYear() {
    birthYear = PROMPT.question(`\nPlease enter your birth year: `)
}

/**
 * @method
 * @desc sets the due date
 * @returns null
 */
function setDueDate() {
    dueDate = PROMPT.question(`\nPlease enter your premium due date (mm/dd/yy): `)
}

/**
 * @method
 * @desc sets the number of at fault accidents the customer has had in the past three years
 * @returns null
 */
function setAccidentNum() {
    accidentNum = PROMPT.question(`\nPlease enter the number of at fault accidents you have had in the last three years: `)
}

/**
 * @method
 * @desc sets customer's approximate age
 * @returns null
 */
function setAge() {
    const CURRENT_YEAR = 2019;
    age = CURRENT_YEAR - birthYear;
}

/**
 * @method
 * @desc sets price based on age
 * @returns null
 */
function setAgePrice() {
    const BASE_PRICE = 100, YOUNG = 20, MIDDLE = 10, OLD = 30;
    agePrice = 0;
    if (age > 0)
    if (age > 15 && age < 30){
        agePrice = BASE_PRICE + YOUNG;
    }
    else if (age > 30 && age < 45){
        agePrice = BASE_PRICE + MIDDLE;
    }
    else if (age >60){
        agePrice = BASE_PRICE + OLD;
    }
}

/**
 * @method
 * @desc sets price based accidents
 * @returns null
 */
function setAccidentPrice() {
    const ACCIDENT_PRICE = 50;
    accidentPrice = Number(ACCIDENT_PRICE * accidentNum);

}

/**
 * @method
 * @desc sets the total monthly insurance premium
 * @returns null
 */
function setTotalPrice() {
    totalPrice = accidentPrice + agePrice;
}

/**
 * @method
 * @desc prints the total
 * @returns null
 */
function printTotal() {
    console.log(`\nHello ${firstName} ${lastName}, you are ${age} years old, and your total monthly insurance premium is: $${totalPrice} `)
}

