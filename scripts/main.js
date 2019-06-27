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

// const bowWowKennels = []
// const createPet = (thisIsPetName, thisIsPetBreed) => {
//     return {
//         "petName": thisIsPetName,
//         "petBreed": thisIsPetBreed
//     }
// }

// const pet1 = createPet("BeeBee", "Poodle")
// const pet2 = createPet("Abby", "Labradoodle")
// const pet3 = createPet("GG", "Golden Retriever")

// bowWowKennels.push(pet1, pet2, pet3);
// console.log(bowWowKennels)



// Factory function lightning exercise:
// ## Functions can perform actions, even calling other functions

// 1. Complete the function below called `contactFactory`:
// * `contactFactory` returns an object with three properties: name, title, email.
// * Make `contactFactory` take a single argument, which will be treated as an array.
// * In the body of the function, loop over that array to set the values of the object's properties.



const contactFactory = (contactData) => {
    let contact = {
      name: contactData[0],
      title: contactData[1],
      email: contactData[2]
    }
    return contact;
  }

// 2. Complete the second function called `createContact`:
// * createContact takes three arguments: name, title, email.
// * Have the function place the three arguments into an array and pass that array to the `contactFactory` by calling it.

    function createContact(name, title, email) {
      let newContact = [name, title, email]
      /// pass name, title, email to contactFactory as an array
      const contact = contactFactory(newContact);
      console.table(contact)
    }

// 3. Execute createContact and pass in a name, a title, and an email address. Check out your dev tools console for the resulting table of data.
createContact("Karla", "Student", "kgalleg@gmail.com" )

console.log(contactFactory);





// const createAmplifier = function (volume = 11, color = "Black") {
//     return {
//         "type": "Guitar Amplifier",
//         "maximumVolume": volume,
//         "caseColor": color
//     }
// }

// console.log(createAmplifier());






// Didn't know what this exercise was asking me to do: 
// practice: Music Row on Chapter on Factory FUnctions 

// Your job is to sign each of these promising young music stars to the appropriate label.

// JumpStop Records works with Funk and Rap artists.
// Chatten Records works with Country and Bluegrass artists.
// Polar Records works with Pop artists.
// Create an array for each of these record labels.

const jumpStopRecords = []
const chattenRecords = []
const polarRecords = []

// Create a factory function for each possible genre (e.g. createBluegrassArtist()). Then invoke the appropriate function for each of the following artists and place the resulting object in the corresponding label array.

// and then have 5 different functions (one for each genre)  that will return an object of artist info similar to
// ```{
// name: "Joe Smith",
// age: 35,
// genre: "pop"
// }```

// genre's country, pop, funk, rap, bluegrass

const countryGenre = () => {
    return {
    artistName:"Bruce Atikins",
    artistAge: 23,
    genre: "country"
    },
    {
    artistName:"Avilee Dallas",
    artistAge: 19,
    genre: "country"   
    }
}


//^^ Bruce Atikins is a Country artist and is 23 years old 
// Jensen Brown is a Pop artist and is 20 years old
// Dre Funkz is a Funk artist and is 25 years old
// Dusta Grimes is a Rap artist and is 21 years old
// Bartholomew Danielson is a Bluegrass artist and is 23 years old
// ^^ Avilee Dallas is a Country artist and is 19 years old
// Austin Kinkaid is a Pop artist and is 22 years old
// Loyoncé Branis is a Rap artist and is 27 years old


// hey it's a bit of a repetitive exercise to help give you practice in writing factory functions. you'll start off with three empty arrays (one for each record company, and then have 5 different functions (one for each genre)  that will return an object of artist info similar to
// ```{
// name: "Joe Smith",
// age: 35,
// genre: "pop"
// }```
// once the object of artist info has been returned, you will push it into the appropriate record company array based on the genre