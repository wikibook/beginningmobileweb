var myTpl = new Ext.Template([
  '<div>',
  '<span> <b>{name}</b> is {value} </span>',	  
  '</div>'
]);

Ext.setup({
  onReady: function(){  
                  
    var makeJSONPRequest = function() {
      Ext.getBody().mask('Loading...', 'x-mask-loading', false);
      Ext.util.JSONP.request({        
        
          //url: 'http://anotherDomain/sencha/examples/mydemos/server.js',          
          url: 'server.js',          
          
          callbackKey: 'callback',          
          callback: function(result) {
            var data = result;                            
            Ext.getCmp('myPanel').update(data);
            Ext.getBody().unmask();
          }          
      });
    };                              
    new Ext.Panel({
      fullscreen:true,	
      id: 'myPanel',      
      dockedItems:[		
       {						
         title:"JSONP",			
         xtype:"toolbar",
         items:[                    
          { 
            ui: 'decline-round', 
            text:'JsonP Call',                             
            handler: makeJSONPRequest
          }]         
       } 	
     ],	     
     tpl:myTpl        
    });            
  }      
});
