<template src="./template.html"></template>

<script>

    import * as ApiService from "./api/ApiService.vue";

    var openFile = function(event) {
        var input = event.target;



        var reader = new FileReader();
        reader.onload = function(r){

            var f = event.target.files[0];

            var dataURL = reader;
            console.log(dataURL);
            console.log(r.target.fileName);

            console.log(f);
        };
        reader.readAsBinaryString(input.files[0]);
    };

    export default {
        name: 'hello',

        components:{
            "fm-list": require('./fm-list/fm-list.vue'),
        },

        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                todos: [
                    { text: 'GET JavaScript' },
                    { text: 'GET Vue' },
                    { text: 'POST something awesome' }
                ]
            }
        },
        methods: {
            openFile: openFile,
            fetchItem() {
                return ApiService.getAssets()
                        .then((result) => {
                            console.log(result);
                            result.json().then(res => {
                                console.log(res);
                            });
                        })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
