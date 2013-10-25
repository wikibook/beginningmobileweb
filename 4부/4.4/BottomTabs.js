Ext.setup({
  onReady: function(){        
    var item1 = {   
      title: 'Tab1',
      style: "background-color:red;",
      html: 'Item1',
      iconCls: 'info'
    };
    var item2 = { 
      title: 'Tab2', 
      style: "background-color:gray;",
      html: 'Item2',
      iconCls: 'favorites'
    };
    var item3 = {   
      title: 'Tab3', 
      style: "background-color:yellow;",
      html: 'Item3',
      iconCls: 'settings'
    };
      
    var panel = new Ext.TabPanel({
      fullscreen: true,           
      ui: 'light',
      cardSwitchAnimation: 'slide',                                
      tabBar: {
        dock: 'bottom',
        layout: {
            pack: 'center'
        }
      },            
      items: [item1,item2,item3]             
    });      
  }
});

