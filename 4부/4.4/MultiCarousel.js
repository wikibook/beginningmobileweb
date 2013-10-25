Ext.setup({
  onReady: function(){        
    var item1 = {         
      style: "background-color:red;",
      html: 'Item1'
    };
    var item2 = { 
      style: "background-color:gray;",
      html: 'Item2'
    };
    var item3 = {   
      style: "background-color:yellow;",
      html: 'Item3'
    };
    
    var topCarousel = new Ext.Carousel({ 
      items: [item1,item2,item3]
    }); 
    var middleCarousel = new Ext.Carousel({ 
      items: [item1,item2,item3]
    }); 
    var bottomCarousel = new Ext.Carousel({ 
      items: [item1,item2,item3]
    }); 
      
    var panel = new Ext.Panel({
      fullscreen: true,  
      layout:{
          type: 'vbox',
          align: 'stretch'
      },
      defaults: {flex: 1},
      items: [topCarousel, middleCarousel, bottomCarousel]
    });      
  }
});

