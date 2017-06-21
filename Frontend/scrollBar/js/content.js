$(function(){
	'use strict';

	let content1 = `<p>6月18日举行的第20届上海国际电影节金爵论坛上，素有“小钢炮”之称的冯小刚再次“开炮”。对于观众常吐槽的垃圾电影，冯小刚称，“是不是有很多垃圾观众，才形成了那么多垃圾电影？”“你如果不去捧这场，它就没有生存空间，制作人也不会拍垃圾电影了”，可现状是，“往往垃圾电影的票房还很高！”（《北京日报》6月19日）
	先有蛋还是先有鸡？烂片“赖谁”的话题注定要在网上引爆。有网友说，这话说得太有道理了，完全没毛病；也有网友说，拍不好电影怪导演怪编剧怪演员，怎么能够怪观众，观众不去看怎么知道好与坏，这锅观众不能背。
	各说各话，吵个三年五载，这个话题也不会有答案。这么大一个命题，不可能是单线条的逻辑，肯定是互为因果。更有价值的追问应该是：有哪些盛产垃圾的游戏规则，阻碍了作品与观众之间产生良性化学反应？
	现代的影视业早已不只有制作和观看两个维度了，在市场化的商业运作中，很多东西渗透其中。电影学者戴锦华在现场就反对了冯小刚“烂片生长赖观众”的说法。她认为中国影坛怪象越来越多，在于电影市场被高度垄断，排片率决定一切。“掌握了资本就掌握了电影制片公司和院线，想捧的演员和影片排片率就往上铺，观众选择的能力被限制了。”联想到此前几次，电影导演为了能获得排片，又是下跪、又是发飙，此言或许不虚。
	商业运作中，必然不能以单纯的艺术审美来评判一切，出现品质与效果倒挂的现象不足为奇。比如中国版《深夜食堂》在豆瓣的评价才2.4分，网友吐槽一直没停过，这样一部烂片却蹭足了热度，话题不断。从电视剧艺术的角度，中国版《深夜食堂》可能是失败的；从商业运作的角度，有了足够的广告曝光，谁说不是一种成功？
	简单地指责流行之下的口碑品质，是没有太大价值的。我们只能努力从不同作品之中，寻找能够更多承载价值的东西。如果说中国导演只能拍垃圾电影，或者说中国观众就爱看垃圾电影，显然都简单化了。</p>`;

	let content2 = `<p>前段时间《人民的名义》得到了非常高的评价，成为现象级的片子。有作品承载社会意义的原因，有老戏骨演技的原因，有发行方判断力与魄力的原因，各因素形成合力，才创造了良好口碑。“老戏骨们走红”启示影视圈：专业的表演、敬业的拍摄、超高的制作含金量，依然是最终被高度认可的。
	怕就怕投资方、拍摄方、发行方，违背了很多社会发展规律。枉顾观众需求，枉顾欣赏方式革新，枉顾艺术创作的遵循，盲目地丢掉了判断力，简单成为“讨好花痴派”或者“自说自话派”，什么雷人的场面都敢搞，什么荒谬的台词都敢加，什么老旧的套路都敢用，审美沦为审丑，创新沦为耍怪，香的臭的只要热的就行……一味按照这路游戏规则走，不盛产垃圾作品才怪。
	在多元的世界里，重塑对于艺术价值的共识，并不是一件简单的事情，也不可能靠对骂就能跳出漩涡。在垃圾电影和垃圾观众的因果指责当中，我们更应该审视盛产垃圾的商业游戏规则还有没有救？</p>`;

	let content3 = `<p>厦门大学金圆研究院理事长戴亦一表示，金融强监管、流动性趋紧是主要原因。随着银监会对同业存单监管日益严格，银行同业存单发行量骤减，房贷基准利率的利率水平已超过了4.9%，这意味着资金成本在不断提高。
	“资金成本涨的比房贷利率快，银行必然会充分权衡其中的风险因素。”中原地产首席分析师张大伟说，尤其今年3月北京出台各项楼市调控政策后，银行对抵押品的风险意识更是不断提高，所以房贷审批难度加大。
	“融360”分析师李唯一表示，现行政策下，严控房贷增量是大势所趋。银行在房贷总额度一定的情况，即使大幅上调房贷利率，利润也十分有限。从资源配置角度讲，这部分资金资源未带来预期收益，则会被配置到收益更高效的业务。近期房产交易量亦大幅下滑，部分银行会权衡成本与利润，进而收缩房贷业务。
	在戴亦一看来，“定向加息”会直接导致购房成本增加，这无疑加重了购买首套房的刚需客户的负担。国家的住房调控政策，都是为了保护刚性需求，抑制投资投机性需求。银行大幅提高首套房房贷利率的做法，背离了调控目的。
	戴亦一说，调控的目的不应是为了抑制刚需，若动辄采取“一刀切”的方式，可能会误伤，“刚需人群属于购房的弱势人群，应该让他们买得起房、住得上房。”</p>`;

	let content4 = `<p>数据显示，随着调控政策的渐趋严厉，5月热点城市房价涨速整体回落，北京房价首次出现下跌，其中西城区下跌8.43%、海淀区下跌7.45%，领跌于全市各区县板块。
	业内人士预计，一二线热点城市信贷政策进一步收紧的可能性依然存在。相关人士分析，随着近期资金成本不断上升，商业银行需要控制房贷业务的成本，对资金的流向和使用作出新的规划。而且，6月下旬是金融市场习惯性的“资金紧张时刻”，在今年金融去杠杆压力之下，银行对半年末时点流动性冲击的担忧尤为严重。此背景下，银行展开资金争夺战，纷纷上调人民币存款基准利率、大额存单利率以及理财产品收益率，这必然使得银行吸储成本提升。
	张大伟认为，受房地产调控政策及年中考核等因素影响，预计银行年中会一定程度上收紧房贷，而且针对资质相对较差的客户审核将会更严格；该趋势是否会加快，还取决于资金价格上行的速度。
	易居研究院智库研究总监严跃进表示，房贷利率上行预计将对房地产市场造成较大影响：一是增加购房者买房的成本及难度，迫使整个房地产市场逐渐降温；二是影响房地产成交量。不过，房企可能会通过各种形式的策略性降价，来对冲房贷利率上调对销量的影响。
	在戴亦一看来，有关方面应当对“金融机构将首套房房贷利率也一并上调”的做法进行干预，金融机构不应在房贷政策上“一刀切”，应区别对待各种购房者，从而支持购买首套房刚需客户的积极性</p>`;

	$('.scroll-cont>.scroll-ol').each(function(id, el) {
		let content = [content1, content2, content3, content4];
		$(el).append(content[id]);
	});
});










