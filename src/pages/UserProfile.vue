<template>
  <q-page class="q-pa-sm">
    <div class="row q-col-gutter-sm">
      <!-- <div class="col-lg-8 col-md-8 col-xs-12 col-sm-12"> -->
      <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12">
        <q-card class="card-bg" bordered>
          <q-card-section class="text-h6">
            <div class="text-h6">Chỉnh sửa thông tin</div>
            <div class="text-subtitle2">Profile của bạn</div>
          </q-card-section>
          <q-card-section class="q-pa-sm">
            <q-list class="row">
              <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <q-item-section side>
                  <q-avatar size="100px">
                    <img src="/tung.png" />
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-btn
                    label="Đổi ảnh"
                    class="text-capitalize"
                    rounded
                    color="primary"
                    style="max-width: 120px"
                  ></q-btn>
                </q-item-section>
              </q-item>

              <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-item-section>
                  <!-- <q-input dark color="white" dense v-model="user_details.user_name" label="User Name"/> -->
                  <q-input
                    v-model="user_details.phone_number"
                    label="Phone number"
                  />
                </q-item-section>
              </q-item>
              <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-input v-model="user_details.email" label="Email Address" />
                </q-item-section>
              </q-item>
              <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-input
                    v-model="user_details.first_name"
                    label="First Name"
                  />
                </q-item-section>
              </q-item>
              <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-input v-model="user_details.last_name" label="Last Name" />
                </q-item-section>
              </q-item>
              <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-input
                    autogrow
                    v-model="user_details.address"
                    label="Address"
                  />
                </q-item-section>
              </q-item>
              <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-input v-model="user_details.city" label="City" />
                </q-item-section>
              </q-item>
              <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-input
                    v-model="user_details.post_code"
                    label="Postal Code"
                  />
                </q-item-section>
              </q-item>
              <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-input
                    type="textarea"
                    v-model="user_details.about"
                    label="About"
                  />
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn class="text-capitalize bg-primary text-white"
              >Cập nhật thông tin</q-btn
            >
          </q-card-actions>
        </q-card>
      </div>
      <!-- <div class="col-lg-4 col-md-4 col-xs-12 col-sm-12">
        <q-card class="card-bg text-white no-shadow" bordered>
          <q-card-section class="text-center bg-transparent">
            <q-avatar size="100px" class="shadow-10">
              <img src="profile.svg" />
            </q-avatar>
            <div class="text-subtitle2 q-mt-lg">by Pratik Patel</div>
            <div class="text-h6 q-mt-md">Pratik Patel</div>
          </q-card-section>
          <q-card-section>
            <div class="text-body2 text-justify">
              My name is Pratik Patel (also known as @pratik227). I noticed
              myself pulling into programming since 2013, and then determined
              myself to become a skilled and knowledgeable programmer. My
              passion for my programming increases as I started working for
              Incentius (where I am currently working in).
            </div>
          </q-card-section>
        </q-card>
      </div> -->

      <!-- <div class="col-lg-8 col-md-8 col-xs-12 col-sm-12"> -->
      <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12">
        <q-card class="card-bg" bordered>
          <q-card-section class="text-h6 q-pa-sm">
            <div class="text-h6">Đổi mật khẩu</div>
          </q-card-section>
          <q-card-section class="q-pa-sm row">
            <q-item class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <q-item-section> Mật khẩu hiện tại </q-item-section>
            </q-item>
            <q-item class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <q-item-section>
                <q-input
                  type="password"
                  outlined
                  color="white"
                  round
                  v-model="password_dict.current_password"
                  label="Current Password"
                />
              </q-item-section>
            </q-item>
            <q-item class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <q-item-section> Mật khẩu mới </q-item-section>
            </q-item>
            <q-item class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <q-item-section>
                <q-input
                  type="password"
                  outlined
                  color="white"
                  round
                  v-model="password_dict.new_password"
                  label="New Password"
                />
              </q-item-section>
            </q-item>
            <q-item class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <q-item-section> Xác nhận mật khẩu mới </q-item-section>
            </q-item>
            <q-item class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <q-item-section>
                <q-input
                  type="password"
                  outlined
                  round
                  color="white"
                  v-model="password_dict.confirm_new_password"
                  label="Confirm New Password"
                />
              </q-item-section>
            </q-item>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn class="text-capitalize bg-primary text-white">
              Thay đổi mật khẩu
            </q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "UserProfile",
  setup() {
    return {
      user_details: {
        phone_number: "0985589335",
        email: "tunghs@hactech.edu.vn",
        first_name: "Tùng",
        last_name: "Hồ",
        address: "Số 37 ngõ 162 phố Đội Cấn",
        city: "Hà Nội",
        post_code: "100000",
        about: "Giảng viên khoa Công nghệ thông tin",
      },
      password_dict: {},
    };
  },
});
</script>

<style scoped>
.card-bg {
  /* background-color: #162b4d; */
}
</style>
