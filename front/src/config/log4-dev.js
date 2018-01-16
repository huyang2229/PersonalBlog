export default {
	"appenders":  
        [  
            {  
                "category":"console",  
                "type":"console"  
            },  
            {  
                "category":"log_info",  
                "type": "console",  
            },  
            {  
                "category": "log_stat",  
                "type": "console",  
            },  
            {  
                "category": "log_trace",  
                "type": "console"
            },  
            {  
                "category": "log_error",  
                "type": "console"
            },  
            {  
                "category": "log_todo",  
                "type": "console"
            },
            {
            	"type": "console",
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