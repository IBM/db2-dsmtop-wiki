(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{oU4I:function(e,t,o){"use strict";o.r(t),o.d(t,"_frontmatter",(function(){return a})),o.d(t,"default",(function(){return i}));var c=o("wx14"),l=o("zLVn"),n=(o("q1tI"),o("7ljp")),r=o("013z"),a=(o("qKvR"),{}),b={_frontmatter:a},s=r.a;function i(e){var t=e.components,o=Object(l.a)(e,["components"]);return Object(n.b)(s,Object(c.a)({},b,o,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"Purpose"),Object(n.b)("p",null,"This view presents data useful in assessing skew in access patterns.  When a query accesses more data on some members than on others, the more heavily loaded members become bottlenecks, making the whole query take longer."),Object(n.b)("p",null,Object(n.b)("span",Object(c.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1107px"}}),"\n      ",Object(n.b)("span",Object(c.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"44.79166666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAIAAAC9o5sfAAAACXBIWXMAAAsSAAALEgHS3X78AAABHElEQVQoz41QXWuDMBT1p27vLSv1C+3D6uhoYaOrDp/2GnQmMZpYokbNb9tV1zEYAw/h3JP7nRiej9ab4919uFq9rB9Olh3aTrS1zrYTOk7k+zGw58Vb87zZvELIdd8tKzLN2HU/DIS4qGiS4M8UUZpinBQFyVlWlkQIBsw55TwHwRgGzVhWjKLAODWyrKvlNc/zoiir6lqWHA7nQohq1qAmrvjkx5hAGjizDBuEDH2vpKzbtlFKtTfMWv3CfJVSAnddRwiB4l5r0D2gW4A5TWsNy46Th6Gbei0FTP63eF7yb8HtFWAbmE8oWVr844cINBkGTWk+/rZSdV03ADDQMoqiy+UNspvm2wkaIeTvdofD8/H0GATOfu8GT/4X5UZukVl7ZrIAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",Object(c.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Throughput-SkewMonitor.png",title:"Throughput-SkewMonitor.png",src:"/IBM/db2-dsmtop-wiki/static/d514d50637afe96058f374ca25a3b32c/917f9/Throughput-SkewMonitor.png",srcSet:["/IBM/db2-dsmtop-wiki/static/d514d50637afe96058f374ca25a3b32c/7fc1e/Throughput-SkewMonitor.png 288w","/IBM/db2-dsmtop-wiki/static/d514d50637afe96058f374ca25a3b32c/a5df1/Throughput-SkewMonitor.png 576w","/IBM/db2-dsmtop-wiki/static/d514d50637afe96058f374ca25a3b32c/917f9/Throughput-SkewMonitor.png 1107w"],sizes:"(max-width: 1107px) 100vw, 1107px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(n.b)("h2",null,"Histograms and Summaries (Gauges)"),Object(n.b)("p",null,"(none)"),Object(n.b)("h2",null,"Metrics Shown in Grid"),Object(n.b)("p",null,Object(n.b)("u",null,"Member")),Object(n.b)("p",null,Object(n.b)("span",{style:{fontFamily:"'helvetica neue' , 'helvetica' , 'arial' , sans-serif"}},"Source: "),Object(n.b)("span",{style:{fontFamily:"'courier new' , 'courier' , monospace"}},Object(n.b)("a",{href:"http://www-01.ibm.com/support/knowledgecenter/SSEPGG_10.5.0/com.ibm.db2.luw.sql.rtn.doc/doc/r0053941.html?lang=en"},"mon_get_service_subclass"),".",Object(n.b)("a",{href:"http://www.ibm.com/support/knowledgecenter/SSEPGG_10.5.0/com.ibm.db2.luw.admin.mon.doc/doc/r0054432.html?cp=SSEPGG_10.5.0&lang=en"},"member"))),Object(n.b)("p",null,Object(n.b)("br",null),Object(n.b)("u",null,"CPU Time")),Object(n.b)("p",null,Object(n.b)("span",{style:{fontFamily:"'helvetica neue' , 'helvetica' , 'arial' , sans-serif"}},"Source: "),Object(n.b)("a",{href:"http://www-01.ibm.com/support/knowledgecenter/SSEPGG_10.5.0/com.ibm.db2.luw.sql.rtn.doc/doc/r0053941.html?lang=en",style:{fontFamily:"'courier new' , 'courier' , monospace"}},"mon_get_service_subclass"),Object(n.b)("span",{style:{fontFamily:"'courier new' , 'courier' , monospace"}},".total_cpu_time")),Object(n.b)("p",null,Object(n.b)("br",null),Object(n.b)("u",null,"Logical Reads/s")),Object(n.b)("p",null,"Logical reads is a better measure of access patterns than rows read because it includes index accesses."),Object(n.b)("p",null,Object(n.b)("span",{style:{fontFamily:"'helvetica neue' , 'helvetica' , 'arial' , sans-serif"}},"Source: "),Object(n.b)("a",{href:"http://www-01.ibm.com/support/knowledgecenter/SSEPGG_10.5.0/com.ibm.db2.luw.sql.rtn.doc/doc/r0053941.html?lang=en",style:{fontFamily:"'courier new' , 'courier' , monospace"}},"mon_get_service_subclass")),Object(n.b)("p",{style:{marginBottom:"5px",marginLeft:"40px",paddingTop:"2px",paddingBottom:"2px",fontFamily:"'helvetica neue' , 'helvetica' , 'arial' , sans-serif"}},Object(n.b)("a",{href:"http://www-01.ibm.com/support/knowledgecenter/SSEPGG_10.5.0/com.ibm.db2.luw.admin.mon.doc/doc/r0001235.html?cp=SSEPGG_10.5.0&lang=en",style:{fontFamily:"'courier new' , 'courier' , monospace"}},"pool_data_l_reads"),Object(n.b)("span",{style:{fontFamily:"'courier new' , 'courier' , monospace"}}," + "),Object(n.b)("a",{href:"http://www-01.ibm.com/support/knowledgecenter/SSEPGG_10.5.0/com.ibm.db2.luw.admin.mon.doc/doc/r0001238.html?lang=en",style:{fontFamily:"'courier new' , 'courier' , monospace"}},"pool_index_l_reads"),Object(n.b)("span",{style:{fontFamily:"'courier new' , 'courier' , monospace"}}," + "),Object(n.b)("a",{href:"http://www-01.ibm.com/support/knowledgecenter/SSEPGG_10.5.0/com.ibm.db2.luw.admin.mon.doc/doc/r0022731.html?lang=en",style:{fontFamily:"'courier new' , 'courier' , monospace"}},"pool_xda_l_reads"),Object(n.b)("span",{style:{fontFamily:"'courier new' , 'courier' , monospace"}}," + ",Object(n.b)("a",{href:"http://www.ibm.com/support/knowledgecenter/SSEPGG_10.5.0/com.ibm.db2.luw.admin.mon.doc/doc/r0060763.html?lang=en"},"pool_col_l_reads")," +")),Object(n.b)("p",{style:{marginBottom:"5px",marginLeft:"40px",paddingTop:"2px",paddingBottom:"2px",fontFamily:"'helvetica neue' , 'helvetica' , 'arial' , sans-serif"}},Object(n.b)("a",{href:"http://www.ibm.com/support/knowledgecenter/SSEPGG_10.5.0/com.ibm.db2.luw.admin.mon.doc/doc/r0011302.html?lang=en"},"pool_temp_data_l_reads "),Object(n.b)("span",{style:{fontFamily:"'courier new' , 'courier' , monospace",lineHeight:"1.5"}},"+ ",Object(n.b)("a",{href:"http://www.ibm.com/support/knowledgecenter/SSEPGG_10.5.0/com.ibm.db2.luw.admin.mon.doc/doc/r0011303.html?cp=SSEPGG_10.5.0&lang=en"},"pool_temp_index_l_reads "),"+ ",Object(n.b)("a",{href:"http://www.ibm.com/support/knowledgecenter/SSEPGG_10.5.0/com.ibm.db2.luw.admin.mon.doc/doc/r0022738.html?cp=SSEPGG_10.5.0&lang=en"},"pool_temp_xda_l_reads "),"+ ",Object(n.b)("a",{href:"http://www.ibm.com/support/knowledgecenter/SSEPGG_10.5.0/com.ibm.db2.luw.admin.mon.doc/doc/r0060873.html?cp=SSEPGG_10.5.0&lang=en"},"pool_temp_col_l_reads"))),Object(n.b)("p",null,Object(n.b)("br",null),Object(n.b)("u",null,"Logical Temp Reads/s")),Object(n.b)("p",null,Object(n.b)("span",{style:{fontFamily:"'helvetica neue' , 'helvetica' , 'arial' , sans-serif"}},"Source: "),Object(n.b)("a",{href:"http://www-01.ibm.com/support/knowledgecenter/SSEPGG_10.5.0/com.ibm.db2.luw.sql.rtn.doc/doc/r0053941.html?lang=en",style:{fontFamily:"'courier new' , 'courier' , monospace"}},"mon_get_service_subclass")),Object(n.b)("p",{style:{marginLeft:"40px"}},Object(n.b)("a",{href:"http://www-01.ibm.com/support/knowledgecenter/SSEPGG_10.5.0/com.ibm.db2.luw.admin.mon.doc/doc/r0011302.html?lang=en",style:{textDecoration:"underline",color:"rgb( 5 , 56 , 107 )",fontFamily:"'courier new' , 'courier' , monospace"}},"pool_temp_data_l_reads"),Object(n.b)("span",{style:{fontFamily:"'courier new' , 'courier' , monospace"}}," + pool_temp_index_l_reads + pool_temp_xda_l_reads + pool_temp_col_l_reads")),Object(n.b)("p",null,Object(n.b)("br",null),Object(n.b)("u",null,"Rows Read/s")),Object(n.b)("p",null,Object(n.b)("span",{style:{fontFamily:"'helvetica neue' , 'helvetica' , 'arial' , sans-serif"}},"Source: "),Object(n.b)("a",{href:"http://www-01.ibm.com/support/knowledgecenter/SSEPGG_10.5.0/com.ibm.db2.luw.sql.rtn.doc/doc/r0053941.html?lang=en",style:{fontFamily:"'courier new' , 'courier' , monospace"}},"mon_get_service_subclass"),Object(n.b)("span",{style:{fontFamily:"'courier new' , 'courier' , monospace"}},".rows_read")),Object(n.b)("p",null,Object(n.b)("br",null),Object(n.b)("u",null,"Rows Modified/s")),Object(n.b)("p",null,Object(n.b)("span",{style:{fontFamily:"'helvetica neue' , 'helvetica' , 'arial' , sans-serif"}},"Source: "),Object(n.b)("a",{href:"http://www-01.ibm.com/support/knowledgecenter/SSEPGG_10.5.0/com.ibm.db2.luw.sql.rtn.doc/doc/r0053941.html?lang=en",style:{fontFamily:"'courier new' , 'courier' , monospace"}},"mon_get_service_subclass"),Object(n.b)("span",{style:{fontFamily:"'courier new' , 'courier' , monospace"}},".rows_modified")),Object(n.b)("p",null,Object(n.b)("br",null),Object(n.b)("u",null,"TQ Recvs/s")),Object(n.b)("p",null,Object(n.b)("span",{style:{fontFamily:"'helvetica neue' , 'helvetica' , 'arial' , sans-serif"}},"Source: "),Object(n.b)("a",{href:"http://www-01.ibm.com/support/knowledgecenter/SSEPGG_10.5.0/com.ibm.db2.luw.sql.rtn.doc/doc/r0053941.html?lang=en",style:{fontFamily:"'courier new' , 'courier' , monospace"}},"mon_get_service_subclass"),Object(n.b)("span",{style:{fontFamily:"'courier new' , 'courier' , monospace"}},".fcm_tq_recvs_total")),Object(n.b)("p",null,Object(n.b)("br",null),Object(n.b)("u",null,"TQ Sends/s")),Object(n.b)("p",null,Object(n.b)("span",{style:{fontFamily:"'helvetica neue' , 'helvetica' , 'arial' , sans-serif"}},"Source: "),Object(n.b)("a",{href:"http://www-01.ibm.com/support/knowledgecenter/SSEPGG_10.5.0/com.ibm.db2.luw.sql.rtn.doc/doc/r0053941.html?lang=en",style:{fontFamily:"'courier new' , 'courier' , monospace"}},"mon_get_service_subclass"),Object(n.b)("span",{style:{fontFamily:"'courier new' , 'courier' , monospace"}},".fcm_tq_sends_total")),Object(n.b)("p",null,Object(n.b)("br",null),Object(n.b)("u",null,"TQ Spills/s")),Object(n.b)("p",null,Object(n.b)("span",{style:{fontFamily:"'helvetica neue' , 'helvetica' , 'arial' , sans-serif"}},"Source: "),Object(n.b)("a",{href:"http://www-01.ibm.com/support/knowledgecenter/SSEPGG_10.5.0/com.ibm.db2.luw.sql.rtn.doc/doc/r0053941.html?lang=en",style:{fontFamily:"'courier new' , 'courier' , monospace"}},"mon_get_service_subclass"),Object(n.b)("span",{style:{fontFamily:"'courier new' , 'courier' , monospace"}},".tq_tot_send_spills")),Object(n.b)("p",null,Object(n.b)("br",null),Object(n.b)("u",null,"Overflows/s")),Object(n.b)("p",null,Object(n.b)("span",{style:{fontFamily:"'helvetica neue' , 'helvetica' , 'arial' , sans-serif"}},"Source: "),Object(n.b)("a",{href:"http://www-01.ibm.com/support/knowledgecenter/SSEPGG_10.5.0/com.ibm.db2.luw.sql.rtn.doc/doc/r0053941.html?lang=en",style:{fontFamily:"'courier new' , 'courier' , monospace"}},"mon_get_service_subclass")),Object(n.b)("p",{style:{marginLeft:"40px"}},Object(n.b)("span",{style:{fontFamily:"'courier new' , 'courier' , monospace"}},"sort_overflows + hash_join_overflows + olap_func_overflows + hash_grpby_overflows")),Object(n.b)("p",null,Object(n.b)("br",null),Object(n.b)("u",null,"FCM Volume (KB/s)")),Object(n.b)("p",null,Object(n.b)("span",{style:{fontFamily:"'helvetica neue' , 'helvetica' , 'arial' , sans-serif"}},"Source: "),Object(n.b)("a",{href:"http://www-01.ibm.com/support/knowledgecenter/SSEPGG_10.5.0/com.ibm.db2.luw.sql.rtn.doc/doc/r0053941.html?lang=en",style:{fontFamily:"'courier new' , 'courier' , monospace"}},"mon_get_service_subclass")),Object(n.b)("p",{style:{marginLeft:"40px"}},Object(n.b)("span",{style:{fontFamily:"'courier new' , 'courier' , monospace"}},"(fcm_recv_volume + fcm_send_volume) / 1024.0")),Object(n.b)("p",null,Object(n.b)("br",null),Object(n.b)("u",null,"FCM Buffers Sent/s")),Object(n.b)("p",null,Object(n.b)("span",{style:{fontFamily:"'helvetica neue' , 'helvetica' , 'arial' , sans-serif"}},"Source: "),Object(n.b)("a",{href:"http://www-01.ibm.com/support/knowledgecenter/SSEPGG_10.5.0/com.ibm.db2.luw.sql.rtn.doc/doc/r0053941.html?lang=en",style:{fontFamily:"'courier new' , 'courier' , monospace"}},"mon_get_service_subclass"),Object(n.b)("span",{style:{fontFamily:"'courier new' , 'courier' , monospace"}},".fcm_sends_total")),Object(n.b)("p",null,Object(n.b)("br",null),Object(n.b)("u",null,"FCM Buffers Recvd/s")),Object(n.b)("p",null,Object(n.b)("span",{style:{fontFamily:"'helvetica neue' , 'helvetica' , 'arial' , sans-serif"}},"Source: "),Object(n.b)("a",{href:"http://www-01.ibm.com/support/knowledgecenter/SSEPGG_10.5.0/com.ibm.db2.luw.sql.rtn.doc/doc/r0053941.html?lang=en",style:{fontFamily:"'courier new' , 'courier' , monospace"}},"mon_get_service_subclass"),Object(n.b)("span",{style:{fontFamily:"'courier new' , 'courier' , monospace"}},".fcm_recvs_total")),Object(n.b)("p",null,Object(n.b)("br",null),Object(n.b)("u",null,"Activities Completed/s")),Object(n.b)("p",null,Object(n.b)("span",{style:{fontFamily:"'helvetica neue' , 'helvetica' , 'arial' , sans-serif"}},"Source: "),Object(n.b)("a",{href:"http://www-01.ibm.com/support/knowledgecenter/SSEPGG_10.5.0/com.ibm.db2.luw.sql.rtn.doc/doc/r0053941.html?lang=en",style:{fontFamily:"'courier new' , 'courier' , monospace"}},"mon_get_service_subclass"),Object(n.b)("span",{style:{fontFamily:"'courier new' , 'courier' , monospace"}},".act_completed_total")),Object(n.b)("p",null,Object(n.b)("br",null),Object(n.b)("u",null,"Requests/s")),Object(n.b)("p",null,Object(n.b)("span",{style:{fontFamily:"'helvetica neue' , 'helvetica' , 'arial' , sans-serif"}},"Source: "),Object(n.b)("a",{href:"http://www-01.ibm.com/support/knowledgecenter/SSEPGG_10.5.0/com.ibm.db2.luw.sql.rtn.doc/doc/r0053941.html?lang=en",style:{fontFamily:"'courier new' , 'courier' , monospace"}},"mon_get_service_subclass"),Object(n.b)("span",{style:{fontFamily:"'courier new' , 'courier' , monospace"}},".rqsts_completed_total")),Object(n.b)("p",null,Object(n.b)("br",null),Object(n.b)("u",null,"In-flight Activities")),Object(n.b)("p",null,Object(n.b)("span",{style:{fontFamily:"'helvetica neue' , 'helvetica' , 'arial' , sans-serif"}},"Source:")),Object(n.b)("p",{style:{marginLeft:"40px"}},Object(n.b)("span",{style:{fontFamily:"'courier new' , 'courier' , monospace"}},"select count(*) from table(wlm_get_workload_occurrence_activities(null,member))")),Object(n.b)("h2",null,"Default Sort Column"),Object(n.b)("p",null,"Member, ascending"),Object(n.b)("h2",null,"Navigation"),Object(n.b)("p",null,"Keyboard navigation: VtJ"),Object(n.b)("p",null,"Dedicated shortcut key: alt-J"),Object(n.b)("h6",null,"Author: KevinLBeck"))}i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-throughput-skew-monitor-mdx-025c53b97f08810942d6.js.map