// Lightning Exercise 1: Write a factory function that creates an object that represents a doctor. The function should accept three arguments.

// Doctor's name
// Specialty (Oncologist, pediatrician, etc...)
// Address of practice


const createDoctor = (fname, lname, specialty, number, name, city, state, zip) => {
    return {
        toString() {
            return `<p> ${this.name.first} ${this.name.last}<p>Specialty: ${this.specialty} Doctor </p>
            <p> ${this.address.streetNumber} ${this.address.streetName}</p> ${this.address.city},
           ${this.address.state}. ${this.address.zip}`
        },
        name: {
            first: fname,
            last: lname,
        },
        specialty: specialty,
        address: {
            streetNumber: number,
            streetName: name,
            city: city,
            state: state,
            zip: zip


        }
    }
}


const doctorContainer = document.querySelector("#doctor")

const render = (doctorString) => {
    doctorContainer.innerHTML += doctorString
}

const doc = createDoctor("Robert",
    "Greenburge",
    "Ortahpedic",
    "4217",
    "Hospital Way",
    "Smyrna",
    "TN",
    "37167")

render(doc)

// Lightning Exercise 2: Write a factory function that creates an object that represents a pet. The function should accept two arguments.

// Pet name
// Pet breed
// Invoke the factory function 3 times and place each animal in an array stored in a variable named BowWowKennels

const BowWowKennels = []

const createPet = (name, breed) => 
    ({
       "petName": name,
        "petBreed": breed
    })

const duke = createPet("Duke", "cat")
BowWowKennels.push(duke)

const otto = createPet("Otto", "cat")
BowWowKennels.push(otto)

const peppie = createPet("Peppie", "skunk")
BowWowKennels.push(peppie)




console.log(BowWowKennels)

