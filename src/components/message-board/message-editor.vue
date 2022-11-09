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
          <h5 class="modal-title" id="modal-title">
            <template v-if="action === 'create'">新增留言</template>
            <template v-else-if="action === 'edit'">編輯留言</template>
            <template v-else-if="action === 'remove'">
              確定要刪除該留言？
            </template>
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
            v-if="action === 'remove'"
          >
            一旦刪除將無法復原！
          </div>
          <form>
            <input type="hidden" name="id" />
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
import { onMounted, ref, watch } from "vue";
import * as Bootstrap from "bootstrap";

// action prop could be ["create", "edit", "remove"]
const props = defineProps(["action", "author", "content"]);

watch(
  () => props?.action,
  (newAction) => {
    if (newAction === "") {
      modal.hide();
    } else {
      modal.show();
    }
  }
);

let modal;
const modalRef = ref(null);

onMounted(() => {
  modal = new Bootstrap.Modal(modalRef.value);
});

const emit = defineEmits(["submit"]);

const authorRef = ref(null);
const contentRef = ref(null);

function submit() {
  console.log("submit");
  emit("submit", {
    author: authorRef.value.value,
    content: contentRef.value.value,
  });
}

function closeModal() {
  modal.hide();
}
</script>
