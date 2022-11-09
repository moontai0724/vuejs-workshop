<template>
  <div
    class="card m-2 p-3 text-center flex-grow-1 flex-shrink-1 align-items-start justify-content-center align-items-center"
  >
    <blockquote class="blockquote mb-0">
      <p class="content">{{ content }}</p>
      <footer class="blockquote-footer">
        <small class="text-muted">
          <span class="author" title="留言者">{{ author }}</span>
          ＠
          <span class="time" title="留言時間">
            {{ timeString }}
          </span>
          <a class="user-select-none action edit" @click="$emit('edit')">
            <i class="far fa-edit"></i>
          </a>
          <a class="user-select-none action remove" @click="$emit('remove')">
            <i class="far fa-trash-alt"></i>
          </a>
        </small>
      </footer>
    </blockquote>
  </div>
</template>

<script setup>
import { computed, defineProps } from "vue";

const props = defineProps({
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});

const timeString = computed(() =>
  new Date(props.time).toLocaleString("zh-TW", {
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  })
);

defineEmits(["edit", "remove"]);
</script>

<style scoped>
.card p {
  max-width: 500px;
}

.action {
  cursor: pointer;
  margin: 0px 3px 0px 3px;
  color: inherit;
}

.action.edit:hover {
  color: limegreen;
}

.action.edit:active {
  color: darkgreen;
}

.action.remove:hover {
  color: red;
}

.action.remove:active {
  color: darkred;
}
</style>
