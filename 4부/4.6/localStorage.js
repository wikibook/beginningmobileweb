Ext.regModel('User', {
    fields: ['firstName', 'lastName']
});
var localStorgaeProxy = new Ext.data.LocalStorageProxy({
  id  : 'userInfo'
});  
var store = new Ext.data.Store({
    model: "User",
    proxy: localStorgaeProxy
});
Ext.setup({
  onReady: function(){      
    store.load();   
    
    var panel = new Ext.Panel({
      fullscreen:true,            
      dockedItems: [{
        xtype: 'toolbar',
        defaults: {xtype: 'button'},
        items: [          
          { 
            ui: 'confirm', text:'SET',            
            handler: function(btn, event){               
              var record = store.first(); 
              if(!record){
                var data = {firstName:'JM', lastName:'PARK'}
                store.add(data);      
                store.sync();   
              }
            }
          },
          { 
            ui: 'confirm', text:'GET',
            handler: function(btn, event){
              var record = store.first();
              if(!record){
                 Ext.Msg.alert('UserInfo', 'empty', Ext.emptyFn);                 
              }
              else{
                 var firstName = record.data['firstName'];
                 var lastName = record.data['lastName']
                 Ext.Msg.alert('UserInfo', firstName + ' , ' + lastName, Ext.emptyFn); 
              }                                     
            }
          },
          { 
            ui: 'confirm', text:'Remove',
            handler: function(btn, event){
              var record = store.first();
              store.remove(record);
              localStorgaeProxy.clear();
            }
          }
        ]
      }]        
    });            
  }
});
