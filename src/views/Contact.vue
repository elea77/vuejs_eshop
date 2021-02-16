<template>
    <div>
        <TitlePage :title="myTitle"/>
        <Button :btnText="myBtnText"/>
    </div>
</template>

<script>
    import TitlePage from "../components/TitlePage";
    import Button from "../components/Button";

    export default {
        name: "Contact",
        components: {
            TitlePage,
            Button
        },
        data: function() {
            return {
                myTitle: "Page contact",
                myBtnText: "Clique sur moi"
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>