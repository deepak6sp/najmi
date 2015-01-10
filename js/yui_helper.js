YAHOO.namespace("TK");
YAHOO.namespace("TK.widget");
TK = YAHOO.TK;
$D = YAHOO.util.Dom;
$E = YAHOO.util.Event;
$U = YAHOO.util;
$ = YAHOO.util.Dom.get;
$LANG = YAHOO.lang;

TK.widget.SimpleScroll = new function () {
    var $Y = YAHOO.util;
    var defConfig = {delay:2, speed:20, startDelay:2, scrollItemCount:1};
    this.decorate = function (container, config) 
					{
						container = $(container);
						config = TK.applyIf(config || {}, defConfig);
						var handle = {};
						var scrollTimeId = null, pause = false;
						var onScrollEvent = new $U.CustomEvent("onScroll", handle, false, $U.CustomEvent.FLAT);
						if (config.onScroll) {onScrollEvent.subscribe(config.onScroll);} 
						else {onScrollEvent.subscribe(function () {
															for (var i = 0; i < config.scrollItemCount; i++) 
															{
																container.appendChild(container.getElementsByTagName("li")[0]);
															}
														}
													);
							}
							
						var scroll = function () 
									{
										if (pause) {return;}
										container.scrollTop += 2;
										var lh = config.lineHeight || container.getElementsByTagName("li")[0].offsetHeight;
										if (container.scrollTop % lh <= 1) 
										{
											clearInterval(scrollTimeId);
											onScrollEvent.fire();
											container.scrollTop = 0;
											setTimeout(start, config.delay * 1000);
										}
									};
						var start = function () 
									{
										var lh = config.lineHeight || container.getElementsByTagName("li")[0].offsetHeight;
										if (container.scrollHeight - container.offsetHeight >= lh) 
										{scrollTimeId = setInterval(scroll, config.speed);}
									};

						$E.on(container, "mouseover", function () {pause = true;});

						$E.on(container, "mouseout", function () {pause = false;});

						setTimeout(start, config.startDelay * 1000);

						TK.apply(handle, {subscribeOnScroll:function (func, override) 
												{
													if (override === true && onScrollEvent.subscribers.length > 0) 
														{onScrollEvent.unsubscribeAll();}
													onScrollEvent.subscribe(func);
												}
											}
								);
						
						handle.onScroll = handle.subscribeOnScroll;
						return handle;
					};

}

TK.apply = function (obj,config) 
{
	if(obj&&config&&typeof config=='object')
	{
			for(var p in config)
				obj[p]=config[p];
	}
	return obj;			
}

TK.applyIf = function (obj,config) 
{
	if (obj&&config&&typeof config=='object')
	{
		for(var p in config)
		{
			if(!YAHOO.lang.hasOwnProperty(obj,p))
				obj[p]=config[p];
		}
	}
	return obj;
}

TK.cpAttribute=	function(obj,config)
{
	if(obj&&config&&typeof config=='object')
	{
		for(var p in config)
		{
			if(!YAHOO.lang.hasOwnProperty(obj,p))
				obj[p]=config[p];
		}
	}
return obj;
}