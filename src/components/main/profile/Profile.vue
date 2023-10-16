<script setup lang="ts">
import ProfileHeader from "@/components/main/profile/ProfileHeader.vue";
import ProfileBody from "@/components/main/profile/ProfileBody.vue";
import ProfileSkills from "@/components/main/profile/ProfileSkills.vue";
</script>

<template>
<!--    <v-container fluid>-->
        <v-row no-gutters class="header ba-0">
            <v-col class="d-flex justify-center align-center">
                <ProfileHeader/>
            </v-col>
        </v-row>

        <v-row no-gutters class="body ba-0">
            <v-col>
                <ProfileBody/>
            </v-col>
        </v-row>

        <v-row no-gutters>
            <v-col>
<!--                <ProfileSkills/>-->
            </v-col>
        </v-row>
<!--    </v-container>-->
</template>

<style scoped lang="scss">
.header {
    height: 25vh;
}
.body {
    height: 75vh;
}
</style>