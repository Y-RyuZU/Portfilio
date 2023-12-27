<script setup lang="ts">
import WorkHeader from "@/components/main/work/WorkHeader.vue";
import WorkBody from "@/components/main/work/WorkBody.vue";
</script>

<template>
    <v-row no-gutters class="h-[25vh] ba-0">
        <v-col class="d-flex justify-center align-center">
            <WorkHeader/>
        </v-col>
    </v-row>

    <v-row no-gutters class="h-[75vh] ba-0">
        <v-col>
            <WorkBody/>
        </v-col>
    </v-row>
</template>

<style scoped lang="scss">
</style>