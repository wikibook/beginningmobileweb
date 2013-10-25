var myTpl = new Ext.XTemplate([
  '<p>Name: {name}</p>',
  '<p>Job: {job}</p>',
  
  '<p>drinks:</p>',
  '<tpl for="drinks">',
    '<div> - {.}</div>',
  '</tpl>',
  
  '<p>Kids: ',
  '<tpl for="kids">',      
      '<p>{#}. {name}',
      '<tpl if="age &gt;= 8">',
          '<span>(eldest son)</span>',
      '</tpl>',
      '</p>',
  '</tpl>',
  '</p>'
]);

Ext.setup({
  onReady: function(){            
    var panel = new Ext.Panel({
      fullscreen:true,	       	     
      tpl:myTpl            
    });
    
    var data = {         
       name:'Jong Myung Park',
       job:'Developer',
       drinks: ['Coffee', 'Soda', 'Water'],
       kids:[		
        {name:'Jun', age:8},
        {name:'Seo', age:6}
       ]
    };
    panel.update(data);            
  }      
});
