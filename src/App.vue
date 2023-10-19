<script setup lang="ts">

import Header from "@/components/Header.vue";
import Profile from "@/components/main/profile/Profile.vue";
import Skill from "@/components/main/skill/Skill.vue";
import Timeline from "@/components/main/timeline/Timeline.vue";
</script>

<template>
    <v-app>
<!--        <Header/>-->
        <v-main>
            <v-container fluid>
                <v-row>
                    <v-col>
                        <Profile/>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <Skill/>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <Timeline/>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<style scoped lang="scss">
</style>

<style lang="scss">
.pixelated {
    image-rendering: pixelated;
}
.kufam {
    color: #404040;
    font-family: 'Kufam', sans-serif;
    font-size: 6rem;
    font-style: italic;
    font-weight: 900;
    line-height: normal;
    letter-spacing: 1rem;
}
.hiragino {
    color: #2C2C2C;
    font-family: 'Hiragino Sans',sans-serif;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0.2rem;
}
</style>
