<template>
  <div
    class="card m-2 p-3 text-center flex-grow-1 flex-shrink-1 align-items-start justify-content-center align-items-center"
  >
    <blockquote class="blockquote mb-0">
      <p class="content"></p>
      <footer class="blockquote-footer">
        <small class="text-muted">
          <span class="author" title="留言者"></span>
          ＠
          <span class="time" title="留言時間"></span>
          <a class="user-select-none action edit">
            <i class="far fa-edit"></i>
          </a>
          <a class="user-select-none action remove">
            <i class="far fa-trash-alt"></i>
          </a>
        </small>
      </footer>
    </blockquote>
  </div>
</template>

<script setup></script>

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
