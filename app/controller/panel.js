Ext.define('AFM.controller.panel',
   {
   extend   : 'Ext.app.Controller',

   stores   : [
   ],

   views    : [
      'Panel'
   ],

   init: function()
      {
      this.control(
         {
         '#tabs' :
            {
            tabchange: this.start
            },
         });
      },

   start    : function(obj)
      {
      }
   });
