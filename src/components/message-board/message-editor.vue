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
          <h5 class="modal-title" id="modal-title">Modal 標題</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="alert alert-danger text-center" role="alert">
            警告內容
          </div>
          <form>
            <input type="hidden" name="id" />
            <div class="form-group">
              <label for="author" class="col-form-label">姓名：</label>
              <input type="text" class="form-control" name="author" required />
            </div>
            <div class="form-group">
              <label for="content" class="col-form-label">訊息內容：</label>
              <textarea class="form-control" name="content" required></textarea>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="reset" class="btn btn-secondary">取消</button>
          <button type="submit" class="btn btn-success">送出</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
