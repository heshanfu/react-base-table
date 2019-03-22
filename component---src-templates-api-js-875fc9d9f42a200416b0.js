(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{159:function(e,t,n){"use strict";n.r(t);var a=n(8),i=n.n(a),o=(n(187),n(0)),r=n.n(o),l=n(161),s=n(182),c=function(e){var t=e.html,n=e.className;return r.a.createElement("div",{className:n?"markdown-body "+n:"markdown-body",dangerouslySetInnerHTML:{__html:t}})},p=n(226),u=n(229),d=n.n(u);n.d(t,"pageQuery",function(){return w});var m=d.a.api.map(function(e){return{key:e.title,title:e.title,to:e.path}}),g=l.b.div.withConfig({componentId:"xqkjda-0"})(["font-size:16px;font-weight:700;margin-bottom:10px;"]),h=Object(l.b)(c).withConfig({componentId:"xqkjda-1"})(["font-size:14px;p{font-size:14px;}"]),f=l.b.div.withConfig({componentId:"xqkjda-2"})(["margin:10px 0 20px 10px;"]),I=l.b.div.withConfig({componentId:"xqkjda-3"})(["font-size:14px;font-weight:700;margin-bottom:5px;"]),x=l.b.span.withConfig({componentId:"xqkjda-4"})(["font-size:12px;padding:1px 6px;margin:0 8px;border-radius:4px;background-color:#daf0f9;color:#819099;"]),b=Object(l.b)(x).withConfig({componentId:"xqkjda-5"})(["background-color:#182a3d;color:#fff;margin:0;"]),y=l.b.span.withConfig({componentId:"xqkjda-6"})(["color:#819099;"]),M=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.data,n=e.location,a=t.componentMetadata,i=a.childrenComponentMethodExt;return i.forEach(function(e){var t=e.params.map(function(e){return e.name+(e.type?": "+e.type.name:"")}).join(", ");e.signature="("+t+")"}),r.a.createElement(s.a,{title:"API: "+a.displayName,location:n,links:m},r.a.createElement(g,null,a.displayName),a.description&&r.a.createElement(h,{html:a.description.childMarkdownRemark.html}),r.a.createElement(p.a,{title:"Props"}),a.props.filter(function(e){return e.type}).map(function(e){return r.a.createElement(f,{key:e.name},r.a.createElement(I,null,e.name,r.a.createElement(x,null,"enum"===(t=e.type).name?"string"==typeof t.value?t.value:t.value.map(function(e){return e.value}).join(" | "):"union"===t.name?t.value.map(function(e){return e.name}).join(" | "):t.name),e.defaultValue&&r.a.createElement(y,null,"default to",r.a.createElement(x,null,e.defaultValue.value)),e.required&&r.a.createElement(b,null,"required")),e.description&&r.a.createElement(h,{html:e.description.childMarkdownRemark.html}));var t}),i.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{title:"Methods"}),i.map(function(e,t){return r.a.createElement(f,{key:e.name},r.a.createElement(I,null,e.name,r.a.createElement(x,null,e.signature)),r.a.createElement(h,{html:e.childMarkdownRemark.html}))})))},t}(r.a.Component),w=(t.default=M,"556077349")},176:function(e){e.exports={data:{site:{config:{title:"BaseTable",description:"BaseTable website",keywords:"react, component, table, basetable",author:"Neo Nie (nihgwu@live.com)"}}}}},177:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04IDBDMy41OCAwIDAgMy41OCAwIDhjMCAzLjU0IDIuMjkgNi41MyA1LjQ3IDcuNTkuNC4wNy41NS0uMTcuNTUtLjM4IDAtLjE5LS4wMS0uODItLjAxLTEuNDktMi4wMS4zNy0yLjUzLS40OS0yLjY5LS45NC0uMDktLjIzLS40OC0uOTQtLjgyLTEuMTMtLjI4LS4xNS0uNjgtLjUyLS4wMS0uNTMuNjMtLjAxIDEuMDguNTggMS4yMy44Mi43MiAxLjIxIDEuODcuODcgMi4zMy42Ni4wNy0uNTIuMjgtLjg3LjUxLTEuMDctMS43OC0uMi0zLjY0LS44OS0zLjY0LTMuOTUgMC0uODcuMzEtMS41OS44Mi0yLjE1LS4wOC0uMi0uMzYtMS4wMi4wOC0yLjEyIDAgMCAuNjctLjIxIDIuMi44Mi42NC0uMTggMS4zMi0uMjcgMi0uMjcuNjggMCAxLjM2LjA5IDIgLjI3IDEuNTMtMS4wNCAyLjItLjgyIDIuMi0uODIuNDQgMS4xLjE2IDEuOTIuMDggMi4xMi41MS41Ni44MiAxLjI3LjgyIDIuMTUgMCAzLjA3LTEuODcgMy43NS0zLjY1IDMuOTUuMjkuMjUuNTQuNzMuNTQgMS40OCAwIDEuMDctLjAxIDEuOTMtLjAxIDIuMiAwIC4yMS4xNS40Ni41NS4zOEE4LjAxMyA4LjAxMyAwIDAgMCAxNiA4YzAtNC40Mi0zLjU4LTgtOC04eiIvPgo8L3N2Zz4="},178:function(e){e.exports={name:"react-base-table",version:"0.1.0",description:"a react table component to display large data set with high performance and flexibility",main:"lib/index.js",module:"es/index.js",files:["lib/","es/","styles.css"],author:"Neo Nie <nihgwu@live.com>",license:"MIT",repository:{type:"git",url:"https://github.com/Autodesk/react-base-table.git"},scripts:{start:"cd website && npm start",deploy:"cd website && npm run deploy",lint:"eslint ./src/**/*.js",clean:"rimraf lib es styles.css","build:js":"cross-env NODE_ENV=production babel src -d lib --ignore '**/*.spec.js','__snapshots__' --copy-files --source-maps","build:es":"cross-env BABEL_ENV=es NODE_ENV=production babel src -d es --ignore '**/*.spec.js','__snapshots__' --copy-files --source-maps","build:css":"node-sass src/_BaseTable.scss ./styles.css --output-style expanded",build:"npm run build:js && npm run build:es && npm run build:css",format:"prettier --write 'src/**/*.{js,scss}'",prebuild:"npm run clean",precommit:"lint-staged",prepush:"npm run test",test:"jest"},"lint-staged":{"packages/**/*.scss":["prettier --write","git add"],"packages/**/*.js":["prettier --write","eslint -c .eslintrc","git add"]},dependencies:{classnames:"^2.2.5",lodash:"^4.17.5","memoize-one":"^5.0.0","prop-types":"^15.6.0","react-draggable":"^3.0.5","react-virtualized":"^9.18.5"},peerDependencies:{react:"^16.0.0","react-dom":"^16.0.0"},devDependencies:{"@babel/cli":"^7.0.0","@babel/core":"^7.0.0","@babel/plugin-proposal-class-properties":"^7.0.0","@babel/plugin-proposal-object-rest-spread":"^7.0.0","@babel/preset-env":"^7.0.0","@babel/preset-react":"^7.0.0","babel-core":"^7.0.0-bridge.0","babel-eslint":"^9.0.0","babel-jest":"^23.4.2","babel-plugin-syntax-trailing-function-commas":"^6.22.0","cross-env":"^5.2.0",eslint:"^5.6.0","eslint-config-prettier":"^3.0.1","eslint-config-react-app":"^3.0.8","eslint-plugin-flowtype":"^3.4.2","eslint-plugin-import":"^2.14.0","eslint-plugin-jsx-a11y":"^6.1.1","eslint-plugin-prettier":"^2.6.2","eslint-plugin-react":"^7.11.1",husky:"^0.14.3",jest:"^23.5.0",lerna:"^3.2.1","lint-staged":"^7.2.2","node-sass":"^4.9.3",prettier:"^1.14.2",react:"^16.4.2","react-dom":"^16.4.2","react-test-renderer":"^16.4.2",rimraf:"^2.6.2"},jest:{roots:["<rootDir>/src"],testRegex:".*.spec\\.js$",transform:{"^.+\\.jsx?$":"babel-jest"},transformIgnorePatterns:["<rootDir>/node_modules/"]}}},179:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZyBpZD0iU3ltYm9scyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9ImV4dGVybmFsX2ljbyIgZmlsbD0iIzZCNzg3RiI+CiAgICAgICAgICAgIDxnIGlkPSJTSEFQRSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMy4wMDAwMDAsIDMuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTIuMjkyNTU1MiwxIEw5LDEgTDksMCBMMTQsMCBMMTQsMC41IEwxNCw1IEwxMyw1IEwxMywxLjcwNjc2ODc5IEw2LjI4MjQzMjU1LDguNDI0NTY4MTggTDUuNTc1MzI1NzcsNy43MTc0NjE0IEwxMi4yOTI1NTUyLDEgWiBNNiwyIEw2LDMgTDEsMyBMMSwxMyBMMTEsMTMgTDExLDggTDEyLDggTDEyLDEyLjk5NzUyNjcgQzEyLDEzLjU1MTE3NzQgMTEuNTQ0MjM5LDE0IDEwLjk5NzUyNjcsMTQgTDEuMDAyNDczMjksMTQgQzAuNDQ4ODIyNTgyLDE0IDAsMTMuNTQ0MjM5IDAsMTIuOTk3NTI2NyBMMCwzLjAwMjQ3MzI5IEMwLDIuNDQ4ODIyNTggMC40NTU3NjA5NTYsMiAxLjAwMjQ3MzI5LDIgTDYsMiBaIiBpZD0iQ29tYmluZWQtU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"},182:function(e,t,n){"use strict";var a=n(84),i=n.n(a),o=n(176),r=n(0),l=n.n(r),s=n(198),c=n.n(s),p=n(161),u=n(57),d=(n(87),n(88),n(177)),m=n.n(d),g=n(178),h=p.b.div.withConfig({componentId:"kyi9n-0"})(["background-color:#182a3d;position:fixed;top:0;width:100%;z-index:1001;"]),f=p.b.div.withConfig({componentId:"kyi9n-1"})(["margin:0 auto;max-width:960px;height:50px;padding:0 20px;display:flex;align-items:center;justify-content:space-between;"]),I=Object(p.b)(u.Link).withConfig({componentId:"kyi9n-2"})(["text-decoration:none;font-size:24px;padding:10px 0;&,&:hover,&:focus{color:#fff;}"]),x=Object(p.b)(u.Link).attrs({partiallyActive:!0}).withConfig({componentId:"kyi9n-3"})(["color:#bcc9d1;text-decoration:none;font-size:16px;line-height:20px;padding:10px;&:hover{color:#fff;}&,&:focus{color:",";}&:last-child{padding-right:0;display:inline-block;}"],function(e){return e.pathname&&e.pathname.includes(e.to)?"#fff":"#bcc9d1"}),b=x.withComponent("a"),y=p.b.img.withConfig({componentId:"kyi9n-4"})(["width:20px;height:20px;"]),M=Object(p.b)(b).withConfig({componentId:"kyi9n-5"})(["font-size:14px;"]),w=function(e){var t=e.pathname;return l.a.createElement(h,null,l.a.createElement(f,null,l.a.createElement("div",null,l.a.createElement(I,{to:"/"},"BaseTable"),l.a.createElement(M,{href:"https://github.com/Autodesk/react-base-table/releases",target:"_blank"},"v",g.version)),l.a.createElement("div",null,l.a.createElement(x,{to:"/api",pathname:t},"API"),l.a.createElement(x,{to:"/examples",pathname:t},"Examples"),l.a.createElement(x,{to:"/playground",pathname:t},"Playground"),l.a.createElement(b,{last:!0,href:g.repository.url,target:"_blank"},l.a.createElement(y,{src:m.a,alt:"Github"})))))},E=n(179),j=n.n(E),C=p.b.div.withConfig({componentId:"sc-1s7k5qo-0"})(["position:fixed;top:70px;bottom:20px;overflow-y:auto;width:180px;min-width:180px;padding-right:20px;border-right:1px solid #edf0f2;"]),A=p.b.ul.withConfig({componentId:"sc-1s7k5qo-1"})(["list-style:none;padding-left:0;"]),D=p.b.li.withConfig({componentId:"sc-1s7k5qo-2"})(["margin-bottom:10px;"]),N=Object(p.b)(u.Link).attrs({activeStyle:{borderRight:"3px solid"}}).withConfig({componentId:"sc-1s7k5qo-3"})(["display:block;text-decoration:none;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;font-size:14px;"]),v=N.withComponent("a"),L=p.b.img.withConfig({componentId:"sc-1s7k5qo-4"})(["width:14px;height:14px;margin-left:4px;"]),k=function(e){var t=e.links;return l.a.createElement(C,null,l.a.createElement(A,null,t.map(function(e){var t=e.key,n=e.to,a=e.title,i=e.external;return l.a.createElement(D,{key:t},i?l.a.createElement(v,{href:n,target:"_blank"},a,l.a.createElement(L,{src:j.a,alt:a})):l.a.createElement(N,{to:n},a))})))},z=(n(199),Object(p.a)(["margin:0 auto;max-width:960px;"])),T=p.b.div.withConfig({componentId:"p0p6yc-0"})(["position:relative;padding:70px 20px 20px;",";"],function(e){return!e.full&&z}),S=p.b.div.withConfig({componentId:"p0p6yc-1"})(["margin-left:200px;"]),O=(t.a=function(e){var t=e.title,n=e.location,a=void 0===n?{}:n,r=e.children,s=e.links,p=i()(e,["title","location","children","links"]);return l.a.createElement(u.StaticQuery,{query:O,render:function(e){var n=e.site;return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,{title:t||n.config.title,titleTemplate:"%s | "+n.config.title,meta:[{name:"description",content:n.config.description},{name:"keywords",content:n.config.keywords},{name:"author",content:n.config.author}]}),l.a.createElement(w,{pathname:a.pathname}),l.a.createElement(T,p,s?l.a.createElement(l.a.Fragment,null,l.a.createElement(k,{links:s}),l.a.createElement(S,null,r)):r))},data:o})},"851167143")},187:function(e,t,n){var a=n(22).f,i=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in i||n(20)&&a(i,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},200:function(e,t,n){var a=n(10),i=n(21),o=n(24),r=/"/g,l=function(e,t,n,a){var i=String(o(e)),l="<"+t;return""!==n&&(l+=" "+n+'="'+String(a).replace(r,"&quot;")+'"'),l+">"+i+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(l),a(a.P+a.F*i(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},226:function(e,t,n){"use strict";n(227);var a=n(0),i=n.n(a),o=n(161),r=n(228),l=n.n(r),s=o.b.div.withConfig({componentId:"sc-1uh7lza-0"})(["margin:20px 0 10px 0;font-size:18px;font-weight:500;"]),c=o.b.span.withConfig({componentId:"sc-1uh7lza-1"})(["display:block;height:70px;margin-top:-70px;visibility:hidden;"]),p=o.b.a.withConfig({componentId:"sc-1uh7lza-2"})(["float:left;padding-right:4px;margin-left:-20px;padding-left:6px;&::before{content:'#';font-size:16px;visibility:hidden;}&:hover{&::before{visibility:visible;}}"]);t.a=function(e){var t=e.title,n=e.link||l()(t,{lower:!0});return i.a.createElement(s,{id:n},i.a.createElement(c,null),i.a.createElement(p,{href:"#"+n,"aria-hidden":"true"}),t)}},227:function(e,t,n){"use strict";n(200)("link",function(e){return function(t){return e(this,"a","href",t)}})},228:function(e,t,n){var a;a=function(){var e=JSON.parse('{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","џ":"dz","Ґ":"G","ґ":"g","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","‘":"\'","’":"\'","“":"\\"","”":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₹":"indian rupee","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial"}');function t(t,n){if("string"!=typeof t)throw new Error("slugify: string argument expected");n="string"==typeof n?{replacement:n}:n||{};var a=t.split("").reduce(function(t,a){return t+(e[a]||a).replace(n.remove||/[^\w\s$*_+~.()'"!\-:@]/g,"")},"").trim().replace(/[-\s]+/g,n.replacement||"-");return n.lower?a.toLowerCase():a}return t.extend=function(t){for(var n in t)e[n]=t[n]},t},e.exports=a(),e.exports.default=a()},229:function(e,t){e.exports={redirects:[{fromPath:"/docs",toPath:"/docs/get-started",isPermanent:!0,redirectInBrowser:!0},{fromPath:"/api",toPath:"/api/basetable",isPermanent:!0,redirectInBrowser:!0},{fromPath:"/examples",toPath:"/examples/default",isPermanent:!0,redirectInBrowser:!0}],docs:[{title:"Get Started",path:"/docs/get-started"},{title:"Glossary",path:"/docs/glossary"},{title:"FAQ",path:"/docs/faq"}],api:[{title:"BaseTable",path:"/api/basetable"},{title:"Column",path:"/api/column"},{title:"AutoResizer",path:"/api/autoresizer"},{title:"ColumnResizer",path:"/api/columnresizer"}],examples:[{title:"Default",path:"/examples/default"},{title:"JSX Column",path:"/examples/jsx-column"},{title:"Fixed Table",path:"/examples/fixed"},{title:"Frozen Columns",path:"/examples/frozen-columns"},{title:"Frozen Rows",path:"/examples/frozen-rows"},{title:"Disabled",path:"/examples/disabled"},{title:"Resizable",path:"/examples/resizable"},{title:"Hide Header",path:"/examples/hide-header"},{title:"Multi Header",path:"/examples/multi-header"},{title:"Infinite Loading",path:"/examples/infinite-loading"},{title:"Infinite Loading with Loader",path:"/examples/infinite-loading-loader"},{title:"ColSpan",path:"/examples/col-span"},{title:"Custom Components",path:"/examples/components"},{title:"Custom Row",path:"/examples/row-renderer"},{title:"Custom Header",path:"/examples/header-renderer"},{title:"Custom Footer",path:"/examples/footer-renderer"},{title:"Custom Empty",path:"/examples/empty-renderer"},{title:"Custom Overlay",path:"/examples/overlay-renderer"},{title:"Custom Width/Height",path:"/examples/width-height"},{title:"Max Height",path:"/examples/max-height"},{title:"Custom Row/Header Height",path:"/examples/row-header-height"},{title:"Row Event Handlers",path:"/examples/row-event-handlers"},{title:"Sortable",path:"/examples/sortable"},{title:"Expand - Uncontrolled",path:"/examples/expand-uncontrolled"},{title:"Expand - Controlled",path:"/examples/expand-controlled"},{title:"Use IsScrolling",path:"/examples/is-scrolling"},{title:"Custom RowKey",path:"/examples/row-key"},{title:"Extra Props",path:"/examples/extra-props"},{title:"ExpandIcon Props",path:"/examples/expand-icon-props"},{title:"Tag Name",path:"/examples/tag-name"}]}}}]);
//# sourceMappingURL=component---src-templates-api-js-875fc9d9f42a200416b0.js.map