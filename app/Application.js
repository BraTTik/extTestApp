/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('TestApp.Application', {
    extend: 'Ext.app.Application',
    
    requires: [
        'TestApp.view.main.Main',
        'TestApp.view.login.Login',
        'TestApp.view.goodcard.GoodCard',
        'Ext.window.Window',
    ],

    //mainView: 'TestApp.view.main.Main',

    launch: function(){
        this.showLoginWindow();
    },

    onLoginClose: function(){
        this.setMainView('TestApp.view.main.Main');
        const main = this.getMainView();
        main.on({
            onlogout: this.onLogout,
            scope: this,
        });
    },    

    onLogout: function(){
        this.showLoginWindow();
    },

    showLoginWindow: function(){
        const loginWindow = Ext.create('TestApp.view.login.Login');
        loginWindow.on('loginclose', 'onLoginClose', this);
    }

});
