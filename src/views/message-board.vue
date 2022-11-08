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
      <!-- Messages here -->
    </div>
    <div class="d-grid gap-2">
      <button id="faker" type="button" class="btn btn-outline-secondary btn-lg">
        填入假資料
      </button>
    </div>
  </div>
  <!-- Modal here -->
</template>

<script setup></script>

<style scoped>
#messages:empty::before {
  text-align: center;
  content: "目前沒有任何留言！";
}
</style>
