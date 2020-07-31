(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{o4Ys:function(e,t,o){"use strict";o.r(t),o.d(t,"_frontmatter",(function(){return c})),o.d(t,"default",(function(){return s}));var a=o("wx14"),l=o("zLVn"),n=(o("q1tI"),o("7ljp")),r=o("013z"),c=(o("qKvR"),{}),b={_frontmatter:c},i=r.a;function s(e){var t=e.components,o=Object(l.a)(e,["components"]);return Object(n.b)(i,Object(a.a)({},b,o,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"Purpose"),Object(n.b)("p",null,"Buffer pool hit ratios are one of the most fundamental metrics for measuring database performance.  They provide an important overall measure of how effectively the system is exploiting memory to avoid disk IO.  This view shows hit ratios for all buffer pools and for various data types."),Object(n.b)("undefined",null,Object(n.b)("p",null,Object(n.b)("span",Object(a.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1028px"}}),"\n      ",Object(n.b)("span",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"47.91666666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAAAsSAAALEgHS3X78AAABtElEQVQoz5WQ227TQBCG9y0qXomr3lQCAalSJ7HjFBqhVKCkN1UVpLSKTQgXyK6cQoljfFjH3vi062NQm9diYqTe99NqtJrZ+f+ZRVz78tXrSePdNde64tpfBOFGFKcdYdLhrz+8//r5k3pxcTcc3nLcWBAmvd5U4G+41rQrzgVBRZ6/vL+3DcNyHN11TbLBtr1aGb/i2P/2fXp49PLozWGLbxgGVLHrOoRgd21vAl+WJ+jvtiyKvNhT5nlRlhXGWNeNx8fdaDRCNQcvDn4viflna5p5luVJQsMwkiQZMRZRllLKwjCklEZR5BMfYycMQu1Oa/fapx9Pz4fnPgkIoba1AVzXjeNYkiS0XP70PJ8Qouur9dozaizTghMEAY1pWZQg5HmeY1uGscI1aZrOZjPk+xhmAM8gDCCCJAjBFDACYwx8IAORMSglcRRTmsRJAkvKsoy224yxFN6BGKvJsiyteUo+lf5nwaOqqn1zloF08iygAZz3Oz88VPDDzwI6d7vdfD5HmvZDUW5VVVUURdO0wWDQ7/fhotZAcrFYjMfjZrPZ7YpnZyLPv+10GrxwfHJy/A8bfYDE2MNFuQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"IO-Bufferpools.png",title:"IO-Bufferpools.png",src:"/db2-dsmtop-wiki/static/61cf75cd9db24d3507c467926415073a/c7ff2/IO-Bufferpools.png",srcSet:["/db2-dsmtop-wiki/static/61cf75cd9db24d3507c467926415073a/7fc1e/IO-Bufferpools.png 288w","/db2-dsmtop-wiki/static/61cf75cd9db24d3507c467926415073a/a5df1/IO-Bufferpools.png 576w","/db2-dsmtop-wiki/static/61cf75cd9db24d3507c467926415073a/c7ff2/IO-Bufferpools.png 1028w"],sizes:"(max-width: 1028px) 100vw, 1028px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(n.b)("h2",null,"Metrics Shown in Grid"),Object(n.b)("p",null,"In the grid portion of the view, we show the hit ratio and key metrics for each buffer pool, including size and number of logical and physical reads.  In the summary and gauges above the grid, we show some of the same metrics summarized across all buffer pools."),Object(n.b)("p",null,Object(n.b)("u",{parentName:"p"},"BufferPool Name")),Object(n.b)("p",null,Object(n.b)("span",Object(a.a)({parentName:"p"},{style:{fontFamily:"'helvetica neue' , 'helvetica' , 'arial' , sans-serif"}}),"Source: "),Object(n.b)("span",Object(a.a)({parentName:"p"},{style:{fontFamily:"'courier new' , 'courier' , monospace"}}),"mon_get_bufferpool.bp_name")),Object(n.b)("p",null,Object(n.b)("br",{parentName:"p"}),"\n",Object(n.b)("u",{parentName:"p"},"Delta l_reads/s"))),Object(n.b)("p",null,Object(n.b)("span",{style:{fontFamily:"'helvetica neue' , 'helvetica' , 'arial' , sans-serif"}},"Source: "),Object(n.b)("span",{style:{fontFamily:"'courier new' , 'courier' , monospace"}},"mon_get_bufferpool")),Object(n.b)("p",{style:{marginLeft:"40px"}},Object(n.b)("a",{href:"http://www-01.ibm.com/support/knowledgecenter/SSEPGG_10.5.0/com.ibm.db2.luw.admin.mon.doc/doc/r0001235.html?cp=SSEPGG_10.5.0&lang=en",style:{fontFamily:"'courier new' , 'courier' , monospace"}},"pool_data_l_reads"),Object(n.b)("span",{style:{fontFamily:"'courier new' , 'courier' , monospace"}}," + "),Object(n.b)("a",{href:"http://www-01.ibm.com/support/knowledgecenter/SSEPGG_10.5.0/com.ibm.db2.luw.admin.mon.doc/doc/r0001238.html?lang=en",style:{fontFamily:"'courier new' , 'courier' , monospace"}},"pool_index_l_reads"),Object(n.b)("span",{style:{fontFamily:"'courier new' , 'courier' , monospace"}}," + "),Object(n.b)("a",{href:"http://www-01.ibm.com/support/knowledgecenter/SSEPGG_10.5.0/com.ibm.db2.luw.admin.mon.doc/doc/r0022731.html?lang=en",style:{fontFamily:"'courier new' , 'courier' , monospace"}},"pool_xda_l_reads"),Object(n.b)("span",{style:{fontFamily:"'courier new' , 'courier' , monospace"}}," + ",Object(n.b)("a",{href:"http://www.ibm.com/support/knowledgecenter/SSEPGG_10.5.0/com.ibm.db2.luw.admin.mon.doc/doc/r0060763.html?lang=en"},"pool_col_l_reads")," +")),Object(n.b)("p",{style:{marginLeft:"40px"}},Object(n.b)("a",{href:"http://www.ibm.com/support/knowledgecenter/SSEPGG_10.5.0/com.ibm.db2.luw.admin.mon.doc/doc/r0011302.html?lang=en"},"pool_temp_data_l_reads "),Object(n.b)("span",{style:{fontFamily:"'courier new' , 'courier' , monospace",lineHeight:"1.5"}},"+ ",Object(n.b)("a",{href:"http://www.ibm.com/support/knowledgecenter/SSEPGG_10.5.0/com.ibm.db2.luw.admin.mon.doc/doc/r0011303.html?cp=SSEPGG_10.5.0&lang=en"},"pool_temp_index_l_reads "),"+ ",Object(n.b)("a",{href:"http://www.ibm.com/support/knowledgecenter/SSEPGG_10.5.0/com.ibm.db2.luw.admin.mon.doc/doc/r0022738.html?cp=SSEPGG_10.5.0&lang=en"},"pool_temp_xda_l_reads "),"+ ",Object(n.b)("a",{href:"http://www.ibm.com/support/knowledgecenter/SSEPGG_10.5.0/com.ibm.db2.luw.admin.mon.doc/doc/r0060873.html?cp=SSEPGG_10.5.0&lang=en"},"pool_temp_col_l_reads"))),Object(n.b)("p",null,Object(n.b)("u",null,"Delta p_reads/s")),Object(n.b)("p",null,Object(n.b)("span",{style:{fontFamily:"'helvetica neue' , 'helvetica' , 'arial' , sans-serif"}},"Source: "),Object(n.b)("span",{style:{fontFamily:"'courier new' , 'courier' , monospace"}},"mon_get_bufferpool")),Object(n.b)("p",{style:{marginLeft:"40px",fontFamily:"'helvetica neue' , 'helvetica' , 'arial' , sans-serif"}},Object(n.b)("span",{style:{fontFamily:"'courier new' , 'courier' , monospace"}},"pool_data_p_reads + pool_index_p_reads + pool_xda_p_reads + pool_col_p_reads +")),Object(n.b)("p",{style:{marginLeft:"40px",fontFamily:"'helvetica neue' , 'helvetica' , 'arial' , sans-serif"}},Object(n.b)("span",{style:{fontFamily:"'courier new' , 'courier' , monospace"}},"pool_temp_data_p_reads + pool_temp_index_p_reads + pool_temp_xda_p_reads + pool_temp_col_p_reads")),Object(n.b)("p",null,Object(n.b)("br",null),Object(n.b)("u",null,"Hit Ratio %")),Object(n.b)("p",null,Object(n.b)("br",null),Object(n.b)("u",null,"Async Reads %")),Object(n.b)("p",null,Object(n.b)("br",null),Object(n.b)("u",null,"Delta Bp Writes/s")),Object(n.b)("p",null,Object(n.b)("span",{style:{fontFamily:"'helvetica neue' , 'helvetica' , 'arial' , sans-serif"}},"Source: "),Object(n.b)("span",{style:{fontFamily:"'courier new' , 'courier' , monospace"}},"mon_get_bufferpool")),Object(n.b)("p",{style:{marginLeft:"40px"}},Object(n.b)("span",{style:{fontFamily:"'courier new' , 'courier' , monospace"}},"pool_data_writes + pool_index_writes + pool_xda_writes + pool_col_writes")),Object(n.b)("p",null,Object(n.b)("br",null),Object(n.b)("u",null,"Delta Direct Writes/s")),Object(n.b)("p",null,Object(n.b)("span",{style:{fontFamily:"'helvetica neue' , 'helvetica' , 'arial' , sans-serif"}},"Source: "),Object(n.b)("span",{style:{fontFamily:"'courier new' , 'courier' , monospace"}},"mon_get_activity.direct_writes")),Object(n.b)("p",null,Object(n.b)("br",null),Object(n.b)("u",null,"Delta a_reads/s",Object(n.b)("br",null),"Async ReadMs",Object(n.b)("br",null),"Delta a_writes/s",Object(n.b)("br",null),"Async WrtMs",Object(n.b)("br",null),"Async Wrt %",Object(n.b)("br",null),"# of DBP")),Object(n.b)("p",null,Object(n.b)("span",{style:{fontFamily:"'arial' , 'helvetica' , sans-serif"}},"For this bufferpool, the number of database partitions for which buffer pool information is being reported.")),Object(n.b)("p",null,Object(n.b)("br",null),Object(n.b)("u",null,"BP Pages",Object(n.b)("br",null),"Files Closed/s",Object(n.b)("br",null),"Block IOs/s",Object(n.b)("br",null),"Pages BlkIOs/s",Object(n.b)("br",null),"Vectored IOs/s",Object(n.b)("br",null),"Pages VctIOs/s",Object(n.b)("br",null),"Victim Pages/s",Object(n.b)("br",null),"Unread PrefPages/s",Object(n.b)("br",null),"%Unread PrefPages",Object(n.b)("br",null),"XDA l_reads/s",Object(n.b)("br",null),"XDA p_reads/s",Object(n.b)("br",null),"XDA writes/s")),Object(n.b)("h2",null,"Default Sort Column"),Object(n.b)("h2",null,"Navigation"),Object(n.b)("p",{style:{marginBottom:"5px",paddingTop:"2px",paddingBottom:"2px",fontFamily:"'helvetica neue' , 'helvetica' , 'arial' , sans-serif"}},"Keyboard navigation: VIb"),Object(n.b)("p",{style:{marginBottom:"5px",paddingTop:"2px",paddingBottom:"2px",fontFamily:"'helvetica neue' , 'helvetica' , 'arial' , sans-serif"}},"Dedicated shortcut key: alt-b"),Object(n.b)("h6",null,"Author: KevinLBeck"))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-io-bufferpools-mdx-21244a6105edd3c7b69b.js.map