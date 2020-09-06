
Ext.define('TestApp.view.goodcard.GoodCard', {
    extend: 'Ext.window.Window',

    requires: [
        'TestApp.store.Goods',
        'TestApp.view.goodcard.GoodCardModel'
    ],
    controller: 'goodcardcontroller',
    autoShow: true,

    xtype: 'goodcard',
    store :{
        type: 'goods',
    },
    items:[{
        xtype: 'form',
        bodyPadding: 15,
        items: [{
            xtype: 'displayfield',
            fieldLabel: 'ID',
            name: 'id',
        },{
            xtype: 'displayfield',
            fieldLabel: 'Описание',
            name: 'description'
        },{
            xtype: 'numberfield',
            fieldLabel: 'Цена',
            name: 'price',
            minValue: 0,
            enableKeyEvents: true,
            listeners: {
                focus: 'onInputChange'
            }
        },{
            xtype: 'numberfield',
            fieldLabel: 'Кол-во',
            name: 'amount',
            minValue: 0,
            allowDecimals: false,
            enableKeyEvents: true,
            listeners: {
                focus: 'onInputChange'
            }
        },{
            xtype: 'hiddenfield',
            name: 'name'
        }],
        
        buttons: [{
            text: 'Сохранить',
            itemId: 'savebutton',
            disabled: true,
            listeners: {
                click: 'onSaveClick',
            }
        },{
            text: 'Отмена',
            listeners:{
                click: 'onCloseClick',
            }
        }],
    }]

})