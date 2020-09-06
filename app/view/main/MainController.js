
Ext.define('TestApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.maincontroller',

    onSuppliesClick: function(button){
        const tabpanel = button.up('panel').down('tabpanel');
        tabpanel.add({
            xtype: 'listtab',
            title: 'Товары',
        });
    },

    onLogoutClick: function(){
        this.fireViewEvent('onlogout');
        this.getView().close();
    },

})