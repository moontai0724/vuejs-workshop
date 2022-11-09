<template>
  <div class="m-3">
    <div class="d-grid gap-2">
      <button
        type="button"
        class="btn btn-outline-success btn-lg"
        @click="openCreateModal"
      >
        新增留言
      </button>
    </div>
    <div
      id="messages"
      class="d-flex flex-row flex-wrap justify-content-between text-center my-2"
    >
      <messageItemVue
        v-for="(message, index) in messages"
        :key="index"
        :content="message.content"
        :author="message.author"
        :time="message.time"
        @edit="openEditModal()"
        @remove="openRemoveModal()"
      ></messageItemVue>
    </div>
    <div class="d-grid gap-2">
      <button id="faker" type="button" class="btn btn-outline-secondary btn-lg">
        填入假資料
      </button>
    </div>
  </div>
  <!-- Modal here -->
</template>

<script setup>
import messageItemVue from "../components/message-board/message-item.vue";

const messages = [
  {
    author: "author",
    time: new Date().toISOString(),
    content: "content",
  },
  {
    author: "author",
    time: new Date().toISOString(),
    content: "content",
  },
  {
    author: "author",
    time: new Date().toISOString(),
    content: "content",
  },
  {
    author: "author",
    time: new Date().toISOString(),
    content: "content",
  },
  {
    author: "author",
    time: new Date().toISOString(),
    content: "content",
  },
];

function openEditModal() {
  console.log("openEditModal");
}

function openRemoveModal() {
  console.log("openRemoveModal");
}
</script>

<style scoped>
#messages:empty::before {
  text-align: center;
  content: "目前沒有任何留言！";
}
</style>
