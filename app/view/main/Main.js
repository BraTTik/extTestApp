
Ext.define('TestApp.view.main.Main', {

    extend: 'Ext.panel.Panel',
    title: 'Учёт товаров',

    requires: [
        'TestApp.view.list.ListTab',
        'TestApp.view.util.Button',
        'TestApp.view.main.MainController',
        'Ext.plugin.Viewport',
        'Ext.tab.Panel',
    ],
    xtype: 'mainview',
    controller: 'maincontroller',
    
    items: [{
        xtype: 'button',
        text: 'Товары',
        listeners: {
            click: 'onSuppliesClick'
        }
    },{
        xtype: 'button',
        text: 'Выход',
        listeners: {
            click: 'onLogoutClick',
        }
    },{
        xtype: 'tabpanel',
    }]
});