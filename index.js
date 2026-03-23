//Write your code here
// attendee object
const attendee = {
  attendeeId: "T001",
  name: "Alice Smith",
  event: "JavaScript Conference",
  ticketType: "VIP",
  ticketPrice: 150.00
};

// logAttendeeName function
function logAttendeeName(attendee) {
  console.log(attendee.name);
}

// logTicketPrice function
function logTicketPrice(attendee) {
  console.log(attendee.ticketPrice);
}

// updateTicketType function
function updateTicketType(attendee, newType) {
  attendee.ticketType = newType;
}

// updateTicketPrice function
function updateTicketPrice(attendee, newPrice) {
  attendee.ticketPrice = newPrice;
}

// removeEventProperty function
function removeEventProperty(attendee) {
  delete attendee.event;
}

// addCheckedInProperty function
function addCheckedInProperty(attendee) {
  attendee.checkedIn = true;
}



//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};

