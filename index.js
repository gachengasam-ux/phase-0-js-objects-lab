//Write your code here



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

// atendee object
const attendee = {
  attendeeId: `T001`,
  name: `Alice Smith`,
  event: `JavaScript`,
  ticketType: `VIP`,
  ticketPrice: 150
};

// logAttendeeName function
function logAttendeeName() {
  console.log(attendee.name);
};

// logTicketPrice function
function logTicketPrice() {
  console.log(attendee.ticketPrice);
};

// updateTicketType function
function updateTicketType(newType) {
  attendee.ticketType = newType;
};

// updateTicketPrice function
function updateTicketPrice(newPrice) {
  attendee.ticketPrice = newPrice;
};

// removeEventProperty function
function removeEventProperty() {
  delete attendee.event;
};

// addCheckedInProperty function
function addCheckedInProperty() {
  attendee.checkedIn = true;
};

