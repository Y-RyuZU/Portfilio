<script setup lang="ts">
import WorkHeader from "@/components/main/work/WorkHeader.vue";
import WorkBody from "@/components/main/work/WorkBody.vue";
</script>

<template>
    <v-row no-gutters class="header ba-0">
        <v-col class="d-flex justify-center align-center">
            <WorkHeader/>
        </v-col>
    </v-row>

    <v-row no-gutters class="body ba-0">
        <v-col>
            <WorkBody/>
        </v-col>
    </v-row>
</template>

<style scoped lang="scss">
.header {
    height: 25vh;
}

.body {
    height: 75vh;
}
</style>