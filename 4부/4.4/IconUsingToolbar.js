Ext.setup({
  onReady: function(){        
    
    var item1 = { iconMask: true, iconAlign: 'right', ui: 'round', text: 'home', iconCls: 'home' };
    var item2 = { iconMask: true, iconAlign: 'right', ui: 'action', text: 'refresh', iconCls: 'refresh' };
    var item3 = { iconMask: true, ui: 'decline', iconCls: 'delete' };
    var item4 = { iconMask: true, ui: 'confirm-round', text: 'write', iconCls: 'compose' };
    var item5 = { iconMask: true, ui: 'action-round', iconCls: 'locate' };   
    var item6 = { iconMask: true, ui: 'action', iconCls: 'bookmarks', badgeText: '2' }; 
    var item7 = { iconMask: true, iconCls: 'organize', text: 'Sort' };  
    
    var panel = new Ext.TabPanel({
      fullscreen: true,           
      dockedItems:{
        xtype: 'toolbar',
        ui: 'light',
        scroll: 'horizontal',
        items: [item1,item2,item3,item4,item5,item6,item7] 
      }           
    });      
  }
});

