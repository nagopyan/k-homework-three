define({
  segDataList: [
    {
      name: "Ivan Minchev",
      phone: "0888123456",
      email: "ivan@mail.com"
    },
    
    {
      name: "Denica Deneva",
      phone: "0878987654",
      email: "denica@mail.com"
    },
    
    {
      name: "Georgi Georgiev",
      phone: "0987654654",
      email: "georgi@mail.com"
    },
    
    {
      name: "Ivan Ivanov",
      phone: "0878951267",
      email: "iivanov@mail.com"
    },
    
    {
      name: "Mili Johnes",
      phone: "0878987654",
      email: "mili@mail.com"
    },
    
    {
      name: "John Johnson",
      phone: "0888888888",
      email: "john@mail.com"
    },
    
        {
      name: "Aso Hacks",
      phone: "0878987654",
      email: "mili@mail.com"
    },
    
        {
      name: "Eo Okada",
      phone: "0878987654",
      email: "mili@mail.com"
    },
    
        {
      name: "Jimin Go",
      phone: "0878987654",
      email: "mili@mail.com"
    },
    
        {
      name: "Seo Gon",
      phone: "0878987654",
      email: "mili@mail.com"
    },
  ],
  //controller global obj
  formatedData: [],
  
  onViewCreated: function() {
    this.view.init = this.init;
    this.view.preShow = this.preShow;
  },
  
  init: function() {
    this.formatDataForWidget.call(this, this.segDataList, this.formatedData);
  },
  
  preShow: function() {
    this.view.segListContacts.setData(this.formatedData);
    this.view.segListContacts.onRowClick = this.onRowClick;
    this.view.btnToComponents.onClick = this.toComponents;
  },
  
    toComponents: function() {
            var self = this;
        var ntf = new kony.mvc.Navigation("frmCom");
        ntf.navigate();
  },
  
    onRowClick: function(seguiWidget, sectionNumber, rowNumber, selectedState) {
    var indexOfSelectedRow = this.view.segListContacts.selectedRowIndex[1];
    var contactData = this.segDataList[indexOfSelectedRow];
    kony.store.setItem("contactDetails", contactData);
    var ntf = new kony.mvc.Navigation("frmContactDetails");
    ntf.navigate();
  },
  
  formatDataForWidget: function(data, formatedData) {
    data.forEach(function(phoneUser) {
      formatedData.push({
        "lblName": {"text" : phoneUser.name},
        "lblPhone": {"text" : phoneUser.phone},
        "lblEmail": {"text" : phoneUser.email}
        });
      });
  },
});