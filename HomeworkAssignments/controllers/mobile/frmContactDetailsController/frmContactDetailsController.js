define({

  
  preShow: function() {
     var contactInfo = kony.store.getItem("contactDetails");
    this.view.lblContactName.text = contactInfo.name;
    this.view.lblPhoneNumber.text = contactInfo.phone;
    this.view.lblEmail.text = contactInfo.email;
  }

 });