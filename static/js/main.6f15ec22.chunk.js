(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n(24)},17:function(e,t,n){},18:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),l=n(10),i=n.n(l),r=(n(17),n(18),n(11)),c=n(2),d=n(3),s=n(4),u=n(6),h=n(5),m=n(7),f=n(1),p=n.n(f),g=(p.a.func,p.a.string,p.a.bool,p.a.string,p.a.func,p.a.func,p.a.arrayOf(p.a.shape({title:p.a.string,id:p.a.string,completed:p.a.bool})),p.a.func,p.a.func,p.a.func,p.a.func,p.a.arrayOf(p.a.shape({title:p.a.string,id:p.a.string,completed:p.a.bool})),p.a.arrayOf(p.a.shape({title:p.a.string,id:p.a.string,completed:p.a.bool})),p.a.string,p.a.func,n(21)),b=function(e){function t(){var e,n;Object(d.a)(this,t);for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return(n=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={titleOfTodo:""},n.handleChangeInput=function(e){var t=e.target;n.setState({titleOfTodo:t.value.replace(/^\s/,"")})},n.handleInputTodo=function(e){e.preventDefault(),(0,n.props.addNewTodo)({title:n.state.titleOfTodo,id:g(),completed:!1}),n.setState({titleOfTodo:""})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.titleOfTodo;return a.a.createElement("header",{className:"header"},a.a.createElement("h1",null,"todos"),a.a.createElement("form",{onSubmit:this.handleInputTodo},a.a.createElement("input",{className:"new-todo",placeholder:"What needs to be done?",onChange:this.handleChangeInput,value:e})))}}]),t}(a.a.Component),T=n(8),O=n.n(T),E=function(e){function t(){var e,n;Object(d.a)(this,t);for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return(n=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={isEditing:!1,editedFilmTitle:n.props.todoTitle},n.handleDoubleClick=function(){n.setState({isEditing:!0})},n.handleChangeEdit=function(){n.setState({isEditing:!1})},n.onEditChange=function(e){var t=e.target;n.setState({editedFilmTitle:t.value})},n.handleEditSubmit=function(){var e=n.props,t=e.handleDoubleClickEditTitle,o=e.todoId,a=e.handleDeleteTodo,l=n.state.editedFilmTitle;n.setState({isEditing:!1}),""!==l?t(l,o):a(o)},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.todoTitle,o=t.todoStatus,l=t.todoId,i=t.handleTodoStatus,r=t.handleDeleteTodo,c=this.state.editedFilmTitle,d=O()({editing:this.state.isEditing,completed:o});return a.a.createElement("li",{className:d},this.state.isEditing?a.a.createElement("form",{onSubmit:this.handleEditSubmit},a.a.createElement("input",{type:"text",className:"edit",value:c,onChange:function(t){return e.onEditChange(t)},onBlur:this.handleChangeEdit})):a.a.createElement("div",{className:"view"},a.a.createElement("input",{type:"checkbox",className:"toggle",id:l,checked:o,onChange:function(){return i(l)}}),a.a.createElement("p",{className:"label",onDoubleClick:this.handleDoubleClick,htmlFor:l},n),a.a.createElement("button",{type:"button",className:"destroy",onClick:function(){return r(l)}})))}}]),t}(a.a.Component),S=function(e){var t=e.todosList,n=e.handleTodoStatus,o=e.handleDeleteTodo,l=e.handleDoubleClickEditTitle;return a.a.createElement("ul",{className:"todo-list"},t.length?t.map(function(e){var i=e.title,r=e.completed,c=e.id;return a.a.createElement(E,{handleDoubleClickEditTitle:l,todoStatus:r,todoTitle:i,handleTodoStatus:n,handleDeleteTodo:o,key:c,todoId:c,todosList:t})}):null)},v=function(e){var t=e.handleButtonChange,n=e.todosList,o=e.originalTodos,l=e.buttonSelected,i=e.handleDeleteAllCompleted,r=O()("clear-completed",{disable:!n.some(function(e){return e.completed})}),c=O()("footer",{hidden:!o.length});return a.a.createElement("footer",{className:c},a.a.createElement("span",{className:"todo-count"},o.length&&o.filter(function(e){return!e.completed}).length," items left"),a.a.createElement("ul",{className:"filters"},a.a.createElement("li",null,a.a.createElement("a",{href:"#/",className:"all"===l?"selected":"",onClick:function(){return t("all")}},"All")),a.a.createElement("li",null,a.a.createElement("a",{href:"#/active",onClick:function(){return t("active")},className:"active"===l?"selected":""},"Active")),a.a.createElement("li",null,a.a.createElement("a",{href:"#/completed",onClick:function(){return t("completed")},className:"completed"===l?"selected":""},"Completed"))),a.a.createElement("button",{type:"button",className:r,onClick:i},"Clear completed"))};function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(n,!0).forEach(function(t){Object(r.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var y=function(e){function t(){var e,n;Object(d.a)(this,t);for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return(n=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={todos:[],originalTodos:[],buttonSelected:"all"},n.handleAddNewTodo=function(e){e.title.length>0&&n.setState(function(t){return{todos:[].concat(Object(c.a)(t.todos),[e]),originalTodos:[].concat(Object(c.a)(t.originalTodos),[e])}}),n.handleButtonChange(n.state.buttonSelected)},n.handleDoubleClickEditTitle=function(e,t){n.setState(function(n){return{todos:Object(c.a)(n.todos).map(function(n){return n.id===t?j({},n,{title:e}):n}),originalTodos:Object(c.a)(n.originalTodos).map(function(n){return n.id===t?j({},n,{title:e}):n})}})},n.handleDeleteTodo=function(e){n.setState(function(t){return{todos:Object(c.a)(t.todos).filter(function(t){return t.id!==e}),originalTodos:Object(c.a)(t.originalTodos).filter(function(t){return t.id!==e})}})},n.handleTodoStatus=function(e){n.setState(function(t){return{todos:Object(c.a)(t.todos).map(function(t){return t.id===e?j({},t,{completed:!t.completed}):t}),originalTodos:Object(c.a)(t.originalTodos).map(function(t){return t.id===e?j({},t,{completed:!t.completed}):t})}}),n.handleButtonChange(n.state.buttonSelected)},n.handleCompletedAll=function(){n.setState(function(e){return{todos:Object(c.a)(e.todos).map(function(t){return j({},t,{completed:!e.todos.every(function(e){return e.completed})})}),originalTodos:Object(c.a)(e.originalTodos).map(function(t){return j({},t,{completed:!e.originalTodos.every(function(e){return e.completed})})})}}),n.handleButtonChange(n.state.buttonSelected)},n.handleButtonChange=function(e){switch(e){case"all":n.setState(function(e){return{todos:Object(c.a)(e.originalTodos),buttonSelected:"all"}});break;case"active":n.setState(function(e){return{todos:Object(c.a)(e.originalTodos).filter(function(e){return!e.completed}),buttonSelected:"active"}});break;case"completed":n.setState(function(e){return{todos:Object(c.a)(e.originalTodos).filter(function(e){return e.completed}),buttonSelected:"completed"}})}},n.handleDeleteAllCompleted=function(){n.setState(function(e){return{todos:Object(c.a)(e.todos).filter(function(e){return!e.completed}),originalTodos:Object(c.a)(e.originalTodos).filter(function(e){return!e.completed})}})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState({todos:JSON.parse(localStorage.getItem("todosList"))||[],originalTodos:JSON.parse(localStorage.getItem("originalTodosList"))||[]})}},{key:"componentDidUpdate",value:function(e){var t=this.state.todos;t!==e.todos&&(localStorage.setItem("originalTodosList",JSON.stringify(t)),localStorage.setItem("todosList",JSON.stringify(t)))}},{key:"render",value:function(){var e=this.state,t=e.todos,n=e.originalTodos,o=e.buttonSelected;return a.a.createElement("section",{className:"todoapp"},a.a.createElement(b,{addNewTodo:this.handleAddNewTodo}),a.a.createElement("section",{className:"main",style:{display:"block"}},a.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",onChange:this.handleCompletedAll}),a.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),a.a.createElement(S,{todosList:t,handleTodoStatus:this.handleTodoStatus,handleDeleteTodo:this.handleDeleteTodo,handleDoubleClickEditTitle:this.handleDoubleClickEditTitle})),a.a.createElement(v,{handleButtonChange:this.handleButtonChange,originalTodos:n,todosList:t,buttonSelected:o,handleDeleteAllCompleted:this.handleDeleteAllCompleted}))}}]),t}(a.a.Component);i.a.render(a.a.createElement(y,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.6f15ec22.chunk.js.map