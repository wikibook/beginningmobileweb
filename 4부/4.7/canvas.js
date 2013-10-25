Ext.ns('Demo.Canvas');

Demo.Canvas.SimpleDrawOjb = Ext.extend(Ext.Panel, {
  fullscreen: true, 
  started : false,
  toolbarHeight: 50,

  initComponent: function(){
var config = {
	title: 'Canvas SimpleDraw',
	contentEl : this.canvasID			
};						
Ext.apply(this, config); 
	  
    this.dockedItems = [{
       dock: 'top',
       height: this.toolbarHeight,
       xtype: 'toolbar',
       title: !Ext.is.Phone ? 'Canvas' : '',
       items:[        
         { ui: 'confirm', text:'color', handler: this.changeStrokeStyle},
         { ui: 'confirm', text:'thickness', handler: this.changeLineWidth},
         { ui: 'confirm', text:'clear', handler: this.clearCanvas},
        ]              
      }];    	  
      canvas = Ext.getDom(this.canvasID); 			
context = canvas.getContext('2d');
Demo.Canvas.SimpleDrawOjb.superclass.initComponent.call(this);
},	
	
layoutOrientation : function(orientation, w, h) {
      if (Ext.is.Phone) {
       if (orientation == 'portrait') {
         canvas.width = 320;
         canvas.height = 360;
       }
       else {
         canvas.width = 480;
         canvas.height = 217;
       }                        
      }
      else{
       if (orientation == 'portrait') {
         canvas.width = 768;
         canvas.height = 890;
       }
       else {
         canvas.width = 1024;
         canvas.height = 637;
       }   
      }            
      Demo.Canvas.SimpleDrawOjb.superclass.layoutOrientation.call(this, orientation, w, h);
    },	
  
afterRender: function() {
	Demo.Canvas.SimpleDrawOjb.superclass.afterRender.call(this);	
	this.mon(this.el, {
          touchstart: this.handleEvent,
          touchend: this.handleEvent,
          touchmove: this.handleEvent,       
          doubletap: this.handleEvent,
          pinch: this.handleEvent, 
          scope: this
        });		
},		
	
handleEvent: function(event, target, obj) {
  	if(event.target == canvas){		  
  	  offsetX = event.pageX
  	  offsetY = event.pageY - this.toolbarHeight;

          if(event.type == 'touchstart'){        
            context.beginPath();
            context.moveTo(offsetX, offsetY);
            this.started = true;
          }
          else if(event.type == 'touchmove'){        
             if (this.started){         
               context.lineTo(offsetX, offsetY);
               context.stroke();
             }
           }
           else if(event.type == 'touchend'){
              if (this.started){
                this.started = false;
              }
            }      
            else if(event.type == 'pinch'){   
  	       this.clearCanvas();
            }
            else if(event.type == 'doubletap'){   
  	        this.changeBackColor();
            }
          }          		
	},	
	
	clearCanvas : function(){
          context.clearRect(0,0,canvas.width, canvas.height);
          context.strokeStyle = 'black';
          context.lineWidth = 1;	   
          this.started = false;
	},
	
	changeStrokeStyle : function(){	   	   
	   context.strokeStyle = (context.strokeStyle == 'black') ? 'red' : 'black' 
	   	   
	   //구글 크롬브라우저에서는 black이 아니라 #000000로 체크해야 함
	   //context.strokeStyle = (context.strokeStyle == '#000000') ? 'red' : 'black' 
	},	
	
	changeLineWidth : function(){
	  context.lineWidth = context.lineWidth + 5;
	},	
	
	changeBackColor : function(){
          colors = ['yellow','green','pink','gray','white','blue','orange','gold','khaki','lime','olive',''];
          index = Math.round(Math.random() * 11); 
          canvas.style.background = colors[index];
	}		  	
});

Ext.setup({
  onReady: function(){                
    var canvasID = 'drawCanvas';
    this.ui = new Demo.Canvas.SimpleDrawOjb({
      canvasID : 'drawCanvas'
    }); 
  }
});
