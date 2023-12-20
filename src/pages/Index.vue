<script setup lang="ts">
import Profile from "@/components/main/profile/Profile.vue";
import Skill from "@/components/main/skill/Skill.vue";
import Timeline from "@/components/main/timeline/Timeline.vue";
import Work from "@/components/main/work/Work.vue";
</script>

<template>
    <v-row>
        <v-col>
            <Profile />
        </v-col>
    </v-row>
    <v-row>
        <v-col>
            <Skill />
        </v-col>
    </v-row>
    <v-row>
        <v-col>
            <Work />
        </v-col>
    </v-row>
    <v-row>
        <v-col>
            <Timeline />
        </v-col>
    </v-row>
</template>

<style scoped lang="scss"></style>

<style lang="scss"></style>
