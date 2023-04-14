//Use a function to fetch data from url//
async function logJSONData () {
  const response =
  await fetch ("http://localhost:3000/films");
  const jsonData = await response.json ();
  return jsonData
}
displayFilms
async function displayFilms(){
  const container = document.getElementById ("container")
  const data = await logJSONData()
   console.log (data);
}
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
// update the number number of the tickets //
async function tickets_sold(id,tickets_sold){
await fetch(`http://localhost:3000/films/${id}`,
{
      method: "PATCH",
      body: JSON.stringify({tickets_sold:tickets_sold-1}),
      headers: {
        "Content-Type": "application/json",
      },
})
}
