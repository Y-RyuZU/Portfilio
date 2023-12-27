<script setup lang="ts">
import NamePlate from "@/assets/images/other/name_plate.svg";
import ryuzu from "@/assets/images/other/ryuzu.png";
import {VAvatar, VCol} from "vuetify/components";

</script>

<template>
    <v-container width="60vw">
        <v-row no-gutters>
            <v-col cols="6" class="d-flex justify-center align-center">
                <div class="d-flex h-full aspect-1 relative">
                    <img :src="ryuzu" height="75%" class="absolute bottom-0 left-0 z-[2]"/>
                    <v-avatar color="surface-variant" size="100%" class="absolute z-[1] ml-24"/>
                </div>
            </v-col>
            <v-col cols="6">
                <v-row no-gutters align="center" justify="start" class="mb-4">
                    <v-col class="px-1" cols="auto">
                        <v-icon size="large">mdi-close</v-icon>
                    </v-col>
                    <v-col class="px-1" cols="auto">
                        <v-icon size="large">mdi-heart</v-icon>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col class="text-left">
                        <div class="d-flex justify-start mb-8">
                            <v-img width="60%" :src="NamePlate"/>
                        </div>
                        <div class="text-h4 mb-4">または「RyuZU」</div>
                        <div class="text-body-2">あなたが書きたいテキスト</div>
                        <div class="text-body-2">さらにテキスト</div>
                        <div class="text-body-2">最後のテキスト</div>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped lang="scss">
</style>