<template>
  <div class="about">
    <TitlePage title="About"/>
    <Button btnText="Clique sur moi"/>
  </div>
</template>

<script>
  import TitlePage from "../components/TitlePage";
  import Button from "../components/Button";

  export default {
    name: "About",
    components: {
      TitlePage,
      Button
    }
  }
</script>