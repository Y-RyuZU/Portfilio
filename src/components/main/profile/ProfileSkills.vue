<script setup lang="ts">

</script>

<template>
    <v-container fluid>
        <v-row class="profile-header">
            <v-col cols="4" class="d-flex align-center">
                <v-img size="20" src="public/other/gear_iron.svg"></v-img>
            </v-col>
            <v-col cols="4" class="text-center">
                <h2>PROFILE</h2>
            </v-col>
        </v-row>

        <v-row class="profile-content">
            <v-col cols="4">
                <v-avatar size="200">
                    <v-img src="public/other/icon.svg"></v-img>
                </v-avatar>
            </v-col>
            <v-col cols="8" class="profile-info">
                <div class="text-h3">KATAYAMA ATSUKI</div>
                <div class="text-body-1">あなたが書きたいテキスト</div>
                <div class="text-body-1">さらにテキスト</div>
                <div class="text-body-1">最後のテキスト</div>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped lang="scss">
.profile-header {
    align-items: center;
    max-height: 2em;
}

.profile-content {
    margin-top: 20px;
}

.profile-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

h3 {
    margin-bottom: 20px;
}

.profile-header {
    align-items: center;
}
</style>