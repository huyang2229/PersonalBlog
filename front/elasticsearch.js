var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  host: 'william:19950810@211.159.174.130', //服务IP和端口
  log: 'trace' //输出详细的调试信息
});
client.search({
  index : 'blog',
  type : 'posts',
  body: {
    query: {
      fuzzy: {
        content: 'Javascrip'
      }
    }
  }
}).then(body => {
  console.log(body.hits.hits)
}, error => {
  console.log(error.message)
})

