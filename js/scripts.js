const Account = (function(){
  class Account {
    constructor(name, balance){
      this.name = name;
      this.balance = balance;
    }
    withdrawal(withdrawalAmount){
      if(this.balance < withdrawalAmount){
        this.balance = 0;
        return;
      }
      this.balance -= withdrawalAmount;
    }
    deposit(depositAmount){
      this.balance += depositAmount;
    }
  }
  return Account;
})();

//front-end
const updateDomBalance = function(balance){
  $("#currentBalanceDisplay").text(`Ƀ ${balance.toLocaleString()}`);
}


$(document).ready(function(){

  $("#registrationForm").submit(function(event){
    event.preventDefault();
    let fullName = $("#fullNameInput").val();
    let initialDeposit = Math.abs(Number($("#initialDepositInput").val()));

    let newAccount = new Account(fullName, initialDeposit);
    updateDomBalance(newAccount.balance);

    $("#transactButton").click(function(){
      let withdrawInput = Math.abs(Number($("#withdrawInput").val()));
      let depositInput = Math.abs(Number($("#depositInput").val()));

      newAccount.deposit(depositInput);
      newAccount.withdrawal(withdrawInput);

      updateDomBalance(newAccount.balance);

    });



  });

});
