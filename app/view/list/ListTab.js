
Ext.define('TestApp.view.list.ListTab', {
    extend: 'Ext.panel.Panel',

    requires: [
        'TestApp.view.list.List',
        'TestApp.view.list.ListController',
        'TestApp.view.goodcard.GoodCard',
    ],

    controller: 'listcontroller',
    xtype: 'listtab',

    items: [{
        xtype: 'textfield',
        fieldLabel: 'ID',
        name: 'filterId',
        margin: 15,
        listeners: {
            specialkey: 'onKeyPress'
        }
    },{
        xtype: 'textfield',
        fieldLabel: 'Описание',
        name: 'descriptionFilter',
        margin: 15,
        listeners: {
            specialkey: 'onKeyPress'
        }
    },{
        xtype: 'mainlist',
    }]
})