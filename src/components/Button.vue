<template>
    <div>
        <button @click="btnFunction" class="btnClass"> {{ btnText }} </button>
    </div>
</template>

<script>
export default {
    name: "Button",
    props: {
        btnText: {
            required: true,
            type: String
        },
        btnFunction: {
            type: Function,
            required: true
        },
        buttonClass: {
            type: String
        }
    }
}
</script>

<style lang="scss" scoped>
    .btnClass {
        color: white;
        background-color: black;
    }
</style>