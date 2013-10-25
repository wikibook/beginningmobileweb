Ext.regModel('OrgModel', {
    fields: [{ name: 'department', type:'string'}
    ]
});
 
var treeStore = new Ext.data.TreeStore({
  model: 'OrgModel',  
  proxy: {
    type: 'ajax', 
    url : 'nestedServer.html',
    reader: {
      type: 'tree', 
      root: 'organization'
    }
  }  
});

Ext.setup({
  onReady: function(){             
    var nestedList = new Ext.NestedList({
        fullscreen: true,
        title: 'Organization',
        displayField: 'department',
        store: treeStore
    });     
  }
});
