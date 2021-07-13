define({

  onViewCreated: function() {
    this.view.preShow = this.preShow;
    this.view.postShow = this.postShow;
  },

  preShow: function() {

  },

  postShow: function() {
    this.view.comBtn.onClick = this.btnNoContract;
    this.view.flxNoContract.onClick = this.flxNoContract;
  },

  btnNoContract : function() {
    this.view.flxNoContract.skin = "flxContainerSkinRed";
  },

  flxNoContract: function() {
    this.view.flxNoContract.skin = "flxContainerSkinBlue";
  }
});