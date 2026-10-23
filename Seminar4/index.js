async function getSmsCode(){
    const response= await fetch('https://bank-api-fltw.onrender.com/sms-means/auth/initiate',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ phoneNumber: '+407344434554' }),
        },
    );

    const body= await response.json();

    if(response.status===400)
    {
        console.log('Phone number was incorrect.');
        return;
    }

    if(response.status===500)
    {
        console.log('Try again later.');
        return;
    }

    console.log(body);
   
}

await getSmsCode();