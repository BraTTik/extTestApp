
Ext.define('TestApp.view.login.Login', {
    extend: 'Ext.window.Window',
    xtype: 'loginwindow',

    requires: ['TestApp.view.login.LoginController'],
    controller: 'login',

    title: 'Login',
    autoShow: true,
    closable: false,
    bodyPadding: 10,

    items: [
        {
            xtype: 'form',
            reference: 'form',
            items: [
                {
                    fieldLabel: 'Логин',
                    xtype: 'textfield',
                    name: 'login',
                    allowBlank: false,
                },
                {
                    fieldLabel: 'Пароль',
                    xtype: 'textfield',
                    inputType: 'password',
                    name: 'password',
                    allowBlank: false,
                },
            ],

            buttons: [
                {
                    text: 'Вход',
                    formBind: true,
                    listeners: {
                        click: 'onLoginClick',
                    }
                }
            ]
        },
    ],

})