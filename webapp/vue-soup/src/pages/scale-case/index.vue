<template>
    <div class="scale-case">
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
    .scale-case {
        .c-box-l();
    }
</style>

