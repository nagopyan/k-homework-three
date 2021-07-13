define({
  segDataList: [
    {name: "Ivan Minchev",
    phone: "0888123456",
    email: "ivan@mail.com"},
    {name: "Denica Deneva",
    phone: "0878987654",
    email: "denica@mail.com"},
    {name: "Georgi Georgiev",
    phone: "0987654654",
    email: "georgi@mail.com"},
    {name: "Ivan Ivanov",
    phone: "0878951267",
    email: "iivanov@mail.com"},
    {name: "Mili Johnes",
    phone: "0878987654",
    email: "mili@mail.com"},
    {name: "John Johnson",
    phone: "0888888888",
    email: "john@mail.com"}
  ],
  
  formatedData: [],
  
  onViewCreated: function() {
    this.view.init = this.init;
    this.view.preShow = this.preShow;
  },
  
  init: function() {
    this.formatDataForWidget.call(this, this.segDataList, this.formatedData);
    this.view.segList.onRowClick = onRowClick;
  },
  
  preShow: function() {
    var indexOfSelectedRow = this.view.segList.selectedRowIndex[1];
    var contactData = this.segDataList[indexOfSelectedRow];
    kony.store.setItem("contactData", contactData);
  },
  
  formatDataForWidget: function(data, formatedData) {
    data.forEach(function(phoneUser) {
      formatedData.push({
        "lblHeading": {"text" : phoneUser.name},
        "lblDescription": {"text" : phoneUser.phone},
        "lblEmail": {"text" : phoneUser.email},
        "lblStrip": {"width" : "2%"},
        });
      });
  },
});