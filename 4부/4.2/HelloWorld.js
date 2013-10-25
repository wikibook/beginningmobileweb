Ext.setup({
  tabletStartupScreen: 'tablet_startup.png',
  phoneStartupScreen: 'phone_startup.png',
  icon: 'icon.png',
glossOnIcon: false,
statusBarStyle: 'default',
    
  onReady: function(){      
    new Ext.Panel(
      {  
        fullscreen: true,
        html: 'Hello Sencha Touch'
      }
    );     
  } 
});
