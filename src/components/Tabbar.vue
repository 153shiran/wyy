<template>
  <div class="flex justify-around bg-white">
    <RouterLink class="tabbar" to="/">
      <Icon icon="simple-icons:neteasecloudmusic" width="40" height="40" />
      <div>发现</div>
    </RouterLink>
    <RouterLink class="tabbar" to="PodCast">
      <Icon icon="heroicons:signal-16-solid" width="40" height="40" />
      <div>播客</div>
    </RouterLink>
    <RouterLink class="tabbar" to="Mine">
      <Icon icon="maki:music" width="40" height="40" />
      <div>我的</div>
    </RouterLink>
    <RouterLink class="tabbar" to="Regard">
      <Icon icon="fa6-regular:user" width="40" height="40" />
      <div>关注</div>
    </RouterLink>
    <RouterLink class="tabbar" to="Community">
      <Icon icon="wpf:chat" width="40" height="40" />
      <div>社区</div>
    </RouterLink>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>

<style scoped>
router-link-active {
  color: red;
  filter: url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27><filter id=%27colorize%27><feColorMatrix type=%27matrix%27 values=%271 0 0 0 0.698 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0%27/></filter></svg>#colorize");
}
.tabbar {
  text-align: center;
  font-size: 3vw;
}
.router-link-exact-active:link {
  color: red;
  filter: url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27><filter id=%27colorize%27><feColorMatrix type=%27matrix%27 values=%271 0 0 0 0.698 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0%27/></filter></svg>#colorize");
}
.router-link-exact-active:checked {
  color: red;
  filter: url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27><filter id=%27colorize%27><feColorMatrix type=%27matrix%27 values=%271 0 0 0 0.698 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0%27/></filter></svg>#colorize");
}
.router-link-exact-active:focus {
  color: red;
  filter: url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27><filter id=%27colorize%27><feColorMatrix type=%27matrix%27 values=%271 0 0 0 0.698 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0%27/></filter></svg>#colorize");
}
.router-link-exact-active:hover {
  color: red;
  filter: url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27><filter id=%27colorize%27><feColorMatrix type=%27matrix%27 values=%271 0 0 0 0.698 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0%27/></filter></svg>#colorize");
}
</style>
