const buyTicketBtn = document.getElementById("buy-ticket-btn");
const ticketAvailability = document.getElementById("ticket-availability");

let availableTickets = 100;

// Change this value to set the initial number of available tickets

buyTicketBtn.addEventListener("click", function() {
  if (availableTickets > 0) {
    availableTickets--;
    ticketAvailability.textContent = `Available Tickets: ${availableTickets}`;
  } else {
    alert("this show is sold out!");
  }
});
