<template>
    <div>
    </div>
</template>
<script>
export default{
    created(){
        this.logout();
    },
    methods: {
        logout(){
            this.$store.dispatch('user/logout');
        }
    }
}
</script>