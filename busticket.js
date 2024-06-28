const rows=5;
const cols=10;
let seats=[];

for(i=0;i<rows;i++){
    for(j=0;j<cols;j++){
        seats.push(String.fromCharCode(65+i) + (j+1));
    }
}


const seatMap = document.getElementById('seat-map');

seats.forEach(value => {
    const seatElement = document.createElement('div');
    seatElement.classList.add('seat');
    seatElement.textContent = value;
    seatElement.addEventListener('click', () => {
        seatElement.classList.toggle('selected');
        updateSelectedSeats();
    });
    seatMap.appendChild(seatElement);
});

function updateSelectedSeats(){
    const selectedSeats = Array.from(document.querySelectorAll('.seat.selected')).map(seat => seat.textContent);
    document.getElementById('selected-seats').value = selectedSeats.join(',');
}

const sampleBox = document.getElementById('legend');

let legend=`<span>SELECTED SEATS</span>
            <div class="seat selected" style=background-color:chartreuse></div>
            <span>AVAILABLE SEATS</span>
            <div class="seat"></div>`
sampleBox.innerHTML=legend;

document.querySelector("button").addEventListener('click',(event)=>{
    event.preventDefault();
    let display=document.getElementById('confirmation');
    let name=document.getElementById('name').value;
    let destination=document.getElementById('destination').value;
    let date=document.getElementById('date').value;
    let seatsSelected=document.getElementById('selected-seats').value;

   
    if(seatsSelected === null){
        display.innerHTML=`Please Select The Seats`;
    }
    else{
   
    display.innerHTML=`Tickets Booked :Name - ${name} And Your Destination is -${destination} on - ${date}.Your seats are ${seatsSelected}.ThankYou For Booking Tickets...Happy Journey!!!`;
}
});