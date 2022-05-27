class Bank {
    static getAccountDetails() {
        var accountDetails = {
            1001: { name: "user1", accno: 1001, pin: 4387, password: "userone", balance: 3000 },
            1002: { name: "user2", accno: 1002, pin: 1234, password: "usertwo", balance: 2500 },
            1003: { name: "user3", accno: 1003, pin: 4895, password: "userthree", balance: 5000 },
            1004: { name: "user4", accno: 1004, pin: 2589, password: "userfour", balance: 8900 },
            1005: { name: "user5", accno: 1005, pin: 2555, password: "userfive", balance: 10000 },
        }
        return accountDetails
    }
    static login(){
        var acno=document.querySelector("#acno").value;
        var password=document.querySelector("#pwd").value;
        let data=Bank.getAccountDetails()
        try{
            if(isNaN(acno)) throw "not a valid number";
        }catch(err)
        {
            alert(err)
        }
        if (acno in data)
        {
            let pwd=data[acno].password;
            if(pwd==password)
            {
                alert("LOGIN SUCCESSFULL");
                window.location.href="banknav.html";
            }
            else{
                alert("INVALID PASSWORD");
            }
        }
       else{
           alert("USER DOSEN'T EXIST")
       }     
    }
    static deposit(){
        var accnum=document.querySelector("#acno").value;
        var pinnum=document.querySelector("#pin").value;
        var amount=Number(document.querySelector("#amt").value);
        var data=Bank.getAccountDetails();
        if(accnum in data)
        {
            let mpin=data[accnum].pin;
            if(pinnum==mpin)
            {
                data[accnum].balance += amount;
                alert("AMOUNT HAS BEEN CREDITED");
                alert(data[accnum].balance);
            }
        }
       else
       {
          alert("INCORRECT ACCOUNT DETAILS");
       }
    }
    static withdraw(){
        var waccnum=document.querySelector("#wacno").value;
        var wpinnum=document.querySelector("#wpin").value;
        var wamount=Number(document.querySelector("#wamt").value);
        var data=Bank.getAccountDetails();
        if(waccnum in data)
        {
            let wpin=data[waccnum].pin;
            if(wpinnum==wpin)
            {
                data[waccnum].balance -= wamount;
                alert("AMOUNT HAS BEEN DEBITED");
                alert(data[waccnum].balance);
            }
        }
       else
       {
          alert("INCORRECT ACCOUNT DETAILS");
       }
    }
       static viewbal() {
        var x = document.getElementById("acno").value;
        var data = Bank.getAccountDetails();
        if (x in data) {
            let dname = data[x].name;
            let dbal = data[x].balance;
            document.getElementById('dname').innerHTML = "Hello, " + dname + "!";
            document.getElementById('dbal').innerHTML = "Your current balance is RS" + dbal + ".";
        }
    }
}


