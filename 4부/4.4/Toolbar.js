Ext.setup({
  onReady: function(){                  
    var panel = new Ext.Panel({
      fullscreen: true,      
      dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        title: 'My Toolbar',
        defaults: {
          xtype: 'button'
        },
        items: [          
          { ui: 'decline-round', text:'decline-round' }
        ]
      }]                          
    });      
  }
});

