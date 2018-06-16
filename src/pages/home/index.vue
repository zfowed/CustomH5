<template>
  <div class="customize">
    <div class="header">
      <div class="title">
        <font-awesome-icon icon="home" /> H5定制工具
      </div>
      <div class="subtitle">
        <small>V1.00</small>
      </div>
    </div>
    <div class="main">
      <div class="container">
        <router-link to="/project/create" class="box plus">
          <div class="box__title">
            <font-awesome-icon icon="plus"/>
          </div>
          <div class="box__content">
            <div class="box__content__title">
              <small>添加页面</small>
            </div>
            <div class="box__content__subtitle">
              <small>添加、修改页面</small>
            </div>
          </div>
        </router-link>
        <router-link to="/project" class="box list">
          <div class="box__title">
            <font-awesome-icon icon="clipboard-list" />
          </div>
          <div class="box__content">
            <div class="box__content__title">
              <small>页面列表</small>
            </div>
            <div class="box__content__subtitle">
              <small>查看页面列表</small>
            </div>
          </div>
        </router-link>
        <router-link to="/component" class="box components">
          <div class="box__title">
            <font-awesome-icon icon="window-restore" />
          </div>
          <div class="box__content">
            <div class="box__content__title">
              <small>组件页面</small>
            </div>
            <div class="box__content__subtitle">
              <small>添加、查看、编辑组件</small>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <div class="footer">
      <div class="box">
        <div class="icon_btn">
          <span>切换用户</span>
          <font-awesome-icon icon="plus"></font-awesome-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  // data() {

  // },
  // created() {

  // },
  // destroyed() {

  // },
};
</script>

<style lang="scss" scoped>
  .customize{
    max-width: 670px;
    height: 100%;
    margin: auto;
    padding: 0 10px;
    box-sizing: border-box;

    .header {
      width: 100%;
      padding: 10px 0;
      text-align: center;

      .title {
        font-size: 28px;
        margin-bottom: 15px;
      }
      .subtitle {
        color: #bfbcbf;
      }
    }

    .main {
      width: 100%;
      padding: 10px 0;

        .container {
          width: 100%;
          height: 300px;
          margin: auto;

          a {
            text-decoration: none;
          }
          .box {
            height: 180px;
            width: 32.333333%;
            color: #ffffff;
            padding: 15px;
            border-radius: 5px;
            float: left;
            margin-right: 1.5%;
            display: block;
            box-sizing: border-box;
            .box__title {
              width: 100%;
              height: 70%;
              font-size: 24px;
              color: #ffffff;
            }

            .box__content {
              width: 100%;
              height: 30%;

              &__title {
                width: 100%;
                margin-bottom: 10px;
                color: #ffffff;
              }

              &__subtitle {
                width: 100%;
                margin-bottom: 10px;
                overflow: hidden;
                white-space: nowrap;
              }
            }
            &:nth-child(3) {
              margin-right: 0;
            }
          }
          .plus {
            background-color: #605ab1;
            color: #9e9ace
          }
          .list {
            background-color: #ffae37;
            color: #e88a00;
          }
          .components {
            background-color: #44c1ff;
            color: #00a9ff;
          }
        }
    }
    .footer {
      width: 100%;
      height: 60px;
      border-top: 1px solid #f1f1f1;

      .box {
        cursor: pointer;
        width: 100px;
        padding: 21px 0;
        margin-right: 10px;
        float: right;

        .icon_btn {

          span {
            margin-right: 10px;
          }
        }
      }
    }

    @media screen and (min-width: 481px) and (max-width: 499px) {
      .main {
          .container {
            .box {
              .box__content {
                &__subtitle {
                  font-size: 14px;
                }
              }
            }
          }
      }
    }

    @media screen and (max-width: 480px) {
      .main {
        .container {
          height: 100%;
          .box {
            width: 100%;
            margin: 0 auto 15px;
            float: none;
            &:nth-child(3) {
              margin-right: auto;
            }
          }
        }
      }
    }

  }
</style>
