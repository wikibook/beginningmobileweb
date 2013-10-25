Ext.setup({
  onReady: function(){                  
    new Ext.Panel({
      fullscreen: true,      
      layout: {
        type: 'vbox',
        align: 'start' 
      },      
      defaults: {
        layout: { type: 'hbox' },
        flex:1,                    
        defaults: {
          xtype: 'button'           
        }
      },                                  
      items:[
        {items: [
          { ui: 'normal', text:'Normal',
            handler: function() {
              Ext.Msg.alert('Message', 'Hi~~', Ext.emptyFn);
            }
          },
          {ui: 'round', text:'Round'},
          {ui: 'small', text:'Small'}            
        ]},                  
        {items: [ 
          {ui: 'decline', text:'Drastic'},
          {ui: 'decline-round', text:'Round'},  
          {ui: 'decline-small', text:'Small'}                            
        ]},          
        {items: [
          {ui: 'confirm', text:'Confirm'},
          {ui: 'confirm-round', text:'Round'},            
          {ui: 'confirm-small', text:'Small'}                      
        ]},
        {items: [
          {ui: 'action', text:'Action'},
          {ui: 'action-round', text:'Round'},            
          {ui: 'action-small', text:'Small'}                      
        ]},
        {items: [
          {ui: 'back', text:'back'},
          {ui: 'Forward', text:'Forward'}                 
        ]}
      ]                                        
    });      
  }
});

