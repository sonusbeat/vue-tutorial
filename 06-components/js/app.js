Vue.component('task-list', {
    template: `
    <div>
        <ul>
            <task v-for="task in tasks" v-bind:key="task.id">
                <span class="text-green">{{ task.item }}</span>
            </task>
        </ul>
    </div>`,

    data() {
        return {
            tasks: [
                { id: 1, item: 'Go to the store', completed: true },
                { id: 2, item: 'Go to the Laundry', completed: false },
                { id: 3, item: 'Go to work', completed: true },
                { id: 4, item: 'Go to school', completed: false },
                { id: 5, item: 'Clean room', completed: true }
            ]
        };
    }
});

Vue.component('task', {
    template: '<li><slot></slot></li>'
});

let app = new Vue({
    el: '#app',
});