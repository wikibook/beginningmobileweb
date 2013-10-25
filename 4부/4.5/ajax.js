var myTpl = new Ext.Template([
  '<div>',
  '<span> <b>{name}</b> is {value} </span>',	  
  '</div>'
]);

Ext.setup({
  onReady: function(){        
    var makeAjaxRequest = function() {
      Ext.getBody().mask('Loading...', 'x-mask-loading', false);      
      Ext.Ajax.request({
        url: 'server.html',
        timeout: 30000,        
        success: function(response, opts) {
            var data = Ext.util.JSON.decode(response.responseText); 
            Ext.getCmp('myPanel').update(data);             
        },
        failure: function(response, opts) {
          console.log('server-side failure with status code ' + response.status);
        },
        callback: function(opts, isSuccess,response){           
           Ext.getBody().unmask();           
        }          
      });
    };  
                              
    new Ext.Panel({
      fullscreen:true,	
      id: 'myPanel',
      
      dockedItems:[		
       {			
         dock:"top",			
         title:"Ajax",			
         xtype:"toolbar",
         items:[          
          { 
            ui: 'decline-round', 
            text:'Ajax Call',                             
            handler: makeAjaxRequest
          }]		
       } 	
     ],	     
     tpl:myTpl        
    });            
  }      
});
