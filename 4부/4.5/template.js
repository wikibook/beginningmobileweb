var myTpl = new Ext.Template([
  '<div>',
  '<span> <b>{name}</b> is {value} </span>',	  
  '</div>'
]);

Ext.setup({
  onReady: function(){            
    var panel = new Ext.Panel({
      fullscreen:true,	       	     
      tpl: myTpl 
    });
    
    panel.update(
      {	
        name: "Sencha Touch",	
        value: "The First HTML5 Mobile Web App Framework" 
      }
    );            
  }      
});
