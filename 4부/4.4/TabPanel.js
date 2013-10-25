Ext.setup({
  onReady: function(){        
    var item1 = {   
      title: 'Tab1',
      style: "background-color: red;",
      html: 'Item1'      
    };
    var item2 = { 
      title: 'Tab2', 
      style: "background-color: gray;",
      html: 'Item2'      
    };
    var item3 = {   
      title: 'Tab3', 
      style: "background-color: yellow;",
      html: 'Item3'
    };
      
    var panel = new Ext.TabPanel({
      fullscreen: true,  
ui: 'dark',          
      tabBarDock: 'top',
      cardSwitchAnimation: 'slide',          
      items: [item1,item2,item3]
    });      
  }
});

