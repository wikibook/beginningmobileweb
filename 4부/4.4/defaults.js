Ext.setup({
  onReady: function(){        
    new Ext.Panel({
      fullscreen: true,       
      layout: {
        type: 'vbox',
        align: 'strecth'        
      },            
      defaults: {
        style: "background-color:black; color:white;",
        html: "Item-Default"
      },      
      items: [
        {                   
          html: "Item-1"
        }, 
        {         
          style: "background-color:white; color:black;",
          html: "Item-2"
        },
        new Ext.Panel({                           
          style: "background-color:red; color:yellow;",
          html: 'Item-3'
        })
      ]      
    });     
  }
});

