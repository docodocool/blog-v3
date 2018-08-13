import 'highlight.js/styles/atom-one-dark.css';
// import 'highlight.js/styles/googlecode.css';

const marked = require('marked');
const hljs = require('highlight.js');


marked.setOptions({
  renderer: new marked.Renderer(),
  // github样式markdown
  gfm: true,
  // github表格
  tables: true,
  // github换行符
  breaks: false,
  // 只解析符合markdown.pl定义的，不修正markdown的错误
  pedantic: false,
  // 原始输出, 忽略HTML标签
  sanitize: false,
  // 优化列表输出
  smartLists: true,
  smartypants: false,
  // highlight.js
  highlight: (code, lang = 'javascript') => {
    if (lang && hljs.getLanguage(lang)) {
      console.log('=> ', hljs.getLanguage(lang));
      return hljs.highlight(lang, code, true).value;
    }
    return hljs.highlightAuto(code).value;
  },
});

export default marked;
