<template>
  <div class="rmgedanfeli">
    <div class="title">用户列表</div>
    <tr class="big">
      <td
        class="item"
        v-for="user in searchData.SongData.userprofiles"
        :key="user.userId"
      >
        <div class="left">
          <img :src="user.avatarUrl" @click="toUser(user.userId)" />
          <div class="name">
            <span>
              <a style="padding-right: 0.35vw" @click="toUser(user.userId)">{{
                user.nickname
              }}</a>
              <img :src="user.avatarDetail?.identityIconUrl" />
              <Icon
                v-if="user.gender == 1"
                icon="ant-design:man-outlined"
                width="16"
                height="16"
                style="color: #0ac2ff"
              /><Icon
                v-if="!user.gender == 1"
                icon="ant-design:woman-outlined"
                width="16"
                height="16"
                style="color: #ff0aeb"
              />
            </span>
            <span class="signature">{{ user.signature }}</span>
          </div>
        </div>
        <div class="right">
          <button :disabled="user.followed" @click="isFollow(user.userId)">
            {{ user.followed ? "已关注" : "关注" }}
          </button>
          <span>歌单：{{ user.playlistCount }}</span>
          <span style="width: 10.42vw; margin-right: 0.69vw"
            >粉丝：{{ user.followeds }}</span
          >
        </div>
      </td>
      <el-pagination
        v-if="pagination.total > 30"
        background
        layout="prev, pager, next"
        :page-size="pagination.pageSize"
        :total="parseInt(pagination.total)"
        :current-page="currentPage"
        @current-change="paginationChange"
      />
    </tr>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { reqFollow } from "@/api/SignIn";
import router from "@/router/index";
import { Icon } from "@iconify/vue";

const props = defineProps({
  searchData: Object,
  pagination: Object,
});

let currentPage = ref(1);

const emit = defineEmits(["paginationChange"]);

// 分页点击
function paginationChange(val) {
  currentPage.value = val;
  emit("paginationChange", val);
}

// 跳转用户界面
function toUser(userId) {
  router.push({
    name: "UserHome",
    params: { userId: userId },
  });
}
console.log(props.searchData);

// 是否关注
async function isFollow(id) {
  try {
    await reqFollow(id, 1);
    let item = props.searchData.SongData.userprofiles.find(
      (i) => i.userId === id
    );
    item.followed = true;
  } catch (error) {
    console.log("reqFollow", error);
  }
}
</script>

<style lang="less" scoped>
.ppp {
  width: 13.89vw;
  height: 13.89vw;
  display: flex;
}

.rmgedanfeli {
  width: 83.33vw;

  .title {
    margin: 0.69vw 3.47vw;
    font-size: 1.6vw;
    padding-bottom: 0.69vw;
    border-bottom: 0.21vw solid #d63434;
  }

  .big {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .item {
    display: flex;
    flex-wrap: wrap;
    width: 75vw;
    margin-top: 0.69vw;
    margin-left: 1.74vw;
    padding-bottom: 1.39vw;
    justify-content: space-between;
    border-bottom: 0.07vw dashed black;

    .left {
      display: flex;

      img {
        width: 4.86vw;
        height: 4.86vw;
        cursor: pointer;
      }

      .name {
        margin-left: 0.69vw;
        padding-top: 0.69vw;
        display: flex;
        flex-direction: column;

        img {
          width: 1.39vw;
          height: 1.39vw;
        }

        a {
          cursor: pointer;

          &:hover {
            border-bottom: 0.07vw solid black;
          }
        }

        .icon {
          width: 1.39vw;
          height: 1.39vw;
          padding-left: 0.35vw;
          margin-bottom: 0.49vw;
        }

        .signature {
          padding-top: 0.35vw;
          font-size: 0.9vw;
          font-weight: 100;
          color: gray;
          cursor: pointer;
          white-space: nowrap;
          /* 防止换行 */
          overflow: hidden;
          /* 隐藏超出部分 */
          text-overflow: ellipsis;
          /* 显示省略号 */
          max-width: 34.72vw;
          /* 设置最大宽度，可以根据需要调整 */
        }
      }
    }

    .right {
      display: flex;
      align-items: center;

      button {
        width: 4.17vw;
        height: 1.74vw;
        margin-right: 3.47vw;
      }

      span {
        width: 6.94vw;
        height: 1.74vw;
        margin-right: 3.47vw;
        color: gray;
      }
    }
  }
}
</style>
