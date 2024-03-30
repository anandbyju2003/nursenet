 
        function reqpayment(index,id){
           
            alert('Payment requested');
            window.location.reload()
            fetch('/requestpayment',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({bookingid:id})
            })
        }

        function rejected(index,id){
            alert('Booking Rejected')
            window.location.reload()
      
            fetch('/rejectbooking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ bookingstatus: 'rejected', bookingid: id })
            })
        }
        function cancel(index,id){
            window.location.reload()
             fetch('/cancelstatus',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({bookingid:id})
             })
        }
        function accepted(index,id){
            window.location.reload();
            fetch('/acceptbooking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ bookingstatus:'done',bookingid: id })
            })
        }       