<script setup lang="ts">

</script>

<template>
    <v-container fluid>
        <v-row no-gutters>
            <v-col cols="2"/>
            <v-col cols="4" class="d-flex justify-center">
                <v-avatar size="100%">
                    <v-img src="public/other/icon.svg"></v-img>
                </v-avatar>
            </v-col>
            <v-col cols="6">
                <v-row no-gutters align="center" justify="start" class="mb-4">
                    <v-col class="px-1" cols="auto">
                        <v-icon size="3vh">mdi-close</v-icon>
                    </v-col>
                    <v-col class="px-1" cols="auto">
                        <v-icon size="3vh">mdi-heart</v-icon>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col class="text-center">
                        <div class="text-h2">KATAYAMA</div>
                        <div class="text-h2">ATSUKI</div>
                        <div class="text-subtitle-1">あなたが書きたいテキスト</div>
                        <div class="text-subtitle-1">さらにテキスト</div>
                        <div class="text-subtitle-1">最後のテキスト</div>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped lang="scss">
</style>