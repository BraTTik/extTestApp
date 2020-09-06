
Ext.define('TestApp.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',


    onLoginClick: function(element){
        const window = element.up('loginwindow');
        const login = window.down('textfield[name=login]').value;
        const password = window.down('textfield[name=password]').value;

        if(this.checkLoginPassword(login, password)){
            this.fireViewEvent('loginclose');
            this.getView().close();
        }else{
            Ext.Msg.alert('Ошибка', 'Логин и пароль не совпадают.');
        }
    },

    checkLoginPassword: function(login, password){
        return login === 'admin' && password === 'padmin';
    }



});