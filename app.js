Ext.Loader.setPath({
   'Ext': '../../include/ext/src'
   });

Ext.Loader.setConfig({ enabled  :true });

Ext.application(
   {
   name: 'AFM',

   appFolder: 'app',

   controllers: [
      'panel',
   ],

   launch: function()
      {
      Ext.create('Ext.container.Viewport',
         {
         layout: 'border',
         items: [
            {
            region   : 'center',
            xtype    : 'tabpanel',
            id       : 'tabs',
            items: [
               {
               title : 'File'
               },
               {
               title : 'View'
               },
               {
               title : 'Options'
               }],
            tabBar : {
               plain : true,
               items : [
                  {
                  xtype    : 'tbfill'
                  },
                  {
                  xtype    : 'xafm_panel'
                  }]
               }
            }]
         });
      }
   });
