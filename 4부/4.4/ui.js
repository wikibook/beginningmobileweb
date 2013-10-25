Ext.regModel('Menu', {
  fields: ['menuName', 'card', 'animation']
});

menuStore = new Ext.data.Store({
  model: 'Menu',
  data: [
    {menuName: 'Menu1', card: 'Page1', animation:'slide'},
    {menuName: 'Menu2', card: 'Page2', animation:'pop'},
    {menuName: 'Menu3', card: 'Page3', animation:'cube'}        
  ]
});
      
Ext.setup({
 tabletStartupScreen: 'tablet_startup.png',  
  icon: 'icon.png',
  glossOnIcon: false,
statusBarStyle: 'default',

  onReady: function(){        
    var currentAnimation;  
        
    var panel = new Ext.Panel({
      fullscreen: true,            
      dockedItems:[        
      {
        dock: 'left', 
        width: '200',       
        xtype: 'list',        
        store: menuStore,
        itemTpl: '{menuName}',          
        listeners: {
          itemtap: function(dataView, index, item, eventObject) {              
            record = dataView.getRecord(item);
            if (record) {                
              toolBar.setTitle(record.data['menuName']);
              currentAnimation = record.data['animation'];
              panel.setActiveItem(eval(record.data['card']), currentAnimation || 'slide');
            }                                                                
          }
        }
      },
      toolBar = new Ext.Toolbar({
        dock: 'top',
        title: 'Sencha Touch UI Demo',
        items:[          
        { 
          ui: 'back', 
          text:'main',               
          handler: function() {
             panel.setActiveItem(0,{type: currentAnimation,reverse: true})
          }
        }]
      })],           
      
      layout: 'card',                  
      items:[
      {
        cls: 'card',   
        html: 'Main'
      }]                                                                               
    });         
  }
});

