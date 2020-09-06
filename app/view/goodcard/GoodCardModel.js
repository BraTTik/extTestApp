
Ext.define('TestApp.view.goodcard.GoodCardModel', {
    extend: 'Ext.app.ViewModel',

    requires: [
        'TestApp.model.Goods',
        'TestApp.store.Goods',
    ],

    alias: 'viewmodel.goodcardmodel',
    stores: {
        goods: {
            model: 'goods',
            autoLoad: true,
            autoSync: true,
        }
    },

})