Ext.setup({
  onReady: function(){
    var segmentedButton = [{
      xtype: 'segmentedbutton',
      allowMultiple: false,
      allowDepress: false,
      items: [
        { text: 'Toggle 1' }, 
        { text: 'Toggle 2', pressed : true }, 
        { text: 'Toggle 3' }
      ],
      
      listeners : {
        toggle : function(container, button, active){
          Ext.Msg.alert('Tap', button.text + " : " + (active ? 'on' : 'off'), Ext.emptyFn);
        }
      }
    }];
                        
    new Ext.Panel({
      fullscreen: true,
      dockedItems:{
          xtype: 'toolbar',
          ui: 'light',
          items: [segmentedButton] 
      }                                                                                                                                
    });      
  }
});

