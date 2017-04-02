/**
 * Created by r.dinca on 29/03/17.
 */



import Vue from 'vue';


export default Vue.component('fm-list', {
    name: 'display-list',
    template: '#display-list-id',
    props: ['items'],

    methods: {
        onDelete: function (event, it) {
            this.$emit('delete', it)
        }
    }
});