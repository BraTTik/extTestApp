
Ext.define('TestApp.view.goodcard.GoodCardController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.goodcardcontroller',

    onSaveClick: function(sender){
        var main = Ext.ComponentQuery.query('mainview');
        var form = sender.up('form');
        var card = sender.up('goodcard');

        var id = form.down('displayfield').value;
        var description = form.down('displayfield[name=description]').value;
        var formValues = form.getValues()
        var values = {
            id: id, 
            name: formValues.name, 
            description: description, 
            price: Number(formValues.price).toFixed(2), 
            amount: formValues.amount
        };

        var store = main[0].down('mainlist').getStore();

        var oldRecord = store.getAt(id-1);
        var oldStates = this.getPriceAndAmountFromRecord(oldRecord);

        var newRecord = store.add(values)[0];
        var newStates = this.getPriceAndAmountFromRecord(newRecord);

        if(newRecord){
            this.sendMessage(oldStates, newStates, newRecord.data.name);
            store.sync();
        }
        card.close();
    },

    sendMessage: function(oldStates, newStates, name){
        var changes = [];
        if(newStates[0] !== oldStates[0]){
            changes.push('Цена изменилась с ' + oldStates[0] + ' ---> ' + newStates[0])
        }
        if(newStates[1] !== oldStates[1]){
            changes.push('Кол-во изменилось с ' + oldStates[1] + ' ---> ' + newStates[1])
        }

        var message = changes.join('<br>');
        if(changes.length){
            Ext.Msg.alert('Изменения в ' + name, message);
        }
    },

    getPriceAndAmountFromRecord: function(record) {
        var price = record.data.price;
        var amount = record.data.amount;

        return [price, amount];
    },

    onCloseClick: function(sender){
        var win = sender.up('goodcard');
        win.close();
    },
    onInputChange: function(sender){
        var saveButton = sender.up('goodcard').down('button[itemId=savebutton]');
        saveButton.setDisabled(false);
    }
})