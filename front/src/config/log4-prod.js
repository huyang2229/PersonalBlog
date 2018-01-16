// log_info:  详细日志,主体日志都在这里,使用file类型,100MB一本,根据我的赢盘量我保存100本.
// log_stat:  用于输出一些统计信息,统计信息数量固定,不依赖于用户量变化,且较少,所以设置为           datefile,按天输出看起来也清晰.
// log_trace: 有海量用户并消息驱动处理业务,所以添加trace业务,每个消息记录一条,包含用户名,便于快速定位一个用户的所有操作,考虑到我现在的业务量这个一天一本还是可以接收的,故使用datefile格式
// log_error: 异常信息,数量不会特别多,使用datefile格式
// log_todo:  记录一些需要人工处理业务,日志量不会很多,使用datefile格式
export default {
	"appenders":  
        [  
            {  
                "category":"console",  
                "type":"console"  
            },  
            {  
                "category":"log_info",  
                "type": "file",  
                "filename": "./logs/log_info/info",  
                "maxLogSize": 104857500,  
                "backups": 100  
            },  
            {  
                "category": "log_stat",  
                "type": "datefile",  
                "filename": "./logs/log_stat/stat",
                "alwaysIncludePattern": true,  
    			"pattern": "-yyyy-MM-dd.log"   
            },  
            {  
                "category": "log_trace",  
                "type": "datefile",  
                "filename": "./logs/log_trace/trace",
                "alwaysIncludePattern": true,  
                "pattern": "-yyyy-MM-dd.log"     
            },  
            {  
                "category": "log_error",  
                "type": "datefile",  
                "filename": "./logs/log_error/error",
                "alwaysIncludePattern": true,  
                "pattern": "-yyyy-MM-dd.log"     
            },  
            {  
                "category": "log_todo",  
                "type": "datefile",  
                "filename": "./logs/log_todo/todo",
                "alwaysIncludePattern": true,  
                "pattern": "-yyyy-MM-dd.log"   
            },
            {
            	"type": "datefile",
            	"filename": './logs/log_access/access',
            	"pattern": '-yyyy-MM-dd.log',
            	"alwaysIncludePattern": true,
            	"category": 'access'
            } 
        ],  
    "replaceConsole": true,  
    "levels":  
    {  
        "log_info":"ALL",  
        "log_stat": "ALL",  
        "log_trace":"ALL",  
        "log_error":"ALL",  
        "log_todo":"ALL"  
    } 
}