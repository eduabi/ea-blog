<template>
    <div class="scale">
        <scale></scale>
    </div>
</template>
<script>
import scale from '@/components/scale'
export default {
    components: {
        scale
    },
    data(){
        return {

        }
    }
}
    
</script>
<style lang="less">
    @import '../../assets/less/common.less';
    .scale {
        width: 200px;
        height: 300px;
        background-color: blue;
    }
</style>

