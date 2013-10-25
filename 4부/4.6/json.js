Ext.regModel('Users', {
    fields: ['firstName', 'lastName']
});

var tpl = new Ext.XTemplate(
  '<tpl for=".">',
  '<div class="user"> {firstName} , <span> {lastName} </span></div>',   
  '</tpl>'   
);

var jsonStore = new Ext.data.Store({
  model: 'Users',
  proxy: {
    type: 'ajax',     
    url : 'jsonServer.html',    
    reader: {
      type: 'json', 
      root: 'users'
    }
  }
});

Ext.setup({
  onReady: function(){
                 
    jsonStore.load();
                 
    var panel = new Ext.Panel({
      fullscreen:true,	                         
      layout:'fit',
      
      items: new Ext.DataView({
        store: jsonStore,
        tpl: tpl,                       
        itemSelector:'div.user'
      })           
    });        
  }
});
