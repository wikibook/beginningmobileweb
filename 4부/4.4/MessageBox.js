Ext.setup({
  onReady: function(){                  
    new Ext.Panel({
      fullscreen: true,      
      layout: {
        type: 'vbox',
        align: 'stretch' 
      },
      defaults: {
        xtype:'button'
      },                             
      items:[
        { 
          text:'Alert',
          handler: function() {
            Ext.Msg.alert('Title', 'Hi~~', Ext.emptyFn);
          }
        },
        { 
          text:'Confirm', 
          handler: function() {
            Ext.Msg.confirm("Confirmation", "Are you sure you want to do that?", Ext.emptyFn);
          }
        },  
        { 
          text:'Prompt', 
          handler: function() {
            Ext.Msg.prompt('Name', 'Please enter your name:', function(text) {
                //text: 프롬프트에서 입력 받은 텍스트
            });
          }
        } 
      ]                                        
    });      
  }
});

