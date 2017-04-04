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
    reset(){
      this.name = "";
      this.balance = 0;
    }
  }
  return Account;
})();

//front-end
const updateDomBalance = function(balance){
  $("#currentBalanceDisplay").text(`Ƀ${balance.toLocaleString()}`);
}

const hideRegistration = function(){
  $("#registrationDisplay").hide();
  $("#titleHeader p").show();
  $("#transactionDisplay").show();
  $("#balanceDisplay").show();
}

const newRegistration = function(){
  $("#registrationDisplay").show();
  $("#titleHeader p").hide();
  $("#transactionDisplay").hide();
  $("#balanceDisplay").hide();
  $("#fullNameInput").val("");
  $("#initialDepositInput").val("");
  $("#withdrawInput").val("");
  $("#depositInput").val("");
}

$(document).ready(function(){

  $("#registrationForm").submit(function(event){
    event.preventDefault();
    let fullName = $("#fullNameInput").val();
    let initialDeposit = Math.abs(Number($("#initialDepositInput").val()));

    let newAccount = new Account(fullName, initialDeposit);
    updateDomBalance(newAccount.balance);

    $("#titleHeader p").text(`Welcome ${newAccount.name}, thank you for trusting this shady shady student project with your cold hard bitcoin. We swear this wasn't a mistake.`);
    hideRegistration();

    $("#transactButton").click(function(){
      let withdrawInput = Math.abs(Number($("#withdrawInput").val()));
      let depositInput = Math.abs(Number($("#depositInput").val()));

      newAccount.deposit(depositInput);
      newAccount.withdrawal(withdrawInput);

      updateDomBalance(newAccount.balance);

    });

    $("#newAccountButton").click(function(){
      newRegistration();
      newAccount.reset();
    });

  });

});
