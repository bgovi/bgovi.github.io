(window.webpackJsonp=window.webpackJsonp||[]).push([[10,5],{305:function(e,t,n){var content=n(308);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(67).default)("04f65370",content,!0,{sourceMap:!1})},306:function(e,t,n){"use strict";n.r(t);n(307);var o=n(48),component=Object(o.a)({},(function(){return(0,this._self._c)("div",{staticClass:"divider"})}),[],!1,null,"4c52ac04",null);t.default=component.exports},307:function(e,t,n){"use strict";n(305)},308:function(e,t,n){var o=n(66)((function(i){return i[1]}));o.push([e.i,".divider[data-v-4c52ac04]{background-color:#ccc;height:2px;margin-top:30px}",""]),o.locals={},e.exports=o},320:function(e,t,n){"use strict";n.r(t);n(34),n(50),n(27),n(68);var o={components:{Divider:n(306).default},data:function(){return{projects:[{title:"TACOS: Template Based Assembly of Comples Structures",description:r},{title:"SPRING: Mapping Monomeric Threading to Protein−Protein Structure Prediction ",description:c},{title:"MDM: Full Stack Master Data Management System",description:l},{title:"VuConn: Virtualized User Connections (In Development)",description:d}]}}},r="\nI developed one of the first fully automated pipelines for template based quaternary structure prediction \nstarting from sequence. Two critical steps for template based modeling are identifying the correct homologous \nstructures by threading which generates sequence to structure alignments a\n\nthe continuous fragments excised from the PDB templates are reassembled into full-length models \nby replica-exchange Monte Carlo simulations with the threading unaligned regions (mainly loops) built by ab initio modeling.\n\n\nand refining the initial threading template \ncoordinates closer to the native conformation.\n\nTACOS, was created. The pipeline combines threading templates and domain knowledge from the PDB into a knowledge based energy score. \nThe energy score is integrated into a Monte Carlo sampling simulation that drives the initial template closer to the native topology.\nIn the third step, the fragment assembly simulation is performed again starting from the SPICKER cluster centroids, \nwhere the spatial restrains collected from both the LOMETS templates and the PDB structures by TM-align are used to guide the simulations. \nThe purpose of the second iteration is to remove the steric clash as well as to refine the global topology of the cluster centroids. \nThe decoys generated in the second simulations are then clustered and the lowest energy structures are selected.\n";r=r.replace(/\n/g," ");var c="\nThe key step of template-based protein−protein structure prediction is the\nrecognition of complexes from experimental structure libraries that have similar quaternary\nfold. Maintaining two monomer and dimer structure libraries is however laborious, and\ninappropriate library construction can degrade template recognition coverage. We propose\na novel strategy SPRING to identify complexes by mapping monomeric threading\nalignments to protein−protein interactions based on the original oligomer images in the\nPDB, which does not rely on library construction and increases the efficiency and quality of\ncomplex template recognitions\n";c=c.replace(/\n/g," ");var l="\nA full-stack framework for Master Data Management (MDM) is a comprehensive solution that streamlines and centralizes the management of critical organizational data, ensuring data accuracy, consistency, and integrity.\nThis framework encompasses both front-end and back-end components, offering a holistic approach to MDM.\n\nEfficiency and Automation: Automation of data processes reduces manual errors, accelerates data processing, and improves productivity.\n";l=l.replace(/\n/g," ");var d="\nIn summary, a virtual connection to a database is a critical link that enables an application to interact with a database management system. It allows the application to perform various database operations while ensuring security, reliability, and efficient resource usage.\nProperly managing these connections is essential for the smooth operation of applications that rely on databases for data storage and retrieval.\n\nIt's essential to secure the virtual connection to the database to prevent unauthorized access and data breaches. This involves using secure authentication methods, encryption, and access control mechanisms\n\nIn many applications, connection pooling is used to efficiently manage virtual database connections. Connection pooling allows multiple instances of the application to share a limited number of connections, reducing the overhead of opening and closing connections repeatedly.\n";d=d.replace(/\n/g," ");var m=o,h=n(48),component=Object(h.a)(m,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"section",attrs:{id:"project"}},[t("div",{staticClass:"container"},[t("div",{staticClass:"columns"},[e._m(0),e._v(" "),t("div",{staticClass:"column is-four-fifths"},e._l(e.projects,(function(n,o){return t("div",{key:o},[t("article",{staticClass:"message is-link mb-5"},[t("div",{staticClass:"message-header"},[t("p",[e._v(e._s(n.title))])]),e._v(" "),t("div",{staticClass:"message-body"},[e._v("\n                      "+e._s(n.description)+"\n                  ")])])])})),0)]),e._v(" "),t("Divider")],1)])}),[function(){var e=this._self._c;return e("div",{staticClass:"column is-one-fifth"},[e("h3",{staticClass:"title is-2"},[this._v("Projects")])])}],!1,null,null,null);t.default=component.exports}}]);