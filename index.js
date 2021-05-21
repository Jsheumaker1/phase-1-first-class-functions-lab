// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']

function returnFirstTwoDrivers(arrayOfDrivers){
    let firstTwoDrivers = drivers.slice (0,2);
    return firstTwoDrivers
}

function returnLastTwoDrivers (arrayOfDrivers){
    let lastTwoDrivers= drivers.slice (2)   
    return lastTwoDrivers
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(num) {
    return function fareMultiplier(fare){
        return (num*fare)
    }
}

const fareDoubler = createFareMultiplier (2)

const fareTripler = createFareMultiplier (3)

function selectDifferentDrivers (arrayOfDrivers,cb){
    return cb ()
    
}
