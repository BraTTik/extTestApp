Ext.define('TestApp.store.Goods', {
    extend: 'Ext.data.Store',

    requires: [
        'TestApp.model.Goods',
    ],

    model: 'TestApp.model.Goods',
    alias: 'store.goods',

    fields: [
        'name', 'description', 'phone', 'price', 'amount'
    ],

    autoSync: true,
    sorters: 'id',

    data: { items: [
        { id: '1', name: 'Notebook Lenovo', description: "Ноутбук ThinkPad model-1234", price: "10.00", amount: "1" },
        { id: '2', name: 'Keyboard OKLICK', description: "Клавиатура беспроводная OKLICK",  price: "10.00", amount: "2" },
        { id: '3', name: 'Mouse Genius', description: "Супер крутая игровая мышь", price: "10.95", amount: "5" },
        { id: '4', name: 'Network Adapter', description: "Сетевой адаптер WIFI", price: "20.99", amount: "0" },
        { id: '5', name: 'Keybord Apple', description: "Клавиатура Apple, белая", price: "100.00", amount: "2" },
        { id: '6', name: 'Flash USB 16GB', description: "USB Флешка 16GB, чёрная", price: "5.99", amount: "10" },
        { id: '7', name: 'Notebook Acer', description: "Ноутбук Acer model-3GPD4389", price: "30.00", amount: "2" },
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }

});
