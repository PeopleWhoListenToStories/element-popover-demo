"use strict";(self["webpackChunkelement_popover_demo"]=self["webpackChunkelement_popover_demo"]||[]).push([[262],{2262:function(e,l,a){a.r(l),a.d(l,{default:function(){return c}});var t=function(){var e=this,l=e._self._c;return l("div",{staticClass:"demo-list"},[l("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[l("el-form-item",{attrs:{label:"活动名称"}},[l("el-input",{model:{value:e.form.name,callback:function(l){e.$set(e.form,"name",l)},expression:"form.name"}})],1),l("el-form-item",{attrs:{label:"活动区域"}},[l("el-select",{attrs:{placeholder:"请选择活动区域","popper-class":"custom-popper-class"},model:{value:e.form.region,callback:function(l){e.$set(e.form,"region",l)},expression:"form.region"}},[l("el-option",{attrs:{label:"区域一",value:"shanghai"}}),l("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),l("el-form-item",{attrs:{label:"活动时间"}},[l("el-col",{attrs:{span:11}},[l("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期","popper-class":"custom-popper-class"},model:{value:e.form.date1,callback:function(l){e.$set(e.form,"date1",l)},expression:"form.date1"}})],1),l("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),l("el-col",{attrs:{span:11}},[l("el-time-picker",{staticStyle:{width:"100%"},attrs:{placeholder:"选择时间","popper-class":"custom-popper-class"},model:{value:e.form.date2,callback:function(l){e.$set(e.form,"date2",l)},expression:"form.date2"}})],1)],1),l("el-form-item",{attrs:{label:"即时配送"}},[l("el-switch",{model:{value:e.form.delivery,callback:function(l){e.$set(e.form,"delivery",l)},expression:"form.delivery"}})],1),l("el-form-item",{attrs:{label:"活动性质"}},[l("el-checkbox-group",{model:{value:e.form.type,callback:function(l){e.$set(e.form,"type",l)},expression:"form.type"}},[l("el-checkbox",{attrs:{label:"美食/餐厅线上活动",name:"type"}}),l("el-checkbox",{attrs:{label:"地推活动",name:"type"}}),l("el-checkbox",{attrs:{label:"线下主题活动",name:"type"}}),l("el-checkbox",{attrs:{label:"单纯品牌曝光",name:"type"}})],1)],1),l("el-form-item",{attrs:{label:"特殊资源"}},[l("el-radio-group",{model:{value:e.form.resource,callback:function(l){e.$set(e.form,"resource",l)},expression:"form.resource"}},[l("el-radio",{attrs:{label:"线上品牌商赞助"}}),l("el-radio",{attrs:{label:"线下场地免费"}})],1)],1),l("el-form-item",{attrs:{label:"活动形式"}},[l("el-cascader",{attrs:{options:e.options,"popper-class":"custom-popper-class"},model:{value:e.form.desc,callback:function(l){e.$set(e.form,"desc",l)},expression:"form.desc"}})],1),l("el-form-item",[l("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("立即创建")]),l("el-button",[e._v("取消")])],1)],1),l("div",{style:{height:"3000px",background:"red"}})],1)},o=[],r={data(){return{form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:[]},options:[{value:"zhinan",label:"指南",children:[{value:"shejiyuanze",label:"设计原则",children:[{value:"yizhi",label:"一致"},{value:"fankui",label:"反馈"},{value:"xiaolv",label:"效率"},{value:"kekong",label:"可控"}]},{value:"daohang",label:"导航",children:[{value:"cexiangdaohang",label:"侧向导航"},{value:"dingbudaohang",label:"顶部导航"}]}]},{value:"zujian",label:"组件",children:[{value:"basic",label:"Basic",children:[{value:"layout",label:"Layout 布局"},{value:"color",label:"Color 色彩"},{value:"typography",label:"Typography 字体"},{value:"icon",label:"Icon 图标"},{value:"button",label:"Button 按钮"}]},{value:"form",label:"Form",children:[{value:"radio",label:"Radio 单选框"},{value:"checkbox",label:"Checkbox 多选框"},{value:"input",label:"Input 输入框"},{value:"input-number",label:"InputNumber 计数器"},{value:"select",label:"Select 选择器"},{value:"cascader",label:"Cascader 级联选择器"},{value:"switch",label:"Switch 开关"},{value:"slider",label:"Slider 滑块"},{value:"time-picker",label:"TimePicker 时间选择器"},{value:"date-picker",label:"DatePicker 日期选择器"},{value:"datetime-picker",label:"DateTimePicker 日期时间选择器"},{value:"upload",label:"Upload 上传"},{value:"rate",label:"Rate 评分"},{value:"form",label:"Form 表单"}]},{value:"data",label:"Data",children:[{value:"table",label:"Table 表格"},{value:"tag",label:"Tag 标签"},{value:"progress",label:"Progress 进度条"},{value:"tree",label:"Tree 树形控件"},{value:"pagination",label:"Pagination 分页"},{value:"badge",label:"Badge 标记"}]},{value:"notice",label:"Notice",children:[{value:"alert",label:"Alert 警告"},{value:"loading",label:"Loading 加载"},{value:"message",label:"Message 消息提示"},{value:"message-box",label:"MessageBox 弹框"},{value:"notification",label:"Notification 通知"}]},{value:"navigation",label:"Navigation",children:[{value:"menu",label:"NavMenu 导航菜单"},{value:"tabs",label:"Tabs 标签页"},{value:"breadcrumb",label:"Breadcrumb 面包屑"},{value:"dropdown",label:"Dropdown 下拉菜单"},{value:"steps",label:"Steps 步骤条"}]},{value:"others",label:"Others",children:[{value:"dialog",label:"Dialog 对话框"},{value:"tooltip",label:"Tooltip 文字提示"},{value:"popover",label:"Popover 弹出框"},{value:"card",label:"Card 卡片"},{value:"carousel",label:"Carousel 走马灯"},{value:"collapse",label:"Collapse 折叠面板"}]}]},{value:"ziyuan",label:"资源",children:[{value:"axure",label:"Axure Components"},{value:"sketch",label:"Sketch Templates"},{value:"jiaohu",label:"组件交互文档"}]}]}},methods:{onSubmit(){console.log("submit!")}}},s=r,i=a(1001),u=(0,i.Z)(s,t,o,!1,null,null,null),c=u.exports}}]);
//# sourceMappingURL=262.b50fc333.js.map