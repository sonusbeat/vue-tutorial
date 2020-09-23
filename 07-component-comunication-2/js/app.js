// Previous
// window.Event = new Vue();

window.Event = new class {
    constructor() {
        this.vue = new Vue();
    }

    fire(event, data = null) {
        this.vue.$emit(event, data);
    }

    listen(event, callback) {
        this.vue.$on(event, callback);
    }
};

Vue.component('coupon', {
    template: `<input placeholder="Enter your coupon code ..." @blur="onCouponApplied">`,

    methods: {
        onCouponApplied() {
            // Event.$emit('applied');
            Event.fire('applied');
        }
    }
});

new Vue({
    el: '#app',

    data: {
        couponApplied: false
    },

    methods: {
        onCouponApplied() {
            this.couponApplied = true;
        }
    },

    created() {
        Event.listen('applied', () => console.log('Processing it!'));
    }
});