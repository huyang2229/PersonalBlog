var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
    host: '/api', //服务IP和端口
    log: 'trace' //输出详细的调试信息
});

export default {
    search: (key) => {
        let result = client.search({
            index : 'blog',
            type : 'posts',
            from : 0,
            body : {
                query : { 
                    dis_max : { 
                        queries : [
                            {
                                match : {
                                    title : { 
                                        query : key, 
                                        minimum_should_match : '50%',
                                        boost : 4,
                                    }
                                } 
                            }, 
                            {
                                match : {
                                    content : { 
                                        query : key, 
                                        minimum_should_match : '75%',
                                        boost : 4,
                                    }
                                } 
                            }, {
                                match : {
                                    tags : { 
                                        query : key, 
                                        minimum_should_match : '100%',
                                        boost : 2,
                                    }
                                } 
                            }, {
                                match : {
                                    slug : { 
                                        query : key, 
                                        minimum_should_match : '100%',
                                        boost : 1,
                                    }
                                } 
                            }
                        ],
                        tie_breaker : 0.3
                    }
                },
                highlight : {
                    pre_tags : ['<b>'],
                    post_tags : ['</b>'],
                    fields : {
                        title : {},
                        content : {},
                    }
                }
            }
        });
        return result
    }
}
