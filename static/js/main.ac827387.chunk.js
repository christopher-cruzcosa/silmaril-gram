(this["webpackJsonpsilmaril-gram"]=this["webpackJsonpsilmaril-gram"]||[]).push([[0],{41:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r(2),a=r(12),s=r.n(a),i=(r(23),r(13)),l=r(14),h=r(17),o=r(16);var d=function(e){return Object(n.jsx)("div",{className:"container".concat(e.fluid?"-fluid":""),children:e.children})};var u=function(e){return Object(n.jsx)("div",{className:"row".concat(e.fluid?"-fluid":""),children:e.children})};var j=function(e){var t=e.size.split(" ").map((function(e){return"col-".concat(e)})).join(" ");return Object(n.jsx)("div",{className:t,children:e.children})};var b=function(e){return Object(n.jsxs)("div",{className:"card text-center",children:[Object(n.jsx)("div",{className:"card-header",children:Object(n.jsx)("h2",{children:e.heading})}),Object(n.jsx)("div",{className:"card-body",children:e.children})]})};var m=function(e){return Object(n.jsx)("form",{children:Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"search",children:"Search:"}),Object(n.jsx)("input",{onChange:e.handleInputChange,value:e.value,name:"search",type:"text",className:"form-control",placeholder:"Search For a Movie",id:"search"}),Object(n.jsx)("br",{}),Object(n.jsx)("button",{onClick:e.handleFormSubmit,className:"btn btn-primary",children:"Search"})]})})};var v=function(e){return Object(n.jsxs)("div",{className:"text-center",children:[Object(n.jsx)("img",{alt:e.title,className:"img-fluid",src:e.src,style:{margin:"0 auto"}}),Object(n.jsxs)("h3",{children:["Director(s): ",e.director]}),Object(n.jsxs)("h3",{children:["Genre: ",e.genre]}),Object(n.jsxs)("h3",{children:["Released: ",e.released]})]})},x=r(15),O=r.n(x),f=function(e){return O.a.get("https://www.omdbapi.com/?t="+e+"&apikey=trilogy")},p=function(e){Object(h.a)(r,e);var t=Object(o.a)(r);function r(){var e;Object(i.a)(this,r);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={result:{},search:""},e.searchMovies=function(t){f(t).then((function(t){return e.setState({result:t.data})})).catch((function(e){return console.log(e)}))},e.handleInputChange=function(t){var r=t.target.value;e.setState({search:r})},e.handleFormSubmit=function(t){t.preventDefault(),e.searchMovies(e.state.search)},e.renderMovieDetail=function(){return e.state.result.Title?Object(n.jsx)(v,{title:e.state.result.Title,src:e.state.result.Poster,director:e.state.result.Director,genre:e.state.result.Genre,released:e.state.result.Released}):Object(n.jsx)("h3",{children:"No Results to Display"})},e}return Object(l.a)(r,[{key:"componentDidMount",value:function(){this.searchMovies("The Matrix")}},{key:"render",value:function(){return Object(n.jsx)(d,{children:Object(n.jsxs)(u,{children:[Object(n.jsx)(j,{size:"md-8",children:Object(n.jsx)(b,{heading:this.state.result.Title||"Search for a Movie to Begin",children:this.renderMovieDetail()})}),Object(n.jsx)(j,{size:"md-4",children:Object(n.jsx)(b,{heading:"Search",children:Object(n.jsx)(m,{value:this.state.search,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit})})})]})})}}]),r}(c.Component);var g=function(){return Object(n.jsx)(p,{})};s.a.render(Object(n.jsx)(g,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.ac827387.chunk.js.map