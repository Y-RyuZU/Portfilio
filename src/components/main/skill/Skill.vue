<script setup lang="ts">
import SkillHeader from "@/components/main/skill/SkillHeader.vue";
import SkillBody from "@/components/main/skill/SkillBody.vue";
</script>

<template>
    <v-row no-gutters class="header ba-0">
        <v-col class="d-flex justify-center align-center">
            <SkillHeader/>
        </v-col>
    </v-row>

    <v-row no-gutters class="body ba-0">
        <v-col>
            <SkillBody/>
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