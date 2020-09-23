Vue.component('message', {
    props: ['title', 'body'],

    template: `
        <article class="message mx-2" v-show="isVisible">
            <div class="message-header">
                {{ title }}
                <button class="delete" @click="isVisible = false" aria-label="delete"></button>
            </div>
            <div class="message-body">
                {{ body }}
            </div>
        </article>
    `,

    data() {
        return {
            isVisible: true
        };
    }
})


let app = new Vue({
    el: '#app',
});