Ext.setup({
  onReady: function(){        
    var item1 = { title: 'info', iconCls: 'info', badgeText:'2',};
    var item2 = { title: 'favorites', iconCls: 'favorites' };
    var item3 = { title: 'settings', iconCls: 'settings' };
    var item4 = { title: 'bookmarks', iconCls: 'bookmarks' };
    var item5 = { title: 'download', iconCls: 'download' };
    var item6 = { title: 'more', iconCls: 'more' };
    var item7 = { title: 'search', iconCls: 'search' };
    var item8 = { title: 'team', iconCls: 'team' };
    var item9 = { title: 'time', iconCls: 'time' };
    var item10 = { title: 'user', iconCls: 'user' };    
    var item11 = { title: 'action', iconCls: 'action' };
    var item12 = { title: 'add', iconCls: 'add' };
    var item13 = { title: 'arrow_up', iconCls: 'arrow_up' };
    var item14 = { title: 'arrow_right', iconCls: 'arrow_right' };
    var item15 = { title: 'arrow_down', iconCls: 'arrow_down' };
    var item16 = { title: 'arrow_left', iconCls: 'arrow_left' };
    var item17 = { title: 'compose', iconCls: 'compose' };
    var item18 = { title: 'delete', iconCls: 'delete' };
    var item19 = { title: 'refresh', iconCls: 'refresh' };
    var item20 = { title: 'reply', iconCls: 'reply' };
    var item21 = { title: 'star', iconCls: 'star' };
    var item22 = { title: 'trash', iconCls: 'trash' };
      
    var panel = new Ext.TabPanel({
      fullscreen: true,           
      ui: 'light',
      cardSwitchAnimation: 'slide',                                
      tabBar: {
        dock: 'bottom',
        scroll: 'horizontal'
      },            
      items:
      [
        item1,item2,item3,item4,item5,item6,item7,item8,item9,item10,
        item11,item12,item13,item14,item15,item16,item17,item18,item19,item20,
        item21,item22
      ]             
    });      
  }
});

