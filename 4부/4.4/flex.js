Ext.setup({
  onReady: function(){        
    new Ext.Panel({
      fullscreen: true,       
      layout: {
        type: 'hbox',
        align: 'stretch', 
        pack: 'center' 
      },                  
      items: [
        {       
          flex: 1,  
          style: "background-color:red;",
          html: "Item-1"
        }, 
        { 
          flex: 2,        
          style: "background-color:gray;",
          html: "Item-2"
        },
        {  
          flex: 1,       
          style: "background-color:yellow;",
          html: "Item-3"
        } 
      ]      
    });     
  }
});

