(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2772,7047],{67596:function(e,t,a){Promise.resolve().then(a.t.bind(a,38173,23)),Promise.resolve().then(a.t.bind(a,231,23)),Promise.resolve().then(a.bind(a,28890)),Promise.resolve().then(a.bind(a,74257)),Promise.resolve().then(a.bind(a,49932))},28890:function(e,t,a){"use strict";var n=a(57437),s=a(77688),l=a(19212),c=a.n(l);a(45716);var r=a(2265);let d=(0,s.Zt)(c());t.default=e=>{let{data:t}=e,[a,l]=(0,r.useState)(s.kO.WORK_WEEK);return(0,n.jsx)(s.f,{localizer:d,events:t,startAccessor:"start",endAccessor:"end",views:["work_week","day"],view:a,style:{height:"98%"},onView:e=>{l(e)},min:new Date(2025,1,0,8,0,0),max:new Date(2025,1,0,17,0,0)})}},74257:function(e,t,a){"use strict";var n=a(57437),s=a(31721),l=a(57818),c=a(66648),r=a(16463),d=a(2265),i=a(54887),o=a(95956);let u={subject:s.Pl,class:s.ZB,teacher:s.Q2,student:s.MA,exam:s.ZH,parent:s.Pl,lesson:s.Pl,assignment:s.Pl,result:s.Pl,attendance:s.Pl,event:s.Pl,announcement:s.Pl},f=(0,l.default)(()=>Promise.all([a.e(1374),a.e(4736),a.e(2542),a.e(4762)]).then(a.bind(a,74762)),{loadableGenerated:{webpack:()=>[74762]},loading:()=>(0,n.jsx)("h1",{children:"Loading..."})}),b=(0,l.default)(()=>Promise.all([a.e(1374),a.e(4736),a.e(2542),a.e(2047)]).then(a.bind(a,82047)),{loadableGenerated:{webpack:()=>[82047]},loading:()=>(0,n.jsx)("h1",{children:"Loading..."})}),h=(0,l.default)(()=>Promise.all([a.e(1374),a.e(8937)]).then(a.bind(a,98937)),{loadableGenerated:{webpack:()=>[98937]},loading:()=>(0,n.jsx)("h1",{children:"Loading..."})}),m=(0,l.default)(()=>Promise.all([a.e(1374),a.e(3668)]).then(a.bind(a,23668)),{loadableGenerated:{webpack:()=>[23668]},loading:()=>(0,n.jsx)("h1",{children:"Loading..."})}),x=(0,l.default)(()=>Promise.all([a.e(1374),a.e(4588)]).then(a.bind(a,54588)),{loadableGenerated:{webpack:()=>[54588]},loading:()=>(0,n.jsx)("h1",{children:"Loading..."})}),p={subject:(e,t,a,s)=>(0,n.jsx)(h,{type:t,data:a,setOpen:e,relatedData:s}),class:(e,t,a,s)=>(0,n.jsx)(m,{type:t,data:a,setOpen:e,relatedData:s}),teacher:(e,t,a,s)=>(0,n.jsx)(f,{type:t,data:a,setOpen:e,relatedData:s}),student:(e,t,a,s)=>(0,n.jsx)(b,{type:t,data:a,setOpen:e,relatedData:s}),exam:(e,t,a,s)=>(0,n.jsx)(x,{type:t,data:a,setOpen:e,relatedData:s})};t.default=e=>{let{table:t,type:a,data:s,id:l,relatedData:f}=e,b="create"===a?"w-8 h-8":"w-7 h-7",[h,m]=(0,d.useState)(!1);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("button",{className:"".concat(b," flex items-center justify-center rounded-full ").concat("create"===a?"bg-lamaYellow":"update"===a?"bg-lamaSky":"bg-lamaPurple"),onClick:()=>m(!0),children:(0,n.jsx)(c.default,{src:"/".concat(a,".png"),alt:"",width:16,height:16})}),h&&(0,n.jsx)("div",{className:"w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center",children:(0,n.jsxs)("div",{className:"bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]",children:[(0,n.jsx)(()=>{let[e,c]=(0,i.useFormState)(u[t],{success:!1,error:!1}),b=(0,r.useRouter)();return(0,d.useEffect)(()=>{e.success&&((0,o.Am)("".concat(t," has been deleted!")),m(!1),b.refresh())},[e,b]),"delete"===a&&l?(0,n.jsxs)("form",{action:c,className:"p-4 flex flex-col gap-4",children:[(0,n.jsx)("input",{type:"text | number",name:"id",value:l,hidden:!0}),(0,n.jsxs)("span",{className:"text-center font-medium",children:["All data will be lost. Are you sure you want to delete this ",t,"?"]}),(0,n.jsx)("button",{className:"bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center",children:"Delete"})]}):"create"===a||"update"===a?p[t](m,a,s,f):"Form not found!"},{}),(0,n.jsx)("div",{className:"absolute top-4 right-4 cursor-pointer",onClick:()=>m(!1),children:(0,n.jsx)(c.default,{src:"/close.png",alt:"",width:14,height:14})})]})})]})}},49932:function(e,t,a){"use strict";var n=a(57437),s=a(66648),l=a(35231),c=a(26601),r=a(85369);let d=[{name:"Group A",value:92,fill:"#C3EBFA"},{name:"Group B",value:8,fill:"#FAE27C"}];t.default=()=>(0,n.jsxs)("div",{className:"bg-white p-4 rounded-md h-80 relative",children:[(0,n.jsxs)("div",{className:"flex items-center justify-between",children:[(0,n.jsx)("h1",{className:"text-xl font-semibold",children:"Performance"}),(0,n.jsx)(s.default,{src:"/moreDark.png",alt:"",width:16,height:16})]}),(0,n.jsx)(l.h,{width:"100%",height:"100%",children:(0,n.jsx)(c.u,{children:(0,n.jsx)(r.b,{dataKey:"value",startAngle:180,endAngle:0,data:d,cx:"50%",cy:"50%",innerRadius:70,fill:"#8884d8"})})}),(0,n.jsxs)("div",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center",children:[(0,n.jsx)("h1",{className:"text-3xl font-bold",children:"9.2"}),(0,n.jsx)("p",{className:"text-xs text-gray-300",children:"of 10 max LTS"})]}),(0,n.jsx)("h2",{className:"font-medium absolute bottom-16 left-0 right-0 m-auto text-center",children:"1st Semester - 2nd Semester"})]})},31721:function(e,t,a){"use strict";a.d(t,{Gc:function(){return m},I5:function(){return l},Jn:function(){return f},LK:function(){return h},MA:function(){return x},Pl:function(){return r},Q2:function(){return b},Y7:function(){return u},ZB:function(){return o},ZH:function(){return s},a7:function(){return i},jZ:function(){return c},qH:function(){return d},un:function(){return p},w0:function(){return j}}),a(74590);var n=a(58064),s=(0,n.$)("e7921e9997bb87798cfd9befba298b2068256b5a"),l=(0,n.$)("7c8d6da041ee4985fe87ce8e52a624a212a99862"),c=(0,n.$)("c105d2fdc0426be4293d53392a144c46fb4412a5"),r=(0,n.$)("ab113ac2064dc297591945cfa5f1abbac3716efa"),d=(0,n.$)("255c4cdbe5b0bf06e766a09baf15e46251b2b45d"),i=(0,n.$)("e870b8741f726f975b874604989b310fd4b4f711"),o=(0,n.$)("788c8f668896068ac2d5c71f740fb68d42f7d606"),u=(0,n.$)("9e66cdc2c21ab49182e07455ee9c685ad306141f"),f=(0,n.$)("1f107fab1013949b2d6802823189d3df31528cf8"),b=(0,n.$)("b9cd91eee875d0bcb99cc2a4424259e8b63d777f"),h=(0,n.$)("6e45528417ced7cd3cb6fc0571a983796cf74857"),m=(0,n.$)("0d2114ef974867151d63e1f9d4e9039e565a4e93"),x=(0,n.$)("73fc30c01c8c6caa9f9645dcbde7de4e2b39c15f"),p=(0,n.$)("e6e6496e5a28153aa82aaf8f190ab07722c09d18"),j=(0,n.$)("79c5a8e019203ea3337b2a60e9327e641a4b99cc")}},function(e){e.O(0,[8234,2856,6990,986,5083,3005,3257,231,1810,9799,2971,7023,1744],function(){return e(e.s=67596)}),_N_E=e.O()}]);