var validate = function (id) {
  var value = document.getElementById(id).value;
  var alertText = document.getElementById("validate" + id.charAt(0).toUpperCase() + id.slice(1));
  
  
  var required = function() {
    if (value.length == 0) {
      alertText.innerHTML = "This field is required";
      return this;
    }
    valid();
    return this;
  }

  var phone = function() {
    if (value.length > 0) {
      if (value.match(/[a-z]/)) {
        alertText.innerHTML = "Only number is allowed";
        return this;
      } else if (!value.match(/^[0-9]{10}$/)) {
        alertText.innerHTML = "Incorrect number";
        return this;
      }
      valid();
      return this;    
    };
    required();
    return this;
  }

  var email = function() {
    if (value.length > 0) {
      if (!value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        alertText.innerHTML = "Incorrect email";
        return this;
      }
      valid();
      return this;
    };
    required();
    return this;
  }

  var valid = function() {
    alertText.innerHTML = "";
  }

  var creditCard = function() {
    if (value.length > 0) {
      if (value.match(/[a-z]/)) {
        alertText.innerHTML = "Only number is allowed";
        return this;
      } else if (!value.match(/^[0-9]{16}$/)) {
        alertText.innerHTML = "Incorrect credit card number";
        return this;
      }
      valid();
      return this;    
    };
    required();
    return this;    
  }

  var cardDate = function() {
    if (value.length > 0) {
      if (!value.match(/^(0[1-9]|1[0-2])\/(20[0-9][0-9])$/)) {
        alertText.innerHTML = "Incorrect information";
        return this;
      }
      valid();
      return this;    
    };
    required();
    return this;       
  }

  var cvv = function() {
    if (value.length > 0) {
      if (value.match(/^[a-z]$/)) {
        alertText.innerHTML = "Only number is allowed";
        return this;
      } else if (!value.match(/^[0-9]{3}$/)) {
        alertText.innerHTML = "Incorrect CVV";
        return this;
      }
      valid();
      return this;    
    };
    required();
    return this;    
  }

  var confirmPassword = function () {
    var password = document.getElementById("registerPassword").value;
    if (value.length > 0) {
      if (!value.match(password)) {
        alertText.innerHTML = "Password not match";
        return this;
      } 
      valid();
      return this;    
    };
    required();
    return this;     
  }
  return {
    value:value, 
    required:required, 
    phone:phone, 
    email:email, 
    creditCard:creditCard,
    cardDate:cardDate,
    cvv:cvv,
    confirmPassword:confirmPassword
  }
}


// =================
var validateSenderFirstName = function() {
  validate("senderFirstName").required();
}

var validateSenderLastName = function() {
  validate("senderLastName").required();
}

var validateSenderPhone = function() {
  validate("senderPhone").required().phone();
}

var validateSenderEmail = function() {
  validate("senderEmail").required().email();
}

var validateReceiverFirstName = function() {
  validate("receiverFirstName").required();
}

var validateReceiverLastName = function() {
  validate("receiverLastName").required();
}

var validateReceiverPhone = function() {
  validate("receiverPhone").required().phone();
}

var validateReceiverEmail = function() {
  validate("receiverEmail").required().email();
}

var validateCardHolder = function() {
  validate("cardHolder").required();
}

var validateCardNumber = function() {
  validate("cardNumber").required().creditCard();
}

var validateCardExpire = function() {
  validate("cardExpire").required().cardDate();
}

var validateCVV = function() {
  validate("CVV").required().cvv();
}

var validateRegisterFirstName = function() {
  validate("registerFirstName").required();
}

var validateRegisterLastName = function() {
  validate("registerLastName").required();
}

var validateRegisterEmail = function() {
  validate("registerEmail").required().email();
}

var validateRegisterPassword = function() {
  validate("registerPassword").required();
}

var validateRegisterConfirmPassword = function() {
  validate("registerConfirmPassword").required().confirmPassword();
}
