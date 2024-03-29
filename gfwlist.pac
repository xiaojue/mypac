function FindProxyForURL( url, host )
{
     if ( shExpMatch(url, "*ip38*")
         || shExpMatch(url, "*1-apple.com.tw*")
         || shExpMatch(url, "http://nsf.110mb.com*")
         || shExpMatch(url, "http://www.1bao.org*")
         || shExpMatch(url, "*2-0-0-9.cn*")
         || shExpMatch(url, "*3boys2girls.com*")
         || shExpMatch(url, "http://3cc.cc/*")
         || shExpMatch(url, "http://www.3cc.cc/*")
         || shExpMatch(url, "http://www.4shared.com*")
         || shExpMatch(url, "*5maodang.com*")
         || shExpMatch(url, "*.6park.com*")
         || shExpMatch(url, "*64memo.com*")
         || shExpMatch(url, "*64tianwang.com*")
         || shExpMatch(url, "*89-64.org*")
         || shExpMatch(url, "*8ok.com/*")
         || shExpMatch(url, "*www.aboluowang.com*")
         || shExpMatch(url, "*.aboutus.org*")
         || shExpMatch(url, "http://www.aidsmuseum.cn/*")
         || shExpMatch(url, "http://*blog.aiweiwei.com*")
         || shExpMatch(url, "*allhabit.com*")
         || shExpMatch(url, "*alliance.org.hk*")
         || shExpMatch(url, "http://*www.amazon.com*")
         || shExpMatch(url, "*amiblockedornot.com*")
         || shExpMatch(url, "*.amnesty.org*")
         || shExpMatch(url, "*amnestyusa.org*")
         || shExpMatch(url, "http://www.amoiist.com/*")
         || shExpMatch(url, "http://www.andylau.com*")
         || shExpMatch(url, "*anonymizer.com*")
         || shExpMatch(url, "*anonymouse.org*")
         || shExpMatch(url, "http://news.aol.com/*")
         || shExpMatch(url, "http://gfw.appspot.com/*")
         || shExpMatch(url, "http://proxypy.appspot.com/*")
         || shExpMatch(url, "*areca-backup.org*")
         || shExpMatch(url, "http://www.arizonachinese.com*")
         || shExpMatch(url, "*www.asiademo.org*")
         || shExpMatch(url, "*.atj.org.tw*")
         || shExpMatch(url, "*.atnext.com*")
         || shExpMatch(url, "*backchina.com*")
         || shExpMatch(url, "*.badongo.com/*")
         || shExpMatch(url, "*baidu.jp/*")
         || shExpMatch(url, "http://www.barnabu.co.uk*")
         || shExpMatch(url, "*bbc.co.uk*chinese*")
         || shExpMatch(url, "*bbc.co.uk*zh*")
         || shExpMatch(url, "*newsvote.bbc.co.uk*")
         || shExpMatch(url, "*beijingspring.com*")
         || shExpMatch(url, "*bestforchina.org*")
         || shExpMatch(url, "*bignews.org*")
         || shExpMatch(url, "*bing.com*")
         || shExpMatch(url, "*.blip.tv*")
         || shExpMatch(url, "*/blip.tv*")
         || shExpMatch(url, "*.blog.com/*")
         || shExpMatch(url, "http://*blogger.com*")
         || shExpMatch(url, "http://bloglines.com*")
         || shExpMatch(url, "http://www.bloglines.com*")
         || shExpMatch(url, "http://rconversation.blogs.com/*")
         || shExpMatch(url, "*.blogsome.com*")
         || shExpMatch(url, "*backpackers.com.tw*")
         || shExpMatch(url, "*.blogspot.com*")
         || shExpMatch(url, "*2newcenturynet.blogspot.com*")
         || shExpMatch(url, "*bloooooooogger.blogspot.com*")
         || shExpMatch(url, "*chinagfw.blogspot.com*")
         || shExpMatch(url, "*chinaweeks.blogspot.com*")
         || shExpMatch(url, "*guoweidong.blogspot.com*")
         || shExpMatch(url, "*riovresbo.blogspot.com*")
         || shExpMatch(url, "*talkerblog.blogspot.com*")
         || shExpMatch(url, "*wmrblog.blogspot.com*")
         || shExpMatch(url, "*yetaai.blogspot.com*")
         || shExpMatch(url, "*.blogware.com*")
         || shExpMatch(url, "http://www.bloodshed.net/*")
         || shExpMatch(url, "*bloomfortune.com*")
         || shExpMatch(url, "*bolour.com*")
         || shExpMatch(url, "*book-bot.com*")
         || shExpMatch(url, "http://www.books.com.tw/*")
         || shExpMatch(url, "*.box.net*")
         || shExpMatch(url, "*/box.net*")
         || shExpMatch(url, "*boxun.com*")
         || shExpMatch(url, "http://mckk.bplaced.net*")
         || shExpMatch(url, "*bullogger.com*")
         || shExpMatch(url, "*canyu.org*")
         || shExpMatch(url, "http://caodan.net*")
         || shExpMatch(url, "http://www.carnegieendowment.org*")
         || shExpMatch(url, "*www.ccdtr.org*")
         || shExpMatch(url, "http://www.cdef.org*")
         || shExpMatch(url, "*www.cdp1998.org*")
         || shExpMatch(url, "*cdpwu.org*")
         || shExpMatch(url, "*www.cecc.gov*")
         || shExpMatch(url, "*www.cafepress.com*")
         || shExpMatch(url, "http://cgiproxy.us/*")
         || shExpMatch(url, "http://www.cgiproxy.us/*")
         || shExpMatch(url, "*changkun.org*")
         || shExpMatch(url, "*chenjun.com*")
         || shExpMatch(url, "*china-week.com*")
         || shExpMatch(url, "*chinacomments.org*")
         || shExpMatch(url, "*chinadigitaltimes.net/*")
         || shExpMatch(url, "*chinagfw.org*")
         || shExpMatch(url, "*chinasmack.com*")
         || shExpMatch(url, "*chinatimes.com*")
         || shExpMatch(url, "*chinaway.org*")
         || shExpMatch(url, "*chinesenewsnet.com*")
         || shExpMatch(url, "*chromeexperiments.com*")
         || shExpMatch(url, "*psiphon.civisec.org*")
         || shExpMatch(url, "http://www.civisec.org*")
         || shExpMatch(url, "*.cjb.net*")
         || shExpMatch(url, "*ck101.com*")
         || shExpMatch(url, "*cmule.com*")
         || shExpMatch(url, "*rss.cnn.com*")
         || shExpMatch(url, "http://codepad.org/*")
         || shExpMatch(url, "*commandlineisking.com*")
         || shExpMatch(url, "http://www.coolloud.org.tw/*")
         || shExpMatch(url, "*crd-net.org*")
         || shExpMatch(url, "*creaders.net*")
         || shExpMatch(url, "*crocodyl.org*")
         || shExpMatch(url, "*cuihua.org*")
         || shExpMatch(url, "*code.jquery.com*")
         || shExpMatch(url, "http://ak.*.dailymotion.com/*")
         || shExpMatch(url, "*dajiyuan.com*")
         || shExpMatch(url, "*danwei.org*")
         || shExpMatch(url, "*lists.debian.org*")
         || shExpMatch(url, "http://www.destroydebtwithcashgifting.com*")
         || shExpMatch(url, "*de-sci.org/*")
         || shExpMatch(url, "*discuss.com.hk*")
         || shExpMatch(url, "http://www.docbook.org/*")
         || shExpMatch(url, "*dongde.com*")
         || shExpMatch(url, "http://doubleaf.com*")
         || shExpMatch(url, "http://www.dpp.org.tw/*")
         || shExpMatch(url, "http://dropbox.com*")
         || shExpMatch(url, "*duping.net*")
         || shExpMatch(url, "*dw-world.de*")
         || shExpMatch(url, "*www.dwheeler.com*")
         || shExpMatch(url, "http://www.dynawebinc.com/*")
         || shExpMatch(url, "*www.earthhour.org*")
         || shExpMatch(url, "*easylinuxcds.com*")
         || shExpMatch(url, "*ebookee.com*")
         || shExpMatch(url, "*edoors.com*")
         || shExpMatch(url, "http://www.edubridge.com/*")
         || shExpMatch(url, "*eltondisney.com*")
         || shExpMatch(url, "http://endsoftpatents.org/*")
         || shExpMatch(url, "*epochtimes.com*")
         || shExpMatch(url, "*etree.org/*")
         || shExpMatch(url, "*eyny.com*")
         || shExpMatch(url, "*facebook.com*")
         || shExpMatch(url, "*facebook cdn*")
         || shExpMatch(url, "*fbcdn.net*")
         || shExpMatch(url, "*fangeming.com*")
         || shExpMatch(url, "*feedbooks.mobi*")
         || shExpMatch(url, "http://feeds.feedburner.com/*")
         || shExpMatch(url, "*feer.com*")
         || shExpMatch(url, "http://ff.im/*")
         || shExpMatch(url, "*filestube.com*")
         || shExpMatch(url, "*fillthesquare.org*")
         || shExpMatch(url, "*flickr.com*")
         || shExpMatch(url, "http://farm1.static.flickr.com/*")
         || shExpMatch(url, "http://farm2.static.flickr.com/*")
         || shExpMatch(url, "http://farm4.static.flickr.com*")
         || shExpMatch(url, "*www.forum4hk.com*")
         || shExpMatch(url, "*kineox.free.fr*")
         || shExpMatch(url, "*freeciv.org*")
         || shExpMatch(url, "*freeflowlife.net*")
         || shExpMatch(url, "*freeforums.org/*")
         || shExpMatch(url, "*freemoren.com/*")
         || shExpMatch(url, "http://www.freenet-china.org/*")
         || shExpMatch(url, "*freenetproject.org*")
         || shExpMatch(url, "http://www.freshmeat.net/projects/freenet/*")
         || shExpMatch(url, "*friendfeed.com*")
         || shExpMatch(url, "http://*friendfeed.com%2Fe*")
         || shExpMatch(url, "http://*friendfeed.com/e*")
         || shExpMatch(url, "http://*friendfeed.com/chinese-at-ff*")
         || shExpMatch(url, "http://*friendfeed.com/qifei*")
         || shExpMatch(url, "http://www.fsurf.com/*")
         || shExpMatch(url, "*.ftv.com.tw*")
         || shExpMatch(url, "http://fuckgfw.com*")
         || shExpMatch(url, "*fulue.com*")
         || shExpMatch(url, "*.futurechinaforum.org*")
         || shExpMatch(url, "*gaopi.co.cc*")
         || shExpMatch(url, "*gaopi.com*")
         || shExpMatch(url, "*getchu.com*")
         || shExpMatch(url, "*zh.globalvoicesonline.org*")
         || shExpMatch(url, "http://developer.android.com*")
         || shExpMatch(url, "*source.android.com*")
         || shExpMatch(url, "http://blog.chromium.org*")
         || shExpMatch(url, "*codereview.chromium.org*")
         || shExpMatch(url, "http://dev.chromium.org/*")
         || shExpMatch(url, "*www.dropbox.com*")
         || shExpMatch(url, "*mclee.foolme.net*")
         || shExpMatch(url, "http://blog.friendfeed.com*")
         || shExpMatch(url, "*feeds.gawker.com*")
         || shExpMatch(url, "*blog.growlforwindows.com*")
         || shExpMatch(url, "*blog.jsquaredjavascript.com*")
         || shExpMatch(url, "*kunalanand.com*")
         || shExpMatch(url, "*feeds.mobileread.com*")
         || shExpMatch(url, "http://blog.nihilogic.dk*")
         || shExpMatch(url, "*blog.persistent.info*")
         || shExpMatch(url, "http://rss.slashdot.org*")
         || shExpMatch(url, "*www.techfob.com*")
         || shExpMatch(url, "http://blog.twitter.com*")
         || shExpMatch(url, "*www.willhains.com*")
         || shExpMatch(url, "*.ggpht.com*")
         || shExpMatch(url, "*https://docs.google.com*")
         || shExpMatch(url, "*https://groups.google.com*")
         || shExpMatch(url, "*https://spreadsheets.google.com*")
         || shExpMatch(url, "*https://www.google.com*")
         || shExpMatch(url, "*google.com*analytics*zh-CN*")
         || shExpMatch(url, "*docs.google.com*view*docid*")
         || shExpMatch(url, "*groups.google.com*group*gfw-blog*")
         || shExpMatch(url, "*groups.google.com*group*lihlii*")
         || shExpMatch(url, "*groups.google.com*group*mindex*")
         || shExpMatch(url, "*groups.google.com*group*cn.bbs.comp.dotnet*")
         || shExpMatch(url, "*spreadsheets.google.com*viewform*formkey*ckFYOFJjWWZmbTJwWlVnamhRRk92Q3c6MA*")
         || shExpMatch(url, "*.googlevideo.com*")
         || shExpMatch(url, "*picasaweb.google.com*")
         || shExpMatch(url, "*gospelherald.com*")
         || shExpMatch(url, "http://www.govindicators.org*")
         || shExpMatch(url, "*gpass1.com*")
         || shExpMatch(url, "http://www.gproxy.com*")
         || shExpMatch(url, "http://www.greasespot.net/*")
         || shExpMatch(url, "*great-firewall.com*")
         || shExpMatch(url, "http://www.gutenberg.org/*")
         || shExpMatch(url, "http://hackaday.com/*")
         || shExpMatch(url, "http://www.heartyit.com/*")
         || shExpMatch(url, "*hellotxt.com*")
         || shExpMatch(url, "http://www.hemidemi.com/*")
         || shExpMatch(url, "*myweb.hinet.net*")
         || shExpMatch(url, "http://times.hinet.net/*")
         || shExpMatch(url, "*forum7.hkgolden.com*")
         || shExpMatch(url, "*hkreporter.com*")
         || shExpMatch(url, "*hrichina.org*")
         || shExpMatch(url, "http://www.hungerstrikeforaids.org*")
         || shExpMatch(url, "*hk-pub.com*")
         || shExpMatch(url, "*hulu.com*")
         || shExpMatch(url, "http://i1.hk/*")
         || shExpMatch(url, "http://www.iamfisher.net/*")
         || shExpMatch(url, "*hp.infoseek.co.jp/*")
         || shExpMatch(url, "http://www.im.tv/*")
         || shExpMatch(url, "http://www.inmediahk.net/*")
         || shExpMatch(url, "*internetfreedom.org*")
         || shExpMatch(url, "*jieshibaobao.com*")
         || shExpMatch(url, "*.jiruan.net*")
         || shExpMatch(url, "http://jpra1113.org*")
         || shExpMatch(url, "*karayou.com*")
         || shExpMatch(url, "*kanzhongguo.com*")
         || shExpMatch(url, "http://www.kmt.org.tw/*")
         || shExpMatch(url, "http://www.kzeng.info/*")
         || shExpMatch(url, "http://www.lancsky.com/*")
         || shExpMatch(url, "*libertytimes.com.tw*")
         || shExpMatch(url, "http://cle.linux.org.tw/*")
         || shExpMatch(url, "*linuxconfig.org*")
         || shExpMatch(url, "*laomiu.com*")
         || shExpMatch(url, "*https://*.live.com/*")
         || shExpMatch(url, "*portis21.spaces.live.com*")
         || shExpMatch(url, "*siyi123123123.spaces.live.com*")
         || shExpMatch(url, "*wangyi64.spaces.live.com*")
         || shExpMatch(url, "*wenyunchao.spaces.live.com*")
         || shExpMatch(url, "*zhllg.spaces.live.com*")
         || shExpMatch(url, "*mail-archive.com*")
         || shExpMatch(url, "http://cq.mail163.to/*")
         || shExpMatch(url, "*www.manning.com*")
         || shExpMatch(url, "*markmail.org*message*")
         || shExpMatch(url, "http://www.mathtunnel.com/*")
         || shExpMatch(url, "*mediafire.com*")
         || shExpMatch(url, "http://memedia.cn/*")
         || shExpMatch(url, "*middle-way.net*")
         || shExpMatch(url, "*.minghui.org*")
         || shExpMatch(url, "*mingpao.com*")
         || shExpMatch(url, "*mingpaonews.com*")
         || shExpMatch(url, "http://www.mingpaony.com/*")
         || shExpMatch(url, "*.mingpaosf.com*")
         || shExpMatch(url, "*.mingpaotor.com*")
         || shExpMatch(url, "*.mingpaovan.com*")
         || shExpMatch(url, "*minzhuzhongguo.org*")
         || shExpMatch(url, "*.mp/*")
         || shExpMatch(url, "http://www.mpinews.com/*")
         || shExpMatch(url, "*news.msn.com.tw*")
         || shExpMatch(url, "*www.msn.com.tw*")
         || shExpMatch(url, "http://mxexpress.twbbs.org/*")
         || shExpMatch(url, "http://www.mycould.com/*")
         || shExpMatch(url, "http://vids.myspace.com/*")
         || shExpMatch(url, "*web.mac.com*")
         || shExpMatch(url, "*homepage.mac.com*")
         || shExpMatch(url, "*mm36c.com*")
         || shExpMatch(url, "http://www.nakedcapitalism.com*")
         || shExpMatch(url, "*naol.ca/*")
         || shExpMatch(url, "*net.ru*")
         || shExpMatch(url, "*netcolony.com*")
         || shExpMatch(url, "*newcenturynews.com*")
         || shExpMatch(url, "*newstin.com*")
         || shExpMatch(url, "http://www.newsvine.com/*")
         || shExpMatch(url, "*hk*.nextmedia.com*")
         || shExpMatch(url, "*tw*.nextmedia.com*")
         || shExpMatch(url, "*ngensis.com*")
         || shExpMatch(url, "http://taiwanyes.ning.com/group/taiwanpower*")
         || shExpMatch(url, "*ntdtv.com*")
         || shExpMatch(url, "*observechina.net*")
         || shExpMatch(url, "*old-cat.net*")
         || shExpMatch(url, "*omnitalk.*")
         || shExpMatch(url, "*/on.cc/*")
         || shExpMatch(url, "*.on.cc/*")
         || shExpMatch(url, "*my.opera.com*")
         || shExpMatch(url, "*www.orchidbbs.com*")
         || shExpMatch(url, "*osdir.com*")
         || shExpMatch(url, "*oizoblog.com*")
         || shExpMatch(url, "*pbs.org/wgbh/pages/frontline/gate*")
         || shExpMatch(url, "*pbs.org/wgbh/pages/frontline/tankman*")
         || shExpMatch(url, "*pbwiki.com*")
         || shExpMatch(url, "*mypaper.pchome.com.tw*")
         || shExpMatch(url, "http://news.pchome.com.tw/*")
         || shExpMatch(url, "*peacefire.org*")
         || shExpMatch(url, "*peacehall.com*")
         || shExpMatch(url, "*perfdynamics.com*")
         || shExpMatch(url, "*philly.com*")
         || shExpMatch(url, "*picturesocial.com*")
         || shExpMatch(url, "*blog.pixnet.com*")
         || shExpMatch(url, "*plurk.com*")
         || shExpMatch(url, "*timnew.posterous.com*")
         || shExpMatch(url, "*powerapple.com/*")
         || shExpMatch(url, "*psiphon.ca*")
         || shExpMatch(url, "http://www.ptt.cc/*")
         || shExpMatch(url, "*plays.com.tw*")
         || shExpMatch(url, "http://pixel.quantserve.com/*")
         || shExpMatch(url, "http://quke.cn*")
         || shExpMatch(url, "http://www.quke.cn*")
         || shExpMatch(url, "*qxbbs.org/*")
         || shExpMatch(url, "*www.radioaustralia.net.au*chinese*articles*")
         || shExpMatch(url, "*renminbao.com*")
         || shExpMatch(url, "*revver.com*")
         || shExpMatch(url, "*robertmao.com*")
         || shExpMatch(url, "http://www.rsf.org/*")
         || shExpMatch(url, "http://www.rsf-chinese.org/*")
         || shExpMatch(url, "*rthk.org.hk*")
         || shExpMatch(url, "*rti.org.tw*")
         || shExpMatch(url, "*ruten.com.tw*")
         || shExpMatch(url, "*ranyunfei.com*")
         || shExpMatch(url, "*scribd.com*")
         || shExpMatch(url, "*secretchina.com*")
         || shExpMatch(url, "*.settv.com*")
         || shExpMatch(url, "*shaunthesheep.com*")
         || shExpMatch(url, "*shizhao.org*")
         || shExpMatch(url, "*simpleproductivityblog.com*")
         || shExpMatch(url, "*blog.sina.com.tw*")
         || shExpMatch(url, "*news.sina.com.tw*")
         || shExpMatch(url, "*news.sina.com.hk*")
         || shExpMatch(url, "*sitetag.us*")
         || shExpMatch(url, "*sokamonline.com*")
         || shExpMatch(url, "http://www.songza.com/*")
         || shExpMatch(url, "http://songza.com/*")
         || shExpMatch(url, "*soundofhope.org*")
         || shExpMatch(url, "*.soup.io/*")
         || shExpMatch(url, "*squarespace.com*")
         || shExpMatch(url, "*starcraft2.com*")
         || shExpMatch(url, "*usinfo.state.gov*")
         || shExpMatch(url, "*sysresccd.org*")
         || shExpMatch(url, "*skype.com*")
         || shExpMatch(url, "*shenshou.org*")
         || shExpMatch(url, "http://tansioksiok.com/*")
         || shExpMatch(url, "*.tblog.com*")
         || shExpMatch(url, "*tcno.net*doc*tor*")
         || shExpMatch(url, "*technologizer.com*")
         || shExpMatch(url, "*technorati.com*")
         || shExpMatch(url, "*telecomspace.com*")
         || shExpMatch(url, "*thepiratebay.org*")
         || shExpMatch(url, "*thkphoto.com*")
         || shExpMatch(url, "*tiananmenmother.org*")
         || shExpMatch(url, "*.tianzhu.org*")
         || shExpMatch(url, "*tibet.net*")
         || shExpMatch(url, "*china.blogs.time.com*")
         || shExpMatch(url, "http://www.time.com/time/time100/leaders/profile/rebel.html*")
         || shExpMatch(url, "*tldp.org*")
         || shExpMatch(url, "*torproject.org*")
         || shExpMatch(url, "http://csai.tsinghua.edu.cn/*")
         || shExpMatch(url, "*tsquare.tv*")
         || shExpMatch(url, "http://tttan.com/*")
         || shExpMatch(url, "*tube8.com*")
         || shExpMatch(url, "*tumblr.com*")
         || shExpMatch(url, "*.gov.tw/*")
         || shExpMatch(url, "*twisternow.com*")
         || shExpMatch(url, "*twitter.com*")
         || shExpMatch(url, "*twitter.com/amoiist*")
         || shExpMatch(url, "*twitter.com/BeiJing1989*")
         || shExpMatch(url, "*twitter.com/billzhong*")
         || shExpMatch(url, "*twitter.com/nowhere1975*")
         || shExpMatch(url, "*twitter.com/shizhao*")
         || shExpMatch(url, "*twitter.com/VOTChinese*")
         || shExpMatch(url, "*twitter.com/wenyunchao*")
         || shExpMatch(url, "*twitter.com/wumao*")
         || shExpMatch(url, "*twitter.com/zengjinyan*")
         || shExpMatch(url, "*twitter.com/zuola*")
         || shExpMatch(url, "*https://twitter.com/*")
         || shExpMatch(url, "*https://www.twitter.com/*")
         || shExpMatch(url, "http://apiwiki.twitter.com/*")
         || shExpMatch(url, "http://dev.twitter.com/*")
         || shExpMatch(url, "http://status.twitter.com/*")
         || shExpMatch(url, "*tynsoe.org*")
         || shExpMatch(url, "*.typepad.com*")
         || shExpMatch(url, "*www.typepad.com*")
         || shExpMatch(url, "*/udn.com*")
         || shExpMatch(url, "*.udn.com*")
         || shExpMatch(url, "*uncyclopedia.*")
         || shExpMatch(url, "http://unifoundry.com/*")
         || shExpMatch(url, "http://www.unknownspace.org/*")
         || shExpMatch(url, "http://www.url.com.tw/*")
         || shExpMatch(url, "http://www.cafc.uscourts.gov/*")
         || shExpMatch(url, "http://earthquake.usgs.gov/eqcenter/recenteqsww/Maps/10/105_30.php*")
         || shExpMatch(url, "*.uwants.com*")
         || shExpMatch(url, "*unblog.fr*")
         || shExpMatch(url, "*uighurbiz.net*")
         || shExpMatch(url, "*www.vansky.com*")
         || shExpMatch(url, "http://www.visuwords.com/*")
         || shExpMatch(url, "http://www.voanews.com/*")
         || shExpMatch(url, "*www.voy.com*")
         || shExpMatch(url, "*wavesandbox.com*")
         || shExpMatch(url, "*.we.bs/*")
         || shExpMatch(url, "*.whitehats.com*")
         || shExpMatch(url, "*www.wangruowang.org*")
         || shExpMatch(url, "*.webshots.com/*")
         || shExpMatch(url, "*websitepulse.com/help/testtools.china-test.html*")
         || shExpMatch(url, "*webworkerdaily.com*")
         || shExpMatch(url, "*weijingsheng.org*")
         || shExpMatch(url, "*wenxuecity.com/*")
         || shExpMatch(url, "*www.wet123.com*")
         || shExpMatch(url, "http://static.wetpaint.com/*")
         || shExpMatch(url, "http://www.wetpaint.com/*")
         || shExpMatch(url, "http://www.wetpaintinjected.com/*")
         || shExpMatch(url, "http://widget.wetpaintserv.us/*")
         || shExpMatch(url, "*wikia.com*")
         || shExpMatch(url, "*wikidot.com*")
         || shExpMatch(url, "*static.wikidot.com*")
         || shExpMatch(url, "*.wikileaks.org/*")
         || shExpMatch(url, "*WikiLeaks IP*")
         || shExpMatch(url, "*/88.80.13.160/*")
         || shExpMatch(url, "*secure.wikimedia.org*")
         || shExpMatch(url, "*en.wikipedia.org/wiki/Book_burning*")
         || shExpMatch(url, "*en.wikipedia.org/wiki/Censorship_in_the_People%27s_Republic_of_China*")
         || shExpMatch(url, "*en.wikipedia.org/wiki/Dalai_Lama*")
         || shExpMatch(url, "*en.wikipedia.org/wiki/Deep_packet_inspection*")
         || shExpMatch(url, "*en.wikipedia.org/wiki/Golden_Shield_Project*")
         || shExpMatch(url, "*en.wikipedia.org/wiki/Internet_censorship*")
         || shExpMatch(url, "*en.wikipedia.org/wiki/Tiananmen_Square_protests_of_1989*")
         || shExpMatch(url, "*Ban Chan*")
         || shExpMatch(url, "*zh.wikipedia.org*%E7%8F%AD%E7%A6%85*")
         || shExpMatch(url, "*Bei Jing Zhi Chun*")
         || shExpMatch(url, "*zh.wikipedia.org*%E5%8C%97%E4%BA%AC%E4%B9%8B%E6%98%A5*")
         || shExpMatch(url, "*Cai Ling*")
         || shExpMatch(url, "*zh.wikipedia.org*%E6%9F%B4%E7%8E%B2*")
         || shExpMatch(url, "*Da Ji Yuan*")
         || shExpMatch(url, "*zh.wikipedia.org*%E5%A4%A7%E7%B4%80%E5%85%83*")
         || shExpMatch(url, "*Da Ji Yuan Shi Bao: zh-cn*")
         || shExpMatch(url, "*zh.wikipedia.org*%E5%A4%A7%E7%BA%AA%E5%85%83%E6%97%B6%E6%8A%A5*")
         || shExpMatch(url, "*Da She Guo JI*")
         || shExpMatch(url, "*zh.wikipedia.org*%E5%A4%A7%E8%B5%A6%E5%9B%BD%E9%99%85*")
         || shExpMatch(url, "*E Luo Si*")
         || shExpMatch(url, "*zh.wikipedia.org*%E4%BF%84%E7%BD%97%E6%96%AF*")
         || shExpMatch(url, "*E Luo Si - zh-tw*")
         || shExpMatch(url, "*zh.wikipedia.org*%E4%BF%84%E7%BE%85%E6%96%AF*")
         || shExpMatch(url, "*Fang Huo Chang Cheng*")
         || shExpMatch(url, "*zh.wikipedia.org*%E9%98%B2%E7%81%AB%E9%95%BF%E5%9F%8E*")
         || shExpMatch(url, "*Fang Li Zhi*")
         || shExpMatch(url, "*zh.wikipedia.org*%E6%96%B9%E5%8A%B1%E4%B9%8B*")
         || shExpMatch(url, "*Hu Jing Tao*")
         || shExpMatch(url, "*zh.wikipedia.org*%E8%83%A1%E9%94%A6%E6%B6%9B*")
         || shExpMatch(url, "*Hua Guo Feng*")
         || shExpMatch(url, "*zh.wikipedia.org/wiki/%E5%8D%8E%E5%9B%BD%E9%94%8B*")
         || shExpMatch(url, "*Hua Yuan Ruan Jian*")
         || shExpMatch(url, "*zh.wikipedia.org/wiki/%E8%8A%B1%E5%9B%AD%E8%BD%AF%E4%BB%B6*")
         || shExpMatch(url, "*Hua Yuan Wang*")
         || shExpMatch(url, "*zh.wikipedia.org*%E8%8A%B1%E5%9B%AD%E7%BD%91*")
         || shExpMatch(url, "*Huang Qi*")
         || shExpMatch(url, "*zh.wikipedia.org*%E9%BB%84%E7%90%A6*")
         || shExpMatch(url, "*Huang Que Xing Dong*")
         || shExpMatch(url, "*zh.wikipedia.org*%E9%BB%83%E9%9B%80%E8%A1%8C%E5%8B%95*")
         || shExpMatch(url, "*Jiang Ze Min*")
         || shExpMatch(url, "*zh.wikipedia.org*%E6%B1%9F%E6%B3%BD%E6%B0%91*")
         || shExpMatch(url, "*Jin Dun Gong Cheng*")
         || shExpMatch(url, "*zh.wikipedia.org*%E9%87%91%E7%9B%BE%E5%B7%A5%E7%A8%8B*")
         || shExpMatch(url, "*Jin Dun Gong Cheng ?*")
         || shExpMatch(url, "*zh.wikipedia.org*%BD%F0%B6%DC%B9%A4%B3%CC*")
         || shExpMatch(url, "*Lin Guo Xiong*")
         || shExpMatch(url, "*zh.wikipedia.org*%E6%A2%81%E5%9C%8B%E9%9B%84*")
         || shExpMatch(url, "*Liu Si Shi Jian*")
         || shExpMatch(url, "*zh.wikipedia.org*%E5%85%AD%E5%9B%9B%E4%BA%8B%E4%BB%B6*")
         || shExpMatch(url, "*Po Wang*")
         || shExpMatch(url, "*zh.wikipedia.org*%E7%A0%B4%E7%BD%91*")
         || shExpMatch(url, "*Si Wu Xing Dong*")
         || shExpMatch(url, "*zh.wikipedia.org*%E5%9B%9B%E4%BA%94%E8%A1%8C%E5%8B%95*")
         || shExpMatch(url, "*Su Jia Tun Shi Jian*")
         || shExpMatch(url, "*zh.wikipedia.org*%E8%8B%8F%E5%AE%B6%E5%B1%AF%E4%BA%8B%E4%BB%B6*")
         || shExpMatch(url, "*Tian An Men Shi Jian*")
         || shExpMatch(url, "*zh.wikipedia.org*%E5%A4%A9%E5%AE%89%E9%96%80%E4%BA%8B%E4%BB%B6*")
         || shExpMatch(url, "*Tian An Men Zi Fen Shi Jian*")
         || shExpMatch(url, "*zh.wikipedia.org*%E5%A4%A9%E5%AE%89%E9%97%A8%E8%87%AA%E7%84%9A%E4%BA%8B%E4%BB%B6*")
         || shExpMatch(url, "*Wang Wei Lin*")
         || shExpMatch(url, "*zh.wikipedia.org*%E7%8E%8B%E7%BB%B4%E6%9E%97*")
         || shExpMatch(url, "*Wei Jing Sheng*")
         || shExpMatch(url, "*zh.wikipedia.org*%E9%AD%8F%E4%BA%AC%E7%94%9F*")
         || shExpMatch(url, "*Wen Chuan Da Di Zhen*")
         || shExpMatch(url, "*zh.wikipedia.org*%E6%B1%B6%E5%B7%9D%E5%A4%A7%E5%9C%B0%E9%9C%87*")
         || shExpMatch(url, "*Wen Jia Bao*")
         || shExpMatch(url, "*zh.wikipedia.org*%E6%B8%A9%E5%AE%B6%E5%AE%9D*")
         || shExpMatch(url, "*Wo De Fen Dou*")
         || shExpMatch(url, "*zh.wikipedia.org*%E6%88%91%E7%9A%84%E5%A5%8B%E6%96%97*")
         || shExpMatch(url, "*Wu Er Kai Xi*")
         || shExpMatch(url, "*zh.wikipedia.org/wiki/%E5%90%BE%E5%B0%94%E5%BC%80%E5%B8%8C*")
         || shExpMatch(url, "*Wu Guo Jie Ji Zhe*")
         || shExpMatch(url, "*zh.wikipedia.org*%E6%97%A0%E5%9B%BD%E7%95%8C%E8%AE%B0%E8%80%85*")
         || shExpMatch(url, "*Wu Jie Wang Luo*")
         || shExpMatch(url, "*zh.wikipedia.org*%E6%97%A0%E7%95%8C%E7%BD%91%E7%BB%9C*")
         || shExpMatch(url, "*Xi Dan Min Zhu Qiang*")
         || shExpMatch(url, "*zh.wikipedia.org*%E8%A5%BF%E5%8D%95%E6%B0%91%E4%B8%BB%E5%A2%99*")
         || shExpMatch(url, "*Xi Zang*")
         || shExpMatch(url, "*zh.wikipedia.org/wiki/%E8%A5%BF%E8%97%8F*")
         || shExpMatch(url, "*Xi Zang Liu Wang Zheng Fu*")
         || shExpMatch(url, "*zh.wikipedia.org*%E8%A5%BF%E8%97%8F%E6%B5%81%E4%BA%A1%E6%94%BF%E5%BA%9C*")
         || shExpMatch(url, "*Zhao Zi Yang -- Traditional Chinese*")
         || shExpMatch(url, "*zh.wikipedia.org*%E8%B6%99%E7%B4%AB%E9%99%BD*")
         || shExpMatch(url, "*Zhong Guo Da Lu Feng Suo Wei JI Mei Ti Shi Jian*")
         || shExpMatch(url, "*zh.wikipedia.org*%E4%B8%AD%E5%9B%BD%E5%A4%A7%E9%99%86%E5%B0%81%E9%94%81%E7%BB%B4%E5%9F%BA%E5%AA%92%E4%BD%93%E4%BA%8B%E4%BB%B6*")
         || shExpMatch(url, "*Zhong Guo Da Lu Wang Luo Feng Suo*")
         || shExpMatch(url, "*zh.wikipedia.org*%E4%B8%AD%E5%9C%8B%E5%A4%A7%E9%99%B8%E7%B6%B2%E8%B7%AF%E5%B0%81%E9%8E%96*")
         || shExpMatch(url, "*Zhong Guo Gong Chan Dang(Zheng Zhi Yun Dong(Lie Biao))/(Zhong Yang Jun Shi Wei Yuan Hui)...*")
         || shExpMatch(url, "*zh.wikipedia.org*%E4%B8%AD%E5%9B%BD%E5%85%B1%E4%BA%A7%E5%85%9A*")
         || shExpMatch(url, "*Zhong Guo Gong Chan Dang -- Traditional Chinese*")
         || shExpMatch(url, "*zh.wikipedia.org*%E4%B8%AD%E5%9C%8B%E5%85%B1%E7%94%A2%E9%BB*")
         || shExpMatch(url, "*Zhong Guo Min Zhu Yun Dong*")
         || shExpMatch(url, "*zh.wikipedia.org*%E4%B8%AD%E5%9B%BD%E6%B0%91%E4%B8%BB%E8%BF%90%E5%8A%A8*")
         || shExpMatch(url, "*Zhong (Hua Ren Min Gong He) Guo Ren Quan*")
         || shExpMatch(url, "*zh.wikipedia.org*%E4%B8%AD*%E5%9B%BD%E4%BA%BA%E6%9D%83*")
         || shExpMatch(url, "*Zhong Guo Wang Luo Ruan Jian Guo Lv Guan Jian Zi Lie Biao*")
         || shExpMatch(url, "*zh.wikipedia.org*%E4%B8%AD%E5%9B%BD%E7%BD%91%E7%BB%9C%E8%BD%AF%E4%BB%B6%E8%BF%87%E6%BB%A4%E5%85%B3%E9%94%AE%E5%AD%97%E5%88%97%E8%A1%A8*")
         || shExpMatch(url, "*Zhong Guo Wang Luo Shen Cha*")
         || shExpMatch(url, "*zh.wikipedia.org*%E4%B8%AD%E5%9B%BD%E7%BD%91%E7%BB%9C%E5%AE%A1%E6%9F%A5*")
         || shExpMatch(url, "*Zhong Hua Ren Min Gong He Guo Wang Luo Shen Cha*")
         || shExpMatch(url, "*zh.wikipedia.org*%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E7%BD%91%E7%BB%9C%E5%AE%A1%E6%9F%A5*")
         || shExpMatch(url, "*Zi You Men*")
         || shExpMatch(url, "*zh.wikipedia.org*%E8%87%AA%E7%94%B1%E9%97%A8*")
         || shExpMatch(url, "*Zi You Ya Zhou*")
         || shExpMatch(url, "*zh.wikipedia.org*%E8%87%AA%E7%94%B1%E4%BA%9A%E6%B4%B2*")
         || shExpMatch(url, "http://willhains.com*")
         || shExpMatch(url, "*tibet.woeser.com*")
         || shExpMatch(url, "*blog.flickr.com*")
         || shExpMatch(url, "*blog.flickr.net*")
         || shExpMatch(url, "*blog.symbian.org*")
         || shExpMatch(url, "*.wordpress.com*")
         || shExpMatch(url, "http://s.stats.wordpress.com/*")
         || shExpMatch(url, "http://s1.wordpress.com/*")
         || shExpMatch(url, "http://s2.wordpress.com/*")
         || shExpMatch(url, "http://www.wordpress.com*")
         || shExpMatch(url, "*worldjournal.com/wj-ch-news.php*")
         || shExpMatch(url, "*wowwiki.com*")
         || shExpMatch(url, "*wretch.cc*")
         || shExpMatch(url, "*chinese.wsj.com*")
         || shExpMatch(url, "*wuerkaixi.com*")
         || shExpMatch(url, "*.wujie.net*")
         || shExpMatch(url, "*.xanga.com*")
         || shExpMatch(url, "*xinsheng.net*")
         || shExpMatch(url, "http://www.xinhuanet.org/*")
         || shExpMatch(url, "*blog.xuite.net*")
         || shExpMatch(url, "*.xys.org*")
         || shExpMatch(url, "*hk.yahoo.com*")
         || shExpMatch(url, "*hk.messages.yahoo.com*")
         || shExpMatch(url, "*hk.news.yahoo.com*")
         || shExpMatch(url, "*hk.search.yahoo.com*")
         || shExpMatch(url, "*tw.yahoo.com*")
         || shExpMatch(url, "*tw.myblog.yahoo.com*")
         || shExpMatch(url, "*upcoming.yahoo.com*")
         || shExpMatch(url, "http://blog.yam.com/*")
         || shExpMatch(url, "*n.yam.com*")
         || shExpMatch(url, "*news.yam.com*")
         || shExpMatch(url, "*forum.yorkbbs.ca*")
         || shExpMatch(url, "http://www.youpai.org/*")
         || shExpMatch(url, "http://www.your-freedom.net/*")
         || shExpMatch(url, "*https://www.your-freedom.net/*")
         || shExpMatch(url, "*youthbao.com*")
         || shExpMatch(url, "*blog.youthwant.com.tw*")
         || shExpMatch(url, "*topic.youthwant.com.tw*")
         || shExpMatch(url, "*youtube.com*")
         || shExpMatch(url, "*hk.youtube.com*")
         || shExpMatch(url, "*tw.youtube.com*")
         || shExpMatch(url, "*youtube.com/get_video*")
         || shExpMatch(url, "*Youtube CDN*")
         || shExpMatch(url, "*ytimg.com*")
         || shExpMatch(url, "*ytht.net/*")
         || shExpMatch(url, "http://luntan.zaobao.com/*")
         || shExpMatch(url, "*www.zaurus.org.uk*")
         || shExpMatch(url, "*.zengjinyan.org*")
         || shExpMatch(url, "*yezimary.spaces.live.com*")
         || shExpMatch(url, "*zengjinyan.spaces.live.com*")
         || shExpMatch(url, "*zhongguotese.net*")
         || shExpMatch(url, "*zuola.com*")
         || shExpMatch(url, "*search?q=cache*")
         || shExpMatch(url, "*search%3Fq%3Dcache*")
         || shExpMatch(url, "*search?q=safeweb*")
         || shExpMatch(url, "http://*falun*")
         || shExpMatch(url, "http://*freegate*")
         || shExpMatch(url, "http://*ultrareach*")
         || shExpMatch(url, "http://*ultrasurf*")
         || shExpMatch(url, "*IP of Hua Yuan Wang*")
         || shExpMatch(url, "*72.52.81.22*")
         || shExpMatch(url, "*dong tai wang*")
         || shExpMatch(url, "http://*%E5%8A%A8%E6%80%81%E7%BD%91*")
         || shExpMatch(url, "*fa lun da fa*")
         || shExpMatch(url, "http://*%E6%B3%95%E8%BD%AE%E5%A4%A7%E6%B3%95*")
         || shExpMatch(url, "*Fa Lun Gong: Traditional Chinese*")
         || shExpMatch(url, "http://*%E6%B3%95%E8%BC%AA%E5%8A%9F*")
         || shExpMatch(url, "*Fa Lun Gong: Simplified Chinese*")
         || shExpMatch(url, "http://*%E6%B3%95%E8%BD%AE%E5%8A%9F*")
         || shExpMatch(url, "*Jiang Liu Mang*")
         || shExpMatch(url, "http://*search*%E6%B1%9F%E6%B5%81%E6%B0%93*")
         || shExpMatch(url, "*Liu Si*")
         || shExpMatch(url, "http://*%E5%85%AD%E5%9B%9B*")
         || shExpMatch(url, "*Liu Xiao Bo*")
         || shExpMatch(url, "http://*%E5%88%98%E6%99%93%E6%B3%A2*")
         || shExpMatch(url, "*Mei Guo Zhi Yin*")
         || shExpMatch(url, "http://*%E7%BE%8E%E5%9B%BD%E4%B9%8B%E9%9F%B3*")
         || shExpMatch(url, "*Min Jin Dang*")
         || shExpMatch(url, "http://*%E6%B0%91%E8%BF%9B%E5%85%9A*")
         || shExpMatch(url, "*(Nong) Min Yun (Dong Hui)*")
         || shExpMatch(url, "http://*%E6%B0%91%E8%BF%90*")
         || shExpMatch(url, "*Qun Ti Mie Jue*")
         || shExpMatch(url, "http://*search*%E7%BE%A4%E4%BD%93%E7%81%AD%E7%BB%9D*")
         || shExpMatch(url, "*Tian An Men*")
         || shExpMatch(url, "*google.com*search*q*%E5%A4%A9%E5%AE%89%E9%97%A8*")
         || shExpMatch(url, "*Wang Dan*")
         || shExpMatch(url, "http://*%E7%8E%8B%E4%B8%B9*")
         || shExpMatch(url, "*Xie E*")
         || shExpMatch(url, "http://*search*%E9%82%AA%E6%81%B6*")
         || shExpMatch(url, "*Zhao Zi Yang*")
         || shExpMatch(url, "http://*%E8%B5%B5%E7%B4%AB%E9%98%B3*")
         || shExpMatch(url, "*icanhascheezburger.com*")
         || shExpMatch(url, "*tinypaste.com*")
         || shExpMatch(url, "*plurktemplates.com*")
         || shExpMatch(url, "*gigaom.com*")
         || shExpMatch(url, "*sshgfw.com*")
         || shExpMatch(url, "*tvunetworks.com*")
         || shExpMatch(url, "*miroguide.com*")
         || shExpMatch(url, "*throughnightsfire.com*")
         || shExpMatch(url, "*imagesshack.us*")
         || shExpMatch(url, "*multiply.com*")
         || shExpMatch(url, "*free-culture.cc*")
         || shExpMatch(url, "http://dlstatusbar.proboards43.com/*")
         || shExpMatch(url, "http://maomy.motime.com/*")
         || shExpMatch(url, "http://ch.shvoong.com/*")
         || shExpMatch(url, "http://www.leninlee.cn/*")
         || shExpMatch(url, "*www.rfi.fr*")
         || shExpMatch(url, "http://www.yzzk.com/*")
         || shExpMatch(url, "http://www.weekmag.info/*")
         || shExpMatch(url, "*bendiken.net*")
         || shExpMatch(url, "*.ecstart.com/*")
         || shExpMatch(url, "http://bsiegel.ath.cx/*")
         || shExpMatch(url, "http://www.tycool.com/*")
         || shExpMatch(url, "*www.msguancha.com*")
         || shExpMatch(url, "http://www.meetup.com/*")
         || shExpMatch(url, "http://www.multiply.com/*")
         || shExpMatch(url, "http://truveo.com/*")
         || shExpMatch(url, "http://funp.com/*")
         || shExpMatch(url, "http://www.oxfam.org.hk/*")
         || shExpMatch(url, "http://www.salvation.org.hk/*")
         || shExpMatch(url, "http://www.tacem.org/*")
         || shExpMatch(url, "*.pixnet.net/*")
         || shExpMatch(url, "http://mysinablog.com/*")
         || shExpMatch(url, "http://www.kwongwah.com.my/*")
         || shExpMatch(url, "http://www.dailymotion.com/*")
         || shExpMatch(url, "*mitbbs.com*")
         || shExpMatch(url, "*gardennetworks.com*")
         || shExpMatch(url, "*dongtaiwang.com*")
         || shExpMatch(url, "*bolin.netfirms.com*")
         || shExpMatch(url, "http://www.rfa.org/*")
         || shExpMatch(url, "*comefromchina.com*")
         || shExpMatch(url, "*gopetition.com*")
         || shExpMatch(url, "*dwnews.com*")
         || shExpMatch(url, "*fireofliberty.org*")
         || shExpMatch(url, "http://www.techreviewchina.com*")
         || shExpMatch(url, "http://www.demonoid.com/*")
         || shExpMatch(url, "http://www.worldbbs.info/*")
         || shExpMatch(url, "*chinesepen.org*")
         || shExpMatch(url, "*blog.iphone-dev.org*")
         || shExpMatch(url, "*avatron.com*")
         || shExpMatch(url, "*.catb.org*")
         || shExpMatch(url, "*zh.wikipedia.org*wiki*GFW*")
         || shExpMatch(url, "*.islam.org.hk*")
         || shExpMatch(url, "*thumbnails.truveo.com*")
         || shExpMatch(url, "*video.aol.com*")
         || shExpMatch(url, "*dailymotion.com*cn*")
         || shExpMatch(url, "*.cpj.org*")
         || shExpMatch(url, "*hkcccl.org.hk*")
         || shExpMatch(url, "*catholic.org.hk*")
         || shExpMatch(url, "*.committeetoprotectbloggers.org*")
         || shExpMatch(url, "*.truveo.com/*")
         || shExpMatch(url, "*.hrw.org*")
         || shExpMatch(url, "*.asianews.it*")
         || shExpMatch(url, "http://www.catholic.org.tw/*")
         || shExpMatch(url, "*.evanlife.org.hk*")
         || shExpMatch(url, "*.hkjp.org*")
         || shExpMatch(url, "*hkjp.easyweb.hk*")
         || shExpMatch(url, "*.roodo.com*")
         || shExpMatch(url, "*hk.geocities.com*")
         || shExpMatch(url, "*.tistory.com*")
         || shExpMatch(url, "*.vox.com/*")
         || shExpMatch(url, "*.competitionforce.hk*")
         || shExpMatch(url, "*.chingcheong.com*")
         || shExpMatch(url, "*.longhair.hk*")
         || shExpMatch(url, "*.exblog.jp*")
         || shExpMatch(url, "*etaiwannews.com*")
         || shExpMatch(url, "*imageshack.us*")
         || shExpMatch(url, "*freemorenews.com*")
         || shExpMatch(url, "*my.spill.com*")
         )
        return "SOCKS 172.16.174.94:7071;SOCKS5 172.16.174.94:7071";
     else 
    return "DIRECT";
}
