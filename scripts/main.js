// Practice: Doctors
// Lightning Exercise 1: Write a factory function that creates an object that represents a doctor. The function should accept three arguments.
// Doctor's name
// Specialty (Oncologist, pediatrician, etc...)
// Address of practice

const createDoctor = (docName, specialty, docAddress) => {
    return {
        "doctorName": docName,
        "doctorSpecialty": specialty,
        "address": docAddress
    }
}

// Lightning Exercise 2: Write a factory function that creates an object that represents a pet. The function should accept two arguments.

// Pet name
// Pet breed
// Invoke the factory function 3 times and place each animal in an array stored in a variable named BowWowKennels

const bowWowKennels = []
const createPet = (thisIsPetName, thisIsPetBreed) => {
    return {
        "petName": thisIsPetName,
        "petBreed": thisIsPetBreed
    }
}

const pet1 = createPet("BeeBee", "Poodle")
const pet2 = createPet("Abby", "Labradoodle")
const pet3 = createPet("GG", "Golden Retriever")

bowWowKennels.push(pet1, pet2, pet3);
console.log(bowWowKennels)



// Factory function lightning exercise:
// ## Functions can perform actions, even calling other functions

// 1. Complete the function below called `contactFactory`:
// * `contactFactory` returns an object with three properties: name, title, email.
// * Make `contactFactory` take a single argument, which will be treated as an array.
// * In the body of the function, loop over that array to set the values of the object's properties.

// ```function contactFactory(contactData) {
//   let contact = {
//     name: null,
//     title: null,
//     email: null
//   }
//   for (let i=0; i < contactData.length; i++) {
//      ///add each arry item to contact
//    }
//   return contact
// }```
// 2. Complete the second function called `createContact`:
// * createContact takes three arguments: name, title, email.
// * Have the function place the three arguments into an array and pass that array to the `contactFactory` by calling it.

// ```function createContact(name, title, email) {
//   let newContact = /// pass name, title, email to contactFactory as an array
//   console.table(Contact)
// }```
// 3. Execute createContact and pass in a name, a title, and an email address. Check out your dev tools console for the resulting table of data.


const createAmplifier = function (volume = 11, color = "Black") {
    return {
        "type": "Guitar Amplifier",
        "maximumVolume": volume,
        "caseColor": color
    }
}

console.log(createAmplifier());