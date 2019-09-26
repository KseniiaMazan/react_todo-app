(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,o){e.exports=o(21)},15:function(e,t,o){},16:function(e,t,o){},17:function(e,t,o){},21:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),l=o(8),r=o.n(l),c=(o(15),o(16),o(9)),i=o(1),d=o(2),s=o(3),u=o(5),m=o(4),p=o(6),h=(o(17),o(18)),f=function(e){function t(){var e,o;Object(d.a)(this,t);for(var n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return(o=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).state={titleOfTodo:""},o.handleChangeInput=function(e){var t=e.target;o.setState({titleOfTodo:t.value})},o.handleInputTodo=function(e){e.preventDefault(),(0,o.props.addNewTodo)({title:o.state.titleOfTodo,id:h.uniqueId("id_"),completed:!1}),o.setState({titleOfTodo:""})},o}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.titleOfTodo;return a.a.createElement("header",{className:"header"},a.a.createElement("h1",null,"todos"),a.a.createElement("form",{onSubmit:this.handleInputTodo},a.a.createElement("input",{className:"new-todo",placeholder:"What needs to be done?",onChange:this.handleChangeInput,value:e})))}}]),t}(a.a.Component),b=function(e){var t=e.todoTitle,o=e.completed,n=e.todoId,l=e.onChangeCompleted;return a.a.createElement("li",{className:"todo"},a.a.createElement("div",{className:"view"},a.a.createElement("input",{type:"checkbox",className:"toggle",id:"todo-1",checked:o,value:o,onChange:function(){return l(n)}}),a.a.createElement("label",{htmlFor:"todo-1"},t),a.a.createElement("button",{type:"button",className:"destroy"})))},g=function(e){var t=e.todosList,o=e.onChangeCompleted;return a.a.createElement("ul",{className:"todo-list"},t.length?t.map(function(e){var t=e.title,n=e.completed,l=e.id;return a.a.createElement(b,{todoStatus:n,todoTitle:t,onChangeCompleted:o,key:l,todoId:l})}):null)},O=function(e){var t=e.onButtonAllChange,o=e.onButtonCompletedChange,n=e.onButtonActiveChange,l=e.todosList;return a.a.createElement("footer",{className:"footer",style:{display:"block"}},a.a.createElement("span",{className:"todo-count"},l.length&&l.filter(function(e){return!e.completed}).length," items left"),a.a.createElement("ul",{className:"filters"},a.a.createElement("li",null,a.a.createElement("a",{href:"#/",className:"selected",onClick:t},"All")),a.a.createElement("li",null,a.a.createElement("a",{href:"#/active",onClick:n},"Active")),a.a.createElement("li",null,a.a.createElement("a",{href:"#/completed",onClick:o},"Completed"))),a.a.createElement("button",{type:"button",className:"clear-completed",style:{display:"block"}}))};function E(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,n)}return o}function v(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?E(o,!0).forEach(function(t){Object(c.a)(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):E(o).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}var y=function(e){function t(){var e,o;Object(d.a)(this,t);for(var n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return(o=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).state={todos:[],originalTodos:[]},o.handleAddNewTodo=function(e){o.setState(function(t){return{todos:[].concat(Object(i.a)(t.todos),[e]),originalTodos:[].concat(Object(i.a)(t.originalTodos),[e])}})},o.handleTodoStatus=function(e){o.setState(function(t){return{todos:Object(i.a)(t.todos).map(function(t){return t.id===e?v({},t,{completed:!t.completed}):t}),originalTodos:Object(i.a)(t.originalTodos).map(function(t){return t.id===e?v({},t,{completed:!t.completed}):t})}})},o.handleShowAllTodos=function(){o.setState(function(e){return{todos:Object(i.a)(e.originalTodos)}})},o.handleActiveTodos=function(){o.setState(function(e){return{todos:Object(i.a)(e.originalTodos).filter(function(e){return!e.completed})}})},o.handleCompletedTodos=function(){o.setState(function(e){return{todos:Object(i.a)(e.originalTodos).filter(function(e){return e.completed})}})},o}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.todos,o=e.originalTodos;return a.a.createElement("section",{className:"todoapp"},a.a.createElement(f,{addNewTodo:this.handleAddNewTodo}),a.a.createElement("section",{className:"main",style:{display:"block"}},a.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all"}),a.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),a.a.createElement(g,{todosList:t,onChangeCompleted:this.handleTodoStatus})),a.a.createElement(O,{onButtonAllChange:this.handleShowAllTodos,onButtonCompletedChange:this.handleCompletedTodos,onButtonActiveChange:this.handleActiveTodos,todosList:o}))}}]),t}(a.a.Component);r.a.render(a.a.createElement(y,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.2d62929d.chunk.js.map