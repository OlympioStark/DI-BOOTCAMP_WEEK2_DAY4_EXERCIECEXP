/* Exercice 1 */

// Part One
function infoAboutMe() {
    console.log("My name is Chris")
}

infoAboutMe()

//Part Two
function infoAboutPerson(personName, personAge, personFavoriteColor) {
    console.log(`Mon nom est ${personName} et j'ai ${personAge} ans. Ma couleur préférée ${personFavoriteColor}`)
}

infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")

/* Exercice 2 */

function calculateTip() {
    let facture = prompt("Enter your facture", )
    let tip
    if (facture < 50) {
        tip = (facture * 20) / 100
        console.log(tip)
    } else if (facture >= 50 && facture <= 200) {
        tip = (facture * 15) / 100
        console.log(tip)
    } else {
        tip = (facture * 10) / 100
        console.log(tip)
    }

}

calculateTip()

/* Exercice 3 */

function isDivisible() {
    let sum = 0
    for (let i = 0; i < 500; i++) {
        if (i % 23 === 0) {
            console.log(i)
            sum = sum + i
        }
    }
    console.log("la somme des nombres divisible par 23 est : ", sum)

}
isDivisible()

// Bonus : Ajoutez un diviseur de paramètre à la fonction.
function isDivisible(divisor) {
    let sum = 0
    for (let i = 0; i < 500; i++) {
        if (i % divisor === 0) {
            console.log(i)
            sum = sum + i
        }
    }
    console.log(`la somme des nombres divisible par ${divisor} est: ${sum}`)

}
isDivisible()

/* Exercice 4 */

// Ajoutez les objets stocket prices à votre fichier js.
const stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
}

const prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
}

// Créez un tableau appelé shoppingList avec les éléments suivants : "banane", "orange" et "pomme". Cela signifie que vous avez 1 banane, 1 orange et 1 pomme dans votre panier
const shoppingList = ["banana", "orange", "apple"]

// Créez une fonction appelée myBill() qui ne prend aucun paramètre.
function myBill() {
    // const item = shoppingList[0];
    for (const item of shoppingList) {
        const quantityInStock = stock[item]

        if (quantityInStock > 0) {
            const price = prices[item]
            console.log("Le pix de ", item, " est ", price)
            console.log("Et nous avons en stock : ", stock[item])
            stock[item] = stock[item] - 1
            console.log("La nouvelle quantité en stock est : ", stock[item])
        } else {
            console.log("Il n'y a pas de ", item, " en stock")
        }
    }
}

myBill()


/* Exercice 5 */

// Créez une fonction nommée changeEnough(itemPrice, amountOfChange) qui reçoit deux arguments:
//     un prix d 'article
// et un tableau représentant le montant de la monnaie dans votre poche.
function changeEnough(itemPrice, amountOfChange) {
    // itemPrice : number
    // amountOfchange : array
    let myPrice = 0
    let amountArray = [0.25, 0.1, 0.05, 0.01];
    for (let i = 0; i < amountArray.length; i++) {
        myPrice += (amountArray[i] * amountOfChange[i]);
    }

    if (myPrice >= itemPrice) {
        return true;
    }
    return false;
}

changeEnough(4.25, [25, 20, 5, 0])



// Dans la fonction, déterminez si vous pouvez ou non vous permettre l 'article.
// Si la somme du changement est supérieure ou égale au prix de l 'article (c'
// est - à - dire que cela signifie que vous pouvez vous permettre l 'article), la fonction doit renvoyer true
// Si la somme du changement est inférieure au prix de l 'article (c'
// est - à - dire que cela signifie que vous ne pouvez pas acheter l 'article), la fonction doit renvoyer false

// Le changement sera toujours représenté dans l 'ordre suivant : quarts, dimes, nickels, pennies.

/* Exercice 6 */

// Définissons la fonction hotelCost()
function hotelCost() {
    let numberOfNight;
    do {
        numberOfNight = prompt("How many night do you spent in our hotel? :");
    } while (numberOfNight.length == 0 || isNaN(numberOfNight))

    return Number(numberOfNight) * 140;
}

hotelCost();

// Définissons la fonction planeRideCost()
function planeRideCost() {
    let userDestination;
    do {
        userDestination = prompt("What is your destination : ");
    }
    while (userDestination.length == 0 || !isNaN(userDestination))

    if (userDestination === "Londres") {
        return 183;
    } else if (userDestination === "Paris") {
        return 220;
    }
    return 300;
}

// Définissons la fonction rentalCarCost()
function rentalCarCost() {

    let numberOfCarLocationDay;
    do {
        numberOfCarLocationDay = prompt("How many day for location a car :");
    } while (numberOfCarLocationDay.length == 0 || isNaN(numberOfCarLocationDay))

    if (numberOfCarLocationDay > 10) {
        let priceToReduce = numberOfCarLocationDay * 40 * 0.05;
        return numberOfCarLocationDay * 40 - priceToReduce;
    }
    return Number(numberOfCarLocationDay) * 40;
}

// Définissons la fonction totalVacationCost()
function totalVacationCost() {
    return hotelCost() + planeRideCost() + rentalCarCost();
}

totalVacationCost();

/* Exercice 7 */