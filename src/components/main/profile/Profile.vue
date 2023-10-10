<script setup lang="ts">
import ProfileHeader from "@/components/main/profile/ProfileHeader.vue";
import ProfileBody from "@/components/main/profile/ProfileBody.vue";
import ProfileSkills from "@/components/main/profile/ProfileSkills.vue";
</script>

<template>
<!--    <v-container fluid>-->
        <v-row no-gutters class="ba-0">
            <v-col>
                <ProfileHeader/>
            </v-col>
        </v-row>

        <v-row no-gutters class="ba-0">
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
.body {
    padding: 0;
    margin: 0;
}
.header {
    padding: 0;
    margin: 0;
}
</style>