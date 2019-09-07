var app = new Vue({
    el: '#mainAria',

    data: {
      wordList: [],
      urls: {
        getWordListUrl: 'http://127.0.0.1:8000/api/v1.0/word/list/'
      }
    },

    methods: {
      getWordList(){
        axios.get(this.urls.getWordListUrl).then((response)=>{
            this.wordList = response.data;
        });
      }
    }


})
