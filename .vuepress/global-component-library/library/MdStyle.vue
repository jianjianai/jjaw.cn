<script setup lang="ts">
import { computed, useSlots, type VNode } from 'vue';

const slot = useSlots();
const html = computed(()=>{
    let txt = '';
    if((slot as any).default){
        const def = (slot as any).default() as VNode[];
        for(const node of def){
            if((typeof node.children) === 'string'){
                txt += node.children;
                txt += '\n';
            }
        }
    }
    return '<style>'+txt+'</style>';
});

</script>
<template>
    <div style="display: none;" v-html="html"></div>
</template>

