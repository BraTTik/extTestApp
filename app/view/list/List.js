
Ext.define('TestApp.view.list.List', {
    extend: 'Ext.grid.Panel',
    
    requires: [
        'TestApp.store.Goods',
    ],
    title: 'Список товаров',
    controller: 'listcontroller',
    xtype: 'mainlist',

     
    store: {
        type: 'goods'
    },

    columns: [{
        text: 'ID',
        dataIndex: 'id',
        flex: .5,
    },{
        text: 'Имя',
        dataIndex: 'name',
        flex:1,
        listeners: {
            click: 'onGoodClick',
        }
    },{
        text: 'Описание',
        dataIndex: 'description',
        flex: 2,
    },{
        text: 'Цена',
        dataIndex: 'price',
        flex: .5
    },{
        text: 'Кол-во',
        dataIndex: 'amount',
        flex: .5,
        renderer: function(value){
            var backgroundColor = ''
            if(value == 0){
                backgroundColor = '#f00'
            }
            return Ext.String.format('<span style="background-color:{0}; display: block">{1}</span>', backgroundColor, value);
        }

    }]


})
