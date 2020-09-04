export const xml1Url = 'http://www.ruanyifeng.com/blog/atom.xml'
export const xml2Url = 'http://www.people.com.cn/rss/politics.xml'

export const xml1 = `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
    <title>阮一峰的网络日志</title>
    <link rel="alternate" type="text/html" href="http://www.ruanyifeng.com/blog/" />
    <link rel="self" type="application/atom+xml" href="http://www.ruanyifeng.com/blog/atom.xml" />
    <id>tag:www.ruanyifeng.com,2010-04-11:/blog//1</id>
    <updated>2020-08-24T17:13:49Z</updated>
    <subtitle>Ruan YiFeng&apos;s Blog</subtitle>
    <generator uri="http://www.sixapart.com/movabletype/">Movable Type 5.2.2</generator>

<entry>
    <title>科技爱好者周刊（第 121 期）：为什么人类没有越来越闲？</title>
    <link rel="alternate" type="text/html" href="http://www.ruanyifeng.com/blog/2020/08/weekly-issue-121.html" />
    <id>tag:www.ruanyifeng.com,2020:/blog//1.2201</id>

    <published>2020-08-21T00:34:10Z</published>
    <updated>2020-08-24T17:13:49Z</updated>

    <summary>这里记录每周值得分享的科技内容，周五发布。...</summary>
    <author>
        <name>阮一峰</name>
        <uri>http://www.ruanyifeng.com</uri>
    </author>
    
        <category term="Weekly" scheme="http://www.sixapart.com/ns/types#category" />
    
    
    <content type="html" xml:lang="en" xml:base="http://www.ruanyifeng.com/blog/">
        <![CDATA[<p>这里记录每周值得分享的科技内容，周五发布。</p>
]]>
        <![CDATA[<p>本杂志开源（GitHub: <a href="https://github.com/ruanyf/weekly">ruanyf/weekly</a>），欢迎提交 issue，投稿或推荐科技内容。</p>

<p>周刊讨论区的帖子<a href="https://github.com/ruanyf/weekly/issues/1315">《谁在招人？》</a>，提供大量就业信息，欢迎访问或发布工作/实习岗位。</p>

<h2>封面图</h2>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020081305.jpg" alt="" title="" /></p>

<p>8月12日是"世界大象日"，西双版纳野象谷景区为大象准备了美食。（<a href="http://big5.xinhuanet.com/gate/big5/www.xinhuanet.com/photo/2020-08/12/c_1126359736.htm">via</a>）</p>

<h2>本周话题：为什么人类没有越来越闲？</h2>

<p>很多人相信，随着科技的发展，未来的人们会有很多空闲时间，因为机器会干活。</p>

<p>这种观点是不对的。即使有高度智能的机器，未来的工人也不会空闲，可能还会更忙，至少资本主义制度是如此。</p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020081908.jpg" alt="" title="" /></p>

<p>将近100年前的1930年，经济学家凯恩斯<a href="https://www.newstatesman.com/2020/08/why-bertrand-russells-argument-idleness-more-relevant-ever">预言</a>，在一个世纪之内，生产力的提高将使发达国家的居民每周工作15个小时，还能保持体面的生活水平。</p>

<p>他的预测完全错误。今天，没有一个国家实现每周工作15小时，连接近的都没有，反而出现了996这样的工作制。我相信，再过100年，也不会有每周15小时工作制。</p>

<p>让我们想象一个假设的情景。一家工厂以前每天生产100个产品，随着技术进步，现在每天可以生产200个。如果能够全卖出去，那么工人的劳动时间并不会减少。</p>

<p>如果市场还是原来那样，只能卖出去100个，那么工厂就有50%的产能空出来了。这时，管理层有两个选择。</p>

<p>选择一：工人只工作半天，保持工资不变。</p>

<p>选择二：保留一半的工人，解雇其余的人。</p>

<p>现实中，一定是第二种选择，因为这样有利于增加利润。所以，  <strong>技术进步带来的收益，不会变为工人的空闲时间，而是变为一些工人更忙碌，另一些工人失业</strong> ，真正的赢家就是资本家，增加的利润都归他们。</p>

<p>这就是当今世界正在发生的事情，空闲的工人最终会被解雇。IT 行业最明显，因为技术进步对这个行业影响最大。</p>

<p>资本主义追求利润最大化，一旦销售不能同步扩张，技术进步就必然导致裁员，那些失业的人如果不能及时找到工作，就会越来越穷。那些还在工作岗位的人则由于负担更多的生产力，而变得越来越忙。</p>

<h2>Webpack 免费教程</h2>

<p>现在的前端开发，打包工具都会选择 Webpack，它将不同的模块合并成一个脚本。</p>

<p>用过的人都知道，Webpack 是一个没有易用性的软件，新人上手和理解很不容易。而且，它还在不断发新版本，添加新功能。</p>

<p>Webpack 5.0 版已经开发了近两年，现在发到了beta 27，离正式发布依然很遥远。为什么5.0这么难产？原因就是它引入了两个新概念"微前端"（micro front-end）和"模块联合"（module federation），<a href="https://webpack.js.org/concepts/module-federation/">官方文档</a>写得非常抽象。它们出来以后，学习者的难度恐怕又会上升了。</p>

<p>今天谈到 Webpack 的原因是，本周的课程资料是来自开课吧的《Webpack 教程》。刚刚出来的新教程，不收费，讲解构建和打包原理，这是理解Webpack 的基础，并教大家实现一个简易的 Webpack。</p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020082101.jpg" alt="" title="" /></p>

<p>这个教程吸取其他教程的优点，尽量简单地讲解原理，感兴趣的同学可以听听看。</p>

<p>点击<a href="https://wx.kaikeba.com/vip_course/oruqbzt28r/74wti6v05e?tenant=wx5046bc7413796142">这里</a>或者扫描下面的二维码，就可以领取。</p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020082003.jpg" alt="" title="" /></p>

<h2>资讯</h2>

<p>1、<a href="https://phys.org/news/2020-08-bird-reptile-human.html">鸟类的眼泪与人类相同</a></p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020081307.jpg" alt="" title="" /></p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020081308.jpg" alt="" title="" /></p>

<p>巴西科学家为了研究眼泪的进化，检查了7种鸟类和爬行动物的眼泪，包括鹦鹉、老鹰、猫头鹰、乌龟、鳄鱼等。上图是从老鹰和鳄鱼收集眼泪。</p>

<p>结果发现，鸟类和爬行类动物的眼泪，与人类的很相似，均包含相似数量的电解质（钠和氯化物），不过猫头鹰和海龟的眼泪包含较高的尿素和蛋白质。这说明，眼泪基本上没有进化。</p>

<p>2、<a href="https://www.tomshardware.com/news/raspberry-pi-zero-replaces-broken-laptop-optical-drive">装入树莓派的笔记本电脑</a></p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020080801.jpg" alt="" title="" /></p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020080802.jpg" alt="" title="" /></p>

<p>老式笔记本电脑往往带有光驱，现在已经用处不大了。一位电脑爱好者就把光驱拆了下来，改装上了树莓派（Zerow 型号），使用的托盘也是自己 3D 打印的。</p>

<p>这就相当于这个笔记本里面包含两台电脑。树莓派从笔记本电脑获取电源，笔记本一开机，树莓派就会运行。笔记本电脑的屏幕，光标和键盘可用于控制树莓派。要访问树莓派，可以使用 VNC 协议远程进入系统。</p>

<p>3、<a href="https://oled.com/oleds/transparent-oleds-toleds/">透明 OLED 屏幕</a></p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020081403.jpg" alt="" title="" /></p>

<p>小米本周发布了透明电视机（上图），没有开机时就是一块透明的玻璃，开机以后变成显示屏。它的原理很简单，就是两片玻璃之间夹了一块 OLED 面板，发光二极管采用已经成熟的透明电极技术，就能实现透明屏幕，但透明度肯定不及玻璃。</p>

<p>这种技术最大的应用，就是可以装在车窗上（下图）。北京地铁的车窗通过投影，也有透明显示屏的效果，非常炫酷，请看<a href="https://v.qq.com/x/page/r3135dmqctc.html">下面视频</a>。</p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020081404.jpg" alt="" title="" /></p>

<iframe frameborder="0" src="https://v.qq.com/txp/iframe/player.html?vid=r3135dmqctc" allowFullScreen="true" width="600px" height="400px"></iframe>

<p>4、<a href="https://arstechnica.com/science/2020/08/how-to-turn-regular-bricks-into-electricity-storying-supercapacitors/">红砖电池</a></p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020081501.jpg" alt="" title="" /></p>

<p>美国华盛顿大学的研究团队，尝试了一项很有创意的发明。他们根据电容储能的原理，将普通红砖变成了电池。这是因为红砖含有铁元素，而且内部是多孔的，有巨大的表面积，在内部小孔里面加上特殊涂层以后，涂层与铁元素之间相互作用，就能像超级电容那样储能。</p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020081502.jpg" alt="" title="" /></p>

<p>一块砖头可以在15秒内充满电，然后供 LED 二极管亮大约11分钟。不过，它的电量偏小，每平方米的墙壁大约可以储能1.6瓦时，这意味着三米乘六米的一堵墙壁可以储能约20瓦时，还不具有实用价值。</p>

<p>5、<a href="https://bnonews.com/index.php/2020/08/temperature-at-californias-death-valley-reaches-130f/">地表最高温度</a></p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020081801.jpg" alt="" title="" /></p>

<p>8月16日，美国加利福尼亚死亡谷的温度达到54.4摄氏度，是地表有记录以来的第三位最高温度。</p>

<p>100多年前的1913年7月10日，也是在这个地方，记录到地表最高温56.7°C，迄今没有被打破。为什么这个地方温度会成为全球之最，真是很奇怪的事情。死亡谷的纬度是北纬36.5度，跟山东省济南市在同一个纬度，也不算内陆地区，离海边只有200多公里。</p>

<p>6、<strong>一句话消息</strong></p>

<blockquote>
  <ul>
<li><a href="https://techcrunch.com/2020/08/07/goodbye-paramount-consent-decrees/">美国法院</a>废除一项已经实施70年的禁令，允许电影制片公司拥有电影院。原因是 Netflix 等流媒体公司的兴起，使得该规定毫无意义。</li>
</ul>
</blockquote>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020080805.jpg" alt="" title="" /></p>

<blockquote>
  <ul>
<li><a href="https://www.iphoneincanada.ca/news/apple-legal-action-pear-logo/">苹果公司</a>对一个家庭购物 App 提起诉讼，要求对方更改 Logo，理由是跟苹果公司的 Logo 太接近。但是根据下图，完全不像啊。</li>
</ul>
</blockquote>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020080901.jpg" alt="" title="" /></p>

<blockquote>
  <ul>
<li><a href="https://www.atlasobscura.com/articles/dark-sky-photographs">国际暗空协会</a>每年会举办摄影比赛，要求全球爱好者提交照片，展示银河系的美妙，或者人类光源对天空的污染。今年的获奖作品中，有一张中国长城的照片，显示了光污染的严重。</li>
</ul>
</blockquote>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020081104.jpg" alt="" title="" /></p>

<blockquote>
  <ul>
<li><a href="https://www.instagram.com/p/CD8MbPuhpbn/?igshid=y7htfs2hn65">上海环境博览会</a>上，厂商展出了无人清洁车，该车会自动捡起地上的水瓶、纸张和烟头。</li>
</ul>
</blockquote>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020081803.jpg" alt="" title="" /></p>

<blockquote>
  <ul>
<li><a href="https://phys.org/news/2020-08-fastest-star.html">天文学家</a>发现宇宙中最快的恒星，运动速度达到光速的8%。<br><br></li>
<li><a href="https://www.theverge.com/2020/8/17/21372487/microsoft-internet-explorer-11-support-end-365-legacy-edge">微软公司</a>宣布，明年将终止对 IE 11 和旧版 Edge 浏览器的支持。</li>
</ul>
</blockquote>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020081903.jpg" alt="" title="" /></p>

<h2>文章</h2>

<p>1、<a href="https://generative-art-with-css.commons.host/">CSS 生成艺术</a>（英文）</p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020081203.jpg" alt="" title="" /></p>

<p>作者介绍如何用 CSS 生成各种形状的图形。</p>

<p>2、<a href="http://www.sheshbabu.com/posts/rust-wasm-yew-single-page-application/">如何使用 Rust 开发单页应用 SPA</a>（英文）</p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020081204.jpg" alt="" title="" /></p>

<p>单页应用（SPA）都是使用 JavaScript 开发，但是有了 WebAssembly 以后，其他语言也可以编译成 JavaScript。本文就完全使用 Rust 语言开发上图的 SPA，后端开发者现在也可以写前端了。</p>

<p>3、<a href="https://itsfoss.com/manjaro-vs-arch-linux/">Manjaro 与 Arch Linux 的区别</a>（英文）</p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020081401.jpg" alt="" title="" /></p>

<p>Manjaro 与 Arch 都是流行的 Linux 发行版，Manjaro 基于 Arch，但是有自己显著的特点。</p>

<p>4、<a href="https://www.growthclub.online/post/research-says-solo-founders-perform-better-here-is-why">单个创始人的表现更好</a>（英文）</p>

<p>常规的建议是，你必须先组建团队，然后才能创业。但是，统计显示，单个创始人的公司更可能盈利，本文分析原因。</p>

<p>5、<a href="https://aatishb.com/entropy/">熵的羊群解释</a>（英文）</p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020081504.jpg" alt="" title="" /></p>

<p>本文用羊群作为例子，通过图片较为通俗地解释了，物理学的熵（entropy）是概率导致的。</p>

<p>6、<a href="https://blog.kevinjahns.de/are-crdts-suitable-for-shared-editing/">CRDT 算法是否适合多人实时编辑？</a>（英文）</p>

<p>CRDT 算法用于分布式服务实现数据同步，比如同一篇文档的多人实时编辑。<a href="https://github.com/yjs/yjs">Yjs</a> 是 CRDT 的一个实现，本文是它的作者对这个算法的解释，内容有一定深度。</p>

<p>7、<a href="https://www.warambil.com/typescript-why-is-so-important">TypeScript 简明介绍</a>（英文）</p>

<p>一篇针对初学者的 TypeScript 介绍，写得相当简洁。</p>

<p>8、<a href="https://outflank.nl/blog/2018/08/14/html-smuggling-explained/">HTML smuggling 解释</a>（英文）</p>

<p>很多人不知道，JavaScript 可以脚本生成 exe 文件，让用户下载。本文介绍如何在网页里面嵌入一个恶意的可执行文件。</p>

<p>9、<a href="https://daily.zhihu.com/story/9726870">广告短信的退订内幕</a>（中文）</p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020081909.jpg" alt="" title="" /></p>

<p>很多促销广告短信都说回复 T 退订，但是回复了 T 之后会发生什么？（<a href="https://github.com/ruanyf/weekly/issues/1378">@9527q</a> 投稿）</p>

<p>10、<a href="https://juemuren4449.com/archives/wechat-minishop">微信小商店初体验</a>（中文）</p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020081910.jpg" alt="" title="" /></p>

<p>7 月 14 日，微信开放了微信小商店的内测，这是官方的开店功能，跟微店等第三方平台是不一样的。这篇文章介绍了申请流程以及使用体验。目前，微信小商店已经允许个人申请了，可用于个人开店。（<a href="https://github.com/ruanyf/weekly/issues/1380">@juemuren4449</a> 投稿）</p>

<h2>工具</h2>

<p>1、<a href="https://www.qrpicture.com/">QRpicture</a></p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020081503.jpg" alt="" title="" /></p>

<p>一个在线工具，把图片变成可以扫描的二维码。</p>

<p>2、<a href="https://isoflow.io/">isoflow</a></p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020081601.jpg" alt="" title="" /></p>

<p>一个绘制示意图的在线工具。</p>

<p>3、<a href="https://screenplaysubs.com/">ScreenplaySubs</a></p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020081702.jpg" alt="" title="" /></p>

<p>浏览器插件，播放 Netflix 视频的时候，同步显示剧本内容。</p>

<p>4、<a href="https://quarantines.site/">Quarantines Sites</a></p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020081704.jpg" alt="" title="" /></p>

<p>一个在线工具，可以通过它来访问其他网站，避免被追踪。</p>

<p>5、<a href="https://umami.is/">umami</a></p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020081901.jpg" alt="" title="" /></p>

<p>一个开源的网站访问统计服务。</p>

<p>6、<a href="https://github.com/airbnb/ts-migrate">ts-migrate</a></p>

<p>Airbnb 公司新的开源项目，可以将 JavaScript 代码转成 TypeScript 代码。</p>

<p>7、<a href="https://github.com/js-cool/js.cool">js.cool</a></p>

<p>为开源项目提供免费的<code>js.cool</code>的子域名，类似<code>js.org</code>，支持 CNAME 绑定。（<a href="https://github.com/ruanyf/weekly/issues/1379">@willin</a> 投稿）</p>

<p>8、<a href="https://ba.net/screen-share-party">Screen Share Party</a></p>

<p>该网站通过 WebRTC 协议把你的桌面分享给其他人。它生成一个 URL，其他人访问这个 URL，就能看到你的桌面。</p>

<p>9、<a href="https://github.com/tanrax/maza-ad-blocking">maza</a></p>

<p>一个本地的广告拦截器，通过封锁 DNS 达到拦截广告的目的。它的特点就是非常简单，就是一个 Bash 脚本，可以作为学习脚本编程的范例。</p>

<h2>资源</h2>

<p>1、<a href="http://faculty.marshall.usc.edu/gareth-james/ISL/">统计学习导论</a>（An Introduction to Statistical Learning）</p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020080508.jpg" alt="" title="" /></p>

<p>免费英文电子书，可以作为非数学专业学生的统计学教材，侧重机器学习的统计基础，提供 R 语言的例子。</p>

<p>2、<a href="https://rms.sexy/">rms.sexy</a></p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020081001.jpg" alt="" title="" /></p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020081002.jpg" alt="" title="" /></p>

<p>该网站专门收集理查德·斯托曼使用笔记本电脑的照片。</p>

<p>3、<a href="https://1940s.nyc/map/">1940年纽约历史地图</a></p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020081402.jpg" alt="" title="" /></p>

<p>这个网站提供1940年代的纽约在线地图，并且还可以查看各个地点的历史照片。</p>

<p>4、<a href="https://voshart.com/ROMAN-EMPEROR-PROJECT">AI 还原古罗马皇帝</a></p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020081602.jpg" alt="" title="" /></p>

<p>这个项目使用 AI 模型，将古罗马皇帝的塑像还原成高清晰度人像照片。</p>

<p>5、<a href="https://www.susanjfowler.com/blog/2016/8/13/so-you-want-to-learn-physics">物理学书单</a></p>

<p>作者列了一个英文书单，对于想自学物理学、达到本科以及研究生水平的读者，应该阅读哪些教材。</p>

<p>6、<a href="https://pearmini.gitee.io/ncovis-2020/#/">COVID-19 舆论新闻可视化</a></p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020081911.jpg" alt="" title="" /></p>

<p>山东大学 VisLab 的一个可视化项目，分析疫情对舆论和新闻的影响。（<a href="https://github.com/ruanyf/weekly/issues/1382">@pearmini</a> 投稿）</p>

<h2>图片</h2>

<p>1、<a href="https://www.logodesignlove.com/next-logo-paul-rand">NeXT 徽标</a></p>

<p>1986年，乔布斯向著名的平面设计师保罗·兰德（Paul Rand）支付了10万美元，要求为自己的 NeXT 计算机公司设计徽标。</p>

<p>下面就是最后的成品。1986年的10万美元，要比今天的100万美元更值钱。</p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020081606.jpg" alt="" title="" /></p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020081605.jpg" alt="" title="" /></p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020081604.jpg" alt="" title="" /></p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020081603.jpg" alt="" title="" /></p>

<h2>文摘</h2>

<p>1、<a href="https://en.wikipedia.org/wiki/Mpemba_effect">姆潘巴现象</a></p>

<p>1963年，坦桑尼亚的一个高中上烹饪课，学生们做冰淇淋。</p>

<p>一个叫做姆潘巴（Erasto Mpemba）的学生，发现了一个奇怪的现象。两个装有相同体积水的容器，一个是35°C，另一个是100°C，同时放进冰箱，竟然是100°C的水首先开始结冰。也就是说，温度高的水会更快结冰，这是为什么？</p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020081507.jpg" alt="" title="" /></p>

<p>物理老师也不知道这是怎么回事，就把这个结果发表出来。这引起物理学界的争论，科学家也无法解释，就把它称为"姆潘巴现象"。</p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020081506.jpg" alt="" title="" /></p>

<p>2012年，英国皇家化学学会举行了一场竞赛，征集论文，对姆潘巴现象进行解释。共有22,000人参加，获胜者提出了两种解释。</p>

<p>（1）过冷（Supercooling）。低温液体会在一定时间内存在过冷现象，低于凝固点仍维持液体。</p>

<p>（2）对流。温度高的液体有更高的对流，有利于散热。</p>

<p>2、<a href="https://medium.com/@karti/why-consulting-is-not-for-me-ffdbe09bb3c1">为什么咨询业不适合我？</a></p>

<p>6个月前，我开了一家 IT 咨询公司。现在，我得出了结论，咨询业不是令人满意的职业，并不适合我。</p>

<p>作为顾问，我只了解客户业务和问题的一小部分，没法接触到全局的战略性工作。我想制造汽车，但是客户只要求我制造方向盘。</p>

<p>客户只把我视为服务提供商，而不是合作伙伴。在工作中，我希望与合作者建立深厚的关系，但实际上只会与许多人建立肤浅的关系。</p>

<p>咨询业会接触到各种各样的业务，需要花费大量时间了解每一个客户的业务场景。随着时间的流逝，我的注意力都被各种琐碎的业务问题分散了，我在工程和管理上的核心技能正在逐渐消失，就像肌肉因使用不当而萎缩一样。</p>

<p>每一个新业务，我都需要一遍遍重复同样的流程，与每个客户从头开始讨论项目目标、付款安排，运行安排、时间节点等等。我开始意识到，我不想重复地完成短期项目，而是希望参与长期项目，随着时间的推移不断加深对项目的理解，并可以在前期的基础上不断开发。</p>

<p>最后，我希望有一种目标感，大家聚在一起，创造一些了不起的东西。咨询业无法提供这种目标感。</p>

<p>我最终决定不干咨询了。</p>

<h2>言论</h2>

<p>1、</p>

<p>Web 和浏览器已经发展到令人恐怖的技术规模。微软完全放弃了，Mozilla 在死亡线上挣扎，Safari 根本无足轻重，只剩下 Google 一个玩家。</p>

<p>我呼吁谷歌立即无限期地中止向 Web 和浏览器添加新 API。浏览器实际上应该开始考虑缩小 API 并削减功能，更关注性能、效率、可靠性和安全性。</p>

<p>-- <a href="https://drewdevault.com/2020/08/13/Web-browsers-need-to-stop.html">《Web 需要停下来》</a></p>

<p>2、</p>

<p>谷歌一直希望降低地址栏的重要性，因为它的目标是推广 AMP 技术，将内容都放在自家的服务器上面。没有了地址栏，用户就看不出来这是谷歌的网站，而不是原始网站。</p>

<p>-- <a href="https://news.ycombinator.com/item?id=24157380">Hacker News 读者</a>，讨论 Chrome 86 浏览器将不再显示完整的网页地址</p>

<p>3、</p>

<p>无知的一阶效应包括做出错误的决定，二阶效应包括不了解决定为何错误。</p>

<p>-- <a href="https://unintendedconsequenc.es/tiktok-ban-openness-trap/">unintended consequences</a></p>

<p>4、</p>

<p>在美国，大家都在谈 TikTok，为什么没有人谈 AirDroid？</p>

<p>它也来自中国，下载量超过1亿，拥有对大量 Android 设备的完全访问权限。与 TikTok 相比，它拥有的数据量更多。</p>

<p>-- <a href="https://news.ycombinator.com/item?id=24173789">Hacker News 读者</a></p>

<p>5、</p>

<p>去年，苹果应用商店的销售额为5190亿美元（包括硬件），而亚马逊网站为3280亿美元。所以，前者才是美国最大的在线零售商。</p>

<p>-- <a href="https://www.forbes.com/sites/danrunkevicius/2020/08/17/apple-not-amazon-is-the-largest-online-retail-force/#43ce5d8764cb">《亚马逊并不是最大的在线零售商》</a>  </p>

<p>6、</p>

<p>只是因为让游戏 Fortnite 在应用商店上架，苹果在过去三年就获得3.6亿美元纯利润（因为可以提成30%的销售额）。</p>

<p>-- <a href="https://www.businessinsider.com/apple-made-360-million-from-fortnite-in-app-purchases-2020-8">《苹果从 Fortnite 获利3.6亿美元》</a> </p>

<h2>回顾</h2>

<p>2019年的本周（第 70 期）：<a href="http://www.ruanyifeng.com/blog/2019/08/weekly-issue-70.html">世界进入负利率时代，这意味什么</a></p>

<p><img src="https://www.wangbase.com/blogimg/asset/201908/bg2019082201.jpg" alt="" title="" /></p>

<p>2018年的本周（第 18 期）：<a href="http://www.ruanyifeng.com/blog/2018/08/weekly-issue-18.html">无人机攻击，难以防范</a></p>

<p><img src="https://www.wangbase.com/blogimg/asset/201808/bg2018081701.jpg" alt="" title="" /></p>

<h2>订阅</h2>

<p>这个周刊每周五发布，同步更新在<a href="http://www.ruanyifeng.com/blog">阮一峰的网络日志</a>和<a href="http://weixin.sogou.com/weixin?query=%E9%98%AE%E4%B8%80%E5%B3%B0%E7%9A%84%E7%BD%91%E7%BB%9C%E6%97%A5%E5%BF%97">微信公众号</a>。</p>

<p>微信搜索"阮一峰的网络日志"或者扫描二维码，即可订阅。</p>

<p><img src="http://www.ruanyifeng.com/blogimg/asset/2018/bg2018042311.jpg" alt="" title="" /></p>

<p>（完）</p>
]]>
        <![CDATA[<div style="color:#556677;line-height:160%;padding:0.3em 0.5em;border:1px solid #d3d3d3;margin:1em;background-color:#AAD2F0;-moz-border-radius: 10px;-webkit-border-radius:10px;border-radius: 10px;"><h3>文档信息</h3>
<ul>
<li>版权声明：自由转载-非商用-非衍生-保持署名（<a href="http://creativecommons.org/licenses/by-nc-nd/3.0/deed.zh">创意共享3.0许可证</a>）</li>
<li>发表日期： <abbr class="published" title="2020-08-21T08:34:10+08:00">2020年8月21日</abbr></li>

</ul></div>]]>        
        <![CDATA[<div style="color:#556677;line-height:160%;padding:0.3em 0.5em;margin:1em;-moz-border-radius: 10px;-webkit-border-radius:10px;border-radius: 10px;"></div>]]>
    </content>
</entry>

<entry>
    <title>Node.js 如何处理 ES6 模块</title>
    <link rel="alternate" type="text/html" href="http://www.ruanyifeng.com/blog/2020/08/how-nodejs-use-es6-module.html" />
    <id>tag:www.ruanyifeng.com,2020:/blog//1.2200</id>

    <published>2020-08-20T08:25:18Z</published>
    <updated>2020-08-22T15:44:52Z</updated>

    <summary>学习 JavaScript 语言，你会发现它有两种格式的模块。...</summary>
    <author>
        <name>阮一峰</name>
        <uri>http://www.ruanyifeng.com</uri>
    </author>
    
        <category term="JavaScript" scheme="http://www.sixapart.com/ns/types#category" />
    
    
    <content type="html" xml:lang="en" xml:base="http://www.ruanyifeng.com/blog/">
        <![CDATA[<p>学习 JavaScript 语言，你会发现它有两种格式的模块。</p>
]]>
        <![CDATA[<p>一种是 ES6 模块，简称 ESM；另一种是 Node.js 专用的 CommonJS 模块，简称 CJS。这两种模块不兼容。</p>

<p>很多人使用 Node.js，只会用<code>require()</code>加载模块，遇到 ES6 模块就不知道该怎么办。本文就来谈谈，ES6 模块在 Node.js 里面怎么使用。</p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020082004.jpg" alt="" title="" /></p>

<h2>一、两种模块的差异</h2>

<p>ES6 模块和 CommonJS 模块有很大的差异。</p>

<p>语法上面，CommonJS 模块使用<code>require()</code>加载和<code>module.exports</code>输出，ES6 模块使用<code>import</code>和<code>export</code>。</p>

<p>用法上面，<code>require()</code>是同步加载，后面的代码必须等待这个命令执行完，才会执行。<code>import</code>命令则是异步加载，或者更准确地说，ES6 模块有一个独立的静态解析阶段，依赖关系的分析是在那个阶段完成的，最底层的模块第一个执行。</p>

<h2>二、Node.js 的区分</h2>

<p>Node.js 要求 ES6 模块采用<code>.mjs</code>后缀文件名。也就是说，只要脚本文件里面使用<code>import</code>或者<code>export</code>命令，那么就必须采用<code>.mjs</code>后缀名。Node.js 遇到<code>.mjs</code>文件，就认为它是 ES6 模块，默认启用严格模式，不必在每个模块文件顶部指定<code>"use strict"</code>。</p>

<p>如果不希望将后缀名改成<code>.mjs</code>，可以在项目的<code>package.json</code>文件中，指定<code>type</code>字段为<code>module</code>。</p>

<blockquote><pre><code class="language-javascript">
{
   "type": "module"
}
</code></pre></blockquote>

<p>一旦设置了以后，该目录里面的 JS 脚本，就被解释用 ES6 模块。</p>

<blockquote><pre><code class="language-bash">
# 解释成 ES6 模块
$ node my-app.js
</code></pre></blockquote>

<p>如果这时还要使用 CommonJS 模块，那么需要将 CommonJS 脚本的后缀名都改成<code>.cjs</code>。如果没有<code>type</code>字段，或者<code>type</code>字段为<code>commonjs</code>，则<code>.js</code>脚本会被解释成 CommonJS 模块。</p>

<p>总结为一句话：<code>.mjs</code>文件总是以 ES6 模块加载，<code>.cjs</code>文件总是以 CommonJS 模块加载，<code>.js</code>文件的加载取决于<code>package.json</code>里面<code>type</code>字段的设置。</p>

<p>注意，ES6 模块与 CommonJS 模块尽量不要混用。<code>require</code>命令不能加载<code>.mjs</code>文件，会报错，只有<code>import</code>命令才可以加载<code>.mjs</code>文件。反过来，<code>.mjs</code>文件里面也不能使用<code>require</code>命令，必须使用<code>import</code>。</p>

<h2>三、CommonJS 模块加载 ES6 模块</h2>

<p>CommonJS 的<code>require()</code>命令不能加载 ES6 模块，会报错，只能使用<code>import()</code>这个方法加载。</p>

<blockquote><pre><code class="language-javascript">
(async () => {
  await import('./my-app.mjs');
})();
</code></pre></blockquote>

<p>上面代码可以在 CommonJS 模块中运行。</p>

<p><code>require()</code>不支持 ES6 模块的一个原因是，它是同步加载，而 ES6 模块内部可以使用顶层<code>await</code>命令，导致无法被同步加载。</p>

<h2>四、ES6 模块加载 CommonJS 模块</h2>

<p>ES6 模块的<code>import</code>命令可以加载 CommonJS 模块，但是只能整体加载，不能只加载单一的输出项。</p>

<blockquote><pre><code class="language-javascript">
// 正确
import packageMain from 'commonjs-package';

// 报错
import { method } from 'commonjs-package';
</code></pre></blockquote>

<p>这是因为 ES6 模块需要支持静态代码分析，而 CommonJS 模块的输出接口是<code>module.exports</code>，是一个对象，无法被静态分析，所以只能整体加载。</p>

<p>加载单一的输出项，可以写成下面这样。</p>

<blockquote><pre><code class="language-javascript">
import packageMain from 'commonjs-package';
const { method } = packageMain;
</code></pre></blockquote>

<h2>五、同时支持两种格式的模块</h2>

<p>一个模块同时要支持 CommonJS 和 ES6 两种格式，也很容易。</p>

<p>如果原始模块是 ES6 格式，那么需要给出一个整体输出接口，比如<code>export default obj</code>，使得 CommonJS 可以用<code>import()</code>进行加载。</p>

<p>如果原始模块是 CommonJS 格式，那么可以加一个包装层。</p>

<blockquote><pre><code class="language-javascript">
import cjsModule from '../index.js';
export const foo = cjsModule.foo; 
</code></pre></blockquote>

<p>上面代码先整体输入 CommonJS 模块，然后再根据需要输出具名接口。</p>

<p>你可以把这个文件的后缀名改为<code>.mjs</code>，或者将它放在一个子目录，再在这个子目录里面放一个单独的<code>package.json</code>文件，指明<code>{ type: "module" }</code>。</p>

<p>另一种做法是在<code>package.json</code>文件的<code>exports</code>字段，指明两种格式模块各自的加载入口。</p>

<blockquote><pre><code class="language-javascript">
"exports"：{ 
    "require": "./index.js"，
    "import": "./esm/wrapper.js" 
}
</code></pre></blockquote>

<p>上面代码指定<code>require()</code>和<code>import</code>，加载该模块会自动切换到不一样的入口文件。</p>

<p>（完）</p>
]]>
        <![CDATA[<div style="color:#556677;line-height:160%;padding:0.3em 0.5em;border:1px solid #d3d3d3;margin:1em;background-color:#AAD2F0;-moz-border-radius: 10px;-webkit-border-radius:10px;border-radius: 10px;"><h3>文档信息</h3>
<ul>
<li>版权声明：自由转载-非商用-非衍生-保持署名（<a href="http://creativecommons.org/licenses/by-nc-nd/3.0/deed.zh">创意共享3.0许可证</a>）</li>
<li>发表日期： <abbr class="published" title="2020-08-20T16:25:18+08:00">2020年8月20日</abbr></li>

</ul></div>]]>        
        <![CDATA[<div style="color:#556677;line-height:160%;padding:0.3em 0.5em;margin:1em;-moz-border-radius: 10px;-webkit-border-radius:10px;border-radius: 10px;"></div>]]>
    </content>
</entry>

<entry>
    <title>科技爱好者周刊（第 120 期）：只有开放才能打败封锁</title>
    <link rel="alternate" type="text/html" href="http://www.ruanyifeng.com/blog/2020/08/weekly-issue-120.html" />
    <id>tag:www.ruanyifeng.com,2020:/blog//1.2199</id>

    <published>2020-08-14T00:35:34Z</published>
    <updated>2020-08-22T09:07:15Z</updated>

    <summary>这里记录每周值得分享的科技内容，周五发布。...</summary>
    <author>
        <name>阮一峰</name>
        <uri>http://www.ruanyifeng.com</uri>
    </author>
    
        <category term="Weekly" scheme="http://www.sixapart.com/ns/types#category" />
    
    
    <content type="html" xml:lang="en" xml:base="http://www.ruanyifeng.com/blog/">
        <![CDATA[<p>这里记录每周值得分享的科技内容，周五发布。</p>
]]>
        <![CDATA[<p>本杂志开源（GitHub: <a href="https://github.com/ruanyf/weekly">ruanyf/weekly</a>），欢迎提交 issue，投稿或推荐科技内容。</p>

<p>周刊讨论区的帖子<a href="https://github.com/ruanyf/weekly/issues/1315">《谁在招人？》</a>，提供大量就业信息，欢迎访问或发布工作/实习岗位。</p>

<h2>封面图</h2>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020080205.jpg" alt="" title="" /></p>

<p>8月5日，伦敦自然历史博物馆重新开馆。工作人员为蛇颈龙化石展品做清洁。（来源：<a href="https://www.instagram.com/p/CDNxThJHMcB/">Instagram</a>）</p>

<h2>本周话题：只有开放才能打败封锁</h2>

<p>美国搞技术封锁，不允许中国企业使用美国技术。今天就来谈谈，应该怎么应对这种局面。</p>

<p>华为最近<a href="https://www.sohu.com/a/412195424_114837">宣布</a>，9月15日以后，手机的麒麟芯片无法生产了，可能将成为绝响，因为台积电迫于美国的禁令，不再接受华为的订单了。</p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020081110.jpg" alt="" title="" /></p>

<p>此前，华为手机已经不能预装谷歌服务框架了。但是，安卓系统是开源的，就算不能用上层的谷歌服务，系统本身还是可以用的。</p>

<p>这就是开源软件的好处，它不受美国政府的控制，禁令影响不到它。如果安卓系统是闭源的，华为手机就麻烦了，将没有操作系统可用。有人说，可以自己搞操作系统啊。事实上，这是不现实的。华为的鸿蒙系统就算能搞出来，到哪里去找应用软件呢？怎么说服腾讯和阿里，为你开发鸿蒙版的微信和支付宝呢？最后只能搞一个虚拟机，让安卓应用跑在里面，但那也是建立在安卓是开源系统的基础上啊。</p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020081109.jpg" alt="" title="" /></p>

<p>正是因为有了开源软件，才有办法对抗美国的技术封锁。要是有一天，美国不允许中国使用 Windows，那么至少还有 Linux。为了国家的技术安全，就应该考虑多使用开源软件。</p>

<p>开源软件还有一个好处，它有助于推广技术，扩大影响力。中国拥有知识产权的技术或软件，变成世界主流的案例越多，美国的封锁就越不容易奏效。一项技术怎么才能变成业界的主流，开源是一个很有效的方法。</p>

<p>所以我觉得， <strong>政府应该把开源软件定为国家战略。</strong> 鼓励国人多使用开源软件（比如 Linux），摆脱对专有技术的依赖；同时，鼓励企业和个人将自己的智力成果与全世界共享，打破美国的技术霸权。最终来说，只有开放才能打败封锁。</p>

<h2>数据分析实战</h2>

<p>数据分析正成为一门越来越重要的技能，各种职位（比如产品经理和运营销售）都在用到它。很多公司开始招聘专职的数据分析师。</p>

<p>与工程师不同，数据分析师的主要技能和工具是 Excel、SQL 和 Python。本周的课程资料就是开课吧带来的 <strong>《大数据分析实战课》</strong>，帮助大家掌握上面这些技能和工具。</p>

<p>课程内容是四个大数据分析实战项目，以案例为导向，介绍真实业务场景下的数据分析。</p>

<ul>
<li>项目一：利用 Python 实现办公自动化。</li>
<li>项目二：海量数据图形可视化。</li>
<li>项目三：电商数据分析及可视化展示。</li>
<li>项目四：玩转高精文本分析。</li>
</ul>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020081102.jpg" alt="" title="" /></p>

<p>该课程由资深大数据专家潘海超老师讲授。现在限时优惠，仅需 0 元。</p>

<p>点击<a href="https://wx.kaikeba.com/vip_course/2y5levuvrj/9na1can5ob?tenant=wx5046bc7413796142">这里</a>或者手机扫描下面二维码，微信添加课程助理，就可以免费领取，只有 50 个名额，先到先得。</p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020081103.jpg" alt="" title="" /></p>

<h2>资讯</h2>

<p>1、<a href="https://tieba.baidu.com/p/6845657970?see_lz=1">空气净化机箱</a></p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020080303.jpg" alt="" title="" /></p>

<p>百度贴吧上面，一个网友贴出了照片。他将小米空气净化器改装成了机箱，放入了一块 itx 小主板。电脑的发热量越来越大，需要的散热风扇越来越多，而空气净化机本质上就是一个带有空气过滤功能的风扇，所以两者确实可以合二为一。</p>

<p>空气净化器的风量风压，以及噪音控制能力，是绝大多数机箱风扇无法比的。而且，空气净化器也用直流电，跟机箱可以共用一个电源。</p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020080304.jpg" alt="" title="" /></p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020080305.jpg" alt="" title="" /></p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020080301.jpg" alt="" title="" /></p>

<p>2、<a href="https://www.indiegogo.com/projects/conquering-parenthood-with-wondermom-smart-nappies#/">智能尿布</a></p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020080514.jpg" alt="" title="" /></p>

<p>一家香港护理用品公司推出了婴儿的"智能尿布"，正在众筹。这种尿布里面装有无线传感器，可以通过手机 App 查看尿布的实时数据。</p>

<p>一旦尿布的温度和湿度超标，父母就会立刻得到通知，从而更换尿布或检查婴儿是否正常。除了检查婴儿是否排尿以及尿量，它还可以监视宝宝的姿势和活动，一旦有异常睡姿，也会通知家长。</p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020080515.jpg" alt="" title="" /></p>

<p>3、<a href="https://en.chessbase.com/post/what-on-earth-is-5d-chess">5D 国际象棋</a></p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020080606.jpg" alt="" title="" /></p>

<p>Steam 游戏平台最近出现了一款 5D 国际游戏，除了棋盘是 3D 以外，还有时间轴和决策轴。</p>

<p>这种象棋游戏可以回溯每一步，并且每一步都可以做多种决策，显示成一个决策树，有点像同时玩一盘棋的"平行宇宙"。</p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020080607.jpg" alt="" title="" /></p>

<p>4、<a href="https://www.bbc.com/future/article/20200803-the-solar-canals-revolutionising-indias-renewable-energy">太阳能运河</a></p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020081107.jpg" alt="" title="" /></p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020081108.jpg" alt="" title="" /></p>

<p>印度是一个人多地少的国家，虽然日照充沛，但是缺乏发展太阳能的土地。古吉拉特邦想出了一个解决方法，就是把太阳能电池板架设在河道的上方，覆盖了一整条运河。</p>

<p>这不仅解决了太阳能发电的用地问题，而且减少了运河的水份蒸发，增加了农业灌溉用水。目前已经完成了40公里。</p>

<p>5、<a href="https://www.quirksmode.org/blog/archives/2020/08/the_cult_of_the.html">Mozilla 裁员</a></p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020081309.jpg" alt="" title="" /></p>

<p>Mozilla 本周宣布裁员250人。这其实不算意外，它的全球雇员超过1000人，但是主要产品都是免费的，这样的雇员规模可能确实太大了。</p>

<p>裁员的一个后果就是，MDN 文档团队基本上被裁掉了，只剩下很少的人，MDN 以后可能都要靠志愿者维护。由于 MDN 是 Web 开发事实上的标准文档，这件事恐怕会对全球的开发者造成很大影响。这也反应了，文档是有代价的，优质文档很难免费提供。</p>

<p>6、<strong>一句话消息</strong></p>

<blockquote>
  <ul>
<li><a href="https://www.reuters.com/article/us-japan-wasabi-idUST29421020080318">一家日本公司</a>开发了气味报警器，一旦遇到烟雾，不是发出报警声，而是散发强烈的芥末气味，用来向聋人和丧失听力的老年人报警。<br><br></li>
<li><a href="https://apnews.com/1566b3c6a377ee907a0f2e143a5b26c9">三个澳大利亚男子</a>乘坐的小船，在南太平洋上偏离航线，漂流到一个小岛上。通过在沙滩上摆出 SOS 求救符号而获救。</li>
</ul>
</blockquote>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020080603.jpg" alt="" title="" /></p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020080604.jpg" alt="" title="" /></p>

<blockquote>
  <ul>
<li><a href="https://phys.org/news/2020-08-glass-like-wood-insulates-tough-blocks.html">马里兰大学</a>的工程师发明了一种透明木材，可以替代玻璃，还比玻璃更坚硬，更隔热，可以阻挡紫外线。</li>
</ul>
</blockquote>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020080722.jpg" alt="" title="" /></p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020080723.jpg" alt="" title="" /></p>

<blockquote>
  <ul>
<li><a href="https://gizmodo.com/boeing-747s-still-use-floppy-disks-to-get-critical-soft-1844683811">波音747飞机</a>仍然使用3.5英寸软盘，进行数据库更新。（<a href="https://gizmodo.com/boeing-747s-still-use-floppy-disks-to-get-critical-soft-1844683811">@regomne</a> 投稿）</li>
</ul>
</blockquote>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020081302.jpg" alt="" title="" /></p>

<blockquote>
  <ul>
<li><a href="https://hunan.voc.com.cn/article/202007/202007300905139132.html">我国</a>研发成功世界最强马力的电力机车"神24"，可以牵引一万吨货物或者100节车厢。</li>
</ul>
</blockquote>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020081306.jpg" alt="" title="" /></p>

<h2>文章</h2>

<p>1、<a href="https://blog.yiningkarlli.com/2020/07/shipshape-renderman-challenge.html">我参加 Pixar 2020 渲染大赛的作品</a>（英文）</p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020080505.jpg" alt="" title="" /></p>

<p>Pixar 动画公司每年举办一个比赛，提供一些数字模型，邀请全世界爱好者对它们进行渲染着色，评选出优胜者。作者介绍了他如何创作第一名作品（上图）。</p>

<p>2、<a href="https://artem.krylysov.com/blog/2020/07/28/lets-build-a-full-text-search-engine/">如何自己实现一个全文搜索引擎</a>（英文）</p>

<p>作者通过一个简单的例子，讲解全文搜索引擎的原理，自己如何实现倒排索引。举例用的是 Go 语言，代码很简单，接近伪代码。</p>

<p>3、<a href="https://dev.to/craigmorten/how-to-publish-deno-modules-2cg6">如何发布 Deno 模块</a>（英文）</p>

<p>Deno 是一个 TypeScript 运行时，可以替代 Node.js。它有一个模块托管服务，本文介绍如果将 GitHub 上面的模块源码，通过 Webhook 发布到官方的托管服务。</p>

<p>4、<a href="https://mp.weixin.qq.com/s/ig_FTMp6XbbSE7q-XR70fA">财政部为什么使用 arctan 函数调节工资总额</a>（中文）</p>

<p>财政部最近下发了一个文件，使用 arctan 函数调节国有金融企业的工资总额。这个函数到底有什么特别之处？</p>

<p>5、<a href="https://medium.com/javarevisited/10-books-java-developers-should-read-in-2020-e6222f25cc72">2020年值得推荐的13本 Java 书籍</a>（英文）</p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020080806.jpg" alt="" title="" /></p>

<p>作者列了一个书单，推荐了13本 Java 学习书籍。</p>

<p>6、<a href="https://www.alec.fyi/dorking-how-to-find-anything-on-the-internet.html">如何在谷歌查找到任何信息</a>（英文）</p>

<p>本文通过一些小例子，介绍谷歌的搜索语法。这里还有完整的<a href="https://ahrefs.com/blog/google-advanced-search-operators/">搜索命令列表</a>。</p>

<p>7、<a href="https://www.tmtpost.com/4616621.html">张汝京谈中国半导体产业的发展</a>（中文）</p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020080904.jpg" alt="" title="" /></p>

<p>张汝京是中芯国际创始人，他在最近一次演讲中，回顾了第一到第三代半导体的发展，以及谈了中国半导体产业如何实现"超车"、第三代半导体未来的发展模式是什么等问题。</p>

<p>8、<a href="https://woodgears.ca/heating/freezer.html">停电时，冰箱会保持低温多长时间？</a>（英文）</p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020081004.jpg" alt="" title="" /></p>

<p>作者做了一个有趣的实验，在冰箱里面放入传感器和树莓派，看看停电后，冷冻室能保持低温多长时间。结果发现，室温19°C的房间中，冷冻室每小时损失的冷度为2.6％，大约26小时后温度将达到0°。</p>

<h2>工具</h2>

<p>1、<a href="https://fast.design/docs/introduction">Fast</a></p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020080803.jpg" alt="" title="" /></p>

<p>微软官方的 Web Components 组件库。</p>

<p>2、<a href="https://wordpress.com/p2/">P2</a></p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020080804.jpg" alt="" title="" /></p>

<p>WordPress 团队新发布的团队协作工具，有点类似公司内部的博客系统，可以免费使用，计划会在未来开源。</p>

<p>3、<a href="https://github.com/hasura/graphql-engine/blob/master/translations/README.chinese.md">Hasura GraphQL 引擎</a></p>

<p>一个高性能的 GraphQL 服务器，提供 Postgres上开箱即用的实时GraphQL API。（<a href="https://github.com/ruanyf/weekly/issues/1368">@shark-h</a> 投稿）</p>

<p>4、<a href="https://www.codota.com/">codota</a></p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020080903.jpg" alt="" title="" /></p>

<p>一个人工智能的代码提示和补全插件，支持各大主要的 IDE。（<a href="https://github.com/ruanyf/weekly/issues/1371">@dllen</a> 投稿）</p>

<p>5、<a href="https://github.com/amperser/proselint/">proselint</a></p>

<p>一个命令行程序，用来检查英文文章是否有语义错误。</p>

<p>6、<a href="https://github.com/anuraghazra/github-readme-stats/blob/master/docs/readme_cn.md">github-readme-stats</a></p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020081301.jpg" alt="" title="" /></p>

<p>一个可以自己部署的服务，生成个人 GitHub 账户的统计，可以插在自述文件里面。这里还有另一个<a href="https://github.com/athul/waka-readme">类似的服务</a>。（<a href="https://github.com/ruanyf/weekly/issues/1373">@Imfondof</a> 投稿）</p>

<p>7、<a href="https://github.com/opensource9ja/danfojs">Danfo.js</a></p>

<p>一个提供跟 Pandas 相同功能的 JS 数学计算库。</p>

<p>8、<a href="https://github.com/meilisearch/MeiliSearch">MeiliSearch</a></p>

<p>一个开源的全文搜索软件，可以自己搭建服务，支持汉语搜索。</p>

<p>9、<a href="https://github.com/ryo-ma/lazyhub">lazyhub</a></p>

<p><img src="https://www.wangbase.com/blogimg/asset/202003/bg2020032701.jpg" alt="" title="" /></p>

<p>命令行的 GitHub 客户端，有图形 UI 界面。</p>

<p>10、<a href="https://andybrewer.github.io/mvp/">mvp.css</a></p>

<p>一个最简化的 CSS 库，不提供任何自定义的类，只给出最基本的 HTML 元素的样式，适合在它的基础上添加自定义的样式。</p>

<h2>资源</h2>

<p>1、<a href="https://github.com/github/archive-program/blob/master/TheTechTree.md">技术树</a></p>

<p>为了让后代了解我们如何开发和使用软件，GitHub 官方开出了一个书单，称为"技术树"（the Tech Tree），包括16个大类的200多本经典书籍。这些书籍的数字化版本，将存放在 GitHub 的北极仓库。</p>

<p>2、<a href="https://grow.google/certificates/">谷歌职业证书</a></p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020080509.jpg" alt="" title="" /></p>

<p>谷歌推出了职业证书，第一批有四个职业：数据分析、项目经理、UX 设计师、IT 支持。</p>

<p>只要学完 Coursera 的课程，就可以拿到证书，每个月学费几十美元。我觉得，国内大厂也可以这样做，肯定有市场。</p>

<p>3、<a href="https://www.sqlteaching.com/">SQL 实例教程</a></p>

<p>一个针对初学者的 SQL 简单教程，通过在网页上运行示例来学习 SQL。</p>

<p>4、<a href="https://www.digitalocean.com/community/books/how-to-manage-a-redis-database-ebook">如何管理 Redis 数据库</a></p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020080610.jpg" alt="" title="" /></p>

<p>DigitalOcean 发布的免费英文电子书，向初学者介绍什么是 Redis 和它的基本用法。</p>

<p>5、<a href="https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIyNjQxNjUwMg==&amp;action=getalbum&amp;album_id=1338511290868006913&amp;subscene=159&amp;subscene=158&amp;scenenote=https://mp.weixin.qq.com/s?__biz=MzIyNjQxNjUwMg==&amp;mid=2247483675&amp;idx=1&amp;sn=fc494fc7e05dd5d05c2049e04816190d&amp;chksm=e8718302df060a14dc64d5ffddc76c319fd7cbfc8f7ac9c2ca09975a5431f23e85309cdb1820&amp;scene=158#rd#wechat_redirect">BUI App 开发教程</a></p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020080902.jpg" alt="" title="" /></p>

<p>BUI 是一个国产的移动端 H5 框架，这是框架作者写的系列教程，演示如何用 BUI 开发一个网易新闻 App。（<a href="https://github.com/ruanyf/weekly/issues/1369">@imouou 投稿</a>）</p>

<h2>图片</h2>

<p>1、<a href="https://rumorsontheinternets.org/2010/10/14/magnasanti-the-largest-and-most-terrifying-simcity/">模拟城市的极限</a></p>

<p>《模拟城市》是一个电子游戏，要求玩家建设一个现代城市，可以养活尽可能多的人口。</p>

<p>2010年，菲律宾的一个22岁的建筑专业学生，经过大量的计划和反复试验，在《模拟城市》里面创建一个拥有600万居民的极限城市。</p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020080511.jpg" alt="" title="" /></p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020080512.jpg" alt="" title="" /></p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020080513.jpg" alt="" title="" /></p>

<p>这个城市没有任何空间浪费，道路极小化，所有交通都是大众运输，不存在私人车辆。水电都由邻近城市提供，从而消除了对许多基础设施的土地需求。</p>

<p>这个城市是现代化的极限，以最小的面积养活最多的人口，是一个杰作，也是一个令人恐惧的乌托邦。每个居民的一生都在一个高效的小空间里工作和居住。</p>

<p>2、<a href="https://www.fieggen.com/shoelace/cialacing.htm">鞋带暗语</a></p>

<p>冷战时期，中央情报局曾经采用一种鞋带暗语。只要根据鞋面上，鞋带交叉的位置和次数，就能传递事先约定的信息。</p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020081105.jpg" alt="" title="" /></p>

<p><img src="https://www.wangbase.com/blogimg/asset/202008/bg2020081106.jpg" alt="" title="" /></p>

<p>上面图片中，黄色表示鞋面上方的鞋带交叉位置。</p>

<p>这种方法非常简单，不受环境约束，外人很难察觉。</p>

<h2>文摘</h2>

<p>1、<a href="https://napkinmath.substack.com/p/the-future-of-fitness-lululemon-buys">服饰公司为什么收购高科技镜子？</a></p>

<p>lululemon 是一家运动服饰公司，主要生产健身裤。</p>

<p><img src="https://www.wangbase.com/blogimg/asset/202007/bg2020071412.jpg" alt="" title="" /></p>

<p><img src="https://www.wangbase.com/blogimg/asset/202007/bg2020071413.jpg" alt="" title="" /></p>

<p>最近，lululemon 以5亿美元的巨资，收购了一家创业公司 Mirror。</p>

<p>Mirror 的产品是一种用于家庭健身的全身镜，但实际上相当于一台巨型的悬挂在墙上的 iPad，价格为1,495美元。用户每月支付39美元的订阅费，就可以在这面镜子上看到健身课程，然后跟着一起做。这面镜子支持点播，以及老师的现场直播，从瑜伽到拳击都有课程。 </p>

<p><img src="https://www.wangbase.com/blogimg/asset/202007/bg2020071415.jpg" alt="" title="" /></p>

<p><img src="https://www.wangbase.com/blogimg/asset/202007/bg2020071414.jpg" alt="" title="" /></p>

<p>为什么生产健身裤的公司要收购开发智能镜子和健身视频的公司呢？ </p>

<p>答案是这两家公司都针对同一个客户群体：富裕的新一代年轻人，他们喜欢锻炼身体，喜欢看着镜子里自己运动的样子。 </p>

<p>通过这次收购，lululemon 可以增加收入（有了新产品），向现有的健身裤客户销售 Mirror，并且借助新的硬件产品在互联行业赢得一席之地。</p>

<p>lululemon 可以用 Mirror 替换了商店中的所有镜子，客户可以在 Mirror 前面亲自尝试。在服饰商店体验瑜伽课程，这可能会对销售产生巨大影响。</p>

<p>但是，也有一些证据表明，lululemon 客户对这种镜子 Mirror并不特别感兴趣。所以，最终到底会怎样，这是一个很好的收购，还是会像许多其他跨行业收购一样失败，现在还并不知道。</p>

<h2>言论</h2>

<p>1、</p>

<p>TikTok 揭示了美国乃至全世界的精神病程度。</p>

<p>-- <a href="https://news.ycombinator.com/item?id=24023045">Hacker News 读者</a></p>

<p>2、</p>

<p>公司刚成立时，需要瑞士军刀型人才。</p>

<p>公司一旦发展壮大，需要菜刀型人才。</p>

<p>-- David Perell</p>

<p>3、</p>

<p>硬件总是变得越来越快，但软件总是变得越来越慢。</p>

<p>-- <a href="https://en.wikipedia.org/wiki/Wirth%27s_law">维尔斯定律</a>（Wirth's law）</p>

<p>4、</p>

<p>SSD 固态硬盘变成主流，导致 Windows 10 在 HDD 机械硬盘上几乎无法使用。</p>

<p>-- <a href="https://news.ycombinator.com/item?id=24015218">Hacker News 读者</a></p>

<p>5、</p>

<p>如果我发布开源软件，我会选择最严格的 AGPL 许可证，任何人想围绕我的软件建立业务，都必须将他们的更改提供给所有人。</p>

<p>同时，我还会发布一个商业许可证，如果你不想将更改公诸于世，就必须购买商业许可。</p>

<p>--  <a href="https://news.ycombinator.com/item?id=24098725">Hacker News 读者</a></p>

<h2>回顾</h2>

<p>2019年的本周（第 69 期）：<a href="http://www.ruanyifeng.com/blog/2019/08/weekly-issue-69.html">做得好 vs 做得快</a></p>

<p><img src="https://www.wangbase.com/blogimg/asset/201908/bg2019081403.jpg" alt="" title="" /></p>

<p>2018年的本周（第 17 期）：<a href="http://www.ruanyifeng.com/blog/2018/08/weekly-issue-17.html">全球变暖，在劫难逃</a></p>

<p><img src="https://www.wangbase.com/blogimg/asset/201808/bg2018081001.jpg" alt="" title="" /></p>

<h2>订阅</h2>

<p>这个周刊每周五发布，同步更新在<a href="http://www.ruanyifeng.com/blog">阮一峰的网络日志</a>和<a href="http://weixin.sogou.com/weixin?query=%E9%98%AE%E4%B8%80%E5%B3%B0%E7%9A%84%E7%BD%91%E7%BB%9C%E6%97%A5%E5%BF%97">微信公众号</a>。</p>

<p>微信搜索"阮一峰的网络日志"或者扫描二维码，即可订阅。</p>

<p><img src="http://www.ruanyifeng.com/blogimg/asset/2018/bg2018042311.jpg" alt="" title="" /></p>

<p>（完）</p>
]]>
        <![CDATA[<div style="color:#556677;line-height:160%;padding:0.3em 0.5em;border:1px solid #d3d3d3;margin:1em;background-color:#AAD2F0;-moz-border-radius: 10px;-webkit-border-radius:10px;border-radius: 10px;"><h3>文档信息</h3>
<ul>
<li>版权声明：自由转载-非商用-非衍生-保持署名（<a href="http://creativecommons.org/licenses/by-nc-nd/3.0/deed.zh">创意共享3.0许可证</a>）</li>
<li>发表日期： <abbr class="published" title="2020-08-14T08:35:34+08:00">2020年8月14日</abbr></li>

</ul></div>]]>        
        <![CDATA[<div style="color:#556677;line-height:160%;padding:0.3em 0.5em;margin:1em;-moz-border-radius: 10px;-webkit-border-radius:10px;border-radius: 10px;"></div>]]>
    </content>
</entry>

</feed>
`


export const xml2 = `
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<rss version="2.0">
    <channel>
        <title><![CDATA[时政频道]]></title>
        <image>
            <title><![CDATA[时政频道]]></title>
            <link>http://politics.people.cn</link>
            <url>http://www.people.cn/img/2014peoplelogo/rmw_logo.gif</url>
        </image>
        <description><![CDATA[时政新闻]]></description>
        <link>http://politics.people.cn</link>
        <language>zh-cn</language>
        <generator>www.people.cn</generator>
        <copyright><![CDATA[Copyright 1997-2016 by www.people.com.cn. all rights reserved]]></copyright>
        <pubDate>2020-08-25 16:44:16</pubDate>
        <item>
            <title><![CDATA[文化和旅游部为尼日利亚举办“后疫情时代文化和旅游产业融合发展研修班”]]></title>
            <link>http://politics.people.com.cn/n1/2020/0825/c1001-31836276.html</link>
            <pubDate>2020-08-25</pubDate>
            <author>人民网</author>
            <description><![CDATA[<p style="text-indent: 2em;"> <span style="text-indent: 2em;">人民网北京8月25日电 （记者 郑海鸥）24日，文化和旅游部为尼日利亚举办的“后疫情时代文化和旅游产业融合发展研修班”在中央文化和旅游管理干部学院举办线上开班仪式。文化和旅游部国际交流与合作局局长谢金英、尼日利亚新闻和文化部国际旅游司司长娜赖依、中央文化和旅游管理干部学院院长周庆富参加了线上开班仪式并致辞。</span></p> <p style="text-indent: 2em;"> 此次研修班自8月24日至9月4日举办，将采用网络直播模式，以在线讲座与研讨为主要教学形式，学员共41人，为尼日利亚文化和旅游领域的政府官员、专家学者。研修班举办期间，来自中国旅游研究院、中国社会科学院旅游研究中心、北京大学和文旅产业知名企业相关专家将为尼日利亚学员进行专题授课，就“疫情后中国文化旅游市场变化和高质量发展思路”“疫情下的民宿发展”“文旅融合的中国路径”“华侨城文旅融合案例分析”等主题进行深入交流，学员在了解中国在后疫情时代文旅产业融合发展的现状、趋势及经验的同时，将与专家共同探讨如何保障尼日利亚文化旅游业竞争力和可持续发展。</p> <p style="text-indent: 2em;"> 研修班是落实《中非合作论坛--北京行动计划（2019-2021年）》的具体举措，是在疫情条件下对非洲人力资源开发与合作的创新之举，也是实现民心相通的宝贵契机，有利于进一步增进中非在文化和旅游领域的务实合作。</p> ]]></description>
        </item>
        <item>
            <title><![CDATA[海报 | 习近平：这件事再难也要想办法解决]]></title>
            <link>http://politics.people.com.cn/n1/2020/0825/c1001-31836059.html</link>
            <pubDate>2020-08-25</pubDate>
            <author>人民网</author>
            <description><![CDATA[<p> 　　“多谋民生之利，多解民生之忧”“这件事涉及群众切身利益和城市长远发展，再难也要想办法解决”……习近平总书记安徽行，这些话关乎民生，饱含牵挂。</p> <p align="center"> <img alt="" src="http://www.people.com.cn/mediafile/pic/20200825/79/8199765467440077695.jpg" /></p> <p align="center"> <img alt="" src="http://www.people.com.cn/mediafile/pic/20200825/24/12790649514677543888.jpg" /></p> <p align="center"> <img alt="" src="http://www.people.com.cn/mediafile/pic/20200825/51/216439060679323271.jpg" /></p> <p align="center"> <img alt="" src="http://www.people.com.cn/mediafile/pic/20200825/42/18046244724267579146.jpg" /></p> <p align="center"> <img alt="" src="http://www.people.com.cn/mediafile/pic/20200825/74/983454644670586866.jpg" /></p> <p align="center"> <img alt="" src="http://www.people.com.cn/mediafile/pic/20200825/89/665380347221671453.jpg" /></p> <p align="center"> <img alt="" src="http://www.people.com.cn/mediafile/pic/20200825/41/2252521077549701113.jpg" /></p> <p align="center"> <img alt="" src="http://www.people.com.cn/mediafile/pic/20200825/23/8685763972240857259.jpg" /></p> <p align="center"> <img alt="" src="http://www.people.com.cn/mediafile/pic/20200825/59/4839996876151127611.jpg" /></p> <p class="pictext"> 　　出品：湖北广电融媒体新闻中心</p> <p> 　　监制：郭小容</p> <p> 　　编审：康耀方 郭晓勇</p> <p> 　　策划：苏逸冰</p> <p> 　　制图：梁意 袁广</p> ]]></description>
        </item>
        <item>
            <title><![CDATA[北京市政协副主席李伟接受中央纪委国家监委纪律审查和监察调查]]></title>
            <link>http://politics.people.com.cn/n1/2020/0825/c1001-31836042.html</link>
            <pubDate>2020-08-25</pubDate>
            <author>人民网</author>
            <description><![CDATA[<p> 　　人民网北京8月25日电 据中央纪委国家监委网站消息，北京市政协副主席李伟涉嫌严重违纪违法，目前正接受中央纪委国家监委纪律审查和监察调查。　　</p> <p> 　　<strong>李伟简历</strong>　　</p> <p> 　　李伟，男，汉族，1963年5月生，北京人，1987年1月入党，1982年12月参加工作，在职大专毕业（中央民族学院中文专业），高级管理人员工商管理硕士。现任北京市政协副主席、党组成员。</p> <p> 　　曾任北京市政府办公厅副处级调研员，市政府宽沟招待所副所长、所长，市政府驻海南省办事处党委书记、主任（副局级），市政府办公厅党组成员、副主任，市政府副秘书长、办公厅党组副书记、常务副主任，市政府副秘书长（正局级），市委副秘书长、政法委常务副书记，北京市政府秘书长、办公厅党组书记、主任。（简历摘自北京市政协网）</p> ]]></description>
        </item>
        <item>
            <title><![CDATA[这座城 让人总想留下来（走向我们的小康生活）]]></title>
            <link>http://politics.people.com.cn/n1/2020/0823/c1001-31832977.html</link>
            <pubDate>2020-08-25</pubDate>
            <author>本报记者 徐锦庚 肖家鑫 李洪兴</author>
            <description><![CDATA[<p> 　　特意保留的砖石墙体和房顶钢构，外围一圈铁锈色的大门和围挡，展示着这里钢铁产业的底色。正在建设的山东济南中央商务区，改造中的原济钢二厂老厂房，旧址风貌与现代设计有机融合，引来不少市民参观探访。这里未来将成为中央商务区文化和企业服务中心，周边市民也多了一个休闲娱乐的好去处。</p> <p> 　　2018年6月14日，习近平总书记在山东考察时指出，增进民生福祉是发展的根本目的。做民生工作，首先要有为民情怀。要多谋民生之利、多解民生之忧，在发展中补齐民生短板、促进社会公平正义。</p> <p> 　　济南牢记习近平总书记殷殷嘱托，找准民生改善与新旧动能转换契合点，努力让百姓共享发展成果，不断巩固提高小康成色。</p> <p> <strong>　　动能转换</strong></p> <p> <strong>　　“转岗不下岗，转业不失业”</strong></p> <p> 　　济南东部，十里钢城。曾经喧嚣的工厂，如今唯有3200立方米的高炉矗立——2017年7月，作为山东推动产业转型升级、加快新旧动能转换的一项重要举措，济南钢铁集团在济南的钢铁产线全面停产。</p> <p> 　　钢铁产能退出，近2万名济钢职工，有的留下，为济钢转型发展开拓新的业务领域；有的离开，创业或者再就业；还有的奔赴300多公里外的日照钢铁精品基地……</p> <p> 　　济钢工人李宏伟选择留在济南开拓新业务。作为钢厂第三代，李宏伟一度非常焦虑，“三代人奋斗过的钢厂说没就没了，以后咋办？”</p> <p> 　　很快，李宏伟又振奋起精神——济钢提出“转岗不下岗，转业不失业”，为职工提供了十多种安置渠道。原本是高炉皮带工的李宏伟，内部竞聘，成为济钢创智谷员工，致力于孵化新技术、新业态、新模式和相关项目。创智谷的运营团队也是济钢“老人”。</p> <p> 　　济钢只是一例。在推进新旧动能转换过程中，济南注重民生保障，依托腾退出的发展空间引入新产业业态，保障就业容量、丰富就业岗位、提升就业质量。</p> <p> 　　“没有啥困难迈不过去。”转岗之后的李宏伟越来越自信，收入也比以前翻了近一番。创智谷经过三年开拓，成功引入创业项目和团队100多家，举办创业培训50余场，服务创业人员1000余人次。</p> <p> <strong>　　城乡融合</strong></p> <p> <strong>　　“发展越快，我们的日子越红火”</strong></p> <p> 　　2017年5月，中德（济南）中小企业合作区获批，让济南高新区遥墙街道徐寨村迎来了新的发展机遇。</p> <p> 　　徐寨村党支部组织村民成立了以物业服务、劳务派遣、园林绿化、清洁保洁为主要服务内容的物业管理公司，园区企业或工地需要用工可随时提供。目前，村里已经有100多人通过物业管理公司在家门口找到工作。“我们还通过合作区联系了职业院校，让村民去参加培训。”村党支部书记张海森说。</p> <p> 　　村民韩福序之前在一个离家较远的液压厂工作，合作区有家企业扩大产能需要招工，他马上就被村里通知去应聘。“现在的工作离家只有3里路，待遇也不错。”韩福序说。</p> <p> 　　合作区积极推动融合发展，让发展更多惠及周边百姓：非公企业森峰科技党支部组织文艺小分队进村演出；临港医院组织党员先锋队每年上门为村民义诊……</p> <p> 　　在推动新旧动能转换、加速产业升级过程中，济南注重新建项目与附近村居的融合发展。2019年12月，济南高新区、历城区、章丘区等5区入选国家城乡融合发展试验区。</p> <p> 　　随着机场扩建、城际高铁、轨道交通等项目的到来，中德（济南）中小企业合作区将打造世界水准的国际标准地招商产业园，更多项目将快速入区落地。“发展越快，我们的日子越红火！”张海森对未来充满信心。</p> <p> <strong>　　服务优化</strong></p> <p> <strong>　　“好环境，是发展的巨大动能”</strong></p> <p> 　　走进济南市政务服务中心，前来办事的市民络绎不绝。虽然每天平均有四五千人办理业务，大厅却并不感觉拥挤，高效便捷的服务大大缩短了市民的等候和办理时间。</p> <p> 　　“这几年济南营商环境提升很大。无论是申请工商营业执照，还是申报各类事项，都比以前快了很多。”赵忠良30多年前来到济南，先从销售员做起，后创办自己的公司。</p> <p> 　　经营饭店的孙昌泽也有同感，“以前办个啥手续，得往相关部门跑好几趟，如今不但只用去一次，市场监管局等部门还会主动上门服务。”</p> <p> 　　近年来，济南提出打造一座“有温度的城市”，推出一系列优化发展环境的举措：工商登记实现全程电子化，一般性行政审批提速68%以上；市政府数据开放平台建成启用，实现了数据多跑路、群众少跑腿……</p> <p> 　　孙昌泽就是“新济南人”，他从厨师开始做起，如今拥有了自己的饭店，在济南安家立业。“这座城市的包容和关怀让人总想留下来。”目前，济南市区约有200万名农民工。为帮助他们尽快融入城市，除市级农民工综合服务中心，济南还在各县区及146个街镇、5229个村居和260个较大的企业（工地）建立农民工服务中心平台和窗口站点，形成五级服务体系。</p> <p> 　　“1997年创业之初，员工只有3人、启动资金3000元，现在员工200多人、注册资金1亿元，年产值也由20万元增长到2亿多元。”这些年，赵忠良的企业不断发展壮大，“好环境，是发展的巨大动能。”</p> <br /> <p> <span id="paper_num">　　《 人民日报 》（ 2020年08月23日 02 版）</span></p> ]]></description>
        </item>
        <item>
            <title><![CDATA[增收致富门路宽（走向我们的小康生活）]]></title>
            <link>http://politics.people.com.cn/n1/2020/0824/c1001-31833332.html</link>
            <pubDate>2020-08-25</pubDate>
            <author>本报记者 李 纵 周小苑</author>
            <description><![CDATA[<p> 　　“这是两万元，表哥你点点。”农海忠把手里的钱递出去，神情轻松，“大前年，家里改建民宿时向亲戚借了18万元，没想到3年就能全部还清。”</p> <p> 　　农海忠是广西崇左市龙州县逐卜乡弄岗村村民，家有5口人、6亩甘蔗地，2015年被确定为建档立卡贫困户，当年人均收入仅2400元。</p> <p> 　　弄岗村地处弄岗国家级自然保护区外围，生态环境好，鸟类品种多。2016年起，农海忠为来村里观赏、拍摄鸟类的研究团队和游客当向导，收入逐步增加。</p> <p> 　　2017年9月，他又在自家建起了民宿，5间房，仅此一项就多收入1万余元。当年底，农海忠一家顺利脱贫。“这几年收入年年上台阶。”对眼下的日子，农海忠感到满意。</p> <p> 　　走出自家开办的缘之园民宿，农海忠来到隔壁的印支绿鹊客栈，那是弄岗村第一家民宿，主人农伟宏也是村里第一位观鸟向导。</p> <p> 　　在客栈后山，农伟宏正给一处鸟坑换水。“在鸟经常出现的地方架起有凹陷的石块，里面倒上清水，就会有鸟来洗澡，我们管这个叫鸟坑。客人可以在我们搭建的隐蔽观鸟点里观鸟。”</p> <p> 　　农伟宏爱鸟护鸟，缘于他的职业——弄岗自然保护区的护林员。从2000年到现在，他已在这个岗位上干了20年。</p> <p> 　　弄岗村全村人口近3000人，过去主要依靠种植甘蔗为生。农伟宏说，当护林员头10年，他做得最多的事情就是劝阻村民抓鸟、砍树。</p> <p> 　　2008年，鸟类学家在弄岗自然保护区调查时新发现了弄岗穗鹛，引起外界关注。当时为鸟类学家当向导的正是农伟宏。此后几年，一些研究团队前来寻访弄岗穗鹛时，都会请他当向导。“收入多的时候，一天上百元。”农伟宏说，兼职观鸟向导，改变了他的生活。</p> <p> 　　弄岗村在观鸟圈和摄影圈渐渐有了名气，慕名前来的游客越来越多。</p> <p> 　　2014年，广西柳州市观鸟协会为方便组织开展观鸟活动，支持农伟宏10万元无息贷款，用于扩建民宿，改善接待条件。“二楼有4间房子接待客人，加上自己当向导，当年光这两项收入就有5万元。”农伟宏说。</p> <p> 　　“当观鸟向导拓宽增收门路，这给我们带来启发。”逐卜乡党委书记侯勇告诉记者，县、乡引导弄岗村发展以爱鸟护鸟、休闲度假为主要内容的生态观光游，努力实现生态保护和经济发展双赢。</p> <p> 　　村里建起了生态观鸟科普基地，争取到县里财政支持，投入700多万元用于村级公路以及停车场、供水、供电、通信等基础设施建设；实施乡村风貌提升行动，整治垃圾杂物乱堆乱放、乱搭乱建千余处，村容村貌焕然一新。</p> <p> 　　观鸟先要护鸟。弄岗村制订了爱鸟护鸟村规民约，引导村民学习爱鸟护鸟知识；村民们自发建起了湿地保护小区、鸟类自然保护小区等。今年5月底，邻村逐卜村村民严克卿发现一窝褐冠鹃隼，引来众多观鸟爱好者。为了保护褐冠鹃隼，严克卿直接带上吊床，夜里都睡在林子里。</p> <p> 　　“我家后山的观鸟点有8个拍摄机位，每个机位租金50元。”农伟宏告诉记者，“现在的弄岗村，人人都是护鸟员、护林员。只有生态好了，才能观测到更多鸟类。”</p> <p> 　　“观鸟协会也一直在开展培训和教育，让村民知道如何爱鸟护鸟。”龙州县观鸟协会会长赵文庆说，为规范观鸟和拍摄活动，观鸟协会吸收观鸟向导为会员，并统一制定了服务标准。</p> <p> 　　侯勇告诉记者，2015年底弄岗村贫困发生率高达26%。这些年，县、乡因地制宜引导村民服务生态观光游，鼓励改建民宿接待游客，弄岗人走上脱贫致富路。2019年，弄岗村贫困发生率降至0.4%。</p> <p> 　　如今，弄岗村开设了农家客栈15家，全村共有观鸟向导近30人。2019年，生态观鸟科普基地接待1.6万多人次；通过提供接送服务、餐饮住宿等，166户人家户均增收约1.5万元。</p> <br /> <p> <span id="paper_num">　　《 人民日报 》（ 2020年08月24日 02 版）</span></p> ]]></description>
        </item>
        <item>
            <title><![CDATA[好日子越过越有奔头（走向我们的小康生活）]]></title>
            <link>http://politics.people.com.cn/n1/2020/0825/c1001-31835054.html</link>
            <pubDate>2020-08-25</pubDate>
            <author>本报记者 张云河 葛孟超</author>
            <description><![CDATA[<p> 　　广西百色靖西市大莫村，“九分石头一分土”，村民1200多人，到2015年全村贫困发生率仍高达82.8%。</p> <p> 　　近些年，广西持续加大少数民族地区脱贫攻坚力度。大莫村因地制宜发展扶贫产业，改善基础设施，提高教育质量，到2019年底，全村贫困发生率降至1.12%，实现整村脱贫。</p> <p> <strong>　　技术有人教，销售有保障</strong></p> <p> 　　大莫村的一个山坡上，6头黄牛正悠闲地吃草。“一头育肥的牛能卖万把块，山那边还有我家20只羊，出栏后每只也能挣1000多块。”正在放牧的村民陆金从介绍。</p> <p> 　　这些年，广西大力扶持扶贫产业发展，确定86种产业形成特色产业目录，集中力量投入产业奖补资金、扶贫小额信贷，支持各地扶贫产业集约化、规模化发展。借力产业扶贫，大莫村发展起了优质稻种植等特色产业。</p> <p> 　　2018年，大莫村成立村集体股份公司——靖西市兴边农业开发有限公司，与中科畜牧（深圳）有限公司合作经营，建起了大莫生态养殖场。“像陆金从这样的散养农户，依托生态养殖场，养殖技术有人教，牛羊销售有保障。”大莫村第一书记王翔说。</p> <p> 　　陆金从还种了1亩地牧草。牧草由养殖场收购，根据种草的面积，村民可以获得兴边公司的相应股权，享受分红。目前全村牧草种植面积300亩，85户村民从中受益，户均年增收2000多元。</p> <p> 　　“去年我家摘了贫困帽，最近准备扩大养殖规模，再买10只母羊。”陆金从说，“好日子越过越有奔头。”</p> <p> <strong>　　引来山泉水，用水不再愁</strong></p> <p> 　　拧开家中水龙头，不一会儿，村民吕朝乖就接满了一大桶清水。</p> <p> 　　以前每逢旱季，连着三四个月不下雨，只有一眼山泉供村民取水。人缺水，地更缺，一垄接一垄，尽是望天田。</p> <p> 　　2018年初，村民们顺着山泉水，历经曲折找到了5个水源地。当年7月，对口帮扶大莫村的深圳市龙岗区出资160万元，建成5个高位水池和7.5公里长的引水管道。吕朝乖说：“如今，不光喝水不发愁，家家还建了卫生厕所。”</p> <p> 　　去年初，大莫村建成防渗水利工程，农田灌溉问题也迎刃而解。借力粤桂对口扶贫协作，大莫村还实施了道路修整、电力改造等一批基础设施项目。“2017年以来，龙岗区累计支援大莫村2350万元，兴基建、补短板。”王翔说。</p> <p> 　　如今，村里建起了卫生室、农家书屋、戏台、篮球场等，村道安装了太阳能路灯，村容村貌焕然一新。</p> <p> <strong>　　盖起新校舍，有了助学金</strong></p> <p> 　　510分，高出广西文科一本分数线10分。“方仕仗可是大莫村历史上头一个‘一本生’。”消息很快传遍村里，大莫村弄关民族小学校长李春谋高兴地说。</p> <p> 　　“他们家是建档立卡贫困户，方仕仗在高中阶段不光免学费，每年还能享受3500元助学金。”王翔介绍，有了这项政策，方家弟兄俩都在县城上了高中，“弟弟明年也要高考了，希望再出一个大学生。”</p> <p> 　　弄关民族小学建在大莫村弄关屯。以前没黑板，旧校舍的石头墙上先用水泥刷一层，再用墨汁抹一遍；不通电，空墨水瓶里灌进煤油，插根棉线，成了煤油灯。</p> <p> 　　近年来，弄关民族小学先后获得60多万元建设资金，盖起了全村最漂亮的楼房，孩子们也有了运动场。2017年，广西出入境边防检查总站向学校捐赠了电脑等教学设备，这个偏远的小学校搭上了远程教育的快车。邻近的龙邦镇中心小学还不时派老师前来授课，让教学质量又上了一个新台阶。“教育条件改善了，孩子们会更有出息。”李春谋说。</p> <br /> <p> <span id="paper_num">　　《 人民日报 》（ 2020年08月25日 01 版）</span></p> ]]></description>
        </item>
        <item>
            <title><![CDATA[脱贫不能“等靠要”，而要“加油干”（现场评论·走向我们的小康生活（14））]]></title>
            <link>http://politics.people.com.cn/n1/2020/0824/c1001-31834521.html</link>
            <pubDate>2020-08-25</pubDate>
            <author>李洪兴</author>
            <description><![CDATA[<p> 　　在决战决胜脱贫攻坚的冲刺阶段，需要节奏快、步子稳、干劲足，需要每个地方找到适合自己的发展方式</p> <p> 　　</p> <p> 　　脱贫致富路上，农村面貌反映脱贫攻坚成效，干群风貌折射发展致富势头。行走在齐鲁大地，有很多面孔让人印象深刻。他们朴实憨厚、勤劳上进，有的是村子的致富带头人，有的是勤勤恳恳的普通群众，都在为绘就乡村振兴美丽画卷而奔忙。</p> <p> 　　在济南市章丘区三涧溪村，听村党总支书记高淑贞讲当地发展史，很有“嚼头”。初到村里时困难重重，找到“病症”后重点突破，引才兴业并步步做强……村子以前如何、现在怎样、未来何去，这些在高淑贞的讲解下格外清晰。她的语速很快，采访时，大家都说高淑贞“什么时候都有激情”。</p> <p> 　　高淑贞语速快，工作的节奏也快，带动村子的发展速度更快。之前，为引进一家企业，高淑贞带着村民在7天之内修了一条路，企业最终落地。脱贫等不得、致富盼不来，必须把激情倾注在土地上，把热情奉献给乡亲们。</p> <p> 　　在临沂市兰陵县代村村史馆，笔者先看到的是很多法院传票。王传喜刚任村党支部书记时，村子穷且乱，接连收到126张法院传票。后来，他想办法破局、啃最硬骨头，稳住了局面、找到了路子。倘若不经介绍，很多人都没有注意到人群中的王传喜。就是这位面庞黑红、厚实稳重的汉子，引领代村热火朝天奋斗在小康路上。</p> <p> 　　稳住了阵脚、稳定了人心，才能稳住发展振兴的方向。先治乱，再治穷；先让村民富起来、乐起来，再让村子强起来、美起来，王传喜带着村民稳扎稳打，一起致富“很有干头”。脱贫致富千头万绪，乡村振兴一日千里，唯有一步一个脚印，才能稳步前进。</p> <p> 　　在菏泽市定陶区的茗嘉兴农作物种植专业合作社，采访时赶上分红，有人6万、有人8万、有人逾10万，农户脸上写满了知足。在合作社种食用菌，有统一管理、统一销售，承包户在就近就业中实现脱贫。一位农户笑着说，种植工作“需要体力”，小康生活就是“过上好日子”。</p> <p> 　　分红的收益是干出来的，鼓鼓的钱包是汗水换来的。对老百姓来说，脱贫不能“等靠要”，而要“加油干”。在山东不少农村，农民变成企业员工、养殖专业户、电商主播等，在各自领域内用勤劳双手创造着美好日子。说到底，无论一家一户脱贫还是一县一乡发展，都离不开干劲、韧劲，把短板补上、把基础打牢，就能用勤劳的双手换来幸福生活。</p> <p> 　　高淑贞的节奏快、王传喜的步子稳、普通群众的干劲足，共同演奏出致富带头人与勤劳群众的奔富交响曲，寓意着脱贫致富、乡村振兴“等不得”“乱不得”“闲不得”。这充分说明，只要全党全国各族人民万众一心、咬定目标加油干，就一定能如期打赢脱贫攻坚这场硬仗。</p> <p> 　　“胜非其难也，持之者其难也”。在决战决胜脱贫攻坚的冲刺阶段，需要节奏快、步子稳、干劲足，需要每个地方找到适合自己的发展方式。采访时，高淑贞形象地说，种子落地要看是石头窝还是肥土壤，不因地制宜，也很难生根发芽。如今，在量力而行、真实可靠、保证质量的基础上精准脱贫，更多像三涧溪村这样的美丽乡村会不断涌现出来。</p> <p> 　　（作者为本报评论部编辑）&nbsp;</p> <br /> <p> <span id="paper_num">　　《 人民日报 》（ 2020年08月24日 05 版）</span></p> ]]></description>
        </item>
        <item>
            <title><![CDATA[水利部将水旱灾害防御应急响应等级调整为Ⅲ级]]></title>
            <link>http://politics.people.com.cn/n1/2020/0825/c1001-31835118.html</link>
            <pubDate>2020-08-25</pubDate>
            <author>人民网</author>
            <description><![CDATA[<p> 　　新华社北京8月24日电（记者戴小河）记者24日从水利部了解到，当前长江上游干流寸滩江段已降至警戒水位以下，三峡水库入库流量减至35000立方米每秒以下。鉴于当前水旱灾害防御形势，水利部决定于24日17时将水旱灾害防御Ⅱ级应急响应等级调整为Ⅲ级。</p> <p> 　　水利部要求各地继续加强雨水情监测预报、水工程调度和堤防巡查防守，毫不松懈地做好有关防御工作，确保防洪安全。</p> ]]></description>
        </item>
        <item>
            <title><![CDATA[着眼长远把握大势开门问策集思广益 研究新情况作出新规划]]></title>
            <link>http://politics.people.com.cn/n1/2020/0825/c1024-31835055.html</link>
            <pubDate>2020-08-25</pubDate>
            <author>人民网</author>
            <description><![CDATA[<script src="http://tv.people.com.cn/img/player/v.js"></script><script>showPlayer({id:"/pvservice/xml/2020/8/24/97921fb7-0c28-44ad-9a61-744c74f816c4.xml",width:640,height:525});</script> <table class="pci_c" width="399"> <tbody> <tr> <td align="center"> <img src="http://paper.people.com.cn/rmrb/images/1/20200825/1598300986783_1.jpg" /></td> </tr> <tr> <td> <p> 　　8月24日，中共中央总书记、国家主席、中央军委主席习近平在中南海主持召开经济社会领域专家座谈会并发表重要讲话。<br /> 　　新华社记者 李学仁摄</p> </td> </tr> </tbody> </table> <p> 　　“十四五”时期是我国全面建成小康社会、实现第一个百年奋斗目标之后，乘势而上开启全面建设社会主义现代化国家新征程、向第二个百年奋斗目标进军的第一个五年，我国将进入新发展阶段。凡事预则立，不预则废。我们要着眼长远、把握大势，开门问策、集思广益，研究新情况、作出新规划</p> <p> 　　要以辩证思维看待新发展阶段的新机遇新挑战。要统筹中华民族伟大复兴战略全局和世界百年未有之大变局，深刻认识我国社会主要矛盾发展变化带来的新特征新要求，深刻认识错综复杂的国际环境带来的新矛盾新挑战，增强机遇意识和风险意识，准确识变、科学应变、主动求变，勇于开顶风船，善于转危为机，努力实现更高质量、更有效率、更加公平、更可持续、更为安全的发展</p> <p> 　　要以畅通国民经济循环为主构建新发展格局。推动形成以国内大循环为主体、国内国际双循环相互促进的新发展格局是根据我国发展阶段、环境、条件变化提出来的，是重塑我国国际合作和竞争新优势的战略抉择</p> <p> 　　要以科技创新催生新发展动能。实现高质量发展，必须实现依靠创新驱动的内涵型增长，大力提升自主创新能力，尽快突破关键核心技术</p> <p> 　　要以深化改革激发新发展活力。随着我国迈入新发展阶段，改革也面临新的任务，必须拿出更大的勇气、更多的举措破除深层次体制机制障碍，坚持和完善中国特色社会主义制度，推进国家治理体系和治理能力现代化</p> <p> 　　要以高水平对外开放打造国际合作和竞争新优势。国际经济联通和交往仍是世界经济发展的客观要求。要全面提高对外开放水平，建设更高水平开放型经济新体制，形成国际合作和竞争新优势</p> <p> 　　要以共建共治共享拓展社会发展新局面。要实现更加充分、更高质量的就业，健全全覆盖、可持续的社保体系，强化公共卫生和疾控体系，促进人口长期均衡发展，加强社会治理，化解社会矛盾，维护社会稳定</p> <p> 　　</p> <p> 　　新华社北京8月24日电&nbsp;中共中央总书记、国家主席、中央军委主席习近平8月24日下午在中南海主持召开经济社会领域专家座谈会并发表重要讲话。他强调，“十四五”时期是我国全面建成小康社会、实现第一个百年奋斗目标之后，乘势而上开启全面建设社会主义现代化国家新征程、向第二个百年奋斗目标进军的第一个五年，我国将进入新发展阶段。凡事预则立，不预则废。我们要着眼长远、把握大势，开门问策、集思广益，研究新情况、作出新规划。</p> <p> 　　中共中央政治局常委、中央书记处书记王沪宁，中共中央政治局常委、国务院副总理韩正出席座谈会。</p> <p> 　　座谈会上，北京大学国家发展研究院名誉院长林毅夫、中国经济体制改革研究会副会长樊纲、清华大学公共管理学院院长江小涓、中国社会科学院副院长蔡昉、国家发展改革委宏观经济研究院院长王昌林、清华大学国家金融研究院院长朱民、上海交通大学安泰经济与管理学院特聘教授陆铭、中国社会科学院世界经济与政治研究所所长张宇燕、香港中文大学（深圳）全球与当代中国高等研究院院长郑永年等9位专家代表先后发言，就“十四五”规划编制等提出意见和建议。</p> <p> 　　在认真听取大家发言后，习近平发表了重要讲话。他表示，专家学者们做了很好的发言，从各自专业领域出发，对“十四五”时期发展环境、思路、任务、举措提出了很有价值的意见和建议，参会的其他专家提交了书面发言，请有关方面研究吸收。</p> <p> 　　习近平指出，要以辩证思维看待新发展阶段的新机遇新挑战。当今世界正经历百年未有之大变局，新冠肺炎疫情全球大流行使这个大变局加速变化，国际经济、科技、文化、安全、政治等格局都在发生深刻调整。国内发展环境也经历着深刻变化，我国已进入高质量发展阶段，社会主要矛盾已经转化为人民日益增长的美好生活需要和不平衡不充分的发展之间的矛盾，人民对美好生活的要求不断提高。要统筹中华民族伟大复兴战略全局和世界百年未有之大变局，深刻认识我国社会主要矛盾发展变化带来的新特征新要求，深刻认识错综复杂的国际环境带来的新矛盾新挑战，增强机遇意识和风险意识，准确识变、科学应变、主动求变，勇于开顶风船，善于转危为机，努力实现更高质量、更有效率、更加公平、更可持续、更为安全的发展。</p> <p> 　　习近平强调，要以畅通国民经济循环为主构建新发展格局。推动形成以国内大循环为主体、国内国际双循环相互促进的新发展格局是根据我国发展阶段、环境、条件变化提出来的，是重塑我国国际合作和竞争新优势的战略抉择。我们要坚持供给侧结构性改革这个战略方向，扭住扩大内需这个战略基点，使生产、分配、流通、消费更多依托国内市场，提升供给体系对国内需求的适配性，形成需求牵引供给、供给创造需求的更高水平动态平衡。新发展格局决不是封闭的国内循环，而是开放的国内国际双循环。我国在世界经济中的地位将持续上升，同世界经济的联系会更加紧密，为其他国家提供的市场机会将更加广阔，成为吸引国际商品和要素资源的巨大引力场。</p> <p> 　　习近平指出，要以科技创新催生新发展动能。实现高质量发展，必须实现依靠创新驱动的内涵型增长，大力提升自主创新能力，尽快突破关键核心技术。要充分发挥我国社会主义制度能够集中力量办大事的显著优势，打好关键核心技术攻坚战，创造有利于新技术快速大规模应用和迭代升级的独特优势，加速科技成果向现实生产力转化，提升产业链水平。要发挥企业在技术创新中的主体作用，使企业成为创新要素集成、科技成果转化的生力军。要大力培养和引进国际一流人才和科研团队，加大科研单位改革力度，最大限度调动科研人员的积极性。要坚持开放创新，加强国际科技交流合作。</p> <p> 　　习近平强调，要以深化改革激发新发展活力。随着我国迈入新发展阶段，改革也面临新的任务，必须拿出更大的勇气、更多的举措破除深层次体制机制障碍，坚持和完善中国特色社会主义制度，推进国家治理体系和治理能力现代化。要守正创新、开拓创新，大胆探索自己未来发展之路。要坚持和完善社会主义基本经济制度，使市场在资源配置中起决定性作用，更好发挥政府作用，营造长期稳定可预期的制度环境。要加强产权和知识产权保护，建设高标准市场体系，完善公平竞争制度，激发市场主体发展活力，使一切有利于社会生产力发展的力量源泉充分涌流。</p> <p> 　　习近平指出，要以高水平对外开放打造国际合作和竞争新优势。国际经济联通和交往仍是世界经济发展的客观要求。我国经济持续快速发展的一个重要动力就是对外开放。对外开放是基本国策。要全面提高对外开放水平，建设更高水平开放型经济新体制，形成国际合作和竞争新优势。要积极参与全球经济治理体系改革，推动完善更加公平合理的国际经济治理体系。</p> <p> 　　习近平强调，要以共建共治共享拓展社会发展新局面。要实现更加充分、更高质量的就业，健全全覆盖、可持续的社保体系，强化公共卫生和疾控体系，促进人口长期均衡发展，加强社会治理，化解社会矛盾，维护社会稳定。要完善共建共治共享的社会治理制度，加强和创新基层社会治理，更加注重维护社会公平正义，促进人的全面发展和社会全面进步。</p> <p> 　　习近平指出，理论源于实践，又用来指导实践。改革开放以来，我们及时总结新的生动实践，不断推进理论创新，在发展理念、所有制、分配体制、政府职能、市场机制、宏观调控、产业结构、企业治理结构、民生保障、社会治理等重大问题上提出了许多重要论断。时代课题是理论创新的驱动力。新时代改革开放和社会主义现代化建设的丰富实践是理论和政策研究的“富矿”，我国经济社会领域理论工作者大有可为。要坚持马克思主义立场、观点、方法，坚持从国情出发，充分反映实际情况，透过现象看本质，树立国际视野，使理论和政策创新充分体现先进性和科学性。（讲话全文见第二版）</p> <p> 　　丁薛祥、刘鹤、黄坤明、肖捷、何立峰出席座谈会。</p> <p> 　　中央和国家机关有关部门负责同志，专家学者代表等参加座谈会。</p> <br /> <p> <span id="paper_num">　　《 人民日报 》（ 2020年08月25日 01 版）</span></p> <p style="text-indent: 2em;"> <strong>相关阅读：</strong></p> <p style="text-indent: 2em;"> <strong><a href="http://politics.people.com.cn/n1/2020/0825/c1024-31835058.html" target="_blank">在经济社会领域专家座谈会上的讲话</a></strong></p> ]]></description>
        </item>
        <item>
            <title><![CDATA[亮亮百姓“粮仓家底”——专访国家粮食和物资储备局负责人]]></title>
            <link>http://politics.people.com.cn/n1/2020/0825/c1001-31835113.html</link>
            <pubDate>2020-08-25</pubDate>
            <author>人民网</author>
            <description><![CDATA[<p> 　　新华社北京8月24日电 <strong>题：亮亮百姓“粮仓家底”——专访国家粮食和物资储备局负责人</strong></p> <p> 　　新华社记者王立彬</p> <p> 　　民为国基，谷为民命；悠悠万事，吃饭为大。当前公众对我国粮食安全形势特别是粮食储备情况格外关注。就老百姓关心的“粮仓家底”问题，新华社记者24日专访了国家粮食和物资储备局负责人。</p> <p> 　　<strong>靠得住：粮食储备保障能力</strong></p> <p> 　　问：我国是一个人口大国，粮食储备保障能力能不能满足需要？</p> <p> 　　答：我国粮食库存构成，主要分三大类：政府储备、政策性库存、企业商品库存。此外还有一部分农户存粮，通常不统计在库存范围内。政府储备包括中央储备粮和地方储备粮，这是守底线、稳预期、保安全的“压舱石”。</p> <p> 　　近年来，在中央储备规模稳步充实同时，以销区为重点，地方储备安全保障能力不断增强。2014年，按照国务院部署，有关部门以保障产区3个月、销区6个月、产销平衡区4.5个月市场供应量标准，核定下达地方储备规模计划。各地按时完成增储任务，有的省份还结合实际主动增加了部分规模。</p> <p> 　　同时，国家通过最低收购价、临时收储等政策，还掌握了相当数量的政策性粮食库存，根据需要可随时投放市场；再加上各类粮食企业商品库存，我国粮食库存总量持续高位运行，库存消费比远远高于联合国粮农组织提出的安全警戒线水平，稻谷、小麦库存都能够满足1年以上需求。</p> <p> 　　2019年，全国政策性粮食库存大清查进一步摸清了粮食“家底”。从仓储技术看，我国粮食仓储能力明显增强，总体达到世界较先进水平。从储备品种结构看，以口粮为主，小麦、稻谷等口粮比例占七成左右，有的省份根据当地特色和消费习惯建立了少量杂粮储备。36个大中城市和市场易波动地区还建立了一定数量的大米、面粉等成品粮储备，可满足当地10-15天市场供应。同时储备区域布局更合理，质量更可靠。</p> <p> 　　<strong>用得上：应急救灾与保供稳价</strong></p> <p> 　　问：在应急救灾、保供稳价等方面，粮食储备有哪些应对手段？</p> <p> 　　答：随着储备规模不断充实，国家粮食宏观调控能力进一步增强，政府粮食储备在保障国家粮食安全中发挥着越来越重要的作用。一方面，应急救灾中保障军需民食，另一方面在市场波动中维护粮价稳定。我国已建立起符合国情的粮食应急保障体系，以备应对突发公共事件、自然灾害等引起的粮食市场异常波动风险。</p> <p> 　　目前国有粮食应急加工企业有5388家，成品粮日加工能力在百万吨以上；粮食应急供应网点44601家，应急配送中心3170个，应急储运企业3454个，依托健全的粮油配送供应网络，能够迅速将米面油投放终端消费市场；国家级粮食市场信息直报点1072个，地方粮食市场信息监测点9206个，基本覆盖重点地区、重点品种，能够密切跟踪粮食供求变化和价格动态；全国31个省区市制定了省级粮食应急预案，587个市地、2440个县建立了区域性粮食应急预案。</p> <p> 　　新冠肺炎疫情发生以来，粮食和物资储备系统加强粮源组织调度，发挥储备吞吐调节作用，引导企业加大米面油生产和投放力度，有效保障了市场稳定。</p> <p> 　　在国内外粮食市场深度融合、国际粮价频繁波动的背景下，我国粮食价格总体平稳，没有出现大起大落，这与粮食生产连年丰收息息相关，又与坚强的储备保障紧密相联。</p> <p> 　　<strong>管得好：扎实推进各项改革任务</strong></p> <p> 　　问：怎么按中央部署，守住管好“天下粮仓”？</p> <p> 　　答：中央深改委第八次会议审议通过《关于改革完善体制机制加强粮食储备安全管理的若干意见》，对新形势下粮食储备管理作出全面部署，要确保如期完成各项任务。</p> <p> 　　要坚持政策性职能和经营性职能分开原则，压实承储企业主体责任和政府部门监管责任，确保国家储备粮数量实、质量好、调得快、用得好。</p> <p> 　　要推动中央储备与地方储备、政府储备与企业储备互为补充、协同发展。进一步健全与中央储备垂直管理相适应的监管体制，充实执法监管力量。粮食安全省长责任制考核、中央储备粮管理和中央事权粮食政策执行情况考核是重要的制度安排，要发挥好“指挥棒”作用。</p> <p> 　　要把加大耕地保护力度、稳定粮食播种面积和产量、完善地方粮食储备安全管理、提高粮食应急保障能力等方面，作为落实粮食安全省长责任制的重中之重。</p> <p> 　　要积极推动粮食安全保障立法修规，从速推动粮食安全保障法立法和《粮食流通管理条例》修订进程，研究起草《粮食储备安全管理条例》；积极支持各省份出台粮食安全保障地方性法规。</p> <p> 　　要深入实施优质粮食工程，加快建设粮食产业强国。进一步开展“中国好粮油”行动，不断增加绿色优质粮油产品供给，构建链条优化、衔接顺畅、运转高效、保障有力的粮食“产购储加销”体系。</p> <p> 　　要认真组织编制“十四五”粮食物流基础设施建设规划，统筹布局一批大型粮食物流枢纽，增强分拨集散能力，加快建设高标准粮仓，着力实施粮食现代物流工程。</p> <p> 　　要积极推进节粮减损，全链条减少粮食产后损失。加大粮食科技创新和科普力度，推广农户科学储粮装具，指导粮食收获、仓储、运输、加工、消费等各个环节减损工作。</p> ]]></description>
        </item>
        <item>
            <title><![CDATA[全国地方政协工作经验交流会在京召开]]></title>
            <link>http://politics.people.com.cn/n1/2020/0825/c1024-31835068.html</link>
            <pubDate>2020-08-25</pubDate>
            <author>人民网</author>
            <description><![CDATA[<P>　　本报北京8月24日电&nbsp;&nbsp;（记者冯春梅）全国地方政协工作经验交流会24日在京召开。中共中央政治局常委、全国政协主席汪洋出席会议并讲话。他强调，要深入学习贯彻习近平总书记在中央政协工作会议上的重要讲话精神，总结推广各地贯彻落实中央政协工作会议精神的新鲜经验和有效做法，立足实际，开拓创新，扎实推进专门协商机构建设，更好把人民政协制度优势转化为国家治理效能。</P><P>　　汪洋指出，近一年来，各地深入学习贯彻中央政协工作会议精神，加强党对政协工作领导的组织体系和制度机制建设，健全经常性、常态化理论学习制度，打造形式多样、灵便高效协商平台，增强思想政治引领的针对性实效性，规范委员履职服务管理，紧扣决战脱贫攻坚决胜全面建成小康社会目标任务、夺取疫情防控和经济社会发展双胜利等履职尽责，新时代人民政协事业发展进一步呈现新格局新气象。</P><P>　　汪洋强调，学习贯彻中央政协工作会议精神是一项长期任务。要把坚持党的全面领导落实到政协工作各方面和全过程，夯实共同思想政治基础，推动把党的主张转化为社会各界广泛共识和自觉行动。要推动协商广泛多层制度化发展，积极培育富有政协特色的协商文化，提升专门协商机构建设“建”的质量、体现“专”的水平、突出“商”的特色，实现建言资政和凝聚共识辩证统一、双向发力。要完善委员讲堂、委员宣讲团、委员会客厅、请你来协商、谈心谈话等新形式，把凝聚共识寓于各项履职活动之中，推动委员思想政治进步和团结引领界别群众相促进。要把加强工作制度建设作为推进专门协商机构建设的基础工程来抓，努力形成系统配套、严谨规范、衔接顺畅的制度体系。</P><P>　　汪洋强调，各地政协要始终坚持党对政协工作的领导这一根本政治原则，在党委领导下认真做好围绕中心、服务大局的各项工作。要进一步明确市县政协主要工作是协商、主要工作方式是搭台、工作主旨是双向发力，落实协商于民、协商为民要求，紧扣党政工作的重点、群众生产生活的难点、社会治理的焦点，务实灵活地组织开展各类协商活动。要努力解决市县政协基础工作薄弱、人员力量薄弱等问题，为基层政协充分发挥作用奠定基础。</P><P>　　全国政协副主席张庆黎通报了中央政协工作会议以来全国政协主要工作情况。全国政协副主席刘奇葆、万钢、何厚铧、卢展工、王正伟、马飚、陈晓光、梁振英、夏宝龙、杨传堂、李斌、巴特尔、汪永清、苏辉、郑建邦、辜胜阻、刘新成、何维、邵鸿、高云龙出席会议，15位省市县政协负责同志作了大会发言（发言摘编见第十六版）。</P> <br><span id='paper_num'>　　《 人民日报 》（ 2020年08月25日 04 版）</span>]]></description>
        </item>
        <item>
            <title><![CDATA[推动次区域合作拓展深化 打造水资源合作新亮点]]></title>
            <link>http://politics.people.com.cn/n1/2020/0825/c1024-31835063.html</link>
            <pubDate>2020-08-25</pubDate>
            <author>人民网</author>
            <description><![CDATA[<TABLE class="pci_c" width="400"><TBODY><TR><TD align="center"><IMG src="http://paper.people.com.cn/rmrb/images/2020-08/25/03/rmrb2020082503p14_b.jpg"></TD></TR> <TR><TD><p>　　8月24日，国务院总理李克强在北京人民大会堂出席澜沧江—湄公河合作第三次领导人视频会议。李克强和老挝总理通伦共同主持会议。柬埔寨首相洪森、缅甸总统温敏、泰国总理巴育、越南总理阮春福出席。<BR/>　　新华社记者 饶爱民摄 </p></TD></TR></TBODY></TABLE><P>　　本报北京8月24日电&nbsp;&nbsp;（记者张慧中）国务院总理李克强24日上午在人民大会堂出席澜沧江—湄公河合作第三次领导人视频会议。李克强和老挝总理通伦共同主持会议。柬埔寨首相洪森、缅甸总统温敏、泰国总理巴育、越南总理阮春福出席。</P><P>　　李克强表示，澜湄合作因水而生。澜湄六国共饮一江水，可以说亲如一家人。习近平主席前不久倡议各国努力形成更加包容的全球治理、更加有效的多边机制、更加积极的区域合作。中方赞赏机制各国为促进区域合作做出的积极努力。</P><P>　　李克强指出，澜湄机制成立4年多来，合作从快速拓展期进入全面发展期，为地区发展注入了新的“源头活水”，给各国人民带来了实实在在的利益。我们推动水资源机制性合作进入快车道；深化经贸合作，有力拉动经济增长；坚持以人为本，增进流域人民福祉。今年上半年，中国同湄公河国家双边贸易逆势增长，表明双方合作潜力巨大。面对突如其来的新冠肺炎疫情，我们同舟共济、守望相助，共同抗击疫情，努力恢复地区经济活力。</P><P>　　李克强就加强澜湄合作提出六点倡议：</P><P>　　——将水资源合作推向新高度。中方愿在力所能及的范围内，为各国更好利用水资源提供更多帮助。中方将从今年开始与湄公河国家分享澜沧江全年水文信息，共建澜湄水资源合作信息共享平台，更好应对洪旱灾害。定期举办水资源合作部长级会议和水资源合作论坛，实施好大坝安全、洪水预警等合作项目，提升流域综合治理和水资源管理能力。</P><P>　　——拓展贸易和互联互通合作。将澜湄合作同“国际陆海贸易新通道”对接，进一步畅通贸易通道，优化资源配置，维护产业链供应链稳定，推动协同发展。共同推动年内签署区域全面经济伙伴关系协定，实现更高水平的区域经济一体化。建设好中老、中泰铁路。深化金融合作。建设好地区“快捷通道”和“绿色通道”网络，便利人员往来和货物流通。</P><P>　　——深化可持续发展合作。加快落实农业合作三年行动计划，实施好“丰收澜湄”项目集群。中方欢迎更多湄公河国家优质农、畜及其副产品输华。开展应对气候变化、保护生物多样性等合作。</P><P>　　——提升公共卫生合作。中方将在澜湄合作专项基金框架下设立公共卫生专项资金，在力所能及范围内提供物资和技术支持。中方新冠疫苗研制完成并投入使用后，将优先向湄公河国家提供。开展重大突发公共卫生事件信息通报和联合处置。共同支持世界卫生组织更好发挥作用。</P><P>　　——加强民生领域合作。共同实施防灾减灾、乡村清洁卫生等项目，让澜湄合作更多惠及基层民众。推广贫困社区综合发展，努力振兴旅游业。</P><P>　　——践行开放包容理念。加强各机制交流互鉴，推动澜湄合作同其他次区域机制间的交流合作。积极探讨同日、韩、欧盟等开展第三方合作。中方支持东盟在东亚合作中的中心地位，愿通过澜湄合作助力东盟共同体建设，深化中国—东盟战略伙伴关系。</P><P>　　李克强指出，当前中国疫情防控和经济社会发展取得重大成果。中国的发展将为湄公河国家和世界各国带来更多合作机遇。中方期待同湄公河国家一道努力，推动澜湄合作不断深化拓展，为次区域和本地区发展繁荣注入更多活力。</P><P>　　与会领导人高度评价澜湄合作取得的丰富成果，完全赞同李克强就加强机制合作提出的倡议。各国领导人表示，澜湄合作为促进地区经济社会发展、民生改善，巩固和平与安全，增进相互理解与信任发挥了重要作用。各方充分肯定在水资源合作上取得的进展，愿同中方深化澜湄流域经济发展带合作，对接“国际陆海贸易新通道”，加强互联互通。各方赞赏中方承诺新冠疫苗研发成功后将作为国际公共产品，增加疫苗在发展中国家的可及性，愿同中方深化公共卫生领域合作，加强疫情防控合作，促进经济复苏发展。各方致力于促进区域经济一体化和贸易投资自由化便利化，有效维护多边主义。</P><P>　　李克强和各国领导人还共同出席了缅甸接任下届澜湄合作共同主席国的交接仪式。</P><P>　　会议发表了《澜沧江—湄公河合作第三次领导人会议万象宣言》和《澜沧江—湄公河合作第三次领导人会议关于澜湄合作与“国际陆海贸易新通道”对接合作的共同主席声明》。</P><P>　　何立峰等出席会议。</P> <br><span id='paper_num'>　　《 人民日报 》（ 2020年08月25日 03 版）</span>]]></description>
        </item>
        <item>
            <title><![CDATA[在经济社会领域专家座谈会上的讲话]]></title>
            <link>http://politics.people.com.cn/n1/2020/0825/c1024-31835058.html</link>
            <pubDate>2020-08-25</pubDate>
            <author>习近平</author>
            <description><![CDATA[<P>　　今天，我们召开经济社会领域专家座谈会，听听大家对“十四五”规划编制的意见和建议。出席今天座谈会的，既有经济学家，也有社会学家。刚才，专家学者们做了很好的发言。大家从各自专业领域出发，对“十四五”时期发展环境、思路、任务、举措提出了很有价值的意见和建议，听了很受启发，参会的其他专家提交了书面发言，请有关方面研究吸收。下面，我就正确认识和把握中长期经济社会发展重大问题讲点意见。</P><P>　　用中长期规划指导经济社会发展，是我们党治国理政的一种重要方式。从1953年开始，我国已经编制实施了13个五年规划（计划），其中改革开放以来编制实施8个，有力推动了经济社会发展、综合国力提升、人民生活改善，创造了世所罕见的经济快速发展奇迹和社会长期稳定奇迹。实践证明，中长期发展规划既能充分发挥市场在资源配置中的决定性作用，又能更好发挥政府作用。</P><P>　　“十四五”时期是我国全面建成小康社会、实现第一个百年奋斗目标之后，乘势而上开启全面建设社会主义现代化国家新征程、向第二个百年奋斗目标进军的第一个五年，我国将进入新发展阶段。凡事预则立，不预则废。我们要着眼长远、把握大势，开门问策、集思广益，研究新情况、作出新规划。</P><P>　　第一，以辩证思维看待新发展阶段的新机遇新挑战。党的十九大以来，我多次讲，当今世界正经历百年未有之大变局。当前，新冠肺炎疫情全球大流行使这个大变局加速变化，保护主义、单边主义上升，世界经济低迷，全球产业链供应链因非经济因素而面临冲击，国际经济、科技、文化、安全、政治等格局都在发生深刻调整，世界进入动荡变革期。今后一个时期，我们将面对更多逆风逆水的外部环境，必须做好应对一系列新的风险挑战的准备。</P><P>　　国内发展环境也经历着深刻变化。我国已进入高质量发展阶段，社会主要矛盾已经转化为人民日益增长的美好生活需要和不平衡不充分的发展之间的矛盾，人均国内生产总值达到1万美元，城镇化率超过60%，中等收入群体超过4亿人，人民对美好生活的要求不断提高。我国制度优势显著，治理效能提升，经济长期向好，物质基础雄厚，人力资源丰厚，市场空间广阔，发展韧性强大，社会大局稳定，继续发展具有多方面优势和条件。同时，我国发展不平衡不充分问题仍然突出，创新能力不适应高质量发展要求，农业基础还不稳固，城乡区域发展和收入分配差距较大，生态环保任重道远，民生保障存在短板，社会治理还有弱项。</P><P>　　总之，进入新发展阶段，国内外环境的深刻变化既带来一系列新机遇，也带来一系列新挑战，是危机并存、危中有机、危可转机。我们要辩证认识和把握国内外大势，统筹中华民族伟大复兴战略全局和世界百年未有之大变局，深刻认识我国社会主要矛盾发展变化带来的新特征新要求，深刻认识错综复杂的国际环境带来的新矛盾新挑战，增强机遇意识和风险意识，准确识变、科学应变、主动求变，勇于开顶风船，善于转危为机，努力实现更高质量、更有效率、更加公平、更可持续、更为安全的发展。</P><P>　　第二，以畅通国民经济循环为主构建新发展格局。今年以来，我多次讲，要推动形成以国内大循环为主体、国内国际双循环相互促进的新发展格局。这个新发展格局是根据我国发展阶段、环境、条件变化提出来的，是重塑我国国际合作和竞争新优势的战略抉择。近年来，随着外部环境和我国发展所具有的要素禀赋的变化，市场和资源两头在外的国际大循环动能明显减弱，而我国内需潜力不断释放，国内大循环活力日益强劲，客观上有着此消彼长的态势。对这个客观现象，理论界进行了很多讨论，可以继续深化研究，并提出真知灼见。</P><P>　　自2008年国际金融危机以来，我国经济已经在向以国内大循环为主体转变，经常项目顺差同国内生产总值的比率由2007年的9.9%降至现在的不到1%，国内需求对经济增长的贡献率有7个年份超过100%。未来一个时期，国内市场主导国民经济循环特征会更加明显，经济增长的内需潜力会不断释放。我们要坚持供给侧结构性改革这个战略方向，扭住扩大内需这个战略基点，使生产、分配、流通、消费更多依托国内市场，提升供给体系对国内需求的适配性，形成需求牵引供给、供给创造需求的更高水平动态平衡。</P><P>　　当然，新发展格局决不是封闭的国内循环，而是开放的国内国际双循环。我国在世界经济中的地位将持续上升，同世界经济的联系会更加紧密，为其他国家提供的市场机会将更加广阔，成为吸引国际商品和要素资源的巨大引力场。</P><P>　　第三，以科技创新催生新发展动能。实现高质量发展，必须实现依靠创新驱动的内涵型增长。我们更要大力提升自主创新能力，尽快突破关键核心技术。这是关系我国发展全局的重大问题，也是形成以国内大循环为主体的关键。</P><P>　　我们要充分发挥我国社会主义制度能够集中力量办大事的显著优势，打好关键核心技术攻坚战。要依托我国超大规模市场和完备产业体系，创造有利于新技术快速大规模应用和迭代升级的独特优势，加速科技成果向现实生产力转化，提升产业链水平，维护产业链安全。要发挥企业在技术创新中的主体作用，使企业成为创新要素集成、科技成果转化的生力军，打造科技、教育、产业、金融紧密融合的创新体系。基础研究是创新的源头活水，我们要加大投入，鼓励长期坚持和大胆探索，为建设科技强国夯实基础。要大力培养和引进国际一流人才和科研团队，加大科研单位改革力度，最大限度调动科研人员的积极性，提高科技产出效率。要坚持开放创新，加强国际科技交流合作。</P><P>　　第四，以深化改革激发新发展活力。改革是解放和发展社会生产力的关键，是推动国家发展的根本动力。我国改革已进行40多年，取得举世公认的伟大成就。社会是不断发展的，调节社会关系和社会活动的体制机制随之不断完善，才能不断适应解放和发展社会生产力的要求。</P><P>　　随着我国迈入新发展阶段，改革也面临新的任务，必须拿出更大的勇气、更多的举措破除深层次体制机制障碍，坚持和完善中国特色社会主义制度，推进国家治理体系和治理能力现代化。我们要守正创新、开拓创新，大胆探索自己未来发展之路。要坚持和完善社会主义基本经济制度，使市场在资源配置中起决定性作用，更好发挥政府作用，营造长期稳定可预期的制度环境。要加强产权和知识产权保护，建设高标准市场体系，完善公平竞争制度，激发市场主体发展活力，使一切有利于社会生产力发展的力量源泉充分涌流。</P><P>　　第五，以高水平对外开放打造国际合作和竞争新优势。当前，国际社会对经济全球化前景有不少担忧。我们认为，国际经济联通和交往仍是世界经济发展的客观要求。我国经济持续快速发展的一个重要动力就是对外开放。对外开放是基本国策，我们要全面提高对外开放水平，建设更高水平开放型经济新体制，形成国际合作和竞争新优势。要积极参与全球经济治理体系改革，推动完善更加公平合理的国际经济治理体系。</P><P>　　当前，在推进对外开放中要注意两点：一是凡是愿意同我们合作的国家、地区和企业，包括美国的州、地方和企业，我们都要积极开展合作，形成全方位、多层次、多元化的开放合作格局。二是越开放越要重视安全，越要统筹好发展和安全，着力增强自身竞争能力、开放监管能力、风险防控能力，炼就金刚不坏之身。</P><P>　　第六，以共建共治共享拓展社会发展新局面。事实证明，发展起来以后的问题不比不发展时少。我国社会结构正在发生深刻变化，互联网深刻改变人类交往方式，社会观念、社会心理、社会行为发生深刻变化。“十四五”时期如何适应社会结构、社会关系、社会行为方式、社会心理等深刻变化，实现更加充分、更高质量的就业，健全全覆盖、可持续的社保体系，强化公共卫生和疾控体系，促进人口长期均衡发展，加强社会治理，化解社会矛盾，维护社会稳定，都需要认真研究并作出工作部署。</P><P>　　一个现代化的社会，应该既充满活力又拥有良好秩序，呈现出活力和秩序有机统一。要完善共建共治共享的社会治理制度，实现政府治理同社会调节、居民自治良性互动，建设人人有责、人人尽责、人人享有的社会治理共同体。要加强和创新基层社会治理，使每个社会细胞都健康活跃，将矛盾纠纷化解在基层，将和谐稳定创建在基层。要更加注重维护社会公平正义，促进人的全面发展和社会全面进步。</P><P>　　以上我重点讲了几个问题，以及中长期经济社会发展涉及的其他问题，希望大家深入思考，取得进一步的研究成果。</P><P>　　2015年11月23日，我在主持十八届中央政治局第二十八次集体学习时专门就马克思主义政治经济学研究作了讲话，最近《求是》杂志发表了这篇讲话。恩格斯说，无产阶级政党的“全部理论来自对政治经济学的研究”。列宁把政治经济学视为马克思主义理论“最深刻、最全面、最详尽的证明和运用”。我们要运用马克思主义政治经济学的方法论，深化对我国经济发展规律的认识，提高领导我国经济发展能力和水平。</P><P>　　理论源于实践，又用来指导实践。改革开放以来，我们及时总结新的生动实践，不断推进理论创新，在发展理念、所有制、分配体制、政府职能、市场机制、宏观调控、产业结构、企业治理结构、民生保障、社会治理等重大问题上提出了许多重要论断。比如，关于社会主义本质的理论，关于社会主义初级阶段基本经济制度的理论，关于创新、协调、绿色、开放、共享发展的理论，关于发展社会主义市场经济、使市场在资源配置中起决定性作用和更好发挥政府作用的理论，关于我国经济发展进入新常态、深化供给侧结构性改革、推动经济高质量发展的理论，关于推动新型工业化、信息化、城镇化、农业现代化同步发展和区域协调发展的理论，关于农民承包的土地具有所有权、承包权、经营权属性的理论，关于用好国际国内两个市场、两种资源的理论，关于加快形成以国内大循环为主体、国内国际双循环相互促进的新发展格局的理论，关于促进社会公平正义、逐步实现全体人民共同富裕的理论，关于统筹发展和安全的理论，等等。这些理论成果，不仅有力指导了我国经济发展实践，而且开拓了马克思主义政治经济学新境界。</P><P>　　时代课题是理论创新的驱动力。马克思、恩格斯、列宁等都是通过思考和回答时代课题来推进理论创新的。现在，在波涛汹涌的世界经济大潮中，能不能驾驭好我国经济这艘大船，是对我们党的重大考验。面对错综复杂的国内外经济形势，面对形形色色的经济现象，学习领会马克思主义政治经济学基本原理和方法论，有利于我们掌握科学的经济分析方法，认识经济运动过程，把握经济发展规律，提高驾驭社会主义市场经济能力，准确回答我国经济发展的理论和实践问题。新时代改革开放和社会主义现代化建设的丰富实践是理论和政策研究的“富矿”，我国经济社会领域理论工作者大有可为。这里，我给大家提几点希望。一是从国情出发，从中国实践中来、到中国实践中去，把论文写在祖国大地上，使理论和政策创新符合中国实际、具有中国特色，不断发展中国特色社会主义政治经济学、社会学。二是深入调研，察实情、出实招，充分反映实际情况，使理论和政策创新有根有据、合情合理。三是把握规律，坚持马克思主义立场、观点、方法，透过现象看本质，从短期波动中探究长期趋势，使理论和政策创新充分体现先进性和科学性。四是树立国际视野，从中国和世界的联系互动中探讨人类面临的共同课题，为构建人类命运共同体贡献中国智慧、中国方案。</P><P>　　（新华社北京8月24日电）&nbsp;</P> <br><span id='paper_num'>　　《 人民日报 》（ 2020年08月25日 02 版）</span>]]></description>
        </item>
        <item>
            <title><![CDATA[加大创新驱动力度 强化生态环境治理 奋力推动高质量发展走在前列]]></title>
            <link>http://politics.people.com.cn/n1/2020/0825/c1024-31835069.html</link>
            <pubDate>2020-08-25</pubDate>
            <author>人民网</author>
            <description><![CDATA[<P>　　新华社南京8月24日电&nbsp;&nbsp;（记者赵超）8月21日至23日，中共中央政治局常委、国务院副总理韩正在江苏南京、苏州、无锡调研。韩正强调，江苏要贯彻落实习近平总书记提出的“建设经济强、百姓富、环境美、社会文明程度高的新江苏”重要指示精神，坚持新发展理念，加大创新驱动力度，强化生态环境治理，奋力推动高质量发展走在前列。</P><P>　　韩正先后到网络通信与安全紫金山实验室和紫光工业云体验中心，考察互联网技术研发和应用情况。他指出，要强化顶层设计，加强力量整合，创新组织架构和体制机制，完善吸引和留住人才的政策措施，推动产学研深度融合，加快补齐关键核心技术短板，服务国家重大战略需求，推进网络强国建设。韩正在南瑞继保电气公司、华虹无锡集成电路研发和制造基地，了解高端制造业和战略性新兴产业发展情况，勉励企业聚焦主业，瞄准数字化、智能化，增强系统集成能力和自主创新能力，推动形成自主可控的现代产业体系。</P><P>　　韩正走进恒力集团、丘钛微电子科技、纬创资通等企业，了解企业复工复产、惠企政策落实和稳就业等情况。他指出，要有效应对外部环境变化，挖掘内需潜力，大力开拓国内市场，畅通上下游产业，积极维护产业链供应链稳定。在旭创科技、信达生物制药、药明生物技术、祥生医疗科技等企业，韩正强调，要加大研发投入，有效促进科技成果产业化，推动传统产业转型升级和新兴产业发展壮大。韩正还来到菲尼克斯电气、通力电梯、村田电子等企业，表示中国将坚定不移扩大开放，为外商投资提供更加良好的环境。</P><P>　　韩正来到扬子江生态文明创新中心，通过长江“生态眼”环境监测系统了解长江南京段水污染治理、生态修复、滨江环境整治情况；前往幕燕滨江风貌区，考察幕燕风光带综合整治和入江支流水环境治理情况，在燕子矶察看现场采样水质。他指出，要进一步巩固岸线整治成果，提高城市污水处理设施接入率和处理率，加快内河码头船舶岸电标准体系建设，推动长江大保护不断取得新进展。韩正在无锡乘船了解太湖水治理情况，登上拖山岛实地察看生态清淤试点工程建设情况。他强调，要抓住截污控源这个关键，科学有效清淤固淤，牢牢守住环境容量底线，确保饮用水安全，坚决把太湖治理好。</P> <br><span id='paper_num'>　　《 人民日报 》（ 2020年08月25日 04 版）</span>]]></description>
        </item>
        <item>
            <title><![CDATA[在澜沧江—湄公河合作第三次领导人会议上的讲话]]></title>
            <link>http://politics.people.com.cn/n1/2020/0825/c1024-31835064.html</link>
            <pubDate>2020-08-25</pubDate>
            <author>中华人民共和国国务院总理 李克强</author>
            <description><![CDATA[<P>通伦总理，</P><P>各位同事：</P><P>　　很高兴通过视频同大家见面，共同出席澜沧江—湄公河合作第三次领导人会议。感谢共同主席国老挝和通伦总理为会议的召开所做大量工作。</P><P>　　本次会议主题是“加强伙伴关系，实现共同繁荣”。前不久，习近平主席倡议各国努力形成更加包容的全球治理、更加有效的多边机制、更加积极的区域合作。澜湄六国共饮一江水，亲如一家人，是事实上的命运共同体。我们加强互利合作，既是成就自己，为本国的经济社会发展和民生改善注入更多动力，也是成就彼此，为实现本地区的繁荣与稳定进一步夯实基础。</P><P>　　中国人讲，上善若水，水利万物而不争。澜湄合作因水而生。水既是重要的合作内容，也赋予了这一机制致力于友好相处、互利共赢的精神内涵。澜湄机制成立4年多来，合作从快速拓展期进入全面发展期，机制建设、战略规划、资金支持、务实合作均取得显著进展，为地区发展注入了新的“源头活水”，给各国人民带来了实实在在的利益。</P><P>　　我们推动水资源机制性合作进入快车道。各方举行了首次水资源合作部长级会议和合作论坛，中方直接向湄公河五国提供澜沧江汛期水文资料，提前通报上游流量变化信息，克服困难增加旱季出境水量，帮助下游国家缓解旱情。水资源、环境合作中心和全球湄公河研究中心高效运行。</P><P>　　我们深化经贸合作，有力拉动经济增长。中方通过国际产能和装备制造合作专项贷款，以及援外优惠贷款、优惠出口买方信贷等，支持暹粒新国际机场、皎漂深水港、永新燃煤电厂等40多个重大项目。中国企业积极参与西哈努克港经济特区、罗勇工业园区、赛色塔综合开发区建设，为当地创造了大量税收和就业，实现了互利共赢。</P><P>　　我们坚持以人为本，增进流域人民福祉。澜湄合作专项基金重点用于改善民生，在卫生、教育、减贫、妇女等领域支持开展了400多个项目，为湄公河国家提供了4万多人次的培训，推动本地区人力资源潜能加快释放。</P><P>　　今年年初以来，面对突如其来的新冠肺炎疫情，我们同舟共济、守望相助，共同抗击疫情，努力恢复地区经济活力。今年上半年，中国对湄公河国家贸易、投资额逆势上扬，分别增长8.7%和33.5%，湄公河国家对华农产品出口同比增长21.2%。中老铁路铺轨工作以每天1公里的速度推进，金边—西哈努克港高速公路等重要项目陆续复工复产，这些都为地区国家经济社会发展重回正轨提供了助力。</P><P>　　各位同事，</P><P>　　当前国际形势纷繁复杂变化，世界和地区经济遭受严重冲击。在此背景下，如何维护澜湄合作快速发展势头，妥善应对各种风险挑战，更好实现共同发展，是我们面临的共同课题。为此，中方建议：</P><P>　　——将水资源合作推向新高度。我们要充分尊重各国合理开发利用水资源的正当权益，照顾彼此利益和关切，有事大家商量着办。中方愿在力所能及的范围内，为各国更好利用水资源提供更多帮助。中方将从今年开始，与湄公河国家分享澜沧江全年水文信息，共建澜湄水资源合作信息共享平台，更好应对气候变化和洪旱灾害。定期举办水资源合作部长级会议和水资源合作论坛，落实好《澜湄水资源合作五年行动计划（2018—2022）》，实施好大坝安全、洪水预警等合作项目，提升流域综合治理和水资源管理能力。</P><P>　　——拓展贸易和互联互通合作。我们愿将“一带一路”倡议同各国发展战略更好对接，深化合作。“国际陆海贸易新通道”纵贯中国西部地区，连接东南亚与欧亚大陆，陆海集聚、区域联动效应突出。澜湄合作同“国际陆海贸易新通道”对接，将进一步畅通贸易通道，调动中国西部、西南部以及东盟其他国家力量，实现对湄公河国家的更大投入，进一步优化资源配置，维护产业链供应链稳定，推动协同发展。中国愿同湄公河五国一道，落实好此次发表的对接声明，为区域发展注入新动力。我们也要共同推动年内签署区域全面经济伙伴关系协定，实现更高水平的区域经济一体化，维护自由贸易。</P><P>　　我们要建设好中老、中泰铁路，贯通地区南北大动脉。扩大产业联通，加快编制跨境经济合作五年发展规划，加强“多国多园”合作。深化金融合作，为互联互通提供强有力和可持续的金融支撑。在疫情防控常态化背景下，建设好地区“快捷通道”和“绿色通道”网络，便利人员往来和货物流通，确保产业链供应链稳定；发展好疫情催生的线上经济，促进数字技术创新，拓展数字联通，推动各国经济社会数字化转型升级。</P><P>　　——深化可持续发展合作。加快落实农业合作三年行动计划（2020—2022），实施好“丰收澜湄”项目集群，推广分享农作物和农产品加工、存储技术，提升农产品质量安全体系，建设农业产业合作园区，增强次区域农业竞争力。中方欢迎更多湄公河国家优质农、畜及其副产品输华。我们还要加快落实《澜湄环境合作战略》，开展应对气候变化、改善空气质量、保护生物多样性等合作。</P><P>　　——提升公共卫生合作。中方将在澜湄合作专项基金框架下设立公共卫生专项资金，继续尽己所能向湄公河国家提供物资和技术支持。中方新冠疫苗研制完成并投入使用后，将优先向湄公河国家提供。我们还要开展重大突发公共卫生事件信息通报和联合处置，加强传染病早期预警合作，实施好“澜湄热带病防控行”“本草惠澜湄”“中医针灸进澜湄”等项目。国际社会团结合作攸关全球抗击疫情大局。中方愿同湄公河各国一道，支持世界卫生组织更好发挥作用。</P><P>　　——加强民生领域合作。中方愿同湄公河国家共同实施防灾减灾、乡村清洁卫生、婴幼儿营养健康等项目，让澜湄合作更多惠及基层民众。推广贫困社区综合发展、“民族地区创业”等项目。努力振兴旅游业，举办澜湄市长文化旅游论坛等活动，尝试“云旅游”等灵活方式，用好用足多民族文化、世界遗产等资源，走出疫情常态化下旅游业发展新路。</P><P>　　——践行开放包容理念。我们要继续加强各机制交流互鉴，推动澜湄合作与大湄公河次区域经济合作、三河流域机制、湄公河委员会等机制之间的交流合作，包括分享经验、共同兴办项目。积极探讨与日本、韩国、欧盟等开展第三方合作。中方支持东盟在东亚合作中的中心地位，愿通过澜湄合作助力东盟共同体建设，深化中国—东盟战略伙伴关系。</P><P>　　各位同事，</P><P>　　今年以来，面对疫情严重冲击，中国政府加大宏观政策应对力度，全力防控疫情，不失时机推动复工复产，纾困和激发市场活力的举措成效显现。当前，中国疫情防控和经济社会发展工作取得重大成果，经济稳步恢复，复工复产逐月好转，二季度经济增长好于预期，经济结构持续优化，产业数字化、智能化转型明显加快，改革开放继续深化。中国经济韧性强、回旋余地大，通过努力可以实现全年经济正增长。中国的发展将为湄公河国家和世界各国带来更多合作机遇。</P><P>　　各位同事，</P><P>　　澜沧江—湄公河跨越近5000公里、广纳百川后，终成滚滚大江，滋养沿岸无数人民。发展壮大澜湄合作，为次区域人民开创更加美好的未来，同样需要我们以包容的胸襟和开放的心态，凝聚各领域的合力。中方欢迎缅甸接任共同主席国，期待同湄公河国家一道努力，推动澜湄合作不断深化拓展，为次区域和本地区发展繁荣注入更多活力。谢谢。</P><P>　　（新华社北京8月24日电）&nbsp;</P> <br><span id='paper_num'>　　《 人民日报 》（ 2020年08月25日 03 版）</span>]]></description>
        </item>
        <item>
            <title><![CDATA[全国地方政协工作经验交流会发言摘编]]></title>
            <link>http://politics.people.com.cn/n1/2020/0825/c1001-31835092.html</link>
            <pubDate>2020-08-25</pubDate>
            <author>人民网</author>
            <description><![CDATA[<P>　　做强平台&nbsp;纵深推进&nbsp;双向发力</P><P>　　浙江省政协主席&nbsp;葛慧君</P><P>　　浙江省政协搭建与新时代要求相契合的双向发力平台，做好发挥专门协商机构作用和广泛凝聚共识两篇大文章。全面对标对表，精心培育打造“请你来协商”“委员会客厅”两大特色履职平台。我们的主要做法和体会是：</P><P>　　把准平台功能定位，突出双向发力要求。我们创建“请你来协商”和“委员会客厅”，总的考虑是以两大平台建设为牵引，串起全省三级政协组织和政协委员的责任链、履职链，上下联动、一体贯通，切实把双向发力要求落到实处。创新平台运作方式，不断提升工作实效。完善平台制度机制，促进常态化规范运行。如探索建立“委员会客厅”考评及退出机制，从制度机制上保障了“委员会客厅”可持续运行。培育平台特色文化，切实增强生机活力。</P><P>　　两大平台建设，一是有助于破解协商职能责任不够聚焦的难题，二是有助于破解团结联谊对象范围不够广的难题，三是有助于破解市县政协“两个薄弱”的难题。下一步，我们将继续准确把握地方政协特点规律，聚焦双向发力，搭好台、唱好戏，更好发挥专门协商机构作用，努力展现政协担当作为。</P><P>　</P><P>　　抗疫大考中凝聚共识汇聚力量</P><P>　　湖北省政协主席&nbsp;徐立全</P><P>　　湖北省政协把有效凝聚起决战决胜的必胜信心和智慧力量作为参与抗疫大考的试题，主动作为、奋发有为、担当善为，努力交出合格答卷。</P><P>　　闻令而动、勇于担当，全省2万多名委员、3000多名政协机关干部积极响应，在社区防控、医疗救治、物资保障、凝聚共识等方面发挥了重要作用。坚持双向发力，精心组织系列协商议政活动，先后围绕疫后重振、基层社区建设、大学生就业创业等议题开展协商活动。求同存异、聚同化异，为统筹推进常态化疫情防控和经济社会发展工作广泛凝聚正能量。全国两会召开前夕，采取领导走访看望、问卷调查、邀请参加座谈会等方式，加强沟通交流，了解思想状态，深入交心谈心，切实做好知情明政、解疑释惑工作。</P><P>　　我们深切体会到，凝聚共识，难在“凝聚”，重在“共识”。新时代人民政协要肩负起凝聚共识汇聚力量的使命任务，必须胸怀“两个大局”，不畏“难”、不失“重”，发挥好“三个重要”作用，正确处理一致性和多样性的关系，加强敏感点、风险点、关切点的思想政治引领，针对难点、热点、焦点问题和特定群体利益诉求，深入细致做好思想政治工作。</P><P>　</P><P>　　更好做到“落实下去”“凝聚起来”</P><P>　　山东省济南市政协主席&nbsp;雷&nbsp;杰</P><P>　　济南市政协以完善提升“商量”平台为抓手，不断丰富凝聚共识的方式方法、制度机制，提升凝聚共识的工作水平，更好担负起“落实下去”“凝聚起来”的政治责任。</P><P>　　一是搭平台。牢牢把握“专门协商机构”职能定位，创建“商量”平台，邀请政协委员和各方代表就共同关心的话题在这个平台上深度调研，反复协商，增进共识，并向社会广泛传播。</P><P>　　二是重引领。通过委员讲坛、专题报告、调研走访等方式，深入各界群众宣传党的路线方针政策和中央重大决策部署，不断巩固团结奋斗的共同思想政治基础。</P><P>　　三是聚民心。在“商量”选题上，把着力点放在群众关心的民生实事、难事上。</P><P>　　四是谋共识。今年我们聚焦“公共卫生体系建设”，先后开展界别协商、专题协商等，促进不同思想观点的充分表达和深入交流，在畅通人才引进机制、政校共建预防医学研究机构、减轻基层医疗机构运行负担等方面形成广泛共识。</P><P>　　五是立机制。抓住制度建设“牛鼻子”，把行之有效的经验做法固定下来、上升为制度规定，推动“商量”凝聚共识更加成熟、更加定型。</P><P>　</P><P>　　彰显制度优势和治理效能</P><P>　　上海市政协主席&nbsp;董云虎</P><P>　　上海市政协紧紧围绕发挥专门协商机构作用、广泛凝聚共识和强化委员责任担当三项重点工作，牵住制度建设“牛鼻子”，坚持立、改、废并举，全面加强专门协商机构制度建设，着力彰显人民政协制度优势和治理效能。</P><P>　　构建“1+4”制度框架和工作布局，切实强化党对政协工作的全面领导。今年，我们首次形成以党组工作要点为统领，以协商计划、民主监督计划、议政调研计划和学习计划为配套的“1+4”制度框架和工作布局。</P><P>　　制定凝聚共识工作办法。把加强思想政治引领摆在首位，着力筑牢政治圆心；把聚同化异贯穿协商民主全过程，着力扩大社会共识；把凝聚人心力量作为落脚点，着力扩大团结面。</P><P>　　完善专门协商机构制度体系。完善专委会工作制度，推动专委会工作专起来、新起来、优起来；制定加强界别工作办法，推动界别工作活起来、实起来、强起来；制定加强市区政协联系指导的制度性文件，推动市区政协工作贯通起来、协同起来、联动起来。</P><P>　　落实委员主体责任，切实强化委员的履职动能，促进委员适应新时代要求紧起来、动起来、干起来。</P><P>　</P><P>　　推动政协提案工作提质增效</P><P>　　广西壮族自治区政协主席&nbsp;蓝天立</P><P>　　广西壮族自治区政协深入学习贯彻中央政协工作会议精神，把提质增效贯穿提案工作全过程，在提案的提出、立案、办理、督办、考评等各个环节下功夫，建立健全提案产生机制、办理机制、督办机制，推动提案工作不断取得新成效。</P><P>　　以“五审制度”严把立案关，促进提案减量增质。按经济发展、农业水利、教科文卫体、城乡建设、政治法律等五大类进行初审、复审、专审、核审、会审。“五审”制度有效促进了提案从“求数量”向“重质量”转变。</P><P>　　以“六位一体”合力提案督办，促进成果有效转化。在提案办理上，我们创新采取党政领导选题督办，政协领导领题督办，政协秘书长（副秘书长）、政协各专委会、提案委领导和委员、承办单位领导分题督办的“六位一体”提案督办机制，多主体、多层次、多方面促进提案督办出实效。</P><P>　　以“四方民主评议”优化考评监督，促进提案工作整体提升。具体做法是由提案委员会、提案者、承办单位、社会各界代表组成“四方民主评议组”，对提案工作的“提、立、办、督”四个环节进行民主评议，推动提案立案质量、提案办理质量、提案服务质量“三提高”。</P><P>　</P><P>　　“小协商”助推“大治理”</P><P>　　云南省临沧市政协主席&nbsp;李银峰</P><P>　　中央政协工作会议以来，临沧市政协按照“不建机构建机制”的思路，在云南省政协指导下，在边境县开展试点，推动政协协商嵌入边疆基层社会治理，取得了“政协协商延伸下去、助推边疆治理活跃起来”的良好效果。</P><P>　　我们设置“协商在基层”议事平台，推动委员履职下沉，畅通边疆各族群众参与基层协商渠道。目前，临沧已在10个边境乡镇、44个边境村设立了协商议事平台，在241个边境自然村建成了协商议事场所。我们坚持把加强思想引领贯穿协商议事全过程，广泛凝聚各方共识。一是选题集民意，聚焦组织强边、富民兴边、和谐稳边、开放活边、守土固边五项重点工作。二是协商汇众智，以委员入户走访、召开座谈会等方式开展前期调研，做到无调研不协商。三是成果聚共识，采取主持人归纳意见、集体表决的方式，找到不同利益诉求的“最大公约数”，形成凝聚各方共识的协商成果。我们还建立了“交、督、复”一体落实机制，推动协商从“协商了什么问题”向“解决了什么问题”转变。</P><P>　　“协商在基层”试点工作以来，临沧市政协共开展协商议事活动30多场次，有力推动解决了“边寨通信信号有盲区”“边民互市管理不规范”等一批民生难题。</P><P>　</P><P>　　扎实做好市县政协工作</P><P>　　河南省政协主席&nbsp;刘&nbsp;伟</P><P>　　在中共河南省委领导下，全省各级党委和政协认真学习贯彻中央政协工作会议精神，以解决市县政协“两个薄弱”问题为突破口，加强总体设计，全面贯彻落实，有力提升了市县政协整体工作质量和水平，为政协事业发展打下了坚实的组织基础和工作基础。</P><P>　　在充分准备的基础上，省委召开政协工作会议，印发实施意见，明确了加强党对政协工作全面领导的十二项制度措施，提出将市县党委抓政协党建工作情况列入年度综合考核、纳入党委书记抓基层党建工作述职评议，落实乡镇政协工作召集人制度等。坚持多管齐下，打好加强市县政协人员力量的“组合拳”，把班子配强，把编制扩增，把机构建好，把外力用活。</P><P>　　聚焦政协协商，搭建发挥专门协商机构作用的“大舞台”。大力推进县级政协“有事好商量”协商平台建设，创设“相约星期三、民情大家谈”等特色载体，让政协委员、基层群众、相关利益主体与有关部门面对面协商。</P><P>　　构建市县政协工作持续健康发展的“助推器”，完善督查考核机制、协商工作机制、政协理论研究机制、市县政协工作指导机制和协同调研、联动协商机制。</P><P>　</P><P>　　强化政协委员责任担当</P><P>　　陕西省政协主席&nbsp;韩&nbsp;勇</P><P>　　强化政协委员责任担当是新时代加强和改进人民政协工作的重点任务之一。陕西省政协在强化委员责任担当上探索创新，推动广大委员在改革发展中担大任、在政协工作中挑大梁，展现了新时代政协委员的新形象。</P><P>　　强化理论学习，进一步明确政协委员干什么、怎么干。坚持把学习贯彻习近平新时代中国特色社会主义思想作为首要任务，开展制度化常态化的学习研究，着力提升委员政治把握能力、调查研究能力、联系群众能力、合作共事能力。</P><P>　　提高政治站位，做到关键时刻靠得住、站出来。不断加强引导，使委员对国之大者心中有数，把自身作用发挥到党政最关心、群众最期盼、发展最需要的地方，在疫情防控中为国分忧、在脱贫攻坚中彰显作为、在凝聚共识中发挥作用。</P><P>　　创新渠道载体，坚持让委员“当主角”“唱好戏”。创新调查研究方式、创新政协协商平台、创新民主监督形式、创新联系群众的方法渠道，着眼委员多元化需求，创新履职平台和载体，引导委员坚决当好人民政协制度的参与者、实践者、推动者。强化服务管理，不断调动委员积极性、主动性。始终坚持管理与服务并重，不断传导履职压力、激发履职动力。</P><P>　</P><P>　　干出基层政协新样子</P><P>　　安徽省蚌埠市蚌山区政协主席&nbsp;石&nbsp;艳</P><P>　　蚌埠市蚌山区政协立足发挥人民政协“三个重要”作用，突出政治站位，突出工作创新，突出担当作为，不断开拓履职尽责新路子，努力干出基层政协新样子。</P><P>　　创新基层组织架构，打造有深度的履职阵地。针对县区政协“两个薄弱”问题，我们在创建政协基层组织、打造履职阵地、建立履职机制上探索创新，推动区政协工作向乡（街）、村（居）延伸，扩大政协工作覆盖面和影响力。进一步明确政协基层组织“怎么建”“干什么”“怎么干”。</P><P>　　创新协商民主机制，打造有广度的履职平台。探索形成了“百姓点事、两委提事、居民议事、与会决事、多元办事、公众评事”的城乡社区协商“六事”工作机制。推出“共商烦心事”基层协商品牌，围绕小区物业服务管理、乡街低保审批听证等基层社会治理难题，丰富了共建、共治、共享的基层社会治理实践。</P><P>　　创新服务管理品牌，打造有温度的履职队伍。出台加强和改进基层政协履职能力建设的实施意见，推动委员增强履职本领、强化责任担当，以一线思维、一流标准履职尽责，努力实现由注重“做了什么”“做了多少”向“做出了什么效果”转变。</P><P>　</P><P>　　合力加强市县政协工作</P><P>　　吉林省政协主席&nbsp;江泽林</P><P>　　在中共吉林省委领导下，吉林省各级党委有力有序推进解决市县政协基础工作薄弱、人员力量薄弱问题，为更好发挥专门协商机构作用创造了有利条件。</P><P>　　坚持党的领导，为加强市县政协工作提供坚强保证。召开省委政协工作会议，制定出台贯彻实施意见，省政协党组具体推动落实。吉林省委结合贯彻落实党的十九届四中全会精神，对标对表中央政协工作会议部署和中央文件，制定出台加强和改进政协工作的实施意见，将“加强市县政协建设”单列一章，提出12项具体要求。把贯彻落实中央政协工作会议精神作为一项重大政治任务，按照省委政协工作会议要求，充分发挥把方向、管大局、保落实作用。</P><P>　　坚持从规范优化机构编制入手，集中力量解决市县政协人员力量薄弱问题。坚持以“吉思广益”协商品牌为统领，以案例方式推动市县政协做好协商搭台工作。省政协指导市县政协把握政协性质、定位和职能，把协商作为主要工作，把“搭台”作为主要工作方式，把双向发力作为工作主旨，充分发挥市县政协在国家治理体系和治理能力现代化中的重要作用。</P><P>　</P><P>　　加强思想引领&nbsp;汇聚强大合力</P><P>　　广东省政协主席&nbsp;王&nbsp;荣</P><P>　　广东省政协持续深入学习贯彻习近平总书记重要讲话和中央政协工作会议精神，把加强思想政治引领、广泛凝聚共识作为履职工作的中心环节，扎实做好凝聚共识工作，努力为实现中华民族伟大复兴的中国梦汇聚强大合力。</P><P>　　在思想引领、交流交往中增进政治认同、制度认同、文化认同。我们始终牢记习近平总书记要求广东实现“四个走在全国前列”、当好“两个重要窗口”的殷切期望，充分发挥人民政协独特优势，引导社会各界不断增进对中国共产党和中国特色社会主义的政治认同，提升中国特色社会主义制度影响力和中华文化感召力。</P><P>　　在协商互动、建言资政中凝聚改革发展共识。我们着眼双向发力，搭建务实管用的协商平台，健全协商机制，在协商中深化改革认识，在交流中达成发展共识，以人民政协制度不断完善推动更好凝聚共识。</P><P>　　在以诚待人、正向传播中为中国共产党有效治理国家厚植政治和社会基础。广东经济社会繁荣，非公有制经济人士、新的社会阶层人士众多，利益诉求复杂多元，我们创新凝聚共识的方法手段，拓宽面向社会传播的渠道，努力将人民政协制度优势转化为社会治理效能。</P><P>　</P><P>　　坚持党建引领&nbsp;积极履职尽责</P><P>　　北京市政协主席&nbsp;吉&nbsp;林</P><P>　　在中共北京市委领导下，北京市政协积极进行探索实践，努力把中央政协工作会议的各项要求贯穿于履职全过程、覆盖到工作各方面。</P><P>　　坚持党建引领，推进党的组织和工作全覆盖。一是构建全覆盖的组织体系，成立市政协机关党组，承担机关党建主体责任；成立各专委会分党组，发挥政治引领作用；成立22个履职临时党支部，党员委员全部编入各履职临时党支部。二是构建全覆盖的联络机制。明确党组成员联系党外副主席、党外副秘书长和联系专委会、界别、新的社会阶层人士的工作分工，各专委会分党组、履职临时党支部分层联系党外委员，实现联系工作常态化。三是构建全覆盖的工作架构。制定党员委员发挥先锋模范作用的实施意见等。</P><P>　　着眼凝聚共识，推进理论学习全覆盖。我们切实把加强思想政治引领、广泛凝聚共识作为履职工作的中心环节，全方位多渠道强化科学理论武装。进一步健全完善协商平台，深入开展专题协商、对口协商、界别协商、提案办理协商、网络议政远程协商，专门协商机构的功能得到强化。</P><P>　　强化责任担当，推进委员联系群众全覆盖。我们召开专题常委会议制定加强委员联系群众工作的意见，鼓励和支持委员密切联系群众，积极履职尽责。</P><P>　</P><P>　　聚焦中心任务&nbsp;完善制度建设</P><P>　　江苏省南通市政协主席&nbsp;黄巍东</P><P>　　近年来，南通市政协在中共南通市委领导下，把制度建设作为打基础、管根本的重要工作来抓，推动政协工作提质增效，提升专门协商机构制度效能。</P><P>　　聚焦党政中心任务，建立双向发力机制。建立市委、市政府领导领办督办市政协重点协商议政成果和重点提案机制，内容从重点提案扩大到重点协商议政成果，对象拓展到市委、市政府主要领导和全体市委常委，安排从年度计划变成制度化领办督办。</P><P>　　参与基层社会治理，完善协商民主机制。强化“协商于民、协商为民”，紧扣“搭建平台、确定议题、明确主体、商前调研、开展协商、报送成果、转化落实、评估质效”八个关键环节，聚焦党政关注的要事、民生改善的实事、社会治理的难事。</P><P>　　提升政协工作质效，优化固本强基机制。树立鲜明质量导向，改进政协内部运行机制，彰显专委会基础性作用、界别优势作用和委员主体作用。创新专委会工作机制，按照机构设置、力量配备、工作规范、绩效考评的总体思路，完善专委会制度机制。按照以岗选人、优化结构、整体联动原则，统筹配置专委会所有人员。</P><P>　</P><P>　　把党的建设作为重中之重</P><P>　　天津市政协主席&nbsp;盛茂林</P><P>　　天津市政协深入贯彻中央政协工作会议精神，落实市委政协工作会议部署，把党的建设作为重中之重，以建立市政协党组成员与区政协党组成员谈心谈话制度为抓手，切实加强对区政协党建工作指导，积极探索更好发挥专门协商机构作用的新举措。</P><P>　　我们开展市、区政协党组成员谈心谈话，有别于一般党内谈心谈话，重在把握和体现上下级政协指导关系，力求指导到位不越位、聚焦党建促履职、共勉共进有实效。注重广泛性，做到应谈尽谈；注重针对性，坚持问题导向；注重深入性，营造宽松氛围；注重双向性，平等坦诚交流；注重实效性，推动改进工作。</P><P>　　谈心谈话增强了责任，有利于强化区政协党组成员管党治党责任意识；增强了担当，有利于区政协党组充分发挥在政协工作中把方向、管大局、保落实的重要作用；增强了自律，有利于推动全市各级政协政治生态持续净化；增强了合力，有利于有效提升人民政协制度整体效能。</P><P>　　通过谈心谈话，进一步增进市、区政协间的沟通互动，加强和改进工作指导，推动解决基层政协工作存在的实际困难，提升政协整体履职能力和水平。</P><P>　</P><P>　　开展“院坝协商”&nbsp;助力基层治理</P><P>　　四川省绵竹市政协主席&nbsp;侯光辉</P><P>　　近年来，绵竹市政协自觉坚持党对政协工作的全面领导，搭平台、建机制、立规则，推进政协协商向基层延伸，把政协制度优势转化为基层治理效能。</P><P>　　我们推动的“院坝协商”坚持以政协为主导，以委员为主体，在村社区成立由政协委员和有威望、有影响的人士组成的协商议事会，由委员担任召集人。按照“不建机构建机制”的原则，指导镇村搭台子、想法子、找路子，统筹推进基层协商民主建设工作。协商议题选择坚持“两议三不议”，即议事关村社区发展和群众高度关心之事，不议有悖于公序良俗的、法规明文规定的以及个体利益纠纷之事。坚持小事简议、急事快议、大事重议的协商原则，建立调研走访、议事流程、协商规则和协商成果转化运用等制度，形成可操作的“院坝协商”模式。</P><P>　　一年来的工作实践，我们深深体会到，“院坝协商”坚持由党委领导，政协搭台，群众有序广泛参与，有利于加强党在基层的领导，画出最大同心圆，也推动解决了一些党政所想、群众所盼的基层治理难题。在“院坝协商”中，委员当主角、担重任，更有利于发挥委员主体作用，体现政协担当，充分彰显了政协在基层治理中的重要作用和独特优势。</P><P>　　（本版内容以发言先后为序）&nbsp;</P> <br><span id='paper_num'>　　《 人民日报 》（ 2020年08月25日 16 版）</span>]]></description>
        </item>
        <item>
            <title><![CDATA[茅坡村的变化为什么这么大（深度关注·党建引领基层治理④）]]></title>
            <link>http://politics.people.com.cn/n1/2020/0825/c1001-31835093.html</link>
            <pubDate>2020-08-25</pubDate>
            <author>本报记者 孙 超</author>
            <description><![CDATA[<TABLE class="pci_c" width="400"><TBODY><TR><TD align="center"><IMG src="http://paper.people.com.cn/rmrb/images/1/20200825/1598295165434_1.jpg"></TD></TR> <TR><TD><p>　　茅坡村驻村干部（右一）走访村民。<BR/>　　资料照片</p></TD></TR></TBODY></TABLE><TABLE class="pci_c" width="400"><TBODY><TR><TD align="center"><IMG src="http://paper.people.com.cn/rmrb/images/1/20200825/1598295172254_1.jpg"></TD></TR> <TR><TD><p>　　研学师生在茅坡村体验生活。<BR/>　　资料照片</p></TD></TR></TBODY></TABLE><TABLE class="pci_c" width="400"><TBODY><TR><TD align="center"><IMG src="http://paper.people.com.cn/rmrb/images/2020-08/25/17/rmrb2020082517p34_b.jpg"></TD></TR> <TR><TD><p>　　茅坡村古村落景色。<BR/>　　资料照片</p></TD></TR></TBODY></TABLE><P>　　“村里只有30个党员的时候，支部可以带领全村900个劳动力，建起一座大桥。到了村里有60多个党员，为什么反而干不成事，最后还闹成那样呢？”这个想不通的人，是湖南怀化溆浦县北斗溪镇茅坡村老支书宋先才。</P> <P>　　“闹成那样”，指的是村里前几年的景象。2016年由九溪江乡桐林村和北斗溪镇茅坡村合并为新的“茅坡村”。</P> <P>　　“干任何事情都有人反对，不干事情，又被指指点点，只能撂担子。”前任支部书记梁毓掌说，最多的时候，一年之内，村里有150多人次向上级反映问题。至于产业发展，更是乏善可陈。2014年，1698人的茅坡村，有贫困户108户406人。</P> <P>　　眼看着紧邻村子的溆浦南站高铁站建起来了，周边的雪峰山片区旅游就要火起来。难得的发展机遇面前，茅坡村究竟怎么走出困境，抓住机遇奋力突围？</P> <P>　　挖病根：说话没人听，干事没人跟，背后是党组织软弱涣散</P> <P>　　茅坡村不是没搞过建设。</P> <P>　　前几年，按照上级统一规划，村里进行了大规模风貌改造，兴建了通组公路。当时的村支部书记梁和仕忙前忙后快两年，村子大变样，可是从开工到完工，群众“告状”就没断过。</P> <P>　　“钱根本不经村干部手，村民却总是怀疑我在里面赚了不知道多少钱。修路占了一点菜园，挨着了一点宅基地，补偿肯定是东家多一点，西家少一点。老百姓为了这个，闹了很多矛盾。”当过村支书的梁和仕、梁毓掌也接过话茬：“有时候村里做点工程建设，有村民就以各种理由去阻止施工。”</P> <P>　　村里也不是没搞过产业。</P> <P>　　2016年，村里发展小龙虾养殖，没想到还没见成效，养殖基地所在区域就被征收，项目半途而废。红心蜜柚产业也曾被寄予厚望，但偏偏那块地多年以前堆过矿渣，柚子树根本长不好。“我们当时觉得，遇到这种不可抗力，总不能怪我们吧，何况征地有补偿，可老百姓意见还是很大。”梁和仕说。</P> <P>　　真的是村民的问题吗？</P> <P>　　“别说老百姓不满意，我作为党员，也有话说。”村民陈立勇常年在外地管理企业，和村里利益牵涉少，大家都认为他能说公道话。</P> <P>　　“我党龄十几年，不知道是不是党支部把我忘记了。”陈立勇说，“不管是种水果，还是搞养殖，事前我完全不知道。”</P> <P>　　“党务、村务、财务三公开不够，老百姓很多事情不了解，只看见村支书自己在忙，能不传闲话吗？公路规划有几次微调，这本来也正常，但事前没和大家讲清楚。有些人家已经拿了补偿款，因为调规又要归还，老百姓能没有怨言吗？”老书记宋先才说。</P> <P>　　“这些问题只是病症，根子上是村党支部建设出了问题。我看过台账，这几年，党支部多久没有开过一次整整齐齐的党员大会了？村干部有多久没有好好进村民家里做工作了？我也参加过你们的支委会，书记只顾着压任务、下指令，工作方法简单，我看不光普通党员群众不服你们，就是村两委其他干部也有不满意的地方。”北斗溪镇党委组织委员黄军的一番话，点出了党组织软弱涣散的症结问题。</P> <P>　　2018年，眼看着就要脱贫的茅坡村却得了一顶“软弱涣散村”的帽子。这是一个让人“丢面子”的警告，却给问题的解决，提供了一个契机。</P> <P>　　开药方：内抓组织生活，外抓联系群众，把党组织建成战斗堡垒</P> <P>　　80后党员梁杰担任了村党支部书记。</P> <P>　　“干过两年支委，又经历了村里这么多事，我从心里知道，党的建设不是虚的，更不能是软的。”梁杰说，一把钥匙开一把锁，哪里出了问题，就从哪里补课。新书记抓党建，就从严肃组织生活，抓好会风会纪开始。</P> <P>　　“以前党员大会，坐的稀稀拉拉，还有人在下面开小会、玩手机。”“三会一课”制度，前任支部书记也不是不想落实。但是多年来一直在矿上工作的他，面对支部事务，没有经验，没有抓手，只能干着急。</P> <P>　　在村全体党员的微信群中，梁杰把北斗溪镇党员管理“十条红线”再次重申传达。当年的“七一”组织生活会上，村党支部进一步规范了党员管理制度，村班子的谈心谈话也更深更实。每次开会，镇纪委书记伍长安都指派干部，与村纪检委员一起“查岗”，清点人数。连续两次不到，就要全村通报。</P> <P>　　形式上开好了会，内容上也要提高质量。民主生活会上，梁杰主动自我剖析，讲缺点，讲教训。村干部真正敞开心扉，批评与自我批评，心里藏了几年的疙瘩，慢慢解开了。为了提高党课质量，村里请来市委组织部联系茅坡村的领导，扶贫后盾单位也派人来上专题党课。“内容丰富，从脱贫攻坚到乡村振兴，再到基层治理、矛盾化解，讲的都是基层的例子，非常接地气，党员也都爱听。”村里新发展的预备党员梁永说。</P> <P>　　内抓组织生活，外抓联系群众。茅坡村党员包户，按照县委要求，开展民情恳谈，有事多帮忙，无事拉家常，融洽干群感情。</P> <P>　　茅坡村找到了新项目，建立起种养农民专业合作社，发展土鸡养殖产业。“按照县里要求，全村所有党员入户做工作，收集意见。我才发现，工作做通了，老百姓是这么支持。”梁杰说。</P> <P>　　正在这时，一个更大的机会摆在了茅坡村面前，也考验着新一届村两委的引领带动能力。</P> <P>　　迎挑战：4个村民小组70多户村民连夜签名按手印</P> <P>　　接，还是不接？今年4月，村委会议室里，一个问题摆在梁杰带领的这一届村委面前。</P> <P>　　溆浦县北斗溪镇准备依托当地花瑶文化、田园美景，以及便利的交通，争创湖南十大特色文旅小镇。其中研学游一项，招商、市场都已经落实，正在寻找可以承接的村子，茅坡村正是备选地之一。</P> <P>　　接，茅坡村是第五批中国传统村落，又有成片的集中建房区，搞研学，各方面都很成熟。可是两年前还是矛盾重重的村子，再碰到这样的大项目，有矛盾可怎么办？</P> <P>　　不接，自然不会有矛盾。但是未来的热门线路将绕村而过，村里发展就耽误了。</P> <P>　　“商量下来，大家一致认为要敢于担担子。”梁杰说，“干部们相信，这一次村民们会和我们站在一起。”</P> <P>　　机会不等人，干部们决定连夜开展工作。</P> <P>　　干部分成几组，村民小组长、普通党员、群团组织都加入进来，在涉及项目的区域，逐户征求意见。</P> <P>　　也有人担忧。“项目还没个谱呢，光改造自己房子，可能就要花几万块钱，搞黄了怎么办？”村民阳吉高说。和他一样，很多村民都表达了担忧。“村里先拿下项目，后续我们再商量。只要你们相信村两委，一定不会让大家吃亏。”入户做工作的村民小组长，同时也是村里红白理事会副会长的徐兴平说。</P> <P>　　同样是上大项目，这一次，没有冲突，没有争吵。面对机会，村民们虽然不乏担忧，但绝大多数原则上同意。</P> <P>　　第二天一早，一份带着4个村民小组70多户村民连夜签名按手印的同意书，摆在了北斗溪镇党委书记梁金华面前。“我看了那个集体签名，非常感动。”梁金华说。</P> <P>　　为迎接项目选址考察，党员带领下的群团组织又出力了。老书记宋先才带着老人协会在村组巡查。党员和群众一起，清理房前屋后的杂物和垃圾。</P> <P>　　不久，研学项目落地茅坡村。村党支部和合作社为村民争取利益，与研学企业签订了每户每年3万元的保底收入协议。每一排房子，安排一名党员干部负责沟通服务。</P> <P>　　短短两个月时间，第一批8户民居改造完工。6月6日，村里迎来了第一批200人研学师生，他们在古寨里听课，在玉米地里劳动，在青山绿水间感受湘西的魅力。目前，全村已接待4批学生共800人。人气渐旺的茅坡村，如今成为附近村庄羡慕的对象。</P> <P>　　今年7月，北斗溪镇被评为2020年湖南十大文旅小镇，越来越多的新项目正在开工建设，更美好的前景展现在了茅坡村的干部群众面前。</P> <br><span id='paper_num'>　　《 人民日报 》（ 2020年08月25日 17 版）</span>]]></description>
        </item>
        <item>
            <title><![CDATA[查处诬告陷害 及时澄清正名（监督哨）]]></title>
            <link>http://politics.people.com.cn/n1/2020/0825/c1001-31835094.html</link>
            <pubDate>2020-08-25</pubDate>
            <author>本报记者 赵 兵</author>
            <description><![CDATA[<P>　　今年4月，山东烟台市芝罘区纪委监委接到某电子公司职工陈某举报，称芝罘区人社局工作人员李陆平冒领其生育报销费用且拒不退还。事关群众切身利益，区纪委监委立即成立调查组，按程序进行调查核实。</P> <P>　　“明明是好心帮忙，却被恶意陷害，真是感到心凉。”李陆平在调查谈话时表达了委屈，并现场提供了陈某当时手写的收款收据，相关金额、签名都准确无误。经过与当事人及相关人员的几轮谈话，调查人员初步发现事情比较曲折，陈某的举报有问题。为了进一步明晰真相，调查组多方调取证据材料。</P> <P>　　在医院报销窗口监控视频中，调查组发现陈某在窗口待了近2小时，其间多位工作人员解释无果。与此同时，调查组掌握的陈某的社保缴费记录、生育保险报销单据等情况也与举报内容不符。</P> <P>　　真相渐渐浮出水面。陈某在办理生育保险报销时，住院费用发票遗失，根据规定，必须出具个人声明并加盖市医保中心公章才可完成报销。而陈某选择了非工作日的周六去办理报销业务，无法盖章。</P> <P>　　“由于陈某坚持要求在当天必须拿到报销费用，为尽快解决她的诉求，我在征得其同意后，借自己亲戚的钱垫付了报销费用，想着让李陆平同志改天拿她的报销材料到医院报销。她当场也手写收款收据并签字确认，没想到回来就捏造事实到处污蔑小李，并且反复通过电话进行恶意投诉，给单位和工作人员造成了不良影响。”芝罘区人社局有关负责人解释道。面对一系列证据，陈某前言不搭后语，难以自圆其说，最终承认是想通过诬告陷害获得一些好处。</P> <P>　　芝罘区纪委监委将问题线索移送公安机关，并为李陆平专门召开了澄清正名的会议，就信访举报调查结果进行通报，对检举控告失实的具体问题进行公开澄清，并在媒体发布澄清正名公告，以最大限度消除负面影响，还清白者以清白。</P> <P>　　</P> <P>　　【执纪者说】</P> <P>　　纪检监察机关作为政治机关，既要用党的纪律约束党员干部，又要用党的政策保护党员干部，激励干部担当作为。下一步，我们将继续查处打击诬告陷害，加大容错免责、澄清正名工作力度，既集中查处问题，也集中通报典型案例，进一步释放信号，推动构建激浊扬清、干事创业的良好政治生态。</P> <P>　　——山东烟台市芝罘区纪委书记、监委主任&nbsp;姜雪宁</P> <br><span id='paper_num'>　　《 人民日报 》（ 2020年08月25日 17 版）</span>]]></description>
        </item>
        <item>
            <title><![CDATA[攥指成拳 生威发力]]></title>
            <link>http://politics.people.com.cn/n1/2020/0825/c1001-31835095.html</link>
            <pubDate>2020-08-25</pubDate>
            <author>姚雪青 钱 艳 宋 岩</author>
            <description><![CDATA[<P>　　“现在河水清了，又能挑水浇菜了。”江苏省泰州市姜堰区大伦镇红旗河边，村民曹秀珍正拿着水桶舀水。</P><P>　　然而，之前这里却是另外一番景象。连续闷热、多雨的天气，河中的绿萍水草大量繁殖，混杂着零星的渔网，严重影响了生态环境。</P><P>　　为助力打赢水污染防治攻坚战，姜堰区纪委监委紧盯上级河长办通报问题整改情况及2020年对村（社区）常规巡察中发现的河道共性问题，对全区存在问题的38条河道整改落实情况进行专项核查。</P><P>　　“你镇红旗河大张线南侧有大量绿萍、水葫芦等，请认真进行调查核实，对发现的责任心不强、履责不力等形式主义官僚主义问题，严肃追究相关人员责任……”针对督查中发现的问题，该区纪委迅速向大伦镇纪委下发了问题督办单。同时，将相关情况反馈给驻区水利局纪检监察组。</P><P>　　姜堰区纪委监委有关负责人介绍，为推动政治监督做精做准、具体化常态化，姜堰区纪委监委聚焦政治监督，一体推进纪律监督、监察监督、派驻监督、巡察监督等四项监督，建立健全统筹协调联络、政治生态研判、挂联督导推动等六项机制，构建纪检监察（巡察）“146监督体系”。</P><P>　　“张甸中学出租200平方米土地给苏果超市使用，但实际被占面积远超协议面积……”今年初，姜堰区委第一巡察组完成了对全区5所学校的常规巡察，巡察报告中“集体资产管理不力”一项引起了驻区委教育工委纪检监察组的注意。</P><P>　　意识到这一廉政风险隐患，派驻纪检监察组在强化巡察整改日常监督的基础上，督促区教育局在全区范围内组织专项清理整治，同时建议其出台相关制度、采取有效措施从源头把控。</P><P>　　“260平方米超出面积所追缴租金费用合计13万元已到账”“食堂闲置锅炉已进入招投标程序”……如今，该区纪委监委第十一派驻纪检监察组工作人员只要一打开校资管理平台，各校入账登记、资产变动、资产处置等情况便一目了然，既方便学校摸清“家底”，也方便派驻纪检监察组开展日常监督。</P><P>　　自“146监督体系”全面推行以来，今年上半年，全区围绕疫情防控、三大攻坚战、扫黑除恶、优化营商环境等重大决策部署落实情况开展监督检查，发现并督促问题整改87个。</P><P>　　“随着全覆盖格局的形成，找到他们之间的最大‘公约数’成为全区工作的着力点。”姜堰区委负责同志说，通过“146监督体系”，压实各监督主体的职责，推动各项监督协调联动，有机贯通，让监督力量攥指成拳，生威发力，把制度优势真正转化为区域治理效能。</P> <br><span id='paper_num'>　　《 人民日报 》（ 2020年08月25日 17 版）</span>]]></description>
        </item>
        <item>
            <title><![CDATA[减成本 增服务]]></title>
            <link>http://politics.people.com.cn/n1/2020/0825/c1001-31835079.html</link>
            <pubDate>2020-08-25</pubDate>
            <author>本报记者 宋豪新</author>
            <description><![CDATA[<P>　　最近，四川成都新都区马家镇双龙村，山前美学艺术空间的生态菜园里，茄子、豆角、辣椒长势喜人，各种色彩交相辉映，田园风光很是可爱。</P><P>　　“去年底到今年3月，正赶上我们‘搬新家’，前后投入了近100万元，但受到疫情影响，原本以为撑不下去了，还好新都区水务局为我们救了急。”艺术空间负责人韩鼎说，如今，心中一块大石头终于落下。</P><P>　　山前美学艺术空间由一群热衷自然美学的“90后”发起成立，旨在开发生态农产品、打造特色鲜明的农业IP。今年初，团队看中双龙村得天独厚的自然资源优势，将企业主体搬到这里。当时，受疫情影响，为避免面对面接触，新都区大力推广“不见面服务”，为企业办理政务手续提供便利。</P><P>　　“我们主打生态农业，拥有近70亩地，急需在新址通水，解决供水问题。”韩鼎说，3月初，自己用手机在线上提交了办理用水接入手续，当天下午就得到响应，新都区香源供水有限责任公司迅速上门，帮助实现通水，整个过程只用了1天半。</P><P>　　“政策及时雨，帮了我们大忙。”新都区某合资食品企业的负责人罗成鑫给记者算了一笔账，疫情防控期间，企业缓缴3月份水费347112元，减免违约金5544.12元，企业现金流得到保障，资金压力大大缓解。</P><P>　　中粮可口可乐饮料（四川）有限公司、四川科伦药业股份有限公司等企业虽不在用水优惠政策执行范围内，但考虑到企业实际运转困难，新都区水务局参照暂缓收取水费政策，允许企业延期缴纳费用。</P><P>　　通过一站式服务，让用户“零跑路”。记者了解到，过去用户在当地办理供水事项时，涉及的所有环节必须亲力亲为。疫情防控期间，新都区水务局通过线上平台办理业务，用户在办理供水事项的过程中，可以通过“新都供水”微信公众平台进行网上查询和缴费。此外，还可在线办理用水报装申请、查询业务办理进度以及工程价格清单。</P><P>　　疫情防控期间，新都区水务局通过短信、微信平台等向全区30万用户宣传了用水保障措施。截至目前，香源供水有限责任公司已为全区域内相关企业兑现用水优惠政策，惠及区内15025家企业。</P> <br><span id='paper_num'>　　《 人民日报 》（ 2020年08月25日 07 版）</span>]]></description>
        </item>
        <item>
            <title><![CDATA[前7月北京城市副中心固定资产投资实现正增长]]></title>
            <link>http://politics.people.com.cn/n1/2020/0825/c1001-31835078.html</link>
            <pubDate>2020-08-25</pubDate>
            <author>人民网</author>
            <description><![CDATA[<P>　　本报北京8月24日电&nbsp;&nbsp;（记者贺勇）今年以来，北京城市副中心克服疫情影响，扎实推进工程建设，主要经济指标回升态势明显。今年1—7月，副中心完成固定资产投资509.2亿元，同比增长5.6%，完成建安投资270.8亿元，同比增长0.3%，双双实现正增长。</P><P>　　面对76项重点工程要在年内实现开工的重任，北京市8月24日举行工程建设推进动员大会，发起为期120天的副中心建设大会战，确保完成年度建设目标。为加强对重点工程建设的政策保障，副中心党工委管委会近期陆续出台了《关于加快北京城市副中心重点工程开工建设优化招标前置条件的若干措施》等4项副中心工作措施，紧紧围绕立项手续、项目招标、规划前期、施工保障等4个方面，加快推进重点项目手续办理，推动工程开工落地。</P> <br><span id='paper_num'>　　《 人民日报 》（ 2020年08月25日 07 版）</span>]]></description>
        </item>
        <item>
            <title><![CDATA[拧成一股绳 合力拔穷根（聚焦基层党建）]]></title>
            <link>http://politics.people.com.cn/n1/2020/0825/c1001-31835090.html</link>
            <pubDate>2020-08-25</pubDate>
            <author>本报记者 朱佩娴</author>
            <description><![CDATA[<P>　　核心阅读</P><P>　　习近平总书记强调，要加强乡村两级基层党组织建设。河南省南召县打破行业、条块、隶属、地域等限制，采取组织联建、产业联推、服务联动，把脱贫攻坚中有关联的党员联合起来，组建临时党组织，努力为群众办成事、办好事。</P><P>　　</P><P>　　两年前，河南省南召县乔端镇八里湾村民张伟一家搬下山，住进白河新村150平方米的搬迁房。不愿意再当贫困户的他，去年代表全家6口申请脱贫，却没被批准。</P><P>　　原来，张伟的母亲和妻子身患重病，儿女都在上学，虽然种草药又打零工，日子也只是“能过”，想稳定脱贫并不乐观。今年4月份，镇里整合李长君等3名党员与张伟之前的帮扶人、当地派出所民警辛振安“叠加帮扶”，全力助他高质量脱贫。“众人拾柴火焰高，提前脱贫我有信心。”张伟说。</P><P>　　南召县去年摘帽，目前还有2456户5401人未脱贫，是河南挂牌督战县之一。党员叠加帮扶怎么充分发挥作用？脱贫攻坚中受行业、条块、隶属、地域限制的“堵点”如何打通？南召县采取组织联建、产业联推、服务联动等形式，把脱贫攻坚工作有关联的党员联合起来，建立一个个临时性党组织，通过党建引领，抓重点、解难点、通堵点，有效巩固脱贫成果。</P><P>　　“不归我管”怎么管好？</P><P>　　一些资源统筹不到位、一些服务还缺位，临时党组织解决棘手难题</P><P>　　白河新村两期共有328户易地搬迁村民，不乏“一辈子的老山民”。入住新房一年多，部分老人反映“电不好用”，理由让人啼笑皆非，“电灯泡老灭，我们点不着。”</P><P>　　社区请电工检查，很快得到回复：“线路没问题，跳闸是用电不规范，不归供电部门管。”“确实有规定，电工管室外，居民管室内。”社区党支部书记王遵义说，社区给老人普及用电知识，效果一直不佳。</P><P>　　“不归我管”，这样的话在基层并不鲜见。南召县委常委、组织部长薛江峰介绍，近年来，南召县动员4700多名机关干部到一线扶贫，尽管成绩不小，但各种资源统筹还不够到位，一些服务还缺位。</P><P>　　“主要体现为指挥不畅、专班不专、基层力量薄弱、横向不通、层级过多。”薛江峰说，比如一遇到困难，基层大多找领导开会协调。“大会小会不断，看似都能管，实则很难管。”</P><P>　　今年5月19日，通过梳理群众反映的问题，乔端镇脱贫攻坚易地搬迁临时党支部列出15项清单，要求各党小组逐条落实。第三条“跳闸”问题，交给了“基础建设党小组”办理。</P><P>　　临时党组织成立原则为“因需而联、应联尽联”。于是，临时党支部把镇供电所所长郑朝强拉进党小组。作为党小组成员，郑朝强联系两名电工，挨个到“跳闸”住户家走访。原因很快查清：新村电路是“暗线入墙”，不少村民在墙上钉铁钉造成短路。郑朝强带电工为村民标明暗线位置，重新选定钉子位置，问题很快解决。</P><P>　　临时党支部书记、副镇长李强介绍，“联党员、建支部，只有一个目的——解决事儿。”目前，白河新村临时党支部共有40多名党员，设立了结对帮扶、维护治安、矛盾调解、卫生保洁和基础建设5个党小组。村子附近的派出所、供电所、司法所、水利站以及民营的漂流公司等10多个单位，多方叠加发力，一个个棘手问题得到解决。</P><P>　　“沟通不畅”怎么畅通？</P><P>　　各种力量在扶贫中联系不够，临时党支部推动机构扁平化、服务精细化</P><P>　　“解决这种事，以前至少三五个一把手出面。”近日，一起国储林项目与村民纠纷解决，让南召县林业局局长吕永钧感慨不已。</P><P>　　南召县国储林项目总投资15.37亿元，是县里带动贫困户脱贫的大项目。林业局牵头成立的国有森源林业发展有限公司，连片种植5.5万亩辛夷、杜仲、玉兰等，林下还套种白芨、芍药等中药材，惠及群众10余万人。去年土地流转困难，今年更是“难上加难”。</P><P>　　柴岗曾是个党建工作薄弱村。部分村民见项目大量流转土地，纷传“闹就能沾光”。承包户董某想争取更多利益，多次找村干部去闹，项目被迫暂停。</P><P>　　5月份，上店玉兰博览园国储林基地临时党支部成立，4个乡镇8个村精干党员加入。</P><P>　　“董某姐姐在上店村担任村干部，这件事董某做得不对，让他姐姐说他。”经过临时党支部副书记孙贵生等人几天的劝导，董某的思想做通了。</P><P>　　经过反复酝酿、实地调研、集中论证，南召县在15个乡镇设立临时党总支，下设178个临时党支部，加上县临时党委所辖的3个临时党总支、19个临时党支部，全县共发动5588名党员深入参与决战决胜脱贫攻坚。</P><P>　　结构看似复杂，服务群众却更直接。县委常委、副书记王稚认为，“临时党支部增加了党支部数量，减少了沟通成本，实现了机构扁平化、服务精细化。”同时，“临时性”更凸显出“机动性”意义，在决战决胜脱贫攻坚中，19个县属专项支部对上能统筹资源，对下能把资源直通基层，“各方交叉发力，既有统揽性，也有针对性。”王稚说。</P><P>　　“干劲不足”怎么补足？</P><P>　　分级建立考核台账，适当倾斜资金和政策，调动党员积极性</P><P>　　临时党组织只为扶贫攻坚，并不发展党员，最终也会撤销，对党员能有多大约束力？</P><P>　　“组织主建，扶贫主战。脱贫攻坚是政治任务，每个党员都有责任。”南召县委书记刘永国说。为进一步提高临时党组织的党员积极性，南召县委专门下发意见，明确组织原则、督查考评和约束奖励等机制，为临时党组织运行提供了保证。</P><P>　　意见明确要求，全县统筹监督力量，充分运用纪律监督、组织监督和行业监督方式，对工作推进实现无缝衔接。临时党组织的所有党员都要接受党组织的领导，积极履行义务，主动开展工作，对不服从领导的，视其情节给予组织和纪律处理。</P><P>　　临时党组织执行力强不强？酵素产业临时党支部副书记、南召县恒利康生物科技股份有限公司董事长李恒最有感触：“我们公司涉及鲜果农产品收购、运输、仓储、生产、销售等多项业务。通过临时党支部开展工作，涉及各个环节的党员都主动上前想办法，打通了很多困扰我们业务的堵点和难点。”</P><P>　　“奖惩结合，才能激发干劲。”薛江峰介绍，对运行情况良好、作用发挥充分、群众反映较好的临时党组织，在政策资金等方面给予适当倾斜；对党建工作开展不力、引领作用发挥不明显的党组织，及时进行挂牌整顿提升，对党组织负责人进行组织处理。</P><P>　　此外，南召县组织部门科学制定考核办法和评价标准，对临时党组织在脱贫攻坚政治引领、作用发挥、实绩成效等情况分级建立考核台账，而且日常督查考评与年终考核相结合，并把考核结果作为临时党组织和党组织负责人年度考核、评先评优的重要依据。</P><P>　　“我们将继续探索高效便捷协调工作机制，把党组织建在产业链上、工作链上，充分发挥党组织引领作用，进一步增强凝聚力、战斗力，抓实抓细脱贫攻坚工作。”刘永国说。</P> <br><span id='paper_num'>　　《 人民日报 》（ 2020年08月25日 15 版）</span>]]></description>
        </item>
        <item>
            <title><![CDATA[工程建设项目审批省市联办]]></title>
            <link>http://politics.people.com.cn/n1/2020/0825/c1001-31835080.html</link>
            <pubDate>2020-08-25</pubDate>
            <author>人民网</author>
            <description><![CDATA[<P>　　本报沈阳8月24日电&nbsp;&nbsp;（记者胡婧怡）日前，辽宁出台《辽宁省工程建设项目审批“省市联办”实施方案（试行）》，破解省市两级工程建设项目审批平台不互通、项目审批跨层级中断等难点问题，实现了工程建设项目审批全流程“一次录入，一网通办”。</P><P>　　实行“省市联办”前，涉及办理省级审批事项时，建设单位需单独登录省一体化平台进行办理，重新填写申报表单、提交材料，增加了办理环节和成本。</P><P>　　在深化项目审批制度改革中，辽宁按照工程建设项目审批“全流程、全覆盖”的要求，在项目审批“一网通办”的基础上，通过整合工程建设项目审批相关业务平台，打破了不同层级、不同区域、不同部门之间的信息壁垒，形成了项目审批跨区域、跨层级、跨部门协同联动的工作机制，实现了“市级系统一窗申报、省级平台受理审批、数据线上流转、结果统一发放”的审批服务模式。</P> <br><span id='paper_num'>　　《 人民日报 》（ 2020年08月25日 07 版）</span>]]></description>
        </item>
        <item>
            <title><![CDATA[多做让群众受益的实事（一线行走）]]></title>
            <link>http://politics.people.com.cn/n1/2020/0825/c1001-31835091.html</link>
            <pubDate>2020-08-25</pubDate>
            <author>张志锋</author>
            <description><![CDATA[<P>　　扶贫要多做打基础、利长远的实事，持续用力，久久为功</P><P>　　</P><P>　　6月底，河北省阜平县最后832名贫困人口脱贫出列，贫困发生率从2014年建档立卡时的54.37%降至2019年底的0.45%。作为国家机关事务管理局第二十一批派驻阜平扶贫工作组成员，亲眼见证山乡巨变的雷伯勇连称不易。</P><P>　　刚到阜平扶贫时，雷伯勇正赶上脱贫攻坚“后三年”，剩下的都是“贫中之贫”“坚中之坚”。在各扶贫工作队的帮扶下，眼下的“穷”正慢慢改变。但他想得长远：“后三年”要实现预期脱贫目标，“三年后”更要能稳定致富。</P><P>　　那时，阜平的扶贫产业搞得有声有色，不少贫困户从中受益，渐渐看到了脱贫的希望。可一次下乡走访的遭遇，改变了他的想法。一位患有肺炎的贫困老人，久治不愈，常年吃药。家里人说，每到病情严重时，老人总是自责，“看病花了那么多钱，我成了家里的累赘。”雷伯勇听了很心酸，乡亲要奔小康，怎能少了健康。</P><P>　　当地村干部介绍，因病致贫在农村比较普遍，尤其是一些青少年。“孩子是农家的希望、农村的未来，苗子长不好，乡村振兴谁来挑大梁？”雷伯勇很着急。为此，他去年联系中华慈善总会资助，为全县4万多名青少年免费做体检，筛查出30多个急需做手术的孩子。</P><P>　　有人为此点赞，也有人建议：就这两三年帮扶时间，多干点惹人关注的大工程。搞健康筛查，谁能看见？万一出点差错，还惹麻烦。雷伯勇有自己的考虑：正因为时间短，更要做打基础、利长远的事。</P><P>　　健康筛查让雷伯勇更加意识到青少年在扶贫中的重要性，农村的未来在孩子，孩子的出路在教育。尽管办教育就像跑一场马拉松，投入多、见效慢，但只有这样才能斩断贫困的代际传递。</P><P>　　阜平县职教中心过去设在一个旧工厂内，每年招生三四百人，许多初中毕业生想来学技术，可惜招生名额有限。为了能让更多农村孩子学到一技之长，实现稳定的脱贫增收，经过雷伯勇和同事们的努力，国家机关事务管理局与阜平县职业教育中心合作创办了梦翔汽车培训基地，招收阜平等地学生。这些年已有2000多人学成上岗，每人年均收入4万多元，实现了“培养一人，就业一人，脱贫一家”。</P><P>　　雷伯勇经常去职教中心，全新的校园里，迎面是一张张朝气蓬勃的笑脸。两年多的扶贫经历，让他深深意识到，无论是健康筛查，还是兴办职教，都在为乡村振兴蓄力。虽然不会立竿见影，但只要持续用力，久久为功，播下种子就会生根发芽，长出一片新绿。</P><P>　　（作者为本报河北分社记者）&nbsp;</P><P>　　栏目投稿邮箱：yxxz8494@163.com&nbsp;</P> <br><span id='paper_num'>　　《 人民日报 》（ 2020年08月25日 15 版）</span>]]></description>
        </item>
        <item>
            <title><![CDATA[北方地区部分重点省市外贸外资工作座谈会召开]]></title>
            <link>http://politics.people.com.cn/n1/2020/0825/c1001-31835066.html</link>
            <pubDate>2020-08-25</pubDate>
            <author>人民网</author>
            <description><![CDATA[<P>　　新华社青岛8月24日电&nbsp;&nbsp;中共中央政治局委员、国务院副总理胡春华24日在山东青岛主持召开北方地区部分重点省市稳外贸稳外资座谈会。他强调，要深入贯彻落实习近平总书记重要指示批示精神，按照党中央、国务院决策部署，扎实做好“六稳”工作，全面落实“六保”任务，想方设法化解各种不利因素影响，切实稳住外贸外资基本盘。</P><P>　　北京、天津、河北、辽宁、山东、河南等北方地区外经贸重点省市有关负责同志出席会议。</P><P>　　胡春华强调，当前国际形势严峻复杂，对外贸外资稳定发展带来很大挑战。各地要增强紧迫感，坚持不懈做好稳外贸稳外资各项工作，更好服务于经济社会发展大局。外贸外资大省要在全国开放大局中找准自己的定位，努力发挥更大作用，为全国外贸外资发展多做贡献。要进一步加大开放力度，立足自身优势，着力打造对外开放新高地，带动周边地区外向型经济发展。要立足实际设定发展目标，并努力完成得更好。要把稳外贸稳外资各项工作做实做细，狠抓政策落地，全面加强对企业服务，积极培育新业态、新模式，为外贸外资稳定发展注入新动力。</P><P>　　会前，胡春华到青岛部分外贸企业和山东自贸试验区青岛片区，详细了解企业生产经营情况。他还到中国科学院海洋研究所和国家海洋牧场示范区考察海洋牧场发展情况。</P> <br><span id='paper_num'>　　《 人民日报 》（ 2020年08月25日 04 版）</span>]]></description>
        </item>
        <item>
            <title><![CDATA[黑龙江推进阳光采购服务]]></title>
            <link>http://politics.people.com.cn/n1/2020/0825/c1001-31835077.html</link>
            <pubDate>2020-08-25</pubDate>
            <author>人民网</author>
            <description><![CDATA[<P>　　本报哈尔滨8月24日电&nbsp;&nbsp;（记者郝迎灿）记者从黑龙江省国资委获悉：黑龙江阳光采购服务平台自2019年7月启动至今，为采购单位节省资金1亿元，综合节资率达4.02%。</P><P>　　据了解，黑龙江阳光采购服务平台是为企事业单位和金融机构招标采购搭建的第三方综合性市场化服务平台。平台自2019年7月24日上线，构建了“互联网+平台”的交易模式，实现了全流程线上操作。</P><P>　　截至今年7月31日，平台共完成采购项目906个，平均每月完成75.5个，采购总预算25.12亿元，成交金额24.11亿元，为采购单位节省资金1.01亿元，综合节资率达4.02%。</P><P>　　阳光采购服务平台还根据企业实际需求，不断创新，完善功能。开发了“白名单”系统功能，建立企业专属供应商资源库，开发直接竞价程序，量身打造系统，提升采购效率；增加了线上电子保函服务，截至目前已为供应商减少资金占用2000余万元。</P> <br><span id='paper_num'>　　《 人民日报 》（ 2020年08月25日 07 版）</span>]]></description>
        </item>
        <item>
            <title><![CDATA[用爱心回报爱心（点赞新时代）]]></title>
            <link>http://politics.people.com.cn/n1/2020/0825/c1001-31835065.html</link>
            <pubDate>2020-08-25</pubDate>
            <author>本报记者 张腾扬</author>
            <description><![CDATA[<div id='paper_pc_play' align="center" style="padding:10px 0 15px 0"> <embed id="MediaPlayer460" src="http://tvplayer.people.com.cn/player.php/xml/L3B2c2VydmljZS94bWwvMjAyMC82LzMwL2RmYmIxMTk0LTY2MjctNDFkZC04NzQ5LTQ3NjI1YWY3ODg3Zi54bWw=/skin/2/autonext/0/norecomm/1/playerByOsmf.swf" width="525" height="400" loop="true" autostart="true" wmode="transparent"></div> <TABLE class="pci_c" width="400"><TBODY><TR><TD align="center"><IMG src="http://paper.people.com.cn/rmrb/images/2020-08/25/04/rmrb2020082504p30_b.jpg"></TD></TR> <TR><TD><p>　　刘格格在四川凉山。<BR/>　　资料照片 </p></TD></TR></TBODY></TABLE><TABLE class="pci_c" width="400"><TBODY><TR><TD align="center"><IMG src="http://paper.people.com.cn/rmrb/images/2020-08/25/04/rmrb2020082504p21_b.jpg"></TD></TR> <TR><TD><p></p></TD></TR></TBODY></TABLE><P>　　去年11月的一场车祸，让一名叫刘格格的女孩受了重伤，住进了重症监护病房。刘格格没有多少积蓄，但车祸发生数小时内，爱心人士就凑了5万元送到医院。后来，她病情恶化，爱心人士又发起网上募捐，把她从死亡线上拉了回来。</P><P>　　众人的善举，温暖人心。但刘格格的背后，却不只是一个简单的爱心捐助故事……</P><P>　　今年30岁的刘格格是河北献县人，前几年，为了帮父母分担生计压力，年纪轻轻的她就去天津打工。刚开始，她在理发店做助理，扫地、洗毛巾、擦镜子、洗头烫染，最忙的时候，一天要工作十几个小时。那几年，她不服输，努力工作。4年后，她转到另一家理发店做管理，工资涨到每个月5000多元。</P><P>　　2012年底，刘格格看到一则新闻，贵州大山里的孩子因为贫穷，上学遇到困难，他们穿的鞋上还有破洞。这让刘格格的心里很不是滋味。</P><P>　　“当时就想，孩子们可别因为穷影响读书。”刘格格上网查到当地一所山村小学——贵州黎平县尚重镇双联小学，并联系到校长，“我能为学校做点什么？”</P><P>　　“如果你条件允许，给孩子们寄一些鞋吧。”校长回复。</P><P>　　于是，刘格格用了一个月时间，采购了175双童鞋寄了过去。“后来看到照片，孩子们穿着新鞋，露出一张张笑脸，我觉得值了。”</P><P>　　2013年儿童节，双联小学的孩子们想见见刘格格。于是，她买了上百件玩具和学习用品，还有电子琴，决定到双联小学看看。</P><P>　　人货分开走，到县城会合。双联小学校长临时租了辆面包车，把刘格格和货物接回小学。为了迎接刘格格，孩子们在窄窄的山路上站成一排，从山坡连到山脚。</P><P>　　双联小学是由木头搭成的两层小楼，建在土坡上。周边人家多是住吊脚楼，有的四面没有墙，像个亭子。</P><P>　　这趟贵州行，让刘格格深受触动。从那时起，刘格格将打工赚到的大部分钱都用来资助贵州、四川、山西等地的贫困孩子，累计数十万元。“我不爱化妆、不爱买衣服，省下来的钱能给孩子们多买点东西。”</P><P>　　2015年开始，刘格格发起一对一捐助，至今已为100多个孩子联系到了爱心捐助人，每人每月200元助学款。翻开记录本，她为每一对捐助人和受捐者都做了详细台账。上面有受捐者信息、家庭情况、对接人（一般是学校老师），以及捐助人联系方式，每一笔捐款的时间和数额都明明白白。</P><P>　　今年1月，刘格格身体刚见好转，就办理了出院，回到老家献县休养，“余下的善款还可以再捐出去。”</P><P>　　目前，献县有关部门为刘格格奔走，帮助她解决生活、就业难题。</P><P>　　如今，双联小学也搬进了三层新教学楼，孩子们有了新校园。</P><P>　　这些年，有很多人问她，这么付出值不值得？“爱心付出总是值得的。别看我力量小，我会尽己所能帮助更多孩子。”刘格格说。</P> <br><span id='paper_num'>　　《 人民日报 》（ 2020年08月25日 04 版）</span> <div style="padding:5px 15px 25px;" id="xgyd"> <h4 style="border-bottom:1px dashed #a01211; "></h4> <span class="tz_input" style="width: 104px;height: 26px;font-size: 16px;display: block;vertical-align: middle;text-align: center;line-height: 26px;margin-top: 20px;margin-bottom: 20px;"><a style="color: #A01211;font-weight: bold;display: block;text-decoration: none;border:1px dotted red;" href="http://v.people.cn/n1/2020/0630/c364580-31765023.html" target="_blank">延伸阅读</a></span> </div>]]></description>
        </item>
        <item>
            <title><![CDATA[习近平：在经济社会领域专家座谈会上的讲话]]></title>
            <link>http://politics.people.com.cn/n1/2020/0824/c1024-31835050.html</link>
            <pubDate>2020-08-24</pubDate>
            <author>人民网</author>
            <description><![CDATA[<p style="text-indent: 2em;"> 新华社北京8月24日电</p> <p style="text-align: center;"> <strong>在经济社会领域专家座谈会上的讲话</strong></p> <p style="text-align: center;"> <strong>（2020年8月24日）</strong></p> <p style="text-align: center;"> <strong>习近平</strong></p> <p style="text-indent: 2em;"> 今天，我们召开经济社会领域专家座谈会，听听大家对“十四五”规划编制的意见和建议。出席今天座谈会的，既有经济学家，也有社会学家。刚才，专家学者们做了很好的发言。大家从各自专业领域出发，对“十四五”时期发展环境、思路、任务、举措提出了很有价值的意见和建议，听了很受启发，参会的其他专家提交了书面发言，请有关方面研究吸收。下面，我就正确认识和把握中长期经济社会发展重大问题讲点意见。</p> <p style="text-indent: 2em;"> 用中长期规划指导经济社会发展，是我们党治国理政的一种重要方式。从1953年开始，我国已经编制实施了13个五年规划（计划），其中改革开放以来编制实施8个，有力推动了经济社会发展、综合国力提升、人民生活改善，创造了世所罕见的经济快速发展奇迹和社会长期稳定奇迹。实践证明，中长期发展规划既能充分发挥市场在资源配置中的决定性作用，又能更好发挥政府作用。</p> <p style="text-indent: 2em;"> “十四五”时期是我国全面建成小康社会、实现第一个百年奋斗目标之后，乘势而上开启全面建设社会主义现代化国家新征程、向第二个百年奋斗目标进军的第一个五年，我国将进入新发展阶段。凡事预则立，不预则废。我们要着眼长远、把握大势，开门问策、集思广益，研究新情况、作出新规划。</p> <p style="text-indent: 2em;"> 第一，以辩证思维看待新发展阶段的新机遇新挑战。党的十九大以来，我多次讲，当今世界正经历百年未有之大变局。当前，新冠肺炎疫情全球大流行使这个大变局加速变化，保护主义、单边主义上升，世界经济低迷，全球产业链供应链因非经济因素而面临冲击，国际经济、科技、文化、安全、政治等格局都在发生深刻调整，世界进入动荡变革期。今后一个时期，我们将面对更多逆风逆水的外部环境，必须做好应对一系列新的风险挑战的准备。</p> <p style="text-indent: 2em;"> 国内发展环境也经历着深刻变化。我国已进入高质量发展阶段，社会主要矛盾已经转化为人民日益增长的美好生活需要和不平衡不充分的发展之间的矛盾，人均国内生产总值达到1万美元，城镇化率超过60%，中等收入群体超过4亿人，人民对美好生活的要求不断提高。我国制度优势显著，治理效能提升，经济长期向好，物质基础雄厚，人力资源丰厚，市场空间广阔，发展韧性强大，社会大局稳定，继续发展具有多方面优势和条件。同时，我国发展不平衡不充分问题仍然突出，创新能力不适应高质量发展要求，农业基础还不稳固，城乡区域发展和收入分配差距较大，生态环保任重道远，民生保障存在短板，社会治理还有弱项。</p> <p style="text-indent: 2em;"> 总之，进入新发展阶段，国内外环境的深刻变化既带来一系列新机遇，也带来一系列新挑战，是危机并存、危中有机、危可转机。我们要辩证认识和把握国内外大势，统筹中华民族伟大复兴战略全局和世界百年未有之大变局，深刻认识我国社会主要矛盾发展变化带来的新特征新要求，深刻认识错综复杂的国际环境带来的新矛盾新挑战，增强机遇意识和风险意识，准确识变、科学应变、主动求变，勇于开顶风船，善于转危为机，努力实现更高质量、更有效率、更加公平、更可持续、更为安全的发展。</p> <p style="text-indent: 2em;"> 第二，以畅通国民经济循环为主构建新发展格局。今年以来，我多次讲，要推动形成以国内大循环为主体、国内国际双循环相互促进的新发展格局。这个新发展格局是根据我国发展阶段、环境、条件变化提出来的，是重塑我国国际合作和竞争新优势的战略抉择。近年来，随着外部环境和我国发展所具有的要素禀赋的变化，市场和资源两头在外的国际大循环动能明显减弱，而我国内需潜力不断释放，国内大循环活力日益强劲，客观上有着此消彼长的态势。对这个客观现象，理论界进行了很多讨论，可以继续深化研究，并提出真知灼见。</p> <p style="text-indent: 2em;"> 自2008年国际金融危机以来，我国经济已经在向以国内大循环为主体转变，经常项目顺差同国内生产总值的比率由2007年的9.9%降至现在的不到1%，国内需求对经济增长的贡献率有7个年份超过100%。未来一个时期，国内市场主导国民经济循环特征会更加明显，经济增长的内需潜力会不断释放。我们要坚持供给侧结构性改革这个战略方向，扭住扩大内需这个战略基点，使生产、分配、流通、消费更多依托国内市场，提升供给体系对国内需求的适配性，形成需求牵引供给、供给创造需求的更高水平动态平衡。</p> <p style="text-indent: 2em;"> 当然，新发展格局决不是封闭的国内循环，而是开放的国内国际双循环。我国在世界经济中的地位将持续上升，同世界经济的联系会更加紧密，为其他国家提供的市场机会将更加广阔，成为吸引国际商品和要素资源的巨大引力场。</p> <p style="text-indent: 2em;"> 第三，以科技创新催生新发展动能。实现高质量发展，必须实现依靠创新驱动的内涵型增长。我们更要大力提升自主创新能力，尽快突破关键核心技术。这是关系我国发展全局的重大问题，也是形成以国内大循环为主体的关键。</p> <p style="text-indent: 2em;"> 我们要充分发挥我国社会主义制度能够集中力量办大事的显著优势，打好关键核心技术攻坚战。要依托我国超大规模市场和完备产业体系，创造有利于新技术快速大规模应用和迭代升级的独特优势，加速科技成果向现实生产力转化，提升产业链水平，维护产业链安全。要发挥企业在技术创新中的主体作用，使企业成为创新要素集成、科技成果转化的生力军，打造科技、教育、产业、金融紧密融合的创新体系。基础研究是创新的源头活水，我们要加大投入，鼓励长期坚持和大胆探索，为建设科技强国夯实基础。要大力培养和引进国际一流人才和科研团队，加大科研单位改革力度，最大限度调动科研人员的积极性，提高科技产出效率。要坚持开放创新，加强国际科技交流合作。</p> <p style="text-indent: 2em;"> 第四，以深化改革激发新发展活力。改革是解放和发展社会生产力的关键，是推动国家发展的根本动力。我国改革已进行40多年，取得举世公认的伟大成就。社会是不断发展的，调节社会关系和社会活动的体制机制随之不断完善，才能不断适应解放和发展社会生产力的要求。</p> <p style="text-indent: 2em;"> 随着我国迈入新发展阶段，改革也面临新的任务，必须拿出更大的勇气、更多的举措破除深层次体制机制障碍，坚持和完善中国特色社会主义制度，推进国家治理体系和治理能力现代化。我们要守正创新、开拓创新，大胆探索自己未来发展之路。要坚持和完善社会主义基本经济制度，使市场在资源配置中起决定性作用，更好发挥政府作用，营造长期稳定可预期的制度环境。要加强产权和知识产权保护，建设高标准市场体系，完善公平竞争制度，激发市场主体发展活力，使一切有利于社会生产力发展的力量源泉充分涌流。</p> <p style="text-indent: 2em;"> 第五，以高水平对外开放打造国际合作和竞争新优势。当前，国际社会对经济全球化前景有不少担忧。我们认为，国际经济联通和交往仍是世界经济发展的客观要求。我国经济持续快速发展的一个重要动力就是对外开放。对外开放是基本国策，我们要全面提高对外开放水平，建设更高水平开放型经济新体制，形成国际合作和竞争新优势。要积极参与全球经济治理体系改革，推动完善更加公平合理的国际经济治理体系。</p> <p style="text-indent: 2em;"> 当前，在推进对外开放中要注意两点：一是凡是愿意同我们合作的国家、地区和企业，包括美国的州、地方和企业，我们都要积极开展合作，形成全方位、多层次、多元化的开放合作格局。二是越开放越要重视安全，越要统筹好发展和安全，着力增强自身竞争能力、开放监管能力、风险防控能力，炼就金刚不坏之身。</p> <p style="text-indent: 2em;"> 第六，以共建共治共享拓展社会发展新局面。事实证明，发展起来以后的问题不比不发展时少。我国社会结构正在发生深刻变化，互联网深刻改变人类交往方式，社会观念、社会心理、社会行为发生深刻变化。“十四五”时期如何适应社会结构、社会关系、社会行为方式、社会心理等深刻变化，实现更加充分、更高质量的就业，健全全覆盖、可持续的社保体系，强化公共卫生和疾控体系，促进人口长期均衡发展，加强社会治理，化解社会矛盾，维护社会稳定，都需要认真研究并作出工作部署。</p> <p style="text-indent: 2em;"> 一个现代化的社会，应该既充满活力又拥有良好秩序，呈现出活力和秩序有机统一。要完善共建共治共享的社会治理制度，实现政府治理同社会调节、居民自治良性互动，建设人人有责、人人尽责、人人享有的社会治理共同体。要加强和创新基层社会治理，使每个社会细胞都健康活跃，将矛盾纠纷化解在基层，将和谐稳定创建在基层。要更加注重维护社会公平正义，促进人的全面发展和社会全面进步。</p> <p style="text-indent: 2em;"> 以上我重点讲了几个问题，以及中长期经济社会发展涉及的其他问题，希望大家深入思考，取得进一步的研究成果。</p> <p style="text-indent: 2em;"> 2015年11月23日，我在主持十八届中央政治局第二十八次集体学习时专门就马克思主义政治经济学研究作了讲话，最近《求是》杂志发表了这篇讲话。恩格斯说，无产阶级政党的“全部理论来自对政治经济学的研究”。列宁把政治经济学视为马克思主义理论“最深刻、最全面、最详尽的证明和运用”。我们要运用马克思主义政治经济学的方法论，深化对我国经济发展规律的认识，提高领导我国经济发展能力和水平。</p> <p style="text-indent: 2em;"> 理论源于实践，又用来指导实践。改革开放以来，我们及时总结新的生动实践，不断推进理论创新，在发展理念、所有制、分配体制、政府职能、市场机制、宏观调控、产业结构、企业治理结构、民生保障、社会治理等重大问题上提出了许多重要论断。比如，关于社会主义本质的理论，关于社会主义初级阶段基本经济制度的理论，关于创新、协调、绿色、开放、共享发展的理论，关于发展社会主义市场经济、使市场在资源配置中起决定性作用和更好发挥政府作用的理论，关于我国经济发展进入新常态、深化供给侧结构性改革、推动经济高质量发展的理论，关于推动新型工业化、信息化、城镇化、农业现代化同步发展和区域协调发展的理论，关于农民承包的土地具有所有权、承包权、经营权属性的理论，关于用好国际国内两个市场、两种资源的理论，关于加快形成以国内大循环为主体、国内国际双循环相互促进的新发展格局的理论，关于促进社会公平正义、逐步实现全体人民共同富裕的理论，关于统筹发展和安全的理论，等等。这些理论成果，不仅有力指导了我国经济发展实践，而且开拓了马克思主义政治经济学新境界。</p> <p style="text-indent: 2em;"> 时代课题是理论创新的驱动力。马克思、恩格斯、列宁等都是通过思考和回答时代课题来推进理论创新的。现在，在波涛汹涌的世界经济大潮中，能不能驾驭好我国经济这艘大船，是对我们党的重大考验。面对错综复杂的国内外经济形势，面对形形色色的经济现象，学习领会马克思主义政治经济学基本原理和方法论，有利于我们掌握科学的经济分析方法，认识经济运动过程，把握经济发展规律，提高驾驭社会主义市场经济能力，准确回答我国经济发展的理论和实践问题。新时代改革开放和社会主义现代化建设的丰富实践是理论和政策研究的“富矿”，我国经济社会领域理论工作者大有可为。这里，我给大家提几点希望。一是从国情出发，从中国实践中来、到中国实践中去，把论文写在祖国大地上，使理论和政策创新符合中国实际、具有中国特色，不断发展中国特色社会主义政治经济学、社会学。二是深入调研，察实情、出实招，充分反映实际情况，使理论和政策创新有根有据、合情合理。三是把握规律，坚持马克思主义立场、观点、方法，透过现象看本质，从短期波动中探究长期趋势，使理论和政策创新充分体现先进性和科学性。四是树立国际视野，从中国和世界的联系互动中探讨人类面临的共同课题，为构建人类命运共同体贡献中国智慧、中国方案。</p> ]]></description>
        </item>
        <item>
            <title><![CDATA[李克强在澜沧江－湄公河合作第三次领导人会议上的讲话(全文)]]></title>
            <link>http://politics.people.com.cn/n1/2020/0824/c1024-31835048.html</link>
            <pubDate>2020-08-24</pubDate>
            <author>李克强</author>
            <description><![CDATA[<p style="text-indent: 2em; text-align: center;"> <img alt="" desc="8月24日，国务院总理李克强在北京人民大会堂出席澜沧江－湄公河合作第三次领导人视频会议。李克强和老挝总理通伦共同主持会议。柬埔寨首相洪森、缅甸总统温敏、泰国总理巴育、越南总理阮春福出席。 新华社记者 饶爱民 摄" src="/NMediaFile/2020/0824/MAIN202008242336000405271827934.jpg" style="width: 600px; height: 397px;" /></p> <p class="desc" style="text-align: center;"> 8月24日，国务院总理李克强在北京人民大会堂出席澜沧江－湄公河合作第三次领导人视频会议。李克强和老挝总理通伦共同主持会议。柬埔寨首相洪森、缅甸总统温敏、泰国总理巴育、越南总理阮春福出席。 新华社记者 饶爱民 摄</p> <p style="text-indent: 2em;"> 新华社北京8月24日电</p> <p style="text-align: center;"> <strong>在澜沧江－湄公河合作第三次领导人会议上的讲话</strong></p> <p style="text-align: center;"> （2020年8月24日，北京）</p> <p style="text-align: center;"> <strong>中华人民共和国国务院总理　李克强</strong></p> <p> 通伦总理，</p> <p> 各位同事：</p> <p style="text-indent: 2em;"> 很高兴通过视频同大家见面，共同出席澜沧江－湄公河合作第三次领导人会议。感谢共同主席国老挝和通伦总理为会议的召开所做大量工作。</p> <p style="text-indent: 2em;"> 本次会议主题是“加强伙伴关系，实现共同繁荣”。前不久，习近平主席倡议各国努力形成更加包容的全球治理、更加有效的多边机制、更加积极的区域合作。澜湄六国共饮一江水，亲如一家人，是事实上的命运共同体。我们加强互利合作，既是成就自己，为本国的经济社会发展和民生改善注入更多动力，也是成就彼此，为实现本地区的繁荣与稳定进一步夯实基础。</p> <p style="text-indent: 2em;"> 中国人讲，上善若水，水利万物而不争。澜湄合作因水而生。水既是重要的合作内容，也赋予了这一机制致力于友好相处、互利共赢的精神内涵。澜湄机制成立4年多来，合作从快速拓展期进入全面发展期，机制建设、战略规划、资金支持、务实合作均取得显著进展，为地区发展注入了新的“源头活水”，给各国人民带来了实实在在的利益。</p> <p style="text-indent: 2em;"> 我们推动水资源机制性合作进入快车道。各方举行了首次水资源合作部长级会议和合作论坛，中方直接向湄公河五国提供澜沧江汛期水文资料，提前通报上游流量变化信息，克服困难增加旱季出境水量，帮助下游国家缓解旱情。水资源、环境合作中心和全球湄公河研究中心高效运行。</p> <p style="text-indent: 2em;"> 我们深化经贸合作，有力拉动经济增长。中方通过国际产能和装备制造合作专项贷款，以及援外优惠贷款、优惠出口买方信贷等，支持暹粒新国际机场、皎漂深水港、永新燃煤电厂等40多个重大项目。中国企业积极参与西哈努克港经济特区、罗勇工业园区、赛色塔综合开发区建设，为当地创造了大量税收和就业，实现了互利共赢。</p> <p style="text-indent: 2em;"> 我们坚持以人为本，增进流域人民福祉。澜湄合作专项基金重点用于改善民生，在卫生、教育、减贫、妇女等领域支持开展了400多个项目，为湄公河国家提供了4万多人次的培训，推动本地区人力资源潜能加快释放。</p> <p style="text-indent: 2em;"> 今年年初以来，面对突如其来的新冠肺炎疫情，我们同舟共济、守望相助，共同抗击疫情，努力恢复地区经济活力。今年上半年，中国对湄公河国家贸易、投资额逆势上扬，分别增长8.7%和33.5%，湄公河国家对华农产品出口同比增长21.2%。中老铁路铺轨工作以每天1公里的速度推进，金边－西哈努克港高速公路等重要项目陆续复工复产，这些都为地区国家经济社会发展重回正轨提供了助力。</p> <p style="text-indent: 2em;"> 各位同事，</p> <p style="text-indent: 2em;"> 当前国际形势纷繁复杂变化，世界和地区经济遭受严重冲击。在此背景下，如何维护澜湄合作快速发展势头，妥善应对各种风险挑战，更好实现共同发展，是我们面临的共同课题。为此，中方建议：</p> <p style="text-indent: 2em;"> ——将水资源合作推向新高度。我们要充分尊重各国合理开发利用水资源的正当权益，照顾彼此利益和关切，有事大家商量着办。中方愿在力所能及的范围内，为各国更好利用水资源提供更多帮助。中方将从今年开始，与湄公河国家分享澜沧江全年水文信息，共建澜湄水资源合作信息共享平台，更好应对气候变化和洪旱灾害。定期举办水资源合作部长级会议和水资源合作论坛，落实好《澜湄水资源合作五年行动计划（2018－2022）》，实施好大坝安全、洪水预警等合作项目，提升流域综合治理和水资源管理能力。</p> <p style="text-indent: 2em;"> ——拓展贸易和互联互通合作。我们愿将“一带一路”倡议同各国发展战略更好对接，深化合作。“国际陆海贸易新通道”纵贯中国西部地区，连接东南亚与欧亚大陆，陆海集聚、区域联动效应突出。澜湄合作同“国际陆海贸易新通道”对接，将进一步畅通贸易通道，调动中国西部、西南部以及东盟其他国家力量，实现对湄公河国家的更大投入，进一步优化资源配置，维护产业链供应链稳定，推动协同发展。中国愿同湄公河五国一道，落实好此次发表的对接声明，为区域发展注入新动力。我们也要共同推动年内签署区域全面经济伙伴关系协定，实现更高水平的区域经济一体化，维护自由贸易。</p> <p style="text-indent: 2em;"> 我们要建设好中老、中泰铁路，贯通地区南北大动脉。扩大产业联通，加快编制跨境经济合作五年发展规划，加强“多国多园”合作。深化金融合作，为互联互通提供强有力和可持续的金融支撑。在疫情防控常态化背景下，建设好地区“快捷通道”和“绿色通道”网络，便利人员往来和货物流通，确保产业链供应链稳定；发展好疫情催生的线上经济，促进数字技术创新，拓展数字联通，推动各国经济社会数字化转型升级。</p> <p style="text-indent: 2em;"> ——深化可持续发展合作。加快落实农业合作三年行动计划（2020－2022），实施好“丰收澜湄”项目集群，推广分享农作物和农产品加工、存储技术，提升农产品质量安全体系，建设农业产业合作园区，增强次区域农业竞争力。中方欢迎更多湄公河国家优质农、畜及其副产品输华。我们还要加快落实《澜湄环境合作战略》，开展应对气候变化、改善空气质量、保护生物多样性等合作。</p> <p style="text-indent: 2em;"> ——提升公共卫生合作。中方将在澜湄合作专项基金框架下设立公共卫生专项资金，继续尽己所能向湄公河国家提供物资和技术支持。中方新冠疫苗研制完成并投入使用后，将优先向湄公河国家提供。我们还要开展重大突发公共卫生事件信息通报和联合处置，加强传染病早期预警合作，实施好“澜湄热带病防控行”“本草惠澜湄”“中医针灸进澜湄”等项目。国际社会团结合作攸关全球抗击疫情大局。中方愿同湄公河各国一道，支持世界卫生组织更好发挥作用。</p> <p style="text-indent: 2em;"> ——加强民生领域合作。中方愿同湄公河国家共同实施防灾减灾、乡村清洁卫生、婴幼儿营养健康等项目，让澜湄合作更多惠及基层民众。推广贫困社区综合发展、“民族地区创业”等项目。努力振兴旅游业，举办澜湄市长文化旅游论坛等活动，尝试“云旅游”等灵活方式，用好用足多民族文化、世界遗产等资源，走出疫情常态化下旅游业发展新路。</p> <p style="text-indent: 2em;"> ——践行开放包容理念。我们要继续加强各机制交流互鉴，推动澜湄合作与大湄公河次区域经济合作、三河流域机制、湄公河委员会等机制之间的交流合作，包括分享经验、共同兴办项目。积极探讨与日本、韩国、欧盟等开展第三方合作。中方支持东盟在东亚合作中的中心地位，愿通过澜湄合作助力东盟共同体建设，深化中国－东盟战略伙伴关系。</p> <p style="text-indent: 2em;"> 各位同事，</p> <p style="text-indent: 2em;"> 今年以来，面对疫情严重冲击，中国政府加大宏观政策应对力度，全力防控疫情，不失时机推动复工复产，纾困和激发市场活力的举措成效显现。当前，中国疫情防控和经济社会发展工作取得重大成果，经济稳步恢复，复工复产逐月好转，二季度经济增长好于预期，经济结构持续优化，产业数字化、智能化转型明显加快，改革开放继续深化。中国经济韧性强、回旋余地大，通过努力可以实现全年经济正增长。中国的发展将为湄公河国家和世界各国带来更多合作机遇。</p> <p style="text-indent: 2em;"> 各位同事，</p> <p style="text-indent: 2em;"> 澜沧江－湄公河跨越近5000公里、广纳百川后，终成滚滚大江，滋养沿岸无数人民。发展壮大澜湄合作，为次区域人民开创更加美好的未来，同样需要我们以包容的胸襟和开放的心态，凝聚各领域的合力。中方欢迎缅甸接任共同主席国，期待同湄公河国家一道努力，推动澜湄合作不断深化拓展，为次区域和本地区发展繁荣注入更多活力。谢谢。</p> ]]></description>
        </item>
        <item>
            <title><![CDATA[习近平主持召开经济社会领域专家座谈会强调 着眼长远把握大势开门问策集思广益 研究新情况作出新规划 王沪宁韩正出席]]></title>
            <link>http://politics.people.com.cn/n1/2020/0824/c1024-31835045.html</link>
            <pubDate>2020-08-24</pubDate>
            <author>人民网</author>
            <description><![CDATA[<p> 　　新华社北京8月24日电 中共中央总书记、国家主席、中央军委主席习近平8月24日下午在中南海主持召开经济社会领域专家座谈会并发表重要讲话。他强调，“十四五”时期是我国全面建成小康社会、实现第一个百年奋斗目标之后，乘势而上开启全面建设社会主义现代化国家新征程、向第二个百年奋斗目标进军的第一个五年，我国将进入新发展阶段。凡事预则立，不预则废。我们要着眼长远、把握大势，开门问策、集思广益，研究新情况、作出新规划。</p> <p> 　　中共中央政治局常委、中央书记处书记王沪宁，中共中央政治局常委、国务院副总理韩正出席座谈会。</p> <p> 　　座谈会上，北京大学国家发展研究院名誉院长林毅夫、中国经济体制改革研究会副会长樊纲、清华大学公共管理学院院长江小涓、中国社会科学院副院长蔡昉、国家发展改革委宏观经济研究院院长王昌林、清华大学国家金融研究院院长朱民、上海交通大学安泰经济与管理学院特聘教授陆铭、中国社会科学院世界经济与政治研究所所长张宇燕、香港中文大学（深圳）全球与当代中国高等研究院院长郑永年等9位专家代表先后发言，就“十四五”规划编制等提出意见和建议。</p> <p> 　　在认真听取大家发言后，习近平发表了重要讲话。他表示，专家学者们做了很好的发言，从各自专业领域出发，对“十四五”时期发展环境、思路、任务、举措提出了很有价值的意见和建议，参会的其他专家提交了书面发言，请有关方面研究吸收。</p> <p> 　　习近平指出，要以辩证思维看待新发展阶段的新机遇新挑战。当今世界正经历百年未有之大变局，新冠肺炎疫情全球大流行使这个大变局加速变化，国际经济、科技、文化、安全、政治等格局都在发生深刻调整。国内发展环境也经历着深刻变化，我国已进入高质量发展阶段，社会主要矛盾已经转化为人民日益增长的美好生活需要和不平衡不充分的发展之间的矛盾，人民对美好生活的要求不断提高。要统筹中华民族伟大复兴战略全局和世界百年未有之大变局，深刻认识我国社会主要矛盾发展变化带来的新特征新要求，深刻认识错综复杂的国际环境带来的新矛盾新挑战，增强机遇意识和风险意识，准确识变、科学应变、主动求变，勇于开顶风船，善于转危为机，努力实现更高质量、更有效率、更加公平、更可持续、更为安全的发展。</p> <p> 　　习近平强调，要以畅通国民经济循环为主构建新发展格局。推动形成以国内大循环为主体、国内国际双循环相互促进的新发展格局是根据我国发展阶段、环境、条件变化提出来的，是重塑我国国际合作和竞争新优势的战略抉择。我们要坚持供给侧结构性改革这个战略方向，扭住扩大内需这个战略基点，使生产、分配、流通、消费更多依托国内市场，提升供给体系对国内需求的适配性，形成需求牵引供给、供给创造需求的更高水平动态平衡。新发展格局决不是封闭的国内循环，而是开放的国内国际双循环。我国在世界经济中的地位将持续上升，同世界经济的联系会更加紧密，为其他国家提供的市场机会将更加广阔，成为吸引国际商品和要素资源的巨大引力场。</p> <p> 　　习近平指出，要以科技创新催生新发展动能。实现高质量发展，必须实现依靠创新驱动的内涵型增长，大力提升自主创新能力，尽快突破关键核心技术。要充分发挥我国社会主义制度能够集中力量办大事的显著优势，打好关键核心技术攻坚战，创造有利于新技术快速大规模应用和迭代升级的独特优势，加速科技成果向现实生产力转化，提升产业链水平。要发挥企业在技术创新中的主体作用，使企业成为创新要素集成、科技成果转化的生力军。要大力培养和引进国际一流人才和科研团队，加大科研单位改革力度，最大限度调动科研人员的积极性。要坚持开放创新，加强国际科技交流合作。</p> <p> 　　习近平强调，要以深化改革激发新发展活力。随着我国迈入新发展阶段，改革也面临新的任务，必须拿出更大的勇气、更多的举措破除深层次体制机制障碍，坚持和完善中国特色社会主义制度，推进国家治理体系和治理能力现代化。要守正创新、开拓创新，大胆探索自己未来发展之路。要坚持和完善社会主义基本经济制度，使市场在资源配置中起决定性作用，更好发挥政府作用，营造长期稳定可预期的制度环境。要加强产权和知识产权保护，建设高标准市场体系，完善公平竞争制度，激发市场主体发展活力，使一切有利于社会生产力发展的力量源泉充分涌流。</p> <p> 　　习近平指出，要以高水平对外开放打造国际合作和竞争新优势。国际经济联通和交往仍是世界经济发展的客观要求。我国经济持续快速发展的一个重要动力就是对外开放。对外开放是基本国策。要全面提高对外开放水平，建设更高水平开放型经济新体制，形成国际合作和竞争新优势。要积极参与全球经济治理体系改革，推动完善更加公平合理的国际经济治理体系。</p> <p> 　　习近平强调，要以共建共治共享拓展社会发展新局面。要实现更加充分、更高质量的就业，健全全覆盖、可持续的社保体系，强化公共卫生和疾控体系，促进人口长期均衡发展，加强社会治理，化解社会矛盾，维护社会稳定。要完善共建共治共享的社会治理制度，加强和创新基层社会治理，更加注重维护社会公平正义，促进人的全面发展和社会全面进步。</p> <p> 　　习近平指出，理论源于实践，又用来指导实践。改革开放以来，我们及时总结新的生动实践，不断推进理论创新，在发展理念、所有制、分配体制、政府职能、市场机制、宏观调控、产业结构、企业治理结构、民生保障、社会治理等重大问题上提出了许多重要论断。时代课题是理论创新的驱动力。新时代改革开放和社会主义现代化建设的丰富实践是理论和政策研究的“富矿”，我国经济社会领域理论工作者大有可为。要坚持马克思主义立场、观点、方法，坚持从国情出发，充分反映实际情况，透过现象看本质，树立国际视野，使理论和政策创新充分体现先进性和科学性。</p> <p> 　　丁薛祥、刘鹤、黄坤明、肖捷、何立峰出席座谈会。</p> <p> 　　中央和国家机关有关部门负责同志，专家学者代表等参加座谈会。</p> ]]></description>
        </item>
        <item>
            <title><![CDATA[李克强在澜沧江－湄公河合作第三次领导人会议上的讲话(全文)]]></title>
            <link>http://politics.people.com.cn/n1/2020/0824/c1024-31835042.html</link>
            <pubDate>2020-08-24</pubDate>
            <author>人民网</author>
            <description><![CDATA[<p style="text-indent: 2em;"> 新华社北京8月24日电</p> <p style="text-align: center;"> <strong>在澜沧江－湄公河合作第三次领导人会议上的讲话</strong></p> <p style="text-align: center;"> （2020年8月24日，北京）</p> <p style="text-align: center;"> <strong>中华人民共和国国务院总理　李克强</strong></p> <p style="text-indent: 2em;"> 通伦总理，</p> <p style="text-indent: 2em;"> 各位同事：</p> <p style="text-indent: 2em;"> 很高兴通过视频同大家见面，共同出席澜沧江－湄公河合作第三次领导人会议。感谢共同主席国老挝和通伦总理为会议的召开所做大量工作。</p> <p style="text-indent: 2em;"> 本次会议主题是“加强伙伴关系，实现共同繁荣”。前不久，习近平主席倡议各国努力形成更加包容的全球治理、更加有效的多边机制、更加积极的区域合作。澜湄六国共饮一江水，亲如一家人，是事实上的命运共同体。我们加强互利合作，既是成就自己，为本国的经济社会发展和民生改善注入更多动力，也是成就彼此，为实现本地区的繁荣与稳定进一步夯实基础。</p> <p style="text-indent: 2em;"> 中国人讲，上善若水，水利万物而不争。澜湄合作因水而生。水既是重要的合作内容，也赋予了这一机制致力于友好相处、互利共赢的精神内涵。澜湄机制成立4年多来，合作从快速拓展期进入全面发展期，机制建设、战略规划、资金支持、务实合作均取得显著进展，为地区发展注入了新的“源头活水”，给各国人民带来了实实在在的利益。</p> <p style="text-indent: 2em;"> 我们推动水资源机制性合作进入快车道。各方举行了首次水资源合作部长级会议和合作论坛，中方直接向湄公河五国提供澜沧江汛期水文资料，提前通报上游流量变化信息，克服困难增加旱季出境水量，帮助下游国家缓解旱情。水资源、环境合作中心和全球湄公河研究中心高效运行。</p> <p style="text-indent: 2em;"> 我们深化经贸合作，有力拉动经济增长。中方通过国际产能和装备制造合作专项贷款，以及援外优惠贷款、优惠出口买方信贷等，支持暹粒新国际机场、皎漂深水港、永新燃煤电厂等40多个重大项目。中国企业积极参与西哈努克港经济特区、罗勇工业园区、赛色塔综合开发区建设，为当地创造了大量税收和就业，实现了互利共赢。</p> <p style="text-indent: 2em;"> 我们坚持以人为本，增进流域人民福祉。澜湄合作专项基金重点用于改善民生，在卫生、教育、减贫、妇女等领域支持开展了400多个项目，为湄公河国家提供了4万多人次的培训，推动本地区人力资源潜能加快释放。</p> <p style="text-indent: 2em;"> 今年年初以来，面对突如其来的新冠肺炎疫情，我们同舟共济、守望相助，共同抗击疫情，努力恢复地区经济活力。今年上半年，中国对湄公河国家贸易、投资额逆势上扬，分别增长8.7%和33.5%，湄公河国家对华农产品出口同比增长21.2%。中老铁路铺轨工作以每天1公里的速度推进，金边－西哈努克港高速公路等重要项目陆续复工复产，这些都为地区国家经济社会发展重回正轨提供了助力。</p> <p style="text-indent: 2em;"> 各位同事，</p> <p style="text-indent: 2em;"> 当前国际形势纷繁复杂变化，世界和地区经济遭受严重冲击。在此背景下，如何维护澜湄合作快速发展势头，妥善应对各种风险挑战，更好实现共同发展，是我们面临的共同课题。为此，中方建议：</p> <p style="text-indent: 2em;"> ——将水资源合作推向新高度。我们要充分尊重各国合理开发利用水资源的正当权益，照顾彼此利益和关切，有事大家商量着办。中方愿在力所能及的范围内，为各国更好利用水资源提供更多帮助。中方将从今年开始，与湄公河国家分享澜沧江全年水文信息，共建澜湄水资源合作信息共享平台，更好应对气候变化和洪旱灾害。定期举办水资源合作部长级会议和水资源合作论坛，落实好《澜湄水资源合作五年行动计划（2018－2022）》，实施好大坝安全、洪水预警等合作项目，提升流域综合治理和水资源管理能力。</p> <p style="text-indent: 2em;"> ——拓展贸易和互联互通合作。我们愿将“一带一路”倡议同各国发展战略更好对接，深化合作。“国际陆海贸易新通道”纵贯中国西部地区，连接东南亚与欧亚大陆，陆海集聚、区域联动效应突出。澜湄合作同“国际陆海贸易新通道”对接，将进一步畅通贸易通道，调动中国西部、西南部以及东盟其他国家力量，实现对湄公河国家的更大投入，进一步优化资源配置，维护产业链供应链稳定，推动协同发展。中国愿同湄公河五国一道，落实好此次发表的对接声明，为区域发展注入新动力。我们也要共同推动年内签署区域全面经济伙伴关系协定，实现更高水平的区域经济一体化，维护自由贸易。</p> <p style="text-indent: 2em;"> 我们要建设好中老、中泰铁路，贯通地区南北大动脉。扩大产业联通，加快编制跨境经济合作五年发展规划，加强“多国多园”合作。深化金融合作，为互联互通提供强有力和可持续的金融支撑。在疫情防控常态化背景下，建设好地区“快捷通道”和“绿色通道”网络，便利人员往来和货物流通，确保产业链供应链稳定；发展好疫情催生的线上经济，促进数字技术创新，拓展数字联通，推动各国经济社会数字化转型升级。</p> <p style="text-indent: 2em;"> ——深化可持续发展合作。加快落实农业合作三年行动计划（2020－2022），实施好“丰收澜湄”项目集群，推广分享农作物和农产品加工、存储技术，提升农产品质量安全体系，建设农业产业合作园区，增强次区域农业竞争力。中方欢迎更多湄公河国家优质农、畜及其副产品输华。我们还要加快落实《澜湄环境合作战略》，开展应对气候变化、改善空气质量、保护生物多样性等合作。</p> <p style="text-indent: 2em;"> ——提升公共卫生合作。中方将在澜湄合作专项基金框架下设立公共卫生专项资金，继续尽己所能向湄公河国家提供物资和技术支持。中方新冠疫苗研制完成并投入使用后，将优先向湄公河国家提供。我们还要开展重大突发公共卫生事件信息通报和联合处置，加强传染病早期预警合作，实施好“澜湄热带病防控行”“本草惠澜湄”“中医针灸进澜湄”等项目。国际社会团结合作攸关全球抗击疫情大局。中方愿同湄公河各国一道，支持世界卫生组织更好发挥作用。</p> <p style="text-indent: 2em;"> ——加强民生领域合作。中方愿同湄公河国家共同实施防灾减灾、乡村清洁卫生、婴幼儿营养健康等项目，让澜湄合作更多惠及基层民众。推广贫困社区综合发展、“民族地区创业”等项目。努力振兴旅游业，举办澜湄市长文化旅游论坛等活动，尝试“云旅游”等灵活方式，用好用足多民族文化、世界遗产等资源，走出疫情常态化下旅游业发展新路。</p> <p style="text-indent: 2em;"> ——践行开放包容理念。我们要继续加强各机制交流互鉴，推动澜湄合作与大湄公河次区域经济合作、三河流域机制、湄公河委员会等机制之间的交流合作，包括分享经验、共同兴办项目。积极探讨与日本、韩国、欧盟等开展第三方合作。中方支持东盟在东亚合作中的中心地位，愿通过澜湄合作助力东盟共同体建设，深化中国－东盟战略伙伴关系。</p> <p style="text-indent: 2em;"> 各位同事，</p> <p style="text-indent: 2em;"> 今年以来，面对疫情严重冲击，中国政府加大宏观政策应对力度，全力防控疫情，不失时机推动复工复产，纾困和激发市场活力的举措成效显现。当前，中国疫情防控和经济社会发展工作取得重大成果，经济稳步恢复，复工复产逐月好转，二季度经济增长好于预期，经济结构持续优化，产业数字化、智能化转型明显加快，改革开放继续深化。中国经济韧性强、回旋余地大，通过努力可以实现全年经济正增长。中国的发展将为湄公河国家和世界各国带来更多合作机遇。</p> <p style="text-indent: 2em;"> 各位同事，</p> <p style="text-indent: 2em;"> 澜沧江－湄公河跨越近5000公里、广纳百川后，终成滚滚大江，滋养沿岸无数人民。发展壮大澜湄合作，为次区域人民开创更加美好的未来，同样需要我们以包容的胸襟和开放的心态，凝聚各领域的合力。中方欢迎缅甸接任共同主席国，期待同湄公河国家一道努力，推动澜湄合作不断深化拓展，为次区域和本地区发展繁荣注入更多活力。谢谢。</p> ]]></description>
        </item>
        <item>
            <title><![CDATA[李克强出席澜沧江－湄公河合作第三次领导人会议时强调 推动次区域合作拓展深化 打造水资源合作新亮点]]></title>
            <link>http://politics.people.com.cn/n1/2020/0824/c1024-31835043.html</link>
            <pubDate>2020-08-24</pubDate>
            <author>人民网</author>
            <description><![CDATA[<p> 　　新华社北京8月24日电（记者郑明达）国务院总理李克强24日上午在人民大会堂出席澜沧江－湄公河合作第三次领导人视频会议。李克强和老挝总理通伦共同主持会议。柬埔寨首相洪森、缅甸总统温敏、泰国总理巴育、越南总理阮春福出席。</p> <p> 　　李克强表示，澜湄合作因水而生。澜湄六国共饮一江水，可以说亲如一家人。习近平主席前不久倡议各国努力形成更加包容的全球治理、更加有效的多边机制、更加积极的区域合作。中方赞赏机制各国为促进区域合作做出的积极努力。</p> <p> 　　李克强指出，澜湄机制成立4年多来，合作从快速拓展期进入全面发展期，为地区发展注入了新的“源头活水”，给各国人民带来了实实在在的利益。我们推动水资源机制性合作进入快车道；深化经贸合作，有力拉动经济增长；坚持以人为本，增进流域人民福祉。今年上半年，中国同湄公河国家双边贸易逆势增长，表明双方合作潜力巨大。面对突如其来的新冠肺炎疫情，我们同舟共济、守望相助，共同抗击疫情，努力恢复地区经济活力。</p> <p> 　　李克强就加强澜湄合作提出六点倡议：</p> <p> 　　——将水资源合作推向新高度。中方愿在力所能及的范围内，为各国更好利用水资源提供更多帮助。中方将从今年开始与湄公河国家分享澜沧江全年水文信息，共建澜湄水资源合作信息共享平台，更好应对洪旱灾害。定期举办水资源合作部长级会议和水资源合作论坛，实施好大坝安全、洪水预警等合作项目，提升流域综合治理和水资源管理能力。</p> <p> 　　——拓展贸易和互联互通合作。将澜湄合作同“国际陆海贸易新通道”对接，进一步畅通贸易通道，优化资源配置，维护产业链供应链稳定，推动协同发展。共同推动年内签署区域全面经济伙伴关系协定，实现更高水平的区域经济一体化。建设好中老、中泰铁路。深化金融合作。建设好地区“快捷通道”和“绿色通道”网络，便利人员往来和货物流通。</p> <p> 　　——深化可持续发展合作。加快落实农业合作三年行动计划，实施好“丰收澜湄”项目集群。中方欢迎更多湄公河国家优质农、畜及其副产品输华。开展应对气候变化、保护生物多样性等合作。</p> <p> 　　——提升公共卫生合作。中方将在澜湄合作专项基金框架下设立公共卫生专项资金，在力所能及范围内提供物资和技术支持。中方新冠疫苗研制完成并投入使用后，将优先向湄公河国家提供。开展重大突发公共卫生事件信息通报和联合处置。共同支持世界卫生组织更好发挥作用。</p> <p> 　　——加强民生领域合作。共同实施防灾减灾、乡村清洁卫生等项目，让澜湄合作更多惠及基层民众。推广贫困社区综合发展，努力振兴旅游业。</p> <p> 　　——践行开放包容理念。加强各机制交流互鉴，推动澜湄合作同其他次区域机制间的交流合作。积极探讨同日、韩、欧盟等开展第三方合作。中方支持东盟在东亚合作中的中心地位，愿通过澜湄合作助力东盟共同体建设，深化中国－东盟战略伙伴关系。</p> <p> 　　李克强指出，当前中国疫情防控和经济社会发展取得重大成果。中国的发展将为湄公河国家和世界各国带来更多合作机遇。中方期待同湄公河国家一道努力，推动澜湄合作不断深化拓展，为次区域和本地区发展繁荣注入更多活力。</p> <p> 　　与会领导人高度评价澜湄合作取得的丰富成果，完全赞同李克强就加强机制合作提出的倡议。各国领导人表示，澜湄合作为促进地区经济社会发展、民生改善，巩固和平与安全，增进相互理解与信任发挥了重要作用。各方充分肯定在水资源合作上取得的进展，愿同中方深化澜湄流域经济发展带合作，对接“国际陆海贸易新通道”，加强互联互通。各方赞赏中方承诺新冠疫苗研发成功后将作为国际公共产品，增加疫苗在发展中国家的可及性，愿同中方深化公共卫生领域合作，加强疫情防控合作，促进经济复苏发展。各方致力于促进区域经济一体化和贸易投资自由化便利化，有效维护多边主义。</p> <p> 　　李克强和各国领导人还共同出席了缅甸接任下届澜湄合作共同主席国的交接仪式。</p> <p> 　　会议发表了《澜沧江－湄公河合作第三次领导人会议万象宣言》和《澜沧江－湄公河合作第三次领导人会议关于澜湄合作与“国际陆海贸易新通道”对接合作的共同主席声明》。</p> <p> 　　何立峰等出席会议。</p> ]]></description>
        </item>
        <item>
            <title><![CDATA[习近平主持召开经济社会领域专家座谈会]]></title>
            <link>http://politics.people.com.cn/n1/2020/0824/c1024-31835038.html</link>
            <pubDate>2020-08-24</pubDate>
            <author>人民网</author>
            <description><![CDATA[<p> 　　中共中央总书记、国家主席、中央军委主席习近平8月24日下午在中南海主持召开经济社会领域专家座谈会并发表重要讲话。他强调，“十四五”时期是我国全面建成小康社会、实现第一个百年奋斗目标之后，乘势而上开启全面建设社会主义现代化国家新征程、向第二个百年奋斗目标进军的第一个五年，我国将进入新发展阶段。凡事预则立，不预则废。我们要着眼长远、把握大势，开门问策、集思广益，研究新情况、作出新规划。</p> ]]></description>
        </item>
        <item>
            <title><![CDATA[全国地方政协工作经验交流会在京召开 汪洋出席并讲话]]></title>
            <link>http://politics.people.com.cn/n1/2020/0824/c1024-31835027.html</link>
            <pubDate>2020-08-24</pubDate>
            <author>人民网</author>
            <description><![CDATA[<p style="text-indent: 2em;"> 新华社北京8月24日电 全国地方政协工作经验交流会24日在京召开。中共中央政治局常委、全国政协主席汪洋出席会议并讲话。他强调，要深入学习贯彻习近平总书记在中央政协工作会议上的重要讲话精神，总结推广各地贯彻落实中央政协工作会议精神的新鲜经验和有效做法，立足实际，开拓创新，扎实推进专门协商机构建设，更好把人民政协制度优势转化为国家治理效能。</p> <p style="text-indent: 2em;"> 汪洋指出，近一年来，各地深入学习贯彻中央政协工作会议精神，加强党对政协工作领导的组织体系和制度机制建设，健全经常性、常态化理论学习制度，打造形式多样、灵便高效协商平台，增强思想政治引领的针对性实效性，规范委员履职服务管理，紧扣决战脱贫攻坚决胜全面建成小康社会目标任务、夺取疫情防控和经济社会发展双胜利等履职尽责，新时代人民政协事业发展进一步呈现新格局新气象。</p> <p style="text-indent: 2em;"> 汪洋强调，学习贯彻中央政协工作会议精神是一项长期任务。要把坚持党的全面领导落实到政协工作各方面和全过程，夯实共同思想政治基础，推动把党的主张转化为社会各界广泛共识和自觉行动。要推动协商广泛多层制度化发展，积极培育富有政协特色的协商文化，提升专门协商机构建设“建”的质量、体现“专”的水平、突出“商”的特色，实现建言资政和凝聚共识辩证统一、双向发力。要完善委员讲堂、委员宣讲团、委员会客厅、请你来协商、谈心谈话等新形式，把凝聚共识寓于各项履职活动之中，推动委员思想政治进步和团结引领界别群众相促进。要把加强工作制度建设作为推进专门协商机构建设的基础工程来抓，努力形成系统配套、严谨规范、衔接顺畅的制度体系。</p> <p style="text-indent: 2em;"> 汪洋强调，各地政协要始终坚持党对政协工作的领导这一根本政治原则，在党委领导下认真做好围绕中心、服务大局的各项工作。要进一步明确市县政协主要工作是协商、主要工作方式是搭台、工作主旨是双向发力，落实协商于民、协商为民要求，紧扣党政工作的重点、群众生产生活的难点、社会治理的焦点，务实灵活地组织开展各类协商活动。要努力解决市县政协基础工作薄弱、人员力量薄弱等问题，为基层政协充分发挥作用奠定基础。</p> <p style="text-indent: 2em;"> 全国政协副主席张庆黎通报了中央政协工作会议以来全国政协主要工作情况。全国政协副主席刘奇葆、万钢、何厚铧、卢展工、王正伟、马飚、陈晓光、梁振英、夏宝龙、杨传堂、李斌、巴特尔、汪永清、苏辉、郑建邦、辜胜阻、刘新成、何维、邵鸿、高云龙出席会议，15位省市县政协负责同志作了大会发言。</p> ]]></description>
        </item>
        <item>
            <title><![CDATA[亮亮百姓“粮仓家底”——专访国家粮食和物资储备局负责人]]></title>
            <link>http://politics.people.com.cn/n1/2020/0824/c1001-31835021.html</link>
            <pubDate>2020-08-24</pubDate>
            <author>王立彬</author>
            <description><![CDATA[<p> 　　新华社北京8月24日电 <strong>题：亮亮百姓“粮仓家底”——专访国家粮食和物资储备局负责人</strong></p> <p> 　　新华社记者王立彬</p> <p> 　　民为国基，谷为民命；悠悠万事，吃饭为大。当前公众对我国粮食安全形势特别是粮食储备情况格外关注。就老百姓关心的“粮仓家底”问题，新华社记者24日专访了国家粮食和物资储备局负责人。</p> <p> 　　<strong>靠得住：粮食储备保障能力</strong></p> <p> 　　问：我国是一个人口大国，粮食储备保障能力能不能满足需要？</p> <p> 　　答：我国粮食库存构成，主要分三大类：政府储备、政策性库存、企业商品库存。此外还有一部分农户存粮，通常不统计在库存范围内。政府储备包括中央储备粮和地方储备粮，这是守底线、稳预期、保安全的“压舱石”。</p> <p> 　　近年来，在中央储备规模稳步充实同时，以销区为重点，地方储备安全保障能力不断增强。2014年，按照国务院部署，有关部门以保障产区3个月、销区6个月、产销平衡区4.5个月市场供应量标准，核定下达地方储备规模计划。各地按时完成增储任务，有的省份还结合实际主动增加了部分规模。</p> <p> 　　同时，国家通过最低收购价、临时收储等政策，还掌握了相当数量的政策性粮食库存，根据需要可随时投放市场；再加上各类粮食企业商品库存，我国粮食库存总量持续高位运行，库存消费比远远高于联合国粮农组织提出的安全警戒线水平，稻谷、小麦库存都能够满足1年以上需求。</p> <p> 　　2019年，全国政策性粮食库存大清查进一步摸清了粮食“家底”。从仓储技术看，我国粮食仓储能力明显增强，总体达到世界较先进水平。从储备品种结构看，以口粮为主，小麦、稻谷等口粮比例占七成左右，有的省份根据当地特色和消费习惯建立了少量杂粮储备。36个大中城市和市场易波动地区还建立了一定数量的大米、面粉等成品粮储备，可满足当地10-15天市场供应。同时储备区域布局更合理，质量更可靠。</p> <p> 　　<strong>用得上：应急救灾与保供稳价</strong></p> <p> 　　问：在应急救灾、保供稳价等方面，粮食储备有哪些应对手段？</p> <p> 　　答：随着储备规模不断充实，国家粮食宏观调控能力进一步增强，政府粮食储备在保障国家粮食安全中发挥着越来越重要的作用。一方面，应急救灾中保障军需民食，另一方面在市场波动中维护粮价稳定。我国已建立起符合国情的粮食应急保障体系，以备应对突发公共事件、自然灾害等引起的粮食市场异常波动风险。</p> <p> 　　目前国有粮食应急加工企业有5388家，成品粮日加工能力在百万吨以上；粮食应急供应网点44601家，应急配送中心3170个，应急储运企业3454个，依托健全的粮油配送供应网络，能够迅速将米面油投放终端消费市场；国家级粮食市场信息直报点1072个，地方粮食市场信息监测点9206个，基本覆盖重点地区、重点品种，能够密切跟踪粮食供求变化和价格动态；全国31个省区市制定了省级粮食应急预案，587个市地、2440个县建立了区域性粮食应急预案。</p> <p> 　　新冠肺炎疫情发生以来，粮食和物资储备系统加强粮源组织调度，发挥储备吞吐调节作用，引导企业加大米面油生产和投放力度，有效保障了市场稳定。</p> <p> 　　在国内外粮食市场深度融合、国际粮价频繁波动的背景下，我国粮食价格总体平稳，没有出现大起大落，这与粮食生产连年丰收息息相关，又与坚强的储备保障紧密相联。</p> <p> 　　<strong>管得好：扎实推进各项改革任务</strong></p> <p> 　　问：怎么按中央部署，守住管好“天下粮仓”？</p> <p> 　　答：中央深改委第八次会议审议通过《关于改革完善体制机制加强粮食储备安全管理的若干意见》，对新形势下粮食储备管理作出全面部署，要确保如期完成各项任务。</p> <p> 　　要坚持政策性职能和经营性职能分开原则，压实承储企业主体责任和政府部门监管责任，确保国家储备粮数量实、质量好、调得快、用得好。</p> <p> 　　要推动中央储备与地方储备、政府储备与企业储备互为补充、协同发展。进一步健全与中央储备垂直管理相适应的监管体制，充实执法监管力量。粮食安全省长责任制考核、中央储备粮管理和中央事权粮食政策执行情况考核是重要的制度安排，要发挥好“指挥棒”作用。</p> <p> 　　要把加大耕地保护力度、稳定粮食播种面积和产量、完善地方粮食储备安全管理、提高粮食应急保障能力等方面，作为落实粮食安全省长责任制的重中之重。</p> <p> 　　要积极推动粮食安全保障立法修规，从速推动粮食安全保障法立法和《粮食流通管理条例》修订进程，研究起草《粮食储备安全管理条例》；积极支持各省份出台粮食安全保障地方性法规。</p> <p> 　　要深入实施优质粮食工程，加快建设粮食产业强国。进一步开展“中国好粮油”行动，不断增加绿色优质粮油产品供给，构建链条优化、衔接顺畅、运转高效、保障有力的粮食“产购储加销”体系。</p> <p> 　　要认真组织编制“十四五”粮食物流基础设施建设规划，统筹布局一批大型粮食物流枢纽，增强分拨集散能力，加快建设高标准粮仓，着力实施粮食现代物流工程。</p> <p> 　　要积极推进节粮减损，全链条减少粮食产后损失。加大粮食科技创新和科普力度，推广农户科学储粮装具，指导粮食收获、仓储、运输、加工、消费等各个环节减损工作。</p> ]]></description>
        </item>
        <item>
            <title><![CDATA[胡春华主持召开北方地区部分重点省市外贸外资工作座谈会]]></title>
            <link>http://politics.people.com.cn/n1/2020/0824/c1001-31835007.html</link>
            <pubDate>2020-08-24</pubDate>
            <author>人民网</author>
            <description><![CDATA[<p> 　　新华社青岛8月24日电 中共中央政治局委员、国务院副总理胡春华24日在山东青岛主持召开北方地区部分重点省市稳外贸稳外资座谈会。他强调，要深入贯彻落实习近平总书记重要指示批示精神，按照党中央、国务院决策部署，扎实做好“六稳”工作，全面落实“六保”任务，想方设法化解各种不利因素影响，切实稳住外贸外资基本盘。</p> <p> 　　北京、天津、河北、辽宁、山东、河南等北方地区外经贸重点省市有关负责同志出席会议。</p> <p> 　　胡春华强调，当前国际形势严峻复杂，对外贸外资稳定发展带来很大挑战。各地要增强紧迫感，坚持不懈做好稳外贸稳外资各项工作，更好服务于经济社会发展大局。外贸外资大省要在全国开放大局中找准自己的定位，努力发挥更大作用，为全国外贸外资发展多做贡献。要进一步加大开放力度，立足自身优势，着力打造对外开放新高地，带动周边地区外向型经济发展。要立足实际设定发展目标，并努力完成得更好。要把稳外贸稳外资各项工作做实做细，狠抓政策落地，全面加强对企业服务，积极培育新业态、新模式，为外贸外资稳定发展注入新动力。</p> <p> 　　会前，胡春华到青岛部分外贸企业和山东自贸试验区青岛片区，详细了解企业生产经营情况。他还到中国科学院海洋研究所和国家海洋牧场示范区考察海洋牧场发展情况。</p> ]]></description>
        </item>
        <item>
            <title><![CDATA[专家：洪涝灾害影响有限，我国粮食安全有保障]]></title>
            <link>http://politics.people.com.cn/n1/2020/0824/c1001-31834983.html</link>
            <pubDate>2020-08-24</pubDate>
            <author>聂凤英</author>
            <description><![CDATA[<p style="text-indent: 2em;"> 今年以来，先是新冠肺炎疫情暴发，近期又是长江流域、淮河流域的洪涝灾害，我国粮食生产受到了一定影响。这也引发了社会大众对我国粮食安全状况的关注。尽管遭遇了这样的困难，但要看到，在党和国家的高度重视和各界人士的不懈努力下，我国粮食产业经过几十年的发展早已今非昔比。基础设施不断完善，科技水平不断提升，粮食生产抗风险能力不断增强，粮食产量不断提高，产业链的各个环节，从生产、加工到运输、流通，都在努力确保粮食能满足人民生活所需。可以说，到目前绝大多数人们已经可以不用为吃饭问题担忧。这主要是因为以下三点：</p> <p style="text-indent: 2em;"> 首先，从粮食供需状况看，我国粮食尤其是口粮，供给充足，完全能够满足人们的消费需求。</p> <p style="text-indent: 2em;"> 生产上，我国粮食产量连续16年丰收，2019年粮食产量达到6.64亿吨，其中稻谷2.1亿吨、小麦1.34亿吨、玉米2.61亿吨。按照当年统计人口数量，人均粮食占有量超过470公斤，已经连续多年高于世界平均水平。折算到每日占有量来看，每日人均粮食占有量达到1.3公斤，也超过了居民每日的消费需求。</p> <p style="text-indent: 2em;"> 贸易上，2015年以来我国粮食进口量保持在1亿吨以上，但这其中大部分是大豆、粗粮等饲料粮，谷物仅占很小部分。2019年大豆进口量达到8851.1万吨，占粮食进口总量的79.4%。而且，谷物进口从2017年以来呈现下降趋势，尤其是大米，我国大米进口量明显下降，从2017年突破400万吨的高位回落至2019年的255万吨，但出口却增加到275万吨，是5年来第一次成为大米净出口国。谷物的进口主要是调剂品种，满足国内的多元化需求。总的来看，我国谷物和口粮的自给率仍处于较高水平，自给率分别为97.6%和99.1%。</p> <p style="text-indent: 2em;"> 库存上，我国的粮食库存包括两部分，一是政府库存，一是社会库存。近几年国家大力推动农业结构调整，加大“去库存”力度，玉米库存大幅下降，但总库存仍处于高位。据有关机构估算，水稻、小麦、玉米三大粮食作物的储备库存在3亿吨左右，完全可以实现自给自足，这是政府库存。其他还有农户自留的粮食和企业的存货，这些也是粮食库存的重要组成。</p> <p style="text-indent: 2em;"> 消费上，我国居民的口粮消费，主要是大米和小麦。按照居民健康饮食消费标准，每年人均口粮消费量在140公斤左右。2019年我国稻谷和小麦两种口粮的产量合计达到3.43亿吨，人均占有量达到245公斤，超过了居民营养所需的消费量。就消费数据而言，目前我国没有官方的统计，按美国农业部的数据，2018/2019市场年度，中国小麦、大米的消费量分别是1.25亿吨、1.43亿吨，这也是低于我们当前产量的。而且，口粮的消费是在逐年降低的，据国家统计局数据，2013年到2018年，全国居民谷物年人均消费量从138.9公斤一路降低至116.3公斤。</p> <p style="text-indent: 2em;"> 其次，从灾害影响看，我国农业的特点是怕旱不怕涝，洪涝灾害对粮食生产的影响有限。</p> <p style="text-indent: 2em;"> 今年长江流域的洪涝灾害引起关注，特别是对于农业生产的影响。据8月13日的国家防总消息，今年洪涝灾害导致603.26万公顷农作物受灾，其中绝收114.08万公顷，主要集中在长江中下游和淮河地区。而2019年全国粮食播种面积达到11606.4万公顷，受灾面积仅占播种面积的很小部分，而且洪水灾害也不可能会导致整体粮食减产。从目前公布的统计数据看，2020年全国夏粮总产量14281万吨，比2019年增长0.9%；早稻总产量2729万吨，比2019年增长3.9%。目前的基础很好，从全年粮食生产来看，秋粮占全年粮食产量的70%以上，从生产区域来看，60%的秋粮在北方地区，受洪涝影响相对较小。而在长江中下游等受灾地区，得益于近些年的经济发展和科技进步，通过各项救灾措施，加强种植管理，洪涝灾害的影响是可以降到最低的。</p> <p style="text-indent: 2em;"> 最后，从粮食综合生产能力看，国家在农业基础设施建设上投入了大量资金，粮食生产抵御风险的能力已经大大提高。</p> <p style="text-indent: 2em;"> 基础设施支撑粮食产能提升。近年来，国家十分重视基础设施建设，积极推进高标准农田建设，到今年要确保建成8亿亩高标准农田，推动每亩产量增加100公斤，这将大大提高粮食产区抵御自然灾害的能力。同时，划定并加快9亿亩水稻、小麦、玉米等粮食生产功能区建设，并搭建一系列配套设施，确保粮食产量得到巩固和提升。</p> <p style="text-indent: 2em;"> 农业科技对粮食生产贡献明显。目前，我们已经建立了超级稻、矮败小麦、杂交玉米等高效育种技术体系，成功培育出数千个高产优质粮食作物新品种、新组合，实现了5~6次大规模更新换代，主要农作物良种基本实现全覆盖，推动粮食亩产从1978年的168.5公斤提高到2019的381公斤。</p> <p style="text-indent: 2em;"> 农业防灾减灾能力明显增强。我国在全国建成了大量灾害地面监测站网，并建立完善了自然灾害监测预报预警体系。同时，随着新一代移动通信技术的发展，物联网、大数据、人工智能、智慧气象等新型技术在农业防灾减灾领域得到广泛应用，对自然灾害预警能力大幅增强，能够最大限度的降低灾害给农业生产带来的损失。</p> <p style="text-indent: 2em;"> 综合来看，我国粮食生产抵御风险的能力不断增强，粮食供给充足，贸易渠道通畅，完全能够满足我们居民的消费需求。但也要看到，目前我们的口粮是充足，但未来饲料粮的需求会不断增加，这是因为随着我们生活水平的提高，我们对肉类的消费需求会增加，而且我国的资源环境经过多年的发展已经压力重重。因此，我们仍然要坚持国内国外两条腿走路，可以根据国际市场价格的波动情况适度购入粮食，但绝不能放弃“以我为主、立足国内”的根本策略。</p> <p style="text-indent: 2em;"> 作者系中国农业科学院农业信息研究所研究员</p> ]]></description>
        </item>
        <item>
            <title><![CDATA[百团大战纪念馆：让爱国主义精神一代代传递下去]]></title>
            <link>http://politics.people.com.cn/n1/2020/0824/c1001-31834985.html</link>
            <pubDate>2020-08-24</pubDate>
            <author>记者 杨珏 通讯员 范亚笑</author>
            <description><![CDATA[<p style="text-indent: 2em;"> <strong>【伟大历程 英勇壮举·</strong>纪念中国人民抗日战争胜利暨世界反法西斯战争胜利75周年<strong>】</strong></p> <p style="text-indent: 2em;"> 位于山西省阳泉市区西南10公里的狮脑山山顶，百团大战纪念碑犹如一把锋利的刺刀直冲云霄。雄伟的百团大战纪念碑坐北朝南，由主碑、三座副碑、一座大型圆雕、两座题字碑、4个烽火台和长227米蜿蜒起伏的长城组成。</p> <p style="text-indent: 2em;"> 1940年，抗日战争进入相持阶段后，日本侵略军一面对华北抗日根据地实行“囚笼政策”；一面在正面战场上集结重兵，阴谋进犯西南、西北，妄图迫使中国投降。在这紧要关头，为了粉碎日军阴谋，争取华北战局向好的方向发展，并影响全国的抗战局势，八路军总部决心向华北日军占领的交通线和据点发动大规模进攻战役。</p> <p style="text-indent: 2em;"> 百团大战纪念馆馆长陆茜介绍，百团大战历时5个多月，总共经历三个阶段。第一阶段从1940年8月20日至9月10日，主要任务是破坏敌人的交通、重点打击正太铁路。第二阶段是从1940年9月22日至10月5日，主要任务是消灭交通线两侧的敌人据点和碉堡。第三阶段是从1940年10月6日至1941年1月24日，百团大战的第一、第二阶段已经彻底破坏了正太铁路，所以丧心病狂的日军调集了数万名兵力对太行根据地实行了疯狂的报复扫荡，因此第三阶段就转入反扫荡阶段。</p> <p style="text-indent: 2em;"> 陆茜说：“百团大战一开始并不叫百团大战，而是叫‘正太路破袭战’。开始出动22个团，由于八路军广大指战员和抗日根据地民众参战积极性非常高，随着战斗打响，各部都投入了大量兵力，还有许多地方游击队和民兵纷纷参战，总兵力增至105个团，所以后来就改成了‘百团大战’。”</p> <p style="text-indent: 2em;"> 从事讲解工作4年的百团大战纪念馆讲解员李玘，每年都要讲解百余场。整理仪容仪表、检查讲解设备、进行班前会，是李玘每次讲解前必做的准备，“很多革命前辈的后代，通过多种途径辗转找到我们这里，为的就是在英烈墙上找到自己亲属的名字”。</p> <p style="text-indent: 2em;"> “还会有一些革命前辈来纪念馆参观，在展厅现场给我们讲述当时战场上的故事。这些故事让我们的讲解更加有血有肉。”李玘说，“百团大战还有一个特点是军民团结，在当地百姓的帮助下，八路军顺利将正太铁路重要节点全部炸毁。据不完全统计，在百团大战中，阳泉境内直接参战民兵有7400多人次，支前群众达20万人之多，足见人心所向、军民情深。”</p> <p style="text-indent: 2em;"> 陆茜介绍，百团大战是抗日战争中八路军在华北地区发动的一次规模最大、持续时间最长的进攻战役。在这次战役中，中国共产党领导的华北敌后抗日军民，齐心协力，前仆后继，同日本侵略者浴血奋战，充分表现了中华民族不屈不挠的战斗精神，在中国抗日战争史上写下了光辉的一页。</p> <p style="text-indent: 2em;"> “在每天的工作中，给游客们一遍又一遍地讲解这段历史，让革命先烈的爱国主义精神一代代传递下去，让人们珍惜现在来之不易的幸福生活，我觉得我们的工作特别有意义。”李玘自豪地说。</p> <p style="text-indent: 2em;"> 《光明日报》（ 2020年08月24日 03版）</p> ]]></description>
        </item>
        <item>
            <title><![CDATA[【发现最美铁路】“数”看江西革命老区的“高铁时代”]]></title>
            <link>http://politics.people.com.cn/n1/2020/0824/c1001-31834980.html</link>
            <pubDate>2020-08-24</pubDate>
            <author>人民网</author>
            <description><![CDATA[<p style="text-indent: 2em;"> 新华网北京8月24日电（记者刘琼）近日，中央网信办网评局、中国国家铁路集团有限公司党组宣传部组织开展“发现最美铁路·红色昌赣忆初心”网宣活动。记者先后走访南昌、吉安、赣州等地，感受“红色铁路”魅力。</p> <p style="text-indent: 2em;"> <strong>建设者：1330天的日夜奋战</strong></p> <p align="center"> <img alt="" src="http://www.people.com.cn/mediafile/pic/20200824/78/7664052799699903094.jpg" /></p> <p align="center" class="pictext"> 8月19日，龙南隧道顺利贯通。图为施工现场。新华网记者刘琼 摄</p> <p style="text-indent: 2em;"> 历经1330个日夜奋战，赣州至深圳高铁最长的隧道——龙南隧道19日顺利贯通，为赣深高铁全线如期建成运营奠定基础。赣深高铁是江西连通“粤港澳大湾区”的主要通道，通车后，赣州至深圳乘坐火车时间将由现在的7小时缩短至2小时。</p> <p align="center"> <img alt="" src="http://www.people.com.cn/mediafile/pic/20200824/40/2336193927313885700.jpg" /></p> <p align="center" class="pictext"> 8月19日，龙南隧道顺利贯通。图为施工现场。新华网记者刘琼 摄</p> <p style="text-indent: 2em;"> 中铁十六局赣深客专3标二分部安全总监张广飞介绍说，龙南隧道施工主要面临两大难点，第一是隧道长，龙南隧道是赣深高铁最长的隧道，全长10.24公里。第二是地质复杂，穿越12条断层带，平均不到一公里就有一条断层带。“施工过程中经常遭遇落石、泥石流、塌方等，开挖第8条断层带时出现好几次小的塌方。”张广飞记忆犹新。</p> <p align="center"> <img alt="" src="http://www.people.com.cn/mediafile/pic/20200824/79/4554142053655774879.jpg" /></p> <p align="center" class="pictext"> 隧道内的温度高达40摄氏度，结束作业的工人在用冰块降温。新华网记者刘琼 摄</p> <p style="text-indent: 2em;"> 再大的困难也挡不住铁路人。分段开挖实现“长隧短打”，有序推进工程建设；配备运用三臂凿岩台车、湿喷机械手、全液压自行式仰拱栈桥等成套设备，打造“智慧工地”提高施工效率；超前地质预报掌握围岩地质和水文情况；将超高分子逃生管和隧道施工救生舱应用于隧道施工，为施工人员提供“生命保障通道”……</p> <p style="text-indent: 2em;"> 他们用汗水与智慧突破艰难险阻，为老区人民开辟一条“快车道”。</p> <p style="text-indent: 2em;"> <strong>“夜行侠”：25秒背后的守护</strong></p> <p style="text-indent: 2em;"> 在昌赣高铁上有一座特殊的桥梁，叫赣州赣江特大桥。该桥是国内首座设计时速350公里大跨度高速铁路斜拉桥，被誉为“千里赣江第一桥”。</p> <p align="center"> <img alt="" src="http://www.people.com.cn/mediafile/pic/20200824/21/5605103125451539949.jpg" /></p> <p align="center" class="pictext"> 这是8月19日拍摄的赣州赣江特大桥。南昌铁路局供图 丁波 摄</p> <p style="text-indent: 2em;"> 中国铁路南昌局集团有限公司赣州工务段负责416公里高铁线路的检修，其中包括赣江特大桥。大桥全长2156.6米，高铁以300公里/小时的速度从这里通过只需25秒，安全通行的背后是一群“夜行侠”长期昼伏夜出、躬耕于毫厘之间的守护。</p> <p align="center"> <img alt="" src="http://www.people.com.cn/mediafile/pic/20200824/78/7532053712002653826.jpg" /></p> <p align="center" class="pictext"> 8月19日，路桥专业工程师张宏斌介绍工具袋里的检修工具。新华网记者刘琼 摄</p> <p style="text-indent: 2em;"> 大桥主塔高120.6米，其检修通道共有480级台阶，接近90度的坡度，中间没有休息平台，通道狭窄，一次只能通过一人，作业人员仅爬梯子上下就需要1个小时。“检修结束后，整个人都瘫在地上。”路桥专业工程师张宏斌说。</p> <p style="text-indent: 2em;"> 这样的检修每个季度至少一次，如果遇到强降雨、台风等突发情况，需要临时检修。张宏斌回忆道，前段时间，遇到今年第6号台风“米克拉”，作业人员从晚上10点一直忙碌到第二天凌晨4点。</p> <p align="center"> <img alt="" src="http://www.people.com.cn/mediafile/pic/20200824/55/1209416655100112423.jpg" /></p> <p style="text-indent: 2em;"> 8月12日凌晨两点，赣州工务段赣州高铁路桥工区工长宁建平攀登检查梯，检查桥塔斜拉索上部钢锚箱内设备状态。南昌铁路局供图</p> <p style="text-indent: 2em;"> “虽然工作艰辛，但这是我们的职责，保障铁路线路安全是我们最大的心愿。”张宏斌说。</p> <p style="text-indent: 2em;"> <strong>老区百姓：238天的变化</strong></p> <p style="text-indent: 2em;"> 1996年京九铁路通车，结束了赣南革命老区“地无寸铁”的历史；2019年昌赣高铁开通，井冈山、赣南等革命老区跨入“高铁时代”。截至8月20日，昌赣高铁已运营238天。</p> <p style="text-indent: 2em;"> 高铁为老区发展带来了什么？老区人民生活发生了哪些变化？</p> <p align="center"> <img alt="" src="http://www.people.com.cn/mediafile/pic/20200824/31/6087988816960351415.jpg" /></p> <p align="center" class="pictext"> 这是8月18日拍摄的昌赣高铁兴国西站。南昌铁路局供图 杨宝森 摄</p> <p style="text-indent: 2em;"> 和京九铁路一样，昌赣高铁也特意在“将军县”兴国县拐了一个大弯。江西红色旅游“五好”讲解员卢婷至今还清楚地记得京九铁路开通时妈妈背着她去看火车的情景。“现在高铁开通了，前段时间带着妈妈和婆婆去赣州，她们第一次坐高铁特别兴奋，还拍了抖音。”卢婷说，高铁开通后，来兴国旅游的人数大幅增加，希望越来越多的人能来兴国感受红色文化。</p> <p align="center"> <img alt="" src="http://www.people.com.cn/mediafile/pic/20200824/18/9854238483793493366.jpg" /></p> <p align="center" class="pictext"> 8月18日，明旺制衣厂负责人刘衍明接受记者采访。南昌铁路局供图 丁波 摄</p> <p style="text-indent: 2em;"> “以前交通不便，货进货出花钱花时间。”兴国县明旺制衣厂负责人刘衍明说，高铁开通后，进出货物、接洽客户都方便了。制衣厂不断发展壮大，吸引不少农民工回乡就业。2014年，制衣厂成为兴国县扶贫车间，招收了11名贫困户。“下一步打算扩大规模，把广州的公司搬迁回兴国，带着乡亲们一起脱贫奔小康！”刘衍明说。</p> <p align="center"> <img alt="" src="http://www.people.com.cn/mediafile/pic/20200824/33/4896560746009920073.jpg" /></p> <p align="center" class="pictext"> 这是8月18日拍摄的夏木塘村景色。 新华网记者刘琼 摄</p> <p style="text-indent: 2em;"> 吉安市万安县则直接进入“高铁时代”。离万安火车站不远的夏木塘村原来是“空心村”，年轻人大部分外出打工。在当地政府扶持下，重新改造变身“趣村”。夏木塘中华游戏村运营总监罗颂天介绍说，高铁开通后，来万安旅游的人多了，年轻人开始留在村里就业。</p> <p style="text-indent: 2em;"> “希望与周边景区连接起来互惠互利，带动更多就业，留住更多年轻人，留住乡愁。”罗颂天说。</p> <p align="center"> <img alt="" src="http://www.people.com.cn/mediafile/pic/20200824/65/745868508089839889.jpg" /></p> <p align="center" class="pictext"> 8月21日，一列中欧班列停靠在赣州国际陆港。南昌铁路局供图 丁波 摄</p> <p style="text-indent: 2em;"> 赣州国际陆港是中国第八个内陆开放口岸、首个内陆监管试验区，也是全国内陆唯一一个进口木材直通口岸。</p> <p style="text-indent: 2em;"> “受益于昌赣高铁，货运运能得到大量释放，大幅降低企业物流成本，带动当地经济发展。”赣州国际陆港运营管理部部长刘立平高兴地告诉记者。</p> <p style="text-indent: 2em;"> 赣州国际陆港站副站长薛斌举例说，从赣州开往哈尔滨的货运列车原来需要11天，现在只需5天。</p> <p style="text-indent: 2em;"> ……</p> <p style="text-indent: 2em;"> 在江西革命老区，因“铁”脱贫、因“路”致富的故事每天都在上演。高铁开通，增添的不仅是一条通道，更是逐梦未来的信心。这些背后凝聚了无数铁路人的艰苦奋斗，他们用一言一行诠释了人民铁路为人民的精神。</p> ]]></description>
        </item>
        <item>
            <title><![CDATA[绘好长三角一体化发展的“工笔画”]]></title>
            <link>http://politics.people.com.cn/n1/2020/0824/c1001-31834982.html</link>
            <pubDate>2020-08-24</pubDate>
            <author>徐向东</author>
            <description><![CDATA[<p style="text-indent: 2em;"> 8月20日，中共中央总书记、国家主席、中央军委主席习近平在安徽合肥主持召开扎实推进长三角一体化发展座谈会并发表重要讲话。他强调，要深刻认识长三角区域在国家经济社会发展中的地位和作用，结合长三角一体化发展面临的新形势新要求，坚持目标导向、问题导向相统一，紧扣一体化和高质量两个关键词抓好重点工作，真抓实干、埋头苦干，推动长三角一体化发展不断取得成效。</p> <p style="text-indent: 2em;"> 长三角一体化发展是习近平总书记亲自谋划、亲自部署、亲自推动的重大战略，是着眼于实现“两个一百年”奋斗目标、推进新时代改革开放形成新格局而作出的重大决策。长三角一体化发展战略实施一年多以来，三省一市和有关部门贯彻落实党中央决策部署，长三角一体化发展新局面正在形成。越是取得成绩，越要乘势而上，推动长三角一体化发展不断取得更加丰硕的成果。</p> <p style="text-indent: 2em;"> 一体化发展是区域协调发展的高级形态。长三角是我国经济发展最活跃、开放程度最高、创新能力最强的区域之一，在国家现代化建设大局和全方位开放格局中具有举足轻重的战略地位。一体化发展有利于推动长三角地区打破行政藩篱、提高政策协同，发挥三省一市比较优势，让各类要素在更大范围畅通流动，建设统一开放的市场体系，系统集成全面深化改革成果，强化跨区域共建共享共保共治，实现更合理分工，凝聚更强大的合力，促进高质量发展。</p> <p style="text-indent: 2em;"> 长三角一体化发展根本目的是实现高质量发展。长三角地区总体发展较快，是我国经济发展最好的区域之一，但仍存在着不少突出矛盾和问题，还未全面实现高质量发展。长三角区域要通过一体化推动，使自身成为全国高质量发展的样板区、示范区，成为全国高质量发展的动力源、引领区。</p> <p style="text-indent: 2em;"> 紧扣一体化和高质量两个关键词，推进长三角一体化发展取得更大成效。当今世界正经历百年未有之大变局，我国发展的内部条件和外部环境正在发生深刻复杂变化。面对严峻复杂的形势，要深刻认识长三角区域在国家经济社会发展中的地位和作用，坚决发挥好率先形成新发展格局、勇当我国科技和产业创新开路先锋、加快打造改革开放新高地这三大作用。要着力打造全国高质量发展样板区，扎实做好“六稳”工作，全面落实“六保”任务，保持经济稳定运行，加快产业优化升级。着力推进高质量创新，集中突破一批关键核心技术，协同推进原始创新、技术创新和产业创新，形成科技创新和制造业研发高地。推动高水平开放，促进自由贸易试验区高质量发展，打造高水平开放平台，完善市场化、法治化、国际化营商环境。强化高效协同，完善一体化体制机制，加强生态环境共保联治，促进基本公共服务便利共享。</p> <p style="text-indent: 2em;"> 天风浩荡长三角，披襟向洋奋楫先。长三角一体化发展不是一日之功，我们既要有历史耐心，又要有只争朝夕的紧迫感，既谋划长远，又干在当下。要紧扣一体化和高质量两个关键词，坚决落实好习近平总书记提出的七项重点任务，以高度的历史责任感绘好长三角一体化发展的“工笔画”，以钉钉子精神和抓铁有痕的力度扎实做好各项工作，努力开创长三角一体化高质量发展的新局面。（徐向东）</p> ]]></description>
        </item>
        <item>
            <title><![CDATA[王毅将对意大利、荷兰、挪威、法国、德国五国进行正式访问]]></title>
            <link>http://politics.people.com.cn/n1/2020/0824/c1001-31834977.html</link>
            <pubDate>2020-08-24</pubDate>
            <author>人民网</author>
            <description><![CDATA[<p> 　　新华社北京8月24日电 外交部发言人赵立坚24日宣布：应意大利外交与国际合作部长迪马约、荷兰外交大臣布洛克、挪威外交大臣瑟雷德、法国欧洲和外交部长勒德里昂、德国外交部长马斯邀请，国务委员兼外交部长王毅将于8月25日至9月1日对意大利、荷兰、挪威、法国、德国五国进行正式访问。</p> ]]></description>
        </item>
        <item>
            <title><![CDATA[外交部：支持TikTok等相关企业拿起法律武器维护正当权益]]></title>
            <link>http://politics.people.com.cn/n1/2020/0824/c1001-31834976.html</link>
            <pubDate>2020-08-24</pubDate>
            <author>人民网</author>
            <description><![CDATA[<p style="text-indent: 2em;"> 针对抖音海外版（TikTok）22日宣布将就美国政府涉及该公司及其母公司字节跳动的行政令提起诉讼，以维护自身合法权益，外交部发言人赵立坚24日说，中方支持相关企业拿起法律武器维护正当权益，也将继续采取一切必要措施坚决维护中国企业的合法权益。 （记者朱超、成欣）</p> ]]></description>
        </item>
        <item>
            <title><![CDATA[韩正在江苏调研时强调 加大创新驱动力度 强化生态环境治理 奋力推动高质量发展走在前列]]></title>
            <link>http://politics.people.com.cn/n1/2020/0824/c1024-31834726.html</link>
            <pubDate>2020-08-24</pubDate>
            <author>人民网</author>
            <description><![CDATA[<p> 　　新华社南京8月24日电（记者赵超）8月21日至23日，中共中央政治局常委、国务院副总理韩正在江苏南京、苏州、无锡调研。韩正强调，江苏要贯彻落实习近平总书记提出的“建设经济强、百姓富、环境美、社会文明程度高的新江苏”重要指示精神，坚持新发展理念，加大创新驱动力度，强化生态环境治理，奋力推动高质量发展走在前列。</p> <p> 　　韩正先后到网络通信与安全紫金山实验室和紫光工业云体验中心，考察互联网技术研发和应用情况。他指出，要强化顶层设计，加强力量整合，创新组织架构和体制机制，完善吸引和留住人才的政策措施，推动产学研深度融合，加快补齐关键核心技术短板，服务国家重大战略需求，推进网络强国建设。韩正在南瑞继保电气公司、华虹无锡集成电路研发和制造基地，了解高端制造业和战略性新兴产业发展情况，勉励企业聚焦主业，瞄准数字化、智能化，增强系统集成能力和自主创新能力，推动形成自主可控的现代产业体系。</p> <p> 　　韩正走进恒力集团、丘钛微电子科技、纬创资通等企业，了解企业复工复产、惠企政策落实和稳就业等情况。他指出，要有效应对外部环境变化，挖掘内需潜力，大力开拓国内市场，畅通上下游产业，积极维护产业链供应链稳定。在旭创科技、信达生物制药、药明生物技术、祥生医疗科技等企业，韩正强调，要加大研发投入，有效促进科技成果产业化，推动传统产业转型升级和新兴产业发展壮大。韩正还来到菲尼克斯电气、通力电梯、村田电子等企业，表示中国将坚定不移扩大开放，为外商投资提供更加良好的环境。</p> <p> 　　韩正来到扬子江生态文明创新中心，通过长江“生态眼”环境监测系统了解长江南京段水污染治理、生态修复、滨江环境整治情况；前往幕燕滨江风貌区，考察幕燕风光带综合整治和入江支流水环境治理情况，在燕子矶察看现场采样水质。他指出，要进一步巩固岸线整治成果，提高城市污水处理设施接入率和处理率，加快内河码头船舶岸电标准体系建设，推动长江大保护不断取得新进展。韩正在无锡乘船了解太湖水治理情况，登上拖山岛实地察看生态清淤试点工程建设情况。他强调，要抓住截污控源这个关键，科学有效清淤固淤，牢牢守住环境容量底线，确保饮用水安全，坚决把太湖治理好。</p> ]]></description>
        </item>
        <item>
            <title><![CDATA[刘鹤副总理在深交所创业板改革并试点注册制首批企业上市仪式上发表致辞]]></title>
            <link>http://politics.people.com.cn/n1/2020/0824/c1001-31834630.html</link>
            <pubDate>2020-08-24</pubDate>
            <author>人民网</author>
            <description><![CDATA[<p> 　　尊敬的李希书记、兴瑞省长、伟中书记，各位来宾，女士们、先生们、朋友们：</p> <p> 　　在深圳经济特区建立40周年之际，创业板改革并试点注册制顺利落地，这对于完善我国资本市场体系，助力粤港澳大湾区建设，乃至促进国民经济整体良性循环和经济高质量发展都具有重大意义。在此，我代表国务院表示热烈祝贺。</p> <p> 　　推进创业板改革并试点注册制，是党中央、国务院做出的重要决策部署，是资本市场建设承上启下的重要环节。它吸收科创板注册制改革的良好实践，为下一步中小板和主板注册制改革奠定基础。希望创业板更好服务成长型创新创业企业，与其他板块各有侧重、相互补充，形成多层次资本市场体系，增加市场包容度和覆盖面，支持更多优质公司在国内上市。</p> <p> 　　资本市场对于优化资源配置，推动科技、资本和实体经济高水平循环具有枢纽作用。当前，资本市场各项改革开放政策正在逐步落地，注册制改革和交易、常态化退市、投资者保护等各项制度建设正在有序推进，资本市场也从增量改革深化到存量改革，整个市场正在发生深刻的结构性变化。要逐步把上市公司的优胜劣汰交给市场，稳步增加长期业绩导向的机构投资者，回归价值投资的重要理念，推动信息充分披露，全面净化市场生态，建设诚信守法资本市场。同时，更加重视形势研判和主要关联因素分析，努力走在市场曲线前面，创造良性发展预期。“建制度、不干预、零容忍”是统一的、有机联系的整体，要继续坚持市场化、法治化、国际化方向，扎实做好完善资本市场基础性制度各项工作。</p> <p> 　　在党中央、国务院领导下，中国经济正处于不断恢复阶段，出现逐季向好的增长趋势，一季度大幅收缩，二季度快速恢复，三四季度经济增长预计将呈现更有活力的良好态势，在高质量发展轨道上和加快构建双循环新格局下，中国经济正稳健前行和不断升级。金融系统要贯彻落实好“六稳”、“六保”各项相关工作部署，更好服务、驱动、引领实体经济发展。在新的形势下，提高上市公司质量、形成体现高质量发展要求的上市公司群体是资本市场发展的关键环节，上市公司要改革完善治理结构，全面提升创新能力和市场开拓能力，弘扬企业家精神，坚决防范道德风险，加快形成核心竞争优势，在我国经济高质量发展中发挥创新“领跑者”和产业排头兵作用。</p> <p> 　　希望创业板越办越好，办出更大优势和特色。希望把深交所塑造成为优质的创新资本中心和世界一流的交易所。衷心祝愿大湾区建设和深圳市经济发展再上新台阶！谢谢大家！</p> ]]></description>
        </item>
        <item>
            <title><![CDATA[总书记推动的改革身边事｜人间重晚晴]]></title>
            <link>http://politics.people.com.cn/n1/2020/0824/c1001-31834624.html</link>
            <pubDate>2020-08-24</pubDate>
            <author>人民网</author>
            <description><![CDATA[<p> 　　<strong>（总书记推动的改革身边事·养老改革篇）记者观察：人间重晚晴</strong></p> <p> 　　新华社北京8月24日电　<strong>题：记者观察：人间重晚晴</strong></p> <p> 　　新华社记者</p> <p> 　　夕阳无限好，人间重晚晴。</p> <p> 　　当前，我国60岁及以上老年人口已超过2.5亿。让所有老年人都能老有所养、老有所依、老有所乐、老有所安——这是习近平总书记对亿万老年人深切的牵挂。</p> <p> 　　从推动公办养老机构改革，到全面放开养老服务市场，再到居家适老化改造工程“提速”，党的十八届三中全会以来，我国在养老服务领域改革“实招”“硬招”不断落地，给老年人带来了实实在在的获得感。</p> <p> 　　<strong>兜住底：公办养老机构改革按下“快进键”</strong></p> <p> 　　早晨八点半，成都市第一社会福利院的花园里传出阵阵音乐声。树荫下、凉亭里，老人们有的打太极、有的喝茶聊天，悠然自得。</p> <p> 　　“在这儿不仅三餐不愁，还交到了好朋友。”85岁的特困老人唐学孝入院前，一直独居在只有十几平方米的廉租房里，吃喝拉撒都要靠自己。2018年，在社区工作人员的帮助下，老人顺利入院，过上了“老有所养”的新生活。</p> <p> 　　作为兜底保障工作的重要一环，公办养老机构应优先保障孤老优抚对象以及经济困难的孤寡、失能、高龄老年人需求，为他们提供无偿或低收费的供养、护理服务。但长期以来，“一床难求”一直是公办养老机构头上挥之不去的“阴霾”。</p> <p> 　　近年来，在民政部等部门推动下，公办养老机构改革深入推进，从在全国范围内确定240家单位进行公建民营试点，到鼓励公办养老机构延伸服务，为周边社区、农村提供支持……围绕满足特困老年人需求这一重点，公办养老机构改革的“地基”越夯越实。</p> <p> 　　成都市第一社会福利院院长陈坤介绍，在当地政府支持下，福利院实现了整体搬迁。如今，12层高的疗养楼里，各类设施一应俱全，床位数也从此前的300余张增加至600张，服务能力大大增强。</p> <p> 　　城市之外，农村留守、独居和困难老人的养老往往是最容易被忽视的问题。</p> <p> 　　对农村养老机构实施标准化改造，建设政府扶持得起、农民用得上、服务可持续的农村互助养老设施……在各地积极努力下，改革的暖流正从城市延伸到乡村。</p> <p> 　　民政部数据显示，到2019年底，全国已有农村特困供养机构约2万家，已登记敬老院共有床位165.32万张。</p> <p> 　　<strong>添活力：社会力量托起“夕阳红”</strong></p> <p> 　　到2019年底，我国60岁及以上人口已达2.54亿人，占总人口比例达18.1%。作为托起“夕阳红”的“朝阳产业”，养老服务业的发展需要社会力量的广泛参与。</p> <p> 　　习近平总书记指出，我国老年群体数量庞大，老年人用品和服务需求巨大，老龄服务事业和产业发展空间十分广阔。</p> <p> 　　从2013年发布的《关于加快发展养老服务业的若干意见》到2019年的《关于推进养老服务发展的意见》，近年来，我国民办养老机构行业准入标准进一步放宽，投融资渠道进一步扩大。更具活力的社会力量的加入，让养老服务市场焕发着勃勃生机。</p> <p> 　　在位于广州市海珠区的民办养老机构“榕悦”，87岁老人曾锦棠已经度过了一年多充实而快乐的时光。</p> <p> 　　“到点吃饭，困了休息，不舒服了可以做理疗，无聊了也有各式各样的娱乐活动可供选择。”曾锦棠说，选择这里就是看中了它位置好、条件好，来了之后单调的生活也变得丰富多彩。</p> <p> 　　负责人陈瑶介绍，“榕悦”的定位是“社区养老服务综合体”，一方面为院内老人提供专业、多样的养老服务，另一方面还向周边社区延伸，为服务半径内的空巢、独居、生活自理有困难的老年人提供生活照料等多种服务。</p> <p> 　　在城市化水平高、老龄化程度深的广州，“榕悦”正是当地民办养老机构不断发展的一个缩影。据广州市民政局有关负责人介绍，在广州市现有220家养老机构中，民办养老机构占到了160家，全市73%的养老床位都由社会力量提供。</p> <p> 　　民政部数据显示，到2019年底，全国民办养老机构占比已超过50%，在北京、上海等地，这一数字已超过80%。</p> <p> 　　<strong>补短板：“居家+社区”养老助力应对“银发潮”</strong></p> <p> 　　调查显示，我国九成以上的老人倾向于居家养老。但对于数量众多的高龄、失能以及残疾老人来说，居家养老面临着重重障碍。</p> <p> 　　2020年7月，民政部等9部门联合印发的《关于加快实施老年人居家适老化改造工程的指导意见》引起社会广泛关注。意见明确的第一阶段目标，就是在今年年底前，采取政府补贴等方式推进符合条件的特殊困难老年人家庭实施居家适老化改造。</p> <p> 　　家住长沙市雨花区鄱阳小区的低保户龙新建今年62岁，患有高血压、冠心病的他曾几次在厕所滑倒，给生活带来极大不便。适老化改造工程实施后，他家不仅免费安装了防滑垫、墙壁扶手，还装上了可移动坐便椅和更加稳当的浴凳，生活安全系数大大提升。</p> <p> 　　“过去只能扶墙走，现在墙上有扶手，手上抓得紧了，心里也更踏实了。”龙新建说。</p> <p> 　　“居家养老目前仍是大多数老年人所接受的养老方式。”长沙市民政局局长陈昌佳表示，随着老年人年龄增长，身体机能下降，现有住宅功能甚至会转变为风险，居家适老化改造工程“提速”迫在眉睫。</p> <p> 　　长沙是居家适老化改造工程的“先行军”，2018年，长沙就开始实施“千户计划”，免费为特困老人住所进行适老化改造，并计划用5年时间分期分批推进，每年惠及1000户家庭。</p> <p> 　　建设具备全托、日托、上门服务等功能的社区养老服务中心，建立嵌入式养老机构，明确社区养老设施的配建、设计要求……从2016年起，民政部会同财政部开展居家和社区养老服务改革试点，形成了一批可复制、可推广的居家和社区养老服务模式。</p> <p> 　　从建设以居家为基础、社区为依托、机构为补充的养老体系，到“医养结合”探索初见成效、养老金连年提升、近3000万老年人享受高龄补贴……以改革为抓手，我国正交出一份应对老龄化问题的“中国式”答卷。（记者孙少龙、吴晓颖、谢樱、陆浩）</p> ]]></description>
        </item>
        <item>
            <title><![CDATA[普惠型小微企业贷款增28.4%]]></title>
            <link>http://politics.people.com.cn/n1/2020/0824/c1001-31834506.html</link>
            <pubDate>2020-08-24</pubDate>
            <author>人民网</author>
            <description><![CDATA[<P>　　本报北京8月23日电&nbsp;&nbsp;（记者欧阳洁、屈信明）银保监会最新数据显示，今年上半年，银行业金融机构普惠型小微企业贷款同比增长28.4%，五家大型银行较年初增长34.6%。新发放普惠型小微企业贷款平均利率5.94%，较2019年全年平均利率下降0.76个百分点。</P><P>　　与此同时，截至6月30日，不良普惠型小微贷款余额0.4万亿元，较年初增长9.25%，不良率2.99%，较各项贷款不良率高0.88个百分点。</P><P>　　银保监会新闻发言人表示，通过改革开放、科技赋能和加强管理，普惠金融正逐步实现精准滴灌，信用风险总体上完全可控，服务质效和风险管控同步提高。</P><P>　　截至6月末，全国金融精准扶贫贷款余额较年初增加3100多亿元。334个深度贫困县各项贷款增速高于全国贷款平均增速3.73个百分点。全国扶贫小额信贷累计发放4735.4亿元，惠及全部建档立卡贫困户的1/3以上。832个国家扶贫开发重点县农村基础金融服务覆盖率达99.6%。农业保险向43.8万户贫困户支付保障赔款6.1亿元。</P> <br><span id='paper_num'>　　《 人民日报 》（ 2020年08月24日 02 版）</span>]]></description>
        </item>
        <item>
            <title><![CDATA[为全球减贫事业探索有益路径(国际人士见证中国决战脱贫攻坚)]]></title>
            <link>http://politics.people.com.cn/n1/2020/0824/c1001-31834518.html</link>
            <pubDate>2020-08-24</pubDate>
            <author>人民网</author>
            <description><![CDATA[<table class="pci_c" width="400"> <tbody> <tr> <td align="center"> <img src="http://paper.people.com.cn/rmrb/images/1/20200824/1598209023519_1.jpg" /></td> </tr> <tr> <td> <p> 　　7月16日，在贵州省榕江县兴华乡摆贝苗寨，苗族妇女正在刺绣。近年来，摆贝苗寨在寨子里设置“扶贫车间”，组织苗族妇女生产制作苗族刺绣、蜡染等民族文化产品，在传承民族文化技艺的同时，增加了当地群众收入。<br /> 　　王炳真摄（影像中国）</p> </td> </tr> </tbody> </table> <table class="pci_c" width="400"> <tbody> <tr> <td align="center"> <img src="http://paper.people.com.cn/rmrb/images/1/20200824/1598209032039_1.jpg" /></td> </tr> <tr> <td> <p> 　　8月10日，四川省华蓥市的果农积极开拓线上销售渠道。图为果农正在拍摄丰收的葡萄。<br /> 　　邱海鹰摄（影像中国）</p> </td> </tr> </tbody> </table> <table class="pci_c" width="400"> <tbody> <tr> <td align="center"> <img src="http://paper.people.com.cn/rmrb/images/1/20200824/1598209038319_1.jpg" /></td> </tr> <tr> <td> <p> 　　8月9日，甘肃省临夏回族自治州积石山保安族东乡族撒拉族自治县一家扶贫车间的员工在服装加工生产线上作业。<br /> 　　新华社记者 邢广利摄</p> </td> </tr> </tbody> </table> <table class="pci_c" width="400"> <tbody> <tr> <td align="center"> <img src="http://paper.people.com.cn/rmrb/images/1/20200824/1598209044609_1.jpg" /></td> </tr> <tr> <td> <p> 　　在中国援毛里塔尼亚畜牧业示范中心内，中国专家在向当地牧民介绍苜蓿种植的相关知识。<br /> 　　本报记者 吕 强摄</p> </td> </tr> </tbody> </table> <table class="pci_c" width="400"> <tbody> <tr> <td align="center"> <img src="http://paper.people.com.cn/rmrb/images/1/20200824/1598209051409_1.jpg" /></td> </tr> <tr> <td> <p> 　　在井冈山脚下的江西省吉安市泰和县马市镇，大广高速公路穿镇而过，便捷的交通运输网络助力井冈山革命老区脱贫攻坚。<br /> 　　邓和平摄（影像中国）</p> </td> </tr> </tbody> </table> <p> 　　中国脱贫攻坚取得决定性进展，显著改善了贫困地区和贫困群众生产生活条件。国际人士认为，致力于消除贫困是中国共产党和中国政府对人民负责的表现，中国推进脱贫攻坚并主动分享减贫经验，对全球减贫事业具有重要意义，书写了人类反贫困历史新篇章</p> <p> 　</p> <p> <strong>　　统筹规划科学合理</strong></p> <p> <strong>　　——访波兰民主左派联盟党副主席安杰伊·舍伊纳</strong></p> <p> 　　本报驻波兰记者&nbsp;于&nbsp;洋</p> <p> 　　“中国仅用了40多年时间，就实现了数亿人口脱贫，这是人类发展史上的奇迹。”波兰民主左派联盟党副主席安杰伊·舍伊纳在接受本报记者专访时表示，中国的扶贫经验值得各国研究和借鉴。</p> <p> 　　舍伊纳曾多次到访中国，中国在脱贫攻坚工作上取得的成就给他留下深刻印象。“我去过北京、上海这样繁华的现代城市，也到访过一些相对落后的地区，无论在哪里，都能看到中国的飞速发展。每个地区都有自己的发展目标，尤其是在脱贫工作上，中国共产党和中国政府有着强烈的信念与使命感，各个地区都在不断探索适合自己的发展模式。”</p> <p> 　　在中国推进脱贫攻坚过程中，舍伊纳认为最值得借鉴的是科学合理的统筹规划，以及大力推进基础设施建设。“经过十几年的发展，高铁成为中国的‘名片’之一，高质量的基础设施建设有力促进贫困地区成功脱贫。我认为，各个国家、各个政党都应该认真研究中国的发展经验，并科学合理地利用这些经验。中国非常愿意与国际社会分享发展经验，这对全世界发展来说是一笔宝贵的财富。”</p> <p> 　　“2020年在中国的发展进程中是至关重要的一年。新冠肺炎疫情并没有动摇中国打赢脱贫攻坚战、实现经济社会发展目标的信心。中国经济开始复苏重振，为世界经济增长作出巨大贡献。”舍伊纳坚信，中国能够顺利完成脱贫攻坚目标任务，中国全面建成小康社会的愿景值得期待。</p> <p> 　　在舍伊纳看来，突如其来的新冠肺炎疫情给世界减贫事业带来压力。“疫情对人类是一次警示，提醒人类在追求发展速度的同时，也应注重与自然和谐相处、财富的公平分配以及团结与合作。习近平主席指出，人类是一个命运共同体，唯有团结协作才能应对各种全球性风险挑战。如果不能有效减少贫困、保护环境、消除不公平现象，发展就是不可持续的，终究会出现更多的问题。”</p> <p> 　　新冠肺炎疫情也对世界经济造成巨大影响。“世界经济的恢复发展与秩序重建需要国际社会的团结和合作。欧盟和中国应该进一步加强合作。”舍伊纳认为，波兰和中国可以加强在基础设施、可再生能源、绿色农业等领域的合作，携手实现两国经济的复苏重振与发展。</p> <p> 　　（本报华沙电）</p> <p> &nbsp;　</p> <p> <strong>　　顶层设计科学高效</strong></p> <p> <strong>　　——访黎巴嫩共产党总书记汉纳·加里卜</strong></p> <p> 　　本报驻叙利亚记者&nbsp;李&nbsp;潇</p> <p> 　　“无论是从帮扶人口的庞大数量，还是从不断拓展创新的减贫模式来看，中国在减贫事业上都取得了令人瞩目的成就。这不仅是中国减贫工作的巨大成功，更为全球减贫事业探索了有益路径。”黎巴嫩共产党总书记汉纳·加里卜在接受本报记者采访时表示，中国作为人口大国，稳步推进减贫工作并分享成功经验，将令世界受益。</p> <p> 　　“民众对于美好生活有着发自内心的向往，每个负责任的政府都有义务帮助其人民实现这一追求。”加里卜认为，消除贫困历来是重大的全球性挑战，中国作为全世界人口规模最大的国家，减贫工作面临严峻挑战。在中国共产党的有力领导下，数亿民众逐步有序地实现了减贫脱贫，这在整个国际社会的发展进程中是极为罕见的壮举。</p> <p> 　　在他看来，中国减贫事业取得举世瞩目的成功，首先源自于中国政府科学、高效的顶层设计，不断加强基础设施建设、推进教育扶贫和医疗健康扶贫；同时，相关扶贫政策的落实充分释放市场活力，做到因地制宜，人尽其才。</p> <p> 　　“中国在做好自身扶贫工作的同时，主动与国际社会分享减贫经验，为实现联合国2030年可持续发展目标中的减贫目标作出重大贡献。”加里卜表示，中国在减贫工作中采取的金融普惠、技能培训、就业咨询、易地搬迁和扶持当地特色产业等措施令人印象深刻，“特别是近年来蓬勃兴起的电商扶贫更是成效显著，也为当前很多致力于减贫工作的国家提供了可借鉴的思路”。</p> <p> 　　新冠肺炎疫情严重冲击全球经济。国际货币基金组织已数次下调全球经济增速预期。加里卜强调，对人员流动、货物运输、社会交往和经济运行的有效管控是做好防疫、抗疫工作的关键。当前这一特殊背景下，在2020年以及今后一段时间里，减贫工作应受到更多的关注与重视。</p> <p> 　　（本报大马士革电）</p> <p> 　&nbsp;</p> <p> <strong>　　基层工作扎实有效</strong></p> <p> <strong>　　——访哈萨克斯坦共产人民党中央书记科努罗夫</strong></p> <p> 　　本报驻哈萨克斯坦记者&nbsp;周翰博</p> <p> 　　“作为人口大国，中国即将如期实现脱贫目标，对于全球减贫事业具有重要意义。”哈萨克斯坦共产人民党中央书记科努罗夫日前在接受本报记者专访时表示。</p> <p> 　　今年1月，应中共中央对外联络部邀请，科努罗夫率哈萨克斯坦共产人民党代表团访问中国。代表团先后到访江西、福建等地，亲眼见证了中国扶贫工作取得的巨大成就。科努罗夫表示，数亿中国人成功摆脱贫困，这与中国共产党的坚强领导密不可分。</p> <p> 　　“在江西省井冈山市神山村，代表团成员走进老百姓的家里，感受他们成功脱贫后的幸福生活。”科努罗夫对中国的脱贫实践有了更深入的了解，“当地不仅有国家级的农业科技园，还建起了一个云集众多高科技企业的经济技术开发区。许多人在家门口找到了满意的工作。”</p> <p> 　　“基层党组织在带领群众脱贫致富过程中发挥了不可替代的作用。”科努罗夫介绍说，代表团在吉安县锦源村了解到，基层党员干部与辖区内的所有贫困户建立起一对一联系。基层党组织为贫困家庭设立电子数据库，逐一分析致贫原因，制定脱贫方案，指派专人协助落实。“如此精细化的扶贫工作令我们感到震撼。一个负责任的执政党就应该这样认真对待贫困群体，研究贫困问题。”</p> <p> 　　基层党组织的工作不仅仅体现在扶贫工作中，南昌市里洲社区的基层党建工作同样给代表团留下了深刻印象。在社区党支部的带领下，居民成立了志愿服务队，专门为生活不便的邻居提供帮助；小区内还设置了物品共享点，人们将不经常使用的物品放置在那里，供有需要的居民临时取用。“这种互助模式受到当地群众称赞，也充分说明中国共产党深入细致考虑群众需要，基层工作做得扎实有效。”科努罗夫说。</p> <p> 　　“我们非常重视学习中国的成功经验。当然，这种学习不是简单地照搬照抄，而是从经济、科技等各领域进行系统学习。”科努罗夫指出，“近年来，哈中两国的经贸联系越来越密切，相关合作给双方民众带来了实实在在的福祉。我们在文化、科研、医疗、旅游等各领域的合作前景都十分广阔。”</p> <p> 　　“面对突如其来的新冠肺炎疫情，中国无私帮助其他国家，积极向国际社会提供援助，为全世界树立了榜样。”科努罗夫表示，中国及时向需要帮助的国家提供医疗物资援助，派出医疗队协助当地抗疫，赢得国际社会广泛赞誉。“经受住疫情考验的中国人民会更加团结。中国一定能够在今年实现脱贫目标。”</p> <p> 　　（本报努尔苏丹电）&nbsp;</p> <p> 　　　</p> <p> <strong>　　发展农业脚踏实地</strong></p> <p> 　　（卢旺达）杰拉尔德·姆班达</p> <p> 　　改革开放以来，中国经济发展和各项社会事业取得举世瞩目的成就。中国脱贫攻坚取得决定性进展，数亿人摆脱绝对贫困。2020年是中国决胜全面建成小康社会、决战脱贫攻坚之年。突如其来的新冠肺炎疫情给世界各国经济发展带来冲击，但中国依然有信心实现全面脱贫的奋斗目标。</p> <p> 　　2019年夏天，我访问了中国许多地区，并同许多中国专家学者交流，希望找到中国快速发展的“钥匙”。</p> <p> 　　来到中国，才能切实感受到中国经济社会的飞速发展。短短几十年间，中国发展成为世界第二大经济体，改革开放是“关键一招”。中国吸收的外商直接投资不断增长，极大地促进了中国工业发展和经济增长。从深圳、珠海、汕头、厦门等经济特区开始，中国改革开放不断深入，整体发展水平不断提高。</p> <p> 　　中国农业发展取得巨大进步。从实行家庭联产承包、乡镇企业异军突起、取消农业税牧业税和特产税到农村承包地“三权”分置、打赢脱贫攻坚战、实施乡村振兴战略等，中国以脚踏实地的行动不断促进农业发展、增进农村人口福祉。我曾参观过位于四川彭州的一个现代化农场。那里，农业与电子商务紧密结合，农民可以便捷地在网上进行农产品交易，不断拓宽农产品销路。</p> <p> 　　扶贫减贫是中国经济社会发展的一大亮点。贫困发生率由2012年年底的10.2%降至2019年年底的0.6%，连续7年每年减贫1000万人以上……中国脱贫攻坚取得举世瞩目的成就。农村贫困人口大幅度下降，贫困地区生产生活条件和基础设施状况明显改善，经济社会面貌发生深刻变化。我曾访问过一些经济欠发达的西部地区，那里的扶贫故事更令人惊叹。精准扶贫政策高效有力，与贫困群众的实际需求相匹配，有针对性地帮扶困难群众。比如有些地区的贫困群众通过易地扶贫搬迁得以摆脱贫困。</p> <p> 　　在中国共产党的领导下，中国统筹推进疫情防控和经济社会发展。勤劳的中国人民不断创造着中国经济社会发展的伟大奇迹，为实现“两个一百年”的奋斗目标而努力。新冠肺炎疫情在全球的蔓延，让我们再次意识到人类是休戚与共的命运共同体。国际社会应该团结起来，携手抗击新冠肺炎疫情。</p> <p> 　　（作者为卢旺达治理署新闻与传播部主任，本报驻南非记者吕强采访整理）</p> <br /> <p> <span id="paper_num">　　《 人民日报 》（ 2020年08月24日 17 版）</span></p> ]]></description>
        </item>
        <item>
            <title><![CDATA[玛可河的日与夜（保护区里的年轻人（16））]]></title>
            <link>http://politics.people.com.cn/n1/2020/0824/c1001-31834519.html</link>
            <pubDate>2020-08-24</pubDate>
            <author>本报记者 姜 峰 贾丰丰</author>
            <description><![CDATA[<div id='paper_pc_play' align="center" style="padding:10px 0 15px 0"> <embed id="MediaPlayer460" src="http://tvplayer.people.com.cn/player.php/xml/L3B2c2VydmljZS94bWwvMjAyMC84LzE0LzU3MDVkZDQxLTI2NGItNDQ3Ni1hOGJlLWEyZTY0NmY5OWY0My54bWw=/skin/2/autonext/0/norecomm/1/playerByOsmf.swf" width="525" height="400" loop="true" autostart="true" wmode="transparent"></div> <TABLE class="pci_c" width="400"><TBODY><TR><TD align="center"><IMG src="http://paper.people.com.cn/rmrb/images/1/20200824/1598211265187_1.jpg"></TD></TR> <TR><TD><p>　　玛可河掠影。<BR/>　　玛可河林业局供图 </p></TD></TR></TBODY></TABLE><TABLE class="pci_c" width="400"><TBODY><TR><TD align="center"><IMG src="http://paper.people.com.cn/rmrb/images/1/20200824/1598211271127_1.jpg"></TD></TR> <TR><TD><p>　　冯智鹏给林木幼苗除草。<BR/>　　本报记者 贾丰丰摄</p></TD></TR></TBODY></TABLE><TABLE class="pci_c" width="400"><TBODY><TR><TD align="center"><IMG src="http://paper.people.com.cn/rmrb/images/1/20200824/1598211277397_1.jpg"></TD></TR> <TR><TD><p>　　卡日土保在巡山。<BR/>　　本报记者 贾丰丰摄 </p></TD></TR></TBODY></TABLE><TABLE class="pci_c" width="400"><TBODY><TR><TD align="center"><IMG src="http://paper.people.com.cn/rmrb/images/2020-08/24/14/rmrb2020082414p15_b.jpg"></TD></TR> <TR><TD><p></p></TD></TR></TBODY></TABLE><P>　　核心阅读</P><P>　　位于青海班玛县的玛可河林区，是三江源国家级自然保护区的一部分，也是三江源区域海拔最高、面积最大的原始林区。</P><P>　　育苗、观测、管护……这里，有一群年轻人，生活在林场、工作在林场。从青海省的木材基地，到省重点天然林资源保护工程区，玛可河林区的转变中，他们尽了一份力。</P><P>　　</P><P>　　在青海境内，大渡河被称为玛可河。</P><P>　　大河两岸，山高谷深，层峦叠翠，这里就是三江源区域海拔最高、面积最大的原始林区——玛可河林场。</P><P>　　平均海拔3100米，面积超过10万公顷，这里原是全省的木材基地，现已成为省重点天然林资源保护工程区。在这里，有一群年轻人，他们头枕玛可浪，相伴松山涛，用青春把玛可河林场这颗青藏高原上的“绿宝石”擦得越来越亮。</P><P>　　9：00&nbsp;</P><P>　　麦浪沟&nbsp;</P><P>　　管护员卡日土保，30岁</P><P>　　9公里巡线路</P><P>　　备齐风干的牛肉、拌好的糍粑，还有防晒的帽子、墨镜……卡日土保一天的工作，就在妻子贴心的叮咛中开始了。</P><P>　　今年30岁的卡日土保，是玛可河林场的一名生态管护员。他中等个头，头发自来卷，黝黑的面庞上挂着爽朗的笑容，粗壮的手臂显得格外有力。</P><P>　　卡日土保已经工作9年了。“喏！这就是我负责的地方。”搭上卡日土保的摩托，记者来到了他负责巡护的区域——麦浪沟。阳光透过高耸的云杉洒下来，林中传来阵阵鸟鸣。没走几步，人就喘不上气来。抬头一看，卡日土保却已经在高处，正给一棵圆柏“体检”。</P><P>　　“森林管护防火、病虫害预防报告、野生动植物监测等，都是我的工作职责。”谈起工作，有点内向的卡日土保打开了话匣子，“我相信，树跟人一样，是有生命的，会生病，也需要关爱，它们像群沉默的朋友”。</P><P>　　生于斯、长于斯，卡日土保对这里的一草一木都充满感情。在班玛县，由村子承包林地、村民共同保护的“社区共管模式”逐渐成熟，卡日土保的父母也都参与其中。“每天光是看着这青山绿水，心里都舒坦。”卡日土保感叹。</P><P>　　一条条弯弯曲曲的小径通往山顶，仿佛一根根经络遍布林场。“这都是我们管护员和乡亲们共同踩出来的。”卡日土保指着脚下的路说：“现在还好。到冬天，踏雪巡护，一趟下来，衣服外面结冰、里头出汗，眼睫毛上都是雪花。即便这样，管护员们还是坚持每天巡护，因为只有走一趟，心里才踏实。”</P><P>　　在玛可河林场，有233名像卡日土保一样的管护员，其中30岁以下的约占30％。每人每天大约走9公里山路，每年工作300天以上，巡护已经成了他们生活中的重要内容。这其中，有枯燥寂寞，也有欢声笑语。临近晌午，大家找块空地拿出食物，围坐一圈吃饭、唱歌，兴致高了，还有人跳起了锅庄。卡日土保拿出手机，录了一段视频传给妻子，伴着电话那头的笑声，大家继续踏上了巡护的路。</P><P>　　14：00&nbsp;</P><P>　　灯塔乡&nbsp;</P><P>　　“保育员”张启成，30岁</P><P>　　5个笔记本</P><P>　　午后的阳光颇有几分毒辣。沿着玛可河一路往下，4米多宽的小路上，滚石、滑坡的痕迹随处可见。来到灯塔乡，张启成开始例行的野外调查。</P><P>　　“刚来的时候怕，现在已经习惯了。”绿色皮卡里说话的这位小伙子，叫张启成，是玛可河林业局林业调查规划设计队的一名队员。从西南林业大学毕业后，他在广西种过速生林，在西宁干过园林绿化。一次偶然的机会，他来到了玛可河林场，今年已经是他在这里工作的第四个年头。</P><P>　　“从西宁出发，大车颠簸了17个小时才到林场，路上一个急转弯，行李铺盖都被甩到河里，我当场没忍住就哭了。”回忆起第一次来玛可河林场时的情形，张启成笑了起来，“到林场后，同事们的热情消解了失落。特别是第二天早上一睁眼看见巍峨连绵的青山、高耸入云的古树……玛可河畔一下子吸引了我”。</P><P>　　克服了想走的冲动，把寂寞转化成热情，很快，林学专业出身的张启成就找到了用武之地。野外调查、作业设计、方案编制，从理论到实践，从新手到行家，张启成有自己的感受：“这里真的是进行相关研究的宝库，是我们实践的舞台，更是我们学习的课堂。”如今，他对林场里各片区的树种及生长情况了如指掌，5个笔记本上密密麻麻的字迹，见证了青春，也记录了成长。</P><P>　　查看地形、标准测量、乔灌草调查……这些专业名词已经占据了张启成的生活。“我的工作就两个方面：一是为植树造林做好前期准备，二是观测已栽植树木的生长情况。前者好比先遣队，后者类似保育员，为的都是让树林长得更好、更健康。”他说。</P><P>　　如今，林场里有本科以上学历的正式职工达72人，占员工总数近一半。思维的碰撞，经常会有意想不到的成果：2017年至今，玛可河林场生移栽苗总量从40万株提升至400万株，新育苗保存率从30%提升至85%，林场营造林工程的质量实现突破。但对张启成和他的同事们来说，最有意义的不止于此。</P><P>　　之前，玛可河两岸的居民以伐木为生，大片的原始森林遭到破坏，人与林的关系极度紧张。“而现在，每年5月，植树季一到，当地的植树工人们全家上阵，平日里人烟稀少的山谷中热火朝天，那场面像盛大的节日。”张启成摸摸头，笑着说：“我相信，家家参与、人人动手，这样的植树更有意义。”</P><P>　　20：00&nbsp;</P><P>　　温室大棚&nbsp;</P><P>　　育苗人冯智鹏，29岁</P><P>　　百万株幼苗</P><P>　　8月的青海南部地区，天黑得很晚。夕阳热烈地燃烧着，玛可河林场的大院，迎来了一天中的欢乐时刻。</P><P>　　篮球场上，抢断、投篮，激战正酣；办公楼前的广场上，欢快的音乐伴着旋转的舞步，锅庄是姑娘们的最爱……如果这些是激情最直接的表达，那么智能温室里，则有对激情的另一种诠释。</P><P>　　温度调节、墒情测试、长势记录……29岁的冯智鹏正加班加点，观测一批自主培育的树苗。一个个纸杯大的穴盘内，卫茅、冷杉、四川丁香的幼苗正茁壮成长。“这是我们的育苗基地，近百万株未来的参天大树在这里迈出成长的第一步。”冯智鹏自豪地介绍。</P><P>　　玛可河地区海拔较高，可选择栽植的树种少，从外地移植的树种成活难度大，所以，自主培育就显得尤为重要。为此，玛可河林业局营林部展开科研攻关，从川西云杉母树林研究，到鳞皮云杉播种育苗技术突破；从低效灌木林更新改造，到果洛野生种子植物比较……如今，高原造林的关键问题已经基本得到解决。</P><P>　　玛可河林业局营林部部长马应龙告诉记者：“2014年至今，我们年出圃的优质上山苗从10万株提升至90万株；各类苗木库存量从300万株提升至1400万株。这个成绩离不开这些年轻人的贡献，他们是绝对的主力。”</P><P>　　说着，马应龙带记者来到另一处大棚里——川贝种植基地。“作为中药材，川贝吸引了许多居民采挖，林场植被受到很大影响。后来，我们决定建一个川贝种植基地。把种子无偿分发给当地群众，这样既能减少采挖对植被的影响，还能帮他们致富，一举两得！”马应龙介绍，“目前，川贝种植面积已经达到3亩，预计在未来5年内，就可以实现推广。”</P><P>　　结束一天的采访，走出川贝种植大棚，天色已经暗淡。远处宿舍楼上的点点灯光透过玻璃，照亮了林场的路，仿佛也照亮了背后的山。</P><P>　　</P> <br><span id='paper_num'>　　《 人民日报 》（ 2020年08月24日 14 版）</span> <div style="padding:5px 15px 25px;" id="xgyd"> <h4 style="border-bottom:1px dashed #a01211; "></h4> <span class="tz_input" style="width: 104px;height: 26px;font-size: 16px;display: block;vertical-align: middle;text-align: center;line-height: 26px;margin-top: 20px;margin-bottom: 20px;"><a style="color: #A01211;font-weight: bold;display: block;text-decoration: none;border:1px dotted red;" href="http://v.people.cn/n1/2020/0814/c364580-31823101.html" target="_blank">延伸阅读</a></span> </div>]]></description>
        </item>
        <item>
            <title><![CDATA[山乡农产品 对接大市场（东西部扶贫协作一线探访）]]></title>
            <link>http://politics.people.com.cn/n1/2020/0824/c1001-31834514.html</link>
            <pubDate>2020-08-24</pubDate>
            <author>本报记者 贺 勇 丁志军</author>
            <description><![CDATA[<p> 　　内蒙古赤峰市林西县十二吐乡巴吉沟村，一片齐腰高的谷子长势正旺，58岁的村民宗宝民正忙着田间管理；</p> <p> 　　十二吐乡的绿然农产品销售专业合作社，理事长郑国春和工人们一道加工米面、装箱封口；</p> <p> 　　北京岳各庄农副产品批发市场农副产品展示配送中心，一盒盒包装精美的“乌兰沟”牌小米、莜面、荞麦面陈列其中，引来许多市民前来购买……</p> <p> 　　三个看似不相关的场景，却因“消费扶贫”而紧紧联系在一起。深化东西部扶贫协作，北京市对口帮扶内蒙古自治区。从生产、加工、销售等环节入手，北京全力打造“产供销全链条”消费扶贫模式，让首都市民的消费需求与内蒙古生产的优质农副产品精准对接。2018年和2019年，内蒙古31个国家级贫困旗县累计向北京市场销售价值52亿元的七大类491种特色农产品，带动近10万贫困人口增收。</p> <p> <strong>　　经营菜棚，成致富能手</strong></p> <p> 　　“还是得从一亩三分地上找突破口”</p> <p> 　　“今年西红柿价高，能卖好价钱。”72岁的十二吐乡乌兰沟村村民宋国发喜上眉梢……</p> <p> 　　乌兰沟全村有2.3万亩耕地，大部分是望天收的旱田，水浇地仅占14%。村民生活也不富裕，最多时建档立卡贫困人口有238户384人，人均收入全县最低。</p> <p> 　　“还是得从一亩三分地上找突破口。”村党支部书记、村委会主任赵秀宏说，在县乡帮助下，乌兰沟确立了发展设施农业的思路，利用500万元扶贫协作资金，建起55个暖棚及配套水电设施。“产权归村里，对外出租，所得款项用于公益岗位支出、壮大村集体经济。”</p> <p> 　　到了收获季节，第一茬西红柿成熟，乡亲们不免担心：这么多西红柿怎么卖？正在这时候，北京挂职干部牵线搭桥，北京各大商超的订单纷至沓来。</p> <p> 　　“宋国发经营3个棚，如今不仅摆脱了贫困，还变成了致富能手。”赵秀宏说，设施农业还带动了50多户贫困户在家门口就业。</p> <p> 　　远远望去，十二吐乡的达康扶贫产业园里，1000多个日光温室大棚在阳光映射下，宛如一片银色海洋。十二吐乡党委书记谢艳丽介绍，2018年以来，达康扶贫产业园累计利用帮扶资金1915万元，园区大棚蔬菜规模发展到9300多亩，“去年大约有1万吨西红柿被卖到了北京的超市，实现销售收入4000余万元。”</p> <p> <strong>　　养殖蛋鸡，助脱贫增收</strong></p> <p> 　　“摘掉贫困帽，日子越过越有奔头”</p> <p> 　　经过严格的杀菌等消毒环节，记者走进了位于林西县的德青源养殖场。53岁的杨卫东正手拿蛋托，忙着分拣鸡蛋……</p> <p> 　　杨卫东是林西县新林镇鹿山村人，过去在锡林郭勒打工，谁料有一年返乡途中遭遇车祸，失去了一条腿。生活本就拮据，安装假肢又花了20多万元，妻子身体也不好，杨卫东愁得睡不着……</p> <p> 　　2016年底，依托扶贫协作平台，北京德青源农业科技股份有限公司与林西县合作建设产业扶贫项目。“项目总投资3.75亿元，养殖240万只蛋鸡，仅用了168天就完成了工程建设。”林西德青源项目负责人武利说。</p> <p> 　　德青源给扶贫项目定下一个硬指标：贫困人口比例不低于职工总数的30%。目前，该项目已吸纳55名贫困人口参与。</p> <p> 　　2018年12月，杨卫东进入德青源公司从事蛋品分拣工作，“每天干8小时，活儿不累，月工资3000元左右。”</p> <p> 　　十二吐乡下仗房村建档立卡贫困户刘利国，也是德青源扶贫项目的受益者，如今月工资4500元。妻子丁亚丽在厂里做饲养员，每月工资收入3300元，“当了大半辈子农民，头一回每月挣到这么多钱。摘掉贫困帽，日子越过越有奔头。”</p> <p> 　　每天清晨，一辆辆运输车驶出德青源厂区，开往北京延庆生态农场。经过清洗、紫外线杀菌、喷码、分级包装等工序，大量新鲜鸡蛋销往北京各大市场……</p> <p> <strong>　　建起基地，家门口就业</strong></p> <p> 　　“蔬菜丰收了，村民也能拿到高工资”</p> <p> 　　8月2日深夜1点，一辆满载着2万斤圆白菜的货车，缓缓驶入北京丰台岳各庄批发市场，这是来自林西县官地镇新民村岳各庄绿色蔬菜种植基地的今年首批成熟蔬菜，将有近30吨的圆白菜陆续进京。400亩蔬菜基地不仅承载着新民村140多户贫困户的脱贫致富希望，也将给北京市民提供大量绿色蔬菜。</p> <p> 　　走进林西县官地镇新民村，一片整齐划一的菜地映入记者眼帘。贫困户许殿文一边忙活，一边介绍着他家的好日子：“家有14亩地，过去一年收入只有几千元。去年，把7亩多地流转给种植基地，每年流转费3000元，在基地打工每天100元，一年下来，挣了2万多元。”</p> <p> 　　据了解，北京市丰台区卢沟桥乡岳各庄村、郑常庄村投资两亿元，在林西县建设北京岳各庄农副产品交易中心林西项目，还在新民村流转了400多亩土地作为蔬菜种植基地。像许殿文一样，很多村民在蔬菜种植基地上班，实现了家门口就业。</p> <p> 　　“这里土地肥沃，蔬菜长势旺盛。”来自北京岳各庄农副产品交易中心的基地负责人张万强说：“蔬菜丰收了，村民也能拿到高工资。”</p> <p> 　　新民村党支部书记、村委会主任陈松杰说：“几十个村民在这里上班，村里21户贫困户全都实现脱贫，大家都盼着能再扩大土地流转规模。”陈松杰的愿望正在变成现实：眼下，林西项目正加快建设，预计今年10月就能投入使用。</p> <p> 　　岳各庄村党总支书记戴鹏飞介绍，根据估算，林西项目建成后，每年交易量将达到3亿公斤，交易金额将达28亿元，促进当地农民稳步增收。“下一步，我们还会根据实际情况，做大做强蔬菜种植基地项目，吸纳更多当地村民回村干事创业。”戴鹏飞说。</p> <p> 　　</p> <br /> <p> <span id="paper_num">　　《 人民日报 》（ 2020年08月24日 06 版）</span></p> ]]></description>
        </item>
        <item>
            <title><![CDATA[创新加力 发展加速（经济聚焦）]]></title>
            <link>http://politics.people.com.cn/n1/2020/0824/c1001-31834515.html</link>
            <pubDate>2020-08-24</pubDate>
            <author>本报记者 谢卫群</author>
            <description><![CDATA[<p> 　　核心阅读</p> <p> 　　按照“系统改革、集成创新”原则，上海自贸区临港新片区一系列改革有序推进。不断优化营商环境，建设洋山特殊综合保税区，开展金融创新试验……今年以来，临港新片区坚持疫情防控与经济发展两手抓，制度创新协同发力，确保了“热度不减、势头不减、改革力度不减”，区域发展跑出了加速度。</p> <p> 　　</p> <p> 　　一年前的8月20日，中国（上海）自贸试验区临港新片区揭牌成立。一年间，按照“系统改革、集成创新”原则，临港新片区一系列改革有序推进。</p> <p> 　　上海市政府副秘书长、临港新片区管委会常务副主任朱芝松介绍，今年以来，临港新片区坚持疫情防控与经济发展两手抓，制度创新协同发力，确保了“热度不减、势头不减、改革力度不减”，区域发展跑出了加速度：从总体方案中分解出的78项政策和制度创新任务完成过半，已落地45项，另有22项已形成方案。</p> <p> <strong>　　致力形成更加高效公平、可预期的投资环境</strong></p> <p> 　　“无人干预自动办理”，建设项目水土保持方案审批事项每项业务从原先的至少跑一次、提交3份材料、办理7天、审核10多项信息，压缩到目前零跑动、在线提交1份材料，全程仅需5分钟，实现自动审批办结。前不久，进平科技新能源项目从签约到取得施工许可证，仅用时4个月，临港新片区再一次刷新了服务速度。</p> <p> 　　不仅如此，临港新片区全力推进审批流程再造，提出了26条涉及政府和企业投资项目全流程的审改措施，推出“容缺后补”“区域评估”“多评合一”等新流程。通过一系列流程再造，投资项目的进程大大加快。</p> <p> 　　据了解，临港新片区地跨上海浦东新区、奉贤区两个行政区。此前，临港新片区内市场主体营业执照由浦东新区、奉贤区的市场监督管理局分别承担审核工作。今年3月，新组建的临港新片区市场监督管理局，对原有的跨区行政职能进行整合，为区内企业开展活动、申请政策提供了便利。</p> <p> 　　朱芝松介绍，截至目前，临港新片区全面推进51项涉企经营许可事项“证照分离”改革，其中1项审批改备案，22项实行告知承诺，28项优化服务方式。</p> <p> 　　随着营商环境不断优化，资源要素正加速集聚。一年间，新落户临港新片区的企业达15115家，签约项目358个，总投资2713.63亿元。外商到临港新片区投资尤为踊跃，自揭牌至6月底，共新设外商投资企业260家，其中外商独资企业占比70%。</p> <p> <strong>　　聚焦高标准目标，建设洋山特殊综合保税区</strong></p> <p> 　　车行至东海大桥前，一排拱形的大字引人注目：洋山特殊综合保税区。这是全国151个海关特殊监管区域中唯一的特殊综合保税区，也是代表临港新片区高标准贸易自由的区域。2020年1月17日，国务院批复同意设立洋山特殊综合保税区。5月12日，一期封关，5月16日正式挂牌。</p> <p> 　　记者了解到，特殊综合保税区有着特殊的发展目标：进一步集聚跨境贸易、高端航运、国际供应链管理、国际高端制造及相关服务业等创新型高附加值产业。</p> <p> 　　国际中转集拼业务，是衡量国际枢纽港口发展程度的重要指标。临港新片区针对上海远洋航线集中在洋山港、近洋航线集中在外高桥港口的现状，会同上海海关等监管部门，积极突破跨关区中转难题，增强全球枢纽港国际中转集拼枢纽功能。</p> <p> 　　为此，上海海关批准上海深水港国际物流有限公司设立国际转运集拼监管中心，对集拼货物实行闭合式、信息化、集约化管理，完成了国际中转集拼的海运舱单模式下的全流程试单操作，并多次提速试单，通关效率和便利化程度均大幅提升。</p> <p> 　　为支持区内高标准贸易，海关总署制定洋山特殊综合保税区监管办法、支持临港新片区重点产业创新发展的若干措施等文件，取消不必要的贸易监管许可和程序。同时，依托一体化信息管理服务平台，形成精准智能无感的电子围网监管体系。</p> <p> 　　揭牌至今，洋山特殊综合保税区内新注册项目163个，注册资本金98.2亿元，其中亿元以上项目11个，正在推进项目123个，预计投资金额151.3亿元。</p> <p> <strong>　　聚焦资金便利收付，开展金融创新试验</strong></p> <p> 　　短短一年间，临港新片区的金融领域探索成果不断。</p> <p> 　　今年5月8日，中国人民银行上海总部会同临港新片区管委会、上海银保监局、上海证监局和上海市金融工作局联合发布“金融50条”，支持在临港新片区开展各类金融创新试验。开展跨境人民币结算便利化试点，就是其中的重要一项。</p> <p> 　　中船海洋动力技术服务有限公司是中船集团唯一一家对外提供售后服务保障的平台企业，服务贸易跨境收支笔数较多且结算频繁，对跨境收支简化单据审核需求迫切。浦发银行通过尽职调查将该企业列为优质企业后，企业无需事前提交单据，即可办理服务贸易项下跨境收付业务。</p> <p> 　　企业相关工作人员表示，与原先相比，省去了事前准备资料、银行审核等环节，时间节约了1个工作日，大大提升了企业内部资金管理的效率。政策的利好让客户愈发感慨临港新片区金融业务与国际接轨的步伐越来越快。</p> <p> 　　浦发银行董事长郑杨谈道，临港新片区正给金融业的发展带来机会，借助临港新片区金融先行先试改革试点政策，各类金融机构正加强金融产品创新，为一大批要素市场提供优质服务，助力上海国际金融中心加快创新步伐。</p> <p> 　　因为金融创新力度不断加大，一批金融机构向临港新片区集聚，总规模2000亿元的中国国有企业混合所有制改革基金等一批标志性项目，已在临港新片区落户。</p> <br /> <p> <span id="paper_num">　　《 人民日报 》（ 2020年08月24日 10 版）</span></p> ]]></description>
        </item>
        <item>
            <title><![CDATA[药价降低 质量不低]]></title>
            <link>http://politics.people.com.cn/n1/2020/0824/c1001-31834510.html</link>
            <pubDate>2020-08-24</pubDate>
            <author>本报记者 李红梅</author>
            <description><![CDATA[<p> 　　核心阅读</p> <p> 　　日前，第三批国家组织药品集中采购正式开标，拟中选药品平均降价53%，最高降幅95%。本次采购共纳入56个品种，品种数量接近前两批之和。参与集中采购的药品为原研药或通过一致性评价的仿制药，这意味着国家药监部门已对这些药品进行了质量认证，价格降低，质量监管要求不会降低。</p> <p> 　　</p> <p> 　　8月20日，采购规模达数百亿元的第三批国家组织药品集中采购在上海开标，并产生拟中选结果。本次采购共有189家企业参加，产生拟中选企业125家，拟中选药品品规191个，平均降价53%，最高降幅95%。</p> <p> <strong>　　采购品种接近前两批之和</strong></p> <p> 　　本次采购共纳入56个品种，品种数量接近前两批之和，涉及糖尿病、高血压、心血管、抗感染、肿瘤等疾病用药。一些临床用量较大的品种如二甲双胍备受关注，44家药企参与了该品种投标。最终，55种药品的191个品规中选。</p> <p> 　　从第三批开始，国家组织药品集中采购常态化运行，集采规则、政策体系、工作机制已基本定型，并进一步巩固和完善。与第二批集采相比，第三批采购规则仅做微调优化，最大可中选企业数量从原来的6家，进一步增加到8家。阿莫西林、头孢地尼、头孢克洛、克拉霉素等抗生素和注射剂品种的约定采购量相对其他品种缩减，以控制临床抗菌类药物用量，推动药品合理使用。同时，品规更多，能更好满足人们的用药习惯。</p> <p> 　　此次集中采购坚持“国家组织、联盟采购、平台操作”的总体思路和工作机制；坚持带量采购、招采合一、确保使用。</p> <p> 　　开标当天，现场济济一堂，参加企业数量多达180多家，超过前两批参与的数量。多家原研药企业积极参与集采，给出了降幅较大的有效报价，最终3款原研药入围，降幅最大的超过90%，受到人们关注。本土仿制药企业参与度非常高，一些产品申报企业数量创新高，如二甲双胍、卡托普利、孟鲁司特钠等，参加报价的企业多达七八家，甚至几十家。拟中选率也较高，2/3的申报企业入围。</p> <p> <strong>　　挤出价格虚高，保证产品质量</strong></p> <p> 　　二甲双胍、卡托普利是竞争激烈的两大品种，在大量厂家报价后，最低价达到每片1分4厘、5厘钱。很多人会问，低至1分钱的价格是否过低？药品质量有没有保证？</p> <p> 　　实际上，1分钱不是购买药品的价格，而是每片/粒的价格，是药品用于申报竞价时的最小制剂统计单位，以方便比价。购买药品时的价格是一盒或一瓶，分为各种规格，总价是几元钱、几十元钱不等。由于参与集采的药品要求是原研药或通过一致性评价的仿制药，这意味着国家药监部门已对这些药品进行了质量认证，即使价格降低，质量监管要求也不可能降低。</p> <p> 　　记者对比集采文件给出的二甲双胍、卡托普利最高有效申报价，大部分都在每片2分钱、3分钱左右，价格也不高。根据规则，最高有效申报价采用的是市场平均价格，国家组织的药品集采确保了中选药品的市场份额，在这种情况下，药价再降低一部分，减掉不需要开展的销售环节成本，完全可以靠规模效益实现薄利多销。</p> <p> 　　而关于质量的问题，国家医保局医药价格和招标采购司负责人表示，第三批国家集采坚持高质量标准，仍将通过质量一致性评价作为仿制药入围的条件。</p> <p> 　　齐鲁制药在此次集采中有8个品种入围名单，涉及肿瘤、心血管系统等治疗用药。目前，该企业已经有38种通过一致性评价的药品，是通过一致性评价产品最多的厂家。值得注意的是，在集采中收益较大的厂家往往是产品过评数量较多的大厂家。它们规模较大，原料药自给自足，产品线稳定，并有多个创新药品、首仿药品，成本控制得好，质量有保证，综合实力较强。这些企业的竞争力将越来越凸显。</p> <p> 　　北京大学药学院教授史录文认为，我国上市药品都是按严格的程序生产，尤其老产品经过千锤百炼，通过仿制药一致性评价，质量完全可靠可控。同时，在临床上也要合理用药，确保患者用药安全。</p> <p> <strong>　　患者减轻负担，药企降低成本</strong></p> <p> 　　在拟中选名单中，大部分原研药因报价过高未中选，被国内仿制药取代。这意味着老百姓药费大大降低，但药品质量仍然过硬。</p> <p> 　　“国家组织的药品集中采购保证质量，解决了原来集中采购没法带量、及时回款的问题，配套政策到位，以集采为突破口，实现‘三医’联动，仿制药替代原研药效应逐步显现。”史录文说，由于仿制药价格下降，质量有保证，患者使用一段时间后，越来越放心，对仿制药需求开始增加。随着一致性评价不断扩容，国内大企业主动树立仿制药形象，促进企业不断整合，形成市场品牌效应。国内企业有更多精力专注研发，在保证仿制药品牌的条件下，推动民族工业由仿制药向创新药转化。</p> <p> 　　原研药参与度高，但中选少，是不是将来公众用不上原研药？</p> <p> 　　记者了解发现，这与企业本身市场策略有关，毕竟集采药品只覆盖了药品部分用量，还留有未集采药品的空间。但从长期来看，这只是过渡期现象。</p> <p> 　　按照2019年出台的《国务院办公厅关于印发国家组织药品集中采购和使用试点方案的通知》，原则上对同一通用名下的原研药、参比制剂、通过一致性评价的仿制药，医保基金按相同的支付标准进行结算。价格与采购价相比较高的，要在两到三年内调整到位。这意味着将来同类药品医保支付价格都将是一样的。参保患者想买价高的药品，就得自付更多费用。</p> <p> 　　复旦大学公共卫生学院教授胡善联认为，三次国家集采覆盖的品种达到上百种，对未来提高药企集中度，规范药品流通环节，建立医保药品的支付标准，改善医院用药目录，提高患者用药可及性，降低医疗费用起到了很大作用。</p> <p> 　　中国社科院人口与劳动经济研究所健康经济研究室主任陈秋霖说，与前面两批集采相比，第三批采购量更大了。经过前两批集采，企业已适应现有集采机制，反过来证明前两批集采取得了不错的效果。“前两批集采实施效果也证明了国家组织带量采购的价值。该政策既符合行业规律，也符合当前实际，多方受益，应不断完善，持续推进。”</p> <p> 　　国家医保局医药价格和招标采购司负责人表示，国家组织药品集中采购和使用从集采、支付、预付回款、落地使用等，均已形成常态化机制，改革效应持续发酵。</p> <p> 　　比如中选企业营销模式发生转变，更多考虑创新，而不是销售。行业生态持续改善，各方受益。对患者来说，达到了减负担、促可及、提质量、强保障的效果。对医药企业来说，产生了降成本、稳需求、助推广、促研发的作用，既保障了民生，又促进了产业转型升级，受到人民群众和中选企业的高度认可和积极拥护。在疫情防控中，企业面临市场需求和订单不确定性，药品集中带量采购的政策效果具有突出的意义，有利于更好地统筹经济社会发展和疫情防控工作。</p> <br /> <p> <span id="paper_num">　　《 人民日报 》（ 2020年08月24日 13 版）</span></p> ]]></description>
        </item>
        <item>
            <title><![CDATA[百姓关注·坚决制止餐饮浪费行为①]]></title>
            <link>http://politics.people.com.cn/n1/2020/0824/c1001-31834512.html</link>
            <pubDate>2020-08-24</pubDate>
            <author>人民网</author>
            <description><![CDATA[<table class="pci_c" width="400"> <tbody> <tr> <td align="center"> <img src="http://paper.people.com.cn/rmrb/images/1/20200824/1598213301934_1.jpg" /></td> </tr> <tr> <td> <p> 　　图①：湖南洞口县花古街道一家酒店餐饮厅，顾客正在将吃剩的饭、菜打包带回家。<br /> 　　滕治中摄（人民视觉）<br /> 　　图②：河北石家庄市一家餐饮企业推出带有文明用餐宣传语的外卖盒。<br /> 　　新华社记者 王 晓摄<br /> 　　图③：宁夏银川市宁味楼饭店推出小份菜，避免用餐浪费。<br /> 　　新华社记者 冯开华摄</p> </td> </tr> </tbody> </table> <p> <strong>　　游客“体验式”点菜浪费多</strong></p> <p> 　　本报记者&nbsp;刘新吾</p> <p> 　　8月14日晚上7点，重庆市渝中区洪崖洞景区人山人海。旁边不远的一家餐馆，门口挤满了等待就餐的人群。</p> <p> 　　记者走进店里，人群熙熙攘攘，两名服务员正在搬运餐厨垃圾，摇摇头，“浪费真不少。”旁边圆桌上，两名外地游客吃完饭，还在休息，桌上堆满了盘子。两个人能吃这么多？记者坐下与其攀谈起来。</p> <p> 　　原来，由于餐馆生意红火，座位紧张，这个圆桌拼了两拨客人，另一拨客人已经离店。男游客姓李，和妻子从外地来旅游。他们点了一份鱼，已经吃完，尖椒鸡却剩了不少。</p> <p> 　　“这道菜鸡肉不多配料多，你看这藕，这蒜，还有青椒，这么一大盘，哪吃得完？”李先生说，他们是外地游客，来这里就是希望体验地方菜的风味，一不留神多点了几个菜，吃不完的也不方便打包。</p> <p> 　　李先生一边说，一边指着旁边的菜盘说：“刚才这拨人也是游客，也点了一桌子菜。你看，豆角都没怎么动，辣子鸡也剩下不少。”李先生说，这家餐馆名气虽大，但有些菜不太适合自己的口味，所以就剩下了。</p> <p> 　　离开餐馆后，记者又来到不远处的八一路的一家餐馆。这里的顾客大多是本地人，外地游客“体验式”就餐比较少，因此大部分餐桌上，点菜数量都比较适中。记者看到，在两名年轻女性桌上，摆着5个大盘，大都没有吃完。不过，她们离店时自觉打包，将剩菜带走。“我们之前没来过这家店，想多点几个菜尝尝味道，没想到分量这么大。”看着剩菜，一名女性有些不好意思。</p> <p> 　　店员说，这几年来，剩菜打包已经成为大家的习惯做法。至于饭菜分量，餐馆也有自己的考量，如果减少分量，怕顾客觉得不够实惠，“菜分量少了，顾客就会觉得你偷奸耍滑，从此就不来了。”一名店员说，至于配料使用量大，这与菜系有关，当地菜口味重，需要大量的尖椒、大蒜等。如果要减少浪费，需要改进菜谱，加强宣传，引导消费者树立健康饮食理念。</p> <p> 　　同处解放碑商圈，陶然居餐厅鼓励顾客合理点餐、杜绝浪费。记者看到，服务员上了一份蛋煎香糍粑，顾客一人夹了一个，觉得不错，准备再加一份。服务员建议他们，等吃完饭后如果觉得还有需要，再加不迟。结果，一餐结束，这桌顾客早已吃饱，蛋煎香糍粑最终还是没有加。</p> <p> 　　“我们餐馆多年来一直提倡合理点餐，近段时间又对菜品的分量进行了调整。”陶然居集团行政总厨陈小彬说，为避免浪费，公司旗下所有门店菜品都控制在50个左右，调小菜品分量，部分菜品推出半份菜。对外地游客来说，可以多点几个菜，每个菜点半份，既能更多体验重庆菜风味，又能减少浪费。</p> <p> 　　</p> <p> <strong>　　宴请浪费食物让人心疼</strong></p> <p> 　　本报记者&nbsp;王锦涛</p> <p> 　　8月15日晚上9点，兰州市安宁区黄河印象路的一家串串火锅，一座难求。</p> <p> 　　生意很火爆，浪费却不少。服务员正准备收拾餐桌，旁边站着等待入座的食客。记者看到，餐桌上剩菜不少，沸腾的锅里翻滚着黄喉、面条、肉丸子等各种食物。“来火锅店用餐的顾客，很少有人打包。”一名服务员说，饭菜被倒进垃圾桶又心疼，又无可奈何，“之前还问客人要不要打包，结果要么不接话，要么碰一鼻子灰。”</p> <p> 　　5个人，11道菜，不少都是“硬菜”，红烧肉几乎没动。“同学一家从外地来，多年不见，必须好好招呼。”请客的王女士说，看着桌面上的剩菜虽然很惋惜，但这种场合还是觉得打包不合时宜。结完账，她和等候在门口的同学一家，说说笑笑上了车，留下服务员收拾一桌剩菜。</p> <p> 　　在一家酒店就餐的张先生笑着将客人送下楼。回到桌上，看着一桌子剩菜，也觉得心疼，“这种宴请，主要是喝酒，菜都是点缀，肯定吃不完。”张先生说，这种商务宴请，最怕没面子、不到位，生怕照顾不周。</p> <p> 　　“怎么不打包带回去？”记者问。张先生说，自己一个人在兰州，明早就得赶飞机去外地出差，打包回去也得扔了。</p> <p> 　　市民武先生前不久举办了一场婚宴。为了招待好亲朋好友，他跑了好几家酒店试菜，最后选择了价位略高，但菜品多、口味好的一家。可让武先生没想到的是，一场宴席下来，很多菜都只动了一两筷子，还剩下不少。武先生说，由于剩菜太多，只好挑一些贵的、适合家人口味的菜打包，“也动员亲戚朋友打包带回家，但真正拿回家的人并不多”。</p> <p> 　　“酒席浪费的现象一直很严重，主家因为算不准客人的具体数量，经常要多订几桌菜预备着。客人来少了，多出来的菜就会被浪费掉。”酒店从业人员何先生说，“我们一般会免费提供打包袋，但很少有人会选择打包。”</p> <p> 　　8月16日下午，兰州宁卧庄宾馆，一个团体活动，5桌人用餐。“为了杜绝浪费，我们推行了自助餐。”一名服务员说，根据人数上菜，“光盘行动”一直是酒店大力宣传的重点，“无论是酒店的电子宣传屏，还是每张餐桌上的温馨提示牌，都在提醒消费者爱惜粮食，减少浪费。”</p> <p> 　</p> <p> <strong>　　面子过不去&nbsp;剩菜打包难</strong></p> <p> 　　把吃不完的饭菜打包带走，本来是一件理所当然的事。但在现实生活中，想要打包还真不容易，除了嫌麻烦，更多还是面子上过不去。</p> <p> 　　前几天，我和两位朋友到餐馆吃饭，点了一份回锅肉。菜一端上来，大家就傻了眼，一份菜有十片肉，每片大约二两重，这怎么吃得完？旁边一桌坐的是一家三口，他们也犯愁，于是问服务员能不能炒一份，两桌人各取一半？然而，一个朋友当时就坚决反对，觉得这样做不仅显得我们消费不起，而且似乎是吃别人剩下的。</p> <p> 　　最终，我们两桌各点了一份回锅肉。我们三人努力吃了半份，旁边一家三口的情况也差不多。最后他们把剩下的打包带走，我们这边却没有，原因还是朋友觉得打包显得小气：“又不是吃不起！”</p> <p> 　　还有一次，朋友公司签了一笔订单，摆了三桌庆功宴，席间剩了许多饭菜。散席时，服务员拿着一次性饭盒站在一边，请大家打包带走，但并没有人行动。我当时想打包，却也不好意思出这个头。请客的朋友说，如果真“光盘”了会让他觉得没面子，似乎没有招待好大家。</p> <p> 　　要面子、讲排场是造成餐饮浪费的一大原因。如何真正树立浪费可耻、节约为荣的观念，值得每个人深思。</p> <p> 　　四川金堂县&nbsp;杨&nbsp;力&nbsp;</p> <p> 　</p> <p> <strong>　　免费凉菜也要适量</strong></p> <p> 　　每年暑假，我都会到一家烧烤店打工。这家烧烤店位于居民区旁边，一到傍晚6点多钟，百余平方米的小店坐得满满当当，好不热闹。店内为了答谢附近居民的支持，经常赠送毛豆、花生以及其他爽口凉菜，摆在走廊上供大家自取。</p> <p> 　　有一次，我看到一家三口前来就餐。母亲来到免费凉菜区，把每样都盛了满满一大盘子。见状，我善意提醒她：“阿姨，您可以少盛一点，吃完了再来盛也可以。”</p> <p> 　　她脸色立马沉了下来，反驳说：“这不是免费吃吗？你们也没说限量啊！我盛多少和你有什么关系？”</p> <p> 　　有的食客点的烧烤食品比较多，吃不完。就餐结束时我准备给他们打包，他们常常以烧烤食品凉了味道不好为由，拒绝打包服务。看着这些烤好的肉串就这么浪费掉，我十分心疼。</p> <p> 　　我建议，点餐时服务员可以先了解食客对免费食品的选择与需求，根据口味不同再为他们提供免费凉菜，这样能一定程度地避免浪费。同时，服务员应该提醒食客，烧烤食品应该边烤边吃，一次少点一些，这样一方面保证口味，另一方面也避免了点多了而导致浪费。此外，烧烤店还可以推出半份菜、家庭套餐、“光盘”送饮料等活动，鼓励食客厉行节约、反对浪费。</p> <p> 　　辽宁大连市&nbsp;王忠鹏&nbsp;</p> <p> 　　制图：张芳曼</p> <br /> <p> <span id="paper_num">　　《 人民日报 》（ 2020年08月24日 07 版）</span></p> ]]></description>
        </item>
        <item>
            <title><![CDATA[直面挑战，为人类进步事业而奋斗（人民观点）]]></title>
            <link>http://politics.people.com.cn/n1/2020/0824/c1001-31834508.html</link>
            <pubDate>2020-08-24</pubDate>
            <author>本报评论部</author>
            <description><![CDATA[<P>　　作为中华优秀传统文化的忠实传承者和弘扬者，中国共产党立志为人民谋幸福、为民族谋复兴、为世界谋大同，深知和平的可贵，也具有维护和平的坚定决心</P><P>　　积极争取和平的国际环境发展自己，又以自身的发展更好地维护世界和平、促进共同发展，始终是中国坚定不移的国家意志</P><P>　　</P><P>　　当今世界，和平与发展仍然是时代主题，但国际环境日趋复杂，不稳定性不确定性明显增强，保护主义、单边主义、民粹主义愈演愈烈，霸权思维、霸凌行径变本加厉，气候变化、战乱恐袭、饥荒疫情等风险日益突出……世界怎么了？人类怎么办？人类又一次站在了何去何从的十字路口。</P><P>　　“横空大气排山去，砥柱人间是此峰。”这些年来，每当世界发展遭遇逆风、寒流，中国共产党总是带领中国人民迎难而上，努力在不确定性中创造确定性，为世界注入强大正能量。一方面，为世界和平与发展贡献中国智慧和中国方案，着眼国际形势发展变化，提出推动构建人类命运共同体、推动构建新型国际关系、共建“一带一路”、正确义利观、新安全观、全球治理观、文明观等一系列重要理念、重要倡议。另一方面，以实际行动维护世界和平，宣布设立为期10年、总额10亿美元的中国—联合国和平与发展基金，并于2016年正式投入运行；始终致力于通过谈判、协商方式处理领土问题和海洋划界争端，同14个邻国中的12个国家彻底解决了陆地边界问题；积极参与重大国际和地区热点问题解决，发挥了建设性作用。</P><P>　　习近平总书记指出，“中国共产党是为中国人民谋幸福的党，也是为人类进步事业而奋斗的党。”这不仅是一个大党的豪迈宣示，也是人们每天见证的鲜活事实。今天，随着中国综合国力和国际影响力快速提升，国际上有些人担心中国会走“国强必霸”的路子，一些人提出了所谓的“中国威胁论”。这既有认知上的误读，有根深蒂固的偏见，也有力量消长带来的心理失衡，还有出于维护自身既得利益的刻意歪曲。历史和现实一再证明，中国睡狮已醒，“但这是一只和平的、可亲的、文明的狮子”。</P><P>　　一个民族最深沉的追求，一定要在其薪火相传的民族精神中来进行基因测序。中华民族是热爱和平的民族，血液里没有侵略他人、称霸世界的基因。2000多年前，张骞带着一支和平使团从长安出发，打通了东方通往西方的道路，完成“凿空之旅”，带给世界的是“使者相望于道，商旅不绝于途”，而不是侵略扩张；600多年前，郑和下西洋时，率领的是当时世界最庞大的舰队，带去的是丝绸、茶叶和瓷器，而不是战争。“己所不欲，勿施于人”，近代以来，中华民族饱受列强欺凌，对战争和动荡带来的苦难刻骨铭心，因此绝不会将自己曾经遭受的苦难强加给其他国家与民族。作为中华优秀传统文化的忠实传承者和弘扬者，中国共产党立志为人民谋幸福、为民族谋复兴、为世界谋大同，深知和平的可贵，也具有维护和平的坚定决心。</P><P>　　正因如此，在中国共产党的领导下，中国将坚持自身和平发展载入宪法，成为世界上第一个作出这一庄重承诺的国家。从上世纪50年代提出和平共处五项原则，到改革开放以来作出和平与发展成为时代主题的科学判断，再到新时代提出构建人类命运共同体的重大倡议，中国始终按照中国人民的愿望，不断发展进步并为人类做出新的更大贡献。作为历史上曾经遭受欺凌、蒙受屈辱的发展中大国，中国发展的目的是赢得尊严和安全，让历经苦难的人民过上好日子。在追求这个目标的过程中，中国自然而然地发展了、强大了。作为体量巨大、人口众多、国情复杂、治理难度世所罕见的最大发展中国家，中国在经济快速发展的同时保持社会长期稳定，这不仅是中国共产党带领中国人民创造的伟大奇迹，也是对世界和平与发展的最大贡献。</P><P>　　“世界好，中国才能好；中国好，世界才更好。”这是中国共产党人朴素而深刻的世界观。中国今天的发展成就得益于和平稳定的外部环境，中国未来的发展仍然需要长期稳定的国际环境。中国走和平发展道路，不是外交辞令，不是权宜之计，不是战略模糊，而是思想自信和实践自觉的有机统一，是坚定不移且值得信赖的人民选择和国家承诺。历史上确有国家因强而霸，但国强必霸决不是历史定律。用西方一些国家的发展经验评判中国，把西方一些国家的发展逻辑套用于中国，得出的结论必然荒谬失真。新中国成立70多年，中国没有主动挑起过任何一场战争和冲突，没有侵占过别国一寸土地；改革开放以来，中国主动裁减军队员额400余万；这些年，中国国防支出占GDP平均比重约为1.3%，在联合国安理会常任理事国中处于最低水平，与此同时，中国已成为联合国第二大维和预算摊款国和经常性预算会费国。积极争取和平的国际环境发展自己，又以自身的发展更好地维护世界和平、促进共同发展，始终是中国坚定不移的国家意志。</P><P>　　让老百姓过上好日子，这是中国共产党人的不变初心，也始终是中国发展的最大目标。在追求这个目标的过程中，中国找到了一条正确的发展道路，即中国共产党领导下的中国特色社会主义道路。这条道路始终得到中国人民最广泛、最坚定的支持，同时也造福这个世界、惠及世界各国人民。中国共产党和中国人民对中国特色社会主义制度有着强大自信，同时尊重世界各国人民自主选择的发展道路，无意同任何国家进行制度竞争，无意同任何国家搞意识形态对抗。中国不“输入”外国模式，也不“输出”中国模式，不会要求别国“复制”中国的做法，而是充分尊重其他国家选择的不同发展道路。中国共产党和中国人民也坚决反对妄图改变中国的不切实际做法，坚决反对人为制造所谓“新冷战”，当年冷战给世界人民带来的创伤和痛苦绝不应重演。</P><P>　　2021年，我们将迎来中国共产党成立100周年。回首百年，中国共产党领导中国人民所进行的伟大奋斗彪炳史册，为人类和平与发展作出的重大贡献有目共睹。面向未来，无论国际形势如何变化，中国共产党将带领中国人民，坚定不移走和平发展道路，持之以恒做世界和平的建设者、全球发展的贡献者、国际秩序的维护者，不断为建设更加美好的世界贡献智慧和力量！</P><P>　　（本系列评论到此结束）&nbsp;</P> <br><span id='paper_num'>　　《 人民日报 》（ 2020年08月24日 05 版）</span>]]></description>
        </item>
        <item>
            <title><![CDATA[人民日报评论部：直面挑战，为人类进步事业而奋斗]]></title>
            <link>http://politics.people.com.cn/n1/2020/0824/c433621-31834471.html</link>
            <pubDate>2020-08-24</pubDate>
            <author>本报评论部</author>
            <description><![CDATA[<p style="text-indent: 2em;"> 作为中华优秀传统文化的忠实传承者和弘扬者，中国共产党立志为人民谋幸福、为民族谋复兴、为世界谋大同，深知和平的可贵，也具有维护和平的坚定决心</p> <p style="text-indent: 2em;"> 积极争取和平的国际环境发展自己，又以自身的发展更好地维护世界和平、促进共同发展，始终是中国坚定不移的国家意志</p> <p style="text-indent: 2em;"> 当今世界，和平与发展仍然是时代主题，但国际环境日趋复杂，不稳定性不确定性明显增强，保护主义、单边主义、民粹主义愈演愈烈，霸权思维、霸凌行径变本加厉，气候变化、战乱恐袭、饥荒疫情等风险日益突出……世界怎么了？人类怎么办？人类又一次站在了何去何从的十字路口。</p> <p style="text-indent: 2em;"> “横空大气排山去，砥柱人间是此峰。”这些年来，每当世界发展遭遇逆风、寒流，中国共产党总是带领中国人民迎难而上，努力在不确定性中创造确定性，为世界注入强大正能量。一方面，为世界和平与发展贡献中国智慧和中国方案，着眼国际形势发展变化，提出推动构建人类命运共同体、推动构建新型国际关系、共建“一带一路”、正确义利观、新安全观、全球治理观、文明观等一系列重要理念、重要倡议。另一方面，以实际行动维护世界和平，宣布设立为期10年、总额10亿美元的中国—联合国和平与发展基金，并于2016年正式投入运行；始终致力于通过谈判、协商方式处理领土问题和海洋划界争端，同14个邻国中的12个国家彻底解决了陆地边界问题；积极参与重大国际和地区热点问题解决，发挥了建设性作用。</p> <p style="text-indent: 2em;"> 习近平总书记指出，“中国共产党是为中国人民谋幸福的党，也是为人类进步事业而奋斗的党。”这不仅是一个大党的豪迈宣示，也是人们每天见证的鲜活事实。今天，随着中国综合国力和国际影响力快速提升，国际上有些人担心中国会走“国强必霸”的路子，一些人提出了所谓的“中国威胁论”。这既有认知上的误读，有根深蒂固的偏见，也有力量消长带来的心理失衡，还有出于维护自身既得利益的刻意歪曲。历史和现实一再证明，中国睡狮已醒，“但这是一只和平的、可亲的、文明的狮子”。</p> <p style="text-indent: 2em;"> 一个民族最深沉的追求，一定要在其薪火相传的民族精神中来进行基因测序。中华民族是热爱和平的民族，血液里没有侵略他人、称霸世界的基因。2000多年前，张骞带着一支和平使团从长安出发，打通了东方通往西方的道路，完成“凿空之旅”，带给世界的是“使者相望于道，商旅不绝于途”，而不是侵略扩张；600多年前，郑和下西洋时，率领的是当时世界最庞大的舰队，带去的是丝绸、茶叶和瓷器，而不是战争。“己所不欲，勿施于人”，近代以来，中华民族饱受列强欺凌，对战争和动荡带来的苦难刻骨铭心，因此绝不会将自己曾经遭受的苦难强加给其他国家与民族。作为中华优秀传统文化的忠实传承者和弘扬者，中国共产党立志为人民谋幸福、为民族谋复兴、为世界谋大同，深知和平的可贵，也具有维护和平的坚定决心。</p> <p style="text-indent: 2em;"> 正因如此，在中国共产党的领导下，中国将坚持自身和平发展载入宪法，成为世界上第一个作出这一庄重承诺的国家。从上世纪50年代提出和平共处五项原则，到改革开放以来作出和平与发展成为时代主题的科学判断，再到新时代提出构建人类命运共同体的重大倡议，中国始终按照中国人民的愿望，不断发展进步并为人类做出新的更大贡献。作为历史上曾经遭受欺凌、蒙受屈辱的发展中大国，中国发展的目的是赢得尊严和安全，让历经苦难的人民过上好日子。在追求这个目标的过程中，中国自然而然地发展了、强大了。作为体量巨大、人口众多、国情复杂、治理难度世所罕见的最大发展中国家，中国在经济快速发展的同时保持社会长期稳定，这不仅是中国共产党带领中国人民创造的伟大奇迹，也是对世界和平与发展的最大贡献。</p> <p style="text-indent: 2em;"> “世界好，中国才能好；中国好，世界才更好。”这是中国共产党人朴素而深刻的世界观。中国今天的发展成就得益于和平稳定的外部环境，中国未来的发展仍然需要长期稳定的国际环境。中国走和平发展道路，不是外交辞令，不是权宜之计，不是战略模糊，而是思想自信和实践自觉的有机统一，是坚定不移且值得信赖的人民选择和国家承诺。历史上确有国家因强而霸，但国强必霸决不是历史定律。用西方一些国家的发展经验评判中国，把西方一些国家的发展逻辑套用于中国，得出的结论必然荒谬失真。新中国成立70多年，中国没有主动挑起过任何一场战争和冲突，没有侵占过别国一寸土地；改革开放以来，中国主动裁减军队员额400余万；这些年，中国国防支出占GDP平均比重约为1.3%，在联合国安理会常任理事国中处于最低水平，与此同时，中国已成为联合国第二大维和预算摊款国和经常性预算会费国。积极争取和平的国际环境发展自己，又以自身的发展更好地维护世界和平、促进共同发展，始终是中国坚定不移的国家意志。</p> <p style="text-indent: 2em;"> 让老百姓过上好日子，这是中国共产党人的不变初心，也始终是中国发展的最大目标。在追求这个目标的过程中，中国找到了一条正确的发展道路，即中国共产党领导下的中国特色社会主义道路。这条道路始终得到中国人民最广泛、最坚定的支持，同时也造福这个世界、惠及世界各国人民。中国共产党和中国人民对中国特色社会主义制度有着强大自信，同时尊重世界各国人民自主选择的发展道路，无意同任何国家进行制度竞争，无意同任何国家搞意识形态对抗。中国不“输入”外国模式，也不“输出”中国模式，不会要求别国“复制”中国的做法，而是充分尊重其他国家选择的不同发展道路。中国共产党和中国人民也坚决反对妄图改变中国的不切实际做法，坚决反对人为制造所谓“新冷战”，当年冷战给世界人民带来的创伤和痛苦绝不应重演。</p> <p style="text-indent: 2em;"> 2021年，我们将迎来中国共产党成立100周年。回首百年，中国共产党领导中国人民所进行的伟大奋斗彪炳史册，为人类和平与发展作出的重大贡献有目共睹。面向未来，无论国际形势如何变化，中国共产党将带领中国人民，坚定不移走和平发展道路，持之以恒做世界和平的建设者、全球发展的贡献者、国际秩序的维护者，不断为建设更加美好的世界贡献智慧和力量！</p> <p style="text-indent: 2em;"> （本系列评论到此结束）&nbsp;</p> <p style="text-indent: 2em;"> <span id="paper_num" style="text-indent: 2em; display: block;">《 人民日报 》（ 2020年08月24日 05 版）</span></p> ]]></description>
        </item>
        <item>
            <title><![CDATA[人民日报评论部：百年风雨，历史和人民选择了中国共产党]]></title>
            <link>http://politics.people.com.cn/n1/2020/0824/c433621-31834463.html</link>
            <pubDate>2020-08-24</pubDate>
            <author>人民网</author>
            <description><![CDATA[<p style="text-indent: 2em;"> 中国对世界的影响，从未像今天这样全面、深刻、长远；世界对中国的关注，也从未像今天这样广泛、深切、聚焦。如何看待中国的发展成就？如何理解中国的制度选择？如何认识中国的前进逻辑？这不仅关乎中国的前途，也关系世界的未来。</p> <p style="text-indent: 2em;"> “中国特色社会主义最本质的特征就是中国共产党的领导。”了解今天的中国，必须了解中国共产党；读懂中国共产党，才能读懂今天的中国。一个拥有9100多万名党员的世界第一大执政党，如何带领亿万人民创造了世所罕见的经济快速发展奇迹和社会长期稳定奇迹，使一个古老民族焕发出新的蓬勃生机？中国共产党为何能始终走在时代前列、永葆青春活力，成为中国人民和中华民族的主心骨？</p> <p style="text-indent: 2em;"> “知人者智，自知者明。”从今天起，我们推出系列评论“伟大征程上的中国共产党和中国人民”，与您一起在历史和现实的激荡中，把握时代潮流和人心所向，汲取继续前进的磅礴力量，获得走向未来的宝贵启示。</p> <p style="text-indent: 2em;"> <strong>　　——编&nbsp;&nbsp;者</strong></p> <p style="text-indent: 2em;"> <strong>　　每当风雨来袭，中国共产党的领导总是最重要的保障、最可靠的依托；每次风雨过后，中国人民对中国共产党更加拥护和信赖，对中国制度更加充满信心</strong></p> <p style="text-indent: 2em;"> <strong>　　中国共产党植根于中国的大地与人民，为中国人民谋幸福、为中华民族谋复兴，这是中国共产党人与生俱来的初心和使命，也是激励中国共产党人不断前进的根本动力</strong></p> <p style="text-indent: 2em;"> 历史常常以惊心动魄留下深刻印记，也常常以波澜壮阔写下厚重篇章。2020年，面对新冠肺炎疫情这一全球性危机，以习近平同志为核心的党中央，坚持“把人民群众生命安全和身体健康放在第一位”，带领全党全国交出了一份感天动地的优异答卷，在疫情防控和经济恢复上都走在了世界前列。</p> <p style="text-indent: 2em;"> 重大危机是考验执政党执政理念、执政效能的试金石。人们纷纷感慨，疫情防控阻击战取得的重大战略成果，集中展现了中国力量、中国精神、中国效率，极大激发了民族自豪感、自信心、凝聚力，充分彰显了中国特色社会主义制度的政治优势。这个政治优势的根本，就是中国共产党的领导。近百年来，在中华民族内忧外患时挺身而出，在新中国百废待兴时艰苦创业，在改革发展经历风雨时勇毅担当，每当风雨来袭，中国共产党的领导总是最重要的保障、最可靠的依托；每次风雨过后，中国人民对中国共产党更加拥护和信赖，对中国制度更加充满信心。</p> <p style="text-indent: 2em;"> 近百年来中国的发展变化早已证明，中国共产党的领导是历史的选择、是人民的选择。回首过去，中国共产党紧紧依靠人民，跨过一道又一道沟坎，取得一个又一个胜利，为中华民族作出了伟大历史贡献。中华人民共和国的成立，让中国摆脱了“覆屋之下、漏舟之中、薪火之上”的境地，让人民彻底告别了“为奴隶、为牛马、为犬羊”的命运；社会主义制度的确立，实现了中国历史上最深刻最伟大的社会变革，为国家发展进步奠定基础，让人民翻身做了主人；改革开放的推进，以40多年的时间，让中国跨越了西方国家几百年的发展历程，国家实现“弯道超车”，人民过上美好生活，这在人类历史上也不多见。事实无可辩驳地证明，正是有中国共产党这个坚强领导核心，中国人民的自由幸福才不断抵达新的高度。</p> <p style="text-indent: 2em;"> “没有共产党就没有新中国”。这已在神州大地上传唱了70多年，不仅唱出了全国人民的心声，也饱含着深厚历史底蕴。中国共产党成立前后，曾有300多个政党和政治团体先后登上过中国的政治舞台，但大都在大浪淘沙的历史潮流中销声匿迹了。只有中国共产党，从50多名党员发展成为9100多万名党员的世界第一大执政党，并团结带领中国人民创造了世所罕见的经济快速发展奇迹和社会长期稳定奇迹。正如习近平总书记豪迈宣示的，“当今世界，要说哪个政党、哪个国家、哪个民族能够自信的话，那中国共产党、中华人民共和国、中华民族是最有理由自信的。”</p> <p style="text-indent: 2em;"> 任何政党的兴衰存亡，归根结底取决于它在推动历史前进中的作用，取决于人民群众对这种作用的认可程度。“中国共产党并不曾使用什么魔术，他们只不过知道人民所渴望的改变，而他们拥护这些改变。”1946年出版的《中国的惊雷》中，美国记者白修德和贾安娜得出的结论，直到今天仍在被一次次验证。中国共产党植根于中国的大地与人民，为中国人民谋幸福、为中华民族谋复兴，这是中国共产党人与生俱来的初心和使命，也是激励中国共产党人不断前进的根本动力。不同于西方政治学意义上的普通政党，中国共产党作为长期执政党，不是几年才活跃一次的选举动员力量。中国共产党既要满足人民眼前的、局部的利益，又要考虑人民长远的、全局的利益，这需要真奋斗真本事、大格局大情怀。</p> <p style="text-indent: 2em;"> 进而言之，历史和人民之所以选择了中国共产党，就是因为中国共产党始终是中国最广大人民根本利益的忠实代表，是中国人民和中华民族的主心骨；就是因为中国共产党人以行动表明自己是最忠诚、最热烈、最彻底的爱国者，是中华民族利益最坚定的捍卫者。翻开党的十九大报告，无论是社会主义现代化强国的新目标，还是我国社会主要矛盾的新变化，立足的无不是民族的福祉，回应的无不是人民的期盼。放眼世界，有哪个政党能像我们党这样始终对时代保持敏感，又有哪个政党把人民的幸福如此真切地写在自己的旗帜上？最近，美国一家知名公关公司发布信任度调查显示，中国民众对本国政府信任度达95%，在受访国家中高居第一。什么是民心？这就是民心。什么是人民的选择？这就是人民的选择。</p> <p style="text-indent: 2em;"> 今年10月，中国共产党第十九届中央委员会第五次全体会议将在北京召开，会议将研究关于制定国民经济和社会发展第十四个五年规划和二〇三五年远景目标的建议。习近平总书记作出重要指示强调，“把加强顶层设计和坚持问计于民统一起来”“切实把社会期盼、群众智慧、专家意见、基层经验充分吸收到‘十四五’规划编制中来”。新中国成立以来，从“一五”计划到“十四五”规划，中国共产党人一步一个脚印、奋斗永不停步。纵观世界，有哪个政党能这样坚持不懈地对一个国家的建设发展进行科学的长远规划？“为中国人民谋幸福、为中华民族谋复兴”，伟大事业赋予中国共产党人的格局与胸襟，远非那些汲汲于眼前功利的党派和政客所能想象。千秋伟业，百年只是序章，还有更多艰难险阻需要我们去攻克，还有更大胜利等待我们去夺取——赢得了伟大历史性胜利的中国共产党和中国人民，必将在新时代赢得更伟大的历史性胜利！</p> <p style="text-indent: 2em;"> <span id="paper_num" style="text-indent: 2em; display: block;">《 人民日报 》（ 2020年08月18日 05 版）</span></p> ]]></description>
        </item>
        <item>
            <title><![CDATA[人民日报评论部：自我革命，得到中国人民的衷心拥护]]></title>
            <link>http://politics.people.com.cn/n1/2020/0824/c433621-31834466.html</link>
            <pubDate>2020-08-24</pubDate>
            <author>本报评论部</author>
            <description><![CDATA[<p style="text-indent: 2em;"> 中国共产党之所以伟大、之所以成功、之所以充满奋进力量，其中一个重要原因在于，拒绝自满、永不停滞，保持了勇于自我革命的精神</p> <p style="text-indent: 2em;"> 中国人民的利益和期待，正是中国共产党推进自我革命、坚决向腐败宣战的根本动力</p> <p style="text-indent: 2em;"> 最近，美国一家知名公关公司发布信任度调查显示，中国民众对本国政府信任度达95%，在所有受访国家中高居第一。这一数据从一个侧面表明，中国共产党作为执政党，得到14亿人民的衷心拥护和坚定支持，正引领民族复兴之路越走越宽广。</p> <p style="text-indent: 2em;"> 现实是一面镜子，映照着政党能力与执政绩效，而过去、现在与未来一脉相承。回溯这个百年大党的苦难辉煌史，从石库门到天安门，从50多名党员发展到9100多万名党员，其内在活力和旺盛生机令世人惊叹——善于自我净化、自我完善、自我革新、自我提高，具有极强的纠错和修复机能。习近平总书记深刻指出：“勇于自我革命，从严管党治党，是我们党最鲜明的品格”。正因如此，中国共产党才能不负初心使命，不畏艰难困苦，不惧风雨洗礼，始终赢得人民的信任支持。</p> <p style="text-indent: 2em;"> 历史长河滚滚向前，大浪淘沙，始见真金。早在1940年，出于对国民党升官发财、酒色逸乐作风侵蚀的警惕，毛泽东同志就提出“我们要养成一种新的作风——延安作风”。相比“党部成了衙门，党员成了官僚”“精神堕落，只知道做官”的国民党，中国共产党以良好的党风带动政风、军风、民风，被外国观察家评价为“中国的希望”。近百年来，从大革命失败紧急召开八七会议，到延安整风巩固全党团结统一，从新中国成立之初果断处理腐败分子刘青山、张子善，到拨乱反正、以极大政治勇气纠正“文革”错误，从推进改革开放这个“关键一招”，到新时代作出全面从严治党重大战略部署……中国共产党之所以伟大、之所以成功、之所以充满奋进力量，其中一个重要原因在于，拒绝自满、永不停滞，保持了勇于自我革命的精神。</p> <p style="text-indent: 2em;"> 自我革命，犹如拿起手术刀给自己动手术，是刀刃向内、刮骨疗毒，这无疑是痛苦的、艰难的，因此格外需要思想上的高度自省、行动上的高度自觉。中国共产党为什么能做到这一点？习近平总书记深刻指出：“我们党之所以有自我革命的勇气，是因为我们党除了国家、民族、人民的利益，没有任何自己的特殊利益。”正所谓“无私者无畏”，中国共产党的伟大不在于不犯错误，而在于从不讳疾忌医，敢于直面问题，勇于自我革命，为了人民的利益而坚持真理、修正错误。“凡是影响党的创造力、凝聚力、战斗力的问题都要全力克服，凡是损害党的先进性和纯洁性的病症都要彻底医治，凡是滋生在党的健康肌体上的毒瘤都要坚决祛除”，这是中国共产党的信念追求，也是中国共产党的力量所在。</p> <p style="text-indent: 2em;"> “胜人者有力，自胜者强”。一个强大的政党，是在自我革命中锻造出来的。世界上的政党林林总总，秉持“勇于自我革命”理念的并不多见。党的十八大以来，从查处高官巨贪打“老虎”，到惩治基层腐败拍“苍蝇”，从“天网”“猎狐”推进反腐国际追逃，到加强巡视、审计利剑高悬……中国共产党反腐败斗争一步一步取得“压倒性胜利”。翻开中国历史，没有哪个时代，反腐败的力度如此强大；遍览世界各国，没有哪个政党，反腐败的决心如此坚定。“不是没有掂量过。但我们认准了党的宗旨使命，认准了人民的期待”“不得罪腐败分子，就必然会辜负党、得罪人民”……习近平总书记的话语振聋发聩。中国共产党的性质和宗旨，决定了党同腐败现象冰炭不能同器、水火不能相容；中国人民的利益和期待，正是中国共产党推进自我革命、坚决向腐败宣战的根本动力。</p> <p style="text-indent: 2em;"> 有外媒评论，中国共产党的反腐败成绩，是“足以同在中国这样一个世界上人口最多的国家解决温饱问题、极大消除贫困相提并论的一个巨大贡献”。事实胜于雄辩：当今世界，没有哪个国家有中国这样的反腐力度和成效，也没有哪个国家能够像中国这样，在强力肃贪反腐的同时保持社会大局稳定向好。这一切，如果没有人民的衷心拥护和支持，是完全不能够想象的。始终从人民群众的根本利益出发，不掩饰缺点、不回避问题、不文过饰非，主动地进行自我革命，这正是我们党赢得时势人心、创造人间奇迹的关键所在。</p> <p style="text-indent: 2em;"> 延安时期，毛泽东同志同黄炎培先生有过著名的“窑洞对”，毛泽东同志曾坚定地说：“我们已经找到新路，我们能跳出这周期率。”经过几十年的实践，中国共产党确实能够打破这样的定律。这正是因为，一方面，我们党以信仰、价值铸魂，始终与人民血肉相连，得到最广大人民的拥护和支持；另一方面，我们党有制度保障、有民主监督、有自我革命，这样就能够做到有缺点克服缺点、有问题解决问题、有错误承认并纠正错误。面对复杂多变的国内外形势，我们还会遭遇各种难以预料的风险挑战，但只要始终坚持以人民为中心，永远保持自我革命的勇气和行动，就能让我们的党永远风华正茂。</p> <p style="text-indent: 2em;"> 1945年春，党的七大在延安杨家岭的中央大礼堂召开，会场墙壁的旗座上写着八个字：“坚持真理，修正错误”。不忘初心、牢记使命，才能勇于自我革命。在新时代，以党的自我革命推动党领导人民进行的伟大社会革命，我们党就能始终赢得人民的衷心拥护，引领承载着中国人民伟大梦想的航船破浪前进！</p> <p style="text-indent: 2em;"> <span id="paper_num" style="text-indent: 2em; display: block;">《 人民日报 》（ 2020年08月20日 05 版）</span></p> ]]></description>
        </item>
        <item>
            <title><![CDATA[人民日报评论部：天下一家，推动构建“人类命运共同体”]]></title>
            <link>http://politics.people.com.cn/n1/2020/0824/c433621-31834469.html</link>
            <pubDate>2020-08-24</pubDate>
            <author>本报评论部</author>
            <description><![CDATA[<p style="text-indent: 2em;"> 大党之大，不仅仅在于体量大、块头大，更在于胸襟大、担当大</p> <p style="text-indent: 2em;"> 中国共产党的成功，不仅对中国人民、中华民族具有重大意义，而且具有现实和深远的世界意义</p> <p style="text-indent: 2em;"> “人类是休戚与共、风雨同舟的命运共同体，唯有相互支持、团结合作才是战胜危机的人间正道。”大疫当前，人们更能体会习近平总书记这句话的深刻含义。</p> <p style="text-indent: 2em;"> 近日，英国医学期刊《柳叶刀》发表社论，点赞中国抗击新冠肺炎疫情的行动，并认为中国的防疫经验可供世界其他国家学习借鉴。在突如其来的新冠肺炎疫情面前，中国的理念和行动有目共睹、有口皆碑。从毫无保留地同国际社会分享防控经验和诊疗方案，到承诺待中国新冠疫苗研发完成并投入使用后，将作为全球公共产品；从建立30个中非对口医院合作机制，到落实“暂缓最贫困国家债务偿付倡议”，中国始终秉持人类命运共同体理念，与世界各国并肩作战、共克时艰，始终为国际组织和其他国家提供力所能及的帮助，为全球抗疫贡献中国智慧、中国力量。一个个务实的行动，让世界感受到什么是大国担当，也生动诠释着什么是人类情怀。</p> <p style="text-indent: 2em;"> 当人类的共同敌人新冠病毒迅速在全球蔓延时，人们更加深刻地体会到构建人类命运共同体的重大意义。“构建人类命运共同体”，这一由习近平总书记在2013年首次提出，并在党的十九大报告中再次强调的重大理念，既来自“天下一家”的中华文化传统，也彰显着一个百年大党的世界胸怀。面对新冠肺炎疫情这一全球性危机，中国共产党不仅坚持以“生命至上、人民至上”对14亿中国人民负责，也坚持以“守望相助、同舟共济”对全球公共卫生事业尽责。今年4月2日，中国共产党同世界上100多个国家230多个政党联合就加强国际抗疫合作发出共同呼吁，表达携手合作、共克时艰的政治意愿。共同呼吁从提出想法到最后发表，用时不到10天，创造了政党交往史上的一个纪录。</p> <p style="text-indent: 2em;"> 中国共产党是为着中国人民幸福、中华民族复兴而诞生的，因此始终坚持“集中力量办好自己的事情”，但中国共产党人从来都不是狭隘的民族主义者，一直把为人类作出新的更大贡献作为自己的使命。“中国应当对于人类有较大的贡献。”“中国共产党是世界上最大的政党。大就要有大的样子。”这样负责任的宣示，生动地诠释了中国共产党人胸怀天下的大境界、贡献人类的大担当。大党之大，不仅仅在于体量大、块头大，更在于胸襟大、担当大。放眼世界，很少有哪个政党能像中国共产党一样，把“推动构建人类命运共同体，推动建设持久和平、共同繁荣的和谐世界”写入自己的章程。今天，当中国对世界经济增长年均贡献率接近30%，当中国让8亿多人口摆脱贫困、对全球减贫贡献率超过70%，任何尊重事实的人都会承认，中国共产党的成功，不仅对中国人民、中华民族具有重大意义，而且具有现实和深远的世界意义。</p> <p style="text-indent: 2em;"> 有学者指出，认识中国，需要了解中国作为一个“文明型国家”的内在气质。中华文明从不自囿于一族一地，而是以“天下”为思考单位，历来讲求“天下一家”，主张民胞物与、协和万邦，憧憬“大道之行，天下为公”的美好世界。同样，认识中国共产党，也要看到中国共产党从成立之日起，既是中国先进文化的积极引领者和践行者，又是中华优秀传统文化的忠实传承者和弘扬者。中华优秀传统文化强调和合理念，崇尚“和而不同”“以和为贵”，有着“海纳百川，博采众长”的胸怀，主张“己所不欲，勿施于人”“美美与共，天下大同”。这种深厚的文化基因，正是中国共产党推动构建人类命运共同体的深层密码。</p> <p style="text-indent: 2em;"> “不要人夸颜色好，只留清气满乾坤。”党的十九大后，在同中外记者见面时，习近平总书记以诗言志，吟咏墨梅不慕虚名、绽放清芬的品格，传递中国共产党坚定自信、埋头苦干的意志。毋庸讳言，尽管中国对世界和平与发展的贡献举世瞩目，但相伴而来的并不只有鲜花和掌声，各种抹黑唱衰的论调也时有出现。然而，事实胜于雄辩。就拿共建“一带一路”来说，根据全球金融市场数据提供商路孚特发布的报告，截至2020年第一季度，已规划或在建“一带一路”项目共计3164个，总金额达4万亿美元。因为共建“一带一路”合作，马尔代夫有了第一座跨海大桥，东非有了第一条高速公路，白俄罗斯第一次有了自己的轿车制造业，希腊比雷埃夫斯港重回欧洲大港地位……中国共产党不仅将推进“一带一路”建设写入自己的章程，更以言必信、行必果的诚意和担当，坚定不移通过推动中国发展给世界创造更多发展机遇、通过深化自身实践探索人类社会发展规律并同世界各国分享，张开双臂欢迎各国人民搭乘中国发展的“快车”“便车”。</p> <p style="text-indent: 2em;"> “中华人民共和国万岁，世界人民大团结万岁”。高悬于北京天安门城楼上的巨幅标语，生动体现着中国共产党和中国人民的世界观。顺应时代发展潮流、把握人类进步大势、顺应各国人民共同期待，在推动构建人类命运共同体的伟大进程中，中国共产党和中国人民将一如既往为世界和平安宁作贡献，一如既往为世界共同发展作贡献，一如既往为世界文明交流互鉴作贡献！</p> <p style="text-indent: 2em;"> <span id="paper_num" style="text-indent: 2em; display: block;">《 人民日报 》（ 2020年08月21日 05 版）</span></p> <p style="text-indent: 2em;"> <strong>相关新闻：</strong></p> <p style="text-indent: 2em;"> <a href="http://opinion.people.com.cn/n1/2020/0820/c1003-31829097.html" target="_blank">人民日报评论部：自我革命，得到中国人民的衷心拥护</a></p> <p style="text-indent: 2em;"> <a href="http://opinion.people.com.cn/n1/2020/0819/c1003-31827469.html" target="_blank">人民日报评论部：人民至上，中国共产党没有自己的特殊利益</a></p> <p style="text-indent: 2em;"> <a href="http://opinion.people.com.cn/n1/2020/0818/c1003-31825517.html" target="_blank">人民日报评论部：百年风雨，历史和人民选择了中国共产党</a></p> ]]></description>
        </item>
        <item>
            <title><![CDATA[人民日报评论部：人民至上，中国共产党没有自己的特殊利益]]></title>
            <link>http://politics.people.com.cn/n1/2020/0824/c433621-31834465.html</link>
            <pubDate>2020-08-24</pubDate>
            <author>本报评论部</author>
            <description><![CDATA[<p style="text-indent: 2em;"> 中国共产党为什么“能”？根本原因就在于，中国共产党始终与人民心心相印、与人民同甘共苦、与人民团结奋斗</p> <p style="text-indent: 2em;"> 站在最广大人民这一边，站在历史正确的一边，就能始终拥有面向未来、面对挑战、永立潮头的不竭动力</p> <p style="text-indent: 2em;"> 始终坚持一切为了人民、一切依靠人民，把民心当作最大的政治，把人民作为执政的最大底气</p> <p style="text-indent: 2em;"> 没有比梦想更加激荡人心的力量，没有比追梦更加铿锵有力的步伐。2020年的中国，在坚决打赢疫情防控阻击战的同时，也在争分夺秒地向贫困堡垒发起最后总攻。决胜全面小康、决战脱贫攻坚，这是14亿中国人民的共同期盼，也是中国共产党向人民、向历史作出的庄严承诺。</p> <p style="text-indent: 2em;"> “党团结带领人民进行革命、建设、改革，根本目的就是为了让人民过上好日子，无论面临多大挑战和压力，无论付出多大牺牲和代价，这一点都始终不渝、毫不动摇。”今年全国两会期间，习近平总书记在参加内蒙古代表团审议时的重要讲话掷地有声。为什么我们党会把“让人民过上好日子”作为一切行动的根本目的？正是因为中国共产党“除了工人阶级和最广大人民群众的利益，没有自己特殊的利益”。这是由马克思主义政党的性质决定的，我们党谋的就是“绝大多数人的利益”；这也是中国共产党的信仰决定的，从诞生之日起，我们党就把“为中国人民谋幸福、为中华民族谋复兴”作为初心使命。人民，唯有人民，才是中国共产党的根基所在、血脉所系。</p> <p style="text-indent: 2em;"> 以脱贫攻坚为例，党的十八大以来，以习近平同志为核心的党中央，从全面建成小康社会要求出发，全面打响了脱贫攻坚战，中国贫困人口从2012年年底的9899万人减到2019年年底的551万人，贫困发生率由10.2%降至0.6%，连续7年每年减贫1000万人以上。今年脱贫攻坚任务完成后，我国将有1亿左右贫困人口实现脱贫，提前10年实现联合国2030年可持续发展议程的减贫目标，世界上没有哪一个国家能在这么短的时间内帮助这么多人脱贫。如果没有坚守全心全意为人民服务的根本宗旨，如果没有秉持人民至上的价值理念，怎么能创造这样的人间奇迹？</p> <p style="text-indent: 2em;"> 中国共产党成立近百年来，由小到大、从弱到强，团结带领人民攻克了一个又一个看似不可攻克的难关。一个初创时只有50多名党员的马克思主义政党，何以成为一个拥有9100多万名党员的世界第一大执政党，并能经受起长期执政考验、改革开放考验、市场经济考验和外部环境考验？一个曾经四分五裂、战乱频仍的国家，何以在短短几十年里从饥饿、混乱、贫弱，走向独立、自由、民主、统一和富强，“取得了旧中国几百年、几千年所没有取得过的进步”？中国共产党为什么“能”？根本原因就在于，中国共产党始终与人民心心相印、与人民同甘共苦、与人民团结奋斗。顺应人民求幸福、民族求复兴的潮流，站在最广大人民这一边，站在历史正确的一边，就能始终拥有面向未来、面对挑战、永立潮头的不竭动力。</p> <p style="text-indent: 2em;"> “时代是出卷人，我们是答卷人，人民是阅卷人。”这是70多年来中国共产党人对“为谁执政、靠谁执政”问题的郑重回答。“共产党是为民族、为人民谋利益的政党，它本身决无私利可图”，不谋私利才能谋根本、谋大利，才能从党的性质和根本宗旨出发，从人民根本利益出发。党的十八大以来，从“人民有所呼、改革有所应”的全面深化改革，到“不让一个人掉队”的精准脱贫，从“刮骨疗毒、壮士断腕”的反腐败斗争，到“功在当代、利在千秋”的生态文明建设，正是因为始终把人民对美好生活的向往作为奋斗目标，中国共产党人才能以“功成不必在我”的无私境界和“功成必定有我”的历史担当，团结带领人民不断取得新的历史性成就，创造了震撼世界的中国奇迹，书写下温暖人心的中国故事。</p> <p style="text-indent: 2em;"> 有这样一组统计数据，令人感动：在新冠肺炎疫情防控过程中，全国3900多万名党员、干部战斗在抗疫一线，1300多万名党员参加志愿服务，近400名党员、干部为保卫人民生命安全献出了宝贵生命。人们常常以“特殊材料制成的人”来赞誉共产党员，其所以特殊，最突出的表现，就在于中国共产党没有自己的特殊利益；共产党员常常以“紧急时刻、党员先上”要求自己，就在于每个人在入党时都宣誓“随时准备为党和人民牺牲一切”。环顾全球，世界上很少有哪个政党像中国共产党这样，在理论上鲜明提出、在实践中明确要求以人民利益为出发点和落脚点；很少有哪个政党像中国共产党这样，把公而忘私、奉献牺牲作为对党员的基本道德要求。正是这种无私的精神境界、强大的人格力量，让中国共产党始终保持持久的向心力，让鲜红的党旗始终能凝聚起各种力量，把中华民族变成一个坚强的命运共同体。</p> <p style="text-indent: 2em;"> 含德之厚，比于赤子。中国共产党人的为民初心，源自植根人民的根本立场，更建立在马克思主义的科学理论之上。历史唯物主义告诉我们，人民群众是推动人类社会历史发展的最终决定性力量，是历史的创造者和书写者，是真正的英雄。一个政党只有与人民同心、同行，才能顺乎潮流、乘风破浪。1934年，面对国民党反动派的疯狂“围剿”，毛泽东同志底气十足地说：“真正的铜墙铁壁是什么？是群众，是千百万真心实意地拥护革命的群众。”2020年，面对新冠肺炎疫情的严峻挑战，习近平总书记深情感慨，“战胜这次疫情，给我们力量和信心的是中国人民。”从嘉兴南湖上的一条小船，到承载着14亿人民希望的巍巍巨轮，中国共产党之所以能够发展壮大，中国特色社会主义之所以能够不断前进，就在于始终坚持一切为了人民、一切依靠人民，把民心当作最大的政治，把人民作为执政的最大底气。</p> <p style="text-indent: 2em;"> 得民心者得天下。始终把人民摆在至高无上的地位，不断增强人民的获得感、幸福感、安全感，我们党就能始终得到人民群众的信任和拥护，始终保持马克思主义政党的先进性和战斗力，始终成为引领中国社会发展进步的核心力量！</p> <p style="text-indent: 2em;"> <span id="paper_num" style="text-indent: 2em; display: block;">《 人民日报 》（ 2020年08月19日 05 版）</span></p> ]]></description>
        </item>
        <item>
            <title><![CDATA[二〇二〇年全国科技活动周启动]]></title>
            <link>http://politics.people.com.cn/n1/2020/0824/c1001-31833331.html</link>
            <pubDate>2020-08-24</pubDate>
            <author>人民网</author>
            <description><![CDATA[<p> 　　新华社北京8月23日电&nbsp;&nbsp;中共中央政治局委员、国务院副总理刘鹤23日出席2020年全国科技活动周暨北京科技周启动仪式，并参加有关活动。中共中央政治局委员、中共北京市委书记蔡奇出席仪式。</p> <p> 　　2020年全国科技活动周以“科技抗疫、创新驱动”为主题。刘鹤在启动仪式上分别与湖北武汉分会场、第二次青藏高原综合科学考察研究队视频连线。刘鹤表示，习近平总书记高度重视科技创新，强调最终战胜疫情关键要靠科技。湖北省通过强化科技支撑，统筹推进疫情防控和经济社会发展取得显著效果。刘鹤询问了青藏科考的进展情况，向科考队表示诚挚问候和热烈祝贺。仪式结束后，刘鹤参观了“科技战疫”“科技创新成果”“科普惠民”等小型展区，向在科技抗疫和推动经济社会发展中作出重要贡献的科学家们表示衷心感谢。</p> <p> 　　中央和国家机关有关部门及北京市负责同志参加北京主会场启动仪式，湖北省负责同志参加湖北武汉分会场启动仪式。</p> <p> 　　今年全国科技活动周暨北京科技周将开通网络“云展厅”向公众开放，集中展示科技战疫、科技创新、体验美好生活、服务脱贫攻坚等方面的内容。2020年全国科技活动周闭幕式将于8月29日在湖北武汉举行。全国科技活动周2001年开始举办，今年是科技活动周举办20周年。</p> <br /> <p> <span id="paper_num">　　《 人民日报 》（ 2020年08月24日 02 版）</span></p> <p style="text-indent: 2em;"> <strong>相关阅读：</strong></p> <p style="text-indent: 2em;"> <a href="http://scitech.people.com.cn/GB/25509/433423/index.html" target="_blank"><strong>2020年全国科技活动周专题</strong></a></p> ]]></description>
        </item>
        <item>
            <title><![CDATA[真抓实干、埋头苦干，推动长三角一体化发展不断取得成效]]></title>
            <link>http://politics.people.com.cn/n1/2020/0824/c1001-31833326.html</link>
            <pubDate>2020-08-24</pubDate>
            <author>本报记者</author>
            <description><![CDATA[<p> 　　8月20日，习近平总书记在安徽合肥主持召开扎实推进长三角一体化发展座谈会并发表重要讲话，在上海、江苏、浙江、安徽干部群众中引发热烈反响。大家表示，一定认真贯彻落实总书记重要讲话精神，深刻认识长三角区域在国家经济社会发展中的地位和作用，结合长三角一体化发展面临的新形势新要求，坚持目标导向、问题导向相统一，紧扣一体化和高质量两个关键词抓好重点工作，真抓实干、埋头苦干，推动长三角一体化发展不断取得成效。</p> <p> <strong>　　积极探索形成新发展格局的路径</strong></p> <p> 　　“总书记指出，在这次疫情防控和恢复经济过程中，一体化机制和互联互通基础设施发挥了作用。”上海开米科技有限公司董事长于文说，“我们对此深有体会，也更加坚定了在长三角区域发展的信心。”今年2月初受疫情影响，开米公司分布在长三角地区的11家供应商有的没有复工，有的因交通运输不畅面临生产困难，受益于长三角地区疫情联防联控和复工复产一体化，公司很快打通生产堵点，消毒产品日产量在一个月内迅速提升到100吨以上。</p> <p> 　　“总书记要求长三角三省一市在扎实做好‘六稳’工作、全面落实‘六保’任务上走在全国前列。我们将全力以赴抓项目、促投资、稳增长，充分发挥投资对稳定经济增长的重要作用。”上海市政府秘书长陈靖表示，为推动重大项目早落地、早开工、早见效，上海印发《关于进一步深化行政审批制度改革加快推进重大项目建设的若干措施》，已于今年8月1日起开始施行。</p> <p> 　　习近平总书记强调，要确保各项纾困措施直达基层、直接惠及市场主体，引导金融资本重点支持制造业和中小微企业。“我们要把总书记重要讲话精神更加精准地落实到下一步的工作中去。”江苏省常州市财政局局长刘月冬介绍，常州先后出台“惠企20条”“稳增长26条”“支持企业家创新创业30条”等政策措施，今年上半年累计为企业兑现减税、减费、减租、减息等支出128亿元。</p> <p> 　　“不能一律大拆大建，要注意保护好历史文化和城市风貌，避免‘千城一面、万楼一貌’。总书记的重要指示为我们指明了城市长远发展的方向。”江苏省苏州市自然资源和规划局党组书记、局长黄戟表示，苏州正以新一轮历史文化名城保护规划编制为契机，全方位完善保护政策和体制机制，着力以“微更新”的绣花手法，探索古城保护和发展之路。</p> <p> 　　“总书记要求长三角地区不仅要在经济发展上走在前列，也要在生态保护和建设上带好头。这更加坚定了湖州打造践行绿水青山就是金山银山理念示范区的信心。”浙江省湖州市生态环境局局长何晓红说，为保护太湖水质，湖州市在太湖沿线湖州市区段种植和养护适宜不同水质河流的水生植物，改善区域水环境质量；加快推进污水处理厂提标改造和“污水零直排区”建设，实现污水“应截尽截、应处尽处”。</p> <p> 　　安徽省合肥市国资委主任、党委书记张毅表示，合肥国资系统将加强区域合作，突出产业协同、创新赋能、合作共赢，加强与江浙沪地区国资平台、优秀创投机构、科技企业的合作交流，推动创新链与产业链深度融合，为打造长三角科创产业集群贡献力量。</p> <p> <strong>　　勇当我国科技和产业创新的开路先锋</strong></p> <p> 　　“总书记强调长三角三省一市要集合科技力量，聚焦集成电路、生物医药、人工智能等重点领域和关键环节，尽早取得突破。这让我们深受鼓舞，也深感责任重大。”长三角G60科创走廊联席会议办公室常务副主任王平表示，下一步将抓实产业规划引领、龙头企业带动、协同创新平台共建、产融结合新高地建设，引领长三角九城市聚焦产业协同，围绕人工智能、集成电路、生物医药、高端装备等先进制造业产业集群，加快推进重点领域、重大项目、重大平台系统集成落地，巩固深化补链强链、集链成群的良好态势。</p> <p> 　　“总书记要求长三角区域勇当我国科技和产业创新的开路先锋，这对我们既是鼓励，也是鞭策。”浙江省杭州高新区（滨江）科技局党组书记、局长柴志冬表示，近年来高新区积极对接上海、南京等地一流高校科研院所，合作共建杭州中科国家技术转移中心等高能级创新平台，共同培育了一批人工智能、生物医药等领域的高科技型企业，2019年高新区技术交易额达144亿元。“下一步，我们不仅要努力提供优质产品，更要努力提供高水平科技供给。”</p> <p> 　　“总书记重要讲话更加坚定了我们贯彻新发展理念、建设创新名城的决心和信心。”江苏省南京市推进长三角一体化发展领导小组办公室主任许明表示，南京打造创新型企业、专精特新企业、上市企业等“雁阵梯队”，全市高新技术企业两年增长150%，今年有望突破6000家。</p> <p> 　　“总书记强调创新主动权、发展主动权必须牢牢掌握在自己手中，这给了我们很大的鼓舞和动力。”中建材蚌埠玻璃工业设计研究院院长彭寿说，近年来设计院持续聚焦“卡脖子”技术攻关，量产0.12毫米超薄电子触控玻璃，下线浮法8.5代TFT-LCD玻璃基板，研发30微米柔性可折叠玻璃，为保障我国新型显示产业的产业链供应链安全作出了贡献。“下一步，我们将加大关键核心技术攻坚力度，加快科技创新成果转化速度，加大技术含量高、附加值高的新产品研发强度，以科技创新推动产业链供应链升级。”</p> <p> <strong>　　加快打造改革开放新高地</strong></p> <p> 　　“总书记要求继续做好上海自由贸易试验区临港新片区建设工作，充分发挥试验田作用。这为临港新片区改革开放指明了努力方向。”上海自贸区临港新片区管委会常务副主任朱芝松说，临港新片区将利用开放优势、制度优势、区位优势，在推进更深层次改革、构建更高水平开放型经济新体制中示范引领、攻坚突破；在突破关键核心技术、推动产业创新上开拓进取、走在前列；在服务新发展格局、促进国内国际双循环中争当枢纽节点、重要通道。</p> <p> 　　“贯彻落实总书记重要讲话精神，我们将对标国际一流标准改善营商环境，进一步扩大对外开放，推动贸易和投资便利化。”江苏省南通市商务局局长李玲介绍，近年来南通先后成立了省内首家外贸集聚区、省内首个全行业公平贸易工作站以及“通贸贷”融资平台、“政银信企”功能性平台和线上商务示范中心平台，有效缓解了中小外贸企业融资难、融资贵等问题。</p> <p> 　　毕业于国外一所大学的引进人才顾俊超，近日通过浙江省嘉兴市南湖区“人才e点通服务云平台”申报获得专属“人才码”，可享受落户、一次性聘用补贴等政策支持。“我们将认真贯彻落实总书记重要讲话精神，以开放、服务、创新、高效的发展环境吸引海内外人才安家落户。”南湖区委组织部副部长马乐说，“服务云平台”将人才政策整理汇总为36个大类、110个小类，让人才引进落户更加高效便捷。</p> <p> 　　“总书记重要讲话中关于对标国际一流标准改善营商环境的要求，与企业发展息息相关。”安徽华米信息科技有限公司创始人、副总裁章晓军说，华米科技2019年7月在南京成立分公司，原计划3年内招聘100人，没想到半年内就完成了计划。“我们切身感受到长三角一体化发展带来的好处，政策互连互通，产业资源协同，人才流动顺畅，好的营商环境是企业发展的强大动力。”</p> <p> 　　（本报记者巨云鹏、何聪、姚雪青、李中文、顾春、徐靖、谢卫群）</p> <br /> <p> <span id="paper_num">　　《 人民日报 》（ 2020年08月24日 01 版）</span></p> ]]></description>
        </item>
        <item>
            <title><![CDATA[做好防汛救灾和恢复重建工作 在改革开放中持续努力巩固经济恢复性增长势头]]></title>
            <link>http://politics.people.com.cn/n1/2020/0824/c1024-31833328.html</link>
            <pubDate>2020-08-24</pubDate>
            <author>人民网</author>
            <description><![CDATA[<P>　　新华社重庆8月23日电&nbsp;（记者刘铮）日前，中共中央政治局常委、国务院总理李克强在中共中央政治局委员、重庆市委书记陈敏尔和市长唐良智陪同下，在重庆考察。</P> <P>　　近日，长江、嘉陵江重庆段遭遇突如其来、历史罕见的洪峰。李克强一到重庆就赶赴受灾地区，强调要贯彻落实好习近平总书记对防汛救灾和灾后重建工作的重要指示精神，加强科学防洪调度，做好抢险救援、生产恢复等工作。他趟着泥水走进潼南双坝村被洪水浸泡过的村民家中，察看受损情况，到集中安置点了解受灾群众生活。在被冲毁的农地和大棚，他询问恢复生产有哪些困难，嘱咐地方负责同志加大支持。得知不少农民工回家救灾，李克强说，家是你们的牵挂，你们这样做，就像过去这里江上的纤夫齐声喊号子，大家一起努力就能渡过难关，党和政府一定会帮助你们重建家园。他还到市重点水库考察，并察看洪水对低洼城区淹没情况，叮嘱要抓紧研究政策并建立直达受灾地区机制，支持地方加强水毁工程修复、防洪排涝等城市基础设施建设。</P> <P>　　在洪水尚未完全退去的磁器口商业区，李克强一连走进多家商户，并与群众和游客交流，了解因疫情和水灾造成的商家损失，考察消费和旅游恢复情况。他说，加快服务业全面复业带动消费扩大，对于巩固经济恢复性增长态势至关重要，要在做好常态化疫情防控下，发挥国家政策扶持作用，助力企业和商户渡过难关，促进旅游等服务业正常经营，释放巨大消费潜力。</P> <P>　　李克强来到猪八戒网络公司，对他们打造双创平台汇聚大量专业人员为中小微企业提供服务、带动大量就业表示肯定。他说，普通人有上上智，推动双创就是要把不同人的长处激发和结合起来，聚众智汇众力创众业。在长安汽车公司，企业负责人介绍克服疫情等影响汽车产销逆势上扬，李克强鼓励他们开发更多带动消费的产品。他还来到重庆京东方公司，了解技术创新情况，勉励西部地区发挥回旋空间大的优势，积极承接东部产业转移，并向产业链中高端攀升，促进高质量发展。</P> <P>　　在考察企业时，李克强说，从近几个月宏观经济运行看，做好“六稳”工作、落实“六保”任务政策取得积极成效。今年保住上亿市场主体，完成新增城镇就业900万人以上的任务，全年经济可以实现正增长，要继续努力，同时要应对好发展中的不确定因素。</P> <P>　　在政务大厅，重庆汇报了深化放管服改革情况。正在办事的小微企业人员告诉总理，国家减税降费力度超出预期，企业普遍受益，得以生存。李克强说，不仅要减税降费，还要进一步降门槛，更大激发市场主体活力。重庆推出网上政务服务叫“渝快办”，我们推进放管服改革就是要让群众办事愉快、有获得感。</P> <P>　　李克强充分肯定重庆近年来经济社会发展成绩和防疫防汛工作，希望坚持以习近平新时代中国特色社会主义思想为指导，按照党中央、国务院决策部署，开拓奋进，走在西部改革开放创新前列，谱写重庆发展新篇章。</P> <P>　　肖捷陪同考察。</P> <br><span id='paper_num'>　　《 人民日报 》（ 2020年08月24日 01 版）</span>]]></description>
        </item>
        <item>
            <title><![CDATA[路，都是人走出来的（一线行走）]]></title>
            <link>http://politics.people.com.cn/n1/2020/0824/c1001-31833360.html</link>
            <pubDate>2020-08-24</pubDate>
            <author>徐驭尧</author>
            <description><![CDATA[<P>　　每一个个体生活的欣荣，都是干部群众的奉献和奋斗在支撑</P><P>　　</P><P>　　云，在脚下飘荡；路，依山势蜿蜒。举目而望，入眼尽白，能见度最多十几米。云雾深处就是中国最后一个通公路的县，也是西藏海拔最低的县——墨脱。</P><P>　　穿过嘎隆拉隧道，在百公里内海拔从近4000米直落到1000米左右。这里雨水丰沛，年降水超过2000毫米；这里树木繁茂，放眼望去，原始森林遍布。</P><P>　　落差与降水相伴，带来的不仅仅是独特的自然景观，更是令人感叹的交通艰难。我们进入墨脱的那天，100公里的路走了四五个小时，11次路面断裂，4次桥梁受阻，遇到迎面会车，车轮子挨在悬崖边上，半个轮子已经在路基之外。</P><P>　　到了墨脱，提起行路难，广东佛山市援藏干部、墨脱县委常务副书记叶敏坚和我聊了起来。今年3月，他和一众干部下乡调研墨脱县境内的茶叶产业，夜宿村民家中。当夜大雨滂沱，第二天早上起来，回县城的道路已经被滚石和塌方阻断。小石头簌簌而下，如果遇到二次塌方，所有人都有风险。</P><P>　　所幸，他们联系到了当地村里的一支施工队，村支书开着推土机和挖掘机，清理路上的滚石，挖开了一条仅供一辆车行驶的通道，这才让叶敏坚和同事们顺利通过塌方点。沿途，这样的塌方点还有很多处。</P><P>　　“在广东生活习惯了，我没想到交通保障还会如此困难，也意识到从这里走出一条致富路，有多么不容易。”叶敏坚对记者感慨。</P><P>　　的确，在墨脱，一切保障如交通、网络、电力，都变得不那么寻常。我们所习惯的日常，是一系列不曾察觉的奇迹正在连续发生。奇迹的背后，是一个个当地干部努力保障民生建设，是一个个基础设施工作人员苦干不懈，也是多年来对口援助连续不断。</P><P>　　墨脱的气候条件适合茶叶生长，山里有一些野生古茶树，2012年开始，广东援藏干部和当地干部群众共同努力，克服了种植技术、销售渠道等诸多困难，发展茶叶产业。截至目前，已建成高标准高山有机茶园56个，今年上半年，墨脱县共计采摘茶青近13万斤，农牧民群众共计增收约393万元。</P><P>　　站在德兴乡远眺，山上星星点点有人穿行，那是墨脱的茶农。从不种茶叶到以茶叶为生，在援藏干部的前后接力帮扶和当地干部群众的辛勤努力下，墨脱走出了一条从无到有的路，走出了产业的出山路、群众的致富路。</P><P>　　好日子是奋斗出来的，墨脱每一个个体生活的欣荣，都是干部群众的奉献和奋斗在支撑。路，都是人走出来的。</P><P>　　（作者为本报西藏分社记者）</P><P>　　栏目投稿邮箱：yxxz8494@163.com</P> <br><span id='paper_num'>　　《 人民日报 》（ 2020年08月24日 11 版）</span>]]></description>
        </item>
        <item>
            <title><![CDATA[放得下接得住 效率高干劲足（基层减负进行时·让干部有更多时间精力抓落实）]]></title>
            <link>http://politics.people.com.cn/n1/2020/0824/c1001-31833359.html</link>
            <pubDate>2020-08-24</pubDate>
            <author>本报记者 贺 勇</author>
            <description><![CDATA[<P>　　核心阅读</P><P>　　为进一步推进行政执法力量向基层延伸、下沉，北京市将431项行政执法职权下放至街道乡镇，组建统一的综合行政执法机构，为基层干部创造更加充分、高效的干事条件，既提高了执法效率，也方便了群众生活。</P><P>　　</P><P>　　7月1日起，原来由北京市、区相关部门行使的431项行政执法职权开始下放至街道办事处和乡镇人民政府，并由其依法行使与之相关的行政检查权，实行综合执法。</P><P>　　据介绍，此次下放的431项行政执法职权，主要聚焦社会焦点、群众痛点、基层难点，既要解决长期困扰基层干部的“看得见却管不着”难题，又要持续向基层放权赋能，确保权力“放得下、接得住、用得好”。</P><P>　　相关职权下放至街道乡镇，简化执法流程，及时回应诉求</P><P>　　“您好，我们是天桥街道综合行政执法队。对您这里发现的违反《北京市控制吸烟条例》相关行为进行处罚。”7月1日，北京市西城区天桥街道综合行政执法队正式挂牌成立。依据《北京市控制吸烟条例》，队长王震开出了第一张罚单。</P><P>　　当天，执法队员在巡查中发现，北纬路南侧的一家湘菜馆内有顾客抽烟，随即上前劝阻，并行使了室内控烟处罚权。</P><P>　　过去，按照规定，市、区两级卫生健康部门履行控烟职责，受理违法吸烟的举报投诉，并依法查处违法行为。虽然控烟条例也规定，乡镇政府和街道办事处按照属地管理原则，做好本辖区内的控制吸烟工作，但却并未赋予乡镇和街道对违法行为的执法权。</P><P>　　区卫健部门辖区面积大、执法力量有限，很难及时发现违法行为并进行处罚。而街道、乡镇工作人员发现违法行为时，却又无权处罚，导致“看得见的管不着，管得着的看不见”。</P><P>　　“这次将一些权力赋予街道乡镇，就是聚焦社会焦点、群众痛点、基层难点。”北京市委编办相关负责人介绍。</P><P>　　“现在我们可以直接行使行政处罚权，大大简化了执法流程，提高了执法效率。”王震介绍。而对群众来说，问题解决更快、更直接了，涉及街道辖区内的举报问题，街道的行政执法队伍就能及时回应诉求。</P><P>　　加强业务指导，培训基层执法，确保把下放的权力行使好</P><P>　　7月3日上午，海淀区花园路街道综合行政执法队对大运村东侧及大运村足球场北侧1000余平方米违法建设进行了拆除。</P><P>　　以前，街道执法队是区城管执法局的派出机构，对执法的合规性审查由区城管执法局负责；改革后，街道办事处、乡镇政府成为执法主体，综合行政执法队成为其管理的行政执法机构。</P><P>　　“执法前，我们对房屋和院落属性、建设时间以及土地性质等方面进行了充分调查，夯实了拆违的法律依据，确保整顿行动取得预期成效。”花园路街道综合执法队副队长王磊说，对他们而言，这既是赋权，更是责任。</P><P>　　权力“放得下”，基层还得“接得住”。在海淀区，城管执法部门的部分职权下放后，区城管局将继续加强业务指导、工作协调、任务统筹，确保下放的所有职权各街道乡镇能行使得好，更高效解决辖区群众诉求。</P><P>　　海淀区生态环境局相关负责人介绍，此次共有涉及大气、噪声污染防治方面的4项职权下放街道乡镇。“噪音扰民十分常见，但如何对违法行为进行判定和处罚，也考验着基层执法者的能力。”</P><P>　　为此，今年6月份，海淀区生态环境局通过线上视频直播的方式，组织开展下沉行政执法职权培训会，向各街道乡镇综合行政执法队详细讲解了执法要点、执法依据、典型案例等，帮助其依法、规范行使职权，切实提升工作实效。</P><P>　　与此同时，海淀区生态环境局还结合日常执法、全时执法、热点网格执法等监察执法行动，及时将发现的各类生态环境问题移交街道乡镇处理，加强执法经验方面的沟通联络，帮助其提升环境监管能力。</P><P>　　明确各方职责，建立配套共享机制，及时补充基层综合执法力量</P><P>　　据了解，此次北京向街道乡镇下放行政执法权后，由街道乡镇行使的行政处罚权共332项、行政强制权20项，由区级和街道乡镇共同行使的行政处罚权59项，由市、区和街道乡镇共同行使的行政处罚权17项、行政强制权3项。</P><P>　　对此，中国社科院法学所副研究员董文勇认为，“强调综合执法并不是要取消或削弱专业执法，而是街道办事处、乡镇政府与区有关部门要在各自权限内行使行政执法职权。”</P><P>　　在职权下放的同时，北京还明确了市级主管部门及其职责、健全街道乡镇法制机构、建立执法信息共享机制等。具体来说，各区将建立各级各部门之间的行政执法信息共享和协调配合机制，实现执法对象基本信息、管理信息和行业信息共享，同时，区有关部门则加强业务指导、协助开展执法，提供技术支持。</P><P>　　针对一些重大复杂案件，北京市委编办相关负责人介绍，街道乡镇可以报请区政府指定原下放职权的区执法部门管辖。另一方面，区政府认为案件重大复杂或街道乡镇承办可能影响公正处理的，也可以指定原下放职权的区执法部门管辖。</P><P>　　为避免职权下放之后，相应的资源跟不上，出现加剧基层负担的情况，北京及时补充基层综合执法队伍人员力量，严禁随意抽调、借调基层执法人员，除必要岗位外，尽量安排执法人员到一线从事执法工作。同时，在完善基层综合执法相关管理制度、建立基层综合执法协调配合机制方面也采取了相应的配套措施。“由于有党建引领‘街乡吹哨、部门报到’的改革经验做支撑，这些举措在一定程度上弥补了资源不足的问题，保障了基层执法依法科学有序。”董文勇说。</P> <br><span id='paper_num'>　　《 人民日报 》（ 2020年08月24日 11 版）</span>]]></description>
        </item>
        <item>
            <title><![CDATA[中央第九巡视组向人民日报社反馈巡视情况]]></title>
            <link>http://politics.people.com.cn/n1/2020/0824/c1001-31833338.html</link>
            <pubDate>2020-08-24</pubDate>
            <author>人民网</author>
            <description><![CDATA[<P>　　本报北京8月23日电&nbsp;&nbsp;近日，中央第九巡视组向人民日报社反馈巡视情况。中央巡视工作领导小组成员杨晓超主持召开向人民日报社社长李宝善的反馈会议，出席向人民日报编委会反馈会议，对巡视整改提出要求。会议向人民日报社主要负责人传达了习近平总书记关于巡视工作的重要讲话精神，中央第九巡视组组长吴瀚飞代表中央巡视组分别向人民日报社主要负责人和编委会反馈了巡视情况。李宝善主持向人民日报编委会反馈会议并就做好巡视整改工作讲话。</P><P>　　根据党中央统一部署，2020年5月至6月，中央第九巡视组对人民日报社进行了常规巡视。巡视组坚持以习近平新时代中国特色社会主义思想为指导，全面贯彻巡视工作方针，坚守政治巡视定位，把“两个维护”作为根本任务，紧扣党组（党委）职能责任强化政治监督，重点检查落实党的理论和路线方针政策以及党中央重大决策部署、全面从严治党战略部署、新时代党的组织路线、巡视整改等情况，推动中央和国家机关加强政治建设，带头做到“两个维护”、践行“三个表率”、建设模范机关，推进国家治理体系和治理能力现代化。中央巡视工作领导小组听取了巡视组的巡视情况汇报，并向中央政治局常委会会议报告了有关情况。</P><P>　　吴瀚飞在反馈时指出，人民日报社坚持以习近平新时代中国特色社会主义思想为指导，积极开展重大主题宣传，推进人民日报全新改版，进一步推动管党治社，在党的新闻舆论工作中发挥了重要作用。巡视也发现了一些问题，主要是：学习宣传贯彻习近平新时代中国特色社会主义思想还有不足，落实习近平总书记对人民日报工作重要指示批示精神不够深入，履行职能责任还不够到位，推动媒体融合发展持续发力还不够；落实全面从严治党“两个责任”不够有力，对部门和下属单位管理存在薄弱环节，深入基层调研不够，形式主义、官僚主义等问题仍然存在；贯彻新时代党的组织路线不够到位，班子自身建设有待加强，干部人才队伍建设还有差距，基层党建工作比较薄弱；对巡视、审计发现问题整改不够扎实，长效机制尚不健全。同时，巡视组还收到反映一些领导干部的问题线索，已按有关规定转中央纪委国家监委、中央组织部等有关方面处理。</P><P>　　吴瀚飞提出了五点整改意见建议：一是深入学习宣传贯彻习近平新时代中国特色社会主义思想，深入贯彻落实习近平总书记对人民日报工作的重要指示批示精神，增强“四个意识”、坚定“四个自信”，充分发挥党中央机关报导向、旗帜、引领作用，切实履行党的新闻舆论工作职责使命，以实际行动做到“两个维护”。二是持续巩固提升改版成果，大力推进媒体融合向纵深发展。不断拓展新媒体传播渠道和平台，加快构建全媒体传播格局。三是落实全面从严治党“两个责任”，加大从严治社力度。坚持“严”的主基调，加大对下属单位的监督管理，健全廉洁风险防控机制，严格落实中央八项规定精神，坚决整治形式主义、官僚主义问题，深入基层、深入实践，加强调查研究。四是坚决贯彻落实新时代党的组织路线。加强领导班子自身建设，加强对干部人才队伍建设的统筹谋划，不断提升基层党建工作质量。五是强化巡视整改责任落实。把巡视新发现的问题与“不忘初心、牢记使命”主题教育检视的问题、上次巡视整改不到位的问题结合起来，一体整改、集成整改，建立健全常态化长效化机制，确保整改取得实效。</P><P>　　杨晓超强调，人民日报编委会要切实提高政治站位，坚持用习近平新时代中国特色社会主义思想武装头脑、指导实践、推动工作，进一步强化使命意识和政治担当，主动适应新时代新形势新要求，增强责任感使命感紧迫感，从“两个大局”和国家治理体系、治理能力现代化高度，准确把握新时代工作规律，深刻认识党和国家赋予的职能职责，认真贯彻落实党中央关于统筹疫情防控和经济社会发展、扎实做好“六稳”工作、全面落实“六保”任务等决策部署，全面落实党中央深化改革要求，切实把增强“四个意识”、坚定“四个自信”、做到“两个维护”落实到履职尽责上、体现到具体工作中。坚决落实全面从严治党主体责任和监督责任，把“严”的主基调长期坚持下去，层层传导压力，加强对下属单位的监督管理，建立健全权力监督制约机制，加大整治形式主义、官僚主义力度，推动全面从严治党落到底、落到位。认真贯彻新时代党的组织路线，切实加强领导班子和干部队伍建设，有效提高治理能力，为落实党中央决策部署提供政治保障和组织保障。</P><P>　　杨晓超指出，要深入学习贯彻习近平总书记关于巡视工作的重要讲话精神，从政治高度抓好巡视整改和成果运用，人民日报编委会特别是主要负责同志要担起主体责任，组织班子认真研究，制定问题清单、任务清单、责任清单，召开巡视整改专题民主生活会，把巡视整改融入日常工作，融入深化改革，融入全面从严治党，融入班子队伍建设。要把巡视新发现问题与“不忘初心、牢记使命”主题教育检视问题、上次巡视整改不到位问题结合起来，一体整改、集成整改，建立健全整改长效机制，推动人民日报社各项工作高质量发展。纪检监察机关和组织部门要加强巡视整改日常监督，把整改落实情况纳入全面从严治党和领导班子综合考核，对敷衍整改、虚假整改的严肃问责。</P><P>　　李宝善表示，人民日报编委会一定要提高政治站位，深入学习贯彻习近平总书记关于巡视工作重要讲话精神，从增强“四个意识”、坚定“四个自信”、做到“两个维护”高度，深刻认识抓好巡视整改对于推动促进人民日报社各项工作的重要意义，切实增强做好巡视整改工作的政治自觉、思想自觉和行动自觉。对中央巡视组的反馈意见，编委会诚恳接受、照单全收。我们要坚决扛起巡视整改的政治责任，坚决落实中央巡视反馈意见，扎实做好巡视“后半篇文章”，把巡视整改作为加强党的政治建设、落实管党治党责任的重要任务，作为履行职责使命、把人民日报办得更好的有力抓手，层层压实整改责任，确保整改取得实效。我们要以巡视整改为契机，立足人民日报社职能责任，直面问题、真抓实改，守正创新、担当作为，把“严”的主基调长期坚持下去，推动全面从严治党、从严治社向纵深发展，更好地履行党中央赋予人民日报社的职责使命，充分发挥党中央机关报在新闻舆论上的导向、旗帜、引领作用。</P><P>　　中央第九巡视组有关同志，中央巡视工作领导小组办公室、中央纪委国家监委有关监督检查室、中央组织部有关局负责同志，中央纪委国家监委驻人民日报社纪检监察组有关负责同志，人民日报编委会成员出席会议；人民日报社各部门、社属媒体企业主要负责同志列席会议，京外国内分社、社属媒体企业负责同志在当地参加视频会议。</P> <br><span id='paper_num'>　　《 人民日报 》（ 2020年08月24日 04 版）</span>]]></description>
        </item>
        <item>
            <title><![CDATA[十九届中央第五轮巡视反馈情况全部公布]]></title>
            <link>http://politics.people.com.cn/n1/2020/0824/c1001-31833329.html</link>
            <pubDate>2020-08-24</pubDate>
            <author>人民网</author>
            <description><![CDATA[<P>　　本报北京8月23日电&nbsp;8月23日，十九届中央第五轮巡视对35个中央和国家机关单位党组织的巡视反馈情况在中央纪委国家监委网站集中向社会公布。</P> <P>　　本轮巡视全面贯彻巡视工作方针，落实政治巡视要求，紧扣被巡视党组织职能责任，聚焦监督“两个维护”实际行动，深入了解落实党的理论和路线方针政策以及党中央重大决策部署情况，落实全面从严治党战略部署情况，落实新时代党的组织路线情况，落实中央巡视、审计等监督发现问题和“不忘初心、牢记使命”主题教育检视问题整改情况。</P> <P>　　在反馈会上，各中央巡视组指出，被巡视单位党组织坚持以习近平新时代中国特色社会主义思想为指导，贯彻落实党中央决策部署的态度更加积极，管党治党责任意识整体提升，全面从严治党呈现持续向上向好态势，各项工作取得新的积极进展，特别是在今年以来的抗击新冠肺炎疫情斗争中和复工复产、恢复经济社会正常运行方面，坚决听从党中央指挥调遣，积极履职，扎实工作，成绩值得肯定。与此同时，各中央巡视组也指出了存在的问题：有的单位贯彻落实习近平新时代中国特色社会主义思想不够深入；有的全面从严治党推进不够有力，落实主体责任不够到位，履行监督责任有差距；有的贯彻新时代党的组织路线不够到位，领导班子和干部队伍建设有待加强；有的党建工作责任制落实不够到位，基层党建工作比较薄弱；有的对中央巡视和审计发现的部分问题整改不到位；等等。中央巡视组还收到反映一些领导干部的问题线索，已按有关规定转中央纪委国家监委、中央组织部等有关方面处理。</P> <P>　　中央巡视工作领导小组、中央纪委国家监委、中央组织部有关领导出席反馈会议，对巡视整改提出要求。强调被巡视党组织要深入学习贯彻习近平新时代中国特色社会主义思想，切实提高政治站位，进一步强化使命意识和政治担当，主动适应新时代新形势新要求，从“两个大局”和国家治理体系、治理能力现代化高度，准确把握新时代工作规律，深刻认识党和国家赋予的职能职责，认真贯彻落实党中央关于统筹疫情防控和经济社会发展、扎实做好“六稳”工作、全面落实“六保”任务等决策部署，全面落实党中央深化改革要求，切实把增强“四个意识”、坚定“四个自信”、做到“两个维护”落实到履职尽责上、体现到具体工作中。纪检监察机关和组织部门要加强巡视整改日常监督，把整改落实情况纳入全面从严治党和领导班子综合考核，对敷衍整改、虚假整改的严肃问责。</P> <P>　　各被巡视单位党组织主要负责人表示，将坚决扛起整改主体责任，把巡视整改作为重要政治任务，融入日常工作、融入深化改革、融入全面从严治党、融入班子队伍建设。对中央巡视组反馈问题深刻反思、逐项梳理，制定整改方案，细化责任清单，以上率下、狠抓落实，做到全面整改、立行立改、即知即改、真改实改，建立健全整改长效机制，推进各项工作高质量发展。</P> <br><span id='paper_num'>　　《 人民日报 》（ 2020年08月24日 01 版）</span>]]></description>
        </item>
        <item>
            <title><![CDATA[下好先手棋，开创发展新局面]]></title>
            <link>http://politics.people.com.cn/n1/2020/0824/c1001-31833325.html</link>
            <pubDate>2020-08-24</pubDate>
            <author>人民网</author>
            <description><![CDATA[<p> 　　八月的江淮大地，骄阳似火。</p> <p> 　　8月18日至21日，习近平总书记深入安徽考察调研，并在合肥主持召开扎实推进长三角一体化发展座谈会。</p> <p> 　　此次考察，两大重点：一是防汛救灾和治河治江治湖，二是长三角一体化发展。</p> <p> 　　入汛以来，长江、淮河、巢湖等一度处于超警戒水位。安徽南北三线作战，防汛救灾任务艰巨。如何加强防汛救灾和灾后恢复重建，加强淮河和巢湖治理，加强长江生态环境保护修复，习近平十分关心，尤其惦念灾区群众，“这是我最牵挂的事情之一”。</p> <p> 　　长三角一体化发展上升为重大国家战略以来，取得了哪些进展，面对新形势新任务如何育新机、开新局，习近平总书记实地调研、掌握最新情况。“长江经济带的上游、中游地区我都看过了，并开了座谈会，这次要到下游看看，也开个座谈会。”</p> <p> 　　国内外形势纷繁复杂，安徽之行，重在回答两大课题：</p> <p> 　　为了谁、依靠谁？“人民”二字重如千钧。习近平总书记强调：“任何时候我们都要不忘初心、牢记使命，都不能忘了人民这个根，永远做忠诚的人民服务员。”</p> <p> 　　面对全球市场萎缩的外部环境，面对新一轮科技革命和产业变革加速演变，习近平总书记强调：“最重要的是必须集中力量办好自己的事，任凭风浪起，稳坐钓鱼台。”</p> <p> <strong>　　一、治水之患，兴水之利</strong></p> <p> 　　2020年注定不平凡。疫情汛情叠加，一场又一场的大考。在全国防汛救灾形势最吃紧的时候，习近平总书记多次研究部署，作出重要指示批示。</p> <p> 　　安徽是汛情最严重的省份之一。境内长江、淮河干流全线超警戒水位，巢湖遭遇百年未遇高水位。王家坝闸时隔13年再次开闸蓄洪，巢湖主要圩口也实行了开闸分洪。入秋后，持续浸泡的湖堤坝圩险情隐患增多，防汛形势依然严峻。</p> <p> 　　这次到安徽，总书记就是要实地察看灾区情况，看看灾区群众生产生活恢复得怎么样。淮河之滨、长江岸线、巢湖堤坝……炎炎烈日下，他辗转奔波。</p> <p> 　　第一站，王家坝闸，被誉为千里淮河“第一闸”和淮河防汛的“晴雨表”。王家坝闸之下，是180平方公里的蒙洼蓄洪区。如今，洪水退去，河水波澜不惊，同7月20日的惊心动魄形成鲜明比照。</p> <p> 　　当地负责同志向总书记汇报了开闸蓄洪情况。</p> <p> 　　大雨滂沱，河水汹涌。王家坝闸从警戒水位到保证水位只用了51小时。7月19日傍晚，他们接到开闸蓄洪和撤离群众指令。风雨中，群众赶牛羊、扛家当，扶老携幼……从指令下达到蒙洼蓄洪区2000多位非安全区群众全部转移安置，只用了7小时。</p> <p> 　　在王家坝防汛抗洪展厅，习近平总书记仔细端详防汛图。60多年来，王家坝闸曾16次开闸泄洪。从2007年以来，这里一直安澜无事，如今要一夜间撤离！蒙洼人发扬王家坝精神，识大体、顾大局，舍小家、顾大家，主动配合、紧急转移，为防汛救灾作出重大贡献。</p> <p> 　　“虽然不少群众受了灾，但总的看，一批重大水利设施发挥了关键作用，防洪体系越来越完善，防汛抗洪、防灾减灾能力不断提高，手段和资源也越来越丰富，在科学调度下，不再手忙脚乱。”习近平总书记要求，“要把70年来治理淮河的经验总结好，认真谋划‘十四五’时期的治淮方案。”</p> <p> 　　洪水浸泡过的田野还没有排干，蒙洼已经开始复苏，尚未从防汛中喘口气的乡亲们已经忙碌了起来。</p> <p> 　　附近的红亮箱包有限公司，是在当地政府支持下办的一家扶贫车间。在家门口就业，员工张丽每月能赚2000多块，还能照顾家。洪水来时，她很担忧会不会淹了“饭碗”。在党委和政府帮助下，扶贫车间很快复工了。</p> <p> 　　总书记十分关心因灾致贫返贫问题，详细询问扶贫政策、防汛补助落实情况，要求各级党委和政府加大扶持力度，帮助企业渡过难关，保障受灾群众、贫困群众就业。</p> <p> 　　离开扶贫车间，他赶往蒙洼蓄洪区曹集镇利民村西田坡庄台。看到乡亲们在田里劳作，总书记下了车。</p> <p> 　　池塘里，几位村民在采摘芡实；退水地块上，乡亲们正在补种包菜。看到总书记来了，乡亲们兴奋地围了上来。</p> <p> 　　“我这次是专程来看望灾区乡亲们，看看灾后恢复重建情况……”总书记话音未落，大家就抢着汇报：“请总书记放心！头伏萝卜二伏菜，三伏饽饽种荞麦，水退到哪里，我们就跟到哪里，种子就种到哪里，尽量把损失抢回来。”</p> <p> 　　习近平倾听着，汗水顺着脸颊滴落到脚下的泥土里。“看到乡亲们生产生活都有着落、有希望，我的心就踏实。”</p> <p> 　　“实施乡村振兴，必须以确保行蓄洪功能作为前提。要因地制宜安排生产生活，扬长避短。同时引导和鼓励乡亲们逐步搬出去，减存量、控增量，不搞大折腾，确保蓄洪区人口不再增多。”</p> <p> 　　蓄洪时，西田坡庄台被洪水围困了20多天。</p> <p> 　　总书记关切地问：“闹这么大的洪水，乡亲们的生活怎么样？”</p> <p> 　　“过去发洪水时，庄台东头舀水喝，西头涮马桶。”“原来的变压器都在庄台下面，洪水一来就断电。”乡亲们你一言我一语，“如今电不断，水照供，船来船往吃穿不愁”……</p> <p> 　　听说总书记来了，乡亲们都围拢了过来。总书记动情地对大家说：“愚公移山、大禹治水，中华民族同自然灾害斗了几千年，积累了宝贵经验，我们还要继续斗下去。这个斗不是跟老天爷作对，而是要尊重自然、顺应自然规律，积极应对自然灾害，与自然和谐相处。”</p> <p> 　　“全面建设社会主义现代化，抗御自然灾害能力也要现代化。制定‘十四五’规划，要考虑这方面工作，坚持问题导向，总结问题和短板，不断改善我们的工作。”</p> <p> 　　总书记来到马鞍山市，察看长江水情水势，了解岸线整治和渔民退捕工作落实情况。</p> <p> 　　薛家洼生态园地处长江岸边，曾面临十分突出的生态环境问题，经过综合整治，已成为百姓亲江亲水亲绿的生态岸线和城市生态客厅。总书记看了十分高兴。</p> <p> 　　“实施长江经济带发展战略，一开始我就强调要坚持共抓大保护、不搞大开发，先给大家泼泼冷水，这恰恰体现了有所为有所不为的哲学思想。经济发展要设定前提，首先要保护好生态环境。高质量发展的基础，就是生态环境。生态环境保护不好，最终将葬送经济发展前景。”</p> <p> 　　“长江生态环境保护修复，一个是治污，一个是治岸，一个是治渔。长江禁渔是件大事，关系30多万渔民的生计，代价不小，但比起全流域的生态保护还是值得的。长江水生生物多样性不能在我们这一代手里搞没了。”</p> <p> 　　总书记特别强调，“长江禁渔也不是把渔民甩上岸就不管了，要把相关工作做细做实，多开发就业渠道和公益性岗位，让渔民们稳得住、能致富。”</p> <p> 　　在扎实推进长三角一体化发展座谈会上，习近平总书记语重心长地对三省一市的负责人说：“长三角地区是长江经济带的龙头，不仅要在经济发展上走在前列，也要在生态保护和建设上带好头。”</p> <p> 　　巢湖，是安徽防汛救灾的又一个主战场。由于连续超警戒水位，合肥面临巨大危险。合肥市主动启用巢湖周边的生态湿地蓄洪区，上拦、下排、边分、固堤，有效缓解了合肥市的防汛压力。</p> <p> 　　在合肥市肥东县十八联圩生态湿地蓄洪区巢湖大堤罗家疃段，习近平总书记详细了解巢湖防汛救灾和固坝巡堤查险工作。他强调，要坚持生态湿地蓄洪区的定位和规划，防止被侵占蚕食，保护好生态湿地的行蓄洪功能和生态保护功能。“巢湖是安徽人民的宝贝，是合肥最美丽动人的地方。一定要把巢湖治理好，把生态湿地保护好，让巢湖成为合肥最好的名片。”</p> <p> 　　大堤上战旗猎猎，防洪沙袋一眼望不到头，防汛救灾一线人员和依然坚守在一线的部队官兵整齐列队。他们身后，八百里巢湖蔚为壮观。</p> <p> 　　三位牺牲同志的家属，站在队伍最前面。陈陆、甘磊、帖克艳，就在这个夏天，他们在防汛救灾中谱写了悲壮的英雄之歌。</p> <p> 　　习近平总书记神色凝重，走上前向三位牺牲同志的家属一一问候。</p> <p> 　　他深情地说：“你们的亲人也是我们的亲人，是祖国和人民的亲人，他们是我们心目中的英雄。每当危难时刻总有英雄挺身而出，这是中华民族伟大精神的体现。你们要把工作生活安排好，保重身体，以最好的方式来告慰他们。”</p> <p> 　　习近平总书记对大家表示亲切慰问，并向全国奋战在防汛救灾一线的同志们致以诚挚的问候。他关切地说：“汛情还在继续，党和政府一定要关心关爱奋战在第一线的同志们，特别是他们的饮食、休息，有的同志身上起了燎泡，有的脚上发炎化脓了，要关心他们的安全和健康。”</p> <p> <strong>　　二、下好先手棋，开创发展新格局</strong></p> <p> 　　4%的国土面积，不到10%的人口，创造了近四分之一的经济总量。在全国经济版图中，长三角地区是经济最活跃、开放程度最高、创新能力最强的区域之一。</p> <p> 　　20日下午，习近平总书记主持召开了扎实推进长三角一体化发展座谈会。</p> <p> 　　面对长三角地区负责同志，总书记开宗明义：“在当前的国内国际形势下，要深刻认识长三角区域在国家经济社会发展中的地位和作用，结合长三角一体化发展面临的新形势新要求，紧扣一体化和高质量两个关键词，坚持目标导向、问题导向相统一，真抓实干、埋头苦干，推动长三角一体化发展不断取得成效。”</p> <p> 　　“一体化”在历史的厚重积淀中谋势酝酿，在新时代的创新发展中投子布局。曾在长三角地区工作过的习近平总书记回忆：“我也曾深入思考和积极推动长三角发展的问题。”</p> <p> 　　那时候，沪苏浙一体化大势渐明，首次长三角发展座谈会就由习近平任职的浙江省担任“东道主”。邻省的安徽也举目瞻望。安徽省负责同志风趣地说：“那时候我们是旁听生。在总书记批准和推动下，我们变成了插班生，现在成为了正式生。”</p> <p> 　　笑声里，习近平总书记娓娓道来：“当时主要考虑是拉兄弟一把。从安徽来讲，加进来后，就犹如种地，改良了土壤和墒情，加上优质的种子，庄稼就长旺盛了。”</p> <p> 　　从区域实践到国家擘画，长三角一体化发展势如破竹。2018年在首届中国国际进口博览会上，习近平总书记宣布将长三角一体化发展上升为国家战略。一年后，《长江三角洲区域一体化发展规划纲要》出炉。</p> <p> 　　一年一个大手笔，一年一个大台阶。这次座谈会开启了长三角一体化发展的又一个“加速度”。习近平总书记强调，谋划长三角一体化发展要站在两个大局的高度上看，一个是中华民族伟大复兴的战略全局，一个是世界百年未有之大变局。党中央对长三角一体化发展的战略定位是“一极三区一高地”：“全国发展强劲活跃增长极、高质量发展样板区、率先基本实现现代化引领区、区域一体化发展示范区、改革开放新高地。”</p> <p> 　　“在当前全球市场萎缩的外部环境下，我们必须集中力量办好自己的事，发挥国内超大规模市场优势，加快形成以国内大循环为主体、国内国际双循环相互促进的新发展格局，这是深入分析国内国际形势作出的重大判断，也是一个长期的战略部署。”习近平总书记高瞻远瞩。</p> <p> 　　二季度，长三角交出了一份不错的成绩单。三省一市地区生产总值由一季度的下降5.7%转为增长0.2%，经济总量占全国比重由上年底的23.9%提高到24.2%，在扎实做好“六稳”工作、全面落实“六保”任务上走在全国前列。长三角一体化发展新格局正在形成。</p> <p> 　　在上海市委负责人发言时，习近平总书记询问：“现在进博会筹备进度怎么样？”</p> <p> 　　“企业展位比上一届还多了6万平方米，疫情有影响，但谁都不愿意放弃中国这个大市场。”</p> <p> 　　江苏、浙江、安徽的负责人也汇报了进出口贸易和外来投资继续增长的情况，他们讲述了共同的感受：国外看好长三角、看好中国经济发展的预期没有改变。</p> <p> 　　一体化和高质量，长三角一体化发展的两个关键词。</p> <p> 　　一体化旨在打破行政壁垒，提高政策协同，让要素在更大范围畅通流动，有利于发挥各地区比较优势，实现更合理分工，凝聚更强大的合力。</p> <p> 　　“断头路”，过去的一个老大难问题。挨着的两个县，分属两个省，各自规划不同，难以一体建设，通车前绕路走得花40分钟，通车后为5分钟。一体化潜力巨大。</p> <p> 　　高质量发展，长三角地区最有条件、最有能力率先实现，在全国发挥示范作用。这也是国家交付给长三角的一份沉甸甸责任。</p> <p> 　　高质量发展，关键在创新驱动。</p> <p> 　　“新中国成立后很长时期内，上海产品和技术在很大程度上支撑了全国经济建设。今天，上海和长三角区域不仅要提供优质产品，更要提供高水平科技供给，支撑全国高质量发展。”总书记对上海和长三角地区寄予厚望。</p> <p> 　　一位省市负责同志讲述了当地中小微企业的“意外收获”：“过去没有机会和国际化大企业合作的省内小企业，现在纷纷接到国内的‘橄榄枝’，反而多了发展契机。”</p> <p> 　　习近平总书记感触颇深：“创新驱动发展，我们有主力军、集团军，有时候也要靠中小微企业的‘一招鲜’，要支持中小微企业创新发展。”</p> <p> 　　前一天，他调研了安徽创新馆。新技术、新材料、新产品、新产业荟萃。刚刚融入长三角的安徽，这些年来创新成绩突出。“安徽要实现弯道超车、跨越发展，在‘十四五’时期全国省区市排位中继续往前赶，关键靠创新。要继续夯实创新的基础，锲而不舍、久久为功。”</p> <p> 　　马鞍山市是安徽融入长三角一体化发展的前沿阵地，因钢而设、因钢而兴。马钢是这座城市的亮丽名片。</p> <p> 　　60多年来，马钢创造了我国钢铁行业的许多“第一”，具有光荣的历史，但新时代马钢发展也面临许多新挑战。2019年末，马钢和宝武集团实施战略重组，更名为中国宝武马钢集团，一跃成为世界级钢铁企业。</p> <p> 　　优质合金棒材车间里，铁花飞溅，一片忙碌。习近平总书记从马钢看到了中国经济发展的强大韧性和区域合作的巨大潜力：</p> <p> 　　“希望你们在深化国有企业改革中，特别是在长三角一体化发展中，能够把握机遇、顺势而上，和长三角有机衔接，进一步发展壮大。机遇就在你们手里。”</p> <p> 　　总书记叮嘱安徽的负责同志，要深化体制机制改革，加强城市基础设施、生态环境和营商环境建设，畅通与长三角中心城市连接的交通网络，提高生产生活便利化、舒适化程度，更好吸引和承接长三角地区资金、技术、产业、人才等的转移。</p> <p> 　　座谈会持续了3个多小时。大家谈成绩、说问题、谋共识、献良策，意犹未尽。总书记的重要讲话，更是给长三角发展指明了方向。</p> <p> 　　“长三角一体化发展不是一日之功，我们既要有历史耐心，又要有只争朝夕的紧迫感，既谋划长远，又干在当下。三省一市和有关部门要按照党中央决策部署，勇于担当，主动作为，大胆突破。要从实际出发，制定‘十四五’时期长三角一体化发展规划实施方案，不断取得更加丰硕的成果。”</p> <p> <strong>　　三、永远做忠诚的人民服务员</strong></p> <p> 　　在近百年波澜壮阔的奋斗历程中，我们党之所以能够由小变大、由弱变强，根本原因是始终坚持和践行为中国人民谋幸福、为中华民族谋复兴的初心和使命，始终保持同人民群众的血肉联系。</p> <p> 　　考察期间，习近平总书记不论走到哪个地方，讲得最多的是老百姓的事。在王家坝闸和蒙洼蓄洪区，他最关心的是受灾群众生产生活恢复和困难群众就业情况；在马鞍山薛家洼生态园，他谆谆叮嘱要保障退捕渔民上岸后能够稳得住、能致富。</p> <p> 　　他走进巢湖之滨的渡江战役纪念馆，更是有着特殊的寓意。</p> <p> 　　71年前，解放战争最后一场大战役即将在长江边展开。为阻止人民解放军渡江，国民党军队把沿岸的船只强行拉往江南，来不及拉走的就地破坏或沉入江底、湖底。在人民群众支持下，仅半个月时间，人民解放军就征集到1万余只船、2万多名船工，人民解放军一举突破国民党反动派苦心经营的长江防线。</p> <p> 　　习近平总书记十分感慨：“淮海战役的胜利是靠老百姓用小车推出来的，渡江战役的胜利是靠老百姓用小船划出来的。任何时候我们都要不忘初心、牢记使命，都不能忘了人民这个根，永远做忠诚的人民服务员。”</p> <p> 　　在听取安徽省委和省政府工作汇报时，总书记再次强调人民的力量。“鄂豫皖苏区能够28年红旗不倒，新四军能够在江淮大地同敌人奋战到底，刘邓大军千里跃进大别山能够站住脚、扎下根，淮海战役能够势如破竹，百万雄师过大江能够气吞万里如虎，根本原因是我们党同人民一条心、军民团结如一人。”</p> <p> 　　“抗击新冠肺炎疫情、防汛救灾斗争再次表明，只要我们党始终为人民执政、依靠人民执政，就能无往而不胜。”</p> <p> 　　（本报记者杜尚泽、朱思雄，新华社记者张晓松）</p> <br /> <p> <span id="paper_num">　　《 人民日报 》（ 2020年08月24日 01 版）</span></p> ]]></description>
        </item>
        <item>
            <title><![CDATA[刘鹤出席2020年全国科技活动周启动仪式]]></title>
            <link>http://politics.people.com.cn/n1/2020/0823/c1001-31833309.html</link>
            <pubDate>2020-08-23</pubDate>
            <author>人民网</author>
            <description><![CDATA[<p style="text-indent: 2em;"> 新华社北京8月23日电 中共中央政治局委员、国务院副总理刘鹤23日出席2020年全国科技活动周暨北京科技周启动仪式，并参加有关活动。中共中央政治局委员、中共北京市委书记蔡奇出席仪式。</p> <p style="text-indent: 2em;"> 2020年全国科技活动周以“科技抗疫、创新驱动”为主题。刘鹤在启动仪式上分别与湖北武汉分会场、第二次青藏高原综合科学考察研究队视频连线。刘鹤表示，习近平总书记高度重视科技创新，强调最终战胜疫情关键要靠科技。湖北省通过强化科技支撑，统筹推进疫情防控和经济社会发展取得显著效果。刘鹤询问了青藏科考的进展情况，向科考队表示诚挚问候和热烈祝贺。仪式结束后，刘鹤参观了“科技战疫”“科技创新成果”“科普惠民”等小型展区，向在科技抗疫和推动经济社会发展中作出重要贡献的科学家们表示衷心感谢。</p> <p style="text-indent: 2em;"> 中央和国家机关有关部门及北京市负责同志参加北京主会场启动仪式，湖北省负责同志参加湖北武汉分会场启动仪式。</p> <p style="text-indent: 2em;"> 今年全国科技活动周暨北京科技周将开通网络“云展厅”向公众开放，集中展示科技战疫、科技创新、体验美好生活、服务脱贫攻坚等方面的内容。2020年全国科技活动周闭幕式将于8月29日在湖北武汉举行。全国科技活动周2001年开始举办，今年是科技活动周举办20周年。</p> <p style="text-indent: 2em;"> <strong>相关阅读：</strong></p> <p style="text-indent: 2em;"> <a href="http://scitech.people.com.cn/GB/25509/433423/index.html" target="_blank"><strong>2020年全国科技活动周专题</strong></a></p> ]]></description>
        </item>
        <item>
            <title><![CDATA[李克强在重庆考察时强调 做好防汛救灾和恢复重建工作 在改革开放中持续努力巩固经济恢复性增长势头]]></title>
            <link>http://politics.people.com.cn/n1/2020/0823/c1024-31833317.html</link>
            <pubDate>2020-08-23</pubDate>
            <author>人民网</author>
            <description><![CDATA[<p> 　　新华社重庆8月23日电（记者刘铮）日前，中共中央政治局常委、国务院总理李克强在中共中央政治局委员、重庆市委书记陈敏尔和市长唐良智陪同下，在重庆考察。</p> <p> 　　近日，长江、嘉陵江重庆段遭遇突如其来、历史罕见的洪峰。李克强一到重庆就赶赴受灾地区，强调要贯彻落实好习近平总书记对防汛救灾和灾后重建工作的重要指示精神，加强科学防洪调度，做好抢险救援、生产恢复等工作。他趟着泥水走进潼南双坝村被洪水浸泡过的村民家中，察看受损情况，到集中安置点了解受灾群众生活。在被冲毁的农地和大棚，他询问恢复生产有哪些困难，嘱咐地方负责同志加大支持。得知不少农民工回家救灾，李克强说，家是你们的牵挂，你们这样做，就像过去这里江上的纤夫齐声喊号子，大家一起努力就能渡过难关，党和政府一定会帮助你们重建家园。他还到市重点水库考察，并察看洪水对低洼城区淹没情况，叮嘱要抓紧研究政策并建立直达受灾地区机制，支持地方加强水毁工程修复、防洪排涝等城市基础设施建设。</p> <p> 　　在洪水尚未完全退去的磁器口商业区，李克强一连走进多家商户，并与群众和游客交流，了解因疫情和水灾造成的商家损失，考察消费和旅游恢复情况。他说，加快服务业全面复业带动消费扩大，对于巩固经济恢复性增长态势至关重要，要在做好常态化疫情防控下，发挥国家政策扶持作用，助力企业和商户渡过难关，促进旅游等服务业正常经营，释放巨大消费潜力。</p> <p> 　　李克强来到猪八戒网络公司，对他们打造双创平台汇聚大量专业人员为中小微企业提供服务、带动大量就业表示肯定。他说，普通人有上上智，推动双创就是要把不同人的长处激发和结合起来，聚众智汇众力创众业。在长安汽车公司，企业负责人介绍克服疫情等影响汽车产销逆势上扬，李克强鼓励他们开发更多带动消费的产品。他还来到重庆京东方公司，了解技术创新情况，勉励西部地区发挥回旋空间大的优势，积极承接东部产业转移，并向产业链中高端攀升，促进高质量发展。</p> <p> 　　在考察企业时，李克强说，从近几个月宏观经济运行看，做好“六稳”工作、落实“六保”任务政策取得积极成效。今年保住上亿市场主体，完成新增城镇就业900万人以上的任务，全年经济可以实现正增长，要继续努力，同时要应对好发展中的不确定因素。</p> <p> 　　在政务大厅，重庆汇报了深化放管服改革情况。正在办事的小微企业人员告诉总理，国家减税降费力度超出预期，企业普遍受益，得以生存。李克强说，不仅要减税降费，还要进一步降门槛，更大激发市场主体活力。重庆推出网上政务服务叫“渝快办”，我们推进放管服改革就是要让群众办事愉快、有获得感。</p> <p> 　　李克强充分肯定重庆近年来经济社会发展成绩和防疫防汛工作，希望坚持以习近平新时代中国特色社会主义思想为指导，按照党中央、国务院决策部署，开拓奋进，走在西部改革开放创新前列，谱写重庆发展新篇章。</p> <p> 　　肖捷陪同考察。</p> ]]></description>
        </item>
        <item>
            <title><![CDATA[中央第九巡视组向人民日报社反馈巡视情况]]></title>
            <link>http://politics.people.com.cn/n1/2020/0823/c1001-31833301.html</link>
            <pubDate>2020-08-23</pubDate>
            <author>人民网</author>
            <description><![CDATA[<p align="center"> <img alt="" src="http://www.people.com.cn/mediafile/pic/BIG/20200823/58/8430337330293386794.jpg" /></p> <p align="center" class="pictext"> 　　中央第九巡视组向人民日报社反馈巡视情况</p> <p> 　　近日，中央第九巡视组向人民日报社反馈巡视情况。中央巡视工作领导小组成员杨晓超主持召开向人民日报社社长李宝善的反馈会议，出席向人民日报编委会反馈会议，对巡视整改提出要求。会议向人民日报社主要负责人传达了习近平总书记关于巡视工作的重要讲话精神，中央第九巡视组组长吴瀚飞代表中央巡视组分别向人民日报社主要负责人和编委会反馈了巡视情况。李宝善主持向人民日报编委会反馈会议并就做好巡视整改工作讲话。</p> <p> 　　根据党中央统一部署，2020年5月至6月，中央第九巡视组对人民日报社进行了常规巡视。巡视组坚持以习近平新时代中国特色社会主义思想为指导，全面贯彻巡视工作方针，坚守政治巡视定位，把“两个维护”作为根本任务，紧扣党组（党委）职能责任强化政治监督，重点检查落实党的理论和路线方针政策以及党中央重大决策部署、全面从严治党战略部署、新时代党的组织路线、巡视整改等情况，推动中央和国家机关加强政治建设，带头做到“两个维护”、践行“三个表率”、建设模范机关，推进国家治理体系和治理能力现代化。中央巡视工作领导小组听取了巡视组的巡视情况汇报，并向中央政治局常委会会议报告了有关情况。</p> <p> 　　吴瀚飞在反馈时指出，人民日报社坚持以习近平新时代中国特色社会主义思想为指导，积极开展重大主题宣传，推进人民日报全新改版，进一步推动管党治社，在党的新闻舆论工作中发挥了重要作用。巡视也发现了一些问题，主要是：学习宣传贯彻习近平新时代中国特色社会主义思想还有不足，落实习近平总书记对人民日报工作重要指示批示精神不够深入，履行职能责任还不够到位，推动媒体融合发展持续发力还不够；落实全面从严治党“两个责任”不够有力，对部门和下属单位管理存在薄弱环节，深入基层调研不够，形式主义、官僚主义等问题仍然存在；贯彻新时代党的组织路线不够到位，班子自身建设有待加强，干部人才队伍建设还有差距，基层党建工作比较薄弱；对巡视、审计发现问题整改不够扎实，长效机制尚不健全。同时，巡视组还收到反映一些领导干部的问题线索，已按有关规定转中央纪委国家监委、中央组织部等有关方面处理。</p> <p> 　　吴瀚飞提出了五点整改意见建议：一是深入学习宣传贯彻习近平新时代中国特色社会主义思想，深入贯彻落实习近平总书记对人民日报工作的重要指示批示精神，增强“四个意识”、坚定“四个自信”，充分发挥党中央机关报导向、旗帜、引领作用，切实履行党的新闻舆论工作职责使命，以实际行动做到“两个维护”。二是持续巩固提升改版成果，大力推进媒体融合向纵深发展。不断拓展新媒体传播渠道和平台，加快构建全媒体传播格局。三是落实全面从严治党“两个责任”，加大从严治社力度。坚持“严”的主基调，加大对下属单位的监督管理，健全廉洁风险防控机制，严格落实中央八项规定精神，坚决整治形式主义、官僚主义问题，深入基层、深入实践，加强调查研究。四是坚决贯彻落实新时代党的组织路线。加强领导班子自身建设，加强对干部人才队伍建设的统筹谋划，不断提升基层党建工作质量。五是强化巡视整改责任落实。把巡视新发现的问题与“不忘初心、牢记使命”主题教育检视的问题、上次巡视整改不到位的问题结合起来，一体整改、集成整改，建立健全常态化长效化机制，确保整改取得实效。</p> <p> 　　杨晓超强调，人民日报编委会要切实提高政治站位，坚持用习近平新时代中国特色社会主义思想武装头脑、指导实践、推动工作，进一步强化使命意识和政治担当，主动适应新时代新形势新要求，增强责任感使命感紧迫感，从“两个大局”和国家治理体系、治理能力现代化高度，准确把握新时代工作规律，深刻认识党和国家赋予的职能职责，认真贯彻落实党中央关于统筹疫情防控和经济社会发展、扎实做好“六稳”工作、全面落实“六保”任务等决策部署，全面落实党中央深化改革要求，切实把增强“四个意识”、坚定“四个自信”、做到“两个维护”落实到履职尽责上、体现到具体工作中。坚决落实全面从严治党主体责任和监督责任，把“严”的主基调长期坚持下去，层层传导压力，加强对下属单位的监督管理，建立健全权力监督制约机制，加大整治形式主义、官僚主义力度，推动全面从严治党落到底、落到位。认真贯彻新时代党的组织路线，切实加强领导班子和干部队伍建设，有效提高治理能力，为落实党中央决策部署提供政治保障和组织保障。</p> <p> 　　杨晓超指出，要深入学习贯彻习近平总书记关于巡视工作的重要讲话精神，从政治高度抓好巡视整改和成果运用，人民日报编委会特别是主要负责同志要担起主体责任，组织班子认真研究，制定问题清单、任务清单、责任清单，召开巡视整改专题民主生活会，把巡视整改融入日常工作，融入深化改革，融入全面从严治党，融入班子队伍建设。要把巡视新发现问题与“不忘初心、牢记使命”主题教育检视问题、上次巡视整改不到位问题结合起来，一体整改、集成整改，建立健全整改长效机制，推动人民日报社各项工作高质量发展。纪检监察机关和组织部门要加强巡视整改日常监督，把整改落实情况纳入全面从严治党和领导班子综合考核，对敷衍整改、虚假整改的严肃问责。</p> <p> 　　李宝善表示，人民日报编委会一定要提高政治站位，深入学习贯彻习近平总书记关于巡视工作重要讲话精神，从增强“四个意识”、坚定“四个自信”、做到“两个维护”高度，深刻认识抓好巡视整改对于推动促进人民日报社各项工作的重要意义，切实增强做好巡视整改工作的政治自觉、思想自觉和行动自觉。对中央巡视组的反馈意见，编委会诚恳接受、照单全收。我们要坚决扛起巡视整改的政治责任，坚决落实中央巡视反馈意见，扎实做好巡视“后半篇文章”，把巡视整改作为加强党的政治建设、落实管党治党责任的重要任务，作为履行职责使命、把人民日报办得更好的有力抓手，层层压实整改责任，确保整改取得实效。我们要以巡视整改为契机，立足人民日报社职能责任，直面问题、真抓实改，守正创新、担当作为，把“严”的主基调长期坚持下去，推动全面从严治党、从严治社向纵深发展，更好地履行党中央赋予人民日报社的职责使命，充分发挥党中央机关报在新闻舆论上的导向、旗帜、引领作用。</p> <p> 　　中央第九巡视组有关同志，中央巡视工作领导小组办公室、中央纪委国家监委有关监督检查室、中央组织部有关局负责同志，中央纪委国家监委驻人民日报社纪检监察组有关负责同志，人民日报编委会成员出席会议；人民日报社各部门、社属媒体企业主要负责同志列席会议，京外国内分社、社属媒体企业负责同志在当地参加视频会议。</p> ]]></description>
        </item>
        <item>
            <title><![CDATA[十九届中央第五轮巡视反馈情况公布]]></title>
            <link>http://politics.people.com.cn/n1/2020/0823/c1001-31833300.html</link>
            <pubDate>2020-08-23</pubDate>
            <author>人民网</author>
            <description><![CDATA[<p> 　　新华社北京8月23日电（记者朱基钗、孙少龙）23日，十九届中央第五轮巡视对35个中央和国家机关单位党组织的巡视反馈情况集中公布。</p> <p> 　　经党中央批准，十九届中央第五轮巡视对中央宣传部（中央文明办）、中央政法委机关、中央网信办、工业和信息化部、自然资源部、生态环境部、应急管理部、国家市场监督管理总局、国家广播电视总局、国务院参事室、中央党史和文献研究院、中央档案馆、中国外文出版发行事业局、人民日报社、求是杂志社、光明日报社、中国日报社、经济日报社、国务院发展研究中心、中央广播电视总台、中国气象局、国家信访局、国家烟草专卖局、国家林业和草原局、国家文物局、中国地震局、国家煤矿安全监察局、国家药品监督管理局、国家知识产权局、中国地质调查局、中华全国供销合作总社、中国宋庆龄基金会、中国红十字会、中华全国工商业联合会、中国出版集团公司等35个中央和国家机关单位党组织开展常规巡视。</p> <p> 　　2020年5月至7月，15个中央巡视组在35个中央和国家机关单位工作了2个月左右。中央巡视组坚守政治巡视定位，紧扣党组（党委）职能责任，把“两个维护”作为根本任务，强化政治监督，重点检查落实党的理论和路线方针政策以及党中央重大决策部署、全面从严治党战略部署、新时代党的组织路线、巡视整改等情况。</p> <p> 　　巡视反馈会上，中央巡视组指出，党的十九大以来，中央和国家机关单位党组织坚持以习近平新时代中国特色社会主义思想为指导，贯彻落实党中央决策部署的态度更加积极，管党治党责任意识整体提升，全面从严治党呈现持续向上向好态势，各项工作取得新的积极进展，特别是在今年以来的抗击新冠肺炎疫情斗争中和复工复产、恢复经济社会正常运行方面，坚决听从党中央指挥调遣，积极履职，扎实工作，成绩值得肯定。同时，中央巡视组也指出了一些问题：有的学习贯彻习近平新时代中国特色社会主义思想不够深入，履行职能职责不够到位；有的落实全面从严治党“两个责任”不够有力，传导责任和压力存在衰减现象，部分领域和环节廉洁风险防控不够到位，整治形式主义、官僚主义问题不够有力；有的落实新时代党的组织路线存在薄弱环节，干部人才队伍建设存在短板，基层党建工作比较薄弱，对干部日常管理监督不够严格；有的抓问题整改持续用力不够，一些问题整改实效性不强等。同时，巡视组还收到反映一些领导干部的问题线索，已按有关规定转中央纪委国家监委、中央组织部等有关方面处理。</p> <p> 　　中央巡视工作领导小组、中央纪委国家监委、中央组织部有关领导同志出席了巡视反馈会，并对巡视整改提出明确要求，强调被巡视单位党组织要深入学习贯彻习近平新时代中国特色社会主义思想，增强“四个意识”、坚定“四个自信”、做到“两个维护”，主动适应新时代新形势新要求，认真履行党和国家赋予的职能责任，推动工作高质量发展；压实全面从严治党“两个责任”，层层传导压力，严格内部管理，加强对重点领域和关键环节廉洁风险防控，坚决整治形式主义、官僚主义问题，把“严”的主基调长期坚持下去；深入贯彻落实新时代党的组织路线，严格执行干部选拔任用制度，强化日常管理监督，加强机关、基层党建；切实履行整改主体责任，把巡视整改融入日常工作，融入深化改革，融入全面从严治党，融入班子队伍建设，把巡视新发现的问题与“不忘初心、牢记使命”主题教育检视的问题、上次巡视整改不到位的问题结合起来，一体整改、集成整改，建立整改长效机制。纪检监察机关和组织部门要加强巡视整改日常监督，把整改落实情况纳入全面从严治党和领导班子综合考核，对敷衍整改、虚假整改的严肃问责。</p> ]]></description>
        </item>
        <item>
            <title><![CDATA[总书记推动的改革身边事｜特写：“坐堂医生”变身“健康管家”——一个乡镇家庭医生团队的诊疗记录]]></title>
            <link>http://politics.people.com.cn/n1/2020/0823/c1001-31833283.html</link>
            <pubDate>2020-08-23</pubDate>
            <author>人民网</author>
            <description><![CDATA[<p> 　　<strong>（总书记推动的改革身边事·医疗改革篇）特写：“坐堂医生”变身“健康管家”——一个乡镇家庭医生团队的诊疗记录</strong></p> <p> 　　新华社北京8月22日电 题：特写：“坐堂医生”变身“健康管家”——一个乡镇家庭医生团队的诊疗记录</p> <p> 　　新华社记者陈聪、邱冰清</p> <p> 　　“夏天血管扩张，下午可以少吃一片，但下回调整药量一定要跟我讲啊。”</p> <p> 　　“高血压要低盐饮食，营养均衡，平时吃饭要清淡点才好。”</p> <p> 　　……</p> <p> 　　量血压、询问服药情况、了解饮食睡眠等习惯……在江苏镇江丹徒区世业镇，镇卫生院医师戴雯娟正对患有高血压的村民吴长官进行随访，并叮嘱日常生活注意事项。</p> <p align="center"> <img alt="" src="http://www.people.com.cn/mediafile/pic/default.jpg" /></p> <p> 　　“小戴当我的家庭医生好几年啦，特别耐心，就像我们的健康管家一样。”吴长官颇有感触地说，“以前医疗条件不好，我们没有自我健康管理的意识。近些年来，通过家庭医生签约，我们有了自己的家庭医生，定期了解身体情况，让人很安心。”</p> <p> 　　回到卫生院，戴雯娟打开电脑，将当日的随访记录录入社区卫生服务信息系统，以完善居民的健康档案。在这样一张慢病管理的档案里，“138/70mmHg, 2.5mg”等数字代表着病人情况，最下方的责任人就是老百姓身边的健康管家——家庭医生。</p> <p> 　　“吴大爷，住二十三圩，高血压二级管理，依从性还不错；张奶奶，也住二十三圩，患有糖尿病……”对自己服务的慢病患者情况，戴雯娟了如指掌。在戴雯娟手中建立居民健康档案的有400多人，其中需管理的慢病患者52人。</p> <p> 　　戴雯娟虽然个子娇小、说话细声细气，却是卫生院里的“十项全能选手”。“我们以前主要是治病，现在则要花更多精力关注群众健康的方方面面。现在从坐堂看病到入户防病治病，我们希望让村里老百姓不出家门就能享受健康服务。”戴雯娟和卫生院里的其他家庭医生一样，除了科室坐诊、手术之外，还承担着基层群众健康“守门人”的角色。</p> <p> 　　走进世业镇卫生院，健康小屋里的一张照片记录着2014年12月习近平总书记来到镇卫生院考察时的情景。</p> <p> 　　世业镇，浩浩长江中的“一座小岛”。在过去，全镇约1.4万名群众“既怕病要命，也怕交通要命”。</p> <p> 　　习近平总书记来到世业镇卫生院考察时指出，没有全民健康，就没有全面小康。医疗卫生服务直接关系人民身体健康。要推动医疗卫生工作重心下移、医疗卫生资源下沉，推动城乡基本公共服务均等化，为群众提供安全有效方便价廉的公共卫生和基本医疗服务，真正解决好基层群众看病难、看病贵问题。</p> <p> 　　世业镇卫生院院长胡小忠是深化医改进程的亲历者。据他介绍，自2015年开始，卫生院28名医务人员以行政村为单位，组建了5支家庭健康责任团队，各自对应世业镇的1个行政村。每个团队由临床医生、公卫医生、护士等组成，通过划分服务片区、走村入户的方式，为村民提供医疗卫生健康服务。</p> <p align="center"> <img alt="（总书记推动的改革身边事·医疗改革篇·图文互动）（1）特写：“坐堂医生”变身“健康管家”——一个乡镇家庭医生团队的诊疗记录" src="http://www.people.com.cn/mediafile/pic/BIG/20200823/25/3502884655122125473.jpg" /></p> <p align="center" class="pictext"> 　　8月20日拍摄的江苏省镇江丹徒区世业镇卫生院。 新华社发（胡小忠摄）</p> <p align="center"> <img alt="（总书记推动的改革身边事·医疗改革篇·图文互动）（2）特写：“坐堂医生”变身“健康管家”——一个乡镇家庭医生团队的诊疗记录" src="http://www.people.com.cn/mediafile/pic/BIG/20200823/60/714345695498530788.jpg" /></p> <p> 　　在江苏省镇江市丹徒区世业镇世业村集中随访日，戴雯娟（右）和同事们为村民测量血压、血糖，并进行健康科普（2019年9月6日摄）。 新华社发（世业镇卫生院供图）</p> <p> 　　这家乡镇卫生院的家庭医生团队带给居民的“健康红利”逐渐释放，分级诊疗效果愈加凸显，“小病不出岛”正逐渐变为现实。</p> <p> 　　7月8日，是东大坝村的集中随访日，卫生院家庭责任医生健康服务团队负责人巫蓉，发现村民郜长英的血压已经连续几次较高。她随即建议郜长英两天后带上病历资料、常用药到卫生院，找在卫生院坐诊的镇江市第一人民医院心血管内科专家问诊。问诊后，专家为其调整了治疗方案。两周后，巫蓉再次对郜长英进行随访，发现她的血压已控制在正常范围。</p> <p> 　　“如果数据仍然偏高，她就要转到上级医院进行治疗，控制好病情后再转回卫生院。”巫蓉说，和很多其他地方的基层卫生院一样，通过远程会诊、分级诊疗，世业镇卫生院已和当地三甲医院建立起联合诊疗机制，家庭医生处理不了的情况，会及时建议签约患者到卫生院的全科—专科联合门诊就诊，让村民在基层卫生院也能享受到大医院的专科服务，打通医疗服务的“最后一公里”，让患者少跑腿。</p> <p> 　　郜长英感慨道，在镇上就能看专家门诊，不用大老远往市里跑，“这在以前想都不敢想！”</p> ]]></description>
        </item>
        <item>
            <title><![CDATA[倡导节约健康饮食文化（厉行节约 反对浪费）]]></title>
            <link>http://politics.people.com.cn/n1/2020/0823/c1001-31833241.html</link>
            <pubDate>2020-08-23</pubDate>
            <author>本报记者 王 珂 邱超奕</author>
            <description><![CDATA[<p> 　　近年来，“互联网+餐饮”快速发展，外卖、“吃播”等新业态不仅带动了餐饮销售，也更好地满足了消费者需求。然而，过量点餐等现象，也导致了较为突出的网络餐饮浪费。</p> <p> 　　推广半份餐、提醒合理点餐、推出多口味套餐、关停不健康的直播账号……连日来，外卖、直播等平台采取相关举措，倡导节约健康的网络饮食文化。</p> <p> <strong>　　网络餐饮浪费现象时有发生</strong></p> <p> 　　“有些外卖连包装都没拆就被扔掉了，看着真心疼！”在北京朝阳区某小区从事垃圾回收工作的李建国说，几乎每天清理小区垃圾桶时，都能发现外卖餐饮被浪费的现象。</p> <p> 　　“外卖带来便利，增加就餐选择，但一些同学会因为不合理的点餐方式而浪费。”湖南长沙市某高校学生马新航认为，外卖餐饮浪费的原因是多方面的。首先，一些餐厅的餐食分量不合理。比如，有时在外卖平台点早餐，吃不完一大份八宝粥，但又不能点半份。其次，有的商家设置了起送金额，有时为了达到起送标准，不得不多点一些。还有，一些商家推出促销活动，有人会为了享受优惠而刻意凑单。</p> <p> 　　一些直播平台也存在餐饮浪费现象。镜头前，主播面对堆成小山的食物，一通胡吃海喝后摆出一副享受美味、心满意足的表情，以此吸引观众。直播结束后，“大胃王”主播往往开启“催吐”模式，产生大量浪费。</p> <p> <strong>　　过量饮食不利于身体健康</strong></p> <p> 　　“外卖在餐饮销售中占比越来越高，网络餐饮浪费现象应该引起足够重视。”中国社会科学评价研究院院长荆林波说，餐饮业主动拥抱互联网、加速数字化，提供更加便捷的外卖服务，有利于促进行业发展，更好满足消费者需求，同时也要避免因过量点餐带来的不必要浪费。</p> <p> 　　“吃东西要讲究科学营养，健康又不浪费。定量备餐、提倡简餐的背后有营养学知识做支撑。”解放军总医院第一医学中心营养科副主任徐庆说，经常性吃得过饱过撑，对身体来说是一种“过剩”，除了可能导致急性消化不良、损伤胃肠道之外，长期如此还容易诱发肥胖、糖尿病、脂肪肝、痛风等慢性疾病。</p> <p> 　　“一些直播里的行为，既浪费食物，也不健康甚至很危险。”解放军总医院消化内科医学部主任令狐恩强说，在一些比赛活动中，有人甚至吃下几公斤食物。而胃的容量是有限的，吃得过多会使胃部平滑肌“拉脱丝”，胃壁也会变得非常薄。每餐吃到七八分饱更健康。</p> <p> <strong>　　平台、商家携手正面引导</strong></p> <p> 　　“我们要杜绝为博眼球、造噱头而造成的浪费。”达美乐比萨（中国）首席执行官王怡说，达美乐比萨外送比例达80%，为此采取了一系列举措，在预订点单页面上，不仅明确标注餐品克数，也清晰地标示出主料、配料、口味等。</p> <p> 　　花同样的钱可以吃到更多口味，味多美推出的“9拼蛋糕”有效减少了浪费。味多美副总裁李明洋说，味多美还把原来的“大”产品变“小”，既能通过价格优势促进销售，还帮消费者节省花销。</p> <p> 　　近日，中国商业联合会、中国烹饪协会、中国饭店协会、中国连锁经营协会联合美团点评向餐饮行业发布倡议书，提出各餐饮单位要进一步创新宣传手段，利用企业宣传屏幕、公众号、小程序、直播等方式，倡导文明风尚、厉行节约。</p> <p> 　　在消费者的沟通及服务端，各协会和美团点评倡议商户正面引导消费者。具体包括：在点餐环节履行提醒义务，并对造成浪费的自助餐行为建立惩戒机制等。</p> <p> 　　B站、抖音、快手等平台也对一些不健康的“吃播”内容展开有针对性的规范和整治。</p> <br /> <p> <span id="paper_num">　　《 人民日报 》（ 2020年08月23日 02 版）</span></p> ]]></description>
        </item>
        <item>
            <title><![CDATA[“幸福生活是奋斗出来的”（脱贫故事绘·自强篇）]]></title>
            <link>http://politics.people.com.cn/n1/2020/0823/c1001-31833249.html</link>
            <pubDate>2020-08-23</pubDate>
            <author>王东明</author>
            <description><![CDATA[<TABLE class="pci_c" width="400"><TBODY><TR><TD align="center"><IMG src="http://paper.people.com.cn/rmrb/images/2020-08/23/08/rmrb2020082308p26_b.jpg"></TD></TR> <TR><TD><p>　　（一）与年幼女儿相依为命的李耀梅，是宁夏吴忠市红寺堡区龙源村的建档立卡贫困户。二〇一五年，她不幸遭遇车祸，不但落下残疾，还背负了三十万元债务，生活愈发困难。</p></TD></TR></TBODY></TABLE><TABLE class="pci_c" width="400"><TBODY><TR><TD align="center"><IMG src="http://paper.people.com.cn/rmrb/images/2020-08/23/08/rmrb2020082308p25_b.jpg"></TD></TR> <TR><TD><p>　　（二）为了早日还债，李耀梅每天早晨五点起床，喂羊养鸡之外，就是编制扫帚，经常干到深夜。颈椎受损，头部支撑困难，她就靠在墙上；右腿使不上劲，她就靠在柱子上。日复一日，她的双手布满伤疤、茧子。</p></TD></TR></TBODY></TABLE><TABLE class="pci_c" width="400"><TBODY><TR><TD align="center"><IMG src="http://paper.people.com.cn/rmrb/images/2020-08/23/08/rmrb2020082308p24_b.jpg"></TD></TR> <TR><TD><p>　　（三）李耀梅的扫帚用料讲究，由高粱、芨芨草和醉马草做成。为找到最好的醉马草，每逢假期，她就带着女儿到两百公里外的六盘山上进行采集。有时，母女俩一待就是一个月。</p></TD></TR></TBODY></TABLE><TABLE class="pci_c" width="400"><TBODY><TR><TD align="center"><IMG src="http://paper.people.com.cn/rmrb/images/2020-08/23/08/rmrb2020082308p21_b.jpg"></TD></TR> <TR><TD><p>　　（四）二〇一八年，在当地政府部门帮助下，李耀梅贷款五万元，购买机器，租用房屋，流转土地种植高粱，带动村里的建档立卡贫困户，开始小规模生产。在村两委及驻村干部帮助下，她的扫帚打开了销路。</p></TD></TR></TBODY></TABLE><TABLE class="pci_c" width="400"><TBODY><TR><TD align="center"><IMG src="http://paper.people.com.cn/rmrb/images/2020-08/23/08/rmrb2020082308p23_b.jpg"></TD></TR> <TR><TD><p>　　（五）网络推广很重要。女儿帮助李耀梅注册了“龙源村·扫帚厂”快手号，通过互联网，把生意做到了甘肃、山东等地。二〇一九年，她还清所有贷款和债务，成功脱贫，并供女儿上了大学。</p></TD></TR></TBODY></TABLE><TABLE class="pci_c" width="400"><TBODY><TR><TD align="center"><IMG src="http://paper.people.com.cn/rmrb/images/2020-08/23/08/rmrb2020082308p22_b.jpg"></TD></TR> <TR><TD><p>　　（六）同年，李耀梅与环卫公司签下订单，每年可带动二十户以上建档立卡贫困户就业。她说：“幸福生活是奋斗出来的。我要继续干下去，带大伙儿一起，用双手创造幸福生活。”</p></TD></TR></TBODY></TABLE><TABLE class="pci_c" width="400"><TBODY><TR><TD align="center"><IMG src="http://paper.people.com.cn/rmrb/images/2020-08/23/08/rmrb2020082308p17_b.jpg"></TD></TR> <TR><TD><p>　　扫码观看短视频。</p></TD></TR></TBODY></TABLE><P mce_keep="true">&nbsp;</P> <br><span id='paper_num'>　　《 人民日报 》（ 2020年08月23日 08 版）</span>]]></description>
        </item>
        <item>
            <title><![CDATA[在中关村创业的年轻人（青春派·青春奋进新时代(21)）]]></title>
            <link>http://politics.people.com.cn/n1/2020/0823/c1001-31833248.html</link>
            <pubDate>2020-08-23</pubDate>
            <author>本报记者 王昊男 魏 薇</author>
            <description><![CDATA[<table class="pci_c" width="400"> <tbody> <tr> <td align="center"> <img src="http://paper.people.com.cn/rmrb/images/1/20200823/1598121819078_1.jpg" /></td> </tr> <tr> <td> <p> 　　常乐（左）为客户介绍公司研发的重点产品。<br /> 　　资料图片</p> </td> </tr> </tbody> </table> <table class="pci_c" width="400"> <tbody> <tr> <td align="center"> <img src="http://paper.people.com.cn/rmrb/images/1/20200823/1598121824758_1.jpg" /></td> </tr> <tr> <td> <p> 　　顾竹（左）和同事讨论研发项目的进展情况。<br /> 　　资料图片</p> </td> </tr> </tbody> </table> <table class="pci_c" width="400"> <tbody> <tr> <td align="center"> <img src="http://paper.people.com.cn/rmrb/images/1/20200823/1598121831288_1.jpg" /></td> </tr> <tr> <td> <p> 　　周而进在讨论会上发言。<br /> 　　资料图片</p> </td> </tr> </tbody> </table> <table class="pci_c" width="400"> <tbody> <tr> <td align="center"> <img src="http://paper.people.com.cn/rmrb/images/1/20200823/1598121841158_1.jpg" /></td> </tr> <tr> <td> <p> 　　北京市中关村地区的夜景。<br /> 　　资料图片</p> </td> </tr> </tbody> </table> <p> 　　中关村，我国改革开放后第一个高新技术产业开发区，第一个国家自主创新示范区。在这里，有90多所大学，在校大学生接近100万，国家级科研院所400多家，还有两万多家高科技企业，是全球创业投资最活跃的区域之一；在这里，有一批有责任、有理想、富有发展潜质、敢于创新创业的年轻人，他们青春飞扬，激情涌动，努力让我们的世界变得更加美好。</p> <p> <strong>　　旷视研究院员工周而进：</strong></p> <p> <strong>　　让人工智能成为解决问题的日常工具</strong></p> <p> 　　走进位于科学院南路2号的旷视研究院，你可能会和若干一脸青涩的实习生擦肩而过，他们通常下了课就从清华大学骑共享单车赶过来。</p> <p> 　　“我算过时间，差不多15分钟。”7年前，旷视12号员工周而进也是一名下了课就赶来实习的清华大学学生。初三拿下全国青少年信息学奥赛金牌、高三获得国际信息学奥赛金牌，在不少同学心中，周而进一直很优秀。不过在旷视，周而进说：“身边总有既比你聪明也比你勤奋的人”。</p> <p> 　　周而进大二加入团队时，旷视刚刚成立一年多，还只是一家做手游的互联网企业。如今，旷视拥有近3000名员工，全球有超过10亿部手机在使用旷视产品，27岁的周而进也成长为旷视研究院“人脸识别”研发团队的负责人。</p> <p> 　　“你猜猜，人脸五官中哪一点对于人脸识别算法来说非常重要？”周而进问记者。</p> <p> 　　“位置比例？”</p> <p> 　　“骨骼比例，具体到五官上，不管你做什么表情，鼻子的位置都很难动。”周而进介绍说，实习时他开始做人脸关键点定位，如眼睛、鼻子、眉毛的位置，当时最直接的应用就是做美颜，后来研发出了更多的人脸识别领域的产品。目前，旷视拥有全球规模较大的计算机视觉研究院，开发出的先进算法为世界上许多尖端的人工智能应用奠定了基础。</p> <p> 　　早上9点多到达公司，下班时间从不固定，工作之余每天还要阅读行业内最新的论文，这已经成为了周而进的习惯。如同大多数20多岁的同龄人，每当工作上遇到挑战，周而进也会感到焦虑，但他喜欢思考如何解决问题。“我会对工作、生活、未来的展望做一个整体规划，然后做出现阶段最好的决策，无论结果好坏我都不会后悔。”他说。</p> <p> 　　“我们希望从人工智能角度深入扎根到行业中，真正为行业创造价值。”周而进介绍，目前在城市物联网方面，旷视希望从超级应用做到操作系统，有效打破交通、城市管理等各行业应用和社区园区、公共建筑等块空间应用之间的数据壁垒，实现城市治理和居民生活的双赢。在周而进的设想中，未来的人工智能将像编程一样普及：“编程已经润物细无声般地进入到所有行业，但是人工智能还没有达到这种程度，希望未来人工智能可以发展成为人们解决问题的常见工具和手段。”</p> <p> 　　从上大学到工作，周而进的生活似乎很少离开中关村。他说：“兼容并包的氛围和环境非常重要，得用优秀的年轻人来吸引更多优秀的年轻人。中关村有着极浓厚的创业氛围，大家都愿意在这里一显身手。”</p> <p> <strong>　　佳格联合创始人顾竹：</strong></p> <p> <strong>　　从“看天吃饭”到“知天而作”，让农业更智慧</strong></p> <p> 　　位处中关村前沿技术创新中心，距离北京大学西南门不到500米，佳格联合创始人顾竹的办公室占据了绝佳的地理位置。</p> <p> 　　“对于我们来说，选择创业的第一个落脚点肯定会放在中关村。”顾竹是个“80后”，从美国学成后回到中国，从研究卫星遥感领域的航天科学家到农业大数据服务提供商，顾竹一直在朝着心中的奋斗目标而努力。</p> <p> 　　记者到达公司后，顾竹首先展示了疫情防控期间他们举全公司之力、仅用10天时间做出的春耕平台，在这里可以实时看到全国各地的耕种、出苗、农资情况，各类数据均可通过佳格的大规模自动化卫星数据分析技术得到。“我在美国所读的博士学位叫空间科学，其实就是对卫星数据进行分析。简单来讲，我们能通过分析卫星拍摄的一张张影像来得出农作物种在哪里、种了多少亩以及各个省份分别种了多少等数据。”</p> <p> 　　不仅仅是面积测算，基于人工智能技术，佳格通过将卫星遥感、气象、物联网等大数据进行收集、处理、分析，为农业及相关客户提供了从适宜区规划、生产周期测算、病虫害防治、农业金融等农业全产业链的数据支持和管理服务。</p> <p> 　　在纪录片《创新中国》中，顾竹曾经说：“真正的大数据存在农民的脑子里，你不用告诉他明天要下雨，他看一看晚霞就知道明天是要浇水、施肥还是在家睡觉。”随着城市化水平的提升，农村人口在减少，职业农民在增多，顾竹期待通过把日积月累的中国农业经验数字化、程序化、具象化，让进入行业的新人快速了解脚下这片土地，进而把这些农业大数据传承下去。</p> <p> 　　目前，佳格所提供的农业大数据应用已经服务了全国超过3亿亩土地，覆盖国内多个省份，包括了北方主要的粮食产区和南方经济作物种植园。如今，全球气候变化为农业生产带来了许多不确定性。尽管天气预报等信息唾手可得，但是对于农民来说，比起得知降水概率，他们更希望的是自己的个性化需求能够得到满足。“内蒙古地区农户和新疆地区农户、东北地区农户的需求，肯定是不一样的，我们必须懂得他们各自的需求，然后才能知道什么样的数据能够满足他们。”</p> <p> 　　佳格推出的数字农业系统“耘境”，集合了农业大数据获取、存储、分析以及可视化模块，通过个人电脑、智能平板或手机，便能实时了解或预测天气变化以及农作物的生长情况，及时进行或调整农事安排、农机调配、农药喷洒等活动。冰雹、大风、干旱、洪涝等自然灾害会对农业造成巨大损失，对于灾害风险的规避至关重要。“耘境”系统含有东亚范围内50年的农业气象数据，可预测两三周内的天气状况，空间上的精度达到1公里。</p> <p> 　　为了能够深入了解农民、了解农业，顾竹和团队不间断地去往全国各地的田间地头。“每次聊天时农民们不经意间说的话，对我来说常常是如获至宝。”顾竹举了个例子，“有时我会把模型拿过去跟农户说，这些地方可能有小麦赤霉病，但他也许会立刻告诉我不对。模型出问题很正常，就是要通过跟农民们这样扎实细致的交流，我们不断调整模型、优化参数配比，作出越来越准确的预测，真正让农民们做到从‘看天吃饭’到‘知天而作’。”</p> <p> <strong>　　声智科技联合创始人常乐：</strong></p> <p> <strong>　　通过语音交互打开一个新世界</strong></p> <p> 　　从中关村前沿技术创新中心一路向北约12公里，记者来到了声智科技位于中关村1号的新办公室。采访当天阳光强烈，“85后”的声智科技联合创始人常乐近期正在忙着搬家，工作起来风风火火。</p> <p> 　　“去7楼。”疫情防控期间，整个园区都用上了声智推出的智慧电梯，初次来到园区的记者新奇地享受了一次完全“无接触式”的电梯体验。常乐介绍说，电梯之所以变得智慧，是因为声智给机器做好了“耳朵”和“大脑”。“‘耳朵’一定要很灵敏，这样它才可以进行语音交互，这个过程包括从声音信号转化成文本信号，传到‘中枢大脑’再进行智能分析。”</p> <p> 　　在常乐看来，智慧电梯的应用极大地方便了老人、儿童、残障人士等用户的日常生活，在疫情防控期间还有效降低了接触传播感染风险，助力公共卫生防疫工作。与此同时，智慧电梯监管平台对电梯进行全生命周期管理，根据电梯运行状况，及时调整电梯维保项目和周期，实现按需维保，以有效降低电梯发生故障的概率。</p> <p> 　　在接触智慧电梯之前，大众最熟悉也最易获得的人工智能产品中有智能音箱，而目前市面上有七成以上的智能音箱都使用了声智的技术。“智能音箱打开了公众认识人工智能的窗口，但是人工智能绝不局限于此。音箱只是一块敲门砖，可以让大家感知到原来我的生活可以通过语音交互来打开一个新世界。”</p> <p> 　　“那么声音对于你来说意味着什么？”记者问。</p> <p> 　　“声音可以让大家的生活更便利。”常乐笑着说，根据智能家居的相关数据，可以发现智能音箱的使用量最大，而语音关灯是用户使用最多的一个功能。“大家很喜欢把智能语音交互产品放在卧室，睡觉的时候不用下床就可以关灯。疫情防控期间，智能音箱的出货量还是呈上升态势。”</p> <p> 　　谈到为什么一直工作在中关村，常乐说：“创始团队都是中科院声学所出来的，创业选址肯定在中关村。开始的时候就4个人，一间办公室，一点点扩大到现在两百人的规模，中关村给予了我们很大的支持。”成立4年来，声智相继推出了一系列满足实际场景需求的人工智能应用技术，包括声学矢量传感、声学阵列芯片、声学结构设计等。“未来的人机交互系统里，语音声学一定是一个不可或缺的内容。目前不少传统行业的朋友已经在思考如何和声学进行结合，我觉得这是一件特别有意义的事情。”常乐说。</p> <p> 　　常乐从不掩饰自己的追求：“我们的定位和目标是做中国第三代人工智能系统。第一代是PC互联网时代，第二代是移动互联网时代，我相信第三代会是人工智能交互时代。这是一个国内外同步创新、争夺科技制高点与重构未来产业的新机遇，我们愿意为此不懈奋斗。”</p> <p> 　　版式设计：张芳曼</p> <br /> <p> <span id="paper_num">　　《 人民日报 》（ 2020年08月23日 05 版）</span></p> ]]></description>
        </item>
        <item>
            <title><![CDATA[“为全球经济复苏提供支撑”（外媒看中国）]]></title>
            <link>http://politics.people.com.cn/n1/2020/0823/c1001-31833247.html</link>
            <pubDate>2020-08-23</pubDate>
            <author>本报记者 张朋辉 殷新宇 姜 波</author>
            <description><![CDATA[<P>　　近日，武汉水上音乐节引发外媒热议。外媒认为中国成功遏制新冠肺炎疫情，经济社会恢复正常，展现出强劲活力。中国在世界主要经济体中率先复苏，为世界经济注入动力和信心。</P> <P>　　西班牙《世界报》网站日前发表文章称，中国是新冠肺炎疫情期间首个经济明显复苏的主要经济体。随着疫情得到有效控制，中国社会生活基本恢复正常，国内旅游业重新启动。中国第二季度国内生产总值同比增长3.2%，超出预期。</P> <P>　　西班牙《阿贝赛报》日前刊文称，水上音乐节的举办显示出武汉正在摆脱疫情影响，恢复正常生活。自5月中旬以来，武汉所在的湖北省新增病例数都保持在低位。为了吸引更多游客，刺激消费，湖北省近400家旅游景区日前宣布对全国游客免收门票。</P> <P>　　俄罗斯国际文传电讯社日前报道称，中国的旅游公司的股价正在稳步增长，显示出投资者对旅游市场的信心逐步恢复。报道还提到，海南免税购物额度的提高，将进一步拉动当地旅游业的发展。</P> <P>　　俄罗斯卫星通讯社近日发表多篇文章，对中国电影市场进行报道。文章称中国是世界第二大电影市场。中国影院7月20日复工后，客流恢复明显，票房增长强劲。数据显示，截至北京时间8月20日零时，全国票房已超10.1亿元人民币，超过3300万人次观影。随着新片陆续上映，中国国内电影市场有望逐步恢复正常。</P> <P>　　“目前，中国是摆脱疫情影响的标志和象征。”俄罗斯高等经济大学能源分析中心主任维亚切斯拉夫·库拉金在接受今日俄罗斯通讯社采访时表示，中国向全世界展示出如何有效摆脱新冠肺炎疫情影响，中国的经验很有意义。由于经济复苏，能源需求强劲，中国在石油市场价格稳定方面发挥了重要作用。</P> <P>　　中国国家统计局公布的7月经济数据显示，主要指标继续回暖，中国经济继续保持稳定复苏态势。英国路透社日前刊发报道称，中国经济增长对世界经济复苏是一大利好消息。文章说，中国经济重回增长轨道是经济学家的普遍预期，中国经济强劲复苏态势说明中国经济今年仍然能实现正增长，牛津经济研究院预测今年下半年中国经济将增长6%。</P> <P>　　美国彭博社报道分析认为，中国经济是全球主要经济体中复苏最快的，原因在于中国制造业强劲复苏。中国成功遏制了疫情，7月出口增长达10.4%。报道尤其关注中国“以国内大循环为主体、国内国际双循环相互促进”的新发展格局，认为“双循环”发展模式将更好发挥内生动力的作用。</P> <P>　　《俄罗斯报》网站日前发表评论称，中国的经济复苏给世界带来信心。文章称，中国经济的恢复为全球生产和供应链的稳定提供了强大动力。中国政府提出，保持外贸稳定，积极利用外资，共建高质量的“一带一路”，以及促进贸易和投资便利化等多方面扩大开放的措施，“将为全球经济复苏提供支撑”。</P> <P>　　（本报布鲁塞尔、莫斯科、马德里8月22日电）</P> <br><span id='paper_num'>　　《 人民日报 》（ 2020年08月23日 03 版）</span>]]></description>
        </item>
        <item>
            <title><![CDATA[超七成村完成农村集体产权制度改革]]></title>
            <link>http://politics.people.com.cn/n1/2020/0823/c1001-31833242.html</link>
            <pubDate>2020-08-23</pubDate>
            <author>人民网</author>
            <description><![CDATA[<P>　　本报太原8月22日电&nbsp;&nbsp;（记者郁静娴）记者从农业农村部在山西太原召开的全国深化农村集体产权制度改革工作会议上获悉：农村集体产权制度改革取得阶段性重要成效。目前，全国有74.5％的村完成农村集体产权制度改革，70.1％的村领到了登记证书。河北、湖南、陕西等11个省份90％以上的村完成改革。</P><P>　　农村集体产权制度改革是一项管长远、管根本、管全局的重大制度安排。近年来，全国先后组织开展了五批农村集体产权制度改革试点，共有28个省份、89个地市、442个县整建制开展试点，目前已在全国面上推开。</P><P>　　中央明确要求，2021年底基本完成农村集体产权制度改革试点任务。从各地看，大规模的清产核资工作基本结束，已进入建立集体经济组织、深化股份合作制改革的攻坚期。目前，全国农村集体家底已基本摸清，各地通过民主协商方式，制定本集体成员身份确认的具体标准，已确认集体成员6亿多人。</P><P>　　稳步开展股份合作制改革是农村集体产权制度改革的重点。目前，全国共有43.8万个村完成集体产权制度改革，建立起符合市场经济要求的集体经济运行新机制。</P><P>　　为推动集体经济持续发展壮大、农民共享改革红利，中组部、财政部、农业农村部计划到2022年扶持10万个左右的村发展壮大集体经济试点，目前已安排扶持资金289亿元。去年，全国村集体经营收益超过5万元以上的村占到48.2％，比2016年提高23.2个百分点；集体成员累计分红超过3800亿元，是2016年的3.6倍。</P> <br><span id='paper_num'>　　《 人民日报 》（ 2020年08月23日 02 版）</span>]]></description>
        </item>
        <item>
            <title><![CDATA[中非光伏合作惠及更多非洲民众]]></title>
            <link>http://politics.people.com.cn/n1/2020/0823/c1001-31833245.html</link>
            <pubDate>2020-08-23</pubDate>
            <author>本报驻南非记者 万 宇</author>
            <description><![CDATA[<table class="pci_c" width="400"> <tbody> <tr> <td align="center"> <img src="http://paper.people.com.cn/rmrb/images/1/20200823/1598121797988_1.jpg" /></td> </tr> <tr> <td> <p> &nbsp;</p> </td> </tr> </tbody> </table> <p> 　　近年来，光伏发电正成为非洲新能源发展热点，也成为中非基础设施建设重要合作内容。中非合作惠及更多非洲人民，越来越多非洲人家里亮起了灯光。</p> <p> <strong>　　“电站的建设和运营给村庄带来生机和活力”</strong></p> <p> 　　在肯尼亚东北省，蜿蜒的塔纳河畔，一块巨大的“蓝板”镶嵌在金黄的热带稀树草原上。这块“蓝板”由超过20万块光伏板安装构成，占地85公顷，是肯尼亚乃至东非地区规模最大的光伏发电站项目——加里萨50兆瓦太阳能发电站（见上图，资料图片）。该电站大大降低了当地清洁能源价格。肯尼亚电力部门以每度12先令（约合0.12美元）价格购电入网，比当地之前柴油发电还要便宜8先令。</p> <p> 　　该电站由肯尼亚能源部筹建，中国进出口银行融资，中国江西国际经济技术合作有限公司与晶科能源控股有限公司组成联合体，负责设计、采购、施工、安装及培训，于2019年年底竣工并网发电。</p> <p> 　　电站附近拉赫马村的村长盖迪见证了电站带来的巨大变化。电站建设之前，村里只有几家商店依靠柴油发电照明，人们日落而息。由于无事可干，村民们大多选择外出打工。电站建设过程中许多村民找到了工作，还学到了技术。盖迪说：“电站的建设和运营给村庄带来生机和活力，之前夜里村庄几乎不见灯光，现在家家都有了电灯，夜生活也开始丰富起来了。”商人萨加尔说，低廉的电价和夜生活的兴起，让他的钱包也鼓了起来，“稳定的电力让村民们的很多梦想成真！”</p> <p> 　　肯尼亚农村电气化和可再生能源公司负责人彼得·姆布瓜说，该发电站年均发电量8754万千瓦时，可满足附近35万人用电需要，惠及东北省首府加里萨郡一半的人口。</p> <p> 　　水力发电在肯尼亚供电结构中占比超过50%，每到旱季，水电受限，严重影响电力供应。光伏发电较好缓解了枯水期的缺电难题。肯尼亚总统肯雅塔高度评价这一项目，称稳定供电将大大促进当地经济发展。</p> <p> <strong>　　“晚上不仅能看电视，孩子还可以读书学习”</strong></p> <p> 　　赞比亚首都卢萨卡郊区农户兰比的茅草屋虽没有通电，但他却用上了电。茅草屋旁有几块光伏板、太阳能充放电控制器和蓄电池组，四达时代公司的家用光伏供电系统解决了他的用电难题。兰比说：“自从有了光伏发电，我们家结束了点煤油灯的历史，现在晚上不仅能看电视，孩子还可以读书学习。用上太阳能真是太好了。”</p> <p> 　　2018年年底，四达时代开始在肯尼亚、赞比亚开展离网微型光伏业务。在电力覆盖难以到达的非洲广大乡村，离网微型光伏供电系统以其发电的经济性、无污染、寿命长、安全系数高、使用便捷等优点，受到非洲客户的欢迎。由于可以通过分期付款方式购买，广大农村用户也可以负担得起系统的费用。目前，该公司已将光伏业务拓展到乌干达、坦桑尼亚、卢旺达等国，为数以万计的非洲家庭带来光明和欢乐。</p> <p> <strong>　　“商业光伏解决方案将更具吸引力”</strong></p> <p> 　　国际能源署的报告认为，去年全球将近70%的缺电人口在非洲。2018年，撒哈拉以南非洲约80%的企业因频繁停电蒙受损失，阻碍经济增长。彭博社新能源财经最新报告认为，撒哈拉以南非洲微型光伏发电市场2030年价值将达1280亿美元。</p> <p> 　　中方使用多种融资方式，支持非洲光伏发电项目和输变电、电网项目的建设，助力非洲改善电力供应，促进经济增长。随着光伏设备价格下降，光伏发电正成为非洲新能源发展热点。“‘后疫情时代’，商业光伏解决方案将更具吸引力。”南非商用光伏企业负责人奈杜说。</p> <p> 　　越来越多拥有较强实力的中资企业积极参与到非洲光伏发电建设中：今年2月，葛洲坝集团宣布在乌干达参建500兆瓦光伏项目；赞比亚国家电力公司5月与中国电建正式签署600兆瓦光伏电站合同，总投资额5.48亿美元；晶科能源在非洲光伏市场占据近30%份额……</p> <p> 　　与此同时，中国还积极向非洲国家提供人才培训、创建技术转移机制，通过建立可再生能源合作发展促进中心等为非洲国家能源行业发展贡献力量。中国企业为非洲最大的阿尔及利亚233兆瓦光伏电站提供高效组件，为非洲20个足球希望中心足球场安装光伏照明设备，连续承办两届“光伏技术与应用国际培训班”，还向多个国家输出相关技术成果。</p> <p> 　　（本报约翰内斯堡8月22日电）</p> <br /> <p> <span id="paper_num">　　《 人民日报 》（ 2020年08月23日 03 版）</span></p> ]]></description>
        </item>
        <item>
            <title><![CDATA[“产生巨大的经济和社会效应”]]></title>
            <link>http://politics.people.com.cn/n1/2020/0823/c1001-31833246.html</link>
            <pubDate>2020-08-23</pubDate>
            <author>本报驻巴基斯坦记者 丁雪真</author>
            <description><![CDATA[<TABLE class="pci_c" width="400"><TBODY><TR><TD align="center"><IMG src="http://paper.people.com.cn/rmrb/images/1/20200823/1598121803298_1.jpg"></TD></TR> <TR><TD><p></p></TD></TR></TBODY></TABLE><P>　　据当地媒体报道，巴基斯坦国家经济理事会执行委员会日前批准了中巴经济走廊下融资规模最大的交通基础设施项目——巴基斯坦一号铁路干线升级改造项目。该项目将对全长2655公里的铁路干线进行升级改造，项目完工后列车时速将从当前的65至110公里提升到165公里，运力将从每日单向34列增加到171列。</P><P>　　巴基斯坦铁道部长艾哈迈德表示：“一号铁路干线升级改造项目是中巴经济走廊乃至巴基斯坦历史上最为重要的项目之一。在当前新冠肺炎疫情的严峻考验下，巴基斯坦政府全力支持中巴经济走廊建设。该项目将系统性改革升级巴基斯坦铁路运输，创造15万个本土就业岗位，产生巨大的经济和社会效应。”</P><P>　　《今日巴基斯坦报》评论称，一号铁路干线升级后不仅将从根本上改变巴基斯坦的区域联通和商贸发展面貌，还将在巴从农业经济向工业经济过渡的进程中发挥催化剂作用。</P><P>　　目前，中巴经济走廊建设捷报频传。中巴经济走廊能源项目提供了巴基斯坦全国1/3的电力供应。今年上半年，巴基斯坦卡西姆港燃煤电站的发电量较去年同期增长18%。截至8月18日，卡西姆港燃煤电站自首台机组投产发电以来实现安全生产1000天，累计发电量超过225亿千瓦时，其中2020年度发电量达到60.36亿千瓦时。</P><P>　　在西北部的开伯尔—普什图省，喀喇昆仑公路二期工程赫韦利扬至塔科特段实现全线通车；在东部的旁遮普省，拉合尔轨道交通橙线项目完成联调联试（见图，资料图片）；在西南部的俾路支省，瓜达尔新国际机场建设进入第二阶段，瓜达尔港正式启动阿富汗转口贸易……</P><P>　　在巴基斯坦可持续发展政策研究所近日举办的瓜达尔港发展研讨会上，“瓜达尔现象”受到热议。中国驻巴基斯坦大使姚敬表示：“瓜达尔港正在发挥对巴基斯坦特别是俾路支省的经济辐射作用，促进了区域互联互通。尽管面临新冠肺炎疫情的挑战，瓜达尔港的建设始终保持良好势头，充分体现了中巴两国人民不畏困难、坚韧专注的品质。”</P><P>　　巴基斯坦正义运动党中央新闻书记艾哈迈德·贾瓦德在接受本报记者采访时说：“中巴经济走廊建设正在为巴基斯坦经济复苏注入信心。疫情给经济发展造成了挑战，但也更加凸显了中巴经济走廊的价值。走廊建设改善了巴基斯坦的基础设施，增强了巴基斯坦应对风险的能力，加速了巴基斯坦工业化进程。”&nbsp;</P><P>　　（本报伊斯兰堡8月22日电）</P> <br><span id='paper_num'>　　《 人民日报 》（ 2020年08月23日 03 版）</span>]]></description>
        </item>
        <item>
            <title><![CDATA[增亮“平安中国”的法治底色]]></title>
            <link>http://politics.people.com.cn/n1/2020/0823/c1001-31833243.html</link>
            <pubDate>2020-08-23</pubDate>
            <author>本报记者 魏哲哲</author>
            <description><![CDATA[<p> 　　“平安”代表着安宁的居所、安康的生活、安全的环境、安定的社会，是极重要的民生，也是最基本的发展环境。这一切，都离不开法治的保障。</p> <p> 　　今年以来，全国政法系统勇于担当、积极探索，在疫情防控、促进复工复产等方面持续发力，为“六稳”“六保”工作提供有力法治保障，不断适应人民群众对平安中国、美好生活的新期待，不断提升人民群众的法治获得感，托举起稳稳的平安幸福。</p> <p> <strong>　　回应民生关切，捍卫社会公共利益</strong></p> <p> 　　5月7日，在济南市检察院的现场监督下，济南市市场监督管理局对近12吨不合格牛肉及牛肉制品进行无害化处理，销毁了可能流向市场、危害群众身体健康的食品，守护人民群众“舌尖上的安全”。</p> <p> 　　“去年12月，我们在两起案件中发现，行为人赵某、马某某自2013年5月至2014年6月26日销售未经检验检疫的牛肉制品，经公安机关侦查，其销售的牛肉无中文标识，两人也不能提供其销售食品的检验检疫证明，对于公安机关扣押的牛肉及其牛肉制品也不能提供食品合格证明。”办案检察官刘瑶介绍，行为人销售不符合安全标准的食品侵害了众多消费者的合法权益，危害群众的健康，虽未构成刑事犯罪，但也应承担相应的法律责任。</p> <p> 　　济南市检察院向济南市市场监督管理局发出行政公益诉讼诉前检察建议，建议其履行法定的食品安全监督管理职责，对马某某、赵某依法作出行政处理。</p> <p> 　　最终，济南市市场监督管理局分别对二人下达行政处罚决定书，给予当事人警告的行政处罚，并对其食品经营许可证依法予以注销，对被查封的牛肉进行无害化处理。“检察机关与行政机关协同共治，有力保障了人民群众的合法权益。”刘瑶说。</p> <p> 　　守护人民的美好生活，体现在对群众关切的积极回应上。面对关系群众切身利益的重点领域，政法机关积极行动：</p> <p> 　　——在食药品安全方面，1月至6月，全国检察机关通过公益诉讼检察，督促查处、收回销售、流通中的假冒伪劣食品2.5万公斤，督促收回流通中的假药和走私药品24.3公斤。6月，最高检又部署开展专项监督活动，其中，外卖包装材料安全以及“网红代言”“直播带货”等网络销售新业态涉及的食品安全及监管漏洞进入重点监督之列。</p> <p> 　　——破解农民工讨薪难题方面，司法部开通“农民工欠薪求助绿色通道”，方便农民工获取法律咨询、法律援助等公共法律服务；人民法院建立完善拖欠农民工工资案件一站式诉讼服务机制，最大限度降低农民工维权成本和门槛。</p> <p> 　　…………</p> <p> 　　从严厉整治乘车“霸座”到从严惩处“抢夺方向盘”，从深入治理电信诈骗到强力打击涉疫情犯罪，政法机关始终紧跟经济社会发展，坚持执法司法为民，积极回应群众关注的难点、痛点问题。</p> <p> <strong>　　提供法律服务，助力企业渡过难关</strong></p> <p> 　　“医疗产品市场需求量大，但是复工复产成本高，如何兼顾好职工权益保障和企业效益？”今年2月，河南南阳市一家医疗器械有限公司面临复工复产难题，便向河南大为律师事务所律师毕献星咨询。</p> <p> 　　这家公司是当地唯一的生产医用一次性输液器企业，受到新冠肺炎疫情影响，公司从1月下旬开始停工。春节过后，企业因具备防疫物资生产能力，急需复工。不过，如何平衡好企业生产和疫情防控，成为企业复工复产时遇到的难题。</p> <p> 　　“一方面协助企业制订计划，对防疫急需物资生产所需的120名工人安排优先返岗；另一方面还要制定上岗后的健康管理方案，做好在岗职工安全健康管理等防疫工作。”为做好复工前的准备工作，毕献星还进一步协助企业将各项防疫举措制度化。</p> <p> 　　企业复工后，还面临控成本问题，能否减少不在岗员工工资？“从企业角度来说，对未到岗职工采取降低工资等办法，有利于保障企业的运行。”毕献星说，但是，企业也要遵守劳动法等相关法律规定，保障好劳动者合法权益。最终，企业采纳了律师的建议，通过与职工代表进行协商，达成一致，既缓解了企业暂时困难，也避免了与职工产生矛盾冲突。</p> <p> 　　记者了解到，新冠肺炎疫情防控中，针对企业在复工复产时遇到的各类法律问题，各级司法行政机关组织广大公共法律服务工作者为困难群众提供法律援助，为企业复工复产面临的债务偿还、资金周转等困难提供公证服务，还充分利用公共法律服务网络、实体、热线平台提供法律咨询，帮助企业在依法履行疫情防控义务的前提下，安全有序开展生产。</p> <p> 　　广东汕头一家企业运行受新冠肺炎疫情影响很大，这种情况下能否减免厂房租金？近日，企业老板刘某通过电话向广东工商联律师志愿服务团成员、北京盈科（惠州）律师事务所高级合伙人陈宝龙律师咨询。</p> <p> 　　“根据我国合同法，因不可抗力不能履行合同的，根据不可抗力的影响，可以部分或者全部免除责任。”陈宝龙建议刘某运用法律规定的“不可抗力”条款，与出租方进行沟通协商。最终，通过与出租方积极沟通，出租方表示对疫情特殊时期企业面临的困难予以理解，双方达成了“免除租金一个月，减半租金两个月”的约定，为企业减少租金支出20万元。</p> <p> <strong>　　持续深化改革，提升群众获得感</strong></p> <p> 　　一段时间以来，奇葩证明、循环证明、重复证明等现象不时出现，成为群众和企业办事的烦心事。为推动证明事项清理工作，司法部在中国法律服务网开通“群众批评——证明事项清理投诉监督平台”，接受群众对地方和部门设立的奇葩证明、循环证明、重复证明等问题的投诉，解决群众办事创业的堵点。</p> <p> 　　四川遂宁市市民朱某就通过投诉监督平台反映了一项违规设定的证明事项。朱某投诉的是当地射洪市公安局，他反映的未成年人首次申领居民身份证时要求出具村社证明事项属实，但遂宁市公安局从未出台此项规定。</p> <p> 　　原来，此项证明的设定缘于2014年射洪曾发现查处多名违法犯罪人员为“漂白”身份信息，冒用当地未办理过身份证群众的信息办理二代身份证。为了防范再次出现类似事件，当地公安局要求首次申领居民身份证人员须提供村社证明。经过沟通解释，朱某表示理解，当地公安局也取消了这项证明，只需要监护人陪同并提供监护人居民身份证原件即可办理。</p> <p> 　　如今，群众反映的地方和部门“奇葩证明”等问题明显减少。从中国法律服务网“群众批评——证明事项清理投诉监督平台”受理群众投诉的数量上看，2018年9月投诉监督平台开通当月，共收到群众反映证明事项有关问题865件；而到去年11月，这类投诉已减少至15件。</p> <p> 　　不断深化“放管服”改革，政法机关释放的改革红利展现在人民群众的一张张笑脸上。近日，吉林省吉林市出入境办证大厅里人并不多。原来，得益于吉林市出入境管理部门实行网上精准预约办证，群众在“互联网+公安”平台和“吉林出入境”微信服务号预约办证时间和地点，智能客服自动推送“最近、最闲”的办证大厅，有效实现了分流，让群众办证更便利、更轻松。</p> <p> 　　推动户籍制度改革取得决定性进展、推出多项出入境便利措施、推行证明事项告知承诺制和推进证明事项清理……政法机关不断推进和深化“放管服”改革，在统筹疫情防控和经济社会发展等方面推出了一系列新政策新措施，进一步提升了管理服务质量和水平，激发了社会创造活力，增强了人民群众的获得感。</p> <br /> <p> <span id="paper_num">　　《 人民日报 》（ 2020年08月23日 04 版）</span></p> ]]></description>
        </item>
        <item>
            <title><![CDATA[盘山路亮了]]></title>
            <link>http://politics.people.com.cn/n1/2020/0823/c1001-31833244.html</link>
            <pubDate>2020-08-23</pubDate>
            <author>人民网</author>
            <description><![CDATA[<TABLE class="pci_c" width="400"><TBODY><TR><TD align="center"><IMG src="http://paper.people.com.cn/rmrb/images/1/20200823/1598121781468_1.jpg"></TD></TR> <TR><TD><p></p></TD></TR></TBODY></TABLE><P>　　8月21日晚，湖南吉首市，矮寨盘山公路流光溢彩，与大桥遥相辉映，车行其中，赏心悦目，吸引了众多游客前来打卡。该公路亮化工程是吉首市旅游景区提质增辉的举措，目前一期已完工。</P><P>　　郭立亮摄（人民视觉）</P> <br><span id='paper_num'>　　《 人民日报 》（ 2020年08月23日 02 版）</span>]]></description>
        </item>
        <item>
            <title><![CDATA[【幸福花开新边疆】白玛拉珍家的新房子和好日子]]></title>
            <link>http://politics.people.com.cn/n1/2020/0823/c1001-31833209.html</link>
            <pubDate>2020-08-23</pubDate>
            <author>人民网</author>
            <description><![CDATA[<p> 　　沿着扎杂村党员群众服务活动中心门口宽阔的大路一直向前走，看到大气的文化广场左转，不一会，就来到了白玛拉珍现在的家。这是一座富有民族特色的藏式庭院，两层楼，漂亮得很。</p> <p> 　　白玛拉珍家乔迁不久，今年6月份才从山上搬下来。像她家这样刚刚搬进新家的，在西藏自治区山南市措美县哲古镇扎杂村共有169户。他们都是扎杂村易地扶贫搬迁项目的受益者。</p> <p> 　　今年44岁的白玛拉珍，家里有7口人。她的丈夫和女婿都是在山上放牧的牧民。大女儿在拉萨做小生意，小女儿是西藏民族大学在读的大学生，平时都不在家。日常陪着白玛拉珍的，是两个可爱的孩子——她的外孙子和外孙女。</p> <p> 　　当初，易地扶贫搬迁项目在设计的时候，7人及以上户型的房屋设计成了两种模式：一种是独门独栋，另一种则是两家连栋，称为“双拼”。是搬进独栋还是“双拼”，完全取决于手气——由抽签决定。白玛拉珍家抽到的，就是独栋。</p> <p> 　　掀开门帘进屋，左手边是客厅。吊灯和四周围绕一圈的小筒灯，照得屋里亮堂堂。各种家具都是新添置的，一应俱全。提到过去居住的房子，白玛拉珍说：“之前的房子不好，只有三间房，全家人都挤在一个房间里睡，厨房也是这间屋子。”</p> <p align="center"> <img alt="" src="http://www.people.com.cn/mediafile/pic/BIG/20200823/23/14895911450369891623.jpg" /></p> <p align="center" class="pictext"> 　　白玛拉珍家的客厅。新华网 董静雪摄</p> <p align="center"> <img alt="" src="http://www.people.com.cn/mediafile/pic/BIG/20200823/97/3360892792073629469.jpg" /></p> <p align="center" class="pictext"> 　　白玛拉珍在家中。新华网 董静雪摄</p> <p> 　　这当然不只是白玛拉珍家一家的情况。“高、密、脏、乱、差”，是扎杂村村民对过去村子的评价。过去，大家都居住在北部山顶上，坡陡、路窄、弯多，房屋凌乱密集，交通也不方便，车辆都没法开进村子。</p> <p> 　　2018年，扎杂村易地扶贫搬迁项目落地，村委会给大家细致介绍政策。听说有这样的好政策，白玛拉珍特别愿意搬。如今，她家的居住条件大变了样，房子有大大小小好几个房间。根据扎杂村易地扶贫搬迁项目的安排，搬进这样的新家，每户只需自筹房屋建设总投资的一小部分。</p> <p align="center"> <img alt="" src="http://www.people.com.cn/mediafile/pic/BIG/20200823/68/8358782338431470880.jpg" /></p> <p align="center" class="pictext"> 　　白玛拉珍在家中。新华网 董静雪摄</p> <p> 　　易地扶贫搬迁项目不仅在资金上为大家解决后顾之忧，细节上想得也周到。在白玛拉珍家的院子里，我们看到了非常特殊的厕所形式：水旱共用。</p> <p> 　　原来，工程建设初期是按照统一标准建设水厕。但是，扎杂村属于高原牧区，平均海拔4600米。很多群众反映，冬天太冷水管冻裂，水厕便无法使用。于是，经过充分调研，设计人员与相关部门、农牧民群众代表和项目施工单位重新商讨制定厕所设计方案，最终确定采用水旱共用的处理方式：每年4月至10月中旬，优先使用水厕；10月中旬至次年3月底，可使用旱厕。</p> <p> 　　住在宽敞舒适的新家，白玛拉珍打心眼里高兴。二楼的一个小房间还没来得及装修，白玛拉珍告诉我们，装好之后打算给外孙子和外孙女两个孩子住。说这话的时候，她满眼笑意。</p> <p align="center"> <img alt="" src="http://www.people.com.cn/mediafile/pic/BIG/20200823/70/10465814510758090858.jpg" /></p> <p align="center" class="pictext"> 　　白玛拉珍家二楼的阳光棚。新华网 董静雪摄</p> <p> 　　好日子是什么模样？答案就藏在那些由衷的笑容里。（新华网 董静雪）</p> ]]></description>
        </item>
        <item>
            <title><![CDATA[继往开来 习近平为长三角一体化发展注入澎湃动力]]></title>
            <link>http://politics.people.com.cn/n1/2020/0822/c1001-31832946.html</link>
            <pubDate>2020-08-23</pubDate>
            <author>人民网</author>
            <description><![CDATA[<p style="text-indent: 2em;"> 8月19日，在安徽考察调研的习近平总书记走进中国宝武马钢集团优质合金棒材车间，勉励其“要抓住深化国有企业改革和推动长三角一体化发展的重大机遇”。同日，在合肥参观安徽创新馆时，总书记又指出“安徽要加快融入长三角一体化发展，实现跨越式发展，关键靠创新。”8月20日，习近平总书记在安徽合肥主持召开扎实推进长三角一体化发展座谈会并发表重要讲话。</p> <p style="text-align: center;"> <img src="/NMediaFile/2020/0822/MAIN202008221856000149843636207.png" style="height: 402px; width: 600px;" /></p> <p style="text-indent: 2em;"> <span style="color:#0000ff;">8月18日至21日，中共中央总书记、国家主席、中央军委主席习近平在安徽省考察。这是19日上午，习近平在马鞍山市中国宝武马钢集团，同企业劳动模范、工人代表亲切交流。新华社记者 鞠鹏 摄</span></p> <p style="text-indent: 2em;"> 总书记的足迹蕴含深意。安徽濒江近海，外承沿海地区经济辐射、内拥长江水道黄金经济带，正是长江三角洲区域一体化的重镇。作为我国经济发展最活跃、开放程度最高、创新能力最强的区域之一，长江三角洲区域的统筹发展与科学规划，一直深切牵动着习近平总书记的心。</p> <p style="text-indent: 2em;"> 党的十八大以来，习近平总书记亲自谋划部署，多次深入长江三角洲区域视察工作，多次主持召开会议并发表重要讲话，为长江三角洲区域一体化的发展掌舵领航。同时，长三角三省一市和相关部门牢记总书记嘱托，交出了一份亮眼的成绩单。</p> <p align="center"> <strong>久久为功 擘画长三角一体化发展蓝图</strong></p> <p style="text-indent: 2em;"> 推动长三角一体化发展，增强长三角地区创新能力和竞争能力，提高经济集聚度、区域连接性和政策协同效率，对引领全国高质量发展、建设现代化经济体系意义重大。如何规划好、发展好这条覆盖35.8万平方公里的经济区，充<span style="text-indent: 2em;">分发挥“1+1&gt;2”的协同效应，立好经济高质量发展的路标牌？</span></p> <p style="text-indent: 2em;"> 答案在习近平总书记的足迹里。十八大以来，习近平数次考察上海、江苏，今年又先后踏访浙江、安徽，六年来的多次实地考察，总书记统筹谋划，久久为功。</p> <p align="center" style="text-align: center;"> <img src="/NMediaFile/2020/0822/MAIN202008222225000442549567479.jpg" style="width: 600px; height: 1457px;" /></p> <p align="center"> <strong>政策加码 长三角一体化进程稳步推进</strong></p> <p style="text-indent: 2em;"> 2018年11月5日，习近平在首届中国国际进口博览会上宣布，支持长江三角洲区域一体化发展并上升为国家战略。2019年12月1日，中共中央、国务院印发了《长江三角洲区域一体化发展规划纲要》，为各地各部门树立顶层设计方向标。</p> <p style="text-indent: 2em;"> 此后各部委、多省市区相继出台促进长江经济带发展硬招实招，多方位深入推进长江经济带协调发展。点面结合、省市联动，长江三角洲区域一体化发展正朝着高质量方向坚实迈进。</p> <p style="text-indent: 2em;"> 2020年8月12日，商务部印发《全面深化服务贸易创新发展试点总体方案》，长三角将开展数字人民币试点，推动数字经济发展；2020年4月2日，国家发改委、交通运输部印发《长江三角洲地区交通运输更高质量一体化发展规划》，提出要加快推进长三角地区对外交通、城际交通、都市圈交通高效衔接和有机融合；2019年11月27日，国家税务总局印发《国家税务总局关于支持和服务长江三角洲区域一体化发展措施的通知》，出台十六条征管服务措施，力求更好发挥税收助力长三角一体化高质量发展的作用。</p> <p style="text-indent: 2em;"> 在上海，推动制定长三角一体化发展三年行动计划，共建G60科创走廊等一批区域合作平台，协同创新网络共建共享、生态环境联防联治等持续加强；</p> <p style="text-indent: 2em;"> 在江苏，探索以特别合作区的模式推动区域协调发展，全面融入长三角区域一体化发展国家战略；</p> <p style="text-indent: 2em;"> 在浙江，发布推进长江三角洲区域一体化发展行动方案，共建长三角生态绿色一体化发展示范区，重点推进规划、土地、要素、财税、公共服务、生态等领域的一体化发展制度创新；</p> <p style="text-indent: 2em;"> 在安徽，基础设施、科技创新、公共服务、产业合作等方面大幅度“加码”，全力加快推进长三角一体化……</p> <p style="text-indent: 2em;"> 蓝图绘就，政策加码，实干者乃成。“工作抓得紧，有不少亮点。”习近平总书记在座谈会上对长三角一体化发展战略实施一年多以来所取得的阶段性成果作出了肯定。</p> <p style="text-indent: 2em;"> 一年多来，长三角生态绿色一体化发展示范区这步先手棋实现地理破界、资源破界，朝着生态优势转化新标杆、绿色创新发展新高地、一体化制度创新试验田、人与自然和谐宜居新典范的战略定位稳步迈进。疫情期间，长三角一体化发展红利释放，成为稳住经济的“底盘”。据统计，今年一季度，长三角三省一市GDP合计4.98万亿元，占当期我国国内生产总值的24%。</p> <p style="text-indent: 2em;"> 可以说，长三角三省一市交出了一份亮眼的成绩单。</p> <p align="center" style="text-align: center;"> <img src="/NMediaFile/2020/0822/MAIN202008221858000466685870238.jpg" style="width: 600px; height: 1626px;" /></p> <p align="center"> &nbsp;</p> <p align="center"> <strong>继往开来 长三角一体化发展注入澎湃动力</strong></p> <p style="text-align: center;"> <img src="/NMediaFile/2020/0822/MAIN202008221859000333749500606.png" style="height: 437px; width: 600px;" /></p> <p style="text-indent: 2em;"> <span style="color:#0000ff;">8月20日，中共中央总书记、国家主席、中央军委主席习近平在合肥主持召开扎实推进长三角一体化发展座谈会并发表重要讲话。新华社记者 鞠鹏 摄</span></p> <p style="text-indent: 2em;"> 面对复杂严峻的形势，习近平在安徽调研期间专门召开扎实推进长三角一体化发展座谈会，其用意深远，也为长三角一体化发展注入澎湃动力<strong>。</strong></p> <p style="text-indent: 2em;"> 在座谈会上，他再次强调了“我们必须集中力量办好自己的事”，并从三个方面指出了长三角区域在国家经济社会发展中的地位和作用。</p> <p align="center" style="text-align: center;"> <img src="/NMediaFile/2020/0822/MAIN202008221901000460480578180.png" style="width: 600px; height: 966px;" /></p> <p style="text-indent: 2em;"> 如何继续推进长三角一体化发展战略？围绕“一体化”和“高质量”两个关键词，习近平提出了7条路径。</p> <p align="center" style="text-align: center;"> <img src="/NMediaFile/2020/0822/MAIN202008221901000150239148638.jpg" style="width: 600px; height: 1913px;" /></p> <p style="text-indent: 2em;"> “长三角一体化发展不是一日之功，我们既要有历史耐心，又要有只争朝夕的紧迫感，既谋划长远，又干在当下。”在总书记的讲话里、足迹中，在各地各部委密集出台的硬招实招下，长三角一体化发展必将不断取得更加丰硕的成果！</p> <p style="text-indent: 2em;"> （王政淇 王潇潇 实习生王江珹）</p> <p style="text-indent: 2em;"> 资料来源：人民日报 新华社</p> ]]></description>
        </item>
        <item>
            <title><![CDATA[纪检监察机关督促落实长江流域禁渔禁捕工作 织密十年禁渔监督网]]></title>
            <link>http://politics.people.com.cn/n1/2020/0823/c1001-31833034.html</link>
            <pubDate>2020-08-23</pubDate>
            <author>人民网</author>
            <description><![CDATA[<p> 　　中央纪委国家监委网站 陈昊</p> <p> 　　“老李，以前你们都是以船为生，现在长江禁捕退捕了，政府对你们转产安置的情况如何？”8月21日，安徽省池州市纪委监委驻市农业农村局纪检监察组来到贵池区江口街道，就当地渔民退捕转产后的各项安置措施落实情况进行走访了解。交谈中得知，退捕后的渔民老李不仅住进了安置房，还参加养殖培训，为发展水产养殖做着准备。</p> <p> 　　长江是中华民族母亲河，是世界上水生生物多样性最为丰富的河流之一。为扭转长江生态环境不断恶化趋势，去年12月，农业农村部明确从2020年开始，长江全面进入10年休养生息期。</p> <p> 　　长江“十年禁渔”是推动长江经济带绿色发展的重要举措，是实现全面建成小康社会必须完成的目标任务。纪检监察机关将督促落实禁渔禁捕工作作为一项重要政治任务，以强有力的监督推动长江生态环境保护修复工作有效落实，使长江真正得到休养生息。</p> <p> 　　<strong>推动禁渔禁捕工作有效实施</strong></p> <p> 　　“向大姐，现在生活有困难吗？有什么需要我们来协调解决的吗？”8月20日，湖北省秭归县纪委副书记、县监委副主任廖厚坤来到归州镇官庄坪五组的退捕渔民向芬家中，了解退捕禁渔后群众的生产生活情况。</p> <p> 　　秭归地处长江沿线，不少居民常年以捕鱼为生。县纪委监委组建了9个专项监督检查组，对县城区域及8个沿江乡镇退捕工作开展监督检查。检查组深入农贸市场、餐饮饭店、农户家中，通过监督检查，了解渔政、市场监管、农业农村等行业部门监管责任是否履行到位，乡镇、村（社区）属地管理主体责任是否落实到位。针对发现的问题，检查组当场指出并督促整改。</p> <p> 　　在湖北省武汉市纪委监委的督促下，市公安局制定为期3年的打击长江流域非法捕捞犯罪专项行动方案。驻市公安局纪检监察组将长江禁渔工作与扫黑除恶专项斗争结合，对重点犯罪案件特别是涉嫌组织化、团伙化的非法捕捞举报线索开展专案经营，对已查处的非法捕捞案件进行“回头看”，坚决深挖幕后“保护伞”，斩断非法利益链条。</p> <p> 　　<strong>确保转产渔民得到妥善安置</strong></p> <p> 　　“这段时间是产卵高峰，大家要随时关注水位升降，及时调整绳索长度，确保鱼巢始终处于水面以下。”随着嘉陵江进入鱼类繁殖期，作为护鱼人，重庆市北碚区的退捕渔民雷飞强又忙碌了起来。</p> <p> 　　据北碚区纪委监委驻区农业农村委纪检监察组组长刘玉芳介绍，为发挥退捕渔民熟悉嘉陵江水情鱼情的优势，在派驻纪检监察组的推动下，该区农业农村委通过委托聘请，为雷飞强等退捕渔民在增殖放流、禁渔禁捕等工作中提供就业岗位。</p> <p> 　　“我们还督促区农业农村委积极协调退捕渔民所在街镇，结合本地实际提供山塘水库漂浮物清理、河道巡查、码头看护等公益性岗位，优先安置年龄较大、就业困难的退捕渔民。”刘玉芳说，目前北碚区261名渔民全部实现退捕转产上岸。</p> <p> 　　为做好退捕渔民安置工作，上海市纪委监委推动全市相关部门和沿江各区政府夯实主体责任，根据“以证定船、以船定人、一证一档”的原则，对符合条件的194名长江退捕渔民完成建档立卡，将全市渔民统一纳入小城镇社会保险进行管理。同时，积极开展退捕渔民就业帮扶，鼓励劳动年龄内有就业意愿的退捕渔民参加职业技能培训，通过劳动力市场应聘、公益性岗位安置等渠道再就业。截至目前，194名退捕渔民中已有113人实现就业，54人领取养老金。</p> <p> 　　<strong>立足禁渔禁捕修复生态环境</strong></p> <p> 　　无论是禁渔禁捕，还是退捕转产，根本目标都是让长期遭受竭泽而渔的长江得以休养生息，让长江流域生态环境得到修复改善。</p> <p> 　　江苏省苏州市吴中区坐拥太湖60%的水域、苏州80%的山林，是苏州山水资源最丰富、山水林田湖草生态要素最齐全的地区。近年来，在区纪委监委的推动下，吴中区对沿太湖3公里池塘螃蟹养殖开展退渔还湿、退渔还种整治。</p> <p> 　　禁渔退捕后，如何既保护好“绿水青山”，同时让当地群众收获“金山银山”？吴中区纪委监委推动区农业农村、水务和生态环境等部门，对原有养殖池塘进行全面标准化改造，并督促建立强化湿地保护、芦苇收割管理、蓝藻打捞水草养护等长效管理机制。</p> <p> 　　“以前在太湖里养蟹，现在搬到标准池塘来养，这里水质环境好，螃蟹不但没有减产，而且品质更好。”据吴中区东山镇蟹农老叶介绍，随着东山镇划入生态涵养发展实验区建设，他和蟹农们一起搬到镇里统一规划建设的内塘养殖。如今，他经营着6个标准化塘口共216亩蟹塘，由于螃蟹品质提升，今年的螃蟹早早便被预定一空。</p> <p> 　　1900多亩太湖滩涂整治、1.58万亩围网拆除、1万亩养殖池塘标准化改造……东山镇相关负责人介绍，正是生态环境保护带动乡村产业得到高质量发展。随着精品民宿集群的形成，去年全镇吸引游客380多万人次，旅游综合收入59.63亿元，农民平均纯收入突破4万元。</p> ]]></description>
        </item>
        <item>
            <title><![CDATA[徐麟：引领带动公共关系事业纵深发展]]></title>
            <link>http://politics.people.com.cn/n1/2020/0823/c1001-31833021.html</link>
            <pubDate>2020-08-23</pubDate>
            <author>人民网</author>
            <description><![CDATA[<p style="text-indent: 2em;"> 新华网北京8月22日电 中国公共关系协会第六届会员代表大会22日在北京召开，中宣部副部长、国新办主任徐麟出席大会并讲话，对协会发展提出希望和要求。</p> <p style="text-indent: 2em;"> 徐麟首先代表中央宣传部、国务院新闻办公室向大会的召开表示热烈祝贺。他表示，党中央的战略部署为中国公共关系协会发挥好在政府和公众中的调节、沟通、协调、服务的职能，发挥好桥梁纽带作用、汇聚各类资源助力国际传播和对外交流提出了明确的方向指引。</p> <p style="text-indent: 2em;"> 他说，希望协会认真学习宣传贯彻习近平新时代中国特色社会主义思想，坚持正确政治方向，坚持守正创新，在党和国家事业发展大局中把握目标定位，明确使命任务，全力履职尽责，加强自身建设，始终做公共关系领域的引领者、社会治理的促进者、中华文化走出去的推动者。</p> <p style="text-indent: 2em;"> 他对协会发展提出四个方面要求：一是坚定政治立场，始终牢牢把握正确政治方向；二是发挥桥梁作用，最大程度凝聚行业和社会共识；三是积极开拓创新，丰富国际公关和对外联络的理念和方式；四是打造专业队伍，引领带动公共关系事业纵深发展。</p> <p style="text-indent: 2em;"> 会议选举产生了中国公共关系协会第六届理事会成员和负责人。</p> ]]></description>
        </item>
        <item>
            <title><![CDATA[紧扣一体化和高质量抓好重点工作 推动长三角一体化发展不断取得成效]]></title>
            <link>http://politics.people.com.cn/n1/2020/0823/c1024-31832972.html</link>
            <pubDate>2020-08-23</pubDate>
            <author>人民网</author>
            <description><![CDATA[<table class="pci_c" width="400"> <tbody> <tr> <td align="center"> <img src="http://paper.people.com.cn/rmrb/images/1/20200823/1598121774477_1.jpg" /></td> </tr> <tr> <td> <p> 　　8月20日，中共中央总书记、国家主席、中央军委主席习近平在合肥主持召开扎实推进长三角一体化发展座谈会并发表重要讲话。<br /> 　　新华社记者 王 晔摄</p> </td> </tr> </tbody> </table> <p> <strong>　　■&nbsp;要深刻认识长三角区域在国家经济社会发展中的地位和作用，结合长三角一体化发展面临的新形势新要求，坚持目标导向、问题导向相统一，紧扣一体化和高质量两个关键词抓好重点工作，真抓实干、埋头苦干，推动长三角一体化发展不断取得成效</strong></p> <p> <strong>　　■&nbsp;面对严峻复杂的形势，要更好推动长三角一体化发展，必须深刻认识长三角区域在国家经济社会发展中的地位和作用。第一，率先形成新发展格局。在当前全球市场萎缩的外部环境下，我们必须集中力量办好自己的事，发挥国内超大规模市场优势，加快形成以国内大循环为主体、国内国际双循环相互促进的新发展格局。第二，勇当我国科技和产业创新的开路先锋。当前，新一轮科技革命和产业变革加速演变，更加凸显了加快提高我国科技创新能力的紧迫性。第三，加快打造改革开放新高地。近来，经济全球化遭遇倒流逆风，越是这样我们越是要高举构建人类命运共同体旗帜，坚定不移维护和引领经济全球化</strong></p> <p> <strong>　　■&nbsp;实施长三角一体化发展战略要紧扣一体化和高质量两个关键词，以一体化的思路和举措打破行政壁垒、提高政策协同，让要素在更大范围畅通流动，有利于发挥各地区比较优势，实现更合理分工，凝聚更强大的合力，促进高质量发展。第一，推动长三角区域经济高质量发展。第二，加大科技攻关力度。第三，提升长三角城市发展质量。第四，增强欠发达区域高质量发展动能。第五，推动浦东高水平改革开放。第六，夯实长三角地区绿色发展基础。第七，促进基本公共服务便利共享</strong></p> <p> <strong>　　■&nbsp;要提高党把方向、谋大局、定政策、促改革的能力和定力，为长三角一体化发展提供坚强政治保障。长三角一体化发展不是一日之功，我们既要有历史耐心，又要有只争朝夕的紧迫感，既谋划长远，又干在当下</strong></p> <p> 　　</p> <p> 　　本报合肥8月22日电&nbsp;&nbsp;中共中央总书记、国家主席、中央军委主席习近平20日在合肥主持召开扎实推进长三角一体化发展座谈会并发表重要讲话。他强调，要深刻认识长三角区域在国家经济社会发展中的地位和作用，结合长三角一体化发展面临的新形势新要求，坚持目标导向、问题导向相统一，紧扣一体化和高质量两个关键词抓好重点工作，真抓实干、埋头苦干，推动长三角一体化发展不断取得成效。</p> <p> 　　中共中央政治局常委、国务院副总理、推动长三角一体化发展领导小组组长韩正出席座谈会并讲话。</p> <p> 　　习近平在安徽调研期间专门召开这次座谈会。座谈会上，上海市委书记李强、江苏省委书记娄勤俭、浙江省委书记车俊、安徽省委书记李锦斌、推动长三角一体化发展领导小组副组长何立峰先后发言，结合各自实际、从不同角度介绍了工作情况，谈了意见和建议。</p> <p> 　　在听取大家发言后，习近平发表了重要讲话。他指出，长三角一体化发展战略实施一年多以来，三省一市和有关部门贯彻落实党中央决策部署，工作抓得紧，有不少亮点。一是对党中央战略意图领会到位，把长三角一体化发展放在国家区域发展总体战略全局中进行统筹谋划，扣紧了全国发展强劲活跃增长极、高质量发展样板区、率先基本实现现代化引领区、区域一体化发展示范区、改革开放新高地的战略定位。二是创新方式方法，围绕重点领域和重点区域进行突破，以点带面加快一体化进程。三是战略实施成果已经显现，规划政策体系“四梁八柱”初步构建，多层次工作机制发挥实效，在这次疫情防控和恢复经济过程中，一体化机制和互联互通基础设施发挥了作用。总的来说，长三角一体化发展新局面正在形成。这说明，党中央决策部署是正确的，各方面落实是有力的。</p> <p> 　　习近平强调，面对严峻复杂的形势，要更好推动长三角一体化发展，必须深刻认识长三角区域在国家经济社会发展中的地位和作用。第一，率先形成新发展格局。在当前全球市场萎缩的外部环境下，我们必须集中力量办好自己的事，发挥国内超大规模市场优势，加快形成以国内大循环为主体、国内国际双循环相互促进的新发展格局。长三角区域要发挥人才富集、科技水平高、制造业发达、产业链供应链相对完备和市场潜力大等诸多优势，积极探索形成新发展格局的路径。第二，勇当我国科技和产业创新的开路先锋。当前，新一轮科技革命和产业变革加速演变，更加凸显了加快提高我国科技创新能力的紧迫性。上海和长三角区域不仅要提供优质产品，更要提供高水平科技供给，支撑全国高质量发展。第三，加快打造改革开放新高地。近来，经济全球化遭遇倒流逆风，越是这样我们越是要高举构建人类命运共同体旗帜，坚定不移维护和引领经济全球化。长三角区域一直是改革开放前沿。要对标国际一流标准改善营商环境，以开放、服务、创新、高效的发展环境吸引海内外人才和企业安家落户，推动贸易和投资便利化，努力成为联通国际市场和国内市场的重要桥梁。</p> <p> 　　习近平指出，实施长三角一体化发展战略要紧扣一体化和高质量两个关键词，以一体化的思路和举措打破行政壁垒、提高政策协同，让要素在更大范围畅通流动，有利于发挥各地区比较优势，实现更合理分工，凝聚更强大的合力，促进高质量发展。</p> <p> 　　第一，推动长三角区域经济高质量发展。三省一市要在抓好常态化疫情防控的前提下，落实好党中央出台的各项政策，在扎实做好“六稳”工作、全面落实“六保”任务上走在全国前列。要确保各项纾困措施直达基层、直接惠及市场主体，引导金融资本重点支持制造业和中小微企业。要发挥数字经济优势，加快产业数字化、智能化转型，提高产业链供应链稳定性和竞争力。要加快推进重大项目建设，释放有效投资需求。</p> <p> 　　第二，加大科技攻关力度。创新主动权、发展主动权必须牢牢掌握在自己手中。三省一市要集合科技力量，聚焦集成电路、生物医药、人工智能等重点领域和关键环节，尽早取得突破。要支持一批中小微科技型企业创新发展。</p> <p> 　　第三，提升长三角城市发展质量。长三角区域城市开发建设早、旧城区多，改造任务很重，这件事涉及群众切身利益和城市长远发展，再难也要想办法解决。同时，不能一律大拆大建，要注意保护好历史文化和城市风貌，避免“千城一面、万楼一貌”。要坚决防止借机炒作房地产，毫不动摇坚持房子是用来住的、不是用来炒的定位，落实长效机制，确保房地产市场平稳健康发展。</p> <p> 　　第四，增强欠发达区域高质量发展动能。一体化的一个重要目的是要解决区域发展不平衡问题。发展落差往往是发展空间。有关部门要针对欠发达地区出台实施更精准的举措，推动这些地区跟上长三角一体化高质量发展步伐。海纳百川，有容乃大。不同地区的经济条件、自然条件不均衡是客观存在的，如城市和乡村、平原和山区、产业发展区和生态保护区之间的差异，不能简单、机械地理解均衡性。解决发展不平衡问题，要符合经济规律、自然规律，因地制宜、分类指导，承认客观差异，不能搞一刀切。</p> <p> 　　第五，推动浦东高水平改革开放。今年是上海浦东开发开放30周年，支持浦东在改革系统集成协同高效、高水平制度型开放、增强配置全球资源能力、提升城市现代化治理水平等方面先行先试、积极探索、创造经验，对上海以及长三角一体化高质量发展乃至我国社会主义现代化建设具有战略意义。要继续做好上海自由贸易试验区临港新片区建设工作，充分发挥试验田作用。要抓好上海国际金融中心建设，支持长三角和全国经济高质量发展。</p> <p> 　　第六，夯实长三角地区绿色发展基础。长三角地区是长江经济带的龙头，不仅要在经济发展上走在前列，也要在生态保护和建设上带好头。要把保护修复长江生态环境摆在突出位置，狠抓生态环境突出问题整改，推进城镇污水垃圾处理，加强化工污染、农业面源污染、船舶污染和尾矿库治理。要推进环太湖地区城乡有机废弃物处理利用，形成系列配套保障措施，为长三角地区生态环境共保联治提供借鉴，为全国有机废弃物处理利用作出示范。长江禁渔是为全局计、为子孙谋的重要决策。沿江各省市和有关部门要加强统筹协调，细化政策措施，压实主体责任，保障退捕渔民就业和生活。要强化执法监管，严厉打击非法捕捞行为，务求禁渔工作取得扎实成效。</p> <p> 　　第七，促进基本公共服务便利共享。要多谋民生之利、多解民生之忧，在一体化发展中补齐民生短板。三省一市要结合这次新冠肺炎疫情防控的经验，利用长三角地区合作机制，建立公共卫生等重大突发事件应急体系，强化医疗卫生物资储备。要推进实施统一的基本医疗保险政策，有计划逐步实现药品目录、诊疗项目、医疗服务设施目录的统一。要探索以社会保障卡为载体建立居民服务“一卡通”，在交通出行、旅游观光、文化体验等方面率先实现“同城待遇”。同时，要在补齐城乡基层治理短板、提高防御自然灾害能力上下功夫、见实效。</p> <p> 　　习近平强调，要提高党把方向、谋大局、定政策、促改革的能力和定力，为长三角一体化发展提供坚强政治保障。要在一体化发展战略实施的过程中发现人才、培育人才、使用人才。要坚持把政治标准作为第一标准，确保干部队伍政治上信得过、靠得住、能放心。要深化干部制度改革，推动形成能者上、优者奖、庸者下、劣者汰的正确导向。要探索建立同长三角一体化发展相适应的干部交流机制。要加强企业党组织规范化建设，发挥党组织在服务企业决策、开拓市场、革新技术、提高效益等方面的作用，把党的政治优势、组织优势转化为企业发展优势。要注重在非公有制经济组织中发展党员，做好党员教育管理工作，引导他们发挥先锋模范作用。</p> <p> 　　习近平指出，长三角一体化发展不是一日之功，我们既要有历史耐心，又要有只争朝夕的紧迫感，既谋划长远，又干在当下。领导小组要把好大方向、大原则的关，确保党中央决策部署落实到位。三省一市和有关部门要按照党中央决策部署，勇于担当，主动作为，大胆突破。要从实际出发，制定“十四五”时期长三角一体化发展规划实施方案，不断取得更加丰硕的成果。</p> <p> 　　韩正在讲话中表示，要深入学习领会习近平总书记重要战略思想，紧扣一体化和高质量两个关键词，推进长三角一体化发展取得更大成效。要着力打造全国高质量发展样板区，扎实做好“六稳”工作，全面落实“六保”任务，保持经济稳定运行，加快产业优化升级。要着力推进高质量创新，集中突破一批关键核心技术，协同推进原始创新、技术创新和产业创新，形成科技创新和制造业研发高地。要着力推动高水平开放，促进自由贸易试验区高质量发展，打造高水平开放平台，完善市场化、法治化、国际化营商环境。要着力强化高效协同，完善一体化体制机制，加强生态环境共保联治，促进基本公共服务便利共享。</p> <p> 　　丁薛祥、刘鹤、陈希、王勇以及中央和国家机关有关部门负责同志、有关省市负责同志参加座谈会。</p> <br /> <p> <span id="paper_num">　　《 人民日报 》（ 2020年08月23日 01 版）</span></p> ]]></description>
        </item>
        <item>
            <title><![CDATA[加快建设美好安徽 努力取得更大进展]]></title>
            <link>http://politics.people.com.cn/n1/2020/0823/c1001-31832973.html</link>
            <pubDate>2020-08-23</pubDate>
            <author>本报记者 朱思雄 徐 靖 田先进 游 仪</author>
            <description><![CDATA[<p> 　　8月18日至21日，习近平总书记在安徽考察并作重要讲话，在当地干部群众中引发热烈反响。大家表示，一定牢记习近平总书记的嘱托，贯彻落实好党中央决策部署，贯彻新发展理念，坚持稳中求进工作总基调，坚持改革开放，坚持高质量发展，深化供给侧结构性改革，打好三大攻坚战，做好“六稳”工作，落实“六保”任务，决胜全面建成小康社会、决战脱贫攻坚，在构建以国内大循环为主体、国内国际双循环相互促进的新发展格局中实现更大作为，在加快建设美好安徽上取得新的更大进展。</p> <p> <strong>　　发扬不怕疲劳、连续作战的作风，做好防汛救灾和灾后恢复重建工作</strong></p> <p> 　　习近平总书记在蒙洼蓄洪区曹集镇利民村西田坡庄台考察调研时指出，要因地制宜、抢种补种，尽量把灾害损失降到最低，争取秋季仍然取得好的收成。</p> <p> 　　“总书记牵挂灾区群众，专程来看望乡亲们，让我们倍感温暖、备受鼓舞。”因蓄洪所需，利民村5000多亩土地被淹，连日来，村党支部书记郭西军忙着带领村民抢种补种。“从8月初开始补种荞麦、大葱、包菜、红薯等，村民可以拿到每亩500元的补偿款，种子、化肥等由政府兜底发放。”郭西军说，“我们一定认真贯彻落实总书记重要指示，更加努力工作，把灾害损失降到最低。”</p> <p> 　　阜南县王家坝镇也正在积极探索毛豆、香葱、莲藕、芡实等汛期之外作物和水生作物的种植。镇长余海阔说：“发展农业既要适应市场，也要适应自然环境，让人与自然和谐相处，努力把水患变成水利。”</p> <p> 　　习近平总书记在阜南县考察时，来到红亮箱包有限公司，了解阜南县开展就业扶贫和防止因灾致贫返贫情况，并察看车间生产线，同职工亲切交流，希望企业克服困难，把灾害造成的损失抢回来。</p> <p> 　　红亮箱包有限公司2016年建成投产，2017年被认定为扶贫车间。今年因为疫情和汛情，企业经营受到一些影响。在当地党委和政府帮助下，汛情过后公司继续扩大生产规模，现有员工127人，实训人员21人，其中贫困户73人。公司总经理王恒亮说：“根据市场需求及时调整产品结构，目前公司订单已经排到年底。对未来发展，我们充满信心。”</p> <p> 　　习近平总书记在合肥市肥东县十八联圩生态湿地蓄洪区巢湖大堤罗家疃段考察时强调，要坚持湿地蓄洪区的定位和规划，尽快恢复生态湿地蓄洪区的行蓄洪功能和生态保护功能。</p> <p> 　　“总书记的重要指示更加坚定了我们还田于湖、还林于湖、还地于湖的决心。”肥东县委书记孙良鸿说，“我们将加快推进十八联圩生态湿地建设，充分发挥湿地净化水质、维护生物多样性、行蓄洪的功能，为保护治理好巢湖作出应有贡献。”</p> <p> 　　习近平总书记在巢湖大堤罗家疃段考察时，亲切看望慰问了在防汛抗洪救灾斗争中牺牲同志的家属、防汛抗洪一线人员、先进典型代表和参加抗洪抢险的部队官兵，并向全国奋战在防汛抗洪救灾一线的同志们表示诚挚的问候。</p> <p> 　　作为此次汛情最严重的区域之一，合肥市庐江县最多时有4000多名部队官兵、民兵投入防汛抗洪救灾，有力保护了人民群众生命财产安全。“习主席充分肯定部队官兵在防汛抗洪救灾中发挥的重要作用，作为抗洪部队的一员，我倍感骄傲和自豪！”庐江县人武部部长邓世松说，“我们将以习主席重要讲话精神为动力，发扬不怕累苦、不怕疲劳、不怕牺牲的精神斗志，积极投身灾后恢复重建各项工作。”</p> <p> <strong>　　坚持把做实做强做优实体经济作为主攻方向</strong></p> <p> 　　习近平总书记在中国宝武马钢集团考察时指出，要抓住深化国有企业改革和推动长三角一体化发展的重大机遇，加强新材料新技术研发，开发生产更多技术含量高、附加值高的新产品，增强市场竞争力。</p> <p> 　　“我们将发挥技术创新的核心驱动作用，沿着创新这条路毫不动摇地走下去！”中国宝武马钢集团中央研究院马钢技术中心主任张建表示。</p> <p> 　　“在60多年创业过程中，马钢创造了我国钢铁工业发展史上的多项第一，充分证明科技创新是企业发展的不竭动力。”张建说，接下来，马钢将坚持把做实做强做优实体经济作为主攻方向，加强技术研发和科技攻关，提高整体协同创新能力，提升技术创新体系能力，努力在关键核心技术和产品上不断取得新突破。</p> <p> 　　习近平总书记在合肥参观安徽创新馆时指出，安徽要加快融入长三角一体化发展，实现跨越式发展，关键靠创新。要进一步夯实创新的基础，加快科技成果转化，加快培育新兴产业，锲而不舍、久久为功。</p> <p> 　　“贯彻落实总书记重要指示精神，安徽创新馆将进一步抓好科技成果转化工作，创新科技成果转化机制，加快建设安徽科技大市场，推进中国合肥知识产权保护中心建设，打造国内一流的科技成果转化交易中心，以创新推进高质量发展。”安徽创新馆服务管理中心主任陈林表示。</p> <p> 　　“总书记要求推动制造业加速向数字化、网络化、智能化发展，这让我们更加明确了企业发展方向。”安徽大泽环境科技有限公司党支部书记朱秀婷表示，将切实增强使命感，把创新作为企业发展的最大驱动力，坚定不移做实做强做优实体经济。</p> <p> <strong>　　牢固树立以人民为中心的发展思想，扎实推进民生工程</strong></p> <p> 　　习近平总书记在马鞍山市薛家洼生态园考察时强调，要增强爱护长江、保护长江的意识，实现“人民保护长江、长江造福人民”的良性循环，早日重现“一江碧水向东流”的胜景。</p> <p> 　　薛家洼生态园地处长江岸边，长期以来乱搭乱建、污水横流，经过整治，如今已成为百姓亲江亲水亲绿的美丽岸线。薛家洼生态园管理方、马鞍山市中汇物业管理有限公司总经理葛军说：“贯彻落实总书记重要指示，我们要继续保持薛家洼生态园的绿色、洁净、优美，确保一江碧水向东流，让百姓共享良好生态。”</p> <p> 　　铜陵市胥坝乡江心洲，退捕渔民志愿服务队正在长江水面开展清漂作业。“我们住在长江边，喝着长江水长大。共抓长江大保护，长江十年禁渔，造福子孙后代，我们发自内心支持拥护。”胥坝乡群心村党委书记、村委会主任古中举说，村里组建了清漂志愿服务队，退捕渔民几乎全部报名参加，现在活动开展已经常态化。</p> <p> 　　“总书记强调，实施长江十年禁渔计划，要把相关工作做到位，让广大渔民愿意上岸、上得了岸，上岸后能够稳得住、能致富。”古中举介绍，渔民上岸后，经济给补偿，养老有保障，村里积极协调，对短期内有困难的退捕渔民进行针对性帮扶，同时大力发展休闲农业和乡村旅游，让退捕渔民有稳定收入来源，生产生活有奔头。</p> <p> 　　“总书记强调接续推进全面脱贫与乡村振兴有效衔接，推动贫困地区走向全面振兴，这是我们下一步工作的努力方向。”池州市石台县七都镇河口村党总支第一书记李朝阳说，河口村2019年已实现贫困人口清零，“我们组织党员、干部、群众开展大讨论，将在调研论证、广泛征求意见的基础上，制定实施乡村振兴战略工作规划。”</p> <p> 　　“总书记强调要推动社会治理和服务重心向基层下移，完善基层社会治安综合治理，这让我们基层社区工作者深受鼓舞。”合肥市瑶海区胜利路街道党工委书记袁圣钊说，瑶海区通过组建党群议事会、推动机关力量下沉社区等举措，共建共治共享的基层治理格局正在加快形成。</p> <br /> <p> <span id="paper_num">　　《 人民日报 》（ 2020年08月23日 01 版）</span></p> ]]></description>
        </item>
        <item>
            <title><![CDATA[《共产党宣言》中文全译本出版一百周年纪念邮票发行]]></title>
            <link>http://politics.people.com.cn/n1/2020/0823/c1001-31833002.html</link>
            <pubDate>2020-08-23</pubDate>
            <author>人民网</author>
            <description><![CDATA[<p align="center"> <img alt="（图文互动）（1）《共产党宣言》中文全译本出版一百周年纪念邮票发行" src="http://www.people.com.cn/mediafile/pic/BIG/20200823/2/8663679176926672606.jpg" /></p> <p style="text-indent: 2em; text-align: center;"> 《共产党宣言》中文全译本出版一百周年纪念邮票。新华社记者 丁汀 摄</p> <p style="text-indent: 2em;"> 新华社北京8月22日电（记者赵文君）中国邮政22日发行《共产党宣言》中文全译本出版一百周年纪念邮票。邮票1套1枚，面值为1.20元，计划发行数量为750万套。</p> <p align="center"> <img alt="（图文互动）（2）《共产党宣言》中文全译本出版一百周年纪念邮票发行" src="http://www.people.com.cn/mediafile/pic/BIG/20200823/62/36489512611533258.jpg" /></p> <p style="text-indent: 2em; text-align: center;"> 《共产党宣言》中文全译本出版一百周年纪念邮票。新华社记者 丁汀 摄</p> <p style="text-indent: 2em;"> 邮票设计采用素描表现手法，完整展现了《共产党宣言》中文全译本翻译时的场景，生动细致地刻画出陈望道翻译《共产党宣言》时认真忘我的形象，并配以《共产党宣言》中文全译本的封面，同时画面背景还特别布置了复旦大学《共产党宣言》展示馆（陈望道旧居），烘托出邮票的主题，展现出马克思主义真理的伟大力量。此外，同步发布邮票数字化内容，观众可参加答题抽奖活动。</p> ]]></description>
        </item>
        <item>
            <title><![CDATA[中国公共关系协会完成换届]]></title>
            <link>http://politics.people.com.cn/n1/2020/0823/c1001-31832986.html</link>
            <pubDate>2020-08-23</pubDate>
            <author>人民网</author>
            <description><![CDATA[<P>　　新华社北京8月22日电&nbsp;&nbsp;（记者王子铭）中国公共关系协会第六届会员代表大会22日在京召开，选举产生了协会新一届理事会成员和负责人。国新办副主任、中国公共关系协会理事会新任会长郭卫民表示，协会将大力开展国际公共关系领域交流合作，让中国声音越来越洪亮。</P><P>　　据了解，中国公共关系协会是由中宣部、国新办主管的非营利性社会组织，下设学术委员会、政府公共关系委员会、国际与台港澳交流合作委员会等10个专业委员会，旨在进行公共关系理论研究和实践探索的同时，广泛开展国际交流，树立和展示国家形象，不断推动新时代公共关系事业健康发展。</P><P>　　面对新形势，协会如何发挥优势，有效服务外宣工作大局？郭卫民表示，中国公共关系协会是一个大平台，要充分发挥公共关系信息传播、关系协调的专长，在政治、经贸、文化、媒体等多领域创新提供多样的国际公共关系服务，为文化交流、文明互鉴提供行之有效的战略策划、信息咨询和指导，把中国故事讲得越来越精彩，让我国国际形象在世界上越来越闪亮。</P><P>　　中宣部副部长、国新办主任徐麟在会议现场表示，中宣部、国新办作为中国公共关系协会主管部门，希望协会发挥好桥梁纽带作用，汇聚各类资源助力国际传播和对外交流，不断丰富国际公关和对外联络的理念和方式，始终做公共关系领域的引领者、社会治理的促进者、中华文化走出去的推动者。</P> <br><span id='paper_num'>　　《 人民日报 》（ 2020年08月23日 04 版）</span>]]></description>
        </item>
        <item>
            <title><![CDATA[汪洋主持召开全国政协主席会议]]></title>
            <link>http://politics.people.com.cn/n1/2020/0823/c1024-31832975.html</link>
            <pubDate>2020-08-23</pubDate>
            <author>人民网</author>
            <description><![CDATA[<P>　　新华社北京8月22日电&nbsp;&nbsp;政协第十三届全国委员会第四十一次主席会议21日下午在京召开。中共中央政治局常委、全国政协主席汪洋主持会议并讲话。</P><P>　　会议审议通过了关于加强和促进人民政协凝聚共识工作的意见、全国政协组织重大战略性问题研究的工作意见，听取了关于2019年度全国政协协商议政质量评价工作情况的汇报等。</P><P>　　汪洋指出，加强思想政治引领、广泛凝聚共识是新时代人民政协工作的中心环节，制定关于加强和促进人民政协凝聚共识工作的意见，是全面贯彻落实中央政协工作会议精神的重要举措，是发挥人民政协专门协商机构在国家治理体系中作用的有效途径。要不断建立健全凝聚共识工作的制度机制，通过人民政协制度运行、民主程序和有效工作，把党的主张转化为社会各界的共识，努力使人民政协成为坚持和加强党对各项工作领导的重要阵地、用党的创新理论团结教育引导各族各界代表人士的重要平台、在共同思想政治基础上化解矛盾和凝聚共识的重要渠道。</P><P>　　汪洋强调，要充分发挥政协智力密集、位置超脱等优势和政协委员跨界别、跨学科、跨领域的特点，运用好政协参政议政人才库力量，有计划有组织地开展重大战略性问题研究，努力形成一些体现政协研究问题独特视角的成果，更好地服务国家治理体系和治理能力现代化。要开展好协商议政质量评价工作，加强评价成果运用，强化责任委员意识，增强委员履职的积极性、主动性，有针对性地改进工作薄弱环节，努力推动协商议政质量进一步提升。</P><P>　　汪洋强调，当前，主席会议组成人员要带头学好《习近平谈治国理政》第三卷，尤其要结合学习贯彻中共十九大、十九届四中全会精神，认真学习习近平总书记在中央政协工作会议上的讲话精神，通过习近平新时代中国特色社会主义思想学习座谈会、专题学习、读书活动等形式系统学习，加深理解、深入思考，推动加强和改进政协工作走向深入。</P><P>　　会议还研究了其他事项。</P><P>　　全国政协副主席兼秘书长李斌等分别就有关议题作了说明。全国政协副主席张庆黎、刘奇葆、万钢、卢展工、王正伟、马飚、陈晓光、梁振英、夏宝龙、杨传堂、巴特尔、汪永清、苏辉、辜胜阻、刘新成、何维、邵鸿出席会议。</P> <br><span id='paper_num'>　　《 人民日报 》（ 2020年08月23日 02 版）</span>]]></description>
        </item>
        <item>
            <title><![CDATA[扎实做好防汛救灾工作 坚定推进高质量发展——习近平总书记在安徽考察时的重要讲话鼓舞人心]]></title>
            <link>http://politics.people.com.cn/n1/2020/0822/c1001-31832964.html</link>
            <pubDate>2020-08-22</pubDate>
            <author>人民网</author>
            <description><![CDATA[<p> 　　新华社北京8月22日电 <strong>题：扎实做好防汛救灾工作 坚定推进高质量发展——习近平总书记在安徽考察时的重要讲话鼓舞人心</strong></p> <p> 　　新华社记者</p> <p> 　　“做好防汛救灾和灾后恢复重建工作，支持受灾企业复工复产”“要深刻把握发展的阶段性新特征新要求，坚持把做实做强做优实体经济作为主攻方向”“要牢固树立以人民为中心的发展思想，扎实推进民生工程”……</p> <p> 　　习近平总书记近日在安徽考察时的重要讲话极大地鼓舞了广大干部群众的信心。大家表示要进一步解放思想、开拓奋进，为决胜全面建成小康社会再立新功。</p> <p> 　　<strong>做好防汛救灾和灾后恢复重建工作</strong></p> <p> 　　这几天，阜阳市阜南县蒙洼蓄洪区曹集镇利民村西田坡庄台的村民们正忙着补种抢种，有的栽种红薯苗，有的栽种包菜苗。</p> <p> 　　“几天前，习近平总书记到我们这里了解生产恢复情况，指出要因地制宜、抢种补种，尽量把灾害损失降到最低，争取秋季仍然取得好的收成。这对我们是极大的鼓舞，让我们对灾后重建信心十足、干劲十足。”利民村党支部书记郭西军说。</p> <p> 　　郭西军说，目前利民村还有6户尚未脱贫，今年计划采取低保兜底、光伏扶贫等措施，力争全部实现脱贫。下一步，村里将发展规模化种植、养殖等产业，让乡亲们的日子越过越红火。</p> <p> 　　我国南方多地遭遇暴雨洪涝灾害。退水之后，各地争分夺秒抢种补种，生产生活正逐步恢复正常。习近平总书记强调，各级党委和政府要根据国家规定，尽快将相关补偿款落实到位，并出台兜底保障等帮扶措施，确保受灾群众基本生活不受影响。</p> <p> 　　“总书记对受灾群众的关心，让我们心里暖洋洋的。”江西省都昌县芗溪乡的种粮大户万金财说。今年他家200多亩水稻被洪水淹没。就在他一筹莫展的时候，政府送来500多斤种子，并组织农技人员上门开展防灾减灾技术指导。</p> <p> 　　目前，抢种的晚稻已种上，稻田一片绿油油。他说：“相信在党和政府帮助下，我一定能克服困难。”</p> <p> 　　灾后重建，农民要抢农时，企业也需抢市场、抓机遇。</p> <p> 　　洪水刚退，阜南县红亮箱包有限公司的生产线已全部开动。公司负责人王恒亮说，在政府帮助下，企业员工数量从蓄洪前的97人增加到现在的148人，其中近一半是贫困户。“企业不再发愁用工问题，实现了企业经营发展和有劳动能力贫困人口就业增收双赢。”</p> <p> 　　当前，四川盆地、北方多地仍有强降雨，一些地方发生滑坡、泥石流灾害，习近平总书记对防汛救灾工作提出明确要求。</p> <p> 　　“洪水刚退，群众正在清理淤泥。”四川省雅安市雨城区草坝镇镇长廖袁兵说，除了逐步恢复水电气的供应，还必须抓紧时间完成防疫消杀工作。近期四川可能还会比较频繁降雨，绝不能有丝毫松劲和懈怠。</p> <p> 　　“我们一定贯彻落实习近平总书记的要求，继续抓好防汛救灾工作，严防次生灾害，确保人民群众生命财产安全。”廖袁兵说。</p> <p> 　　<strong>做实做强做优实体经济</strong></p> <p> 　　今年以来，罕见疫情和世界经济衰退等给我国经济带来严峻考验。越是面对风险挑战，越要把握大局大势。</p> <p> 　　“要深刻把握发展的阶段性新特征新要求，坚持把做实做强做优实体经济作为主攻方向”。习近平总书记的重要讲话让中国宝武马钢股份特钢公司党委书记曹天明感到振奋：“制造业是经济发展的根基，钢铁则是制造业的基础，我们要把基础夯实，把核心技术掌握好。”</p> <p> 　　“总书记对马钢今后的发展提出了更高期望，我们备受鼓舞。”曹天明说，下一步要着重攻克高端钢材“卡脖子”难题，开发生产更多技术含量高、附加值高的新产品，努力把马钢特钢建成一流的精品优特钢基地。</p> <p> 　　做实做强做优实体经济，推动制造业加速向数字化、网络化、智能化发展，是应对挑战的关键之举，更是把握主动的必然选择。</p> <p> 　　屏幕上订单、物料等信息实时更新，云平台可以实现供应链可视化查看，订单交付达成率比行业平均水平高15%……在联想合肥联宝科技工厂，数字技术对制造业的改变清晰可见。</p> <p> 　　联想集团董事长杨元庆说：“智能技术的‘赋能’增强了实体经济的韧性。今后我们要把智能定义在研、产、供、销、服全价值链环节，筑牢数字基础、升级解决方案，和供应链上的企业共享数字机遇。”</p> <p> 　　国内外形势正在发生深刻复杂变化。习近平总书记指出，要牢牢把握扩大内需这个战略基点，努力探索形成新发展格局的有效路径。</p> <p> 　　今年以来，地处重庆两江新区的上汽依维柯红岩商务车有限公司抓住国内基建市场升温机遇，在既有重型卡车基础上，挖掘中低吨位的城市洒水车、乡村清运车等新市场，上半年产值同比增加45%。</p> <p> 　　“外部市场低迷更加凸显立足国内、扩大内需的重要。”重庆市商务委员会主任张智奎说，我们要贯彻落实习近平总书记重要讲话精神，在产品认证、市场准入、金融支持等方面加大帮扶力度，打造更多内销平台，助力企业开拓国内市场。</p> <p> 　　<strong>牢固树立以人民为中心的发展思想</strong></p> <p> 　　长江马鞍山段东岸的薛家洼生态园内，碧水荡漾，绿树成荫，沿江游道不时有游客驻足观赏，拍照留念。</p> <p> 　　马鞍山市雨山区区委书记左年文说，薛家洼区域原有3家非法码头、7家散乱污企业和养殖场，还停靠着200多条渔船，生态环境问题突出，群众反映强烈。自2019年起，当地开始进行长江岸线综合整治，如今这里已成为百姓亲江亲水亲绿的美丽岸线。</p> <p> 　　“这真是一件为民的实事好事。现在亲戚朋友来马鞍山，一定会带他们来这里看看。”正在生态园游玩的市民褚文伟说。</p> <p> 　　习近平总书记一直关心长江生态环境，强调要增强爱护长江、保护长江的意识，实现“人民保护长江、长江造福人民”的良性循环。</p> <p> 　　“总书记说要让广大渔民愿意上岸、上得了岸，上岸后能够稳得住、能致富。这让我们对今后的生活充满信心。”曾在洞庭湖捕鱼多年的渔民胡存库和妻子今年从“捕鱼人”变成了“护鱼人”。夫妻二人在系统培训后，成为洞庭湖的“守护者”。他每天出去巡湖，每月能有3000元收入。</p> <p> 　　目前湖南省岳阳市已有近200名“护鱼人”。岳阳市农业农村局副局长高四新介绍，这样一方面可以拓宽捕捞渔民转产就业渠道，一方面还可以补充管护力量，构建渔业资源群防群护的管理体系，更好保护生态环境。</p> <p> 　　就业是民生之本，保就业就要保市场主体。</p> <p> 　　“总书记要求出台更多援企、减负、稳岗、扩就业的支持性措施，这让我们企业很受鼓舞，坚定了发展信心。”安徽英力电子科技股份有限公司副总经理李浩说。今年当地政府以实际行动帮扶企业，联系协调消毒水等防疫物资，帮助招工400多人，解决了缺工难题。</p> <p> 　　“今年前7个月企业产值近4亿元，而去年同期才2亿多元。”李浩说，公司投资新建的5万平方米厂房已经封顶，预计10月将投入运行，届时可再带动500人就业。</p> ]]></description>
        </item>
        <item>
            <title><![CDATA[牢记嘱托积极作为 加快建设美好安徽——习近平总书记在安徽考察引起当地干部群众热烈反响]]></title>
            <link>http://politics.people.com.cn/n1/2020/0822/c1001-31832953.html</link>
            <pubDate>2020-08-22</pubDate>
            <author>人民网</author>
            <description><![CDATA[<p style="text-indent: 2em;"> <strong>央视网消息</strong>（新闻联播）：习近平总书记在安徽考察期间，深入防汛救灾一线、农村、企业等，看望慰问受灾群众和防汛救灾一线人员，就统筹推进常态化疫情防控和经济社会发展工作、加强防汛救灾和灾后恢复重建、推进长三角一体化发展、谋划“十四五”时期经济社会发展进行调研。总书记的到来，让安徽广大干部群众备受鼓舞，大家表示，要牢记嘱托、积极作为，在加快建设美好安徽上取得新的更大进展。</p> <p style="text-indent: 2em;"> 考察第一站，习近平总书记来到了阜阳市阜南县王家坝闸，这里有千里淮河“第一闸”之称。今年7月20日，王家坝闸时隔13年再次开闸泄洪，有效发挥了错峰减压功能。现在，淮河干流水位已全线退至警戒水位以下。总书记指出，要把治理淮河的经验总结好，认真谋划“十四五”时期淮河治理方案。</p> <p style="text-indent: 2em;"> 对防汛救灾工作，总书记高度重视；对灾区群众，总书记十分牵挂。这次考察，他专程来到蒙洼蓄洪区西田坡庄台看望乡亲们。洪水退后，庄台附近农田里一派忙碌。总书记沿着田埂走进农田深处，向正在劳作的乡亲们了解生产恢复情况。</p> <p style="text-indent: 2em;"> 为把灾害损失降到最低，当地政府不仅为大家及时发放粮油蔬菜，还免费提供种子化肥，抢种补种正在抓紧进行。</p> <p style="text-indent: 2em;"> 今年入汛以来，巢湖水位多次突破历史极值，在合肥市肥东县十八联圩生态湿地蓄洪区巢湖大堤罗家疃段，总书记仔细察看巢湖水势水情。他指出，要全面落实防汛救灾各项工作，确保安全度汛，确保人民群众生命财产安全。</p> <p style="text-indent: 2em;"> 马鞍山市地处长江下游，总书记在这里考察长江岸线综合整治和生态环境保护修复、长江十年禁渔等工作落实情况。他强调，把生态保护好，把生态优势发挥出来，才能实现高质量发展。这两年，马鞍山市整治散乱污企业700多家，拆除非法码头150多座，并为6000多名上岸渔民安排就业。落实总书记的要求，下一步，马鞍山市将深化沿岸城镇污水垃圾、化工污染等专项治理，完成长江干流排污口整改，早日重现“一江碧水向东流”的胜景。</p> <p style="text-indent: 2em;"> 作为长三角一体化重大合作项目，中国宝武钢铁与马钢在去年9月实施战略重组。考察中，总书记走进优质合金棒材车间，了解生产情况。生产线投产一年多来，已成功开发出120多个产品，主要用于汽车制造、轨道交通零部件、能源装备等领域。</p> <p style="text-indent: 2em;"> 疫情以来，马钢主动调整产品结构和营销模式，上半年产量和营收同比实现“双升”。总书记勉励大家，要加强新材料新技术研发，增强市场竞争力。</p> <p style="text-indent: 2em;"> 安徽广大干部群众表示，要进一步解放思想、开拓奋进，知重负重、攻坚克难，为全面建成小康社会、开启全面建设社会主义现代化国家新征程贡献更大力量。</p> ]]></description>
        </item>
        <item>
            <title><![CDATA[风劲潮涌奋楫先 习近平为加快建设美好安徽指明方向]]></title>
            <link>http://politics.people.com.cn/n1/2020/0822/c1001-31832921.html</link>
            <pubDate>2020-08-22</pubDate>
            <author>彭心韫 宋子节</author>
            <description><![CDATA[<p style="text-indent: 2em;"> 8月18日至21日，中共中央总书记、国家主席、中央军委主席习近平在安徽省考察。观汛情、看复工、溯历史、瞻未来、察时势、谋长远，行到江淮紧要地，一枝一叶总关情。</p> <p style="text-indent: 2em;"> <strong>淮河畔，再次阐释“人民至上”的深沉涵义</strong></p> <p style="text-indent: 2em; text-align: center;"> <img alt="" desc="8月18日至21日，中共中央总书记、国家主席、中央军委主席习近平在安徽省考察。这是18日下午，习近平在阜阳市阜南县王家坝闸考察，了解安徽省防汛工作及王家坝开闸分洪情况。 新华社记者 王晔 摄" src="/NMediaFile/2020/0822/MAIN202008221542000537413126278.jpg" style="width: 600px; height: 430px;" /></p> <p class="desc" style="text-align: center;"> 8月18日至21日，中共中央总书记、国家主席、中央军委主席习近平在安徽省考察。这是18日下午，习近平在阜阳市阜南县王家坝闸考察，了解安徽省防汛工作及王家坝开闸分洪情况。 新华社记者 王晔 摄</p> <p style="text-indent: 2em;"> 特殊之年，汛情牵动人心。8月18日，习近平首先来到被视为中国地理南北分界线和防汛“风向标”的淮河。考察的第一站，就是被称为千里淮河“第一闸”的王家坝闸。</p> <p style="text-indent: 2em;"> 这一天，习近平顶着炎炎烈日，走进田间地头，看得细、问得深，听到乡亲们说“电没断、水照供、生活用品有人送”时，习近平说：“我一直牵挂灾区的群众，看到乡亲们生产生活都有着落、有希望，我的心就踏实。”</p> <p style="text-indent: 2em;"> 7月20日8时30分，王家坝闸接到国家防总开闸蓄洪的命令。从接到撤离指令，到蓄洪区180平方公里内非安全区人员全部完成转移安置，前后只用了7个小时。截至7月23日13时闭闸，蓄洪区蓄水3.75亿立方米，相当于吞进了26个杭州西湖的年蓄水量。</p> <p style="text-indent: 2em;"> 就在习近平探访淮河这一天，8月18日0时，淮河干流水位全线退至警戒水位以下。</p> <p style="text-indent: 2em;"> 淮河安澜，王家坝闸厥功至伟。</p> <p style="text-indent: 2em;"> 7月17日，中共中央政治局常委会召开会议，为全面提高灾害防御能力指明路径——坚持以防为主、防抗救相结合，把重大工程建设、重要基础设施补短板、城市内涝治理、加强防灾备灾体系和能力建设等纳入“十四五”规划中统筹考虑。</p> <p style="text-indent: 2em;"> 而望着眼前这条淮河，习近平有着更远的思虑——新时代的“大禹治水”，更要插上“科技之翼”。</p> <p style="text-indent: 2em;"> 北斗卫星“通风报信”、两栖式环保疏浚船高效清淤港渠、无人机深入台风现场精准确定灾情、水上救援机器人快速施救……从天上到地下，从空中到水中，科技力量几乎遍布防汛救灾每个角落。</p> <p style="text-indent: 2em;"> 在王家坝防汛抗洪展厅，习近平详细了解淮河治理历史和淮河流域防汛抗洪工作情况，他强调，要把治理淮河的经验总结好，认真谋划“十四五”时期淮河治理方案。</p> <p style="text-indent: 2em;"> 考察第一天，淮河畔，习近平再次阐释“人民至上”四个字的深沉涵义。考察期间，习近平到红亮箱包有限公司了解就业扶贫和防止因灾致贫返贫情况；到西田坡庄台察看村容村貌；到马鞍山长江岸线探访综合整治和生态环境保护修复情况；到肥东县十八联圩生态湿地蓄洪区巢湖大堤罗家疃段考察巢湖水势水情……关切而忙碌的脚印留在了安徽的土地上，百姓幸福生活留在了习近平的心间。</p> <p style="text-indent: 2em;"> 正如他曾经说过的，防灾减灾救灾事关人民生命财产安全，事关社会和谐稳定，是衡量执政党领导力、检验政府执行力、评判国家动员力、体现民族凝聚力的一个重要方面。</p> <p style="text-indent: 2em;"> 汛期仍未结束，防汛不可放松。中国在应对疫情大考的同时，也必定会交出防汛救灾的合格答卷。</p> <p style="text-indent: 2em;"> <strong>巢湖岸，跨越式发展关键是创新为先</strong></p> <p style="text-indent: 2em; text-align: center;"> <img alt="" desc="8月18日至21日，中共中央总书记、国家主席、中央军委主席习近平在安徽省考察。这是19日下午，习近平在合肥市安徽创新馆参观，了解安徽科技创新和发展新兴产业情况。 新华社记者 燕雁 摄" src="/NMediaFile/2020/0822/MAIN202008221543000265238183540.jpg" style="width: 600px; height: 439px;" /></p> <p class="desc" style="text-align: center;"> 8月18日至21日，中共中央总书记、国家主席、中央军委主席习近平在安徽省考察。这是19日下午，习近平在合肥市安徽创新馆参观，了解安徽科技创新和发展新兴产业情况。 新华社记者 燕雁 摄</p> <p style="text-indent: 2em;"> 巢湖北岸，安徽创新馆。</p> <p style="text-indent: 2em;"> 8月19日下午，习近平来到这里，了解安徽省科技创新和新兴产业发展情况。作为全国首座以创新为主题的场馆，安徽创新馆已成为集成果展示、要素聚集、研发转化等功能于一体的重要平台。</p> <p style="text-indent: 2em;"> 习近平指出，安徽要加快融入长三角一体化发展，实现跨越式发展，关键靠创新。要进一步夯实创新的基础，加快科技成果转化，加快培育新兴产业，锲而不舍、久久为功。</p> <p style="text-indent: 2em;"> 两次赴合肥考察，习近平都关注了“创新”。2016年4月26日，习近平在合肥考察中国科技大学、中科大先进技术研究院时强调，当今世界科技革命和产业变革方兴未艾，我们要增强使命感，把创新作为最大政策，奋起直追、迎头赶上。</p> <p style="text-indent: 2em;"> 从《深化科技体制改革实施方案》提出143项改革措施，为科技体制改革画出“施工图”，到《促进科技成果转移转化行动方案》《关于深化科技奖励制度改革的方案》等一系列重磅文件出台……打通科技创新与经济社会发展的通道，最大限度激发科技第一生产力、创新第一动力的巨大潜能，习近平为我国科技创新把舵定向。</p> <p style="text-indent: 2em;"> 19日，习近平来到中国宝武马钢集团，了解企业生产经营情况，察看重点产品展示。在这里，他强调要抓住深化国有企业改革和推动长三角一体化发展的重大机遇，加强新材料新技术研发，开发生产更多技术含量高、附加值高的新产品，增强市场竞争力。</p> <p style="text-indent: 2em;"> 先进制造业奋力向前，传统制造业加速蝶变。创新，是传统产业转型升级的重要支点，也是提高产业链供应链稳定性的关键保障。</p> <p style="text-indent: 2em;"> 此次考察期间，习近平强调，要深刻把握发展的阶段性新特征新要求，坚持把做实做强做优实体经济作为主攻方向，一手抓传统产业转型升级，一手抓战略性新兴产业发展壮大，推动制造业加速向数字化、网络化、智能化发展，提高产业链供应链稳定性和现代化水平。</p> <p style="text-indent: 2em;"> 如今，面对国际国内各种不利因素的长期性、复杂性，无论风云如何变幻，对中国来说，“最重要的还是做好我们自己的事情”。正如两年前习近平在黑龙江考察时所强调的，“国际上，先进技术、关键技术越来越难以获得，单边主义、贸易保护主义上升，逼着我们走自力更生的道路，这不是坏事，中国最终还是要靠自己。”</p> <p style="text-indent: 2em;"> <strong>长三角，在一体化发展中把握机遇、顺势而上</strong></p> <p style="text-indent: 2em; text-align: center;"> <img alt="" desc="8月18日至21日，中共中央总书记、国家主席、中央军委主席习近平在安徽省考察。这是19日上午，习近平在马鞍山市中国宝武马钢集团优质合金棒材车间考察，了解企业复工复产和经营情况。新华社记者 王晔 摄" src="/NMediaFile/2020/0822/MAIN202008221543000446069690624.jpg" style="width: 600px; height: 459px;" /></p> <p class="desc" style="text-align: center;"> 8月18日至21日，中共中央总书记、国家主席、中央军委主席习近平在安徽省考察。这是19日上午，习近平在马鞍山市中国宝武马钢集团优质合金棒材车间考察，了解企业复工复产和经营情况。新华社记者 王晔 摄</p> <p style="text-indent: 2em;"> 天风浩荡长三角，披襟向洋奋楫先。如今，江海奔涌的长三角，正充满生机与活力。</p> <p style="text-indent: 2em;"> 在中国宝武马钢集团优质合金棒材车间，习近平勉励马钢在长三角一体化发展中把握机遇、顺势而上，特别是要把自身改革发展同长三角一体化发展有机结合衔接，力争在长三角一体化发展中不断发展壮大自己，也为长三角一体化发展作出自己的贡献。</p> <p style="text-indent: 2em;"> 宝武与马钢的重组，正是安徽积极融入长三角一体化发展的一个缩影。2020年1月，《安徽省实施长江三角洲区域一体化发展规划纲要行动计划》公布，明确“高质量推进‘一圈五区’建设，推动区域协调发展”“强化创新能力建设，合力打造科技创新共同体”“积极承接产业转移，推动制造业高质量发展”等9个方面重点任务。</p> <p style="text-indent: 2em;"> 时间倒回至2016年4月。江淮四月，习近平视察安徽。从革命老区金寨县到凤阳县小岗村，从深山农家小院到高校科研机构……习近平强调，全面落实“十三五”规划纲要，加强改革创新开创发展新局面。</p> <p style="text-indent: 2em;"> 四年多来，安徽着力推进五大发展行动计划，全面建成小康社会和现代化五大发展美好安徽建设取得新的重大进展。特别是大力实施长三角一体化发展战略，全面推进城乡区域、科创产业、基础设施、生态环境、公共服务、体制机制等领域的一体化，区域发展整体效能不断提升。</p> <p style="text-indent: 2em;"> 如今，安徽正打造具有重要影响力的科技创新策源地、新兴产业聚集地、绿色发展样板区，推动制造业高质量发展，推进城乡深度融合，建设长三角联通中西部的重要开放枢纽。</p> <p style="text-indent: 2em;"> 蓝图绘制，航向锚定。如今，长三角一体化正从夯基垒台“大写意”阶段进入立柱架梁的“工笔画”阶段：</p> <p style="text-indent: 2em;"> 2018年，在首届中国国际进口博览会上，习近平宣布“支持长江三角洲区域一体化发展并上升为国家战略”。</p> <p style="text-indent: 2em;"> 2019年12月，《长江三角洲区域一体化发展规划纲要》正式公布。《纲要》强调通过推动长三角中心区一体化发展，带动长三角其他地区加快发展，引领长江经济带开放发展。</p> <p style="text-indent: 2em;"> 此次考察期间，习近平为长三角发展再作部署——要紧扣一体化和高质量两个关键词，深入推进重点领域一体化建设，推进长三角一体化发展。</p> <p style="text-indent: 2em;"> 现如今，长三角地区风头正盛——安徽不断提升区域发展的整体效能和核心竞争力；上海以长三角生态绿色一体化发展示范区、中国（上海）自由贸易试验区临港新片区、虹桥商务区为重要抓手加强跨区域分工合作；江苏正加快省内全域“六个一体化”，在推动一体化中高质量发展；浙江正举全省之力推进形成示范区先行探索、中心区率先融入、多板块协同联动、全省域集成推进的一体化发展格局……</p> <p style="text-indent: 2em;"> “把长三角一体化发展的文章做好，使之成为我国发展强劲活跃的增长极。”这是习近平对长三角一体化发展的殷切期望，也将是长三角一体化发展的美好未来！&nbsp;</p> ]]></description>
        </item>
        <item>
            <title><![CDATA[广州市原常务副市长苏泽群接受审查调查]]></title>
            <link>http://politics.people.com.cn/n1/2020/0822/c1001-31832918.html</link>
            <pubDate>2020-08-22</pubDate>
            <author>人民网</author>
            <description><![CDATA[<p style="text-indent: 2em;"> 人民网北京8月22日电 据广东省纪委监委消息，广州市原市委常委、常务副市长苏泽群涉嫌严重违纪违法，目前正接受广东省纪委监委纪律审查和监察调查。</p> <p style="text-indent: 2em;"> 苏泽群简历</p> <p style="text-indent: 2em;"> 苏泽群，男，1953年1月出生，汉族，广东中山人，在职研究生学历，1971年8月参加工作，1975年2月加入中国共产党。</p> <p style="text-indent: 2em;"> 1986年6月任省委办公厅综合处副处长；</p> <p style="text-indent: 2em;"> 1987年12月任省委办公厅正处级干部；</p> <p style="text-indent: 2em;"> 1990年5月任省委政策研究室副主任；</p> <p style="text-indent: 2em;"> 1991年4月任珠海市委常委；</p> <p style="text-indent: 2em;"> 1992年6月任珠海市委常委，斗门县委书记；</p> <p style="text-indent: 2em;"> 1997年4月任江门市委副书记；</p> <p style="text-indent: 2em;"> 1997年10月任江门市委副书记，江门市政府副市长、代市长，市长；</p> <p style="text-indent: 2em;"> 1999年1月任江苏省扬州市委副书记、扬州市政府市长；</p> <p style="text-indent: 2em;"> 2001年8月任广州市政府党组成员、副市长；</p> <p style="text-indent: 2em;"> 2006年12月任广州市委常委，广州市政府党组成员、副市长；</p> <p style="text-indent: 2em;"> 2007年1月任广州市委常委，广州市政府党组副书记、副市长；</p> <p style="text-indent: 2em;"> 2010年2月任广州市委常委，广州市政府党组副书记、常务副市长；</p> <p style="text-indent: 2em;"> 2011年12月任广州市政府党组副书记、常务副市长；</p> <p style="text-indent: 2em;"> 2012年1月任省实施《珠江三角洲地区改革发展规划纲要（2008-2020）》领导小组专职副组长；</p> <p style="text-indent: 2em;"> 2014年12月退休。</p> ]]></description>
        </item>
        <item>
            <title><![CDATA[国家林草局就天然林保护问题约谈三区县负责人]]></title>
            <link>http://politics.people.com.cn/n1/2020/0822/c1001-31832909.html</link>
            <pubDate>2020-08-22</pubDate>
            <author>人民网</author>
            <description><![CDATA[<p> 　　新华社北京8月22日电（记者胡璐）国家林业和草原局21日集体约谈了在2019年天然林保护核查中存在突出问题的内蒙古赛罕区、宁夏原州区、河北赤城县三区县人民政府负责人。</p> <p> 　　这是记者22日从国家林草局了解到的。约谈会上通报了赛罕区天然林管护任务未落实、数据造假，原州区生态效益补偿资金未兑现、侵害林农利益，以及赤城县破坏国家公益林等问题。</p> <p> 　　国家林草局副局长李树铭在约谈中要求存在问题县区要把问题彻底整改到位。已经开始整改的，要严格对照国家相关规定和标准，整改不到位不收兵；还没有整改或短期内不能完成整改任务的，要在规定时限内，确保整改到位，整改有效。</p> <p> 　　此外，要严肃问责追责。对发生的问题，要彻查源头责任。对搞表面整改、敷衍整改、虚假整改的要加大追责力度，该调减任务和资金的要削减，该约谈上一级政府的要坚决约谈警示。还要以案促改。必须深刻反思和主动排查制度隐患和薄弱环节，落实标本兼治，建立“早发现、早制止、严查处”的工作制度，坚决杜绝此类问题再次发生。</p> <p> 　　三区县人民政府负责人分别作表态发言，对所有通报问题立即全力整改。</p> ]]></description>
        </item>
        <item>
            <title><![CDATA[习近平主持召开扎实推进长三角一体化发展座谈会并发表重要讲话]]></title>
            <link>http://politics.people.com.cn/n1/2020/0822/c1024-31832892.html</link>
            <pubDate>2020-08-22</pubDate>
            <author>人民网</author>
            <description><![CDATA[<p style="text-align: center;"> <strong>习近平在扎实推进长三角一体化发展座谈会上强调</strong></p> <p style="text-align: center;"> <strong>紧扣一体化和高质量抓好重点工作</strong></p> <p style="text-align: center;"> <strong>推动长三角一体化发展不断取得成效</strong></p> <p style="text-align: center;"> <strong>韩正出席并讲话</strong></p> <p style="text-indent: 2em;"> 新华社合肥8月22日电 中共中央总书记、国家主席、中央军委主席习近平20日在合肥主持召开扎实推进长三角一体化发展座谈会并发表重要讲话。他强调，要深刻认识长三角区域在国家经济社会发展中的地位和作用，结合长三角一体化发展面临的新形势新要求，坚持目标导向、问题导向相统一，紧扣一体化和高质量两个关键词抓好重点工作，真抓实干、埋头苦干，推动长三角一体化发展不断取得成效。</p> <p style="text-indent: 2em;"> 中共中央政治局常委、国务院副总理、推动长三角一体化发展领导小组组长韩正出席座谈会并讲话。</p> <p style="text-indent: 2em;"> 习近平在安徽调研期间专门召开这次座谈会。座谈会上，上海市委书记李强、江苏省委书记娄勤俭、浙江省委书记车俊、安徽省委书记李锦斌、推动长三角一体化发展领导小组副组长何立峰先后发言，结合各自实际、从不同角度介绍了工作情况，谈了意见和建议。</p> <p style="text-indent: 2em;"> 在听取大家发言后，习近平发表了重要讲话。他指出，长三角一体化发展战略实施一年多以来，三省一市和有关部门贯彻落实党中央决策部署，工作抓得紧，有不少亮点。一是对党中央战略意图领会到位，把长三角一体化发展放在国家区域发展总体战略全局中进行统筹谋划，扣紧了全国发展强劲活跃增长极、高质量发展样板区、率先基本实现现代化引领区、区域一体化发展示范区、改革开放新高地的战略定位。二是创新方式方法，围绕重点领域和重点区域进行突破，以点带面加快一体化进程。三是战略实施成果已经显现，规划政策体系“四梁八柱”初步构建，多层次工作机制发挥实效，在这次疫情防控和恢复经济过程中，一体化机制和互联互通基础设施发挥了作用。总的来说，长三角一体化发展新局面正在形成。这说明，党中央决策部署是正确的，各方面落实是有力的。</p> <p style="text-indent: 2em;"> 习近平强调，面对严峻复杂的形势，要更好推动长三角一体化发展，必须深刻认识长三角区域在国家经济社会发展中的地位和作用。第一，率先形成新发展格局。在当前全球市场萎缩的外部环境下，我们必须集中力量办好自己的事，发挥国内超大规模市场优势，加快形成以国内大循环为主体、国内国际双循环相互促进的新发展格局。长三角区域要发挥人才富集、科技水平高、制造业发达、产业链供应链相对完备和市场潜力大等诸多优势，积极探索形成新发展格局的路径。第二，勇当我国科技和产业创新的开路先锋。当前，新一轮科技革命和产业变革加速演变，更加凸显了加快提高我国科技创新能力的紧迫性。上海和长三角区域不仅要提供优质产品，更要提供高水平科技供给，支撑全国高质量发展。第三，加快打造改革开放新高地。近来，经济全球化遭遇倒流逆风，越是这样我们越是要高举构建人类命运共同体旗帜，坚定不移维护和引领经济全球化。长三角区域一直是改革开放前沿。要对标国际一流标准改善营商环境，以开放、服务、创新、高效的发展环境吸引海内外人才和企业安家落户，推动贸易和投资便利化，努力成为联通国际市场和国内市场的重要桥梁。</p> <p style="text-indent: 2em;"> 习近平指出，实施长三角一体化发展战略要紧扣一体化和高质量两个关键词，以一体化的思路和举措打破行政壁垒、提高政策协同，让要素在更大范围畅通流动，有利于发挥各地区比较优势，实现更合理分工，凝聚更强大的合力，促进高质量发展。</p> <p style="text-indent: 2em;"> 第一，推动长三角区域经济高质量发展。三省一市要在抓好常态化疫情防控的前提下，落实好党中央出台的各项政策，在扎实做好“六稳”工作、全面落实“六保”任务上走在全国前列。要确保各项纾困措施直达基层、直接惠及市场主体，引导金融资本重点支持制造业和中小微企业。要发挥数字经济优势，加快产业数字化、智能化转型，提高产业链供应链稳定性和竞争力。要加快推进重大项目建设，释放有效投资需求。</p> <p style="text-indent: 2em;"> 第二，加大科技攻关力度。创新主动权、发展主动权必须牢牢掌握在自己手中。三省一市要集合科技力量，聚焦集成电路、生物医药、人工智能等重点领域和关键环节，尽早取得突破。要支持一批中小微科技型企业创新发展。</p> <p style="text-indent: 2em;"> 第三，提升长三角城市发展质量。长三角区域城市开发建设早、旧城区多，改造任务很重，这件事涉及群众切身利益和城市长远发展，再难也要想办法解决。同时，不能一律大拆大建，要注意保护好历史文化和城市风貌，避免“千城一面、万楼一貌”。要坚决防止借机炒作房地产，毫不动摇坚持房子是用来住的、不是用来炒的定位，落实长效机制，确保房地产市场平稳健康发展。</p> <p style="text-indent: 2em;"> 第四，增强欠发达区域高质量发展动能。一体化的一个重要目的是要解决区域发展不平衡问题。发展落差往往是发展空间。有关部门要针对欠发达地区出台实施更精准的举措，推动这些地区跟上长三角一体化高质量发展步伐。海纳百川，有容乃大。不同地区的经济条件、自然条件不均衡是客观存在的，如城市和乡村、平原和山区、产业发展区和生态保护区之间的差异，不能简单、机械地理解均衡性。解决发展不平衡问题，要符合经济规律、自然规律，因地制宜、分类指导，承认客观差异，不能搞一刀切。</p> <p style="text-indent: 2em;"> 第五，推动浦东高水平改革开放。今年是上海浦东开发开放30周年，支持浦东在改革系统集成协同高效、高水平制度型开放、增强配置全球资源能力、提升城市现代化治理水平等方面先行先试、积极探索、创造经验，对上海以及长三角一体化高质量发展乃至我国社会主义现代化建设具有战略意义。要继续做好上海自由贸易试验区临港新片区建设工作，充分发挥试验田作用。要抓好上海国际金融中心建设，支持长三角和全国经济高质量发展。</p> <p style="text-indent: 2em;"> 第六，夯实长三角地区绿色发展基础。长三角地区是长江经济带的龙头，不仅要在经济发展上走在前列，也要在生态保护和建设上带好头。要把保护修复长江生态环境摆在突出位置，狠抓生态环境突出问题整改，推进城镇污水垃圾处理，加强化工污染、农业面源污染、船舶污染和尾矿库治理。要推进环太湖地区城乡有机废弃物处理利用，形成系列配套保障措施，为长三角地区生态环境共保联治提供借鉴，为全国有机废弃物处理利用作出示范。长江禁渔是为全局计、为子孙谋的重要决策。沿江各省市和有关部门要加强统筹协调，细化政策措施，压实主体责任，保障退捕渔民就业和生活。要强化执法监管，严厉打击非法捕捞行为，务求禁渔工作取得扎实成效。</p> <p style="text-indent: 2em;"> 第七，促进基本公共服务便利共享。要多谋民生之利、多解民生之忧，在一体化发展中补齐民生短板。三省一市要结合这次新冠肺炎疫情防控的经验，利用长三角地区合作机制，建立公共卫生等重大突发事件应急体系，强化医疗卫生物资储备。要推进实施统一的基本医疗保险政策，有计划逐步实现药品目录、诊疗项目、医疗服务设施目录的统一。要探索以社会保障卡为载体建立居民服务“一卡通”，在交通出行、旅游观光、文化体验等方面率先实现“同城待遇”。同时，要在补齐城乡基层治理短板、提高防御自然灾害能力上下功夫、见实效。</p> <p style="text-indent: 2em;"> 习近平强调，要提高党把方向、谋大局、定政策、促改革的能力和定力，为长三角一体化发展提供坚强政治保障。要在一体化发展战略实施的过程中发现人才、培育人才、使用人才。要坚持把政治标准作为第一标准，确保干部队伍政治上信得过、靠得住、能放心。要深化干部制度改革，推动形成能者上、优者奖、庸者下、劣者汰的正确导向。要探索建立同长三角一体化发展相适应的干部交流机制。要加强企业党组织规范化建设，发挥党组织在服务企业决策、开拓市场、革新技术、提高效益等方面的作用，把党的政治优势、组织优势转化为企业发展优势。要注重在非公有制经济组织中发展党员，做好党员教育管理工作，引导他们发挥先锋模范作用。</p> <p style="text-indent: 2em;"> 习近平指出，长三角一体化发展不是一日之功，我们既要有历史耐心，又要有只争朝夕的紧迫感，既谋划长远，又干在当下。领导小组要把好大方向、大原则的关，确保党中央决策部署落实到位。三省一市和有关部门要按照党中央决策部署，勇于担当，主动作为，大胆突破。要从实际出发，制定“十四五”时期长三角一体化发展规划实施方案，不断取得更加丰硕的成果。</p> <p style="text-indent: 2em;"> 韩正在讲话中表示，要深入学习领会习近平总书记重要战略思想，紧扣一体化和高质量两个关键词，推进长三角一体化发展取得更大成效。要着力打造全国高质量发展样板区，扎实做好“六稳”工作，全面落实“六保”任务，保持经济稳定运行，加快产业优化升级。要着力推进高质量创新，集中突破一批关键核心技术，协同推进原始创新、技术创新和产业创新，形成科技创新和制造业研发高地。要着力推动高水平开放，促进自由贸易试验区高质量发展，打造高水平开放平台，完善市场化、法治化、国际化营商环境。要着力强化高效协同，完善一体化体制机制，加强生态环境共保联治，促进基本公共服务便利共享。</p> <p style="text-indent: 2em;"> 丁薛祥、刘鹤、陈希、王勇以及中央和国家机关有关部门负责同志、有关省市负责同志参加座谈会。</p> ]]></description>
        </item>
        <item>
            <title><![CDATA[习近平主持召开扎实推进长三角一体化发展座谈会并发表重要讲话]]></title>
            <link>http://politics.people.com.cn/n1/2020/0822/c1024-31832868.html</link>
            <pubDate>2020-08-22</pubDate>
            <author>人民网</author>
            <description><![CDATA[<p> 　　中共中央总书记、国家主席、中央军委主席习近平20日在合肥主持召开扎实推进长三角一体化发展座谈会并发表重要讲话。他强调，要深刻认识长三角区域在国家经济社会发展中的地位和作用，结合长三角一体化发展面临的新形势新要求，坚持目标导向、问题导向相统一，紧扣一体化和高质量两个关键词抓好重点工作，真抓实干、埋头苦干，推动长三角一体化发展不断取得成效。</p> ]]></description>
        </item>
        <item>
            <title><![CDATA[脱贫攻坚战场立新功]]></title>
            <link>http://politics.people.com.cn/n1/2020/0822/c1001-31832846.html</link>
            <pubDate>2020-08-22</pubDate>
            <author>本报记者 万秀斌 黄 娴</author>
            <description><![CDATA[<p> 　　“不愧当过兵，做事总有军人样！”说起村支书韦俊，贵州省安顺市经开区幺铺镇磊跨村村民赞不绝口。韦俊是一名退役军人，担任村支书两年来，带领村民将贫穷落后的村子，发展成远近闻名的乡村治理示范村。</p> <p> 　　在安顺，有一群像韦俊一样的退役军人奋战在乡村一线——2018年以来，安顺市为充实基层干部队伍，选拔、推荐优秀退役军人担任村支书、村委会主任和村两委委员。目前，全市共有709名退役军人村干部奋战在519个村，成为农村基层党组织带头人和决战脱贫攻坚、决胜全面小康的“领头羊”。</p> <p> <strong>　　“和乡亲们一起把脱贫这块硬骨头啃下来”</strong></p> <p> 　　从产业发展到乡村治理，在安顺各地农村，退役军人们在脱贫攻坚的新战场上彰显军人本色，发挥光和热。</p> <p> 　　夏日的安顺市西秀区旧州镇茶岭村，茶树满山、蔬菜满田，村民正将地里的茄子、黄瓜、西红柿分拣打包，装车运走。“以前蔬菜都是种来自己吃，没想过还能发展成这么大规模。”正在蔬菜基地劳作的村民宋各妹感慨。</p> <p> 　　茶岭村过去山高坡陡、交通闭塞，人们想到的都是“穷、脏、乱”，全村有建档立卡贫困户93户339人。</p> <p> 　　2017年10月，旧州镇党委物色新的村党支部书记，当过兵、作风过硬、业务能力强的林显才成为最佳人选。“脱贫攻坚也是战场。”林显才欣然应允，“退役不褪色，我要和乡亲们一起把脱贫这块硬骨头啃下来。”</p> <p> 　　说到做到，从改善基础设施，到整治村庄环境，再到谋划产业发展，林显才带领群众苦干实干，几年来茶岭村发生很大变化：从一个负债5万多元的贫困村，变成了村集体经济近400万元的先进村；村民人均年收入从2017年初的4000元提高到了如今的11227元。</p> <p> 　　村班子人手少、年龄大、能力弱，这是普定县穿洞街道靛山村党支部书记褚代洋刚上任时面临的难题。思来想去，褚代洋决定调动村里退役军人的力量，把村里11名积极性高的退役军人重新编成“战斗班”，参与村里各项工作。</p> <p> 　　适应农村工作特点，“战斗班”定了一个“土规矩”——“白天分头，晚上碰头；办法一起想，有事一起上”。目前“战斗班”2人进入了村两委班子，8人成为致富带头人。</p> <p> 　　队伍建强了，村子发展有了主心骨。近年来，靛山村打通村组公路7公里，硬化连户路、庭院1.2万平方米，改造老旧危房61户，500余户群众喝上了健康水。</p> <p> <strong>　　“不仅要选、用，还要在管和育上下功夫”</strong></p> <p> 　　在担任安顺市平坝区白云镇平元村村支书之前，肖正强已经做了10多年建材生意，是远近闻名的致富能手。2016年，当白云镇党委到平元村物色村党支部书记人选时，大家争着推荐肖正强。</p> <p> 　　一边是为民服务，一边是蒸蒸日上的生意，肖正强陷入两难；想到自己当兵时许下的诺言，他还是勇敢地挑起了为民服务的重担。</p> <p> 　　2018年初，担任村支书近一年后，面对家人的埋怨、群众的误解，肖正强萌生了打退堂鼓的念头。来自安顺军分区和市委组织部共同开办的一场培训，又坚定了他干下去的信心。</p> <p> 　　“培训组织我们瞻仰一次革命旧址、参观一次展览、观看一场专题片、重读一遍党章、重温一次入党誓词，参加一场宣讲学习。”一轮培训下来，肖正强坚定了当好村支书的信心。</p> <p> 　　“我们不仅要选、用，还要在管和育上下功夫。”安顺市委组织部副部长金晓明介绍：安顺建立后备村干部培训计划，出台多项优惠政策，吸引退役军人回乡干事创业；组织退役军人村干部参加学历提升班，增强本领；举办专题培训班，定期进行基层党务、政策法规等培训。</p> <p> 　　为切实提升业务水平，帮助解决工作中的难题，安顺市设立了军地实践中心，运用大数据平台，为退役军人村干部提供“点餐式”“套餐式”讲习服务。</p> <p> 　　2018年6月，平元村蔬菜种植基地发生病虫害，全村老少一时束手无策，肖正强通过军地实践中心专家库，预约了安顺市农业科学院专家张秀伟。整整三天张秀伟泡在田间地头，调查取样提出了解决办法。肖正强感慨：“有军区和地方的共同支持，我们有啥理由不好好干！”</p> <p> <strong>　　“让当兵能成才、入伍有出路成为群众共识”</strong></p> <p> 　　免抵押、低利率，普定县白岩镇韭黄村村委会副主任赵国元不久前拿到了县农业银行的一笔专项贷款，这是县里金融机构专门为退役军人村干部打造的产品。</p> <p> 　　参与村里事务的管理，赵国元之前从未想过。2017年外出务工回到家乡后，同是退役军人的村党委书记杨守亮找到他，邀请他参与村子建设。</p> <p> 　　心里没底的赵国元不敢应承，杨守亮鼓励他，让他先跟着自己熟悉村里的事务，最后再做决定。就这样，赵国元跟在杨守亮身后，从走村入户与百姓座谈，开始接触村事务。</p> <p> 　　观察和培育了近两年，2019年5月，赵国元正式进入村里工作。</p> <p> 　　在普定县，为储备和培养更多的优秀退役军人进入村干部队伍，当地实施“1+9”计划，由1名现任优秀退役军人村干部结对帮带本乡镇9名退役军人村干部后备人才。在韭黄村，杨守亮带领着9名退役军人村干部后备人员战斗在脱贫攻坚一线。如今，两名后备人员进入了村两委。</p> <p> 　　如何让培养退役军人村干部这项行动长期可持续发展？安顺军分区按照应征入伍、部队服役、退役返乡、培养成才四个阶段，制定培养流程图，全环节、全流程对退役军人进行跟踪、培养、考评，健全完善退役军人村干部培养链条。</p> <p> 　　“扎根基层建功农村，不仅让退役军人实现了自我价值，更让当兵能成才、入伍有出路成为群众共识。”安顺军分区政委闫海介绍：近年来应征报名入伍人数以每年10%的速度增长。目前全市共储备农村优秀退役军人1316人。</p> <br /> <p> <span id="paper_num">　　《 人民日报 》（ 2020年08月22日 06 版）</span></p> ]]></description>
        </item>
        <item>
            <title><![CDATA[“共同推动欧中经贸合作再上新台阶”]]></title>
            <link>http://politics.people.com.cn/n1/2020/0822/c1001-31832847.html</link>
            <pubDate>2020-08-22</pubDate>
            <author>本报驻比利时记者 牛瑞飞 郑 彬</author>
            <description><![CDATA[<p> 　　近期，中欧双方举行了多轮经贸领域高层对话。同时，双方新一轮投资协定谈判也取得积极进展。中欧合作持续释放积极信号，对推动双边关系发展以及全球经贸秩序的恢复具有重要意义。接受本报记者采访的中欧各界人士认为，新冠肺炎疫情冲击全球经济，中欧两大经济体加强经贸合作有助于推动全球经济复苏，共同维护多边主义和自由贸易体制。</p> <p> <strong>　　“我们在中国长期发展的战略不会改变”</strong></p> <p> 　　英国渣打集团联合《欧洲基金》等专业媒体日前进行的中国市场投资信心指数调查显示，未来12个月，外商对华投资将呈持续增长态势。其中，58%的受访者明确表示将进一步增加对华投资。这与中国欧盟商会近期公布的另一项调查结果一致：65%的欧洲受访企业将中国列入新投资目的地前三名。</p> <p> 　　渣打集团大中华区证券市场部负责人西蒙·凯乐威表示：“调查结果表明国际投资者对中国市场普遍抱有乐观情绪，对中国在全球经济复苏过程中发挥关键性作用充满信心。这与我们看到的现实情况相吻合。随着中国市场的进一步开放，新的机遇将吸引更多外资进入。”</p> <p> 　　“我们在中国长期发展的战略不会改变。”ABB中国公司董事长顾纯元认为，中国精准施策，疫情防控取得重大战略成果，经济发展呈现稳定转好态势。中国作为该集团在全球的第二大市场，一直是其优先选择的投资目的地。</p> <p> 　　2019年，ABB在中国投资10亿元人民币，建造机器人工厂和人工智能领域创新发展研发中心，在自动化、数字化、智能化方向积极布局。今年3月，该公司拓展在华电动交通领域的业务。在谈到疫情对企业发展的影响时，顾纯元告诉记者，疫情对国家和企业都是考验，“通过这次考验，我们更坚定了对中国市场的信心。”</p> <p> 　　德国联邦外贸与投资署亚洲部主管阿辛豪科表示，中国是除了欧盟之外，德国在全球最重要的市场。2017年以来，中国一直是德国最大的贸易伙伴。尤其在汽车、机械和化工等方面，中国都将是德国巨大的出口市场。</p> <p> 　　不仅得益于自身市场规模，中国近年来营商环境的不断优化也进一步增强了欧洲企业投资中国的信心。近日，世界银行发布的《中国优化营商环境的成功经验——改革驱动力与未来改革机遇》专题报告称，中国已连续多年成为营商环境改善幅度最大的全球主要经济体。</p> <p> 　　中国驻欧盟使团团长张明表示：“建交45年来，中欧货物贸易增长超过250倍，欧盟在2004年到2019年连续16年保持了中国最大贸易伙伴地位。中国愿与欧盟共同努力，应对多边贸易体制困境，扩大双向开放水平，为中欧企业在双方市场上的发展提供更好的营商环境。”</p> <p> <strong>　　“数字经济为深化欧中经贸合作提供了新契机”</strong></p> <p> 　　法国泰雷兹集团近年来在空中交通管理数字化转型等方面不断加强与中国企业的合作，在北京和香港投资建设了创新中心，致力于成为中国创新生态的重要部分。</p> <p> 　　“绿色经济与数字经济领域合作正成为深化欧中经贸合作的新动力。”该集团北亚地区副总裁杰罗米·本德尔表示，“中国是全球市场进行创新、开发解决方案和数字技术的理想之地。未来我们将继续携手本地合作伙伴，提供更多创新技术，共同推动欧中经贸合作再上新台阶。”</p> <p> 　　中欧都注重绿色与数字经济在经济复苏和发展中的重要作用。双方的相关合作正稳步推进：中国与德国在青岛建立了中德生态园；中国科技部与德国联邦教研部合作开展电动自行车、电动汽车、混合动力车研发项目，已经在北京和上海设立了联合实验室；中欧在可再生能源、多晶硅片、风能、核电等领域的合作密切。</p> <p> 　　比利时中欧数字协会负责人克劳迪亚·威尔诺迪对记者说：“数字经济为深化欧中经贸合作提供了新契机。长远来看，欧中企业在人工智能、大数据、智慧城市、物联网、云计算和区块链等产业发展上有着广泛的合作前景。”</p> <p> 　　“新时代的中欧经贸关系呈现出活力更强、质量更高、联通更密、动力更足的特点。双方经贸合作的范围已从贸易为主到贸易与投资并重，再到产业金融、互联互通、绿色环保、数字创新等方面开拓和发展。”张明说，“中欧绿色和数字经济发展理念和利益高度契合，双方将携手应对气候变化，共同推动绿色、低碳、可持续发展。”</p> <p> <strong>　　“欧中加强合作对全球增进互信具有深远影响”</strong></p> <p> 　　近年来，贸易保护主义和单边主义日益盛行，全球经济增长乏力。新冠肺炎疫情发生以来，以世界贸易组织为代表的多边贸易体制遭遇前所未有的冲击，进一步增加了世界经济发展的不确定性。</p> <p> 　　作为全球两大经济体，中欧是经济全球化进程的重要参与者和塑造者，也是稳定全球经济的重要力量。中欧两大经济体将发挥世界经济的“双引擎”作用，拉动世界经济复苏，共同支持科学有序复工复产，加强宏观经济政策协调，维护全球产业链供应链稳定通畅。</p> <p> 　　联合国贸易和发展会议全球化和发展战略司司长理查德·科祖尔—赖特对记者表示：“加强欧中合作不仅惠及双方，也惠及全球。特别是对广大发展中国家来说，欧中经贸领域加强合作，为解决发展中国家缺乏充足的国际投资和稳定的融资渠道、推动国际金融体系的改革提供了重要方案。”</p> <p> 　　欧洲议会欧中友好小组主席扎赫拉迪尔对记者表示：“欧中都是多边主义的坚定支持者，都希望建立以规则为基础的世界贸易体系。未来双方在共同推动世贸组织改革等方面有着广泛的合作前景。”</p> <p> 　　荷兰海牙战略研究中心研究员理查德·吉亚西则认为：“欧中加强合作对全球增进互信具有深远影响。欧中应进一步致力于打造相互尊重、友好合作的伙伴关系，欧中合作将使双方成为引领全球发展不可或缺的重要力量。”</p> <p> 　　张明认为：“在面对全球性挑战时，没有一个国家可以独善其身，国际社会必须合作应对。中欧将以多边主义共识为基础，以构建人类命运共同体为目标，共同建设和平、增长、改革、文明伙伴关系，不断充实中欧全面战略伙伴关系内涵。”</p> <p> 　　（本报布鲁塞尔8月21日电）</p> <br /> <p> <span id="paper_num">　　《 人民日报 》（ 2020年08月22日 03 版）</span></p> ]]></description>
        </item>
        <item>
            <title><![CDATA[今年水稻依然有望丰收（深阅读）]]></title>
            <link>http://politics.people.com.cn/n1/2020/0822/c1001-31832845.html</link>
            <pubDate>2020-08-22</pubDate>
            <author>本报记者 高云才</author>
            <description><![CDATA[<p> 　　今年入汛以来，长江中下游地区入梅时间早、持续时间长，降雨分布广、累计雨量大，部分地区发生较重洪涝灾害。汛情发生正值早稻灌浆收获、中稻田间管理和晚稻育秧移栽的关键时期。今年南方洪涝给水稻生产带来怎样的影响，会让水稻减产吗？本报记者进行了追踪。</p> <p> 　　灾害发生后，农业农村部组织水稻专家组，实地调研评估灾害影响，科学指导灾后生产恢复，最大限度降低灾害损失。全国农技推广服务中心副主任王戈表示，从实地走访和调研看，今年汛情区域相对集中，受灾程度最深的是早稻，一季中稻和双季晚稻也受到不同程度影响，但由于种植面积扩大、技术保障增强等因素，今年水稻有望实现丰收。</p> <p> <strong>　　早稻生产没有逆转增产的趋势</strong></p> <p> 　　农业农村部农情调度表明，从目前早稻生产情况看，洪涝灾害导致局部地区早稻田块无法及时收获，倒伏和穗发芽现象严重，单产会受到一定程度影响，但得益于播种面积的大幅增加，我国早稻实现增产，早稻生产没有逆转增产的趋势。国家统计局8月19日公布的全国早稻生产数据显示：2020年全国早稻总产量2729万吨，比2019年增加102.8万吨，增长3.9%，扭转了连续7年下滑的态势。</p> <p> 　　——种植面积扩大。</p> <p> 　　今年国家采取了强有力的措施恢复早稻生产，休耕和抛荒田块得到全面恢复，早稻种植面积大幅增加，为总产稳定奠定了坚实基础。2020年全国早稻播种面积4751千公顷，比上年增加300.7千公顷，增长6.8%。分地区看，10个早稻生产省（区）中有7个播种面积增加。其中，湖南、江西增加最多，分别增加131.1千公顷和121.7千公顷，增长12.0%和11.1%。</p> <p> 　　农业农村部农情调度表明，今年早稻受灾面积虽然比较大，但成灾面积和绝收面积要小很多。早稻主产区面积大幅增加给早稻受灾腾出了空间，为稳定水稻产量提供了面积保障。</p> <p> 　　——群体构建合理。</p> <p> 　　今年早稻生长期间，前期气象条件总体有利，温光水等资源匹配较好，秧苗素质好，具备丰产基础。据农业农村部多点定点调查对比，今年早稻平均亩穗数、穗粒数比去年均有所增加，结实率和千粒重略减。根据国家统计局对早稻的实割实测抽样调查推算，亩产量为383公斤，比2019年减少10.5公斤。</p> <p> 　　——生产技术保障增强。</p> <p> 　　我国超过1000万亩早稻种植的省份共4个，广东、广西两省（区）受洪涝影响不大，湖南、江西两省受灾较重，受灾区域以沿江沿湖地区为主。这些区域历史上灾害频发，抗灾减灾意识较强。</p> <p> 　　王戈介绍，近年来，随着规模化经营主体增多，集中育秧面积不断扩大，烘干设备数量不断增加。集中育秧大幅度提高了秧苗质量，提高了作物本身抵御灾害能力；烘干设备为早稻抢收提供了保障，大幅度降低了灾害损失，使夺丰收成为可能。</p> <p> <strong>　　中稻单产和总产有望与去年持平</strong></p> <p> 　　尽管洪涝灾害导致南方部分中稻生育进程推迟、无法及时晒田、分蘖受阻等不利情况，但王戈表示，目前中稻处于苗期，后期回旋余地大，只要后期不出现大的自然灾害，单产和总产有望与去年持平。</p> <p> 　　——受灾区域集中。</p> <p> 　　我国中稻分布范围广泛，从南到北均有种植，主要分布在东北稻区、西南稻区和长江中下游稻区，2019年种植面积约为3.04亿亩。今年灾情主要集中在长江中下游地区，以湖南、湖北、安徽、江苏4省为主，由于该区域中稻正处于分蘖期，耐淹性强，对整体生产影响程度有限，成灾和绝收主要集中在沿江沿河蓄洪区，占全国中稻面积比重不大。</p> <p> 　　——应对措施及时。</p> <p> 　　灾害发生后，各地高度重视减灾工作，第一时间根据积水情况，采用机械排水或挖排水沟等方法，排除田间积水和耕层渍水，减少积水时间，退水之后及时追施速效化肥，促进植株恢复生长和高产群体构建。中稻生长后期可根据不同种植方式、品种和苗情，适当增施钾肥，加速籽粒灌浆。</p> <p> 　　——储备技术成熟。</p> <p> 　　近年来，对水稻洪涝灾害研究比较多，减灾技术成熟。对扬花期前的田块，可排出积水后加强水分调控和肥料运筹，促进苗情转化升级；对扬花后的田块，可割苗蓄留再生稻，一般洪水退后3—5天割苗。割苗前及时追施速效氮肥，确保再生稻大穗多穗高产，很大程度上能够减少灾害损失。</p> <p> <strong>　　晚稻生产再获丰收有保障</strong></p> <p> 　　洪涝灾害导致部分晚稻秧田被淹，秧苗素质偏差，苗高苗弱、返青期延长，不利于晚稻稳产高产。但王戈表示，晚稻生产存在种植面积增加、技术储备充足等有利因素，只要田间管理措施到位，晚稻生产再获丰收有保障。</p> <p> 　　——面积有望增加。</p> <p> 　　早稻作为双季稻的第一季，不仅影响当季，还会影响下茬晚稻。今年早稻面积增加为晚稻面积增加奠定了基础。当前，各地正在积极开展灾后恢复生产，确保晚稻种植面积。</p> <p> 　　——技术应用到位。</p> <p> 　　今年早稻让茬后，各地十分重视防灾减灾技术落实，施好肥、打好药，做到了抢时栽插，以密补迟，基本苗足。同时加强水肥调控，促早发快发，加快生育进程。</p> <p> 　　——减灾技术完善。</p> <p> 　　对于秧田被毁，无法栽插的田块可因地制宜“早翻晚”，科学选择适宜的早稻品种，尽快抢晴播种，同时加强播后病虫草害防控，可有效减少灾害损失。</p> <p> 　　专家表示，我国地域宽广、幅员辽阔，生态类型多、资源禀赋各异，灾害往往是区域性的、阶段性的，一个区域或一季作物受灾，并不等于全年和全国减产。近年来，随着科技水平提高，水稻综合生产能力不断提高，抵御自然灾害能力不断增强。从全国范围看，气候复杂多变，每年都有受灾减产的区域，也有无灾增产的地方，总量上实现相互补偿，空间调节余地大。从水稻本身看，有一定的群体自我调节和产量构成因素的补偿能力，个体和群体相互依存和制约最终形成不同的产量结构，比如亩穗数减少了，一定程度上穗粒数就会增加。</p> <p> 　　王戈认为：“只要强化灾情监测预警、强化防灾减灾预案落实，只要应对措施到位、补救技术得当，同样可以获得丰收。”</p> <br /> <p> <span id="paper_num">　　《 人民日报 》（ 2020年08月22日 04 版）</span></p> ]]></description>
        </item>
        <item>
            <title><![CDATA[全军部队、多部门反对浪费 营造勤俭节约新风尚]]></title>
            <link>http://politics.people.com.cn/n1/2020/0822/c1001-31832843.html</link>
            <pubDate>2020-08-22</pubDate>
            <author>人民网</author>
            <description><![CDATA[<p style="text-indent: 2em;"> <strong>全军部队多管齐下弘扬艰苦奋斗勤俭建军优良传统（厉行节约 反对浪费）</strong></p> <p style="text-indent: 2em;"> 本报北京8月21日电 （记者倪光辉）日前，军委后勤保障部发出通知，就全军部队坚决贯彻落实习主席关于制止餐饮浪费行为的重要指示精神作出部署，要求大力弘扬艰苦奋斗、勤俭建军的优良传统，用实的举措、严的要求，深入持久纠治餐饮浪费行为，努力使厉行节约、反对浪费蔚然成风、走在前列。</p> <p style="text-indent: 2em;"> 持续加强宣传教育引导。把厉行节约、反对浪费纳入部队经常性教育，采取印制宣传资料、开设网上专栏、组织知识问答、评比先进典型等多种形式，引导官兵全员参与，从点滴入手、从自我做起，不断强化浪费可耻、节约为荣意识，使文明就餐、“光盘行动”成为官兵的自觉行动。</p> <p style="text-indent: 2em;"> 深入推进保障模式改革。加快推进副食品集中筹措步伐，科学统筹部队需求，最大可能减少物资途中运输损耗。加大标准餐推广力度，因地制宜确定食堂规模和组伙方式，有条件的单位推行集约化办伙，全面落实分餐制。转变伙食管理理念，推动部队饮食保障由粗放管理向精细管理转变、由强调饭菜品种数量向追求质量效益转变。强化库存物资管理，严格出入库登记统计制度，合理确定营区食堂和作战平台主副食品补给周期和数量，科学制定食用计划，减少食品储存时间，降低损失浪费。</p> <p style="text-indent: 2em;"> 倡导节能、绿色、智能新理念。推广炊事节能、食品保鲜、冷链物流、垃圾再生利用等新技术新产品，探索应用高效节能灶、万能蒸烤箱、烹饪机器人等先进炊事设备，提高膳食制作机械化、智能化水平，减少炊事能耗。推广应用新版给养信息系统，实现食物消耗自动计量、军人食谱自动生成、营养水平自动评估。加大业务技能培训，广泛开展岗位练兵，倡导炊事节约革新，提升饭菜制作质量，减少“盘中餐”浪费。改进烹饪加工方式，粗菜细做，细菜精做，一菜多做，杜绝过度加工、奢华烹饪，增加蒸煮菜数量，降低煎炸菜品种，减少食用油消耗量。</p> <p style="text-indent: 2em;"> <strong>公安部采取有力措施坚决制止餐饮浪费行为（厉行节约 反对浪费）</strong></p> <p style="text-indent: 2em;"> 本报北京8月21日电 （记者黄庆畅）公安部近日召开会议，要求全国公安机关坚决贯彻落实习近平总书记关于制止餐饮浪费行为的重要指示精神，牢固树立危机意识，充分发挥职能作用，坚决制止餐饮浪费行为，落实保障国家粮食安全各项措施。</p> <p style="text-indent: 2em;"> 公安部要求各级公安机关要在厉行勤俭节约、反对铺张浪费上坚持更高标准、更严要求，采取有力措施，大力倡导节俭用餐，自觉践行“光盘行动”，切实加强公务用餐管理，坚决制止餐饮浪费。要严控“三公”开支，落实节能降耗措施，大力建设节约型机关。要注重抓实抓细抓常，完善各级公安机关食堂管理工作规范，健全公务接待和工作用餐制度，强化内部监管和监督检查，建立健全制止餐饮浪费行为长效机制。要加强对广大民警及其家属子女的宣传教育引导，积极倡导健康文明节俭的餐饮消费方式，切实培养节约习惯，着力营造浪费可耻、节约光荣的氛围。要紧密结合“坚持政治建警全面从严治警”教育整顿，把反对和制止浪费行为作为纠治“四风”的重要内容，不断深入推进制止餐饮浪费工作。</p> <p style="text-indent: 2em;"> 公安部提出，要充分发挥职能作用，紧密结合推进“昆仑2020”专项行动，依法严厉打击制售假劣农资、非法占用农用地、污染环境等违法犯罪活动，全力维护粮食安全、保障农业生产。要密切关注由粮食安全相关问题可能带来的风险及各种苗头性、趋势性问题，全力化解矛盾隐患、维护社会稳定。要积极服务“米袋子”“菜篮子”工程，加强道路交通管理疏导，确保“绿色通道”安全畅通。要加强与农业农村、市场监管、生态环境等部门的协作配合，健全完善行刑衔接、联合执法等工作机制，着力形成保障粮食安全的整体合力。</p> <p style="text-indent: 2em;"> <strong>国家文物局倡议共同营造勤俭节约新风尚（厉行节约 反对浪费）</strong></p> <p style="text-indent: 2em;"> 本报北京8月21日电 （记者张贺、刘阳）国家文物局认真贯彻落实习近平总书记关于制止餐饮浪费行为的重要指示精神，向全局系统发出倡议，号召广大干部职工按照习近平总书记重要指示要求，牢固树立政治自觉、思想自觉、行动自觉，在厉行节约、反对浪费特别是餐饮浪费上率先垂范、务求实效、久久为功；要积极创建节约型单位、勤俭式家庭，把艰苦奋斗、制止浪费的理念贯彻到食堂就餐、公务活动、家庭聚餐、在外用餐等方方面面，自觉树立良好作风、自觉养成朴素习惯、自觉践行光盘行动，最大限度减少浪费，共同营造文物系统节俭节约的新风尚。</p> <p style="text-indent: 2em;"> <strong>全国妇联倡议引导家庭成员自觉养成节约美德（厉行节约 反对浪费）</strong></p> <p style="text-indent: 2em;"> 本报北京8月21日电 （记者易舒冉）全国妇联认真贯彻落实习近平总书记关于制止餐饮浪费行为的重要指示精神，向广大妇女和家庭发出倡议：从我做起，从家庭做起，制止餐饮浪费，崇尚勤俭节约。</p> <p style="text-indent: 2em;"> 倡议指出，要抵制浪费，做爱粮节粮的践行者。从我做起、从日常做起、从点滴做起。日常餐饮，以光盘为荣，做到锅清、碗清、盘清，餐餐光盘；以健康为重，科学定量，合理膳食，拒绝暴饮暴食，拒绝野味。发挥妇女在家庭生活中重要作用，从每个家庭做起，从娃娃抓起，从节约一粒米、一把面、一滴油做起，减少浪费、减少厨余垃圾；家长先行示范，通过“大手”拉“小手”，言传身教带动孩子养成勤俭节约的好习惯，树牢节约为荣、浪费为耻的家庭观念；引导家庭成员自觉养成节约美德，形成简约适度、绿色低碳的家庭生活方式。各级“五好家庭”“最美家庭”要充分发挥示范带动作用，带动更多的人加入到文明节俭的行列中来，推动形成人人崇尚节约的社会氛围。</p> ]]></description>
        </item>
    </channel>
</rss>
`