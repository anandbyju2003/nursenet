 
        function reqpayment(index,id){
            alert('Payment requested');
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
            const accept=document.getElementById('accept'+index)
            const requestPaymentButton=document.getElementById('requestPaymentButton'+index)
            const cancel=document.getElementById('cancel'+index)
            const reject=document.getElementById('reject'+index)
            reject.style.display='none'
            cancel.style.display='block'
            accept.style.display='none'
            fetch('/rejectbooking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ bookingstatus: 'rejected', bookingid: id })
            })
        }
        function cancel(index,id){
            const accept=document.getElementById('accept'+index)
            const requestPaymentButton=document.getElementById('requestPaymentButton'+index)
            const cancel=document.getElementById('cancel'+index)
            const reject=document.getElementById('reject'+index)
            reject.style.display='block'
            cancel.style.display='none'
             accept.style.display='block'
             requestPaymentButton.style.display='none'
             fetch('/cancelstatus',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({bookingid:id})
             })
        }
        function accepted(index,id){
            alert('Booking accepted')
            const accept=document.getElementById('accept'+index)
            const requestPaymentButton=document.getElementById('requestPaymentButton'+index)
            const cancel=document.getElementById('cancel'+index)
            const reject=document.getElementById('reject'+index)
            reject.style.display='none'
            cancel.style.display='block'
            accept.style.display='none'
            requestPaymentButton.style.display='block'
            fetch('/acceptbooking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ bookingstatus:'done',bookingid: id })
            })
        }       