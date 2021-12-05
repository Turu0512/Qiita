<template>
  <v-row>
    <v-col v-for="(animal, index) in animals" :key="index">
      <v-list>
        <v-list-item-title> {{ animal.name }} </v-list-item-title>
        <draggable v-model="items[index]" group="item">
          <v-list-item v-for="item in items[index]" :key="item.id">
            {{ item.name }}
          </v-list-item>
        </draggable>
      </v-list>
    </v-col>
  </v-row>
</template>

<script>
import draggable from "vuedraggable";

export default {
  components: { draggable },
  data: () => ({
    items: [],
  }),

  created() {
    this.$store.commit("items");

    const items = this.$store.state.items;
    items.forEach((item) => this.items.push(item));
  },

  computed: {
    animals() {
      return this.$store.state.animals;
    },
  },
};
</script>

<style></style>
