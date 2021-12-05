<template>
  <v-row>
    <v-col>
      <v-list>
        <v-list-item-title> アンパンヘッドボーイ </v-list-item-title>
        <draggable v-model="item1" group="item">
          <v-list-item v-for="item in item1" :key="item.id">
            {{ item.name }}
          </v-list-item>
        </draggable>
      </v-list>
    </v-col>
    <animals />
  </v-row>
</template>

<script>
import draggable from "vuedraggable";
import animals from "~/components/animals.vue";

export default {
  components: { draggable, animals },

  data: () => ({
    item1: [
      { id: 1, name: "アンパン1" },
      { id: 2, name: "アンパン2" },
      { id: 3, name: "アンパン3" },
    ],
  }),
};
</script>
