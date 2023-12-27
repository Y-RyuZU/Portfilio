<script setup lang="ts">
import ProfileHeader from "@/components/main/profile/ProfileHeader.vue";
import ProfileBody from "@/components/main/profile/ProfileBody.vue";
</script>

<template>
    <v-row no-gutters class="h-[25vh] ba-0">
        <v-col class="d-flex justify-center align-center">
            <ProfileHeader/>
        </v-col>
    </v-row>

    <v-row no-gutters class="h-[50vh] ba-0">
        <v-col>
            <ProfileBody/>
        </v-col>
    </v-row>
</template>

<style scoped lang="scss">
</style>