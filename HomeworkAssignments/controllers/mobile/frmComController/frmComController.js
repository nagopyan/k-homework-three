define({ 

  onViewCreated: function() {
    this.view.preShow = this.preShow;
    this.view.postShow = this.postShow;
  },

  preShow: function() {

    this.view.contractComponent.btnPaintClick = this.potato;
    this.view.contractComponent.btnSkin1Click = this.skin1;
    this.view.contractComponent.flxSkinClick = this.flxSkin;
    this.view.contractComponent.lblChangeSkinOnTouchStart = this.flxSkin;
    this.view.btnToSegList.onClick = this.toSegList;
  },

  postShow: function() {
    // alert(this.view.contractComponent._isStatic);
  },
  
  toSegList: function() {
            var self = this;
        var ntf = new kony.mvc.Navigation("frmSegListContacts");
        ntf.navigate();
  },

  potato: function() {
    this.view.contractComponent.btnSkin = "flxContainerSkinBlue";
    this.view.contractComponent.skin1 = "flxContainerSkinBlue";
    this.view.contractComponent.txtBtnPaint = "Change to Blue";
    this.view.contractComponent.btnPaintSkin = "flxContainerSkinBlue";
    this.view.contractComponent.btnSkin1Skin = "flxContainerSkinBlue";
  },

  skin1: function() {
    this.view.contractComponent.btnSkin = "flxContainerSkinRed";
    this.view.contractComponent.skin1 = "flxContainerSkinRed";
    this.view.contractComponent.txtBtnSkin1 = "Change to Red";
    this.view.contractComponent.btnPaintSkin = "flxContainerSkinRed";
    this.view.contractComponent.btnSkin1Skin = "flxContainerSkinRed";
    this.view.contractComponent.btnSkin2Skin = "flxContainerSkinRed";
  },

  getSkin: function(color) {
    var skinZ = {
      "red" : "flxContainerSkinRed",
      "blue" : "flxContainerSkinBlue",
      "default" : "flxContainerSkinGray"
    };
    return skinZ([color]);
  },

  flxSkin: function() {

    var currentSkin = this.view.contractComponent.txtBx;
    if(this.view.contractComponent.txtBx === "red") {
      skinCurrent = "flxContainerSkinRed";
    } else if(this.view.contractComponent.txtBx === "blue") {
      skinCurrent = "flxContainerSkinBlue";
    } else if(this.view.contractComponent.txtBx === "default") {
      skinCurrent = "flxContainerSkinGreen";
    } else {
      skinCurrent = "flxContainerSkinWhite";
    }
    this.view.contractComponent.skin1 = skinCurrent;
    this.view.contractComponent.txtBx = "";
  }

});