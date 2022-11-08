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
      <MessageItem
        v-for="(message, index) in messages"
        :key="index"
        :author="message.author"
        :time="message.time"
        :content="message.content"
        @edit="openEditModal(index)"
        @remove="openRemoveModal(index)"
      ></MessageItem>
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
  <MessageEditor
    :action="editorAction"
    :author="editingAuthor"
    :content="editingContent"
    @submit="onModalSubmit"
    @close="onModalClose"
  ></MessageEditor>
</template>

<script setup>
import MessageItem from "../components/message-board/message-item.vue";
import { reactive, ref } from "vue";
import MessageEditor from "../components/message-board/message-editor.vue";
import MessageFakerService from "../services/message-faker.service.js";

const messages = reactive([]);

let editorAction = ref("");
let editingIndex = -1;
let editingAuthor = ref("");
let editingContent = ref("");

function openCreateModal() {
  editorAction.value = "create";
}

function openEditModal(index) {
  editingIndex = index;
  editingAuthor.value = messages[index].author;
  editingContent.value = messages[index].content;
  editorAction.value = "edit";
}

function openRemoveModal(index) {
  const message = messages[index];
  editingIndex = index;
  editingAuthor.value = message.author;
  editingContent.value = message.content;
  editorAction.value = "remove";
}

function onModalSubmit(modifiedMessage) {
  if (editorAction.value === "create") {
    messages.push(modifiedMessage);
  } else if (editorAction.value === "edit") {
    messages[editingIndex] = modifiedMessage;
  } else if (editorAction.value === "remove") {
    messages.splice(editingIndex, 1);
  }
  onModalClose();
}

function onModalClose() {
  editorAction.value = "";
  editingIndex = -1;
  editingAuthor.value = "";
  editingContent.value = "";
}

function generateFakeData() {
  const faker = new MessageFakerService();
  messages.push(...faker.generate(100));
}
</script>

<style scoped>
#messages:empty::before {
  text-align: center;
  content: "目前沒有任何留言！";
}
</style>
