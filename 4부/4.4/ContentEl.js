Ext.regModel('Contact', {
    fields: ['firstName', 'lastName']
});

ListStore = new Ext.data.Store({
    model: 'Contact',
    sorters: 'firstName',
    getGroupString : function(record) {
        return record.get('firstName')[0];
    },
    data: [
        {firstName: 'Julio', lastName: 'Benesh'},
        {firstName: 'Julio', lastName: 'Minich'},
        {firstName: 'Tania', lastName: 'Ricco'},
        {firstName: 'Odessa', lastName: 'Steuck'},
        {firstName: 'Nelson', lastName: 'Raber'},
        {firstName: 'Tyrone', lastName: 'Scannell'},
        {firstName: 'Allan', lastName: 'Disbrow'},
        {firstName: 'Cody', lastName: 'Herrell'},
        {firstName: 'Julio', lastName: 'Burgoyne'},
        {firstName: 'Jessie', lastName: 'Boedeker'},
        {firstName: 'Allan', lastName: 'Leyendecker'},
        {firstName: 'Javier', lastName: 'Lockley'},
        {firstName: 'Guy', lastName: 'Reasor'},
        {firstName: 'Jamie', lastName: 'Brummer'},
        {firstName: 'Jessie', lastName: 'Casa'},
        {firstName: 'Marcie', lastName: 'Ricca'},
        {firstName: 'Gay', lastName: 'Lamoureaux'}           
    ]
});

Ext.setup({
  onReady: function(){        
    new Ext.TabPanel({
      fullscreen: true,   
      scroll: 'vertical',     
      items: [
        {
          title: 'inlineHTML',
          html: 'Hello, Sencha Touch'  
        },
        {
          title: 'Object(xtype)',
          xtype: 'list',
          store: ListStore,
          itemTpl: '{firstName} {lastName}'
        },
        {
          title: 'HTML Layout',
          contentEl: 'htmlElement'
        }
      ]      
    });     
  }
});

