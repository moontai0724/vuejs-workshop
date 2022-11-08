<template>
  <div
    ref="modalRef"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="modal-title"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            {{ currentAction?.title }}
          </h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
            @click="closeModal"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div
            class="alert alert-danger text-center"
            role="alert"
            v-if="!!currentAction?.alert"
          >
            {{ currentAction?.alert }}
          </div>
          <form>
            <div class="form-group">
              <label for="author" class="col-form-label">姓名：</label>
              <input
                ref="authorRef"
                type="text"
                class="form-control"
                name="author"
                required
                :value="author"
                :disabled="action === 'remove'"
              />
            </div>
            <div class="form-group">
              <label for="content" class="col-form-label">訊息內容：</label>
              <textarea
                ref="contentRef"
                class="form-control"
                name="content"
                required
                :value="content"
                :disabled="action === 'remove'"
              ></textarea>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="reset" class="btn btn-secondary" @click="closeModal">
            取消
          </button>
          <button type="submit" class="btn btn-success" @click="submit">
            送出
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from "vue";
import * as Bootstrap from "bootstrap";

const modalRef = ref(null);
let modal;
onMounted(() => {
  modal = new Bootstrap.Modal(modalRef.value, {
    backdrop: "static",
  });
});

const emit = defineEmits(["close", "submit"]);

const authorRef = ref(null);
const contentRef = ref(null);

function submit() {
  emit("submit", {
    author: authorRef.value.value,
    time: new Date().toISOString(),
    content: contentRef.value.value,
  });
  modal.hide();
}

function closeModal() {
  modal.hide();
  emit("close");
}

const actions = {
  create: {
    title: "新增留言",
    alert: undefined,
  },
  update: {
    title: "編輯留言",
    alert: undefined,
  },
  remove: {
    title: "刪除留言",
    alert: "一旦刪除將無法復原！",
  },
};

const props = defineProps({
  /** available actions: "create", "update", "remove" */
  action: {
    type: String,
    required: false,
  },
  author: {
    type: String,
    required: false,
  },
  content: {
    type: String,
    required: false,
  },
});

watch(props, (props) => {
  if (props.action) {
    modal.show();
  } else {
    modal.hide();
  }
});

const currentAction = computed(() => actions[props.action]);
</script>
