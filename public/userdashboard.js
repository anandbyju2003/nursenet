function cancelBooking(id,index){
    alert('Booking Cancelled')
    fetch('/cancelbooking',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({bookingid:id})
    })
    document.getElementById('booking'+index).style.display='none'
    window.location.reload()
}

function paynow(id,index){
    alert('Payment done')
    fetch('/paynow',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({bookingid:id})
    })
    document.getElementById('booking'+index).style.display='none'
}