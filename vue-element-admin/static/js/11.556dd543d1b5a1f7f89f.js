webpackJsonp([11],{"0On2":function(t,e,n){"use strict";e.a={name:"tinymce",props:{id:{type:String,default:"tinymceEditor"},value:{type:String,default:""},toolbar:{type:Array,required:!1,default:function(){return["removeformat undo redo |  bullist numlist | outdent indent | forecolor | fullscreen code","bold italic blockquote | h2 p  media link | alignleft aligncenter alignright"]}},data:function(){return{hasChange:!1,hasInit:!1}},menubar:{default:""},height:{type:Number,required:!1,default:360}},watch:{value:function(t){var e=this;!this.hasChange&&this.hasInit&&this.$nextTick(function(){return window.tinymce.get(e.id).setContent(t)})}},mounted:function(){var t=this,e=this;window.tinymce.init({selector:"#"+this.id,height:this.height,body_class:"panel-body ",object_resizing:!1,toolbar:this.toolbar,menubar:this.menubar,plugins:"advlist,autolink,code,paste,textcolor, colorpicker,fullscreen,link,lists,media,wordcount, imagetools",end_container_on_empty_block:!0,powerpaste_word_import:"clean",code_dialog_height:450,code_dialog_width:1e3,advlist_bullet_styles:"square",advlist_number_styles:"default",block_formats:"普通标签=p;小标题=h2;",imagetools_cors_hosts:["wpimg.wallstcn.com","wallstreetcn.com"],imagetools_toolbar:"watermark",default_link_target:"_blank",link_title:!1,init_instance_callback:function(n){e.value&&n.setContent(e.value),e.hasInit=!0,n.on("NodeChange Change KeyUp",function(){t.hasChange=!0,t.$emit("input",n.getContent({format:"raw"}))})},setup:function(t){t.addButton("h2",{title:"小标题",text:"小标题",onclick:function(){t.execCommand("mceToggleFormat",!1,"h2")},onPostRender:function(){var e=this;t.on("init",function(){t.formatter.formatChanged("h2",function(t){e.active(t)})})}}),t.addButton("p",{title:"正文",text:"正文",onclick:function(){t.execCommand("mceToggleFormat",!1,"p")},onPostRender:function(){var e=this;t.on("init",function(){t.formatter.formatChanged("p",function(t){e.active(t)})})}})}})},destroyed:function(){window.tinymce.get(this.id).destroy()}}},"5aCZ":function(t,e,n){"use strict";function a(t){n("XxSh")}var i=n("0On2"),o=n("lS5I"),r=n("VU/8"),c=a,s=r(i.a,o.a,c,"data-v-5042d8aa",null);e.a=s.exports},"FZx+":function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,".tinymce-container[data-v-5042d8aa]{position:relative}.tinymce-textarea[data-v-5042d8aa]{visibility:hidden;z-index:-1}",""])},LkOT:function(t,e,n){"use strict";function a(t){n("k56H")}Object.defineProperty(e,"__esModule",{value:!0});var i=n("aNNw"),o=n("a18o"),r=n("VU/8"),c=a,s=r(i.a,o.a,c,"data-v-08239988",null);e.default=s.exports},XxSh:function(t,e,n){var a=n("FZx+");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("0c367ded",a,!0)},"Y+Ja":function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,".editor-content[data-v-08239988]{margin-top:20px}",""])},a18o:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"components-container"},[t._m(0),t._v(" "),n("div",[n("tinymce",{ref:"editor",attrs:{height:200},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),t._v(" "),n("div",{staticClass:"editor-content",domProps:{innerHTML:t._s(t.content)}})])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("code",[t._v("公司做的后台主要是一个cms系统，公司也是以自媒体为核心的，所以富文本是后台很核心的功能。在选择富文本的过程中也走了不少的弯路，市面上常见的富文本都基本用过了，最终选择了Tinymce"),n("a",{attrs:{target:"_blank",href:"https://segmentfault.com/a/1190000009762198#articleHeader13"}},[t._v(" 相关文章 ")]),t._v(" "),n("a",{attrs:{target:"_blank",href:"https://www.tinymce.com/"}},[t._v(" 官网 ")])])}],o={render:a,staticRenderFns:i};e.a=o},aNNw:function(t,e,n){"use strict";var a=n("5aCZ");e.a={components:{Tinymce:a.a},data:function(){return{content:"Tinymce"}}}},k56H:function(t,e,n){var a=n("Y+Ja");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("2e5719f4",a,!0)},lS5I:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tinymce-container editor-container"},[n("textarea",{staticClass:"tinymce-textarea",attrs:{id:t.id}})])},i=[],o={render:a,staticRenderFns:i};e.a=o}});