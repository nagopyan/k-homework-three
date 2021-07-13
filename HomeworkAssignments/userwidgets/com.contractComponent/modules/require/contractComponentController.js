define(function() { 

  var skin2 = function () {
    //alert("Called from component.");
    //this.view.btnSkin2.skin = "btnRedSkin";
    if(this._isStatic) {
      alert("getter is true");
      this._isStatic = false;
    } else {
      alert("getter is false, try again");
      this._isStatic = true;
    }
    
  };

  return {

    _isStatic : false, //declare getSet and give value

    constructor: function(baseConfig, layoutConfig, pspConfig) {
      this.view.btnSkin2.onClick = skin2;
    },

    //Logic for getters/setters of custom properties

    initGettersSetters: function() {
      defineGetter(this, 'isStatic', () => {
        return this._isStatic;
      });
      defineSetter(this, 'isStatic', value => {
        if (this._isStatic === value) {
          return;
        }
        this._isStatic = value;
      });
    }
  }; 
});