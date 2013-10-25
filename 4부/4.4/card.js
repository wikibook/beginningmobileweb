Ext.setup({
  onReady: function(){        
    var panel = new Ext.Panel({
        fullscreen: true,       
        layout: {
          type: 'card'           
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
          
    panel.setActiveItem(2);     
  }
});

