var db = firebase.initializeApp({
    apiKey: "AIzaSyB_Lq1Ht-KtKj7l-s-45tt5IQhbIF1Jc5E",
    authDomain: "bpcoders-8092a.firebaseapp.com",
    databaseURL: "https://bpcoders-8092a.firebaseio.com",
    projectId: "bpcoders-8092a",
    storageBucket: "bpcoders-8092a.appspot.com",
    messagingSenderId: "30538222108"
}).database();
var todosRef = db.ref('todos');
new Vue({
    el: '#app',
    data: {
        newTodoText: ''
    },
    firebase: {
        todos: todosRef.limitToLast(25)
    },
    methods: {
        addTodo: function () {
            if (this.newTodoText) {
                todosRef.push({
                    text: this.newTodoText
                })
                this.newTodoText = ''
            }
        },
        updateTodoText: function (todo, newText) {
            todosRef.child(todo['.key']).child('text').set(newText)
        },
        removeTodo: function (todo) {
            todosRef.child(todo['.key']).remove()
        }
    }
})