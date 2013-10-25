Ext.setup({
  onReady: function(){        
    new Ext.Panel({
      fullscreen: true,       
      layout: {
        type: 'vbox',
        align: 'stretch', 
        pack: 'center' 
      },                  
      items: [
        {         
          style: "background-color:red;",
          html: "Item-1"
        }, 
        {         
          style: "background-color:gray;",
          html: "Item-2"
        },
        {         
          style: "background-color:yellow;",
          html: "Item-3"
        } 
      ]      
    });     
  }
});

