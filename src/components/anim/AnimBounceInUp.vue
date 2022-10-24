<template>
    <div :class="animBounceInUp" class="anim">
        <slot></slot>
    </div>
</template>

<script setup>
import {animBounceInUp} from "@/assets/anim";

</script>

<style scoped lang="scss">
.anim{
  height: 100%;
}
</style>