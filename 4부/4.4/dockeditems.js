Ext.setup({
  onReady: function(){        
    new Ext.Panel({
      fullscreen: true,
      style: "background-color:white;",         
      items: [ { html: 'Content' } ],
      dockedItems: [
        {
          dock: "top",
          style: "background-color:red;",
          html: "DockItem-Top"
        },
        {
          dock: "left",
          style: "background-color:gray;",
          html: "DockItem-Left"
        },
        {
          dock: "bottom",
          style: "background-color:yellow;",
          html: "DockItem-Bottom"
        },            
        {
          dock: "right",
          style: "background-color:green;",
          html: "DockItem-Right"
        }
      ]
    });     
  }
});

