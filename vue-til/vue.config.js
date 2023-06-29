const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    client: {
      overlay: false,
    },
  },
});
//   devServer: {
//   overlay: false,
//   // 서버가 돌아갈때 화면을 덮는 오버레이를 즉, 웹팩 데브 서버를 끔.
// }, // 수업에서 사용한 코드 이지만 오버레이라는 속성이 devServer.client 에 있는것으로 변경이 된것 같아보인다 ==>  vue cli docs => webpack docs참고
// 이렇게 넣어주면 서버 상의 eslint에러는 여전하지만, 화면에 띄우지 않기에 계속 작업 진행이 가능하다.ㄴ
