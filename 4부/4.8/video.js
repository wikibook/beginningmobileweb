Ext.setup({
    onReady: function() {
        var pnl = new Ext.Panel({
            fullscreen: true,
            layout: {
                type: 'vbox',
                pack: 'center'
            },
            items: [{
                xtype: 'video',
                url: 'space.mp4',
                loop: true,
                width: 500,
                height: 400,
                posterUrl: 'Screenshot.png'
            }]            
        })
    }
});
