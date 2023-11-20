<script setup lang="ts">
import hotbarMenu from "@/assets/images/gui/hotbar-menu.png";
import hotbar from "@/assets/images/gui/hotbar.png";
import selector from "@/assets/images/gui/selector.png";
import {onMounted, ref} from 'vue';

const selected = ref<boolean>(false);
const onClick = () => {
    selected.value = !selected.value;
}
</script>

<template>
    <v-row no-gutters>
        <v-col class="d-flex justify-end">
            <div>
                <v-img :src="hotbarMenu" height="8rem" width="8rem" contain class="pixelated" @click="onClick" v-if="!selected"/>
                <v-img :src="hotbar" width="8rem" contain class="pixelated" @click="onClick" v-else/>
            </div>
        </v-col>
    </v-row>
</template>

<style scoped lang="scss">

</style>