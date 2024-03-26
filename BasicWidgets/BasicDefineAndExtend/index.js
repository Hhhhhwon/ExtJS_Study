Ext.onReady(function(){
    Ext.define('Mypanel',{
        extend:'Ext.panel.Panel',
        alias:'widget.mypanel',
        bodyStyle:'background-color:red',
    });
    /*
    let myPanel = Ext.create('Mypanel',{
        renderTo:document.body,
        title:'상속받은패널',
        width:400,
        height:400,
    })
    */

    var panel =  Ext.create('Ext.panel.Panel',{
        renderTo:document.body,
        title:'상속받은패널',
        width:600,
        height:600,
        items:[{
            xtype:'mypanel',
            width:400,
            height:400,

        }]                 
    })
});