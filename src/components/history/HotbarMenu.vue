<script setup lang="ts">
import hotbar from "@/assets/images/gui/hotbar-menu.png";
import selector from "@/assets/images/gui/selector.png";
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import pickaxe from "@/assets/images/minecraft/item/diamond_pickaxe.png"
import diamond from "@/assets/images/minecraft/item/diamond.png"
import torch from "@/assets/images/minecraft/block/torch.png"

const router = useRouter();

const selected = ref<boolean>(false);
const onClick = () => {
    selected.value = !selected.value;
}

const items = ref<(string | null)[]>([
    pickaxe,
    torch,
    diamond,
    pickaxe,
    pickaxe,
    pickaxe,
    pickaxe,
    pickaxe,
    null
]);

const navigateToHistory = () => {
    router.push({ name: '/History' });
};

const navigateToIndex = () => {
    router.push({ name: '/Index' });
};

const slotFunctions = ref<(Function | null)[]>([
    navigateToHistory,
    navigateToIndex,
    null,
    null,
    null,
    null,
    null,
    null,
    null
]);
</script>


<template>
    <v-row no-gutters>
        <v-col class="d-flex justify-end">
            <div>
                <div v-if="!selected" class="h-24 w-24">
                    <v-img :src="hotbar" contain class="pixelated" @click="onClick" />
                </div>
                <div v-else>
                    <v-hover v-slot="{ isHovering, props }" v-for="i in 9" :key="i">
                        <div v-bind="props" class="relative h-24 w-24">
                            <v-img :src="isHovering ? selector : hotbar" height="100%" width="100%" contain
                                class="pixelated absolute" @click="slotFunctions[i - 1]" />
                            <v-img :src="items[i - 1] || ''" height="70%" width="70%" contain
                                class="pixelated absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                                v-if="items[i - 1]" />
                        </div>
                    </v-hover>
                </div>
            </div>
        </v-col>
    </v-row>
</template>

<style scoped lang="scss"></style>