
import React,{useState} from 'react';

function Payment() {
  const [amount, setamount] = useState('');

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(amount === ""){
    alert("please enter amount");
    }else{
      var options = {
        key: "rzp_test_i0ZtR7b1ewKGEP",
        key_secret:"pY0wK9YYPd4XXL1HT5Rg1Gl0",
        amount: amount *100,
        currency:"INR",
        name:"ZERODHA WALLET",
        description:"for testing purpose",
        handler: function(response){
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name:"Aditya",
          email:"aditya@gmail.com",
          contact:"7904425033"
        },
        notes:{
          address:"Razorpay Corporate office"
        },
        theme: {
          color:"#3399cc"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  }
  return (
    <div className="App p-3 text-center">
     <h2>Add to your zerodha wallet</h2>
     <br/>
     <input type="text" Placeholder='Enter Amount'value={amount}onChange={(e)=>setamount(e.target.value)} />
     <br/><br/>
     <button onClick={handleSubmit}>submit</button>
    </div>
  );
}

export default Payment;