(this["webpackJsonpreact-ant-design"]=this["webpackJsonpreact-ant-design"]||[]).push([[0],{195:function(e,t,n){},196:function(e,t,n){},197:function(e,t){},380:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),l=n(8),r=n.n(l),o=n(383),i=(n(143),n(195),n(196),n(97)),s=n(98),d=n(110),j=n(107),u=n(32),h=n(384),b=n(99),O=n.n(b),p=n(4),x=[{title:"Name",dataIndex:"name",sorter:!0,render:function(e){return"".concat(e.first," ").concat(e.last)},width:"20%"},{title:"Gender",dataIndex:"gender",filters:[{text:"Male",value:"male"},{text:"Female",value:"female"}],width:"20%"},{title:"Email",dataIndex:"email"}],g=function(e){return Object(u.a)({results:e.pagination.pageSize,page:e.pagination.current},e)},f=(c.a.Component,n(68)),m=[{title:"Name",dataIndex:"name",sorter:!0,render:function(e){return"".concat(e.first," ").concat(e.last)},width:"20%"},{title:"Gender",dataIndex:"gender",filters:[{text:"Male",value:"male"},{text:"Female",value:"female"}],width:"20%"},{title:"Email",dataIndex:"email"}],v=function(e){return Object(u.a)({results:e.pagination.pageSize,page:e.pagination.current},e)};var y=function(){var e=Object(a.useState)(!1),t=Object(f.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)([]),r=Object(f.a)(l,2),o=r[0],i=r[1],s=Object(a.useState)({current:1,pageSize:10}),d=Object(f.a)(s,2),j=d[0],b=d[1];Object(a.useEffect)((function(){x({pagination:j})}),[]);var x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};c(!0),O()({url:"https://randomuser.me/api",method:"get",type:"json",data:v(e)}).then((function(t){console.log(!1),c(!1),i(t.results),b(Object(u.a)(Object(u.a)({},e.pagination),{},{total:200}))}))};return Object(p.jsx)("div",{children:Object(p.jsx)(h.a,{columns:m,rowKey:function(e){return e.login.uuid},dataSource:o,pagination:j,loading:n,onChange:function(e,t,n){x(Object(u.a)({sortField:n.field,sortOrder:n.order,pagination:e},t))}})})},S=n(108);function C(){return Object(p.jsx)("div",{children:Object(p.jsxs)(S.a.Group,{onChange:function(e){console.log("radio checked:".concat(e.target.value))},defaultValue:"a",children:[Object(p.jsx)(S.a.Button,{value:"a",children:"Hangzhou"}),Object(p.jsx)(S.a.Button,{value:"b",children:"Shanghai"}),Object(p.jsx)(S.a.Button,{value:"c",children:"Beijing"}),Object(p.jsx)(S.a.Button,{value:"d",children:"Chengdu"})]})})}var w=n(113);function k(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(w.a,{type:"primary",children:"Primary"}),Object(p.jsx)(w.a,{children:"Default"}),Object(p.jsx)(w.a,{type:"dashed",children:"Dashed"}),Object(p.jsx)(w.a,{type:"danger",children:"Danger"}),Object(p.jsx)(w.a,{type:"link",children:"Link"})]})}for(var B=n(79),F=n(387),E=B.a.Option,L=[],A=10;A<35;A++)L.push(Object(p.jsx)(E,{children:A.toString(36)+A},A.toString(36)+A));for(var D=[],I=10;I<35;I++)D.push(I.toString(36)+I);var T=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).handleSubmit=function(t){t.preventDefault(),e.props.form.validateFieldsAndScroll((function(e,t){e||console.log("Received values of form: ",t)}))},e.handleSelectAll=function(e){return e&&e.length&&e.includes("all")?e.length===D.length+1?[]:[].concat(D):e},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return Object(p.jsx)(F.a,Object(u.a)(Object(u.a)({},{labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:16},sm:{span:12}}}),{},{onSubmit:this.handleSubmit,hideRequiredMark:!1,labelAlign:"right",children:Object(p.jsx)(F.a.Item,{label:"Column Names",children:e("columnNames",{validateTrigger:["onChange","onBlur"],getValueFromEvent:this.handleSelectAll,rules:[{required:!0,message:"Please input the Column Names!"}]})(Object(p.jsxs)(B.a,{mode:"multiple",placeholder:"Please select Columns",maxTagCount:5,onChange:this.handleSelectAll,children:[Object(p.jsx)(E,{value:"all",children:"---SELECT ALL---"},"all"),L]}))})}))}}]),n}(c.a.Component),H=(F.a.create({name:"export"})(T),n(385));function P(){return Object(p.jsx)("div",{children:Object(p.jsx)(H.a,{})})}var N=n(381),z=n(382);function G(){return Object(p.jsxs)("div",{children:[Object(p.jsxs)(N.a,{children:[Object(p.jsx)(z.a,{span:12,children:"col-12"}),Object(p.jsx)(z.a,{span:12,children:"col-12"})]}),Object(p.jsxs)(N.a,{children:[Object(p.jsx)(z.a,{span:8,children:"col-8"}),Object(p.jsx)(z.a,{span:8,children:"col-8"}),Object(p.jsx)(z.a,{span:8,children:Object(p.jsx)(w.a,{type:"link",children:"Link"})})]}),Object(p.jsxs)(N.a,{children:[Object(p.jsx)(z.a,{span:6,children:Object(p.jsx)(w.a,{type:"primary",children:"Primary"})}),Object(p.jsx)(z.a,{span:6,children:Object(p.jsx)(w.a,{children:"Default"})}),Object(p.jsx)(z.a,{span:6,children:Object(p.jsx)(w.a,{type:"dashed",children:"Dashed"})}),Object(p.jsx)(z.a,{span:6,children:Object(p.jsx)(w.a,{type:"danger",children:"Danger"})})]})]})}for(var J=B.a.Option,M=[],V=10;V<35;V++)M.push(Object(p.jsx)(J,{children:V.toString(36)+V},V.toString(36)+V));for(var W=[],q=10;q<35;q++)W.push(q.toString(36)+q);function R(){return Object(p.jsxs)(N.a,{children:[Object(p.jsx)(z.a,{span:12,children:Object(p.jsxs)(B.a,{showSearch:!0,style:{width:500},placeholder:"Select a person",optionFilterProp:"children",onChange:function(e){console.log("selected ".concat(e))},onFocus:function(){console.log("focus")},onBlur:function(){console.log("blur")},onSearch:function(e){console.log("search:",e)},filterOption:function(e,t){return t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0},children:[Object(p.jsx)(J,{value:"jack",children:"Jack"}),Object(p.jsx)(J,{value:"lucy",children:"Lucy"}),Object(p.jsx)(J,{value:"tom",children:"Tom"})]})}),Object(p.jsx)(z.a,{span:12,children:Object(p.jsxs)(B.a,{style:{width:500},mode:"multiple",placeholder:"Please select Columns",maxTagCount:5,onChange:function(e){return console.log("vvvv value",e),e&&e.length&&e.includes("all")?(console.log("yes all included"),e.length===W.length+1?[]:[].concat(W)):e},children:[Object(p.jsx)(J,{value:"all",children:"---SELECT ALL---"},"all"),M]})})]})}var U=n(188),K=n(386),$=Array.from({length:50},(function(e,t){return{title:"Block ".concat(t+1),value:"".concat(t+1)}}));$.push({title:"Block 1",value:"a1"});var _=$.map((function(e){return e.value}));function Q(){var e=Object(a.useState)([]),t=Object(f.a)(e,2),n=t[0],l=t[1];return Object(a.useEffect)((function(){console.log("selectedValues",n)}),[n]),Object(p.jsx)(K.a,{allowClear:!0,placeholder:"Select a block",treeCheckable:!0,showCheckedStrategy:K.a.SHOW_CHILD,style:{width:"350px"},dropdownStyle:{maxHeight:"300px"},onChange:function(e){return l(e)},value:n,maxTagCount:2,maxTagPlaceholder:function(e){return"+ ".concat(e.length," entries ...")},treeData:[{title:Object(p.jsxs)(c.a.Fragment,{children:[n.length===$.length&&Object(p.jsx)("span",{style:{display:"inline-block",color:"#ccc",cursor:"not-allowed"},children:"Select all 1"}),n.length<$.length&&Object(p.jsx)("span",{onClick:function(){return l(_)},style:{display:"inline-block",color:"#286FBE",cursor:"pointer"},children:"Select all 2"}),"\xa0\xa0\xa0",0===n.length&&Object(p.jsx)("span",{style:{display:"inline-block",color:"#ccc",cursor:"not-allowed"},children:"Unselect all 1"}),n.length>0&&Object(p.jsx)("span",{onClick:function(){return l([])},style:{display:"inline-block",color:"#286FBE",cursor:"pointer"},children:"Unselect all 2"})]}),value:"xxx",disableCheckbox:!0,disabled:!0}].concat(Object(U.a)($))})}var X=function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(C,{}),Object(p.jsx)(P,{}),Object(p.jsx)(k,{}),Object(p.jsx)(G,{}),Object(p.jsx)(R,{}),Object(p.jsx)(Q,{}),Object(p.jsx)(y,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Y=o.a.Header,Z=o.a.Footer,ee=o.a.Sider,te=o.a.Content;r.a.render(Object(p.jsxs)(o.a,{style:{minHeight:"100vh"},children:[Object(p.jsx)(ee,{children:"Sider"}),Object(p.jsxs)(o.a,{children:[Object(p.jsx)(Y,{children:"Header"}),Object(p.jsx)(te,{children:Object(p.jsx)(X,{})}),Object(p.jsx)(Z,{children:"Footer"})]})]}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[380,1,2]]]);
//# sourceMappingURL=main.10559e95.chunk.js.map