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
        @edit="openEditModal(index)"
        @remove="openRemoveModal(index)"
      ></messageItemVue>
    </div>
    <div class="d-grid gap-2">
      <button
        id="faker"
        type="button"
        class="btn btn-outline-secondary btn-lg"
        @click="generateFakeData"
      >
        填入假資料
      </button>
    </div>
  </div>
  <messageEditorVue
    :action="action"
    :author="editing?.author"
    :content="editing?.content"
    @submit="onModalSubmit"
  ></messageEditorVue>
</template>

<script setup>
import messageItemVue from "../components/message-board/message-item.vue";
import messageEditorVue from "../components/message-board/message-editor.vue";
import MessageFakerService from "../services/message-faker.service";
import { reactive, ref } from "vue";

let messages = reactive([
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
]);

const action = ref("");
const currentIndex = ref(-1);
const editing = ref(null);

function onModalSubmit(modifiedMessage) {
  console.log("onModalSubmit", modifiedMessage);
  if (action.value === "create") {
    messages.push({ ...modifiedMessage, time: new Date().toISOString() });
  } else if (action.value === "edit") {
    editing.value.time = new Date().toISOString();
    editing.value.author = modifiedMessage.author;
    editing.value.content = modifiedMessage.content;
  } else if (action.value === "remove") {
    messages.splice(currentIndex.value, 1);
  }
  action.value = "";
  currentIndex.value = -1;
  editing.value = null;
}

function openCreateModal() {
  console.log("openCreateModal");
  editing.value = null;
  action.value = "create";
}

function openEditModal(index) {
  console.log("openEditModal");
  currentIndex.value = index;
  editing.value = messages[index];
  action.value = "edit";
}

function openRemoveModal(index) {
  console.log("openRemoveModal");
  currentIndex.value = index;
  editing.value = messages[index];
  action.value = "remove";
}

function generateFakeData() {
  console.log("generateFakeData");
  const faker = new MessageFakerService();
  const generated = faker.generate();
  messages.push(...generated);
}
</script>

<style scoped>
#messages:empty::before {
  text-align: center;
  content: "目前沒有任何留言！";
}
</style>
