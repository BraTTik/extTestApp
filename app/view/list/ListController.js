
Ext.define('TestApp.view.list.ListController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.listcontroller',

    onGoodClick: function(e, node){
        const store = e.getStore();
        const name = node.firstChild.innerText;

        const id = store.find('name', name);
        const record = store.getAt(id);

        const card = Ext.create('TestApp.view.goodcard.GoodCard', {
            title: 'Карточка товара: ' + record.data.name,
        });
        const form = card.down('form');
        form.loadRecord(record);
    },
    
    onKeyPress: function(el, event){
        if(event.getKey() === event.ENTER){
            const value = el.value;
            const inputName = el.name;
            const store = el.up('listtab').down('grid').getStore();
            store.clearFilter();
            if(!value){
                return
            }
            switch(inputName){
                case 'filterId':
                    store.addFilter(this.filterById(value));
                    return;
                case 'descriptionFilter':
                    store.addFilter(this.filterByDescription(value));
                    return;

            }
        }
    },
    
    filterById: function(id){
        return function(item){
            return item.id === id;
        }
    },

    filterByDescription: function(string){
        return function(item){
            const description = item.data.description.toLowerCase();
            const str = string.toLowerCase();
            return description.includes(str);
        }
    }

})