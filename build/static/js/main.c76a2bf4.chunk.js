(this["webpackJsonpexer-tracker"]=this["webpackJsonpexer-tracker"]||[]).push([[0],{173:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(4),c=a.n(r),s=a(37),i=a.n(s),o=(a(89),a(90),a(24)),l=a(7),d=(a(91),a(17)),u=a(18),h=a(20),j=a(19),b=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("nav",{className:"navbar navbar-dark bg-dark navbar-expand-lg",children:[Object(n.jsx)(o.b,{to:"/",className:"navbar-brand",children:"ExcerTracker"}),Object(n.jsx)("div",{className:"collapse navbar-collapse",children:Object(n.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(n.jsx)("li",{className:"navbar-item",children:Object(n.jsx)(o.b,{to:"/",className:"nav-link",children:"Exercises"})}),Object(n.jsx)("li",{className:"navbar-item",children:Object(n.jsx)(o.b,{to:"/create",className:"nav-link",children:"Create Exercise Log"})}),Object(n.jsx)("li",{className:"navbar-item",children:Object(n.jsx)(o.b,{to:"/user",className:"nav-link",children:"Create User"})})]})})]})}}]),a}(r.Component),m=a(9),x=a(13),p=a.n(x),O=function(e){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e.exercise.username}),Object(n.jsx)("td",{children:e.exercise.description}),Object(n.jsx)("td",{children:e.exercise.duration}),Object(n.jsx)("td",{children:e.exercise.date.substring(0,10)}),Object(n.jsxs)("td",{children:[Object(n.jsx)(o.b,{to:"/edit/".concat(e.exercise._id),children:"edit"})," |",Object(n.jsx)("a",{href:"#",onClick:function(){e.deleteExercise(e.exercise._id)},children:"delete"})]})]})},v=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).state={exercises:[]},e.deleteExercise=e.deleteExercise.bind(Object(m.a)(e)),e.exerciseList=e.exerciseList.bind(Object(m.a)(e)),e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://exer-tracker-api.herokuapp.com/exer-tracker/exercises").then((function(t){e.setState({exercises:t.data.data})})).catch((function(e){console.log(e)}))}},{key:"deleteExercise",value:function(e){p.a.delete("https://exer-tracker-api.herokuapp.com/exer-tracker/exercise/".concat(e)).then((function(e){console.log(e.data)})).catch((function(e){console.log("Error deleting exercise: ".concat(e))}));var t=this.state.exercises.filter((function(t){return t._id!==e}));this.setState({exercises:t})}},{key:"exerciseList",value:function(){var e=this;return this.state.exercises.map((function(t){return Object(n.jsx)(O,{exercise:t,deleteExercise:e.deleteExercise},t._id)}))}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:"Logged Exercises"}),Object(n.jsxs)("table",{className:"table",children:[Object(n.jsx)("thead",{className:"thead-light",children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Username"}),Object(n.jsx)("th",{children:"Description"}),Object(n.jsx)("th",{children:"Duration"}),Object(n.jsx)("th",{children:"Date"}),Object(n.jsx)("th",{children:"Actions"})]})}),Object(n.jsx)("tbody",{children:this.exerciseList()})]})]})}}]),a}(r.Component),f=a(33),g=a.n(f),k=a(40),N=a(29),y=a(41),C=a.n(y),S=(a(72),function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).state={username:"",description:"",duration:0,date:new Date,users:[]},e.changeHandler=e.changeHandler.bind(Object(m.a)(e)),e.dateChangeHandler=e.dateChangeHandler.bind(Object(m.a)(e)),e.onSubmit=e.onSubmit.bind(Object(m.a)(e)),e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://exer-tracker-api.herokuapp.com/exer-tracker/users").then((function(t){var a=[];t.data.data.length>0?(t.data.data.map((function(e){return a.push(e.username)})),e.setState({users:a,username:a[0]}),console.log(a)):console.log("No User data available")})).catch((function(e){return console.log("Unable to get user data: ".concat(e))}))}},{key:"changeHandler",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(N.a)({},a,n))}},{key:"dateChangeHandler",value:function(e){this.setState({date:e})}},{key:"onSubmit",value:function(){var e=Object(k.a)(g.a.mark((function e(t){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={username:this.state.username,description:this.state.description,duration:this.state.duration,date:this.state.date},console.log(a),e.next=5,p.a.post("https://exer-tracker-api.herokuapp.com/exer-tracker/exercise/add",a).then((function(e){return console.log(e.data)})).catch((function(e){return console.log("Unable to create exercise: ".concat(e))}));case 5:window.location="/";case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:"Create New Exercise Log"}),Object(n.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Username:"}),Object(n.jsx)("select",{ref:"userInput",required:!0,className:"form-control",value:this.state.username,name:"username",onChange:this.changeHandler,children:this.state.users.map((function(e){return Object(n.jsx)("option",{value:e,children:e},e)}))})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Description: "}),Object(n.jsx)("input",{type:"text",required:!0,className:"form-control",name:"description",value:this.state.description,onChange:this.changeHandler})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Duration(in minutes):"}),Object(n.jsx)("input",{type:"text",className:"form-control",name:"duration",value:this.state.duration,onChange:this.changeHandler})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Date:"}),Object(n.jsx)("div",{children:Object(n.jsx)(C.a,{selected:this.state.date,onChange:this.dateChangeHandler})})]}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"submit",value:"Create Exercise Log",className:"btn btn-primary"})})]})]})}}]),a}(r.Component)),H=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={username:"",description:"",duration:0,date:new Date,users:[]},n.changeHandler=n.changeHandler.bind(Object(m.a)(n)),n.dateChangeHandler=n.dateChangeHandler.bind(Object(m.a)(n)),n.onSubmit=n.onSubmit.bind(Object(m.a)(n)),n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://exer-tracker-api.herokuapp.com/exer-tracker/exercise/".concat(this.props.match.params.id)).then((function(t){e.setState({username:t.data.data.username,description:t.data.data.description,duration:t.data.data.duration,date:new Date(t.data.data.date)}),console.log(t.data)})).catch((function(e){console.log(e)})),p.a.get("https://exer-tracker-api.herokuapp.com/exer-tracker/users").then((function(t){var a=[];t.data.data.length>0?(t.data.data.map((function(e){return a.push(e.username)})),e.setState({users:a})):console.log("No User data available")})).catch((function(e){return console.log("Unable to get user data: ".concat(e))}))}},{key:"changeHandler",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(N.a)({},a,n))}},{key:"onSubmit",value:function(){var e=Object(k.a)(g.a.mark((function e(t){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={username:this.state.username,description:this.state.description,duration:this.state.duration,date:this.state.date},e.next=4,p.a.post("https://exer-tracker-api.herokuapp.com/exer-tracker/exercise/update/".concat(this.props.match.params.id),a).then((function(e){return console.log(e.data)})).catch((function(e){return console.log("Unable to edit exercise: ".concat(e))}));case 4:window.location="/";case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"dateChangeHandler",value:function(e){this.setState({date:e})}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:"Edit Exercise Log"}),Object(n.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Username:"}),Object(n.jsx)("select",{ref:"userInput",required:!0,className:"form-control",value:this.state.username,name:"username",onChange:this.changeHandler,children:this.state.users.map((function(e){return Object(n.jsx)("option",{value:e,children:e},e)}))})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Description: "}),Object(n.jsx)("input",{type:"text",required:!0,className:"form-control",name:"description",value:this.state.description,onChange:this.changeHandler,placeholder:this.state.description})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Duration(in minutes):"}),Object(n.jsx)("input",{type:"text",className:"form-control",name:"duration",value:this.state.duration,onChange:this.changeHandler})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Date:"}),Object(n.jsx)("div",{children:Object(n.jsx)(C.a,{selected:this.state.date,onChange:this.dateChangeHandler})})]}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"submit",value:"Edit Exercise Log",className:"btn btn-primary"})})]})]})}}]),a}(r.Component),D=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).state={username:""},e.changeHandler=e.changeHandler.bind(Object(m.a)(e)),e.onSubmit=e.onSubmit.bind(Object(m.a)(e)),e}return Object(u.a)(a,[{key:"changeHandler",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(N.a)({},a,n))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username};console.log(t),p.a.post("https://exer-tracker-api.herokuapp.com/exer-tracker/user/add",t).then((function(e){return console.log(e.data)})).catch((function(e){return console.log("Unable to add User: ".concat(e))})),this.setState({username:""}),alert("User Added Successfully")}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:"Create New User"}),Object(n.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Username:"}),Object(n.jsx)("input",{type:"text",required:!0,className:"form-control",name:"username",value:this.state.username,onChange:this.changeHandler})]}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"submit",value:"Create User",className:"btn btn-primary"})})]})]})}}]),a}(r.Component);var E=function(){return Object(n.jsx)(o.a,{children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(b,{}),Object(n.jsx)("br",{}),Object(n.jsx)(l.a,{path:"/",exact:!0,component:v}),Object(n.jsx)(l.a,{path:"/edit/:id",component:H}),Object(n.jsx)(l.a,{path:"/create",component:S}),Object(n.jsx)(l.a,{path:"/user",component:D})]})})};i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(E,{})}),document.getElementById("root"))},89:function(e,t,a){},91:function(e,t,a){}},[[173,1,2]]]);
//# sourceMappingURL=main.c76a2bf4.chunk.js.map