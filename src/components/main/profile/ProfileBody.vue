<script setup lang="ts">

</script>

<template>
    <v-container fluid>
        <v-row no-gutters>
            <v-col cols="2"/>
            <v-col cols="5">
                <v-avatar size="300">
                    <v-img src="public/other/icon.svg"></v-img>
                </v-avatar>
            </v-col>
            <v-col cols="5">
                <v-row no-gutters align="center" justify="space-between" class="mb-3">
                    <v-col class="px-4" cols="auto">
                        <v-icon size="24px">mdi-close</v-icon>
                    </v-col>
                    <v-col class="px-4" cols="auto">
                        <v-icon size="24px">mdi-heart</v-icon>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col class="text-center">
                        <h1 class="name-row">KATAYAMA ATSUKI</h1>
                        <p class="name-row">あなたが書きたいテキスト</p>
                        <p class="name-row">さらにテキスト</p>
                        <p class="name-row">最後のテキスト</p>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped lang="scss">
</style>