Ext.define('AFM.view.Panel',
   {
   extend   : 'Ext.form.Panel',

   alias    : 'widget.xafm_panel',
   id       : 'xafm_panel',

   frame    : false,

   items    : [
      {
      xtype       : 'toolbar',
      id          : 'xtoolbar',
      items: [
         '->',
         '-',
         {
         cls      : 'x-btn-text-icon',
         icon     : 'include/icons/refresh.gif',
         disabled : true
         },
         {
         xtype    : 'tbtext',
         text     : 'TEST'
         },
         '-',
         {
         xtype    : 'tbtext',
         text     : 'blah'
         }]
      }]
   });
