<template>
    <div class="Demo-Slot">
        <CompTab title="Tieu De Demo Slot">
            <ul class="tabsHeader">
                <li v-for="(item, index) in tabsHeader" v-bind:key="index"
                    v-on:click="setActiveTab(index)">{{item.text}}</li>
            </ul>
            <div class="tabs-content" v-if="tabActive === 0">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In vitae repudiandae nostrum deleniti error atque. Vitae doloribus autem iusto hic suscipit, impedit enim possimus odit cum! Quisquam pariatur cupiditate necessitatibus?</p>
            </div>
             <div class="tabs-content" v-if="tabActive === 1">
                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi possimus earum iste illo consectetur sunt nihil ex nulla vero totam saepe voluptas tempore ipsum nemo, similique expedita aperiam, a culpa?</p>
            </div>
             <div class="tabs-content" v-if="tabActive === 2">
                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque sed provident repellendus cum obcaecati voluptas aliquam at deserunt sapiente, ducimus illum repudiandae minus natus dignissimos similique dicta deleniti distinctio nam.</p>
            </div>
        </CompTab>
    </div>
</template>

<script>
import CompTab from './CompTabs.vue';
    export default {
        name :'demo-slot',
        data() {
            return {
                tabsHeader: [
                    {text : 'tab1'},
                    {text : 'tab2'},
                    {text : 'tab3'}
                ],
                tabActive : 0,               
                
            }
        },
        components : {
            CompTab
        },
        methods: {
           setActiveTab(index){
               this.tabActive=index;
           },
        }
    }
</script>

<style >

</style>